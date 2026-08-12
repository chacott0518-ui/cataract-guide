import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 후 일상생활 안내",
  width: 1200,
  height: 630,
} as const;

export const DAILY_LIFE_AFTER_PAGE: ContentPage = {
  id: "dailyLifeAfter",
  order: 131,
  numberLabel: "01",
  slug: "노안백내장-수술-후-일상생활",
  href: ROUTES.dailyLifeAfter,
  navLabel: "노안백내장 수술 후 일상생활",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 후 일상생활, 무엇을 확인하나요?",
  heading: "노안백내장 수술 후 일상생활, 무엇을 확인하나요?",
  breadcrumbLabel: "노안백내장 수술 후 일상생활",
  infoTopicLabel: "회복·생활",
  infoCardDescription:
    "스마트폰·독서를 포함한 수술 후 일상 복귀 시 확인하면 좋은 사항을 안내합니다.",
  intro: [
    "노안백내장 수술 후에는 스마트폰 사용, 독서, 집안일, 외출처럼 일상적인 활동을 언제, 어떻게 재개할지 궁금해지는 경우가 많습니다. 회복 속도는 개인차가 있어 일률적인 일정을 단정하기 어렵습니다.",
    "이 글은 수술 후 일상 복귀와 관련해 확인하면 좋은 사항을 정리한 일반적인 의료정보이며, 구체적인 시점은 의료진의 안내를 따라야 합니다.",
  ],
  hubContextLink: {
    before: "일상 복귀 외에 회복기간 전체 흐름까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "daily-life-01",
    "daily-life-02",
    "daily-life-03",
    "daily-life-04",
    "daily-life-05",
  ],
  faqTitle: "노안백내장 수술 후 일상생활 자주 묻는 질문",
  conclusion: [
    "수술 후 일상 복귀는 스마트폰·독서 같은 근거리 활동부터 외출, 집안일까지 단계적으로 확인하는 편이 도움이 됩니다. 회복 속도는 개인차가 있으므로 고정된 일정보다 의료진 안내를 우선하는 것이 안전합니다.",
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
  relatedGuideIds: ["drivingResumeCheck", "glassesChangeCheck", "visionChangeObservation"],
  keySummary: [
    {
      numberLabel: "01",
      title: "근거리 활동",
      text: "스마트폰·독서 재개 시점은 회복 경과에 따라 다를 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "눈 보호",
      text: "세안·화장 등은 안내받은 방법과 시점을 따릅니다.",
    },
    {
      numberLabel: "03",
      title: "외출·활동",
      text: "야외 활동은 자외선·먼지 노출을 고려해 조절할 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "이상 증상",
      text: "평소와 다른 변화가 있으면 임의 판단보다 문의를 우선합니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 후 일상생활, 무엇을 확인하나요? | 노안백내장",
    description:
      "노안백내장 수술 후 스마트폰·독서를 포함한 일상 복귀 시 확인하면 좋은 사항을 안내합니다.",
    keywords: [
      "노안백내장 수술 후 일상생활",
      "백내장 수술 후 생활",
      "백내장 수술 후 스마트폰",
      "백내장 수술 후 독서",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "daily-life-screen",
      order: 1,
      numberLabel: "01",
      heading: "스마트폰·독서는 언제부터 가능한가요?",
      layout: "prose",
      decorativeIcon: "📱",
      directAnswer:
        "짧은 시간의 스마트폰 사용이나 독서는 비교적 이른 시점부터 가능하다고 안내되는 경우가 있지만, 눈의 피로나 불편이 느껴지면 무리하지 않는 것이 좋습니다. 정확한 시점은 개인 회복 경과에 따라 달라질 수 있습니다.",
      paragraphs: [
        "초기에는 화면이나 글씨가 평소보다 흐리거나 눈부시게 느껴질 수 있습니다. 이는 회복 과정에서 나타날 수 있는 변화일 수 있지만, 지속되거나 심해지면 자가 판단보다 의료기관에 확인하는 것이 안전합니다.",
        "장시간 화면 사용은 눈의 피로를 늘릴 수 있으므로, 짧게 자주 쉬는 방식으로 조절하는 것이 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.visionChangeObservation,
      relatedLabel: "노안백내장 수술 후 시력 변화 관찰 보기",
    },
    {
      id: "daily-life-eye-care",
      order: 2,
      numberLabel: "02",
      heading: "세안·화장은 어떻게 관리하나요?",
      layout: "checklist",
      decorativeIcon: "🧴",
      directAnswer:
        "눈 주변에 물이나 이물질이 직접 닿지 않도록 하는 방법과 화장 재개 시점은 병원에서 안내받은 내용을 따르는 것이 안전합니다.",
      paragraphs: [
        "구체적인 방법과 시점은 병원마다 다르게 안내될 수 있으므로, 이 글에서 특정 방법을 표준으로 제시하지 않습니다. 안내받은 내용을 기준으로 삼는 것이 정확합니다.",
      ],
      bullets: [
        "세안 시 눈 주변에 물이 직접 닿지 않도록 주의",
        "눈 화장 재개 시점은 병원 안내를 따름",
        "안내받은 안약 사용법 준수",
        "손으로 눈을 비비지 않기",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 안내 보기",
    },
    {
      id: "daily-life-outdoor",
      order: 3,
      numberLabel: "03",
      heading: "외출과 야외 활동은 어떻게 조절하나요?",
      layout: "prose",
      decorativeIcon: "🌤️",
      directAnswer:
        "초기에는 강한 햇빛이나 먼지가 많은 환경에 대한 노출을 줄이고, 선글라스 등 보호 장비 사용 여부는 의료진 안내에 따르는 것이 좋습니다.",
      paragraphs: [
        "야외 활동 재개 시점과 방법은 개인 회복 경과와 병원 안내에 따라 달라질 수 있습니다. 운전처럼 판단력이 필요한 활동은 별도로 확인이 필요한 항목입니다.",
      ],
      relatedHref: ROUTES.drivingResumeCheck,
      relatedLabel: "노안백내장 수술 후 운전 재개 확인 보기",
    },
    {
      id: "daily-life-signal",
      order: 4,
      numberLabel: "04",
      heading: "일상 중 어떤 변화는 확인이 필요한가요?",
      layout: "checklist",
      decorativeIcon: "⚠️",
      directAnswer:
        "평소보다 심한 통증, 시야가 갑자기 흐려지는 변화, 붓기 악화, 분비물 증가 같은 변화가 있다면 자가 판단으로 지켜보기보다 의료기관에 확인하는 것이 안전합니다.",
      paragraphs: [
        "일상 복귀 중 나타나는 변화가 일반적인 범위인지, 확인이 필요한 상황인지 구분하기 어려울 때는 스스로 판단하기보다 문의하는 것이 안전한 선택입니다.",
      ],
      bullets: [
        "평소보다 심하거나 지속되는 통증",
        "시야가 갑자기 흐려지는 변화",
        "붓기·충혈 악화",
        "분비물 증가나 이상 냄새",
      ],
      relatedHref: ROUTES.symptomCheck,
      relatedLabel: "노안백내장 수술 후 이상증상 확인 보기",
    },
  ],
};
