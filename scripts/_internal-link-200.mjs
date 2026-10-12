/**
 * All internal <a href> from sitemap HTML must resolve to HTTP 200 (no redirect).
 * Usage: node scripts/_internal-link-200.mjs http://127.0.0.1:3000
 */
const base = (process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");

function decode(v) {
  return v
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const sitemapXml = await (await fetch(`${base}/sitemap.xml`)).text();
const pages = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
  const u = new URL(decode(m[1]));
  return `${base}${u.pathname}${u.search}`;
});

const hrefs = new Set();
for (const page of pages) {
  const html = await (await fetch(page)).text();
  for (const m of html.matchAll(/<a\b[^>]*\bhref=["']([^"'#][^"']*)["']/gi)) {
    let h = decode(m[1]).trim();
    if (!h || h.startsWith("mailto:") || h.startsWith("tel:") || h.startsWith("javascript:"))
      continue;
    if (h.startsWith("http://") || h.startsWith("https://")) {
      try {
        const u = new URL(h);
        if (
          !u.hostname.includes("127.0.0.1") &&
          !u.hostname.includes("localhost") &&
          !u.hostname.includes("cataractguide")
        )
          continue;
        h = u.pathname || "/";
      } catch {
        continue;
      }
    }
    if (!h.startsWith("/")) continue;
    h = h.split("?")[0].split("#")[0] || "/";
    if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
    hrefs.add(h);
  }
}

const fails = [];
const ok = [];
for (const path of [...hrefs].sort()) {
  const url = `${base}${path === "/" ? "/" : path.split("/").map(encodeURIComponent).join("/").replace(/%2F/g, "/")}`;
  // encode each segment properly
  const enc =
    path === "/"
      ? `${base}/`
      : `${base}${path
          .split("/")
          .map((seg) => (seg ? encodeURIComponent(seg) : ""))
          .join("/")}`;
  const res = await fetch(enc, { redirect: "manual" });
  if (res.status >= 300 && res.status < 400) {
    fails.push(`REDIRECT ${path} -> ${res.headers.get("location")} (${res.status})`);
  } else if (!res.ok) {
    fails.push(`HTTP ${res.status} ${path}`);
  } else {
    ok.push(path);
  }
}

console.log(`INTERNAL_HREFS ${hrefs.size}`);
console.log(`OK ${ok.length}`);
console.log(`FAILS ${fails.length}`);
for (const f of fails) console.log(`FAIL  ${f}`);
process.exit(fails.length ? 1 : 0);
