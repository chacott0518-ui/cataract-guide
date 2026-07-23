import type { Metadata } from "next";

import { SITE, VERIFICATION } from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";
import type { PageSeo } from "@/types/content";

/** 공유·OG 기본 이미지 (1200×630) */
export const DEFAULT_OG_IMAGE = "/images/og/cataractguide-kakao.png";

type BuildMetadataOptions = {
  seo: PageSeo;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

function buildVerification(): Metadata["verification"] | undefined {
  if (!VERIFICATION.google && !VERIFICATION.naver && !VERIFICATION.bing) {
    return undefined;
  }

  return {
    google: VERIFICATION.google,
    other: {
      ...(VERIFICATION.naver
        ? { "naver-site-verification": VERIFICATION.naver }
        : {}),
      ...(VERIFICATION.bing
        ? { "msvalidate.01": VERIFICATION.bing }
        : {}),
    },
  };
}

export function buildPageMetadata({
  seo,
  path,
  type = "article",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imagePath = seo.socialImage || DEFAULT_OG_IMAGE;
  const imageUrl = absoluteUrl(imagePath);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    category: seo.category,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
    verification: buildVerification(),
  };
}
