/**
 * One-off anchor concentration audit for 노안백내장.
 * Usage: node scripts/_anchor-audit.mjs http://127.0.0.1:3000
 */
const base = (process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");

const OWNER = "/";
const ALLOWED_SUB = new Map([
  ["노안백내장 수술비용", "/노안백내장-수술비용"],
  ["노안백내장 회복기간", "/노안백내장-회복기간"],
  ["노안백내장 주의사항", "/노안백내장-주의사항"],
  ["노안백내장 병원 선택", "/노안백내장-병원선택"],
  ["노안백내장 병원선택", "/노안백내장-병원선택"],
  ["노안백내장 렌즈 종류", "/노안백내장-단초점-다초점-차이"],
  ["노안백내장 FAQ", "/노안백내장-faq"],
  ["노안백내장 CataractGuide", "/"],
]);

function decode(v) {
  return v
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalizePath(href, pagePath) {
  if (!href) return "";
  let h = decode(href).trim();
  if (h.startsWith("#") || h.startsWith("mailto:") || h.startsWith("tel:"))
    return h;
  if (h.startsWith("http://") || h.startsWith("https://")) {
    try {
      const u = new URL(h);
      if (!u.hostname.includes("127.0.0.1") && !u.hostname.includes("localhost") && !u.hostname.includes("cataractguide")) {
        return h; // external
      }
      h = u.pathname || "/";
    } catch {
      return h;
    }
  }
  if (!h.startsWith("/")) {
    // relative
    const baseDir = pagePath.endsWith("/") ? pagePath : pagePath.replace(/\/[^/]*$/, "/");
    h = new URL(h, `https://x.local${baseDir}`).pathname;
  }
  // strip query/hash
  h = h.split("?")[0].split("#")[0] || "/";
  if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
  return h || "/";
}

function stripTags(s) {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function classify(text, href) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t === "노안백내장") return { kind: "exact", ok: href === OWNER, expect: OWNER };
  if (t === "노안백내장 CataractGuide")
    return { kind: "brand", ok: href === OWNER, expect: OWNER };
  for (const [label, path] of ALLOWED_SUB) {
    if (t === label) return { kind: "sub-exact", ok: href === path, expect: path };
  }
  if (t.includes("노안백내장") && (href === "/의료정보" || href.endsWith("/의료정보")))
    return { kind: "hub-risk", ok: false, expect: "의료정보 문구에서 노안백내장 제거" };
  if (t.startsWith("노안백내장 ") || t.includes("노안백내장"))
    return { kind: "partial", ok: true, expect: "(partial allowed if not exact)" };
  return { kind: "other", ok: true, expect: "-" };
}

const sitemapXml = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
  // sitemap may already percent-encode Korean paths — decode for display, fetch via absolute loc
  const absolute = decode(m[1]);
  const u = new URL(absolute);
  return {
    absolute: `${base}${u.pathname}${u.search}`,
    path: decodeURIComponent(u.pathname || "/"),
  };
});

console.log(`SITEMAP_URLS ${urls.length}`);

const rows = [];
const fails = [];
const exactTargets = new Map();
const statusByPath = new Map();

for (const { absolute, path: pagePath } of urls) {
  const res = await fetch(absolute, { redirect: "manual" });
  statusByPath.set(pagePath, res.status);
  if (res.status >= 300 && res.status < 400) {
    fails.push(`REDIRECT ${pagePath} -> ${res.headers.get("location")} status=${res.status}`);
    continue;
  }
  if (!res.ok) {
    fails.push(`HTTP ${res.status} ${pagePath}`);
    continue;
  }
  const html = await res.text();
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const inner = m[2];
    const hm = attrs.match(/\bhref=["']([^"']+)["']/i);
    if (!hm) continue;
    const text = stripTags(inner);
    if (!text.includes("노안백내장")) continue;
    const href = normalizePath(hm[1], pagePath);
    if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
      continue;
    const { kind, ok, expect } = classify(text, href);
    rows.push({ page: pagePath, text, href, kind, ok, expect });
    if (kind === "exact") {
      exactTargets.set(href, (exactTargets.get(href) || 0) + 1);
      if (!ok) fails.push(`EXACT_ANCHOR_FAIL page=${pagePath} text="${text}" href=${href} expect=${expect}`);
    }
    if (kind === "hub-risk" || (kind === "sub-exact" && !ok)) {
      fails.push(`${kind.toUpperCase()}_FAIL page=${pagePath} text="${text}" href=${href} expect=${expect}`);
    }
  }
}

console.log("\n=== ANCHORS CONTAINING 노안백내장 ===");
for (const r of rows) {
  console.log(
    `${r.ok ? "OK" : "FAIL"}\t${r.kind}\t${r.page}\t→ ${r.href}\t"${r.text.slice(0, 80)}"`,
  );
}

console.log("\n=== EXACT 노안백내장 TARGETS ===");
for (const [href, n] of exactTargets) console.log(`${n}\t${href}`);

console.log(`\nTOTAL_MATCHES ${rows.length}`);
console.log(`FAILS ${fails.length}`);
for (const f of fails) console.log(`FAIL  ${f}`);

// Source-level: find exact anchor "노안백내장" in TSX that is not href="/"
import fs from "node:fs";
import path from "node:path";

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (["node_modules", ".next", "public"].includes(e.name)) continue;
      walk(p, out);
    } else if (/\.(tsx|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

const srcFails = [];
for (const f of walk(".")) {
  const t = fs.readFileSync(f, "utf8");
  // breadcrumb / Link patterns with exact 노안백내장
  const patterns = [
    /label:\s*["']노안백내장["']\s*,\s*href:\s*["']([^"']+)["']/g,
    /href:\s*["']([^"']+)["']\s*,\s*(?:label|anchor|children):\s*["']노안백내장["']/g,
    /\{\s*label:\s*["']노안백내장["']\s*,\s*href:\s*["']([^"']+)["']\s*\}/g,
    /<Link[^>]*href=["']([^"']+)["'][^>]*>\s*노안백내장\s*<\/Link>/g,
    /items=\{\[\{[^}]*label:\s*["']노안백내장["'][^}]*href:\s*["']([^"']+)["']/g,
  ];
  for (const re of patterns) {
    let mm;
    while ((mm = re.exec(t))) {
      const href = mm[1];
      if (href && href !== "/") {
        srcFails.push(`${f}: exact label 노안백내장 -> ${href}`);
      }
    }
  }
  // InfoHub breadcrumb style
  if (/label:\s*["']노안백내장["']/.test(t) && /href:\s*["'](?!\/["'])/.test(t)) {
    // checked above
  }
  // hubContextLink anchor
  const hub = [...t.matchAll(/hubContextLink:\s*\{[\s\S]*?anchor:\s*["']([^"']+)["'][\s\S]*?href:\s*["']([^"']+)["']/g)];
  for (const h of hub) {
    if (h[1] === "노안백내장" && h[2] !== "/")
      srcFails.push(`${f}: hubContextLink exact -> ${h[2]}`);
  }
  // medical info anchors containing keyword
  if (/의료정보\s*전체보기/.test(t) === false && /노안백내장\s*의료정보\s*전체보기/.test(t)) {
    srcFails.push(`${f}: still has 노안백내장 의료정보 전체보기`);
  }
}

console.log("\n=== SOURCE EXACT ANCHOR CHECK ===");
if (srcFails.length === 0) console.log("SOURCE_OK");
else srcFails.forEach((s) => console.log(`SRC_FAIL ${s}`));

process.exit(fails.length || srcFails.length ? 1 : 0);
