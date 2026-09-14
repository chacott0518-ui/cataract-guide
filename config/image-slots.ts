/**
 * 2026-09-14 이미지 매핑표 기준 — 20장 WebP 확정 경로.
 * currentSrc === targetSrc (임시 placeholder 제거).
 */
import type { ContentImage } from "@/types/content";

export type ImageSlotSpec = {
  id: string;
  targetSrc: string;
  currentSrc: string;
  alt: string;
  masterPc: { width: number; height: number };
  masterMobile?: { width: number; height: number };
  renderPc: string;
  renderMobile: string;
  aspectCss: string;
  objectFit: "contain" | "cover";
  placement: string;
  applyUrl: string;
};

function slot(
  partial: Omit<ImageSlotSpec, "currentSrc"> & { currentSrc?: string },
): ImageSlotSpec {
  return {
    ...partial,
    currentSrc: partial.currentSrc ?? partial.targetSrc,
  };
}

const BASE = "/images/노안백내장";
const BODY = `${BASE}/본문`;

/** 1–2 HOME Hero */
export const HERO_PC_SLOT: ImageSlotSpec = slot({
  id: "hero-pc",
  targetSrc: `${BASE}/노안백내장-hero-pc.webp`,
  alt: "노안과 백내장 차이를 한눈에 정리한 노안백내장 안내 이미지",
  masterPc: { width: 1600, height: 900 },
  renderPc: "HOME intro ~960–1180px, 16:9, object-fit:contain",
  renderMobile: "숨김(모바일은 hero-mobile)",
  aspectCss: "16 / 9",
  objectFit: "contain",
  placement: "HOME HomeIntroBlock PC",
  applyUrl: "/",
});

export const HERO_MOBILE_SLOT: ImageSlotSpec = slot({
  id: "hero-mobile",
  targetSrc: `${BASE}/노안백내장-hero-mobile.webp`,
  alt: "모바일용 노안백내장 대표 안내 — 검사와 상담 판단 포인트",
  masterPc: { width: 1080, height: 1350 },
  masterMobile: { width: 1080, height: 1350 },
  renderPc: "숨김",
  renderMobile: "100vw, 4:5, object-fit:contain",
  aspectCss: "4 / 5",
  objectFit: "contain",
  placement: "HOME HomeIntroBlock Mobile",
  applyUrl: "/",
});

/** @deprecated 단일 hero — PC 슬롯 별칭 */
export const HERO_SLOT = HERO_PC_SLOT;

/** 3–8 목차 카드 */
export const CARD_SLOTS: ImageSlotSpec[] = [
  slot({
    id: "card-hospital",
    targetSrc: `${BASE}/노안백내장-병원선택.webp`,
    alt: "병원 선택 시 검사·설명·사후관리 기준을 정리한 카드 이미지",
    masterPc: { width: 1080, height: 1080 },
    renderPc: "목차카드 ~33vw, 1:1, contain",
    renderMobile: "~50vw, 1:1, contain",
    aspectCss: "1 / 1",
    objectFit: "contain",
    placement: "ContentCardGrid 병원선택",
    applyUrl: "/ + /노안백내장-병원선택(카드)",
  }),
  slot({
    id: "card-recovery",
    targetSrc: `${BASE}/노안백내장-회복기간.webp`,
    alt: "회복 흐름과 일상 복귀 확인 포인트를 담은 카드 이미지",
    masterPc: { width: 1080, height: 1080 },
    renderPc: "목차카드 ~33vw, 1:1, contain",
    renderMobile: "~50vw, 1:1, contain",
    aspectCss: "1 / 1",
    objectFit: "contain",
    placement: "ContentCardGrid 회복기간",
    applyUrl: "/ + /노안백내장-회복기간(카드)",
  }),
  slot({
    id: "card-precautions",
    targetSrc: `${BASE}/노안백내장-주의사항.webp`,
    alt: "수술 전후 주의와 이상증상 체크를 담은 카드 이미지",
    masterPc: { width: 1080, height: 1080 },
    renderPc: "목차카드 ~33vw, 1:1, contain",
    renderMobile: "~50vw, 1:1, contain",
    aspectCss: "1 / 1",
    objectFit: "contain",
    placement: "ContentCardGrid 주의사항",
    applyUrl: "/ + /노안백내장-주의사항(카드)",
  }),
  slot({
    id: "card-cost",
    targetSrc: `${BASE}/노안백내장-수술비용.webp`,
    alt: "수술비용이 달라지는 구성 항목을 정리한 카드 이미지",
    masterPc: { width: 1080, height: 1080 },
    renderPc: "목차카드 ~33vw, 1:1, contain",
    renderMobile: "~50vw, 1:1, contain",
    aspectCss: "1 / 1",
    objectFit: "contain",
    placement: "ContentCardGrid 수술비용",
    applyUrl: "/ + /노안백내장-수술비용(카드)",
  }),
  slot({
    id: "card-reviews",
    targetSrc: `${BASE}/노안백내장-후기.webp`,
    alt: "후기를 볼 때 확인할 조건과 주의점을 담은 카드 이미지",
    masterPc: { width: 1080, height: 1080 },
    renderPc: "목차카드 ~33vw, 1:1, contain",
    renderMobile: "~50vw, 1:1, contain",
    aspectCss: "1 / 1",
    objectFit: "contain",
    placement: "ContentCardGrid 후기",
    applyUrl: "/ + /노안백내장-후기(카드)",
  }),
  slot({
    id: "card-faq",
    targetSrc: `${BASE}/노안백내장-faq.webp`,
    alt: "노안백내장 FAQ 주제 탐색을 안내하는 카드 이미지",
    masterPc: { width: 1080, height: 1080 },
    renderPc: "목차카드 ~33vw, 1:1, contain",
    renderMobile: "~50vw, 1:1, contain",
    aspectCss: "1 / 1",
    objectFit: "contain",
    placement: "ContentCardGrid FAQ",
    applyUrl: "/ + /노안백내장-faq(카드)",
  }),
];

/** 9–12 본문 설명형 */
export const BODY_INFO_SLOTS: ImageSlotSpec[] = [
  slot({
    id: "body-diff",
    targetSrc: `${BODY}/노안백내장-차이-비교.webp`,
    alt: "노안과 백내장의 원인 차이를 나란히 비교한 설명 도식",
    masterPc: { width: 1200, height: 900 },
    renderPc: "본문 ~720–960px, 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "HOME home-compare sectionImage",
    applyUrl: "/",
  }),
  slot({
    id: "body-exam",
    targetSrc: `${BODY}/노안백내장-수술전검사-역할.webp`,
    alt: "수술 전 검사에서 IOL MASTER·OCT 등이 확인하는 역할 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "본문 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-수술-전-검사 sectionImage",
    applyUrl: "/노안백내장-수술-전-검사",
  }),
  slot({
    id: "body-lens",
    targetSrc: `${BODY}/노안백내장-렌즈유형-비교.webp`,
    alt: "단초점·다초점·연속초점(EDOF) 특성 비교 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "본문 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-단초점-다초점-차이 sectionImage",
    applyUrl: "/노안백내장-단초점-다초점-차이",
  }),
  slot({
    id: "body-daily",
    targetSrc: `${BODY}/노안백내장-회복-일상복귀.webp`,
    alt: "세안·운전·운동 등 일상 복귀에서 확인할 활동을 정리한 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "본문 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-회복기간 activity sectionImage",
    applyUrl: "/노안백내장-회복기간",
  }),
];

/** 13–20 하위 페이지 Hero + 보조 */
export const PAGE_DETAIL_SLOTS = {
  hospitalHero: slot({
    id: "hospital-hero",
    targetSrc: `${BODY}/노안백내장-병원선택-hero.webp`,
    alt: "노안백내장 병원 선택 시 비교할 검사·상담·사후관리 기준 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 Hero ~720px, 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-병원선택 topImages",
    applyUrl: "/노안백내장-병원선택",
  }),
  hospitalSecondary: slot({
    id: "hospital-checklist",
    targetSrc: `${BODY}/노안백내장-병원선택-체크리스트.webp`,
    alt: "병원 상담 전 확인할 체크리스트 항목 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 보조 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-병원선택 bodyImage",
    applyUrl: "/노안백내장-병원선택",
  }),
  recoveryHero: slot({
    id: "recovery-hero",
    targetSrc: `${BODY}/노안백내장-회복기간-hero.webp`,
    alt: "노안백내장 회복기간과 개인차 요인을 보여주는 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 Hero 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-회복기간 topImages",
    applyUrl: "/노안백내장-회복기간",
  }),
  recoverySecondary: slot({
    id: "recovery-stages",
    targetSrc: `${BODY}/노안백내장-회복단계.webp`,
    alt: "수술 후 회복 단계별 확인 포인트를 정리한 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 보조 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-회복기간 bodyImage",
    applyUrl: "/노안백내장-회복기간",
  }),
  precautionsHero: slot({
    id: "precautions-hero",
    targetSrc: `${BODY}/노안백내장-주의사항-hero.webp`,
    alt: "노안백내장 수술 전후 주의사항을 정리한 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 Hero 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-주의사항 topImages",
    applyUrl: "/노안백내장-주의사항",
  }),
  precautionsSecondary: slot({
    id: "precautions-warning",
    targetSrc: `${BODY}/노안백내장-이상증상-체크.webp`,
    alt: "수술 후 바로 확인해야 할 이상증상 체크 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 보조 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-주의사항 bodyImage",
    applyUrl: "/노안백내장-주의사항",
  }),
  costHero: slot({
    id: "cost-hero",
    targetSrc: `${BODY}/노안백내장-수술비용-hero.webp`,
    alt: "노안백내장 수술비용 견적에서 확인할 구성을 보여주는 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 Hero 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-수술비용 topImages",
    applyUrl: "/노안백내장-수술비용",
  }),
  costSecondary: slot({
    id: "cost-factors",
    targetSrc: `${BODY}/노안백내장-비용결정요인.webp`,
    alt: "검사·렌즈·수술 범위 등 비용 결정요인을 정리한 안내",
    masterPc: { width: 1200, height: 900 },
    renderPc: "하위 보조 4:3, contain",
    renderMobile: "100vw, 4:3, contain",
    aspectCss: "4 / 3",
    objectFit: "contain",
    placement: "/노안백내장-수술비용 bodyImage",
    applyUrl: "/노안백내장-수술비용",
  }),
} as const;

export const ALL_TWENTY_SLOTS: ImageSlotSpec[] = [
  HERO_PC_SLOT,
  HERO_MOBILE_SLOT,
  ...CARD_SLOTS,
  ...BODY_INFO_SLOTS,
  PAGE_DETAIL_SLOTS.hospitalHero,
  PAGE_DETAIL_SLOTS.hospitalSecondary,
  PAGE_DETAIL_SLOTS.recoveryHero,
  PAGE_DETAIL_SLOTS.recoverySecondary,
  PAGE_DETAIL_SLOTS.precautionsHero,
  PAGE_DETAIL_SLOTS.precautionsSecondary,
  PAGE_DETAIL_SLOTS.costHero,
  PAGE_DETAIL_SLOTS.costSecondary,
];

/** Next/Image·브라우저 캐시 강제 갱신 (파일명 유지, next.config localPatterns 허용) */
export const IMAGE_CACHE_BUST = "20260914c";

export function withImageCacheBust(src: string): string {
  if (!src || src.includes("?")) return src;
  return `${src}?v=${IMAGE_CACHE_BUST}`;
}

export function slotAsContentImage(spec: ImageSlotSpec): ContentImage {
  return {
    src: withImageCacheBust(spec.targetSrc),
    alt: spec.alt,
    width: spec.masterPc.width,
    height: spec.masterPc.height,
  };
}
