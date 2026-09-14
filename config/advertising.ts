import { CONTACT } from "@/config/contact";
import { CLINIC } from "@/config/clinic";

/**
 * 진료 연결 CTA 설정 (제휴·광고 모집 문구 없음).
 */
export const CLINIC_CTA = {
  top: {
    label: `${CLINIC.name} 상담`,
    headline: "노안·백내장 검사와 상담이 필요하신가요?",
    button: CONTACT.consultLabel,
  },
  bottom: {
    label: `${CLINIC.brandName} 진료 안내`,
    headline: "전화·카카오·온라인으로 상담 일정을 확인할 수 있습니다.",
    button: CONTACT.consultLabel,
  },
  get ctaUrl() {
    return CONTACT.consultUrl;
  },
  get kakaoUrl() {
    return CONTACT.kakaoUrl;
  },
  get phoneUrl() {
    return CONTACT.phoneNumber;
  },
  get bookingUrl() {
    return CONTACT.bookingUrl;
  },
  get locationUrl() {
    return CONTACT.locationUrl;
  },
  phoneDisplay: CLINIC.phoneDisplay,
} as const;

/** @deprecated CLINIC_CTA 사용 — 구 import 호환 */
export const ADVERTISING = CLINIC_CTA;
