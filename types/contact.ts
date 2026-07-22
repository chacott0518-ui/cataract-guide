export type ContactMode = "partnership" | "medical" | "disabled";

export type ContactConfig = {
  enabled: boolean;
  mode: ContactMode;
  kakaoEnabled: boolean;
  kakaoUrl: string;
  kakaoLabel: string;
  phoneEnabled: boolean;
  phoneNumber: string;
  phoneLabel: string;
  formEnabled: boolean;
  formLabel: string;
};
