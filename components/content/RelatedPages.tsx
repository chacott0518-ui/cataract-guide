import Link from "next/link";

import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ContentClusterId } from "@/types/content";

type RelatedPagesProps = {
  currentId: ContentClusterId;
};

export function RelatedPages({ currentId }: RelatedPagesProps) {
  const items = CONTENT_CARDS.filter((card) => card.id !== currentId);

  if (items.length === 0) return null;

  return (
    <nav className="cg-related-pages" aria-labelledby="related-pages-title">
      <h2 id="related-pages-title" className="cg-related-pages__title">
        관련 콘텐츠
      </h2>
      <ul className="cg-related-pages__list">
        {items.map((card) => (
          <li key={card.id}>
            <Link className="cg-related-pages__link" href={card.href}>
              <span>{card.title} 자세히 보기</span>
              <span aria-hidden="true"> →</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
