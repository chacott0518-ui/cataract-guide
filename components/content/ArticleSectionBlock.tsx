import Image from "next/image";

import { ComparisonBlock } from "@/components/content/ComparisonBlock";
import { ChecklistBlock } from "@/components/content/ChecklistBlock";
import { InfoGrid } from "@/components/content/InfoGrid";
import { RelatedArticleLink } from "@/components/content/RelatedArticleLink";
import { ArticleCallout } from "@/components/content/ArticleCallout";
import { FaqAccordion } from "@/components/content/FaqList";
import { CompareTable, ResponsiveTable } from "@/components/content/ResponsiveTable";
import { StepsBlock } from "@/components/content/StepsBlock";
import { TimelineBlock } from "@/components/content/TimelineBlock";
import { getFaqsByIds } from "@/content/faqs";
import type { ArticleSection } from "@/types/content";

function SectionVisuals({ section }: { section: ArticleSection }) {
  if (section.layout === "comparison" && section.comparison) {
    return (
      <ComparisonBlock
        left={section.comparison.left}
        right={section.comparison.right}
        note={section.comparison.note}
      />
    );
  }

  if (section.layout === "checklist" && section.bullets) {
    return <ChecklistBlock items={section.bullets} />;
  }

  if (section.layout === "steps" && section.steps) {
    return <StepsBlock steps={section.steps} />;
  }

  if (section.layout === "timeline" && section.timeline) {
    return <TimelineBlock items={section.timeline} />;
  }

  if (
    (section.layout === "info-blocks" || section.layout === "info-grid") &&
    section.infoBlocks
  ) {
    const mobileColumns =
      section.mobileCardColumns ??
      (section.infoBlocks.some((item) => item.text.length > 48) ? 1 : 2);
    return (
      <InfoGrid items={section.infoBlocks} mobileColumns={mobileColumns} />
    );
  }

  if (section.layout === "compare-table" && section.compareRows) {
    return (
      <CompareTable
        rows={section.compareRows}
        leftHeader={section.compareHeaders?.[0]}
        rightHeader={section.compareHeaders?.[1]}
      />
    );
  }

  if (section.layout === "responsive-table" && section.table) {
    return <ResponsiveTable data={section.table} />;
  }

  if (section.bullets) {
    return <ChecklistBlock items={section.bullets} />;
  }

  return null;
}

type ArticleSectionBlockProps = {
  section: ArticleSection;
  showNumbers?: boolean;
  className?: string;
};

/** 의료정보형 에디토리얼 섹션 — 본문 카드 박스 없이 좌우/1열 배치 */
export function ArticleSectionBlock({
  section,
  showNumbers = true,
  className = "",
}: ArticleSectionBlockProps) {
  const HeadingTag = section.level === "h3" ? "h3" : "h2";
  const inlineFaqs =
    section.faqIds && section.faqIds.length > 0
      ? getFaqsByIds(section.faqIds)
      : [];
  const hasMedia = Boolean(section.sectionImage?.src);
  const reverse = hasMedia && section.mediaPosition === "end";

  const rowClass = [
    "cg-editorial-row",
    reverse ? "cg-editorial-row--reverse" : "",
    !hasMedia ? "cg-editorial-row--text" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={section.id}
      className={`cg-editorial-section${className ? ` ${className}` : ""}`}
      aria-labelledby={`${section.id}-heading`}
    >
      <div className={rowClass}>
        {hasMedia && section.sectionImage ? (
          <figure className="cg-editorial-media">
            <Image
              src={section.sectionImage.src}
              alt={section.sectionImage.alt}
              width={section.sectionImage.width || 1200}
              height={section.sectionImage.height || 900}
              className="cg-editorial-media__img"
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 767px) 100vw, 540px"
            />
          </figure>
        ) : null}

        <div className="cg-editorial-copy">
          <HeadingTag
            id={`${section.id}-heading`}
            className="cg-editorial-heading"
          >
            {showNumbers && section.numberLabel ? (
              <span className="cg-editorial-num" aria-hidden="true">
                {section.numberLabel}
              </span>
            ) : null}
            <span className="cg-editorial-title">{section.heading}</span>
          </HeadingTag>

          <div className="cg-editorial-text">
            {section.directAnswer ? (
              <p className="cg-editorial-lead">{section.directAnswer}</p>
            ) : null}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <div className="cg-editorial-visuals">
              <SectionVisuals section={section} />
            </div>
            {section.callout ? <ArticleCallout text={section.callout} /> : null}
            {inlineFaqs.length > 0 ? (
              <FaqAccordion
                items={inlineFaqs}
                title=""
                id={`${section.id}-faqs`}
                className="cg-page-faq cg-inline-faq"
              />
            ) : null}
            {section.relatedHref ? (
              <RelatedArticleLink
                href={section.relatedHref}
                label={section.relatedLabel || "관련 내용 보기"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
