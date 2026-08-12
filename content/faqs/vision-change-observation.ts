import type { FaqItem } from "@/types/faq";

export const VISION_CHANGE_OBSERVATION_FAQS: FaqItem[] = [
  {
    id: "vision-change-01",
    order: 1,
    question: "수술 다음 날 시야가 흐리면 잘못된 건가요?",
    answer:
      "그렇게 단정할 수 없습니다. 수술 직후 시야가 흐리거나 불안정하게 느껴지는 것은 회복 초기에 나타날 수 있는 변화로 알려져 있습니다. 다만 지속되거나 심해지면 의료기관에 확인하는 것이 안전합니다.",
    categories: ["visionChangeObservation"],
  },
  {
    id: "vision-change-02",
    order: 2,
    question: "시력이 안정되는 데 얼마나 걸리나요?",
    answer:
      "정해진 기간으로 단정할 수 없습니다. 개인의 눈 상태와 회복 속도에 따라 안정화까지 걸리는 시간이 다를 수 있어, 병원에서 안내하는 경과 확인 일정을 기준으로 상태를 확인하는 것이 정확합니다.",
    categories: ["visionChangeObservation"],
  },
  {
    id: "vision-change-03",
    order: 3,
    question: "색이 예전과 다르게 보이면 정상인가요?",
    answer:
      "회복 과정에서 색감이 다르게 느껴질 수 있다고 알려져 있지만, 모든 경우가 같다고 단정할 수는 없습니다. 변화가 지속되거나 이상하다고 느껴지면 자가 판단보다 의료기관에 확인하는 것이 안전합니다.",
    categories: ["visionChangeObservation"],
  },
  {
    id: "vision-change-04",
    order: 4,
    question: "시력이 갑자기 나빠지면 응급 상황인가요?",
    answer:
      "회복 중이던 시야가 갑자기 나빠지는 변화는 확인이 필요한 신호일 수 있습니다. 정기 방문을 기다리지 않고 즉시 시술받은 의료기관에 연락해 상태를 확인하는 것이 안전합니다.",
    categories: ["visionChangeObservation"],
  },
  {
    id: "vision-change-05",
    order: 5,
    question: "경과를 기록할 때 특별한 방법이 있나요?",
    answer:
      "정해진 방법은 없지만, 날짜별로 거리별 선명도와 눈부심 여부, 피로감을 간단히 메모해 두면 상담에서 변화 추이를 설명하기 수월합니다. 스마트폰 메모 앱을 활용하는 것도 방법이 될 수 있습니다.",
    categories: ["visionChangeObservation"],
  },
];
