import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobilePhoneBar";
import { ScrollToTopOnNavigate } from "@/components/layout/ScrollToTopOnNavigate";
import { HOME_SEO } from "@/content/pages/home";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site-url";

import "./globals.css";
import "@/styles/header.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    seo: HOME_SEO,
    path: "/",
    type: "website",
  }),
  metadataBase: new URL(absoluteUrl("/")),
  applicationName: "노안백내장",
  title: {
    absolute: HOME_SEO.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>
        <ScrollToTopOnNavigate />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
