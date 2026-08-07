#!/usr/bin/env node
/**
 * IndexNow 제출 스크립트
 *
 * 사용:
 *   node scripts/indexnow.mjs
 *   node scripts/indexnow.mjs https://cataractguide.co.kr
 */

const CANONICAL_ORIGIN = "https://cataractguide.co.kr";
const INDEXNOW_KEY = "8c4e7a1f5d9032b6a8e14c7f2639bd51";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const urlList = [
  "/",
  "/노안백내장-수술비용",
  "/노안백내장-회복기간",
  "/노안백내장-주의사항",
  "/노안백내장-병원선택",
  "/노안백내장-후기",
  "/노안백내장-faq",
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
