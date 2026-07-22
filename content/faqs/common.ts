import type { FaqItem } from "@/types/faq";

/** 메인·공통 FAQ (화면·JSON-LD 일치) */
export const COMMON_FAQS: FaqItem[] = [
  {
    id: "common-01",
    order: 1,
    question: "노안과 백내장은 같은 질환인가요?",
    answer:
      "노안과 백내장은 서로 다른 변화입니다. 노안은 가까운 초점 조절력이 약해지는 현상이고, 백내장은 수정체 혼탁으로 시야가 흐려지는 상태입니다. 두 증상이 겹칠 수 있어 정밀 검사로 원인을 구분하는 것이 필요합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["home", "common"],
  },
  {
    id: "common-02",
    order: 2,
    question: "어떤 증상이 있을 때 검사를 받아야 하나요?",
    answer:
      "시야가 뿌옇거나 빛 번짐이 커지고, 안경 교체 후에도 선명함이 충분히 돌아오지 않을 때 검사를 고려하는 경우가 많습니다. 증상의 강도와 진행 속도는 사람마다 다르므로, 증상만으로 원인을 단정할 수는 없습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["home", "common", "symptoms"],
  },
  {
    id: "common-03",
    order: 3,
    question: "노안백내장 수술비용은 왜 달라지나요?",
    answer:
      "수술비용은 인공수정체 종류, 정밀검사 범위, 난시 교정 포함 여부, 사후관리 구성에 따라 달라질 수 있습니다. 같은 명칭의 수술이라도 포함·제외 항목이 다르면 총액 비교만으로는 판단하기 어렵습니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "수술비용 안내",
    categories: ["home", "common", "cost"],
  },
  {
    id: "common-04",
    order: 4,
    question: "단초점렌즈와 다초점렌즈는 어떻게 다른가요?",
    answer:
      "단초점렌즈는 특정 거리 중심으로 초점을 맞추고, 다초점렌즈는 여러 거리 활용을 목표로 설계됩니다. 어느 한쪽이 모든 사람에게 더 낫다고 보기 어렵고, 생활 패턴과 눈 상태에 맞춰 비교하는 것이 필요합니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "렌즈와 비용",
    categories: ["home", "common", "cost", "lens"],
  },
  {
    id: "common-05",
    order: 5,
    question: "수술 후 회복기간은 어느 정도인가요?",
    answer:
      "많은 경우 수일 내 가벼운 일상 활동이 가능해지지만, 시야 적응과 안정은 더 길게 이어질 수 있습니다. 렌즈 종류, 동반 질환, 회복 관리 방법에 따라 체감 속도는 사람마다 달라질 수 있습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["home", "common", "recovery"],
  },
  {
    id: "common-06",
    order: 6,
    question: "병원 선택 시 무엇을 확인해야 하나요?",
    answer:
      "검사 결과 설명의 명확성, 렌즈 장단점 안내, 사후관리 일정, 질문할 시간이 충분한지를 확인하면 선택에 도움이 됩니다. 광고 문구나 후기만으로 판단하기는 어렵고, 본인 상태에 맞는 설명을 직접 확인하는 것이 중요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["home", "common", "hospital"],
  },
];
