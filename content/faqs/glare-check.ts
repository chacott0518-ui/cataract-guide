import type { FaqItem } from "@/types/faq";

export const GLARE_CHECK_FAQS: FaqItem[] = [
  {
    id: "glare-check-01",
    order: 1,
    question: "야간 빛번짐은 시간이 지나면 사라지나요?",
    answer:
      "일부 경우 시간이 지나며 줄어든다고 알려져 있지만, 모든 사람에게 동일하게 적용된다고 단정할 수 없습니다. 정도와 지속 기간은 개인차가 있어 지속되거나 심해지면 의료기관에 확인하는 것이 안전합니다.",
    categories: ["glareCheck"],
  },
  {
    id: "glare-check-02",
    order: 2,
    question: "다초점 렌즈를 선택하면 빛번짐이 꼭 생기나요?",
    answer:
      "꼭 생긴다고 단정할 수 없습니다. 다초점 렌즈는 설계 특성상 야간 빛 번짐이 함께 언급되는 경우가 있지만, 정도는 개인마다 다르게 나타날 수 있습니다. 관련 특성은 렌즈 선택 상담에서 미리 확인하는 것이 도움이 됩니다.",
    categories: ["glareCheck"],
  },
  {
    id: "glare-check-03",
    order: 3,
    question: "단초점 렌즈는 빛번짐이 전혀 없나요?",
    answer:
      "전혀 없다고 단정할 수 없습니다. 단초점 렌즈도 회복 초기에 일시적인 눈부심을 느낄 수 있다고 알려져 있습니다. 렌즈 종류와 관계없이 증상이 지속되거나 심하면 확인이 필요합니다.",
    categories: ["glareCheck"],
  },
  {
    id: "glare-check-04",
    order: 4,
    question: "낮에도 눈부심이 심하면 정상인가요?",
    answer:
      "야간뿐 아니라 낮에도 눈부심이 심하게 느껴진다면 일반적인 범위를 벗어난 변화일 수 있어 자가 판단보다 의료기관에 확인하는 것이 안전합니다. 함께 나타나는 다른 증상이 있는지도 기록해 상담에서 알리는 것이 좋습니다.",
    categories: ["glareCheck"],
  },
  {
    id: "glare-check-05",
    order: 5,
    question: "선글라스를 쓰면 빛번짐이 줄어드나요?",
    answer:
      "일시적으로 도움이 될 수 있다고 알려져 있지만, 근본적인 해결책이라고 단정할 수는 없습니다. 지속적인 불편이 있다면 선글라스 착용 여부를 포함해 의료기관과 상의하는 것이 안전합니다.",
    categories: ["glareCheck"],
  },
];
