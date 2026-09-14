import { CLINIC } from "@/config/clinic";
import { medicalClinicEntity, SITE } from "@/config/site";
import { CONTENT_CARDS } from "@/lib/content-registry";
import { toIso8601Kst } from "@/lib/dates";
import { absoluteUrl } from "@/lib/site-url";
import type { ContentPage } from "@/types/content";
import type { FaqItem } from "@/types/faq";

const DEFAULT_OG_IMAGE = "/images/og/cataractguide-kakao.png";

/** 사이트 브랜드 Organization (노안백내장) — 검색 주제 */
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

/**
 * 의료기관 MedicalClinic — 화면에 표시되는 에스앤비안과의원 사실과 동일.
 */
export function medicalClinicJsonLd() {
  if (!medicalClinicEntity.enabled) return null;

  const clinicId = absoluteUrl("/#medical-clinic");
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": clinicId,
    name: CLINIC.name,
    legalName: CLINIC.legalName,
    alternateName: [CLINIC.brandName, CLINIC.legalName],
    url: CLINIC.officialSiteUrl,
    telephone: CLINIC.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "논현로 842 압구정빌딩 9층",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    logo: absoluteUrl(CLINIC.logoPath),
    image: absoluteUrl(CLINIC.logoPath),
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
    ...(medicalClinicEntity.enabled
      ? { about: { "@id": absoluteUrl("/#medical-clinic") } }
      : {}),
  };
}

export function webPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "WebPage" | "MedicalWebPage";
  datePublished?: string;
  dateModified?: string;
}) {
  const url = absoluteUrl(options.path);
  const pageType = options.type ?? "WebPage";
  const datePublished = options.datePublished
    ? toIso8601Kst(options.datePublished)
    : undefined;
  const dateModified = options.dateModified
    ? toIso8601Kst(options.dateModified)
    : datePublished;

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
    ...(medicalClinicEntity.enabled
      ? {
          sourceOrganization: {
            "@id": absoluteUrl("/#medical-clinic"),
          },
        }
      : {}),
    ...(options.image
      ? { image: absoluteUrl(options.image) }
      : { image: absoluteUrl(DEFAULT_OG_IMAGE) }),
    ...(options.keywords && options.keywords.length > 0
      ? { keywords: options.keywords.slice(0, 8).join(", ") }
      : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
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

/** /의료정보 허브 — 가이드 디렉터리용 ItemList (FAQPage 대체) */
export function infoHubItemListJsonLd(
  entries: Array<{ title: string; href: string; description: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "노안백내장 의료정보 가이드",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.title,
      url: absoluteUrl(entry.href),
      description: entry.description,
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
    datePublished: toIso8601Kst(page.publishedAt),
    dateModified: toIso8601Kst(page.updatedAt),
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
    ...(medicalClinicEntity.enabled
      ? {
          publisher: { "@id": absoluteUrl("/#organization") },
          sourceOrganization: { "@id": absoluteUrl("/#medical-clinic") },
        }
      : {}),
  };
}

export function faqPageJsonLd(items: FaqItem[], path = "/노안백내장-faq") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
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
