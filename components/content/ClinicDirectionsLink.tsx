"use client";

import type { MouseEvent, ReactNode } from "react";

import { CLINIC } from "@/config/clinic";

type ClinicDirectionsLinkProps = {
  children: ReactNode;
  className?: string;
  /** 접근성 라벨 오버라이드 */
  "aria-label"?: string;
};

const CLINIC_INFO_ID = "clinic-info";

/**
 * 오시는길 — 페이지에 #clinic-info 가 있으면 smooth scroll,
 * 없으면 외부 locationUrl fallback.
 */
export function ClinicDirectionsLink({
  children,
  className,
  "aria-label": ariaLabel,
}: ClinicDirectionsLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(CLINIC_INFO_ID);
    if (!target) {
      // 예외 페이지: # 대신 외부 안내로 이동
      event.preventDefault();
      window.open(CLINIC.locationUrl, "_blank", "noopener,noreferrer");
      return;
    }
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <a
      href={`#${CLINIC_INFO_ID}`}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
