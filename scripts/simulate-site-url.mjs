/**
 * getSiteUrl 우선순위 시뮬레이션.
 * lib/site-url.ts와 동일한 우선순위 정책을 인라인으로 검증한다.
 *
 * node scripts/simulate-site-url.mjs
 */

function isLocalhostUrl(value) {
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

function normalizeSiteUrl(value) {
  const trimmed = value.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  const parsed = new URL(withProtocol);
  const path = parsed.pathname.replace(/\/$/, "");
  const normalizedPath = path === "/" ? "" : path;
  return `${parsed.protocol}//${parsed.host}${normalizedPath}`;
}

function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const raw =
    fromEnv ||
    (fromVercel
      ? fromVercel.startsWith("http://") || fromVercel.startsWith("https://")
        ? fromVercel
        : `https://${fromVercel}`
      : undefined);

  if (raw) {
    const normalized = normalizeSiteUrl(raw);
    if (isLocalhostUrl(normalized) && process.env.VERCEL_ENV === "production") {
      throw new Error("localhost blocked on vercel production");
    }
    return normalized;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  throw new Error("missing site url in production");
}

const saved = { ...process.env };

function restoreEnv() {
  for (const key of Object.keys(process.env)) {
    if (!(key in saved)) delete process.env[key];
  }
  Object.assign(process.env, saved);
}

function applyEnv(env) {
  for (const key of [
    "NODE_ENV",
    "NEXT_PUBLIC_SITE_URL",
    "VERCEL_PROJECT_PRODUCTION_URL",
    "VERCEL_ENV",
  ]) {
    if (env[key] === undefined) delete process.env[key];
    else process.env[key] = env[key];
  }
}

const cases = [
  {
    name: "production missing all",
    env: {
      NODE_ENV: "production",
      NEXT_PUBLIC_SITE_URL: undefined,
      VERCEL_PROJECT_PRODUCTION_URL: undefined,
      VERCEL_ENV: undefined,
    },
    throws: true,
  },
  {
    name: "production vercel project url",
    env: {
      NODE_ENV: "production",
      NEXT_PUBLIC_SITE_URL: undefined,
      VERCEL_PROJECT_PRODUCTION_URL: "example.vercel.app",
    },
    expect: "https://example.vercel.app",
  },
  {
    name: "NEXT_PUBLIC wins over vercel",
    env: {
      NODE_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "https://example.com",
      VERCEL_PROJECT_PRODUCTION_URL: "example.vercel.app",
    },
    expect: "https://example.com",
  },
  {
    name: "development fallback",
    env: {
      NODE_ENV: "development",
      NEXT_PUBLIC_SITE_URL: undefined,
      VERCEL_PROJECT_PRODUCTION_URL: undefined,
    },
    expect: "http://localhost:3000",
  },
  {
    name: "vercel production rejects localhost",
    env: {
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    },
    throws: true,
  },
];

let failed = 0;
try {
  for (const testCase of cases) {
    applyEnv(testCase.env);
    try {
      const result = getSiteUrl();
      if (testCase.throws) {
        console.log(`FAIL ${testCase.name}: expected throw, got ${result}`);
        failed += 1;
      } else if (result !== testCase.expect) {
        console.log(
          `FAIL ${testCase.name}: expected ${testCase.expect}, got ${result}`,
        );
        failed += 1;
      } else {
        console.log(`PASS ${testCase.name}: ${result}`);
      }
    } catch {
      if (!testCase.throws) {
        console.log(`FAIL ${testCase.name}: unexpected throw`);
        failed += 1;
      } else {
        console.log(`PASS ${testCase.name}: threw`);
      }
    }
  }
} finally {
  restoreEnv();
}

process.exit(failed ? 1 : 0);
