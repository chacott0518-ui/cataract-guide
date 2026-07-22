import type { FaqItem } from "@/types/faq";

/**
 * FAQ 통합 페이지 확장 문항.
 * 기존 주제 FAQ와 중복되지 않는 질문만 추가한다.
 */
export const HUB_FAQS: FaqItem[] = [
  {
    id: "hub-diff-01",
    order: 10,
    question: "노안과 백내장은 동시에 나타날 수 있나요?",
    answer:
      "네, 연령 변화에 따라 노안과 백내장이 함께 나타날 수 있습니다. 가까운 거리 불편과 시야 흐림이 겹치면 원인 구분이 어려울 수 있어, 검사로 현재 상태를 확인하는 편이 정확합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "common"],
  },
  {
    id: "hub-diff-02",
    order: 11,
    question: "노안과 백내장의 증상은 어떻게 구분하나요?",
    answer:
      "노안은 가까운 거리 초점이 잘 맞지 않는 불편이 중심이고, 백내장은 시야가 뿌옇거나 대비가 떨어지는 느낌이 흔합니다. 증상만으로 단정하기 어렵고, 검사 결과와 생활 불편을 함께 봐야 합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "common"],
  },
  {
    id: "hub-diff-03",
    order: 12,
    question: "안경을 바꿔도 흐리면 검사를 받아야 하나요?",
    answer:
      "안경을 교체해도 선명함이 기대만큼 돌아오지 않으면 검사를 고려할 수 있습니다. 원인과 필요한 확인 항목은 사람마다 달라질 수 있어, 증상만으로 수술 필요 여부를 단정하지는 않습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-diff-04",
    order: 13,
    question: "양쪽 눈의 증상이 서로 다를 수 있나요?",
    answer:
      "한쪽만 더 흐리거나 빛 번짐이 다르게 느껴지는 경우도 있습니다. 양안 상태가 다르면 검사·상담·수술 일정 계획도 달라질 수 있어 양쪽을 함께 확인하는 것이 좋습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-01",
    order: 20,
    question: "야간 빛 번짐은 백내장과 관련이 있나요?",
    answer:
      "야간 빛 번짐은 백내장과 관련될 수 있지만, 다른 원인으로도 나타날 수 있습니다. 운전·야간 활동이 불편하면 증상과 검사 결과를 함께 확인해 원인을 구분하는 편이 안전합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-02",
    order: 21,
    question: "노안백내장 검사에서는 어떤 항목을 확인하나요?",
    answer:
      "시력·굴절, 수정체 상태, 각막·망막·안압 등 필요한 항목을 확인하는 경우가 많습니다. 검토 중인 렌즈와 눈 상태에 따라 추가 검사가 필요할 수 있어 결과 설명까지 들어보는 것이 중요합니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-03",
    order: 22,
    question: "망막이나 각막 검사도 필요한 경우가 있나요?",
    answer:
      "렌즈 적합성과 수술 계획을 확인하기 위해 망막·각막 검사가 함께 안내되는 경우가 있습니다. 필요한 범위는 개인 상태에 따라 달라질 수 있으므로, 왜 해당 검사가 필요한지 설명을 요청하세요.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 기준",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-symptom-04",
    order: 23,
    question: "검사 결과만으로 수술 시기를 바로 결정하나요?",
    answer:
      "검사 결과는 중요한 근거이지만, 일상 불편과 전신 상태, 생활 목표도 함께 고려합니다. 결과만으로 시기를 단정하기보다 설명과 질문을 충분히 나눈 뒤 판단하는 편이 안전합니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "symptoms"],
  },
  {
    id: "hub-cost-01",
    order: 30,
    question: "한쪽 눈과 양쪽 눈 수술비용은 어떻게 구분하나요?",
    answer:
      "견적은 한쪽 눈 기준인지 양쪽 눈 기준인지에 따라 달라질 수 있습니다. 렌즈·검사·관리 포함 범위도 함께 구분해야 총액을 정확히 비교할 수 있습니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "수술비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-02",
    order: 31,
    question: "검사비와 렌즈 비용은 별도로 확인해야 하나요?",
    answer:
      "검사비와 렌즈 비용이 분리돼 있는지 확인하면 견적 비교가 수월합니다. 같은 총액이라도 포함·제외 항목이 다르면 실제 부담이 달라질 수 있습니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "수술비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-03",
    order: 32,
    question: "단초점렌즈와 다초점렌즈는 어떻게 비교하나요?",
    answer:
      "초점 범위, 안경 사용 가능성, 야간 시야 적응, 생활 패턴을 기준으로 비교하는 편이 도움이 됩니다. 어느 한쪽이 모든 사람에게 더 낫다고 단정하기는 어렵습니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "렌즈와 비용",
    categories: ["hub", "cost", "lens"],
  },
  {
    id: "hub-cost-04",
    order: 33,
    question: "추가 검사가 필요한 경우도 있나요?",
    answer:
      "눈 상태나 검토 중인 렌즈에 따라 추가 검사가 필요할 수 있습니다. 추가 검사의 이유와 비용 포함 여부를 미리 물어두면 견적 오해를 줄일 수 있습니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "수술비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-cost-05",
    order: 34,
    question: "비용 확인 시 포함 항목을 왜 살펴봐야 하나요?",
    answer:
      "총액만 보면 서로 다른 구성의 견적을 같은 기준으로 비교하기 어렵습니다. 검사·렌즈·약제·경과 관찰이 어디까지 포함되는지 확인해야 실제 부담을 파악하기 쉽습니다.",
    relatedSlug: "노안백내장-수술비용",
    relatedLabel: "수술비용 안내",
    categories: ["hub", "cost"],
  },
  {
    id: "hub-recovery-01",
    order: 40,
    question: "수술 후 스마트폰은 언제부터 사용할 수 있나요?",
    answer:
      "스마트폰 사용 시점은 시야·불편 정도와 의료진 안내에 따라 달라질 수 있습니다. 화면을 오래 보면 건조감이 커질 수 있어, 허용 범위와 사용 시간을 함께 확인하는 편이 좋습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-02",
    order: 41,
    question: "세안과 샤워는 어떤 점을 주의해야 하나요?",
    answer:
      "물·비누·샴푸가 눈에 직접 닿지 않도록 안내되는 경우가 많습니다. 허용 시점은 개인 경과에 따라 달라질 수 있어 의료진 설명을 우선하세요.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-03",
    order: 42,
    question: "운전 재개 시점은 어떻게 판단하나요?",
    answer:
      "시야 안정과 눈부심·빛 번짐이 운전에 지장을 주는지 확인한 뒤 판단하는 편이 안전합니다. 스스로 편하다고 느껴도 경과 관찰 결과를 함께 확인하세요.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-04",
    order: 43,
    question: "양쪽 눈의 회복 속도가 다를 수 있나요?",
    answer:
      "한쪽과 다른 쪽의 회복 감각이 다르게 느껴질 수 있습니다. 양안 수술 간격과 렌즈 적응에 따라 체감이 달라질 수 있어, 개인 경과를 기준으로 확인하는 것이 좋습니다.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-recovery-05",
    order: 44,
    question: "회복 중 눈부심이 지속되면 어떻게 해야 하나요?",
    answer:
      "회복 과정에서 눈부심이 나타날 수 있지만, 점점 심해지거나 안내와 다른 변화가 있으면 의료진에게 확인하세요. 야간 활동이 많은 경우 불편 정도를 구체적으로 설명해 두면 도움이 됩니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "recovery"],
  },
  {
    id: "hub-caution-01",
    order: 50,
    question: "수술 전 복용 약을 알려야 하나요?",
    answer:
      "복용 중인 약과 안약은 미리 알려 주는 것이 좋습니다. 전신 질환·알레르기·이전 안과 이력도 함께 정리해 두면 검사와 상담이 수월해집니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-02",
    order: 51,
    question: "수술 후 눈을 비비면 안 되는 이유는 무엇인가요?",
    answer:
      "초기에는 눈 비비기나 강한 압력이 회복에 영향을 줄 수 있어 피하도록 안내되는 경우가 많습니다. 구체적 금기 기간은 담당 의료진 설명을 따르세요.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-03",
    order: 52,
    question: "안약 사용 순서를 잘못하면 어떻게 해야 하나요?",
    answer:
      "순서를 헷갈렸다면 임의로 추가 점안하기보다 안내받은 사용법을 다시 확인하는 편이 안전합니다. 이상 반응이 의심되면 의료진에게 문의하세요.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-04",
    order: 53,
    question: "운동과 사우나는 언제부터 확인해야 하나요?",
    answer:
      "운동·사우나·고온 노출은 회복 안내에 따라 허용 시점이 달라질 수 있습니다. 강도와 충격 가능성을 고려해 단계적으로 재개하는 편이 일반적입니다.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-caution-05",
    order: 54,
    question: "수술 후 화장이나 염색은 언제 확인해야 하나요?",
    answer:
      "눈 화장과 염색은 자극·감염 위험을 줄이기 위해 허용 시점까지 미루는 안내가 흔합니다. 본인 경과에 맞는 일정을 의료진에게 확인하세요.",
    relatedSlug: "노안백내장-주의사항",
    relatedLabel: "주의사항 보기",
    categories: ["hub", "precautions"],
  },
  {
    id: "hub-hospital-01",
    order: 60,
    question: "검사 결과를 어떤 방식으로 설명받아야 하나요?",
    answer:
      "수치만 나열되기보다 현재 눈 상태와 일상 불편이 어떻게 연결되는지 이해할 수 있게 설명해 주는지가 중요합니다. 모르는 항목은 질문 목록으로 정리해 두면 도움이 됩니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-02",
    order: 61,
    question: "렌즈의 장점과 제한점을 모두 확인해야 하나요?",
    answer:
      "장점만 듣기보다 제한점과 적응 과정도 함께 확인하는 편이 기대 관리에 도움이 됩니다. 생활에서 중요한 거리와 야간 활동을 기준으로 비교하세요.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital", "lens"],
  },
  {
    id: "hub-hospital-03",
    order: 62,
    question: "수술 후 경과 확인 일정도 비교해야 하나요?",
    answer:
      "경과 확인 일정과 이상 증상 시 연락 방법은 수술 후 관리에 영향을 줄 수 있습니다. 비용과 함께 관리 범위를 비교하면 선택이 균형 있어집니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-04",
    order: 63,
    question: "비용만으로 병원을 선택해도 괜찮을까요?",
    answer:
      "비용은 중요한 비교 항목이지만, 검사 설명·렌즈 상담·사후관리까지 함께 보는 편이 안전합니다. 총액만 낮아 보여도 포함 범위가 다르면 실제 부담이 달라질 수 있습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-hospital-05",
    order: 64,
    question: "병원 방문 전 질문을 정리하는 것이 도움이 되나요?",
    answer:
      "질문을 메모해 가면 설명 속도를 따라가기 쉽고, 포함·제외 항목을 다시 확인하기도 수월합니다. 렌즈·비용·관리·이상 증상 대응을 구분해 두면 좋습니다.",
    relatedSlug: "노안백내장-병원선택",
    relatedLabel: "병원선택 안내",
    categories: ["hub", "hospital"],
  },
  {
    id: "hub-review-01",
    order: 70,
    question: "노안백내장 후기를 그대로 믿기 어려운 이유는 무엇인가요?",
    answer:
      "후기 작성자와 본인의 눈 상태·렌즈·생활 패턴이 다를 수 있기 때문입니다. 참고 자료로 활용하되, 중요한 판단은 검사와 상담에서 확인하는 편이 안전합니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
  {
    id: "hub-review-02",
    order: 71,
    question: "광고성 후기는 어떻게 구분할 수 있나요?",
    answer:
      "결과만 강조하거나 광고·협찬 표시가 불분명한 글은 신중히 구분하세요. 개인 상태·렌즈·회복 과정이 구체적으로 적힌 글을 우선 참고하는 편이 도움이 됩니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
  {
    id: "hub-review-03",
    order: 72,
    question: "후기 작성자의 렌즈 종류를 확인해야 하나요?",
    answer:
      "렌즈 종류와 초점 범위가 적혀 있으면 비교 기준으로 쓰기 쉬워집니다. 렌즈 정보 없이 결과만 적힌 글은 본인 상황에 그대로 적용하기 어렵습니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
  {
    id: "hub-review-04",
    order: 73,
    question: "회복기간 후기가 사람마다 다른 이유는 무엇인가요?",
    answer:
      "기존 눈 상태, 렌즈 적응, 양안 일정과 생활 환경에 따라 회복 체감이 달라질 수 있습니다. 다른 사람의 일정과 동일하게 맞추기보다 본인 경과를 기준으로 확인하세요.",
    relatedSlug: "노안백내장-회복기간",
    relatedLabel: "회복기간 안내",
    categories: ["hub", "reviews", "recovery"],
  },
  {
    id: "hub-review-05",
    order: 74,
    question: "수술 결과만 강조된 후기는 왜 주의해야 하나요?",
    answer:
      "결과만 강조되면 적응 과정·불편·개인차 정보가 빠져 기대와 실제가 어긋나기 쉽습니다. 과정과 조건이 함께 적힌 글을 우선 참고하는 편이 안전합니다.",
    relatedSlug: "노안백내장-후기",
    relatedLabel: "후기 확인 기준",
    categories: ["hub", "reviews"],
  },
];
