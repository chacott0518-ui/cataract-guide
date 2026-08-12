import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 후 이상증상 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const SYMPTOM_CHECK_PAGE: ContentPage = {
  id: "symptomCheck",
  order: 143,
  numberLabel: "03",
  slug: "노안백내장-수술-후-이상증상",
  href: ROUTES.symptomCheck,
  navLabel: "노안백내장 수술 후 이상증상",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 후 이상증상, 언제 의료기관에 연락해야 하나요?",
  heading: "노안백내장 수술 후 이상증상, 언제 의료기관에 연락해야 하나요?",
  breadcrumbLabel: "노안백내장 수술 후 이상증상",
  infoTopicLabel: "경과·주의",
  infoCardDescription:
    "수술 후 확인이 필요한 이상증상과 의료기관에 연락해야 하는 상황을 안내합니다.",
  intro: [
    "노안백내장 수술 후에는 일반적으로 나타날 수 있는 반응과, 신속한 확인이 필요한 이상증상을 구분해서 이해하는 것이 중요합니다. 자가 판단으로 원인을 단정하기보다 걱정되는 변화가 있다면 문의하는 것이 안전합니다.",
    "이 글은 수술 후 확인이 필요한 상황을 정리한 일반적인 의료정보이며, 응급 여부를 스스로 진단하는 자료가 아닙니다. 증상이 걱정된다면 지체하지 말고 의료기관에 연락하세요.",
  ],
  hubContextLink: {
    before: "이상증상 확인 외에 주의사항 전반까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "symptom-check-01",
    "symptom-check-02",
    "symptom-check-03",
    "symptom-check-04",
    "symptom-check-05",
  ],
  faqTitle: "노안백내장 수술 후 이상증상 자주 묻는 질문",
  conclusion: [
    "일반적으로 나타날 수 있는 반응과 신속한 확인이 필요한 이상증상을 구분해서 이해하고, 걱정되는 변화가 있다면 자가 판단보다 의료기관에 연락해 확인하는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·치료를 대신하지 않습니다. 응급 가능성이 있는 증상은 지체하지 말고 의료기관의 안내를 따라야 합니다.",
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
  relatedGuideIds: ["visionChangeObservation", "glareCheck", "dailyLifeAfter"],
  keySummary: [
    {
      numberLabel: "01",
      title: "일반 반응",
      text: "가벼운 이물감·눈부심 등은 회복 중 나타날 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "확인 필요 신호",
      text: "심한 통증·시야 악화 등은 즉시 연락이 필요할 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "기록",
      text: "증상 시작 시점과 변화 양상을 기록해 두면 도움이 됩니다.",
    },
    {
      numberLabel: "04",
      title: "연락 방법",
      text: "병원에서 안내한 연락 방법과 시간대를 미리 확인해 둡니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 후 이상증상, 언제 의료기관에 연락해야 하나요? | 노안백내장",
    description:
      "노안백내장 수술 후 확인이 필요한 이상증상과 의료기관에 연락해야 하는 상황을 안내합니다.",
    keywords: [
      "노안백내장 수술 후 이상증상",
      "백내장 수술 후 통증",
      "백내장 수술 후 부작용",
      "백내장 수술 후 응급",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "symptom-check-general",
      order: 1,
      numberLabel: "01",
      heading: "일반적으로 나타날 수 있는 반응은 무엇인가요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "가벼운 이물감, 일시적인 눈부심, 미세한 충혈, 약간의 붓기는 회복 과정에서 나타날 수 있는 반응으로 알려져 있습니다. 다만 정도와 지속 기간은 개인차가 있습니다.",
      paragraphs: [
        "이런 반응이 있다고 해서 반드시 문제가 있다는 뜻은 아니지만, 정상 범위인지 스스로 판단하기 어렵다면 병원에서 안내받은 경과 확인 일정에 맞춰 확인하는 것이 안전합니다.",
      ],
      bullets: [
        "가벼운 이물감이나 건조함",
        "일시적인 눈부심",
        "미세한 충혈",
        "약간의 붓기",
      ],
      relatedHref: ROUTES.visionChangeObservation,
      relatedLabel: "노안백내장 수술 후 시력 변화 관찰 보기",
    },
    {
      id: "symptom-check-urgent",
      order: 2,
      numberLabel: "02",
      heading: "즉시 연락이 필요한 이상증상은 무엇인가요?",
      layout: "checklist",
      decorativeIcon: "🚨",
      directAnswer:
        "심하거나 지속되는 통증, 급격한 시야 악화, 심한 충혈이나 분비물 증가, 발열을 동반한 변화가 있다면 지체하지 말고 의료기관에 연락해야 합니다.",
      paragraphs: [
        "이런 변화는 신속한 확인이 필요한 상황일 수 있다고 알려져 있으며, 자가로 원인을 판단하거나 처치하는 것은 권장되지 않습니다.",
      ],
      bullets: [
        "심하거나 지속되는 통증",
        "급격한 시야 악화",
        "심한 충혈이나 분비물 증가",
        "발열을 동반한 변화",
        "새롭게 나타나는 심한 이상 증상",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 안내 보기",
    },
    {
      id: "symptom-check-record",
      order: 3,
      numberLabel: "03",
      heading: "증상을 어떻게 기록하고 전달하면 좋을까요?",
      layout: "prose",
      decorativeIcon: "📝",
      directAnswer:
        "증상이 시작된 시점, 어떤 상황에서 심해지는지, 시간에 따른 변화 양상을 기록해 두면 의료기관에 전달할 때 상태를 더 정확하게 설명할 수 있습니다.",
      paragraphs: [
        "전화나 방문 전에 기록을 준비해 두면 통화나 진료 시간을 절약할 수 있고, 필요한 정보를 빠짐없이 전달하는 데 도움이 됩니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
    {
      id: "symptom-check-contact",
      order: 4,
      numberLabel: "04",
      heading: "연락 방법은 미리 어떻게 확인해 두나요?",
      layout: "prose",
      decorativeIcon: "☎️",
      directAnswer:
        "수술 전이나 수술 당일 병원의 연락 방법과 진료 시간 외 대응 체계를 미리 확인해 두면, 실제로 이상증상이 생겼을 때 당황하지 않고 빠르게 연락할 수 있습니다.",
      paragraphs: [
        "야간이나 휴일에 증상이 나타났을 때 어떻게 대응해야 하는지도 상담 과정에서 미리 질문해 두면 도움이 됩니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
