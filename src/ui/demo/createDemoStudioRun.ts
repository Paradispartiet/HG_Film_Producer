import actors from "../../../data/film/actors.json";
import audienceSegments from "../../../data/film/audience_segments.json";
import awardsData from "../../../data/film/awards.json";
import careerMilestones from "../../../data/film/career_milestones.json";
import colorDecisions from "../../../data/film/color_decisions.json";
import crewMembers from "../../../data/film/crew_members.json";
import criticProfiles from "../../../data/film/critic_profiles.json";
import editDecisions from "../../../data/film/edit_decisions.json";
import festivals from "../../../data/film/festivals.json";
import genres from "../../../data/film/genres.json";
import locationScoutingBriefs from "../../../data/film/location_scouting_briefs.json";
import locations from "../../../data/film/locations.json";
import mentorLessons from "../../../data/film/mentor_lessons.json";
import mentors from "../../../data/film/mentors.json";
import musicDecisions from "../../../data/film/music_decisions.json";
import productionChoices from "../../../data/film/production_choices.json";
import productionEvents from "../../../data/film/production_events.json";
import releaseStrategies from "../../../data/film/release_strategies.json";
import sceneFunctions from "../../../data/film/scene_functions.json";
import scriptTemplates from "../../../data/film/script_templates.json";
import soundDecisions from "../../../data/film/sound_decisions.json";
import strategicGoals from "../../../data/film/strategic_goals.json";
import studioExpenses from "../../../data/film/studio_expenses.json";
import trailerStrategies from "../../../data/film/trailer_strategies.json";

import { addSceneToScript } from "../../core/addSceneToScript.js";
import { advanceCareerQuarter } from "../../core/advanceCareerQuarter.js";
import { applyCareerMilestone } from "../../core/applyCareerMilestone.js";
import { applyColorDecision } from "../../core/applyColorDecision.js";
import { applyEditDecision } from "../../core/applyEditDecision.js";
import { applyMentorLesson } from "../../core/applyMentorLesson.js";
import { applyMusicDecision } from "../../core/applyMusicDecision.js";
import { applyProductionChoice } from "../../core/applyProductionChoice.js";
import { applyProductionEvent } from "../../core/applyProductionEvent.js";
import { applyReleaseResultToStudio } from "../../core/applyReleaseResultToStudio.js";
import { applySoundDecision } from "../../core/applySoundDecision.js";
import { applyStudioExpense } from "../../core/applyStudioExpense.js";
import { applyStudioIncome } from "../../core/applyStudioIncome.js";
import { attachLocationToProject } from "../../core/attachLocationToProject.js";
import { calculateFilmResult } from "../../core/calculateFilmResult.js";
import { calculateReleaseRevenue } from "../../core/calculateReleaseRevenue.js";
import { castActor, scoreActorForProject } from "../../core/castActor.js";
import { createCareerState } from "../../core/createCareerState.js";
import { createFilmProject } from "../../core/createFilmProject.js";
import { createPostProductionPlan } from "../../core/createPostProductionPlan.js";
import { createProductionSchedule } from "../../core/createProductionSchedule.js";
import { createReleasePlan } from "../../core/createReleasePlan.js";
import { createScript } from "../../core/createScript.js";
import { createStudio } from "../../core/createStudio.js";
import { createTrailerCut } from "../../core/createTrailerCut.js";
import { evaluateCareerYear } from "../../core/evaluateCareerYear.js";
import { evaluatePostProduction } from "../../core/evaluatePostProduction.js";
import { evaluateProductionTeam } from "../../core/evaluateProductionTeam.js";
import { evaluateReleaseOutcome } from "../../core/evaluateReleaseOutcome.js";
import { evaluateScript } from "../../core/evaluateScript.js";
import { evaluateShootResult } from "../../core/evaluateShootResult.js";
import { findMentorsForProblem } from "../../core/findMentorsForProblem.js";
import { generateAudienceResult } from "../../core/generateAudienceResult.js";
import { generateReviewResult } from "../../core/generateReviewResult.js";
import { getMentorAdvice } from "../../core/getMentorAdvice.js";
import { hireCrewMember } from "../../core/hireCrewMember.js";
import { recordCompletedFilm } from "../../core/recordCompletedFilm.js";
import { resolveAwardsOutcome } from "../../core/resolveAwardsOutcome.js";
import { resolveShootDay } from "../../core/resolveShootDay.js";
import { runTestScreening } from "../../core/runTestScreening.js";
import { scoreCrewMemberForProject } from "../../core/scoreCrewMemberForProject.js";
import { scoreReleaseStrategy } from "../../core/scoreReleaseStrategy.js";
import { scoutLocations } from "../../core/scoutLocations.js";
import { selectNextStrategicGoal } from "../../core/selectNextStrategicGoal.js";
import { submitToFestival } from "../../core/submitToFestival.js";
import type { FilmData } from "../../data/filmData.js";
import type { StudioIncome } from "../../domain/career.js";
import type { CrewDiscipline } from "../../domain/crew.js";
import { asCharacterId, asSceneId, asStudioIncomeId } from "../../domain/ids.js";
import type { Character, Scene } from "../../domain/script.js";

const data = {
  actors,
  audienceSegments,
  awards: awardsData,
  careerMilestones,
  colorDecisions,
  crewMembers,
  criticProfiles,
  editDecisions,
  festivals,
  genres,
  locationScoutingBriefs,
  locations,
  mentorLessons,
  mentors,
  musicDecisions,
  productionChoices,
  productionEvents,
  releaseStrategies,
  sceneFunctions,
  scriptTemplates,
  soundDecisions,
  strategicGoals,
  studioExpenses,
  trailerStrategies
} as unknown as Pick<FilmData,
  | "actors" | "audienceSegments" | "awards" | "careerMilestones"
  | "colorDecisions" | "crewMembers" | "criticProfiles" | "editDecisions"
  | "festivals" | "genres" | "locationScoutingBriefs" | "locations"
  | "mentorLessons" | "mentors" | "musicDecisions" | "productionChoices"
  | "productionEvents" | "releaseStrategies" | "sceneFunctions" | "scriptTemplates"
  | "soundDecisions" | "strategicGoals" | "studioExpenses" | "trailerStrategies"
>;

export interface PipelineStep {
  readonly label: string;
  readonly detail: string;
  readonly score: number;
}

export interface DemoStudioRun {
  readonly studio: {
    readonly name: string;
    readonly money: number;
    readonly reputation: number;
    readonly prestige: number;
    readonly currentYear: number;
    readonly currentQuarter: string;
  };
  readonly careerState: {
    readonly goals: readonly { readonly title: string; readonly description: string }[];
    readonly identityTags: readonly string[];
    readonly completedFilms: number;
    readonly evaluation: { readonly overall: number; readonly summary: string };
  };
  readonly filmProject: {
    readonly title: string;
    readonly genre: string;
    readonly scale: string;
    readonly logline: string;
  };
  readonly filmResult: {
    readonly quality: number;
    readonly audienceAppeal: number;
    readonly criticalAppeal: number;
    readonly budgetSpent: number;
    readonly revenueEstimate: number;
  };
  readonly releaseOutcome: {
    readonly strategy: string;
    readonly festival: string;
    readonly festivalAccepted: boolean;
    readonly reviewScore: number;
    readonly reviewQuote: string;
    readonly audienceScore: number;
    readonly estimatedViewers: number;
    readonly grossRevenue: number;
    readonly netRevenue: number;
    readonly breakEven: boolean;
    readonly nominations: number;
    readonly wins: number;
  };
  readonly pipelineSteps: readonly PipelineStep[];
  readonly representedEngines: readonly string[];
}

/** Run one fixed, engine-backed film from development through its career result. */
export function createDemoStudioRun(): DemoStudioRun {
  const initialStudio = createStudio({ name: "Nordlys Film" });
  let careerState = createCareerState(initialStudio, 1);
  const strategicGoal = requireSeed(data.strategicGoals, "strategic_goal_arthouse_reputation", "strategic goal");
  careerState = selectNextStrategicGoal(careerState, strategicGoal).careerState;

  const template = requireSeed(data.scriptTemplates, "script_template_intimate_drama", "script template");
  const genre = requireSeed(data.genres, template.genreId, "genre");
  const project = createFilmProject({ title: "The Long Winter", genreId: genre.id, scale: genre.recommendedScale });

  const protagonist: Character = {
    id: asCharacterId("character_marit"),
    name: "Marit",
    archetype: "protagonist",
    goal: "Reconcile with her estranged father before it is too late.",
    flaw: "She mistakes silence for strength.",
    relationshipIds: [asCharacterId("character_johan")]
  };
  const father: Character = {
    id: asCharacterId("character_johan"),
    name: "Johan",
    archetype: "mentor",
    goal: "Be forgiven without having to ask.",
    flaw: "Pride he calls dignity.",
    relationshipIds: [protagonist.id]
  };
  let script = createScript({
    title: project.title,
    logline: "A daughter returns to a frozen northern town to face the father she swore she had forgotten.",
    genreId: genre.id,
    theme: template.defaultTheme,
    structure: template.structure,
    protagonistCharacterId: protagonist.id,
    characterIds: [protagonist.id, father.id]
  });

  const apartment = requireSeed(data.locations, "location_oslo_apartment", "location");
  const scenes: readonly Scene[] = [
    createScene("scene_arrival", "Arrival in the dark", "scene_function_opening", null, [protagonist.id], 30, 35, 45),
    createScene("scene_doorway", "The doorway", "scene_function_inciting_incident", apartment.id, [protagonist.id, father.id], 65, 50, 60),
    createScene("scene_kitchen_table", "The kitchen table", "scene_function_intimacy", apartment.id, [protagonist.id, father.id], 55, 25, 80)
  ];
  for (const scene of scenes) script = addSceneToScript(script, scene);
  const scriptEvaluation = evaluateScript(script, scenes);

  const mentorLesson = findMentorsForProblem(data.mentorLessons, ["scene_lacks_tension"])[0];
  if (!mentorLesson) throw new Error("Seed data has no mentor lesson for scene tension.");
  const mentorAdvice = getMentorAdvice(mentorLesson);
  const mentorApplication = applyMentorLesson(project, mentorLesson);

  const scoutingBrief = requireSeed(data.locationScoutingBriefs, "location_brief_intimate_drama", "location brief");
  const scouting = scoutLocations(mentorApplication.project, data.locations, scoutingBrief);
  const locationScore = requireFirst(scouting.rankedLocations, "location score");
  const locationChoice = requireSeed(data.locations, locationScore.locationId, "scouted location");
  const locationSelection = attachLocationToProject(mentorApplication.project, locationChoice);

  const disciplines: readonly CrewDiscipline[] = ["directing", "cinematography", "editing"];
  const styleTags = ["intimate", "naturalistic", "character_first"] as const;
  let staffedProject = locationSelection.project;
  for (const discipline of disciplines) {
    const candidate = requireFirst(
      data.crewMembers
        .filter((member) => member.discipline === discipline)
        .map((member) => ({ member, score: scoreCrewMemberForProject(staffedProject, member, styleTags) }))
        .sort((left, right) => right.score.totalScore - left.score.totalScore),
      `${discipline} crew candidate`
    );
    staffedProject = hireCrewMember(staffedProject, candidate.member, candidate.score).project;
  }

  const chosenActors = data.actors
    .map((actor) => ({ actor, score: scoreActorForProject(staffedProject, actor) }))
    .sort((left, right) => right.score.totalScore - left.score.totalScore)
    .slice(0, 2);
  if (chosenActors.length < 2) throw new Error("The demo requires two cast candidates.");
  for (const candidate of chosenActors) staffedProject = castActor(staffedProject, candidate.actor, candidate.score).project;
  const productionTeamEvaluation = evaluateProductionTeam(staffedProject, data.crewMembers, data.actors);

  const schedule = createProductionSchedule(staffedProject, scenes);
  const firstShootDay = requireFirst(schedule.shootDays, "shoot day");
  const shootEvent = requireSeed(data.productionEvents, "production_event_transport_delay", "production event");
  const eventDay = applyProductionEvent(firstShootDay, shootEvent).shootDay;
  const shootDayResult = resolveShootDay(eventDay, scenes, data.productionEvents);
  const shootEvaluation = evaluateShootResult(staffedProject, schedule, [shootDayResult]);

  let postPlan = createPostProductionPlan(staffedProject);
  const editDecision = requireSeed(data.editDecisions, "edit_tighten_middle_act", "edit decision");
  const soundDecision = requireSeed(data.soundDecisions, "sound_dialogue_clarity", "sound decision");
  const musicDecision = requireSeed(data.musicDecisions, "music_recurring_motif", "music decision");
  const colorDecision = requireSeed(data.colorDecisions, "color_naturalistic_grade", "color decision");
  postPlan = applyEditDecision(postPlan, editDecision).plan;
  postPlan = applySoundDecision(postPlan, soundDecision).plan;
  postPlan = applyMusicDecision(postPlan, musicDecision).plan;
  postPlan = applyColorDecision(postPlan, colorDecision).plan;
  const screening = runTestScreening(staffedProject, postPlan, shootEvaluation, scriptEvaluation);
  const trailerStrategy = requireSeed(data.trailerStrategies, "trailer_character_journey", "trailer strategy");
  const trailer = createTrailerCut(staffedProject, postPlan, trailerStrategy);
  const postProductionEvaluation = evaluatePostProduction(
    staffedProject,
    postPlan,
    { edits: [editDecision], sound: [soundDecision], music: [musicDecision], color: [colorDecision] },
    screening,
    trailer
  );

  const productionChoice = requireSeed(data.productionChoices, "choice_slow_middle", "production choice");
  const finalProject = applyProductionChoice(staffedProject, productionChoice).project;
  const filmResult = calculateFilmResult(finalProject, productionTeamEvaluation, postProductionEvaluation);

  const selectedRelease = requireFirst(
    data.releaseStrategies
      .map((strategy) => ({ strategy, score: scoreReleaseStrategy(finalProject, filmResult, strategy, postProductionEvaluation) }))
      .sort((left, right) => right.score.totalScore - left.score.totalScore),
    "release strategy"
  );
  let releasePlan = createReleasePlan(finalProject, selectedRelease.strategy);
  const festival = requireSeed(data.festivals, "festival_nordic_debut", "festival");
  const festivalResult = submitToFestival(finalProject, filmResult, festival);
  releasePlan = { ...releasePlan, festivalSubmissionIds: [festival.id] };

  const reviews = ["critic_mainstream_newspaper", "critic_arthouse_journal", "critic_local_culture"]
    .map((id) => generateReviewResult(finalProject, filmResult, requireSeed(data.criticProfiles, id, "critic"), postProductionEvaluation));
  const audiences = ["audience_broad_weekend", "audience_arthouse_regulars", "audience_local_oslo"]
    .map((id) => generateAudienceResult(finalProject, filmResult, requireSeed(data.audienceSegments, id, "audience"), selectedRelease.strategy));
  const revenue = calculateReleaseRevenue(finalProject, releasePlan, selectedRelease.strategy, audiences);
  const awards = resolveAwardsOutcome(finalProject, filmResult, data.awards, reviews, [festivalResult]);
  const releaseOutcome = evaluateReleaseOutcome(
    finalProject, filmResult, selectedRelease.score, [festivalResult], reviews, audiences, revenue, awards
  );

  const releasedStudio = applyReleaseResultToStudio(initialStudio, releaseOutcome).studio;
  careerState = { ...careerState, studio: { ...releasedStudio, money: careerState.studio.money } };
  const income: StudioIncome = {
    id: asStudioIncomeId(`studio_income_${finalProject.id}_release`),
    title: `${finalProject.title} release income`,
    amount: releaseOutcome.netRevenue,
    sourceProjectId: finalProject.id,
    quarter: careerState.currentQuarter,
    note: "Net release revenue after marketing and distribution costs."
  };
  careerState = applyStudioIncome(careerState, income);
  careerState = recordCompletedFilm(careerState, {
    projectId: finalProject.id,
    title: finalProject.title,
    year: careerState.currentYear,
    genreId: finalProject.genreId,
    scale: finalProject.scale,
    quality: filmResult.quality,
    audienceAppeal: filmResult.audienceAppeal,
    criticalAppeal: filmResult.criticalAppeal,
    grossRevenue: releaseOutcome.grossRevenue,
    netRevenue: releaseOutcome.netRevenue,
    awardsWon: awards.wins.length,
    reputationDelta: releaseOutcome.reputationDelta,
    prestigeDelta: releaseOutcome.prestigeDelta,
    identityTags: ["arthouse", "local", "low_budget"]
  });
  careerState = applyStudioExpense(careerState, requireSeed(data.studioExpenses, "studio_expense_small_office_rent", "studio expense"));
  const careerEvaluation = evaluateCareerYear(careerState, careerState.currentYear);
  const milestone = requireSeed(data.careerMilestones, "career_milestone_first_completed_film", "career milestone");
  const finalCareerState = advanceCareerQuarter(applyCareerMilestone(careerState, milestone).careerState);

  const averageAudience = Math.round(audiences.reduce((sum, item) => sum + item.satisfactionScore, 0) / audiences.length);
  const estimatedViewers = audiences.reduce((sum, item) => sum + item.estimatedViewers, 0);
  const activeGoals = data.strategicGoals.filter((goal) => finalCareerState.activeStrategicGoalIds.includes(goal.id));

  return {
    studio: {
      name: finalCareerState.studio.name,
      money: finalCareerState.studio.money,
      reputation: finalCareerState.studio.reputation,
      prestige: finalCareerState.studio.prestige,
      currentYear: finalCareerState.currentYear,
      currentQuarter: finalCareerState.currentQuarter.toUpperCase()
    },
    careerState: {
      goals: activeGoals.map(({ title, description }) => ({ title, description })),
      identityTags: finalCareerState.identityTags,
      completedFilms: finalCareerState.completedFilms.length,
      evaluation: {
        overall: careerEvaluation.overall,
        summary: `${signed(careerEvaluation.profit)} year result · ${careerEvaluation.awardMomentum}/100 award momentum`
      }
    },
    filmProject: { title: finalProject.title, genre: genre.name, scale: finalProject.scale, logline: script.logline },
    filmResult,
    releaseOutcome: {
      strategy: selectedRelease.strategy.title,
      festival: festival.name,
      festivalAccepted: festivalResult.accepted,
      reviewScore: releaseOutcome.reviewScore,
      reviewQuote: requireFirst(reviews, "review").pullQuote,
      audienceScore: averageAudience,
      estimatedViewers,
      grossRevenue: revenue.grossRevenue,
      netRevenue: revenue.netRevenue,
      breakEven: revenue.breakEven,
      nominations: awards.nominations.length,
      wins: awards.wins.length
    },
    pipelineSteps: [
      { label: "Idea", detail: `${genre.name} · ${finalProject.scale.replace("_", " ")}`, score: 100 },
      { label: "Script", detail: `${script.sceneIds.length} scenes · ${script.structure}`, score: scriptEvaluation.overall },
      { label: "Mentor", detail: mentorAdvice.title, score: 100 },
      { label: "Location", detail: locationChoice.name, score: locationScore.totalScore },
      { label: "Crew / Cast", detail: `${staffedProject.crewMemberIds.length} crew · ${staffedProject.actorIds.length} cast`, score: productionTeamEvaluation.overall },
      { label: "Shoot", detail: `${schedule.totalPlannedDays} planned days`, score: shootEvaluation.overall },
      { label: "Post", detail: "Picture and sound locked", score: postProductionEvaluation.overall },
      { label: "Release", detail: selectedRelease.strategy.channel.replace("_", " "), score: releaseOutcome.overall },
      { label: "Career result", detail: milestone.title, score: careerEvaluation.overall }
    ],
    representedEngines: [
      "Studio engine", "Script engine", "Mentor engine", "Location engine", "Crew / casting engine",
      "Shoot engine", "Post-production engine", "Release engine", "Career engine"
    ]
  };
}

function createScene(
  id: string,
  title: string,
  functionId: string,
  locationId: Scene["locationId"],
  characterIds: Scene["characterIds"],
  conflictLevel: number,
  pacing: number,
  emotionalWeight: number
): Scene {
  return {
    id: asSceneId(id),
    title,
    functionId: requireSeed(data.sceneFunctions, functionId, "scene function").id,
    locationId,
    characterIds,
    mood: "intimate, restrained",
    conflictLevel,
    pacing,
    emotionalWeight,
    techniqueIdsUsed: []
  };
}

function requireSeed<TItem extends { readonly id: string }>(items: readonly TItem[], id: string, label: string): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Seed data is missing ${label} "${id}".`);
  return item;
}

function requireFirst<TItem>(items: readonly TItem[], label: string): TItem {
  const item = items[0];
  if (!item) throw new Error(`Demo data requires at least one ${label}.`);
  return item;
}

function signed(value: number): string {
  const formatted = Math.abs(value).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return value >= 0 ? `+${formatted}` : `-${formatted}`;
}
