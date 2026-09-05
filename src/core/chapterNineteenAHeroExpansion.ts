import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenAHeroExpansionDefinitions = [
  {
    id: "scenario_a_hero_2021",
    title: "A Hero",
    originalTitle: "Ghahreman",
    aliases: ["GHAHREMAN", "Un héros", "Un Heros"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 127,
    directors: ["Asghar Farhadi"],
    genres: ["Drama"],
    sourceId: "a_hero_cannes_2021",
    sourceUrl: "https://www.festival-cannes.com/en/f/ghahreman/",
    scenarioType: "award_priority_cannes_2021_grand_prix_iran_france_shiraz_realist_rehearsal_alexa_mini_lf_signature_primes_2k_2_39_5_1_coproduction_uncertainty_bounded",
    premise: "Build A Hero (Ghahreman) as the first unresolved Cannes-major-prizes source-first Production Case for Chapter 19. Festival de Cannes locks the 2021 Iran/France feature at 127 minutes and credits Asghar Farhadi for screenplay/direction, Ali Ghazi for cinematography, Haydeh Safiyari for editing and Mohammadreza Delpak for sound, while the 2021 Grand Prix establishes the selection obligation. The official Memento/Asghar Farhadi Production press kit locks a 2K 2.39:1 image and 5.1 sound delivery, producers Alexandre Mallet-Guy and Farhadi, co-producers Olivier Père and Rémi Burah, line producer Hamidreza Ghorbani, production manager Mohammad Yamini, production designer Mehdi Mousavi, location sound Mehdi Saleh Kermani, sound editing Mohammadreza Delpak, mixing Bruno Tarrière, Memento Production and Asghar Farhadi Production, ARTE France Cinéma co-production and French/international distribution through Memento. The press kit and filmmaker interviews place the story and production in Shiraz. ARRI documents Ali Ghazi shooting A Hero on ALEXA Mini LF with Signature Prime lenses. Farhadi's DGA interview documents a ten-month rehearsal period focused on actors and character backstories rather than script read-throughs, while contemporary interviews document pandemic-driven pre-production interruption and the extended rehearsal window. The case therefore locks the sourced authorship, Shiraz location-production context, rehearsal methodology, camera/lens package, 2K 2.39:1/5.1 delivery and Iran/France production network while refusing to invent camera settings, filtration, exact lighting package, media/codec/data topology, shooting-day count, budget, partner shares, detailed editorial infrastructure, ADR/Foley architecture, grading platform, VFX census or master lineage beyond the sourced facts.",
    requiredChoicesSeed: {
      screenplay: ["farhadi_authored_screenplay", "ordinary_person_heroism_reputation", "shiraz_social_context", "grey_character_ethics"],
      camera: ["alexa_mini_lf", "signature_primes", "ali_ghazi", "2k_2_39_delivery", "camera_settings_unresolved"],
      editing: ["haydeh_safiyari", "moral_information_control", "edit_infrastructure_unresolved"],
      sound: ["mehdi_saleh_kermani_location_sound", "mohammadreza_delpak_sound_edit", "bruno_tarriere_mix", "5_1_delivery", "recording_chain_unresolved"],
      themes: ["film_history", "2021", "cannes_grand_prix", "asghar_farhadi", "iran", "france", "shiraz", "rehearsal", "realism", "transnational_coproduction", "chapter19"]
    },
    learningGoals: [
      "Explain why A Hero must be reconciled as a new Atlas/PV identity only after proving no existing title/year identity exists.",
      "Lock 2021 as both film year and Cannes award year for this phase.",
      "Identify Asghar Farhadi as writer and director and Alexandre Mallet-Guy with Farhadi as producers.",
      "Use 127 minutes as the official Cannes runtime.",
      "Map the film to Iran/France production and Shiraz location context without reducing setting to production nationality.",
      "Identify Ali Ghazi as the Cannes-credited cinematographer.",
      "Use ALEXA Mini LF and Signature Primes as ARRI-verified camera/lens facts.",
      "Use 2K 2.39:1 as a documented delivery/image fact without inventing sensor mode, codec or media.",
      "Identify Haydeh Safiyari as editor without inventing edit hardware, software or storage topology.",
      "Identify Mehdi Saleh Kermani for production sound, Mohammadreza Delpak for sound editing and Bruno Tarrière for mixing.",
      "Use 5.1 as the documented sound delivery while keeping detailed stems and monitoring architecture unresolved.",
      "Identify Mehdi Mousavi as production designer and Negar Nemati as costume designer.",
      "Explain how Farhadi's rehearsal process builds character backstory rather than merely rehearsing scripted dialogue.",
      "Use the documented ten-month rehearsal period without converting it into an invented daily schedule.",
      "Recognize that pandemic delays extended preparation without assuming exact shutdown dates not locked by the core sources.",
      "Explain why realistic locations, social institutions and family spaces are production systems as well as narrative settings.",
      "Recognize the Iran/France co-production and public-support structure without inventing ownership or recoupment shares.",
      "Keep exact budget, cash-flow plan, insurance terms and financing percentages unresolved.",
      "Keep exact shutter, EI, filtration, focal-length plan, lighting fixtures and exposure strategy unresolved.",
      "Keep codec, media, backup, checksum, dailies and conform topology unresolved unless directly sourced.",
      "Keep detailed ADR, Foley, premix, final-mix routing and monitoring chain unresolved beyond credited roles and 5.1 delivery.",
      "Keep grade software, color-management pipeline, VFX census and mastering lineage unresolved.",
      "Distinguish filmmaker testimony about method from later critical interpretation of the finished film.",
      "Close the case only when one scenario, one Film Study, one PV record and the Cannes-major-prizes queue agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes 2021 Grand Prix obligation", player_task: "Treat the prize as selection evidence, not as a proxy for production detail." },
      { id: "reconciliation", label: "Prove title/year identity", player_task: "Search A Hero, Ghahreman and aliases across Atlas/PV/Film Study before creating a scenario." },
      { id: "screenplay", label: "Build the moral-information structure", player_task: "Use Farhadi's authored screenplay and documented heroism/reputation premise." },
      { id: "shiraz", label: "Plan Shiraz as social production space", player_task: "Coordinate ordinary homes, offices, institutions and the city's cultural context without tourist shorthand." },
      { id: "rehearsal", label: "Build backstories through rehearsal", player_task: "Use the documented ten-month rehearsal method while leaving daily rehearsal logistics open." },
      { id: "performance", label: "Coordinate grey-character realism", player_task: "Turn character backstory and restraint into playable performance decisions." },
      { id: "cinematography", label: "Lock Ali Ghazi and large-format package", player_task: "Use ALEXA Mini LF and Signature Primes without inventing settings or focal-length rules." },
      { id: "frame_delivery", label: "Protect the 2K 2.39:1 boundary", player_task: "Keep documented image delivery distinct from unsupported capture-pipeline claims." },
      { id: "production_design", label: "Build plausible institutional and domestic spaces", player_task: "Use the credited production designer and realism goal without fabricating set-build details." },
      { id: "costume", label: "Lock costume authorship", player_task: "Use Negar Nemati's credit without inventing an unsourced wardrobe workflow." },
      { id: "editing", label: "Control disclosure and consequence", player_task: "Use Safiyari's edit credit to manage causal information while leaving infrastructure unresolved." },
      { id: "production_sound", label: "Capture social realism", player_task: "Use Saleh Kermani's production-sound credit while keeping microphone/recorder topology unresolved." },
      { id: "sound_post", label: "Finish the 5.1 track", player_task: "Use Delpak/Tarrière and 5.1 as anchors without inventing ADR/Foley/stem detail." },
      { id: "coproduction", label: "Map Iran/France production roles", player_task: "Separate producers, co-producers, public support, sales and distribution without inventing shares." },
      { id: "pandemic_boundary", label: "Bound pandemic effects", player_task: "Acknowledge preparation interruption and longer rehearsal without inferring unsupported exact dates or protocols." },
      { id: "camera_boundary", label: "Freeze unsupported camera detail", player_task: "Do not infer sensor mode, recording format, filtration, media or data workflow from camera/lens model alone." },
      { id: "post_boundary", label: "Freeze unsupported post detail", player_task: "Keep edit system, grade, VFX and mastering lineage open beyond sourced credits and delivery facts." },
      { id: "finance_boundary", label: "Freeze unsupported finance detail", player_task: "Do not infer budget or partner percentages from production/support credits." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Map source-backed facts and explicit research-pending boundaries across the full coverage contract." },
      { id: "production_verification", label: "Close the Cannes corrective case", player_task: "Verify one unique scenario/PV identity and a one-step reduction in the Cannes film-level corrective queue." }
    ]
  }
] as const;

export function mergeChapterNineteenAHeroExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenAHeroExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_a_hero_verified",
      source: { list_id: "manual_chapter_nineteen_a_hero_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
