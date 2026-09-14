import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  PRODUCTION_CASE_LEARNING_COPY,
  getProductionCaseLearningHintPresentation,
  getProductionCaseLearningNextActionPresentation,
  getProductionCaseLearningSummary,
} from "./productionCaseLearningCopy.js";
import type {
  ProductionCaseLearningHint,
  ProductionCaseLearningNextAction,
  ProductionCaseLearningReport,
} from "./productionCaseLearning.js";

const baseHint = {
  missionId: "mission_visual",
  phase: "cinematography",
  title: "Visual system",
} as const;

const baseAction = {
  missionId: "mission_visual",
  phase: "cinematography",
  title: "Visual system",
} as const;

function makeReport(
  kind: "revisit" | "developing" | "clear",
): ProductionCaseLearningReport {
  const phase = {
    missionId: "mission_visual",
    phase: "cinematography",
    title: "Visual system",
    selectedChoiceLabel: "Canonical choice",
  };
  return {
    completedCount: 6,
    totalMissions: 6,
    clearPhases: kind === "clear" ? [phase] : [],
    developingPhases: kind === "developing" ? [phase] : [],
    revisitPhases: kind === "revisit" ? [phase] : [],
    learningSummary: "Canonical summary",
  };
}

test("Production Case learning copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(PRODUCTION_CASE_LEARNING_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("all hint and next-action presentation variants are complete in every language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = PRODUCTION_CASE_LEARNING_COPY[language];
    assert.deepEqual(Object.keys(copy.hints).sort(), ["choose", "compare", "revisit"]);
    assert.deepEqual(Object.keys(copy.nextActions).sort(), ["choose", "complete"]);
    for (const presentation of [...Object.values(copy.hints), ...Object.values(copy.nextActions)]) {
      assert.ok(presentation.label.trim().length > 0, `${language}:label`);
      assert.ok(presentation.description.trim().length > 0, `${language}:description`);
    }
  }
});

test("English presentation remains canonical for generated learning text", () => {
  const chooseHint: ProductionCaseLearningHint = {
    ...baseHint,
    hintType: "choose",
    label: "Choose an approach",
    description: "Read the film-specific targets and choose the approach that best explains how this part of the film works.",
  };
  const completeAction: ProductionCaseLearningNextAction = {
    ...baseAction,
    actionType: "complete",
    label: "Complete the phase",
    description: "Read the feedback and learning focus, then mark the phase complete.",
  };
  assert.deepEqual(getProductionCaseLearningHintPresentation("en", chooseHint), {
    label: chooseHint.label,
    description: chooseHint.description,
  });
  assert.deepEqual(getProductionCaseLearningNextActionPresentation("en", completeAction), {
    label: completeAction.label,
    description: completeAction.description,
  });
  assert.equal(
    getProductionCaseLearningSummary("en", makeReport("revisit")),
    "You completed the case. Some phases are worth revisiting so the film's method becomes clearer.",
  );
});

test("hint presentation is keyed only by stable hintType and leaves identity fields untouched", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const hintType of ["choose", "revisit", "compare"] as const) {
      const hint: ProductionCaseLearningHint = {
        ...baseHint,
        hintType,
        label: "Canonical label",
        description: "Canonical description",
      };
      const before = structuredClone(hint);
      const presentation = getProductionCaseLearningHintPresentation(language, hint);
      assert.ok(presentation.label);
      assert.ok(presentation.description);
      assert.deepEqual(hint, before, `${language}:${hintType}:mutation`);
      assert.equal(hint.missionId, "mission_visual");
      assert.equal(hint.phase, "cinematography");
    }
  }
});

test("review next actions map known canonical review labels and fail closed for unknown review text", () => {
  const revisit: ProductionCaseLearningNextAction = {
    ...baseAction,
    actionType: "review",
    label: "Revisit this phase",
    description: "Compare your choice with the film-specific targets and the explanation before choosing again.",
  };
  const compare: ProductionCaseLearningNextAction = {
    ...baseAction,
    actionType: "review",
    label: "Compare the alternatives",
    description: "Your choice identifies part of the method. Compare it with the closest alternative to see what is more precise for this film.",
  };
  assert.equal(getProductionCaseLearningNextActionPresentation("nb", revisit).label, "Gå tilbake til denne fasen");
  assert.equal(getProductionCaseLearningNextActionPresentation("fr", compare).label, "Comparez les options");

  const unknown: ProductionCaseLearningNextAction = {
    ...baseAction,
    actionType: "review",
    label: "Future review mode",
    description: "Future canonical description",
  };
  assert.deepEqual(getProductionCaseLearningNextActionPresentation("pt", unknown), {
    label: unknown.label,
    description: unknown.description,
  });
});

test("learning-summary localization depends only on report classification arrays", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const revisit = getProductionCaseLearningSummary(language, makeReport("revisit"));
    const developing = getProductionCaseLearningSummary(language, makeReport("developing"));
    const clear = getProductionCaseLearningSummary(language, makeReport("clear"));
    assert.ok(revisit.trim().length > 0, `${language}:revisit`);
    assert.ok(developing.trim().length > 0, `${language}:developing`);
    assert.ok(clear.trim().length > 0, `${language}:clear`);
    assert.notEqual(revisit, developing, `${language}:revisit-developing`);
    assert.notEqual(developing, clear, `${language}:developing-clear`);
  }
});
