import { createFileRoute } from "@tanstack/react-router";

import Home from "../components/home";
import { isLocale, type Locale } from "../i18n/index";
import { buildHead } from "../i18n/meta";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const locale: Locale = isLocale(params.locale) ? params.locale : "ja";
    return buildHead(locale);
  },
  component: Home,
});
