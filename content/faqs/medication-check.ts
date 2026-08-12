import type { FaqItem } from "@/types/faq";

export const MEDICATION_CHECK_FAQS: FaqItem[] = [
  {
    id: "med-check-01",
    order: 1,
    question: "혈압약이나 당뇨약을 먹고 있으면 미리 말해야 하나요?",
    answer:
      "네, 알리는 편이 좋습니다. 만성질환 관련 약은 검사 결과 해석과 수술 전후 계획을 상담하는 과정에서 참고가 될 수 있는 정보입니다. 약 이름과 복용 시기를 함께 정리해 상담에서 전달하면 도움이 됩니다.",
    categories: ["medicationCheck"],
  },
  {
    id: "med-check-02",
    order: 2,
    question: "영양제나 건강기능식품도 목록에 포함해야 하나요?",
    answer:
      "포함하는 편이 좋습니다. 건강기능식품도 약과 함께 논의될 수 있는 항목이므로 처방약과 구분 없이 목록에 적어 두는 것이 안전합니다. 특정 성분이 문제가 된다고 단정하기보다는 상담에서 확인하는 과정이 필요합니다.",
    categories: ["medicationCheck"],
  },
  {
    id: "med-check-03",
    order: 3,
    question: "수술이 걱정돼 미리 약을 끊어도 될까요?",
    answer:
      "임의로 중단하지 않는 것이 좋습니다. 복용약의 중단이나 조정이 필요한지는 처방 의료진과 상의해 결정해야 하는 사안입니다. 스스로 판단해 중단하면 오히려 기존 건강 관리에 영향을 줄 수 있습니다.",
    categories: ["medicationCheck"],
  },
  {
    id: "med-check-04",
    order: 4,
    question: "약 이름을 정확히 몰라도 상담이 가능한가요?",
    answer:
      "가능하지만 가능한 정확한 정보를 준비하는 편이 좋습니다. 처방전이나 약 봉투를 사진으로 찍어 상담에 가져가면 이름을 기억하지 못해도 정확하게 전달할 수 있습니다. 기억에만 의존하기보다 기록을 활용하는 것이 안전합니다.",
    categories: ["medicationCheck"],
  },
  {
    id: "med-check-05",
    order: 5,
    question: "노안백내장 검사 결과와 복용약이 관련이 있나요?",
    answer:
      "관련이 있을 수 있습니다. 복용약은 검사 결과를 해석하고 수술 계획을 상담하는 과정에서 참고 정보로 다뤄질 수 있습니다. 다만 개인 상태에 따라 확인 범위가 달라질 수 있어 상담을 통해 직접 확인하는 것이 정확합니다.",
    categories: ["medicationCheck"],
  },
];
