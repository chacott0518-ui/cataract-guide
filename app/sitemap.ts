import type { MetadataRoute } from "next";

import { CONTENT_PAGES } from "@/content/pages";
import { getPublishedColumns } from "@/lib/content-registry";
import { absoluteUrl } from "@/lib/site-url";

const HOME_LAST_MODIFIED = "2026-07-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(HOME_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const pages: MetadataRoute.Sitemap = CONTENT_PAGES.map((page) => ({
    url: absoluteUrl(page.href),
    lastModified: new Date(page.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const columns: MetadataRoute.Sitemap = getPublishedColumns().map((column) => ({
    url: absoluteUrl(`/칼럼/${column.slug}`),
    lastModified: new Date(column.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...home, ...pages, ...columns];
}
