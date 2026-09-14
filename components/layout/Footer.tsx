import Link from "next/link";

import { CLINIC } from "@/config/clinic";
import { LEGAL } from "@/config/legal";
import { topicConfig } from "@/config/topic";

const legalLinks = [
  { key: "privacyPolicy", label: "개인정보 처리방침" },
  { key: "terms", label: "이용약관" },
  { key: "nonCoveredFees", label: "비급여 진료비 안내" },
  { key: "operatorDisclosure", label: "운영자 정보" },
  { key: "cookieNotice", label: "쿠키 안내" },
] as const;

const FAMILY_SITES = [
  { label: "S&B안과 공식 홈페이지", href: CLINIC.officialSiteUrl },
  { label: "PerfectVision", href: "https://perfectvision.co.kr" },
  { label: "노안백내장 CataractGuide", href: "/" },
] as const;

export function Footer() {
  const enabledLinks = legalLinks.filter((item) => {
    const doc = LEGAL[item.key];
    return doc.enabled && doc.href;
  });

  return (
    <footer className="cg-footer">
      <div className="cg-container">
        <p className="cg-footer__brand">{topicConfig.siteName}</p>
        <p className="cg-footer__clinic">
          진료·상담: {CLINIC.name} ({CLINIC.legalName})
        </p>
        <p className="cg-footer__address">
          {CLINIC.address} · {CLINIC.phoneDisplay}
        </p>
        <p className="cg-footer__hours">{CLINIC.hoursNote}</p>

        <nav className="cg-footer__family" aria-label="Family Sites">
          <p className="cg-footer__family-label">Family Sites</p>
          <ul className="cg-footer__family-list">
            {FAMILY_SITES.map((site) => (
              <li key={site.href}>
                {site.href.startsWith("/") ? (
                  <Link href={site.href}>{site.label}</Link>
                ) : (
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <p className="cg-footer__note">
          본 콘텐츠는 일반적인 건강정보 제공을 목적으로 하며,
          <br />
          개인의 진단이나 치료를 대신하지 않습니다.
        </p>
        <p className="cg-footer__copy">© 2026 {topicConfig.siteName}</p>
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
