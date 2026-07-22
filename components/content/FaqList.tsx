"use client";

import { useId, useState } from "react";
import Link from "next/link";

import type { FaqItem } from "@/types/faq";

type FaqAccordionProps = {
  items: FaqItem[];
  title?: string;
  id?: string;
  numberLabel?: string;
  className?: string;
};

function FaqItemRow({ item }: { item: FaqItem }) {
  const reactId = useId();
  const panelId = `${reactId}-panel`;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="cg-faq-item"
      data-open={open ? "true" : "false"}
    >
      <button
        type="button"
        className="cg-faq-item__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
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
      </button>
      <div
        id={panelId}
        className="cg-faq-item__body"
        role="region"
        hidden={!open}
      >
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
    </div>
  );
}

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
          <FaqItemRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export const FaqList = FaqAccordion;
