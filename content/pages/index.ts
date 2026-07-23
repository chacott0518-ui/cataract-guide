import { CAUTION_PAGE } from "@/content/pages/caution";
import { COST_PAGE } from "@/content/pages/cost";
import { FAQ_PAGE } from "@/content/pages/faq-page";
import { HOSPITAL_PAGE } from "@/content/pages/hospital";
import { CONTENT_CARDS } from "@/content/pages/home";
import { RECOVERY_PAGE } from "@/content/pages/recovery";
import { REVIEW_PAGE } from "@/content/pages/review";
import type { ContentPage } from "@/types/content";

/** 색인·정적 생성 대상. 중복 FAQ(/노안백내장-자주묻는질문)는 proxy 308로만 처리 */
export const CONTENT_PAGES: ContentPage[] = [
  COST_PAGE,
  RECOVERY_PAGE,
  CAUTION_PAGE,
  HOSPITAL_PAGE,
  REVIEW_PAGE,
  FAQ_PAGE,
];

export function getContentPageBySlug(slug: string): ContentPage | undefined {
  const normalized = slug.normalize("NFC");
  return CONTENT_PAGES.find(
    (page) => page.slug.normalize("NFC") === normalized,
  );
}

export function getContentPageById(
  id: ContentPage["id"],
): ContentPage | undefined {
  return CONTENT_PAGES.find((page) => page.id === id);
}

export const ALL_PAGE_HREFS = [
  "/",
  ...CONTENT_PAGES.map((page) => page.href),
] as const;

export { CONTENT_CARDS };
export * from "@/content/pages/home";
