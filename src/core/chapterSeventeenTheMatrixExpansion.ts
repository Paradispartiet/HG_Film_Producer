import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenTheMatrixExpansionDefinitions = [
  {
    id: "scenario_the_matrix_1999",
    title: "The Matrix",
    originalTitle: "The Matrix",
    year: 1999,
    titleType: "Movie",
    runtimeMins: 136,
    directors: ["Lana Wachowski", "Lilly Wachowski"],
    genres: ["Action", "Science Fiction"],
    premise: "Build The Matrix as a 1999 USA-Australia Warner Bros./Village Roadshow/Silver Pictures production whose historical importance comes from coordinating live-action cinematography, Sydney studio/location infrastructure, Hong Kong-derived fight choreography, practical stunt/effects work, digital visual effects, editing and sound rather than from 'bullet time' alone. AFI and BFI converge on the Wachowskis as writer-directors, Joel Silver as producer, Bill Pope as director of photography, Zach Staenberg as editor and Owen Paterson as production designer; BFI further records Warner Bros. in association with Village Roadshow Pictures/Groucho II and a Silver Pictures production. National Film and Sound Archive of Australia records that interiors were shot at the newly opened Fox Studios in Sydney while city exteriors used locations including Martin Place, the Colonial State Bank Centre and an Adam Street bridge in Chinatown; treat these as documented production locations, not authority to infer every screen location or permit. ASC's contemporary production coverage says the producers chose Sydney for the entire film, using Fox stages and converted warehouses, and records major Australian crew participation. Bill Pope describes two deliberately differentiated image worlds: the future reality as colder, darker and bluer, and the Matrix as an unappealing green-biased world with white skies, green filters in some scenes and green added in color timing. ASC documents Pope's Panavision Platinum cameras, Primo prime lenses, Super 35 2.35:1 framing, Kodak Vision 500T 5279 for interiors and 200T 5274 for day exteriors/effects. Preserve those exact sourced photographic choices, but do not infer unsupported lens-by-shot packages, filtration on every scene, processing chemistry, lab timing values or exposure logs. Pope also reports first unit shooting for 118 days and second unit for 90 days, with the first 40 days on downtown Sydney rooftops; these are unit-duration records and must not be summed into a fictional 208-day principal-photography schedule because units can overlap. The Wachowskis and Pope describe action as narrative rather than flash-cut spectacle, and ASC records Yuen Woo-ping as fight choreographer/personal martial-arts trainer for the four principals, with four months of kung-fu training before shooting and extensive wire-harness choreography. Preserve that as historical production evidence only. Contemporary production today must use qualified stunt coordinators, performer-specific capability assessment, rehearsal, certified rigging, fall protection, medical/emergency planning and applicable labor/safety rules; do not imitate informal historical wire practices from an article. Visual effects are another distinct system. ASC records that the Wachowskis wanted extreme slow motion while preserving apparent camera movement and that visual-effects supervisor John Gaeta developed the alternative process that became the basis of 'bullet time.' A contemporary ASC image record describes Manex Visual Effects' 'Flo-Mo' system as an array of computer-controlled Canon EOS-A2 still cameras whose resulting frames could be animated/interpolated; a later ASC retrospective says the original film used up to 120 still cameras in sequential arrays. Teach these as source-specific descriptions of the technique rather than assuming every bullet-time shot used exactly 120 identical cameras. Keep Gaeta's VFX supervision, Manex, Animal Logic and the separately credited practical special-effects teams visible as different systems. Sound and editorial are separate again: BFI credits Dane A. Davis with sound design/supervising sound editing and David Lee as sound recordist; Academy records The Matrix winning for Zach Staenberg's film editing, Dane A. Davis's sound-effects editing, sound mixing by John Reitz/Gregg Rudloff/David Campbell/David Lee and visual effects by John Gaeta/Janek Sirrs/Steve Courtley/Jon Thum. Awards are downstream recognition, not evidence for undocumented workflows. Runtime evidence varies institutionally: BFI and current NFSA presentation give 136 minutes, while AFI gives 137. Use 136 minutes as canonical gameplay runtime while retaining 136/137 as institutional/release variance. Do not invent budget allocations, exact shooting dates beyond sourced records, complete lens lists, camera settings for undocumented shots, wire loads, stunt heights, explosives quantities, firearm procedures, VFX software versions, interpolation algorithms, render farms, compositing settings, sound hardware, ADR/Foley workflow or color-timing numbers absent from the reviewed sources.",
    sourceId: "afi_the_matrix_1999",
    sourceUrl: "https://catalog.afi.com/Film/61230-THE-MATRIX",
    scenarioType: "warner_village_roadshow_sydney_super35_hong_kong_action_bullet_time_vfx_sound_editing",
    requiredChoicesSeed: {
      screenplay: ["wachowski_original_screenplay_and_action_as_story", "concept_world_rules_before_spectacle", "no_award_or_legacy_claim_as_script_proof"],
      camera: ["pope_panavision_platinum_primo_super35_235", "kodak_5279_interiors_5274_day_exteriors_effects", "matrix_green_future_blue_white_sky_separation"],
      editing: ["zach_staenberg_editorial_authorship", "fight_geography_not_flash_cut_only", "bullet_time_capture_separate_from_final_editing"],
      sound: ["dane_davis_sound_design_separate_from_david_lee_recording", "academy_sound_mix_credits_preserved", "no_invented_recorder_microphone_adr_foley_or_mix_layout"],
      themes: ["film_history", "1990s", "the_matrix", "warner_bros", "village_roadshow", "silver_pictures", "sydney", "fox_studios_australia", "wachowskis", "joel_silver", "bill_pope", "owen_paterson", "zach_staenberg", "dane_davis", "john_gaeta", "yuen_woo_ping", "manex", "animal_logic", "super35", "panavision_platinum", "primo_primes", "kodak_5279", "kodak_5274", "bullet_time", "flo_mo", "wirework", "runtime_variance", "stunt_safety_boundary"],
    },
    learningGoals: [
      "Model The Matrix as a USA-Australia studio/co-production and Sydney production system, not as a placeless Hollywood VFX object.",
      "Keep Warner Bros., Village Roadshow/Groucho II, Silver Pictures and Joel Silver's producing layer distinct from the Australian facilities and crews executing the production.",
      "Use NFSA and ASC evidence to distinguish Fox Studios interiors, Sydney city exteriors and additional Sydney stages/warehouses without inventing a complete location ledger.",
      "Preserve Bill Pope's two-world visual logic: colder/bluer future reality versus green-biased Matrix reality with deliberately whitened skies.",
      "Use the source-verified Panavision Platinum, Primo prime, Super 35 2.35:1, Kodak 5279/5274 package only where ASC documents it; do not invent per-shot lens, filtration, exposure or lab data.",
      "Treat 118 first-unit and 90 second-unit days as separate unit-duration records and never add them into a fictional 208-day principal-photography total.",
      "Keep Owen Paterson's production design and Pope's cinematography/color strategy as collaborating but separate craft systems.",
      "Treat Yuen Woo-ping's four-month principal-cast training and wire choreography as historical action-production evidence, not a modern safety prescription.",
      "Require present-day wire/fight work to use qualified stunt coordination, performer-specific assessment, certified rigging, rehearsal, fall protection, emergency planning and applicable labor/safety rules.",
      "Keep John Gaeta's bullet-time VFX development distinct from conventional high-speed photography, practical effects, stunt choreography and final editorial rhythm.",
      "Preserve ASC's source-specific Flo-Mo description and later 'up to 120 still cameras' retrospective without claiming that every bullet-time setup had one fixed camera count/configuration.",
      "Keep Manex visual effects, Animal Logic work and practical special-effects departments visible instead of collapsing all effects into CGI.",
      "Keep Zach Staenberg's editing, Dane A. Davis's sound design/editing, David Lee's production recording and the re-recording mixers as distinct post/production sound responsibilities.",
      "Use the film's four Academy Awards as downstream recognition of editing, sound and VFX craft, not as proof of undocumented techniques.",
      "Preserve 136/137-minute institutional variance while using 136 minutes as canonical gameplay runtime.",
      "Do not turn the later ubiquity of bullet-time imitation into evidence about how the original production made every shot.",
      "Avoid unsupported budget allocations, full schedule reconstruction, stunt loads/heights, weapons/explosives procedures, VFX software/algorithm/render settings, sound hardware or color-timing numbers.",
    ],
    phases: [
      { id: "studio_and_sydney_plan", label: "Build a US-Australia production around Sydney infrastructure", player_task: "Coordinate Warner/Village Roadshow/Silver Pictures with Fox Studios, Sydney locations and Australian crews using only documented facility/location evidence; do not invent incentives, permits or contract economics." },
      { id: "storyboard_world_rules", label: "Make action serve a legible two-world story", player_task: "Use the Wachowskis' storyboarded, intellectual-action intent to define Matrix/future rules before spectacle rather than treating action beats as interchangeable set pieces." },
      { id: "production_design_world_split", label: "Give each reality a coherent built environment", player_task: "Keep Owen Paterson's sets and Sydney architecture distinct from Pope's photographic treatment; preserve practical pods, stages and city exteriors only where sourced." },
      { id: "camera_and_colour", label: "Photograph two realities with a controlled source-verified package", player_task: "Use Panavision Platinum/Primo, Super 35 2.35:1, 5279 interiors and 5274 day exteriors/effects plus the documented green/blue/white-sky strategy without inventing shot-specific settings." },
      { id: "unit_and_location_logistics", label: "Run first and second units across large Sydney work", player_task: "Preserve 118/90 unit-duration records and first 40 rooftop days without summing overlapping units or inventing a complete calendar; apply current location and working-at-height safety requirements." },
      { id: "martial_arts_training", label: "Integrate Hong Kong fight choreography into performance", player_task: "Use Yuen Woo-ping's four-month training/choreography record while requiring modern qualified stunt coordination, performer assessment, rehearsal and medical/safety planning." },
      { id: "wire_and_practical_action", label: "Coordinate wirework, practical effects and camera", player_task: "Treat historical wire-harness and practical-effects descriptions as evidence, not instructions; do not invent loads, rigging diagrams, explosive quantities, firearm handling or fall heights." },
      { id: "bullet_time_capture", label: "Separate bullet-time capture from ordinary high-speed photography", player_task: "Use Gaeta/Manex Flo-Mo and ASC's camera-array evidence at source level, preserving configuration uncertainty across shots and leaving unsupported software/interpolation details unset." },
      { id: "vfx_compositing", label: "Combine array photography, practical plates and digital effects", player_task: "Keep Manex, Animal Logic, practical special effects and second-unit/plate photography distinct; do not invent software versions, render farms, algorithms or compositing values." },
      { id: "edit_sound_finish", label: "Finish action through editorial and sound systems", player_task: "Credit Staenberg, Dane A. Davis, David Lee and the Academy-credited re-recording mixers separately; keep award recognition downstream from actual production evidence." },
      { id: "release_and_runtime", label: "Release without erasing institutional version variance", player_task: "Use 136 minutes as canonical while retaining AFI's 137-minute record; keep later franchise versions/restorations and cultural legacy downstream." },
    ],
  },
] as const;

export function mergeChapterSeventeenTheMatrixExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenTheMatrixExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_the_matrix_verified",
      source: { list_id: "manual_chapter_seventeen_the_matrix_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
