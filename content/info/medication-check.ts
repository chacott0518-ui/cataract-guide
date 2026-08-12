import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 전 복용약 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const MEDICATION_CHECK_PAGE: ContentPage = {
  id: "medicationCheck",
  order: 111,
  numberLabel: "01",
  slug: "노안백내장-수술-전-복용약-확인",
  href: ROUTES.medicationCheck,
  navLabel: "노안백내장 수술 전 복용약 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 전 복용약, 어떻게 확인하나요?",
  heading: "노안백내장 수술 전 복용약, 어떻게 확인하나요?",
  breadcrumbLabel: "노안백내장 수술 전 복용약 확인",
  infoTopicLabel: "검사·상담 준비",
  infoCardDescription:
    "복용 중인 약과 건강기능식품을 상담에서 어떻게 정리해 알리면 좋은지 안내합니다.",
  intro: [
    "노안백내장 수술 전에는 현재 복용 중인 약과 건강기능식품을 의료진에게 알리는 과정이 검사·상담에서 중요하게 다뤄질 수 있습니다. 약 종류에 따라 확인이 필요한 항목이 달라질 수 있어, 목록을 미리 정리해 두면 상담이 더 구체적일 수 있습니다.",
    "이 글은 복용약을 상담에서 어떻게 정리해 알리면 좋은지 안내하는 일반적인 의료정보이며, 특정 약의 복용 중단이나 조정을 권고하지 않습니다. 복용약 관련 결정은 처방 의료진과 반드시 상의해야 합니다.",
  ],
  hubContextLink: {
    before: "복용약 외에 검사·병력 확인까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "med-check-01",
    "med-check-02",
    "med-check-03",
    "med-check-04",
    "med-check-05",
  ],
  faqTitle: "노안백내장 수술 전 복용약 확인 자주 묻는 질문",
  conclusion: [
    "복용약 확인은 검사 결과 해석과 수술 전후 계획에 참고가 될 수 있는 정보이며, 특정 약을 복용한다고 해서 수술이 불가능하다고 단정할 근거는 아닙니다. 처방약, 일반의약품, 건강기능식품을 빠짐없이 정리해 상담에서 알리는 편이 도움이 됩니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·처방을 대신하지 않습니다. 복용약 조정이 필요한지 여부는 반드시 의료진과 상의해 결정해야 합니다.",
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
  relatedGuideIds: ["historyCheck", "consultationQuestions", "preExam"],
  keySummary: [
    {
      numberLabel: "01",
      title: "정리 목적",
      text: "약 종류에 따라 검사·상담에서 확인할 항목이 달라질 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "정리 범위",
      text: "처방약뿐 아니라 일반의약품, 건강기능식품도 함께 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "임의 중단 금지",
      text: "복용 중단·조정은 처방 의료진과 상의 없이 임의로 하지 않습니다.",
    },
    {
      numberLabel: "04",
      title: "상담 활용",
      text: "정리한 목록은 상담에서 그대로 보여주며 설명을 요청할 수 있습니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 전 복용약, 어떻게 확인하나요? | 노안백내장",
    description:
      "노안백내장 수술 전 복용 중인 약과 건강기능식품을 상담에서 정리해 알리는 방법과 확인할 점을 안내합니다.",
    keywords: [
      "노안백내장 복용약",
      "백내장 수술 전 약",
      "백내장 수술 복용약 확인",
      "노안백내장 상담 준비",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "med-check-why",
      order: 1,
      numberLabel: "01",
      heading: "왜 복용약을 상담 전에 정리해야 하나요?",
      layout: "prose",
      decorativeIcon: "💊",
      directAnswer:
        "복용약은 검사 결과 해석과 수술 전후 계획을 상담하는 과정에서 참고가 될 수 있는 정보이기 때문입니다. 모든 약이 동일한 방식으로 다뤄진다고 단정할 수 없습니다.",
      paragraphs: [
        "특정 약을 복용 중이라는 사실만으로 수술 가능 여부가 정해지는 것은 아니지만, 약 종류와 복용 기간에 따라 의료진이 추가로 확인하는 항목이 달라질 수 있습니다. 이런 이유로 상담 전 정리가 도움이 됩니다.",
        "약 이름을 정확히 기억하기 어렵다면 처방전이나 약 봉투를 사진으로 남겨 상담에 가져가는 방법도 있습니다. 기억에만 의존하기보다 기록을 준비하는 편이 정확합니다.",
        "이 정보는 특정 약의 위험성을 단정하거나 복용 중단을 권고하는 목적이 아니며, 상담에서 필요한 정보를 빠짐없이 전달하기 위한 준비 과정입니다.",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "노안백내장 수술 전 검사 안내 보기",
    },
    {
      id: "med-check-list",
      order: 2,
      numberLabel: "02",
      heading: "무엇을 목록으로 정리하면 좋은가요?",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "처방약, 약국에서 구매한 일반의약품, 건강기능식품, 최근 중단한 약까지 포함해 이름과 복용 시작 시기를 함께 정리하는 편이 좋습니다.",
      paragraphs: [
        "약 이름 외에도 언제부터 복용했는지, 매일 복용하는지 필요할 때만 복용하는지도 함께 적어 두면 상담에서 더 명확하게 전달할 수 있습니다.",
        "건강기능식품이나 영양제도 약과 상호작용이 논의될 수 있는 항목이므로 함께 목록에 포함하는 편이 좋습니다.",
      ],
      bullets: [
        "현재 복용 중인 처방약 이름과 시작 시기",
        "약국에서 구매한 일반의약품",
        "건강기능식품·영양제 종류",
        "최근 복용을 중단한 약이 있다면 그 시기",
        "약 관련 알레르기·이상반응 경험",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
    {
      id: "med-check-caution",
      order: 3,
      numberLabel: "03",
      heading: "복용약을 임의로 중단해도 되나요?",
      layout: "prose",
      decorativeIcon: "⚠️",
      directAnswer:
        "아니요. 복용약의 중단이나 조정이 필요한지는 처방한 의료진과 상의해 결정해야 하며, 상담 전에 스스로 판단해 중단하는 것은 권장되지 않습니다.",
      paragraphs: [
        "일부 약은 수술 전후 관리에서 함께 고려되는 경우가 있다고 알려져 있지만, 이는 개인의 건강 상태와 약의 종류에 따라 달라질 수 있는 사안입니다. 이 글에서 특정 약의 중단 여부를 단정하지 않습니다.",
        "궁금한 점이 있다면 처방 의료진과 수술을 담당하는 의료진 모두에게 복용약 목록을 알리고, 조정이 필요한지 함께 확인하는 것이 안전한 방법입니다.",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 안내 보기",
    },
    {
      id: "med-check-consult",
      order: 4,
      numberLabel: "04",
      heading: "상담에서 복용약 목록을 어떻게 활용하나요?",
      layout: "prose",
      decorativeIcon: "💬",
      directAnswer:
        "정리한 목록을 상담 시 그대로 제시하고, 검사·수술 계획과 관련해 확인이 필요한 부분을 의료진에게 직접 질문하는 방식으로 활용할 수 있습니다.",
      paragraphs: [
        "목록을 미리 준비해 가면 상담 시간을 절약할 수 있을 뿐 아니라, 누락되는 정보 없이 상담이 진행되는 데 도움이 됩니다. 기억을 되짚기보다 기록을 근거로 이야기하는 편이 정확합니다.",
        "복용약과 관련해 궁금한 점이 있다면 상담 질문 목록에 함께 포함해 정리해 두면 도움이 됩니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "노안백내장 상담에서 물어볼 질문 보기",
    },
  ],
};
