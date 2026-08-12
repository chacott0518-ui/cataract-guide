import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 과정 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const PROCEDURE_PROCESS_PAGE: ContentPage = {
  id: "procedureProcess",
  order: 124,
  numberLabel: "04",
  slug: "노안백내장-수술-과정",
  href: ROUTES.procedureProcess,
  navLabel: "노안백내장 수술 과정",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 과정은 어떻게 확인하나요?",
  heading: "노안백내장 수술 과정은 어떻게 확인하나요?",
  breadcrumbLabel: "노안백내장 수술 과정",
  infoTopicLabel: "렌즈·수술 이해",
  infoCardDescription:
    "수술 전반적인 진행 흐름과 상담 전에 확인할 수 있는 절차 정보를 안내합니다.",
  intro: [
    "노안백내장 수술은 혼탁해진 수정체를 제거하고 인공수정체를 삽입하는 절차로 알려져 있습니다. 구체적인 진행 방식은 병원과 의료진, 개인 상태에 따라 달라질 수 있어 특정 병원의 방식을 표준으로 단정할 수 없습니다.",
    "이 글은 일반적으로 알려진 수술 진행 흐름과 상담 전에 확인할 수 있는 절차 정보를 정리한 의료정보이며, 실제 진행 방식은 상담에서 직접 확인해야 합니다.",
  ],
  hubContextLink: {
    before: "수술 과정 외에 검사·렌즈 상담까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "procedure-process-01",
    "procedure-process-02",
    "procedure-process-03",
    "procedure-process-04",
    "procedure-process-05",
  ],
  faqTitle: "노안백내장 수술 과정 자주 묻는 질문",
  conclusion: [
    "수술 과정에 대한 일반적인 흐름을 미리 이해해 두면 상담에서 궁금한 점을 더 구체적으로 질문할 수 있습니다. 다만 실제 진행 방식과 소요 시간은 병원과 개인 상태에 따라 달라질 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·치료 결정을 대신하지 않습니다.",
  ],
  thumbnail: IMAGE,
  topImages: [],
  bodyImage: null,
  heroImage: IMAGE,
  secondaryImage: null,
  repeatImage: null,
  inlineImage: IMAGE,
  accentColor: "#1758C9",
  accentHoverColor: "#0D3F99",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  showPublishedDate: true,
  repeatImageBeforeSectionNumber: null,
  relatedGuideIds: ["bothEyesSchedule", "iolInfoCheck", "dailyLifeAfter"],
  keySummary: [
    {
      numberLabel: "01",
      title: "전반적 흐름",
      text: "마취, 수정체 제거, 인공수정체 삽입 순서로 알려져 있습니다.",
    },
    {
      numberLabel: "02",
      title: "소요 시간",
      text: "예상 소요시간은 병원과 개인 상태에 따라 달라질 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "당일 절차",
      text: "수술 당일 준비·회복 관찰 절차도 병원마다 다를 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "질문 준비",
      text: "구체적인 진행 방식은 상담에서 직접 확인하는 것이 정확합니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 과정은 어떻게 확인하나요? | 노안백내장",
    description:
      "노안백내장 수술 진행 흐름과 상담 전에 확인할 수 있는 절차 정보를 안내합니다.",
    keywords: [
      "노안백내장 수술 과정",
      "백내장 수술 절차",
      "노안백내장 수술 진행",
      "백내장 수술 방법",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "procedure-process-flow",
      order: 1,
      numberLabel: "01",
      heading: "수술은 어떤 순서로 진행되나요?",
      layout: "steps",
      decorativeIcon: "🔎",
      directAnswer:
        "일반적으로 마취, 각막 절개, 혼탁한 수정체 제거, 인공수정체 삽입 순서로 진행된다고 알려져 있습니다. 다만 세부 방식은 병원과 장비, 개인 상태에 따라 달라질 수 있습니다.",
      paragraphs: [
        "아래 단계는 일반적으로 알려진 흐름을 요약한 것이며, 실제 진행 방식과 사용 장비는 병원마다 차이가 있을 수 있습니다. 특정 방식이 모든 병원의 표준이라고 단정하지 않습니다.",
      ],
      steps: [
        { label: "마취", text: "점안 마취 등 방식은 병원·상태에 따라 다를 수 있습니다." },
        { label: "각막 절개", text: "수정체에 접근하기 위한 작은 절개가 이뤄집니다." },
        { label: "수정체 제거", text: "혼탁해진 수정체를 제거하는 단계입니다." },
        { label: "인공수정체 삽입", text: "선택한 인공수정체를 삽입합니다." },
      ],
      relatedHref: ROUTES.iolInfoCheck,
      relatedLabel: "노안백내장 인공수정체 정보 확인 보기",
    },
    {
      id: "procedure-process-time",
      order: 2,
      numberLabel: "02",
      heading: "수술 시간은 얼마나 걸리나요?",
      layout: "prose",
      decorativeIcon: "⏱️",
      directAnswer:
        "예상 소요시간은 병원, 장비, 개인의 눈 상태에 따라 달라질 수 있어 특정 시간을 일률적으로 단정하기는 어렵습니다.",
      paragraphs: [
        "짧은 시간에 끝난다고 안내받는 경우가 있더라도, 이는 수술 자체의 소요시간을 의미할 수 있으며 대기·준비·회복 관찰 시간은 별도로 소요될 수 있습니다. 전체 방문 시간을 상담에서 함께 확인하는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.bothEyesSchedule,
      relatedLabel: "노안백내장 양안 수술 일정 상담 보기",
    },
    {
      id: "procedure-process-day",
      order: 3,
      numberLabel: "03",
      heading: "수술 당일에는 무엇을 확인하나요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "수술 전 준비사항, 마취 방식, 수술 후 관찰 시간, 귀가 시 주의사항을 병원에서 안내받게 되며, 병원마다 세부 절차가 다를 수 있습니다.",
      paragraphs: [
        "수술 당일 진행되는 절차는 병원 안내를 기준으로 확인하는 것이 정확하며, 이 글에서 특정 병원의 절차를 표준으로 제시하지 않습니다.",
      ],
      bullets: [
        "수술 전 금식 등 준비사항 안내 여부",
        "마취 방식과 예상 느낌 설명 여부",
        "수술 직후 관찰 시간",
        "귀가 시 주의사항과 보호자 동행 필요 여부",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 안내 보기",
    },
    {
      id: "procedure-process-after",
      order: 4,
      numberLabel: "04",
      heading: "수술 후 바로 회복이 확인되나요?",
      layout: "prose",
      decorativeIcon: "📅",
      directAnswer:
        "수술 직후 시야가 바로 안정된다고 단정할 수 없으며, 회복 속도는 개인차가 있을 수 있습니다. 경과 확인 일정은 병원 안내에 따라 달라질 수 있습니다.",
      paragraphs: [
        "수술 직후부터 안정화까지의 과정과 생활 관리 방법은 회복기간 안내에서 더 자세히 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 안내 보기",
    },
  ],
};
