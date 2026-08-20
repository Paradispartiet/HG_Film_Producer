import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenMissingExpansionDefinitions = [
  {
    id: "scenario_missing_1982",
    title: "Missing",
    originalTitle: "Missing",
    aliases: ["The Execution of Charles Horman"],
    year: 1982,
    titleType: "Movie",
    runtimeMins: 122,
    directors: ["Costa-Gavras"],
    genres: ["Drama", "History"],
    premise: "Build Missing as a 1982 Universal/PolyGram political Production Case whose development, Mexico-for-Chile location system and postproduction craft remain distinct from the historical claims dramatized onscreen. The AFI Catalog records producer Edward Lewis optioning Thomas Hauser's The Execution of Charles Horman: An American Sacrifice in 1979, an early Warner Bros. plan under the working title The Execution of Charles Horman, and Warner's later exit before Universal Pictures and PolyGram Pictures took up the project. AFI identifies Edward and Mildred Lewis as producers, Peter Guber and Jon Peters as executive producers, Terry Nelson as associate producer, Costa-Gavras as director, and Costa-Gavras with Donald Stewart as the credited screenplay writers. Ivan Moffat and John Nichols belong to the development record but are not credited onscreen, so do not collapse development writing into the final screenplay credit. Principal photography began 13 April 1981 and was scheduled through the week of 8 June in Mexico. Production notes in the AMPAS library files, as summarized by AFI, place the work primarily in Mexico City, Acapulco and Churubusco Studio sound stages: Acapulco stood in for Viña del Mar, while Mexico City and constructed/staged environments stood in for Santiago during the 1973 coup. Preserve that location substitution as a production fact rather than treating the Mexican spaces as documentary Chile. AFI identifies private mansions used as public buildings including the U.S. Embassy, Santo Domingo Plaza, the Christopher Columbus monument, the Del Prado Hotel roof, the Gran Hotel lobby and Plaza de Toros as the National Stadium stand-in; the stadium sequence reportedly used thousands of background performers. Ricardo Aronovich is director of photography; Philippe Brun camera operator; Daniel Letterier and Pablo Rios camera assistants; Gabriel Castro gaffer; Bill Taylor matte photographer. AFI explicitly records Panaflex camera and lenses by Panavision and Technicolor prints, so those can be taught as sourced production facts while film-stock emulsion, focal-length package, exposure ratios and lighting recipes remain unset. Peter Jamison is production designer, Lucero Isaac and Agustin Ytuarte art directors, Linda Spheeris set decorator, Michael Milgrom and Antonio Mata prop masters, and Joe I. Tompkins costume designer. Françoise Bonnot is film editor with Marie Castro-Vasquez, Michèle Amsellem, Suzanne Koch and Sergio Ortega credited as assistant editors. Daniel Brisseau and Jose Garcia are sound mixers, Stephanie Van Den Bergh boom operator, Claude Villand dubbing mixer with Bonnot assisting, Michèle Boehm sound-effects editor, Jacques Levy and Vince Melandri loop-dialogue editors, and Jean-Pierre Lelong sound effects; Vangelis composed and arranged the music. Albert Whitlock is credited for special visual effects, with Laurencio Cordero and Jesus Duran on special effects and Euro-Titres on title/optical effects. Keep matte/optical/special-effects labor legible without inventing shot-by-shot methods not in the source. AFI records a 12 February 1982 Los Angeles/New York opening, an initial R rating successfully appealed to PG in January 1982, later legal controversy and Academy recognition. Festival de Cannes records the film in 1982 competition, sharing the Palme d'Or and winning Best Actor. Keep rating, awards, state-response and libel-history material downstream from the 1981 production. Do not present the film's allegation about U.S. complicity as established production fact; distinguish dramatized political argument, documented production history and later historical/legal dispute. Do not invent exact finance shares, unsupported Chile shooting, camera stock, focal lengths, lighting ratios, sound-recorder or microphone models, stunt procedures, crowd counts beyond the source wording, or an edit-in-France claim stronger than AFI's report that Costa-Gavras planned to edit there.",
    sourceId: "afi_missing_1982",
    sourceUrl: "https://catalog.afi.com/Film/56847-MISSING",
    scenarioType: "universal_polygram_mexico_for_chile_political_investigation_adaptation_location_studio_production",
    requiredChoicesSeed: {
      screenplay: ["hauser_source_costa_gavras_donald_stewart_credited_adaptation", "development_writers_kept_separate_from_final_screen_credit", "political_claims_distinct_from_production_evidence"],
      camera: ["ricardo_aronovich_panavision_panaflex_supported", "mexico_for_chile_location_and_stage_substitution", "no_invented_stock_lens_focal_length_exposure_or_lighting_recipe"],
      editing: ["francoise_bonnot_credited_editor", "investigation_and_coup_geography_as_constructed_screen_structure", "no_invented_edit_room_chronology_or_france_post_claim"],
      sound: ["brisseau_garcia_production_sound_and_villand_dubbing_roles", "vangelis_music_separate_from_dialogue_and_effects", "no_invented_recorder_microphone_adr_or_mix_hardware"],
      themes: ["film_history", "1980s", "universal", "polygram", "political_cinema", "costa_gavras", "adaptation", "thomas_hauser", "mexico_for_chile", "mexico_city", "acapulco", "churubusco", "location_substitution", "panavision", "panaflex", "technicolor_prints", "production_design", "editing", "sound", "visual_effects", "historical_claims_and_evidence", "reception_downstream"],
    },
    learningGoals: [
      "Model Missing as a Universal Pictures/PolyGram Pictures production built from an Edward and Mildred Lewis project rather than as an abstract Costa-Gavras political text.",
      "Trace the development from Edward Lewis's 1979 option and an early Warner Bros. plan to the later Universal/PolyGram production without treating abandoned development participants as final credited authors.",
      "Separate Thomas Hauser's source book, Costa-Gavras/Donald Stewart's credited screenplay and the documented but uncredited development participation of Ivan Moffat and John Nichols.",
      "Use 13 April through the week of 8 June 1981 as the sourced principal-photography window and keep later release/award history downstream.",
      "Understand Mexico City, Acapulco and Churubusco as a coordinated Mexico-for-Chile production system rather than evidence that the film photographed the 1973 events in Chile.",
      "Keep Acapulco-for-Viña del Mar, Mexico City-for-Santiago and Plaza de Toros-for-National Stadium substitution legible as authored production geography.",
      "Keep Ricardo Aronovich's cinematography, Philippe Brun's operation, camera assistants, Gabriel Castro's gaffer role and Bill Taylor's matte photography distinct.",
      "Use AFI's explicit Panaflex/Panavision and Technicolor-print record while leaving unsupported stock emulsion, focal lengths, exposure ratios and lighting recipes unset.",
      "Keep Peter Jamison, Lucero Isaac, Agustin Ytuarte, Linda Spheeris, the prop team and Joe I. Tompkins visible as separate design/costume departments constructing the political world.",
      "Keep Françoise Bonnot's editing authorship and her assistant team visible without inventing a postproduction chronology from Costa-Gavras's reported intention to edit in France.",
      "Separate Daniel Brisseau/Jose Garcia production sound, Stephanie Van Den Bergh boom operation, Claude Villand dubbing, sound-effects/loop-dialogue work and Vangelis's score.",
      "Keep Albert Whitlock's special visual effects, Cordero/Duran special effects and Euro-Titres optical/title work distinct without reverse-engineering undocumented effects techniques.",
      "Treat the PG-rating appeal, Cannes prizes, Academy recognition and later libel litigation as reception/legal history, not evidence for how the 1981 production was made.",
      "Distinguish the film's dramatized argument about U.S. responsibility from independently documented production facts and from later historical/legal disputes.",
      "Do not invent exact financing percentages, unsupported Chile locations, crowd totals stronger than AFI's wording, hardware chains or political facts merely because the finished film depicts them.",
    ],
    phases: [
      { id: "pitch", label: "Turn the Horman case into a studio-backed political investigation", player_task: "Define the project as an adaptation of Hauser developed by the Lewises and later backed by Universal/PolyGram, while keeping political argument separate from production evidence." },
      { id: "development", label: "Track the Warner-to-Universal/PolyGram development path", player_task: "Map the 1979 option, early Warner plan, working title and later studio change without promoting Moffat or Nichols to final credited screenwriters." },
      { id: "screenplay", label: "Adapt documentary source material without collapsing source and claim", player_task: "Keep Hauser's book and the Costa-Gavras/Donald Stewart credited screenplay distinct, and flag contested historical assertions as narrative claims rather than production facts." },
      { id: "locations", label: "Build Chile through Mexican locations and Churubusco stages", player_task: "Coordinate Mexico City, Acapulco, private buildings, public plazas, Plaza de Toros and Churubusco while making every geographic substitution explicit." },
      { id: "design", label: "Convert Mexican spaces into embassies, stadiums and coup-era institutions", player_task: "Coordinate Jamison, Isaac, Ytuarte, Spheeris, props and costume so location substitution and designed reconstruction remain visible as production labor." },
      { id: "cinematography", label: "Photograph political investigation with a sourced Panavision package", player_task: "Use Aronovich's credited authorship and AFI's explicit Panaflex/Panavision record while leaving stock, focal lengths, lighting ratios and exposure recipes unset." },
      { id: "editing", label: "Organize disappearance, search and political escalation", player_task: "Keep Bonnot and the assistant-editing team visible, separating credited editing from any unsupported reconstruction of where or in what sequence the cut was completed." },
      { id: "sound", label: "Separate production sound, dubbing, dialogue editing, effects and score", player_task: "Keep Brisseau/Garcia, Van Den Bergh, Villand, Boehm, loop-dialogue editors, Lelong and Vangelis in distinct roles without inventing hardware or ADR workflow." },
      { id: "effects", label: "Keep matte, special and optical effects attributable", player_task: "Distinguish Whitlock's special visual effects, Cordero/Duran effects and Euro-Titres optical/title work without assigning undocumented techniques to individual shots." },
      { id: "release", label: "Separate production from rating, prizes and legal controversy", player_task: "Track the 1982 release, PG appeal, Cannes recognition, Academy result and later litigation as downstream histories without using them to prove how the 1981 production worked or what political allegations were true." },
    ],
  },
] as const;

export function mergeChapterSixteenMissingExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenMissingExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_missing_verified",
      source: { list_id: "manual_chapter_sixteen_missing_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
