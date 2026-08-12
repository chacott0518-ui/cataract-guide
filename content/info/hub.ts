import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { INFO_GUIDE_PAGES } from "@/content/info";
import type { ContentPage, InfoGuideId, PageSeo } from "@/types/content";

export type InfoHubCategoryId =
  | "examConsult"
  | "lensProcedure"
  | "recoveryLife"
  | "progressCaution"
  | "understanding";

export type InfoHubCategory = {
  id: InfoHubCategoryId;
  label: string;
  emoji: string;
  guideIds: InfoGuideId[];
};

/** 허브 카테고리 — InfoGuide id를 그룹핑만 하고 콘텐츠는 그대로 재사용한다 */
export const INFO_HUB_CATEGORIES: InfoHubCategory[] = [
  {
    id: "examConsult",
    label: "검사·상담",
    emoji: "🔎",
    guideIds: [
      "preExam",
      "medicationCheck",
      "historyCheck",
      "consultationQuestions",
    ],
  },
  {
    id: "lensProcedure",
    label: "렌즈·수술 이해",
    emoji: "👁",
    guideIds: [
      "iolInfoCheck",
      "lensTypeCheck",
      "targetDistanceConsult",
      "procedureProcess",
      "bothEyesSchedule",
    ],
  },
  {
    id: "recoveryLife",
    label: "회복·생활",
    emoji: "🌿",
    guideIds: ["dailyLifeAfter", "drivingResumeCheck", "glassesChangeCheck"],
  },
  {
    id: "progressCaution",
    label: "경과·주의",
    emoji: "📅",
    guideIds: ["glareCheck", "visionChangeObservation", "symptomCheck"],
  },
  {
    id: "understanding",
    label: "이해·정보",
    emoji: "💡",
    guideIds: ["medicalInfoCheck", "adInfoCheck"],
  },
];

export type InfoHubEntry = {
  id: InfoGuideId;
  href: string;
  title: string;
  description: string;
  categoryId: InfoHubCategoryId;
};

function toEntry(page: ContentPage, categoryId: InfoHubCategoryId): InfoHubEntry {
  return {
    id: page.id as InfoGuideId,
    href: page.href,
    title: page.h1,
    description: page.infoCardDescription || page.seo.description,
    categoryId,
  };
}

export function getInfoHubEntries(): InfoHubEntry[] {
  const entries: InfoHubEntry[] = [];

  for (const category of INFO_HUB_CATEGORIES) {
    for (const guideId of category.guideIds) {
      const page = INFO_GUIDE_PAGES.find((item) => item.id === guideId);
      if (!page) continue;
      entries.push(toEntry(page, category.id));
    }
  }

  return entries;
}

const MAX_RELATED_GUIDES = 6;

/**
 * 상세페이지 하단 "다른 노안백내장 의료정보" 카드용.
 * relatedGuideIds 우선, 부족하면 같은 카테고리에서 자동 보충. 최대 6개, 중복·자기 자신 제외.
 */
export function getRelatedInfoGuides(page: ContentPage): ContentPage[] {
  const result: ContentPage[] = [];
  const seen = new Set<string>([page.id]);

  const ownCategory = INFO_HUB_CATEGORIES.find((category) =>
    category.guideIds.includes(page.id as InfoGuideId),
  );

  for (const id of page.relatedGuideIds ?? []) {
    if (seen.has(id)) continue;
    const related = INFO_GUIDE_PAGES.find((item) => item.id === id);
    if (!related) continue;
    result.push(related);
    seen.add(related.id);
    if (result.length >= MAX_RELATED_GUIDES) return result;
  }

  if (ownCategory) {
    for (const id of ownCategory.guideIds) {
      if (result.length >= MAX_RELATED_GUIDES) break;
      if (seen.has(id)) continue;
      const related = INFO_GUIDE_PAGES.find((item) => item.id === id);
      if (!related) continue;
      result.push(related);
      seen.add(related.id);
    }
  }

  for (const candidate of INFO_GUIDE_PAGES) {
    if (result.length >= MAX_RELATED_GUIDES) break;
    if (seen.has(candidate.id)) continue;
    result.push(candidate);
    seen.add(candidate.id);
  }

  return result;
}

export const INFO_HUB_SEO: PageSeo = {
  title: "노안백내장 의료정보 | 상담·렌즈·회복 가이드 탐색 | 노안백내장",
  description:
    "노안백내장 검사·상담 준비, 렌즈·수술 이해, 회복·생활, 경과·주의, 의료정보 확인까지 주제별로 정리한 노안백내장 의료정보 탐색 허브입니다.",
  keywords: ["노안백내장 의료정보", "노안백내장 가이드", "노안백내장 정보 모음"],
  ogImage: "/images/og/cataractguide-kakao.png",
  socialImage: "/images/og/cataractguide-kakao.png",
  category: SITE.categoryLabel,
};
