import { describe, expect, it } from "vitest";

import { LOCALES } from "../../../i18n/index";
import { SYSTEM_PROMPTS } from "../system-prompt";

describe("SYSTEM_PROMPTS", () => {
  it.each(LOCALES)("has a non-empty prompt for %s", (locale) => {
    expect(SYSTEM_PROMPTS[locale].trim().length).toBeGreaterThan(0);
  });

  it.each(LOCALES)("includes the Japanese phone number 0776-23-0595 in %s", (locale) => {
    expect(SYSTEM_PROMPTS[locale]).toContain("0776-23-0595");
  });

  it.each(LOCALES)("includes the Kaki Kaiseki price ¥12,100 in %s", (locale) => {
    expect(SYSTEM_PROMPTS[locale]).toContain("12,100");
  });

  it.each(LOCALES)("includes the Shiki Kaiseki price ¥9,350 in %s", (locale) => {
    expect(SYSTEM_PROMPTS[locale]).toContain("9,350");
  });

  it("instructs the Japanese bot to reply in Japanese", () => {
    expect(SYSTEM_PROMPTS.ja).toContain("日本語で返答");
  });

  it("instructs the English bot to reply in English", () => {
    expect(SYSTEM_PROMPTS.en).toMatch(/reply in English/i);
  });

  it("instructs the Traditional Chinese bot to reply in 繁體中文", () => {
    expect(SYSTEM_PROMPTS["zh-tw"]).toContain("繁體中文");
  });

  it("instructs the Simplified Chinese bot to reply in 简体中文", () => {
    expect(SYSTEM_PROMPTS["zh-cn"]).toContain("简体中文");
  });

  it("instructs the Spanish bot to reply in Spanish", () => {
    expect(SYSTEM_PROMPTS.es).toMatch(/en español/i);
  });
});
