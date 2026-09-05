import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenStarsAtNoonExpansionDefinitions = [
  {
    id: "scenario_stars_at_noon_2022",
    title: "Stars at Noon",
    originalTitle: "Stars at Noon",
    aliases: [],
    year: 2022,
    productionYear: 2022,
    titleType: "Movie",
    runtimeMins: 137,
    directors: ["Claire Denis"],
    genres: ["Drama", "Romance", "Thriller"],
    sourceId: "festival_cannes_stars_at_noon_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/stars-at-noon/",
    scenarioType: "award_priority_cannes_2022_joint_grand_prix_panama_for_nicaragua_pandemic_location_substitution_alexa_mini_technocooke_anamorphic_2_39_5_1_runtime_discrepancy_bounded",
    premise: "Build Stars at Noon as a new Chapter 19 source-first Production Case only after a tree-wide reuse audit proves that no existing scenario, Film Study or Production Verification identity exists outside the Cannes obligation manifest. Festival de Cannes records Claire Denis' film in the 2022 Competition and joint Grand Prix, credits Denis as director, Léa Mysius and Andrew Litvack for screenplay, Eric Gautier for cinematography, Arnaud de Moleron for production design, Guy Lecorne for editing and Jean-Paul Mugel for sound, and lists a 135-minute runtime. Unifrance independently records production year 2022, France/Panama coproduction geography, 137 minutes, 2.39 and 5.1. Ad Vitam lists 138 minutes, the same 2.39/5.1 delivery formats, Olivier Delbosc as producer, Olivier Helie as production director, Curiosa Films production, Hypatia Films and Barnstormer coproduction, and association with CANAL+, Cine+ and Arte France. Cannes' team record confirms the film was shot in Panama. Denis' contemporaneous press material explains that the Denis Johnson novel's 1984 Nicaragua setting was moved to the present, that Nicaragua was inaccessible during the production period, and that Panama supplied substitute locations; it also describes a largely Panamanian crew working with the French crew, weather and location setbacks being incorporated rather than hidden, and a location-led production method developed with Gautier, de Moleron and local production staff. ARRI identifies the ALEXA Mini as the camera used for Stars at Noon. Gautier later identifies the film as anamorphic widescreen photographed with TechnoCooke lenses, while his CNC interview describes a photographic concentration on skin and humidity. These sources support a production case about adaptation across time, pandemic-era location substitution, mixed local/international crews, performance- and weather-responsive filmmaking, and bounded digital/anamorphic evidence. The playable case uses 137 minutes because Unifrance and the contemporary press-kit record agree on 2h17, but it preserves Cannes' 135-minute and Ad Vitam's 138-minute listings as unresolved catalogue/version metadata rather than pretending one universal runtime. Do not infer an exact shooting-day count, exact shoot dates, camera body count, complete TechnoCooke focal set, lens serials or rehousing, filters, codec, recording media, data-management topology, complete lighting package, exact budget, partner shares, recoupment, insurance terms, complete Covid protocol ledger, production-sound equipment chain, editorial hardware/storage/conform, grading system, VFX shot census, HDR transforms or definitive mastering lineage where the source set does not establish them.",
    requiredChoicesSeed: {
      screenplay: ["denis_johnson_adaptation", "1984_to_present_day_reframing", "claire_denis_lea_mysius_andrew_litvack", "cannes_grand_prix_not_production_evidence"],
      locations: ["nicaragua_inaccessible", "panama_location_substitution", "location_led_aesthetics", "local_nonprofessional_casting_boundary"],
      production: ["mostly_panamanian_plus_french_crew", "pandemic_disruption", "weather_and_location_adaptation", "finance_shares_unresolved"],
      camera: ["eric_gautier", "alexa_mini_verified", "technocooke_anamorphic_verified", "2_39_delivery_verified", "camera_package_unresolved"],
      performance: ["margaret_qualley", "joe_alwyn_late_casting", "close_body_camera_attention", "performance_responsive_method"],
      post: ["guy_lecorne_edit", "jean_paul_mugel_sound_credit", "tindersticks_music", "5_1_delivery_verified", "post_infrastructure_unresolved"],
      runtime: ["playable_137_unifrance_presskit", "cannes_135", "ad_vitam_138", "runtime_discrepancy_preserved"],
      themes: ["film_history", "2022", "cannes_joint_grand_prix", "stars_at_noon", "claire_denis", "panama", "france", "pandemic_production", "location_substitution", "chapter19"]
    },
    learningGoals: [
      "Explain why Stars at Noon is a new Production Case only after a tree-wide reuse audit excludes a pre-existing identity.",
      "Use the 2022 Cannes joint Grand Prix to establish selection priority without treating the award as technical production evidence.",
      "Lock film year and production year to 2022 without inventing a separate chronology where the sources do not require one.",
      "Use 137 minutes as the playable runtime while preserving Cannes' 135-minute and Ad Vitam's 138-minute catalogue records as an unresolved discrepancy.",
      "Identify Claire Denis as director and co-screenwriter without collapsing direction and screenplay into one authorship role.",
      "Identify Léa Mysius and Andrew Litvack as credited screenwriters alongside Denis.",
      "Explain how Denis Johnson's 1984 Nicaragua novel setting was reframed into a present-day screen adaptation.",
      "Explain why inaccessible Nicaragua led production to Panama rather than treating Panama as merely a fictional stand-in with no production consequence.",
      "Identify Panama as the sourced shooting geography while preserving France/Panama as the Unifrance coproduction geography.",
      "Explain how pandemic disruption, political conditions and production access intersected without claiming one single cause for every location decision.",
      "Describe the mixed Panamanian/French crew structure without inventing department-by-department nationality or staffing ratios.",
      "Treat local casting and nonprofessional participation as a documented production practice without generalizing all performers as nonprofessional.",
      "Explain how rain and weak locations could be incorporated or replaced during production instead of forcing a rigid preplanned visual system.",
      "Identify Eric Gautier as director of photography.",
      "Use ARRI's record to identify the ALEXA Mini without inferring codec, media, sensor mode or camera count.",
      "Use Gautier's later direct account to identify anamorphic TechnoCooke lenses without inventing the complete focal set or lens modifications.",
      "Use 2.39 as a documented presentation ratio without treating it as proof of every acquisition or finishing crop decision.",
      "Explain Gautier's stated attention to skin and humidity as a photographic priority rather than a universal recipe for every scene.",
      "Identify Margaret Qualley and Joe Alwyn as the central performers while keeping detailed rehearsal and take methodology unresolved.",
      "Recognize Joe Alwyn's late casting as a production contingency without inferring undocumented contract or scheduling terms.",
      "Identify Arnaud de Moleron as production designer and connect location selection to design collaboration only where the source record supports it.",
      "Identify Judy Shrewsbury, Turid Follvik and Silvine Picard in costume, makeup and hair from the distributor technical record without inventing department process.",
      "Identify Guy Lecorne as editor while leaving editing software, storage and conform topology unresolved.",
      "Identify Jean-Paul Mugel in the sound credit layer and preserve equipment and routing as unknown.",
      "Use 5.1 as a documented delivery format without inferring production recording or stem architecture.",
      "Identify Tindersticks/Stuart Staples in the music layer without reconstructing an unsupported recording or mix workflow.",
      "Map Curiosa Films, Hypatia Films, Barnstormer, Arte France, CANAL+, Cine+ and Ad Vitam by documented role without inventing ownership or recoupment shares.",
      "Keep exact budget, cash flow, insurance terms and partner percentages unresolved.",
      "Keep exact shooting-day count and full production calendar unresolved until a source establishes them.",
      "Keep complete camera, lens, filter, codec, media and data-management topology unresolved beyond ALEXA Mini and TechnoCooke anamorphic evidence.",
      "Keep the complete lighting package unresolved; do not turn mood or humidity into an invented equipment list.",
      "Keep production-sound equipment, ADR/Foley infrastructure, editorial hardware, grading system and VFX census unresolved.",
      "Keep final mastering lineage unresolved beyond source-backed 2.39 and 5.1 delivery metadata.",
      "Complete all 17 Film Study areas while distinguishing source-verified facts, mapped interpretation and research-pending boundaries.",
      "Close the Cannes obligation only when one unique scenario, one complete Film Study, one PV identity and an exact one-film queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock Cannes joint Grand Prix obligation", player_task: "Use the 2022 prize to establish selection priority without treating it as production evidence." },
      { id: "reconciliation", label: "Prove the identity is absent", player_task: "Search the tracked tree, Film Study/PV layers and branch/PR history before materializing." },
      { id: "adaptation", label: "Move 1984 into the present", player_task: "Preserve the adaptation choice separately from production logistics." },
      { id: "location_substitution", label: "Shift Nicaragua production to Panama", player_task: "Treat access, politics and pandemic conditions as operational constraints." },
      { id: "local_production", label: "Build the Panama production base", player_task: "Coordinate local crew, casting and locations with the French production layer." },
      { id: "weather", label: "Use weather as live production input", player_task: "Adapt to rain and location conditions without pretending every change was predesigned." },
      { id: "camera", label: "Choose ALEXA Mini", player_task: "Use ARRI's sourced body choice while leaving codec, media and body count unresolved." },
      { id: "lenses", label: "Use anamorphic TechnoCooke", player_task: "Use Gautier's direct lens-family evidence without inventing the complete focal set." },
      { id: "format", label: "Protect 2.39 delivery", player_task: "Use sourced presentation metadata without inferring unsupported finishing topology." },
      { id: "performance", label: "Keep camera close to bodies", player_task: "Translate Gautier's skin-and-humidity priority into performance-responsive coverage." },
      { id: "design", label: "Coordinate locations and production design", player_task: "Use de Moleron's credited design role and location scouting as a coupled production system." },
      { id: "costume_makeup", label: "Map visible character departments", player_task: "Use sourced credits while keeping undocumented process details open." },
      { id: "editing", label: "Shape the location-driven material", player_task: "Use Lecorne's edit credit while leaving software and storage unresolved." },
      { id: "sound", label: "Map sound and 5.1 delivery", player_task: "Separate credited sound work from unknown recording and post-routing infrastructure." },
      { id: "music", label: "Integrate Tindersticks", player_task: "Keep the verified music authorship distinct from unsupported studio or stem claims." },
      { id: "runtime_boundary", label: "Preserve 135 / 137 / 138 minutes", player_task: "Keep catalogue/version provenance visible instead of forcing false precision." },
      { id: "finance_rights", label: "Map partners without invented shares", player_task: "Separate producer, coproducer, broadcaster/association, distributor and sales roles from unknown economics." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Map source confidence and unresolved boundaries across every required area." },
      { id: "production_verification", label: "Close Stars at Noon", player_task: "Require one new scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenStarsAtNoonExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenStarsAtNoonExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_stars_at_noon_verified",
      source: { list_id: "manual_chapter_nineteen_stars_at_noon_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
