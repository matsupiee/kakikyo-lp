import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

import { isLocale } from "../i18n/index";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (params.locale === "ja" || !isLocale(params.locale)) {
      throw notFound();
    }
  },
  component: Outlet,
});
