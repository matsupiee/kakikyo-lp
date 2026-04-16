import { createFileRoute } from "@tanstack/react-router";

import Home from "../components/home";
import { buildHead } from "../i18n/meta";

export const Route = createFileRoute("/")({
  head: () => buildHead("ja"),
  component: Home,
});
