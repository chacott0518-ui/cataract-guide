import {
  ArticleBody,
  HomeIntroBlock,
} from "@/components/content/ArticleBody";
import { ClinicTrustSection } from "@/components/content/ClinicTrustSection";
import { ContentCardGrid } from "@/components/content/ContentCardGrid";
import { ContentIndex } from "@/components/content/ContentIndex";
import { ExamNoticeBox } from "@/components/content/ExamNoticeBox";
import { FaqAccordion } from "@/components/content/FaqList";
import { InfoGuideCards } from "@/components/content/InfoGuideCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/config/site";
import { getFaqsByIds } from "@/content/faqs";
import {
  HOME_EXAM_NOTICE,
  HOME_FAQ_IDS,
  HOME_INDEX,
  HOME_INTRO,
  HOME_SECTIONS,
} from "@/content/pages/home";
import {
  faqPageJsonLd,
  itemListJsonLd,
  medicalClinicJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

/** datePublished 고정 — 본문 수정 시에만 dateModified를 갱신 */
const HOME_PUBLISHED = "2026-07-22";
const HOME_MODIFIED = "2026-09-14";

export default function HomePage() {
  const faqs = getFaqsByIds([...HOME_FAQ_IDS]);
  const clinicLd = medicalClinicJsonLd();

  return (
    <>
      <div className="cg-home cg-page--enter">
        <div className="cg-container">
          <header className="cg-page__header cg-home__header">
            <h1 className="cg-home__title">{SITE.name}</h1>
          </header>

          <HomeIntroBlock
            heading={HOME_INTRO.heading}
            paragraphs={HOME_INTRO.paragraphs}
            summary={HOME_INTRO.summary}
            featureImage={HOME_INTRO.featureImage}
            featureImageMobile={HOME_INTRO.featureImageMobile}
          />

          <ContentCardGrid />

          <InfoGuideCards />

          <ContentIndex items={HOME_INDEX} />

          <ArticleBody sections={HOME_SECTIONS} grid />

          <ExamNoticeBox body={HOME_EXAM_NOTICE} />

          <FaqAccordion
            items={faqs}
            title="노안백내장 자주 묻는 질문"
            id="faq"
            className="cg-main-faq"
          />

          <ClinicTrustSection />
        </div>
      </div>
      <JsonLd
        data={[
          organizationJsonLd(),
          ...(clinicLd ? [clinicLd] : []),
          websiteJsonLd(),
          webPageJsonLd({
            name: SITE.name,
            description: SITE.tagline,
            path: "/",
            image: "/images/og/cataractguide-kakao.png",
            type: "WebPage",
            datePublished: HOME_PUBLISHED,
            dateModified: HOME_MODIFIED,
          }),
          itemListJsonLd(),
          faqPageJsonLd(faqs, "/"),
        ]}
      />
    </>
  );
}
