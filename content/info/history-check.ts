import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 상담 전 과거병력 건강상태 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const HISTORY_CHECK_PAGE: ContentPage = {
  id: "historyCheck",
  order: 112,
  numberLabel: "02",
  slug: "노안백내장-상담-전-병력-확인",
  href: ROUTES.historyCheck,
  navLabel: "노안백내장 상담 전 병력 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 상담 전 과거병력·건강상태, 무엇을 확인하나요?",
  heading: "노안백내장 상담 전 과거병력·건강상태, 무엇을 확인하나요?",
  breadcrumbLabel: "노안백내장 상담 전 병력 확인",
  infoTopicLabel: "검사·상담 준비",
  infoCardDescription:
    "안과 질환 이력과 전신 병력을 상담 전에 정리해 두면 좋은 이유와 항목을 안내합니다.",
  intro: [
    "노안백내장 상담에서는 현재 시야 불편뿐 아니라 과거 안과 질환·수술 이력, 당뇨 등 전신 병력이 검사 해석과 계획 수립에 참고가 될 수 있습니다. 병력을 정리해 두면 상담이 더 구체적으로 진행될 수 있습니다.",
    "이 글은 상담 전 정리해 두면 도움이 되는 병력 항목을 안내하는 일반적인 의료정보이며, 특정 병력이 있다고 해서 수술 가능 여부를 단정하지 않습니다. 최종 판단은 검사와 상담을 통해 이뤄져야 합니다.",
  ],
  hubContextLink: {
    before: "병력 정리 외에 검사·복용약 확인까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-09-14",
  faqIds: [
    "history-check-01",
    "history-check-02",
    "history-check-03",
    "history-check-04",
    "history-check-05",
  ],
  faqTitle: "노안백내장 상담 전 병력 확인 자주 묻는 질문",
  conclusion: [
    "과거 안과 질환·수술 이력과 전신 병력은 검사 결과 해석과 수술·렌즈 상담에 참고가 될 수 있는 정보입니다. 특정 병력이 있다는 이유만으로 수술이 어렵다고 단정할 수 없으며, 상담을 통해 개인별 상황을 확인해야 합니다.",
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
  relatedGuideIds: ["medicationCheck", "consultationQuestions", "preExam"],
  keySummary: [
    {
      numberLabel: "01",
      title: "안과 이력",
      text: "과거 안과 질환·수술·레이저 치료 이력을 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "전신 병력",
      text: "당뇨 등 눈 건강과 관련될 수 있는 전신 질환을 함께 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "가족력",
      text: "가족 중 비슷한 안과 질환이 있었는지도 참고 정보가 될 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "상담 활용",
      text: "정리한 병력은 검사 결과를 설명받을 때 함께 이야기합니다.",
    },
  ],
  seo: {
    title: "노안백내장 상담 전 과거병력·건강상태, 무엇을 확인하나요? | 노안백내장",
    description:
      "노안백내장 상담 전 안과 질환 이력과 전신 병력을 정리하는 이유와 확인할 항목을 안내합니다.",
    keywords: [
      "노안백내장 병력",
      "백내장 상담 전 병력",
      "백내장 건강상태 확인",
      "노안백내장 상담 준비",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "history-check-why",
      order: 1,
      numberLabel: "01",
      heading: "왜 과거 병력을 상담 전에 정리해야 하나요?",
      layout: "prose",
      decorativeIcon: "📋",
      directAnswer:
        "과거 안과 질환·수술 이력과 전신 병력은 검사 결과를 해석하고 수술·렌즈 상담을 진행하는 과정에서 참고가 될 수 있는 정보이기 때문입니다.",
      paragraphs: [
        "녹내장, 망막 질환, 각막 질환처럼 눈과 관련된 과거 진단이나 레이저·수술 치료 이력이 있다면, 현재 검사 결과를 해석하는 데 함께 고려되는 경우가 있다고 알려져 있습니다.",
        "당뇨, 고혈압 등 전신 질환도 눈 건강과 관련해 논의되는 경우가 있어 함께 정리해 두는 편이 도움이 됩니다. 다만 이는 개인마다 다를 수 있는 사안이며, 이 글에서 특정 질환의 영향을 단정하지 않습니다.",
        "기억이 흐릿한 이력이 있다면 이전에 다닌 병원 진료기록을 미리 요청해 두는 것도 방법이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "노안백내장 수술 전 검사 안내 보기",
    },
    {
      id: "history-check-list",
      order: 2,
      numberLabel: "02",
      heading: "어떤 항목을 정리하면 좋은가요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "과거 안과 질환·수술·레이저 치료 이력, 당뇨 등 전신 병력, 알레르기, 가족력을 시기와 함께 정리해 두면 상담에 도움이 됩니다.",
      paragraphs: [
        "진단명이 정확히 기억나지 않더라도 언제, 어떤 증상으로 진료를 받았는지 정리해 두면 상담에서 의료진이 맥락을 파악하는 데 참고가 될 수 있습니다.",
      ],
      bullets: [
        "과거 안과 질환·수술·레이저 치료 이력(라식·라섹 등 시력교정술 포함)",
        "망막·황반 등 동반 안질환·치료력",
        "당뇨, 고혈압 등 전신 질환 여부",
        "복용 약·약물·기타 알레르기 이력",
        "가족 중 비슷한 안과 질환 병력",
      ],
      relatedHref: ROUTES.medicationCheck,
      relatedLabel: "노안백내장 수술 전 복용약 확인 보기",
    },
    {
      id: "history-check-impact",
      order: 3,
      numberLabel: "03",
      heading: "병력이 있으면 수술이 어려워지나요?",
      layout: "prose",
      decorativeIcon: "🩺",
      directAnswer:
        "특정 병력이 있다는 이유만으로 수술이 불가능하다고 단정할 수 없습니다. 병력에 따라 검사에서 추가로 확인하는 항목이 달라질 수 있다는 의미로 이해하는 편이 정확합니다.",
      paragraphs: [
        "병력이 있는 경우 검사 범위나 상담 방향이 달라질 수 있지만, 이는 개인 상태와 의료진 평가에 따라 다르게 설명될 수 있는 부분입니다. 인터넷 정보만으로 가능·불가능을 판단하기보다 검사와 상담을 통해 확인해야 합니다.",
        "동반 질환이 있다면 안과뿐 아니라 관련 진료과와의 협진이 필요할 수 있다는 점도 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 안내 보기",
    },
    {
      id: "history-check-talk",
      order: 4,
      numberLabel: "04",
      heading: "상담에서 병력을 어떻게 전달하면 좋을까요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "정리한 병력 목록을 상담 초반에 먼저 전달하고, 검사 결과를 설명받을 때 관련된 부분이 있으면 함께 질문하는 방식이 도움이 됩니다.",
      paragraphs: [
        "정확한 시기와 진단명을 기억하지 못해도 괜찮습니다. 아는 만큼 구체적으로 전달하고, 필요하면 이전 진료기록을 활용해 보완할 수 있습니다.",
        "상담에서 추가로 물어볼 질문이 있다면 함께 정리해 두면 이해가 더 명확해질 수 있습니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
