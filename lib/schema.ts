import { SITE } from "@/config/site";
import { CONTENT_CARDS } from "@/lib/content-registry";
import { absoluteUrl } from "@/lib/site-url";
import type { ContentPage } from "@/types/content";
import type { FaqItem } from "@/types/faq";

const DEFAULT_OG_IMAGE = "/images/og/cataractguide-kakao.png";

export function organizationJsonLd() {
  const orgId = absoluteUrl("/#organization");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: SITE.name,
    url: absoluteUrl("/"),
    description: SITE.tagline,
    logo: absoluteUrl("/icon.svg"),
  };
}

export function websiteJsonLd() {
  const siteUrl = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "노안백내장",
    url: siteUrl,
    inLanguage: "ko-KR",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function webPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "WebPage" | "MedicalWebPage";
}) {
  const url = absoluteUrl(options.path);
  const pageType = options.type ?? "WebPage";
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": url,
    name: options.name,
    description: options.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    ...(options.image
      ? { image: absoluteUrl(options.image) }
      : { image: absoluteUrl(DEFAULT_OG_IMAGE) }),
    ...(options.keywords && options.keywords.length > 0
      ? { keywords: options.keywords.slice(0, 8).join(", ") }
      : {}),
  };
}

export function itemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} 주요 콘텐츠`,
    itemListElement: CONTENT_CARDS.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      url: absoluteUrl(card.href),
      image: absoluteUrl(card.image.src),
      description: card.description,
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * 게시·수정일이 콘텐츠 데이터에 있을 때만 Article을 사용한다.
 * 가짜 작성자·기관 정보는 넣지 않는다.
 */
export function articleJsonLd(page: ContentPage) {
  const pageUrl = absoluteUrl(page.href);
  const keywords = page.seo.keywords.slice(0, 8);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.heading,
    description: page.seo.description,
    image: absoluteUrl(page.seo.socialImage || DEFAULT_OG_IMAGE),
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
    inLanguage: "ko-KR",
    articleSection: page.categoryLabel,
    keywords: keywords.join(", "),
    mainEntityOfPage: {
      "@type": "MedicalWebPage",
      "@id": pageUrl,
    },
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl("/노안백내장-faq")}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
