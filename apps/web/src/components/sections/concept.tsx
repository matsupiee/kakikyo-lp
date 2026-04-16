import { useT } from "@/i18n/provider";
import SectionHeading from "./section-heading";

export default function Concept() {
  const t = useT();

  return (
    <section id="concept" className="relative overflow-hidden bg-background py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.58_0.14_40_/_0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow={t.concept.heading.eyebrow} main={t.concept.heading.main} />

        <div className="mt-20 grid items-center gap-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1400&auto=format&fit=crop&q=80')",
              }}
            />
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 border border-accent md:block" />
            <div className="absolute -top-6 -right-6 hidden h-24 w-24 border border-foreground/40 md:block" />
          </div>

          <div>
            <h3 className="font-serif-jp text-2xl leading-[1.9] tracking-[0.15em] text-foreground md:text-[1.7rem]">
              {t.concept.titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.concept.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h3>
            <div className="mt-8 space-y-6 text-[0.95rem] leading-[2.15] tracking-wider text-muted-foreground">
              {t.concept.paragraphs.map((para, i) => (
                <p key={i}>
                  {para.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < para.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-baseline gap-3">
                <span lang="ja" className="font-serif-jp text-5xl tracking-[0.1em] text-accent">
                  {t.concept.centennialKanji}
                </span>
                <span className="text-sm tracking-[0.2em] text-muted-foreground">
                  {t.concept.centennialLabel}
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                  {t.concept.sinceLabel}
                </p>
                <p className="font-serif-jp text-xl tracking-[0.15em]">{t.concept.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
