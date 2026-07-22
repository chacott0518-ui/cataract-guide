import type { ClayAccent, ContentClusterId } from "@/types/content";

export type MenuItemConfig = {
  id: ContentClusterId;
  order: number;
  numberLabel: string;
  title: string;
  description: string;
  iconKey: ContentClusterId;
  accent: ClayAccent;
};

/**
 * 신규 키워드 사이트 복제 시 이 설정과 content/pages·faqs만 교체하면 된다.
 */
export const topicConfig = {
  siteName: "노안백내장",
  primaryKeyword: "노안백내장",
  logoText: "노안백내장",
  defaultCategory: "노안백내장 정보",
  locale: "ko-KR",
  language: "ko",
  theme: {
    accents: {
      cost: "orange" as ClayAccent,
      recovery: "pink" as ClayAccent,
      precautions: "lime" as ClayAccent,
      hospital: "blue" as ClayAccent,
      reviews: "cyan" as ClayAccent,
      faq: "neutral" as ClayAccent,
    },
  },
  menuItems: [
    {
      id: "cost",
      order: 1,
      numberLabel: "01",
      title: "노안백내장 수술비용",
      description: "검사·렌즈·수술 범위에 따른 비용 기준",
      iconKey: "cost",
      accent: "orange",
    },
    {
      id: "recovery",
      order: 2,
      numberLabel: "02",
      title: "노안백내장 회복기간",
      description: "수술 후 회복 과정과 생활 관리",
      iconKey: "recovery",
      accent: "pink",
    },
    {
      id: "precautions",
      order: 3,
      numberLabel: "03",
      title: "노안백내장 주의사항",
      description: "수술 전후 확인해야 할 주의점",
      iconKey: "precautions",
      accent: "lime",
    },
    {
      id: "hospital",
      order: 4,
      numberLabel: "04",
      title: "노안백내장 병원선택",
      description: "검사 체계, 설명 과정과 사후관리 기준",
      iconKey: "hospital",
      accent: "blue",
    },
    {
      id: "reviews",
      order: 5,
      numberLabel: "05",
      title: "노안백내장 후기",
      description: "후기에서 확인할 내용과 과장 표현 구분",
      iconKey: "reviews",
      accent: "cyan",
    },
    {
      id: "faq",
      order: 6,
      numberLabel: "06",
      title: "노안백내장 FAQ",
      description: "수술 전 자주 묻는 질문 정리",
      iconKey: "faq",
      accent: "neutral",
    },
  ] satisfies MenuItemConfig[],
  keywordMap: {
    home: [
      "노안백내장",
      "노안과 백내장 차이",
      "노안백내장 증상",
      "노안백내장 치료",
      "노안백내장 렌즈",
    ],
    cost: [
      "노안백내장 수술비용",
      "노안백내장 가격",
      "노안백내장 렌즈 비용",
      "다초점렌즈 비용 기준",
    ],
    recovery: [
      "노안백내장 회복기간",
      "백내장 수술 후 회복",
      "노안백내장 수술 후 생활",
    ],
    precautions: [
      "노안백내장 주의사항",
      "노안백내장 부작용",
      "백내장 수술 전 주의사항",
      "백내장 수술 후 주의사항",
    ],
    hospital: [
      "노안백내장 병원선택",
      "백내장 검사 병원",
      "노안백내장 렌즈 상담",
      "백내장 사후관리",
    ],
    reviews: [
      "노안백내장 후기",
      "다초점렌즈 후기 확인사항",
      "백내장 수술 후기 주의점",
    ],
    faq: [
      "노안백내장 FAQ",
      "노안백내장 자주 묻는 질문",
      "노안과 백내장 차이",
    ],
    faqHub: [
      "노안백내장 자주 묻는 질문",
      "노안백내장 FAQ",
      "노안백내장 수술비용",
      "노안백내장 렌즈",
      "노안백내장 회복기간",
    ],
  },
} as const;
