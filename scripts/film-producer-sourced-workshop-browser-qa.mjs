#!/usr/bin/env node
/**
 * Targeted browser interaction QA for all seven hundred and forty-one sourced film-workshop decisions.
 * No new workflow job; not a substitute for physical iPad or editorial review.
 */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";
import { chromium, webkit } from "playwright";

const tablet = process.argv.includes("--webkit");
const SITE = process.env.FILMWORK_QA_URL ?? "http://127.0.0.1:4173/HG_Film_Producer/";
const REPORT_DIR = resolve(tablet ? "ipad-webkit-qa-artifacts" : "browser-qa-artifacts");
const languages = ["en", "nb", "fr", "pt"];
const statuses = {
  en: ["The sources point to a different production choice", "Supported by the cited production evidence"],
  nb: ["Kildene peker mot et annet produksjonsvalg", "Valget støttes av de oppgitte produksjonskildene"],
  fr: ["Les sources indiquent un autre choix de production", "Choix confirmé par les sources de production"],
  pt: ["As fontes indicam outra escolha de produção", "Escolha sustentada pelas fontes de produção"],
};
const failures = [], passed = [];

async function bundle(path) {
  const result = await build({ entryPoints: [path], bundle: true, platform: "node", format: "esm", write: false, logLevel: "warning" });
  assert.equal(result.outputFiles.length, 1);
  return import("data:text/javascript;base64," + Buffer.from(result.outputFiles[0].text).toString("base64"));
}

const [data, scenarios, briefs] = await Promise.all([
  bundle("src/ui/data/scenarioProductionSourceWorkshops.ts"),
  bundle("src/ui/data/filmScenarios.ts"),
  bundle("src/ui/data/scenarioProductionBriefs.ts"),
]);
const catalogue = scenarios.getClassicFilmScenarios();
const cases = data.SOURCE_BACKED_CASE_WORKSHOPS.map(workshop => {
  const scenario = catalogue.find(s => s.id === workshop.scenarioId);
  assert.ok(scenario, "Missing case: " + workshop.scenarioId);
  assert.equal(briefs.resolveScenarioProductionBrief(scenario).briefType, "production_case", "Missing playable brief: " + workshop.scenarioId);
  return { workshop, scenario };
});
assert.equal(cases.length, 247);
assert.equal(cases.reduce((n, c) => n + c.workshop.questions.length, 0), 741);

async function check(browser, language, item) {
  const context = await browser.newContext({
    viewport: tablet ? { width: 768, height: 1024 } : { width: 1440, height: 900 },
    deviceScaleFactor: tablet ? 2 : 1, hasTouch: tablet,
    locale: { en: "en-GB", nb: "nb-NO", fr: "fr-FR", pt: "pt-PT" }[language],
  });
  await context.addInitScript(lang => localStorage.setItem("hg_filmwork_language_v1", lang), language);
  const page = await context.newPage();
  page.setDefaultTimeout(25000);
  const label = (tablet ? "webkit" : "chromium") + "-" + language + "-" + item.workshop.scenarioId;
  const pageErrors = [];
  page.on("pageerror", error => pageErrors.push(error.message));
  try {
    await page.goto(new URL("#/producer", SITE).href, { waitUntil: "domcontentloaded" });
    await page.locator(".producer-mode-card--recommended button").click();
    const search = page.locator(".scenario-search input[type=search]");
    await search.waitFor({ state: "visible" });
    await search.fill(item.scenario.film.title);
    // The search can match many films (especially short titles such as "It").
    // Expand only the target decade, not a snapshot of buttons whose nth indices
    // change whenever a React-rendered expansion removes one of them.
    const decade = String(Math.floor(item.scenario.film.year / 10) * 10) + "s";
    const era = page.locator(".scenario-era").filter({
      has: page.locator(".scenario-era-rail b").filter({ hasText: new RegExp("^" + decade + "$") }),
    });
    await era.waitFor({ state: "visible" });
    assert.equal(await era.count(), 1, label + ": unique decade");
    const card = era.locator(".scenario-card")
      .filter({ has: page.getByRole("heading", { name: item.scenario.film.title, exact: true }) })
      .filter({ has: page.locator(".scenario-meta dd").filter({ hasText: new RegExp("^" + item.scenario.film.year + "$") }) });
    if (await card.count() === 0) {
      const expand = era.locator(".scenario-era-show-all");
      await expand.waitFor({ state: "visible" });
      assert.equal(await expand.count(), 1, label + ": unique decade expansion");
      await expand.click();
    }
    await card.waitFor({ state: "visible" });
    assert.equal(await card.count(), 1, label + ": unique film and year");
    await card.locator("button").last().click();

    const panel = page.locator(".scenario-source-workshop");
    await panel.waitFor({ state: "visible" });
    assert.equal(await page.locator("html").getAttribute("lang"), language, label + ": language");
    assert.equal(await panel.locator(".scenario-source-workshop__question").count(), 3, label + ": three questions");
    const before = await page.evaluate(() => JSON.stringify({ ...localStorage }));

    for (const [i, question] of item.workshop.questions.entries()) {
      const row = panel.locator(".scenario-source-workshop__question").nth(i);
      assert.equal((await row.locator("h5").textContent())?.trim(), question.prompt[language], label + ": question " + question.id);
      const buttons = row.locator(".scenario-source-workshop__choice");
      assert.equal(await buttons.count(), 3);
      assert.equal(await row.locator('.scenario-source-workshop__choice[aria-pressed="true"]').count(), 0);
      for (const [index, option] of question.options.entries()) {
        assert.equal((await buttons.nth(index).textContent())?.trim(), option.label[language], label + ": option " + question.id);
      }
      const right = question.options.findIndex(o => o.id === question.bestSupportedOptionId);
      const wrong = question.options.findIndex(o => o.id !== question.bestSupportedOptionId);
      assert.ok(right >= 0 && wrong >= 0);
      await buttons.nth(wrong).click();
      assert.equal(await buttons.nth(wrong).getAttribute("aria-pressed"), "true");
      const feedback = row.locator(".scenario-source-workshop__feedback");
      assert.equal((await feedback.locator("strong").textContent())?.trim(), statuses[language][0], label + ": wrong feedback");
      assert.equal((await feedback.locator("p").textContent())?.trim(), question.explanation[language], label + ": explanation");
      await buttons.nth(right).click();
      assert.equal(await row.locator('.scenario-source-workshop__choice[aria-pressed="true"]').count(), 1);
      assert.equal((await feedback.locator("strong").textContent())?.trim(), statuses[language][1], label + ": supported feedback");

      const sources = row.locator("details.scenario-source-workshop__sources");
      await sources.locator("summary").click();
      const links = sources.locator("li a");
      assert.equal(await links.count(), question.sourceIds.length, label + ": source links");
      for (const [k, id] of question.sourceIds.entries()) {
        const record = item.workshop.sources.find(s => s.id === id);
        assert.ok(record);
        assert.equal(await links.nth(k).getAttribute("href"), record.url, label + ": source " + id);
      }
    }
    assert.equal(await page.evaluate(() => JSON.stringify({ ...localStorage })), before, label + ": saved progress unchanged");
    const width = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    assert.ok(width.scroll <= width.client + 2, label + ": horizontal overflow " + JSON.stringify(width));
    assert.deepEqual(pageErrors, [], label + ": no browser errors");
    passed.push(label);
    console.log("PASS " + label);
  } catch (error) {
    failures.push({ label, error: String(error?.stack ?? error), pageErrors });
    console.error("FAIL " + label + ": " + String(error?.message ?? error));
    try { await page.screenshot({ path: resolve(REPORT_DIR, label + "-failure.png"), fullPage: true, timeout: 10000 }); } catch {}
  } finally { await context.close(); }
}

await mkdir(REPORT_DIR, { recursive: true });
let browser;
try {
  browser = await (tablet ? webkit : chromium).launch({ headless: true });
  for (const language of languages) for (const item of cases) await check(browser, language, item);
} catch (error) {
  failures.push({ setup: String(error?.stack ?? error) });
} finally { await browser?.close(); }
await writeFile(resolve(REPORT_DIR, "sourced-workshop-" + (tablet ? "webkit" : "chromium") + "-summary.json"), JSON.stringify({
  scope: "Two hundred and forty-seven existing films, seven hundred and forty-one decisions, four languages; real UI clicks, source URLs and preserved progress, but not physical iPad or editorial approval",
  expected: languages.length * cases.length, passed, failures,
}, null, 2) + "\n");
console.log("Sourced workshop " + (tablet ? "WebKit" : "Chromium") + ": " + passed.length + "/" + (languages.length * cases.length) + " passed, " + failures.length + " failures");
if (failures.length || passed.length !== languages.length * cases.length) process.exitCode = 1;
