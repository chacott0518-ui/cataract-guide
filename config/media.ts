import type { ContentClusterId, ContentImage } from "@/types/content";

export type TopicMedia = {
  id: ContentClusterId;
  thumbnail: ContentImage;
  secondaryImage: ContentImage;
  imageAlt: string;
  secondaryImageAlt: string;
  accentColor: string;
  accentHoverColor: string;
  mobileCardDescription: string;
};

const SECONDARY_ALT = "노안백내장 병원 이미지 변경 안내 예시";

function img(src: string, alt: string): ContentImage {
  return { src, alt, width: 1200, height: 1200 };
}

/**
 * 썸네일·본문 이미지·강조색 매핑.
 * UI 컴포넌트에 경로를 하드코딩하지 않고 여기서 관리한다.
 */
export const TOPIC_MEDIA: Record<ContentClusterId, TopicMedia> = {
  cost: {
    id: "cost",
    imageAlt: "노안백내장 수술비용 확인 항목 안내",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#688B00",
    accentHoverColor: "#496700",
    mobileCardDescription: "비용이 달라지는 기준 정리",
    thumbnail: img(
      "/images/노안백내장/노안백내장-수술비용.webp",
      "노안백내장 수술비용 확인 항목 안내",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-수술비용-본문.webp",
      SECONDARY_ALT,
    ),
  },
  recovery: {
    id: "recovery",
    imageAlt: "노안백내장 회복기간과 일상 복귀 안내",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#F26916",
    accentHoverColor: "#C84D08",
    mobileCardDescription: "회복과 일상 복귀 안내",
    thumbnail: img(
      "/images/노안백내장/노안백내장-회복기간.webp",
      "노안백내장 회복기간과 일상 복귀 안내",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-회복기간-본문.webp",
      SECONDARY_ALT,
    ),
  },
  precautions: {
    id: "precautions",
    imageAlt: "노안백내장 수술 전후 주의사항 안내",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#1758C9",
    accentHoverColor: "#0D3F99",
    mobileCardDescription: "수술 전후 주의점 정리",
    thumbnail: img(
      "/images/노안백내장/노안백내장-주의사항.webp",
      "노안백내장 수술 전후 주의사항 안내",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-주의사항-본문.webp",
      SECONDARY_ALT,
    ),
  },
  hospital: {
    id: "hospital",
    imageAlt: "노안백내장 병원 선택 비교 기준",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#078D93",
    accentHoverColor: "#056A70",
    mobileCardDescription: "검사와 사후관리 비교",
    thumbnail: img(
      "/images/노안백내장/노안백내장-병원선택.webp",
      "노안백내장 병원 선택 비교 기준",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-병원선택-본문.webp",
      SECONDARY_ALT,
    ),
  },
  reviews: {
    id: "reviews",
    imageAlt: "노안백내장 후기 확인 기준",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#DF3E73",
    accentHoverColor: "#B32656",
    mobileCardDescription: "후기와 과장 표현 구분",
    thumbnail: img(
      "/images/노안백내장/노안백내장-후기.webp",
      "노안백내장 후기 확인 기준",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-후기-본문.webp",
      SECONDARY_ALT,
    ),
  },
  faq: {
    id: "faq",
    imageAlt: "노안백내장 자주 묻는 질문 안내",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#F1683D",
    accentHoverColor: "#C94B28",
    mobileCardDescription: "자주 묻는 질문 정리",
    thumbnail: img(
      "/images/노안백내장/노안백내장-faq.webp",
      "노안백내장 자주 묻는 질문 안내",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-faq-본문.webp",
      SECONDARY_ALT,
    ),
  },
  faqHub: {
    id: "faqHub",
    imageAlt: "노안백내장 자주 묻는 질문 30가지 안내",
    secondaryImageAlt: SECONDARY_ALT,
    accentColor: "#F1683D",
    accentHoverColor: "#C94B28",
    mobileCardDescription: "질문 30가지 모음",
    thumbnail: img(
      "/images/노안백내장/노안백내장-faq.webp",
      "노안백내장 자주 묻는 질문 30가지 안내",
    ),
    secondaryImage: img(
      "/images/노안백내장/본문/노안백내장-faq-본문.webp",
      SECONDARY_ALT,
    ),
  },
};

/** 메인 본문 상단 이미지 */
export const HOME_FEATURE_IMAGE: ContentImage = img(
  "/images/노안백내장/본문/노안백내장-수술전-알아야할정보.webp",
  "노안백내장 수술 전 알아야 할 정보 안내 이미지",
);

export function getTopicMedia(id: ContentClusterId): TopicMedia {
  return TOPIC_MEDIA[id];
}
