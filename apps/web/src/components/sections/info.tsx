import SectionHeading from "./section-heading";

const ROWS: [string, string, string?][] = [
  ["店名", "割烹料亭 かき恭（かききょう）"],
  ["ジャンル", "懐石 ・ 会席料理 ／ 牡蛎料理 ／ 季節料理"],
  ["所在地", "〒910-0006 福井県福井市中央 3-10-8"],
  ["お電話", "0776-23-0595"],
  ["営業時間", "17:00 〜 22:00（最終入店 20:30）"],
  ["定休日", "日曜・祝日（10名様以上のご宴会は応相談）"],
  [
    "ご予算",
    "会席コース ￥9,350 〜 ／ 牡蛎会席 ￥12,100 〜（税込）",
    "別途 お席料 ￥1,000・奉仕料 15%",
  ],
  ["お席", "落ち着いたお座敷・個室をご用意しております", "ご会食・ご接待・ご法要・ご宴会に"],
  ["お支払い", "現金 ／ 各種クレジットカード"],
];

export default function Info() {
  return (
    <section id="info" className="relative bg-washi-dark py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading jp="店舗案内" en="Information" />

        <dl className="mt-20 divide-y divide-border border-y border-border">
          {ROWS.map(([label, value, sub]) => (
            <div
              key={label}
              className="grid gap-2 px-2 py-6 md:grid-cols-[12rem_1fr] md:items-baseline md:gap-8 md:px-4 md:py-7"
            >
              <dt className="flex items-baseline gap-3 font-serif-jp text-sm tracking-[0.3em] text-muted-foreground">
                <span aria-hidden className="inline-block h-px w-6 bg-accent" />
                {label}
              </dt>
              <dd className="font-serif-jp text-base leading-[2] tracking-wider text-foreground md:text-[1.05rem]">
                {value}
                {sub && (
                  <span className="mt-1 block text-[0.8rem] tracking-wider text-muted-foreground">
                    {sub}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="bg-background p-8 shadow-[0_1px_0_0_var(--border)]">
            <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
              Private Room
            </p>
            <p className="mt-3 font-serif-jp text-xl tracking-[0.2em]">個室完備</p>
            <p className="mt-3 text-[0.85rem] leading-[1.9] text-muted-foreground">
              少人数でのご会食から、ご法要・ご宴席まで、 大小のお座敷をご用意しております。
            </p>
          </div>
          <div className="bg-background p-8 shadow-[0_1px_0_0_var(--border)]">
            <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
              Special Occasions
            </p>
            <p className="mt-3 font-serif-jp text-xl tracking-[0.2em]">慶事・法要</p>
            <p className="mt-3 text-[0.85rem] leading-[1.9] text-muted-foreground">
              ご結納、お顔合わせ、お祝い、ご法要など、 大切な日のお料理も承ります。
            </p>
          </div>
          <div className="bg-background p-8 shadow-[0_1px_0_0_var(--border)]">
            <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
              Allergies
            </p>
            <p className="mt-3 font-serif-jp text-xl tracking-[0.2em]">アレルギー対応</p>
            <p className="mt-3 text-[0.85rem] leading-[1.9] text-muted-foreground">
              ご予約時にお知らせいただけましたら、 できる限りご対応させていただきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
