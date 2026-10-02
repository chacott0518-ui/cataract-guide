#!/usr/bin/env node
/**
 * HOME HTML 감사 — 로컬 start 또는 실서버.
 * Usage:
 *   node scripts/home-html-audit.mjs http://localhost:3000
 *   node scripts/home-html-audit.mjs https://cataractguide.co.kr
 */
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

const FORBIDDEN_WORDS = [
  "제휴",
  "광고 제휴",
  "콘텐츠 제휴",
  "개발자",
  "테스트",
  "샘플",
  "더미",
  "placeholder",
  "TODO",
  "FIXME",
  "localhost",
  "Vercel",
  "Next.js",
  "PageSpeed",
  "JSON-LD",
  "SEO 정책",
  "최적화 정책",
  "hydration",
  "Schema",
  "스키마",
];

/** short tokens — word-boundary check on visible text only */
const FORBIDDEN_TOKENS = [
  { word: "LCP", re: /(?:^|[^A-Za-z0-9_])LCP(?:[^A-Za-z0-9_]|$)/ },
  { word: "SSR", re: /(?:^|[^A-Za-z0-9_])SSR(?:[^A-Za-z0-9_]|$)/ },
  { word: "_next", re: /_next/ },
  { word: "console", re: /(?:^|[^A-Za-z0-9_])console(?:[^A-Za-z0-9_]|$)/i },
  { word: "API", re: /(?:^|[^A-Za-z0-9_])API(?:[^A-Za-z0-9_]|$)/ },
  { word: "route", re: /(?:^|[^A-Za-z0-9_])route(?:[^A-Za-z0-9_]|$)/i },
  { word: "build", re: /(?:^|[^A-Za-z0-9_])build(?:[^A-Za-z0-9_]|$)/i },
  { word: "MD", re: /(?:^|[^A-Za-z0-9_가-힣])MD(?:[^A-Za-z0-9_가-힣]|$)/ },
];

function decode(v) {
  return v
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function pick(html, re) {
  const m = html.match(re);
  return m ? decode((m[1] || m[2] || "").trim()) : null;
}

function count(html, re) {
  return (html.match(re) || []).length;
}

/** Visible user text: strip scripts/styles/tags (keeps text nodes + meta content separately) */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
}

const errors = [];
const warns = [];
const pass = [];

function ok(msg) {
  pass.push(msg);
}
function fail(msg) {
  errors.push(msg);
}
function warn(msg) {
  warns.push(msg);
}

const res = await fetch(`${base}/`, { redirect: "follow" });
if (!res.ok) {
  console.error(`FAIL fetch ${base}/ status=${res.status}`);
  process.exit(1);
}
const html = await res.text();
const visible = visibleText(html);

const title = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
const desc =
  pick(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i,
  ) ||
  pick(
    html,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i,
  );
const canonical =
  pick(
    html,
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
  ) ||
  pick(
    html,
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i,
  );
const robots = pick(
  html,
  /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i,
);
const h1Count = count(html, /<h1[\s>]/gi);
const h1Text = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)
  ?.replace(/<[^>]+>/g, "")
  .trim();

if (title?.startsWith("노안백내장")) ok(`title starts with 노안백내장: ${title}`);
else fail(`title: ${title}`);

if (desc && desc.includes("노안") && desc.includes("백내장") && desc.length > 40)
  ok(`description present (${desc.length} chars)`);
else fail(`description weak: ${desc}`);

if (
  canonical?.includes("cataractguide.co.kr") ||
  canonical?.includes("localhost")
)
  ok(`canonical: ${canonical}`);
else fail(`canonical: ${canonical}`);

if (robots && /index/i.test(robots) && /follow/i.test(robots))
  ok(`robots: ${robots}`);
else warn(`robots: ${robots}`);

if (h1Count === 1 && h1Text === "노안백내장") ok("H1 exact 노안백내장 ×1");
else fail(`H1 count=${h1Count} text=${h1Text}`);

const cardTitles = [
  "노안백내장 수술비용",
  "노안백내장 회복기간",
  "노안백내장 주의사항",
  "노안백내장 병원 선택",
  "노안백내장 렌즈 종류",
  "노안백내장 FAQ",
];
for (const t of cardTitles) {
  if (html.includes(t)) ok(`card visible: ${t}`);
  else fail(`card missing: ${t}`);
}
if (html.includes("노안백내장 후기") && !html.includes("노안백내장 렌즈 종류"))
  fail("card5 still 후기 without 렌즈 종류");
else if (
  html.includes("/노안백내장-단초점-다초점-차이") &&
  html.includes("노안백내장 렌즈 종류")
)
  ok("card5 lens href+title");
else warn("card5 lens href/title partial");

const heroRaw = "/images/노안백내장/노안백내장-hero-mobile-lcp.webp";
const hasHeroPreload =
  /rel=["']preload["'][^>]*href=["'][^"']*hero-mobile-lcp\.webp["']/i.test(
    html,
  ) ||
  /href=["'][^"']*hero-mobile-lcp\.webp["'][^>]*rel=["']preload["']/i.test(
    html,
  );
const hasHeroImg =
  html.includes(`src="${heroRaw}"`) ||
  /cg-home-feature__img--mobile[^>]*src=["'][^"']*hero-mobile-lcp\.webp["']/i.test(
    html,
  );
if (hasHeroPreload && hasHeroImg)
  ok("mobile hero preload/src static hero-mobile-lcp.webp");
else
  fail(
    `mobile hero static mismatch preload=${hasHeroPreload} img=${hasHeroImg}`,
  );

if (/cg-home-feature__img--mobile[^>]*src=["']\/_next\/image/i.test(html))
  fail("mobile hero img still via /_next/image");
else ok("HOME mobile hero uses static img src");

if (
  /rel=["']preload["'][^>]*href=["'][^"']*\/_next\/image/i.test(html) ||
  /href=["'][^"']*\/_next\/image[^"']*["'][^>]*rel=["']preload["']/i.test(html)
)
  fail("preload uses /_next/image");
else ok("no /_next/image preload");

if (
  /rel=["']preload["'][^>]*href=["'][^"']*w=3840/i.test(html) ||
  /href=["'][^"']*w=3840[^"']*["'][^>]*rel=["']preload["']/i.test(html)
)
  fail("preload uses w=3840");
else ok("no w=3840 preload");

/** Fail only on font-file preload (woff2) or as=font — desktop.css+media is OK */
const fontPreloadBad = [...html.matchAll(/<link[^>]+rel=["']preload["'][^>]*>/gi)]
  .map((m) => m[0])
  .some((tag) => {
    if (/as=["']font["']/i.test(tag)) return true;
    if (/Pretendard[^"']*\.woff2/i.test(tag)) return true;
    if (
      /pretendard/i.test(tag) &&
      !/media=["'][^"']*min-width:\s*768px/i.test(tag)
    )
      return true;
    return false;
  });
if (fontPreloadBad) fail("mobile Pretendard/font preload present");
else ok("no mobile Pretendard/font-file preload");

const napNeedles = [
  "에스앤비안과의원",
  "S&B안과",
  "02-3446-6666",
  "논현로 842",
  "송은석",
  "안과전문의",
  "작성일",
  "수정일",
];
for (const n of napNeedles) {
  if (html.includes(n)) ok(`visible NAP/E-E-A-T: ${n}`);
  else fail(`missing visible: ${n}`);
}

const ldBlocks = [
  ...html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  ),
].map((m) => m[1]);
const ldJoined = ldBlocks.join("\n");
const types = [
  "WebSite",
  "MedicalWebPage",
  "MedicalClinic",
  "Organization",
  "BreadcrumbList",
  "FAQPage",
  "ItemList",
  "Physician",
];
for (const t of types) {
  if (
    ldJoined.includes(`"@type":"${t}"`) ||
    ldJoined.includes(`"@type": "${t}"`)
  )
    ok(`structured data ${t}`);
  else fail(`structured data missing ${t}`);
}

if (
  ldJoined.includes('"numberOfItems":6') ||
  ldJoined.includes('"numberOfItems": 6')
)
  ok("ItemList numberOfItems=6");
else warn("ItemList numberOfItems not found as 6");

if (
  html.includes("노안과 백내장은 같은 질환인가요?") &&
  html.includes("약이 노안백내장을 없앨 수 있나요?")
)
  ok("HOME FAQ first/last questions in HTML");
else fail("HOME FAQ questions incomplete in HTML");

if (
  html.includes('media="(min-width: 768px)"') &&
  html.includes("pretendard-desktop.css")
)
  ok("Desktop-only Pretendard stylesheet link present");
else warn("Font strategy not verified in HTML");

/** forbiddenWords — visible text + title/description (not script/JSON) */
const metaBundle = `${title || ""} ${desc || ""} ${visible}`;
let forbiddenHits = 0;
for (const w of FORBIDDEN_WORDS) {
  if (metaBundle.includes(w)) {
    fail(`forbiddenWords visible: ${w}`);
    forbiddenHits += 1;
  }
}
for (const { word, re } of FORBIDDEN_TOKENS) {
  if (re.test(metaBundle)) {
    fail(`forbiddenWords visible: ${word}`);
    forbiddenHits += 1;
  }
}
if (forbiddenHits === 0) ok(`forbiddenWords clean (${FORBIDDEN_WORDS.length + FORBIDDEN_TOKENS.length} rules)`);

console.log(`\n=== HOME HTML AUDIT ${base}/ ===`);
console.log(`PASS ${pass.length} | WARN ${warns.length} | FAIL ${errors.length}`);
for (const m of pass) console.log(`PASS  ${m}`);
for (const m of warns) console.log(`WARN  ${m}`);
for (const m of errors) console.log(`FAIL  ${m}`);
process.exit(errors.length ? 1 : 0);
