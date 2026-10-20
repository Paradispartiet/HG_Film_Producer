import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_CAREER_APP_SHELL_COPY } from "./studioCareerAppShellCopy.js";

test("Studio Career app shell copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_APP_SHELL_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("canonical product names remain unchanged in every language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_APP_SHELL_COPY[language];
    assert.equal(copy.productName, "HG Film Producer", language);
    assert.equal(copy.navigation.productionCases, "Production Cases", language);
    assert.match(copy.career.productionCasesKicker, /^Production Cases/, language);
  }
});

test("English app shell preserves current visible wording", () => {
  const copy = STUDIO_CAREER_APP_SHELL_COPY.en;
  assert.equal(copy.newStudioFallback, "New studio");
  assert.equal(copy.navigation.ariaLabel, "Dashboard mode");
  assert.equal(copy.navigation.workspace, "Production workspace");
  assert.equal(copy.navigation.demoInspection, "Demo inspection");
  assert.equal(copy.navigation.experimentalCareer, "Experimental Career");
  assert.equal(copy.navigation.titleScreen, "Title screen");
  assert.equal(copy.footer.productionCases, "Stable Production Cases MVP");
  assert.equal(copy.footer.experimentalCareer, "Experimental Studio Career branch");
  assert.equal(copy.demo.kicker, "Portfolio overview");
  assert.equal(copy.demo.heading, "Production desk");
  assert.equal(copy.career.reset, "Reset career");
});

test("career and Production Cases shell variants stay distinct", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_APP_SHELL_COPY[language];
    assert.ok(copy.career.productionCasesHeading.trim());
    assert.ok(copy.career.productionCasesIntro.trim());
    assert.ok(copy.career.experimentalHeading.trim());
    assert.ok(copy.career.experimentalIntro.trim());
    assert.notEqual(copy.career.productionCasesHeading, copy.career.experimentalHeading, language);
  }
});

test("experimental career introduction uses a localized second-film label", () => {
  const expected = {
    en: "Film Two",
    nb: "film nummer to",
    fr: "le deuxième film",
    pt: "o segundo filme",
  } as const;
  for (const language of FILMWORK_LANGUAGES) {
    const intro = STUDIO_CAREER_APP_SHELL_COPY[language].career.experimentalIntro;
    assert.ok(intro.includes(expected[language]), language);
    if (language !== "en") assert.ok(!intro.includes("Film Two"), language);
  }
});

test("developer demo inspection exposes localized film, release, and system labels", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const demo = STUDIO_CAREER_APP_SHELL_COPY[language].demo as unknown as {
      readonly filmResult?: {
        readonly eyebrow: string; readonly heading: string;
        readonly quality: string; readonly audienceAppeal: string; readonly criticalAppeal: string;
        readonly budgetSpent: string; readonly revenueEstimate: string;
      };
      readonly release?: {
        readonly eyebrow: string; readonly heading: string;
        readonly breakEvenCleared: string; readonly belowBreakEven: string;
        readonly strategy: string; readonly festivalResult: string;
        readonly selected: string; readonly notSelected: string;
        readonly reviewSummary: string; readonly audienceSummary: string;
        readonly audienceValue: (score: number, viewers: string) => string;
        readonly revenueResult: string; readonly revenueValue: (gross: string, net: string) => string;
        readonly awardsOutcome: string; readonly awardsValue: (nominations: number, wins: number) => string;
      };
      readonly systems?: {
        readonly eyebrow: string; readonly heading: string;
        readonly onlineCount: (count: number) => string; readonly represented: string;
      };
    };
    assert.ok(demo.filmResult, language);
    assert.ok(demo.release, language);
    assert.ok(demo.systems, language);
    for (const field of Object.values(demo.filmResult)) assert.ok(field.trim(), language);
    for (const field of Object.values(demo.systems)) assert.ok(typeof field === "function" || field.trim(), language);
    for (const field of Object.values(demo.release)) assert.ok(typeof field === "function" || field.trim(), language);
    assert.match(demo.systems.onlineCount(3), /3\/3/, language);
    assert.match(demo.release.audienceValue(87, "1 234"), /87.*1 234/, language);
    assert.match(demo.release.awardsValue(2, 1), /2.*1/, language);
  }
});

test("demo inspection preserves canonical English and translates Portuguese", () => {
  const en = STUDIO_CAREER_APP_SHELL_COPY.en.demo as unknown as {
    readonly filmResult: { readonly heading: string };
    readonly release: { readonly heading: string };
    readonly systems: { readonly heading: string };
  };
  const pt = STUDIO_CAREER_APP_SHELL_COPY.pt.demo as unknown as {
    readonly filmResult: { readonly heading: string };
    readonly release: { readonly heading: string; readonly awardsValue: (n: number, w: number) => string };
    readonly systems: { readonly heading: string; readonly represented: string };
  };
  assert.equal(en.filmResult.heading, "Film result");
  assert.equal(en.release.heading, "Release report");
  assert.equal(en.systems.heading, "System status");
  assert.equal(pt.filmResult.heading, "Resultado do filme");
  assert.equal(pt.release.heading, "Relatório de lançamento");
  assert.equal(pt.systems.represented, "representado");
  assert.equal(pt.release.awardsValue(2, 1), "2 nomeações · 1 vitória");
});
