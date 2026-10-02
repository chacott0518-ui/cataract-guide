import { ArticleRepeatImage } from "@/components/content/ArticleRepeatImage";
import { ArticleSectionBlock } from "@/components/content/ArticleSectionBlock";
import { HomeArticleSlider } from "@/components/content/HomeArticleSlider";
import type { ArticleSection, ContentImage } from "@/types/content";

function staticSrc(src: string): string {
  return src.split("?")[0] || src;
}

/** 이미지가 있는 섹션에 좌·우를 교차 배치하고, 없는 섹션에는 fallback 이미지를 배분 */
export function applyEditorialMedia(
  sections: ArticleSection[],
  fallbackImages: ContentImage[] = [],
): ArticleSection[] {
  let fallbackIdx = 0;
  let mediaCount = 0;

  return sections.map((section, index) => {
    let next = section;
    const hasOwn = Boolean(section.sectionImage?.src);

    if (
      !hasOwn &&
      fallbackIdx < fallbackImages.length &&
      (index === 0 ||
        index === Math.floor(sections.length / 2) ||
        index === sections.length - 1)
    ) {
      const image = fallbackImages[fallbackIdx];
      if (image?.src) {
        next = { ...next, sectionImage: image };
        fallbackIdx += 1;
      }
    }

    if (next.sectionImage?.src) {
      const position =
        next.mediaPosition ?? (mediaCount % 2 === 0 ? "start" : "end");
      mediaCount += 1;
      return { ...next, mediaPosition: position };
    }

    return next;
  });
}

type ArticleBodyProps = {
  sections: ArticleSection[];
  showNumbers?: boolean;
  /** @deprecated 슬라이더 모드 — HOME에서는 사용하지 않음 */
  grid?: boolean;
  /** @deprecated 패널 모드 제거 — 무시됨 */
  hideSectionImages?: boolean;
  repeatImage?: ContentImage | null;
  repeatImageBeforeSectionNumber?: string;
  /** 섹션에 배분할 보조 이미지 (상세 상단/본문 이미지) */
  decorateImages?: ContentImage[];
};

export function ArticleBody({
  sections,
  showNumbers = true,
  grid = false,
  repeatImage,
  repeatImageBeforeSectionNumber,
  decorateImages = [],
}: ArticleBodyProps) {
  if (grid) {
    return <HomeArticleSlider sections={sections} showNumbers={showNumbers} />;
  }

  const editorial = applyEditorialMedia(sections, decorateImages);

  return (
    <div className="cg-article-body cg-article-body--editorial">
      {editorial.map((section) => {
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

type HomeIntroBlockProps = {
  heading?: string;
  paragraphs: string[];
  summary?: string;
  featureImage?: ContentImage | null;
  featureImageMobile?: ContentImage | null;
};

/** HOME Hero — H1 아래 핵심 답변 + hero 이미지 (카드/패널 없음) */
export function HomeIntroBlock({
  paragraphs,
  summary,
  featureImage,
  featureImageMobile,
}: HomeIntroBlockProps) {
  const hasPc = Boolean(featureImage?.src);
  const hasMobile = Boolean(featureImageMobile?.src);

  return (
    <section className="cg-home-hero" aria-label="노안백내장 핵심 안내">
      <div className="cg-home-hero__copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
        {summary ? <p className="cg-home-hero__summary">{summary}</p> : null}
      </div>
      {hasPc || hasMobile ? (
        <figure className="cg-home-hero__media">
          {hasPc ? (
            // eslint-disable-next-line @next/next/no-img-element -- static PC hero, no optimizer
            <img
              src={staticSrc(featureImage!.src)}
              alt={featureImage!.alt}
              width={featureImage!.width || 1600}
              height={featureImage!.height || 900}
              className="cg-home-hero__img cg-home-hero__img--pc"
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
              className="cg-home-hero__img cg-home-hero__img--mobile"
              style={{ width: "100%", height: "auto" }}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          ) : null}
        </figure>
      ) : null}
    </section>
  );
}
