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
    assert.equal(await development.locator('input[name="script-producer-note"]').count(), 3, "Producer has three writing notes");
    const firstPreview = await development.locator(".script-note-preview").innerText();
    await development.locator('input[name="script-producer-note"][value="scene_momentum"]').check();
    const newPreview = await development.locator(".script-note-preview").innerText();
    assert.notEqual(newPreview, firstPreview, "Writing note changes live evaluation");
    await development.locator(".development-choice-panel button.primary-button").click();
    await development.locator(".development-decision-feedback").waitFor({ state: "visible" });
    assert.match(await development.locator(".development-decision-feedback").innerText(), /100/);
    await development.locator(".development-actions > button.primary-button").click();
    await awaitSaved(page, "developmentResult");
    const scriptResult = (await readSaved(page)).projects[0].developmentResult;
    assert.equal(scriptResult.path, "script");
    assert.equal(scriptResult.revisionFocusId, "scene_momentum", "Producer writing note persists");
    assert.ok(scriptResult.scoreBreakdown?.pacing > 50, "Pacing revision changes the evaluated screenplay");

    const pre = await expectPhase(page, ".pre-production-panel", "pre-production", milestones);
    await checkFirst(page, '.pre-production-panel input[name="pre-production-location"]');
    for (const discipline of ["directing", "cinematography", "editing"]) {
      await checkFirst(page, '.pre-production-panel input[name="crew-' + discipline + '"]');
    }
    const cast = pre.locator('.casting-grid input[type="checkbox"]');
    assert.ok(await cast.count() >= 2, "At least two actors available");
    await cast.nth(0).check();
    await cast.nth(1).check();
    const budgetChoice = pre.locator('.pre-budget-section input[value="crew_focus"]');
    assert.equal(await pre.locator('.pre-budget-section input[type="radio"]').count(), 3, "Three budget priorities");
    await budgetChoice.check();
    await page.waitForFunction((key) => JSON.parse(window.localStorage.getItem(key) ?? "null")?.projects?.[0]?.preProductionSelections?.budgetPriorityId === "crew_focus", SAVE_KEY);
    await pre.locator(".pre-production-actions button.primary-button").click();
    await awaitSaved(page, "preProductionResult");
    const savedPre = (await readSaved(page)).projects[0];
    assert.equal(savedPre.preProductionResult.budgetPriority.id, "crew_focus", "Funded team plan reaches the engine");
    assert.ok(savedPre.preProductionResult.budgetPriority.investmentCost > 0, "Team preparation costs actual money");
    assert.ok(savedPre.preProductionResult.budgetPriority.crewGain > 0, "Paid team preparation changes actual crew evaluation");

    await expectPhase(page, ".shoot-panel", "shoot", milestones);
    const storyHandoff = page.locator(".shoot-panel .script-to-shoot-handoff");
    await storyHandoff.waitFor({ state: "visible" });
    assert.ok((await storyHandoff.innerText()).includes("100"), "Approved screenplay note changes visible shooting pressure");
    assert.ok((await storyHandoff.innerText()).length > 60, "The producer learns the film-craft consequences");
    let days = 0;
    while (await page.locator(".shoot-panel .shoot-actions button.primary-button").count()) {
      const financeDisclosure = page.locator(".shoot-panel details.shoot-budget-details");
      const monitor = financeDisclosure.locator(".shoot-budget-monitor");
      if (days === 0) assert.equal(await financeDisclosure.getAttribute("open"), null, "Finances are secondary, collapsed by default");
      if (!(await monitor.isVisible())) await financeDisclosure.locator("summary").click();
      await monitor.waitFor({ state: "visible" });
      const previousActualSpend = days === 0 ? 0
        : (await readSaved(page)).projects[0].shootDayResults
          .reduce((sum, day) => sum + day.shootDayResult.costSpent, 0);
      assert.equal(Number(await monitor.locator(".shoot-budget-metrics").first().getAttribute("data-spent")), previousActualSpend, "Live shoot ledger must equal costs saved from resolved days");
      // Exercise the producer role against a real artistic obstacle rather than
      // just selecting a day-stopping weather event in every run.
      await page.locator('.shoot-panel .production-event-grid input[type="radio"]').nth(days % 2 === 0 ? 4 : 3).check();
      const conversation = page.locator('.shoot-panel .on-set-dialogue[aria-live="polite"]');
      await conversation.waitFor({ state: "visible" });
      if (days > 0) {
        assert.ok((await conversation.locator(".on-set-dialogue-continuity").innerText()).length > 40, "Later conversation reflects the previous producer decision");
        assert.ok((await conversation.locator(".on-set-dialogue-follow-up").innerText()).length > 90, "The current team member responds to the earlier real production challenge");
      } else {
        assert.equal(await conversation.locator(".on-set-dialogue-follow-up").count(), 0, "No invented follow-up on the first shoot day");
      }
      const beforeReply = await conversation.locator(".on-set-dialogue-producer").innerText();
      assert.ok((await conversation.locator(".on-set-dialogue-concern").innerText()).length > 40, "A real team member raises a concrete filmmaking concern");
      const creativeChoices = page.locator('.shoot-panel .producer-priority-grid input[type="radio"]');
      assert.equal(await creativeChoices.count(), 3, "Three creative producing choices, distinct from Film Director");
      const chosenPriority = days % 2 === 0 ? "performance_trust" : "story_clarity";
      await creativeChoices.nth(days % 2 === 0 ? 1 : 0).check();
      await page.waitForFunction(({ key, id }) => {
        const state = JSON.parse(window.localStorage.getItem(key) ?? "null");
        return state?.projects?.[0]?.selectedProducerPriorityId === id;
      }, { key: SAVE_KEY, id: chosenPriority });
      const afterReply = await conversation.locator(".on-set-dialogue-producer").innerText();
      assert.notEqual(afterReply, beforeReply, "Changing producer priority changes what the producer actually says to the team");
      const concreteProducerAction = await page.locator(".shoot-panel .producer-priority-card--selected small").innerText();
      assert.ok(concreteProducerAction.length > 70, "Both a cast conflict and a camera opportunity have concrete production responses");
      assert.equal(await conversation.locator(".on-set-dialogue-producer p").innerText(), concreteProducerAction,
        "Spoken producer decision matches the selected scenario action");
      assert.ok((await conversation.locator(".on-set-dialogue-reaction").innerText()).length > 25, "The team reacts to the real selected producer response");
      const expectedSteadyCost = Number(await monitor.locator(".shoot-budget-projection").getAttribute("data-forecast-cost"));
      assert.ok(Number.isFinite(expectedSteadyCost) && expectedSteadyCost >= 0, "Event selection provides a real projected day cost");
      const responseRadios = page.locator('.shoot-panel .shoot-strategy-grid input[type="radio"]');
      assert.equal(await responseRadios.count(), 5, "Five actionable shoot responses");
      const chosenResponse = days === 0 ? "extra_takes" : days === 1 ? "trim_scope" : days === 2 ? "replan_shoot" : "steady";
      if (days < 3) {
        await responseRadios.nth(days === 0 ? 1 : days === 1 ? 3 : 4).check();
        await page.waitForFunction(({ key, id }) => {
          const state = JSON.parse(window.localStorage.getItem(key) ?? "null");
          return state?.projects?.[0]?.selectedShootStrategyId === id;
        }, { key: SAVE_KEY, id: chosenResponse });
      }
      const preview = monitor.locator(".shoot-budget-projection");
      const predictedCost = Number(await preview.getAttribute("data-forecast-cost"));
      const projectedHeadroom = Number(await preview.getAttribute("data-forecast-headroom"));
      assert.ok(Number.isFinite(projectedHeadroom), "Risk preview must show a numeric reserve");
      assert.ok(["healthy", "tight", "over"].includes(await preview.getAttribute("data-forecast-risk")), "Preview risk uses real cost thresholds");
      if (days === 0) assert.ok(predictedCost > expectedSteadyCost, "Extra takes must visibly increase the projected shoot cost");
      if (days === 1 || days === 2) assert.ok(predictedCost < expectedSteadyCost, "Budget response must visibly cut the projected shoot cost");
      await page.locator(".shoot-panel .shoot-actions button.primary-button").click();
      days += 1;
      assert.ok(days < 50, "Shoot loop should terminate");
      await awaitSaved(page, "shoot-day", days);
      const savedDay = (await readSaved(page)).projects[0].shootDayResults[days - 1];
      assert.equal(savedDay.shootDayResult.costSpent, predictedCost, "Budget forecast and recorded day cost use the same engine");
      assert.equal(savedDay.strategySummary?.id, chosenResponse);
      assert.equal(savedDay.producerPrioritySummary?.id, chosenPriority, "Creative producer choice is persisted with the day");
      assert.equal(savedDay.practicalActionVersion, 2, "New reports record the practical action version without changing the priority engine");
      assert.equal(savedDay.selectedEventId, days % 2 === 1 ? "production_event_actor_conflict" : "production_event_camera_breakthrough", "Concrete dilemma survives into the saved production report");
      if (days > 1) {
        assert.equal(savedDay.teamContinuity?.previousEventId, days % 2 === 0 ? "production_event_actor_conflict" : "production_event_camera_breakthrough", "Continuation remembers the prior real set challenge");
        assert.equal(savedDay.teamContinuity?.previousWasMatched, true, "A supported crew relationship carries into the next shooting day");
      } else {
        assert.equal(savedDay.teamContinuity, undefined, "First shooting day has no invented relationship history");
      }
      assert.equal(savedDay.producerPrioritySummary?.recommendedId, chosenPriority, "Matched obstacle and producer support are explained");
      assert.ok(savedDay.producerPrioritySummary?.takeQualityDelta >= 0, "Creative support cannot hurt usable footage");
      if (days === 1) {
        assert.ok(savedDay.strategySummary.costDelta > 0, "Extra takes increase actual daily costs");
        assert.equal(savedDay.strategySummary.delayDaysDelta, 1, "Extra takes add a real shooting delay");
      }
      if (days === 2) {
        assert.ok(savedDay.strategySummary.costDelta < 0, "Reducing coverage saves real money");
        assert.ok(savedDay.strategySummary.takeQualityDelta <= 0, "Reducing coverage never improves the footage");
      }
      if (days === 3) {
        assert.ok(savedDay.strategySummary.costDelta < 0, "Re-planning saves real money");
        assert.equal(savedDay.strategySummary.delayDaysDelta, 1, "Re-planning adds one real shooting day");
      }
      // Once the last day is resolved, the UI advances straight to post-production.
      // The day feedback is therefore verified while another shoot day remains.
      const liveShoot = !(await readSaved(page)).projects[0].shootResult;
      if (liveShoot) {
        const savedConversation = page.locator(".shoot-panel details.on-set-conversation-review").first();
        assert.equal(await savedConversation.count(), 1, "Completed day retains a replayable team conversation");
        await savedConversation.locator("summary").click();
        await savedConversation.locator(".on-set-dialogue-producer").waitFor({ state: "visible" });
        assert.equal(await savedConversation.locator(".on-set-dialogue-producer p").innerText(), concreteProducerAction, "Both situation types replay their saved practical producer action");
        assert.equal(await savedConversation.locator(".on-set-dialogue-follow-up").count(), days > 1 ? 1 : 0, "Replayed dialogue preserves genuine cross-day follow-up");
        const producerOutcome = page.locator(".shoot-panel .producer-priority-feedback").first();
        await producerOutcome.waitFor({ state: "visible" });
        assert.ok((await producerOutcome.innerText()).length > 45, "Creative producing teaches why the support mattered");
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
    assert.equal((await readSaved(page)).projects[0].shootResult.scriptRevisionFocusId, "scene_momentum", "The shoot used the producer's approved script revision");

    const post = await expectPhase(page, ".post-production-panel", "post-production", milestones);
    const decisions = post.locator(".post-decision-section");
    assert.equal(await decisions.count(), 5, "Five editorial / sound / music / color / trailer choices");
    for (let i = 0; i < 5; i++) {
      await decisions.nth(i).locator('input[type="radio"]').first().check();
    }
    const boldCut = post.locator('.editing-tradeoff-section input[value="bold_cut"]');
    await boldCut.check();
    assert.equal(await boldCut.isChecked(), true, "Bold cut must be selected before locking");
    await post.locator(".post-production-actions button.primary-button").click();
    await awaitSaved(page, "postProductionResult");
    const savedPost = (await readSaved(page)).projects[0];
    assert.equal(savedPost.postProductionChoices.editingApproachId, "bold_cut", "Editing choice must persist in career save");
    assert.equal(savedPost.postProductionResult.editingApproachId, "bold_cut", "Editing choice must reach the game engine");
    assert.deepEqual(savedPost.postProductionResult.scriptCraftScores, scriptResult.scoreBreakdown, "Locked cut uses approved screenplay conflict, pacing and emotion");
    assert.ok(savedPost.postProductionResult.testScreeningResult.notes.some((note) => note.includes("Approved screenplay craft")), "The actual screening used screenplay craft evidence");
    assert.ok(savedPost.postProductionResult.testScreeningResult.notes.some((note) => note.includes("Editing approach bold_cut")), "Editing compromise must affect the screening result");
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
    const craftEvidence = page.locator(".post-production-result-panel .script-to-screening-handoff");
    await craftEvidence.waitFor({ state: "visible" });
    assert.ok((await craftEvidence.innerText()).includes(String(scriptResult.scoreBreakdown.pacing)), "The screenplay's original craft scores remain readable after post-production");
    const editingEvidence = page.locator(".post-production-result-panel .editing-tradeoff-evidence");
    await editingEvidence.waitFor({ state: "visible" });
    assert.ok((await editingEvidence.innerText()).length > 20, "Creative consequence must be visible after locking");
    assert.match(await screenplayEvidence.innerText(), new RegExp(String(completedScript.overallScore)));
    await finishedPostRow.locator("button").click();

    const release = await expectPhase(page, ".release-step-panel", "release", milestones);
    await release.locator(".release-option-grid--strategies input[type=radio]").first().check();
    await release.locator(".release-option-grid--festivals input[type=radio]").first().check();
    await release.locator(".release-actions button.primary-button").click();
    await awaitSaved(page, "releaseResult");
    const completedFilm = (await readSaved(page)).projects[0];
    const spentOnPreparation = completedFilm.preProductionResult.budgetPriority.investmentCost;
    const postSpend = completedFilm.postProductionResult.postProductionEvaluation.totalCost;
    assert.ok(completedFilm.releaseResult.filmResult.budgetSpent >= spentOnPreparation + postSpend,
      "Pre-production investment must flow into film expenses at release");
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
