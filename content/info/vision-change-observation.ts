import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 후 시력 변화 관찰 안내",
  width: 1200,
  height: 630,
} as const;

export const VISION_CHANGE_OBSERVATION_PAGE: ContentPage = {
  id: "visionChangeObservation",
  order: 142,
  numberLabel: "02",
  slug: "노안백내장-수술-후-시력-변화-관찰",
  href: ROUTES.visionChangeObservation,
  navLabel: "노안백내장 수술 후 시력 변화 관찰",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 후 시력 변화, 어떻게 관찰하면 되나요?",
  heading: "노안백내장 수술 후 시력 변화, 어떻게 관찰하면 되나요?",
  breadcrumbLabel: "노안백내장 수술 후 시력 변화 관찰",
  infoTopicLabel: "경과·주의",
  infoCardDescription:
    "수술 후 시력 변화를 관찰하는 방법과 경과 확인 시 참고할 점을 안내합니다.",
  intro: [
    "노안백내장 수술 후 시력은 수술 직후부터 점진적으로 변화하며 안정화되는 경우가 많다고 알려져 있습니다. 초기 상태만으로 최종 결과를 예측하기는 어려우며, 일정 기간에 걸쳐 경과를 관찰하는 과정이 필요합니다.",
    "이 글은 시력 변화를 관찰하는 일반적인 방법을 안내하는 의료정보이며, 특정 결과를 예측하거나 보장하지 않습니다.",
  ],
  hubContextLink: {
    before: "시력 변화 관찰 외에 회복기간 전체 흐름까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "vision-change-01",
    "vision-change-02",
    "vision-change-03",
    "vision-change-04",
    "vision-change-05",
  ],
  faqTitle: "노안백내장 수술 후 시력 변화 관찰 자주 묻는 질문",
  conclusion: [
    "시력 변화는 수술 직후부터 안정화 시점까지 단계적으로 관찰하는 것이 일반적이며, 초기 상태만으로 최종 결과를 판단하기는 어렵습니다. 경과 확인 일정은 병원 안내에 따라 정기적으로 확인하는 것이 안전합니다.",
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
  relatedGuideIds: ["glareCheck", "symptomCheck", "glassesChangeCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "점진적 변화",
      text: "시력은 수술 직후부터 점진적으로 변화할 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "관찰 방법",
      text: "거리별 선명도 변화를 기록해 두면 상담에 도움이 됩니다.",
    },
    {
      numberLabel: "03",
      title: "정기 확인",
      text: "병원에서 안내하는 일정에 맞춰 경과를 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "이상 신호",
      text: "갑작스러운 악화는 자가 판단보다 문의를 우선합니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 후 시력 변화, 어떻게 관찰하면 되나요? | 노안백내장",
    description:
      "노안백내장 수술 후 시력 변화를 관찰하는 방법과 경과 확인 시 참고할 점을 안내합니다.",
    keywords: [
      "노안백내장 수술 후 시력",
      "백내장 수술 후 시력 변화",
      "백내장 수술 경과 관찰",
      "노안백내장 시력 회복",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "vision-change-flow",
      order: 1,
      numberLabel: "01",
      heading: "시력은 어떻게 변화하나요?",
      layout: "timeline",
      decorativeIcon: "📈",
      directAnswer:
        "수술 직후에는 시야가 흐리거나 불안정하게 느껴질 수 있고, 이후 며칠에서 몇 주에 걸쳐 점진적으로 안정화되는 경우가 많다고 알려져 있습니다. 다만 안정화 속도는 개인차가 있습니다.",
      paragraphs: [
        "아래 흐름은 일반적으로 알려진 경과를 단계로 요약한 것이며, 실제 속도와 최종 결과는 개인의 눈 상태에 따라 다르게 나타날 수 있습니다.",
      ],
      timeline: [
        { label: "수술 직후", text: "시야가 흐리거나 불안정하게 느껴질 수 있습니다." },
        { label: "초기 회복", text: "점진적으로 선명도가 개선되는 경우가 많습니다." },
        { label: "경과 관찰", text: "거리별 변화와 눈부심 등을 확인합니다." },
        { label: "안정화", text: "병원 안내에 따라 최종 시력을 확인합니다." },
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 안내 보기",
    },
    {
      id: "vision-change-record",
      order: 2,
      numberLabel: "02",
      heading: "관찰할 때 무엇을 기록하면 좋은가요?",
      layout: "checklist",
      decorativeIcon: "📝",
      directAnswer:
        "거리별 선명도 변화, 눈부심·빛번짐 여부, 색감 변화, 눈의 피로감을 날짜별로 기록해 두면 경과를 설명할 때 도움이 됩니다.",
      paragraphs: [
        "기억에만 의존하기보다 짧게라도 메모를 남겨 두면 상담에서 변화 추이를 더 명확하게 전달할 수 있습니다.",
      ],
      bullets: [
        "원거리·근거리 선명도 변화",
        "야간 눈부심·빛번짐 여부",
        "색감이나 대비 인식의 변화",
        "장시간 사용 시 눈의 피로감",
      ],
      relatedHref: ROUTES.glareCheck,
      relatedLabel: "노안백내장 수술 후 빛번짐·눈부심 확인 보기",
    },
    {
      id: "vision-change-schedule",
      order: 3,
      numberLabel: "03",
      heading: "경과 확인은 어떤 일정으로 이뤄지나요?",
      layout: "prose",
      decorativeIcon: "📅",
      directAnswer:
        "병원마다 안내하는 경과 확인 일정이 다를 수 있어, 정해진 방문 일정을 지키며 상태를 확인하는 것이 안전합니다.",
      paragraphs: [
        "정기 방문 사이에 궁금하거나 걱정되는 변화가 있다면 다음 예약까지 기다리지 않고 문의할 수 있는지도 미리 확인해 두면 도움이 됩니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
    {
      id: "vision-change-signal",
      order: 4,
      numberLabel: "04",
      heading: "어떤 변화는 바로 확인해야 하나요?",
      layout: "prose",
      decorativeIcon: "⚠️",
      directAnswer:
        "회복 중이던 시야가 갑자기 나빠지거나, 통증을 동반한 시력 저하가 있다면 정기 방문을 기다리지 말고 즉시 의료기관에 연락하는 것이 안전합니다.",
      paragraphs: [
        "일반적인 회복 과정과 확인이 필요한 변화를 구분하기 어려울 때는 자가 판단보다 문의를 통해 확인하는 것이 안전한 방법입니다.",
      ],
      relatedHref: ROUTES.symptomCheck,
      relatedLabel: "노안백내장 수술 후 이상증상 확인 보기",
    },
  ],
};
