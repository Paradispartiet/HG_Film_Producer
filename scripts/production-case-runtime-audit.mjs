import assert from "node:assert/strict";
import { build } from "esbuild";

// Bundle the real runtime functions together, rather than counting source-file definitions.
const bundled = await build({
  stdin: {
    contents: `
      export { getClassicFilmScenarios } from "./src/ui/data/filmScenarios.ts";
      export { resolveRegisteredScenarioProductionBrief, resolveScenarioProductionBrief, createProductionCaseMissions } from "./src/ui/data/scenarioProductionBriefs.ts";
      export { getVerifiedProductionCaseIds, getProductionCaseVerification } from "./src/ui/data/scenarioProductionVerificationRegistry.ts";
      export { getResolvedFilmHistoryProfile, resolveFullScenarioFilmStudyMap } from "./src/ui/data/scenarioFilmStudyProfileResolver.ts";
    `,
    resolveDir: process.cwd(),
    sourcefile: "production-case-runtime-audit.ts",
    loader: "ts",
  },
  bundle: true, platform: "node", format: "esm", write: false, logLevel: "warning",
});
const runtime = await import("data:text/javascript;base64," + Buffer.from(bundled.outputFiles[0].text).toString("base64"));
const catalogue = runtime.getClassicFilmScenarios();
const verifiedIds = runtime.getVerifiedProductionCaseIds();
const existing = [], bridged = [], unresolved = [], problems = [];
const seen = new Set();
const expectedPhases = ["case_orientation", "screenplay", "cinematography", "editing", "sound", "reflection"];
for (const scenario of catalogue) {
  const row = { id: scenario.id, title: scenario.film.title, year: scenario.film.year };
  if (seen.has(row.id)) problems.push({ ...row, reason: "duplicate scenario identity" });
  seen.add(row.id);
  const registered = runtime.resolveRegisteredScenarioProductionBrief(scenario);
  const brief = runtime.resolveScenarioProductionBrief(scenario);
  const verification = runtime.getProductionCaseVerification(row.id);
  const profile = runtime.getResolvedFilmHistoryProfile(row.id);
  const displayedStudy = runtime.resolveFullScenarioFilmStudyMap(scenario, brief);
  if (!profile || displayedStudy.historyProfile?.scenarioId !== row.id || displayedStudy.historyStatus !== "source_backed" || JSON.stringify(displayedStudy.historyProfile) !== JSON.stringify(profile)) problems.push({ ...row, reason: "display and production history resolvers disagree or lack exact profile" });
  if (brief.briefType !== "production_case") {
    unresolved.push(row);
    continue;
  }
  if (registered) {
    existing.push(row);
    if (JSON.stringify(registered) !== JSON.stringify(brief)) problems.push({ ...row, reason: "registered brief changed" });
  } else {
    bridged.push(row);
    if (verification?.scenarioId !== row.id || verification.status !== "verified" || profile?.scenarioId !== row.id)
      problems.push({ ...row, reason: "history mapping lacks exact verified record and profile" });
  }
  if (brief.scenarioId !== row.id) problems.push({ ...row, reason: "brief identity mismatch" });
  if (!verification || !profile) problems.push({ ...row, reason: "missing source record or profile" });
  const missions = runtime.createProductionCaseMissions(brief);
  if (JSON.stringify(missions.map(m => m.phase)) !== JSON.stringify(expectedPhases)) problems.push({ ...row, reason: "mission phase mismatch" });
  for (const mission of missions) {
    if (mission.id !== row.id + "-mission-" + mission.phase ||
        !mission.targets.length || mission.choices.length < 2 ||
        !mission.choices.some(choice => choice.quality === "match") ||
        new Set(mission.choices.map(choice => choice.id)).size !== mission.choices.length)
      problems.push({ ...row, reason: "invalid mission " + mission.phase });
  }
}
// A synthetic unknown identity must remain outside the library even if its
// other fields happen to be copied from a real, verified film.
const unknown = { ...catalogue[0], id: "scenario_runtime_audit_unknown_unverified" };
if (runtime.resolveScenarioProductionBrief(unknown).briefType !== "seed_fallback")
  problems.push({ id: unknown.id, reason: "unknown identity was admitted" });

console.log("HG_FILM_PRODUCTION_RUNTIME_AUDIT_START");
console.log(JSON.stringify({
  totals: { catalogue: catalogue.length, verificationRecords: verifiedIds.length, existingRegisteredBriefs: existing.length, newlyMappedBriefs: bridged.length, unresolved: unresolved.length, playableBriefs: existing.length + bridged.length },
  newlyMappedIds: bridged.map(row => row.id), unresolved, problems,
}, null, 2));
console.log("HG_FILM_PRODUCTION_RUNTIME_AUDIT_END");
assert.equal(catalogue.length, 614, "canonical catalogue must remain unchanged");
assert.equal(verifiedIds.length, 614, "verification register must remain unchanged");
assert.deepEqual([...seen].sort(), [...verifiedIds].sort(), "catalogue and verification identities must agree");
assert.deepEqual(unresolved, [], "verified films must resolve to real production briefs");
assert.deepEqual(problems, [], "invalid runtime brief or mission mapping");
