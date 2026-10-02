import {
  GUIDE_SECTION_IMAGES,
  HOME_FEATURE_IMAGE,
  HOME_MOBILE_HERO_IMAGE,
  TOPIC_MEDIA,
} from "@/config/media";
import { BODY_INFO_SLOTS, slotAsContentImage } from "@/config/image-slots";

function staticImg(image: { src: string; alt: string; width: number; height: number }) {
  return { ...image, src: image.src.split("?")[0] || image.src };
}
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
  title: "노안백내장 | S&B안과 전문의 검수·상담 가이드",
  description:
    "노안백내장은 노안과 백내장이 함께 나타날 수 있는 상태를 말합니다. 노안과 백내장 차이, 수술 전 검사, 다초점·단초점 렌즈 선택, 수술 전 확인사항을 정리하고 안과전문의 검수와 S&B안과 상담 흐름으로 연결합니다.",
  keywords: [
    "노안백내장",
    "노안 백내장",
    "백내장수술",
    "노안수술",
    "다초점렌즈",
    "백내장렌즈",
    "노안백내장수술",
    "노안백내장병원",
    "노안백내장검사",
    "노안백내장비용",
  ],
  ogImage: TOPIC_MEDIA.cost.thumbnail.src,
  socialImage: "/images/og/cataractguide-kakao.png",
  category: SITE.categoryLabel,
};

export const HOME_INTRO: HomeIntro = {
  heading: "노안백내장, 먼저 확인할 핵심 답변",
  featureImage: HOME_FEATURE_IMAGE,
  featureImageMobile: HOME_MOBILE_HERO_IMAGE,
  paragraphs: [
    "노안백내장은 가까운 거리 초점 조절이 떨어지는 노안과, 수정체 혼탁으로 시야가 흐려질 수 있는 백내장이 함께 나타날 수 있는 상태를 가리킵니다. 증상만으로 원인을 단정하기 어렵고, 검사에서 수정체·시력·망막 상태와 일상 불편을 함께 확인한 뒤 관찰·렌즈·수술 여부를 판단하는 흐름이 일반적입니다.",
    "이 페이지는 노안과 백내장 차이, 검사에서 보는 항목, 인공수정체(렌즈) 선택 기준, 수술 전 상담 질문, 회복·주의사항의 개인차까지 판단 기준으로 정리합니다. 최종 진단과 치료 결정은 안과전문의 검사·상담을 통해 이뤄져야 합니다.",
    "아래 정보는 일반적인 건강정보이며 개인의 진료를 대신하지 않습니다. 작성·수정일과 에스앤비안과의원(S&B안과) 의료진·상담 연결은 본문 하단 신뢰 섹션에서 확인할 수 있습니다.",
  ],
  summary:
    "핵심은 증상 단정이 아니라 검사 결과·생활 패턴·렌즈 목표를 맞춰 보는 것입니다. 필요한 주제는 아래 6개 카드와 본문에서 이어서 확인하세요.",
};

export const HOME_EXAM_NOTICE =
  "특정 증상만으로 노안백내장 원인이나 수술 시기를 단정하기 어렵습니다. 검사 결과와 현재 불편, 직업·운전·독서 패턴을 함께 확인해 주세요.";

export const HOME_INDEX: HomeIndexItem[] = [
  {
    order: 1,
    numberLabel: "01",
    title: "노안백내장 수술비용",
    description: "검사·렌즈 기준 견적 확인",
    href: ROUTES.cost,
  },
  {
    order: 2,
    numberLabel: "02",
    title: "노안백내장 회복기간",
    description: "회복·일상 복귀 판단 기준",
    href: ROUTES.recovery,
  },
  {
    order: 3,
    numberLabel: "03",
    title: "노안백내장 주의사항",
    description: "수술 전 확인·주의 체크",
    href: ROUTES.precautions,
  },
  {
    order: 4,
    numberLabel: "04",
    title: "노안백내장 병원 선택",
    description: "검사·상담 병원 비교",
    href: ROUTES.hospital,
  },
  {
    order: 5,
    numberLabel: "05",
    title: "노안백내장 렌즈 종류",
    description: "렌즈 종류·상담 기준",
    href: ROUTES.lensTypeCheck,
  },
  {
    order: 6,
    numberLabel: "06",
    title: "노안백내장 FAQ",
    description: "검사·렌즈·회복 FAQ",
    href: ROUTES.faq,
  },
];

export const HOME_SECTIONS: ArticleSection[] = [
  {
    id: "home-compare",
    order: 1,
    numberLabel: "01",
    heading: "노안백내장에서 노안과 백내장은 어떻게 다른가",
    layout: "comparison",
    directAnswer:
      "노안은 가까운 거리에 초점을 맞추는 조절력이 감소하는 변화이고, 백내장은 수정체가 혼탁해지면서 시야가 흐려질 수 있는 질환입니다. 노안백내장처럼 함께 느껴질 수 있지만 원인과 확인·치료 축은 다를 수 있습니다.",
    paragraphs: [
      "비슷한 시야 불편처럼 보여도 검사 결과에 따라 관리 방향이 달라질 수 있습니다. 먼저 확인할 것은 ‘지금 불편이 조절력 저하인지, 수정체 혼탁인지’를 검사로 나누어 보는 기준입니다.",
      "증상만으로 원인을 단정하기보다, 시력·수정체·망막 평가에서 두 상태가 각각 어느 정도인지 확인하는 과정이 필요합니다. 구분 방법은 수술 전 검사 안내에서 이어서 볼 수 있습니다.",
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
      "가까운 글씨가 흐리거나 빛 번짐이 늘고, 안경을 바꿔도 시야가 충분히 선명하지 않다면 노안백내장 검사를 고려할 수 있습니다. 증상만으로 수술 필요 여부를 판단해서는 안 됩니다.",
    paragraphs: [
      "변화가 지속되면 안과 진료로 현재 상태를 확인하는 것이 안전합니다. 검사에서는 시력·굴절, 수정체 혼탁, 각막·난시, 안압, 망막·시신경 등 필요한 항목을 종합하며, 한 가지 수치만으로 수술·렌즈를 결정하지 않습니다.",
      "상담 전에 독서·운전·야간 활동 불편과 기대하는 시야 거리를 메모해 두면 설명과 질문이 구체적입니다. 세부 항목은 수술 전 검사 안내에서 확인하세요.",
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
    id: "home-lens",
    order: 3,
    numberLabel: "03",
    heading: "노안백내장 렌즈 선택, 무엇을 기준으로 보나요?",
    layout: "prose",
    directAnswer:
      "백내장 수술에서는 혼탁한 수정체를 제거한 뒤 인공수정체를 넣는 경우가 많고, 단초점·다초점·연속초점(초점심도확장) 등 시야 목표가 다른 선택지가 있습니다. 어느 한쪽이 무조건 우수하다고 단정할 수는 없습니다.",
    paragraphs: [
      "선택 전에는 근·중·원거리 우선순위, 야간 운전, 빛번짐 허용도, 잔여 난시, 직업·취미를 정리합니다. 다초점·연속초점이 맞지 않는 경우도 있어 단초점이 더 적합한 사례가 있습니다.",
      "유형별 특성과 차이는 렌즈 종류 안내에서, 제품·허가·한계 확인은 인공수정체 안내에서, 생활 거리 목표는 목표 거리 상담에서 이어서 확인하세요.",
    ],
    relatedHref: ROUTES.lensTypeCheck,
    relatedLabel: "노안백내장 렌즈 종류 자세히 보기",
  },
  {
    id: "home-decision",
    order: 4,
    numberLabel: "04",
    heading: "노안백내장 수술은 언제 검토하나요?",
    layout: "steps",
    directAnswer:
      "시야 불편 정도, 일상·직업 영향, 필요한 시야 범위, 검사상 눈 상태를 종합해 검토합니다. 증상이 있다고 모든 사람에게 같은 시점에 수술이 필요하다고 보기 어렵습니다.",
    paragraphs: [
      "수술 시기는 단순 연령만으로 정해지지 않으며, 검사 결과와 의료진 판단을 함께 보는 경우가 많습니다. 상담에서는 관찰이 적절한 단계와 수술 논의가 필요한 단계를 구분합니다.",
      "수술 전 확인할 질문 예시(검사 의미, 렌즈 한계, 비용 포함 항목, 사후관리)를 미리 정리하면 광고 문구만으로 판단하는 실수를 줄일 수 있습니다.",
    ],
    steps: [
      {
        label: "01 증상·생활 확인",
        text: "독서·운전·야간 활동 등 일상 불편 정도와 빈도를 메모합니다.",
      },
      {
        label: "02 정밀검사",
        text: "시력, 수정체, 망막, 안압 등 종합 검사로 현재 상태를 확인합니다.",
      },
      {
        label: "03 렌즈·거리 목표",
        text: "근거리·원거리 사용 패턴과 빛번짐 허용도를 함께 점검합니다.",
      },
      {
        label: "04 전문의와 판단",
        text: "검사 결과·설명·대안을 바탕으로 관찰·수술 방향을 결정합니다.",
      },
    ],
    relatedHref: ROUTES.consultationQuestions,
    relatedLabel: "수술 전 상담 질문 보기",
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
    heading: "노안 백내장 수술 후 회복과 주의사항",
    layout: "prose",
    directAnswer:
      "회복 속도와 일상 복귀 시점은 개인차, 렌즈 적응, 생활 습관에 따라 달라질 수 있습니다. 모든 사람에게 동일한 회복 날짜를 단정할 수 없습니다.",
    paragraphs: [
      "운전·세안·운동 가능 시점은 의료진 안내를 우선합니다. 수술 전 복용약·병력 확인과 수술 후 안약·이상증상 대응은 주의사항 페이지에서 항목별로 확인할 수 있습니다.",
      "회복 일정과 생활 관리의 자세한 안내는 회복기간 페이지에서 확인하세요. 통증·시력 급변·심한 충혈이 있으면 인터넷 정보보다 진료 상담을 우선하세요.",
    ],
    relatedHref: ROUTES.recovery,
    relatedLabel: "노안백내장 회복기간 자세히 보기",
  },
  {
    id: "home-hospital",
    order: 7,
    numberLabel: "07",
    heading: "노안백내장 병원 선택 체크리스트",
    layout: "checklist",
    directAnswer:
      "특정 병원을 최고라고 단정하지 않습니다. 검사 설명, 렌즈 안내, 사후관리 체계를 중심으로 비교하는 편이 도움이 됩니다.",
    paragraphs: [
      "광고 문구나 단정적인 결과 표현보다, 본인 상태에 맞는 설명과 포함 비용, 이상 증상 시 연락 방법이 명확한지를 확인하세요. 이 사이트의 진료 연결은 에스앤비안과의원(S&B안과) 정보를 기준으로 안내합니다.",
    ],
    bullets: [
      "검사 결과를 충분히 설명하는지",
      "렌즈별 장점과 제한점을 함께 안내하는지",
      "견적 포함·제외 항목을 확인할 수 있는지",
      "사후관리·연락 방법이 명확한지",
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "노안백내장 병원 선택 기준 보기",
  },
];

export const HOME_FAQ_IDS = [
  "common-01",
  "common-02",
  "common-03",
  "common-04",
  "common-05",
  "common-06",
  "common-07",
  "common-08",
  "common-09",
  "common-10",
] as const;

export const CARD_PUBLISHED_AT = "2026-07-22";

const LENS_CARD_IMAGE = staticImg(slotAsContentImage(BODY_INFO_SLOTS[2]!));

/** 목차카드 — static src (query 제거, ItemList·DOM 일치) */
const CARD_IMAGE = {
  cost: staticImg(TOPIC_MEDIA.cost.thumbnail),
  recovery: staticImg(TOPIC_MEDIA.recovery.thumbnail),
  precautions: staticImg(TOPIC_MEDIA.precautions.thumbnail),
  hospital: staticImg(TOPIC_MEDIA.hospital.thumbnail),
  reviews: LENS_CARD_IMAGE,
  faq: staticImg(TOPIC_MEDIA.faq.thumbnail),
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
    description:
      "수술 전 검사·렌즈(인공수정체) 종류·한쪽/양쪽 계획에 따라 견적이 달라지는 항목을 상담 전에 확인합니다.",
    cardDescription:
      "수술 전 검사·렌즈(인공수정체) 종류·한쪽/양쪽 계획에 따라 견적이 달라지는 항목을 상담 전에 확인합니다.",
    mobileCardDescription: "검사·렌즈 기준 비용 확인",
    accent: "orange",
    accentColor: TOPIC_MEDIA.cost.accentColor,
    accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05", "cost-06"],
    image: {
      ...CARD_IMAGE.cost,
      alt: "노안백내장 수술비용 구성 항목 안내",
    },
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
    description:
      "수술 후 회복 과정에서 세안·운전·운동 복귀 시점과 개인차를 구분해, 상담에서 확인할 생활 기준을 안내합니다.",
    cardDescription:
      "수술 후 회복 과정에서 세안·운전·운동 복귀 시점과 개인차를 구분해, 상담에서 확인할 생활 기준을 안내합니다.",
    mobileCardDescription: "회복·일상 복귀 판단 기준",
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
    image: {
      ...CARD_IMAGE.recovery,
      alt: "노안백내장 회복기간과 일상 복귀 안내",
    },
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
    description:
      "수술 전 확인사항(복용약·병력)과 수술 후 안약·세안·이상증상까지, 회복 중 빠뜨리기 쉬운 주의를 정리합니다.",
    cardDescription:
      "수술 전 확인사항(복용약·병력)과 수술 후 안약·세안·이상증상까지, 회복 중 빠뜨리기 쉬운 주의를 정리합니다.",
    mobileCardDescription: "수술 전 확인·주의 체크",
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
    image: {
      ...CARD_IMAGE.precautions,
      alt: "노안백내장 수술 전후 주의사항 안내",
    },
    heroImage: CARD_IMAGE.precautions,
    inlineImage: CARD_IMAGE.precautions,
  },
  {
    id: "hospital",
    order: 4,
    numberLabel: "04",
    href: ROUTES.hospital,
    slug: "노안백내장-병원선택",
    title: "노안백내장 병원 선택",
    cardTitle: "노안백내장 병원 선택",
    shortTitle: "노안백내장 병원 선택",
    cardMetaLabel: "병원 선택",
    iconKey: "hospital",
    description:
      "검사 설명·렌즈 장단점 고지·수술 전 상담 질문·사후관리 연락 체계를 비교하는 병원 선택 기준을 안내합니다.",
    cardDescription:
      "검사 설명·렌즈 장단점 고지·수술 전 상담 질문·사후관리 연락 체계를 비교하는 병원 선택 기준을 안내합니다.",
    mobileCardDescription: "검사·상담 병원 비교",
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
    image: {
      ...CARD_IMAGE.hospital,
      alt: "노안백내장 병원 선택 기준 안내",
    },
    heroImage: CARD_IMAGE.hospital,
    inlineImage: CARD_IMAGE.hospital,
  },
  {
    id: "reviews",
    order: 5,
    numberLabel: "05",
    href: ROUTES.lensTypeCheck,
    slug: "노안백내장-단초점-다초점-차이",
    title: "노안백내장 렌즈 종류",
    cardTitle: "노안백내장 렌즈 종류",
    shortTitle: "노안백내장 렌즈 종류",
    cardMetaLabel: "렌즈 종류",
    iconKey: "reviews",
    description:
      "검사 결과와 생활 패턴을 기준으로 단초점·다초점·연속초점 렌즈 종류를 비교하고, 수술 전 상담에서 확인할 선택 기준을 정리합니다.",
    cardDescription:
      "검사 결과와 생활 패턴을 기준으로 단초점·다초점·연속초점 렌즈 종류를 비교하고, 수술 전 상담에서 확인할 선택 기준을 정리합니다.",
    mobileCardDescription: "렌즈 종류·상담 기준",
    accent: "cyan",
    accentColor: TOPIC_MEDIA.reviews.accentColor,
    accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "lens-type-01",
      "lens-type-02",
      "lens-type-03",
      "lens-type-04",
      "lens-type-05",
    ],
    image: {
      ...CARD_IMAGE.reviews,
      alt: "노안백내장 렌즈 상담 — 단초점·다초점·연속초점 비교",
    },
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
    description:
      "노안·백내장 차이, 검사, 렌즈, 수술 전 확인, 회복·주의, 상담 판단까지 자주 묻는 질문을 모았습니다.",
    cardDescription:
      "노안·백내장 차이, 검사, 렌즈, 수술 전 확인, 회복·주의, 상담 판단까지 자주 묻는 질문을 모았습니다.",
    mobileCardDescription: "검사·렌즈·회복 FAQ",
    accent: "neutral",
    accentColor: TOPIC_MEDIA.faq.accentColor,
    accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [
      "common-01",
      "common-02",
      "common-03",
      "common-04",
      "common-05",
      "common-06",
      "common-07",
      "common-08",
      "common-09",
      "common-10",
    ],
    image: {
      ...CARD_IMAGE.faq,
      alt: "노안백내장 FAQ 주제 안내",
    },
    heroImage: CARD_IMAGE.faq,
    inlineImage: CARD_IMAGE.faq,
  },
];
