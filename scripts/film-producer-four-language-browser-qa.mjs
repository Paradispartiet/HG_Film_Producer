#!/usr/bin/env node
/**
 * Executable Chromium journey for the three source-verified Film Producer pilots.
 * 
 * This tests actual browser DOM and navigation in EN/NB/FR/PT. It does NOT
 * certify layout aesthetics, screen-reader usability or all 614 film cases.
 *
 * Run after npm ci + installing playwright and its Chromium browser:
 *   npm run build:ui
 *   npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
 *   node scripts/film-producer-four-language-browser-qa.mjs
 */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";
import { chromium } from "playwright";

const SITE = process.env.FILMWORK_QA_URL ?? "http://127.0.0.1:4173/HG_Film_Producer/";
const REPORT_DIR = resolve(process.env.FILMWORK_QA_REPORT_DIR ?? "browser-qa-artifacts");
const LANGUAGES = ["en", "nb", "fr", "pt"];
const TARGET_IDS = [
  "scenario_12_angry_men_1957",
  "scenario_the_machinist_2004",
  "scenario_the_lives_of_others_2006",
  "scenario_lost_in_translation_2003",
];
const LANGUAGE_STORAGE_KEY = "hg_filmwork_language_v1";
const failures = [];
const checks = [];

async function bundleModule(path) {
  const result = await build({
    entryPoints: [path],
    bundle: true,
    platform: "node",
    format: "esm",
    write: false,
    logLevel: "warning",
  });
  assert.equal(result.outputFiles.length, 1, path);
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
}

const [
  scenarioData, briefData, historyData, historyCopy, sourceData, sourceCopy, caseCopy, routes,
] = await Promise.all([
  bundleModule("src/ui/data/filmScenarios.ts"),
  bundleModule("src/ui/data/scenarioProductionBriefs.ts"),
  bundleModule("src/ui/data/scenarioFilmStudyMap.ts"),
  bundleModule("src/core/filmStudyVerifiedHistoryPresentation.ts"),
  bundleModule("src/ui/data/scenarioProductionVerificationRegistry.ts"),
  bundleModule("src/core/filmStudyVerificationPresentation.ts"),
  bundleModule("src/core/productionCaseFilmStatementCopy.ts"),
  bundleModule("src/core/filmverketRoutes.ts"),
]);

const catalogue = scenarioData.getClassicFilmScenarios();
const scenarios = TARGET_IDS.map((id) => {
  const scenario = catalogue.find((candidate) => candidate.id === id);
  assert.ok(scenario, `Missing film in production catalogue: ${id}`);
  assert.ok(historyData.getSourceBackedFilmHistoryProfile(id), `No source-backed history for ${id}`);
  assert.ok(sourceData.getProductionCaseVerification(id), `No verified evidence for ${id}`);
  return scenario;
});

async function waitForServer() {
  for (let attempts = 0; attempts < 40; attempts += 1) {
    try {
      const response = await fetch(SITE);
      if (response.ok) return;
    } catch {
      // Preview server may still be starting.
    }
    await new Promise((done) => setTimeout(done, 750));
  }
  throw new Error(`Preview server did not start: ${SITE}`);
}

async function textEquals(locator, expected, description) {
  const actual = (await locator.textContent())?.trim();
  assert.equal(actual, expected, description);
}

async function runCase(browser, language, scenario) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: language === "nb" ? "nb-NO" : language === "pt" ? "pt-PT" : language === "fr" ? "fr-FR" : "en-GB" });
  await context.addInitScript((value) => {
    window.localStorage.setItem("hg_filmwork_language_v1", value);
  }, language);
  const page = await context.newPage();
  page.setDefaultTimeout(25000);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const title = scenario.film.title;
  const slug = routes.createFilmSlug(title, scenario.film.year);
  const id = scenario.id;
  const brief = briefData.resolveScenarioProductionBrief(scenario);
  const history = historyData.getSourceBackedFilmHistoryProfile(id);
  const evidence = sourceData.getProductionCaseVerification(id);
  const choices = historyData.createFilmHistoryChoices(history);
  const label = `${language}-${slug}`;

  try {
    assert.equal(choices.length, 3, `${label}: canonical quiz changed`);

    // Film Atlas: direct shareable film route and translated source-backed brief.
    await page.goto(new URL(`#/atlas/film/${slug}`, SITE).href);
    const atlas = page.locator(".film-analysis");
    await atlas.waitFor({ state: "visible" });
    await textEquals(atlas.locator("h2"), title, `${label}: Atlas title`);
    await textEquals(
      atlas.locator(".film-analysis-logline"),
      caseCopy.presentFilmCaseContent(language, brief.briefType, brief.scenarioId, brief.logline),
      `${label}: Atlas film logline`,
    );
    assert.equal(await page.locator("html").getAttribute("lang"), language, `${label}: HTML language`);
    checks.push(`${label}: atlas`);

    // Director Lab: independent route must load the same film and same display copy.
    await page.goto(new URL(`#/director/${slug}`, SITE).href);
    const director = page.locator(".film-director-reference");
    await director.waitFor({ state: "visible" });
    await textEquals(director.locator("header h2"), title, `${label}: Director film title`);
    await textEquals(
      director.locator("header p"),
      caseCopy.presentFilmCaseContent(language, brief.briefType, brief.scenarioId, brief.logline),
      `${label}: Director reference logline`,
    );
    checks.push(`${label}: director`);

    // Actual user path: Producer gateway -> catalogue search -> case card -> Film Study.
    await page.goto(new URL("#/producer", SITE).href);
    await page.locator(".producer-mode-card--recommended button").click();
    await page.locator(".scenario-search input").fill(title);
    const matchingCards = page.locator(".scenario-card").filter({
      has: page.locator("h3").getByText(title, { exact: true }),
    });
    assert.equal(await matchingCards.count(), 1, `${label}: searchable catalogue case`);
    await matchingCards.locator("button").click();

    const study = page.locator(".scenario-film-study");
    await study.waitFor({ state: "visible" });
    await textEquals(
      study.locator(".scenario-history-exercise strong").first(),
      historyCopy.presentVerifiedFilmHistoryText(language, id, history.historyQuestion),
      `${label}: historical question`,
    );
    const cards = study.locator(".scenario-history-choice-grid .scenario-history-choice");
    const answers = cards.locator(":scope > button");
    assert.equal(await answers.count(), 3, `${label}: quiz answer count`);
    for (let index = 0; index < choices.length; index += 1) {
      const choice = choices[index];
      assert.ok(choice);
      const complete = historyCopy.presentVerifiedFilmHistoryChoice(language, id, choice.label, choice.quality);
      const condensed = historyCopy.presentVerifiedFilmHistoryChoiceSummary(language, id, choice.label, choice.quality);
      await textEquals(answers.nth(index), condensed ?? complete, `${label}: option ${choice.quality}`);
      const details = cards.nth(index).locator("details.scenario-history-choice-expand");
      if (condensed) {
        assert.equal(await details.count(), 1, `${label}: source explanation disclosure ${choice.quality}`);
        assert.equal(await details.getAttribute("open"), null, `${label}: complete text initially collapsed`);
        await details.locator("summary").focus();
        await page.keyboard.press("Enter");
        assert.notEqual(await details.getAttribute("open"), null, `${label}: disclosure keyboard-open`);
        await textEquals(details.locator("p"), complete, `${label}: unchanged complete history statement`);
        await page.keyboard.press("Enter");
        assert.equal(await details.getAttribute("open"), null, `${label}: disclosure keyboard-close`);
      } else {
        assert.equal(await details.count(), 0, `${label}: unreviewed donor must retain its complete canonical answer`);
      }

      await answers.nth(index).click();
      await study.locator(`.scenario-history-feedback--${choice.quality}`).waitFor({ state: "visible" });
      await textEquals(
        study.locator(`.scenario-history-feedback--${choice.quality}`),
        historyCopy.presentVerifiedFilmHistoryText(language, id, choice.feedback),
        `${label}: historical feedback ${choice.quality}`,
      );
      assert.equal(await answers.nth(index).getAttribute("aria-pressed"), "true", `${label}: answer state`);
      const fontSize = await answers.nth(index).evaluate((element) => Number.parseFloat(getComputedStyle(element).fontSize));
      assert.ok(fontSize >= 13, `${label}: cramped option text ${fontSize}px`);
    }

    await textEquals(study.locator(".scenario-history-tags span").first(), historyCopy.presentVerifiedFilmHistoryText(language, id, history.period), `${label}: period`);
    const arcs = [history.before, history.moment, history.after];
    const arcPanels = study.locator(".scenario-history-arc article p");
    assert.equal(await arcPanels.count(), 3, `${label}: historical arc count`);
    for (let index = 0; index < 3; index += 1) {
      await textEquals(arcPanels.nth(index), historyCopy.presentVerifiedFilmHistoryText(language, id, arcs[index]), `${label}: historical arc ${index}`);
    }
    checks.push(`${label}: quiz/arc`);

    const sources = study.locator("details.scenario-history-sources");
    await sources.locator("summary").click();
    await textEquals(sources.locator(":scope > p"), sourceCopy.presentFilmStudySourceText(language, id, evidence.summary), `${label}: source summary`);
    const notes = sources.locator("li");
    assert.equal(await notes.count(), evidence.sources.length, `${label}: source count`);
    for (let index = 0; index < evidence.sources.length; index += 1) {
      const source = evidence.sources[index];
      assert.ok(source);
      const row = notes.nth(index);
      assert.equal(await row.locator("a").getAttribute("href"), source.url, `${label}: unchanged source URL`);
      await textEquals(row.locator("a"), source.title, `${label}: unchanged source title`);
      await textEquals(row.locator("p"), sourceCopy.presentFilmStudySourceText(language, id, source.note), `${label}: translated source note ${index}`);
    }
    checks.push(`${label}: sources`);

    // Human visual review is separate: screenshots are evidence, not an automatic sign-off.
    await answers.first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: resolve(REPORT_DIR, `${label}-study.png`), fullPage: false });
    await page.setViewportSize({ width: 360, height: 780 });
    const choiceWidth = await study.locator(".scenario-history-exercise").evaluate((element) => ({
      scroll: element.scrollWidth,
      client: element.clientWidth,
    }));
    assert.ok(choiceWidth.scroll <= choiceWidth.client + 2, `${label}: horizontal overflow on 360px viewport: ${JSON.stringify(choiceWidth)}`);
    await answers.first().focus();
    await page.keyboard.press("Enter");
    assert.equal(await answers.first().getAttribute("aria-pressed"), "true", `${label}: keyboard choice on mobile viewport`);
    await answers.first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: resolve(REPORT_DIR, `${label}-mobile.png`), fullPage: false });
    checks.push(`${label}: 360px mobile layout and keyboard`);
    assert.deepEqual(errors, [], `${label}: uncaught browser errors`);
    console.log(`PASS ${label} · atlas, director, quiz, evidence`);
  } catch (error) {
    failures.push({ language, id, error: String(error?.stack ?? error), browserErrors: errors });
    console.error(`FAIL ${label}: ${error?.message ?? error}`);
    try {
      await page.screenshot({ path: resolve(REPORT_DIR, `${label}-failure.png`), fullPage: true, timeout: 15000 });
    } catch (screenshotError) {
      console.error(`Screenshot unavailable ${label}: ${screenshotError?.message ?? screenshotError}`);
    }
  } finally {
    await context.close();
  }
}

await mkdir(REPORT_DIR, { recursive: true });
let browser;
try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  for (const language of LANGUAGES) {
    for (const scenario of scenarios) {
      await runCase(browser, language, scenario);
    }
  }
} catch (error) {
  failures.push({ setup: String(error?.stack ?? error) });
  console.error(`FAIL browser setup: ${error?.message ?? error}`);
} finally {
  await browser?.close();
}
const report = {
  scope: "four source-backed filmcases, four interface languages; nonvisual Chromium smoke",
  locales: LANGUAGES,
  films: TARGET_IDS,
  expectedJourneys: 16,
  completedJourneys: checks.filter((entry) => entry.endsWith(": sources")).length,
  checks,
  failures,
  limitations: [
    "Screenshots are retained for human inspection, not automatically judged.",
    "Other 610 filmcases and full career completion are outside this smoke test.",
    "Source title and publisher names remain canonical; URLs and grading remain unchanged.",
  ],
};
await writeFile(resolve(REPORT_DIR, "summary.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
console.log(`Browser QA: ${report.completedJourneys}/16 journeys, ${failures.length} failures`);
if (failures.length || report.completedJourneys !== 16) process.exitCode = 1;
