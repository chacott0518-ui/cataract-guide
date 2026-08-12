import type { FaqItem } from "@/types/faq";

export const SYMPTOM_CHECK_FAQS: FaqItem[] = [
  {
    id: "symptom-check-01",
    order: 1,
    question: "수술 후 눈이 약간 충혈되면 바로 병원에 가야 하나요?",
    answer:
      "미세한 충혈은 회복 과정에서 나타날 수 있는 반응으로 알려져 있어 반드시 응급 상황이라고 단정할 수 없습니다. 다만 충혈이 심해지거나 통증·분비물이 함께 나타난다면 자가 판단보다 의료기관에 확인하는 것이 안전합니다.",
    categories: ["symptomCheck"],
  },
  {
    id: "symptom-check-02",
    order: 2,
    question: "야간이나 휴일에 증상이 생기면 어떻게 하나요?",
    answer:
      "수술 전 병원의 야간·휴일 연락 방법을 미리 확인해 두는 것이 좋습니다. 증상이 응급으로 판단될 정도로 심하다면 안내받은 연락처나 응급 진료 체계를 통해 지체 없이 확인하는 것이 안전합니다.",
    categories: ["symptomCheck"],
  },
  {
    id: "symptom-check-03",
    order: 3,
    question: "통증이 며칠째 지속되면 정상 범위인가요?",
    answer:
      "지속되는 통증은 정상 범위를 벗어난 변화일 수 있습니다. 통증의 정도와 지속 기간을 스스로 판단하기보다, 며칠 이상 이어지는 통증이 있다면 시술받은 의료기관에 연락해 확인하는 것이 안전합니다.",
    categories: ["symptomCheck"],
  },
  {
    id: "symptom-check-04",
    order: 4,
    question: "증상이 걱정되지만 예약일이 아직 남았으면 기다려야 하나요?",
    answer:
      "반드시 예약일까지 기다려야 하는 것은 아닙니다. 걱정되는 증상이 있다면 정기 방문 일정과 관계없이 먼저 병원에 연락해 문의하는 것이 안전합니다. 특히 이상증상이 심해지는 경우라면 지체하지 않는 것이 중요합니다.",
    categories: ["symptomCheck"],
  },
  {
    id: "symptom-check-05",
    order: 5,
    question: "인터넷에서 본 증상과 내 증상이 다르면 무시해도 되나요?",
    answer:
      "무시하지 않는 것이 좋습니다. 온라인 정보는 일반적인 참고 자료일 뿐이며 개인의 증상을 정확히 진단할 수는 없습니다. 본인이 느끼는 변화가 평소와 다르다고 느껴진다면 자가 판단보다 의료기관에 확인하는 것이 안전합니다.",
    categories: ["symptomCheck"],
  },
];
