import { useEffect, useRef, useState } from "react";

import { LOCALES, LOCALE_NATIVE_NAMES, localePath, type Locale } from "@/i18n/index";
import { DICTIONARIES } from "@/i18n/index";
import { useLocale, useT } from "@/i18n/provider";

type Props = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export default function LanguageSwitcher({ variant = "desktop", onNavigate }: Props) {
  const current = useLocale();
  const t = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const hrefFor = (lc: Locale): string => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    return localePath(lc, hash);
  };

  const handleNavigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap gap-2" aria-label={t.languageSwitcher.label}>
        {LOCALES.map((lc) => {
          const isCurrent = lc === current;
          return (
            <a
              key={lc}
              href={hrefFor(lc)}
              aria-current={isCurrent ? "page" : undefined}
              aria-label={DICTIONARIES[lc].languageSwitcher.switchTo}
              onClick={handleNavigate}
              className={[
                "inline-flex items-center border px-3 py-2 text-xs tracking-[0.15em]",
                isCurrent
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/80 hover:border-foreground",
              ].join(" ")}
            >
              {LOCALE_NATIVE_NAMES[lc]}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.languageSwitcher.label}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs tracking-[0.15em] text-foreground/80 transition-colors hover:text-foreground"
      >
        <span>{LOCALE_NATIVE_NAMES[current]}</span>
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={["h-3 w-3 transition-transform", open ? "rotate-180" : ""].join(" ")}
        >
          <path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={t.languageSwitcher.label}
          className="absolute top-full right-0 z-50 mt-2 min-w-[9rem] border border-border bg-background shadow-md"
        >
          {LOCALES.map((lc) => {
            const isCurrent = lc === current;
            return (
              <li key={lc} role="none">
                <a
                  role="menuitem"
                  href={hrefFor(lc)}
                  aria-current={isCurrent ? "page" : undefined}
                  aria-label={DICTIONARIES[lc].languageSwitcher.switchTo}
                  onClick={handleNavigate}
                  className={[
                    "block px-4 py-2.5 text-sm tracking-[0.1em] transition-colors",
                    isCurrent
                      ? "bg-foreground/5 text-foreground"
                      : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
                  ].join(" ")}
                >
                  {LOCALE_NATIVE_NAMES[lc]}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
