import { ArticleRepeatImage } from "@/components/content/ArticleRepeatImage";
import { ArticleSectionBlock } from "@/components/content/ArticleSectionBlock";
import { HomeArticleSlider } from "@/components/content/HomeArticleSlider";
import type { ArticleSection, ContentImage } from "@/types/content";

function staticSrc(src: string): string {
  return src.split("?")[0] || src;
}

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
  featureImageMobile?: ContentImage | null;
};

export function HomeIntroBlock({
  heading,
  paragraphs,
  summary,
  featureImage,
  featureImageMobile,
}: HomeIntroBlockProps) {
  const hasPc = Boolean(featureImage?.src);
  const hasMobile = Boolean(featureImageMobile?.src);

  return (
    <section className="cg-home-intro">
      {hasPc || hasMobile ? (
        <figure className="cg-home-feature">
          {hasPc ? (
            // eslint-disable-next-line @next/next/no-img-element -- static PC hero, no optimizer
            <img
              src={staticSrc(featureImage!.src)}
              alt={featureImage!.alt}
              width={featureImage!.width || 1600}
              height={featureImage!.height || 900}
              className="cg-home-feature__img cg-home-feature__img--pc"
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          ) : null}
          {hasMobile ? (
            // eslint-disable-next-line @next/next/no-img-element -- static src matches preload
            <img
              src={staticSrc(featureImageMobile!.src)}
              alt={featureImageMobile!.alt}
              width={featureImageMobile!.width || 750}
              height={featureImageMobile!.height || 938}
              className="cg-home-feature__img cg-home-feature__img--mobile"
              style={{ width: "100%", height: "auto" }}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          ) : null}
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
