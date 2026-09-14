import type { OptionalEntity, SiteEntity } from "@/types/seo";
import { CLINIC } from "@/config/clinic";
import { topicConfig } from "@/config/topic";
import { getSiteUrl } from "@/lib/site-url";

/** 검색 주제·사이트 브랜드 (HOME title/H1 KEEP) */
export const siteEntity: SiteEntity = {
  name: topicConfig.siteName,
  type: "WebSite",
  description:
    "노안과 백내장의 차이부터 수술비용, 회복기간, 주의사항, 병원 선택과 FAQ까지 정리하는 정보 사이트",
  logo: "/icon.svg",
  language: topicConfig.locale,
};

/**
 * 의료기관 Entity — 에스앤비안과의원.
 * 사이트 브랜드(노안백내장)와 분리한다.
 */
export const medicalClinicEntity = {
  enabled: true as const,
  name: CLINIC.name,
  legalName: CLINIC.legalName,
  brandName: CLINIC.brandName,
  description: `${CLINIC.name}에서 제공하는 노안·백내장 관련 진료·상담 안내`,
  url: CLINIC.officialSiteUrl,
  telephone: CLINIC.phoneDisplay,
  address: CLINIC.address,
  logo: CLINIC.logoPath,
};

/** 사이트 법적 운영주체 — 미확정 */
export const operatorEntity: OptionalEntity = {
  enabled: false,
};

/** @deprecated 광고주/스폰서 미사용 */
export const sponsorEntity: OptionalEntity = {
  enabled: false,
};

/** 검수자 Person/UI 미사용 — enabled false 유지 */
export const reviewerEntity: OptionalEntity = {
  enabled: false,
};

export const SITE = {
  name: siteEntity.name,
  shortName: siteEntity.name,
  tagline: siteEntity.description,
  locale: topicConfig.locale.replace("-", "_"),
  categoryLabel: topicConfig.defaultCategory,
  primaryKeyword: topicConfig.primaryKeyword,
  get url() {
    return getSiteUrl();
  },
  publisher: {
    name: siteEntity.name,
    type: "Organization" as const,
  },
} as const;

export const VERIFICATION = {
  naver: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || undefined,
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined,
} as const;
