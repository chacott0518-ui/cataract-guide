#!/usr/bin/env node
/**
 * IndexNow 제출 스크립트
 *
 * 사용:
 *   node scripts/indexnow.mjs
 *   node scripts/indexnow.mjs https://cataractguide.co.kr
 *
 * URL 목록은 app/sitemap.ts 색인 대상과 동기화한다.
 * (홈 + CONTENT_PAGES 23 + /의료정보 = 25)
 * 308 redirect·미존재 URL은 포함하지 않는다.
 */

const CANONICAL_ORIGIN = "https://cataractguide.co.kr";
const INDEXNOW_KEY = "8c4e7a1f5d9032b6a8e14c7f2639bd51";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/** sitemap 색인 대상과 동일. content/pages + content/info + ROUTES.infoHub */
const urlList = [
  "/",
  "/노안백내장-수술비용",
  "/노안백내장-회복기간",
  "/노안백내장-주의사항",
  "/노안백내장-병원선택",
  "/노안백내장-후기",
  "/노안백내장-faq",
  "/노안백내장-수술-전-검사",
  "/노안백내장-수술-전-복용약-확인",
  "/노안백내장-상담-전-병력-확인",
  "/노안백내장-상담-질문",
  "/노안백내장-인공수정체-정보-확인",
  "/노안백내장-단초점-다초점-차이",
  "/노안백내장-목표-거리-생활패턴-상담",
  "/노안백내장-수술-과정",
  "/노안백내장-양안-수술-일정",
  "/노안백내장-수술-후-일상생활",
  "/노안백내장-수술-후-운전-재개",
  "/노안백내장-수술-후-안경-사용",
  "/노안백내장-수술-후-빛번짐-눈부심",
  "/노안백내장-수술-후-시력-변화-관찰",
  "/노안백내장-수술-후-이상증상",
  "/노안백내장-의료정보-확인-방법",
  "/노안백내장-광고-정보-확인",
  "/의료정보",
];

const payload = {
  host: CANONICAL_ORIGIN.replace(/^https?:\/\//i, ""),
  key: INDEXNOW_KEY,
  keyLocation: `${CANONICAL_ORIGIN}/8c4e7a1f5d9032b6a8e14c7f2639bd51.txt`,
  urlList: urlList.map((path) => `${CANONICAL_ORIGIN}${path}`),
};

async function submitIndexNow() {
  console.log("IndexNow 제출 시작...");
  console.log(`Host: ${payload.host}`);
  console.log(`Key Location: ${payload.keyLocation}`);
  console.log(`URL 수: ${payload.urlList.length}`);
  console.log("");

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const statusCode = response.status;
    const statusText = response.statusText;
    let responseBody = "";

    try {
      responseBody = await response.text();
    } catch {
      responseBody = "(응답 본문 없음)";
    }

    console.log(`HTTP 상태: ${statusCode} ${statusText}`);
    console.log(`응답 본문: ${responseBody}`);
    console.log("");

    if (statusCode === 200 || statusCode === 202) {
      console.log("✓ IndexNow 제출 성공");
      console.log(`제출된 URL:`);
      payload.urlList.forEach((url) => console.log(`  - ${url}`));
      process.exit(0);
    } else {
      console.error("✗ IndexNow 제출 실패");
      console.error(`상태 코드: ${statusCode}`);
      process.exit(1);
    }
  } catch (error) {
    console.error("✗ IndexNow 제출 중 오류 발생:");
    console.error(error.message);
    process.exit(1);
  }
}

submitIndexNow();
