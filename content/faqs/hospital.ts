import type { FaqItem } from "@/types/faq";

export const HOSPITAL_FAQS: FaqItem[] = [
  {
    id: "hospital-01",
    order: 1,
    question: "병원 선택 시 무엇을 보면 좋나요?",
    answer:
      "병원 선택 시에는 검사 체계, 렌즈 장단점 설명, 사후관리 일정, 질문할 시간이 충분한지를 함께 확인하는 편이 도움이 됩니다. 광고 문구나 후기만으로 판단하기 어렵고, 본인 눈 상태에 맞는 설명을 직접 들어보는 것이 중요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hospital"],
  },
  {
    id: "hospital-02",
    order: 2,
    question: "광고 문구가 많으면 좋은 병원인가요?",
    answer:
      "광고 문구가 많다고 해서 반드시 적합한 병원이라고 단정할 수는 없습니다. 본인 상태에 맞는 설명, 포함 비용, 관리 체계, 이상 증상 시 대응 방법을 상담에서 직접 확인하는 과정이 더 중요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hospital"],
  },
  {
    id: "hospital-03",
    order: 3,
    question: "특정 렌즈를 최고라고 하면 믿어도 될까요?",
    answer:
      "특정 렌즈를 모든 사람에게 최적이라고 단정하는 표현은 신중히 보는 것이 좋습니다. 적합 여부와 한계, 대안 렌즈 비교 설명이 함께 이루어지는지, 본인 눈 상태에 근거한 권유인지를 확인하는 것이 필요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hospital", "lens"],
  },
  {
    id: "hospital-04",
    order: 4,
    question: "사후관리는 왜 중요한가요?",
    answer:
      "사후관리는 염증, 안압, 시력 변화 등을 경과 관찰하며 조기에 이상을 확인하는 데 도움이 됩니다. 방문 일정과 연락 방법이 명확한지, 응급 상황 시 어디로 문의해야 하는지도 함께 확인하면 안심하고 회복에 집중하기 쉽습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hospital"],
  },
  {
    id: "hospital-05",
    order: 5,
    question: "상담만 받고 결정해도 되나요?",
    answer:
      "상담과 검사 결과를 함께 확인한 뒤 결정하는 편이 안전합니다. 검사 없이 수술 결과나 비용, 렌즈 적합성을 단정하기는 어렵고, 충분한 설명 시간과 질문 기회가 있는지도 병원 선택 기준으로 삼을 수 있습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hospital"],
  },
];
