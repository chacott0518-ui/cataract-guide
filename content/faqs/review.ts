import type { FaqItem } from "@/types/faq";

export const REVIEW_FAQS: FaqItem[] = [
  {
    id: "review-01",
    order: 1,
    question: "후기에서 어떤 내용을 보면 좋나요?",
    answer:
      "후기에서는 수술 전 눈 상태, 선택한 렌즈 유형, 적응 과정, 불편 관리 경험이 구체적으로 적혀 있는지 확인하면 참고 가치가 높아집니다. 본인과 비슷한 상황인지, 단기·장기 경험이 모두 담겼는지도 함께 살펴보세요.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["reviews"],
  },
  {
    id: "review-02",
    order: 2,
    question: "과장된 후기를 어떻게 걸러내나요?",
    answer:
      "결과가 모든 사람에게 같다고 단정하거나, 근거 없이 특정 렌즈만 반복해서 추천하는 표현은 신중히 보세요. 과장된 전후 비교나 할인·이벤트 링크만 있는 후기는 정보 편향이 있을 수 있습니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["reviews"],
  },
  {
    id: "review-03",
    order: 3,
    question: "후기만으로 병원을 골라도 될까요?",
    answer:
      "후기는 참고 자료일 뿐, 병원 선택의 유일한 기준이 되기는 어렵습니다. 검사와 상담에서 본인에게 필요한 질문을 직접 확인하고, 후기 내용과 설명이 일치하는지 비교하는 과정이 필요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["reviews", "hospital"],
  },
  {
    id: "review-04",
    order: 4,
    question: "좋은 결과만 있는 후기는 믿을 수 있나요?",
    answer:
      "장점만 강조되고 적응 과정이나 주의점이 전혀 없는 후기는 정보가 편향되었을 수 있습니다. 불편했던 경험과 해결 방법, 재방문·추가 관리 여부까지 함께 적힌 글일수록 현실적인 판단에 도움이 됩니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["reviews"],
  },
  {
    id: "review-05",
    order: 5,
    question: "이 사이트에 환자 후기가 있나요?",
    answer:
      "이 사이트는 가짜 환자 후기를 작성하지 않으며, 후기를 확인할 때 필요한 기준만 안내합니다. 특정 병원이나 렌즈를 추천하지 않으며, 온라인 후기와 병원 상담 내용을 함께 참고하는 것이 좋습니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["reviews"],
  },
];
