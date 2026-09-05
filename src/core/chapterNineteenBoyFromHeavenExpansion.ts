import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenBoyFromHeavenExpansionDefinitions = [
  {
    id: "scenario_boy_from_heaven_2022",
    title: "Boy from Heaven",
    originalTitle: "Walad Min Al Janna",
    aliases: ["Cairo Conspiracy", "Walad min al-Janna", "La Conspiration du Caire"],
    year: 2022,
    productionYear: 2022,
    principalPhotographyYear: 2021,
    titleType: "Movie",
    runtimeMins: 126,
    directors: ["Tarik Saleh"],
    genres: ["Drama", "Thriller"],
    sourceId: "festival_cannes_walad_min_al_janna_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/walad-min-al-janna/",
    scenarioType: "award_priority_cannes_2022_best_screenplay_2021_principal_photography_covid_delay_istanbul_suleymaniye_alexa_lf_4k_arriraw_single_scorpio_40mm_scope_documentary_proximity_runtime_versions_bounded",
    premise: "Build Boy from Heaven / Walad Min Al Janna as a new Chapter 19 source-first Production Case only after a tree-wide reuse audit proves that no existing scenario, Film Study or Production Verification identity exists under Boy from Heaven, Walad Min Al Janna or Cairo Conspiracy. Festival de Cannes locks the film to the 2022 Competition and Best Screenplay award, credits Tarik Saleh as director and screenwriter, Pierre Aïm as cinematographer, Roger Rosenberg as production designer and Theis Schmidt as editor, and lists 126 minutes. Cannes labels the year of production 2022, while Atmo and Film i Väst separately document principal photography in 2021; this case preserves those records rather than collapsing festival production-year metadata into shoot chronology. Producer Kristina Åberg states that Covid was the largest production challenge and postponed the film by a year; she describes a summer shoot largely in Istanbul at the Süleymaniye Mosque and surroundings, with outdoor filming aided by Turkey's vaccination programme. Film i Väst records the production window as 25 June to 20 September 2021 across Turkey, Gothenburg and Cairo, while Atmo describes the film as largely shot in Istanbul and specifically records Turkey and Gothenburg. These geography records are kept with provenance instead of forcing an invented single-country account. Atmo documents a €6.5 million budget and the Sweden/France/Finland/Denmark coproduction network. ARRI identifies Pierre Aïm's camera as the ALEXA LF, and Aïm's direct Cannes cinematography survey records 4K ARRIRAW acquisition and an unusually strict one-lens system: a single 40mm scope Scorpio lens, chosen to keep the camera close to Adam and approach the film with a documentary-like proximity. Saleh independently describes the one-40mm rule as the basis for intimacy and spatial pressure. Danish Film Institute and European Film Academy records lock Theis Schmidt editing, Krister Linder music, Denise Östholm costume, Pia Cornelius makeup, Fredrik Jonsäter and Pontus Borg sound, and Peter Hjorth-led VFX credits. Runtime records vary across reputable catalogues, so the playable scenario uses Cannes/DFI's 126-minute record while preserving shorter 120/121/125-minute listings as catalogue/version discrepancies. Do not infer exact shooting-day count from the production window, department-by-department Covid rules, complete camera-body count, complete lens rehousing/serial detail, filtration, exposure settings, on-set monitoring, storage/data-management topology, complete lighting package, production-sound equipment chain, editorial software/storage, grade system, VFX shot census, DCP/audio mastering lineage, financing percentages, recoupment or legal terms where the source set does not establish them.",
    requiredChoicesSeed: {
      screenplay: ["tarik_saleh_writer_director", "cannes_best_screenplay_selection_obligation", "al_azhar_power_structure_fiction", "award_not_technical_evidence"],
      chronology: ["cannes_production_year_2022", "principal_photography_2021", "covid_one_year_delay", "chronology_provenance_boundary"],
      locations: ["istanbul_primary_base", "suleymaniye_mosque", "turkey_gothenburg_cairo_record", "al_azhar_recreated_not_cairo_assumption"],
      production: ["atmo_european_coproduction", "budget_6_5m_euro", "covid_delay", "outdoor_shooting_constraint", "finance_shares_unresolved"],
      camera: ["pierre_aim", "arri_alexa_lf", "4k_arriraw", "single_scorpio_40mm_scope", "documentary_proximity"],
      design: ["roger_rosenberg", "institutional_space_reconstruction", "location_design_boundary"],
      post: ["theis_schmidt_edit", "krister_linder_music", "fredrik_jonsater_pontus_borg_sound", "peter_hjorth_vfx", "post_infrastructure_unresolved"],
      runtime: ["playable_126_cannes_dfi", "shorter_catalogue_versions_preserved", "runtime_discrepancy_not_harmonized"],
      themes: ["film_history", "2022", "principal_photography_2021", "cannes_best_screenplay", "swedish_transnational_cinema", "istanbul", "covid_production", "single_lens_system", "chapter19"]
    },
    learningGoals: [
      "Explain why Boy from Heaven must be materialized only after reuse reconciliation checks Boy from Heaven, Walad Min Al Janna and Cairo Conspiracy aliases.",
      "Use the Cannes 2022 Best Screenplay award as a selection obligation rather than as production evidence.",
      "Identify Tarik Saleh as both director and screenwriter without treating those roles as interchangeable production departments.",
      "Preserve Cannes' production-year 2022 record separately from documented principal photography in 2021.",
      "Explain that Covid delayed the production by a year based on producer Kristina Åberg's direct account.",
      "Use Film i Väst's 25 June to 20 September 2021 record as a production window without converting it into an unsupported shooting-day count.",
      "Identify Istanbul as the primary sourced production base without pretending the entire film was photographed in one city.",
      "Identify the Süleymaniye Mosque and surroundings as a principal sourced stand-in for the Al-Azhar setting.",
      "Preserve Film i Väst's Turkey/Gothenburg/Cairo production-geography record alongside Atmo's Turkey/Gothenburg account instead of erasing provenance differences.",
      "Explain how Egypt-set production geography and actual shooting geography must remain distinct.",
      "Identify Kristina Åberg and Fredrik Zander as producers and Atmo as the lead production company.",
      "Use Atmo's €6.5 million budget record without inventing financing percentages or recoupment structure.",
      "Map Memento, Bufo, Film i Väst, SVT, ARTE France Cinéma, Post Control and Final Cut for Real by documented participation without inventing ownership shares.",
      "Identify Pierre Aïm as cinematographer.",
      "Identify the ARRI ALEXA LF as the sourced camera platform.",
      "Identify 4K ARRIRAW as the sourced acquisition format from Aïm's direct Cannes cinematography survey.",
      "Identify the Scorpio 40mm scope lens as the single-lens production rule without inventing a larger lens package.",
      "Explain why the single 40mm lens supported intimacy and kept the audience close to Adam's discoveries.",
      "Explain Aïm's documentary-like camera premise as an aesthetic-production method, not as a claim that the fiction is documentary.",
      "Distinguish close observational camera behavior from unsupported assumptions about handheld percentage, stabilization or camera-support hardware.",
      "Identify Roger Rosenberg as production designer and connect architectural reconstruction to the location system only where sources support it.",
      "Identify Denise Östholm as costume designer and Pia Cornelius in hair/makeup without inventing department processes.",
      "Identify Theis Schmidt as editor while leaving editing software, workstation, proxy and storage topology unresolved.",
      "Identify Fredrik Jonsäter and Pontus Borg in the sound credit layer without inventing recorder, microphone, wireless, ADR or Foley systems.",
      "Identify Krister Linder as composer without reconstructing an unsupported recording or mix workflow.",
      "Acknowledge Peter Hjorth-led VFX credits without inventing a VFX shot census or technique-by-shot reconstruction.",
      "Use Cannes and DFI's 126-minute record for the playable scenario while preserving shorter institutional/festival catalogue listings as version metadata.",
      "Keep exact camera count, filters, exposure strategy, monitoring and complete lighting equipment unresolved where sources do not establish them.",
      "Keep media, offload, checksum, backup and archive topology unresolved beyond the sourced 4K ARRIRAW acquisition statement.",
      "Keep exact daily call schedule and department-by-department Covid protocol ledger unresolved.",
      "Keep post-production facility topology, grading system, mastering transforms and DCP/audio lineage unresolved.",
      "Separate political/religious subject matter from production evidence; narrative content does not prove how a scene was made.",
      "Treat transnational public funding and coproduction as documented institutional structure while keeping partner economics bounded.",
      "Complete all 17 Film Study areas with explicit source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one unique scenario, one complete Film Study, one PV record and an exact one-film corrective-queue reduction all agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes Best Screenplay obligation", player_task: "Use the 2022 prize to establish selection priority without treating it as production evidence." },
      { id: "reconciliation", label: "Search all title identities", player_task: "Check Boy from Heaven, Walad Min Al Janna and Cairo Conspiracy before materializing." },
      { id: "chronology", label: "Separate 2021 photography from 2022 production-year metadata", player_task: "Preserve both source-backed dates with provenance." },
      { id: "covid_delay", label: "Model the one-year postponement", player_task: "Treat Covid as a documented production constraint without inventing a full protocol ledger." },
      { id: "production_window", label: "Lock the 2021 production window", player_task: "Use 25 June to 20 September as a sourced window, not a shooting-day total." },
      { id: "location_substitution", label: "Build Cairo through Istanbul-led production", player_task: "Separate fictional Al-Azhar geography from the sourced Süleymaniye/Istanbul production base." },
      { id: "transnational_geography", label: "Preserve Turkey, Gothenburg and Cairo records", player_task: "Keep institutional location records distinct rather than flattening them." },
      { id: "camera_platform", label: "Choose ALEXA LF", player_task: "Use the sourced camera platform without inventing body count or sensor-mode detail." },
      { id: "acquisition", label: "Record in 4K ARRIRAW", player_task: "Use Aïm's sourced acquisition statement while leaving storage/data topology unresolved." },
      { id: "single_lens", label: "Commit to one Scorpio 40mm scope lens", player_task: "Build the visual system around the sourced one-lens rule." },
      { id: "camera_method", label: "Stay close to Adam", player_task: "Translate the documentary-like proximity principle into fiction coverage without relabeling the film as documentary." },
      { id: "production_design", label: "Reconstruct institutional space", player_task: "Coordinate Rosenberg's design role with location substitution while keeping undocumented builds open." },
      { id: "costume_makeup", label: "Map visible character departments", player_task: "Use sourced costume and hair/makeup credits without inventing process." },
      { id: "editing", label: "Shape the political-thriller viewpoint", player_task: "Use Schmidt's edit credit while leaving editorial infrastructure unresolved." },
      { id: "sound", label: "Map the sound team", player_task: "Use Jonsäter and Borg's sourced credits without fabricating equipment or routing." },
      { id: "music", label: "Map Krister Linder's score", player_task: "Keep music authorship separate from unsupported recording or mix details." },
      { id: "effects", label: "Bound the VFX layer", player_task: "Acknowledge sourced VFX supervision without inventing shot counts or methods." },
      { id: "finance_rights", label: "Map the €6.5m coproduction without invented shares", player_task: "Separate documented companies, funds and broadcasters from unknown economic percentages." },
      { id: "runtime_boundary", label: "Preserve catalogue runtime differences", player_task: "Use 126 minutes for play while retaining shorter source records as version metadata." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make confidence and unresolved boundaries explicit across the coverage contract." },
      { id: "production_verification", label: "Close Boy from Heaven", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenBoyFromHeavenExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenBoyFromHeavenExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_boy_from_heaven_verified",
      source: { list_id: "manual_chapter_nineteen_boy_from_heaven_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
