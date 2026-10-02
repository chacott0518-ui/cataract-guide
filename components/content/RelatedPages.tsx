import Link from "next/link";

import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ContentPageId } from "@/types/content";

type RelatedPagesProps = {
  currentId: ContentPageId;
};

/**
 * 상세 관련 안내 — HOME 「함께 보면 좋은 안내」와 동일한 compact 텍스트 카드.
 * 구형 컬러 썸네일 미사용.
 */
export function RelatedPages({ currentId }: RelatedPagesProps) {
  const items = CONTENT_CARDS.filter((card) => card.id !== currentId).slice(
    0,
    4,
  );

  if (items.length === 0) return null;

  return (
    <nav className="cg-info-guides" aria-labelledby="related-pages-title">
      <header className="cg-info-guides__header cg-section-head cg-section-head--compact">
        <h2 id="related-pages-title" className="cg-section-head__title">
          함께 보면 좋은 안내
        </h2>
        <p className="cg-section-head__lead">
          이어서 확인할 노안백내장 핵심 안내입니다.
        </p>
      </header>
      <ul className="cg-info-guides__list">
        {items.map((card) => (
          <li key={card.id} className="cg-info-guides__item">
            <Link className="cg-info-guides__card" href={card.href} scroll>
              {card.image?.src ? (
                <span className="cg-info-guides__media">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static card thumbnail */}
                  <img
                    src={card.image.src.split("?")[0] || card.image.src}
                    alt=""
                    width={112}
                    height={112}
                    className="cg-info-guides__img"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ) : null}
              <span className="cg-info-guides__body">
                <span className="cg-info-guides__card-title">
                  {card.cardTitle || card.title}
                </span>
                <span className="cg-info-guides__label">
                  {card.cardMetaLabel || card.shortTitle}
                </span>
                <span className="cg-info-guides__desc">
                  {card.mobileCardDescription || card.cardDescription}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
