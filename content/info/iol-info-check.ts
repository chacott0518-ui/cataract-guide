import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 인공수정체 정보 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const IOL_INFO_CHECK_PAGE: ContentPage = {
  id: "iolInfoCheck",
  order: 121,
  numberLabel: "01",
  slug: "노안백내장-인공수정체-정보-확인",
  href: ROUTES.iolInfoCheck,
  navLabel: "노안백내장 인공수정체 정보 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 인공수정체 정보, 확인할 때 무엇을 볼까요?",
  heading: "노안백내장 인공수정체 정보, 확인할 때 무엇을 볼까요?",
  breadcrumbLabel: "노안백내장 인공수정체 정보 확인",
  infoTopicLabel: "렌즈·수술 이해",
  infoCardDescription:
    "인공수정체를 상담에서 확인할 때 볼 항목과 렌즈 선택 상담에서 물어볼 내용을 안내합니다.",
  intro: [
    "노안백내장 수술에서는 혼탁해진 수정체를 제거하고 인공수정체를 삽입합니다. 인공수정체는 종류와 특성이 제품마다 다를 수 있어, 광고 문구보다 상담에서 직접 정보를 확인하는 과정이 중요합니다.",
    "이 글은 인공수정체 정보를 확인할 때 볼 수 있는 항목과 렌즈 선택 상담에서 물어볼 내용을 정리한 일반적인 의료정보이며, 특정 제품을 추천하거나 우월성을 주장하지 않습니다.",
  ],
  hubContextLink: {
    before: "인공수정체 외에 노안백내장 전체 흐름까지 함께 보려면 ",
    anchor: "노안백내장 전체 안내",
    after: "를 참고하세요.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "iol-check-01",
    "iol-check-02",
    "iol-check-03",
    "iol-check-04",
    "iol-check-05",
  ],
  faqTitle: "노안백내장 인공수정체 정보 확인 자주 묻는 질문",
  conclusion: [
    "인공수정체 정보를 확인할 때는 제품명, 허가·인증 정보, 특성과 한계를 함께 살펴보는 편이 도움이 됩니다. 특정 렌즈가 모든 사람에게 더 좋다고 단정할 수 없으며, 최종 선택은 검사 결과와 상담을 통해 이뤄져야 합니다.",
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
  relatedGuideIds: ["lensTypeCheck", "targetDistanceConsult", "procedureProcess"],
  keySummary: [
    {
      numberLabel: "01",
      title: "제품 정보",
      text: "제품명과 제조사, 허가·인증 정보를 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "특성과 한계",
      text: "각 렌즈의 특성뿐 아니라 한계도 함께 설명받습니다.",
    },
    {
      numberLabel: "03",
      title: "개인 적합성",
      text: "눈 상태와 생활패턴에 따라 적합성이 달라질 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "비용 구분",
      text: "렌즈별 비용 차이는 견적에서 항목을 구분해 확인합니다.",
    },
  ],
  seo: {
    title: "노안백내장 인공수정체 정보, 확인할 때 무엇을 볼까요? | 노안백내장",
    description:
      "노안백내장 인공수정체 정보를 확인할 때 볼 항목과 렌즈 선택 상담에서 물어볼 내용을 안내합니다.",
    keywords: [
      "노안백내장 인공수정체",
      "백내장 렌즈 정보",
      "인공수정체 확인사항",
      "노안백내장 렌즈 선택",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "iol-check-what",
      order: 1,
      numberLabel: "01",
      heading: "인공수정체는 무엇이고 왜 정보를 확인해야 하나요?",
      layout: "prose",
      decorativeIcon: "👁",
      directAnswer:
        "인공수정체는 혼탁해진 수정체를 대신해 눈 안에 삽입하는 렌즈로, 제품마다 특성과 허가·인증 정보가 다를 수 있어 광고 문구보다 직접 확인하는 과정이 필요합니다.",
      paragraphs: [
        "인공 수정체는 한 가지 종류만 있는 것이 아니라 초점을 맺는 방식, 소재, 설계에 따라 여러 종류가 있을 수 있습니다. ‘신제품’, ‘프리미엄’ 같은 표현만으로 특정 렌즈가 모두에게 더 좋다고 판단하기는 어렵습니다.",
        "정보를 확인할 때는 제품명과 제조사, 국내 허가·인증 여부, 해당 렌즈의 특성과 한계를 함께 살펴보는 것이 중요합니다. 이 글은 특정 제품을 추천하지 않으며 일반적인 확인 기준만 안내합니다.",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "노안백내장 수술 전 검사 안내 보기",
    },
    {
      id: "iol-check-items",
      order: 2,
      numberLabel: "02",
      heading: "상담에서 어떤 정보를 확인할 수 있나요?",
      layout: "info-blocks",
      decorativeIcon: "🔎",
      directAnswer:
        "제품명, 제조사, 국내 허가·인증 정보, 초점 방식, 특성과 한계, 비용 구성을 상담에서 확인할 수 있습니다.",
      paragraphs: [
        "아래 항목은 상담에서 흔히 확인되는 정보의 예시이며, 실제 안내 항목은 병원과 상담 상황에 따라 달라질 수 있습니다.",
      ],
      infoBlocks: [
        { label: "제품 정보", text: "제품명, 제조사, 국내 허가·인증 여부" },
        { label: "초점 방식", text: "단초점·다초점·연속초점 등 렌즈의 기본 설계" },
        { label: "특성과 한계", text: "장점뿐 아니라 알려진 한계도 함께 확인" },
        { label: "비용 구성", text: "렌즈별 비용 차이와 포함 항목" },
      ],
      relatedHref: ROUTES.lensTypeCheck,
      relatedLabel: "노안백내장 단초점·다초점 차이 보기",
    },
    {
      id: "iol-check-caution",
      order: 3,
      numberLabel: "03",
      heading: "인공수정체 정보를 볼 때 주의할 점은 무엇인가요?",
      layout: "prose",
      decorativeIcon: "⚠️",
      directAnswer:
        "특정 렌즈가 모든 사람에게 더 좋다고 단정하는 설명, 부작용이 전혀 없다는 표현, 결과를 보장하는 문구는 신중하게 볼 필요가 있습니다.",
      paragraphs: [
        "렌즈 광고나 후기에서 ‘최고’, ‘완벽한 시력’ 같은 표현을 접할 수 있지만, 실제 결과는 눈 상태와 개인차에 따라 달라질 수 있습니다. 이러한 표현만으로 판단하기보다 검사 결과와 상담 설명을 기준으로 삼는 것이 안전합니다.",
        "특정 렌즈의 국내 허가·인증 여부는 임의로 단정하지 않고 상담에서 직접 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.adInfoCheck,
      relatedLabel: "노안백내장 광고 정보 확인 시 주의점 보기",
    },
    {
      id: "iol-check-consult",
      order: 4,
      numberLabel: "04",
      heading: "렌즈 선택 상담에서는 무엇을 확인하나요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "눈 상태, 기대하는 시거리, 야간 활동이나 독서 등 생활패턴, 각 렌즈의 특성과 한계를 함께 확인하는 과정이 렌즈 선택 상담입니다.",
      paragraphs: [
        "렌즈 선택은 검사 결과만으로 자동으로 정해지는 것이 아니라, 본인이 중요하게 여기는 생활 조건을 함께 이야기하는 과정을 통해 좁혀지는 경우가 많습니다.",
        "구체적인 목표 거리와 생활패턴을 상담에서 어떻게 전달하면 좋은지는 별도 안내에서 더 자세히 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.targetDistanceConsult,
      relatedLabel: "노안백내장 목표 거리·생활패턴 상담 보기",
    },
  ],
};
