import Image from "next/image";

import { ArticleRepeatImage } from "@/components/content/ArticleRepeatImage";
import { ArticleSectionBlock } from "@/components/content/ArticleSectionBlock";
import { HomeArticleSlider } from "@/components/content/HomeArticleSlider";
import type { ArticleSection, ContentImage } from "@/types/content";

type ArticleBodyProps = {
  sections: ArticleSection[];
  showNumbers?: boolean;
  /** 메인: 2열 카드 그리드 / 모바일 슬라이드 */
  grid?: boolean;
  repeatImage?: ContentImage | null;
  repeatImageBeforeSectionNumber?: string;
};

export function ArticleBody({
  sections,
  showNumbers = true,
  grid = false,
  repeatImage,
  repeatImageBeforeSectionNumber,
}: ArticleBodyProps) {
  if (!grid) {
    return (
      <div className="cg-article-body">
        {sections.map((section) => {
          const insertRepeat =
            Boolean(repeatImage?.src) &&
            Boolean(repeatImageBeforeSectionNumber) &&
            section.numberLabel === repeatImageBeforeSectionNumber;

          return (
            <div key={section.id} className="cg-article-body__chunk">
              {insertRepeat && repeatImage ? (
                <ArticleRepeatImage image={repeatImage} />
              ) : null}
              <ArticleSectionBlock
                section={section}
                showNumbers={showNumbers}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return <HomeArticleSlider sections={sections} showNumbers={showNumbers} />;
}

type HomeIntroBlockProps = {
  heading: string;
  paragraphs: string[];
  summary: string;
  featureImage?: ContentImage | null;
};

export function HomeIntroBlock({
  heading,
  paragraphs,
  summary,
  featureImage,
}: HomeIntroBlockProps) {
  return (
    <section className="cg-home-intro">
      {featureImage?.src ? (
        <figure className="cg-home-feature">
          <Image
            src={featureImage.src}
            alt={featureImage.alt}
            width={featureImage.width || 1200}
            height={featureImage.height || 1200}
            sizes="(max-width: 900px) 100vw, 960px"
            className="cg-home-feature__img"
            priority
          />
        </figure>
      ) : null}
      <h2 className="cg-home-intro__heading">{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      <p className="cg-home-intro__summary">{summary}</p>
    </section>
  );
}
