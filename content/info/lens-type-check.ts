import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
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
    "노안백내장 렌즈 상담에서는 단초점과 다초점이라는 표현을 자주 접하게 됩니다. 두 방식은 초점을 맺는 원리와 특성이 다르므로, 어느 쪽이 본인에게 맞는지는 검사 결과와 생활패턴을 함께 고려해 상담에서 확인해야 합니다.",
    "이 글은 두 방식의 일반적인 차이와 상담에서 확인할 점을 정리한 의료정보이며, 특정 방식이 모두에게 더 우수하다고 단정하지 않습니다.",
  ],
  hubContextLink: {
    before: "렌즈 종류 외에 인공수정체 정보 확인까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "lens-type-01",
    "lens-type-02",
    "lens-type-03",
    "lens-type-04",
    "lens-type-05",
  ],
  faqTitle: "노안백내장 단초점·다초점 차이 자주 묻는 질문",
  conclusion: [
    "단초점과 다초점은 초점을 맺는 방식이 다르며 각각 특성과 한계가 있습니다. 어느 쪽이 더 우수하다고 일률적으로 말하기 어렵고, 눈 상태와 생활패턴에 따라 상담에서 함께 확인해야 하는 사안입니다.",
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
      title: "개인차",
      text: "적응 정도와 만족도는 개인마다 다르게 나타날 수 있습니다.",
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
        "두 방식 모두 절대적으로 우수한 방식이라고 단정할 수 없으며, 개인의 눈 상태와 기대하는 생활 방식에 따라 적합성이 달라질 수 있습니다.",
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
      relatedHref: ROUTES.iolInfoCheck,
      relatedLabel: "노안백내장 인공수정체 정보 확인 보기",
    },
    {
      id: "lens-type-questions",
      order: 2,
      numberLabel: "02",
      heading: "상담에서 어떤 질문을 하면 좋을까요?",
      layout: "checklist",
      decorativeIcon: "💬",
      directAnswer:
        "각 방식의 장단점, 본인 생활패턴에서 특히 고려할 점, 야간 활동이나 독서 빈도, 적응 기간에 대해 질문하면 이해에 도움이 됩니다.",
      paragraphs: [
        "아래 질문은 예시이며, 실제 상담에서는 검사 결과에 따라 추가로 확인할 항목이 있을 수 있습니다.",
      ],
      bullets: [
        "제 눈 상태에서 단초점·다초점 각각의 장단점은 무엇인가요?",
        "야간 운전이나 독서를 많이 하는 경우 무엇을 더 고려해야 하나요?",
        "적응 기간은 어느 정도로 예상해야 하나요?",
        "선택 후 안경이 필요할 가능성은 어느 정도인가요?",
      ],
      relatedHref: ROUTES.targetDistanceConsult,
      relatedLabel: "노안백내장 목표 거리·생활패턴 상담 보기",
    },
    {
      id: "lens-type-caution",
      order: 3,
      numberLabel: "03",
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
      order: 4,
      numberLabel: "04",
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
