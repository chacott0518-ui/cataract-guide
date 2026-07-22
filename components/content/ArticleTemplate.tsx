import type { CSSProperties } from "react";

import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { ArticleImagePair } from "@/components/content/ArticleImagePair";
import { ArticleIntro } from "@/components/content/ArticleIntro";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { ContentCardGrid } from "@/components/content/ContentCardGrid";
import { FaqAccordion } from "@/components/content/FaqList";
import { FaqHubCard } from "@/components/content/FaqHubCard";
import { HealthInformationNotice } from "@/components/content/HealthInformationNotice";
import { RelatedPages } from "@/components/content/RelatedPages";
import { TableOfContents } from "@/components/content/TableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ_HUB_CARD } from "@/config/content-ui";
import { getLayoutDecorativeIcon } from "@/config/section-icons";
import { SITE } from "@/config/site";
import { getFaqsByIds, getPageFaqs } from "@/lib/content-registry";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/schema";
import type { ContentPage, TocItem } from "@/types/content";

type ArticleTemplateProps = {
  page: ContentPage;
};

function buildToc(page: ContentPage): TocItem[] {
  const items: TocItem[] = page.sections.map((section) => ({
    id: section.id,
    numberLabel: section.numberLabel,
    label: section.heading,
    decorativeIcon:
      section.decorativeIcon || getLayoutDecorativeIcon(section.layout),
  }));

  if (page.faqIds.length > 0) {
    items.push({
      id: "faq",
      numberLabel: String(page.sections.length + 1).padStart(2, "0"),
      label: page.faqTitle,
      decorativeIcon: "❓",
    });
  }

  return items;
}

function resolveTopImages(page: ContentPage) {
  if (page.topImages) {
    return page.topImages.filter((image) => Boolean(image?.src));
  }
  const thumb = page.thumbnail ?? page.heroImage;
  return thumb?.src ? [thumb] : [];
}

/**
 * 범용 정보형 아티클 템플릿.
 * 업종·키워드·이미지 경로는 content/config에서만 주입한다.
 */
export function ArticleTemplate({ page }: ArticleTemplateProps) {
  const pageFaqs = getPageFaqs(page);
  const sectionFaqIds = page.sections.flatMap(
    (section) => section.faqIds ?? [],
  );
  const schemaFaqs =
    pageFaqs.length > 0 ? pageFaqs : getFaqsByIds(sectionFaqIds);
  const toc = buildToc(page);

  const showEyebrow = page.showArticleEyebrow === true;
  const showContentCards = page.showContentCards !== false;
  const showFaqHub = page.showFaqHub !== false && page.id !== "faqHub";
  const showGuideHeading = page.showRelatedGuideHeading === true;
  const displayH1 = page.h1 || page.navLabel || page.heading;
  const breadcrumbLabel = page.breadcrumbLabel || displayH1;
  const leadQuestion =
    page.heading && page.heading !== displayH1 ? page.heading : null;
  const topImages = resolveTopImages(page);
  const bodyImage = page.bodyImage?.src ? page.bodyImage : null;

  const schemas = [
    webPageJsonLd({
      name: page.heading,
      description: page.seo.description,
      path: page.href,
      image: page.seo.ogImage,
      keywords: page.seo.keywords,
    }),
    breadcrumbJsonLd([
      { name: SITE.name, path: "/" },
      { name: breadcrumbLabel, path: page.href },
    ]),
    articleJsonLd(page),
    ...(schemaFaqs.length > 0 ? [faqPageJsonLd(schemaFaqs)] : []),
  ];

  const accentStyle = {
    "--page-accent": page.accentColor,
    "--page-accent-hover": page.accentHoverColor,
  } as CSSProperties;

  return (
    <>
      <article
        className="cg-page cg-page--enter cg-article-page"
        style={accentStyle}
      >
        <div className="cg-container">
          <Breadcrumb
            items={[
              { label: SITE.name, href: "/" },
              { label: breadcrumbLabel },
            ]}
          />

          <header className="cg-article-start">
            {showEyebrow ? (
              <p className="cg-article-start__eyebrow">{page.categoryLabel}</p>
            ) : null}
            <h1>{displayH1}</h1>
          </header>

          {topImages.length > 0 ? (
            <ArticleImagePair images={topImages} priority />
          ) : null}

          {showContentCards ? (
            <ContentCardGrid
              activeHref={page.href}
              showIntro={showGuideHeading}
            />
          ) : null}

          {showContentCards ? <PartnershipCTA variant="top" /> : null}

          {bodyImage ? (
            <ArticleImagePair images={[bodyImage]} priority={false} />
          ) : null}

          {/* 모바일 UX 개선 범위: 긴 질문형 제목(또는 도입부) ~ 하단 CTA. 관련 콘텐츠는 제외 */}
          <div
            className="cg-article-mobile-enhanced"
            data-article-body="true"
          >
            {leadQuestion ? (
              <h2 className="cg-article-lead-question">{leadQuestion}</h2>
            ) : null}

            <ArticleIntro paragraphs={page.intro} />

            {toc.length > 0 ? <TableOfContents items={toc} /> : null}

            <ArticleBody
              sections={page.sections}
              repeatImage={page.repeatImage}
              repeatImageBeforeSectionNumber={
                page.repeatImageBeforeSectionNumber ?? undefined
              }
            />

            {pageFaqs.length > 0 ? (
              <FaqAccordion
                items={pageFaqs}
                title={page.faqTitle}
                id="faq"
                numberLabel={String(page.sections.length + 1).padStart(2, "0")}
                className="cg-page-faq"
              />
            ) : null}

            {page.conclusion ? (
              <ArticleConclusion body={page.conclusion} heading="결론" />
            ) : null}

            <HealthInformationNotice />

            {showFaqHub ? <FaqHubCard card={FAQ_HUB_CARD} /> : null}

            <PartnershipCTA variant="bottom" />
          </div>

          <RelatedPages currentId={page.id} />
        </div>
      </article>
      <JsonLd data={schemas} />
    </>
  );
}

/** @deprecated 호환용 — ArticleTemplate 사용 */
export const ContentPageView = ArticleTemplate;
