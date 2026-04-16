import { useT } from "@/i18n/provider";
import SectionHeading from "./section-heading";

const PHOTO_SOURCES = [
  {
    src: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1400&auto=format&fit=crop&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&auto=format&fit=crop&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=1200&auto=format&fit=crop&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1556039663-59b8b4e1a491?w=1200&auto=format&fit=crop&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1200&auto=format&fit=crop&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function Gallery() {
  const t = useT();

  return (
    <section id="gallery" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow={t.gallery.heading.eyebrow} main={t.gallery.heading.main} />

        <p className="mx-auto mt-14 max-w-xl text-center text-[0.9rem] leading-[2] tracking-wider text-muted-foreground">
          {t.gallery.lead}
        </p>

        <div className="mt-16 grid auto-rows-[16rem] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {t.gallery.photos.map((photo, idx) => {
            const source = PHOTO_SOURCES[idx];
            return (
              <figure
                key={source.src}
                className={["group relative overflow-hidden bg-muted", source.span ?? ""].join(" ")}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                  style={{ backgroundImage: `url('${source.src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute right-4 bottom-4 left-4 flex items-baseline justify-between text-white">
                  <span lang="ja" className="font-serif-jp text-lg tracking-[0.25em]">
                    {photo.jp}
                  </span>
                  <span className="text-[0.6rem] tracking-[0.3em] text-white/70 uppercase">
                    {photo.label}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
