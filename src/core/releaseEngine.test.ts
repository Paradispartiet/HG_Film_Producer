import assert from "node:assert/strict";
import test from "node:test";

import { loadFilmData } from "../data/filmData.js";
import type { FilmResult } from "../domain/film.js";
import { asGenreId } from "../domain/ids.js";
import { applyReleaseResultToStudio } from "./applyReleaseResultToStudio.js";
import { calculateReleaseRevenue } from "./calculateReleaseRevenue.js";
import { createFilmProject } from "./createFilmProject.js";
import { createReleasePlan } from "./createReleasePlan.js";
import { createStudio } from "./createStudio.js";
import { evaluateReleaseOutcome } from "./evaluateReleaseOutcome.js";
import { generateAudienceResult } from "./generateAudienceResult.js";
import { generateReviewResult } from "./generateReviewResult.js";
import { resolveAwardsOutcome } from "./resolveAwardsOutcome.js";
import { scoreReleaseStrategy } from "./scoreReleaseStrategy.js";
import { submitToFestival } from "./submitToFestival.js";

const data = loadFilmData();
const project = createFilmProject({
  id: "film_project_release_test",
  title: "Release Test",
  genreId: asGenreId("genre_drama"),
  scale: "indie",
  budget: 750_000
});
const film: FilmResult = {
  projectId: project.id,
  quality: 80,
  audienceAppeal: 72,
  criticalAppeal: 84,
  budgetSpent: 700_000,
  revenueEstimate: 900_000,
  reputationDelta: 6,
  prestigeDelta: 4
};
const strategy = requireFirst(data.releaseStrategies);
const festival = requireFirst(data.festivals);
const secondFestival = requireAt(data.festivals, 1);
const critic = requireFirst(data.criticProfiles);
const segment = requireFirst(data.audienceSegments);

test("release seed catalogues provide stable IDs and requested coverage", () => {
  assert.equal(data.releaseStrategies.length, 8);
  assert.equal(data.festivals.length, 8);
  assert.equal(data.criticProfiles.length, 7);
  assert.equal(data.audienceSegments.length, 8);
  assert.equal(data.awards.length, 10);

  for (const catalogue of [
    data.releaseStrategies,
    data.festivals,
    data.criticProfiles,
    data.audienceSegments,
    data.awards
  ]) {
    assert.equal(new Set(catalogue.map((entry) => entry.id)).size, catalogue.length);
  }
});

test("release planning and strategy scoring are deterministic and immutable", () => {
  const before = structuredClone(project);
  const plan = createReleasePlan(project, strategy);
  const score = scoreReleaseStrategy(project, film, strategy);

  assert.deepEqual(project, before);
  assert.deepEqual(plan.targetChannels, [strategy.channel]);
  assert.ok(plan.marketingBudget > 0);
  assert.ok(score.totalScore >= 0 && score.totalScore <= 100);
  assert.deepEqual(scoreReleaseStrategy(project, film, strategy), score);
});

test("festivals, critics, and audiences resolve without randomness", () => {
  const submission = submitToFestival(project, film, festival);
  const review = generateReviewResult(project, film, critic);
  const audience = generateAudienceResult(project, film, segment, strategy);

  assert.deepEqual(submitToFestival(project, film, festival), submission);
  assert.deepEqual(generateReviewResult(project, film, critic), review);
  assert.deepEqual(generateAudienceResult(project, film, segment, strategy), audience);
  for (const score of [submission.selectionScore, review.score, audience.interestScore, audience.satisfactionScore]) {
    assert.ok(score >= 0 && score <= 100);
  }
  assert.ok(audience.estimatedViewers >= 0);
});

test("a moderate film can receive recognition without sweeping the awards", () => {
  const moderateFilm: FilmResult = {
    ...film,
    quality: 68,
    audienceAppeal: 68,
    criticalAppeal: 68
  };
  const moderateReview = {
    ...generateReviewResult(project, moderateFilm, critic),
    score: 68
  };
  const acceptedSubmission = {
    ...submitToFestival(project, moderateFilm, festival),
    accepted: true
  };

  const awards = resolveAwardsOutcome(
    project,
    moderateFilm,
    data.awards,
    [moderateReview],
    [acceptedSubmission]
  );

  assert.ok(awards.nominations.length <= 2);
  assert.equal(awards.wins.length, 0);
  assert.ok(awards.wins.every((awardId) => awards.nominations.includes(awardId)));
});

test("an exceptional film can win several awards but still has a ranked slate", () => {
  const exceptionalFilm: FilmResult = {
    ...film,
    quality: 95,
    audienceAppeal: 95,
    criticalAppeal: 95
  };
  const exceptionalReview = {
    ...generateReviewResult(project, exceptionalFilm, critic),
    score: 95
  };
  const acceptedSubmissions = [festival, secondFestival].map((candidate) => ({
    ...submitToFestival(project, exceptionalFilm, candidate),
    accepted: true
  }));

  const awards = resolveAwardsOutcome(
    project,
    exceptionalFilm,
    data.awards,
    [exceptionalReview],
    acceptedSubmissions
  );

  assert.equal(awards.nominations.length, 5);
  assert.equal(awards.wins.length, 3);
  assert.ok(awards.wins.every((awardId) => awards.nominations.includes(awardId)));
  assert.deepEqual(
    resolveAwardsOutcome(project, exceptionalFilm, data.awards, [exceptionalReview], acceptedSubmissions),
    awards
  );
});

test("award wins require an accepted festival", () => {
  const exceptionalFilm: FilmResult = {
    ...film,
    quality: 95,
    audienceAppeal: 95,
    criticalAppeal: 95
  };
  const exceptionalReview = {
    ...generateReviewResult(project, exceptionalFilm, critic),
    score: 95
  };
  const rejectedSubmission = {
    ...submitToFestival(project, exceptionalFilm, festival),
    accepted: false
  };

  const awards = resolveAwardsOutcome(
    project,
    exceptionalFilm,
    data.awards,
    [exceptionalReview],
    [rejectedSubmission]
  );

  assert.equal(awards.nominations.length, 5);
  assert.equal(awards.wins.length, 0);
});

test("revenue, awards, evaluation, and studio application form one immutable pipeline", () => {
  const plan = createReleasePlan(project, strategy);
  const strategyScore = scoreReleaseStrategy(project, film, strategy);
  const submission = submitToFestival(project, film, festival);
  const review = generateReviewResult(project, film, critic);
  const audience = generateAudienceResult(project, film, segment, strategy);
  const revenue = calculateReleaseRevenue(project, plan, strategy, [audience]);
  const awards = resolveAwardsOutcome(project, film, data.awards, [review], [submission]);
  const outcome = evaluateReleaseOutcome(
    project,
    film,
    strategyScore,
    [submission],
    [review],
    [audience],
    revenue,
    awards
  );
  const studio = createStudio({ name: "Release Test Studio", startingMoney: 1_000_000 });
  const application = applyReleaseResultToStudio(studio, outcome);

  assert.equal(revenue.netRevenue, revenue.grossRevenue - project.budget - revenue.marketingSpend - revenue.distributionCost);
  assert.equal(application.studio.money, studio.money + outcome.netRevenue);
  assert.equal(application.studio.completedFilmProjectIds.includes(project.id), true);
  assert.equal(studio.completedFilmProjectIds.includes(project.id), false);
  assert.equal(application.outcome, outcome);
});

function requireFirst<T>(items: readonly T[]): T {
  return requireAt(items, 0);
}

function requireAt<T>(items: readonly T[], index: number): T {
  const item = items[index];
  if (!item) throw new Error(`Missing release test fixture at index ${index}.`);
  return item;
}
