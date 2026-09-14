import { CLINIC } from "@/config/clinic";
import type { ContactConfig } from "@/types/contact";

/**
 * 문의·연락 설정. 에스앤비안과의원 진료 연결용.
 * 카카오/상담/예약 URL은 PerfectVision CTA·공식 snbeye.com에서 확인된 값만 사용.
 */
export const CONTACT: ContactConfig = {
  enabled: true,
  mode: "medical",
  kakaoEnabled: true,
  kakaoUrl:
    process.env.NEXT_PUBLIC_KAKAO_AD_URL?.trim() || CLINIC.kakaoUrl,
  kakaoLabel: "카카오상담",
  phoneEnabled: true,
  phoneNumber:
    process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || CLINIC.phoneTel,
  phoneLabel: "전화상담",
  phoneDisplay: CLINIC.phoneDisplay,
  consultEnabled: true,
  consultUrl: CLINIC.consultUrl,
  consultLabel: "상담신청",
  bookingEnabled: true,
  bookingUrl: CLINIC.bookingUrl,
  bookingLabel: "온라인예약",
  locationEnabled: true,
  locationUrl: CLINIC.locationUrl,
  locationLabel: "오시는 길",
  formEnabled: false,
  formLabel: "문의하기",
};
