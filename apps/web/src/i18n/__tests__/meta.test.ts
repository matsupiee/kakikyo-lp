import { describe, expect, it } from "vitest";

import { LOCALES, type Locale } from "../index";
import { buildHead, fontsHref } from "../meta";

function metaByProp(
  meta: Array<Record<string, string>>,
  key: "name" | "property" | "title",
  value: string,
): string | undefined {
  const entry = meta.find((m) => m[key] === value);
  return entry?.content ?? entry?.title;
}

function linksByRel(
  links: Array<Record<string, string>>,
  rel: string,
): Array<Record<string, string>> {
  return links.filter((l) => l.rel === rel);
}

describe("buildHead", () => {
  it.each(LOCALES)("sets a non-empty title and description for %s", (locale) => {
    const { meta } = buildHead(locale);
    const title = meta.find((m) => m.title)?.title;
    const description = metaByProp(meta, "name", "description");
    expect(title, `${locale} title`).toBeTruthy();
    expect(description, `${locale} description`).toBeTruthy();
  });

  it("points canonical at / for ja", () => {
    const { links } = buildHead("ja");
    const canonical = linksByRel(links, "canonical")[0];
    expect(canonical?.href).toBe("https://kakikyo.jp/");
  });

  it.each([
    ["en", "https://kakikyo.jp/en"],
    ["zh-tw", "https://kakikyo.jp/zh-tw"],
    ["zh-cn", "https://kakikyo.jp/zh-cn"],
    ["es", "https://kakikyo.jp/es"],
  ] as Array<[Locale, string]>)(
    "points canonical at %s for non-default locales",
    (locale, expected) => {
      const { links } = buildHead(locale);
      const canonical = linksByRel(links, "canonical")[0];
      expect(canonical?.href).toBe(expected);
    },
  );

  it.each(LOCALES)("emits 5 hreflang alternates + x-default for %s", (locale) => {
    const { links } = buildHead(locale);
    const alternates = linksByRel(links, "alternate");
    const hreflangs = alternates.map((a) => a.hrefLang).sort();
    expect(hreflangs).toEqual(["en", "es", "ja", "x-default", "zh-Hans", "zh-Hant"].sort());

    const xDefault = alternates.find((a) => a.hrefLang === "x-default");
    expect(xDefault?.href).toBe("https://kakikyo.jp/");
  });

  it.each([
    ["ja", "ja_JP"],
    ["en", "en_US"],
    ["zh-tw", "zh_TW"],
    ["zh-cn", "zh_CN"],
    ["es", "es_ES"],
  ] as Array<[Locale, string]>)("emits og:locale=%s → %s", (locale, expected) => {
    const { meta } = buildHead(locale);
    expect(metaByProp(meta, "property", "og:locale")).toBe(expected);
  });

  it.each(LOCALES)("includes a font stylesheet for %s", (locale) => {
    const { links } = buildHead(locale);
    const fontLink = links.find((l) => l.rel === "stylesheet" && l.href === fontsHref(locale));
    expect(fontLink).toBeDefined();
  });
});

describe("fontsHref", () => {
  it("returns Shippori Mincho for ja", () => {
    expect(fontsHref("ja")).toContain("Shippori+Mincho");
    expect(fontsHref("ja")).toContain("Noto+Sans+JP");
  });

  it("returns Cormorant Garamond for en and es", () => {
    expect(fontsHref("en")).toContain("Cormorant+Garamond");
    expect(fontsHref("es")).toContain("Cormorant+Garamond");
  });

  it("returns Noto TC for zh-tw", () => {
    expect(fontsHref("zh-tw")).toContain("Noto+Sans+TC");
    expect(fontsHref("zh-tw")).toContain("Noto+Serif+TC");
  });

  it("returns Noto SC for zh-cn", () => {
    expect(fontsHref("zh-cn")).toContain("Noto+Sans+SC");
    expect(fontsHref("zh-cn")).toContain("Noto+Serif+SC");
  });

  it.each(LOCALES)("uses Google Fonts CSS2 endpoint for %s", (locale) => {
    expect(fontsHref(locale)).toMatch(/^https:\/\/fonts\.googleapis\.com\/css2\?/);
  });
});
