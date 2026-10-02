import Link from "next/link";

import type { FaqItem } from "@/types/faq";

type FaqAccordionProps = {
  items: FaqItem[];
  title?: string;
  id?: string;
  numberLabel?: string;
  className?: string;
};

/**
 * Server-rendered FAQ — answers stay in HTML (details openable).
 * FAQPage 구조화 데이터와 동일 문구를 사용한다.
 */
export function FaqAccordion({
  items,
  title = "자주 묻는 질문",
  id = "faq",
  numberLabel,
  className,
}: FaqAccordionProps) {
  const showTitle = Boolean(title);

  return (
    <section
      className={["cg-faq-section", className].filter(Boolean).join(" ")}
      id={id}
      aria-labelledby={showTitle ? `${id}-title` : undefined}
      aria-label={showTitle ? undefined : "자주 묻는 질문"}
    >
      {showTitle ? (
        <div className="cg-section-intro">
          {numberLabel ? (
            <p className="cg-article-section__num">{numberLabel}</p>
          ) : null}
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
      ) : null}
      <div className="cg-faq-list">
        {items.map((item) => (
          <details key={item.id} className="cg-faq-item">
            <summary className="cg-faq-item__trigger">
              <span className="cg-faq-item__q">{item.question}</span>
              <span className="cg-faq-item__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>
            <div className="cg-faq-item__body">
              <p>{item.answer}</p>
              {item.relatedSlug ? (
                <p className="cg-faq-item__link">
                  <Link href={`/${item.relatedSlug}`}>
                    {item.relatedLabel || "관련 내용 보기"}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export const FaqList = FaqAccordion;
