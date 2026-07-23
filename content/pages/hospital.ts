import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_PAGE: ContentPage = {
  id: "hospital",
  order: 4,
  numberLabel: "04",
  slug: "노안백내장-병원선택",
  href: ROUTES.hospital,
  navLabel: "노안백내장 병원선택",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 병원 선택",

  heading: "노안백내장 병원선택, 어떤 기준을 비교해야 할까요?",
  intro: [
    "노안백내장 병원선택은 특정 기관을 추천하는 과정이 아니라, 검사 체계·렌즈 설명·비용 구성·사후관리를 비교하는 과정입니다. 같은 수술 명칭이라도 설명의 구체성과 관리 범위가 다를 수 있습니다.",
    "후기나 광고 문구만으로 판단하기보다, 내 눈 상태에 맞는 검사와 결과 설명, 렌즈의 장점과 제한점, 재방문·이상 증상 대응까지 질문해 두는 편이 안전합니다.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-22",
  faqIds: [
    "hospital-01",
    "hospital-02",
    "hospital-03",
    "hospital-04",
    "hospital-05",
  ],
  faqTitle: "노안백내장 병원선택 자주 묻는 질문",
  conclusion: [
    "노안백내장 병원선택은 검사 항목과 결과 설명, 렌즈 상담의 균형, 비용의 포함·추가 구분, 경과 확인과 연락 체계를 함께 비교하는 것이 도움이 됩니다.",
    "특정 병원을 최고라고 단정할 수 없으며, 최종 판단은 검사와 상담을 통해 이루어져야 합니다. 이 페이지는 비교 기준을 안내하는 일반 정보입니다.",
  ],
  thumbnail: TOPIC_MEDIA.hospital.thumbnail,
  topImages: [TOPIC_MEDIA.hospital.thumbnail],
  bodyImage: TOPIC_MEDIA.hospital.secondaryImage,
  heroImage: TOPIC_MEDIA.hospital.thumbnail,
  secondaryImage: TOPIC_MEDIA.hospital.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.hospital.secondaryImage,
  accentColor: TOPIC_MEDIA.hospital.accentColor,
  accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  seo: {
    title: "노안백내장 병원 선택 | 노안백내장",
    description:
      "노안백내장 병원 선택 시 특정 기관 추천이 아니라 검사 체계, 렌즈 상담, 비용·사후관리를 비교할 기준을 안내합니다.",
    keywords: [
      "노안백내장 병원 선택",
      "백내장 수술 병원",
      "백내장 검사 병원",
      "인공수정체 상담",
      "백내장 병원 비교",
    ],
    ogImage: TOPIC_MEDIA.hospital.thumbnail.src,
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  sections: [
        {
      id: "hospital-exam",
      order: 1,
      numberLabel: "01",
      heading: "검사 체계는 어떻게 확인해야 하나요?",
      layout: "steps",
      directAnswer:
        "검사 체계는 어떤 항목을 왜 시행하는지, 결과를 어떻게 설명하는지, 현재 눈 상태와 수술 검토 여부·추가 검사 가능성을 구분해 안내하는지로 확인할 수 있습니다.",
      paragraphs: [
        "시력·굴절, 각막·수정체, 망막·시신경, 안압 등 기본 확인과 함께, 렌즈 적합성을 보기 위한 추가 검사가 필요할 수 있습니다. 필수·선택 항목이 구분되어 있는지 물어보세요.",
        "결과 설명이 수치만 나열되지 않고, 일상 불편과 연결해 이해되는지 확인하면 이후 렌즈·비용 상담도 수월해집니다.",
      ],
      steps: [
        {
          label: "01 검사",
          text: "어떤 항목을 왜 시행하는지 확인합니다.",
        },
        {
          label: "02 설명",
          text: "결과가 일상 불편과 연결돼 이해되는지 확인합니다.",
        },
        {
          label: "03 판단",
          text: "현재 상태·수술 검토·추가 검사 가능성을 구분합니다.",
        },
      ],
    },
    {
      id: "hospital-lens",
      order: 2,
      numberLabel: "02",
      heading: "렌즈 상담에서는 무엇을 물어봐야 하나요?",
      layout: "checklist",
      directAnswer:
        "렌즈 상담에서는 초점 범위, 안경 사용 가능성, 야간 시야 적응, 근거리 작업·운전 빈도, 장점과 제한점, 개인별 적합성을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "장점만 강조되는 설명보다, 적응 과정에서 나타날 수 있는 특성과 한계를 함께 듣는 편이 기대 관리에 도움이 됩니다.",
        "내 생활에서 가장 중요한 거리(독서·모니터·운전·야간)를 우선순위로 정리해 두면, 검토 가능한 렌즈 범위를 좁히기 쉽습니다.",
      ],
      bullets: [
        "초점 범위",
        "안경 사용 가능성",
        "야간 시야 적응",
        "근거리 작업 비중",
        "운전 빈도",
        "장점과 제한점",
        "개인별 적합성",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "노안백내장 수술비용 자세히 보기",
    },
        {
      id: "hospital-cost-care",
      order: 3,
      numberLabel: "03",
      heading: "비용과 사후관리 범위는 어떻게 비교하나요?",
      layout: "compare-table",
      directAnswer:
        "비용은 포함 항목과 추가 가능 항목을, 관리는 경과 확인 일정과 이상 증상 시 연락 방법·재방문 가능성을 함께 비교하는 편이 균형 있습니다.",
      paragraphs: [
        "총액만 낮아 보여도 검사·약제·재진이 제외되어 있으면 실제 부담이 달라질 수 있습니다. 한쪽·양쪽 기준과 사후관리 기간을 구분해 요청하세요.",
        "이동 거리와 재방문 편의, 야간·응급 문의 경로도 수술 후 관리에 영향을 줄 수 있습니다.",
      ],
      compareHeaders: ["비용에서 확인할 점", "사후관리에서 확인할 점"],
      compareRows: [
        {
          criterion: "포함·추가 항목",
          left: "포함 항목과 추가 가능 항목",
          right: "추가 비용이 발생할 수 있는 조건",
        },
        {
          criterion: "검사 범위",
          left: "수술 전후 검사 범위",
          right: "경과 확인 일정",
        },
        {
          criterion: "연락·안내",
          left: "견적에 명시된 항목 여부",
          right: "이상 증상 발생 시 연락 방법",
        },
        {
          criterion: "접근성",
          left: "이동 거리와 일정",
          right: "재방문 가능성",
        },
      ],
    },
        {
      id: "hospital-questions",
      order: 4,
      numberLabel: "04",
      heading: "상담 전에 어떤 질문을 준비하면 좋을까요?",
      layout: "info-grid",
      directAnswer:
        "상담 전에는 눈 상태 설명, 렌즈 선택 근거, 비용 구성, 회복·관리 일정, 이상 증상 대응을 묻는 질문을 준비해 두면 필요한 정보를 빠르게 파악하기 쉽습니다.",
      paragraphs: [
        "질문을 메모해 가면 설명 속도를 따라가기 쉽고, 포함·제외 항목을 다시 확인하기도 수월합니다.",
        "특정 병원을 추천하거나 우월하다고 단정하지 않습니다. 비교 기준을 정리한 뒤, 검사와 상담에서 본인에게 맞는 안내를 확인하세요.",
      ],
      infoBlocks: [
        {
          label: "눈 상태",
          text: "내 눈 상태에서 검토 가능한 렌즈와 수술 검토 여부",
        },
        {
          label: "렌즈",
          text: "렌즈의 장점과 제한점, 개인별 적합성",
        },
        {
          label: "비용",
          text: "견적에 포함된 항목과 제외 항목, 추가 비용 조건",
        },
        {
          label: "일정",
          text: "양안 수술 일정과 경과 관찰 횟수·기간",
        },
        {
          label: "관리",
          text: "회복·관리 일정과 사후관리 범위",
        },
        {
          label: "대응",
          text: "이상 증상 시 연락·방문 절차",
        },
      ],
      relatedHref: ROUTES.reviews,
      relatedLabel: "노안백내장 후기 확인 기준 보기",
    },
  ],
};
