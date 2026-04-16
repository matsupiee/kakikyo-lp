export default function Footer() {
  return (
    <footer className="bg-sumi text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <p className="font-serif-jp text-3xl tracking-[0.25em]">かき恭</p>
          <p className="mt-3 text-[0.7rem] tracking-[0.3em] text-background/60 uppercase">
            Kappō Ryōtei Kakikyō · Fukui
          </p>
          <p className="mt-8 text-sm leading-7 text-background/80">
            福井の旬を、ひと皿に。
            <br />
            冬の牡蛎料理と、四季を映す会席。
            <br />
            静かな刻を、ごゆるりとお過ごしくださいませ。
          </p>
        </div>

        <div className="grid gap-8 text-sm leading-7 text-background/80 sm:grid-cols-2">
          <div>
            <p className="font-serif-jp text-base tracking-[0.2em] text-background">店舗情報</p>
            <div className="mt-4 space-y-1">
              <p>〒910-0006</p>
              <p>福井県福井市中央3-10-8</p>
              <p>
                TEL{" "}
                <a href="tel:0776-23-0595" className="underline-offset-4 hover:underline">
                  0776-23-0595
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-serif-jp text-base tracking-[0.2em] text-background">営業時間</p>
            <div className="mt-4 space-y-1">
              <p>17:00 – 22:00</p>
              <p>定休日 日曜・祝日</p>
              <p className="text-background/60">(10名様以上は日曜・祝日も営業可)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 text-[0.7rem] tracking-[0.2em] text-background/50 uppercase md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Kappō Ryōtei Kakikyō. All rights reserved.</p>
          <p>Fukui, Japan</p>
        </div>
      </div>
    </footer>
  );
}
