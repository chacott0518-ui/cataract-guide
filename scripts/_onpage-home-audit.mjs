/**
 * HOME on-page signals (title/H1/desc/H2/ItemList/FAQ/schema).
 * Usage: node scripts/_onpage-home-audit.mjs http://127.0.0.1:3000
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

function meta(html, name) {
  const re1 = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`,
    "i",
  );
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`,
    "i",
  );
  const m = html.match(re1) || html.match(re2);
  return m ? decode(m[1]) : "";
}

function headings(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  return [...html.matchAll(re)].map((m) =>
    m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  );
}

function visible(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const html = await (await fetch(`${base}/`)).text();
const title = decode((html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "");
const desc = meta(html, "description");
const kw = meta(html, "keywords");
const h1 = headings(html, "h1");
const h2 = headings(html, "h2");
const h3 = headings(html, "h3");
const first300 = visible(html).slice(0, 300);

const ld = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  .map((m) => {
    try {
      return JSON.parse(m[1]);
    } catch {
      return null;
    }
  })
  .filter(Boolean)
  .flatMap((x) => (Array.isArray(x) ? x : [x]));

const types = new Set(
  ld.flatMap((x) => {
    const t = x["@type"];
    return Array.isArray(t) ? t : [t];
  }),
);

const itemList = ld.find((x) => x["@type"] === "ItemList");
const faq = ld.find((x) => x["@type"] === "FAQPage");

// DOM 6 cards (main cluster) — class/href attribute order varies
const cardLinks = [
  ...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi),
].filter((m) => /cg-content-card/.test(m[1]));
const cards = cardLinks.map((m) => {
  const attrs = m[1];
  const inner = m[2];
  const href = (attrs.match(/\bhref=["']([^"']+)["']/i) || [])[1] || "";
  const t = (
    (inner.match(/cg-content-card__title[^>]*>([\s\S]*?)<\//i) || [])[1] || ""
  )
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const d = (
    (inner.match(/cg-content-card__desc--pc[^>]*>([\s\S]*?)<\//i) ||
      inner.match(/cg-content-card__desc[^>]*>([\s\S]*?)<\//i) ||
      [])[1] || ""
  )
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  let path = decode(href);
  try {
    path = path.startsWith("http") ? new URL(path).pathname : path;
  } catch {
    /* keep */
  }
  try {
    path = decodeURIComponent(path);
  } catch {
    /* keep */
  }
  return { href: path, title: t, desc: d };
});

const itemEls = itemList?.itemListElement || [];
const itemMapped = itemEls.map((i) => ({
  name: i.name || i.item?.name,
  url: i.url || i.item?.["@id"] || i.item?.url || i.item,
}));

const checks = [];
function check(name, ok, detail = "") {
  checks.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"}\t${name}${detail ? ` — ${detail}` : ""}`);
}

check("title starts with 노안백내장", title.startsWith("노안백내장"), title);
check("H1 exactly one 노안백내장", h1.length === 1 && h1[0] === "노안백내장", JSON.stringify(h1));
check("desc has 노안백내장", /노안백내장/.test(desc), desc.slice(0, 120));
check("desc has 노안/백내장 차이 signal", /차이/.test(desc), "");
check("desc has 검사", /검사/.test(desc), "");
check("desc has 렌즈", /렌즈/.test(desc), "");
check("desc has 수술 전 확인", /수술\s*전|확인/.test(desc), "");
check("desc has S&B/상담", /S&B|상담/.test(desc), "");
check("keywords present moderate", kw.split(",").filter(Boolean).length > 0 && kw.split(",").length <= 12, kw);
check("first 300 has 노안백내장", first300.includes("노안백내장"), first300.slice(0, 120));
check(
  "H2/H3 cover sub-intents",
  [...h2, ...h3].some((t) => /노안백내장|노안\s*백내장/.test(t)) &&
    [...h2, ...h3].some((t) => /렌즈/.test(t)) &&
    [...h2, ...h3].some((t) => /검사|수술비용|병원/.test(t)),
  `h2=${JSON.stringify(h2)} h3=${JSON.stringify(h3.slice(0, 12))}`,
);

const needTypes = [
  "MedicalWebPage",
  "MedicalClinic",
  "Organization",
  "Physician",
  "BreadcrumbList",
  "ItemList",
  "FAQPage",
];
for (const t of needTypes) {
  check(`schema ${t}`, types.has(t), [...types].join(","));
}

check("ItemList has 6", itemMapped.length === 6, String(itemMapped.length));
check("DOM cards found", cards.length >= 6, String(cards.length));

if (itemMapped.length && cards.length) {
  // Compare by href path
  const domHrefs = new Set(cards.map((c) => c.href.replace(/^https?:\/\/[^/]+/, "")));
  let match = 0;
  for (const it of itemMapped) {
    const u = String(it.url || "");
    const path = u.startsWith("http") ? new URL(u).pathname : u;
    if ([...domHrefs].some((h) => h === path || decodeURIComponent(h) === decodeURIComponent(path)))
      match += 1;
  }
  check("ItemList↔DOM href 1:1 coverage", match === 6, `matched=${match}`);
}

// FAQ visible vs JSON-LD
const faqQs = (faq?.mainEntity || []).map((e) => e.name || e.question).filter(Boolean);
let faqMatch = 0;
for (const q of faqQs) {
  if (visible(html).includes(q)) faqMatch += 1;
}
check(
  "FAQPage visible text match",
  faqQs.length > 0 && faqMatch === faqQs.length,
  `${faqMatch}/${faqQs.length}`,
);

console.log("\n--- TITLE ---");
console.log(title);
console.log("\n--- DESCRIPTION ---");
console.log(desc);
console.log("\n--- KEYWORDS ---");
console.log(kw);
console.log("\n--- FIRST300 ---");
console.log(first300);
console.log("\n--- ITEMLIST ---");
console.log(JSON.stringify(itemMapped, null, 2));
console.log("\n--- DOM CARDS (sample) ---");
console.log(JSON.stringify(cards.slice(0, 6), null, 2));

const fails = checks.filter((c) => !c.ok).length;
console.log(`\nSUMMARY PASS ${checks.length - fails} FAIL ${fails}`);
process.exit(fails ? 1 : 0);
