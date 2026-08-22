import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenThePianoExpansionDefinitions = [
  {
    id: "scenario_the_piano_1993",
    title: "The Piano",
    originalTitle: "The Piano",
    year: 1993,
    titleType: "Movie",
    runtimeMins: 121,
    directors: ["Jane Campion"],
    genres: ["Drama", "Romance"],
    premise: "Build The Piano as a 1993 New Zealand-Australia-France production whose financing, New Zealand location work, visual design, performance, music and cultural representation remain separate evidence layers. Producer Jan Chapman told BFI that early attempts to finance the film through America failed; Pierre Rissient then directed her toward Francis Bouygues and Ciby 2000, which financed the project and gave Campion substantial creative freedom. Chapman retrospectively described a budget of about $9 million; retain that as her reported figure without assuming currency conversion, audited cost categories or present-value equivalence. NFSA identifies Saddleback Productions, Jan Chapman as producer, Alain Depardieu as executive producer, Jane Campion as writer/director and Michael Nyman as composer. NZ On Screen additionally confirms Stuart Dryburgh cinematography, Veronika Jenet editing, Andrew McAlpine production design and Janet Patterson costume design. Chapman describes Campion as highly prepared and making extensive storyboards, and recalls international casting including Holly Hunter after a screen test challenged the script's earlier physical conception of Ada. A contemporaneous Māori television report from the set documents filming at Karekare Beach, Māori extras, Māori adviser Waihoroi Shortland, ta moko artist Gordon Hatfield and a long makeup application for Pete Smith. Use this as evidence that Māori performers and advisers were present in the production process, not as proof that every representation choice was culturally authoritative or as a present-day moko/costume recipe. Current production involving Māori history, language, taonga, moko or representation should involve appropriate Māori cultural authority, consultation, consent, attribution and applicable tikanga/IP protocols. The film's sexual bargaining, nudity and violence are historical dramatic material; contemporary staging requires explicit performer consent, appropriate intimacy coordination/closed-set practice, safeguarding and stunt/special-effects controls where relevant. Do not invent camera bodies, lenses, film stocks, exposure, lighting ratios, weather rigs, piano transport/rigging, beach access procedures, sound hardware, lab chemistry or a full shooting schedule absent from reviewed sources. Runtime records vary: Cannes and NFSA give 121 minutes while BFI gives 120; use 121 for gameplay and preserve 120/121 as institutional/version variance. Cannes and Academy success are downstream reception evidence, not proof of production technique.",
    sourceId: "cannes_the_piano_1993",
    sourceUrl: "https://www.festival-cannes.com/f/the-piano/",
    scenarioType: "transnational_new_zealand_period_drama_ciby2000_location_design_performance_music",
    requiredChoicesSeed: {
      screenplay: ["campion_original_screenplay", "female_desire_and_power_without_reception_shortcut", "historical_setting_not_documentary_truth"],
      camera: ["stuart_dryburgh_cinematography", "new_zealand_location_image_system", "no_invented_camera_lens_stock_exposure_or_lab"],
      editing: ["veronika_jenet_editorial_authorship", "storyboard_preparation_distinct_from_final_edit", "festival_and_restoration_downstream"],
      sound: ["michael_nyman_music_as_separate_system", "ada_piano_performance_and_music_not_generic_sound_design", "no_invented_recording_or_mix_hardware"],
      themes: ["film_history", "1990s", "the_piano", "jane_campion", "jan_chapman", "ciby_2000", "saddleback_productions", "new_zealand", "karekare_beach", "stuart_dryburgh", "andrew_mcalpine", "janet_patterson", "veronika_jenet", "michael_nyman", "maori_representation", "cultural_consultation_boundary", "intimacy_consent_boundary", "runtime_variance"],
    },
    learningGoals: [
      "Model The Piano as a New Zealand-Australia-France production rather than collapsing its national, financing and location layers into one label.",
      "Distinguish Ciby 2000 financing/creative support from Saddleback Productions and Jan Chapman's producing role.",
      "Preserve Chapman's approximately $9 million budget recollection as a source-framed figure without invented currency normalization or audited categories.",
      "Understand how failed U.S. financing attempts and Pierre Rissient's connection to Francis Bouygues redirected the project's finance path.",
      "Keep Jane Campion's writing/directing and extensive storyboard preparation distinct from final cinematography, design and editing authorship.",
      "Keep Stuart Dryburgh cinematography, Andrew McAlpine production design, Janet Patterson costume and Veronika Jenet editing as separate craft systems.",
      "Treat Holly Hunter's screen test and casting against an earlier physical conception of Ada as evidence of iterative casting rather than deterministic script execution.",
      "Keep Michael Nyman's score and Ada's piano-centered performance world distinct from unsourced production-sound or mix-hardware claims.",
      "Use Karekare Beach as a documented location without inventing access, weather, transport or piano-rigging procedures.",
      "Use the contemporaneous Marae report to document Māori extras, adviser Waihoroi Shortland and ta moko artist Gordon Hatfield without treating presence as blanket cultural authorization.",
      "Require appropriate Māori cultural authority, consultation, consent, attribution and tikanga/IP practice for comparable contemporary representation.",
      "Treat historical moko/makeup reporting as evidence about the 1993 set, not as a reusable makeup or cultural-property recipe.",
      "Stage sexual bargaining, nudity and intimacy today with explicit performer consent, appropriate intimacy coordination/closed-set practice and safeguarding.",
      "Stage violence with qualified stunt/special-effects supervision and contemporary risk controls rather than inferring methods from the finished film.",
      "Preserve 120/121-minute institutional variance and use 121 minutes canonically rather than inventing one universal version length.",
      "Keep Cannes/Academy recognition downstream from production evidence and never use awards as proof of how a shot, performance or design element was made.",
      "Do not infer camera bodies, lenses, stocks, exposure, lighting ratios, sound hardware, lab chemistry, weather rigs or transport systems absent from sources.",
    ],
    phases: [
      { id: "treatment_and_finance", label: "Turn a strong treatment into a transnational finance package", player_task: "Trace failed U.S. approaches, Rissient's intervention and Ciby 2000 support while keeping finance roles and the reported $9m figure source-bounded." },
      { id: "screenplay_and_storyboards", label: "Develop Campion's screenplay through intensive visual preparation", player_task: "Use Campion's documented storyboard preparation without assuming that every final shot was fixed before production." },
      { id: "casting_and_performance", label: "Cast for character essence rather than literal physical preconception", player_task: "Model Hunter's successful screen test and ensemble casting while keeping performer consent and sensitive-material safeguards explicit." },
      { id: "cultural_context_and_advice", label: "Work with Māori performers and cultural expertise without claiming blanket authority", player_task: "Document Shortland, Hatfield and Māori extras while requiring contemporary consultation, consent, attribution and tikanga/IP protocols for analogous work." },
      { id: "locations_and_world", label: "Build the colonial New Zealand world through location and design", player_task: "Use Karekare Beach and New Zealand production context with McAlpine's design, but do not invent beach access, weather, transport or rigging procedures." },
      { id: "camera_and_image", label: "Coordinate Dryburgh's cinematography with Campion's visual plan", player_task: "Preserve cinematography authorship and location-image intent while leaving camera body, lenses, stock, exposure and lab details unset without sources." },
      { id: "costume_makeup", label: "Use Patterson's costume system and historically documented makeup with cultural boundaries", player_task: "Keep costume authorship distinct and treat reported moko application as historical evidence, not a modern cultural/makeup recipe." },
      { id: "music_and_piano", label: "Make piano performance and Nyman's score structural rather than decorative", player_task: "Keep music authorship and character performance central without inventing recording-session, playback, microphone or mix-chain details." },
      { id: "editing", label: "Shape the final film through Jenet's editorial system", player_task: "Keep final editing distinct from storyboarding, shooting and later remaster/re-release versions." },
      { id: "intimacy_and_violence", label: "Handle erotic and violent material with present-day performer safeguards", player_task: "Require explicit consent, intimacy coordination/closed-set practice, qualified stunt/special-effects supervision and risk controls; historical depiction is not a staging recipe." },
      { id: "release_versions_legacy", label: "Separate original production from version and awards history", player_task: "Use 121 minutes canonically, retain BFI's 120-minute record, and keep Cannes/Academy success and later restorations downstream." },
    ],
  },
] as const;

export function mergeChapterSeventeenThePianoExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenThePianoExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_the_piano_verified",
      source: { list_id: "manual_chapter_seventeen_the_piano_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
