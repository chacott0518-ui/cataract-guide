import { HomeIntroBlock } from "@/components/content/ArticleBody";
import { ClinicDoctorsSection } from "@/components/content/ClinicDoctorsSection";
import { ClinicTrustSection } from "@/components/content/ClinicTrustSection";
import { ContentCardGrid } from "@/components/content/ContentCardGrid";
import { FaqAccordion } from "@/components/content/FaqList";
import { HomeProseSections } from "@/components/content/HomeProseSections";
import { InfoGuideCards } from "@/components/content/InfoGuideCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_MOBILE_HERO_IMAGE } from "@/config/media";
import { getFaqsByIds } from "@/content/faqs";
import {
  HOME_FAQ_IDS,
  HOME_INTRO,
  HOME_RELATED_GUIDES,
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
          <div className="cg-home-top">
            <header className="cg-page__header cg-home__header">
              <h1 className="cg-home__title">노안백내장</h1>
            </header>

            <HomeIntroBlock
              paragraphs={HOME_INTRO.paragraphs}
              summary={HOME_INTRO.summary}
              featureImage={HOME_INTRO.featureImage}
              featureImageMobile={HOME_INTRO.featureImageMobile}
            />
          </div>

          <ContentCardGrid
            showIntro
            eyebrow="TOPIC GUIDE"
            title="노안백내장 핵심 정보"
            description="수술비용·회복·주의사항·병원 선택·렌즈·FAQ를 주제별로 확인하세요."
          />

          <HomeProseSections sections={HOME_SECTIONS} />

          <ClinicTrustSection
            publishedAt={HOME_PUBLISHED}
            modifiedAt={HOME_MODIFIED}
            reviewerName={HOME_REVIEWER}
          />

          <ClinicDoctorsSection />

          <InfoGuideCards cards={HOME_RELATED_GUIDES} />

          <FaqAccordion
            items={faqs}
            title="노안백내장 자주 묻는 질문 FAQ"
            id="faq"
            className="cg-main-faq"
          />
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
