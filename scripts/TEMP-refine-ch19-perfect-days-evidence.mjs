import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (p) => readFileSync(path.join(root, p), "utf8");
const write = (p, text) => writeFileSync(path.join(root, p), text);
function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required refinement marker missing: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: refinement marker not unique: ${before.slice(0, 180)}`);
  write(p, source.slice(0, first) + after + source.slice(first + before.length));
}

const expansion = "src/core/chapterNineteenPerfectDaysExpansion.ts";
const test = "src/core/chapterNineteenPerfectDaysExpansion.test.ts";
const study = "src/ui/data/scenarioFilmStudyChapterNineteenPerfectDays.ts";
const pv = "src/ui/data/scenarioProductionVerificationPerfectDays.ts";

replaceOnce(expansion,
  "Filmportal records the physical shoot as sixteen days in Tokyo in October 2022, so principalPhotographyYear is 2022 while the institutional production year remains 2023. Wenders' direct production interviews independently describe sixteen days, little preparation, Franz Lustig shooting the feature from his shoulder without tripod, tracks, dolly or gimbal, and a documentary-like fiction method;",
  "Filmportal and Wenders' direct production interviews record a sixteen-day Tokyo shoot in October 2022, while Franz Lustig's own professional About page says Perfect Days was shot in 17 days in Tokyo; principalPhotographyYear is therefore 2022, but the exact shoot-day count is preserved as a direct-source 16-versus-17-day discrepancy rather than normalized. Wenders' direct production interviews also describe little preparation, Franz Lustig shooting the feature from his shoulder without tripod, tracks, dolly or gimbal, and a documentary-like fiction method;"
);
replaceOnce(expansion,
  '["film_year_2023", "production_year_2023", "principal_photography_october_2022", "sixteen_day_tokyo_shoot", "exact_daily_schedule_unresolved"]',
  '["film_year_2023", "production_year_2023", "principal_photography_october_2022", "wenders_filmportal_sixteen_days", "franz_lustig_seventeen_days", "shoot_duration_16_vs_17_days_discrepancy", "exact_daily_schedule_unresolved"]'
);
replaceOnce(expansion,
  '"Keep film and production year 2023 separate from the documented sixteen-day Tokyo shoot in October 2022.",\n      "Treat sixteen days as the sourced production duration without inventing call-sheet dates or daily page counts.",',
  '"Keep film and production year 2023 separate from the documented October 2022 Tokyo photography.",\n      "Preserve Wenders/Filmportal sixteen-day and Franz Lustig seventeen-day records as a direct-source shoot-duration discrepancy without inventing call-sheet dates or daily page counts.",'
);
replaceOnce(expansion,
  '"Explain how the sixteen-day schedule and trusted cinematographer enabled a rapid documentary-like fiction workflow.",',
  '"Explain how the compressed 16/17-day Tokyo schedule and trusted cinematographer enabled a rapid documentary-like fiction workflow while preserving the source discrepancy.",'
);
replaceOnce(expansion,
  '{ id: "chronology", label: "Separate 2022 photography from 2023 metadata", player_task: "Keep the sixteen-day October shoot distinct from release-year records." },',
  '{ id: "chronology", label: "Separate 2022 photography from 2023 metadata", player_task: "Keep October 2022 distinct from release-year records and preserve the 16-versus-17-day source discrepancy." },'
);

replaceOnce(test,
  'assert.match(film.premise, /sixteen days/i);\n  assert.match(film.premise, /October 2022/i);',
  'assert.match(film.premise, /sixteen-day/i);\n  assert.match(film.premise, /17 days/i);\n  assert.match(film.premise, /16-versus-17-day discrepancy/i);\n  assert.match(film.premise, /October 2022/i);'
);

replaceOnce(study,
  'period: "October 2022 Tokyo principal photography / 2023 Cannes Japanese-German fiction: sixteen-day documentary-style shoulder-camera production, Sony VENICE/Canon K35 and 1.33 framing",',
  'period: "October 2022 Tokyo principal photography / 2023 Cannes Japanese-German fiction: compressed documentary-style shoulder-camera production with a 16-versus-17-day direct-source duration discrepancy, Sony VENICE/Canon K35 and 1.33 framing",'
);
replaceOnce(study,
  'moment: "Filmportal records a sixteen-day Tokyo shoot in October 2022. Wenders directly describes a very fast production in which Franz Lustig carried the camera on his shoulder, without tripod, tracks, dolly or gimbal, and increasingly photographed rehearsals as part of a documentary-like method for following Koji Yakusho.',
  'moment: "Filmportal and Wenders record sixteen days of Tokyo shooting in October 2022, while Franz Lustig’s own professional About page records 17 days in Tokyo; the Film Study preserves that direct-source discrepancy. Wenders directly describes a very fast production in which Lustig carried the camera on his shoulder, without tripod, tracks, dolly or gimbal, and increasingly photographed rehearsals as part of a documentary-like method for following Koji Yakusho.'
);
replaceOnce(study,
  'historyQuestion: "How did Perfect Days use a sixteen-day Tokyo schedule, documentary-style shoulder camera, Sony VENICE/Canon K35 photography, location-specific light study and performance-first rehearsal capture to build a patient fiction while keeping conflicting runtime and aspect-ratio catalogue records explicit?",',
  'historyQuestion: "How did Perfect Days use a compressed Tokyo schedule documented as sixteen days by Wenders/Filmportal and 17 by Franz Lustig, documentary-style shoulder camera, Sony VENICE/Canon K35 photography, location-specific light study and performance-first rehearsal capture to build a patient fiction while keeping production and catalogue discrepancies explicit?",'
);
replaceOnce(study,
  'Filmportal records sixteen days of Tokyo photography in October 2022, keeping physical production chronology separate from the 2023 institutional year.',
  'Filmportal and Wenders record sixteen days of Tokyo photography in October 2022, while Franz Lustig’s own professional site records 17 days; physical production remains in 2022 and the duration discrepancy is explicit.'
);
replaceOnce(study,
  'Wenders describes a sixteen-day production photographed like a documentary, with the crew increasingly filming rehearsals and following behavior rather than building conventional coverage.',
  'Wenders describes a sixteen-day production photographed like a documentary, while Lustig records 17 days; the workflow conclusion is retained but the exact duration is not falsely collapsed.'
);

replaceOnce(pv,
  'Filmportal separately records a sixteen-day Tokyo shoot in October 2022, keeping physical production chronology distinct from the 2023 production/release record. Wenders\' direct interviews describe a fast, low-preparation fiction workflow',
  'Filmportal and Wenders’ direct interviews record a sixteen-day Tokyo shoot in October 2022, while Franz Lustig’s own professional About page records 17 days in Tokyo; physical production is therefore securely bounded to October 2022 but the exact shoot-day count remains a direct-source 16-versus-17-day discrepancy. Wenders’ interviews describe a fast, low-preparation fiction workflow'
);
replaceOnce(pv,
  '    {\n      title: "Perfect Days",\n      publisher: "The Match Factory",',
  '    {\n      title: "About Franz Lustig",\n      publisher: "Franz Lustig",\n      url: "https://franzlustig.com/about/",\n      sourceKind: "filmmaker_interview",\n      supports: ["overall", "cinematography"],\n      note: "The cinematographer’s own professional biography states that Perfect Days was shot in 17 days in Tokyo. This is retained as a direct-source discrepancy against Wenders and Filmportal’s sixteen-day accounts rather than normalized."\n    },\n    {\n      title: "Perfect Days",\n      publisher: "The Match Factory",'
);

for (const p of [expansion, test, study, pv]) {
  const source = read(p);
  if (!source.includes("scenario_perfect_days_2023")) throw new Error(`${p}: canonical Perfect Days ID missing after refinement.`);
}
if (!read(expansion).includes("16-versus-17-day discrepancy")) throw new Error("Expansion did not retain 16/17-day discrepancy.");
if (!read(study).includes("17 days")) throw new Error("Film Study did not retain 17-day DP record.");
if (!read(pv).includes("https://franzlustig.com/about/")) throw new Error("PV did not add Franz Lustig duration source.");
console.log("Perfect Days evidence refinement applied fail-closed.");
