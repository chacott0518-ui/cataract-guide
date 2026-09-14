export type ContactMode = "medical" | "disabled";

export type ContactConfig = {
  enabled: boolean;
  mode: ContactMode;
  kakaoEnabled: boolean;
  kakaoUrl: string;
  kakaoLabel: string;
  phoneEnabled: boolean;
  phoneNumber: string;
  phoneLabel: string;
  /** 화면 표시용 전화번호 */
  phoneDisplay: string;
  consultEnabled: boolean;
  consultUrl: string;
  consultLabel: string;
  bookingEnabled: boolean;
  bookingUrl: string;
  bookingLabel: string;
  locationEnabled: boolean;
  locationUrl: string;
  locationLabel: string;
  formEnabled: boolean;
  formLabel: string;
};
