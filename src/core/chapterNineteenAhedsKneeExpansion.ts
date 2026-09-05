import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenAhedsKneeExpansionDefinitions = [
  {
    id: "scenario_aheds_knee_2021",
    title: "Ahed's Knee",
    originalTitle: "Ha’berech",
    aliases: ["Ha'berech", "Le Genou d'Ahed"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 109,
    directors: ["Nadav Lapid"],
    genres: ["Drama"],
    sourceId: "aheds_knee_cannes_2021",
    sourceUrl: "https://www.festival-cannes.com/en/f/ha-berech/",
    scenarioType: "award_priority_cannes_2021_joint_jury_prize_18_day_arava_shoot_destabilized_camera_schedule_pressure",
    premise: "Build Ahed's Knee (Ha’berech) as the next unresolved Cannes-major-prizes source-first Production Case after strict reuse reconciliation. Festival de Cannes locks the 2021 Competition selection, joint Jury Prize, 109-minute runtime, France/Germany/Israel production footprint, Nadav Lapid direction and screenplay, and the Pie Films-led production network. Filmmaker Magazine's direct Lapid interview locks an unusually compressed 18-day shoot and explains that the short schedule was not merely logistical: it forced risk, discouraged neutral coverage and pushed the production toward the film's cinematic essence. Lapid also confirms that the Arava desert production retraced the emotional geography of his 2018 visit, while describing his collaboration with cinematographer Shai Goldman as a deliberate attempt to turn the camera into another actor that intervenes, disrupts and refuses neutral observation. European Film Academy locks Shai Goldman cinematography, Nili Feller editing, Pascale Consigny production design, Khadija Zeggaï costume, Noa Yehonatan makeup, Marina Kertesz sound and Dani Cohen/Arnaud Chelet VFX credits; AFI separately locks Judith Lou Lévy as producer and Zehava Shekel as executive producer. Kino Lorber supplies 2.39:1 exhibition metadata. Do not infer camera body, lenses, sensor/film stock, recording codec/media, focal-length strategy, full lighting package, exact budget, partner shares, complete sound chain, editorial hardware/storage, grade/color-management system, detailed VFX methodology or mastering lineage where the source set does not establish them.",
    requiredChoicesSeed: {
      screenplay: ["nadav_lapid_single_screenwriter", "autobiographical_censorship_trigger", "mother_editor_loss_context"],
      schedule: ["eighteen_day_shoot", "short_schedule_as_form_constraint", "no_neutral_coverage"],
      camera: ["shai_goldman", "camera_as_actor", "destabilizing_whip_pan_and_tilt_grammar", "camera_package_unresolved"],
      locations: ["arava_desert", "retraced_2018_visit", "non_poetic_desert_search"],
      post: ["nili_feller_edit", "vfx_credit_boundary", "grade_and_mastering_unresolved"],
      themes: ["film_history", "2021", "cannes_jury_prize", "nadav_lapid", "arava", "schedule_pressure", "political_censorship", "chapter19"]
    },
    learningGoals: [
      "Explain why Ahed's Knee must be materialized only after reuse reconciliation proves no existing Atlas/PV identity.",
      "Use 2021 as the Cannes film/award year and avoid inventing a separate production chronology not established by the core source set.",
      "Use 109 minutes as the Cannes runtime while recognizing that secondary listings may vary.",
      "Identify France, Germany and Israel as the Cannes-listed production countries.",
      "Identify Nadav Lapid as director and screenwriter.",
      "Use the 2021 joint Jury Prize as a selection obligation rather than production evidence.",
      "Identify Pie Films as Cannes-listed principal production and preserve the wider French/German partner network without inventing ownership percentages.",
      "Identify Judith Lou Lévy as producer and Zehava Shekel as executive producer from AFI.",
      "Lock the direct Lapid statement that principal production was an 18-day shoot.",
      "Explain how the compressed schedule forced risk and reduced room for safe or neutral coverage.",
      "Treat short schedule as a production constraint with aesthetic consequences rather than as trivia.",
      "Identify the Arava desert as the central production landscape and preserve Lapid's account of retracing the feeling of his 2018 visit.",
      "Avoid converting the Arava setting into an invented day-by-day location schedule.",
      "Identify Shai Goldman as cinematographer.",
      "Explain Lapid's camera-as-actor principle: the camera intervenes, gets in the way and refuses neutral observation.",
      "Connect whip pans, aggressive tilts and destabilized framing to the sourced directing/cinematography method without inventing lens or rig specifications.",
      "Keep camera body, lenses, sensor/film stock, codec, media and shot-specific exposure choices unresolved.",
      "Use 2.39:1 only as distributor exhibition metadata, not as proof of acquisition format or sensor mode.",
      "Identify Nili Feller as editor while leaving editing software, storage, conform and finishing topology unresolved.",
      "Identify Pascale Consigny as production designer while not inventing construction inventories or art-department methods.",
      "Identify Khadija Zeggaï costume and Noa Yehonatan makeup credits without fabricating process detail.",
      "Identify Marina Kertesz in the sound credit layer and preserve unresolved recorder, microphone, wireless, ADR/Foley and mix-routing detail.",
      "Identify Dani Cohen and Arnaud Chelet as VFX credits while keeping the number, nature and pipeline of effects unresolved.",
      "Separate the film's autobiographical censorship trigger from assumptions about documentary method: this is scripted fiction.",
      "Preserve the source boundary around exact budget, financing shares and recoupment.",
      "Preserve the source boundary around complete lighting, grade/color management and mastering lineage.",
      "Close the case only when one unique scenario, a complete 17-area Film Study, one PV record and the Cannes corrective audit all agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock Cannes Jury Prize obligation", player_task: "Use the award to establish selection priority without treating it as technical evidence." },
      { id: "reconciliation", label: "Prove Ahed's Knee identity is absent", player_task: "Search Atlas, Film Study, PV, branch and PR history before materializing." },
      { id: "story_origin", label: "Map the autobiographical trigger", player_task: "Separate the 2018 censorship encounter and maternal loss from later production execution." },
      { id: "schedule", label: "Plan an 18-day shoot", player_task: "Treat compressed time as a hard production constraint." },
      { id: "schedule_to_form", label: "Convert time pressure into form", player_task: "Avoid neutral coverage and prioritize risky, essential images." },
      { id: "arava", label: "Build the desert production geography", player_task: "Retrace the emotional geography of Arava without inventing a detailed location schedule." },
      { id: "camera_method", label: "Turn the camera into an actor", player_task: "Use intervention, whip movement and destabilized framing while keeping equipment details open." },
      { id: "performance", label: "Stage physical confrontation and fragility", player_task: "Coordinate Pollak/Fibak performance with an intrusive camera rather than conventional coverage." },
      { id: "production_design", label: "Shape the desert and institutional spaces", player_task: "Use Consigny's credit while bounding unsourced art-department methods." },
      { id: "costume_makeup", label: "Maintain character continuity", player_task: "Use Zeggaï/Yehonatan credits without inventing process detail." },
      { id: "editing", label: "Cut a deliberately unstable film", player_task: "Use Feller's edit credit while leaving technical edit infrastructure unresolved." },
      { id: "sound", label: "Build the sourced sound layer", player_task: "Use credited sound personnel but do not fabricate recording or mix topology." },
      { id: "effects", label: "Bound VFX claims", player_task: "Acknowledge Cohen/Chelet credits without inventing shot counts or methods." },
      { id: "coproduction", label: "Map the international production network", player_task: "Separate countries and companies from unsourced financing shares." },
      { id: "format_boundary", label: "Preserve format evidence", player_task: "Use 2.39:1 exhibition metadata without inferring acquisition format." },
      { id: "post_boundary", label: "Freeze unsupported post detail", player_task: "Keep grade, color management, mastering and detailed VFX/audio pipeline unresolved." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Map source-verified facts and research-pending boundaries across the coverage contract." },
      { id: "production_verification", label: "Close the Cannes corrective case", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenAhedsKneeExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenAhedsKneeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_aheds_knee_verified",
      source: { list_id: "manual_chapter_nineteen_aheds_knee_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
