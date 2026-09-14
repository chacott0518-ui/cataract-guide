import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { GUIDE_SECTION_IMAGES } from "@/config/media";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 단초점 다초점 차이 상담 확인사항 안내",
  width: 1200,
  height: 630,
} as const;

export const LENS_TYPE_CHECK_PAGE: ContentPage = {
  id: "lensTypeCheck",
  order: 122,
  numberLabel: "02",
  slug: "노안백내장-단초점-다초점-차이",
  href: ROUTES.lensTypeCheck,
  navLabel: "노안백내장 단초점·다초점 차이",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 단초점·다초점 차이, 상담에서 무엇을 확인하나요?",
  heading: "노안백내장 단초점·다초점 차이, 상담에서 무엇을 확인하나요?",
  breadcrumbLabel: "노안백내장 단초점·다초점 차이",
  infoTopicLabel: "렌즈·수술 이해",
  infoCardDescription:
    "단초점·다초점 인공수정체의 기본 차이와 상담에서 확인하면 좋은 질문을 안내합니다.",
  intro: [
    "노안백내장 렌즈 상담에서는 단초점과 다초점이라는 표현을 자주 접하게 됩니다. 이 페이지는 단초점·다초점·연속초점(초점심도확장)의 특성과 차이를 비교하는 안내이며, 인공수정체 제품·허가 확인은 별도 페이지에서 다룹니다.",
    "고객 판단의 핵심은 ‘어떤 렌즈가 최고인가’가 아니라 ‘내 생활에서 중요한 거리와 감수할 특성을 상담에서 어떻게 전달할 것인가’입니다. 특정 방식이 모두에게 더 우수하다고 단정하지 않습니다.",
  ],
  hubContextLink: {
    before: "렌즈 종류 외에 노안백내장 전체 흐름까지 함께 보려면 ",
    anchor: "노안백내장 종합 가이드",
    after: "를 참고하세요.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-09-14",
  faqIds: [
    "lens-type-01",
    "lens-type-02",
    "lens-type-03",
    "lens-type-04",
    "lens-type-05",
  ],
  faqTitle: "노안백내장 단초점·다초점 차이 자주 묻는 질문",
  conclusion: [
    "단초점, 다초점, 연속초점(초점심도확장) 계열은 시야 목표와 특성이 다를 수 있습니다. 어느 쪽이 더 우수하다고 일률적으로 말하기 어렵고, 눈 상태와 생활패턴에 따라 상담에서 함께 확인해야 하는 사안입니다.",
    "제품·허가·확인 항목은 인공수정체 정보 안내에서, 운전·독서·PC 등 생활 요구는 목표 거리 상담에서 이어서 보세요. 에스앤비안과의원 상담에서도 개인별 선택 기준을 설명할 수 있으며, 이 글은 일반적인 의료정보로 개인의 진단·처방을 대신하지 않습니다.",
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
  relatedGuideIds: ["iolInfoCheck", "targetDistanceConsult", "glareCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "단초점",
      text: "한 거리에 초점을 맞추는 방식으로 안경 사용이 필요할 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "다초점",
      text: "여러 거리에 초점을 맞추도록 설계되며 특유의 한계도 있습니다.",
    },
    {
      numberLabel: "03",
      title: "연속초점",
      text: "초점심도확장 계열로 설명되며, 시야 목표와 특성이 다를 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "상담 확인",
      text: "장단점을 함께 설명받고 생활패턴과 비교해 결정합니다.",
    },
  ],
  seo: {
    title: "노안백내장 단초점·다초점 차이, 상담에서 무엇을 확인하나요? | 노안백내장",
    description:
      "노안백내장 단초점·다초점 인공수정체의 기본 차이와 상담에서 확인하면 좋은 질문을 안내합니다.",
    keywords: [
      "노안백내장 단초점 다초점",
      "다초점렌즈 차이",
      "단초점 인공수정체",
      "노안백내장 렌즈 비교",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "lens-type-basic",
      order: 1,
      numberLabel: "01",
      heading: "단초점과 다초점은 무엇이 다른가요?",
      layout: "comparison",
      decorativeIcon: "👁",
      directAnswer:
        "단초점은 일반적으로 한 거리에 초점을 맞추도록 설계되고, 다초점은 여러 거리에 초점을 맞추도록 설계된 방식입니다. 설계 방식이 다르므로 특성과 한계도 다르게 나타날 수 있습니다.",
      paragraphs: [
        "단초점 렌즈를 사용하면 특정 거리에서는 선명하게 볼 수 있지만, 다른 거리를 볼 때는 안경을 함께 사용하는 경우가 많다고 알려져 있습니다. 다초점 렌즈는 여러 거리에 대응하도록 설계되지만 야간 빛 번짐 등 별도로 고려할 특성이 있을 수 있습니다.",
        "상담에서 고객이 먼저 정리할 판단 포인트는 ‘밤에 운전이 많은지’, ‘근거리 작업(독서·스마트폰) 비중이 큰지’, ‘중간거리(모니터)가 중요한지’입니다. 두 방식 모두 절대적으로 우수하다고 단정할 수 없습니다.",
      ],
      comparison: {
        left: {
          label: "단초점",
          text: "한 거리 초점에 특화. 다른 거리는 안경 병용이 필요할 수 있음",
        },
        right: {
          label: "다초점",
          text: "여러 거리 대응 설계. 야간 빛 번짐 등 별도 특성을 함께 고려",
        },
      },
      sectionImage: GUIDE_SECTION_IMAGES.lens,
      relatedHref: ROUTES.iolInfoCheck,
      relatedLabel: "노안백내장 인공수정체 정보 확인 보기",
    },
    {
      id: "lens-type-edof",
      order: 2,
      numberLabel: "02",
      heading: "연속초점렌즈·초점심도확장은 어떻게 이해하나요?",
      layout: "responsive-table",
      decorativeIcon: "📊",
      directAnswer:
        "연속초점렌즈(연속초점 렌즈)는 초점심도확장(EDOF) 계열로 설명되는 경우가 많으며, 단초점·다초점과 시야 목표·특성 설명이 다를 수 있습니다. 특정 제품이 모든 사람에게 더 좋다고 단정할 수 없습니다.",
      paragraphs: [
        "상담에서는 ‘연속초점’이라는 명칭만으로 우열을 나누기보다, 어떤 거리 범위를 목표로 하는지, 야간 시야·안경 보조·적응과 관련해 어떤 특성이 설명되는지를 함께 확인하는 편이 안전합니다.",
        "아래 표는 선택 관점을 비교하기 위한 일반적인 정리이며, 실제 적합성과 한계는 검사 결과와 의료진 설명을 기준으로 판단해야 합니다. 제품명·제조사·허가 정보는 인공수정체 정보 확인 안내에서 별도로 볼 수 있습니다.",
      ],
      table: {
        caption: "단초점·다초점·연속초점 선택 관점 비교(일반 안내)",
        mobileMode: "scroll",
        columns: [
          { key: "item", label: "비교 항목" },
          { key: "mono", label: "단초점" },
          { key: "multi", label: "다초점" },
          { key: "edof", label: "연속초점·초점심도확장" },
        ],
        rows: [
          {
            item: "시야 목표",
            mono: "특정 거리 중심",
            multi: "여러 거리 활용을 목표",
            edof: "초점 범위를 넓히는 설계로 설명되는 경우",
          },
          {
            item: "안경 보조",
            mono: "다른 거리에서 필요할 수 있음",
            multi: "일부 거리에서 낮출 수 있음",
            edof: "생활·목표 거리에 따라 달라질 수 있음",
          },
          {
            item: "야간·적응",
            mono: "비교적 단순한 적응(개인차)",
            multi: "빛 번짐 등 특성이 함께 언급되는 경우",
            edof: "설계에 따라 특성이 다르게 설명될 수 있음",
          },
          {
            item: "선택 시 확인",
            mono: "우선 거리와 안경 사용 계획",
            multi: "근거리 작업·야간 활동 비중",
            edof: "목표 거리 범위와 한계 설명",
          },
        ],
      },
      relatedHref: ROUTES.iolInfoCheck,
      relatedLabel: "인공수정체 정보·허가 확인 보기",
    },
    {
      id: "lens-type-questions",
      order: 3,
      numberLabel: "03",
      heading: "상담에서 어떤 질문을 하면 좋을까요?",
      layout: "checklist",
      decorativeIcon: "💬",
      directAnswer:
        "각 방식의 장단점, 본인 생활패턴에서 특히 고려할 점, 야간 활동이나 독서 빈도, 적응 기간에 대해 질문하면 이해에 도움이 됩니다.",
      paragraphs: [
        "아래 질문은 예시이며, 실제 상담에서는 검사 결과에 따라 추가로 확인할 항목이 있을 수 있습니다.",
      ],
      bullets: [
        "제 눈 상태에서 단초점·다초점·연속초점 각각의 장단점은 무엇인가요?",
        "야간 운전이나 독서를 많이 하는 경우 무엇을 더 고려해야 하나요?",
        "적응 기간은 어느 정도로 예상해야 하나요?",
        "선택 후 안경이 필요할 가능성은 어느 정도인가요?",
      ],
      relatedHref: ROUTES.targetDistanceConsult,
      relatedLabel: "노안백내장 목표 거리·생활패턴 상담 보기",
    },
    {
      id: "lens-type-caution",
      order: 4,
      numberLabel: "04",
      heading: "선택할 때 주의할 점은 무엇인가요?",
      layout: "prose",
      decorativeIcon: "⚠️",
      directAnswer:
        "특정 방식이 모두에게 더 좋다고 단정하는 설명, 야간 빛 번짐 같은 한계를 언급하지 않는 설명은 신중하게 볼 필요가 있습니다.",
      paragraphs: [
        "렌즈 선택은 광고나 후기만으로 결정하기보다, 본인의 검사 결과와 생활패턴을 바탕으로 의료진과 함께 논의해 결정하는 것이 바람직합니다. 장점만 강조하고 한계를 설명하지 않는다면 다시 질문해 확인하는 것이 안전합니다.",
        "관련 빛 번짐·눈부심 특성은 수술 후에도 확인이 필요한 부분이므로 별도 안내에서 더 자세히 다룹니다.",
      ],
      relatedHref: ROUTES.glareCheck,
      relatedLabel: "노안백내장 수술 후 빛번짐·눈부심 확인 보기",
    },
    {
      id: "lens-type-individual",
      order: 5,
      numberLabel: "05",
      heading: "적응 정도는 사람마다 다른가요?",
      layout: "prose",
      decorativeIcon: "🧑‍⚕️",
      directAnswer:
        "네, 같은 렌즈를 사용해도 적응 속도와 만족도는 개인마다 다르게 나타날 수 있습니다. 눈 상태, 기대 수준, 생활 환경이 함께 영향을 줄 수 있습니다.",
      paragraphs: [
        "이 때문에 특정 렌즈에 대한 후기나 사례를 참고할 때도 결과를 보장하는 것으로 받아들이기보다 참고 자료로만 활용하는 편이 안전합니다.",
        "최종 선택 전에는 본인의 우선순위(야간 시야, 근거리 작업 빈도 등)를 정리해 상담에서 구체적으로 전달하는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.procedureProcess,
      relatedLabel: "노안백내장 수술 과정 확인 보기",
    },
  ],
};
