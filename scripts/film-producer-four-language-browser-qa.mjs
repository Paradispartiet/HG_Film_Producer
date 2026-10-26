#!/usr/bin/env node
/**
 * Executable Chromium journey for the twelve source-verified Film Producer pilots.
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
  "scenario_bicycle_thieves_1948",
  "scenario_vertigo_1958",
  "scenario_breathless_1960",
  "scenario_the_400_blows_1959",
  "scenario_the_shining_1980",
  "scenario_one_flew_over_the_cuckoo_s_nest_1975",
  "scenario_the_celebration_1998",
  "scenario_the_idiots_1998",
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
    // Film Director is a choice-only game: all 16 directing decisions and
    // all nine shot decisions must be selectable without entering free text.
    const directorPage = page.locator(".director-project-page");
    const briefSelects = directorPage.locator(".film-director-field select");
    assert.equal(await briefSelects.count(), 16, `${label}: every directing decision has a menu`);
    assert.equal(await directorPage.locator("input, textarea, [contenteditable='true']").count(), 0, `${label}: Director must not ask for typing`);
    assert.ok(await briefSelects.nth(1).locator("option").count() >= 4, `${label}: real scene choices`);
    if (id === TARGET_IDS[0]) {
      const contextSelect = briefSelects.nth(1);
      assert.equal(await contextSelect.locator("option").count(), 5, `${label}: film-specific option alongside three authored alternatives`);
      await contextSelect.selectOption({ index: 4 });
      assert.ok((await contextSelect.inputValue()).trim(), `${label}: film-specific choice changes the brief`);
      assert.equal(await directorPage.locator(".film-director-field .director-selected-choice").count() > 0, true, `${label}: selected director reasoning is readable`);
      await directorPage.locator(".director-shot-list-section > header button").click();
      const shotSelects = directorPage.locator(".director-shot-field select");
      assert.equal(await shotSelects.count(), 9, `${label}: every shot field is selectable`);
      for (const count of await Promise.all(Array.from({ length: 9 }, (_, index) => shotSelects.nth(index).locator("option").count()))) {
        assert.ok(count >= 4, `${label}: shot choices include at least three alternatives`);
      }
      await shotSelects.first().selectOption({ index: 1 });
      const savedBrief = await contextSelect.inputValue();
      const savedShot = await shotSelects.first().inputValue();
      await page.reload();
      await page.locator(".film-director-field select").first().waitFor({ state: "visible" });
      assert.equal(await page.locator(".film-director-field select").nth(1).inputValue(), savedBrief, `${label}: selected brief is persisted`);
      assert.equal(await page.locator(".director-shot-field select").first().inputValue(), savedShot, `${label}: selected shot is persisted`);
      await page.setViewportSize({ width: 320, height: 720 });
      assert.ok(await page.locator(".film-director-field select").first().evaluate((el) => el.getBoundingClientRect().height >= 44), `${label}: touch-size options`);
      assert.equal(await directorPage.locator("input, textarea, [contenteditable='true']").count(), 0, `${label}: no writing at mobile width`);
      await page.setViewportSize({ width: 1440, height: 900 });
    }
    // Shared FilmWork navigation and readable touch UI across all sections.
    if (id === TARGET_IDS[0]) {
      await page.setViewportSize({ width: 320, height: 720 });
      await page.goto(new URL("#/", SITE).href);
      const appTabs = page.locator(".filmwork-app-navigation .filmwork-app-tab");
      assert.equal(await appTabs.count(), 6, `${label}: five destinations plus More`);
      const bounds = await appTabs.evaluateAll((tabs) => tabs.map((tab) => {
        const box = tab.getBoundingClientRect();
        return { height: box.height, width: box.width, visible: box.right > 0 };
      }));
      assert.ok(bounds.every((box) => box.height >= 48 && box.width >= 40 && box.visible), `${label}: usable bottom tabs at 320px`);
      const navPosition = await page.locator(".filmwork-app-navigation").evaluate((nav) => getComputedStyle(nav).position);
      assert.equal(navPosition, "fixed", `${label}: bottom navigation on phones`);
      assert.equal(await page.locator(".filmwork-app-language select").inputValue(), language, `${label}: language retained`);
      assert.equal(await page.locator(".filmwork-app-shell .filmverket-header:visible").count(), 0, `${label}: no duplicate website navigation`);
      await page.locator(".filmwork-app-more > button").click();
      await page.locator(".filmwork-app-more-menu button").first().click();
      await page.locator(".filmwork-app-navigation [aria-current='page']").waitFor({ state: "visible" });
      assert.ok(page.url().includes("#/history"), `${label}: history remains reachable from More`);
      await page.locator(".filmwork-app-tab").first().click();
      assert.ok(page.url().endsWith("#/"), `${label}: home tab navigates back`);
      assert.equal(await page.locator(".craft-library-trigger:visible, .research-control-trigger:visible").count(), 0, `${label}: floating tools cannot obscure mobile cards`);
      await page.locator(".filmwork-app-more > button").click();
      await page.locator(".filmwork-app-more-menu button").last().click();
      await page.locator(".craft-library-panel").waitFor({ state: "visible" });
      await page.locator(".craft-library-header > button").click();

      // Film School must use the global upper-right language selector only.
      await appTabs.nth(3).click();
      const schoolSelector = page.locator(".school-course-selector");
      await schoolSelector.waitFor({ state: "visible" });
      assert.equal(await page.locator(".filmwork-app-language select:visible").count(), 1, `${label}: exactly one visible language picker`);
      assert.equal(await page.locator(".school-course-language-selector").count(), 0, `${label}: no language buttons inside lessons`);
      assert.equal(await schoolSelector.evaluate((node) => getComputedStyle(node).position), "relative", `${label}: course picker must not cover the lesson`);
      await schoolSelector.locator("summary").click();
      assert.equal(await schoolSelector.locator(".school-course-list button").count(), 6, `${label}: all six course destinations remain available`);
      assert.equal(await schoolSelector.locator("details").getAttribute("open"), "", `${label}: course selector expanded before course change`);
      await schoolSelector.locator(".school-course-list button").nth(1).click();
      assert.equal(await page.locator(".school-course-selector details").getAttribute("open"), null, `${label}: course menu closes after selection`);
      assert.equal(await page.locator(".school-course-language-selector").count(), 0, `${label}: screenplay course has no duplicate language buttons`);
      assert.equal(await page.locator(".filmwork-app-language select").inputValue(), language, `${label}: language stays synchronized across courses`);
      assert.equal(await page.locator(".school-course-selector").evaluate((node) => getComputedStyle(node).position), "relative", `${label}: screenplay course picker stays in the page flow`);
      const schoolPageWidth = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
        offenders: [...document.querySelectorAll(".filmwork-app-shell *")]
          .map((node) => ({ node: node.tagName.toLowerCase() + (typeof node.className === "string" ? "." + node.className.trim().split(/\\s+/).slice(0, 2).join(".") : ""), right: Math.round(node.getBoundingClientRect().right) }))
          .filter((item) => item.right > document.documentElement.clientWidth + 2).slice(0, 12),
      }));
      assert.ok(schoolPageWidth.scroll <= schoolPageWidth.viewport + 2, `${label}: no horizontal overflow in School on 320px phone: ${JSON.stringify(schoolPageWidth)}`);
      await page.setViewportSize({ width: 1440, height: 900 });
      checks.push(`${label}: app-shell-navigation`);
    }
    checks.push(`${label}: director`);

    // The Idiots is a verified history case, but its active production brief is
    // still seed_fallback; the existing Producer catalogue deliberately omits
    // all non-production_case briefs. Do not invent a game mission merely to
    // satisfy this browser smoke: verify the actually exposed Atlas/Director
    // routes and source-backed presentation, recording this limited scope.
    if (id === "scenario_the_idiots_1998") {
      assert.equal(brief.briefType, "seed_fallback", `${label}: original seeded gameplay must remain unchanged`);
      assert.equal(evidence.status, "verified", `${label}: source evidence remains verified`);
      await page.goto(new URL("#/producer", SITE).href);
      await page.locator(".producer-mode-card--recommended button").click();
      await page.locator(".scenario-search input").fill(title);
      assert.equal(await page.locator(".scenario-card").filter({
        has: page.locator("h3").getByText(title, { exact: true }),
      }).count(), 0, `${label}: seed-fallback is intentionally excluded from playable case cards`);
      for (const choice of choices) {
        const complete = historyCopy.presentVerifiedFilmHistoryChoice(language, id, choice.label, choice.quality);
        const short = historyCopy.presentVerifiedFilmHistoryChoiceSummary(language, id, choice.label, choice.quality);
        assert.ok(complete.trim() && short?.trim(), `${label}: all historical source choices have presentations`);
        if (language !== "en") assert.notEqual(complete, choice.label, `${label}: translated source-backed choice`);
      }
      // Use a fresh tab to exercise the canonical deep link at mobile width.
      // Navigation from the Producer nested flow is a different state transition.
      const mobile = await context.newPage();
      mobile.on("pageerror", (error) => errors.push(error.message));
      await mobile.setViewportSize({ width: 360, height: 780 });
      await mobile.goto(new URL(`#/atlas/film/${slug}`, SITE).href);
      const mobileLogline = mobile.locator(".film-analysis-logline");
      await mobileLogline.waitFor({ state: "visible" });
      await textEquals(mobileLogline, caseCopy.presentFilmCaseContent(language, brief.briefType, id, brief.logline), `${label}: 360px translated Atlas premise`);
      await mobile.screenshot({ path: resolve(REPORT_DIR, `${label}-seeded-atlas-mobile.png`), fullPage: false });
      await mobile.close();
      checks.push(`${label}: seeded-preview`);
      assert.deepEqual(errors, [], `${label}: uncaught browser errors`);
      console.log(`PASS ${label} · Atlas, Director, seeded preview and verified historical data; Producer mission not yet authored`);
      return;
    }

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
      assert.ok(condensed, `${label}: all three source-locked options need a concise label`);
      if (language !== "en") {
        assert.notEqual(complete, choice.label, `${label}: historical explanation must be localized for ${choice.quality}`);
      }
      await textEquals(answers.nth(index), condensed, `${label}: option ${choice.quality}`);
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
  scope: "eleven playable case films (44 complete Producer journeys) and one seeded case (4 Atlas/Director previews), four interface languages; nonvisual Chromium smoke",
  locales: LANGUAGES,
  films: TARGET_IDS,
  expectedJourneys: 48,
  fullProducerJourneys: checks.filter((entry) => entry.endsWith(": sources")).length,
  seededPreviewJourneys: checks.filter((entry) => entry.endsWith(": seeded-preview")).length,
  completedJourneys: checks.filter((entry) => entry.endsWith(": sources") || entry.endsWith(": seeded-preview")).length,
  checks,
  failures,
  limitations: [
    "Screenshots are retained for human inspection, not automatically judged.",
    "Other 602 filmcases and full career completion are outside this smoke test.",
    "The Idiots has a verified film-history profile but a seed_fallback brief: its four journeys test Atlas/Director/mobile and source data, not the unavailable Producer quiz UI.",
    "Source title and publisher names remain canonical; URLs and grading remain unchanged.",
  ],
};
await writeFile(resolve(REPORT_DIR, "summary.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
console.log(`Browser QA: ${report.completedJourneys}/48 journeys (${report.fullProducerJourneys} full Producer + ${report.seededPreviewJourneys} seeded Atlas/Director), ${failures.length} failures`);
if (failures.length || report.completedJourneys !== 48) process.exitCode = 1;
