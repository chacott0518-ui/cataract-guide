import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 광고 정보 확인 시 주의점 안내",
  width: 1200,
  height: 630,
} as const;

export const AD_INFO_CHECK_PAGE: ContentPage = {
  id: "adInfoCheck",
  order: 152,
  numberLabel: "02",
  slug: "노안백내장-광고-정보-확인",
  href: ROUTES.adInfoCheck,
  navLabel: "노안백내장 광고 정보 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 광고 정보, 볼 때 무엇을 주의해야 하나요?",
  heading: "노안백내장 광고 정보, 볼 때 무엇을 주의해야 하나요?",
  breadcrumbLabel: "노안백내장 광고 정보 확인",
  infoTopicLabel: "이해·정보",
  infoCardDescription:
    "노안백내장 관련 광고에서 주의 깊게 볼 표현과 확인할 점을 안내합니다.",
  intro: [
    "노안백내장 관련 광고에서는 눈길을 끄는 표현이 사용되는 경우가 있습니다. 광고 문구만으로 판단하기보다, 표현이 과장되지는 않았는지, 근거가 함께 제시되는지 확인하는 습관이 필요합니다.",
    "이 글은 광고 정보를 볼 때 참고할 수 있는 일반적인 주의점을 안내하며, 특정 병원이나 광고를 개별적으로 평가하거나 비방하지 않습니다.",
  ],
  hubContextLink: {
    before: "광고 정보 주의점 외에 신뢰할 수 있는 정보 확인 방법까지 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "ad-info-01",
    "ad-info-02",
    "ad-info-03",
    "ad-info-04",
    "ad-info-05",
  ],
  faqTitle: "노안백내장 광고 정보 확인 자주 묻는 질문",
  conclusion: [
    "광고에서 단정적이거나 결과를 보장하는 표현을 접하면 그대로 받아들이기보다 근거와 출처를 함께 확인하는 습관이 도움이 됩니다. 최종 판단은 광고가 아니라 검사 결과와 의료진 상담을 기준으로 이뤄져야 합니다.",
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
  relatedGuideIds: ["medicalInfoCheck", "iolInfoCheck", "preExam"],
  keySummary: [
    {
      numberLabel: "01",
      title: "단정 표현",
      text: "‘무조건’, ‘100%’ 같은 표현은 신중하게 볼 필요가 있습니다.",
    },
    {
      numberLabel: "02",
      title: "결과 보장",
      text: "특정 결과를 보장하는 문구는 과장일 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "가격·이벤트",
      text: "가격만 강조하는 광고는 포함 항목을 확인해야 합니다.",
    },
    {
      numberLabel: "04",
      title: "후기·사례",
      text: "후기는 참고 자료일 뿐 결과를 보장하지 않습니다.",
    },
  ],
  seo: {
    title: "노안백내장 광고 정보, 볼 때 무엇을 주의해야 하나요? | 노안백내장",
    description:
      "노안백내장 관련 광고에서 주의 깊게 볼 표현과 확인할 점을 안내합니다.",
    keywords: [
      "노안백내장 광고",
      "백내장 수술 광고 주의",
      "노안백내장 병원 광고",
      "백내장 이벤트 가격 주의",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "ad-info-expression",
      order: 1,
      numberLabel: "01",
      heading: "어떤 표현을 신중하게 봐야 하나요?",
      layout: "checklist",
      decorativeIcon: "⚠️",
      directAnswer:
        "‘최고’, ‘1위’, ‘부작용 없음’, ‘100% 만족’처럼 단정적이거나 결과를 보장하는 표현은 실제 개인차나 한계를 충분히 반영하지 못할 수 있어 신중하게 볼 필요가 있습니다.",
      paragraphs: [
        "의료 광고에서 이런 표현을 접하면 근거가 함께 제시되는지, 어떤 조건에서의 결과인지 확인하는 것이 도움이 됩니다.",
      ],
      bullets: [
        "‘최고’, ‘가장 안전’ 같은 우월성 표현",
        "‘부작용 없음’, ‘통증 없음’ 같은 단정 표현",
        "‘100% 만족’, ‘결과 보장’ 같은 보장성 표현",
        "‘무조건 가능’ 같은 적합성 단정 표현",
      ],
      relatedHref: ROUTES.medicalInfoCheck,
      relatedLabel: "노안백내장 의료정보 확인 방법 보기",
    },
    {
      id: "ad-info-price",
      order: 2,
      numberLabel: "02",
      heading: "가격·이벤트 광고는 어떻게 봐야 하나요?",
      layout: "prose",
      decorativeIcon: "💳",
      directAnswer:
        "가격만 크게 강조된 광고는 실제로 어떤 검사와 렌즈, 사후관리가 포함된 가격인지 확인하지 않으면 오해하기 쉽습니다.",
      paragraphs: [
        "이벤트 가격이 모든 사람에게 동일하게 적용된다고 단정할 수 없으며, 개인의 검사 결과나 선택하는 렌즈에 따라 실제 비용은 달라질 수 있습니다. 최종 비용은 상담을 통해 포함 항목을 직접 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "노안백내장 수술비용 안내 보기",
    },
    {
      id: "ad-info-review",
      order: 3,
      numberLabel: "03",
      heading: "후기·사례는 어떻게 참고하면 좋을까요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "후기와 사례는 한 사람의 경험을 보여주는 참고 자료일 뿐, 모든 사람에게 같은 결과를 보장하는 근거는 아닙니다.",
      paragraphs: [
        "특히 상업적 관계가 있는 후기는 표현 방향이 광고에 유리하게 작성될 수 있어, 광고 표시 여부와 맥락을 함께 살펴보는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.reviews,
      relatedLabel: "노안백내장 후기 안내 보기",
    },
    {
      id: "ad-info-decide",
      order: 4,
      numberLabel: "04",
      heading: "광고를 본 뒤 어떻게 판단하면 좋을까요?",
      layout: "prose",
      decorativeIcon: "🧭",
      directAnswer:
        "광고 문구를 그대로 받아들이기보다, 궁금한 점을 정리해 실제 상담에서 근거와 조건을 직접 확인하는 과정이 필요합니다.",
      paragraphs: [
        "광고에서 강조된 내용이 본인의 눈 상태와 상황에도 그대로 적용되는지는 검사와 상담을 통해서만 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
