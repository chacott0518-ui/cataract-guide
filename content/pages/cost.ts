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
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-22",
  faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05", "cost-06"],
  faqTitle: "노안백내장 수술비용 자주 묻는 질문",
  conclusion: [
    "노안백내장 수술비용은 렌즈 금액만으로 결정되지 않습니다. 검사 구성, 한쪽·양쪽 수술 계획, 선택한 렌즈의 특성과 한계, 경과 확인 범위를 구분해 보면 견적을 더 정확히 비교할 수 있습니다.",
    "상담에서는 총액뿐 아니라 포함·제외 항목과 추가 비용이 생길 수 있는 조건을 함께 확인하세요. 이 페이지는 일반 정보 안내이며, 개인 진료나 비용 확정을 대체하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.cost.thumbnail,
  topImages: [TOPIC_MEDIA.cost.thumbnail],
  bodyImage: TOPIC_MEDIA.cost.secondaryImage,
  heroImage: TOPIC_MEDIA.cost.thumbnail,
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
        "전국 공통 가격처럼 단정할 수 있는 금액은 없습니다. 눈 상태, 검토 중인 렌즈, 한쪽·양쪽 일정에 따라 산정 방식이 달라질 수 있으므로 검사 이후 견적을 확인하는 편이 정확합니다.",
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
        "수술 전 검사는 렌즈 적합성과 수술 계획을 확인하는 과정이며, 단초점과 다초점·연속초점 렌즈는 초점 범위·안경 사용·야간 시야 적응·비용 구성이 달라질 수 있습니다.",
      paragraphs: [
        "검사는 시력·굴절, 각막·수정체, 망막·시신경, 안압 등 눈 상태를 확인하는 데 쓰입니다. 필요한 항목은 눈 상태와 검토 중인 렌즈에 따라 달라질 수 있어, 기본·추가 검사 포함 여부를 견적과 함께 물어보는 것이 좋습니다.",
        "렌즈는 생활 패턴과 눈 상태에 맞춰 비교합니다. 야간 운전이 잦은지, 근거리 작업이 많은지, 안경 사용을 어느 정도까지 받아들일 수 있는지를 정리해 두면 상담이 수월합니다. 특정 렌즈가 모든 사람에게 맞는다고 보기 어렵습니다.",
      ],
      compareHeaders: ["단초점렌즈", "다초점·연속초점렌즈"],
      compareRows: [
        {
          criterion: "초점 범위",
          left: "특정 거리 중심",
          right: "여러 거리 활용을 목표로 설계",
        },
        {
          criterion: "안경 사용",
          left: "거리별 안경이 필요할 수 있음",
          right: "안경 의존도를 낮출 수 있으나 개인차",
        },
        {
          criterion: "야간 시야 적응",
          left: "비교적 단순한 적응 과정",
          right: "빛 번짐 등 적응 기간이 길 수 있음",
        },
        {
          criterion: "생활 방식",
          left: "특정 거리 중심 생활에 검토",
          right: "다양한 거리 활용이 많을 때 검토",
        },
        {
          criterion: "비용 구성",
          left: "상대적으로 단순한 구성",
          right: "렌즈·검사 비용이 달라질 수 있음",
        },
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 자세히 보기",
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
        "급여·비급여와 개인 보험 적용 여부는 약관과 본인 조건에 따라 달라질 수 있습니다. 이 페이지만으로 적용 여부를 단정하지 말고, 상담과 관련 기관 안내를 함께 확인하세요.",
      ],
      bullets: [
        "검사 비용이 포함되는지",
        "렌즈 비용과 수술 비용이 분리되어 있는지",
        "한쪽 눈 또는 양쪽 눈 기준인지",
        "추가 검사 가능성이 있는지",
        "사후관리 범위가 어디까지인지",
        "보험이나 보장 여부를 어디에서 확인할지",
      ],
    },
    {
      id: "cost-consult-check",
      order: 4,
      numberLabel: "04",
      heading: "병원 상담 시 어떤 항목을 체크해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "상담에서는 검사 설명의 구체성, 렌즈의 장점과 제한점, 비용의 포함·추가 항목 구분, 수술 후 경과 확인 일정을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "금액만 듣고 결정하기보다, 내 눈 상태에서 검토 가능한 렌즈와 그 한계, 양안 일정, 이상 증상 시 연락 방법까지 질문해 두면 이후 비교가 쉬워집니다.",
        "견적에 사후관리가 어느 기간까지 포함되는지, 초과 시 비용이 어떻게 되는지까지 구분해 두면 예상과 다른 청구를 줄이는 데 도움이 됩니다.",
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
