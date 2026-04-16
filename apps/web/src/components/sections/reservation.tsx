import { telHref } from "@/i18n/index";
import { useLocale, useT } from "@/i18n/provider";

export default function Reservation() {
  const t = useT();
  const locale = useLocale();
  const tel = telHref(locale, t.contact.phoneDisplay);

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-sumi py-28 text-background md:py-36"
    >
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="text-[0.7rem] tracking-[0.5em] text-background/60 uppercase">
          {t.reservation.eyebrow}
        </p>
        <h2 className="mt-5 font-serif-jp text-4xl tracking-[0.3em] md:text-5xl">
          {t.reservation.title}
        </h2>
        <span aria-hidden className="mx-auto mt-8 block h-px w-14 bg-background/40" />

        <p className="mt-10 font-serif-jp text-[0.95rem] leading-[2.2] tracking-wider text-background/80 md:text-base">
          {t.reservation.bodyLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < t.reservation.bodyLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="mt-14 flex flex-col items-center gap-6">
          <p className="text-[0.65rem] tracking-[0.4em] text-background/50 uppercase">
            {t.reservation.phoneCallLabel}
          </p>
          <a href={tel} className="group inline-flex flex-col items-center">
            <span className="font-serif-jp text-5xl tracking-[0.15em] text-background transition-colors group-hover:text-accent md:text-6xl">
              {t.contact.phoneDisplay}
            </span>
            <span className="mt-3 text-[0.7rem] tracking-[0.3em] text-background/60 uppercase">
              {t.reservation.tapToCall}
            </span>
          </a>

          <p className="mt-4 text-sm tracking-wider text-background/70">
            {t.reservation.hoursNote}
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href={tel}
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-serif-jp text-sm tracking-[0.3em] text-background transition-opacity hover:opacity-90"
          >
            {t.reservation.ctaReserve}
          </a>
          <a
            href="#access"
            className="inline-flex items-center gap-3 border border-background/60 px-8 py-4 font-serif-jp text-sm tracking-[0.3em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            {t.reservation.ctaAccess}
          </a>
        </div>
      </div>
    </section>
  );
}
