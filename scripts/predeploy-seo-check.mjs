#!/usr/bin/env node
/**
 * 배포 전 SEO 기술 검사.
 *
 * 사용:
 *   SITE_URL=http://localhost:3010 ALLOW_LOCALHOST=1 npm run verify:seo
 *   SITE_URL=https://example.com npm run verify:seo
 *   node scripts/predeploy-seo-check.mjs https://example.com
 */

const SITE_URL = (
  process.env.SITE_URL ||
  process.argv[2] ||
  ""
).replace(/\/$/, "");
const ALLOW_LOCALHOST = process.env.ALLOW_LOCALHOST === "1";

const PUBLIC_PATHS = [
  "/",
  "/노안백내장-수술비용",
  "/노안백내장-회복기간",
  "/노안백내장-주의사항",
  "/노안백내장-병원선택",
  "/노안백내장-후기",
  "/노안백내장-faq",
  "/노안백내장-자주묻는질문",
];

const LEGACY_PATH = "/노안백내장-수술비";
const FINAL_COST_PATH = "/노안백내장-수술비용";

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function metaContent(html, key) {
  const re = new RegExp(
    `<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["']`,
    "i",
  );
  const match = html.match(re);
  return match ? decodeHtml(match[1] || match[2]) : null;
}

function titleOf(html) {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match ? decodeHtml(match[1].trim()) : null;
}

function canonicalOf(html) {
  const match =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  return match ? decodeHtml(match[1]) : null;
}

function countH1(html) {
  return (html.match(/<h1[\s>]/gi) || []).length;
}

function parseJsonLd(html) {
  const blocks = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  const items = [];
  for (const block of blocks) {
    try {
      const data = JSON.parse(block[1]);
      if (Array.isArray(data)) items.push(...data);
      else if (data && Array.isArray(data["@graph"])) items.push(...data["@graph"]);
      else if (data) items.push(data);
    } catch {
      fail("JSON-LD parse 실패");
    }
  }
  return items;
}

function pathOfUrl(urlString) {
  try {
    const url = new URL(urlString);
    const path = decodeURIComponent(url.pathname).replace(/\/$/, "") || "/";
    return path === "" ? "/" : path;
  } catch {
    return null;
  }
}

function assertNoLocalhost(label, value) {
  if (!value) return;
  if (/localhost|127\.0\.0\.1|0\.0\.0\.0/i.test(value)) {
    if (ALLOW_LOCALHOST) {
      warn(`${label}에 localhost 포함(허용 모드): ${value}`);
    } else {
      fail(`${label}에 localhost가 포함됨: ${value}`);
    }
  }
}

async function fetchText(path, options = {}) {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const response = await fetch(url, {
    redirect: options.redirect || "follow",
    headers: { Accept: "text/html,*/*" },
  });
  const text = options.skipBody ? "" : await response.text();
  return { response, text, url };
}

async function checkPage(path) {
  const { response, text } = await fetchText(path);
  if (response.status !== 200) {
    fail(`${path}: HTTP ${response.status}`);
    return;
  }

  const title = titleOf(text);
  const description = metaContent(text, "description");
  const canonical = canonicalOf(text);
  const robots = metaContent(text, "robots");
  const ogTitle = metaContent(text, "og:title");
  const ogDescription = metaContent(text, "og:description");
  const ogUrl = metaContent(text, "og:url");
  const ogImage = metaContent(text, "og:image");
  const h1Count = countH1(text);
  const jsonLd = parseJsonLd(text);

  if (!title) fail(`${path}: title 없음`);
  if (!description) fail(`${path}: description 없음`);
  if (!canonical) fail(`${path}: canonical 없음`);
  if (h1Count !== 1) fail(`${path}: H1 개수 ${h1Count}`);
  if (!ogTitle) fail(`${path}: og:title 없음`);
  if (!ogDescription) fail(`${path}: og:description 없음`);
  if (!ogUrl) fail(`${path}: og:url 없음`);
  if (!ogImage) fail(`${path}: og:image 없음`);
  if (robots && /noindex/i.test(robots)) fail(`${path}: noindex`);

  if (canonical) {
    const canonicalPath = pathOfUrl(canonical);
    const expected = path === "/" ? "/" : path;
    if (canonicalPath !== expected) {
      fail(`${path}: canonical 경로 불일치 (${canonicalPath})`);
    }
    assertNoLocalhost(`${path} canonical`, canonical);
  }

  assertNoLocalhost(`${path} og:url`, ogUrl);
  assertNoLocalhost(`${path} og:image`, ogImage);
  if (ogImage && !/^https?:\/\//i.test(ogImage)) {
    fail(`${path}: og:image가 절대 URL이 아님`);
  }

  const types = jsonLd.map((item) => item["@type"]).filter(Boolean);
  if (path === "/") {
    if (!types.includes("WebSite")) fail(`${path}: WebSite schema 없음`);
  } else {
    if (!types.includes("WebPage") && !types.includes("Article")) {
      fail(`${path}: WebPage/Article schema 없음`);
    }
    if (!types.includes("BreadcrumbList")) {
      fail(`${path}: BreadcrumbList 없음`);
    }
  }

  for (const item of jsonLd) {
    const serialized = JSON.stringify(item);
    assertNoLocalhost(`${path} JSON-LD`, serialized);
  }

  if (path === "/노안백내장-자주묻는질문") {
    const faq = jsonLd.find((item) => item["@type"] === "FAQPage");
    const count = faq?.mainEntity?.length ?? 0;
    if (count !== 30) {
      fail(`${path}: FAQPage mainEntity ${count}개 (기대 30)`);
    }
    const screenCount = (text.match(/class="[^"]*cg-faq-item/g) || []).length;
    if (screenCount > 0 && screenCount !== 30 && screenCount !== 60) {
      // RSC duplication can inflate counts; prefer schema as source of truth
      warn(`${path}: 화면 FAQ 마커 수 ${screenCount} (schema ${count})`);
    }
  }

  if (/overflow-x:\s*scroll|overflow:\s*scroll/i.test(text)) {
    warn(`${path}: inline overflow scroll 스타일 탐지`);
  }
}

async function checkSitemap() {
  const { response, text } = await fetchText("/sitemap.xml");
  if (response.status !== 200) {
    fail(`/sitemap.xml: HTTP ${response.status}`);
    return;
  }
  assertNoLocalhost("sitemap", text);
  for (const path of PUBLIC_PATHS) {
    const encoded = encodeURI(path);
    const plain = path;
    if (!text.includes(plain) && !text.includes(encoded) && !text.includes(encodeURIComponent(path.slice(1)))) {
      // loc may contain raw unicode path
      const ok = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].some((m) => {
        try {
          return pathOfUrl(m[1]) === path;
        } catch {
          return false;
        }
      });
      if (!ok) fail(`sitemap에 ${path} 없음`);
    }
  }
  if (
    [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].some((m) => {
      const p = pathOfUrl(m[1]);
      return p === LEGACY_PATH;
    })
  ) {
    fail("sitemap에 legacy /노안백내장-수술비 포함");
  }
  if (/\/\d{4}\/\d{2}\/\d{2}\//.test(text)) {
    fail("sitemap에 날짜형 URL 포함");
  }
}

async function checkRobots() {
  const { response, text } = await fetchText("/robots.txt");
  if (response.status !== 200) {
    fail(`/robots.txt: HTTP ${response.status}`);
    return;
  }
  if (!/sitemap:/i.test(text)) fail("robots에 Sitemap 없음");
  assertNoLocalhost("robots", text);
  if (/disallow:\s*\/images/i.test(text)) fail("robots가 images를 차단");
}

async function checkLegacyRedirect() {
  const { response } = await fetchText(LEGACY_PATH, {
    redirect: "manual",
    skipBody: true,
  });
  if (response.status !== 308) {
    fail(`${LEGACY_PATH}: HTTP ${response.status} (기대 308)`);
    return;
  }
  const location = response.headers.get("location") || "";
  const locationPath = location.startsWith("http")
    ? pathOfUrl(location)
    : decodeURIComponent(location.split("?")[0] || "");
  if (locationPath !== FINAL_COST_PATH) {
    fail(`${LEGACY_PATH}: Location이 ${FINAL_COST_PATH}가 아님 (${location})`);
  }
}

async function main() {
  if (!SITE_URL) {
    console.error("SITE_URL 환경변수 또는 CLI 인수가 필요합니다.");
    process.exit(1);
  }
  if (!ALLOW_LOCALHOST && /localhost|127\.0\.0\.1/i.test(SITE_URL)) {
    console.error("운영 검사에서 localhost SITE_URL은 허용되지 않습니다. ALLOW_LOCALHOST=1을 사용하세요.");
    process.exit(1);
  }

  console.log(`SEO check target: ${SITE_URL}`);
  console.log(`ALLOW_LOCALHOST=${ALLOW_LOCALHOST ? "1" : "0"}`);

  for (const path of PUBLIC_PATHS) {
    await checkPage(path);
  }
  await checkSitemap();
  await checkRobots();
  await checkLegacyRedirect();

  if (warnings.length) {
    console.log("\nWARNINGS");
    for (const item of warnings) console.log(`- ${item}`);
  }

  if (errors.length) {
    console.log("\nFAILURES");
    for (const item of errors) console.log(`- ${item}`);
    console.log(`\nSEO check FAILED (${errors.length})`);
    process.exit(1);
  }

  console.log("\nSEO check PASSED");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
