import type { FaqItem } from "@/types/faq";

export const LENS_TYPE_CHECK_FAQS: FaqItem[] = [
  {
    id: "lens-type-01",
    order: 1,
    question: "다초점 렌즈를 하면 안경이 완전히 필요 없어지나요?",
    answer:
      "그렇게 단정할 수 없습니다. 다초점 렌즈는 여러 거리에 대응하도록 설계되지만, 특정 상황에서는 여전히 안경이 도움이 될 수 있습니다. 실제 결과는 눈 상태와 개인차에 따라 달라질 수 있어 상담에서 확인해야 합니다.",
    categories: ["lensTypeCheck"],
  },
  {
    id: "lens-type-02",
    order: 2,
    question: "단초점 렌즈를 선택하면 후회하게 되나요?",
    answer:
      "그렇게 단정할 수 없습니다. 단초점 렌즈는 특정 거리에서 선명한 시야를 제공하도록 설계되며, 본인이 중요하게 여기는 시거리와 맞는다면 만족스러울 수 있습니다. 렌즈별 특성을 이해하고 본인 우선순위에 맞춰 선택하는 것이 중요합니다.",
    categories: ["lensTypeCheck"],
  },
  {
    id: "lens-type-03",
    order: 3,
    question: "다초점 렌즈는 야간 운전에 불리한가요?",
    answer:
      "다초점 렌즈는 설계 특성상 야간 빛 번짐이 함께 언급되는 경우가 있습니다. 다만 정도는 개인마다 다를 수 있어 모든 사람에게 동일하게 나타난다고 단정할 수 없습니다. 야간 운전 빈도가 높다면 상담에서 이 부분을 구체적으로 확인하는 것이 좋습니다.",
    categories: ["lensTypeCheck"],
  },
  {
    id: "lens-type-04",
    order: 4,
    question: "렌즈 종류는 양쪽 눈에 같은 것을 써야 하나요?",
    answer:
      "반드시 그렇지는 않습니다. 눈 상태와 상담 내용에 따라 양쪽에 다른 방식을 적용하는 방법이 논의되는 경우도 있습니다. 어떤 조합이 적합한지는 개인 상태에 따라 다르므로 의료진과 상담을 통해 확인해야 합니다.",
    categories: ["lensTypeCheck"],
  },
  {
    id: "lens-type-05",
    order: 5,
    question: "렌즈 적응 기간에는 무엇을 확인해야 하나요?",
    answer:
      "적응 기간 동안 느껴지는 변화가 일반적인 범위인지, 아니면 추가 확인이 필요한 상황인지 구분하는 것이 중요합니다. 궁금하거나 불편한 점이 있다면 자가 판단보다 시술받은 의료기관에 문의해 확인하는 것이 안전합니다.",
    categories: ["lensTypeCheck"],
  },
];
