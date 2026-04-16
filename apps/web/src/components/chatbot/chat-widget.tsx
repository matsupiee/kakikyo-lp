import { Button } from "@kakikyo-lp/ui/components/button";
import { Input } from "@kakikyo-lp/ui/components/input";
import { cn } from "@kakikyo-lp/ui/lib/utils";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { telHref } from "../../i18n/index";
import { useLocale, useT } from "../../i18n/provider";
import { chat, type ChatErrorCode, type ChatMessage as ApiMessage } from "../../server/chat";
import ChatMessage from "./chat-message";

type DisplayMessage =
  | { role: "user" | "model"; text: string }
  | { role: "error"; errorCode: ChatErrorCode };

const MAX_INPUT_CHARS = 500;

export default function ChatWidget() {
  const t = useT();
  const locale = useLocale();
  const welcome = useMemo<DisplayMessage>(
    () => ({ role: "model", text: t.chatbot.welcome }),
    [t.chatbot.welcome],
  );
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([welcome]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0]!.role === "model") return [welcome];
      return prev;
    });
  }, [welcome]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open, pending]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || pending) return;
    if (text.length > MAX_INPUT_CHARS) return;

    const nextMessages: DisplayMessage[] = [...messages, { role: "user", text }];
    setMessages(nextMessages);
    setInput("");
    setPending(true);

    const apiHistory: ApiMessage[] = nextMessages
      .filter((m): m is { role: "user" | "model"; text: string } => m.role !== "error")
      .map((m) => ({ role: m.role, text: m.text }));

    try {
      const result = await chat({ data: { messages: apiHistory, locale } });
      if (result.ok) {
        setMessages((prev) => [...prev, { role: "model", text: result.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "error", errorCode: result.errorCode }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "error", errorCode: "network" }]);
    } finally {
      setPending(false);
    }
  }

  const phoneTel = telHref(locale, t.contact.phoneDisplay);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Panel */}
      <div
        className={cn(
          "pointer-events-auto absolute right-4 bottom-4 flex w-[min(calc(100vw-2rem),22rem)] flex-col border border-border bg-background shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] transition-all duration-200 md:right-6 md:bottom-6",
          open
            ? "h-[min(calc(100vh-2rem),32rem)] opacity-100"
            : "pointer-events-none h-0 opacity-0",
        )}
        role="dialog"
        aria-label={t.chatbot.dialogAriaLabel}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-border bg-sumi px-4 py-3 text-background">
          <div>
            <p className="font-serif-jp text-[0.95rem] tracking-[0.2em]">{t.chatbot.headerTitle}</p>
            <p className="mt-0.5 text-[0.65rem] tracking-[0.25em] text-background/60 uppercase">
              {t.chatbot.headerSubtitle}
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(false)}
            aria-label={t.chatbot.closeAriaLabel}
            className="text-background hover:bg-background/10 hover:text-background"
          >
            <X />
          </Button>
        </header>

        <div
          ref={scrollRef}
          className="flex flex-1 flex-col gap-3 overflow-y-auto bg-washi px-4 py-4"
        >
          {messages.map((m, i) =>
            m.role === "error" ? (
              <ChatMessage key={i} role="error" text={t.chatbot.errors[m.errorCode]} />
            ) : (
              <ChatMessage key={i} role={m.role} text={m.text} />
            ),
          )}
          {pending && (
            <div className="flex justify-start">
              <div className="bg-washi-dark px-3.5 py-2.5 font-serif-jp text-[0.82rem] tracking-wide text-muted-foreground">
                {t.chatbot.thinking}
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chatbot.inputPlaceholder}
            maxLength={MAX_INPUT_CHARS}
            disabled={pending}
            aria-label={t.chatbot.inputAriaLabel}
            className="h-9"
          />
          <Button
            type="submit"
            size="icon"
            disabled={pending || !input.trim()}
            aria-label={t.chatbot.sendAriaLabel}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Send />
          </Button>
        </form>

        <p className="border-t border-border bg-background px-3 py-2 text-center text-[0.65rem] tracking-wider text-muted-foreground">
          {t.chatbot.footerReservePrefix}{" "}
          <a href={phoneTel} className="underline-offset-2 hover:text-accent hover:underline">
            {t.contact.phoneDisplay}
          </a>
          {t.chatbot.footerReserveSuffix ? ` ${t.chatbot.footerReserveSuffix}` : ""}
        </p>
      </div>

      {/* Floating open button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.chatbot.openAriaLabel}
          className="pointer-events-auto absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:right-6 md:bottom-6"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
