import type { FaqItem } from "@/types/faq";

export const TARGET_DISTANCE_CONSULT_FAQS: FaqItem[] = [
  {
    id: "target-distance-01",
    order: 1,
    question: "생활패턴을 말하지 않아도 검사만으로 렌즈가 정해지나요?",
    answer:
      "검사 결과만으로 자동으로 정해진다고 보기는 어렵습니다. 생활패턴과 기대하는 시거리를 함께 전달해야 렌즈 특성별 장단점을 본인 상황에 맞춰 설명받을 수 있습니다. 정보를 구체적으로 전달할수록 상담이 명확해질 수 있습니다.",
    categories: ["targetDistanceConsult"],
  },
  {
    id: "target-distance-02",
    order: 2,
    question: "운전을 많이 하면 특정 렌즈를 피해야 하나요?",
    answer:
      "특정 렌즈를 반드시 피해야 한다고 단정할 수 없습니다. 다만 야간 운전 빈도가 높다면 이를 상담에서 구체적으로 전달해, 관련 특성을 충분히 설명받고 선택하는 것이 좋습니다.",
    categories: ["targetDistanceConsult"],
  },
  {
    id: "target-distance-03",
    order: 3,
    question: "직업상 근거리 작업이 많으면 어떻게 알려야 하나요?",
    answer:
      "구체적인 작업 내용과 시간을 상담에서 설명하는 것이 좋습니다. 예를 들어 세밀한 작업을 오래 하는 직업이라면 그 점을 명확히 전달해 렌즈 특성을 비교할 때 참고가 되도록 하는 것이 도움이 됩니다.",
    categories: ["targetDistanceConsult"],
  },
  {
    id: "target-distance-04",
    order: 4,
    question: "생활패턴이 바뀌면 렌즈도 다시 바꿀 수 있나요?",
    answer:
      "인공수정체는 일반적으로 장기간 사용을 전제로 삽입되므로, 생활패턴 변화만으로 쉽게 교체할 수 있는 것은 아닙니다. 그래서 상담 시점에 생활패턴을 신중하게 정리해 전달하는 것이 중요합니다.",
    categories: ["targetDistanceConsult"],
  },
  {
    id: "target-distance-05",
    order: 5,
    question: "모든 거리에서 안경 없이 지내는 것이 목표라면 어떻게 말해야 하나요?",
    answer:
      "그 목표를 상담에서 명확하게 전달하는 것이 좋습니다. 다만 모든 거리에서 완벽한 시야를 보장하는 렌즈는 없다는 점도 함께 이해해야 합니다. 현실적인 기대치와 한계를 의료진과 함께 확인하는 과정이 필요합니다.",
    categories: ["targetDistanceConsult"],
  },
];
