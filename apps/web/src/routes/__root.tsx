import { Toaster } from "@kakikyo-lp/ui/components/sonner";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import ChatWidget from "../components/chatbot/chat-widget";
import Header from "../components/header";
import Footer from "../components/footer";
import { HTML_LANG_MAP, resolveLocale } from "../i18n/index";
import { I18nProvider } from "../i18n/provider";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f4efe6" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = resolveLocale(pathname);

  return (
    <html lang={HTML_LANG_MAP[locale]}>
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nProvider locale={locale}>
          <div className="min-h-svh bg-background text-foreground">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
          <ChatWidget />
        </I18nProvider>
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
