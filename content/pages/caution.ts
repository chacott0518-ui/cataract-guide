import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const CAUTION_PAGE: ContentPage = {
  id: "precautions",
  order: 3,
  numberLabel: "03",
  slug: "노안백내장-주의사항",
  href: ROUTES.precautions,
  navLabel: "노안백내장 주의사항",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 주의사항",

  heading: "노안백내장 주의사항, 수술 전후 무엇을 확인해야 할까요?",
  intro: [
    "노안백내장 수술 전후에는 검사 준비, 당일 안내, 생활 관리와 이상 증상 확인이 이어집니다. 개인 상태와 의료진 안내에 따라 세부 내용은 달라질 수 있으므로, 일반적인 확인 관점으로 정리해 두었습니다.",
    "복용 약·기존 질환·알레르기와 생활 방식을 미리 정리하고, 수술 당일·이후에는 안약·세안·운동·외출 관리를 안내 범위에서 지키는 것이 중요합니다. 부작용이 전혀 없다고 보장할 수는 없습니다.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-22",
  faqIds: [
    "caution-01",
    "caution-02",
    "caution-03",
    "caution-04",
    "caution-05",
  ],
  faqTitle: "노안백내장 주의사항 자주 묻는 질문",
  conclusion: [
    "노안백내장 주의사항은 검사 전 준비, 수술 당일 안내, 수술 후 생활 관리, 이상 증상 확인으로 나누어 살펴보는 편이 이해하기 쉽습니다. 안약 사용법과 물·화장품·충격 노출을 안내 범위에서 지키는 것이 기본입니다.",
    "갑작스러운 시야 변화나 심한 통증이 있으면 안내받은 연락 방법으로 확인하세요. 이 페이지는 일반 정보 안내이며, 개인의 진단·치료 결정을 대체하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.precautions.thumbnail,
  topImages: [TOPIC_MEDIA.precautions.thumbnail],
  bodyImage: TOPIC_MEDIA.precautions.secondaryImage,
  heroImage: TOPIC_MEDIA.precautions.thumbnail,
  secondaryImage: TOPIC_MEDIA.precautions.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.precautions.secondaryImage,
  accentColor: TOPIC_MEDIA.precautions.accentColor,
  accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  seo: {
    title: "노안백내장 주의사항 | 노안백내장",
    description:
      "노안백내장 주의사항으로 수술 전 검사 준비, 당일 안내, 수술 후 생활 관리와 의료진에게 확인할 증상을 정리합니다.",
    keywords: [
      "노안백내장 주의사항",
      "백내장 수술 전 주의사항",
      "백내장 수술 후 주의사항",
      "백내장 수술 후 관리",
      "백내장 수술 전 검사",
    ],
    ogImage: TOPIC_MEDIA.precautions.thumbnail.src,
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "caution-before",
      order: 1,
      numberLabel: "01",
      heading: "검사 전에는 어떤 내용을 준비해야 하나요?",
      layout: "checklist",
      directAnswer:
        "검사 전에는 복용 약, 기존 질환, 알레르기, 과거 안과 수술, 운전·근거리 작업 같은 생활 방식을 정리하고 질문 목록을 준비해 두면 상담이 수월합니다.",
      paragraphs: [
        "현재 느끼는 불편(근거리·야간·눈부심 등)과 사용 중인 안경·콘택트렌즈 이력도 함께 알려 주면 검사 목적과 결과 설명을 이해하기 쉽습니다.",
        "검사 결과에 따라 추가 검사가 필요할 수 있으므로, 당일 일정과 귀가 방법까지 여유 있게 준비하는 편이 좋습니다.",
      ],
      bullets: [
        "복용 중인 약·안약 목록",
        "기존 전신·안과 질환",
        "알레르기·약 부작용 이력",
        "과거 안과 수술·시술 경험",
        "운전·근거리 작업·야간 활동 패턴",
        "검사 전 물어볼 질문 목록",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
    {
      id: "caution-surgery-day",
      order: 2,
      numberLabel: "02",
      heading: "수술 당일에는 무엇을 확인해야 하나요?",
      layout: "steps",
      directAnswer:
        "수술 당일에는 안내받은 안약, 귀가 방법, 보호 안경, 당일 일정, 눈 화장·렌즈 착용 제한을 확인하고 의료기관 안내를 우선합니다.",
      paragraphs: [
        "보호자 동행 여부, 귀가 후 휴식 공간, 처방 안약 사용 시작 시점을 미리 정리해 두면 당일 혼란을 줄일 수 있습니다.",
        "눈 화장, 향수, 콘택트렌즈 착용 가능 여부는 기관마다 안내가 다를 수 있어, 수술 전 안내문을 기준으로 따르는 것이 안전합니다.",
      ],
      steps: [
        {
          label: "01 안약·안내문 확인",
          text: "안내받은 안약 사용법과 기관 안내문을 확인합니다.",
        },
        {
          label: "02 귀가·동행 준비",
          text: "귀가 방법과 동행 여부를 미리 정리합니다.",
        },
        {
          label: "03 보호 장비 준비",
          text: "보호 안경·안대 착용 방법을 확인합니다.",
        },
        {
          label: "04 당일 제한 확인",
          text: "눈 화장·렌즈 착용 제한과 식사 계획을 확인합니다.",
        },
      ],
    },
    {
      id: "caution-aftercare",
      order: 3,
      numberLabel: "03",
      heading: "수술 후 생활에서는 무엇을 주의해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "수술 후에는 안약 사용, 세안·화장, 운동, 목욕·사우나, 외출 시 눈부심·자외선, 음주 가능 여부를 안내 범위에서 확인합니다.",
      paragraphs: [
        "눈을 비비거나 문지르는 습관은 특히 초기에 주의가 필요합니다. 먼지·연기·강한 바람 노출을 줄이고, 무거운 짐을 들거나 머리를 오래 숙이는 작업은 안내 시점까지 피하는 경우가 많습니다.",
        "구체적 허용 기간은 담당 의료진 설명을 따르며, 임의로 일정을 앞당기지 않는 것이 좋습니다.",
      ],
      table: {
        caption: "수술 후 생활 관리 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인 포인트" },
        ],
        rows: [
          {
            item: "안약",
            check: "사용 순서와 횟수 확인",
          },
          {
            item: "세안·화장",
            check: "눈에 물과 화장품이 직접 닿지 않도록 확인",
          },
          {
            item: "운동",
            check: "충격과 땀을 고려해 단계적으로 시작",
          },
          {
            item: "목욕·사우나",
            check: "회복 안내에 따라 확인",
          },
          {
            item: "외출",
            check: "눈부심과 자외선 관리",
          },
          {
            item: "음주",
            check: "약 사용과 회복 상태를 고려해 안내 확인",
          },
        ],
      },
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 자세히 보기",
    },
    {
      id: "caution-urgent",
      order: 4,
      numberLabel: "04",
      heading: "어떤 변화가 있을 때 의료진에게 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "갑작스러운 시야 변화, 심해지는 통증, 지속되는 충혈, 평소와 다른 분비물, 눈을 다친 경우, 안약 사용 후 이상 반응이 의심되면 의료진에게 확인하세요.",
      paragraphs: [
        "일시적인 건조감·이물감과 구분해서 안내받는 것이 중요합니다. 증상이 점점 심해지거나 한쪽만 뚜렷하게 변하면 지체 없이 연락하는 편이 안전합니다.",
        "주간·야간 문의 방법과 응급 절차를 연락처에 저장해 두면, 증상 변화 시 대응이 수월합니다.",
      ],
      bullets: [
        "갑작스러운 시야 변화",
        "심해지는 통증",
        "지속되는 충혈",
        "평소와 다른 분비물",
        "눈을 다친 경우",
        "안약 사용 후 이상 반응이 의심되는 경우",
      ],
    },
  ],
};
