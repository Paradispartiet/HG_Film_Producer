import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenASeparationExpansionDefinitions = [
  {
    id: "scenario_a_separation_2011",
    title: "A Separation",
    originalTitle: "Jodaeiye Nader az Simin",
    year: 2011,
    titleType: "Movie",
    runtimeMins: 123,
    directors: ["Asghar Farhadi"],
    genres: ["Drama"],
    sourceId: "sony_classics_a_separation_presskit_2011",
    sourceUrl: "https://www.sonyclassics.com/aseparation/aseparation_presskit.pdf",
    scenarioType: "35mm_tehran_location_handheld_rehearsal_precision_information_editing_no_score_2011",
    premise: "Build A Separation as a Chapter 18 anchor for photochemical persistence and production-method modernity rather than forcing the 2000–2019 period into a digital-acquisition narrative. Sony Pictures Classics' title-specific press kit records Asghar Farhadi's long casting process, extensive rehearsals, a very detailed screenplay followed closely, and an agreement that once shooting began variations would be minimal; the same interview states that all scenes were shot on location except the judge's office and court, which production could not access and therefore built inside two disused schools. Preserve an important practice boundary rather than turning that description into rigid dogma: cinematographer Mahmoud Kalari later recalled that Farhadi could still make last-minute changes and sometimes redirect a final take, while also stating that A Separation was entirely handheld except for three still shots and that its camera functioned as a narrator or third eye. Viennale and trigon-film list the release format as 35mm, while DFI, BFI and sales/distribution records confirm Mahmoud Kalari as cinematographer; do not invent a camera body, lens package, film stock, laboratory or digital-intermediate path from weaker technical databases. The visual lesson is therefore not a gear list but controlled instability: handheld observation, doorways, crowded interiors and deliberately non-polished composition make information feel discovered while the screenplay and rehearsal system remain highly controlled. Farhadi also describes editing as the stage where the amount and timing of information given to the audience are calibrated because he treats the film as a mystery without detectives. Editor Hayedeh Safiyari later recalled editing A Separation while Farhadi was still shooting, so editorial feedback and rough assembly overlapped production; preserve that retrospective workflow claim without inventing software. Sound and music are equally disciplined. DreamLab's production record credits sound mixer Mohammad-Reza Delpak, sound editor Reza Narimizadeh and sound recordist Mahmood Sammakbashi, while Farhadi states that there is no music during the film itself, only over the closing credits, because he did not want score to impose emotional judgment on the realistic atmosphere. DFI credits Sattar Oraki as composer and Keyvan Moghaddam for production design; DreamLab also credits Moghaddam for costumes. Treat the constructed court spaces as designed locations, not evidence that the whole film was studio-shot. Sony, DFI and Viennale record 123 minutes while BFI lists 122; use 123 for gameplay and preserve 122 as an institutional runtime discrepancy. The film's Berlin Golden Bear, ensemble acting prizes and later Academy recognition matter as circulation/reception history, but do not confuse festival success with production method. Do not call the film documentary, do not claim that handheld photography equals improvisation, do not erase the tension between rehearsal discipline and Farhadi's capacity for last-minute decisions, do not invent a digital-capture pipeline, and do not use naturalism as evidence that production design, sound editing or editorial information control were absent.",
    requiredChoicesSeed: {
      screenplay: ["detailed_screenplay", "mystery_information_timing", "competing_accounts_without_answer", "rehearsal_before_variation", "no_false_improvisation_claim"],
      camera: ["35mm_photochemical_boundary", "handheld_except_three_still", "camera_as_third_eye", "doorway_observation", "no_invented_camera_stock_lens"],
      editing: ["information_release_timing", "edit_during_shoot", "rough_cut_overlap", "continuity_of_uncertainty", "no_invented_software"],
      sound: ["production_sound_presence", "sound_editing_distinction", "no_music_until_end_credits", "avoid_emotional_score_judgment", "no_false_silent_naturalism_claim"],
      themes: ["film_history", "2011", "a_separation", "jodaeiye_nader_az_simin", "asghar_farhadi", "mahmoud_kalari", "hayedeh_safiyari", "keyvan_moghaddam", "mohammad_reza_delpak", "reza_narimizadeh", "mahmood_sammakbashi", "sattar_oraki", "35mm", "photochemical_persistence", "handheld", "rehearsal", "detailed_screenplay", "tehran_locations", "court_set", "information_control", "no_score", "naturalism", "runtime_discrepancy", "festival_circulation"],
    },
    learningGoals: [
      "Explain why A Separation is a Chapter 18 photochemical-persistence case: a 2011 internationally circulating feature can remain 35mm while other production systems digitize around it.",
      "Keep the verified 35mm release/capture boundary distinct from unverified gear detail; do not infer a specific camera body, lens set, film stock, laboratory or DI path from weak sources.",
      "Explain Farhadi's rehearsal method: long actor selection, substantial rehearsal and a detailed screenplay establish character intentions before principal photography.",
      "Preserve Farhadi's own statement that variations were intended to be minimal once shooting began without turning it into a claim that no on-set changes occurred.",
      "Preserve Mahmoud Kalari's complementary evidence that Farhadi could make last-minute visual or performance changes, including on a final take.",
      "Treat rehearsal discipline and on-set responsiveness as compatible layers rather than mutually exclusive production myths.",
      "Identify the title-specific camera rule: Kalari recalls A Separation as entirely handheld except for three still shots.",
      "Explain Kalari's description of the camera as a narrator or third eye rather than automatically equating handheld form with a character point of view.",
      "Connect handheld movement to the here-and-now pressure of events without calling the fiction documentary footage.",
      "Explain why Farhadi rejected frames or lighting that felt overly composed, neat, perfect or beautiful while still requiring deliberate cinematographic control.",
      "Treat doorways, windows and crowded domestic space as staging constraints that organize who can see, hear or know information.",
      "Preserve the location boundary: Farhadi says all scenes were shot on location except the judge's office and court material.",
      "Explain why the inaccessible court locations were recreated inside two disused schools and treat those spaces as production design rather than found reality.",
      "Keep Keyvan Moghaddam's production-design and costume work visible even though the film pursues an unobtrusive realist surface.",
      "Explain how a detailed screenplay can create a tightly interconnected mystery structure in which moving one piece later becomes difficult.",
      "Use Farhadi's own description of editing as control over the amount and timing of information released to the audience.",
      "Treat offscreen or withheld events as editorial knowledge design rather than missing coverage.",
      "Preserve Hayedeh Safiyari's retrospective account that she edited A Separation while shooting was still underway and that a rough cut existed near the end of production.",
      "Do not invent an editing application, codec or conform pipeline when the reviewed title-specific sources do not establish one.",
      "Explain why the film has no music during the drama itself and only uses music over the closing credits according to Farhadi.",
      "Connect the absence of non-diegetic score to Farhadi's wish not to impose an emotional judgment on scenes, rather than claiming the film has no designed soundtrack.",
      "Keep sound recording, sound mixing and sound editing distinct: DreamLab credits Mahmood Sammakbashi, Mohammad-Reza Delpak and Reza Narimizadeh in separate roles.",
      "Treat dialogue, room tone, traffic, doors, domestic appliances and institutional ambience as potential narrative evidence without inventing unsupported microphone or post-processing details.",
      "Use Sattar Oraki's composer credit together with Farhadi's no-music-until-credits statement instead of falsely concluding that the film has no composer.",
      "Use 123 minutes for gameplay because Sony, DFI and Viennale converge there while preserving BFI's 122-minute record as institutional/version metadata.",
      "Explain why Berlin and Academy recognition belong to reception and circulation history, not to the causal proof of how the film was shot.",
      "Treat the film's Tehran social specificity as production context without reducing characters to sociological types or claiming the fiction is an unmediated record of Iran.",
      "Explain how the production creates naturalism through highly planned rehearsal, staging, camera and information control rather than through lack of craft.",
      "Compare A Separation with The Social Network: both tightly control information and performance, but one demonstrates mature file-based digital post while the other preserves a 35mm, location-centered production system.",
      "Compare A Separation with Avatar: Avatar externalizes production design into a visible virtual world, while A Separation hides design labor inside apparently ordinary homes, schools and institutions.",
    ],
    phases: [
      { id: "screenplay_evidence_map", label: "Map what every character knows before rehearsal", player_task: "Break the detailed screenplay into claims, witnessed events, offscreen events and disputed recollections so later blocking and editing preserve uncertainty without becoming arbitrary." },
      { id: "casting_rehearsal", label: "Build characters in rehearsal before the camera arrives", player_task: "Use extended rehearsal to define each actor's intentions and relationships, reserving principal photography for detail and calibrated adjustment rather than wholesale invention." },
      { id: "variation_boundary", label: "Keep rehearsal discipline flexible enough for Farhadi's last-minute decisions", player_task: "Establish a repeatable baseline from rehearsal but allow a final-take performance or visual adjustment when it strengthens the scene, documenting the change for continuity." },
      { id: "location_plan", label: "Treat real Tehran spaces as production environments", player_task: "Scout domestic, street and institutional locations for movement, sound, eyelines and access rather than assuming a real location requires no staging or control." },
      { id: "court_rebuild", label: "Recreate inaccessible court spaces inside two disused schools", player_task: "Build the judge's office and court material in available school spaces while preserving the cramped institutional behavior and spatial logic the screenplay needs." },
      { id: "design_realism", label: "Make production design disappear into lived-in space", player_task: "Coordinate Keyvan Moghaddam's set and costume decisions with class, routine and continuity so designed choices register as ordinary life rather than decorative display." },
      { id: "format_boundary", label: "Commit to the verified 35mm photochemical production boundary", player_task: "Track the project as 35mm without inventing unsupported camera, lens, stock, lab or DI specifications; distinguish what the sources prove from what weaker technical listings merely suggest." },
      { id: "handheld_rule", label: "Use handheld observation for all but three still shots", player_task: "Design the camera plan around Kalari's title-specific handheld rule, reserving the three still setups as deliberate exceptions rather than accidental departures." },
      { id: "third_eye", label: "Let the camera narrate without becoming an omniscient judge", player_task: "Place the handheld camera as a mobile third eye that follows present-tense pressure while withholding the views the screenplay intentionally denies the audience." },
      { id: "imperfect_frame", label: "Reject polish that breaks the film's behavioral pressure", player_task: "Allow doorframes, obstructed sightlines and imperfectly balanced composition when they support scene logic, while keeping exposure, focus and continuity professionally controlled." },
      { id: "performance_capture", label: "Photograph rehearsed behavior without advertising rehearsal", player_task: "Keep actors responsive to each other inside crowded spaces so precise preparation reads as lived interaction rather than recited blocking." },
      { id: "production_sound", label: "Protect intelligible behavior and useful environment in location sound", player_task: "Record dialogue and environmental texture as production evidence while preserving clear role boundaries among the recordist, mixer and later sound editor; do not invent undocumented microphone techniques." },
      { id: "editorial_overlap", label: "Let Safiyari assemble while shooting continues", player_task: "Feed photographed scenes into editorial during production so Hayedeh Safiyari can build a rough structure and expose continuity or information problems before all shooting is complete." },
      { id: "information_timing", label: "Cut the mystery by controlling when facts become available", player_task: "Adjust shot duration, entrances, exits and withheld views according to the amount and timing of information the audience receives rather than cutting only for pace." },
      { id: "offscreen_event", label: "Preserve uncertainty around events the audience did not witness", player_task: "Do not manufacture clarifying inserts for every disputed action; keep necessary absences intact so later testimony remains genuinely contestable." },
      { id: "sound_edit", label: "Shape realism without pretending raw location sound is untouched", player_task: "Organize dialogue, room tone and environmental events through Reza Narimizadeh's sound-editing layer while keeping the designed result free of unsupported spectacle claims." },
      { id: "music_restraint", label: "Withhold score until the closing credits", player_task: "Keep dramatic scenes free of non-diegetic music in line with Farhadi's stated resistance to emotional judgment, then introduce the credited closing music only at the version boundary." },
      { id: "runtime_boundary", label: "Keep institutional runtime records inspectable", player_task: "Use 123 minutes for gameplay while retaining BFI's 122-minute record as a separate catalogue/version fact rather than silently normalizing it away." },
      { id: "circulation_boundary", label: "Separate production evidence from festival and award history", player_task: "Record Berlinale and Academy circulation as reception context while proving camera, rehearsal, location, design, editing and sound claims from production-specific sources." },
    ],
  },
] as const;

export function mergeChapterEighteenASeparationExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenASeparationExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_a_separation_verified",
      source: { list_id: "manual_chapter_eighteen_a_separation_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
