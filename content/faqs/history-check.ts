import type { FaqItem } from "@/types/faq";

export const HISTORY_CHECK_FAQS: FaqItem[] = [
  {
    id: "history-check-01",
    order: 1,
    question: "예전에 라섹·라식 수술을 받았으면 알려야 하나요?",
    answer:
      "네, 알리는 편이 좋습니다. 과거 각막 관련 시력교정술 이력은 검사 결과를 해석하고 인공수정체 도수를 계산하는 과정에서 참고가 될 수 있는 정보입니다. 정확한 수술 시기를 기억하지 못해도 아는 만큼 전달하면 도움이 됩니다.",
    categories: ["historyCheck"],
  },
  {
    id: "history-check-02",
    order: 2,
    question: "당뇨가 있으면 노안백내장 수술이 어려운가요?",
    answer:
      "반드시 그렇지는 않습니다. 당뇨는 눈 건강과 관련해 검사에서 함께 고려되는 경우가 있다고 알려져 있지만, 수술 가능 여부는 개인의 전신 상태와 안과 검사 결과에 따라 달라질 수 있습니다. 정확한 판단은 상담을 통해 확인해야 합니다.",
    categories: ["historyCheck"],
  },
  {
    id: "history-check-03",
    order: 3,
    question: "가족 중 백내장이 있으면 미리 말해야 하나요?",
    answer:
      "말해 두면 도움이 될 수 있습니다. 가족력은 참고 정보로 다뤄질 수 있는 항목이지만, 그 자체로 진단이나 수술 여부를 결정짓는 요소는 아닙니다. 현재 본인의 검사 결과가 우선 확인 기준이 됩니다.",
    categories: ["historyCheck"],
  },
  {
    id: "history-check-04",
    order: 4,
    question: "예전 진료기록이 없어도 상담이 가능한가요?",
    answer:
      "가능합니다. 정확한 기록이 없더라도 기억나는 범위에서 시기와 증상을 설명하면 상담을 진행할 수 있습니다. 필요하다면 이전에 다니던 병원에 진료기록을 요청해 보완하는 방법도 있습니다.",
    categories: ["historyCheck"],
  },
  {
    id: "history-check-05",
    order: 5,
    question: "녹내장이 있어도 노안백내장 상담을 받을 수 있나요?",
    answer:
      "네, 상담 자체는 가능합니다. 다만 녹내장 같은 동반 질환이 있는 경우 검사에서 확인하는 항목이나 상담 방향이 달라질 수 있어, 관련 병력을 미리 알리고 필요한 경우 협진을 함께 논의하는 것이 안전합니다.",
    categories: ["historyCheck"],
  },
];
