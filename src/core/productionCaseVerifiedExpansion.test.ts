import assert from "node:assert/strict";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  CANONICAL_THE_MACHINIST_STATEMENTS,
  CANONICAL_THE_LIVES_OF_OTHERS_STATEMENTS,
  presentVerifiedFilmStatement,
  presentFilmCaseContent,
} from "./productionCaseFilmStatementCopy.js";

const cases = [
  { id: "scenario_the_machinist_2004", statements: CANONICAL_THE_MACHINIST_STATEMENTS, expected: ["Build a paranoid thriller where a worn-down worker cannot trust his body, memory, or surroundings.","Paranoid psychological thriller","Body-under-pressure mystery","Isolated character study","Uneasy and restrained","Physically depleted","Threateningly quiet","Make perception unreliable","Let small clues contradict memory","Tie guilt to deterioration","Use industrial spaces as pressure","Frame isolation in hard lines","Show the body as evidence","Hold an uneasy rhythm","Disrupt certainty with brief flashes","Delay answers without losing clarity","Use machinery as anxiety","Let repetition become pressure","Make silence feel exposed","Externalize mental strain through craft","Make limited spaces feel unsafe","Control reveals without final certainty"] },
  { id: "scenario_the_lives_of_others_2006", statements: CANONICAL_THE_LIVES_OF_OTHERS_STATEMENTS, expected: ["Stage a surveillance drama where watching and listening force a choice between duty and conscience.","Surveillance drama","Political moral conflict","Observer character study","Controlled and quiet","Institutionally pressured","Morally tense","Let listening become dramatic action","Pressure private choices with rules","Track conscience through small decisions","Frame rooms within systems","Use distance to show power","Keep compositions controlled","Cross-cut watcher and watched","Build tension through procedure","Release emotion sparingly","Make listening the hook","Use muted interiors","Let silence carry suspicion","Turn observation into conflict","Show moral change without speeches","Use restraint to raise stakes"] },
] as const;

test("two source-verified film cases have exact closed lists of 22 authored statements", () => {
  for (const record of cases) {
    assert.deepEqual(record.statements, record.expected, record.id);
    assert.equal(new Set(record.statements).size, 22, record.id);
  }
});

test("two source-verified films display every authored film-specific statement in EN NB FR PT", () => {
  for (const record of cases) {
    for (const language of FILMWORK_LANGUAGES) {
      for (const statement of record.statements) {
        const display = presentVerifiedFilmStatement(language, "production_case", record.id, statement);
        assert.ok(display.trim(), `${record.id}:${language}:${statement}`);
        if (language === "en") assert.equal(display, statement);
        else assert.notEqual(display, statement, `${record.id}:${language}:${statement}`);
        assert.equal(presentFilmCaseContent(language, "production_case", record.id, statement), display);
      }
    }
  }
});

test("precise selected claims are translated without changing documentary meaning", () => {
  assert.equal(presentVerifiedFilmStatement("nb", "production_case", "scenario_the_machinist_2004", "Use industrial spaces as pressure"), "Bruk industrimiljøene til å skape press");
  assert.equal(presentVerifiedFilmStatement("fr", "production_case", "scenario_the_lives_of_others_2006", "Make listening the hook"), "Faites de l’écoute le moteur de l’intrigue");
  assert.equal(presentVerifiedFilmStatement("pt", "production_case", "scenario_the_lives_of_others_2006", "Let silence carry suspicion"), "Deixe que o silêncio transmita suspeita");
});

test("other film, seed, unknown claim, and unchanged film titles fail closed", () => {
  for (const record of cases) {
    for (const language of FILMWORK_LANGUAGES) {
      const original = record.statements[1];
      assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_nonexistent", original), original);
      assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", record.id, original), original);
      assert.equal(presentVerifiedFilmStatement(language, "production_case", record.id, "Source-new revised film claim"), "Source-new revised film claim");
      assert.equal(presentVerifiedFilmStatement(language, "production_case", record.id, "The Lives of Others"), "The Lives of Others");
    }
  }
});
