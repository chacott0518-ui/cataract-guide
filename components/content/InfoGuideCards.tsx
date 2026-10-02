import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { HOME_RELATED_GUIDES } from "@/content/pages/home";

type RelatedGuideCard = {
  id: string;
  href: string;
  topicLabel: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type InfoGuideCardsProps = {
  cards?: readonly RelatedGuideCard[];
};

/**
 * HOME 보조 안내 — 목차카드보다 작은 compact 카드 + 최신 톤 썸네일.
 */
export function InfoGuideCards({
  cards = HOME_RELATED_GUIDES,
}: InfoGuideCardsProps) {
  if (cards.length === 0) return null;

  return (
    <section
      className="cg-info-guides"
      aria-labelledby="info-guides-heading"
    >
      <header className="cg-info-guides__header cg-section-head cg-section-head--compact">
        <h2 id="info-guides-heading" className="cg-section-head__title">
          함께 보면 좋은 안내
        </h2>
        <p className="cg-section-head__lead">
          수술비용·회복·렌즈·병원 선택 등 이어서 확인할 안내입니다.
        </p>
      </header>

      <ul className="cg-info-guides__list">
        {cards.map((card) => (
          <li key={card.id} className="cg-info-guides__item">
            <Link className="cg-info-guides__card" href={card.href} scroll>
              {card.image?.src ? (
                <span className="cg-info-guides__media">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width || 640}
                    height={card.image.height || 480}
                    className="cg-info-guides__img"
                    sizes="112px"
                  />
                </span>
              ) : null}
              <span className="cg-info-guides__body">
                <span className="cg-info-guides__card-title">{card.title}</span>
                <span className="cg-info-guides__label">{card.topicLabel}</span>
                <span className="cg-info-guides__desc">{card.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={ROUTES.infoHub} className="cg-info-guides__all">
        노안백내장 의료정보 전체보기
      </Link>
    </section>
  );
}
