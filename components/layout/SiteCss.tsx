"use client";

/**
 * Full site CSS (globals + header).
 * Loaded via client bundle so the ~95KB stylesheet is not render-blocking
 * on first paint. First viewport relies on CRITICAL_CSS in layout <head>.
 */
import "@/app/globals.css";
import "@/styles/header.css";

export function SiteCss() {
  return null;
}
