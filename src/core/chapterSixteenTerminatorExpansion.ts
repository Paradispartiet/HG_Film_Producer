import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenTerminatorExpansionDefinitions = [
  {
    id: "scenario_the_terminator_1984",
    title: "The Terminator",
    originalTitle: "The Terminator",
    aliases: ["Terminator"],
    year: 1984,
    titleType: "Movie",
    runtimeMins: 107,
    directors: ["James Cameron"],
    genres: ["Science Fiction", "Action", "Thriller"],
    premise: "Build The Terminator as James Cameron and Gale Anne Hurd's tightly controlled 1984 low-budget science-fiction action production rather than as the later franchise projected backward. AFI credits Cameron and Hurd as writers, William Wisher Jr. for additional dialogue, Hurd as producer, John Daly and Derek Gibson as executive producers, Hemdale Productions as the production company, and the production text identifies a Pacific Western production, Euro Film Funding feature and Orion Pictures release. Cameron later recalled Orion co-funding with Hemdale; keep that as retrospective filmmaker testimony rather than replacing the onscreen/AFI company record. AFI traces the project from Cameron's forty-five-page treatment after Piranha II through his and Hurd's concern about retaining control, the late-April-1983 Schwarzenegger attachment and the move from contemplated Toronto production to Los Angeles when Toronto proved too expensive. Filming began in February 1984. AFI reports roughly ten weeks of principal photography, eight devoted to night shooting, followed by fifteen days of second-unit work and three weeks of process and special-effects photography. Preserve those production phases separately instead of collapsing every action/effects image into principal photography. AFI reports a $6.5 million budget while the April 1985 American Cinematographer article describes the picture as a $6 million production; teach it as a roughly six-to-six-and-a-half-million-dollar contemporary record rather than one uncontested audited figure. Adam Greenberg was director of photography. His contemporary American Cinematographer interview describes a cool, hard, high-contrast noir approach with dark shadows and strong backlight shaped by budget limits; extensive handheld work; low-angle treatment of Schwarzenegger; actor-specific lighting; moving dimmer lights on accompanying cars to create speed at night; and a simple ground-level handheld support nicknamed the 'Adam Camera.' Keep those techniques attached to Greenberg's reported situations instead of claiming that every shot used one lighting or camera recipe. Do not invent a film-stock emulsion, camera body, lens package, focal lengths, shutter angles, exposure ratios or laboratory process not established by the reviewed sources. George Costello is credited as art director/production designer in AFI's summary, Maria Rebman Caso as set decorator and Hilary Wright as costume designer. Mark Goldblatt edited, with Donna Smith supervising postproduction and an editorial team credited around him. Sound credits separate Richard Lightstone's production mixing, David Campling's supervising sound editing, Robert Garrett's synthesized sound effects, Glen Glen Sound recording and Terry Porter/David J. Hudson/Mel Metcalfe rerecording from Brad Fiedel's music. Effects must remain equally plural: AFI credits Stan Winston with the special Terminator effects and second-unit effects direction, Fantasy II with special visual effects, Gene Warren Jr. as special-effects supervisor for Fantasy II, Peter Kleinow with Terminator stop motion, Doug Beswick with the stop-motion Terminator model, Ellis Burman Jr. and Bob Williams with mechanical effects, and separate process/rear-screen photography staff. Cameron's later BFI interview further distinguishes several endoskeleton builds: an explodable unit, a crushable rubber version, a hero full figure, a quarter-scale stop-motion miniature, and a torso/head/arms puppet worn on a backpack by Shane Mahan. Treat Schwarzenegger's live performance, Winston makeup/prosthetic/mechanical work, full-scale endoskeletons, backpack puppetry, quarter-scale stop motion, Fantasy II optical/model work, rear-screen/process photography and pyrotechnics as different production techniques that meet in editing. AFI records a 26 October 1984 release, 107-minute runtime, color/sound and Deluxe prints. Home video success, sequel development and later franchise status belong downstream to distribution/reception history, not evidence about the 1984 shoot.",
    sourceId: "afi_the_terminator_1984",
    sourceUrl: "https://catalog.afi.com/Film/57224-THE-TERMINATOR",
    scenarioType: "hemdale_orion_los_angeles_night_low_budget_handheld_practical_stop_motion_process_effects_production",
    requiredChoicesSeed: {
      screenplay: ["cameron_hurd_writers_wisher_additional_dialogue", "treatment_control_and_casting_development_kept_distinct", "later_franchise_not_projected_back_into_1984_production"],
      camera: ["adam_greenberg_handheld_low_angle_noir_night_system", "principal_second_unit_process_effects_photography_kept_distinct", "no_invented_stock_camera_lens_focal_length_or_exposure_recipe"],
      editing: ["mark_goldblatt_editor", "practical_process_stop_motion_and_live_action_joined_in_edit", "no_invented_edit_room_chronology"],
      sound: ["lightstone_production_sound_campling_sound_editing_fiedel_music_distinct", "synthesized_effects_and_rerecording_roles_kept_distinct", "no_invented_recorder_microphone_or_mix_console_hardware"],
      themes: ["film_history", "1980s", "science_fiction", "action", "low_budget", "james_cameron", "gale_anne_hurd", "hemdale", "orion", "los_angeles", "night_shooting", "adam_greenberg", "handheld_camera", "film_noir", "mark_goldblatt", "george_costello", "stan_winston", "fantasy_ii", "gene_warren_jr", "peter_kleinow", "doug_beswick", "stop_motion", "mechanical_effects", "process_photography", "rear_projection", "brad_fiedel", "sound_editing", "franchise_history"],
    },
    learningGoals: [
      "Model The Terminator as a Hemdale-led low-budget production with Pacific Western/Euro Film Funding/Orion relationships and Gale Anne Hurd's producing role, rather than as a fully formed franchise machine.",
      "Trace Cameron's treatment, Cameron/Hurd screenplay, Wisher additional dialogue, control concerns and Schwarzenegger attachment without converting development history into extra final writing credits.",
      "Preserve the roughly $6–6.5 million discrepancy between contemporary institutional/trade records rather than teaching one number as an independently audited absolute.",
      "Separate the ten-week principal shoot, fifteen-day second unit and three-week process/special-effects phase so production labor remains visible across units.",
      "Use Los Angeles as sourced production geography while keeping contemplated Toronto and other abandoned location options in development history rather than final production fact.",
      "Use Adam Greenberg's documented hard contrast, dark shadows, strong backlight, handheld movement, low angles and actor-specific lighting as scene-grounded practice rather than a universal visual recipe.",
      "Understand the car-mounted dimmer-light technique and moving false-wall illusion as budget-conscious speed construction without claiming the vehicles actually traveled at the apparent screen speed.",
      "Keep Greenberg's improvised ground-level 'Adam Camera' support distinct from Steadicam and avoid inventing unsupported camera body, lens, stock, focal-length, shutter or exposure specifications.",
      "Keep George Costello's art direction/design, Maria Rebman Caso's set decoration and Hilary Wright's costume work distinct from cinematography and effects.",
      "Keep Mark Goldblatt's editing and the credited editorial/postproduction team visible as the layer where live action, process work and multiple effects techniques become continuous screen action.",
      "Separate Schwarzenegger's live performance from Stan Winston's special Terminator effects and from the distinct full-scale, crushable, explodable, backpack-puppet and stop-motion endoskeleton systems.",
      "Distinguish Peter Kleinow/Doug Beswick stop motion, Gene Warren Jr./Fantasy II visual-effects work, mechanical effects, process/rear-screen photography and pyrotechnics instead of labeling all of them 'practical effects'.",
      "Separate Richard Lightstone production sound, David Campling sound editing, Robert Garrett synthesized sound effects and rerecording from Brad Fiedel's music.",
      "Keep unsupported recorder, microphone, mix-console and postproduction hardware out of the scenario even where department credits are known.",
      "Treat the October 1984 release, home-video orders, sequel plans and later franchise canonization as distribution/reception history downstream from the original production.",
    ],
    phases: [
      { id: "development", label: "Turn Cameron's treatment into a controlled low-budget package", player_task: "Track Cameron/Hurd authorship, the control concern, casting and financing/company relationships without projecting later franchise power back into development." },
      { id: "locations_schedule", label: "Rebuild the package around Los Angeles and a night-heavy schedule", player_task: "Keep abandoned Toronto and other options separate from the final Los Angeles production and plan around the sourced principal/second-unit/process chronology." },
      { id: "screenplay", label: "Lock pursuit structure and additional dialogue without blurring credits", player_task: "Keep Cameron and Hurd's writing credit, Wisher's additional dialogue and earlier treatment development attributable." },
      { id: "design", label: "Build present-day and future-war material on a constrained resource base", player_task: "Coordinate Costello, set decoration, props, costume and supplied industrial robots without inventing unsupported set budgets or fabrication methods." },
      { id: "cinematography", label: "Create low-budget future noir through night, shadow and mobile camera", player_task: "Use Greenberg's sourced contrast, backlight, handheld work, low angles and actor-specific light while leaving unsupported stock/camera/lens/exposure details unset." },
      { id: "action_second_unit", label: "Split action across principal and second units", player_task: "Keep Stan Winston's effects second-unit role and Jean-Paul Ouellette's action second-unit role visible rather than treating every chase or effect as one unit's work." },
      { id: "terminator_effects", label: "Build the cyborg with multiple physical and animated systems", player_task: "Separate Winston prosthetic/mechanical work, hero/crushable/explodable endoskeleton builds, Mahan backpack puppetry and quarter-scale stop motion by function." },
      { id: "visual_process_effects", label: "Integrate Fantasy II, process photography and rear-screen work", player_task: "Keep Gene Warren Jr., stop-motion specialists, model work, process/rear-screen photography and pyrotechnics distinct from makeup/mechanical effects." },
      { id: "editing", label: "Create continuous pursuit from heterogeneous production elements", player_task: "Use Goldblatt's credited editorial role to join live performance, unit photography, process work and effects without inventing an unsupported edit-room timeline." },
      { id: "sound_music_release", label: "Separate production sound, sound editorial, synthesized effects, rerecording and score", player_task: "Coordinate credited sound departments with Brad Fiedel's music, then keep release/home-video/franchise history downstream from the 1984 production." },
    ],
  },
] as const;

export function mergeChapterSixteenTerminatorExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenTerminatorExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_terminator_verified",
      source: { list_id: "manual_chapter_sixteen_terminator_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
