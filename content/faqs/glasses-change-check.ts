import type { FaqItem } from "@/types/faq";

export const GLASSES_CHANGE_CHECK_FAQS: FaqItem[] = [
  {
    id: "glasses-change-01",
    order: 1,
    question: "다초점 렌즈를 하면 안경이 완전히 필요 없나요?",
    answer:
      "그렇게 단정할 수 없습니다. 다초점 렌즈는 여러 거리에 대응하도록 설계되지만, 특정 상황이나 거리에서는 여전히 안경이 도움이 될 수 있습니다. 실제 결과는 개인차가 있어 상담에서 확인하는 것이 정확합니다.",
    categories: ["glassesChangeCheck"],
  },
  {
    id: "glasses-change-02",
    order: 2,
    question: "수술 직후 맞춘 안경을 계속 써도 되나요?",
    answer:
      "수술 직후 도수는 회복 과정에서 다시 변화할 수 있어 그대로 계속 사용하는 것이 항상 적절하다고 볼 수 없습니다. 시야가 안정된 이후 다시 확인하는 것이 안전하며, 구체적인 시점은 병원 안내를 따라야 합니다.",
    categories: ["glassesChangeCheck"],
  },
  {
    id: "glasses-change-03",
    order: 3,
    question: "단초점 렌즈를 선택하면 근거리 안경이 꼭 필요한가요?",
    answer:
      "필요할 가능성이 있다고 알려져 있지만 모든 사람에게 동일하게 적용된다고 단정할 수는 없습니다. 개인의 눈 상태와 선택한 렌즈 도수에 따라 달라질 수 있어 상담에서 구체적으로 확인하는 것이 정확합니다.",
    categories: ["glassesChangeCheck"],
  },
  {
    id: "glasses-change-04",
    order: 4,
    question: "선글라스는 안경과 같은 기준으로 봐야 하나요?",
    answer:
      "자외선 차단 목적의 선글라스와 시력 교정용 안경은 목적이 다릅니다. 수술 후 선글라스 착용 시점과 방법은 회복 단계에 따라 다르게 안내될 수 있어 병원 안내를 확인하는 것이 안전합니다.",
    categories: ["glassesChangeCheck"],
  },
  {
    id: "glasses-change-05",
    order: 5,
    question: "노안백내장 수술 후 안경 도수는 평생 유지되나요?",
    answer:
      "그렇다고 단정할 수 없습니다. 시간이 지나며 눈 상태가 변할 수 있어 정기적인 시력 확인이 도움이 될 수 있습니다. 도수 변화가 느껴지면 자가 판단보다 의료기관에서 확인하는 것이 안전합니다.",
    categories: ["glassesChangeCheck"],
  },
];
