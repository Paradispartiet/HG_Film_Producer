import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenSalaamBombayExpansionDefinitions = [
  {
    id: "scenario_salaam_bombay_1988",
    title: "Salaam Bombay!",
    originalTitle: "Salaam Bombay!",
    year: 1988,
    titleType: "Movie",
    runtimeMins: 114,
    directors: ["Mira Nair"],
    genres: ["Crime", "Drama"],
    premise: "Build Salaam Bombay! as Mira Nair's first fiction feature: a transnational independent production whose screenplay and performances grew out of documentary-informed research in Bombay, a disciplined paid theater workshop with street children, location shooting and collaboration across Mirabai Films, Channel Four, Cadrage, La Sept, the National Film Development Corporation and Doordarshan. Criterion records that Nair and screenwriter Sooni Taraporevala spent months researching Kamathipura, railway platforms, street corners, brothels and remand homes before turning that field knowledge into fiction. Nair's first-person accounts describe gathering roughly 130 street children, selecting about twenty-four for an intensive seven-week workshop and eventually casting a smaller group; Criterion identifies seventeen workshop participants in the film and states that workshop participants were paid a day rate. Preserve those numbers as stages in a casting/workshop funnel rather than treating them as contradictory headcounts. The workshop combined physical exercise, mime, dance and improvisation, and Nair describes the research and workshop as feeding a line-by-line story structure that Taraporevala then developed into scripted scenes. Keep lived testimony, improvisational research and the authored screenplay analytically distinct: the children informed the film's social and behavioral world, but the finished feature is a constructed fiction, not raw documentary evidence. Criterion and BFI describe location production in Bombay and the use of nonprofessional children from the area; the BFI identifies the film's robust vérité lineage while Criterion emphasizes that the naturalism is crafted through Sandi Sissel's cinematography, close observation, layered frames and controlled narrative design. The Directors' Fortnight technical sheet credits Sooni Taraporevala and Mira Nair for screenplay, Sandi Sissel for image, Juan Rodriguez for sound, Barry Alexander Brown for editing and L. Subramaniam for music; Criterion separately credits Mitch Epstein as production designer and coproducer. Keep image, production design, location sound, editing and score as separate craft systems. The Directors' Fortnight record also lists Mirabai Films, Channel Four, Cadrage SA, La Sept, National Film Development Corporation and Doordarshan as production partners. Model that as a plural financing/production ecology rather than flattening the film into a single-country or single-company production. Contemporary sources describe difficult fundraising, including Nair raising money close to production needs, but do not use that precarity as a recommendation for underfunded or unsafe production. The Danish Film Institute records 35 mm, 1.66:1, color and sound as technical presentation data. Treat that as an institutional format record, not as proof of a specific camera body, lens package, stock emulsion, focal-length map, exposure recipe, laboratory chemistry or complete on-set workflow. Institutional runtime records vary: BFI's film page lists 114 minutes, its later Blu-ray listing 115, while other festival/catalog records list 113; preserve this as edition/catalog variance rather than forcing one number onto every surviving version. Cannes records the film as a 1988 Directors' Fortnight first feature and Caméra d'Or winner; the Academy records its 1989 Foreign Language Film nomination for India. Those prizes, later international circulation and the Salaam Baalak Trust belong to reception/social-afterlife history, not proof of how individual shots were made. Because real children in precarious circumstances were central collaborators, a contemporary teaching model must explicitly separate historical production facts from present-day safeguarding: paid historical workshop participation is documented, but no child's vulnerability, street status or lived trauma should ever be treated as blanket consent, free production value or permission to bypass guardianship, welfare, education, labor, privacy or safety requirements.",
    sourceId: "criterion_salaam_bombay_1988",
    sourceUrl: "https://www.criterion.com/current/posts/9008-salaam-bombay-a-view-from-the-streets",
    scenarioType: "transnational_bombay_location_research_workshop_nonprofessional_children_verite_fiction_production",
    requiredChoicesSeed: {
      screenplay: ["nair_taraporevala_field_research_to_fiction", "workshop_research_distinct_from_authored_scenes", "no_false_documentary_claim_for_finished_fiction"],
      camera: ["sandi_sissel_location_naturalism", "35mm_1_66_institutional_format_record_only", "no_invented_camera_body_lens_stock_focal_map_exposure_or_lab_recipe"],
      editing: ["barry_alexander_brown_editorial_authorship", "documentary_observation_shaped_into_fiction_structure", "runtime_variance_kept_as_version_catalog_history"],
      sound: ["juan_rodriguez_sound_separate_from_l_subramaniam_music", "street_ambience_not_equal_to_unmediated_documentary_truth", "no_invented_recorder_microphone_console_or_mix_hardware"],
      themes: ["film_history", "1980s", "india", "bombay", "kamathipura", "mirabai_films", "channel_four", "nfcd_india", "doordarshan", "cadrage", "la_sept", "mira_nair", "sooni_taraporevala", "sandi_sissel", "barry_alexander_brown", "mitch_epstein", "l_subramaniam", "barry_john", "street_children", "paid_workshop", "nonprofessional_performance", "location_production", "documentary_research", "fiction_construction", "child_safeguarding", "camera_dor", "academy_nomination", "runtime_variance"],
    },
    learningGoals: [
      "Model Salaam Bombay! as a transnational Mirabai Films/Channel Four/Cadrage/La Sept/NFDC/Doordarshan production rather than as a single-company national production.",
      "Separate Nair and Taraporevala's months of social research from the authored fiction screenplay that emerged from that research.",
      "Preserve the workshop funnel: roughly 130 children gathered, about twenty-four selected for intensive work, and a smaller group including seventeen workshop participants cast in the film.",
      "Treat the documented seven-week workshop as disciplined paid performance development, not as proof that every child seen in the film had the same role, contract or background.",
      "Keep physical exercise, mime, dance and improvisation as workshop methods distinct from final scripted scenes and editorial construction.",
      "Recognize nonprofessional child performance and Bombay location shooting as crafted production choices rather than synonyms for unmediated documentary truth.",
      "Keep Sandi Sissel's cinematography, Mitch Epstein's production design, Barry Alexander Brown's editing, Juan Rodriguez's sound and L. Subramaniam's music as distinct craft systems.",
      "Use the Danish Film Institute's 35 mm, 1.66:1, color and sound record as presentation-format evidence without inventing an unsupported camera/lens/stock/lab package.",
      "Treat difficult fundraising as historical production context without turning financial precarity into a recommended production method.",
      "Preserve Kamathipura, railway-platform, street-corner, brothel and remand-home research as distinct social environments rather than reducing Bombay to generic slum atmosphere.",
      "Distinguish the film's documentary and cinéma-vérité lineage from its status as a deliberately structured fiction feature.",
      "Treat real children's lived experience as contextual knowledge, not as blanket permission to reproduce private trauma or unsafe conditions.",
      "Apply contemporary child safeguarding, welfare, labor, privacy and education requirements even when studying a historically resource-constrained production.",
      "Preserve 113/114/115-minute institutional catalog variation as edition/runtime evidence instead of silently declaring every version identical.",
      "Keep the Caméra d'Or, Academy nomination, international reception and Salaam Baalak Trust downstream from production technique and authorship.",
      "Avoid inventing unsupported camera bodies, lenses, stocks, focal maps, exposure ratios, lighting recipes, recorders, microphones, consoles, laboratory chemistry, exact call sheets, individual compensation terms or safeguarding procedures not documented by the sources.",
    ],
    phases: [
      { id: "field_research", label: "Research Bombay social worlds without mistaking access for ownership", player_task: "Map Kamathipura, railway platforms, street corners, brothels and remand homes as research environments while maintaining privacy, consent and safeguarding boundaries for any contemporary analogue." },
      { id: "workshop_casting", label: "Turn a broad child workshop into a disciplined casting and performance process", player_task: "Track the roughly 130-person intake, approximately twenty-four-person intensive workshop and smaller cast as separate stages, including the documented paid day-rate framework without inventing individual terms." },
      { id: "screenplay", label: "Convert research and improvisation into authored fiction", player_task: "Keep Nair/Taraporevala research, line-by-line story construction and Taraporevala's scripted scenes distinct so lived experience is not mislabeled as direct documentary transcription." },
      { id: "finance_partners", label: "Coordinate a plural transnational production ecology", player_task: "Keep Mirabai Films, Channel Four, Cadrage, La Sept, NFDC and Doordarshan visible as separate institutional partners while resisting unsupported assumptions about exact contribution amounts." },
      { id: "child_welfare", label: "Protect child collaborators while preserving performance freedom", player_task: "Use the historical paid workshop only as evidence of structured participation; contemporary work must add explicit guardianship, welfare, education, privacy, labor and safety protections rather than imitate 1987 conditions blindly." },
      { id: "locations_design", label: "Use real Bombay spaces without collapsing design into found reality", player_task: "Keep location access and street density separate from Mitch Epstein's production-design authorship and from the social lives of people encountered during research." },
      { id: "cinematography", label: "Craft immersive location naturalism without inventing a camera package", player_task: "Anchor the image system in Sandi Sissel's credited cinematography and documented 35mm/1.66 presentation record while leaving unsupported camera, lens, stock, focal, exposure and laboratory details unset." },
      { id: "sound_music", label: "Separate location sound from composed music", player_task: "Keep Juan Rodriguez's credited sound work and L. Subramaniam's music as different systems; do not treat recorded street ambience as automatic documentary truth or invent hardware details." },
      { id: "editing_fiction", label: "Shape observational material into a deliberate fiction structure", player_task: "Track Barry Alexander Brown's editing as authorship that organizes performance, crowds, quiet intervals and narrative consequence rather than pretending the film simply records events as they occurred." },
      { id: "release_afterlife", label: "Separate production from festival, awards and social afterlife", player_task: "Keep Cannes, the Academy nomination, later restorations/runtime records and the Salaam Baalak Trust downstream from the 1987-1988 production process." },
    ],
  },
] as const;

export function mergeChapterSixteenSalaamBombayExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenSalaamBombayExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_salaam_bombay_verified",
      source: { list_id: "manual_chapter_sixteen_salaam_bombay_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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