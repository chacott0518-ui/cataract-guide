import { ROUTES } from "@/config/routes";

/**
 * 상세 페이지 UI 기본값.
 * 컴포넌트에 업종·키워드를 하드코딩하지 않고 여기서 제어한다.
 */
export const contentUiConfig = {
  showArticleEyebrow: false,
  mobileShowMenuNumber: false,
  /** 현재 콘텐츠에서는 본문 중간 반복 이미지를 사용하지 않는다 */
  repeatImageBeforeSectionNumber: null as string | null,
} as const;

export type FaqHubCardConfig = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

/** 상세 콘텐츠 하단 FAQ 허브 카드 (신규 통합 FAQ 페이지에서는 미출력) */
export const FAQ_HUB_CARD: FaqHubCardConfig = {
  title: "더 많은 자주 묻는 질문 보기",
  description:
    "수술비용·렌즈·회복기간·주의사항·병원선택 질문을 한곳에서 확인하세요.",
  linkLabel: "FAQ 전체 보기 →",
  href: ROUTES.faqQuestions,
};
