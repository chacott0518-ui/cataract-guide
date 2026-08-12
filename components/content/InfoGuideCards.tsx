import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { HOME_INFO_GUIDE_CARDS } from "@/content/info";
import type { InfoGuideCard } from "@/types/content";

function formatCardDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-");
  if (!y || !m || !d) return isoDate;
  return `${y}.${m}.${d}`;
}

type InfoGuideCardsProps = {
  cards?: InfoGuideCard[];
};

/**
 * 메인 6개 핵심 카드 밖의 ‘노안백내장 관련 정보’ 레이어.
 * GNB/CONTENT_CARDS와 분리되어 데이터 추가만으로 카드가 늘어난다.
 */
export function InfoGuideCards({
  cards = HOME_INFO_GUIDE_CARDS,
}: InfoGuideCardsProps) {
  if (cards.length === 0) return null;

  return (
    <section
      className="cg-info-guides"
      aria-labelledby="info-guides-heading"
    >
      <header className="cg-info-guides__header">
        <h2 id="info-guides-heading" className="cg-info-guides__title">
          노안백내장 관련 정보
        </h2>
        <p className="cg-info-guides__subtitle">
          노안과 백내장을 이해하고 검사·치료 상담 전 확인할 내용을 주제별로
          정리합니다.
        </p>
      </header>

      <ul className="cg-info-guides__list">
        {cards.map((card) => (
          <li key={card.id}>
            <Link className="cg-info-guides__card" href={card.href} scroll>
              <span className="cg-info-guides__label">{card.topicLabel}</span>
              <span className="cg-info-guides__card-title">{card.title}</span>
              <span className="cg-info-guides__desc">{card.description}</span>
              <span className="cg-info-guides__meta">
                {formatCardDate(card.publishedAt)} · {card.topicName}
              </span>
              <span className="cg-info-guides__more">
                더 읽기
                <span aria-hidden="true"> →</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={ROUTES.infoHub} className="cg-info-guides__all">
        노안백내장 의료정보 전체보기 →
      </Link>
    </section>
  );
}
