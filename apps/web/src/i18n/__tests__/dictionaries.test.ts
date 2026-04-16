import { describe, expect, it } from "vitest";

import { DICTIONARIES, LOCALES, type Locale } from "../index";
import { ja } from "../locales/ja";

const NON_JA_LOCALES = LOCALES.filter((l) => l !== "ja") as Exclude<Locale, "ja">[];

describe("dictionaries — structural array parity", () => {
  it.each(NON_JA_LOCALES)("concept.paragraphs length matches ja in %s", (locale) => {
    expect(DICTIONARIES[locale].concept.paragraphs.length).toBe(ja.concept.paragraphs.length);
  });

  it.each(NON_JA_LOCALES)("cuisine.courses length matches ja in %s", (locale) => {
    expect(DICTIONARIES[locale].cuisine.courses.length).toBe(ja.cuisine.courses.length);
  });

  it.each(NON_JA_LOCALES)("gallery.photos length matches ja in %s", (locale) => {
    expect(DICTIONARIES[locale].gallery.photos.length).toBe(ja.gallery.photos.length);
  });

  it.each(NON_JA_LOCALES)("info.rows length matches ja in %s", (locale) => {
    expect(DICTIONARIES[locale].info.rows.length).toBe(ja.info.rows.length);
  });

  it.each(NON_JA_LOCALES)("access.routes length matches ja in %s", (locale) => {
    expect(DICTIONARIES[locale].access.routes.length).toBe(ja.access.routes.length);
  });
});

describe("dictionaries — fixed values across locales", () => {
  it.each(LOCALES)("brand.name stays as 'かき恭' in %s", (locale) => {
    expect(DICTIONARIES[locale].brand.name).toBe("かき恭");
  });

  it.each(LOCALES)("contact.phoneDisplay stays as '0776-23-0595' in %s", (locale) => {
    expect(DICTIONARIES[locale].contact.phoneDisplay).toBe("0776-23-0595");
  });

  it.each(LOCALES)("contact.postal stays as '〒910-0006' in %s", (locale) => {
    expect(DICTIONARIES[locale].contact.postal).toBe("〒910-0006");
  });

  it.each(LOCALES)("contact.addressPrimary stays in Japanese in %s", (locale) => {
    expect(DICTIONARIES[locale].contact.addressPrimary).toBe("福井県福井市中央 3-10-8");
  });

  it.each(LOCALES)("footer.copyright contains {year} placeholder in %s", (locale) => {
    expect(DICTIONARIES[locale].footer.copyright).toContain("{year}");
  });
});

describe("dictionaries — required strings are non-empty", () => {
  it.each(LOCALES)("meta.title is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].meta.title.trim()).not.toBe("");
  });

  it.each(LOCALES)("meta.description is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].meta.description.trim()).not.toBe("");
  });

  it.each(LOCALES)("meta.ogTitle is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].meta.ogTitle.trim()).not.toBe("");
  });

  it.each(LOCALES)("meta.ogDescription is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].meta.ogDescription.trim()).not.toBe("");
  });

  it.each(LOCALES)("nav.concept.primary is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].nav.concept.primary.trim()).not.toBe("");
  });

  it.each(LOCALES)("nav.cuisine.primary is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].nav.cuisine.primary.trim()).not.toBe("");
  });

  it.each(LOCALES)("nav.gallery.primary is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].nav.gallery.primary.trim()).not.toBe("");
  });

  it.each(LOCALES)("nav.info.primary is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].nav.info.primary.trim()).not.toBe("");
  });

  it.each(LOCALES)("nav.access.primary is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].nav.access.primary.trim()).not.toBe("");
  });

  it.each(LOCALES)("nav.reserveDesktop is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].nav.reserveDesktop.trim()).not.toBe("");
  });

  it.each(LOCALES)("hero.ctaAbout is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].hero.ctaAbout.trim()).not.toBe("");
  });

  it.each(LOCALES)("hero.ctaReserve is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].hero.ctaReserve.trim()).not.toBe("");
  });

  it.each(LOCALES)("concept.heading.main is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].concept.heading.main.trim()).not.toBe("");
  });

  it.each(LOCALES)("cuisine.heading.main is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].cuisine.heading.main.trim()).not.toBe("");
  });

  it.each(LOCALES)("gallery.heading.main is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].gallery.heading.main.trim()).not.toBe("");
  });

  it.each(LOCALES)("info.heading.main is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].info.heading.main.trim()).not.toBe("");
  });

  it.each(LOCALES)("access.heading.main is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].access.heading.main.trim()).not.toBe("");
  });

  it.each(LOCALES)("reservation.title is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].reservation.title.trim()).not.toBe("");
  });

  it.each(LOCALES)("reservation.ctaReserve is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].reservation.ctaReserve.trim()).not.toBe("");
  });

  it.each(LOCALES)("footer.storeInfoTitle is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].footer.storeInfoTitle.trim()).not.toBe("");
  });

  it.each(LOCALES)("footer.hoursTitle is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].footer.hoursTitle.trim()).not.toBe("");
  });

  it.each(LOCALES)("languageSwitcher.label is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].languageSwitcher.label.trim()).not.toBe("");
  });

  it.each(LOCALES)("languageSwitcher.switchTo is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].languageSwitcher.switchTo.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.welcome is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.welcome.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.dialogAriaLabel is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.dialogAriaLabel.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.headerTitle is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.headerTitle.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.inputPlaceholder is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.inputPlaceholder.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.sendAriaLabel is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.sendAriaLabel.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.openAriaLabel is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.openAriaLabel.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.closeAriaLabel is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.closeAriaLabel.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.thinking is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.thinking.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.errors.network is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.errors.network.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.errors.configMissing is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.errors.configMissing.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.errors.rateLimited is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.errors.rateLimited.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.errors.generationFailed is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.errors.generationFailed.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.errors.safetyBlocked is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.errors.safetyBlocked.trim()).not.toBe("");
  });

  it.each(LOCALES)("chatbot.errors.invalidRequest is non-empty in %s", (locale) => {
    expect(DICTIONARIES[locale].chatbot.errors.invalidRequest.trim()).not.toBe("");
  });
});

describe("dictionaries — courses", () => {
  const courseIndexes = [0, 1, 2] as const;

  it.each(LOCALES.flatMap((locale) => courseIndexes.map((i) => [locale, i] as const)))(
    "%s cuisine.courses[%i].name is non-empty",
    (locale, i) => {
      expect(DICTIONARIES[locale].cuisine.courses[i]!.name.trim()).not.toBe("");
    },
  );

  it.each(LOCALES.flatMap((locale) => courseIndexes.map((i) => [locale, i] as const)))(
    "%s cuisine.courses[%i].description is non-empty",
    (locale, i) => {
      expect(DICTIONARIES[locale].cuisine.courses[i]!.description.trim()).not.toBe("");
    },
  );

  it.each(LOCALES.flatMap((locale) => courseIndexes.map((i) => [locale, i] as const)))(
    "%s cuisine.courses[%i].price is non-empty",
    (locale, i) => {
      expect(DICTIONARIES[locale].cuisine.courses[i]!.price.trim()).not.toBe("");
    },
  );
});
