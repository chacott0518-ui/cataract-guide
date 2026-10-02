import Image from "next/image";
import Link from "next/link";

import { ChecklistBlock } from "@/components/content/ChecklistBlock";
import { ComparisonBlock } from "@/components/content/ComparisonBlock";
import { CompareTable } from "@/components/content/ResponsiveTable";
import type { ArticleSection } from "@/types/content";

type HomeProseSectionsProps = {
  sections: ArticleSection[];
};

/**
 * HOME 전용 본문 — PC 2열 에디토리얼(홀수: 텍스트|이미지, 짝수: 이미지|텍스트),
 * 이미지 없는 섹션은 텍스트만 readable width. 모바일은 1열.
 */
export function HomeProseSections({ sections }: HomeProseSectionsProps) {
  return (
    <div className="cg-home-prose">
      {sections.map((section, index) => {
        const hasImage = Boolean(section.sectionImage?.src);
        const reversed = hasImage && (section.order ?? index + 1) % 2 === 0;
        const hasExtras =
          (section.layout === "comparison" && section.comparison) ||
          section.bullets ||
          (section.layout === "compare-table" && section.compareRows);

        return (
          <section
            key={section.id}
            id={section.id}
            className={`cg-home-prose__section${
              hasImage ? " cg-home-prose__section--split" : ""
            }${reversed ? " cg-home-prose__section--reverse" : ""}`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="cg-home-prose__grid">
              <div className="cg-home-prose__text">
                <h2
                  id={`${section.id}-heading`}
                  className="cg-home-prose__heading"
                >
                  {section.numberLabel ? (
                    <span className="cg-home-prose__num" aria-hidden="true">
                      {`${section.numberLabel}.`}
                    </span>
                  ) : null}
                  <span className="cg-home-prose__title">{section.heading}</span>
                </h2>

                <div className="cg-home-prose__body">
                  {section.directAnswer ? (
                    <p className="cg-home-prose__lead">{section.directAnswer}</p>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {hasImage && section.sectionImage ? (
                <figure className="cg-home-prose__figure">
                  <Image
                    src={section.sectionImage.src}
                    alt={section.sectionImage.alt}
                    width={section.sectionImage.width || 1200}
                    height={section.sectionImage.height || 900}
                    className="cg-home-prose__img"
                    sizes="(max-width: 900px) 100vw, 560px"
                  />
                </figure>
              ) : null}
            </div>

            {hasExtras ? (
              <div className="cg-home-prose__extras">
                {section.layout === "comparison" && section.comparison ? (
                  <ComparisonBlock
                    left={section.comparison.left}
                    right={section.comparison.right}
                    note={section.comparison.note}
                  />
                ) : null}

                {(section.layout === "checklist" || section.bullets) &&
                section.bullets ? (
                  <ChecklistBlock items={section.bullets} />
                ) : null}

                {section.layout === "compare-table" && section.compareRows ? (
                  <CompareTable
                    rows={section.compareRows}
                    leftHeader={section.compareHeaders?.[0]}
                    rightHeader={section.compareHeaders?.[1]}
                  />
                ) : null}
              </div>
            ) : null}

            {section.relatedHref ? (
              <p className="cg-home-prose__cta">
                <Link
                  className="cg-home-prose__cta-link"
                  href={section.relatedHref}
                >
                  {section.relatedLabel || "관련 내용 보기"}
                </Link>
              </p>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
