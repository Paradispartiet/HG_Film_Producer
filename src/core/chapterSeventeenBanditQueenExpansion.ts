import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenBanditQueenExpansionDefinitions = [
  {
    id: "scenario_bandit_queen_1994",
    title: "Bandit Queen",
    originalTitle: "Bandit Queen",
    year: 1994,
    titleType: "Movie",
    runtimeMins: 119,
    directors: ["Shekhar Kapur"],
    genres: ["Biography", "Crime", "Drama"],
    premise: "Build Bandit Queen as a 1994 India-UK Film Four International/Kaleidoscope production whose biography-to-screen adaptation, Chambal-location production, performance system, cinematography/editing collaboration and contested relationship to the living subject must remain separate evidence layers. BFI records Shekhar Kapur as director, Bobby Bedi as producer, Mala Sen as writer, Seema Biswas in the lead, United Kingdom/India production and a 120-minute running time. A contemporary India Now! retrospective records Film Four International/Kaleidoscope, producer Sundeep S. Bedi, Mala Sen screenplay, Ashok Mehta cinematography, Renu Saluja editing, Ashok Bhagat art direction, Robert Taylor and Tom Lewiston sound, Nusrat Fateh Ali Khan music, Hindi, colour, 35mm and 119 minutes. Danish Film Institute independently records Channel Four Films and Kaleidoscope and 119 minutes, but lists Ketan Mehta for photography. Preserve that DFI cinematography-credit anomaly as catalogue variance rather than silently overwriting it: the contemporary retrospective, Kapur's own later first-person recollections and other film-specific records converge on Ashok Mehta as director of photography. Kapur later described the project as fast, instinctive location filmmaking in the Chambal ravines and explicitly praised Ashok Mehta's courage/energy; treat that as directorial process testimony, not permission to invent exact locations, schedule days, unit sizes, permits, lenses, film stocks, exposure or lighting diagrams. Ashok Mehta's own 1996 cinematography interview identifies Bandit Queen as his work with Kapur and discusses the differing visual treatment of a consensual love scene and a rape scene as a director-cinematographer collaboration. Use that only at the level he describes; do not reverse-engineer lamps, ratios, focal lengths, stocks or exposure. Kapur's later commentary similarly credits Renu Saluja's editing and Nusrat Fateh Ali Khan's music as central collaborators. The film depicts severe sexual violence and humiliation, so production history must distinguish the performer from the biographical subject. Seema Biswas has later stated that she had reservations about frontal nudity, discussed them with Kapur and agreed that a body double would be used for the nude parade material. Preserve that as Biswas's retrospective account of performer negotiation; do not infer a complete modern intimacy/safeguarding protocol from a 1990s production. Contemporary productions involving nudity or sexual violence require independent consent, closed-set/intimacy practice, trauma-informed safeguards and applicable labor/safety rules regardless of what occurred historically. A second and distinct consent dispute concerns Phoolan Devi, the living person whose life was dramatized. Delhi High Court records show that an agreement existed that defendants said authorized adaptation, while Devi argued that the film distorted material beyond the agreement, violated privacy and that despite requests she had not been shown a rough or final edited version before the dispute. The court record also preserves disputes about which sexual-violence events were supported by Devi's own writings, Mala Sen's book, other journalism or other recorded statements. Do not collapse this into either 'the film had no permission' or 'the film was authorized and therefore accurate.' Teach the conflict among adaptation rights, subject participation, privacy, factual contestation and dramatic authorship as a production/legal problem with competing claims. Certification and release are another separate layer. Delhi High Court/CBFC litigation records show that the September 1994 examining process proposed replacing the 'true story' title card with wording that the film was based on the book Bandit Queen and prison papers and was not claimed as an authentic version of Phoolan Devi's life, alongside cuts/modifications to violent and sexual material; later revising and court proceedings continued the dispute. These records are version/censorship history, not evidence for original on-set technique. Contemporary Los Angeles Times reporting described the production as a $1.4-million film; preserve that as a contemporaneous reported production figure, not an audited cost report or authority to invent departmental allocations, currency conversion, overruns or financing shares. Runtime evidence likewise varies: the contemporary retrospective, DFI and U.S. release reporting converge on 119 minutes, while BFI gives 120. Use 119 minutes as canonical gameplay runtime while retaining 119/120 as institutional/release variance. Keep 35mm/color evidence at exactly that level. Do not invent camera bodies, lenses, stocks, filters, exposure, lighting units, lab route, sound hardware, ADR/Foley workflow, stunt design, weapon handling, sexual-violence blocking, body-double logistics, exact location permissions or censorship edits beyond what sources establish.",
    sourceId: "bfi_bandit_queen_1994",
    sourceUrl: "https://www.bfi.org.uk/film/7f0293b4-b962-58de-a051-d7ae2e2493b5/bandit-queen",
    scenarioType: "film_four_kaleidoscope_biographical_adaptation_chambal_location_contested_subject_rights_35mm",
    requiredChoicesSeed: {
      screenplay: ["mala_sen_biography_adaptation", "living_subject_accuracy_and_privacy_dispute", "adaptation_rights_not_equivalent_to_factual_consensus"],
      camera: ["ashok_mehta_canonical_dp_with_dfi_credit_variance_preserved", "35mm_colour_record", "no_invented_camera_lens_stock_filter_exposure_lighting_or_lab_recipe"],
      editing: ["renu_saluja_editorial_authorship", "original_edit_separate_from_certification_cuts_and_release_versions", "119_120_runtime_variance"],
      sound: ["robert_taylor_tom_lewiston_sound_record", "nusrat_fateh_ali_khan_music_separate", "no_invented_recorder_microphone_adr_foley_or_mix_layout"],
      themes: ["film_history", "1990s", "indian_cinema", "uk_india_co_production", "film_four", "kaleidoscope", "shekhar_kapur", "bobby_bedi", "mala_sen", "phoolan_devi", "seema_biswas", "ashok_mehta", "renu_saluja", "nusrat_fateh_ali_khan", "chambal", "biographical_adaptation", "living_subject_rights", "privacy", "representation_dispute", "performer_consent", "body_double_testimony", "sexual_violence_safeguarding_boundary", "cbfc", "censorship_versioning", "35mm_colour", "runtime_variance", "credit_variance"],
    },
    learningGoals: [
      "Model Bandit Queen as a Film Four International/Kaleidoscope India-UK production rather than treating its international circulation as proof of a purely British or purely Indian production system.",
      "Keep Mala Sen's biography/screenplay source distinct from Phoolan Devi's own statements, other journalistic records and the finished film's dramatic authorship.",
      "Preserve the legal fact that an adaptation agreement existed while also preserving Devi's claim that the film exceeded/distorted the agreement and violated her privacy.",
      "Do not equate adaptation rights with factual consensus, living-subject participation or approval of the final cut.",
      "Separate Phoolan Devi's subject-rights dispute from Seema Biswas's performer-consent negotiations; they involve different people, rights and production responsibilities.",
      "Use Biswas's retrospective body-double account as performer testimony while refusing to project a complete modern intimacy protocol backward onto the historical set.",
      "Require present-day nudity/sexual-violence work to use independent consent, intimacy/closed-set practice, trauma-informed safeguards and applicable labor/safety rules rather than imitating 1990s practice.",
      "Treat Kapur's Chambal-ravines and fast/instinctive filmmaking recollections as process evidence without inventing exact shoot dates, unit sizes, permits or unsafe guerrilla procedures.",
      "Use Ashok Mehta as the canonical cinematography credit because contemporary and first-person records converge there, while explicitly retaining DFI's Ketan Mehta catalogue anomaly.",
      "Keep the 35mm/color record at the exact supported level and leave camera body, lenses, stock, filters, exposure, lighting and lab workflow unset.",
      "Keep Renu Saluja's editing, Ashok Bhagat's art direction, Robert Taylor/Tom Lewiston's sound and Nusrat Fateh Ali Khan's music as distinct craft systems.",
      "Treat the reported $1.4-million figure as contemporaneous reporting, not an audited budget or basis for invented department allocations.",
      "Preserve 119/120-minute institutional/release variance and use 119 minutes only as the canonical gameplay runtime.",
      "Keep original production/editing distinct from CBFC-mandated/proposed cuts, court injunctions and later release versions.",
      "Use the proposed replacement of the 'true story' card with a non-authenticity disclaimer as evidence of certification/representation conflict, not as a shortcut for deciding every disputed historical fact.",
      "Keep Cannes/award/international reception downstream from production and legal/version evidence.",
      "Avoid inventing unsupported camera, lens, stock, lighting, sound-hardware, ADR/Foley, stunt, weapon, sexual-violence staging, body-double logistics, location-permit, budget-line or censorship-edit details.",
    ],
    phases: [
      { id: "rights_and_adaptation", label: "Adapt a contested living biography", player_task: "Track Mala Sen's book/screenplay, the adaptation agreement and Phoolan Devi's later accuracy/privacy objections as separate evidence rather than reducing the project to authorized versus unauthorized." },
      { id: "film_four_package", label: "Assemble the Film Four/Kaleidoscope co-production", player_task: "Keep Bobby/Sundeep S. Bedi, Film Four International/Channel Four Films and Kaleidoscope visible while leaving unsupported finance shares, recoupment terms and departmental budgets unset." },
      { id: "casting_and_performance", label: "Build Phoolan through Seema Biswas's performance", player_task: "Use Biswas's casting/script reservations and Kapur's actor-process recollections as title-specific testimony without treating an actor's interpretation as proof of the living subject's biography." },
      { id: "sensitive_scene_consent", label: "Separate performer consent from subject representation", player_task: "Preserve Biswas's body-double negotiation and Devi's distinct legal objections; apply independent modern intimacy, closed-set and trauma-informed safeguards rather than recreating historical practice." },
      { id: "chambal_location_work", label: "Work in the Chambal ravine environment", player_task: "Use Kapur's first-person location/process account while leaving exact sites, permits, unit footprint, daily schedule and risky access procedures unset." },
      { id: "camera_and_light", label: "Credit Ashok Mehta without reverse-engineering the image", player_task: "Preserve Ashok Mehta as canonical DP and DFI's Ketan Mehta anomaly, use only 35mm/color plus source-supported visual collaboration, and invent no body/lens/stock/exposure/lighting recipe." },
      { id: "design_sound_music", label: "Keep design, sound and music as separate departments", player_task: "Credit Ashok Bhagat, Robert Taylor/Tom Lewiston and Nusrat Fateh Ali Khan at source-supported levels without inventing construction, recording or scoring workflows." },
      { id: "editing", label: "Protect Renu Saluja's editorial authorship", player_task: "Keep original editing distinct from later certification cuts and preserve 119/120-minute version evidence without manufacturing an exact cut chronology." },
      { id: "certification_and_court", label: "Track certification and litigation as version history", player_task: "Use CBFC/court records for disclaimer, cut and injunction history while keeping those downstream legal/version events separate from what happened on set." },
      { id: "release_and_reception", label: "Separate international reception from production proof", player_task: "Treat festival, awards and later critical status as circulation/reception evidence only; they do not validate disputed biography or undocumented craft." },
    ],
  },
] as const;

export function mergeChapterSeventeenBanditQueenExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenBanditQueenExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_bandit_queen_verified",
      source: { list_id: "manual_chapter_seventeen_bandit_queen_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
