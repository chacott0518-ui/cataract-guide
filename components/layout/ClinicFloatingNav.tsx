"use client";

import { useEffect, useState } from "react";

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
    <nav
      className={`cg-float-nav ${visible ? "is-visible" : ""}`}
      aria-label="빠른 상담"
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
  );
}
