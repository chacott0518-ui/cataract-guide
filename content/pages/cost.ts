import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const COST_PAGE: ContentPage = {
  id: "cost",
  order: 1,
  numberLabel: "01",
  slug: "노안백내장-수술비용",
  href: ROUTES.cost,
  navLabel: "노안백내장 수술비용",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술비용",

  heading: "노안백내장 수술비용, 어떤 기준에 따라 달라질까요?",
  intro: [
    "노안백내장 수술비용은 검사 범위, 렌즈 종류, 수술 범위와 사후관리 구성에 따라 달라질 수 있습니다. 같은 명칭의 수술이라도 현재 눈 상태와 생활 방식에 따라 확인해야 할 항목이 달라질 수 있습니다.",
    "인터넷에 표시된 가격만 비교하기보다 한쪽 눈 또는 양쪽 눈 기준인지, 검사와 렌즈 비용이 어디까지 포함되는지, 수술 후 확인 과정은 어떻게 구성되는지를 함께 살펴보는 것이 중요합니다.",
  ],
  hubContextLink: {
    before:
      "비용 구성뿐 아니라 검사와 렌즈, 회복 과정까지 함께 확인하려면 ",
    anchor: "노안백내장 종합 안내",
    after: "를 참고하세요.",
    href: "/",
  },
  publishedAt: "2026-07-01",
  updatedAt: "2026-09-14",
  faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05", "cost-06"],
  faqTitle: "노안백내장 수술비용 자주 묻는 질문",
  conclusion: [
    "노안백내장 수술비용은 렌즈 금액만으로 결정되지 않습니다. 검사 구성, 한쪽·양쪽 수술 계획, 선택한 렌즈의 특성과 한계, 경과 확인 범위를 구분해 보면 견적을 더 정확히 비교할 수 있습니다.",
    "에스앤비안과의원 상담에서는 총액뿐 아니라 포함·제외 항목과 추가 비용이 생길 수 있는 조건을 함께 확인할 수 있습니다. 전화·카카오·상담신청·온라인예약을 통해 일정을 문의할 수 있으며, 이 페이지는 일반 정보 안내로 개인 진료나 비용 확정을 대체하지 않습니다. 임의 가격·보장률은 제시하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.cost.thumbnail,
  topImages: [TOPIC_MEDIA.cost.pageHero!],
  bodyImage: TOPIC_MEDIA.cost.secondaryImage,
  heroImage: TOPIC_MEDIA.cost.pageHero!,
  secondaryImage: TOPIC_MEDIA.cost.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.cost.secondaryImage,
  accentColor: TOPIC_MEDIA.cost.accentColor,
  accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  seo: {
    title: "노안백내장 수술비용, 어떤 항목을 확인할까? | 노안백내장",
    description:
      "노안백내장 수술비용은 검사 범위, 렌즈 종류, 수술 범위와 사후관리 구성에 따라 달라질 수 있습니다. 견적 비교 전에 포함·제외 항목을 확인하는 기준을 정리합니다.",
    keywords: [
      "노안백내장 수술비용",
      "백내장 수술비용",
      "인공수정체 비용",
      "백내장 렌즈 비용",
      "백내장 검사비용",
    ],
    ogImage: TOPIC_MEDIA.cost.thumbnail.src,
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "cost-why",
      order: 1,
      numberLabel: "01",
      heading: "노안백내장 수술비용이 달라지는 이유는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "수술비용은 렌즈 가격 하나로 결정되지 않습니다. 검사 항목, 양안 수술 여부, 선택한 렌즈, 수술 후 확인 과정 등이 비용 구성에 영향을 줄 수 있습니다.",
      paragraphs: [
        "총액만 보면 서로 다른 견적을 같은 기준으로 비교하기 어렵습니다. 검사비·렌즈비·수술비·약제비·경과 관찰 비용이 어떻게 나뉘는지부터 구분해 두면, 포함 범위의 차이를 파악하기 쉽습니다.",
        "견적을 받기 전 고객이 준비할 질문은 네 가지입니다. ① 한쪽·양쪽 기준인지 ② 검사·렌즈가 포함인지 ③ 사후관리 기간은 어디까지인지 ④ 추가 비용이 생길 수 있는 조건은 무엇인지. 전국 공통 가격처럼 단정할 수 있는 금액은 없습니다.",
      ],
      infoBlocks: [
        {
          label: "검사 범위",
          text: "수정체·각막·망막·안압 등 필요한 검사 항목 구성",
        },
        {
          label: "렌즈 종류",
          text: "단초점·다초점 등 렌즈 특성과 적용 범위",
        },
        {
          label: "수술 범위",
          text: "한쪽 눈 또는 양쪽 눈과 수술 일정",
        },
        {
          label: "사후관리",
          text: "경과 확인과 추가 검사 포함 여부",
        },
      ],
    },
    {
      id: "cost-exam-lens",
      order: 2,
      numberLabel: "02",
      heading: "검사와 렌즈 선택은 비용에 어떤 영향을 주나요?",
      layout: "compare-table",
      directAnswer:
        "수술 전 검사는 렌즈 적합성과 수술 계획을 확인하는 과정이며, 단초점·다초점·연속초점 등 인공수정체 선택에 따라 검사·렌즈·사후관리 비용 구성이 달라질 수 있습니다.",
      paragraphs: [
        "이 페이지에서는 렌즈 종류를 길게 비교하지 않고, 비용에 영향을 줄 수 있는 선택 요소로만 정리합니다. 유형별 특성과 차이는 단초점·다초점 비교 안내에서, 선택 전 확인 정보는 인공수정체 안내에서 확인하세요.",
        "검사는 시력·굴절, 각막·수정체, 망막·시신경, 안압 등 눈 상태를 확인하는 데 쓰입니다. 필요한 항목은 눈 상태와 검토 중인 렌즈에 따라 달라질 수 있어, 기본·추가 검사 포함 여부를 견적과 함께 물어보는 것이 좋습니다.",
      ],
      compareHeaders: ["단초점렌즈", "다초점·연속초점렌즈"],
      compareRows: [
        {
          criterion: "초점 범위(비용 관점)",
          left: "특정 거리 중심 — 구성이 비교적 단순한 경우가 많음",
          right: "여러 거리·초점심도 목표 — 렌즈·검사 구성이 달라질 수 있음",
        },
        {
          criterion: "안경·야간 시야",
          left: "거리별 안경이 필요할 수 있음",
          right: "적응·빛 번짐 등 개인차로 추가 설명이 필요할 수 있음",
        },
        {
          criterion: "비용 구성",
          left: "상대적으로 단순한 구성",
          right: "렌즈·검사 비용이 달라질 수 있음",
        },
      ],
      relatedHref: ROUTES.lensTypeCheck,
      relatedLabel: "렌즈 유형 차이 자세히 보기",
    },
    {
      id: "cost-before-compare",
      order: 3,
      numberLabel: "03",
      heading: "비용을 비교하기 전에 무엇을 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "총액 비교에 앞서 검사·렌즈·수술비 분리 여부, 한쪽·양쪽 기준, 추가 검사 가능성과 사후관리·보험 확인 경로를 정리해 두면 오해를 줄일 수 있습니다.",
      paragraphs: [
        "같은 금액이라도 포함 범위가 다르면 실제 부담이 달라질 수 있습니다. 구두 설명뿐 아니라 포함·제외 항목이 적힌 자료를 요청하면 비교가 수월합니다.",
        "건강보험·실손의료보험 적용 여부와 본인 부담은 가입 상품, 약관, 진료·수술 내용에 따라 달라질 수 있습니다. 보장 여부나 금액을 이 페이지에서 단정하지 않으며, 보험사·약관·상담에서 확인해야 하는 항목으로 이해하는 편이 안전합니다.",
      ],
      bullets: [
        "검사 비용이 포함되는지",
        "렌즈 비용과 수술 비용이 분리되어 있는지",
        "한쪽 눈 또는 양쪽 눈 기준인지",
        "추가 검사 가능성이 있는지",
        "사후관리 범위가 어디까지인지",
        "보험·실손 확인은 보험사·약관·상담에서 어디서 하는지",
      ],
    },
    {
      id: "cost-insurance-check",
      order: 4,
      numberLabel: "04",
      heading: "보험·실손은 무엇을 확인 프레임으로 보면 되나요?",
      layout: "prose",
      decorativeIcon: "📋",
      directAnswer:
        "급여·비급여 구분, 실손 청구 가능 여부, 본인 부담 범위는 가입 상품과 약관, 실제 진료 내용에 따라 달라질 수 있습니다. 특정 보장률이나 보험금을 단정할 수 없습니다.",
      paragraphs: [
        "견적서에 급여·비급여가 어떻게 표시되는지, 어떤 항목이 실손 상담 대상이 될 수 있는지, 추가 서류가 필요한지를 질문해 두면 이후 확인이 수월합니다.",
        "최종 적용 여부는 보험사와 약관 기준으로 확인해야 하며, 병원 안내만으로 보장을 확정한다고 보지 않는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "병원 상담에서 확인할 기준 보기",
    },
    {
      id: "cost-consult-check",
      order: 5,
      numberLabel: "05",
      heading: "병원 상담 시 어떤 항목을 체크해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "상담에서는 검사 설명의 구체성, 렌즈의 장점과 제한점, 비용의 포함·추가 항목 구분, 수술 후 경과 확인 일정을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "금액만 듣고 결정하기보다, 내 눈 상태에서 검토 가능한 렌즈와 그 한계, 양안 일정, 이상 증상 시 연락 방법까지 질문해 두면 이후 비교가 쉬워집니다.",
        "견적에 사후관리가 어느 기간까지 포함되는지, 초과 시 비용이 어떻게 되는지까지 구분해 두면 예상과 다른 청구를 줄이는 데 도움이 됩니다. 에스앤비안과의원에서는 검사·렌즈·수술 범위에 따른 비용 구성을 상담에서 설명할 수 있으며, 온라인에 고정 가격을 제시하지 않는 경우가 많습니다.",
      ],
      table: {
        caption: "병원 상담 시 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인할 내용" },
        ],
        rows: [
          {
            item: "검사",
            check: "어떤 검사를 진행하고 결과를 어떻게 설명하는지",
          },
          {
            item: "렌즈",
            check: "장점뿐 아니라 제한점도 설명하는지",
          },
          {
            item: "비용",
            check: "포함 항목과 추가 가능 항목을 구분하는지",
          },
          {
            item: "관리",
            check: "수술 후 경과 확인 일정이 있는지",
          },
        ],
      },
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
  ],
};
