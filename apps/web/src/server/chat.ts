import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

import { SYSTEM_PROMPT } from "../components/chatbot/system-prompt";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const MAX_INPUT_CHARS = 500;
const MAX_HISTORY = 12;

export type ChatRole = "user" | "model";

export type ChatMessage = {
  role: ChatRole;
  text: string;
};

type ChatRequest = {
  messages: ChatMessage[];
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
  const { messages } = data as { messages?: unknown };
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
  return { messages: trimmed };
}

export const chat = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        ok: false as const,
        error: "チャット機能の設定が未完了です。お電話（0776-23-0595）でお問い合わせくださいませ。",
      };
    }

    const body = {
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }],
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
      return {
        ok: false as const,
        error: "通信に失敗しました。しばらくしてから再度お試しくださいませ。",
      };
    }

    if (!response.ok) {
      return {
        ok: false as const,
        error:
          response.status === 429
            ? "ただいま混み合っております。少しお待ちいただくか、お電話（0776-23-0595）でお問い合わせくださいませ。"
            : "お返事を生成できませんでした。お手数ですが再度お試しくださいませ。",
      };
    }

    const json = (await response.json()) as GeminiResponse;
    const text = json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";

    if (!text.trim()) {
      return {
        ok: false as const,
        error:
          json.promptFeedback?.blockReason === "SAFETY"
            ? "申し訳ございませんが、そのご質問にはお答えできません。"
            : "お返事を生成できませんでした。お手数ですが再度お試しくださいませ。",
      };
    }

    return { ok: true as const, reply: text.trim() };
  });
