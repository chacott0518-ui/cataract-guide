/**
 * Canonical·sitemap·OG·JSON-LD용 절대 URL 기준.
 *
 * 우선순위:
 * 1. NEXT_PUBLIC_SITE_URL
 * 2. VERCEL_PROJECT_PRODUCTION_URL (https:// 보정)
 * 3. development에서만 http://localhost:3000
 * 4. production에서 결정 불가 시 throw (localhost 조용한 fallback 금지)
 */

const DEV_FALLBACK = "http://localhost:3000";

export function isLocalhostUrl(value: string): boolean {
  try {
    const { hostname } = new URL(value);
    return (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0" ||
      hostname === "[::1]"
    );
  } catch {
    return false;
  }
}

export function normalizeSiteUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error("Site URL이 비어 있습니다.");
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  let parsed: URL;
  try {
    parsed = new URL(withProtocol);
  } catch {
    throw new Error(`Site URL 형식이 올바르지 않습니다: ${value}`);
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(`Site URL은 http 또는 https여야 합니다: ${value}`);
  }

  const path = parsed.pathname.replace(/\/$/, "");
  const normalizedPath = path === "/" ? "" : path;
  return `${parsed.protocol}//${parsed.host}${normalizedPath}`;
}

function resolveRawSiteUrl(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv;

  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (fromVercel) {
    return fromVercel.startsWith("http://") || fromVercel.startsWith("https://")
      ? fromVercel
      : `https://${fromVercel}`;
  }

  return undefined;
}

/**
 * 운영(Vercel production)에서는 localhost를 허용하지 않는다.
 * 로컬 `next build`/`next start`는 VERCEL_ENV가 없으므로
 * 명시적 NEXT_PUBLIC_SITE_URL=http://localhost:3000은 허용한다.
 */
function assertSiteUrlAllowed(url: string): void {
  if (!isLocalhostUrl(url)) return;

  if (process.env.VERCEL_ENV === "production") {
    throw new Error(
      "Vercel production에서 localhost Site URL은 허용되지 않습니다. NEXT_PUBLIC_SITE_URL에 실제 운영 도메인을 설정하세요.",
    );
  }

  if (
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL === "1" &&
    process.env.VERCEL_ENV === "production"
  ) {
    throw new Error(
      "production 배포에서 localhost Site URL은 허용되지 않습니다.",
    );
  }
}

export function getSiteUrl(): string {
  const raw = resolveRawSiteUrl();

  if (raw) {
    const normalized = normalizeSiteUrl(raw);
    assertSiteUrlAllowed(normalized);
    return normalized;
  }

  if (process.env.NODE_ENV === "development") {
    return DEV_FALLBACK;
  }

  throw new Error(
    "Site URL을 결정할 수 없습니다. production에서는 NEXT_PUBLIC_SITE_URL(권장) 또는 VERCEL_PROJECT_PRODUCTION_URL이 필요합니다. localhost로 조용히 fallback하지 않습니다.",
  );
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();

  if (!path || path === "/") {
    return `${base}/`;
  }

  const [pathnameAndQuery, hash = ""] = path.split("#");
  const [pathname, query = ""] = (pathnameAndQuery || "/").split("?");
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const queryPart = query ? `?${query}` : "";
  const hashPart = hash ? `#${hash}` : "";

  return `${base}${normalizedPath}${queryPart}${hashPart}`;
}
