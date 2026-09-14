import Image from "next/image";
import Link from "next/link";

import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ContentPageId } from "@/types/content";

type RelatedPagesProps = {
  currentId: ContentPageId;
};

/** 관련글: 썸네일 + 제목 + 짧은 설명 3~4개 */
export function RelatedPages({ currentId }: RelatedPagesProps) {
  const items = CONTENT_CARDS.filter((card) => card.id !== currentId).slice(
    0,
    4,
  );

  if (items.length === 0) return null;

  return (
    <nav className="cg-related-pages" aria-labelledby="related-pages-title">
      <h2 id="related-pages-title" className="cg-related-pages__title">
        함께 보면 좋은 안내
      </h2>
      <ul className="cg-related-pages__grid">
        {items.map((card) => (
          <li key={card.id}>
            <Link className="cg-related-pages__card" href={card.href}>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                className="cg-related-pages__thumb"
                sizes="(max-width: 639px) 40vw, 160px"
              />
              <span className="cg-related-pages__body">
                <span className="cg-related-pages__card-title">
                  {card.title}
                </span>
                <span className="cg-related-pages__card-desc">
                  {card.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
