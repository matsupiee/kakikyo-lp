import SectionHeading from "./section-heading";

type Photo = {
  src: string;
  label: string;
  jp: string;
  span?: string;
};

const PHOTOS: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1400&auto=format&fit=crop&q=80",
    jp: "牡蛎",
    label: "Oyster",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&auto=format&fit=crop&q=80",
    jp: "椀物",
    label: "Wanmono",
  },
  {
    src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=1200&auto=format&fit=crop&q=80",
    jp: "向付",
    label: "Mukōzuke",
  },
  {
    src: "https://images.unsplash.com/photo-1556039663-59b8b4e1a491?w=1200&auto=format&fit=crop&q=80",
    jp: "焼物",
    label: "Yakimono",
  },
  {
    src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1200&auto=format&fit=crop&q=80",
    jp: "座敷",
    label: "Zashiki",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=80",
    jp: "甘味",
    label: "Kanmi",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&auto=format&fit=crop&q=80",
    jp: "献立",
    label: "Kondate",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading jp="写真" en="Gallery" />

        <p className="mx-auto mt-14 max-w-xl text-center text-[0.9rem] leading-[2] tracking-wider text-muted-foreground">
          季節ごとに移ろうお料理と、静けさに包まれたお座敷のひととき。
        </p>

        <div className="mt-16 grid auto-rows-[16rem] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className={["group relative overflow-hidden bg-muted", photo.span ?? ""].join(" ")}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                style={{ backgroundImage: `url('${photo.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute right-4 bottom-4 left-4 flex items-baseline justify-between text-white">
                <span className="font-serif-jp text-lg tracking-[0.25em]">{photo.jp}</span>
                <span className="text-[0.6rem] tracking-[0.3em] text-white/70 uppercase">
                  {photo.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
