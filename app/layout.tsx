import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobilePhoneBar";
import { ScrollToTopOnNavigate } from "@/components/layout/ScrollToTopOnNavigate";
import { HOME_SEO } from "@/content/pages/home";
import { buildPageMetadata, DEFAULT_OG_IMAGE } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site-url";

import "./globals.css";
import "@/styles/header.css";

const baseMetadata = buildPageMetadata({
  seo: HOME_SEO,
  path: "/",
  type: "website",
});

const ogImage = DEFAULT_OG_IMAGE;

export const metadata: Metadata = {
  ...baseMetadata,

  metadataBase: new URL(absoluteUrl("/")),

  applicationName: "노안백내장",

  title: {
    absolute: HOME_SEO.title,
  },

  verification: {
    other: {
      "naver-site-verification":
        "a1dabda7342da9966de7827e0502703515ec941f",
    },
  },

  openGraph: {
    ...baseMetadata.openGraph,
    type: "website",
    url: absoluteUrl("/"),
    siteName: "노안백내장",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "노안백내장 가이드",
      },
    ],
  },

  twitter: {
    ...baseMetadata.twitter,
    card: "summary_large_image",
    images: [ogImage],
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