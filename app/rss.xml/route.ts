import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { CONTENT_PAGES, HOME_SEO } from "@/content/pages";
import { INFO_HUB_SEO } from "@/content/info/hub";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site-url";

/** sitemap과 동일한 홈 기준일 (빌드 시각으로 교체하지 않음) */
const HOME_PUB_DATE = "2026-07-22";
/** sitemap과 동일한 의료정보 허브 기준일 */
const INFO_HUB_PUB_DATE = "2026-08-12";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsoluteUrl(path: string): string {
  if (!path || path === "/") {
    return `${CANONICAL_SITE_ORIGIN}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_SITE_ORIGIN}${normalized}`;
}

function toRfc822(dateValue: string): string {
  return new Date(`${dateValue}T00:00:00.000Z`).toUTCString();
}

type RssItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
};

function buildItems(): RssItem[] {
  const home: RssItem = {
    title: HOME_SEO.title,
    link: toAbsoluteUrl("/"),
    description: HOME_SEO.description,
    pubDate: toRfc822(HOME_PUB_DATE),
  };

  const pages: RssItem[] = CONTENT_PAGES.map((page) => ({
    title: page.seo.title,
    link: toAbsoluteUrl(page.href),
    description: page.seo.description,
    pubDate: toRfc822(page.publishedAt || page.updatedAt),
  }));

  const infoHub: RssItem = {
    title: INFO_HUB_SEO.title,
    link: toAbsoluteUrl(ROUTES.infoHub),
    description: INFO_HUB_SEO.description,
    pubDate: toRfc822(INFO_HUB_PUB_DATE),
  };

  return [home, ...pages, infoHub];
}

function buildRssXml(items: RssItem[]): string {
  const channelTitle = escapeXml(SITE.name);
  const channelLink = escapeXml(CANONICAL_SITE_ORIGIN);
  const channelDescription = escapeXml(HOME_SEO.description);

  const itemXml = items
    .map((item) => {
      const title = escapeXml(item.title);
      const link = escapeXml(item.link);
      const description = escapeXml(item.description);
      const pubDate = escapeXml(item.pubDate);

      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${channelTitle}</title>
    <link>${channelLink}</link>
    <description>${channelDescription}</description>
${itemXml}
  </channel>
</rss>
`;
}

export function GET() {
  const xml = buildRssXml(buildItems());

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
