import { telHref } from "@/i18n/index";
import { useLocale, useT } from "@/i18n/provider";

export default function StickyCta() {
  const t = useT();
  const locale = useLocale();

  return (
    <a
      href={telHref(locale, t.contact.phoneDisplay)}
      aria-label={t.stickyCta.ariaLabel}
      className="fixed bottom-0 left-0 right-20 z-40 flex items-center justify-between gap-3 bg-sumi py-3 pl-5 pr-5 text-background shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.5)] md:hidden"
    >
      <span className="flex items-center gap-3">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-accent"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="font-serif-jp text-[0.7rem] tracking-[0.25em] text-background/70">
            {t.stickyCta.label}
          </span>
          <span className="font-serif-jp text-base tracking-[0.1em]">{t.contact.phoneDisplay}</span>
        </span>
      </span>
    </a>
  );
}
