import type { CSSProperties } from "react";

import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { ArticleImagePair } from "@/components/content/ArticleImagePair";
import { ArticleIntro } from "@/components/content/ArticleIntro";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { ClinicDoctorsSection } from "@/components/content/ClinicDoctorsSection";
import { ContentCardGrid } from "@/components/content/ContentCardGrid";
import { FaqAccordion } from "@/components/content/FaqList";
import { FaqHubCard } from "@/components/content/FaqHubCard";
import { HealthInformationNotice } from "@/components/content/HealthInformationNotice";
import { HubContextLink } from "@/components/content/HubContextLink";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { OfficialSources } from "@/components/content/OfficialSources";
import { RelatedInfoGuides } from "@/components/content/RelatedInfoGuides";
import { RelatedPages } from "@/components/content/RelatedPages";
import { TableOfContents } from "@/components/content/TableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ_HUB_CARD } from "@/config/content-ui";
import { getLayoutDecorativeIcon } from "@/config/section-icons";
import { SITE } from "@/config/site";
import { getRelatedInfoGuides } from "@/content/info/hub";
import { getFaqsByIds, getPageFaqs } from "@/lib/content-registry";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  medicalClinicJsonLd,
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

function formatDisplayDate(dateValue: string): string {
  const [y, m, d] = dateValue.split("T")[0].split("-");
  if (!y || !m || !d) return dateValue;
  return `${y}.${m}.${d}`;
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
 * 본문 CTA 배너는 floating으로 이관 — 중간 중복 CTA 없음.
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
  const showFaqHub =
    page.showFaqHub !== false && page.id !== "faqHub" && page.id !== "faq";
  const showGuideHeading = page.showRelatedGuideHeading === true;
  const displayH1 = page.h1 || page.navLabel || page.heading;
  const breadcrumbLabel = page.breadcrumbLabel || displayH1;
  const leadQuestion =
    page.heading && page.heading !== displayH1 ? page.heading : null;
  const topImages = resolveTopImages(page);
  const bodyImage = page.bodyImage?.src ? page.bodyImage : null;
  const isFaqCanonical = page.id === "faq";
  const relatedGuides = page.showPublishedDate
    ? getRelatedInfoGuides(page)
    : [];
  const includeFaqSchema =
    schemaFaqs.length > 0 &&
    (isFaqCanonical || (page.officialSources?.length ?? 0) > 0);

  const clinicLd = medicalClinicJsonLd();
  const schemas = [
    webPageJsonLd({
      name: page.heading,
      description: page.seo.description,
      path: page.href,
      image: page.seo.socialImage || page.seo.ogImage,
      keywords: page.seo.keywords,
      type: "MedicalWebPage",
      datePublished: page.publishedAt,
      dateModified: page.updatedAt,
    }),
    breadcrumbJsonLd([
      { name: SITE.name, path: "/" },
      { name: breadcrumbLabel, path: page.href },
    ]),
    ...(clinicLd ? [clinicLd] : []),
    ...(isFaqCanonical ? [] : [articleJsonLd(page)]),
    ...(includeFaqSchema ? [faqPageJsonLd(schemaFaqs, page.href)] : []),
  ];

  const showDoctors = [
    "hospital",
    "preExam",
    "cost",
    "iolInfoCheck",
    "lensTypeCheck",
    "targetDistanceConsult",
    "recovery",
    "precautions",
  ].includes(page.id);

  const accentStyle = {
    "--page-accent": page.accentColor,
    "--page-accent-hover": page.accentHoverColor,
  } as CSSProperties;

  const isInfoGuide = page.showPublishedDate === true;

  const partnerCardSection = showContentCards ? (
    <ContentCardGrid activeHref={page.href} showIntro={showGuideHeading} />
  ) : null;

  const headerBlock = (
    <header className="cg-article-start">
      {showEyebrow ? (
        <p className="cg-article-start__eyebrow">{page.categoryLabel}</p>
      ) : null}
      <h1>{displayH1}</h1>
      {page.showPublishedDate ? (
        <p className="cg-article-start__dates">
          {page.updatedAt !== page.publishedAt ? (
            <>
              게시 {formatDisplayDate(page.publishedAt)}
              <span aria-hidden="true"> · </span>
              수정 {formatDisplayDate(page.updatedAt)}
            </>
          ) : (
            <>게시 {formatDisplayDate(page.publishedAt)}</>
          )}
        </p>
      ) : null}
    </header>
  );

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

          {isInfoGuide ? (
            <>
              {partnerCardSection}
              {headerBlock}
            </>
          ) : (
            <>
              {headerBlock}
              {partnerCardSection}
            </>
          )}

          {leadQuestion ? (
            <p className="cg-article-lead-q">{leadQuestion}</p>
          ) : null}

          {topImages.length > 0 ? (
            <ArticleImagePair images={topImages} priority />
          ) : null}

          {page.intro ? <ArticleIntro paragraphs={page.intro} /> : null}

          {page.hubContextLink ? (
            <HubContextLink link={page.hubContextLink} />
          ) : null}

          {page.keySummary && page.keySummary.length > 0 ? (
            <KeySummaryCards items={page.keySummary} />
          ) : null}

          {toc.length > 0 ? <TableOfContents items={toc} /> : null}

          {bodyImage ? (
            <ArticleImagePair images={[bodyImage]} priority={false} />
          ) : null}

          <ArticleBody sections={page.sections} />

          {pageFaqs.length > 0 ? (
            <FaqAccordion
              items={pageFaqs}
              title={page.faqTitle}
              id="faq"
              numberLabel={String(page.sections.length + 1).padStart(2, "0")}
              className="cg-page-faq"
            />
          ) : null}

          {relatedGuides.length > 0 ? (
            <RelatedInfoGuides guides={relatedGuides} />
          ) : null}

          {page.conclusion ? (
            <ArticleConclusion body={page.conclusion} heading="결론" />
          ) : null}

          <HealthInformationNotice />

          {showDoctors ? <ClinicDoctorsSection compact /> : null}

          {page.officialSources && page.officialSources.length > 0 ? (
            <OfficialSources sources={page.officialSources} />
          ) : null}

          {showFaqHub ? <FaqHubCard card={FAQ_HUB_CARD} /> : null}

          <RelatedPages currentId={page.id} />
        </div>
      </article>
      <JsonLd data={schemas} />
    </>
  );
}

/** @deprecated 호환용 — ArticleTemplate 사용 */
export const ContentPageView = ArticleTemplate;
