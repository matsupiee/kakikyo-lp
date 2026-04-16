import { useEffect, useState } from "react";

import { telHref } from "@/i18n/index";
import { useLocale, useT } from "@/i18n/provider";
import LanguageSwitcher from "./language-switcher";

const NAV_KEYS = ["concept", "cuisine", "gallery", "info", "access"] as const;

export default function Header() {
  const t = useT();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = telHref(locale, t.contact.phoneDisplay);
  const navItems = NAV_KEYS.map((key) => ({ key, href: `#${key}`, ...t.nav[key] }));

  return (
    <header
      className={[
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="group flex items-baseline gap-3">
          <span
            lang="ja"
            className="font-serif-jp text-2xl tracking-[0.2em] text-foreground md:text-3xl"
          >
            {t.brand.name}
          </span>
          <span className="hidden text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase md:inline">
            {t.brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative flex flex-col items-center gap-0.5 py-1"
            >
              <span className="font-serif-jp text-[0.95rem] tracking-[0.15em] text-foreground transition-colors group-hover:text-accent">
                {item.primary}
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                {item.sub}
              </span>
              <span className="absolute -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href={tel}
            className="ml-2 inline-flex items-center gap-2 border border-foreground/80 px-5 py-2 font-serif-jp text-sm tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {t.nav.reserveDesktop}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="flex flex-col items-end gap-1.5 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={[
              "block h-px w-7 bg-foreground transition-transform",
              open ? "translate-y-2 rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block h-px w-5 bg-foreground transition-opacity",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block h-px w-7 bg-foreground transition-transform",
              open ? "-translate-y-2 -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "overflow-hidden bg-background/98 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-4 pb-10">
          <div className="mb-2 pb-4">
            <LanguageSwitcher variant="mobile" onNavigate={() => setOpen(false)} />
          </div>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-border py-4"
            >
              <span className="font-serif-jp text-xl tracking-[0.2em]">{item.primary}</span>
              <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {item.sub}
              </span>
            </a>
          ))}
          <a
            href={tel}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground px-5 py-4 font-serif-jp text-sm tracking-[0.25em] text-background"
          >
            {t.nav.reserveMobile}
          </a>
        </nav>
      </div>
    </header>
  );
}
