import {
  DICTIONARIES,
  HREFLANG_MAP,
  LOCALES,
  OG_LOCALE_MAP,
  localePath,
  type Locale,
} from "./index";

// TODO: move to env when production domain is confirmed
const ORIGIN = "https://kakikyo.jp";

const FONT_HREFS: Record<Locale, string> = {
  ja: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap",
  en: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
  es: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
  "zh-tw":
    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap",
  "zh-cn":
    "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap",
};

export function fontsHref(locale: Locale): string {
  return FONT_HREFS[locale];
}

export type HeadMeta = {
  meta: Array<Record<string, string>>;
  links: Array<Record<string, string>>;
};

export function buildHead(locale: Locale): HeadMeta {
  const d = DICTIONARIES[locale];
  const canonical = `${ORIGIN}${localePath(locale)}`;

  const alternateLinks = LOCALES.map((lc) => ({
    rel: "alternate",
    hrefLang: HREFLANG_MAP[lc],
    href: `${ORIGIN}${localePath(lc)}`,
  }));

  const ogLocaleAlternates = LOCALES.filter((lc) => lc !== locale).map((lc) => ({
    property: "og:locale:alternate",
    content: OG_LOCALE_MAP[lc],
  }));

  return {
    meta: [
      { title: d.meta.title },
      { name: "description", content: d.meta.description },
      { property: "og:title", content: d.meta.ogTitle },
      { property: "og:description", content: d.meta.ogDescription },
      { property: "og:type", content: "restaurant" },
      { property: "og:locale", content: OG_LOCALE_MAP[locale] },
      { property: "og:url", content: canonical },
      ...ogLocaleAlternates,
    ],
    links: [
      { rel: "canonical", href: canonical },
      ...alternateLinks,
      { rel: "alternate", hrefLang: "x-default", href: `${ORIGIN}/` },
      { rel: "stylesheet", href: fontsHref(locale) },
    ],
  };
}
