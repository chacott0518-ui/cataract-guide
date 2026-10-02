import {
  ArticleBody,
  HomeIntroBlock,
} from "@/components/content/ArticleBody";
import { ClinicTrustSection } from "@/components/content/ClinicTrustSection";
import { ContentCardGrid } from "@/components/content/ContentCardGrid";
import { ExamNoticeBox } from "@/components/content/ExamNoticeBox";
import { FaqAccordion } from "@/components/content/FaqList";
import { InfoGuideCards } from "@/components/content/InfoGuideCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_MOBILE_HERO_IMAGE } from "@/config/media";
import { getFaqsByIds } from "@/content/faqs";
import {
  HOME_EXAM_NOTICE,
  HOME_FAQ_IDS,
  HOME_INTRO,
  HOME_SEO,
  HOME_SECTIONS,
} from "@/content/pages/home";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  itemListJsonLd,
  medicalClinicJsonLd,
  organizationJsonLd,
  physiciansJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

/** datePublished 고정 — 본문 수정 시에만 dateModified를 갱신 */
const HOME_PUBLISHED = "2026-07-22";
const HOME_MODIFIED = "2026-10-02";
const HOME_REVIEWER = "송은석";

export default function HomePage() {
  const faqs = getFaqsByIds([...HOME_FAQ_IDS]);
  const clinicLd = medicalClinicJsonLd();
  const mobileHeroSrc = HOME_MOBILE_HERO_IMAGE.src;

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={mobileHeroSrc}
        fetchPriority="high"
      />

      <div className="cg-home cg-page--enter">
        <div className="cg-container">
          <header className="cg-page__header cg-home__header">
            <h1 className="cg-home__title">노안백내장</h1>
          </header>

          {/* 1) 핵심 답변 */}
          <HomeIntroBlock
            heading={HOME_INTRO.heading}
            paragraphs={HOME_INTRO.paragraphs}
            summary={HOME_INTRO.summary}
            featureImage={HOME_INTRO.featureImage}
            featureImageMobile={HOME_INTRO.featureImageMobile}
          />

          <ContentCardGrid />

          <ArticleBody sections={HOME_SECTIONS} grid={false} />

          <ExamNoticeBox body={HOME_EXAM_NOTICE} />

          <ClinicTrustSection
            publishedAt={HOME_PUBLISHED}
            modifiedAt={HOME_MODIFIED}
            reviewerName={HOME_REVIEWER}
          />

          <FaqAccordion
            items={faqs}
            title="노안백내장 자주 묻는 질문"
            id="faq"
            className="cg-main-faq"
          />

          <InfoGuideCards />
        </div>
      </div>
      <JsonLd
        data={[
          organizationJsonLd(),
          ...(clinicLd ? [clinicLd] : []),
          ...physiciansJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            name: HOME_SEO.title,
            description: HOME_SEO.description,
            path: "/",
            image: "/images/og/cataractguide-kakao.png",
            keywords: HOME_SEO.keywords,
            type: "MedicalWebPage",
            datePublished: HOME_PUBLISHED,
            dateModified: HOME_MODIFIED,
            reviewerName: HOME_REVIEWER,
          }),
          breadcrumbJsonLd([{ name: "노안백내장", path: "/" }]),
          itemListJsonLd(),
          faqPageJsonLd(faqs, "/"),
        ]}
      />
    </>
  );
}
