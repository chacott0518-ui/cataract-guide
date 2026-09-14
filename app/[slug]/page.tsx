import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/content/ContentPageView";
import { InfoHubTemplate } from "@/components/content/InfoHubTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { getInfoHubEntries, INFO_HUB_SEO } from "@/content/info/hub";
import {
  CONTENT_PAGES,
  getContentPageBySlug,
} from "@/lib/content-registry";
import { buildPageMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  infoHubItemListJsonLd,
  webPageJsonLd,
} from "@/lib/schema";

const INFO_HUB_SLUG = "의료정보";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function normalizeSlug(rawSlug: string): string {
  try {
    return decodeURIComponent(rawSlug).normalize("NFC");
  } catch {
    return rawSlug.normalize("NFC");
  }
}

export function generateStaticParams() {
  return [
    ...CONTENT_PAGES.map((page) => ({ slug: page.slug })),
    { slug: INFO_HUB_SLUG },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = normalizeSlug((await params).slug);

  if (slug === INFO_HUB_SLUG) {
    return buildPageMetadata({
      seo: INFO_HUB_SEO,
      path: ROUTES.infoHub,
    });
  }

  const page = getContentPageBySlug(slug);
  if (!page) return {};

  return buildPageMetadata({
    seo: page.seo,
    path: page.href,
    publishedTime: page.publishedAt,
    modifiedTime: page.updatedAt,
  });
}

export default async function ContentSlugPage({ params }: PageProps) {
  const slug = normalizeSlug((await params).slug);

  if (slug === INFO_HUB_SLUG) {
    const hubEntries = getInfoHubEntries();
    return (
      <>
        <InfoHubTemplate />
        <JsonLd
          data={[
            webPageJsonLd({
              name: "노안백내장 의료정보",
              description: INFO_HUB_SEO.description,
              path: ROUTES.infoHub,
              image: INFO_HUB_SEO.socialImage || INFO_HUB_SEO.ogImage,
              type: "WebPage",
            }),
            breadcrumbJsonLd([
              { name: SITE.name, path: "/" },
              { name: "노안백내장 의료정보", path: ROUTES.infoHub },
            ]),
            infoHubItemListJsonLd(hubEntries),
          ]}
        />
      </>
    );
  }

  const page = getContentPageBySlug(slug);
  if (!page) notFound();

  return <ContentPageView page={page} />;
}
