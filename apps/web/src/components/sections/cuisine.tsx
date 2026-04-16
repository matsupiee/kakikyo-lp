import SectionHeading from "./section-heading";

type Course = {
  name: string;
  kana: string;
  season: string;
  price: string;
  note: string;
  description: string;
  image: string;
};

const COURSES: Course[] = [
  {
    name: "牡蛎会席",
    kana: "Kaki Kaiseki",
    season: "11月 – 3月 / Winter",
    price: "¥12,100",
    note: "税込・別途席料、奉仕料",
    description:
      "日本海の荒波に育まれた身の締まった牡蛎を、生・焼・揚・鍋と仕立て分け、ひとつの膳に。冬の贅をしみじみと味わう、かき恭を代表する一会席。",
    image:
      "https://images.unsplash.com/photo-1599021434134-99e9b2efefaa?w=1400&auto=format&fit=crop&q=80",
  },
  {
    name: "季節の会席",
    kana: "Shiki Kaiseki",
    season: "通年 / Spring – Autumn",
    price: "¥9,350 〜",
    note: "税込・別途席料、奉仕料",
    description:
      "先付、椀物、向付、焼物、煮物、揚物、御飯、香の物、甘味まで。福井の里山・里海の旬を、七品を軸にご予算に応じて仕立てます。",
    image:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=1400&auto=format&fit=crop&q=80",
  },
  {
    name: "特別会席",
    kana: "Tokubetsu Kaiseki",
    season: "ご相談承り / By Request",
    price: "Ask",
    note: "ご予算・ご要望に応じて",
    description:
      "ご結納、お顔合わせ、ご法要、ご接待、記念日など、大切な日のための特別な一席。食材、盛付、お部屋までご要望に沿ってあつらえます。",
    image:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1400&auto=format&fit=crop&q=80",
  },
];

export default function Cuisine() {
  return (
    <section id="cuisine" className="relative bg-sumi py-28 text-background md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading jp="お料理" en="Our Cuisine" tone="dark" />

        <p className="mx-auto mt-16 max-w-2xl text-center font-serif-jp text-[0.95rem] leading-[2.15] tracking-wider text-background/75">
          日本海の幸と、越前の里山の恵み。
          <br />
          旬の素材を、季節ごとの会席に仕立てて。
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {COURSES.map((course) => (
            <article
              key={course.name}
              className="group flex flex-col bg-background/[0.04] transition-colors hover:bg-background/[0.07]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${course.image}')` }}
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
                      Course from
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
          <p className="font-serif-jp text-sm tracking-[0.3em] text-accent">＊ お願い事項 ＊</p>
          <p className="mt-4">
            お料理は当日ご予約いただきましたお品と異なる場合がございます。
            <br />
            お一人様につきお席料 1,000 円、奉仕料 15%、消費税 10% を別途頂戴いたします。
            <br />
            アレルギー・お苦手な食材は、ご予約時にお知らせくださいませ。
          </p>
        </div>
      </div>
    </section>
  );
}
