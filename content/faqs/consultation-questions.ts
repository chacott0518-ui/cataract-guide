import type { FaqItem } from "@/types/faq";

export const CONSULTATION_QUESTIONS_FAQS: FaqItem[] = [
  {
    id: "consult-q-01",
    order: 1,
    question: "상담 질문은 몇 개 정도 준비하면 좋을까요?",
    answer:
      "정해진 개수는 없습니다. 검사 결과, 렌즈·수술 계획, 비용, 사후관리처럼 주제별로 궁금한 점을 정리해 가는 것이 개수보다 중요합니다. 우선순위가 높은 질문부터 먼저 묻는 방법도 도움이 될 수 있습니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-02",
    order: 2,
    question: "질문에 대한 답변이 이해되지 않으면 어떻게 하나요?",
    answer:
      "바로 되물어 확인하는 것이 좋습니다. 노안백내장 상담은 전문 용어가 포함될 수 있어 한 번에 이해되지 않는 부분이 생길 수 있습니다. 이해될 때까지 다시 설명을 요청하는 것은 자연스러운 과정입니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-03",
    order: 3,
    question: "여러 병원에서 상담을 받아도 되나요?",
    answer:
      "가능합니다. 여러 곳에서 상담을 받아 설명 방식과 답변 내용을 비교하는 것은 흔한 방법입니다. 다만 특정 병원의 설명만으로 최종 결정을 서두르기보다, 궁금한 점이 충분히 해소됐는지를 기준으로 판단하는 편이 좋습니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-04",
    order: 4,
    question: "질문 목록을 노트나 메모 앱에 정리해도 되나요?",
    answer:
      "네, 좋은 방법입니다. 메모로 정리해 두면 상담 중 빠뜨리는 질문 없이 확인할 수 있습니다. 답변을 받은 뒤에도 함께 기록해 두면 여러 병원의 설명을 비교할 때 도움이 될 수 있습니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-05",
    order: 5,
    question: "노안백내장 상담에서 가장 먼저 확인할 질문은 무엇인가요?",
    answer:
      "현재 시력 저하의 주된 원인과 수술을 고려하는 이유를 먼저 확인하는 것이 도움이 될 수 있습니다. 이 답변을 바탕으로 렌즈·비용·사후관리 관련 질문을 이어가면 상담 흐름을 이해하기 쉬워집니다.",
    categories: ["consultationQuestions"],
  },
];
