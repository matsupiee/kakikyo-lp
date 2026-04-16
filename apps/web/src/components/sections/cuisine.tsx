import { useT } from "@/i18n/provider";
import SectionHeading from "./section-heading";

const COURSE_IMAGES = [
  "https://images.unsplash.com/photo-1599021434134-99e9b2efefaa?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1562802378-063ec186a863?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1400&auto=format&fit=crop&q=80",
];

export default function Cuisine() {
  const t = useT();

  return (
    <section id="cuisine" className="relative bg-sumi py-28 text-background md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow={t.cuisine.heading.eyebrow}
          main={t.cuisine.heading.main}
          tone="dark"
        />

        <p className="mx-auto mt-16 max-w-2xl text-center font-serif-jp text-[0.95rem] leading-[2.15] tracking-wider text-background/75">
          {t.cuisine.leadLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < t.cuisine.leadLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {t.cuisine.courses.map((course, idx) => (
            <article
              key={course.name}
              className="group flex flex-col bg-background/[0.04] transition-colors hover:bg-background/[0.07]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${COURSE_IMAGES[idx]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-background/10 px-3 py-1 font-serif-jp text-[0.7rem] tracking-[0.2em] text-background backdrop-blur-sm">
                  {course.season}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif-jp text-2xl tracking-[0.2em] text-background">
                  {course.name}
                </h3>
                <p className="mt-2 text-[0.7rem] tracking-[0.3em] text-background/60 uppercase">
                  {course.kana}
                </p>

                <p className="mt-6 flex-1 text-[0.88rem] leading-[2] tracking-wider text-background/80">
                  {course.description}
                </p>

                <div className="mt-8 flex items-end justify-between border-t border-background/15 pt-6">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] text-background/50 uppercase">
                      {t.cuisine.courseFromLabel}
                    </p>
                    <p className="font-serif-jp text-2xl tracking-[0.1em] text-accent">
                      {course.price}
                    </p>
                  </div>
                  <p className="max-w-[10rem] text-right text-[0.7rem] leading-[1.6] text-background/50">
                    {course.note}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-sm border border-background/15 bg-background/[0.03] p-8 text-center text-[0.85rem] leading-[2] text-background/75 md:p-10">
          <p className="font-serif-jp text-sm tracking-[0.3em] text-accent">
            {t.cuisine.noticeTitle}
          </p>
          <p className="mt-4">
            {t.cuisine.noticeLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.cuisine.noticeLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
