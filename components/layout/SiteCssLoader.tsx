"use client";

import dynamic from "next/dynamic";

/**
 * Client-only shell so `ssr: false` is legal (Next App Router).
 * Full CSS loads after hydration — CRITICAL_CSS covers first viewport / LCP.
 */
const SiteCss = dynamic(
  () => import("@/components/layout/SiteCss").then((mod) => mod.SiteCss),
  { ssr: false },
);

export function SiteCssLoader() {
  return <SiteCss />;
}
