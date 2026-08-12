import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 후 운전 재개 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const DRIVING_RESUME_CHECK_PAGE: ContentPage = {
  id: "drivingResumeCheck",
  order: 132,
  numberLabel: "02",
  slug: "노안백내장-수술-후-운전-재개",
  href: ROUTES.drivingResumeCheck,
  navLabel: "노안백내장 수술 후 운전 재개",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 후 운전 재개, 어떻게 확인하나요?",
  heading: "노안백내장 수술 후 운전 재개, 어떻게 확인하나요?",
  breadcrumbLabel: "노안백내장 수술 후 운전 재개",
  infoTopicLabel: "회복·생활",
  infoCardDescription:
    "수술 후 운전 재개 시점을 판단할 때 확인하면 좋은 기준과 질문을 안내합니다.",
  intro: [
    "노안백내장 수술 후 운전 재개는 단순히 날짜로 정해지기보다 시야 안정 정도와 의료진 판단을 함께 고려해야 하는 사안입니다. 특정 일수가 지나면 무조건 안전하다고 단정할 수 없습니다.",
    "이 글은 운전 재개를 판단할 때 확인하면 좋은 기준을 정리한 일반적인 의료정보이며, 실제 재개 시점은 반드시 의료진과 상의해 결정해야 합니다.",
  ],
  hubContextLink: {
    before: "운전 재개 외에 일상 복귀 전반까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "driving-resume-01",
    "driving-resume-02",
    "driving-resume-03",
    "driving-resume-04",
    "driving-resume-05",
  ],
  faqTitle: "노안백내장 수술 후 운전 재개 자주 묻는 질문",
  conclusion: [
    "운전 재개는 특정 날짜가 아니라 시야 안정 정도, 양안 균형, 야간 빛 번짐 여부를 종합해 의료진과 함께 판단해야 하는 사안입니다. 임의로 판단해 운전을 재개하는 것은 권장되지 않습니다.",
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
  relatedGuideIds: ["dailyLifeAfter", "glareCheck", "visionChangeObservation"],
  keySummary: [
    {
      numberLabel: "01",
      title: "시야 안정",
      text: "일상적인 시야 안정 여부를 의료진과 함께 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "양안 균형",
      text: "양쪽 눈 시야 차이가 큰 경우 판단이 더 필요할 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "야간 운전",
      text: "야간 빛 번짐 여부는 별도로 확인이 필요할 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "의료진 확인",
      text: "임의 판단보다 의료진 안내에 따라 재개 시점을 결정합니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 후 운전 재개, 어떻게 확인하나요? | 노안백내장",
    description:
      "노안백내장 수술 후 운전 재개 시점을 판단할 때 확인하면 좋은 기준과 질문을 안내합니다.",
    keywords: [
      "노안백내장 수술 후 운전",
      "백내장 수술 후 운전 재개",
      "백내장 수술 후 언제 운전",
      "노안백내장 회복",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "driving-resume-why",
      order: 1,
      numberLabel: "01",
      heading: "왜 운전 재개는 날짜로만 판단하기 어렵나요?",
      layout: "prose",
      decorativeIcon: "🚗",
      directAnswer:
        "운전은 순간적인 판단과 정확한 시야가 필요한 활동이므로, 단순히 며칠이 지났는지보다 실제 시야 안정 정도를 확인하는 것이 더 중요하기 때문입니다.",
      paragraphs: [
        "인터넷에서 특정 일수를 기준으로 안내하는 경우를 볼 수 있지만, 회복 속도는 개인차가 있어 그 기준이 모두에게 동일하게 적용된다고 볼 수 없습니다. 특정 날짜를 기준으로 스스로 판단해 운전을 재개하는 것은 권장되지 않습니다.",
        "특히 양쪽 눈을 간격을 두고 수술하는 경우, 두 눈의 시야 차이로 인해 재개 시점이 더 늦어질 수 있습니다.",
      ],
      relatedHref: ROUTES.bothEyesSchedule,
      relatedLabel: "노안백내장 양안 수술 일정 상담 보기",
    },
    {
      id: "driving-resume-check",
      order: 2,
      numberLabel: "02",
      heading: "재개 전 무엇을 확인해야 하나요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "일상적인 시야 안정 여부, 야간 빛 번짐이나 눈부심 정도, 양쪽 눈의 시야 균형, 의료진의 재개 가능 판단을 확인해야 합니다.",
      paragraphs: [
        "특히 야간 운전은 주간 운전보다 더 높은 시야 요구가 필요할 수 있어, 낮과 밤을 구분해 재개 시점을 확인하는 것이 도움이 될 수 있습니다.",
      ],
      bullets: [
        "일상 시야가 안정적으로 느껴지는지",
        "야간 빛 번짐이나 눈부심이 남아 있는지",
        "양쪽 눈의 시야 차이가 크지 않은지",
        "의료진에게 운전 재개 가능 여부를 확인했는지",
      ],
      relatedHref: ROUTES.glareCheck,
      relatedLabel: "노안백내장 수술 후 빛번짐·눈부심 확인 보기",
    },
    {
      id: "driving-resume-question",
      order: 3,
      numberLabel: "03",
      heading: "의료진에게 어떻게 질문하면 좋을까요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "현재 시야 상태로 운전이 가능한지, 주간과 야간 운전 재개 시점에 차이가 있는지, 안경 착용이 필요한지를 구체적으로 질문하는 것이 도움이 됩니다.",
      paragraphs: [
        "‘언제쯤 운전해도 되나요?’라는 막연한 질문보다 본인의 현재 상태를 기준으로 구체적으로 질문하면 더 명확한 답변을 받을 수 있습니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
    {
      id: "driving-resume-caution",
      order: 4,
      numberLabel: "04",
      heading: "재개 후에도 주의할 점이 있나요?",
      layout: "prose",
      decorativeIcon: "⚠️",
      directAnswer:
        "재개 초기에는 익숙하지 않은 시야 변화가 있을 수 있어 무리한 장거리 운전보다 짧은 거리부터 시작하는 편이 안전할 수 있습니다.",
      paragraphs: [
        "야간 빛 번짐이나 눈부심이 완전히 사라지지 않은 상태라면 야간 운전은 더 신중하게 판단하는 것이 좋습니다. 운전 중 이상하게 느껴지는 시야 변화가 있다면 즉시 운전을 중단하고 안전한 곳에서 상태를 확인해야 합니다.",
      ],
      relatedHref: ROUTES.symptomCheck,
      relatedLabel: "노안백내장 수술 후 이상증상 확인 보기",
    },
  ],
};
