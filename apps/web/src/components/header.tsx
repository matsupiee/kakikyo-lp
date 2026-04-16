import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#concept", label: "おもてなし", en: "Concept" },
  { href: "#cuisine", label: "お料理", en: "Cuisine" },
  { href: "#gallery", label: "写真", en: "Gallery" },
  { href: "#info", label: "店舗案内", en: "Information" },
  { href: "#access", label: "アクセス", en: "Access" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <span className="font-serif-jp text-2xl tracking-[0.2em] text-foreground md:text-3xl">
            かき恭
          </span>
          <span className="hidden text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase md:inline">
            Kakikyō · since 1924
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative flex flex-col items-center gap-0.5 py-1"
            >
              <span className="font-serif-jp text-[0.95rem] tracking-[0.15em] text-foreground transition-colors group-hover:text-accent">
                {link.label}
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                {link.en}
              </span>
              <span className="absolute -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="tel:0776-23-0595"
            className="ml-2 inline-flex items-center gap-2 border border-foreground/80 px-5 py-2 font-serif-jp text-sm tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            ご予約 0776-23-0595
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
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
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-2 pb-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-border py-4"
            >
              <span className="font-serif-jp text-xl tracking-[0.2em]">{link.label}</span>
              <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {link.en}
              </span>
            </a>
          ))}
          <a
            href="tel:0776-23-0595"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground px-5 py-4 font-serif-jp text-sm tracking-[0.25em] text-background"
          >
            お電話でのご予約 0776-23-0595
          </a>
        </nav>
      </div>
    </header>
  );
}
