import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenHaxanExpansionDefinitions = [
  {
    id: "scenario_haxan_1922",
    title: "Häxan",
    originalTitle: "Häxan",
    aliases: ["Haxan", "Heksen", "The Witches", "Witchcraft Through the Ages"],
    year: 1922,
    titleType: "Feature",
    runtimeMins: 122,
    directors: ["Benjamin Christensen"],
    genres: ["Horror", "Drama"],
    premise: "Build Häxan as a 1922 Swedish-financed, Danish-studio silent production that combines illustrated lecture, historical argument, staged reenactment, horror spectacle and modern psychological interpretation without pretending those modes have the same evidentiary status. Benjamin Christensen writes and directs; Johan Ankerstjerne photographs, Richard Louw designs the production and Emil Reesen is credited for music. Swedish Film Institute documentation describes the project as the most expensive Scandinavian silent film to that point, financed by Swedish Film Industry, shot in a Danish studio and taking roughly three years to complete. The player must coordinate research, iconography, sets, lighting, makeup, performance, trick photography, editing and censorship risk while keeping scholarship separate from dramatized invention: medieval images can be reproduced or analyzed, staged witchcraft can illustrate historical belief, and the final modern-psychology section can be framed as Christensen's 1922 argument, but no reenactment becomes neutral documentary evidence merely because the film adopts a lecture form. Preserve representation ethics too: torture, religious persecution, sexualized imagery, disability and psychiatric diagnosis must not become scoreable shock. Preserve the silent-production boundary: DFI records 35mm black-and-white silent production and credits Emil Reesen as composer, but photographed material remains silent and later accompaniment/presentation must not be described as synchronized production sound. Preserve restoration history: the Swedish Film Institute's 2016 digital restoration used surviving duplicate negatives, nitrate/interpositive evidence and Christensen-era color instructions to restore tinting/toning; those restored colors and current 122-minute presentations are archive/presentation states, not proof that every surviving element is identical to every 1922 release print.",
    sourceId: "manual_haxan_1922",
    sourceUrl: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/heksen",
    scenarioType: "swedish_danish_research_lecture_reenactment_trick_censorship_restoration_production",
    requiredChoicesSeed: {
      screenplay: ["lecture_reenactment_evidence_boundaries", "christensen_1922_psychology_as_historical_argument", "persecution_without_exploitative_shock"],
      camera: ["ankerstjerne_tableau_and_close_detail", "trick_photography_with_visible_method", "staged_reenactment_not_documentary_fact"],
      editing: ["lecture_to_reenactment_mode_signposting", "historical_claim_and_staged_example_separation", "restoration_version_control"],
      sound: ["silent_1922_production", "reesen_music_not_sync_dialogue", "later_accompaniment_is_exhibition"],
      themes: ["film_history", "scandinavian_silent_cinema", "horror", "lecture_film", "reenactment", "trick_photography", "censorship", "restoration_history"],
    },
    learningGoals: [
      "Model Häxan as a costly trans-Scandinavian production: Swedish financing and company infrastructure, a Danish studio, Christensen's research/directing labor and distinct credited craft roles must remain visible rather than collapsing the film into an auteur-only legend.",
      "Separate illustrated historical evidence, Christensen's explanatory claims, staged reenactments and horror-fantasy inventions so the lecture form never grants dramatized material automatic documentary authority.",
      "Keep Christensen's modern-psychology comparison historically located in 1922; the case may analyze its ambition and limits but must not present its diagnoses as current medical consensus.",
      "Coordinate Ankerstjerne's cinematography, Louw's production design, makeup/performance, lighting and trick photography as a physical effects system whose spectacle still preserves readable production method rather than becoming a generic supernatural-effects preset.",
      "Treat torture, sexualized imagery, religious persecution, disability and psychiatric framing as ethically loaded historical representation; the player is never rewarded simply for maximizing cruelty, nudity, fear or stigmatizing diagnosis.",
      "Preserve the silent boundary: DFI credits Emil Reesen as composer, but music belongs to silent-era presentation rather than synchronized dialogue/effects, and later scores or live accompaniments remain separate exhibition layers.",
      "Preserve restoration provenance: the 2016 Swedish Film Institute restoration reconstructed tinting/toning from surviving film materials and period color instructions, so restored color and present-day runtime are documented archive states rather than an excuse to erase print/version history.",
      "Model censorship and reception as distribution constraints: the film's controversial religious, sexual and violent imagery affected circulation, but censorship history is not evidence that every market saw one identical cut.",
    ],
    phases: [
      { id: "pitch", label: "Lecture, horror and evidence", player_task: "Define a film that can educate, dramatize and horrify while explicitly marking which images are historical evidence, interpretive claims or staged invention." },
      { id: "research", label: "Sources before spectacle", player_task: "Ground Christensen's long research period, Swedish financing, Danish studio production, historical iconography, credited crew, censorship context and surviving restoration evidence in institutional sources." },
      { id: "screenplay", label: "Modes must stay legible", player_task: "Structure lecture passages, historical examples, reenactments and the modern psychology section so transitions clarify evidentiary status instead of using authoritative narration to disguise invention." },
      { id: "casting", label: "Embodied history without dehumanization", player_task: "Direct witches, clergy, patients, accused people and Christensen's devil performance without making humiliation, torture, nudity or psychiatric stigma the production's scoring objective." },
      { id: "production_design", label: "Louw's archive-to-studio world", player_task: "Translate iconography, torture devices, interiors, convent spaces and infernal fantasy into staged environments while keeping reconstructed design distinct from historical artifacts." },
      { id: "cinematography", label: "Ankerstjerne, light and trick method", player_task: "Coordinate tableaux, close details, low-key lighting, multiple exposures and practical/trick imagery so the viewer can feel spectacle without mistaking staged supernatural images for photographed fact." },
      { id: "editing", label: "Argument and spectacle in sequence", player_task: "Build clear transitions among lecture, archive image, reenactment, fantasy and modern comparison, preserving causal argument without smoothing over methodological jumps." },
      { id: "sound", label: "Silent production, performed music", player_task: "Keep the photographed work silent; use the Reesen credit and later accompaniment only as presentation history, never as evidence of synchronized 1922 dialogue or effects." },
      { id: "release", label: "Censorship, versions and restored color", player_task: "Model controversial release, territorial censorship, later recuts and the 2016 restoration with restored tinting/toning as distinct circulation and archive states." },
    ],
  },
] as const;

export function mergeChapterTenHaxanExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenHaxanExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_haxan_verified",
      source: {
        list_id: "manual_chapter_ten_haxan_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
      },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
