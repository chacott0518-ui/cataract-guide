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
    "노안백내장은 노안과 백내장이 함께 나타날 수 있어, 증상만으로 판단하기보다 검사 결과와 생활 패턴을 함께 확인해야 합니다.",
    "이 사이트는 수술 전 검사, 렌즈 선택, 수술 전후 주의사항, 병원 상담 기준을 안과전문의 검수 흐름으로 안내합니다.",
  ],
  summary:
    "최종 진단과 치료 결정은 안과 검사·상담을 통해 이뤄져야 하며, 아래 정보는 일반적인 건강정보입니다.",
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

/** HOME 본문 01~07 — readable prose (카드/좌우 컬럼 금지) */
export const HOME_SECTIONS: ArticleSection[] = [
  {
    id: "home-compare",
    order: 1,
    numberLabel: "01",
    heading: "노안과 백내장은 어떻게 다른가요?",
    layout: "comparison",
    sectionImage: GUIDE_SECTION_IMAGES.diff,
    directAnswer:
      "노안은 가까운 거리에 초점을 맞추는 조절력이 줄어드는 변화이고, 백내장은 수정체가 혼탁해지면서 시야가 흐려질 수 있는 질환입니다.",
    paragraphs: [
      "노안백내장처럼 두 상태가 함께 느껴질 수 있지만, 원인과 확인·치료 축은 다를 수 있습니다. 비슷한 불편처럼 보여도 검사에서 조절력 저하인지 수정체 혼탁인지 나누어 보면 이후 상담 방향이 달라집니다.",
      "증상만으로 단정하지 말고, 시력·수정체·망막 평가와 일상 불편을 함께 맞춰 보는 것이 중요합니다.",
      "일상에서 어떤 거리가 특히 불편한지 적어 두면 두 변화를 구분하는 상담에 도움이 됩니다.",
    ],
    comparison: {
      left: {
        label: "노안",
        text: "가까운 거리 초점 조절이 점차 낮아지는 변화. 돋보기·독서용 안경으로 일부 완화되는 경우가 많음",
      },
      right: {
        label: "백내장",
        text: "수정체 혼탁으로 시야가 흐리거나 눈부심이 나타날 수 있는 질환. 진행 정도에 따라 수술 시기를 검토할 수 있음",
      },
    },
    relatedHref: ROUTES.preExam,
    relatedLabel: "수술 전 검사 기준 보기",
  },
  {
    id: "home-symptoms",
    order: 2,
    numberLabel: "02",
    heading: "노안백내장은 어떤 증상에서 확인하나요?",
    layout: "checklist",
    directAnswer:
      "가까운 글씨가 흐리거나 빛 번짐이 늘고, 안경을 바꿔도 시야가 충분히 선명하지 않다면 노안백내장 검사를 고려할 수 있습니다.",
    paragraphs: [
      "증상만으로 수술 필요 여부를 판단해서는 안 됩니다. 변화가 지속되면 안과 진료로 현재 상태를 확인하는 것이 안전합니다.",
      "상담 전에 독서·운전·야간 활동 불편과 기대하는 시야 거리를 메모해 두면 설명이 더 구체적입니다.",
    ],
    bullets: [
      "가까운 글자·스마트폰 화면이 이전보다 흐리게 보임",
      "야간 운전·역광에서 빛 번짐이나 눈부심이 늘어남",
      "안경·돋보기를 교체해도 선명도가 충분하지 않음",
      "밝은 곳과 어두운 곳에서 시야 차이가 커짐",
      "양쪽 눈의 시야·색감 차이가 느껴짐",
    ],
    relatedHref: ROUTES.preExam,
    relatedLabel: "수술 전 검사 안내 보기",
  },
  {
    id: "home-exam",
    order: 3,
    numberLabel: "03",
    heading: "검사에서는 무엇을 확인하나요?",
    layout: "prose",
    sectionImage: GUIDE_SECTION_IMAGES.exam,
    directAnswer:
      "검사에서는 시력·굴절, 수정체 혼탁, 각막·난시, 안압, 망막·시신경 등 필요한 항목을 종합합니다. 한 가지 수치만으로 수술·렌즈를 결정하지 않습니다.",
    paragraphs: [
      "검사 전에는 복용 중인 약, 기존 안과 질환, 운전·근거리 작업 여부를 정리해 두면 상담이 더 정확해집니다.",
      "검사 결과는 렌즈 적합성과 수술·관찰 여부를 설명하는 기준이 되며, 광고 문구보다 본인 상태에 맞는 해석이 중요합니다.",
      "같은 수치라도 연령, 생활 패턴, 다른 안질환 여부에 따라 해석이 달라질 수 있어 의료진 설명을 함께 듣는 것이 좋습니다.",
    ],
    relatedHref: ROUTES.preExam,
    relatedLabel: "검사 항목 기준 보기",
  },
  {
    id: "home-lens",
    order: 4,
    numberLabel: "04",
    heading: "단초점·다초점·연속초점 렌즈는 어떻게 다른가요?",
    layout: "compare-table",
    sectionImage: GUIDE_SECTION_IMAGES.lens,
    directAnswer:
      "렌즈 선택은 단초점·다초점 이름만 비교하는 것이 아니라, 야간 운전, 독서, 업무 거리, 빛 번짐 가능성을 함께 확인해야 합니다.",
    paragraphs: [
      "백내장 수술에서는 혼탁한 수정체를 제거한 뒤 인공수정체를 넣는 경우가 많습니다. 단초점·다초점·연속초점은 시야 목표가 다르며, 어느 한쪽이 무조건 우수하다고 단정할 수 없습니다.",
      "근·중·원거리 우선순위와 빛번짐 허용도를 정리한 뒤, 검사 결과와 맞춰 상담하는 편이 안전합니다.",
      "렌즈별 장점과 한계를 모두 설명받고, 적응 기간과 야간 시야 변화 가능성까지 확인한 뒤 결정하는 것이 바람직합니다.",
    ],
    compareHeaders: ["단초점", "다초점·연속초점"],
    compareRows: [
      {
        criterion: "시야 목표",
        left: "특정 거리 중심",
        right: "여러 거리·초점심도 목표",
      },
      {
        criterion: "안경·야간",
        left: "거리별 안경이 필요할 수 있음",
        right: "적응·빛 번짐 개인차 확인 필요",
      },
      {
        criterion: "상담 포인트",
        left: "원거리/근거리 중 무엇을 우선할지",
        right: "생활 거리·야간 운전·직업 패턴",
      },
    ],
    relatedHref: ROUTES.lensTypeCheck,
    relatedLabel: "렌즈 선택 기준 보기",
  },
  {
    id: "home-prepare",
    order: 5,
    numberLabel: "05",
    heading: "수술 전에는 무엇을 준비해야 하나요?",
    layout: "checklist",
    directAnswer:
      "수술 전에는 복용약·병력·콘택트렌즈 착용 여부와 함께, 검사 설명·렌즈 한계·비용 포함 항목을 질문으로 정리해 두는 것이 도움이 됩니다.",
    paragraphs: [
      "증상이 있다고 모든 사람에게 같은 시점에 수술이 필요하다고 보기 어렵습니다. 시야 불편, 일상·직업 영향, 검사상 눈 상태를 종합해 관찰과 수술 논의를 구분합니다.",
      "광고 문구나 단정적인 결과 표현보다, 본인 상태에 맞는 설명과 포함 비용, 사후 연락 방법이 명확한지를 확인하세요.",
    ],
    bullets: [
      "복용 중인 약·건강기능식품 목록",
      "기존 안과 질환·수술·레이저 치료 이력",
      "운전·야간 활동·근거리 업무 비중",
      "기대하는 시야 거리와 빛번짐 허용도",
      "견적 포함·제외 항목과 사후관리 범위",
    ],
    relatedHref: ROUTES.consultationQuestions,
    relatedLabel: "상담 질문 기준 보기",
  },
  {
    id: "home-recovery",
    order: 6,
    numberLabel: "06",
    heading: "회복기간과 수술 후 주의사항은 무엇인가요?",
    layout: "checklist",
    sectionImage: GUIDE_SECTION_IMAGES.daily,
    directAnswer:
      "회복 속도와 일상 복귀 시점은 개인차, 렌즈 적응, 생활 습관에 따라 달라질 수 있습니다. 주의사항은 회복을 빠르게 만드는 요령보다 이상 증상을 제때 상담하는 기준이 중요합니다.",
    paragraphs: [
      "운전·세안·운동 가능 시점은 의료진 안내를 우선합니다. 모든 사람에게 동일한 회복 날짜를 단정할 수 없습니다.",
      "통증·시력 급변·심한 충혈이 있으면 인터넷 정보보다 진료 상담을 먼저 받는 것이 안전합니다.",
      "안약 사용 일정과 정기 경과 확인을 지키는 것이 회복 과정에서 가장 기본적인 관리입니다.",
    ],
    bullets: [
      "수술 후: 안약 일정·눈 비비기·물 접촉 주의",
      "이상 증상: 심한 통증, 시력 급변, 심한 충혈·분비물",
      "일상 복귀: 세안·운전·운동은 안내 일정에 따라",
      "경과 확인: 안내받은 일정과 연락 방법 확인",
    ],
    relatedHref: ROUTES.recovery,
    relatedLabel: "회복기간 기준 보기",
  },
  {
    id: "home-hospital",
    order: 7,
    numberLabel: "07",
    heading: "병원을 선택할 때 어떤 기준을 확인해야 하나요?",
    layout: "checklist",
    directAnswer:
      "특정 병원을 최고라고 단정하지 않습니다. 검사 설명, 렌즈 안내, 사후관리 체계를 중심으로 비교하는 편이 도움이 됩니다.",
    paragraphs: [
      "광고 문구나 단정적인 결과 표현보다, 본인 상태에 맞는 설명과 포함 비용, 이상 증상 시 연락 방법이 명확한지를 확인하세요.",
      "이 사이트의 진료 연결은 에스앤비안과의원(S&B안과) 정보를 기준으로 안내합니다.",
    ],
    bullets: [
      "검사 결과를 충분히 설명하는지",
      "렌즈별 장점과 제한점을 함께 안내하는지",
      "견적 포함·제외 항목을 확인할 수 있는지",
      "사후관리·연락 방법이 명확한지",
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "병원 선택 기준 보기",
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

/** HOME ‘함께 보면 좋은 안내’ — 최신 목차 이미지 톤의 compact 4카드 */
export const HOME_RELATED_GUIDES = [
  {
    id: "cost",
    href: ROUTES.cost,
    topicLabel: "수술비용",
    title: "노안백내장 수술비용",
    description: "검사·렌즈·한쪽/양쪽 계획에 따라 달라지는 비용 항목",
    image: {
      ...CARD_IMAGE.cost,
      alt: "노안백내장 수술비용 안내 썸네일",
    },
  },
  {
    id: "recovery",
    href: ROUTES.recovery,
    topicLabel: "회복기간",
    title: "노안백내장 회복기간",
    description: "세안·운전·운동 복귀와 개인차 기준",
    image: {
      ...CARD_IMAGE.recovery,
      alt: "노안백내장 회복기간 안내 썸네일",
    },
  },
  {
    id: "reviews",
    href: ROUTES.lensTypeCheck,
    topicLabel: "렌즈 종류",
    title: "노안백내장 렌즈 종류",
    description: "단초점·다초점·연속초점 상담 기준",
    image: {
      ...CARD_IMAGE.reviews,
      alt: "노안백내장 렌즈 종류 안내 썸네일",
    },
  },
  {
    id: "hospital",
    href: ROUTES.hospital,
    topicLabel: "병원 선택",
    title: "노안백내장 병원 선택",
    description: "검사 설명·렌즈 안내·사후관리 비교 포인트",
    image: {
      ...CARD_IMAGE.hospital,
      alt: "노안백내장 병원 선택 안내 썸네일",
    },
  },
] as const;

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
