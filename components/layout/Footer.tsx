import Link from "next/link";

import { ClinicDirectionsLink } from "@/components/content/ClinicDirectionsLink";
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

  const privacy = LEGAL.privacyPolicy.enabled ? LEGAL.privacyPolicy.href : null;
  const otherLinks = enabledLinks.filter((item) => item.key !== "privacyPolicy");

  return (
    <footer className="cg-footer">
      <div className="cg-container cg-footer__grid">
        <div className="cg-footer__brandcol">
          <div className="cg-footer__brandrow">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG brand mark */}
            <img
              src={CLINIC.logoPath}
              alt={CLINIC.logoAlt}
              width={108}
              height={33}
              className="cg-footer__logo"
              loading="lazy"
              decoding="async"
            />
            <p className="cg-footer__brand">{topicConfig.siteName}</p>
          </div>
          <p className="cg-footer__note">
            본 콘텐츠는 일반적인 건강정보 제공을 목적으로 하며,
            <br />
            개인의 진단이나 치료를 대신하지 않습니다.
          </p>
          <p className="cg-footer__copy">© 2026 {topicConfig.siteName}</p>
        </div>

        <div className="cg-footer__clinic-block">
          <p className="cg-footer__col-title">병원 정보</p>
          <p className="cg-footer__clinic">
            {CLINIC.name} ({CLINIC.legalName} / {CLINIC.brandName})
          </p>
          <p className="cg-footer__address">주소: {CLINIC.address}</p>
          <p className="cg-footer__phone">
            전화: <a href={CLINIC.phoneTel}>{CLINIC.phoneDisplay}</a>
          </p>
          <p className="cg-footer__hours">진료시간: {CLINIC.hoursNote}</p>
          <p className="cg-footer__biz">
            사업자등록번호: {CLINIC.businessNumber} · 대표:{" "}
            {CLINIC.representative}
          </p>
        </div>

        <div className="cg-footer__links">
          <ul className="cg-footer__linklist">
            <li>
              <ClinicDirectionsLink>오시는길</ClinicDirectionsLink>
            </li>
            <li>
              <a
                href={CLINIC.officialSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                병원 안내
              </a>
            </li>
            <li>
              {privacy ? (
                <Link href={privacy}>개인정보처리방침</Link>
              ) : (
                <a
                  href={`${CLINIC.officialSiteUrl}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보처리방침
                </a>
              )}
            </li>
            {otherLinks.map((item) => (
              <li key={item.key}>
                <Link href={LEGAL[item.key].href!}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <details className="cg-footer__dropdown">
            <summary className="cg-footer__dropdown-btn">Family Sites</summary>
            <ul className="cg-footer__dropdown-menu">
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
          </details>
        </div>
      </div>
    </footer>
  );
}
