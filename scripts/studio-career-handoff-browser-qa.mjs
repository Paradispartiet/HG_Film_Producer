#!/usr/bin/env node
/**
 * Actual browser handoff: a genuine engine-produced completed Film One is
 * loaded from the existing v1 save format, and the player creates Film Two
 * through the public UI. This complements the start-to-release engine test.
 */
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";
import { chromium } from "playwright";

const SITE = process.env.FILMWORK_QA_URL ?? "http://127.0.0.1:4173/HG_Film_Producer/";
const REPORT_DIR = resolve(process.env.FILMWORK_QA_REPORT_DIR ?? "browser-qa-artifacts");
const SAVE_KEY = "hg-film-producer-career-run-v1";
const LANG_KEY = "hg_filmwork_language_v1";

const bundled = await build({
  entryPoints: ["scripts/studio-career-lifecycle-setup.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  logLevel: "warning",
});
assert.equal(bundled.outputFiles.length, 1);
const fixture = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString("base64")}`);
const completed = fixture.buildCompletedFilmOneCareerState().state;
assert.equal(completed.projects.length, 1);
assert.ok(completed.projects[0].careerApplicationResult);

await mkdir(REPORT_DIR, { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const [language, viewport] of [
    ["en", { width: 1440, height: 900 }],
    ["nb", { width: 360, height: 780 }],
    ["fr", { width: 390, height: 844 }],
    ["pt", { width: 1366, height: 768 }],
  ]) {
    const context = await browser.newContext({ viewport });
    await context.addInitScript(({ state, locale }) => {
      if (!window.localStorage.getItem("hg-film-producer-career-run-v1")) window.localStorage.setItem("hg-film-producer-career-run-v1", state);
      window.localStorage.setItem("hg_filmwork_language_v1", locale);
    }, { state: JSON.stringify(completed), locale: language });
    const page = await context.newPage();
    page.setDefaultTimeout(20000);
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    try {
      await page.goto(new URL("#/producer", SITE).href);
      await page.locator(".producer-mode-card:not(.producer-mode-card--recommended) .filmverket-primary-action").click();
      const latest = page.locator(".next-project-panel").last();
      const setup = latest.locator(".next-project-setup-section");
      await setup.waitFor({ state: "visible" });
      await page.waitForFunction(() => {
        const target = document.querySelector('[id^="next-project-setup-"]');
        if (!target) return false;
        const bounds = target.getBoundingClientRect();
        return bounds.top >= -20 && bounds.top < window.innerHeight * 0.85 && bounds.bottom > 0;
      }, null, { timeout: 8000 });
      assert.equal(await page.locator(".next-project-panel").count(), 1, `${language}: only Film One before continuation`);
      assert.equal(await page.locator(".studio-career-primary-action").count(), 1, `${language}: one active next action`);
      const id = await setup.getAttribute("id");
      assert.ok(id?.startsWith("next-project-setup-"), `${language}: stable next-film target`);
      await page.locator(".studio-career-primary-action").click();

      const form = setup.locator("form.next-project-form");
      await form.locator('select[name="next-film-title-choice"]').selectOption("Second Winter");
      await form.locator('input[name="genre"]').first().check();
      await form.locator('input[name="script-template"]').first().check();
      await form.locator('button[type="submit"]').click();
      await page.waitForFunction((storageKey) => {
        const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "null");
        return saved?.projects?.length === 2;
      }, SAVE_KEY);
      const readState = () => page.evaluate((storageKey) => JSON.parse(window.localStorage.getItem(storageKey)), SAVE_KEY);
      const created = await readState();
      assert.equal(created.projects[0].id, completed.projects[0].id, `${language}: Film One identity preserved`);
      assert.deepEqual(created.projects[0].careerApplicationResult, JSON.parse(JSON.stringify(completed.projects[0].careerApplicationResult)), `${language}: Film One results unchanged`);
      assert.equal(created.projects[1].projectNumber, 2);
      assert.equal(created.projects[1].run.project.title, "Second Winter");
      assert.equal(created.projects[1].developmentResult, null);
      assert.equal(await page.locator(".past-project-summary").count(), 1, `${language}: Film One collapsed`);
      assert.equal(await page.locator(".studio-career-primary-action").count(), 1, `${language}: only Film Two actionable`);
      assert.equal((await page.locator(".project-hero h2").last().textContent())?.trim(), "Second Winter");

      await page.locator(".past-project-summary-actions button").click();
      assert.equal(await page.locator(".next-project-panel").count(), 2, `${language}: history is available`);
      assert.equal(await page.locator(".next-project-setup-section").count(), 0, `${language}: historical film may not show another project form`);
      assert.equal(await page.locator(".studio-career-primary-action").count(), 1, `${language}: historical film has no live action`);
      assert.equal((await readState()).projects.length, 2, `${language}: history disclosure never modifies save`);

      await page.screenshot({ path: resolve(REPORT_DIR, `studio-career-${language}-film-two.png`), fullPage: false });
      await page.reload();
      await page.locator(".producer-mode-card:not(.producer-mode-card--recommended) .filmverket-primary-action").click();
      await page.locator(".project-hero h2").last().waitFor({ state: "visible" });
      assert.equal((await page.locator(".project-hero h2").last().textContent())?.trim(), "Second Winter", `${language}: Film Two resumes`);
      assert.equal((await readState()).projects.length, 2, `${language}: reload preserves two films`);
      assert.equal(await page.locator(".studio-career-primary-action").count(), 1, `${language}: saved Film Two has a next action`);
      const overflow = await page.locator(".project-hero--focused").last().evaluate((element) => ({
        inner: element.clientWidth,
        scroll: element.scrollWidth,
      }));
      assert.ok(overflow.scroll <= overflow.inner + 2, `${language}: career dashboard horizontal overflow ${JSON.stringify(overflow)}`);
      assert.deepEqual(pageErrors, [], `${language}: browser console errors`);
      console.log(`PASS Studio Career ${language} ${viewport.width}px: saved Film One -> Film Two -> history -> reload`);
    } catch (error) {
      await page.screenshot({ path: resolve(REPORT_DIR, `studio-career-${language}-failure.png`), fullPage: true }).catch(() => undefined);
      throw new Error(`Studio Career browser handoff failed (${language}): ${String(error?.stack ?? error)}; browser errors: ${pageErrors.join(" | ")}`);
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
