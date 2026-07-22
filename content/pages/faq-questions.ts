import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { FAQ_QUESTIONS_30_GROUPS } from "@/content/faqs/questions-30";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.faqHub;

export const FAQ_QUESTIONS_PAGE: ContentPage = {
  id: "faqHub",
  order: 7,
  numberLabel: "07",
  slug: "노안백내장-자주묻는질문",
  href: ROUTES.faqQuestions,
  navLabel: "노안백내장 자주 묻는 질문",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 자주 묻는 질문 30가지",
  breadcrumbLabel: "노안백내장 자주 묻는 질문",
  heading: "노안백내장 자주 묻는 질문 30가지",
  intro: [
    "노안과 백내장의 차이부터 검사, 수술비용, 인공수정체, 회복기간, 주의사항과 병원 선택까지 자주 묻는 내용을 분야별로 정리했습니다. 각 답변은 일반적인 건강정보이며 개인의 검사 결과와 진료 상황에 따라 달라질 수 있습니다.",
  ],
  publishedAt: "2026-07-22",
  updatedAt: "2026-07-22",
  faqIds: [],
  faqTitle: "노안백내장 자주 묻는 질문 30가지",
  conclusion: [
    "같은 질문이라도 눈 상태와 생활 방식에 따라 확인해야 할 내용이 달라질 수 있습니다. 관심 주제의 상세 안내와 검사·상담을 함께 참고하세요.",
  ],
  thumbnail: media.thumbnail,
  topImages: [],
  bodyImage: null,
  heroImage: media.thumbnail,
  secondaryImage: null,
  repeatImage: null,
  repeatImageBeforeSectionNumber: null,
  inlineImage: media.thumbnail,
  accentColor: media.accentColor,
  accentHoverColor: media.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: false,
  showFaqHub: false,
  seo: {
    title: "노안백내장 자주 묻는 질문 30가지 | 비용·렌즈·회복",
    description:
      "노안과 백내장의 차이, 검사, 수술비용, 인공수정체, 회복기간, 수술 전후 주의사항과 병원 선택에 관한 자주 묻는 질문을 분야별로 확인해보세요.",
    keywords: [
      "노안백내장 자주 묻는 질문",
      "노안백내장 FAQ 30가지",
      "백내장 수술비용 질문",
      "인공수정체 질문",
      "백내장 회복기간 질문",
      "백내장 주의사항 질문",
      "백내장 병원 선택 질문",
    ],
    ogImage: media.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: FAQ_QUESTIONS_30_GROUPS.map((group) => ({
    id: group.id,
    order: Number(group.numberLabel),
    numberLabel: group.numberLabel,
    heading: group.heading,
    paragraphs: [],
    faqIds: [...group.faqIds],
  })),
};
