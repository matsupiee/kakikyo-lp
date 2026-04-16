export default function Reservation() {
  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-sumi py-28 text-background md:py-36"
    >
      {/* Decorative vertical text */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 md:block"
      >
        <p className="writing-vertical font-serif-jp text-[0.85rem] tracking-[0.6em] whitespace-nowrap text-background/20">
          か き 恭 ・ 福 井
        </p>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-8 hidden -translate-y-1/2 md:block"
      >
        <p className="writing-vertical font-serif-jp text-[0.85rem] tracking-[0.6em] whitespace-nowrap text-background/20">
          Reservation
        </p>
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="text-[0.7rem] tracking-[0.5em] text-background/60 uppercase">Reservation</p>
        <h2 className="mt-5 font-serif-jp text-4xl tracking-[0.3em] md:text-5xl">ご予約</h2>
        <span aria-hidden className="mx-auto mt-8 block h-px w-14 bg-background/40" />

        <p className="mt-10 font-serif-jp text-[0.95rem] leading-[2.2] tracking-wider text-background/80 md:text-base">
          ご来店は前日までにご予約いただけますと幸いでございます。
          <br />
          ご人数、ご予算、ご要望などを伺いながら、
          <br />
          ごゆるりと過ごせる一席を整えてお待ち申し上げます。
        </p>

        <div className="mt-14 flex flex-col items-center gap-6">
          <p className="text-[0.65rem] tracking-[0.4em] text-background/50 uppercase">
            お電話にて承ります
          </p>
          <a href="tel:0776-23-0595" className="group inline-flex flex-col items-center">
            <span className="font-serif-jp text-5xl tracking-[0.15em] text-background transition-colors group-hover:text-accent md:text-6xl">
              0776-23-0595
            </span>
            <span className="mt-3 text-[0.7rem] tracking-[0.3em] text-background/60 uppercase">
              Tap to call
            </span>
          </a>

          <p className="mt-4 text-sm tracking-wider text-background/70">
            受付 17:00 – 22:00 ／ 定休日 日曜・祝日
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:0776-23-0595"
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-serif-jp text-sm tracking-[0.3em] text-background transition-opacity hover:opacity-90"
          >
            電話で予約する
          </a>
          <a
            href="#access"
            className="inline-flex items-center gap-3 border border-background/60 px-8 py-4 font-serif-jp text-sm tracking-[0.3em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            アクセスを見る
          </a>
        </div>
      </div>
    </section>
  );
}
