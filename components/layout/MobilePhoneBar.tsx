import { CONTACT } from "@/config/contact";

export function MobileContactBar() {
  if (!CONTACT.enabled) return null;

  return (
    <div className="cg-mobile-bar" role="navigation" aria-label="빠른 문의">
      {CONTACT.kakaoEnabled ? (
        <a
          className="cg-mobile-bar__btn cg-mobile-bar__btn--kakao"
          href={CONTACT.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={CONTACT.kakaoLabel}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7-.1.5-.6 2.1-.7 2.4 0 0-.1.4.2.3.3-.1 3.2-2.1 3.7-2.5.7.1 1.4.2 2.2.2 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
          </svg>
          {CONTACT.kakaoLabel}
        </a>
      ) : null}
      {CONTACT.phoneEnabled ? (
        <a
          className="cg-mobile-bar__btn cg-mobile-bar__btn--phone"
          href={CONTACT.phoneNumber}
          aria-label={`${CONTACT.phoneLabel} ${CONTACT.phoneNumber.replace("tel:", "")}`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
          </svg>
          {CONTACT.phoneLabel}
        </a>
      ) : null}
    </div>
  );
}

/** 하위 호환 */
export const MobilePhoneBar = MobileContactBar;
