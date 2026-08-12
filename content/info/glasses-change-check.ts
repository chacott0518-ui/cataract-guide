import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 후 안경 사용 변화 안내",
  width: 1200,
  height: 630,
} as const;

export const GLASSES_CHANGE_CHECK_PAGE: ContentPage = {
  id: "glassesChangeCheck",
  order: 133,
  numberLabel: "03",
  slug: "노안백내장-수술-후-안경-사용",
  href: ROUTES.glassesChangeCheck,
  navLabel: "노안백내장 수술 후 안경 사용",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 후 안경 사용, 어떻게 달라질 수 있나요?",
  heading: "노안백내장 수술 후 안경 사용, 어떻게 달라질 수 있나요?",
  breadcrumbLabel: "노안백내장 수술 후 안경 사용",
  infoTopicLabel: "회복·생활",
  infoCardDescription:
    "수술 후 안경이 필요할 수 있는 상황과 도수 확인 시점을 안내합니다.",
  intro: [
    "노안백내장 수술 후 안경 필요 여부는 선택한 인공수정체 종류와 개인의 눈 상태에 따라 달라질 수 있습니다. 수술로 안경을 완전히 벗을 수 있다고 단정할 수 없으며, 특정 거리에서는 여전히 안경이 도움이 될 수 있습니다.",
    "이 글은 수술 후 안경 사용이 어떻게 달라질 수 있는지 정리한 일반적인 의료정보이며, 개인별 결과를 예측하거나 보장하지 않습니다.",
  ],
  hubContextLink: {
    before: "안경 사용 변화 외에 렌즈 선택 정보까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "glasses-change-01",
    "glasses-change-02",
    "glasses-change-03",
    "glasses-change-04",
    "glasses-change-05",
  ],
  faqTitle: "노안백내장 수술 후 안경 사용 자주 묻는 질문",
  conclusion: [
    "수술 후 안경 필요 여부는 렌즈 선택과 개인 눈 상태에 따라 달라질 수 있어 특정 결과를 미리 보장할 수 없습니다. 최종 도수 확인은 시야가 안정된 이후 검사를 통해 이뤄지는 것이 일반적입니다.",
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
  relatedGuideIds: ["lensTypeCheck", "targetDistanceConsult", "visionChangeObservation"],
  keySummary: [
    {
      numberLabel: "01",
      title: "렌즈별 차이",
      text: "선택한 인공수정체 종류에 따라 안경 필요도가 달라질 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "도수 확인 시점",
      text: "시야가 안정된 이후 새 안경 도수를 확인하는 것이 일반적입니다.",
    },
    {
      numberLabel: "03",
      title: "기존 안경",
      text: "기존 안경은 수술 후 맞지 않을 수 있어 임의로 계속 쓰지 않습니다.",
    },
    {
      numberLabel: "04",
      title: "개인차",
      text: "결과는 개인차가 있어 특정 결과를 보장할 수 없습니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 후 안경 사용, 어떻게 달라질 수 있나요? | 노안백내장",
    description:
      "노안백내장 수술 후 안경이 필요할 수 있는 상황과 새 도수 확인 시점을 안내합니다.",
    keywords: [
      "노안백내장 수술 후 안경",
      "백내장 수술 후 안경 필요",
      "백내장 수술 후 시력",
      "노안백내장 안경 도수",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "glasses-change-why",
      order: 1,
      numberLabel: "01",
      heading: "수술 후 안경이 필요 없어진다고 봐도 되나요?",
      layout: "prose",
      decorativeIcon: "👓",
      directAnswer:
        "그렇게 단정할 수 없습니다. 렌즈 종류와 개인의 눈 상태에 따라 특정 거리에서는 여전히 안경이 도움이 될 수 있습니다.",
      paragraphs: [
        "‘수술만 하면 안경이 필요 없다’는 표현은 과장될 수 있는 부분입니다. 실제로는 렌즈 특성에 따라 원거리·근거리 중 일부 거리에서 안경이 도움이 되는 경우가 있다고 알려져 있습니다.",
        "이 정보를 바탕으로 렌즈를 선택하기 전에, 본인이 안경 착용에 대해 어떤 기대치를 가지고 있는지 상담에서 구체적으로 전달하는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.lensTypeCheck,
      relatedLabel: "노안백내장 단초점·다초점 차이 보기",
    },
    {
      id: "glasses-change-timing",
      order: 2,
      numberLabel: "02",
      heading: "새 안경 도수는 언제 확인하나요?",
      layout: "prose",
      decorativeIcon: "🔎",
      directAnswer:
        "일반적으로 시야가 어느 정도 안정된 이후에 새 안경 도수를 확인하는 것이 안전하다고 알려져 있습니다. 수술 직후 바로 확인한 도수는 이후 변화할 수 있습니다.",
      paragraphs: [
        "너무 이른 시점에 안경을 새로 맞추면 회복 과정에서 도수가 다시 달라질 수 있어, 병원에서 안내하는 시점을 따르는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 안내 보기",
    },
    {
      id: "glasses-change-existing",
      order: 3,
      numberLabel: "03",
      heading: "기존에 쓰던 안경은 어떻게 하나요?",
      layout: "prose",
      decorativeIcon: "🕶️",
      directAnswer:
        "기존 안경 도수는 수술 후 눈 상태와 맞지 않을 수 있어, 계속 사용해도 되는지 의료진에게 확인하는 것이 안전합니다.",
      paragraphs: [
        "일상에서 필요하다고 느껴도 임의로 기존 안경을 계속 사용하기보다, 착용 가능 여부를 확인한 뒤 사용하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.dailyLifeAfter,
      relatedLabel: "노안백내장 수술 후 일상생활 보기",
    },
    {
      id: "glasses-change-question",
      order: 4,
      numberLabel: "04",
      heading: "상담에서 안경 관련 질문은 어떻게 하나요?",
      layout: "checklist",
      decorativeIcon: "💬",
      directAnswer:
        "선택한 렌즈로 안경이 필요할 가능성이 있는 거리, 새 안경을 맞출 수 있는 시점, 기존 안경 사용 가능 여부를 질문하면 도움이 됩니다.",
      paragraphs: [
        "구체적으로 질문할수록 본인 상황에 맞는 답변을 받기 쉬워집니다.",
      ],
      bullets: [
        "제가 선택한 렌즈로 안경이 필요할 가능성이 있는 거리는 어디인가요?",
        "새 안경은 언제쯤 맞추는 것이 좋을까요?",
        "기존 안경을 계속 써도 되나요?",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
