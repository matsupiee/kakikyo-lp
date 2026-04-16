import { useT } from "@/i18n/provider";
import SectionHeading from "./section-heading";

export default function Access() {
  const t = useT();

  return (
    <section id="access" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow={t.access.heading.eyebrow} main={t.access.heading.main} />

        <div className="mt-20 grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden border border-border md:aspect-auto">
            <iframe
              title={t.access.mapTitle}
              className="h-full min-h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=%E7%A6%8F%E4%BA%95%E5%B8%82%E4%B8%AD%E5%A4%AE3-10-8&output=embed"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-serif-jp text-sm tracking-[0.3em] text-accent">
              {t.access.locationLabel}
            </p>
            <p
              lang="ja"
              className="mt-4 font-serif-jp text-xl leading-[1.9] tracking-[0.15em] text-foreground md:text-2xl"
            >
              {t.access.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.access.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm tracking-wider text-muted-foreground">
              {t.access.addressRomaji}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E4%BA%95%E7%9C%8C%E7%A6%8F%E4%BA%95%E5%B8%82%E4%B8%AD%E5%A4%AE3-10-8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm tracking-wider text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              {t.access.mapLink}
            </a>

            <div className="mt-10 space-y-6 border-t border-border pt-8">
              <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {t.access.fromStation}
              </p>
              {t.access.routes.map((route) => (
                <div key={route.line} className="flex items-baseline gap-5">
                  <span aria-hidden className="mt-2 inline-block h-px w-6 shrink-0 bg-accent" />
                  <div>
                    <p className="font-serif-jp text-base tracking-[0.15em] text-foreground">
                      {route.line}
                    </p>
                    <p className="mt-1 text-sm tracking-wider text-muted-foreground">
                      {route.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
