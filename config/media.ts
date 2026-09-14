import type { ContentClusterId, ContentImage } from "@/types/content";
import {
  BODY_INFO_SLOTS,
  CARD_SLOTS,
  HERO_MOBILE_SLOT,
  HERO_PC_SLOT,
  PAGE_DETAIL_SLOTS,
  slotAsContentImage,
} from "@/config/image-slots";

export type TopicMedia = {
  id: ContentClusterId;
  thumbnail: ContentImage;
  /** 하위 페이지 본문 보조(없으면 썸네일 재사용 금지 — 페이지에서 별도 지정) */
  secondaryImage: ContentImage;
  pageHero?: ContentImage;
  imageAlt: string;
  secondaryImageAlt: string;
  accentColor: string;
  accentHoverColor: string;
  mobileCardDescription: string;
};

function cardById(id: string): ContentImage {
  const found = CARD_SLOTS.find((s) => s.id === id);
  if (!found) {
    return { src: "", alt: "", width: 1080, height: 1080 };
  }
  return slotAsContentImage(found);
}

/**
 * 목차카드 6 + 하위 페이지 Hero/보조(매핑표 13–20).
 */
export const TOPIC_MEDIA: Record<ContentClusterId, TopicMedia> = {
  cost: {
    id: "cost",
    imageAlt: cardById("card-cost").alt,
    secondaryImageAlt: PAGE_DETAIL_SLOTS.costSecondary.alt,
    accentColor: "#688B00",
    accentHoverColor: "#496700",
    mobileCardDescription: "비용이 달라지는 기준 정리",
    thumbnail: cardById("card-cost"),
    pageHero: slotAsContentImage(PAGE_DETAIL_SLOTS.costHero),
    secondaryImage: slotAsContentImage(PAGE_DETAIL_SLOTS.costSecondary),
  },
  recovery: {
    id: "recovery",
    imageAlt: cardById("card-recovery").alt,
    secondaryImageAlt: PAGE_DETAIL_SLOTS.recoverySecondary.alt,
    accentColor: "#F26916",
    accentHoverColor: "#C84D08",
    mobileCardDescription: "회복과 일상 복귀 안내",
    thumbnail: cardById("card-recovery"),
    pageHero: slotAsContentImage(PAGE_DETAIL_SLOTS.recoveryHero),
    secondaryImage: slotAsContentImage(PAGE_DETAIL_SLOTS.recoverySecondary),
  },
  precautions: {
    id: "precautions",
    imageAlt: cardById("card-precautions").alt,
    secondaryImageAlt: PAGE_DETAIL_SLOTS.precautionsSecondary.alt,
    accentColor: "#1758C9",
    accentHoverColor: "#0D3F99",
    mobileCardDescription: "수술 전후 주의점 정리",
    thumbnail: cardById("card-precautions"),
    pageHero: slotAsContentImage(PAGE_DETAIL_SLOTS.precautionsHero),
    secondaryImage: slotAsContentImage(PAGE_DETAIL_SLOTS.precautionsSecondary),
  },
  hospital: {
    id: "hospital",
    imageAlt: cardById("card-hospital").alt,
    secondaryImageAlt: PAGE_DETAIL_SLOTS.hospitalSecondary.alt,
    accentColor: "#078D93",
    accentHoverColor: "#056A70",
    mobileCardDescription: "검사와 사후관리 비교",
    thumbnail: cardById("card-hospital"),
    pageHero: slotAsContentImage(PAGE_DETAIL_SLOTS.hospitalHero),
    secondaryImage: slotAsContentImage(PAGE_DETAIL_SLOTS.hospitalSecondary),
  },
  reviews: {
    id: "reviews",
    imageAlt: cardById("card-reviews").alt,
    secondaryImageAlt: cardById("card-reviews").alt,
    accentColor: "#DF3E73",
    accentHoverColor: "#B32656",
    mobileCardDescription: "후기와 과장 표현 구분",
    thumbnail: cardById("card-reviews"),
    secondaryImage: cardById("card-reviews"),
  },
  faq: {
    id: "faq",
    imageAlt: cardById("card-faq").alt,
    secondaryImageAlt: cardById("card-faq").alt,
    accentColor: "#F1683D",
    accentHoverColor: "#C94B28",
    mobileCardDescription: "자주 묻는 질문 정리",
    thumbnail: cardById("card-faq"),
    secondaryImage: cardById("card-faq"),
  },
  faqHub: {
    id: "faqHub",
    imageAlt: cardById("card-faq").alt,
    secondaryImageAlt: cardById("card-faq").alt,
    accentColor: "#F1683D",
    accentHoverColor: "#C94B28",
    mobileCardDescription: "질문 30가지 모음",
    thumbnail: cardById("card-faq"),
    secondaryImage: cardById("card-faq"),
  },
};

/** HOME Hero PC (16:9) */
export const HOME_FEATURE_IMAGE: ContentImage = slotAsContentImage(HERO_PC_SLOT);

/** HOME Hero Mobile (4:5) */
export const HOME_FEATURE_IMAGE_MOBILE: ContentImage =
  slotAsContentImage(HERO_MOBILE_SLOT);

export const GUIDE_SECTION_IMAGES = {
  diff: slotAsContentImage(BODY_INFO_SLOTS[0]),
  exam: slotAsContentImage(BODY_INFO_SLOTS[1]),
  lens: slotAsContentImage(BODY_INFO_SLOTS[2]),
  daily: slotAsContentImage(BODY_INFO_SLOTS[3]),
} as const;

export function getTopicMedia(id: ContentClusterId): TopicMedia {
  return TOPIC_MEDIA[id];
}
