import { AD_INFO_CHECK_PAGE } from "@/content/info/ad-info-check";
import { BOTH_EYES_SCHEDULE_PAGE } from "@/content/info/both-eyes-schedule";
import { CONSULTATION_QUESTIONS_PAGE } from "@/content/info/consultation-questions";
import { DAILY_LIFE_AFTER_PAGE } from "@/content/info/daily-life-after";
import { DRIVING_RESUME_CHECK_PAGE } from "@/content/info/driving-resume-check";
import { GLARE_CHECK_PAGE } from "@/content/info/glare-check";
import { GLASSES_CHANGE_CHECK_PAGE } from "@/content/info/glasses-change-check";
import { HISTORY_CHECK_PAGE } from "@/content/info/history-check";
import { IOL_INFO_CHECK_PAGE } from "@/content/info/iol-info-check";
import { LENS_TYPE_CHECK_PAGE } from "@/content/info/lens-type-check";
import { MEDICAL_INFO_CHECK_PAGE } from "@/content/info/medical-info-check";
import { MEDICATION_CHECK_PAGE } from "@/content/info/medication-check";
import { PROCEDURE_PROCESS_PAGE } from "@/content/info/procedure-process";
import { SYMPTOM_CHECK_PAGE } from "@/content/info/symptom-check";
import { TARGET_DISTANCE_CONSULT_PAGE } from "@/content/info/target-distance-consult";
import { VISION_CHANGE_OBSERVATION_PAGE } from "@/content/info/vision-change-observation";
import { PRE_EXAM_PAGE } from "@/content/pages/pre-exam";
import type { ContentPage, InfoGuideCard, InfoGuideId } from "@/types/content";

/** 상단 6개 핵심 카드 밖의 의료정보 가이드 (GNB/CONTENT_CARDS 미포함) */
export const INFO_GUIDE_PAGES: ContentPage[] = [
  PRE_EXAM_PAGE,
  MEDICATION_CHECK_PAGE,
  HISTORY_CHECK_PAGE,
  CONSULTATION_QUESTIONS_PAGE,
  IOL_INFO_CHECK_PAGE,
  LENS_TYPE_CHECK_PAGE,
  TARGET_DISTANCE_CONSULT_PAGE,
  PROCEDURE_PROCESS_PAGE,
  BOTH_EYES_SCHEDULE_PAGE,
  DAILY_LIFE_AFTER_PAGE,
  DRIVING_RESUME_CHECK_PAGE,
  GLASSES_CHANGE_CHECK_PAGE,
  GLARE_CHECK_PAGE,
  VISION_CHANGE_OBSERVATION_PAGE,
  SYMPTOM_CHECK_PAGE,
  MEDICAL_INFO_CHECK_PAGE,
  AD_INFO_CHECK_PAGE,
];

function toInfoCard(page: ContentPage): InfoGuideCard {
  return {
    id: page.id as InfoGuideCard["id"],
    href: page.href,
    topicLabel: page.infoTopicLabel || page.navLabel,
    title: page.h1,
    description: page.infoCardDescription || page.seo.description,
    publishedAt: page.publishedAt,
    topicName: page.infoTopicLabel || page.navLabel,
  };
}

/** 홈 ‘노안백내장 관련 정보’ 섹션 대표 4개 (전체 목록은 /의료정보 허브) */
const HOME_INFO_GUIDE_IDS: InfoGuideId[] = [
  "preExam",
  "consultationQuestions",
  "symptomCheck",
  "iolInfoCheck",
];

export const HOME_INFO_GUIDE_CARDS: InfoGuideCard[] = HOME_INFO_GUIDE_IDS
  .map((id) => INFO_GUIDE_PAGES.find((page) => page.id === id))
  .filter((page): page is ContentPage => Boolean(page))
  .map(toInfoCard);

/** 전체 InfoGuide 카드 (필요 시 참고용) */
export const INFO_GUIDE_CARDS: InfoGuideCard[] = INFO_GUIDE_PAGES.map(toInfoCard);
