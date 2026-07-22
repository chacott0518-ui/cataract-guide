import { CONTACT } from "@/config/contact";

/**
 * 문의·제휴 CTA 설정.
 * mode: partnership(기본) | sponsor(광고주 확정 후)
 */
export const ADVERTISING = {
  mode: "partnership" as "partnership" | "sponsor",
  top: {
    label: "노안백내장 정보 콘텐츠",
    headline: "안과 관련 콘텐츠 제휴를 검토하고 계신가요?",
    button: "제휴문의",
  },
  bottom: {
    label: "콘텐츠 및 광고 제휴",
    headline: "노안백내장 정보 콘텐츠 제휴가 필요하신가요?",
    button: "제휴문의",
  },
  get ctaUrl() {
    return CONTACT.kakaoUrl;
  },
  desktopLabel: "카톡문의",
  get desktopUrl() {
    return CONTACT.kakaoUrl;
  },
  mobileKakaoLabel: "카톡문의",
  mobilePhoneLabel: "상담전화",
  get mobilePhoneUrl() {
    return CONTACT.phoneNumber;
  },
  mobilePhoneDisplay: "상담전화 02-739-5415",
} as const;
