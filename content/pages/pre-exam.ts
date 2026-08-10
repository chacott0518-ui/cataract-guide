import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const PRE_EXAM_IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 전 검사에서 확인하는 항목 안내",
  width: 1200,
  height: 630,
} as const;

export const PRE_EXAM_PAGE: ContentPage = {
  id: "preExam",
  order: 101,
  numberLabel: "01",
  slug: "노안백내장-수술-전-검사",
  href: ROUTES.preExam,
  navLabel: "노안백내장 수술 전 검사",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 전 검사, 무엇을 확인하나요?",
  heading: "노안백내장 수술 전 검사, 무엇을 확인하나요?",
  breadcrumbLabel: "노안백내장 수술 전 검사",
  infoTopicLabel: "검사·상담 준비",
  infoCardDescription:
    "상담 전에 정리할 정보와 검사 결과를 확인할 때 물어보면 좋은 질문을 안내합니다.",
  intro: [
    "노안백내장 수술 전 검사는 백내장 여부와 시력 상태, 눈의 구조, 다른 안과 질환 여부를 확인하는 과정입니다. 인터넷에 나온 검사 목록만으로 필요한 평가나 치료 계획을 단정하기는 어렵습니다.",
    "개인별 검사 종류와 상담 내용은 진료 결과에 따라 달라질 수 있습니다. 이 글은 상담 전에 정리해 두면 도움이 되는 정보와, 결과 설명 시 확인할 질문을 일반적인 의료정보로 정리한 안내이며 개인의 진단이나 처방을 대신하지 않습니다.",
  ],
  hubContextLink: {
    before: "검사뿐 아니라 비용·회복·주의사항까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_PUBLISHED_AT,
  faqIds: [
    "pre-exam-01",
    "pre-exam-02",
    "pre-exam-03",
    "pre-exam-04",
    "pre-exam-05",
  ],
  faqTitle: "노안백내장 수술 전 검사 자주 묻는 질문",
  conclusion: [
    "수술 전 검사는 시력·수정체·안구 구조와 다른 질환 여부를 확인하는 과정이며, 모든 사람에게 같은 검사 조합이 적용된다고 보기 어렵습니다. 현재 증상, 병력, 생활에서 중요한 시거리를 정리한 뒤 결과의 의미를 상담에서 확인하는 편이 도움이 됩니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·치료 결정을 대체하지 않습니다. 검사 항목, 인공수정체 상담, 수술 시점은 눈 상태와 의료진 평가에 따라 달라질 수 있습니다.",
  ],
  thumbnail: PRE_EXAM_IMAGE,
  topImages: [],
  bodyImage: null,
  heroImage: PRE_EXAM_IMAGE,
  secondaryImage: null,
  repeatImage: null,
  inlineImage: PRE_EXAM_IMAGE,
  accentColor: "#1758C9",
  accentHoverColor: "#0D3F99",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "노안과 백내장 구분",
      text: "가까운 거리 초점 저하와 수정체 혼탁은 원인이 다를 수 있어 검사로 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "검사의 역할",
      text: "시력·수정체·안구 구조와 수술·렌즈 상담에 필요한 정보를 평가합니다.",
    },
    {
      numberLabel: "03",
      title: "상담 전 정리",
      text: "증상, 안경·렌즈 사용, 병력, 복용 약, 중요 시거리를 미리 정리합니다.",
    },
    {
      numberLabel: "04",
      title: "렌즈 상담",
      text: "생활 방식과 눈 상태, 렌즈의 특성과 한계를 함께 확인합니다.",
    },
    {
      numberLabel: "05",
      title: "결과 질문",
      text: "주된 원인, 동반 질환, 추가 검사, 수술 이유와 사후 계획을 묻습니다.",
    },
    {
      numberLabel: "06",
      title: "수술 시점",
      text: "시력 숫자만으로 단정하지 않고 일상 영향과 눈 상태를 종합합니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 전 검사, 무엇을 확인하나요? | 노안백내장",
    description:
      "노안백내장 수술 전 검사에서 확인하는 항목과 상담 전 정리할 정보, 인공수정체 상담 시 질문, 수술 시점 판단의 일반 기준을 안내합니다.",
    keywords: [
      "노안백내장 검사",
      "백내장 수술 전 검사",
      "백내장 검사",
      "노안백내장 수술 상담",
      "인공수정체 상담",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "pre-exam-diff",
      order: 1,
      numberLabel: "01",
      heading: "노안과 백내장은 무엇이 다른가요?",
      layout: "prose",
      decorativeIcon: "📌",
      directAnswer:
        "노안은 가까운 곳에 초점을 맞추는 능력이 저하되는 연령 관련 변화이고, 백내장은 수정체가 혼탁해지는 상태입니다. 같은 질환처럼 표현하기보다 검사로 구분합니다.",
      paragraphs: [
        "가까운 글씨가 흐리거나 초점이 잘 안 맞을 때 노안을 떠올리는 경우가 많고, 시야가 뿌옇거나 색이 바래 보이거나 야간 빛 번짐이 커질 때 백내장을 의심하는 경우가 있습니다. 다만 증상만으로 원인을 단정하기는 어렵습니다.",
        "두 상태가 함께 나타날 수도 있어, 최종 판단은 의료진의 검사를 통해 이루어지는 것이 일반적입니다. 전체 흐름은 노안백내장 안내에서, 증상·관리 관점은 FAQ에서도 함께 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "노안백내장 FAQ에서 차이·증상 확인하기",
    },
    {
      id: "pre-exam-why",
      order: 2,
      numberLabel: "02",
      heading: "백내장 수술 전에 왜 검사가 필요한가요?",
      layout: "info-blocks",
      decorativeIcon: "🔎",
      directAnswer:
        "현재 시력과 수정체 상태, 안구 구조, 수술 계획과 인공수정체 선택에 필요한 정보를 평가하기 위한 과정입니다. 모든 환자가 동일한 검사 조합을 받는다고 단정할 수는 없습니다.",
      paragraphs: [
        "검사는 ‘수술 가능 여부’만 보는 것이 아니라, 시력 저하의 주된 원인이 무엇인지, 다른 질환이 함께 있는지, 렌즈 도수·종류 상담에 어떤 정보가 필요한지를 확인하는 데 쓰일 수 있습니다.",
        "검사 범위와 순서는 개인 상태와 의료진 판단에 따라 달라질 수 있으므로, 목록을 암기하기보다 각 검사가 무엇을 보는지 설명받는 편이 도움이 됩니다.",
      ],
      infoBlocks: [
        {
          label: "시력 상태",
          text: "원거리·근거리 시력과 일상에서 느끼는 불편을 확인합니다.",
        },
        {
          label: "수정체 상태",
          text: "혼탁 정도와 시력 저하와의 관련을 평가하는 데 참고합니다.",
        },
        {
          label: "안구 구조",
          text: "눈의 구조·길이와 관련된 측정이 수술·렌즈 계획에 쓰일 수 있습니다.",
        },
        {
          label: "동반 질환",
          text: "다른 안과 질환 여부를 함께 확인하는 경우가 있습니다.",
        },
      ],
    },
    {
      id: "pre-exam-prepare",
      order: 3,
      numberLabel: "03",
      heading: "상담 전에 확인할 수 있는 항목",
      layout: "checklist",
      decorativeIcon: "✅",
      directAnswer:
        "현재 불편한 시야 증상, 안경·콘택트렌즈 사용, 과거 안과 질환·수술력, 복용 약, 당뇨 등 관련 병력, 일상에서 중요하게 쓰는 시거리를 정리해 두면 상담에 도움이 됩니다.",
      paragraphs: [
        "미리 적어 두면 상담 시간을 더 효율적으로 쓸 수 있습니다. 기억에만 의존하기보다 증상 시작 시점과 복용 약 이름을 가능한 구체적으로 준비하는 편이 좋습니다.",
        "수술 전후 생활 관리와 이상 증상 확인의 일반적인 관점은 주의사항 안내에서도 살펴볼 수 있습니다.",
      ],
      bullets: [
        "가까운 거리·먼 거리·야간 시야에서 느끼는 불편",
        "안경 또는 콘택트렌즈 사용 여부·도수 변경 빈도",
        "과거 안과 질환·수술·레이저 치료 이력",
        "복용 중인 약과 알레르기",
        "당뇨 등 관련 전신 병력",
        "독서·운전·모니터 작업 등 중요하게 쓰는 시거리",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 안내 보기",
    },
    {
      id: "pre-exam-iol",
      order: 4,
      numberLabel: "04",
      heading: "인공수정체 상담에서는 무엇을 확인하나요?",
      layout: "prose",
      decorativeIcon: "👁",
      directAnswer:
        "생활 방식, 눈 상태, 기대하는 시거리와 각 렌즈의 특성과 한계를 함께 상담하는 과정입니다. 특정 렌즈가 누구에게나 더 좋다고 단정할 수 없습니다.",
      paragraphs: [
        "인공수정체 종류를 광고처럼 나열하거나 순위를 매기는 것은 이 글의 목적이 아닙니다. 검사 결과는 선택 폭을 이해하는 참고 자료이며, 야간 빛 번짐·초점 적응·안경 의존도처럼 개인이 중요하게 여기는 조건도 함께 이야기하는 것이 좋습니다.",
        "비용 구성에서 렌즈·검사가 어떻게 구분되는지는 견적마다 다를 수 있으므로, 포함·제외 항목은 비용 안내와 상담에서 확인하세요.",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "노안백내장 수술비용 안내 보기",
    },
    {
      id: "pre-exam-questions",
      order: 5,
      numberLabel: "05",
      heading: "검사 결과를 설명받을 때 물어볼 질문",
      layout: "checklist",
      decorativeIcon: "💬",
      directAnswer:
        "백내장이 시력 저하의 주된 원인인지, 다른 질환 동반 여부, 추가 검사 필요성, 수술을 고려하는 이유, 렌즈 선택 시 고려점, 예상 시력과 한계, 사후 진료 계획을 질문해 두면 이해가 명확해집니다.",
      paragraphs: [
        "결과 수치만 듣기보다, 그 정보가 다음 결정에 어떤 의미가 있는지 확인하는 질문이 도움이 됩니다.",
      ],
      bullets: [
        "백내장이 현재 시력 저하의 주된 원인인가요?",
        "다른 안과 질환이 같이 있나요?",
        "추가 검사가 필요한가요?",
        "수술을 고려하는 이유는 무엇인가요?",
        "인공수정체 선택 시 어떤 점을 고려해야 하나요?",
        "수술 후 예상되는 시력과 한계는 무엇인가요?",
        "사후 진료 계획은 어떻게 되나요?",
      ],
    },
    {
      id: "pre-exam-timing",
      order: 6,
      numberLabel: "06",
      heading: "수술 시점은 어떻게 결정하나요?",
      layout: "prose",
      decorativeIcon: "📅",
      directAnswer:
        "특정 시력 숫자만으로 모든 사람에게 동일한 시점이 정해진다고 보기 어렵습니다. 일상생활 영향, 눈 상태, 의료진 평가를 종합해 판단하는 경우가 많습니다.",
      paragraphs: [
        "시야가 흐려도 당장 수술이 필요하지 않은 경우도 있고, 일상 활동에 지장이 커지면 시점을 다시 논의하는 경우도 있습니다. 기다리거나 진행하는 선택은 개인 상태와 상담 내용에 따라 달라질 수 있습니다.",
        "회복 속도와 일상 복귀 시점은 개인차가 크므로, 일정만 비교하기보다 회복기간 안내와 의료진 설명을 함께 참고하세요. 병원 비교 시에는 검사 설명과 사후관리 체계도 함께 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "노안백내장 회복기간 안내 보기",
    },
  ],
};
