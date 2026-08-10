import { PRE_EXAM_PAGE } from "@/content/pages/pre-exam";
import type { ContentPage, InfoGuideCard } from "@/types/content";

/** 상단 6개 핵심 카드 밖의 의료정보 가이드 (GNB/CONTENT_CARDS 미포함) */
export const INFO_GUIDE_PAGES: ContentPage[] = [PRE_EXAM_PAGE];

function toInfoCard(page: ContentPage): InfoGuideCard {
  return {
    id: page.id as InfoGuideCard["id"],
    href: page.href,
    topicLabel: page.infoTopicLabel || page.navLabel,
    title: page.h1,
    description: page.infoCardDescription || page.seo.description,
    publishedAt: page.publishedAt,
    topicName: page.infoTopicLabel || page.navLabel,
  };
}

/** 홈 ‘노안백내장 관련 정보’ 섹션용 — 배열 추가만으로 카드 증가 */
export const INFO_GUIDE_CARDS: InfoGuideCard[] = INFO_GUIDE_PAGES.map(toInfoCard);
