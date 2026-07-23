import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { FAQ_HUB_GROUPS } from "@/content/faqs";
import type { ContentPage } from "@/types/content";

export const FAQ_PAGE: ContentPage = {
  id: "faq",
  order: 6,
  numberLabel: "06",
  slug: "노안백내장-faq",
  href: ROUTES.faq,
  navLabel: "노안백내장 FAQ",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 FAQ",

  heading: "노안백내장 FAQ, 자주 묻는 질문을 한눈에 확인해보세요",
  intro: [
    "노안백내장 FAQ는 노안과 백내장 차이, 증상·검사, 수술비용·렌즈, 회복·생활 관리, 병원선택·후기 확인으로 나누어 정리했습니다. 각 답변은 일반적인 정보 안내이며 개인 진료를 대체하지 않습니다.",
    "눈 상태와 생활 패턴에 따라 답이 달라질 수 있으므로, 관심 주제의 상세 페이지와 함께 읽고 최종 확인은 검사와 상담에서 받으세요.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-22",
  faqIds: [],
  faqTitle: "노안백내장 자주 묻는 질문",
  conclusion: [
    "자주 묻는 질문은 정보 탐색의 출발점입니다. 같은 질문이라도 검사 결과와 생활 방식에 따라 확인해야 할 내용이 달라질 수 있습니다.",
    "수술비용, 회복기간, 주의사항, 병원선택, 후기 확인 기준 페이지를 함께 살펴본 뒤, 본인에게 중요한 항목은 상담에서 직접 확인하세요.",
  ],
  thumbnail: TOPIC_MEDIA.faq.thumbnail,
  topImages: [TOPIC_MEDIA.faq.thumbnail],
  bodyImage: TOPIC_MEDIA.faq.secondaryImage,
  heroImage: TOPIC_MEDIA.faq.thumbnail,
  secondaryImage: TOPIC_MEDIA.faq.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.faq.secondaryImage,
  accentColor: TOPIC_MEDIA.faq.accentColor,
  accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  repeatImageBeforeSectionNumber: null,
  seo: {
    title: "노안백내장 FAQ | 노안백내장",
    description:
      "노안백내장 FAQ에서 노안과 백내장 차이, 증상·검사, 수술비용·렌즈, 회복과 병원 선택에 관한 자주 묻는 질문을 주제별로 확인하세요.",
    keywords: [
      "노안백내장 FAQ",
      "백내장 자주 묻는 질문",
      "노안백내장 질문",
      "백내장 수술 질문",
      "인공수정체 질문",
    ],
    ogImage: TOPIC_MEDIA.faq.thumbnail.src,
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  sections: FAQ_HUB_GROUPS.map((group) => ({
    id: group.id,
    order: Number(group.numberLabel),
    numberLabel: group.numberLabel,
    heading: group.heading,
    directAnswer: group.directAnswer,
    paragraphs: [...group.paragraphs],
    faqIds: [...group.faqIds],
    relatedHref:
      group.id === "faq-cost-lens"
        ? ROUTES.cost
        : group.id === "faq-recovery-life"
          ? ROUTES.recovery
          : group.id === "faq-caution"
            ? ROUTES.precautions
            : group.id === "faq-hospital"
              ? ROUTES.hospital
              : group.id === "faq-reviews"
                ? ROUTES.reviews
                : group.id === "faq-diff" || group.id === "faq-symptoms"
                  ? ROUTES.precautions
                  : ROUTES.hospital,
    relatedLabel:
      group.id === "faq-cost-lens"
        ? "노안백내장 수술비용 자세히 보기"
        : group.id === "faq-recovery-life"
          ? "노안백내장 회복기간 자세히 보기"
          : group.id === "faq-caution" || group.id === "faq-diff"
            ? "노안백내장 주의사항 자세히 보기"
            : group.id === "faq-hospital"
              ? "노안백내장 병원선택 기준 보기"
              : group.id === "faq-reviews"
                ? "노안백내장 후기 확인 기준 보기"
                : group.id === "faq-symptoms"
                  ? "노안백내장 병원선택 기준 보기"
                  : "노안백내장 FAQ 전체 보기",
  })),
};
