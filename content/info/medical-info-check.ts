import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 의료정보 확인 방법 안내",
  width: 1200,
  height: 630,
} as const;

export const MEDICAL_INFO_CHECK_PAGE: ContentPage = {
  id: "medicalInfoCheck",
  order: 151,
  numberLabel: "01",
  slug: "노안백내장-의료정보-확인-방법",
  href: ROUTES.medicalInfoCheck,
  navLabel: "노안백내장 의료정보 확인 방법",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 의료정보, 확인할 때 무엇을 봐야 하나요?",
  heading: "노안백내장 의료정보, 확인할 때 무엇을 봐야 하나요?",
  breadcrumbLabel: "노안백내장 의료정보 확인 방법",
  infoTopicLabel: "이해·정보",
  infoCardDescription:
    "온라인에서 노안백내장 정보를 확인할 때 참고할 신뢰 기준과 공식 출처를 안내합니다.",
  intro: [
    "노안백내장 관련 정보는 온라인에서 다양한 형태로 접할 수 있지만, 출처와 작성 목적에 따라 신뢰도가 다를 수 있습니다. 공식 기관 자료인지, 광고성 콘텐츠인지 구분하는 습관이 정보를 판단하는 데 도움이 됩니다.",
    "이 글은 의료정보를 확인할 때 참고할 수 있는 일반적인 기준을 안내하며, 특정 웹사이트나 콘텐츠의 신뢰도를 개별적으로 평가하지 않습니다.",
  ],
  hubContextLink: {
    before: "의료정보 확인 방법 외에 광고 정보 주의점까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "medical-info-01",
    "medical-info-02",
    "medical-info-03",
    "medical-info-04",
    "medical-info-05",
  ],
  faqTitle: "노안백내장 의료정보 확인 방법 자주 묻는 질문",
  conclusion: [
    "온라인 의료정보를 확인할 때는 작성 목적, 출처, 최신성, 근거 제시 여부를 함께 살펴보는 것이 도움이 됩니다. 특정 정보만으로 개인의 진단이나 치료를 판단하지 않고, 최종 확인은 의료진과의 상담을 통해 이뤄져야 합니다.",
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
  relatedGuideIds: ["adInfoCheck", "preExam", "consultationQuestions"],
  keySummary: [
    {
      numberLabel: "01",
      title: "출처 확인",
      text: "공식 기관·의료기관 자료인지 우선 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "작성 목적",
      text: "정보 제공 목적인지, 광고 목적인지 구분합니다.",
    },
    {
      numberLabel: "03",
      title: "최신성",
      text: "정보의 작성·수정 시점을 함께 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "근거 제시",
      text: "단정적 표현보다 근거를 제시하는 정보를 우선합니다.",
    },
  ],
  seo: {
    title: "노안백내장 의료정보, 확인할 때 무엇을 봐야 하나요? | 노안백내장",
    description:
      "노안백내장 의료정보를 온라인에서 확인할 때 참고할 신뢰 기준과 공식 출처를 안내합니다.",
    keywords: [
      "노안백내장 의료정보",
      "백내장 정보 확인 방법",
      "노안백내장 신뢰할 수 있는 정보",
      "백내장 정보 출처",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "medical-info-source",
      order: 1,
      numberLabel: "01",
      heading: "정보의 출처는 어떻게 확인하나요?",
      layout: "prose",
      decorativeIcon: "🔎",
      directAnswer:
        "공공기관, 의료기관, 학술단체가 제공하는 자료인지, 개인 블로그나 광고성 콘텐츠인지 구분하는 것이 첫 번째 확인 기준이 될 수 있습니다.",
      paragraphs: [
        "같은 주제를 다루더라도 출처에 따라 정보의 정확성과 최신성이 다를 수 있습니다. 특히 특정 병원이나 제품을 홍보하는 콘텐츠는 정보 제공과 광고 목적이 섞여 있을 수 있어 더 신중하게 볼 필요가 있습니다.",
        "이 사이트를 포함한 모든 온라인 정보는 진단이나 처방을 대신할 수 없으며, 참고 자료로 활용하는 것이 적절합니다.",
      ],
      relatedHref: ROUTES.adInfoCheck,
      relatedLabel: "노안백내장 광고 정보 확인 시 주의점 보기",
    },
    {
      id: "medical-info-check-list",
      order: 2,
      numberLabel: "02",
      heading: "어떤 항목을 함께 확인하면 좋은가요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "작성·수정 날짜, 근거 자료 제시 여부, 단정적 표현 사용 여부, 특정 결과를 보장하는 문구가 있는지를 함께 확인하면 정보의 신뢰도를 가늠하는 데 도움이 됩니다.",
      paragraphs: [
        "오래된 정보를 최신 정보처럼 안내하거나, 근거 없이 특정 결과를 보장하는 콘텐츠는 신중하게 볼 필요가 있습니다.",
      ],
      bullets: [
        "작성·수정 날짜가 명시되어 있는지",
        "공식 출처나 근거 자료를 함께 제시하는지",
        "‘무조건’, ‘100%’ 같은 단정적 표현이 있는지",
        "특정 결과를 보장하는 문구가 있는지",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "노안백내장 수술 전 검사 안내 보기",
    },
    {
      id: "medical-info-official",
      order: 3,
      numberLabel: "03",
      heading: "공식 기관 자료는 어디에서 확인할 수 있나요?",
      layout: "prose",
      decorativeIcon: "📚",
      directAnswer:
        "국내에서는 질병관리청 국가건강정보포털 등 공공기관이 제공하는 눈 건강 정보를, 해외 참고자료로는 미국 국립눈연구소(NEI) 등의 자료를 함께 살펴볼 수 있습니다.",
      paragraphs: [
        "다만 해외 기관 자료는 국내 제도나 허가 사항을 대신 증명하는 근거로 사용해서는 안 됩니다. 국내 관련 사항은 국내 공식 자료를 기준으로 확인하는 것이 정확합니다. 이 글 하단의 공식 출처에서 관련 자료 링크를 확인할 수 있습니다.",
      ],
    },
    {
      id: "medical-info-apply",
      order: 4,
      numberLabel: "04",
      heading: "확인한 정보를 어떻게 활용하면 좋을까요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "온라인에서 확인한 정보는 상담 전 궁금한 점을 정리하는 참고 자료로 활용하고, 최종 판단은 검사 결과와 의료진 상담을 통해 내리는 것이 안전합니다.",
      paragraphs: [
        "정보를 미리 정리해 상담 질문으로 준비해 두면, 실제 진료에서 필요한 정보를 더 효율적으로 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
