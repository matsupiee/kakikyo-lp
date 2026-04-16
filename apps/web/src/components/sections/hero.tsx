import { telHref } from "@/i18n/index";
import { useLocale, useT } from "@/i18n/provider";

export default function Hero() {
  const t = useT();
  const locale = useLocale();

  return (
    <section id="top" className="relative h-svh min-h-[680px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=2000&auto=format&fit=crop&q=80')",
        }}
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-8 text-[0.7rem] tracking-[0.45em] text-white/70 uppercase">
          {t.hero.eyebrow}
        </p>
        <div className="relative">
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 h-px w-14 -translate-x-1/2 bg-white/60"
          />
          <h1
            lang="ja"
            className="font-serif-jp text-6xl leading-none tracking-[0.35em] text-white md:text-8xl"
          >
            {t.brand.name}
          </h1>
          <span
            aria-hidden
            className="absolute -bottom-3 left-1/2 h-px w-14 -translate-x-1/2 bg-white/60"
          />
        </div>
        <p className="mt-10 max-w-xl font-serif-jp text-base leading-loose tracking-[0.2em] text-white/85 md:text-lg">
          {t.hero.taglineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < t.hero.taglineLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#concept"
            className="inline-flex items-center gap-3 border border-white/80 px-8 py-3 font-serif-jp text-sm tracking-[0.3em] text-white transition-all hover:bg-white hover:text-foreground"
          >
            {t.hero.ctaAbout}
          </a>
          <a
            href={telHref(locale, t.contact.phoneDisplay)}
            className="inline-flex items-center gap-3 bg-white/10 px-8 py-3 font-serif-jp text-sm tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-foreground"
          >
            {t.hero.ctaReserve}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.4em] uppercase">{t.hero.scroll}</span>
          <span className="relative block h-12 w-px bg-white/60">
            <span className="absolute top-0 left-0 block h-1/2 w-px animate-[pulse_2s_ease-in-out_infinite] bg-white" />
          </span>
        </div>
      </div>
    </section>
  );
}
