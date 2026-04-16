import { Button } from "@kakikyo-lp/ui/components/button";
import { Input } from "@kakikyo-lp/ui/components/input";
import { cn } from "@kakikyo-lp/ui/lib/utils";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { chat, type ChatMessage as ApiMessage } from "../../server/chat";
import ChatMessage from "./chat-message";

type DisplayMessage = { role: "user" | "model"; text: string } | { role: "error"; text: string };

const WELCOME: DisplayMessage = {
  role: "model",
  text: "かき恭へようこそ。営業時間、ご予約、コース、アクセスなどお気軽にお尋ねくださいませ。",
};

const MAX_INPUT_CHARS = 500;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      const result = await chat({ data: { messages: apiHistory } });
      if (result.ok) {
        setMessages((prev) => [...prev, { role: "model", text: result.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "error", text: result.error }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "error",
          text: "通信に失敗しました。しばらくしてから再度お試しくださいませ。",
        },
      ]);
    } finally {
      setPending(false);
    }
  }

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
        aria-label="かき恭 お問い合わせチャット"
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-border bg-sumi px-4 py-3 text-background">
          <div>
            <p className="font-serif-jp text-[0.95rem] tracking-[0.2em]">かき恭 ご案内</p>
            <p className="mt-0.5 text-[0.65rem] tracking-[0.25em] text-background/60 uppercase">
              AI Concierge
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(false)}
            aria-label="チャットを閉じる"
            className="text-background hover:bg-background/10 hover:text-background"
          >
            <X />
          </Button>
        </header>

        <div
          ref={scrollRef}
          className="flex flex-1 flex-col gap-3 overflow-y-auto bg-washi px-4 py-4"
        >
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} text={m.text} />
          ))}
          {pending && (
            <div className="flex justify-start">
              <div className="bg-washi-dark px-3.5 py-2.5 font-serif-jp text-[0.82rem] tracking-wide text-muted-foreground">
                …お答えを考えております
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
            placeholder="ご質問をどうぞ"
            maxLength={MAX_INPUT_CHARS}
            disabled={pending}
            aria-label="メッセージ入力"
            className="h-9"
          />
          <Button
            type="submit"
            size="icon"
            disabled={pending || !input.trim()}
            aria-label="送信"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Send />
          </Button>
        </form>

        <p className="border-t border-border bg-background px-3 py-2 text-center text-[0.65rem] tracking-wider text-muted-foreground">
          ご予約は {""}
          <a
            href="tel:0776-23-0595"
            className="underline-offset-2 hover:text-accent hover:underline"
          >
            0776-23-0595
          </a>
          {""} まで
        </p>
      </div>

      {/* Floating open button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="チャットを開く"
          className="pointer-events-auto absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:right-6 md:bottom-6"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
