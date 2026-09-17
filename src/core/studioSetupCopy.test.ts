import assert from "node:assert/strict";
import test from "node:test";

import type { StrategicGoalType } from "../domain/career.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  STUDIO_SETUP_COPY,
  STUDIO_SETUP_PRESET_IDS,
  STUDIO_SETUP_SCALE_IDS,
} from "./studioSetupCopy.js";

test("Studio setup copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_SETUP_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("Studio setup keeps stable preset and production-scale ids", () => {
  assert.deepEqual(STUDIO_SETUP_PRESET_IDS, ["micro_studio", "indie_studio", "prestige_startup"]);
  assert.deepEqual(STUDIO_SETUP_SCALE_IDS, ["micro", "indie", "mid_budget", "studio", "prestige"]);
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(STUDIO_SETUP_COPY[language].studio.presets).sort(), [...STUDIO_SETUP_PRESET_IDS].sort(), language);
    assert.deepEqual(Object.keys(STUDIO_SETUP_COPY[language].project.scales).sort(), [...STUDIO_SETUP_SCALE_IDS].sort(), language);
  }
});

test("English Studio setup chrome preserves current visible wording", () => {
  const copy = STUDIO_SETUP_COPY.en;
  assert.equal(copy.panel.kicker, "New studio slate");
  assert.equal(copy.panel.heading, "Create your first project");
  assert.equal(copy.panel.mandateHeading, "Set the mandate");
  assert.equal(copy.panel.createProject, "Create project");
  assert.equal(copy.studio.heading, "Build the studio");
  assert.equal(copy.project.heading, "Package the first film");
  assert.equal(copy.goal.legend, "Strategic goal");
  assert.equal(copy.genre.legend, "Genre");
  assert.equal(copy.scriptTemplate.legend, "Script template");
});

test("Studio setup validation copy covers every required field", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const validation = STUDIO_SETUP_COPY[language].validation;
    assert.ok(validation.studioName.trim());
    assert.ok(validation.strategicGoal.trim());
    assert.ok(validation.projectTitle.trim());
    assert.ok(validation.genre.trim());
    assert.ok(validation.scriptTemplate.trim());
  }
});

test("dynamic goal and preset chrome preserves numeric values", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_SETUP_COPY[language];
    assert.match(copy.goal.targetYear(3), /3/);
    assert.match(copy.studio.presetMeta("$1,000,000", 12, 7), /1.*12.*7/);
  }
});

type GoalPresentationInput = {
  readonly id: string;
  readonly type: StrategicGoalType;
  readonly title: string;
  readonly description: string;
};

type GoalPresentation = {
  readonly title: string;
  readonly description: string;
};

type GoalCopyWithPresentation = {
  readonly presentation?: (goal: GoalPresentationInput) => GoalPresentation;
};

const representativeGoals = {
  survive_year: {
    id: "strategic_goal_survive_year_one",
    type: "survive_year",
    title: "Survive year one",
    description: "Keep the studio solvent through four quarters and finish one film.",
  },
  build_reputation: {
    id: "strategic_goal_local_oslo_studio",
    type: "build_reputation",
    title: "Become a local Oslo studio",
    description: "Build a recognizable local voice through Oslo stories, crews, and locations.",
  },
  build_prestige: {
    id: "strategic_goal_arthouse_reputation",
    type: "build_prestige",
    title: "Build arthouse reputation",
    description: "Develop critically distinctive films and festival relationships.",
  },
  make_profit: {
    id: "strategic_goal_make_profit_contract_probe",
    type: "make_profit",
    title: "Make a profit",
    description: "Finish a film with positive net revenue.",
  },
  launch_debut: {
    id: "strategic_goal_profitable_debut",
    type: "launch_debut",
    title: "Make a profitable debut",
    description: "Release the first studio film with positive net revenue.",
  },
  win_award: {
    id: "strategic_goal_festival_award",
    type: "win_award",
    title: "Win a festival award",
    description: "Guide one film from festival selection to a competitive win.",
  },
  grow_audience: {
    id: "strategic_goal_commercial_audience",
    type: "grow_audience",
    title: "Build a commercial audience",
    description: "Create repeatable audience appeal across the studio slate.",
  },
  specialize_genre: {
    id: "strategic_goal_thriller_specialist",
    type: "specialize_genre",
    title: "Become known for thrillers",
    description: "Complete a coherent run of suspense-driven genre films.",
  },
  discover_talent: {
    id: "strategic_goal_discover_new_talent",
    type: "discover_talent",
    title: "Discover new talent",
    description: "Launch emerging actors or crew through meaningful creative responsibility.",
  },
  international_breakthrough: {
    id: "strategic_goal_international_co_production",
    type: "international_breakthrough",
    title: "Secure an international co-production",
    description: "Build enough standing to package a film with foreign creative and financing partners.",
  },
} as const satisfies Record<StrategicGoalType, GoalPresentationInput>;

function goalPresentation(language: (typeof FILMWORK_LANGUAGES)[number]) {
  return (STUDIO_SETUP_COPY[language].goal as unknown as GoalCopyWithPresentation).presentation;
}

test("Strategic Goals expose localized presentation for every canonical goal type", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const present = goalPresentation(language);
    assert.equal(typeof present, "function", `${language} presentation formatter`);
    assert.ok(present);

    for (const goal of Object.values(representativeGoals)) {
      const presentation = present(goal);
      assert.ok(presentation.title.trim(), `${language} ${goal.type} title`);
      assert.ok(presentation.description.trim(), `${language} ${goal.type} description`);
    }
  }
});

test("English Strategic Goal presentation preserves canonical goal wording", () => {
  const present = goalPresentation("en");
  assert.ok(present);

  for (const goal of Object.values(representativeGoals)) {
    assert.deepEqual(present(goal), { title: goal.title, description: goal.description }, goal.type);
  }
});

test("Strategic Goal presentation localizes visible goal content", () => {
  const nb = goalPresentation("nb");
  const fr = goalPresentation("fr");
  const pt = goalPresentation("pt");
  assert.ok(nb);
  assert.ok(fr);
  assert.ok(pt);

  assert.equal(nb(representativeGoals.survive_year).title, "Overlev det første året");
  assert.equal(fr(representativeGoals.international_breakthrough).title, "Obtenir une coproduction internationale");
  assert.equal(pt(representativeGoals.discover_talent).title, "Descobrir novos talentos");
});

test("build_reputation presentation keeps the two canonical goal identities distinct", () => {
  const localOslo = representativeGoals.build_reputation;
  const technicalCraft = {
    id: "strategic_goal_improve_technical_craft",
    type: "build_reputation",
    title: "Improve technical craft",
    description: "Raise production quality through training, equipment, and strong department heads.",
  } as const satisfies GoalPresentationInput;

  for (const language of FILMWORK_LANGUAGES) {
    const present = goalPresentation(language);
    assert.ok(present);
    assert.notDeepEqual(present(localOslo), present(technicalCraft), language);
  }
});

type GenrePresentationInput = {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
};

type GenrePresentation = {
  readonly name: string;
  readonly summary: string;
};

type GenreCopyWithPresentation = {
  readonly presentation?: (genre: GenrePresentationInput) => GenrePresentation;
};

const representativeGenres = [
  {
    id: "genre_drama",
    name: "Drama",
    summary: "Character and conflict driven stories about people under pressure.",
  },
  {
    id: "genre_thriller",
    name: "Thriller",
    summary: "Tension, stakes and suspense that keep the audience leaning forward.",
  },
  {
    id: "genre_comedy",
    name: "Comedy",
    summary: "Timing, tone and character chemistry built around laughter.",
  },
  {
    id: "genre_horror",
    name: "Horror",
    summary: "Dread and shock built from anticipation and sound.",
  },
  {
    id: "genre_documentary",
    name: "Documentary",
    summary: "Real subjects and events shaped into a story.",
  },
  {
    id: "genre_action",
    name: "Action",
    summary: "Movement, set pieces and physical stakes at scale.",
  },
  {
    id: "genre_romance",
    name: "Romance",
    summary: "Relationships, longing and chemistry between leads.",
  },
  {
    id: "genre_science_fiction",
    name: "Science fiction",
    summary: "Speculative worlds that use the future to examine the present.",
  },
  {
    id: "genre_period_drama",
    name: "Period drama",
    summary: "Stories set in a recreated past where design and place matter.",
  },
  {
    id: "genre_social_realism",
    name: "Social realism",
    summary: "Grounded stories about ordinary lives and social conditions.",
  },
] as const satisfies readonly GenrePresentationInput[];

function genrePresentation(language: (typeof FILMWORK_LANGUAGES)[number]) {
  return (STUDIO_SETUP_COPY[language].genre as unknown as GenreCopyWithPresentation).presentation;
}

test("Studio genres expose localized presentation for every canonical genre id", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const present = genrePresentation(language);
    assert.equal(typeof present, "function", `${language} genre presentation formatter`);
    assert.ok(present);

    for (const genre of representativeGenres) {
      const presentation = present(genre);
      assert.ok(presentation.name.trim(), `${language} ${genre.id} name`);
      assert.ok(presentation.summary.trim(), `${language} ${genre.id} summary`);
    }
  }
});

test("English genre presentation preserves canonical genre wording", () => {
  const present = genrePresentation("en");
  assert.ok(present);

  for (const genre of representativeGenres) {
    assert.deepEqual(present(genre), { name: genre.name, summary: genre.summary }, genre.id);
  }
});

test("Studio genre presentation localizes visible genre content", () => {
  const nb = genrePresentation("nb");
  const fr = genrePresentation("fr");
  const pt = genrePresentation("pt");
  assert.ok(nb);
  assert.ok(fr);
  assert.ok(pt);

  assert.equal(nb(representativeGenres[1]).name, "Thriller");
  assert.equal(fr(representativeGenres[7]).name, "Science-fiction");
  assert.equal(pt(representativeGenres[9]).name, "Realismo social");
});
