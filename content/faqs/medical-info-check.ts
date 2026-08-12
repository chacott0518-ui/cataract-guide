import type { FaqItem } from "@/types/faq";

export const MEDICAL_INFO_CHECK_FAQS: FaqItem[] = [
  {
    id: "medical-info-01",
    order: 1,
    question: "블로그 후기도 의료정보로 참고할 수 있나요?",
    answer:
      "참고 자료로는 활용할 수 있지만 공식 의료정보와 같은 신뢰도로 보기는 어렵습니다. 개인 경험은 특정 상황에 한정된 정보일 수 있어, 일반적인 기준은 공식 기관 자료나 의료진 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["medicalInfoCheck"],
  },
  {
    id: "medical-info-02",
    order: 2,
    question: "이 사이트의 정보를 진단 자료로 사용해도 되나요?",
    answer:
      "그렇지 않습니다. 이 사이트를 포함한 온라인 의료정보는 일반적인 참고 자료이며 개인의 진단이나 처방을 대신할 수 없습니다. 구체적인 상태 판단은 반드시 의료기관의 검사와 상담을 통해 이뤄져야 합니다.",
    categories: ["medicalInfoCheck"],
  },
  {
    id: "medical-info-03",
    order: 3,
    question: "오래된 정보인지 어떻게 확인하나요?",
    answer:
      "게시물에 작성일이나 수정일이 명시되어 있는지 확인하는 것이 기본적인 방법입니다. 날짜가 없거나 오래된 정보를 최신처럼 안내하는 콘텐츠는 신중하게 볼 필요가 있습니다.",
    categories: ["medicalInfoCheck"],
  },
  {
    id: "medical-info-04",
    order: 4,
    question: "해외 자료를 국내 기준으로 봐도 되나요?",
    answer:
      "그렇게 보기 어렵습니다. 해외 기관 자료는 일반적인 참고 정보로 활용할 수 있지만, 국내 제도나 특정 허가 사항을 대신 증명하는 근거로 사용해서는 안 됩니다. 국내 관련 사항은 국내 공식 자료를 기준으로 확인해야 합니다.",
    categories: ["medicalInfoCheck"],
  },
  {
    id: "medical-info-05",
    order: 5,
    question: "여러 사이트의 정보가 다르면 어떤 것을 믿어야 하나요?",
    answer:
      "정보마다 차이가 있다면 공식 기관 자료나 근거를 명확히 제시하는 자료를 우선 참고하는 것이 좋습니다. 그래도 판단이 어려운 부분은 온라인 정보만으로 결정하지 말고 의료진과 상담을 통해 직접 확인하는 것이 안전합니다.",
    categories: ["medicalInfoCheck"],
  },
];
