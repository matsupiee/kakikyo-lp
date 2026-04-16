import { cn } from "@kakikyo-lp/ui/lib/utils";

import type { ChatRole } from "../../server/chat";

type Props = {
  role: ChatRole | "error";
  text: string;
};

export default function ChatMessage({ role, text }: Props) {
  const isUser = role === "user";
  const isError = role === "error";

  return (
    <div className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-wrap rounded-sm px-3.5 py-2.5 font-serif-jp text-[0.82rem] leading-[1.8] tracking-wide",
          isUser && "bg-sumi text-background",
          !isUser && !isError && "bg-washi-dark text-foreground",
          isError && "bg-destructive/10 text-destructive",
        )}
      >
        {text}
      </div>
    </div>
  );
}
