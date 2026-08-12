import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 상담에서 물어볼 질문 안내",
  width: 1200,
  height: 630,
} as const;

export const CONSULTATION_QUESTIONS_PAGE: ContentPage = {
  id: "consultationQuestions",
  order: 113,
  numberLabel: "03",
  slug: "노안백내장-상담-질문",
  href: ROUTES.consultationQuestions,
  navLabel: "노안백내장 상담에서 물어볼 질문",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 상담에서 물어볼 질문은 무엇인가요?",
  heading: "노안백내장 상담에서 물어볼 질문은 무엇인가요?",
  breadcrumbLabel: "노안백내장 상담 질문",
  infoTopicLabel: "검사·상담 준비",
  infoCardDescription:
    "검사 결과, 렌즈, 수술 계획, 비용, 사후관리까지 상담에서 확인하면 좋은 질문을 정리합니다.",
  intro: [
    "노안백내장 상담에서는 검사 결과의 의미, 렌즈 선택, 수술 계획, 비용 구성, 사후관리까지 다양한 내용을 다루게 됩니다. 질문을 미리 정리해 가면 광고 문구나 단편적인 설명만으로 판단하지 않고 필요한 정보를 빠짐없이 확인하기 쉬워집니다.",
    "이 글은 상담에서 참고할 수 있는 질문 예시를 정리한 일반적인 의료정보이며, 아래 항목은 예시일 뿐 개인 상태에 따라 추가 질문이 필요할 수 있습니다.",
  ],
  hubContextLink: {
    before: "상담 질문 외에 검사·병력 확인까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 전체 흐름을 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "consult-q-01",
    "consult-q-02",
    "consult-q-03",
    "consult-q-04",
    "consult-q-05",
  ],
  faqTitle: "노안백내장 상담 질문 자주 묻는 질문",
  conclusion: [
    "상담 질문을 미리 정리해 두면 검사 결과, 렌즈, 수술 계획, 비용, 사후관리까지 필요한 정보를 빠짐없이 확인하는 데 도움이 됩니다. 다만 실제 적용 여부와 답변 내용은 개인 상태와 의료진 판단에 따라 달라질 수 있습니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·치료 결정을 대신하지 않습니다.",
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
  relatedGuideIds: ["medicationCheck", "historyCheck", "iolInfoCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "검사 결과",
      text: "현재 상태와 수술을 고려하는 이유를 질문합니다.",
    },
    {
      numberLabel: "02",
      title: "렌즈·수술",
      text: "렌즈 선택 근거와 수술 진행 방식을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "비용 구성",
      text: "견적에 포함·제외된 항목을 구분해 질문합니다.",
    },
    {
      numberLabel: "04",
      title: "사후관리",
      text: "경과 확인 일정과 이상 시 대응 체계를 확인합니다.",
    },
  ],
  seo: {
    title: "노안백내장 상담에서 물어볼 질문은 무엇인가요? | 노안백내장",
    description:
      "노안백내장 상담에서 검사 결과, 렌즈, 수술 계획, 비용, 사후관리까지 확인하면 좋은 질문을 정리합니다.",
    keywords: [
      "노안백내장 상담 질문",
      "백내장 상담 체크리스트",
      "노안백내장 렌즈 상담 질문",
      "백내장 수술 상담",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "consult-q-exam",
      order: 1,
      numberLabel: "01",
      heading: "검사 결과에 대해 무엇을 질문하면 좋을까요?",
      layout: "checklist",
      decorativeIcon: "🔎",
      directAnswer:
        "현재 시력 저하의 주된 원인, 다른 안과 질환 동반 여부, 추가 검사 필요성, 수술을 고려하는 이유를 질문하면 결과의 의미를 더 명확히 이해할 수 있습니다.",
      paragraphs: [
        "결과 수치만 듣기보다, 그 수치가 다음 결정에 어떤 의미가 있는지 확인하는 질문이 도움이 됩니다. 이해가 안 되는 용어가 있다면 바로 되물어 확인하는 편이 좋습니다.",
      ],
      bullets: [
        "현재 시력 저하의 주된 원인은 무엇인가요?",
        "다른 안과 질환이 함께 있나요?",
        "추가 검사가 필요한가요?",
        "지금 수술을 고려하는 이유는 무엇인가요?",
      ],
      relatedHref: ROUTES.preExam,
      relatedLabel: "노안백내장 수술 전 검사 안내 보기",
    },
    {
      id: "consult-q-lens",
      order: 2,
      numberLabel: "02",
      heading: "렌즈와 수술 계획은 어떻게 질문하나요?",
      layout: "checklist",
      decorativeIcon: "👁",
      directAnswer:
        "인공수정체 종류별 특성과 한계, 본인 생활패턴에 맞는 고려사항, 수술 진행 방식과 예상 시간, 양안 수술 시 일정을 질문하면 계획을 이해하는 데 도움이 됩니다.",
      paragraphs: [
        "특정 렌즈가 무조건 더 좋다고 답하는 설명보다, 장단점과 한계를 함께 설명해 주는지 확인하는 것이 중요한 판단 기준이 될 수 있습니다.",
      ],
      bullets: [
        "제가 고려할 수 있는 렌즈 종류와 각각의 특성은 무엇인가요?",
        "제 생활패턴에서 특히 고려해야 할 점은 무엇인가요?",
        "수술은 어떻게 진행되나요?",
        "양쪽 눈을 수술한다면 일정은 어떻게 되나요?",
      ],
      relatedHref: ROUTES.iolInfoCheck,
      relatedLabel: "노안백내장 인공수정체 정보 확인 보기",
    },
    {
      id: "consult-q-cost",
      order: 3,
      numberLabel: "03",
      heading: "비용은 무엇을 기준으로 질문하나요?",
      layout: "checklist",
      decorativeIcon: "💳",
      directAnswer:
        "견적에 포함된 검사·렌즈·수술 항목, 사후관리 포함 여부, 추가 비용이 발생할 수 있는 상황을 구분해 질문하는 편이 좋습니다.",
      paragraphs: [
        "총액만 비교하면 어떤 항목이 포함됐는지 알기 어렵습니다. 구체적인 비용 비교 기준은 수술비용 안내에서 더 자세히 확인할 수 있습니다.",
      ],
      bullets: [
        "이 견적에는 어떤 항목이 포함되어 있나요?",
        "렌즈 비용과 검사 비용은 어떻게 구분되나요?",
        "사후관리는 비용에 포함되나요?",
        "추가 비용이 발생할 수 있는 경우는 무엇인가요?",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "노안백내장 수술비용 안내 보기",
    },
    {
      id: "consult-q-after",
      order: 4,
      numberLabel: "04",
      heading: "사후관리는 어떻게 질문하면 좋을까요?",
      layout: "checklist",
      decorativeIcon: "📅",
      directAnswer:
        "경과 확인 일정, 이상 증상이 있을 때 연락 방법, 회복 중 확인이 필요한 변화를 질문해 두면 수술 후 대응에 도움이 됩니다.",
      paragraphs: [
        "사후관리 체계는 병원마다 다르게 설명될 수 있으므로, 특정 병원이 우수하다고 단정하기보다 설명의 구체성과 대응 체계를 기준으로 비교하는 편이 도움이 됩니다.",
      ],
      bullets: [
        "수술 후 경과 확인은 어떤 일정으로 이뤄지나요?",
        "이상 증상이 생기면 어떻게 연락하나요?",
        "회복 중 특히 주의해서 봐야 할 변화는 무엇인가요?",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
  ],
};
