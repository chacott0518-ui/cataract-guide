import type { FaqItem } from "@/types/faq";

/**
 * /노안백내장-자주묻는질문 전용 30문항.
 * 기존 FAQ(공통·주제·hub)와 의미 중복을 피한 신규 원본이다.
 */
export const FAQ_QUESTIONS_30: FaqItem[] = [
  {
    id: "q30-01",
    order: 1,
    question: "밝은 곳보다 어두운 곳에서 더 불편한 이유는 무엇인가요?",
    answer:
      "어두운 환경에서는 동공이 커지면서 빛 번짐이나 대비 저하가 더 크게 느껴질 수 있습니다. 원인과 정도는 개인마다 달라 검사로 현재 상태를 확인하는 편이 정확합니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-02",
    order: 2,
    question: "색감이 예전과 다르게 느껴질 때도 검사가 도움이 되나요?",
    answer:
      "색이 탁하거나 노랗게 느껴지는 변화는 수정체 상태와 관련될 수 있어 검사를 고려할 수 있습니다. 다만 다른 원인일 수도 있으니 증상만으로 단정하지는 않습니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-03",
    order: 3,
    question: "운전 중 표지판이 흐리게 보이면 무엇을 확인해야 하나요?",
    answer:
      "원거리 시야와 대비 감각, 빛 번짐 여부를 함께 확인하는 것이 도움이 됩니다. 불편이 지속되면 검사에서 원인을 구분해 보는 편이 안전합니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-04",
    order: 4,
    question: "독서용 안경을 자주 바꿔도 불편이 남으면 어떻게 해야 하나요?",
    answer:
      "근거리 안경을 바꿔도 선명함이 기대만큼 돌아오지 않으면 눈 상태 전반을 점검해 볼 수 있습니다. 도수만의 문제인지 다른 변화가 있는지 검사로 구분합니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-05",
    order: 5,
    question: "한쪽 눈만 먼저 흐려질 수 있나요?",
    answer:
      "한쪽만 먼저 불편해지는 경우도 있습니다. 양안 상태가 다르면 검사·상담·일정 계획도 달라질 수 있어 양쪽을 함께 확인하는 것이 좋습니다.",
    categories: ["faq-questions", "symptoms"],
  },
  {
    id: "q30-06",
    order: 6,
    question: "산동검사 후 일상생활에서 주의할 점은 무엇인가요?",
    answer:
      "산동 후에는 눈부심과 근거리 불편이 일시적으로 나타날 수 있어 안내받은 시간 동안 운전을 피하는 경우가 많습니다. 개인차와 기관 안내를 우선하세요.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-07",
    order: 7,
    question: "인공수정체 도수는 어떤 검사로 결정하나요?",
    answer:
      "눈의 길이와 각막 곡률 등 측정값을 바탕으로 목표 도수를 검토합니다. 필요한 측정 항목은 눈 상태와 검토 중인 렌즈에 따라 달라질 수 있습니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-08",
    order: 8,
    question: "다른 안질환이 있으면 백내장 검사 결과가 달라질 수 있나요?",
    answer:
      "망막·각막·녹내장 등 동반 질환이 있으면 검사 해석과 수술 계획이 달라질 수 있습니다. 기존 진단과 치료 이력을 미리 알려 주면 상담이 수월합니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-09",
    order: 9,
    question: "안구건조증이 있으면 수술 전 무엇을 확인해야 하나요?",
    answer:
      "건조증이 있으면 검사 정확도와 수술 후 불편 체감에 영향을 줄 수 있어 상태를 먼저 확인하는 경우가 많습니다. 사용 중인 인공눈물·안약도 함께 알려 주세요.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-10",
    order: 10,
    question: "콘택트렌즈는 검사 전에 언제부터 중단해야 하나요?",
    answer:
      "렌즈 착용은 각막 형태 측정에 영향을 줄 수 있어 검사 전 중단 기간을 안내받는 경우가 많습니다. 소프트·하드 렌즈 종류에 따라 기간이 달라질 수 있습니다.",
    categories: ["faq-questions", "exam"],
  },
  {
    id: "q30-11",
    order: 11,
    question: "생활 불편 정도가 수술 시기 결정에 중요한 이유는 무엇인가요?",
    answer:
      "같은 검사 수치라도 운전·독서·야간 활동에 미치는 영향이 사람마다 다르기 때문입니다. 시력 수치와 일상 불편을 함께 보고 시기를 검토합니다.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-12",
    order: 12,
    question: "수술 당일 보호자 동반 여부는 어떻게 확인하나요?",
    answer:
      "기관마다 귀가·안내 기준이 달라 보호자 동반을 권하는 경우가 있습니다. 수술 전 안내문에서 동행·교통편·휴식 계획을 확인하세요.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-13",
    order: 13,
    question: "수술 전날 화장이나 세안은 어떻게 해야 하나요?",
    answer:
      "눈 화장과 크림은 수술 전 안내 시점부터 제한되는 경우가 많습니다. 세안·샴푸 방법도 기관 안내를 따르는 편이 안전합니다.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-14",
    order: 14,
    question: "수술 당일 식사 여부는 어떻게 안내받아야 하나요?",
    answer:
      "금식·가벼운 식사 허용 여부는 마취·일정 계획에 따라 달라질 수 있습니다. 임의로 판단하지 말고 수술 전 안내를 확인하세요.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-15",
    order: 15,
    question: "당뇨가 있으면 검사 과정에서 무엇을 추가로 확인하나요?",
    answer:
      "혈당 조절 상태와 망막 변화가 수술·회복 계획에 영향을 줄 수 있어 관련 검사를 함께 확인하는 경우가 있습니다. 복용 약과 최근 수치도 알려 주면 도움이 됩니다.",
    categories: ["faq-questions", "timing"],
  },
  {
    id: "q30-16",
    order: 16,
    question: "야간 운전이 많다면 렌즈 선택에서 무엇을 확인해야 하나요?",
    answer:
      "야간 빛 번짐·눈부심에 대한 설명과 적응 가능성을 함께 확인하는 편이 좋습니다. 생활에서 야간 운전 비중을 구체적으로 말하면 상담이 수월합니다.",
    categories: ["faq-questions", "lens"],
  },
  {
    id: "q30-17",
    order: 17,
    question: "가까운 거리 작업이 많다면 어떤 생활 습관을 알려야 하나요?",
    answer:
      "독서·모니터·스마트폰 사용 시간과 필요한 거리를 정리해 두면 초점 범위 비교에 도움이 됩니다. 안경 사용을 어느 정도까지 받아들일 수 있는지도 함께 알려 주세요.",
    categories: ["faq-questions", "lens"],
  },
  {
    id: "q30-18",
    order: 18,
    question: "인공수정체 선택 후 안경이 필요할 수도 있나요?",
    answer:
      "렌즈 종류와 눈 상태에 따라 특정 거리에서 안경이 필요할 수 있습니다. 안경 의존도를 낮추는 목표와 한계를 상담에서 구분해 확인하세요.",
    categories: ["faq-questions", "lens"],
  },
  {
    id: "q30-19",
    order: 19,
    question: "녹내장이 있으면 인공수정체 선택이 달라질 수 있나요?",
    answer:
      "녹내장 상태와 시야·안압 관리에 따라 검토 가능한 렌즈 범위가 달라질 수 있습니다. 기존 치료 이력과 최근 검사 결과를 함께 확인하는 것이 중요합니다.",
    categories: ["faq-questions", "lens"],
  },
  {
    id: "q30-20",
    order: 20,
    question: "망막질환이 있으면 수술 후 시력 예상이 달라질 수 있나요?",
    answer:
      "망막 상태에 따라 기대하는 시력과 체감이 달라질 수 있습니다. 수술 전에 망막 검사 설명과 현실적인 목표를 함께 확인하세요.",
    categories: ["faq-questions", "lens"],
  },
  {
    id: "q30-21",
    order: 21,
    question: "실손보험 청구 전에 어떤 서류를 확인해야 하나요?",
    answer:
      "진단서·영수증·세부 내역서 등 필요한 서류는 약관과 보험사 안내에 따라 달라질 수 있습니다. 적용 여부는 이 페이지만으로 단정하지 말고 관련 기관에 확인하세요.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-22",
    order: 22,
    question: "비용 상담 시 총 예상 비용을 확인하려면 무엇을 물어봐야 하나요?",
    answer:
      "검사·렌즈·수술·약제·경과 관찰이 어디까지 포함되는지, 추가 비용이 생길 수 있는 조건을 구분해 묻는 편이 도움이 됩니다. 한쪽·양쪽 기준도 함께 확인하세요.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-23",
    order: 23,
    question: "건강보험 적용 범위는 어디에서 확인해야 하나요?",
    answer:
      "급여·비급여 구분은 개인 상황과 제도 안내에 따라 달라질 수 있습니다. 상담에서 해당 항목을 확인하고, 필요하면 관련 기관 안내도 함께 참고하세요.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-24",
    order: 24,
    question: "견적에 약제비와 재진비가 포함되는지 왜 확인해야 하나요?",
    answer:
      "총액만 보면 포함 범위가 다른 견적을 같은 기준으로 비교하기 어렵습니다. 약제·재진·추가 검사가 제외되면 실제 부담이 달라질 수 있습니다.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-25",
    order: 25,
    question: "비용 비교 자료를 요청해도 되나요?",
    answer:
      "포함·제외 항목이 적힌 자료를 요청하면 구두 설명만 들을 때보다 비교가 수월합니다. 항목이 불명확하면 다시 질문해 두는 편이 좋습니다.",
    categories: ["faq-questions", "cost"],
  },
  {
    id: "q30-26",
    order: 26,
    question: "수술 후 시야가 바로 선명하지 않을 수도 있나요?",
    answer:
      "초기에는 흐릿함·눈부심·건조감이 나타날 수 있어 바로 선명하다고 느끼기 어려운 경우도 있습니다. 경과와 렌즈 적응에 따라 체감 속도는 개인차가 있습니다.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-27",
    order: 27,
    question: "회복 중 갑작스러운 증상이 생기면 무엇을 확인해야 하나요?",
    answer:
      "갑작스러운 시력 저하, 심한 통증, 충혈 변화처럼 안내와 다른 증상이 있으면 의료진에게 확인하는 편이 안전합니다. 응급·야간 연락 방법을 미리 저장해 두세요.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-28",
    order: 28,
    question: "정기검진 일정은 개인마다 달라질 수 있나요?",
    answer:
      "눈 상태와 수술·렌즈 계획에 따라 경과 관찰 간격이 달라질 수 있습니다. 안내받은 일정을 기준으로 하며, 불편이 있으면 예정보다 일찍 확인할 수 있습니다.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-29",
    order: 29,
    question: "수술 후 보호안대는 언제까지 사용하나요?",
    answer:
      "보호안대·보호 안경 사용 기간은 기관 안내와 회복 상태에 따라 달라질 수 있습니다. 수면 중 착용 여부도 안내문을 기준으로 확인하세요.",
    categories: ["faq-questions", "recovery"],
  },
  {
    id: "q30-30",
    order: 30,
    question: "후발백내장은 처음 백내장이 다시 생긴 것인가요?",
    answer:
      "후발백내장은 수정체낭에 혼탁이 생기는 변화로, 처음 백내장이 그대로 재발한 것과는 구분해서 설명하는 경우가 많습니다. 증상과 확인 방법은 검사 후 안내를 따르는 편이 정확합니다.",
    categories: ["faq-questions", "recovery"],
  },
];

export const FAQ_QUESTIONS_30_GROUPS = [
  {
    id: "q30-symptoms",
    numberLabel: "01",
    heading: "증상과 구분",
    faqIds: ["q30-01", "q30-02", "q30-03", "q30-04", "q30-05"],
  },
  {
    id: "q30-exam",
    numberLabel: "02",
    heading: "검사와 진단",
    faqIds: ["q30-06", "q30-07", "q30-08", "q30-09", "q30-10"],
  },
  {
    id: "q30-timing",
    numberLabel: "03",
    heading: "수술 시기와 준비",
    faqIds: ["q30-11", "q30-12", "q30-13", "q30-14", "q30-15"],
  },
  {
    id: "q30-lens",
    numberLabel: "04",
    heading: "인공수정체와 렌즈",
    faqIds: ["q30-16", "q30-17", "q30-18", "q30-19", "q30-20"],
  },
  {
    id: "q30-cost",
    numberLabel: "05",
    heading: "비용과 보험 확인",
    faqIds: ["q30-21", "q30-22", "q30-23", "q30-24", "q30-25"],
  },
  {
    id: "q30-recovery",
    numberLabel: "06",
    heading: "회복과 수술 후 확인",
    faqIds: ["q30-26", "q30-27", "q30-28", "q30-29", "q30-30"],
  },
] as const;
