import type { ContactConfig } from "@/types/contact";

/**
 * 문의·연락 설정. 헤더, 모바일 하단 바, CTA에서 이 값을 읽는다.
 */
export const CONTACT: ContactConfig = {
  enabled: true,
  mode: "partnership",
  kakaoEnabled: true,
  kakaoUrl:
    process.env.NEXT_PUBLIC_KAKAO_AD_URL?.trim() ||
    "http://pf.kakao.com/_DSgxfb/chat",
  kakaoLabel: "카톡문의",
  phoneEnabled: true,
  phoneNumber:
    process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "tel:027395415",
  phoneLabel: "상담전화",
  formEnabled: false,
  formLabel: "문의하기",
};
