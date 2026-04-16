import SectionHeading from "./section-heading";

export default function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden bg-background py-28 md:py-40">
      {/* Decorative gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.58_0.14_40_/_0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading jp="おもてなし" en="Our Concept" />

        <div className="mt-20 grid items-center gap-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1400&auto=format&fit=crop&q=80')",
              }}
            />
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 border border-accent md:block" />
            <div className="absolute -top-6 -right-6 hidden h-24 w-24 border border-foreground/40 md:block" />
          </div>

          <div>
            <p className="writing-vertical hidden h-64 font-serif-jp text-xs tracking-[0.5em] text-muted-foreground md:inline-block">
              一 期 一 会 の 膳 を 、 静 か な 部 屋 で 。
            </p>
            <h3 className="font-serif-jp text-2xl leading-[1.9] tracking-[0.15em] text-foreground md:text-[1.7rem]">
              福井の旬を、
              <br />
              ひと皿にそっと託して。
            </h3>
            <div className="mt-8 space-y-6 text-[0.95rem] leading-[2.15] tracking-wider text-muted-foreground">
              <p>
                大正の創業より、時を重ねて約百年。
                <br />
                かき恭は、北陸・福井の海と山、そして里に実る恵みを、
                <br />
                一椀、一皿に丁寧に写し取って参りました。
              </p>
              <p>
                冬には、日本海の荒波に育まれた 牡 蛎 を。
                <br />
                春夏秋冬、その時季の最もよき素材を見極め、
                <br />
                伝統の技と、現代の感性を織り交ぜた会席へと仕立てます。
              </p>
              <p>
                静謐なお座敷で、ご家族の団欒、大切な方との会食、
                <br />
                ご接待のひとときを、ごゆるりとお過ごしくださいませ。
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-baseline gap-3">
                <span className="font-serif-jp text-5xl tracking-[0.1em] text-accent">百</span>
                <span className="text-sm tracking-[0.2em] text-muted-foreground">
                  年の 時 を 重 ね て
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                  Since
                </p>
                <p className="font-serif-jp text-xl tracking-[0.15em]">1924</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
