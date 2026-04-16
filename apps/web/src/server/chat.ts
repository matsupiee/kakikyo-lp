import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

import { SYSTEM_PROMPTS } from "../components/chatbot/system-prompt";
import { DEFAULT_LOCALE, isLocale, type Locale } from "../i18n/index";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const MAX_INPUT_CHARS = 500;
const MAX_HISTORY = 12;

export type ChatRole = "user" | "model";

export type ChatMessage = {
  role: ChatRole;
  text: string;
};

export type ChatErrorCode =
  | "configMissing"
  | "network"
  | "rateLimited"
  | "generationFailed"
  | "safetyBlocked"
  | "invalidRequest";

type ChatRequest = {
  messages: ChatMessage[];
  locale: Locale;
};

type GeminiResponse = {
  candidates?: {
    content?: {
      parts?: { text?: string }[];
    };
  }[];
  promptFeedback?: { blockReason?: string };
};

function validate(data: unknown): ChatRequest {
  if (!data || typeof data !== "object") throw new Error("invalid_request");
  const { messages, locale } = data as { messages?: unknown; locale?: unknown };
  if (!Array.isArray(messages) || messages.length === 0) throw new Error("invalid_request");

  const trimmed: ChatMessage[] = messages.slice(-MAX_HISTORY).map((m) => {
    if (!m || typeof m !== "object") throw new Error("invalid_message");
    const { role, text } = m as { role?: unknown; text?: unknown };
    if (role !== "user" && role !== "model") throw new Error("invalid_role");
    if (typeof text !== "string") throw new Error("invalid_text");
    const clean = text.trim();
    if (!clean) throw new Error("empty_text");
    if (clean.length > MAX_INPUT_CHARS) throw new Error("too_long");
    return { role, text: clean };
  });

  if (trimmed[trimmed.length - 1]?.role !== "user") throw new Error("last_must_be_user");
  const resolvedLocale: Locale =
    typeof locale === "string" && isLocale(locale) ? locale : DEFAULT_LOCALE;
  return { messages: trimmed, locale: resolvedLocale };
}

export const chat = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, errorCode: "configMissing" as ChatErrorCode };
    }

    const body = {
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPTS[data.locale] }],
      },
      contents: data.messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      })),
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 512,
      },
    };

    let response: Response;
    try {
      response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch {
      return { ok: false as const, errorCode: "network" as ChatErrorCode };
    }

    if (!response.ok) {
      return {
        ok: false as const,
        errorCode: (response.status === 429 ? "rateLimited" : "generationFailed") as ChatErrorCode,
      };
    }

    const json = (await response.json()) as GeminiResponse;
    const text = json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";

    if (!text.trim()) {
      return {
        ok: false as const,
        errorCode: (json.promptFeedback?.blockReason === "SAFETY"
          ? "safetyBlocked"
          : "generationFailed") as ChatErrorCode,
      };
    }

    return { ok: true as const, reply: text.trim() };
  });
