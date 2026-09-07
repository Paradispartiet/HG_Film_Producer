import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenGrandTourExpansionDefinitions = [
  {
    id: "scenario_grand_tour_2024",
    title: "Grand Tour",
    originalTitle: "Grand Tour",
    aliases: ["Grand Tour (2024)"],
    year: 2024,
    productionYear: 2024,
    titleType: "Movie",
    runtimeMins: 129,
    directors: ["Miguel Gomes"],
    genres: ["Fiction"],
    sourceId: "festival_cannes_grand_tour_2024",
    sourceUrl: "https://www.festival-cannes.com/en/f/grand-tour/",
    scenarioType: "award_priority_cannes_2024_best_director_16mm_asia_location_studio_split_remote_direction_black_and_white_hybrid",
    premise: "Build Grand Tour as one genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR checks and tree-wide reuse checks prove no pre-existing canonical scenario, Film Study or Production Verification identity under the title or plausible scenario IDs. Festival de Cannes locks the 2024 Competition film, 129-minute runtime, Miguel Gomes direction, Best Director award, screenplay by Mariana Ricardo, Telmo Churro, Maureen Fazendeiro and Gomes, cinematography by Rui Poças, Sayombhu Mukdeeprom and Gui Liang, production design by Thales Junqueira and Marcos Pedrozo, editing by Telmo Churro and Pedro Filipe Marques, and sound by Vasco Pimentel and Kelan Li. Uma Pedra no Sapato independently identifies the Portugal/France/Italy fiction production as 16mm and supplies the production, costume, makeup, hair, SFX, sound-design/mix, color and producer chain. Gomes' Film Comment interview documents a deliberately split production method: location material across Asia was shot in a 2020 journey interrupted by COVID-19 and a remotely directed 2022 phase, including a Chinese crew directed from Lisbon via live feeds, while the actors were always intended to be photographed separately on soundstages. Rui Poças documents that he photographed the narrative actor material in two large Lisbon studios and three larger Rome studios on black-and-white 16mm and used only incandescent-filament studio lighting inspired by Hollywood studio practice of the 1930s and 1940s. Cannes separately describes the project beginning with a five-week Southeast Asia journey in early 2020 with a 16mm camera, then continuing remotely during the pandemic and finally recreating Asia in studio without digital trickery. The Match Factory locks the 2024 production companies and principal craft credits plus DCP and 5.1 delivery, while leaving its aspect-ratio field unresolved. Do not infer exact camera bodies, lens models, film stocks, laboratory/scan resolution, exposure settings, shutter, filtration, complete lighting fixture counts, exact sound-recording hardware, editorial software, complete music/score provenance, VFX shot counts, budget/financing percentages, insurance, exact studio shooting dates, complete location itinerary or final aspect ratio where the locked sources do not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2024_best_director", "competition_selection_obligation_not_technical_evidence"],
      reconciliation: ["grand_tour", "grand_tour_2024", "canonical_identity_locked_by_definition", "new_identity_required_after_negative_reuse_check"],
      chronology: ["asia_location_phase_2020", "remote_location_phase_2022", "studio_actor_phase_after_location_material", "exact_studio_dates_unresolved"],
      production: ["uma_pedra_no_sapato", "vivo_film", "shellac", "cinema_defacto", "filipa_reis_producer", "joao_miller_guerra_executive_producer"],
      finance: ["named_public_support_and_coproduction_network", "total_budget_unresolved", "financing_percentages_unresolved", "insurance_recoupment_unresolved"],
      locations: ["asia_multi_country_location_material", "china_remote_direction", "two_lisbon_studios", "three_rome_studios", "complete_itinerary_and_call_sheet_unresolved"],
      screenplay: ["mariana_ricardo", "telmo_churro", "maureen_fazendeiro", "miguel_gomes", "script_developed_in_dialogue_with_location_images"],
      directing: ["miguel_gomes", "present_tense_location_research", "remote_live_feed_direction", "studio_reconstruction"],
      camera: ["rui_pocas", "sayombhu_mukdeeprom", "gui_liang", "16mm", "exact_camera_bodies_unresolved"],
      lenses: ["lens_models_unresolved", "focal_length_map_unresolved", "filtration_unresolved"],
      lighting: ["rui_pocas_studio_unit", "incandescent_filament_only", "1930s_1940s_hollywood_studio_reference", "fixture_counts_power_distribution_unresolved"],
      performance: ["goncalo_waddington", "crista_alfaiate", "actors_on_soundstages", "location_images_and_actor_worlds_deliberately_separated"],
      design: ["thales_junqueira", "marcos_pedrozo", "babi_targino_scenography", "artificial_asia_studio_reconstruction", "complete_build_prop_ledger_unresolved"],
      costume_makeup: ["silvia_grabowski", "emmanuelle_fevre", "daniela_tartari", "continuity_and_sourcing_records_unresolved"],
      editing: ["telmo_churro", "pedro_filipe_marques", "location_and_studio_temporal_intercutting", "software_storage_conform_unresolved"],
      sound: ["vasco_pimentel", "li_kelan", "miguel_martins", "dcp_5_1_delivery", "production_hardware_and_mix_topology_unresolved"],
      music: ["music_score_workflow_unresolved_in_locked_sources"],
      effects: ["elio_terribili_sfx_coordinator", "studio_reconstruction_without_digital_trickery_cannes_account", "complete_practical_vfx_inventory_unresolved"],
      color_post: ["yov_moor_colorist", "black_and_white_16mm_actor_material", "lab_scan_di_color_pipeline_unresolved"],
      format: ["129_minutes", "16mm_production", "dcp_delivery", "5_1_sound", "final_aspect_ratio_unresolved"],
      themes: ["film_history", "2024", "cannes_best_director", "miguel_gomes", "16mm", "black_and_white", "asia", "remote_direction", "studio_reconstruction", "chapter19"]
    },
    learningGoals: [
      "Explain why Grand Tour requires one new canonical identity only after title and plausible-ID reuse checks are negative.",
      "Use the Cannes Best Director award as a corrective-selection obligation rather than technical evidence.",
      "Separate the film's 2024 institutional record from its multi-year 2020/2022 location-production chronology.",
      "Explain the 2020 Asia journey and the pandemic interruption without inventing a complete itinerary.",
      "Explain the 2022 remotely directed phase and the China live-feed workflow from Gomes' own account.",
      "Distinguish Sayombhu Mukdeeprom's Asian location work, Gui Liang's China work and Rui Poças' actor/studio photography.",
      "Identify the production as 16mm without inventing camera body, lens or stock details.",
      "Identify Rui Poças' black-and-white 16mm actor material in Lisbon and Rome studios.",
      "Use Poças' incandescent-filament-only lighting strategy without manufacturing fixture counts or exposure data.",
      "Relate the 1930s/1940s Hollywood studio-lighting reference to the deliberately artificial 1917 fiction world.",
      "Explain how present-day Asian location images and studio-shot historical fiction are joined through editing rather than hidden as one homogeneous production layer.",
      "Identify Thales Junqueira and Marcos Pedrozo as production designers and Babi Targino as scenographer.",
      "Keep complete set, prop, construction and dressing ledgers unresolved.",
      "Identify Sílvia Grabowski, Emmanuelle Fèvre and Daniela Tartari across costume, makeup and hair while keeping detailed continuity records unresolved.",
      "Identify Telmo Churro and Pedro Filipe Marques as editors without inventing software, storage or conform architecture.",
      "Identify Vasco Pimentel and Li Kelan as sound engineers and Miguel Martins as sound designer/mixer without inventing recorder or microphone packages.",
      "Use The Match Factory's DCP and 5.1 delivery record while leaving its unresolved aspect-ratio field unresolved.",
      "Identify Yov Moor as colorist while keeping laboratory, scan resolution, DI and color-management details open.",
      "Treat Cannes' description of studio recreation without digital trickery as a bounded production claim, not proof that the entire film contains no digital post work.",
      "Complete all 17 Film Study areas with explicit source confidence or unresolved boundaries.",
      "Close the Cannes obligation only when one scenario, one Film Study, one PV record and the exact global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes obligation", player_task: "Use Best Director only as the corrective-selection gate." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search title variants and plausible scenario IDs before authoring." },
      { id: "chronology", label: "Separate the production phases", player_task: "Keep 2020, 2022 and studio work distinct without inventing dates." },
      { id: "production_structure", label: "Map the transnational production", player_task: "Keep producer, co-producer and support roles distinct from unsupported finance percentages." },
      { id: "location_research", label: "Build from the Asia journey", player_task: "Use the five-week 2020 journey as a bounded source-first production fact." },
      { id: "remote_direction", label: "Direct across closed borders", player_task: "Model the Lisbon-to-China live-feed workflow without inventing technology brands." },
      { id: "screenplay", label: "Write after confronting location images", player_task: "Connect the four credited writers to the documented image-first development process." },
      { id: "camera_units", label: "Keep the three cinematographers distinct", player_task: "Map Poças, Mukdeeprom and Liang to sourced production strata." },
      { id: "format", label: "Lock 16mm provenance", player_task: "Use the producer and cinematographer evidence without guessing camera, lenses or stock." },
      { id: "lighting", label: "Recreate historical studio light", player_task: "Use incandescent filament and 1930s/1940s references without inventing photometrics." },
      { id: "studios", label: "Build fiction in Lisbon and Rome", player_task: "Keep two Lisbon and three Rome studios as sourced scale evidence." },
      { id: "production_design", label: "Construct an artificial Asia", player_task: "Map credited design/scenography while keeping the full build ledger open." },
      { id: "performance", label: "Stage actors apart from location footage", player_task: "Treat the soundstage actor world as a deliberate structural choice." },
      { id: "costume_makeup", label: "Track period surfaces", player_task: "Use credited costume, makeup and hair roles without fabricating continuity systems." },
      { id: "editing", label: "Join separate times and places", player_task: "Use the documented split method and editor credits without inventing software." },
      { id: "sound", label: "Map production and final sound", player_task: "Use credited sound roles and 5.1 delivery while leaving hardware topology unresolved." },
      { id: "effects", label: "Bound the effects claim", player_task: "Use Cannes' no-digital-trickery studio account narrowly and preserve unknown post effects." },
      { id: "color_post", label: "Preserve black-and-white provenance", player_task: "Use Yov Moor and Poças' 16mm account without inventing scan or DI settings." },
      { id: "delivery", label: "Lock documented delivery", player_task: "Use DCP and 5.1 while leaving final aspect ratio unresolved." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Expose source confidence and unresolved boundaries." },
      { id: "production_verification", label: "Close Grand Tour", player_task: "Require one unique scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenGrandTourExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenGrandTourExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_grand_tour_verified",
      source: { list_id: "manual_chapter_nineteen_grand_tour_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
