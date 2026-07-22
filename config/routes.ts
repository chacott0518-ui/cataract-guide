export const ROUTES = {
  home: "/",
  cost: "/노안백내장-수술비용",
  recovery: "/노안백내장-회복기간",
  precautions: "/노안백내장-주의사항",
  hospital: "/노안백내장-병원선택",
  reviews: "/노안백내장-후기",
  faq: "/노안백내장-faq",
  faqQuestions: "/노안백내장-자주묻는질문",
  costLegacy: "/노안백내장-수술비",
} as const;

export type RouteKey = keyof typeof ROUTES;
