import { Toaster } from "@kakikyo-lp/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/header";
import Footer from "../components/footer";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "割烹料亭 かき恭 | 福井・牡蛎料理と季節の会席" },
      {
        name: "description",
        content:
          "福井・福井城址大名町の割烹料亭「かき恭」。創業以来受け継がれる技と地元の旬を、冬は牡蛎料理、四季折々は会席料理としてお届けします。ご予約承り中。",
      },
      { name: "theme-color", content: "#f4efe6" },
      { property: "og:title", content: "割烹料亭 かき恭" },
      {
        property: "og:description",
        content: "福井・福井城址大名町、冬の牡蛎料理と四季の会席をご用意する割烹料亭。",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:locale", content: "ja_JP" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="min-h-svh bg-background text-foreground">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
