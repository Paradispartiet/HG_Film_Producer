#!/usr/bin/env node
/**
 * iPad-sized WebKit smoke for the Film Atlas deep study.
 *
 * The test uses the WebKit engine and tablet viewports, but it is NOT a
 * replacement for visual or touch testing on a physical iPad.
 *
 * Requires: npm run build:ui; npm run preview; playwright@1.56.1 + WebKit.
 */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { webkit } from "playwright";

const SITE = process.env.FILMWORK_QA_URL ?? "http://127.0.0.1:4173/HG_Film_Producer/";
const REPORT_DIR = resolve(process.env.FILMWORK_IPAD_QA_REPORT_DIR ?? "ipad-webkit-qa-artifacts");
const LANGUAGES = ["en", "nb", "fr", "pt"];
const FILMS = [
  { slug: "12-angry-men-1957", title: "12 Angry Men" },
  { slug: "the-idiots-1998", title: "The Idiots" },
];
const TABLETS = [
  { width: 768, height: 1024, name: "ipad-portrait" },
  { width: 834, height: 1112, name: "ipad-wide" },
];
const failures = [];
const passed = [];

async function check(browser, language, film, tablet) {
  const context = await browser.newContext({
    viewport: { width: tablet.width, height: tablet.height },
    deviceScaleFactor: 2,
    hasTouch: true,
    locale: { en: "en-GB", nb: "nb-NO", fr: "fr-FR", pt: "pt-PT" }[language],
  });
  await context.addInitScript((value) => {
    localStorage.setItem("hg_filmwork_language_v1", value);
  }, language);
  const page = await context.newPage();
  page.setDefaultTimeout(20000);
  const label = `${language}-${film.slug}-${tablet.name}`;
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  try {
    await page.goto(new URL(`#/atlas/film/${film.slug}`, SITE).href, { waitUntil: "domcontentloaded" });
    const filmPage = page.locator(".film-analysis");
    await filmPage.waitFor({ state: "visible" });
    assert.equal((await filmPage.locator("h2").textContent())?.trim(), film.title, `${label}: correct deep-linked film`);
    assert.equal(await page.locator("html").getAttribute("lang"), language, `${label}: locale`);

    const study = filmPage.locator("details.film-atlas-complete-study");
    assert.equal(await study.count(), 1, `${label}: detailed Film Study exists`);
    await study.locator(":scope > summary").click();
    const panel = study.locator(".scenario-film-study");
    await panel.waitFor({ state: "visible" });
    assert.equal(await panel.locator(".scenario-study-coverage-item").count(), 17, `${label}: all 17 areas displayed`);
    assert.equal(await panel.locator(".scenario-history-choice").count(), 3, `${label}: historical choices displayed`);

    const sources = panel.locator("details.scenario-history-sources");
    await sources.locator("summary").click();
    assert.ok(await sources.locator("li a[href^='https://']").count() > 0, `${label}: visible source links`);

    const widths = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    assert.ok(widths.document <= widths.viewport + 2, `${label}: horizontal page overflow ${JSON.stringify(widths)}`);

    const atlasWidth = await study.evaluate((node) => ({
      inner: node.clientWidth,
      scroll: node.scrollWidth,
    }));
    assert.ok(atlasWidth.scroll <= atlasWidth.inner + 2, `${label}: horizontal study overflow ${JSON.stringify(atlasWidth)}`);

    if (tablet.width <= 1100) {
      const order = await page.locator(".atlas-workspace").evaluate((workspace) => ({
        filmTop: workspace.querySelector(".film-analysis")?.getBoundingClientRect().top,
        libraryTop: workspace.querySelector(".atlas-library")?.getBoundingClientRect().top,
      }));
      assert.ok(
        Number.isFinite(order.filmTop) && Number.isFinite(order.libraryTop) && order.filmTop < order.libraryTop,
        `${label}: film must precede catalogue on narrow tablets: ${JSON.stringify(order)}`,
      );
    }

    await study.scrollIntoViewIfNeeded();
    await page.screenshot({ path: resolve(REPORT_DIR, `${label}.png`), fullPage: false });

    const next = filmPage.locator(".film-history-neighbours button").last();
    assert.ok(await next.isEnabled(), `${label}: next-film navigation available`);
    await next.click();
    await page.waitForFunction((previousTitle) =>
      document.querySelector(".film-analysis h2")?.textContent?.trim() !== previousTitle, film.title);
    assert.equal(await page.locator(".film-analysis details.film-atlas-complete-study").count(), 1,
      `${label}: film switch keeps study accessible`);
    assert.deepEqual(pageErrors, [], `${label}: no uncaught WebKit errors`);
    passed.push(label);
    console.log(`PASS ${label}`);
  } catch (error) {
    failures.push({ label, error: String(error?.stack ?? error), pageErrors });
    console.error(`FAIL ${label}: ${error?.message ?? error}`);
    try {
      await page.screenshot({ path: resolve(REPORT_DIR, `${label}-failure.png`), fullPage: true, timeout: 12000 });
    } catch {}
  } finally {
    await context.close();
  }
}

await mkdir(REPORT_DIR, { recursive: true });
let browser;
try {
  browser = await webkit.launch({ headless: true });
  for (const language of LANGUAGES) {
    for (const film of FILMS) {
      for (const tablet of TABLETS) await check(browser, language, film, tablet);
    }
  }
} catch (error) {
  failures.push({ setup: String(error?.stack ?? error) });
  console.error("WebKit launch error:", error);
} finally {
  await browser?.close();
}

await writeFile(resolve(REPORT_DIR, "summary.json"), JSON.stringify({
  scope: "WebKit tablet-width functional QA; not physical iPad or aesthetic approval",
  expected: LANGUAGES.length * FILMS.length * TABLETS.length,
  passed,
  failures,
}, null, 2) + "\n");
console.log(`WebKit iPad-sized QA: ${passed.length}/16 passed; ${failures.length} failures`);
if (failures.length || passed.length !== 16) process.exitCode = 1;
