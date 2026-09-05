import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenTheEightMountainsExpansionDefinitions = [
  {
    id: "scenario_the_eight_mountains_2022",
    title: "The Eight Mountains",
    originalTitle: "Le otto montagne",
    aliases: ["Le Otto Montagne", "Les Huit Montagnes"],
    year: 2022,
    productionYear: 2021,
    principalPhotographyYear: 2021,
    titleType: "Movie",
    runtimeMins: 147,
    directors: ["Charlotte Vandermeersch", "Felix van Groeningen"],
    genres: ["Drama"],
    sourceId: "festival_cannes_le_otto_montagne_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/le-otto-montagne/",
    scenarioType: "award_priority_cannes_2022_joint_jury_prize_2021_multiblock_alps_turin_nepal_location_only_alexa_mini_lf_4x3_supreme_primes_optimo_natural_light_di_deadline_bounded",
    premise: "Build The Eight Mountains / Le otto montagne as a new Chapter 19 source-first Production Case only after a tree-wide reuse audit proves that no existing scenario, Film Study or Production Verification identity exists under the English, Italian or French title. Festival de Cannes locks the 2022 Competition and joint Jury Prize obligation, credits Charlotte Vandermeersch and Felix van Groeningen as directors, Ruben Impens as cinematographer, Nico Leunen as editor, Massimiliano Nocente as production designer, Daniel Norgren as composer, Andrea Caretti, Alessandro Feletti and Alessandro Palmerini in sound, lists Italy/Belgium/France, a 147-minute runtime and year of production 2021. Vision Distribution records shooting beginning in Valle d'Aosta in June 2021 and the Italian/French/Belgian production structure. Wildside identifies Mario Gianani and Lorenzo Gangarossa as producers, Rufus/Menuetto, Pyramide Productions and Vision Distribution as coproducers, and Louis Tisné of Elastic Films as executive producer. Ruben Impens directly describes prep beginning in April 2021, production moving through the Italian Alps, Turin and Nepal over roughly seven months before wrapping in December, with more than 60 shooting days, five seasonal blocks, no studio days and a built mountain hut used as both exterior and interior location because fast-changing weather made studio separation impractical. In Nepal, Covid prevented conventional advance scouting; the team travelled with donkeys for almost four weeks and worked with a documentary-like freedom while still making scripted fiction. Impens records a shift from planned widescreen to 4:3 Academy framing, spherical ARRI Alexa Mini LF capture, Zeiss Supreme Primes for most of the film, an Angénieux Optimo 36-435mm Full Frame zoom for mountain work, sparse natural-light practice enhanced by negative fill, LiteGear LiteMats and DMG Lumière Mini Mix LEDs for interiors, mostly static or handheld framing with selective drone and Steadicam use, and a final DI completed under Cannes deadline pressure. Do not infer an exact total budget, financing shares, camera-body count, recording codec or bit depth, media/offload/checksum topology, complete filtration package, full lighting inventory, production-sound recorder/microphone chain, editorial software/storage, VFX shot census, precise color-management pipeline, DCP/audio mastering lineage, insurance/weather contingency ledger, crew size outside directly sourced examples, or exact day-by-day schedule where the sources do not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2022_joint_jury_prize", "selection_obligation_not_technical_evidence"],
      chronology: ["film_year_2022", "production_year_2021", "prep_april_2021", "wrap_december_2021", "chronology_provenance_boundary"],
      locations: ["valle_d_aosta", "italian_alps", "turin", "nepal", "no_studio_days", "mountain_hut_built_on_location"],
      production: ["italy_belgium_france_coproduction", "five_seasonal_blocks", "more_than_60_shooting_days", "weather_driven_location_flexibility", "budget_and_partner_shares_unresolved"],
      camera: ["ruben_impens", "arri_alexa_mini_lf", "4_3_academy", "spherical_capture", "zeiss_supreme_primes", "angenieux_optimo_36_435_full_frame"],
      movement: ["mostly_static_or_handheld", "selective_drone", "selective_steadicam", "long_lens_mountain_pans"],
      lighting: ["natural_light", "negative_fill", "litemat_interiors", "dmg_mini_mix_interiors", "complete_lighting_inventory_unresolved"],
      post: ["nico_leunen_edit", "veerle_zeelmaekers_cannes_di", "consistent_grade_across_timeframes", "post_infrastructure_unresolved"],
      runtime: ["cannes_147_minutes", "runtime_version_boundary"],
      themes: ["film_history", "2022", "production_2021", "cannes_jury_prize", "mountain_location_production", "seasonal_blocks", "4_3_academy", "chapter19"]
    },
    learningGoals: [
      "Explain why The Eight Mountains must be materialized only after English, Italian and French title reuse checks are negative.",
      "Use the Cannes 2022 joint Jury Prize as a selection obligation rather than production evidence.",
      "Preserve film and award year 2022 separately from Cannes production year 2021.",
      "Identify Charlotte Vandermeersch and Felix van Groeningen as co-directors.",
      "Identify Ruben Impens as cinematographer, Nico Leunen as editor, Massimiliano Nocente as production designer and Daniel Norgren as composer.",
      "Use Vision Distribution's June 2021 Valle d'Aosta shooting-start record without converting it into a complete schedule.",
      "Use Impens's April 2021 prep and December wrap account to bound the production period.",
      "Describe the production as spanning the Italian Alps, Turin and Nepal without flattening all geography into one location.",
      "Explain why the mountain hut was built fully on location and used for both exterior and interior work.",
      "Explain why the production had no studio shooting days according to the cinematographer's direct account.",
      "Treat changing mountain weather as a production constraint that shaped location and lighting decisions.",
      "Recognize that the production exceeded 60 shooting days while keeping an exact total unresolved.",
      "Recognize the five seasonal production blocks without inventing dates for each block.",
      "Explain how Covid prevented conventional Nepal scouting and contributed to a discovery-based location method.",
      "Distinguish documentary-like freedom in Nepal from documentary genre or nonfiction production.",
      "Identify the final 4:3 Academy framing as a deliberate change from an earlier widescreen plan.",
      "Identify ARRI Alexa Mini LF as the sourced camera platform.",
      "Identify spherical capture rather than anamorphic capture.",
      "Identify Zeiss Supreme Primes as the principal lens family.",
      "Identify the Angénieux Optimo 36-435mm Full Frame zoom as the sourced mountain-landscape lens.",
      "Explain why longer lenses and slow pans were used to make the mountains function as a character.",
      "Distinguish mostly static/handheld framing from selective drone and Steadicam use.",
      "Explain how 4:3 composition prevented landscape spectacle from overwhelming the characters.",
      "Identify natural light and negative fill as the main exterior-lighting strategy.",
      "Identify LiteGear LiteMats and DMG Lumière Mini Mix LEDs as sourced interior-light tools without inventing a full package.",
      "Explain how doors, windows, candles and fireplaces were integrated into the location-lighting strategy.",
      "Identify the grade as an active creative process rather than simple technical finishing.",
      "Explain that the final DI was still being completed under Cannes selection deadline pressure.",
      "Preserve the sourced 147-minute runtime without inventing alternate-master lineage.",
      "Keep total budget, financing percentages, data-management topology, sound equipment, editorial software and mastering lineage unresolved where unsupported.",
      "Complete all 17 Film Study areas with explicit confidence boundaries.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes Jury Prize obligation", player_task: "Use the 2022 prize only to establish why this film enters the corrective queue." },
      { id: "reconciliation", label: "Search all title identities", player_task: "Check The Eight Mountains, Le otto montagne and Les Huit Montagnes before materializing." },
      { id: "chronology", label: "Separate 2021 production from 2022 release/award year", player_task: "Preserve source chronology without collapsing dates." },
      { id: "production_window", label: "Build the long seasonal production", player_task: "Use April prep, June shooting start and December wrap as bounded evidence." },
      { id: "seasonal_blocks", label: "Plan five production blocks", player_task: "Model repeated returns to the mountain across seasons without inventing exact block calendars." },
      { id: "valle_daosta", label: "Establish the Alpine base", player_task: "Treat Valle d'Aosta as the primary sourced mountain geography." },
      { id: "turin_nepal", label: "Extend the geography", player_task: "Preserve Turin and Nepal as separate production environments." },
      { id: "weather", label: "Turn weather into a scheduling variable", player_task: "Use rapid weather change to justify location flexibility rather than studio substitution." },
      { id: "hut_build", label: "Build the hut on location", player_task: "Keep interior and exterior in the same mountain environment." },
      { id: "nepal_method", label: "Work without conventional scouting", player_task: "Model the Covid-constrained Nepal trek and discovery-based scripted coverage." },
      { id: "aspect_ratio", label: "Choose 4:3 Academy", player_task: "Frame people and mountains without defaulting to widescreen spectacle." },
      { id: "camera_platform", label: "Choose Alexa Mini LF", player_task: "Use the sourced camera platform without inventing body count or recording topology." },
      { id: "prime_lenses", label: "Use Zeiss Supreme Primes", player_task: "Build the principal spherical lens system from the direct DP account." },
      { id: "mountain_zoom", label: "Use the Optimo 36-435", player_task: "Shape mountain pans with the sourced long full-frame zoom." },
      { id: "movement", label: "Keep movement selective", player_task: "Balance static/handheld work with limited drone and Steadicam coverage." },
      { id: "exterior_light", label: "Use natural light and negative fill", player_task: "Let mountain conditions drive exterior lighting choices." },
      { id: "interior_light", label: "Light the hut simply", player_task: "Use windows, doors, practical fire sources, LiteMats and Mini Mix LEDs without inventing a larger package." },
      { id: "editing", label: "Shape the decades-long friendship", player_task: "Use Nico Leunen's sourced editing role while leaving software and storage unresolved." },
      { id: "grade", label: "Finish under Cannes pressure", player_task: "Treat color timing as creative continuity work while preserving unresolved color-management details." },
      { id: "sound_music", label: "Map sound and score credits", player_task: "Use sourced sound and Daniel Norgren music credits without fabricating equipment or recording workflow." },
      { id: "finance_rights", label: "Map the coproduction", player_task: "Record Wildside, Rufus/Menuetto, Pyramide and Vision participation without inventing partner shares." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make source confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close The Eight Mountains", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenTheEightMountainsExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenTheEightMountainsExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_the_eight_mountains_verified",
      source: { list_id: "manual_chapter_nineteen_the_eight_mountains_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
