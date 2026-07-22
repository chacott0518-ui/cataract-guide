import type { FaqItem } from "@/types/faq";

export const CAUTION_FAQS: FaqItem[] = [
  {
    id: "caution-01",
    order: 1,
    question: "수술 전에 꼭 알려야 할 정보는 무엇인가요?",
    answer:
      "수술 전에는 복용 중인 약물, 전신 질환, 알레르기, 이전 안과 수술력을 미리 알려 주는 것이 좋습니다. 독서·운전·스마트폰 사용 등 생활 패턴도 렌즈 선택 상담에 도움이 되며, 숨길 정보가 없을수록 계획 수립에 유리합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["precautions"],
  },
  {
    id: "caution-02",
    order: 2,
    question: "수술 후 눈을 비비면 안 되나요?",
    answer:
      "수술 후 초기에는 눈 비비기나 강한 압력을 피하도록 안내되는 경우가 많습니다. 눈꺼풀·속눈썹 주변 자극도 줄이는 편이 좋고, 구체적 금기 기간과 허용 범위는 담당 의료진 설명을 따르는 것이 안전합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["precautions"],
  },
  {
    id: "caution-03",
    order: 3,
    question: "부작용이 전혀 없을 수 있나요?",
    answer:
      "수술 후에도 일시적 불편이나 시야 변화가 나타날 수 있어, 부작용이 전혀 없다고 보장할 수는 없습니다. 흔히 안내되는 증상과 즉시 진료가 필요할 수 있는 증상을 구분해 설명받고, 이상 시 연락 방법을 미리 확인하는 것이 중요합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["precautions", "side-effects"],
  },
  {
    id: "caution-04",
    order: 4,
    question: "안약은 얼마나 사용하나요?",
    answer:
      "안약 종류와 사용 기간은 처방과 회복 경과에 따라 개인별로 안내됩니다. 임의로 중단·증량·변경하지 않는 것이 좋고, 다른 약과 병용 시 주의사항이 있는지도 함께 확인하세요. 사용법을 정확히 지키는 것이 회복에 도움이 됩니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["precautions"],
  },
  {
    id: "caution-05",
    order: 5,
    question: "물이나 화장품은 언제부터 사용하나요?",
    answer:
      "세안, 샤워, 화장품 사용 가능 시점은 의료진 안내를 기준으로 합니다. 눈 주변 자극을 줄이는 방향이 일반적이며, 허용 시점이 사람마다 달라질 수 있으니 본인 회복 상태에 맞는 일정을 확인하는 것이 좋습니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["precautions"],
  },
];
