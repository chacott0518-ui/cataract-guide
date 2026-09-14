import { CLINIC_CTA } from "@/config/advertising";
import { CONTACT } from "@/config/contact";
import { CLINIC } from "@/config/clinic";

type ClinicConsultBannerProps = {
  variant?: "top" | "bottom";
};

/**
 * 에스앤비안과의원 진료 연결 CTA (제휴·광고 모집 문구 없음).
 */
export function ClinicConsultBanner({
  variant = "top",
}: ClinicConsultBannerProps) {
  const copy = variant === "bottom" ? CLINIC_CTA.bottom : CLINIC_CTA.top;

  return (
    <aside className="cg-partner-cta" aria-label={`${CLINIC.name} 상담 안내`}>
      <p className="cg-partner-cta__label">{copy.label}</p>
      <p className="cg-partner-cta__headline">{copy.headline}</p>
      <div className="cg-clinic-cta__actions">
        {CONTACT.phoneEnabled ? (
          <a className="cg-partner-cta__btn" href={CONTACT.phoneNumber}>
            {CONTACT.phoneLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
        {CONTACT.consultEnabled ? (
          <a
            className="cg-partner-cta__btn cg-partner-cta__btn--secondary"
            href={CONTACT.consultUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.consultLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
        {CONTACT.kakaoEnabled ? (
          <a
            className="cg-partner-cta__btn cg-partner-cta__btn--secondary"
            href={CONTACT.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.kakaoLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
        {CONTACT.bookingEnabled ? (
          <a
            className="cg-partner-cta__btn cg-partner-cta__btn--secondary"
            href={CONTACT.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.bookingLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
        {CONTACT.locationEnabled ? (
          <a
            className="cg-partner-cta__btn cg-partner-cta__btn--secondary"
            href={CONTACT.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.locationLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
      </div>
      <p className="cg-clinic-cta__phone">{CLINIC.phoneDisplay}</p>
    </aside>
  );
}

/** @deprecated ClinicConsultBanner 사용 */
export function PartnershipCTA(props: ClinicConsultBannerProps) {
  return <ClinicConsultBanner {...props} />;
}

/** @deprecated */
export function AdInquiryBanner() {
  return <ClinicConsultBanner variant="bottom" />;
}
