import type { Dictionary } from "./dictionary";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { ja } from "./locales/ja";
import { zhCn } from "./locales/zh-cn";
import { zhTw } from "./locales/zh-tw";

export const LOCALES = ["ja", "en", "zh-tw", "zh-cn", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ja";
export const NON_DEFAULT_LOCALES: ReadonlyArray<Exclude<Locale, "ja">> = [
  "en",
  "zh-tw",
  "zh-cn",
  "es",
];

export const DICTIONARIES: Record<Locale, Dictionary> = {
  ja,
  en,
  "zh-tw": zhTw,
  "zh-cn": zhCn,
  es,
};

export const LOCALE_NATIVE_NAMES: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  "zh-tw": "繁體中文",
  "zh-cn": "简体中文",
  es: "Español",
};

export const HTML_LANG_MAP: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  "zh-tw": "zh-Hant",
  "zh-cn": "zh-Hans",
  es: "es",
};

export const HREFLANG_MAP: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  "zh-tw": "zh-Hant",
  "zh-cn": "zh-Hans",
  es: "es",
};

export const OG_LOCALE_MAP: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  "zh-tw": "zh_TW",
  "zh-cn": "zh_CN",
  es: "es_ES",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as ReadonlyArray<string>).includes(value);
}

export function resolveLocale(pathname: string): Locale {
  const first = pathname.split("/")[1] ?? "";
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

export function localePath(locale: Locale, hash?: string): string {
  const base = locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
  return hash ? `${base}${hash.startsWith("#") ? hash : `#${hash}`}` : base;
}

// International tel: href for non-default locales so foreign dialers work
export function telHref(locale: Locale, displayNumber: string): string {
  const digits = displayNumber.replace(/[^\d]/g, "");
  if (locale === "ja") return `tel:${displayNumber}`;
  // Drop leading 0, prefix +81 (Japan)
  const national = digits.startsWith("0") ? digits.slice(1) : digits;
  return `tel:+81${national}`;
}
