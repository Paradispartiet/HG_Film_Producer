import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES, type FilmWorkLanguage } from "./filmWorkLanguage.js";

const NAV_IDS = ["home", "producer", "atlas", "director", "school", "history", "research"] as const;
const GATEWAY_IDS = ["producer", "atlas", "director", "school", "history", "research"] as const;

type GatewayStats = {
  readonly filmCount: number;
  readonly firstYear: number;
  readonly lastYear: number;
};

type GatewayCopy = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly action: string;
  readonly status: (stats: GatewayStats) => string;
};

type FilmWorkPlatformCopyShape = {
  readonly suiteName: string;
  readonly navAria: string;
  readonly navLabels: Readonly<Record<(typeof NAV_IDS)[number], string>>;
  readonly footerDetail: string;
  readonly noFilmsAvailable: string;
  readonly home: {
    readonly kicker: string;
    readonly titlePrefix: string;
    readonly titleEmphasis: string;
    readonly tagline: string;
    readonly summaryAria: string;
    readonly films: (count: number) => string;
    readonly craftStatements: (count: number) => string;
    readonly connectedEntrances: (count: number) => string;
    readonly entrancesAria: string;
    readonly gateways: Readonly<Record<(typeof GATEWAY_IDS)[number], GatewayCopy>>;
  };
  readonly producer: {
    readonly heroKicker: string;
    readonly intro: string;
    readonly whyTitle: string;
    readonly whyBody: string;
    readonly productionCases: {
      readonly kicker: string;
      readonly title: string;
      readonly description: string;
      readonly bullets: readonly string[];
      readonly action: string;
    };
    readonly studioCareer: {
      readonly kicker: string;
      readonly title: string;
      readonly description: string;
      readonly bullets: readonly string[];
      readonly continueAction: string;
      readonly startAction: string;
    };
  };
};

type PlatformCopyModule = {
  readonly FILMWORK_PLATFORM_NAV_IDS: readonly string[];
  readonly FILMWORK_PLATFORM_GATEWAY_IDS: readonly string[];
  readonly FILMWORK_PLATFORM_COPY: Record<FilmWorkLanguage, FilmWorkPlatformCopyShape>;
};

async function loadPlatformCopyModule(): Promise<PlatformCopyModule> {
  const moduleUrl = new URL("./filmWorkPlatformCopy.js", import.meta.url);
  assert.equal(existsSync(moduleUrl), true, "filmWorkPlatformCopy.js must be materialized by the core build");
  return await import(moduleUrl.href) as PlatformCopyModule;
}

test("FilmWork platform copy covers all four supported languages and canonical sections", async () => {
  const module = await loadPlatformCopyModule();
  assert.deepEqual(Object.keys(module.FILMWORK_PLATFORM_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
  assert.deepEqual([...module.FILMWORK_PLATFORM_NAV_IDS].sort(), [...NAV_IDS].sort());
  assert.deepEqual([...module.FILMWORK_PLATFORM_GATEWAY_IDS].sort(), [...GATEWAY_IDS].sort());

  for (const language of FILMWORK_LANGUAGES) {
    const copy = module.FILMWORK_PLATFORM_COPY[language];
    assert.deepEqual(Object.keys(copy.navLabels).sort(), [...NAV_IDS].sort(), `${language}:nav labels`);
    assert.deepEqual(Object.keys(copy.home.gateways).sort(), [...GATEWAY_IDS].sort(), `${language}:gateway labels`);
  }
});

test("FilmWork suite naming and product names remain canonical", async () => {
  const { FILMWORK_PLATFORM_COPY } = await loadPlatformCopyModule();
  assert.equal(FILMWORK_PLATFORM_COPY.en.suiteName, "FilmWork");
  assert.equal(FILMWORK_PLATFORM_COPY.nb.suiteName, "Filmverket");
  assert.equal(FILMWORK_PLATFORM_COPY.fr.suiteName, "FilmWork");
  assert.equal(FILMWORK_PLATFORM_COPY.pt.suiteName, "FilmWork");

  const canonicalProducts = {
    producer: "Film Producer",
    atlas: "Film Atlas",
    director: "Film Director",
    school: "Film School",
    history: "Film History",
  } as const;
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILMWORK_PLATFORM_COPY[language];
    for (const [section, productName] of Object.entries(canonicalProducts)) {
      assert.equal(copy.navLabels[section as keyof typeof canonicalProducts], productName, `${language}:${section}`);
    }
    assert.equal(copy.home.gateways.producer.title, "Film Producer", `${language}:producer gateway`);
    assert.equal(copy.home.gateways.atlas.title, "Film Atlas", `${language}:atlas gateway`);
    assert.equal(copy.home.gateways.director.title, "Film Director", `${language}:director gateway`);
    assert.equal(copy.home.gateways.school.title, "Film School", `${language}:school gateway`);
    assert.equal(copy.home.gateways.history.title, "Film History", `${language}:history gateway`);
    assert.equal(copy.producer.productionCases.title, "Production Cases", `${language}:Production Cases`);
  }
});

test("every language provides complete Home and Producer presentation copy", async () => {
  const { FILMWORK_PLATFORM_COPY } = await loadPlatformCopyModule();
  const stats = { filmCount: 614, firstYear: 1895, lastYear: 2025 };

  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILMWORK_PLATFORM_COPY[language];
    const strings = [
      copy.suiteName,
      copy.navAria,
      copy.footerDetail,
      copy.noFilmsAvailable,
      copy.home.kicker,
      copy.home.titlePrefix,
      copy.home.titleEmphasis,
      copy.home.tagline,
      copy.home.summaryAria,
      copy.home.films(stats.filmCount),
      copy.home.craftStatements(123),
      copy.home.connectedEntrances(6),
      copy.home.entrancesAria,
      copy.producer.heroKicker,
      copy.producer.intro,
      copy.producer.whyTitle,
      copy.producer.whyBody,
      copy.producer.productionCases.kicker,
      copy.producer.productionCases.title,
      copy.producer.productionCases.description,
      copy.producer.productionCases.action,
      copy.producer.studioCareer.kicker,
      copy.producer.studioCareer.title,
      copy.producer.studioCareer.description,
      copy.producer.studioCareer.continueAction,
      copy.producer.studioCareer.startAction,
      ...copy.producer.productionCases.bullets,
      ...copy.producer.studioCareer.bullets,
    ];
    for (const value of strings) assert.ok(value.trim().length > 0, `${language}: empty platform copy`);
    assert.equal(copy.producer.productionCases.bullets.length, 3, `${language}: Production Cases bullets`);
    assert.equal(copy.producer.studioCareer.bullets.length, 3, `${language}: Studio Career bullets`);

    for (const gatewayId of GATEWAY_IDS) {
      const gateway = copy.home.gateways[gatewayId];
      for (const value of [gateway.eyebrow, gateway.title, gateway.description, gateway.action, gateway.status(stats)]) {
        assert.ok(value.trim().length > 0, `${language}:${gatewayId}`);
      }
    }
  }
});

test("English preserves the current Home and Producer wording while NB, FR and PT localize generic copy", async () => {
  const { FILMWORK_PLATFORM_COPY } = await loadPlatformCopyModule();
  const en = FILMWORK_PLATFORM_COPY.en;
  assert.equal(en.home.kicker, "A film game and film-science platform");
  assert.equal(en.home.tagline, "Make film. Understand film.");
  assert.equal(en.home.gateways.producer.action, "Enter the studio");
  assert.equal(en.producer.heroKicker, "The playable production game");
  assert.equal(en.producer.productionCases.kicker, "Recommended first");
  assert.equal(en.producer.studioCareer.kicker, "Experimental branch");

  for (const language of ["nb", "fr", "pt"] as const) {
    const copy = FILMWORK_PLATFORM_COPY[language];
    assert.notEqual(copy.home.kicker, en.home.kicker, `${language}:home kicker`);
    assert.notEqual(copy.home.tagline, en.home.tagline, `${language}:home tagline`);
    assert.notEqual(copy.producer.heroKicker, en.producer.heroKicker, `${language}:producer kicker`);
    assert.notEqual(copy.producer.intro, en.producer.intro, `${language}:producer intro`);
  }
});

test("dynamic gateway and summary copy preserves the supplied counts and year range", async () => {
  const { FILMWORK_PLATFORM_COPY } = await loadPlatformCopyModule();
  const stats = { filmCount: 614, firstYear: 1895, lastYear: 2025 };
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILMWORK_PLATFORM_COPY[language];
    assert.match(copy.home.films(614), /614/);
    assert.match(copy.home.craftStatements(1234), /1234/);
    assert.match(copy.home.connectedEntrances(6), /6/);
    assert.match(copy.home.gateways.atlas.status(stats), /614/);
    assert.match(copy.home.gateways.history.status(stats), /1895/);
    assert.match(copy.home.gateways.history.status(stats), /2025/);
  }
});
