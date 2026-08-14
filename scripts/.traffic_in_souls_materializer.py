from pathlib import Path

ROOT = Path(".")


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def write(path: str, text: str) -> None:
    (ROOT / path).write_text(text, encoding="utf-8")


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected exactly one anchor, found {count}")
    return text.replace(old, new, 1)


# 1. Canonical Chapter 4 scenario.
scenario_path = "src/core/chapterFourIndustryExpansion.ts"
scenario_text = read(scenario_path)
traffic_definition = r'''  {
    id: "scenario_traffic_in_souls_1913",
    title: "Traffic in Souls",
    originalTitle: "Traffic in Souls",
    aliases: ["While New York Sleeps", "While New York Sleeps: A Photodrama of Today"],
    year: 1913,
    titleType: "Feature",
    runtimeMins: 88,
    directors: ["George Loane Tucker"],
    genres: ["Crime", "Drama", "Thriller"],
    premise: "Build a 1913 American urban feature as a concentrated industrial risk: IMP secretly produces a contemporary six-reel social-problem melodrama, Universal distributes it, real New York locations connect workplace, street, office and confinement spaces, and parallel abduction, investigation, evidence and rescue sustain a long programme without literary-prestige cover. Keep George Loane Tucker's direction distinct from Jack Cohn and Walter MacNamara's documented post-production completion; keep the photographed film silent; and treat the period's sensational 'white slavery' rhetoric, reform claims and advertising as objects of critical analysis rather than neutral documentary truth or Rockefeller-authorized research.",
    sourceId: "manual_traffic_in_souls_1913",
    sourceUrl: "https://cinema.ucla.edu/events/traffic-in-souls-1913-where-are-my-children-1916-2012-05-10/",
    scenarioType: "social_issue_drama_production",
    requiredChoicesSeed: {
      screenplay: ["barton_sisters_parallel_plot", "trubus_network_investigation", "recorded_evidence_and_rescue"],
      camera: ["real_new_york_locations", "urban_network_geography", "class_and_power_tableaux"],
      editing: ["six_reel_feature_pacing", "parallel_investigation_and_rescue", "cohn_macnamara_completion_boundary"],
      sound: ["silent_photographed_production", "screening_specific_accompaniment", "no_synchronized_original_sound"],
      themes: ["film_history", "feature_transition", "independent_production", "universal_distribution", "reform_publicity_and_exploitation"],
    },
    learningGoals: [
      "Plan a contemporary six-reel American feature whose sustained value comes from parallel investigation, urban geography and emotional investment rather than from imported literary prestige or spectacle alone.",
      "Keep IMP production, Universal distribution and the concentrated financial and booking risk of a long feature as separate but connected industrial decisions.",
      "Use real New York locations and clearly differentiated social spaces to make the film's network of family, police, respectable philanthropy and criminal exploitation legible over feature length.",
      "Preserve the collaborative post-production record: Tucker directed and co-wrote, while UCLA documents Jack Cohn and Walter MacNamara completing a six-reel cut after Tucker left for England.",
      "Distinguish the staged melodrama and its period 'white slavery' discourse from documentary evidence, and distinguish advertising that invoked Rockefeller investigations from Rockefeller's explicit denial of authorization or approval.",
      "Keep the 88-minute Library of Congress preservation presentation, AFI's six-to-seven-reel release record and screening-specific accompaniment visible as evidence boundaries rather than silently declaring one universally identical original version.",
    ],
    phases: [
      { id: "pitch", label: "Contemporary-feature pitch", player_task: "Define why an urban social-problem melodrama can sustain six reels and concentrated booking risk without relying on literary prestige, historical spectacle or repeated shock alone." },
      { id: "research", label: "Production, publicity and ethics research", player_task: "Reconcile AFI, UCLA, Library of Congress and BFI evidence; separate IMP production from Universal distribution; and keep promotional reform claims distinct from Rockefeller authorization and verified social evidence." },
      { id: "screenplay", label: "Parallel urban investigation", player_task: "Coordinate Lorna's abduction, Mary's infiltration, Larry Burke's police work, Trubus's public façade and the recording-device evidence into a causal multi-reel progression." },
      { id: "casting", label: "Class and power ensemble", player_task: "Differentiate the Barton family, police, workers, immigrant victims, intermediaries and respectable elites while refusing to reduce threatened women to anonymous sensational spectacle." },
      { id: "production_design", label: "New York network", player_task: "Organize workplace, street, domestic, office and confinement spaces so the criminal network and routes of investigation remain readable across real locations and staged interiors." },
      { id: "cinematography", label: "Street-level feature geography", player_task: "Use real New York location value, readable group staging and clear entrances, exits and surveillance relationships without inventing an undocumented cinematographer, lens package or modern coverage grammar." },
      { id: "editing", label: "Six-reel pressure system", player_task: "Build pace through parallel investigation and rescue, then preserve the documented boundary between Tucker's direction and Jack Cohn/Walter MacNamara's completion of the six-reel cut." },
      { id: "sound", label: "Silent production, variable exhibition", player_task: "Keep the photographed film silent and treat live or recorded accompaniment as screening-specific unless a separately documented original score is established." },
      { id: "release", label: "Feature booking and controversy", player_task: "Model Universal distribution, concentrated investment, simultaneous theatre bookings, publicity and controversy while refusing to treat commercial success as proof that the film's reform claims were accurate." },
    ],
  },'''
if "scenario_traffic_in_souls_1913" not in scenario_text:
    anchor = "\n] as const;"
    index = scenario_text.rfind(anchor)
    if index < 0:
        raise SystemExit("chapterFourIndustryExpansion: closing array anchor missing")
    scenario_text = scenario_text[:index] + "\n" + traffic_definition + scenario_text[index:]
write(scenario_path, scenario_text)

# 2. Film Study registry.
batch_path = "src/ui/data/scenarioFilmStudySilentFoundationsBatch.ts"
batch_text = read(batch_path)
if "scenarioFilmStudySilentFoundationsTrafficInSouls" not in batch_text:
    batch_text = replace_once(
        batch_text,
        'import { queenElizabethFilmHistoryProfile } from "./scenarioFilmStudySilentFoundationsQueenElizabeth";\n',
        'import { queenElizabethFilmHistoryProfile } from "./scenarioFilmStudySilentFoundationsQueenElizabeth";\nimport { trafficInSoulsFilmHistoryProfile } from "./scenarioFilmStudySilentFoundationsTrafficInSouls";\n',
        "Film Study import",
    )
    batch_text = replace_once(
        batch_text,
        "  [queenElizabethFilmHistoryProfile.scenarioId]: queenElizabethFilmHistoryProfile,\n",
        "  [queenElizabethFilmHistoryProfile.scenarioId]: queenElizabethFilmHistoryProfile,\n  [trafficInSoulsFilmHistoryProfile.scenarioId]: trafficInSoulsFilmHistoryProfile,\n",
        "Film Study map",
    )
write(batch_path, batch_text)

# 3. Production Verification registry.
registry_path = "src/ui/data/scenarioProductionVerificationRegistry.ts"
registry_text = read(registry_path)
if "scenarioProductionVerificationTrafficInSouls" not in registry_text:
    registry_text = replace_once(
        registry_text,
        'import { queenElizabethProductionCaseVerification } from "./scenarioProductionVerificationQueenElizabeth";\n',
        'import { queenElizabethProductionCaseVerification } from "./scenarioProductionVerificationQueenElizabeth";\nimport { trafficInSoulsProductionCaseVerification } from "./scenarioProductionVerificationTrafficInSouls";\n',
        "verification import",
    )
    registry_text = replace_once(
        registry_text,
        "  queenElizabethProductionCaseVerification,\n",
        "  queenElizabethProductionCaseVerification,\n  trafficInSoulsProductionCaseVerification,\n",
        "verification registry entry",
    )
write(registry_path, registry_text)

# 4. Global verification census.
verification_test_path = "src/ui/data/scenarioProductionVerification.test.ts"
verification_test = read(verification_test_path)
verification_test = replace_once(
    verification_test,
    '"scenario_the_story_of_the_kelly_gang_1906", "scenario_queen_elizabeth_1912", "scenario_the_corbett_fitzsimmons_fight_1897"',
    '"scenario_the_story_of_the_kelly_gang_1906", "scenario_queen_elizabeth_1912", "scenario_traffic_in_souls_1913", "scenario_the_corbett_fitzsimmons_fight_1897"',
    "silent verification group",
)
verification_test = replace_once(
    verification_test,
    "const expectedVerifiedCount = 386;",
    "const expectedVerifiedCount = 387;",
    "verified count",
)
write(verification_test_path, verification_test)

# 5. Atlas hard counts.
for audit_path in [
    "scripts/film-history-chapter-one-atlas-audit.mjs",
    "scripts/film-history-chapter-two-atlas-audit.mjs",
    "scripts/film-history-chapter-three-atlas-audit.mjs",
    "scripts/film-history-chapter-four-atlas-audit.mjs",
]:
    text = read(audit_path)
    text = replace_once(text, "const EXPECTED_ATLAS_COUNT = 393;", "const EXPECTED_ATLAS_COUNT = 394;", f"{audit_path} count")
    write(audit_path, text)

rest_audit_path = "scripts/production-case-rest-audit.mjs"
rest_audit = read(rest_audit_path)
rest_audit = replace_once(rest_audit, "const EXPECTED_PLAYABLE_SCENARIOS = 393;", "const EXPECTED_PLAYABLE_SCENARIOS = 394;", "rest audit count")
write(rest_audit_path, rest_audit)

# 6. Chapter 4 completion matrix.
chapter4_path = "scripts/film-history-chapter-four-atlas-audit.mjs"
chapter4 = read(chapter4_path)
chapter4 = replace_once(
    chapter4,
    '    title: "Traffic in Souls",\n    year: 1913,\n    aliases: [],\n    role: "comparative_film",\n    decisionIfMissing: "P1",\n    chapterFunction:',
    '    title: "Traffic in Souls",\n    year: 1913,\n    aliases: ["While New York Sleeps", "While New York Sleeps: A Photodrama of Today"],\n    role: "comparative_film",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_traffic_in_souls_1913",\n    chapterFunction:',
    "Traffic candidate identity",
)
chapter4 = replace_once(
    chapter4,
    '  USE_EXISTING: ["Queen Elizabeth", "Rescued by Rover", "The Lonely Villa", "The Story of the Kelly Gang"],\n  P0: [],\n  P1: ["Traffic in Souls"],',
    '  USE_EXISTING: ["Queen Elizabeth", "Rescued by Rover", "The Lonely Villa", "The Story of the Kelly Gang", "Traffic in Souls"],\n  P0: [],\n  P1: [],',
    "Chapter 4 decision matrix",
)
write(chapter4_path, chapter4)

# 7. Global rest-audit documentation.
rest_doc_path = "docs/PRODUCTION_CASE_REST_AUDIT.md"
rest_doc = read(rest_doc_path)
rest_doc = replace_once(
    rest_doc,
    "The canonical playable Film Atlas contains **393 scenarios**. The runtime verification-registry gate contains **386 source-verified Production Cases**.",
    "The canonical playable Film Atlas contains **394 scenarios**. The runtime verification-registry gate contains **387 source-verified Production Cases**.",
    "rest documentation baseline",
)
rest_doc = replace_once(
    rest_doc,
    "Chapter 1 remains complete at 3/3 P0 and 3/3 P1. Chapter 2 remains complete at 1/1 P0 and 2/2 P1. Chapter 3 remains complete at **2/2 P0 and 2/2 P1**, with no required Production Cases remaining. Chapter 4 has its P0 backlog closed and now has **1/2 P1 cases complete** after materializing *Queen Elizabeth (1912)*; its only remaining required case is *Traffic in Souls (1913)*.",
    "Chapter 1 remains complete at 3/3 P0 and 3/3 P1. Chapter 2 remains complete at 1/1 P0 and 2/2 P1. Chapter 3 remains complete at **2/2 P0 and 2/2 P1**. Chapter 4 is now complete at **1/1 P0 and 2/2 P1**, with no required Production Cases remaining.",
    "rest documentation chapter status",
)
queen_block = """- `scenario_queen_elizabeth_1912` — *Queen Elizabeth / Les Amours de la reine Élisabeth* (1912)
  - Le Film d'Art prestige production built around Sarah Bernhardt, Émile Moreau's play and Paul Poiret's costume system
  - Pathé's fuller Mercanton/Desfontaines/Roudès attribution preserved alongside narrower MoMA/NYPL cataloguing
  - French production kept distinct from Adolph Zukor's United States rights, financing and presentation role
  - silent photographed film kept distinct from venue- or restoration-specific accompaniment
  - 47/45/36-minute institutional records retained as a print/version boundary
  - 17-area source-backed Film Study and four-source Production Verification
"""
traffic_block = queen_block + """
- `scenario_traffic_in_souls_1913` — *Traffic in Souls* (1913), George Loane Tucker / IMP / Universal
  - six-reel contemporary American feature model and 88-minute Library of Congress preservation presentation
  - IMP production kept distinct from Universal distribution
  - real New York location work, parallel investigation/rescue structure and collaborative post-production completion
  - period vice discourse, reform publicity and Rockefeller denial kept distinct from documentary evidence
  - silent photographed film kept distinct from screening-specific accompaniment
  - 17-area source-backed Film Study and five-source Production Verification
"""
rest_doc = replace_once(rest_doc, queen_block, traffic_block, "rest documentation Traffic block")
rest_doc = replace_once(
    rest_doc,
    "### P1\n\n**1/2 complete — 1 remaining**\n\n- `scenario_queen_elizabeth_1912`\n- *Traffic in Souls* (1913) → planned `scenario_traffic_in_souls_1913`",
    "### P1\n\n**2/2 complete — 0 remaining**\n\n- `scenario_queen_elizabeth_1912`\n- `scenario_traffic_in_souls_1913`",
    "rest documentation P1",
)
rest_doc = replace_once(rest_doc, "**Exact required new Chapter 4 Production Cases remaining: 1.**", "**Exact required new Chapter 4 Production Cases remaining: 0.**", "rest documentation queue")
rest_doc = replace_once(
    rest_doc,
    "Their expected playable count is now **393**. Chapters 1–3 keep their completed decision matrices locked at **P0 = 0 / P1 = 0**. Chapter 4 locks Kelly and Queen Elizabeth to their canonical scenario IDs, requires **P0 = 0**, and leaves exactly one P1 title: *Traffic in Souls*.",
    "Their expected playable count is now **394**. Chapters 1–3 keep their completed decision matrices locked at **P0 = 0 / P1 = 0**. Chapter 4 locks Kelly, Queen Elizabeth and Traffic in Souls to their canonical scenario IDs and now has **P0 = 0 / P1 = 0**.",
    "rest documentation integrity",
)
write(rest_doc_path, rest_doc)

# 8. Chapter 4 gap report and completion rule.
gap_path = "docs/film-history/chapter-4-film-atlas-gap-report.md"
gap = read(gap_path)
gap = replace_once(gap, "Canonical Atlas baseline after the Queen Elizabeth materialization: **393 playable films**.", "Canonical Atlas baseline after the Traffic in Souls materialization: **394 playable films**.", "gap baseline")
queen_gap_block = """4. **Queen Elizabeth (1912)** / *Les Amours de la reine Élisabeth* → `scenario_queen_elizabeth_1912`
   - Materialized as the prestige-performance and imported-feature case.
   - Covers Le Film d'Art production, Bernhardt's star authority, Moreau's stage adaptation, Poiret's stylized costumes and multi-reel tableau construction.
   - Keeps French production distinct from Zukor's United States rights/presentation role and preserves the 47/45/36-minute print-version boundary.
"""
traffic_gap_block = queen_gap_block + """
5. **Traffic in Souls (1913)** → `scenario_traffic_in_souls_1913`
   - Materialized as the contemporary American feature-economy and independent-production case.
   - Covers IMP production, Universal distribution, real New York locations, secret production and a documented six-reel collaborative post-production completion.
   - Keeps reform publicity and period “white slavery” discourse distinct from documentary evidence and Rockefeller authorization.
   - Preserves the six-to-seven-reel release record, 88-minute Library of Congress preservation presentation and screening-specific accompaniment as separate evidence layers.
"""
gap = replace_once(gap, queen_gap_block, traffic_gap_block, "gap Traffic block")
gap = replace_once(
    gap,
    "### P1 – should be produced\n\n1. **Traffic in Souls (1913)**\n   - Comparative case for early American feature economics, independent production and sustained feature booking around a contemporary sensational subject rather than a prestige literary adaptation.\n   - Planned canonical scenario ID: `scenario_traffic_in_souls_1913`.",
    "### P1 – should be produced\n\n**2/2 complete — 0 remaining.** Both planned P1 films now resolve as canonical `USE_EXISTING` Production Cases.",
    "gap P1 completion",
)
gap = replace_once(
    gap,
    "- British Film Institute / Sight and Sound, **The long take: Great footage** – feature-length transition context including *Traffic in Souls*.  \n  https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage",
    "- British Film Institute / Sight and Sound, **The long take: Great footage** – feature-length transition context including *Traffic in Souls*.  \n  https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage\n- UCLA Film & Television Archive, **Traffic in Souls / Where Are My Children?** – 88-minute preservation presentation, IMP production, secret filming, real New York locations, six-reel completion, feature economics and exhibition history.  \n  https://cinema.ucla.edu/events/traffic-in-souls-1913-where-are-my-children-1916-2012-05-10/\n- American Film Institute Catalog, **Traffic in Souls** – IMP/Universal functions, Tucker/MacNamara credits, six-to-seven reels, silent presentation, narrative and Rockefeller-advertising controversy.  \n  https://catalog.afi.com/Film/2111-TRAFFIC-IN-SOULS\n- Library of Congress, **Traffic in Souls copyright description** – Universal claimant, 1913 and registration LU 1767.  \n  https://www.loc.gov/item/s1229l01767/\n- Library of Congress, **National Film Registry 2006** – official preservation-list inclusion.  \n  https://www.loc.gov/loc/lcib/07012/film.html",
    "gap Traffic sources",
)
gap = replace_once(
    gap,
    "The remaining Chapter 4 Atlas queue is intentionally explicit:\n\n1. **P1 – Traffic in Souls (1913)**\n\nDo **not** auto-produce the P2 titles.",
    "The required Chapter 4 Production Case queue is now **complete**.\n\nDo **not** auto-produce the P2 titles.",
    "gap queue completion",
)
gap = replace_once(gap, "After Queen Elizabeth, the expected decision counts are:", "After Traffic in Souls, the expected decision counts are:", "gap count label")
gap = replace_once(gap, "- **USE_EXISTING: 4**\n- **P0: 0**\n- **P1: 1**", "- **USE_EXISTING: 5**\n- **P0: 0**\n- **P1: 0**", "gap decision counts")
write(gap_path, gap)

print("Traffic in Souls materialization applied successfully")
