import type { OptionalEntity, SiteEntity } from "@/types/seo";
import { topicConfig } from "@/config/topic";
import { getSiteUrl } from "@/lib/site-url";

export const siteEntity: SiteEntity = {
  name: topicConfig.siteName,
  type: "WebSite",
  description:
    "노안과 백내장의 차이부터 수술비용, 회복기간, 주의사항, 병원 선택과 FAQ까지 정리하는 정보 사이트",
  logo: "/icon.svg",
  language: topicConfig.locale,
};

/** 실제 운영 주체가 확정될 때만 enabled=true */
export const operatorEntity: OptionalEntity = {
  enabled: false,
};

/** 광고주 확정 시에만 enabled=true */
export const sponsorEntity: OptionalEntity = {
  enabled: false,
};

/** 실제 의료진 검수가 있을 때만 enabled=true */
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
