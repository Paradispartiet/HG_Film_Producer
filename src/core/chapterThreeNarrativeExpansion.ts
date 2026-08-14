import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export type ChapterThreeNarrativeExpansionDefinition = {
  readonly id: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly aliases?: readonly string[];
  readonly year: number;
  readonly titleType: string;
  readonly runtimeMins: number;
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly premise: string;
  readonly sourceId: string;
  readonly sourceUrl: string;
  readonly scenarioType: string;
  readonly requiredChoicesSeed: Readonly<Record<string, readonly string[]>>;
  readonly learningGoals: readonly string[];
  readonly phases: readonly {
    readonly id: string;
    readonly label: string;
    readonly player_task: string;
  }[];
};

export const chapterThreeNarrativeExpansionDefinitions = [
  {
    id: "scenario_grandmas_reading_glass_1900",
    title: "Grandma's Reading Glass",
    originalTitle: "Grandma's Reading Glass",
    aliases: ["Grandmas Reading Glass", "Grandmother's Reading Glass"],
    year: 1900,
    titleType: "Short",
    runtimeMins: 1,
    directors: ["G. A. Smith"],
    genres: ["Fiction", "Short"],
    premise: "Build a one-minute Brighton-era fiction around a boy borrowing his grandmother's magnifying glass: alternate a stable medium view with circularly masked magnified inserts of the newspaper, watch mechanism, canary, grandmother's eye and kitten so every close view is motivated by the boy's act of looking, without claiming that Smith single-handedly invented the close-up or point-of-view editing.",
    sourceId: "manual_grandmas_reading_glass_1900",
    sourceUrl: "https://replay.bfi.org.uk/video/419/bc4007f9-c8fa-5293-846a-de032dc142af",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["looking_action_structure", "newspaper_watch_canary_eye_kitten_order", "return_to_base_view"],
      camera: ["stable_grandmother_and_boy_view", "magnified_insert_views", "circular_mask_as_optical_motivation"],
      editing: ["look_object_return_pattern", "analytical_inserts", "point_of_view_without_first_invention_claim"],
      sound: ["silent_capture", "later_accompaniment_separation"],
      themes: ["film_history", "viewpoint", "analytical_editing", "scale_change", "early_british_cinema"],
    },
    learningGoals: [
      "Motivate each scale change through the boy's use of the reading glass so the audience understands why a magnified insert belongs to the surrounding scene.",
      "Use the documented newspaper, watch mechanism, canary, grandmother's eye and kitten sequence as a production structure rather than replacing it with generic close-up coverage.",
      "Treat Grandma's Reading Glass as a strong early example of point-of-view and analytical shot relation without turning a complex international development into a single-inventor myth.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define the attraction as an ordinary domestic scene transformed by motivated magnification and changing viewpoint." },
      { id: "research", label: "Research", player_task: "Ground the 1900 Smith case, Warwick circulation and surviving shot order while separating demonstrable technique from later first-close-up or first-POV claims." },
      { id: "screenplay", label: "Looking structure", player_task: "Order newspaper, watch mechanism, canary, grandmother's eye and kitten so each new object grows naturally from the boy's play with the reading glass." },
      { id: "casting", label: "Performance", player_task: "Keep the boy's looking gestures and grandmother's reactions clear enough to motivate every inserted view without requiring intertitles or modern dialogue." },
      { id: "production_design", label: "Domestic viewing space", player_task: "Build a compact sewing-table environment whose newspaper, watch, birdcage and kitten can all be introduced from one readable base view." },
      { id: "cinematography", label: "Cinematography", player_task: "Contrast the stable medium view with abnormally enlarged circular inserts, making the mask feel like the reading glass rather than arbitrary decorative framing." },
      { id: "editing", label: "Analytical relation", player_task: "Alternate look, magnified object and return so the cuts create a legible viewpoint relation before later continuity conventions become standardized." },
      { id: "sound", label: "Silent production", player_task: "Keep the photographed 1900 production silent; do not invent synchronized watch ticks, bird calls or dialogue as original production sound." },
      { id: "release", label: "Warwick-era circulation", player_task: "Present the novelty of enlarged views as an early-film attraction while avoiding a promotional single-inventor history of film grammar." },
    ],
  },
  {
    id: "scenario_the_lonely_villa_1909",
    title: "The Lonely Villa",
    originalTitle: "The Lonely Villa",
    aliases: ["Lonely Villa"],
    year: 1909,
    titleType: "Short",
    runtimeMins: 10,
    directors: ["D. W. Griffith"],
    genres: ["Drama", "Short"],
    premise: "Build a Biograph home-invasion rescue around three simultaneously intelligible action lines: the isolated family under attack, the burglars forcing entry, and the husband moving from a disabled automobile toward police-assisted rescue. Use the telephone to connect distant spaces and progressively intensify alternation as danger converges, while treating Griffith as a major consolidator of parallel editing rather than its inventor.",
    sourceId: "manual_the_lonely_villa_1909",
    sourceUrl: "https://www.loc.gov/item/2015600152/",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["three_parallel_action_lines", "telephone_discovery_and_disconnection", "last_minute_rescue_convergence"],
      camera: ["family_interior_space", "burglar_entry_space", "husband_road_and_rescue_space", "biograph_period_readable_staging"],
      editing: ["sustained_parallel_alternation", "simultaneity_across_distant_spaces", "increasing_suspense_without_invention_claim"],
      sound: ["silent_capture", "telephone_action_without_recorded_dialogue", "later_accompaniment_separation"],
      themes: ["film_history", "parallel_editing", "telephone_and_modernity", "home_invasion", "narrative_convergence"],
    },
    learningGoals: [
      "Keep three distant action lines spatially distinct while editing them into one legible simultaneous rescue structure.",
      "Use the telephone as both a story device and a formal bridge between separated characters, including the dramatic effect of the line being cut.",
      "Understand The Lonely Villa as an important 1909 consolidation of sustained parallel editing within broader international experiments rather than as Griffith's invention of cross-cutting.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a home-invasion rescue whose suspense depends on actions unfolding in separated spaces at the same time." },
      { id: "research", label: "Research", player_task: "Ground Biograph production, Fort Lee/New York filming, paper-print survival and the de Lorde telephone-play lineage before making formal claims." },
      { id: "screenplay", label: "Parallel action", player_task: "Track family danger, burglar pressure and the husband's delayed return as three lines that repeatedly separate and reconverge." },
      { id: "casting", label: "Performance", player_task: "Make fear, forced entry, telephone communication and rescue urgency readable through period silent performance without modern dialogue coverage." },
      { id: "production_design", label: "Separated spaces", player_task: "Differentiate the villa interior, thresholds, roadside/telephone stop and rescue route so every return cut has a clear spatial identity." },
      { id: "cinematography", label: "Cinematography", player_task: "Use stable readable Biograph-era setups for each action line rather than importing later shot-reverse-shot coverage as the organizing principle." },
      { id: "editing", label: "Parallel suspense", player_task: "Alternate among threat, family and rescue with increasing urgency while preserving simultaneity and refusing a Griffith-invented-cross-cutting myth." },
      { id: "sound", label: "Silent telephone", player_task: "Represent telephone communication through action and staging; do not invent synchronized voices or effects as original 1909 production sound." },
      { id: "release", label: "Biograph release", player_task: "Place the film in Biograph's 1909 one-reel production and contemporary suspense reception while distinguishing consolidation from invention." },
    ],
  },
  {
    id: "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900",
    title: "Attack on a China Mission - Bluejackets to the Rescue",
    originalTitle: "Attack on a China Mission (Bluejackets to the Rescue)",
    aliases: ["Attack on a China Mission", "Attack on a China Mission – Bluejackets to the Rescue", "Attack on a China Mission: Bluejackets to the Rescue"],
    year: 1900,
    titleType: "Short",
    runtimeMins: 1,
    directors: ["James Williamson"],
    genres: ["Drama", "War", "Short"],
    premise: "Build a one-minute Brighton topical-fiction case around a Christian mission attack and naval rescue while making archival provenance a production decision: distinguish the single-position surviving evidence, additional scene material described by BFI and catalogues, and the later reconstructed multi-shot form rather than presenting one modernized cross-cut version as an uncontested 1900 original. The player must also confront the film's racist and imperial framing of Chinese Boxer characters instead of separating formal innovation from representation.",
    sourceId: "manual_attack_on_a_china_mission_1900",
    sourceUrl: "https://replay.bfi.org.uk/video/bd0d85a8-9027-5da8-b23c-3a2687695135",
    scenarioType: "action_adventure_production",
    requiredChoicesSeed: {
      screenplay: ["mission_attack_and_rescue", "topical_fiction_not_actuality", "imperial_rescue_frame_made_explicit"],
      camera: ["mission_house_and_gate_space", "boxer_attack_staging", "naval_rescue_view", "version_provenance_labels"],
      editing: ["artefact_integrity_before_crosscut_claim", "compare_surviving_and_reconstructed_orders", "no_first_crosscutting_claim"],
      sound: ["silent_capture", "practical_visual_gunfire_not_synced_sound", "later_accompaniment_separation"],
      themes: ["film_history", "version_history", "archive_integrity", "boxer_rebellion", "imperial_representation", "early_british_cinema"],
    },
    learningGoals: [
      "Separate surviving copies, catalogue descriptions and later reconstruction before making any claim about the film's original editing structure.",
      "Use mission-house, attack and rescue staging to study how separate views can construct space without calling Williamson the inventor of cross-cutting or reverse-angle continuity.",
      "Analyse the film's racist characterisation and British imperial rescue narrative as part of the production system rather than treating ideology as irrelevant to formal innovation.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a topical mission-rescue spectacle while identifying the film's imperial viewpoint and racist characterisation before formal choices are made." },
      { id: "research", label: "Artefact research", player_task: "Compare BFI, Screen Archive South East, sales-catalogue history and Dulac/Gaudreault's copy-and-reconstruction analysis; label what is surviving, described and reconstructed." },
      { id: "screenplay", label: "Topical fiction", player_task: "Build the mission attack and naval rescue as staged fiction responding to contemporary Boxer-Rebellion news, never as genuine footage of the events in China." },
      { id: "casting", label: "Representation", player_task: "Make the racialized casting and performance conventions visible as historical problems; do not reproduce the colonial stereotypes as neutral character truth." },
      { id: "production_design", label: "Mission spectacle", player_task: "Stage gate, mission house, firearms, sailors and smoke as a Brighton reconstruction whose British setting stands in for an imagined China." },
      { id: "cinematography", label: "Versioned viewpoints", player_task: "Keep each documented or reconstructed camera position provenance-labelled instead of pretending all surviving/reconstructed views form one certain original negative." },
      { id: "editing", label: "Version integrity", player_task: "Compare possible scene relations while refusing to teach the later reconstructed alternating form as uncontested evidence of the 1900 original." },
      { id: "sound", label: "Silent spectacle", player_task: "Treat gunfire and explosions as visual/practical action in a silent film; do not convert BFI's description of dramatic gunshots into synchronized recorded sound." },
      { id: "release", label: "Topical and imperial context", player_task: "Place the film within early-cinema topical reconstruction and British Boxer-Rebellion culture, preserving both archive uncertainty and the politics of its rescue narrative." },
    ],
  },
  {
    id: "scenario_histoire_d_un_crime_1901",
    title: "Histoire d'un crime",
    originalTitle: "Histoire d'un crime",
    aliases: ["History of a Crime", "The Story of a Crime", "Story of a Crime"],
    year: 1901,
    titleType: "Short",
    runtimeMins: 6,
    directors: ["Ferdinand Zecca"],
    genres: ["Crime", "Drama", "Short"],
    premise: "Build a Pathé social-crime drama as a chain of tableaux from murder through arrest, imprisonment, represented recollection and execution. In the prison sequence, stage earlier moments of the condemned man's life in a visibly separate scenic plane inside the same composition so past experience enters the present without pretending that Zecca invented the flashback or that this 1901 device is identical to later standardized flashback grammar. Keep the penal spectacle, moral framing and Pathé's emerging organized fiction-production system explicit.",
    sourceId: "manual_histoire_d_un_crime_1901",
    sourceUrl: "https://www.cnc.fr/cinema/actualites/il-y-a-160-ans-naissait-ferdinand-zecca_2165740",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["crime_arrest_prison_execution_chain", "prison_present_frames_recollection", "past_experience_explains_causal_decline"],
      camera: ["stable_tableau_staging", "cell_and_memory_plane_legibility", "execution_space_reveal"],
      editing: ["multi_tableau_causal_progression", "represented_memory_without_first_flashback_claim", "ellipsis_toward_execution"],
      sound: ["silent_capture", "later_accompaniment_separation"],
      themes: ["film_history", "narrative_time", "represented_memory", "crime_and_punishment", "pathe_production"],
    },
    learningGoals: [
      "Organize a longer 1901 fiction through linked tableaux whose causal order carries a crime story beyond a single gag, view or chase.",
      "Stage the prisoner's remembered past as a distinct visible layer inside the present-tense prison composition so the time shift is readable without modern dialogue or explanatory montage conventions.",
      "Treat Histoire d'un crime as an important early experiment in represented memory and narrative time without promoting a disputed 'first flashback' claim or erasing its theatrical and scenic precedents.",
      "Place the film inside Pathé's 1901 shift toward organized fiction production, longer footage and genre differentiation rather than treating formal change as the work of an isolated auteur.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a crime-and-punishment drama whose production challenge is causal story time: present crime, imprisonment, remembered past and execution must read as one organized narrative." },
      { id: "research", label: "Pathé and Zecca", player_task: "Ground Zecca's 1901 Pathé role, the company's new film-production service and the CNC evidence for longer footage, multiple tableaux and contemporary success." },
      { id: "screenplay", label: "Narrative time", player_task: "Arrange crime, arrest, prison, recollection and execution so past experience deepens the present story instead of becoming an unexplained trick insert." },
      { id: "casting", label: "Condemned man", player_task: "Keep the prisoner's present condition and remembered earlier life legible through silent-era performance while avoiding modern psychological dialogue coverage." },
      { id: "production_design", label: "Two temporal planes", player_task: "Construct the prison cell and the separate memory stage so the spectator can distinguish present confinement from represented past within one scenic composition." },
      { id: "cinematography", label: "Tableau legibility", player_task: "Photograph each tableau for clear causal action and preserve the unusual cell-plus-memory arrangement without forcing later continuity conventions onto the scene." },
      { id: "editing", label: "Retrospective structure", player_task: "Link tableaux and retrospective material as early narrative-time construction; describe the memory device precisely rather than declaring a universal first flashback." },
      { id: "sound", label: "Silent production", player_task: "Keep the original photographed production silent and treat any later accompaniment as exhibition history, not synchronized 1901 production sound." },
      { id: "release", label: "Pathé circulation", player_task: "Place the film within Pathé's expanding genre catalogue and successful early fiction business while keeping its moralized penal spectacle historically visible." },
    ],
  },
] as const satisfies readonly ChapterThreeNarrativeExpansionDefinition[];

export function mergeChapterThreeNarrativeExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;

  for (const definition of chapterThreeNarrativeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year &&
        [scenario.film.title, scenario.film.original_title]
          .map(normalizeEarlyCinemaTitle)
          .some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;

    merged.push({
      id: definition.id,
      status: "manual_chapter_three_narrative_verified",
      source: {
        list_id: "manual_chapter_three_narrative_expansion_2026",
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
