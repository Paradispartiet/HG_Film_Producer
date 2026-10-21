#!/usr/bin/env node
/* Fresh browser journey. No preloaded Film One state: all production stages are
 * completed by interacting with the actual Studio Career UI.
 */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";

const SITE = process.env.FILMWORK_QA_URL ?? "http://127.0.0.1:4173/HG_Film_Producer/";
const REPORT_DIR = resolve(process.env.FILMWORK_QA_REPORT_DIR ?? "browser-qa-artifacts");
const SAVE_KEY = "hg-film-producer-career-run-v1";
const cases = [
  { lang: "en", viewport: { width: 1440, height: 900 } },
  { lang: "nb", viewport: { width: 360, height: 780 } }
];
const results = [];

const readSaved = (page) => page.evaluate((key) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}, SAVE_KEY);
async function awaitSaved(page, key, count = 1) {
  await page.waitForFunction(({ storageKey, key, count }) => {
    const state = JSON.parse(window.localStorage.getItem(storageKey) ?? "null");
    const first = state?.projects?.[0];
    if (key === "setup") return state?.projects?.length === 1;
    if (key === "film-two") return state?.projects?.length === 2;
    if (!first) return false;
    if (key === "shoot-day") return first.shootDayResults?.length >= count;
    return Boolean(first[key]);
  }, { storageKey: SAVE_KEY, key, count }, { timeout: 25000 });
}
async function checkFirst(page, selector) {
  const target = page.locator(selector).first();
  await target.check();
  assert.equal(await target.isChecked(), true, "Not selected: " + selector);
}
async function continueCareer(page, alreadySaved) {
  await page.goto(new URL("#/producer", SITE).href);
  const card = page.locator(".producer-mode-card:not(.producer-mode-card--recommended)");
  await card.locator(alreadySaved ? ".filmverket-primary-action" : ".filmverket-secondary-action").click();
}
async function expectPhase(page, selector, label, milestones) {
  const panel = page.locator(".next-project-panel").last().locator(selector);
  await panel.waitFor({ state: "visible" });
  assert.equal(await page.locator(".studio-career-primary-action").count(), 1, label + ": one primary next action");
  assert.equal(await page.locator(".studio-career-phase-step--in-progress").count(), 1, label + ": one current production phase");
  milestones.push({ label, reached: Date.now() });
  return panel;
}
async function run(browser, spec) {
  const context = await browser.newContext({ viewport: spec.viewport });
  await context.addInitScript((lang) => {
    window.localStorage.setItem("hg_filmwork_language_v1", lang);
  }, spec.lang);
  const page = await context.newPage();
  page.setDefaultTimeout(25000);
  const milestones = [], errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  try {
    await continueCareer(page, false);
    assert.equal(await readSaved(page), null, "Journey must start without a saved career");
    const setup = page.locator(".setup-panel");
    await setup.waitFor({ state: "visible" });
    await setup.locator(".setup-section input[type=text]").first().fill("Browser Test Studio");
    await checkFirst(page, '.setup-panel input[name="strategic-goal"]');
    await setup.locator(".setup-section input[type=text]").last().fill("First Browser Film");
    await checkFirst(page, '.setup-panel input[name="genre"]');
    await checkFirst(page, '.setup-panel input[name="script-template"]');
    await setup.locator('.setup-actions button[type="submit"]').click();
    await awaitSaved(page, "setup");

    const development = await expectPhase(page, ".development-panel", "development", milestones);
    await development.locator(".development-path-grid button").nth(2).click();
    await development.locator(".script-starter-card").waitFor({ state: "visible" });
    await development.locator(".development-choice-panel button.primary-button").click();
    await development.locator(".development-decision-feedback").waitFor({ state: "visible" });
    assert.match(await development.locator(".development-decision-feedback").innerText(), /100/);
    await development.locator(".development-actions > button.primary-button").click();
    await awaitSaved(page, "developmentResult");
    assert.equal((await readSaved(page)).projects[0].developmentResult.path, "script");

    const pre = await expectPhase(page, ".pre-production-panel", "pre-production", milestones);
    await checkFirst(page, '.pre-production-panel input[name="pre-production-location"]');
    for (const discipline of ["directing", "cinematography", "editing"]) {
      await checkFirst(page, '.pre-production-panel input[name="crew-' + discipline + '"]');
    }
    const cast = pre.locator('.casting-grid input[type="checkbox"]');
    assert.ok(await cast.count() >= 2, "At least two actors available");
    await cast.nth(0).check();
    await cast.nth(1).check();
    await pre.locator(".pre-production-actions button.primary-button").click();
    await awaitSaved(page, "preProductionResult");

    await expectPhase(page, ".shoot-panel", "shoot", milestones);
    let days = 0;
    while (await page.locator(".shoot-panel .shoot-actions button.primary-button").count()) {
      await checkFirst(page, '.shoot-panel .production-event-grid input[type="radio"]');
      const responseRadios = page.locator('.shoot-panel .shoot-strategy-grid input[type="radio"]');
      assert.equal(await responseRadios.count(), 3, "Three actionable shoot responses");
      if (days === 0) {
        await responseRadios.nth(1).check();
        await page.waitForFunction((key) => {
          const state = JSON.parse(window.localStorage.getItem(key) ?? "null");
          return state?.projects?.[0]?.selectedShootStrategyId === "extra_takes";
        }, SAVE_KEY);
      }
      await page.locator(".shoot-panel .shoot-actions button.primary-button").click();
      days += 1;
      assert.ok(days < 50, "Shoot loop should terminate");
      await awaitSaved(page, "shoot-day", days);
      const savedDay = (await readSaved(page)).projects[0].shootDayResults[days - 1];
      assert.equal(savedDay.strategySummary?.id, days === 1 ? "extra_takes" : "steady");
      if (days === 1) {
        assert.ok(savedDay.strategySummary.costDelta > 0, "Extra takes increase actual daily costs");
        assert.equal(savedDay.strategySummary.delayDaysDelta, 1, "Extra takes add a real shooting delay");
      }
      // Once the last day is resolved, the UI advances straight to post-production.
      // The day feedback is therefore verified while another shoot day remains.
      const liveShoot = !(await readSaved(page)).projects[0].shootResult;
      if (liveShoot) {
        const strategyOutcome = page.locator(".shoot-panel .shoot-strategy-consequence").first();
        await strategyOutcome.waitFor({ state: "visible" });
        assert.ok((await strategyOutcome.innerText()).length > 20, "Response tradeoff shown alongside saved result");
        const latestOutcome = page.locator(".shoot-panel .shoot-decision-consequence").first();
        await latestOutcome.waitFor({ state: "visible" });
        assert.ok((await latestOutcome.locator("strong").innerText()).trim().length > 0, "Selected event is visible in outcome");
        if (days > 1) {
          const past = page.locator(".shoot-panel details.shoot-prior-days");
          assert.equal(await past.count(), 1, "Older reports are grouped");
          assert.equal(await past.getAttribute("open"), null, "Older reports start collapsed");
        }
      }
      if (days === 1) {
        await page.reload();
        await page.locator(".producer-mode-card:not(.producer-mode-card--recommended) .filmverket-primary-action").click();
        assert.equal((await readSaved(page)).projects[0].shootDayResults.length, 1, "Shoot day survives reload");
        await page.locator(".shoot-panel").waitFor({ state: "visible" });
      }
    }
    assert.ok(days > 0, "Shoot was actually played");
    await awaitSaved(page, "shootResult");

    const post = await expectPhase(page, ".post-production-panel", "post-production", milestones);
    const decisions = post.locator(".post-decision-section");
    assert.equal(await decisions.count(), 5, "Five editorial / sound / music / color / trailer choices");
    for (let i = 0; i < 5; i++) {
      await decisions.nth(i).locator('input[type="radio"]').first().check();
    }
    await post.locator(".post-production-actions button.primary-button").click();
    await awaitSaved(page, "postProductionResult");
    const savedPost = (await readSaved(page)).projects[0];
    const completedScript = savedPost.developmentResults.find((action) => action.path === "script");
    assert.ok(completedScript, "Script action must be available even after production advances");
    assert.ok(savedPost.postProductionResult.testScreeningResult.notes.some((note) =>
      note.includes(completedScript.overallScore + "/100")
    ), "Script score was actually used during the screening");
    // Reopen the finished post-production step and verify player-facing evidence.
    const finishedPostRow = page.locator(".completed-phase-row").last();
    await finishedPostRow.locator("button").click();
    const screenplayEvidence = page.locator(".post-production-result-panel .script-screening-evidence");
    await screenplayEvidence.waitFor({ state: "visible" });
    assert.match(await screenplayEvidence.innerText(), new RegExp(String(completedScript.overallScore)));
    await finishedPostRow.locator("button").click();

    const release = await expectPhase(page, ".release-step-panel", "release", milestones);
    await release.locator(".release-option-grid--strategies input[type=radio]").first().check();
    await release.locator(".release-option-grid--festivals input[type=radio]").first().check();
    await release.locator(".release-actions button.primary-button").click();
    await awaitSaved(page, "releaseResult");
    // The completed release can be reopened without changing the saved outcome.
    const completedRelease = page.locator(".completed-phase-row").last();
    await completedRelease.locator("button").click();
    const decisionReview = page.locator(".release-step-panel .film-decision-review");
    await decisionReview.waitFor({ state: "visible" });
    assert.equal(await decisionReview.locator(".film-decision-review-stage").count(), 4, "Four production stages explained");
    assert.equal(await decisionReview.locator(".film-decision-review-lesson strong").count(), 1, "A next-film learning suggestion is present");
    const savedRelease = (await readSaved(page)).projects[0].releaseResult;
    const scoreText = await decisionReview.locator(".film-decision-review-final .film-decision-review-signal strong").allTextContents();
    assert.deepEqual(scoreText.map((value) => Number(value.split("/")[0])), [
      savedRelease.filmResult.quality,
      savedRelease.filmResult.audienceAppeal,
      savedRelease.filmResult.criticalAppeal
    ], "Film outcome is read from the saved result");
    const reviewWidth = await decisionReview.evaluate((el) => ({ width: el.clientWidth, scroll: el.scrollWidth }));
    assert.ok(reviewWidth.scroll <= reviewWidth.width + 2, "Decision review overflows: " + JSON.stringify(reviewWidth));
    await completedRelease.locator("button").click();

    const review = await expectPhase(page, ".career-application-panel", "career review", milestones);
    await review.locator(".career-application-heading button.primary-button").click();
    await awaitSaved(page, "careerApplicationResult");
    const completed = (await readSaved(page)).projects[0];
    assert.equal(completed.careerApplicationResult.updatedCareerState.completedFilms.length, 1);
    assert.equal(completed.shootDayResults.length, days);
    assert.equal(await page.locator(".studio-career-phase-step--complete").count(), 6);
    const debrief = page.locator(".studio-career-debrief:not(.studio-career-debrief--handoff)");
    await debrief.waitFor({ state: "visible" });
    const measuredStages = debrief.locator(".studio-career-debrief-step");
    assert.equal(await measuredStages.count(), 5, "The film debrief should show five genuine production results");
    const observedValues = [
      completed.developmentResult.pipelineStep.score,
      completed.preProductionResult.teamEvaluation.overall,
      completed.shootResult.shootEvaluation.averageTakeQuality,
      completed.postProductionResult.postProductionEvaluation.lockedCutQuality,
      completed.releaseResult.releaseOutcomeEvaluation.overall,
    ];
    for (let index = 0; index < observedValues.length; index += 1) {
      assert.equal(Number(await measuredStages.nth(index).locator(".studio-career-debrief-value strong").innerText()), observedValues[index], "The visible score must match the saved engine result");
    }
    const closedYear = debrief.locator(".studio-career-debrief-carryover");
    assert.equal(await closedYear.count(), 1, "Year-close net changes shown separately from the production");
    assert.ok((await closedYear.innerText()).includes(String(Math.abs(completed.careerApplicationResult.reputationDelta))), "Actual reputation change shown");

    await page.screenshot({ path: resolve(REPORT_DIR, "career-fresh-" + spec.lang + "-completed.png"), fullPage: false });

    const setupTwo = page.locator(".next-project-setup-section");
    await setupTwo.waitFor({ state: "visible" });
    await page.locator(".studio-career-primary-action").click();
    const form = setupTwo.locator("form.next-project-form");
    await form.locator('input[type="text"]').fill("Second Browser Film");
    await form.locator('input[name="genre"]').first().check();
    await form.locator('input[name="script-template"]').first().check();
    await form.locator('button[type="submit"]').click();
    await awaitSaved(page, "film-two");
    const finalState = await readSaved(page);
    assert.equal(finalState.projects[0].careerApplicationResult.completedFilmRecord.projectId, completed.careerApplicationResult.completedFilmRecord.projectId);
    assert.equal(finalState.projects[1].run.project.title, "Second Browser Film");
    assert.equal(await page.locator(".past-project-summary").count(), 1);
    const handoff = page.locator(".studio-career-debrief--handoff");
    assert.equal(await handoff.count(), 1, "Film Two should be able to review Film One's decisions");
    assert.equal(await handoff.getAttribute("open"), null, "The retrospective stays compact by default");
    await handoff.locator("summary").click();
    assert.equal(await handoff.locator(".studio-career-debrief-step").count(), 5);
    const handoffBounds = await handoff.evaluate((el) => ({ width: el.clientWidth, scroll: el.scrollWidth }));
    assert.ok(handoffBounds.scroll <= handoffBounds.width + 2, "Film Two history overflows: " + JSON.stringify(handoffBounds));

    assert.equal(await page.locator(".studio-career-primary-action").count(), 1);
    const overflow = await page.locator(".project-hero--focused").last().evaluate((el) => ({ width: el.clientWidth, scroll: el.scrollWidth }));
    assert.ok(overflow.scroll <= overflow.width + 2, "Film Two overflows: " + JSON.stringify(overflow));
    await page.screenshot({ path: resolve(REPORT_DIR, "career-fresh-" + spec.lang + "-film-two.png"), fullPage: false });
    assert.deepEqual(errors, [], "No browser errors");
    results.push({ ...spec, days, milestones, passed: true });
    console.log("PASS fresh Studio Career " + spec.lang + " " + spec.viewport.width + "px: setup -> all phases -> Film Two (" + days + " shoot days)");
  } catch (error) {
    await page.screenshot({ path: resolve(REPORT_DIR, "career-fresh-" + spec.lang + "-failure.png"), fullPage: true }).catch(() => undefined);
    results.push({ ...spec, milestones, passed: false, error: String(error?.stack ?? error), browserErrors: errors });
    console.error("FAIL fresh Studio Career " + spec.lang + ": " + String(error?.message ?? error));
  } finally {
    await context.close();
  }
}

await mkdir(REPORT_DIR, { recursive: true });
let browser;
try {
  browser = await chromium.launch({ headless: true });
  for (const spec of cases) await run(browser, spec);
} catch (error) {
  results.push({ setupError: String(error?.stack ?? error), passed: false });
} finally {
  await browser?.close();
}
await writeFile(resolve(REPORT_DIR, "career-fresh-report.json"), JSON.stringify(results, null, 2) + "\n");
if (results.length !== cases.length || results.some((r) => !r.passed)) process.exitCode = 1;
