import type { FaqItem } from "@/types/faq";

export const RECOVERY_FAQS: FaqItem[] = [
  {
    id: "recovery-01",
    order: 1,
    question: "회복기간은 보통 얼마나 걸리나요?",
    answer:
      "회복 기간은 보통 수일에서 수 주에 걸쳐 단계적으로 진행되는 경우가 많습니다. 렌즈 종류, 동반 질환, 회복 관리 준수 여부에 따라 일상 복귀와 시야 적응 속도는 사람마다 달라질 수 있습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
  {
    id: "recovery-02",
    order: 2,
    question: "운전은 언제부터 가능한가요?",
    answer:
      "운전 재개 시점은 시야 안정 정도와 의료진의 경과 관찰 결과를 기준으로 판단하는 것이 안전합니다. 스스로 편하다고 느껴도 야간 시야나 대비 감각이 충분히 회복되지 않았을 수 있어, 개인 판단만으로 결정하기는 어렵습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
  {
    id: "recovery-03",
    order: 3,
    question: "다초점렌즈는 적응 시간이 더 필요한가요?",
    answer:
      "다초점렌즈는 새로운 시야 패턴에 적응하는 시간이 필요할 수 있습니다. 모든 사람에게 같은 적응 기간이 적용된다고 보기 어렵고, 가까운 거리·중간 거리·원거리 사용 빈도에 따라 체감도 달라질 수 있습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery", "lens"],
  },
  {
    id: "recovery-04",
    order: 4,
    question: "회복 중 불편감이 있으면 어떻게 하나요?",
    answer:
      "회복 중 일시적인 건조감, 이물감, 빛 번짐은 안내되는 경우가 있습니다. 다만 심한 통증, 급격한 시력 저하, 눈 주변 붓기가 빠르게 커지면 즉시 진료가 필요할 수 있으니 증상의 정도와 변화 속도를 함께 확인하세요.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 안내",
    categories: ["recovery", "precautions"],
  },
  {
    id: "recovery-05",
    order: 5,
    question: "운동이나 샤워는 언제부터 가능한가요?",
    answer:
      "샤워와 가벼운 활동은 의료진 안내에 따라 단계적으로 허용되는 경우가 많습니다. 같은 수술이어도 눈 상태와 회복 경과에 따라 권장 시점이 달라질 수 있으므로, 운동·세안·화장품 사용 전 허용 범위를 확인하는 것이 좋습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["recovery"],
  },
];
