import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import {
  ArticleBody,
  HomeIntroBlock,
} from "@/components/content/ArticleBody";
import { ContentCardGrid } from "@/components/content/ContentCardGrid";
import { ContentIndex } from "@/components/content/ContentIndex";
import { ExamNoticeBox } from "@/components/content/ExamNoticeBox";
import { FaqAccordion } from "@/components/content/FaqList";
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
  itemListJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export default function HomePage() {
  const faqs = getFaqsByIds([...HOME_FAQ_IDS]);

  return (
    <>
      <div className="cg-home cg-page--enter">
        <div className="cg-container">
          <header className="cg-page__header cg-home__header">
            <h1 className="cg-home__title">{SITE.name}</h1>
          </header>

          <ContentCardGrid />

          <PartnershipCTA variant="top" />

          <HomeIntroBlock
            heading={HOME_INTRO.heading}
            paragraphs={HOME_INTRO.paragraphs}
            summary={HOME_INTRO.summary}
            featureImage={HOME_INTRO.featureImage}
          />

          <ContentIndex items={HOME_INDEX} />

          <ArticleBody sections={HOME_SECTIONS} grid />

          <ExamNoticeBox body={HOME_EXAM_NOTICE} />

          <FaqAccordion
            items={faqs}
            title="노안백내장 자주 묻는 질문"
            id="faq"
            className="cg-main-faq"
          />

          <PartnershipCTA variant="bottom" />
        </div>
      </div>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            name: SITE.name,
            description: SITE.tagline,
            path: "/",
            image: "/images/og/cataractguide-kakao.png",
            type: "WebPage",
          }),
          itemListJsonLd(),
        ]}
      />
    </>
  );
}
