import type { FaqItem } from "@/types/faq";

/**
 * 홈 FAQ — head-query용 짧은 답변 + 상세 OWNER URL 연결.
 * `/노안백내장-faq` 상세 답변과 동일 문자열을 두지 않는다.
 */
export const COMMON_FAQS: FaqItem[] = [
  {
    id: "common-01",
    order: 1,
    question: "노안과 백내장은 같은 질환인가요?",
    answer:
      "같지 않습니다. 정보로 보면 노안은 가까운 초점 조절이 약해지는 변화이고, 백내장은 수정체 혼탁과 관련됩니다. 함께 나타날 수 있어 비교·검사로 원인을 구분하는 것이 필요합니다. 자세한 질문은 FAQ에서 이어서 확인할 수 있습니다.",
    relatedSlug: "노안백내장-faq",
    relatedLabel: "노안백내장 FAQ에서 자세히 보기",
    categories: ["home", "common"],
  },
  {
    id: "common-02",
    order: 2,
    question: "어떤 증상이 있을 때 검사를 받아야 하나요?",
    answer:
      "시야가 뿌옇거나 빛 번짐이 늘고, 안경을 바꿔도 선명함이 충분하지 않을 때 검사를 고려하는 경우가 많습니다. 증상만으로 원인을 단정할 수는 없습니다. 검사에서 무엇을 보는지는 수술 전 검사 안내를 참고하세요.",
    relatedSlug: "노안백내장-수술-전-검사",
    relatedLabel: "수술 전 검사 안내",
    categories: ["home", "common", "symptoms"],
  },
  {
    id: "common-03",
    order: 3,
    question: "노안백내장 수술비용은 왜 달라지나요?",
    answer:
      "비용 구성은 검사 항목, 인공수정체 선택, 한쪽·양쪽 계획, 사후관리 포함 여부에 따라 달라질 수 있습니다. 총액만 비교하기보다 포함·제외 항목을 체크리스트로 보는 편이 안전합니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "수술비용 안내",
    categories: ["home", "common", "cost"],
  },
  {
    id: "common-04",
    order: 4,
    question: "단초점렌즈와 다초점렌즈는 어떻게 다른가요?",
    answer:
      "단초점은 특정 거리 중심, 다초점은 여러 거리 활용을 목표로 설계되는 경우가 많습니다. 연속초점(초점심도확장)도 시야 목표가 다를 수 있어, 유형별 차이는 렌즈 비교 안내에서 확인하세요.",
    relatedSlug: "노안백내장-단초점-다초점-차이",
    relatedLabel: "렌즈 유형 비교",
    categories: ["home", "common", "lens"],
  },
  {
    id: "common-05",
    order: 5,
    question: "수술 후 회복기간은 어느 정도인가요?",
    answer:
      "가벼운 일상은 비교적 이른 시점에 가능해지는 경우가 있지만, 시야 적응과 안정은 더 길게 이어질 수 있습니다. 공통 일수를 단정하지 말고, 회복기간 안내에서 세안·운전·운동 체크 포인트를 함께 보세요.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["home", "common", "recovery"],
  },
  {
    id: "common-06",
    order: 6,
    question: "병원 선택 시 무엇을 확인해야 하나요?",
    answer:
      "검사 설명의 명확성, 렌즈 장단점 안내, 사후관리 일정, 질문 시간이 충분한지를 확인하면 도움이 됩니다. 광고·후기만으로 판단하기보다 병원선택 기준 안내를 참고하세요.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["home", "common", "hospital"],
  },
];
