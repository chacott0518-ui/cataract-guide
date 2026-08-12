import type { FaqItem } from "@/types/faq";

export const DRIVING_RESUME_CHECK_FAQS: FaqItem[] = [
  {
    id: "driving-resume-01",
    order: 1,
    question: "수술 며칠 후부터 운전할 수 있나요?",
    answer:
      "정해진 일수로 단정할 수 없습니다. 회복 속도는 개인차가 있어 시야 안정 정도와 의료진의 판단을 함께 확인해야 합니다. 특정 날짜만 보고 스스로 판단해 운전을 재개하는 것은 권장되지 않습니다.",
    categories: ["drivingResumeCheck"],
  },
  {
    id: "driving-resume-02",
    order: 2,
    question: "야간 운전은 주간 운전보다 늦게 재개해야 하나요?",
    answer:
      "그럴 가능성이 있습니다. 야간 운전은 빛 번짐이나 눈부심에 더 민감하게 영향을 받을 수 있어 주간보다 신중한 판단이 필요할 수 있습니다. 정확한 재개 시점은 의료진과 상의해 결정해야 합니다.",
    categories: ["drivingResumeCheck"],
  },
  {
    id: "driving-resume-03",
    order: 3,
    question: "양쪽 눈 수술 간격이 있으면 운전 재개가 더 늦어지나요?",
    answer:
      "그럴 수 있습니다. 한쪽 눈만 회복 중인 상태에서는 양쪽 시야 균형이 맞지 않아 운전 판단에 영향을 줄 수 있습니다. 두 눈 모두의 상태를 고려해 재개 시점을 의료진과 함께 확인하는 것이 안전합니다.",
    categories: ["drivingResumeCheck"],
  },
  {
    id: "driving-resume-04",
    order: 4,
    question: "운전 중 시야가 이상하게 느껴지면 어떻게 해야 하나요?",
    answer:
      "즉시 안전한 곳에 정차하고 운전을 중단하는 것이 좋습니다. 시야 변화가 일시적인지 확인이 필요한 상황인지는 스스로 판단하기보다 의료기관에 문의해 확인해야 합니다.",
    categories: ["drivingResumeCheck"],
  },
  {
    id: "driving-resume-05",
    order: 5,
    question: "안경을 쓰면 더 빨리 운전할 수 있나요?",
    answer:
      "안경 착용 여부만으로 재개 시점이 앞당겨진다고 단정할 수 없습니다. 필요한 경우 안경이 도움이 될 수 있지만, 최종 재개 판단은 시야 안정 정도와 의료진의 평가를 기준으로 이뤄져야 합니다.",
    categories: ["drivingResumeCheck"],
  },
];
