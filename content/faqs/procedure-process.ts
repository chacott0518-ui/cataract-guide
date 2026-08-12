import type { FaqItem } from "@/types/faq";

export const PROCEDURE_PROCESS_FAQS: FaqItem[] = [
  {
    id: "procedure-process-01",
    order: 1,
    question: "노안백내장 수술은 통증이 없나요?",
    answer:
      "통증이 전혀 없다고 단정할 수 없습니다. 마취 방식에 따라 체감하는 통증 정도가 다를 수 있으며, 개인차도 있을 수 있습니다. 구체적인 마취 방식과 예상되는 느낌은 상담에서 확인하는 것이 정확합니다.",
    categories: ["procedureProcess"],
  },
  {
    id: "procedure-process-02",
    order: 2,
    question: "수술은 입원 없이 당일 가능한가요?",
    answer:
      "많은 경우 당일 진행 후 귀가하는 방식으로 안내되지만, 이는 병원과 개인 상태에 따라 달라질 수 있는 사안입니다. 입원 필요 여부와 귀가 후 주의사항은 상담에서 직접 확인해야 합니다.",
    categories: ["procedureProcess"],
  },
  {
    id: "procedure-process-03",
    order: 3,
    question: "수술 중 눈을 움직이면 위험한가요?",
    answer:
      "수술 중에는 눈 움직임에 대한 안내를 미리 받게 되는 경우가 많습니다. 구체적인 주의사항과 대응 방법은 병원과 의료진의 설명에 따라 다를 수 있으므로, 수술 전 상담에서 자세히 확인하는 것이 안전합니다.",
    categories: ["procedureProcess"],
  },
  {
    id: "procedure-process-04",
    order: 4,
    question: "수술 후 바로 앞이 잘 보이나요?",
    answer:
      "수술 직후 시야가 바로 안정된다고 단정할 수 없습니다. 회복 속도와 초기 시야 변화는 개인차가 있을 수 있으며, 안정화까지 시간이 필요한 경우도 있습니다. 자세한 회복 흐름은 회복기간 안내를 함께 참고하세요.",
    categories: ["procedureProcess"],
  },
  {
    id: "procedure-process-05",
    order: 5,
    question: "수술 방식은 모든 병원이 동일한가요?",
    answer:
      "동일하다고 단정할 수 없습니다. 사용 장비와 세부 절차는 병원과 의료진에 따라 차이가 있을 수 있습니다. 특정 병원의 방식이 표준이라고 판단하기보다, 상담에서 진행 방식을 직접 설명받는 것이 정확합니다.",
    categories: ["procedureProcess"],
  },
];
