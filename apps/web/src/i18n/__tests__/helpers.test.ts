import { describe, expect, it } from "vitest";

import { DEFAULT_LOCALE, LOCALES, isLocale, localePath, resolveLocale, telHref } from "../index";

describe("isLocale", () => {
  it.each(LOCALES)("accepts known locale %s", (lc) => {
    expect(isLocale(lc)).toBe(true);
  });

  it.each(["", "xx", "jp", "zh", "ZH-TW", "en-US"])("rejects %s", (value) => {
    expect(isLocale(value)).toBe(false);
  });
});

describe("resolveLocale", () => {
  it("defaults to ja for '/'", () => {
    expect(resolveLocale("/")).toBe("ja");
  });

  it("resolves first path segment for known locales", () => {
    expect(resolveLocale("/en")).toBe("en");
    expect(resolveLocale("/zh-tw")).toBe("zh-tw");
    expect(resolveLocale("/zh-cn")).toBe("zh-cn");
    expect(resolveLocale("/es")).toBe("es");
  });

  it("ignores trailing segments and hash", () => {
    expect(resolveLocale("/en/foo")).toBe("en");
    expect(resolveLocale("/zh-tw/")).toBe("zh-tw");
  });

  it("falls back to default for unknown prefixes", () => {
    expect(resolveLocale("/xx")).toBe("ja");
    expect(resolveLocale("/JA")).toBe("ja");
    expect(resolveLocale("")).toBe("ja");
  });

  it("defaults to ja when encountering /ja (which must 404 via router)", () => {
    // /ja isn't a valid route (redirect would conflict with default /), but resolveLocale
    // only validates against the LOCALES tuple which includes "ja"; routing handles the 404.
    expect(resolveLocale("/ja")).toBe("ja");
  });
});

describe("localePath", () => {
  it("returns '/' for the default locale", () => {
    expect(localePath(DEFAULT_LOCALE)).toBe("/");
  });

  it("prefixes non-default locales", () => {
    expect(localePath("en")).toBe("/en");
    expect(localePath("zh-tw")).toBe("/zh-tw");
  });

  it("appends a hash with the leading #", () => {
    expect(localePath("ja", "#cuisine")).toBe("/#cuisine");
    expect(localePath("en", "#info")).toBe("/en#info");
  });

  it("adds the # when not provided", () => {
    expect(localePath("en", "access")).toBe("/en#access");
  });

  it("treats empty hash as no hash", () => {
    expect(localePath("en", "")).toBe("/en");
  });
});

describe("telHref", () => {
  it("keeps domestic format for ja", () => {
    expect(telHref("ja", "0776-23-0595")).toBe("tel:0776-23-0595");
  });

  it("converts to E.164-ish +81 for non-ja locales", () => {
    expect(telHref("en", "0776-23-0595")).toBe("tel:+81776230595");
    expect(telHref("zh-tw", "0776-23-0595")).toBe("tel:+81776230595");
    expect(telHref("zh-cn", "0776-23-0595")).toBe("tel:+81776230595");
    expect(telHref("es", "0776-23-0595")).toBe("tel:+81776230595");
  });

  it("strips only a single leading zero, not digits that happen to be zero", () => {
    expect(telHref("en", "03-1234-5678")).toBe("tel:+81312345678");
  });

  it("handles numbers without a leading zero", () => {
    expect(telHref("en", "776-23-0595")).toBe("tel:+81776230595");
  });
});
