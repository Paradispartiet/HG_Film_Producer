import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenCompartmentNo6ExpansionDefinitions = [
  {
    id: "scenario_compartment_no_6_2021",
    title: "Compartment No. 6",
    originalTitle: "Hytti nro 6",
    aliases: ["Hytti Nro 6", "Hytti Nro. 6", "Hytti No 6", "Compartment No.6", "Compartment No 6"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 107,
    directors: ["Juho Kuosmanen"],
    genres: ["Drama", "Romance"],
    sourceId: "compartment_no_6_cannes_2021",
    sourceUrl: "https://www.festival-cannes.com/en/f/hytti-nro-6/",
    scenarioType: "award_priority_cannes_2021_grand_prix_finland_germany_estonia_russia_35mm_2perf_arricam_lt_super_speeds_500t_train_location_hidden_mics_runtime_aspect_boundary",
    premise: "Build Compartment No. 6 (Hytti nro 6) as the next unresolved Cannes-major-prizes source-first Production Case. Festival de Cannes locks the 2021 Grand Prix, 107-minute Finland/Germany/Estonia/Russian Federation feature and credits Juho Kuosmanen for direction and screenplay, Livia Ulman and Andris Feldmanis for screenplay, J-P Passi for cinematography, Jussi Rautaniemi for editing and Pietu Korhonen for sound; Cannes also identifies Aamu Film Company with secondary production through Achtung Panda!, Amrion and CTB Film Company. Kodak's production account locks 28 shooting days over six weeks from 12 February to 26 March 2020, Russian locations including St Petersburg, Petrozavodsk, Olenegorsk, Murmansk and Teriberka, train work combining cramped practical carriages with depot-mounted carriages on hydraulic movement rigs, ARRICAM LT 2-perf 35mm capture with a spare 4-perf body, Zeiss Super Speed lenses, KODAK VISION3 500T throughout principal photography, about 30% push-processed one or two stops, normal processing at Mosfilm and some pushed material at Studio l'Equipe, and lighting ranging from practicals and small LEDs to large units where locations required them. The Cannes press kit independently describes a small crew and hidden microphones in the train interiors, and lists 35mm, Dolby Atmos and 1:2.35 while J-P Passi's Kodak testimony says the production framed around 2:1 during shooting and opened the full 2-perf frame to 2.40:1 in post. The case therefore preserves the sourced runtime and aspect-ratio discrepancies rather than silently collapsing them: 107 minutes is the Cannes manifest runtime while the press kit says 106; 2.35 is press-kit delivery metadata while Passi documents a final 2.40:1 use of the 2-perf frame. Exact budget and partner shares, complete production-sound recorder/microphone inventory beyond hidden-mic use, full editorial infrastructure, detailed Atmos mix architecture, grading platform, effects census and delivery-master lineage remain unresolved.",
    requiredChoicesSeed: {
      screenplay: ["kuosmanen_ulman_feldmanis_screenplay", "liksom_loose_adaptation", "train_connection_structure", "late_1990s_russia"],
      camera: ["arricam_lt_2perf", "spare_4perf_body", "zeiss_super_speeds", "vision3_500t", "push_processing", "aspect_ratio_source_boundary"],
      locations: ["st_petersburg", "petrozavodsk", "olenegorsk", "murmansk", "teriberka", "train_depot_hydraulic_carriages"],
      sound: ["pietu_korhonen", "hidden_microphones_train", "dolby_atmos_presskit", "complete_sound_chain_unresolved"],
      themes: ["film_history", "2021", "cannes_grand_prix", "juho_kuosmanen", "finland", "germany", "estonia", "russia", "35mm", "2perf", "location_logistics", "chapter19"]
    },
    learningGoals: [
      "Explain why Compartment No. 6 must be materialized only after title/year/alias reconciliation proves no existing Atlas identity.",
      "Lock 2021 as film year and Cannes award year while keeping the February-March 2020 shoot chronology separate.",
      "Use 107 minutes as the Cannes manifest runtime while preserving the official press kit's 106-minute figure as a documented discrepancy.",
      "Identify Finland, Germany, Estonia and the Russian Federation as the Cannes-listed production countries.",
      "Identify Aamu Film Company as production and Achtung Panda!, Amrion and CTB Film Company as secondary production companies in the Cannes record.",
      "Identify Juho Kuosmanen as director and co-screenwriter with Livia Ulman and Andris Feldmanis.",
      "Recognize the film as a loose screen adaptation inspired by Rosa Liksom rather than a mechanically faithful transcription.",
      "Identify J-P Passi as cinematographer and Jussi Rautaniemi as editor.",
      "Use Kodak's 28-day, six-week shooting schedule from 12 February to 26 March 2020 without extending it beyond the sourced dates.",
      "Map St Petersburg, Petrozavodsk, Olenegorsk, Murmansk and Teriberka as documented Russian production locations.",
      "Explain how lockdown forced Moscow city-centre scenes to be completed in St Petersburg without generalizing unsupported pandemic protocols.",
      "Distinguish real train interiors from depot work using two carriages on hydraulic movement rigs with moving light and effects backdrops.",
      "Identify ARRICAM LT in 2-perf mode as the principal camera configuration and preserve the spare 4-perf body's limited support role.",
      "Identify Zeiss Super Speeds and their T1.3 low-light capability as a sourced lens choice.",
      "Use KODAK VISION3 500T as the documented stock used throughout principal photography after 200T/250D/500T testing.",
      "Explain why limited lighting capacity and remote Russian logistics shaped the 500T choice without reducing it to an aesthetic preference alone.",
      "Use the sourced statement that about 30% of material was push-processed one or two stops.",
      "Identify Mosfilm for regular processing and Studio l'Equipe for some pushed material without inventing the complete laboratory chain.",
      "Explain how practicals, LEDs, gels and larger units were scaled to radically different train, domestic and exterior locations.",
      "Use the Cannes press kit's small-crew and hidden-microphone evidence for train production while leaving the full sound-recorder and microphone inventory unresolved.",
      "Identify Pietu Korhonen as Cannes-credited sound and keep the complete sound-post personnel/architecture open unless directly sourced.",
      "Preserve the aspect-ratio source boundary: press kit 1:2.35 versus Passi's documented 2.40:1 final use of the full 2-perf frame.",
      "Preserve framing chronology: the material was framed around 2:1 during shooting before the wider 2-perf frame was used in post.",
      "Do not infer exact budget, ownership, recoupment, insurance or partner percentages from the multinational production-company list.",
      "Do not infer a complete VFX/effects-free pipeline from the film's naturalistic appearance or from the practical train simulation.",
      "Keep grading software, color-management architecture, editorial storage/project topology and delivery-master lineage unresolved.",
      "Close the case only when one scenario, one 17-area Film Study, one PV record and the Cannes corrective queue agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes 2021 Grand Prix obligation", player_task: "Treat the award as selection evidence, not as production evidence." },
      { id: "reconciliation", label: "Prove Compartment/Hytti identity", player_task: "Search English, Finnish and punctuation aliases across Atlas, Film Study and PV before creating a scenario." },
      { id: "chronology", label: "Separate film, award and shoot dates", player_task: "Keep film/award year 2021 distinct from the documented February-March 2020 shoot." },
      { id: "screenplay", label: "Map the loose adaptation", player_task: "Use Kuosmanen, Ulman and Feldmanis and the production's departure from Liksom's novel." },
      { id: "location_research", label: "Build the Russian route", player_task: "Use the documented scouting and St Petersburg-to-Barents production geography." },
      { id: "train_logistics", label: "Solve cramped train production", player_task: "Coordinate practical compartments, small crew and depot-mounted hydraulic carriage work." },
      { id: "cinematography", label: "Lock the 2-perf 35mm system", player_task: "Use ARRICAM LT, Zeiss Super Speeds and 500T without inventing unsupported exposure settings." },
      { id: "film_stock", label: "Choose 500T for production constraints", player_task: "Connect low light and remote logistics to the documented stock decision." },
      { id: "processing", label: "Manage normal and pushed negative", player_task: "Preserve the sourced ~30% push-processing and laboratory split." },
      { id: "aspect_boundary", label: "Preserve framing and delivery discrepancies", player_task: "Keep 2:1 shooting framing, Passi's final 2.40 and press-kit 2.35 as separate sourced claims." },
      { id: "runtime_boundary", label: "Preserve runtime discrepancy", player_task: "Use Cannes 107 as canonical manifest runtime while retaining the press kit's 106-minute metadata." },
      { id: "lighting", label: "Scale light to location", player_task: "Use practicals, LEDs, gel shifts and larger units only where Kodak documents them." },
      { id: "performance", label: "Protect intimacy in confinement", player_task: "Coordinate Seidi Haarla and Yuriy Borisov in restricted physical space without inventing rehearsal schedules." },
      { id: "production_design", label: "Coordinate period and train environments", player_task: "Use the documented visual-reference and location logic while leaving unsourced construction detail open." },
      { id: "editing", label: "Shape claustrophobia into openness", player_task: "Use Jussi Rautaniemi's edit credit and sourced framing change without inventing software/storage topology." },
      { id: "production_sound", label: "Record inside cramped carriages", player_task: "Use Pietu Korhonen and hidden-mic evidence while keeping exact equipment topology unresolved." },
      { id: "sound_post", label: "Bound the Atmos claim", player_task: "Treat Dolby Atmos as press-kit delivery metadata without inventing stems, room, monitoring or mix workflow." },
      { id: "coproduction", label: "Map four-country production", player_task: "Separate production companies and countries without inventing ownership or financing percentages." },
      { id: "pandemic_boundary", label: "Bound the lockdown effect", player_task: "Use only the documented St Petersburg substitution for Moscow and avoid unsupported protocol claims." },
      { id: "post_boundary", label: "Freeze unsupported post detail", player_task: "Keep grade, effects census, editorial infrastructure and master lineage open beyond sourced facts." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Map verified facts and explicit research-pending boundaries across the full coverage contract." },
      { id: "production_verification", label: "Close the Cannes corrective case", player_task: "Verify one unique scenario/PV identity and a one-step reduction in the Cannes film-level corrective queue." }
    ]
  }
] as const;

export function mergeChapterNineteenCompartmentNo6Expansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenCompartmentNo6ExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_compartment_no_6_verified",
      source: { list_id: "manual_chapter_nineteen_compartment_no_6_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
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
