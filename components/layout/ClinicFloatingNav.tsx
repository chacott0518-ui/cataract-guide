"use client";

import { useEffect, useState } from "react";

import { ClinicDirectionsLink } from "@/components/content/ClinicDirectionsLink";
import { CLINIC } from "@/config/clinic";
import { CONTACT } from "@/config/contact";

/**
 * PC·Mobile 공통 하단 floating 5:
 * 전화상담 / 상담신청 / 카카오상담 / 온라인예약 / TOP
 */
export function ClinicFloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
    <nav
      className={`cg-float-nav ${visible ? "is-visible" : ""}`}
      aria-label="빠른 상담"
      aria-hidden={visible ? undefined : true}
    >
      {CONTACT.phoneEnabled ? (
        <a
          className="cg-float-nav__item"
          href={CONTACT.phoneNumber}
          aria-label={`${CONTACT.phoneLabel} ${CLINIC.phoneDisplay}`}
        >
          <span className="cg-float-nav__label">{CONTACT.phoneLabel}</span>
        </a>
      ) : null}
      {CONTACT.consultEnabled ? (
        <a
          className="cg-float-nav__item"
          href={CONTACT.consultUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cg-float-nav__label">{CONTACT.consultLabel}</span>
        </a>
      ) : null}
      {CONTACT.kakaoEnabled ? (
        <a
          className="cg-float-nav__item cg-float-nav__item--kakao"
          href={CONTACT.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cg-float-nav__label">{CONTACT.kakaoLabel}</span>
        </a>
      ) : null}
      {CONTACT.bookingEnabled ? (
        <a
          className="cg-float-nav__item"
          href={CONTACT.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cg-float-nav__label">{CONTACT.bookingLabel}</span>
        </a>
      ) : null}
      <button
        type="button"
        className="cg-float-nav__item"
        onClick={scrollTop}
        aria-label="맨 위로"
      >
        <span className="cg-float-nav__label">TOP</span>
      </button>
    </nav>

    <nav className="cg-mobile-dock" aria-label="모바일 빠른 메뉴">
      <a
        className="cg-mobile-dock__item cg-mobile-dock__item--book"
        href={CONTACT.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="cg-mobile-dock__icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
        <span>상담예약</span>
      </a>
      <a
        className="cg-mobile-dock__item cg-mobile-dock__item--tel"
        href={CONTACT.phoneNumber}
        aria-label={`전화상담 ${CLINIC.phoneDisplay}`}
      >
        <svg className="cg-mobile-dock__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>전화상담</span>
      </a>
      <a
        className="cg-mobile-dock__item cg-mobile-dock__item--kakao"
        href={CONTACT.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="cg-mobile-dock__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
        </svg>
        <span>카톡상담</span>
      </a>
      <ClinicDirectionsLink
        className="cg-mobile-dock__item cg-mobile-dock__item--map"
        aria-label="오시는길 — 병원 정보로 이동"
      >
        <svg className="cg-mobile-dock__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        <span>오시는길</span>
      </ClinicDirectionsLink>
      <button
        type="button"
        className="cg-mobile-dock__item cg-mobile-dock__item--top"
        onClick={scrollTop}
        aria-label="맨 위로"
      >
        <svg className="cg-mobile-dock__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        <span>TOP</span>
      </button>
    </nav>
    </>
  );
}
