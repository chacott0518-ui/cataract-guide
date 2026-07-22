import { ADVERTISING } from "@/config/advertising";
import { CONTACT } from "@/config/contact";

type PartnershipCTAProps = {
  variant?: "top" | "bottom";
};

export function PartnershipCTA({ variant = "top" }: PartnershipCTAProps) {
  const copy = variant === "bottom" ? ADVERTISING.bottom : ADVERTISING.top;

  if (!CONTACT.kakaoEnabled) return null;

  return (
    <aside className="cg-partner-cta" aria-label="콘텐츠 제휴 문의">
      <div>
        <p className="cg-partner-cta__label">{copy.label}</p>
        <h2>{copy.headline}</h2>
      </div>
      <a
        className="cg-action-btn"
        href={ADVERTISING.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy.button}
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}

/** 하위 호환 */
export function AdInquiryBanner() {
  return <PartnershipCTA variant="bottom" />;
}
