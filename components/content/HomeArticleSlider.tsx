"use client";

import { useState, type KeyboardEvent } from "react";

import { ArticleSectionBlock } from "@/components/content/ArticleSectionBlock";
import type { ArticleSection } from "@/types/content";

type HomeArticleSliderProps = {
  sections: ArticleSection[];
  showNumbers?: boolean;
};

export function HomeArticleSlider({
  sections,
  showNumbers = true,
}: HomeArticleSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + delta + sections.length) % sections.length;
    goToSlide(next);
    const buttons =
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
        ".cg-home-slider__tab",
      );
    buttons?.[next]?.focus();
  };

  return (
    <div className="cg-home-slider">
      <div
        className="cg-home-slider__tabs"
        role="tablist"
        aria-label="수술 전 알아야 할 정보 섹션"
      >
        {sections.map((section, index) => {
          const label =
            section.numberLabel || String(index + 1).padStart(2, "0");
          const isActive = index === activeIndex;
          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              id={`home-slider-tab-${section.id}`}
              className={`cg-home-slider__tab${isActive ? " is-active" : ""}`}
              aria-label={`${label} ${section.heading}`}
              aria-selected={isActive}
              aria-controls={`home-slider-panel-${section.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goToSlide(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="cg-home-slider__viewport">
        <div className="cg-home-slider__track">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={section.id}
                id={`home-slider-panel-${section.id}`}
                role="tabpanel"
                aria-labelledby={`home-slider-tab-${section.id}`}
                className={`cg-home-slider__slide${isActive ? " is-active" : ""}`}
                data-slide-index={index}
              >
                <ArticleSectionBlock
                  section={section}
                  showNumbers={showNumbers}
                  className="cg-home-slider__card"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
