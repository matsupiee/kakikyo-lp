import { useT } from "@/i18n/provider";
import SectionHeading from "./section-heading";

export default function Info() {
  const t = useT();
  const { privateRoom, special, allergies } = t.info.cards;

  return (
    <section id="info" className="relative bg-washi-dark py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading eyebrow={t.info.heading.eyebrow} main={t.info.heading.main} />

        <dl className="mt-20 divide-y divide-border border-y border-border">
          {t.info.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 px-2 py-6 md:grid-cols-[12rem_1fr] md:items-baseline md:gap-8 md:px-4 md:py-7"
            >
              <dt className="flex items-baseline gap-3 font-serif-jp text-sm tracking-[0.3em] text-muted-foreground">
                <span aria-hidden className="inline-block h-px w-6 bg-accent" />
                {row.label}
              </dt>
              <dd className="font-serif-jp text-base leading-[2] tracking-wider text-foreground md:text-[1.05rem]">
                {row.value}
                {row.sub && (
                  <span className="mt-1 block text-[0.8rem] tracking-wider text-muted-foreground">
                    {row.sub}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[privateRoom, special, allergies].map((card) => (
            <div key={card.eyebrow} className="bg-background p-8 shadow-[0_1px_0_0_var(--border)]">
              <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {card.eyebrow}
              </p>
              <p className="mt-3 font-serif-jp text-xl tracking-[0.2em]">{card.title}</p>
              <p className="mt-3 text-[0.85rem] leading-[1.9] text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
