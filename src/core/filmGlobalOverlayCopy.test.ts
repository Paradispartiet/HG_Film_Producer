import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES, type FilmWorkLanguage } from "./filmWorkLanguage.js";

const RESEARCH_STATUS_IDS = ["all", "needs_research", "seeded", "verified"] as const;
const CRAFT_DOMAIN_IDS = ["all", "screenplay", "cinematography", "editing", "sound"] as const;

type GlobalOverlayCopyShape = {
  readonly research: {
    readonly triggerEyebrow: string;
    readonly triggerTitle: string;
    readonly dialogAria: string;
    readonly headerEyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly closeAria: string;
    readonly summaryAria: string;
    readonly totalCatalogue: string;
    readonly films: string;
    readonly verified: string;
    readonly complete: (percent: number) => string;
    readonly seeded: string;
    readonly provisional: string;
    readonly needsResearch: string;
    readonly priorityQueue: string;
    readonly verifiedAria: (percent: number) => string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly filterAria: string;
    readonly statusLabels: Readonly<Record<(typeof RESEARCH_STATUS_IDS)[number], string>>;
    readonly queueSummary: (count: number) => string;
    readonly directorNotRegistered: string;
    readonly craftStatements: (count: number) => string;
    readonly learningGoals: (count: number) => string;
    readonly atlasProduct: "Film Atlas";
    readonly directorProduct: "Film Director";
    readonly empty: string;
  };
  readonly craft: {
    readonly triggerEyebrow: string;
    readonly triggerTitle: string;
    readonly dialogAria: string;
    readonly headerEyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly closeAria: string;
    readonly filmLens: string;
    readonly allRegisteredTechniques: string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly filterAria: string;
    readonly domainLabels: Readonly<Record<(typeof CRAFT_DOMAIN_IDS)[number], string>>;
    readonly matchedToFilm: (count: number, filmTitle: string) => string;
    readonly ofTechniques: (count: number, total: number) => string;
    readonly analysisQuestion: string;
    readonly productionUse: string;
    readonly empty: string;
  };
};

type GlobalOverlayCopyModule = {
  readonly FILM_RESEARCH_STATUS_FILTER_IDS: readonly string[];
  readonly FILM_CRAFT_DOMAIN_FILTER_IDS: readonly string[];
  readonly FILM_GLOBAL_OVERLAY_COPY: Record<FilmWorkLanguage, GlobalOverlayCopyShape>;
};

async function loadCopyModule(): Promise<GlobalOverlayCopyModule> {
  const moduleUrl = new URL("./filmGlobalOverlayCopy.js", import.meta.url);
  assert.equal(existsSync(moduleUrl), true, "filmGlobalOverlayCopy.js must be materialized by the core build");
  return await import(moduleUrl.href) as GlobalOverlayCopyModule;
}

test("global overlay copy covers FilmWork languages and stable filter ids", async () => {
  const module = await loadCopyModule();
  assert.deepEqual(Object.keys(module.FILM_GLOBAL_OVERLAY_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
  assert.deepEqual(module.FILM_RESEARCH_STATUS_FILTER_IDS, RESEARCH_STATUS_IDS);
  assert.deepEqual(module.FILM_CRAFT_DOMAIN_FILTER_IDS, CRAFT_DOMAIN_IDS);

  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(module.FILM_GLOBAL_OVERLAY_COPY[language].research.statusLabels).sort(), [...RESEARCH_STATUS_IDS].sort(), `${language}:research statuses`);
    assert.deepEqual(Object.keys(module.FILM_GLOBAL_OVERLAY_COPY[language].craft.domainLabels).sort(), [...CRAFT_DOMAIN_IDS].sort(), `${language}:craft domains`);
  }
});

test("global overlays preserve canonical cross-product names", async () => {
  const { FILM_GLOBAL_OVERLAY_COPY } = await loadCopyModule();
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(FILM_GLOBAL_OVERLAY_COPY[language].research.atlasProduct, "Film Atlas");
    assert.equal(FILM_GLOBAL_OVERLAY_COPY[language].research.directorProduct, "Film Director");
  }
});

test("English preserves current Research control and Craft library chrome", async () => {
  const { FILM_GLOBAL_OVERLAY_COPY } = await loadCopyModule();
  const copy = FILM_GLOBAL_OVERLAY_COPY.en;
  assert.equal(copy.research.triggerEyebrow, "Editorial system");
  assert.equal(copy.research.triggerTitle, "Research control");
  assert.equal(copy.research.title, "Research control room");
  assert.equal(copy.research.statusLabels.needs_research, "Needs research");
  assert.equal(copy.craft.triggerEyebrow, "Film science");
  assert.equal(copy.craft.triggerTitle, "Craft library");
  assert.equal(copy.craft.title, "Craft library");
  assert.equal(copy.craft.domainLabels.cinematography, "Image");
  assert.equal(copy.craft.analysisQuestion, "Analysis question");
  assert.equal(copy.craft.productionUse, "Production use");
});

test("NB, FR and PT localize generic global overlay chrome", async () => {
  const { FILM_GLOBAL_OVERLAY_COPY } = await loadCopyModule();
  const en = FILM_GLOBAL_OVERLAY_COPY.en;
  for (const language of ["nb", "fr", "pt"] as const) {
    const copy = FILM_GLOBAL_OVERLAY_COPY[language];
    assert.notEqual(copy.research.triggerEyebrow, en.research.triggerEyebrow, `${language}:research eyebrow`);
    assert.notEqual(copy.research.title, en.research.title, `${language}:research title`);
    assert.notEqual(copy.research.searchLabel, en.research.searchLabel, `${language}:research search`);
    assert.notEqual(copy.craft.triggerEyebrow, en.craft.triggerEyebrow, `${language}:craft eyebrow`);
    assert.notEqual(copy.craft.searchLabel, en.craft.searchLabel, `${language}:craft search`);
    assert.notEqual(copy.craft.analysisQuestion, en.craft.analysisQuestion, `${language}:analysis label`);
  }
});

test("dynamic overlay copy preserves counts, percentages and canonical film titles", async () => {
  const { FILM_GLOBAL_OVERLAY_COPY } = await loadCopyModule();
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_GLOBAL_OVERLAY_COPY[language];
    assert.match(copy.research.complete(73), /73/);
    assert.match(copy.research.verifiedAria(73), /73/);
    assert.match(copy.research.queueSummary(19), /19/);
    assert.match(copy.research.craftStatements(12), /12/);
    assert.match(copy.research.learningGoals(4), /4/);
    assert.match(copy.craft.matchedToFilm(7, "Film X"), /7/);
    assert.ok(copy.craft.matchedToFilm(7, "Film X").includes("Film X"));
    assert.match(copy.craft.ofTechniques(7, 123), /7.*123/);
  }
});
