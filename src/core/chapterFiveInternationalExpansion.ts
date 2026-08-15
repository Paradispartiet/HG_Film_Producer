import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFiveInternationalExpansionDefinitions = [
  {
    id: "scenario_fantomas_1913",
    title: "Fantômas",
    originalTitle: "Fantômas",
    aliases: ["Fantomas", "Fantômas à l'ombre de la guillotine"],
    year: 1913,
    titleType: "Feature",
    runtimeMins: 60,
    directors: ["Louis Feuillade"],
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
    premise: "Build Fantômas as a 1913 Gaumont production problem in recurring screen identity and narrative continuation. Louis Feuillade adapts the Souvestre–Allain crime novels around René Navarre's shape-shifting criminal, Juve and Fandor, using recognizable Paris spaces, disguises, pursuit and unresolved return to make audience memory part of the production system. Treat the five-film 1913–1914 cycle as a series of related films rather than retroactively forcing every later serial convention onto it, and keep surviving-program runtimes and musical accompaniment version-specific.",
    sourceId: "manual_fantomas_1913",
    sourceUrl: "https://www.cinematheque.fr/film/48519.html",
    scenarioType: "crime_thriller_production",
    requiredChoicesSeed: {
      screenplay: ["souvestre_allain_adaptation", "juve_fandor_pursuit", "recurring_fantomas_identity"],
      camera: ["paris_location_legibility", "disguise_and_reveal_staging", "pursuit_geography"],
      editing: ["episode_level_progression", "identity_reveal_timing", "continuation_memory_across_films"],
      sound: ["silent_photographed_production", "screening_specific_music", "no_synchronized_original_sound"],
      themes: ["film_history", "french_cinema", "gaumont", "recurring_screen_identity", "series_economics"],
    },
    learningGoals: [
      "Plan recurring characters, disguises and pursuit so recognition from earlier films becomes a production resource without requiring later standardized chapter-serial form.",
      "Use Feuillade's Gaumont production context and recognizable Paris geography to keep criminal action, surveillance and escape legible across extended narrative episodes.",
      "Distinguish the five-film Fantômas cycle from the claim that one filmmaker or one title invented serial storytelling.",
      "Treat René Navarre's recurring Fantômas identity, Juve and Fandor as a continuity-management problem involving casting, costume, gesture and audience memory.",
      "Preserve version boundaries: institutional sources describe different aggregate and individual-film runtimes, while musical accompaniment belongs to a screening or restoration unless separately documented as original production sound.",
    ],
    phases: [
      { id: "pitch", label: "Recurring-crime pitch", player_task: "Define why Fantômas can bring audiences back through recognizable criminal identity, pursuit and transformation rather than through a one-film closed ending." },
      { id: "research", label: "Series and archive research", player_task: "Ground Feuillade, Gaumont, René Navarre, Souvestre and Allain, the five-film cycle and surviving-version differences in institutional records." },
      { id: "screenplay", label: "Pursuit and return", player_task: "Adapt the crime material around Juve and Fandor's pursuit while leaving enough unresolved identity and threat to support continuation across related films." },
      { id: "casting", label: "Recurring identities", player_task: "Make Navarre's Fantômas recognizable through transformation while keeping Juve, Fandor and Lady Beltham stable enough for returning audiences to recover the dramatic network." },
      { id: "production_design", label: "Paris crime network", player_task: "Coordinate rooms, streets, institutions, disguises and props so shifting identities remain readable inside a recognizable urban world." },
      { id: "cinematography", label: "Readable pursuit geography", player_task: "Stage entrances, exits, surveillance, disguise and physical pursuit clearly without imposing a later continuity-coverage template on the 1913 production." },
      { id: "editing", label: "Recognition and continuation", player_task: "Control when the viewer knows an identity, when investigators catch up and what remains unresolved, while preserving that the cycle consists of related films rather than one falsely reconstructed master cut." },
      { id: "sound", label: "Silent production, variable accompaniment", player_task: "Keep photographed production silent and treat music attached to surviving prints, restorations or screenings as presentation evidence, not synchronized original dialogue or effects." },
      { id: "release", label: "Return-audience economy", player_task: "Model how Gaumont could exploit recurring characters and narrative memory across successive releases without claiming Fantômas alone created serial economics." },
    ],
  },
  {
    id: "scenario_cabiria_1914",
    title: "Cabiria",
    originalTitle: "Cabiria",
    aliases: [],
    year: 1914,
    titleType: "Feature",
    runtimeMins: 169,
    directors: ["Giovanni Pastrone"],
    genres: ["Adventure", "Drama", "History", "War"],
    premise: "Build Cabiria as a 1914 Itala Film production problem in feature-scale historical spectacle: coordinate monumental architecture, crowds, performance, mobile camera work, effects, literary-prestige intertitles, original music and international export ambition across a long multi-reel narrative. Keep Giovanni Pastrone's production authorship distinct from Gabriele D'Annunzio's credited prestige contribution, use the documented multi-person cinematography team including Segundo de Chomón rather than a lone-genius camera myth, and preserve the archival boundary between the reconstructed 1914 edition and Pastrone's substantially altered 1931 sound reissue.",
    sourceId: "manual_cabiria_1914",
    sourceUrl: "https://www2.museocinema.it/restauri/muti_restaurati.php?id=34&l=en",
    scenarioType: "historical_epic_production",
    requiredChoicesSeed: {
      screenplay: ["second_punic_war_epic_structure", "cabiria_fulvio_maciste_parallel_arcs", "dannunzio_prestige_intertitles"],
      camera: ["monumental_set_revelation", "moving_camera_spatial_discovery", "crowd_and_architecture_scale"],
      editing: ["multi_reel_epic_progression", "parallel_historical_storylines", "1914_1931_version_boundary"],
      sound: ["silent_photographed_production", "pizzetti_mazza_original_music", "live_exhibition_not_1931_sync_sound"],
      themes: ["film_history", "italian_silent_cinema", "itala_film", "historical_spectacle", "international_export"],
    },
    learningGoals: [
      "Plan a historical feature whose scale comes from coordinated architecture, crowds, performance, camera movement and effects rather than from large sets treated as decoration alone.",
      "Use mobile camera work to reveal spatial relationships inside monumental staging while avoiding the false claim that Cabiria or one cinematographer single-handedly invented camera movement.",
      "Keep Pastrone's direction, production and design responsibilities distinct from D'Annunzio's credited screenplay/intertitle prestige contribution.",
      "Integrate the documented cinematography team and Segundo de Chomón's effects role into one production system instead of collapsing the film into a single-author legend.",
      "Treat Pizzetti and Mazza's original musical programme as exhibition-scale design while keeping photographed production silent and later synchronized sound separate.",
      "Preserve version criticism: the reconstructed 1914 edition and Pastrone's altered 1931 sound reissue are different historical objects and must not be silently merged.",
    ],
    phases: [
      { id: "pitch", label: "International epic pitch", player_task: "Define why a long Punic War spectacle can justify concentrated Itala Film resources and export ambition through integrated scale, story and prestige." },
      { id: "research", label: "Archive and version research", player_task: "Ground Pastrone, Itala Film, D'Annunzio, the cinematography team, Chomón, Pizzetti/Mazza and the 1914/1931 version boundary in institutional evidence." },
      { id: "screenplay", label: "Multi-reel historical structure", player_task: "Coordinate Cabiria's fate, Fulvio and Maciste's rescue actions and large historical events so the feature develops rather than becoming a chain of disconnected tableaux." },
      { id: "casting", label: "Bodies inside spectacle", player_task: "Keep Cabiria, Fulvio, Maciste, Sofinisba and political figures recognizable and dramatically functional even when architecture and crowds dominate the frame." },
      { id: "production_design", label: "Monumental historical world", player_task: "Design temples, palaces, streets and mass-action routes as playable dramatic spaces whose scale can be revealed by bodies and camera movement." },
      { id: "cinematography", label: "Mobile spatial revelation", player_task: "Coordinate the documented multi-person camera unit around deep staging and moving views that disclose architecture, entrances, crowds and changing power relationships." },
      { id: "editing", label: "Epic progression and versions", player_task: "Sustain multiple storylines across a long feature while marking the reconstructed 1914 edition and 1931 sound reissue as separate version histories." },
      { id: "sound", label: "Silent image, designed music", player_task: "Keep production silent, integrate the documented Pizzetti/Mazza musical programme as exhibition design, and exclude later synchronized material from the 1914 production model." },
      { id: "release", label: "Prestige export economy", player_task: "Model Cabiria as an international prestige product whose unusual scale, music, authorship branding and feature length had to justify higher production and exhibition risk." },
    ],
  },
  {
  id: "scenario_afgrunden_1910",
  title: "Afgrunden",
  originalTitle: "Afgrunden",
  aliases: ["The Abyss", "Der Abgrund", "Woman Always Pays"],
  year: 1910,
  titleType: "Feature",
  runtimeMins: 38,
  directors: ["Urban Gad"],
  genres: ["Drama", "Melodrama", "Romance"],
  premise: "Build Afgrunden as a compact 1910 Kosmorama production problem in performance-led erotic melodrama and international star formation. Urban Gad writes and directs around Asta Nielsen's screen debut, Alfred Lind photographs a short production using controlled spaces and Copenhagen-area locations, and the rope dance concentrates choreography, framing, costume, gesture and scandal into one exportable performance event. Keep the film inside the existing Danish melodrama tradition rather than claiming it invented naturalistic screen acting, and distinguish the surviving/restored presentation from an untouched 1910 master.",
  sourceId: "manual_afgrunden_1910",
  sourceUrl: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/afgrunden-0",
  scenarioType: "erotic_melodrama_production",
  requiredChoicesSeed: {
    screenplay: ["magda_social_descent_arc", "erotic_melodrama_concentration", "decisive_scene_structure"],
    camera: ["performance_centered_framing", "body_and_face_legibility", "location_and_controlled_space_balance"],
    editing: ["sustained_performance_moments", "decisive_scene_progression", "restoration_boundary_awareness"],
    sound: ["silent_photographed_production", "screening_specific_accompaniment", "no_invented_original_score"],
    themes: ["film_history", "danish_silent_cinema", "asta_nielsen", "erotic_melodrama", "transnational_star_circulation"],
  },
  learningGoals: [
    "Concentrate a small production around a performer whose face, gesture and bodily rhythm carry narrative and commercial value without treating acting style as a lone-person invention.",
    "Design the rope dance as an integrated production event involving choreography, partner performance, framing, costume and audience provocation rather than as an isolated anecdote.",
    "Use a limited mix of controlled spaces and real Copenhagen-area locations to expand production value without pretending the film had a large studio infrastructure.",
    "Connect Kosmorama, Hjalmar Davidsen, Urban Gad, Alfred Lind and Asta Nielsen as a production network whose success could generate international star circulation.",
    "Preserve original-format and restoration boundaries: 35 mm silent production, later digital presentations, recovered censorship material and modern accompaniment are different evidence layers.",
    "Place Afgrunden inside Danish erotic melodrama and pre-war European export cinema instead of falsely presenting it as a singular origin point for screen realism or star culture.",
  ],
  phases: [
    { id: "pitch", label: "Performance-led melodrama pitch", player_task: "Define why one intense central performance and a dangerous erotic choice can carry a compact feature-scale attraction beyond its home market." },
    { id: "research", label: "Kosmorama and preservation research", player_task: "Ground Gad, Nielsen, Lind, Davidsen, Kosmorama, 35 mm format, premiere data, surviving material and later restoration evidence in institutional sources." },
    { id: "screenplay", label: "Decisive social descent", player_task: "Concentrate Magda's engagement, attraction, circus life, exploitation and fatal confrontation into a progression of decisive dramatic situations." },
    { id: "casting", label: "Screen presence over stage rank", player_task: "Build the film around Nielsen's ability to communicate through face, stillness, gesture and bodily intensity while keeping Reumert and Dinesen dramatically legible as competing social worlds." },
    { id: "production_design", label: "Small-scale world building", player_task: "Use controlled interiors, the jail-yard space, streets and Frederiksberg Gardens as economical dramatic environments rather than simulating an undocumented large studio build." },
    { id: "cinematography", label: "Hold the performance", player_task: "Coordinate Alfred Lind's camera around readable bodies, faces, entrances and relationships so performance can develop inside the frame without unsupported lens or coverage assumptions." },
    { id: "editing", label: "Scene concentration", player_task: "Protect sustained acting moments while moving efficiently between the story's decisive situations, and keep later restoration choices distinct from original negative assembly." },
    { id: "sound", label: "Silent image, variable accompaniment", player_task: "Treat the photographed production as silent and modern live accompaniment as presentation practice rather than assigning an undocumented fixed 1910 score." },
    { id: "release", label: "From local production to star export", player_task: "Model how a memorable performance, erotic controversy and concentrated melodrama could turn a Kosmorama release into the launch point for Nielsen's transnational screen career." },
  ],
},
] as const;

export function mergeChapterFiveInternationalExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFiveInternationalExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_five_international_verified",
      source: {
        list_id: "manual_chapter_five_international_expansion_2026",
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
