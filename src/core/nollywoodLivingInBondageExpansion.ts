import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const nollywoodLivingInBondageExpansionDefinitions = [
  {
    id: "scenario_living_in_bondage_1992",
    title: "Living in Bondage",
    originalTitle: "Living in Bondage",
    year: 1992,
    titleType: "Movie",
    runtimeMins: 163,
    directors: ["Chris Obi Rapu"],
    genres: ["Drama"],
    premise: "Build Living in Bondage as a source-bound 1992 Nigerian video-film production case that closes the documented Nollywood industry-system gap through concrete financing, capture, distribution and audience evidence. Academic research identifies Okechukwu Ogunjiofor as story originator/writer-producer, Kenneth Nnebue as the financier and informal-sector video marketer, and Chris Obi Rapu as director. SAGE research reports an approximately 150,000-naira production cost, Super VHS capture and a deliberate straight-to-home-video model; preserve the figure as a cited historical estimate rather than an audited ledger. UNESCO records the wider economic context in which celluloid production had become prohibitively difficult, Living in Bondage was shot on video and circulated through the emerging home-video circuit, and the success helped trigger a cheap popular production system later called Nollywood. Oxford research places the film's production inside West African informal-sector marketing rather than a conventional vertically integrated studio model. BFI identifies VHS as the accessible technology of the period and treats the film as Nollywood's first major success. Keep production, financing, technology and distribution evidence distinct: Nnebue's cassette/marketing role does not prove unsupported ownership terms; Super VHS does not justify inventing camera, lens, lighting, tape-stock, edit-suite or sound-hardware specifications; and later industry scale does not retroactively establish the film's original crew size or exact sales. The production's industrial importance is the documented combination of low-cost video capture, private/informal finance, marketer-led duplication and distribution, and domestic home viewing. Do not use awards, prestige or nationality alone as the admission rationale.",
    sourceId: "living_in_bondage_1992_nollywood_admission",
    sourceUrl: "https://journals.sagepub.com/doi/10.1177/21582440211032620",
    scenarioType: "nollywood_low_budget_super_vhs_informal_finance_home_video_distribution",
    requiredChoicesSeed: {
      screenplay: ["ogunjiofor_story_and_writer_producer_role", "obi_rapu_direction_distinct", "industry_context_not_plot_proxy"],
      camera: ["super_vhs_capture_only", "video_as_cost_response", "no_invented_camera_lens_or_lighting_specs"],
      editing: ["straight_to_home_video_delivery", "duplication_distribution_distinct_from_editing", "no_invented_post_hardware"],
      sound: ["no_invented_sound_capture_or_mix_specs", "home_video_delivery_not_sound_format_proof"],
      themes: ["film_history", "1992", "nigeria", "nollywood", "living_in_bondage", "kenneth_nnebue", "okechukwu_ogunjiofor", "chris_obi_rapu", "informal_finance", "super_vhs", "home_video", "video_distribution", "audience_system"],
    },
    learningGoals: [
      "Explain why Living in Bondage qualifies as a representation-gap admission through a concrete Nigerian production and distribution system rather than nationality or prestige.",
      "Keep Okechukwu Ogunjiofor's story/writer-producer role, Kenneth Nnebue's financing/marketing role and Chris Obi Rapu's directing role distinct.",
      "Use the cited approximately 150,000-naira cost as a historical research estimate, not as an audited production ledger.",
      "Connect Super VHS capture to the cost and infrastructure conditions that made video a practical alternative to celluloid without inventing unsupported camera or post specifications.",
      "Model straight-to-home-video distribution and informal video marketing as central industrial infrastructure rather than as an afterthought to theatrical release.",
      "Distinguish title-specific 1992 evidence from the much larger Nollywood production volume that developed later.",
      "Treat audience demand and home viewing as distribution-system evidence while avoiding unsupported exact sales totals.",
      "Do not infer ownership, recoupment, crew size, schedule, camera model, lens, lighting, edit hardware, sound hardware or duplication quantities absent from the reviewed sources.",
    ],
    phases: [
      { id: "package_and_finance", label: "Assemble a privately financed Nigerian video feature", player_task: "Keep Ogunjiofor's originating/producing role, Nnebue's financing/marketing role and Obi Rapu's directing role distinct; use the cited budget only as a historical estimate." },
      { id: "choose_video_infrastructure", label: "Choose video under severe celluloid-cost constraints", player_task: "Use the documented Super VHS decision as an industrial response to cost and access; leave unsupported camera, lens, lighting and tape-stock details unset." },
      { id: "produce_with_compact_resources", label: "Produce within the early video-film resource model", player_task: "Treat limited resources as production evidence without inventing exact crew size, schedule or location logistics." },
      { id: "post_and_duplicate", label: "Prepare the feature for home-video circulation", player_task: "Keep editorial work separate from cassette duplication and distribution; do not reverse-engineer undocumented post hardware or sound specifications." },
      { id: "market_and_distribute", label: "Distribute through marketer-led home-video channels", player_task: "Model informal video marketing and straight-to-home circulation as the core release infrastructure rather than assuming a conventional theatrical window." },
      { id: "audience_and_industry_effect", label: "Separate the 1992 case from the later Nollywood boom", player_task: "Use documented market-opening and audience effects as historical consequences while keeping later industry scale downstream from the original production." },
    ],
  },
] as const;

export function mergeNollywoodLivingInBondageExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of nollywoodLivingInBondageExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_nollywood_representation_admission_verified",
      source: { list_id: "manual_nollywood_living_in_bondage_representation_admission_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
