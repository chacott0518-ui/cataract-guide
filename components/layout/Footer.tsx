import Link from "next/link";

import { LEGAL } from "@/config/legal";
import { topicConfig } from "@/config/topic";

const legalLinks = [
  { key: "privacyPolicy", label: "개인정보 처리방침" },
  { key: "terms", label: "이용약관" },
  { key: "nonCoveredFees", label: "비급여 진료비 안내" },
  { key: "operatorDisclosure", label: "운영자 정보" },
  { key: "cookieNotice", label: "쿠키 안내" },
] as const;

export function Footer() {
  const enabledLinks = legalLinks.filter((item) => {
    const doc = LEGAL[item.key];
    return doc.enabled && doc.href;
  });

  return (
    <footer className="cg-footer">
      <div className="cg-container">
        <p className="cg-footer__copy">© 2026 {topicConfig.siteName}</p>
        <p className="cg-footer__note">
          본 콘텐츠는 일반적인 건강정보 제공을 목적으로 하며,
          <br />
          개인의 진단이나 치료를 대신하지 않습니다.
          <br />
          증상과 상태에 따라 의료진의 진료가 필요할 수 있습니다.
        </p>
        {enabledLinks.length > 0 ? (
          <nav className="cg-footer__legal" aria-label="법률 문서">
            {enabledLinks.map((item) => (
              <Link key={item.key} href={LEGAL[item.key].href!}>
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </footer>
  );
}
