import type { FaqItem } from "@/types/faq";

/** FAQ 페이지 전용 확장 문항 */
export const EXTRA_FAQS: FaqItem[] = [
  {
    id: "extra-01",
    order: 1,
    question: "노안·백내장 검사에서는 무엇을 확인하나요?",
    answer:
      "노안·백내장 관련 상담에서는 시력, 안압, 수정체 혼탁 정도, 망막·시신경 상태 등을 확인하는 검사가 함께 진행되는 경우가 많습니다. 필요한 검사 범위는 눈 상태와 증상에 따라 달라질 수 있어, 결과 설명까지 들어보는 것이 중요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["faq-page", "symptoms"],
  },
  {
    id: "extra-02",
    order: 2,
    question: "수술 시기는 어떻게 정해지나요?",
    answer:
      "수술 시기는 시야 저하 정도, 일상 불편, 동반 안질환, 전신 건강 상태 등을 종합해 판단합니다. 증상이 가벼워도 검사상 진행이 확인될 수 있고, 반대로 당장 수술이 꼭 필요하다고 단정할 수도 없습니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["faq-page", "symptoms"],
  },
  {
    id: "extra-03",
    order: 3,
    question: "난시가 있어도 인공수정체 수술을 받을 수 있나요?",
    answer:
      "난시가 있는 경우에도 수술 계획을 세울 수 있지만, 교정 범위와 방식은 검사 결과에 따라 달라질 수 있습니다. 난시 교정 포함 여부가 렌즈 선택과 비용 구성에 영향을 줄 수 있으니, 시력 목표와 한계를 함께 확인하세요.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "렌즈와 비용",
    categories: ["faq-page", "lens"],
  },
  {
    id: "extra-04",
    order: 4,
    question: "수술 후 흔히 나타날 수 있는 불편은 무엇인가요?",
    answer:
      "회복 과정에서 건조감, 빛 번짐, 시야 흐림 등 일시적 불편이 나타날 수 있습니다. 대부분 경과에 따라 완화되지만, 증상의 강도와 지속 기간은 사람마다 다르며, 악화되거나 새로운 증상이 생기면 진료가 필요할 수 있습니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["faq-page", "side-effects"],
  },
  {
    id: "extra-05",
    order: 5,
    question: "같은 렌즈를 써도 만족도가 다른 이유는 무엇인가요?",
    answer:
      "같은 렌즈를 사용해도 생활 패턴, 기존 시력, 뇌의 적응 방식에 따라 만족도는 달라질 수 있습니다. 수술 전 기대치와 현실적인 시야 목표를 충분히 상의하고, 안경·돋보기 필요 여부도 함께 확인하는 것이 도움이 됩니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["faq-page", "side-effects", "lens"],
  },
  {
    id: "extra-06",
    order: 6,
    question: "양쪽 눈 수술은 한꺼번에 받아도 되나요?",
    answer:
      "양쪽 눈 수술 간격은 회복 상태, 렌즈 종류, 일상 계획 등을 고려해 정해질 수 있습니다. 한쪽만 먼저 진행해 적응을 확인한 뒤 반대쪽을 계획하는 경우도 있으며, 개인 상태에 맞는 일정을 의료진과 상의하는 것이 좋습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["faq-page", "recovery"],
  },
];
