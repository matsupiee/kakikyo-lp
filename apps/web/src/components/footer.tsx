import { telHref } from "@/i18n/index";
import { interpolate, useLocale, useT } from "@/i18n/provider";

export default function Footer() {
  const t = useT();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sumi pb-20 text-background md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <p lang="ja" className="font-serif-jp text-3xl tracking-[0.25em]">
            {t.brand.name}
          </p>
          <p className="mt-3 text-[0.7rem] tracking-[0.3em] text-background/60 uppercase">
            {t.brand.taglineLong}
          </p>
          <p className="mt-8 text-sm leading-7 text-background/80">
            {t.footer.taglineLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.footer.taglineLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="grid gap-8 text-sm leading-7 text-background/80 sm:grid-cols-2">
          <div>
            <p className="font-serif-jp text-base tracking-[0.2em] text-background">
              {t.footer.storeInfoTitle}
            </p>
            <div className="mt-4 space-y-1">
              <p lang="ja">{t.contact.postal}</p>
              <p lang="ja">{t.contact.addressPrimary}</p>
              <p className="text-background/60">{t.contact.addressRomaji}</p>
              <p>
                {t.footer.telLabel}{" "}
                <a
                  href={telHref(locale, t.contact.phoneDisplay)}
                  className="underline-offset-4 hover:underline"
                >
                  {t.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-serif-jp text-base tracking-[0.2em] text-background">
              {t.footer.hoursTitle}
            </p>
            <div className="mt-4 space-y-1">
              <p>{t.contact.hours}</p>
              <p>{t.contact.closed}</p>
              <p className="text-background/60">{t.contact.closedExtra}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 text-[0.7rem] tracking-[0.2em] text-background/50 uppercase md:flex-row md:items-center md:px-10">
          <p>{interpolate(t.footer.copyright, { year })}</p>
          <p>{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
