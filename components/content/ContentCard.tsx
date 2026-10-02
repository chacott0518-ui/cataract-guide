import Link from "next/link";
import type { CSSProperties } from "react";

import type { ContentCard as ContentCardType } from "@/types/content";

type ContentCardProps = {
  card: ContentCardType;
  active?: boolean;
  /** 대표 이미지와 대역폭 경쟁을 피하기 위해 기본 false */
  priority?: boolean;
};

function formatCardDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${year}.${month}.${day}`;
}

function staticSrc(src: string): string {
  return src.split("?")[0] || src;
}

export function ContentCard({
  card,
  active = false,
}: ContentCardProps) {
  const style = {
    "--card-accent": card.accentColor,
    "--card-accent-hover": card.accentHoverColor,
  } as CSSProperties;

  const src = staticSrc(card.image.src);

  return (
    <Link
      className={`cg-content-card cg-content-card--${card.accent}${active ? " is-active" : ""}`}
      href={card.href}
      aria-current={active ? "page" : undefined}
      style={style}
    >
      <span className="cg-content-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element -- static public image */}
        <img
          src={src}
          alt={card.image.alt}
          width={card.image.width || 1080}
          height={card.image.height || 1080}
          className="cg-content-card__img"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
