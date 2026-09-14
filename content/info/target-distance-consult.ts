import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 목표 거리 생활패턴 상담 안내",
  width: 1200,
  height: 630,
} as const;

export const TARGET_DISTANCE_CONSULT_PAGE: ContentPage = {
  id: "targetDistanceConsult",
  order: 123,
  numberLabel: "03",
  slug: "노안백내장-목표-거리-생활패턴-상담",
  href: ROUTES.targetDistanceConsult,
  navLabel: "노안백내장 목표 거리·생활패턴 상담",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 목표 거리와 생활패턴, 상담에서 어떻게 전달하나요?",
  heading: "노안백내장 목표 거리와 생활패턴, 상담에서 어떻게 전달하나요?",
  breadcrumbLabel: "노안백내장 목표 거리·생활패턴 상담",
  infoTopicLabel: "렌즈·수술 이해",
  infoCardDescription:
    "일상에서 중요하게 쓰는 시거리와 생활패턴을 상담에서 정리해 전달하는 방법을 안내합니다.",
  intro: [
    "노안백내장 렌즈 상담에서는 검사 결과 못지않게 본인이 일상에서 어떤 거리를 자주 사용하는지가 중요한 정보로 다뤄질 수 있습니다. 독서, 컴퓨터 작업, 운전, 야간 활동 빈도에 따라 상담에서 확인할 점이 달라질 수 있습니다.",
    "이 글은 목표 거리와 생활패턴을 상담에서 어떻게 정리해 전달하면 좋은지 안내하는 일반적인 의료정보이며, 특정 렌즈 선택을 권고하지 않습니다.",
  ],
  hubContextLink: {
    before: "생활패턴 정리 외에 노안백내장 전체 흐름까지 보려면 ",
    anchor: "노안 백내장 핵심 정보",
    after: "를 참고하세요.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "target-distance-01",
    "target-distance-02",
    "target-distance-03",
    "target-distance-04",
    "target-distance-05",
  ],
  faqTitle: "노안백내장 목표 거리·생활패턴 상담 자주 묻는 질문",
  conclusion: [
    "목표 거리와 생활패턴을 구체적으로 정리해 전달하면 렌즈 상담에서 본인에게 필요한 정보를 더 명확히 확인할 수 있습니다. 다만 최종 렌즈 선택은 검사 결과와 의료진 상담을 통해 결정해야 합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·처방을 대신하지 않습니다.",
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
  relatedGuideIds: ["lensTypeCheck", "iolInfoCheck", "glassesChangeCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "주요 시거리",
      text: "독서·모니터·운전 등 자주 쓰는 거리를 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "야간 활동",
      text: "야간 운전·외출 빈도도 함께 전달하면 도움이 됩니다.",
    },
    {
      numberLabel: "03",
      title: "직업·취미",
      text: "근거리 작업이 많은 직업·취미도 참고 정보가 됩니다.",
    },
    {
      numberLabel: "04",
      title: "우선순위",
      text: "가장 포기하기 어려운 시거리를 먼저 정리해 둡니다.",
    },
  ],
  seo: {
    title: "노안백내장 목표 거리와 생활패턴, 상담에서 어떻게 전달하나요? | 노안백내장",
    description:
      "노안백내장 렌즈 상담에서 목표 거리와 생활패턴을 정리해 전달하는 방법을 안내합니다.",
    keywords: [
      "노안백내장 생활패턴 상담",
      "백내장 렌즈 목표거리",
      "노안백내장 렌즈 상담 준비",
      "인공수정체 생활패턴",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "target-distance-why",
      order: 1,
      numberLabel: "01",
      heading: "왜 목표 거리를 상담에서 이야기해야 하나요?",
      layout: "prose",
      decorativeIcon: "📏",
      directAnswer:
        "렌즈 특성마다 잘 대응하는 거리가 다를 수 있어, 본인이 일상에서 중요하게 쓰는 거리를 알려야 상담이 더 구체적으로 진행될 수 있습니다.",
      paragraphs: [
        "같은 검사 결과라도 독서를 많이 하는 사람과 운전을 많이 하는 사람은 우선적으로 고려할 거리가 다를 수 있습니다. 이 정보는 렌즈 선택 상담에서 참고가 되는 요소 중 하나입니다.",
        "생활패턴을 구체적으로 전달하지 않으면 상담에서 일반적인 설명만 듣게 될 수 있으므로, 미리 정리해 가는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.iolInfoCheck,
      relatedLabel: "노안백내장 인공수정체 정보 확인 보기",
    },
    {
      id: "target-distance-list",
      order: 2,
      numberLabel: "02",
      heading: "무엇을 정리해 가면 좋은가요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "하루 중 독서·스마트폰·모니터·운전에 쓰는 시간, 야간 활동 빈도, 근거리 작업이 많은 직업이나 취미를 정리해 두면 상담에 도움이 됩니다.",
      paragraphs: [
        "구체적인 활동을 나열하면 의료진이 어떤 거리 대응력이 특히 중요한지 파악하는 데 참고가 될 수 있습니다.",
      ],
      bullets: [
        "하루 중 독서·스마트폰 사용 시간",
        "컴퓨터 모니터 작업 빈도",
        "운전 빈도와 야간 운전 여부",
        "근거리 작업이 많은 직업·취미",
        "가장 포기하기 어려운 시거리",
      ],
      relatedHref: ROUTES.lensTypeCheck,
      relatedLabel: "노안백내장 단초점·다초점 차이 보기",
    },
    {
      id: "target-distance-consult",
      order: 3,
      numberLabel: "03",
      heading: "상담에서는 이 정보를 어떻게 활용하나요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "검사 결과와 함께 생활패턴을 참고해 렌즈 특성별 장단점을 설명받고, 본인 우선순위에 맞는 선택지를 좁혀가는 데 활용될 수 있습니다.",
      paragraphs: [
        "생활패턴 정보만으로 렌즈가 자동으로 결정되는 것은 아니며, 검사 결과와 의료진의 설명을 종합해 최종적으로 결정하는 것이 일반적입니다.",
        "안경 사용에 대한 기대치도 함께 이야기하면 렌즈 선택 이후 변화를 이해하는 데 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.glassesChangeCheck,
      relatedLabel: "노안백내장 수술 후 안경 사용 변화 보기",
    },
    {
      id: "target-distance-realistic",
      order: 4,
      numberLabel: "04",
      heading: "기대치는 어떻게 현실적으로 맞추나요?",
      layout: "prose",
      decorativeIcon: "🧭",
      directAnswer:
        "특정 렌즈가 모든 거리에서 완벽한 시야를 보장한다고 단정하지 않고, 렌즈별 한계를 함께 이해한 뒤 우선순위를 정하는 것이 현실적인 접근입니다.",
      paragraphs: [
        "모든 거리에서 안경 없이 지내는 것이 최우선이라면 그 점을 명확히 전달하고, 그에 따른 한계도 함께 설명받는 것이 중요합니다. 결과를 보장하는 표현은 신중하게 받아들여야 합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
