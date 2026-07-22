import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import type { ContentCard as ContentCardType } from "@/types/content";

type ContentCardProps = {
  card: ContentCardType;
  active?: boolean;
  priority?: boolean;
};

function formatCardDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${year}.${month}.${day}`;
}

export function ContentCard({
  card,
  active = false,
  priority = false,
}: ContentCardProps) {
  const style = {
    "--card-accent": card.accentColor,
    "--card-accent-hover": card.accentHoverColor,
  } as CSSProperties;

  return (
    <Link
      className={`cg-content-card cg-content-card--${card.accent}${active ? " is-active" : ""}`}
      href={card.href}
      aria-current={active ? "page" : undefined}
      style={style}
    >
      <span className="cg-content-card__media">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          width={card.image.width}
          height={card.image.height}
          sizes="(max-width: 639px) 50vw, (max-width: 899px) 50vw, 33vw"
          priority={priority}
        />
      </span>
      <span className="cg-content-card__body">
        <strong className="cg-content-card__title">{card.title}</strong>
        <span className="cg-content-card__meta">
          {formatCardDate(card.publishedAt)} · {card.cardMetaLabel}
        </span>
        <span className="cg-content-card__desc cg-content-card__desc--pc">
          {card.cardDescription}
        </span>
        <span className="cg-content-card__desc cg-content-card__desc--mobile">
          {card.mobileCardDescription}
        </span>
        <span className="cg-content-card__more">
          더 읽기
          <span aria-hidden="true"> →</span>
        </span>
      </span>
    </Link>
  );
}
