import { ContentCard } from "@/components/content/ContentCard";
import { CONTENT_CARDS } from "@/lib/content-registry";

type ContentCardGridProps = {
  activeHref?: string;
  showIntro?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** 상세페이지 상단 — HOME 카드와 같은 톤, 크기는 compact */
  compact?: boolean;
};

export function ContentCardGrid({
  activeHref,
  showIntro = false,
  eyebrow = "CONTENT GUIDE",
  title = "노안백내장 핵심 정보",
  description = "수술 전 확인할 내용을 주제별로 정리했습니다.",
  compact = false,
}: ContentCardGridProps) {
  return (
    <section
      className={`cg-card-grid${compact ? " cg-card-grid--compact" : ""}`}
      aria-labelledby="content-card-grid-title"
    >
      {showIntro ? (
        <div className="cg-section-intro">
          <p className="cg-section-intro__eyebrow">{eyebrow}</p>
          <h2 id="content-card-grid-title">{title}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <h2 id="content-card-grid-title" className="sr-only">
          노안백내장 핵심 정보
        </h2>
      )}
      <div className="cg-card-grid__list">
          {CONTENT_CARDS.map((card) => (
          <ContentCard
            key={`${card.id}-${card.image.src}`}
            card={card}
            active={activeHref === card.href}
          />
        ))}
      </div>
    </section>
  );
}
