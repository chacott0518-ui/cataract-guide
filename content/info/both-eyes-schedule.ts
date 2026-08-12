import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 양안 수술 일정 상담 안내",
  width: 1200,
  height: 630,
} as const;

export const BOTH_EYES_SCHEDULE_PAGE: ContentPage = {
  id: "bothEyesSchedule",
  order: 125,
  numberLabel: "05",
  slug: "노안백내장-양안-수술-일정",
  href: ROUTES.bothEyesSchedule,
  navLabel: "노안백내장 양안 수술 일정",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 양안 수술 일정, 어떻게 상담하나요?",
  heading: "노안백내장 양안 수술 일정, 어떻게 상담하나요?",
  breadcrumbLabel: "노안백내장 양안 수술 일정",
  infoTopicLabel: "렌즈·수술 이해",
  infoCardDescription:
    "양쪽 눈 수술 간격을 상담에서 확인하는 방법과 고려할 점을 안내합니다.",
  intro: [
    "노안백내장은 양쪽 눈 모두에서 나타날 수 있어 양안 수술을 고려하는 경우가 있습니다. 양쪽을 같은 날 진행할지, 간격을 두고 진행할지는 개인 상태와 병원 방침에 따라 달라질 수 있어 상담을 통해 확인해야 합니다.",
    "이 글은 양안 수술 일정을 상담에서 어떻게 확인하면 좋은지 안내하는 일반적인 의료정보이며, 특정 일정이 모두에게 적용된다고 단정하지 않습니다.",
  ],
  hubContextLink: {
    before: "양안 일정 외에 수술 과정까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "both-eyes-01",
    "both-eyes-02",
    "both-eyes-03",
    "both-eyes-04",
    "both-eyes-05",
  ],
  faqTitle: "노안백내장 양안 수술 일정 자주 묻는 질문",
  conclusion: [
    "양안 수술 일정은 개인의 눈 상태, 회복 경과, 병원 방침에 따라 달라질 수 있어 특정 간격이 모두에게 적용된다고 단정할 수 없습니다. 상담에서 양쪽 눈의 검사 결과와 일정을 함께 확인하는 것이 중요합니다.",
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
  relatedGuideIds: ["procedureProcess", "dailyLifeAfter", "drivingResumeCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "동시 진행 여부",
      text: "같은 날 진행할지, 간격을 둘지는 상담에서 결정합니다.",
    },
    {
      numberLabel: "02",
      title: "회복 확인",
      text: "먼저 진행한 눈의 회복 경과가 다음 일정에 참고될 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "생활 계획",
      text: "일정에 따라 일상 복귀 계획을 함께 조정할 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "병원 방침",
      text: "구체적인 간격 기준은 병원과 의료진 방침에 따라 다릅니다.",
    },
  ],
  seo: {
    title: "노안백내장 양안 수술 일정, 어떻게 상담하나요? | 노안백내장",
    description:
      "노안백내장 양쪽 눈 수술 간격을 상담에서 확인하는 방법과 고려할 점을 안내합니다.",
    keywords: [
      "노안백내장 양안 수술",
      "백내장 양쪽 눈 수술 간격",
      "노안백내장 수술 일정",
      "백내장 수술 순서",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "both-eyes-why",
      order: 1,
      numberLabel: "01",
      heading: "양쪽 눈을 꼭 같이 수술해야 하나요?",
      layout: "prose",
      decorativeIcon: "👁",
      directAnswer:
        "반드시 그렇지는 않습니다. 양쪽 눈의 진행 정도가 다를 수 있어 한쪽부터 진행하거나, 간격을 두고 순차적으로 진행하는 방식이 상담에서 논의될 수 있습니다.",
      paragraphs: [
        "양쪽 눈의 백내장 진행 정도와 시력 저하 수준이 다르면, 먼저 불편이 큰 쪽부터 확인하는 방향이 논의되는 경우가 있습니다. 이는 개인 상태에 따라 달라질 수 있는 사안입니다.",
        "같은 날 양쪽을 진행하는 경우와 간격을 두는 경우 각각 장단점이 다르게 설명될 수 있어, 특정 방식이 항상 더 낫다고 단정할 수 없습니다.",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "노안백내장 수술 전 검사 안내 보기",
    },
    {
      id: "both-eyes-interval",
      order: 2,
      numberLabel: "02",
      heading: "간격을 둘 경우 무엇을 확인하나요?",
      layout: "checklist",
      decorativeIcon: "📅",
      directAnswer:
        "첫 번째 눈의 회복 경과, 이상 증상 여부, 다음 눈 수술 시점에 대한 의료진 판단을 확인하는 과정이 필요합니다.",
      paragraphs: [
        "간격은 고정된 기간으로 정해지기보다 회복 경과를 지켜본 뒤 조정되는 경우가 있다고 알려져 있습니다. 상담에서 예상 간격과 조정 가능성을 함께 질문해 두면 도움이 됩니다.",
      ],
      bullets: [
        "첫 번째 눈의 회복 경과는 어떻게 확인하나요?",
        "다음 눈 수술은 어떤 기준으로 결정되나요?",
        "간격 중 생활에서 주의할 점이 있나요?",
        "두 눈의 시야 차이는 어떻게 관리하나요?",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 안내 보기",
    },
    {
      id: "both-eyes-life",
      order: 3,
      numberLabel: "03",
      heading: "일정에 따라 일상은 어떻게 계획하나요?",
      layout: "prose",
      decorativeIcon: "🗓️",
      directAnswer:
        "수술 전후 운전이나 업무 일정을 고려해 일정을 계획하면 도움이 됩니다. 양쪽을 간격을 두고 진행할 경우 그 기간의 생활 관리도 함께 준비하는 것이 좋습니다.",
      paragraphs: [
        "간격 기간에는 한쪽 눈만 회복 중인 상태로 일상을 보내게 될 수 있어, 운전이나 세밀한 작업이 필요한 업무가 있다면 미리 일정 조정을 고려하는 편이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.drivingResumeCheck,
      relatedLabel: "노안백내장 수술 후 운전 재개 확인 보기",
    },
    {
      id: "both-eyes-questions",
      order: 4,
      numberLabel: "04",
      heading: "상담에서 어떤 질문을 하면 좋을까요?",
      layout: "checklist",
      decorativeIcon: "💬",
      directAnswer:
        "동시 진행과 간격 진행 각각의 장단점, 예상 간격, 두 눈의 검사 결과 차이, 간격 중 생활 관리 방법을 질문하면 계획을 세우는 데 도움이 됩니다.",
      paragraphs: [
        "구체적인 답변은 병원과 개인 상태에 따라 다를 수 있으므로, 여러 질문을 통해 본인 상황에 맞는 설명을 받는 것이 중요합니다.",
      ],
      bullets: [
        "제 경우 동시 진행과 간격 진행 중 무엇을 권장하시나요?",
        "권장하신다면 그 이유는 무엇인가요?",
        "예상되는 간격은 어느 정도인가요?",
        "간격 중 확인해야 할 이상 증상은 무엇인가요?",
      ],
    },
  ],
};
