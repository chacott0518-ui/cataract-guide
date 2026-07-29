const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, ".tmp-screens");
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  await page.goto("http://127.0.0.1:3001/", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(".cg-home-slider");

  const metrics = async (label) => {
    return page.evaluate((label) => {
      const doc = document.documentElement;
      const body = document.body;
      const slider = document.querySelector(".cg-home-slider");
      const track = document.querySelector(".cg-home-slider__track");
      const active = document.querySelector(".cg-home-slider__slide.is-active");
      const slides = [...document.querySelectorAll(".cg-home-slider__slide")];
      const visibleSlides = slides.filter((el) => {
        const style = getComputedStyle(el);
        return style.display !== "none" && style.visibility !== "hidden";
      });
      const viewport = document.querySelector(".cg-home-slider__viewport");
      const vpStyle = viewport ? getComputedStyle(viewport) : null;
      return {
        label,
        clientWidth: doc.clientWidth,
        scrollWidth: doc.scrollWidth,
        bodyScrollWidth: body.scrollWidth,
        hasHScroll: doc.scrollWidth > doc.clientWidth + 1,
        visibleSlideCount: visibleSlides.length,
        activeHeading: active?.querySelector("h2,h3")?.textContent?.trim() || null,
        viewportOverflowX: vpStyle?.overflowX || null,
        trackDisplay: track ? getComputedStyle(track).display : null,
        trackWidth: track ? Math.round(track.getBoundingClientRect().width) : null,
        sliderWidth: slider ? Math.round(slider.getBoundingClientRect().width) : null,
      };
    }, label);
  };

  await page.screenshot({
    path: path.join(outDir, "home-390-tab01.png"),
    fullPage: false,
  });
  const m1 = await metrics("tab01");

  await page.locator(".cg-home-slider__tab").nth(2).click();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, "home-390-tab03.png"),
    fullPage: false,
  });
  const m3 = await metrics("tab03");

  // scroll to slider for clearer capture
  await page.locator(".cg-home-slider").scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await page.screenshot({
    path: path.join(outDir, "home-390-tab03-slider.png"),
    fullPage: false,
  });

  await page.locator(".cg-home-slider__tab").nth(0).click();
  await page.waitForTimeout(200);
  await page.locator(".cg-home-slider").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: path.join(outDir, "home-390-tab01-slider.png"),
    fullPage: false,
  });

  console.log(JSON.stringify({ m1, m3 }, null, 2));
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
