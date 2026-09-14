import {
  GUIDE_SECTION_IMAGES,
  HOME_FEATURE_IMAGE,
  HOME_FEATURE_IMAGE_MOBILE,
  TOPIC_MEDIA,
} from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type {
  ArticleSection,
  ContentCard,
  HomeIndexItem,
  HomeIntro,
  PageSeo,
} from "@/types/content";

export const HOME_SEO: PageSeo = {
  title: "노안백내장",
  description:
    "노안백내장 수술비용, 회복기간, 주의사항, 병원 선택, 후기와 FAQ를 한곳에서 확인하세요. 인공수정체 종류와 비용, 수술 전후 확인사항까지 자세히 안내합니다.",
  keywords: [
    "노안백내장",
    "노안백내장 수술비용",
    "노안백내장 회복기간",
    "노안백내장 주의사항",
    "노안백내장 병원",
    "노안백내장 병원선택",
    "노안백내장 후기",
    "노안백내장 FAQ",
    "인공수정체 비용",
  ],
  ogImage: TOPIC_MEDIA.cost.thumbnail.src,
  socialImage: "/images/og/cataractguide-kakao.png",
  category: SITE.categoryLabel,
};

export const HOME_INTRO: HomeIntro = {
  heading: "노안백내장 수술 전 알아야 할 정보",
  featureImage: HOME_FEATURE_IMAGE,
  featureImageMobile: HOME_FEATURE_IMAGE_MOBILE,
  paragraphs: [
    "이 사이트는 노안백내장을 증상 비교, 비용·렌즈, 회복, 주의사항, 병원 선택과 FAQ 기준으로 정리하는 정보 허브입니다. 노안은 가까운 거리 초점 조절이 떨어지는 변화, 백내장은 수정체 혼탁과 관련된 상태로 함께 나타날 수 있지만, 원인과 확인 과정은 다를 수 있습니다.",
    "같은 시야 불편이라도 비교·판단 기준이 다를 수 있습니다. 검사에서 수정체 상태와 일상 영향이 확인되면, 필요에 따라 백내장 수술과 인공 수정체 선택을 검토하는 흐름으로 이어질 수 있습니다.",
    "같은 불편처럼 보여도 관리 방향이 달라질 수 있으므로, 수술비용·렌즈 종류·회복기간·주의사항과 병원 선택 기준을 구분해 살펴보는 것이 도움이 됩니다.",
    "아래 정보는 일반적인 안내이며 개인의 진단이나 치료 결정을 대신하지 않습니다. 최종 확인은 검사와 상담을 통해 이루어져야 합니다.",
  ],
  summary:
    "증상만으로 단정하지 말고, 검사 결과와 생활 패턴을 함께 확인한 뒤 필요한 주제를 차례로 읽어 보세요.",
};

export const HOME_EXAM_NOTICE =
  "특정 증상만으로 원인을 단정하기 어려우므로 검사 결과와 현재 느끼는 불편을 함께 확인하는 것이 중요합니다.";

export const HOME_INDEX: HomeIndexItem[] = [
  {
    order: 1,
    numberLabel: "01",
    title: "노안백내장 수술비용",
    description: "비용이 달라지는 검사·렌즈·수술 범위",
    href: ROUTES.cost,
  },
  {
    order: 2,
    numberLabel: "02",
    title: "노안백내장 회복기간",
    description: "수술 후 회복 과정과 생활 관리",
    href: ROUTES.recovery,
  },
  {
    order: 3,
    numberLabel: "03",
    title: "노안백내장 주의사항",
    description: "수술 전후 확인해야 할 주의점",
    href: ROUTES.precautions,
  },
  {
    order: 4,
    numberLabel: "04",
    title: "노안백내장 병원선택",
    description: "검사 체계, 설명 과정과 사후관리 기준",
    href: ROUTES.hospital,
  },
  {
    order: 5,
    numberLabel: "05",
    title: "노안백내장 후기",
    description: "후기에서 확인할 내용과 과장 표현 구분",
    href: ROUTES.reviews,
  },
  {
    order: 6,
    numberLabel: "06",
    title: "노안백내장 FAQ",
    description: "수술 전 자주 묻는 질문 정리",
    href: ROUTES.faq,
  },
];

export const HOME_SECTIONS: ArticleSection[] = [
  {
    id: "home-compare",
    order: 1,
    numberLabel: "01",
    heading: "노안백내장, 노안과 백내장은 어떻게 다른가",
    layout: "comparison",
    directAnswer:
      "비교 기준으로 보면, 노안은 가까운 거리에 초점을 맞추는 조절력이 감소하는 변화이고, 백내장은 수정체가 혼탁해지면서 시야가 흐려지는 질환입니다. 두 상태가 함께 나타날 수 있지만 원인과 확인 과정은 다를 수 있습니다.",
    paragraphs: [
      "비슷한 시야 불편처럼 보여도 검사 결과에 따라 관리 방향이 달라질 수 있습니다. 고객이 먼저 확인할 것은 ‘지금 불편이 조절력 저하인지, 수정체 혼탁인지’를 검사로 나누어 보는 기준입니다.",
      "증상만으로 원인을 단정하기보다, 검사에서 두 상태가 각각 어느 정도인지 확인하는 과정이 필요합니다. 검사로 어떻게 구분하는지는 수술 전 검사 안내에서 이어서 볼 수 있습니다.",
    ],
    comparison: {
      left: {
        label: "노안",
        text: "가까운 거리에 초점을 맞추는 능력이 점차 낮아지는 변화. 돋보기·독서용 안경으로 일부 완화되는 경우가 많음",
      },
      right: {
        label: "백내장",
        text: "수정체가 혼탁해지면서 시야가 흐리거나 눈부심이 나타날 수 있는 질환. 진행 정도에 따라 수술 시기를 검토할 수 있음",
      },
    },
    sectionImage: GUIDE_SECTION_IMAGES.diff,
    relatedHref: ROUTES.preExam,
    relatedLabel: "수술 전 검사에서 구분 확인하기",
  },
  {
    id: "home-symptoms",
    order: 2,
    numberLabel: "02",
    heading: "노안 백내장 검사를 고려해야 하는 주요 증상",
    layout: "checklist",
    directAnswer:
      "가까운 글씨가 흐리거나 빛 번짐이 늘고, 안경을 바꿔도 시야가 충분히 선명하지 않다면 검사를 고려할 수 있습니다. 증상만으로 수술 필요 여부를 판단해서는 안 됩니다.",
    paragraphs: [
      "변화가 지속되면 안과 진료로 현재 상태를 확인하는 것이 안전합니다. 검사에서 무엇을 보는지, 상담 전 무엇을 정리하면 좋은지는 수술 전 검사 안내에서 자세히 확인할 수 있습니다.",
    ],
    bullets: [
      "가까운 글자·스마트폰 화면이 이전보다 흐리게 보임",
      "야간 운전·역광에서 빛 번짐이나 눈부심이 늘어남",
      "안경·돋보기를 교체해도 선명도가 충분하지 않음",
      "밝은 곳과 어두운 곳에서 시야 차이가 커짐",
      "양쪽 눈의 시야·색감 차이가 느껴짐",
    ],
    relatedHref: ROUTES.preExam,
    relatedLabel: "노안백내장 수술 전 검사 안내 보기",
  },
  {
    id: "home-decision",
    order: 3,
    numberLabel: "03",
    heading: "노안백내장 수술 여부는 어떻게 판단하나요?",
    layout: "steps",
    directAnswer:
      "시야 불편 정도, 일상생활 영향, 필요한 시야 범위, 검사상 눈 상태를 종합해 검토합니다. 증상이 있다고 모든 사람에게 같은 시점에 수술이 필요하다고 보기 어렵습니다.",
    paragraphs: [
      "수술 시기는 단순 연령만으로 정해지지 않으며, 검사 결과와 의료진 판단을 함께 보는 경우가 많습니다. 진행 방식의 개요는 수술 과정 안내에서 확인할 수 있습니다.",
    ],
    steps: [
      {
        label: "01 증상 확인",
        text: "독서·운전·야간 활동 등 일상 불편 정도와 빈도를 메모합니다.",
      },
      {
        label: "02 정밀검사",
        text: "시력, 수정체, 망막, 안압 등 종합 검사로 현재 상태를 확인합니다.",
      },
      {
        label: "03 생활 방식과 렌즈 검토",
        text: "근거리·원거리 사용 패턴과 기대 시야를 함께 점검합니다.",
      },
      {
        label: "04 의료진과 수술 여부 판단",
        text: "검사 결과·설명·대안을 바탕으로 방향을 결정합니다.",
      },
    ],
    relatedHref: ROUTES.procedureProcess,
    relatedLabel: "노안백내장 수술 과정 안내 보기",
  },
  {
    id: "home-lens",
    order: 4,
    numberLabel: "04",
    heading: "노안백내장 수술과 렌즈 선택, 무엇을 먼저 볼까요?",
    layout: "prose",
    directAnswer:
      "백내장 수술에서는 혼탁한 수정체를 제거한 뒤 인공수정체를 넣는 경우가 많고, 단초점·다초점·연속초점(초점심도확장) 등 시야 목표가 다른 선택지가 있습니다. 어느 한쪽이 무조건 우수하다고 단정할 수는 없습니다.",
    paragraphs: [
      "메인에서는 렌즈 선택이 중요하다는 점만 짚습니다. 유형별 특성과 차이는 단초점·다초점 비교 안내에서, 선택 전 확인 정보는 인공수정체 안내에서, 운전·독서·PC 등 생활 요구는 목표 거리 상담에서 이어서 확인하세요.",
    ],
    relatedHref: ROUTES.lensTypeCheck,
    relatedLabel: "단초점·다초점·연속초점 차이 자세히 보기",
  },
  {
    id: "home-cost",
    order: 5,
    numberLabel: "05",
    heading: "노안백내장 수술비용이 달라지는 요소",
    layout: "prose",
    directAnswer:
      "노안백내장 수술비용은 검사 구성, 인공수정체 선택, 수술 범위, 사후관리 포함 여부에 따라 달라질 수 있습니다. 전국 공통 가격처럼 단정할 수 있는 금액은 없습니다.",
    paragraphs: [
      "총액만 비교하기보다 포함·제외 항목을 구분해 보는 것이 중요합니다. 상세한 비용 결정요인과 견적 확인 기준은 수술비용 안내에서 확인할 수 있습니다.",
    ],
    relatedHref: ROUTES.cost,
    relatedLabel: "노안백내장 수술비용 자세히 보기",
  },
  {
    id: "home-recovery",
    order: 6,
    numberLabel: "06",
    heading: "노안 백내장 수술 후 회복 과정",
    layout: "prose",
    directAnswer:
      "회복 속도와 일상 복귀 시점은 개인차, 렌즈 적응, 생활 습관에 따라 달라질 수 있습니다. 모든 사람에게 동일한 회복 날짜를 단정할 수 없습니다.",
    paragraphs: [
      "운전·세안·운동 가능 시점은 의료진 안내를 우선합니다. 회복 일정과 생활 관리의 자세한 안내는 회복기간 페이지에서 확인하세요.",
    ],
    relatedHref: ROUTES.recovery,
    relatedLabel: "노안백내장 회복기간 자세히 보기",
  },
  {
    id: "home-hospital",
    order: 7,
    numberLabel: "07",
    heading: "병원 선택 체크리스트",
    layout: "checklist",
    directAnswer:
      "특정 병원을 추천하지 않습니다. 검사 설명, 렌즈 안내, 사후관리 체계를 중심으로 비교하는 편이 도움이 됩니다.",
    paragraphs: [
      "광고 문구나 단정적인 결과 표현보다, 본인 상태에 맞는 설명과 포함 비용, 이상 증상 시 연락 방법이 명확한지를 확인하세요. 비교 기준의 상세 안내는 병원선택 페이지에서 볼 수 있습니다.",
    ],
    bullets: [
      "검사 결과를 충분히 설명하는지",
      "렌즈별 장점과 제한점을 함께 안내하는지",
      "견적 포함·제외 항목을 확인할 수 있는지",
      "사후관리·연락 방법이 명확한지",
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "노안백내장 병원선택 기준 보기",
  },
];

export const HOME_FAQ_IDS = [
  "common-01",
  "common-02",
  "common-03",
  "common-04",
  "common-05",
  "common-06",
] as const;

export const CARD_PUBLISHED_AT = "2026-07-22";

/** 목차카드 전용 — TOPIC_MEDIA.thumbnail과 동일 파일이되 src를 경로로 고정 */
const CARD_IMAGE = {
  cost: TOPIC_MEDIA.cost.thumbnail,
  recovery: TOPIC_MEDIA.recovery.thumbnail,
  precautions: TOPIC_MEDIA.precautions.thumbnail,
  hospital: TOPIC_MEDIA.hospital.thumbnail,
  reviews: TOPIC_MEDIA.reviews.thumbnail,
  faq: TOPIC_MEDIA.faq.thumbnail,
} as const;

export const CONTENT_CARDS: ContentCard[] = [
  {
    id: "cost",
    order: 1,
    numberLabel: "01",
    href: ROUTES.cost,
    slug: "노안백내장-수술비용",
    title: "노안백내장 수술비용",
    cardTitle: "노안백내장 수술비용",
    shortTitle: "노안백내장 수술비용",
    cardMetaLabel: "수술비용",
    iconKey: "cost",
    description: "검사·렌즈·수술 범위에 따른 비용 기준",
    cardDescription:
      "검사 범위와 렌즈 종류, 수술 및 사후관리 포함 항목을 구분해 보면 비용 구성이 어떻게 달라지는지 확인할 수 있는 기준을 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.cost.mobileCardDescription,
    accent: "orange",
    accentColor: TOPIC_MEDIA.cost.accentColor,
    accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05", "cost-06"],
    image: CARD_IMAGE.cost,
    heroImage: CARD_IMAGE.cost,
    inlineImage: CARD_IMAGE.cost,
  },
  {
    id: "recovery",
    order: 2,
    numberLabel: "02",
    href: ROUTES.recovery,
    slug: "노안백내장-회복기간",
    title: "노안백내장 회복기간",
    cardTitle: "노안백내장 회복기간",
    shortTitle: "노안백내장 회복기간",
    cardMetaLabel: "회복기간",
    iconKey: "recovery",
    description: "수술 후 회복 과정과 생활 관리",
    cardDescription:
      "수술 직후부터 일상생활로 복귀하기까지, 시기별로 확인해야 할 회복 과정과 생활에서 챙길 관리 기준을 순서대로 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.recovery.mobileCardDescription,
    accent: "pink",
    accentColor: TOPIC_MEDIA.recovery.accentColor,
    accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "recovery-01",
      "recovery-02",
      "recovery-03",
      "recovery-04",
      "recovery-05",
    ],
    image: CARD_IMAGE.recovery,
    heroImage: CARD_IMAGE.recovery,
    inlineImage: CARD_IMAGE.recovery,
  },
  {
    id: "precautions",
    order: 3,
    numberLabel: "03",
    href: ROUTES.precautions,
    slug: "노안백내장-주의사항",
    title: "노안백내장 주의사항",
    cardTitle: "노안백내장 주의사항",
    shortTitle: "노안백내장 주의사항",
    cardMetaLabel: "주의사항",
    iconKey: "precautions",
    description: "수술 전후 확인해야 할 주의점",
    cardDescription:
      "수술 전 준비부터 안약·세안·운동·외출까지, 수술 후 일상에서 빠뜨리기 쉬운 주의점을 항목별로 함께 자세히 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.precautions.mobileCardDescription,
    accent: "lime",
    accentColor: TOPIC_MEDIA.precautions.accentColor,
    accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "caution-01",
      "caution-02",
      "caution-03",
      "caution-04",
      "caution-05",
    ],
    image: CARD_IMAGE.precautions,
    heroImage: CARD_IMAGE.precautions,
    inlineImage: CARD_IMAGE.precautions,
  },
  {
    id: "hospital",
    order: 4,
    numberLabel: "04",
    href: ROUTES.hospital,
    slug: "노안백내장-병원선택",
    title: "노안백내장 병원선택",
    cardTitle: "노안백내장 병원선택",
    shortTitle: "노안백내장 병원선택",
    cardMetaLabel: "병원선택",
    iconKey: "hospital",
    description: "검사 체계, 설명 과정과 사후관리 기준",
    cardDescription:
      "검사 체계와 렌즈 설명, 비용 안내와 사후관리 범위를 비교할 때 병원마다 놓치지 않고 확인할 기준을 자세히 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.hospital.mobileCardDescription,
    accent: "blue",
    accentColor: TOPIC_MEDIA.hospital.accentColor,
    accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "hospital-01",
      "hospital-02",
      "hospital-03",
      "hospital-04",
      "hospital-05",
    ],
    image: CARD_IMAGE.hospital,
    heroImage: CARD_IMAGE.hospital,
    inlineImage: CARD_IMAGE.hospital,
  },
  {
    id: "reviews",
    order: 5,
    numberLabel: "05",
    href: ROUTES.reviews,
    slug: "노안백내장-후기",
    title: "노안백내장 후기",
    cardTitle: "노안백내장 후기",
    shortTitle: "노안백내장 후기",
    cardMetaLabel: "후기",
    iconKey: "reviews",
    description: "후기에서 확인할 내용과 과장 표현 구분",
    cardDescription:
      "후기에서 렌즈 종류와 회복 과정, 비용 안내와 광고성 표현을 구분해 확인하는 방법을 구체적으로 차근차근 정리해 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.reviews.mobileCardDescription,
    accent: "cyan",
    accentColor: TOPIC_MEDIA.reviews.accentColor,
    accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "review-01",
      "review-02",
      "review-03",
      "review-04",
      "review-05",
    ],
    image: CARD_IMAGE.reviews,
    heroImage: CARD_IMAGE.reviews,
    inlineImage: CARD_IMAGE.reviews,
  },
  {
    id: "faq",
    order: 6,
    numberLabel: "06",
    href: ROUTES.faq,
    slug: "노안백내장-faq",
    title: "노안백내장 FAQ",
    cardTitle: "노안백내장 FAQ",
    shortTitle: "노안백내장 FAQ",
    cardMetaLabel: "FAQ",
    iconKey: "faq",
    description: "수술 전 자주 묻는 질문 정리",
    cardDescription:
      "수술비용·렌즈·회복기간·주의사항처럼 노안백내장 수술 전에 자주 묻는 질문을 주제별로 모아 더 자세히 정리해 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.faq.mobileCardDescription,
    accent: "neutral",
    accentColor: TOPIC_MEDIA.faq.accentColor,
    accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [...HOME_FAQ_IDS],
    image: CARD_IMAGE.faq,
    heroImage: CARD_IMAGE.faq,
    inlineImage: CARD_IMAGE.faq,
  },
];
