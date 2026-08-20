import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenYeelenExpansionDefinitions = [
  {
    id: "scenario_yeelen_1987",
    title: "Yeelen",
    originalTitle: "Yeelen",
    aliases: ["Brightness", "Yeelen (Brightness)", "La Lumière"],
    year: 1987,
    titleType: "Movie",
    runtimeMins: 105,
    directors: ["Souleymane Cissé"],
    genres: ["Drama", "Fantasy", "History"],
    premise: "Build Yeelen as a 1987 Malian-led production whose international co-production structure, Bambara-language authorship, long and disrupted shoot, landscape cinematography and specialist craft make African film production materially visible without reducing it to festival discovery or a generic category called 'African cinema'. BFI identifies the film as a Mali–Burkina Faso–France–West Germany production made through Films Cissé, Atriascop and Midas with assistance from the governments and cultural/film institutions of Mali, Burkina Faso and France, UTA and Westdeutscher Rundfunk. La Cinémathèque française additionally catalogs Les Films Cissé, Atriascop, CNC, Les Films du Carrosse, Mamo Films and WDR, with Souleymane Cissé as producer and Bertrand Van Effenterre as production director. Preserve these overlapping company records as provenance rather than forcing one simplified ownership chain. Cissé wrote and directed the film in Bambara and also produced it. Cannes credits Jean-Noël Ferragut and Jean-Michel Humeau for cinematography, Michel Portal for music and Andrée Davanture for editing; BFI and Cinémathèque provide the wider production system: Dounamba Coulibaly, Marie-Catherine Miqueau, Jenny Frenck, Seipati N'Xumalo and others in editing; Daniel Ollivier and Michel Mellier in sound; Michel Portal with Salif Keita in music; Kossa Mody Keita in production design and costume; Frédéric Duru and Nicos/Nikos Meletopoulos in special effects; Seydou Diallo and Ibrahim Sory Koita assisting direction; camera operators and production assistants across the Malian/international crew. Treat this as collaborative labor, not a single-auteur miracle. Production was unusually prolonged and unstable. Research published by Indiana University Press from Cissé interviews, production materials and crew interviews records that Yeelen reached release roughly three and a half years after the first take. Five weeks into an early filming period, a sandstorm interrupted production and France-based crew members returned to France; Ismaila Sarr, central to Cissé's first conception, then died. Cissé rewrote the screenplay around surviving footage, searched about seven months for Niamanto Sanogo and waited further for his appearance to fit the role. When filming resumed, Jean-Noël Ferragut replaced Jean-Michel Humeau as principal cameraman. Ferragut recalled concentrating exterior shooting in September, October and November and generally avoiding harsh midday sun, with location-specific light further restricting workable hours. Preserve those sourced constraints without turning them into a universal Sahel cinematography recipe. The Bandiagara Escarpment and other Malian landscapes are production locations as well as cultural/historical spaces; Indiana's analysis emphasizes that Cissé's representation of Komo is selective and shaped by a filmmaker working with overlapping knowledge traditions. Do not expose, reconstruct or gamify restricted ritual knowledge beyond what the film and public scholarship responsibly disclose. Cissé himself repeatedly rejected the idea that Yeelen is merely an exotic film 'about magic' or only about initiation; use cultural materials to understand authorship, history, knowledge and generational conflict without flattening Bambara/Bamana, Peul/Fulani and Dogon traditions into one interchangeable African mythology. Use 105 minutes canonically because BFI, Cinémathèque and filmportal converge on that institutional runtime; preserve 106-minute distributor metadata separately as catalog/presentation provenance rather than inventing an alternate cut. Keep Cannes Jury Prize and later global circulation strictly downstream from the difficult original production. Do not invent exact camera bodies, lenses, film-stock emulsions, exposure values, artificial-light packages, sound recorder/microphone models, effects formulas, ritual procedures, complete location calendars, financing percentages or a single unambiguous co-production hierarchy where institutional sources differ.",
    sourceId: "bfi_yeelen_1987",
    sourceUrl: "https://bfidatadigipres.github.io/in%20the%20black%20fantastic/2022/07/03/yeelen/",
    scenarioType: "mali_burkina_france_west_germany_cisse_bambara_location_light_long_disrupted_coproduction",
    requiredChoicesSeed: {
      screenplay: ["soulemane_cisse_bambara_authorship", "rewrite_after_ismaïla_sarr_death", "do_not_reconstruct_restricted_ritual_knowledge"],
      camera: ["ferragut_humeau_landscape_light_authorship", "season_and_daylight_constraints_as_sourced_history", "no_invented_camera_lens_stock_or_exposure_package"],
      editing: ["multi_editor_long_production_reconstruction", "surviving_footage_after_rewrite", "105_canonical_preserve_106_catalog_variance"],
      sound: ["ollivier_mellier_sound_authorship", "portal_salif_keita_music_distinct_from_sound", "no_invented_recorder_microphone_or_mix_chain"],
      themes: ["film_history", "1980s", "mali", "burkina_faso", "france", "west_germany", "soulemane_cisse", "bambara_language", "co_production", "films_cisse", "wdr", "landscape", "bandiagara", "production_interruption", "screenplay_rewrite", "cinematography", "light", "editing", "sound", "music", "cultural_knowledge_boundary", "cannes_circulation"],
    },
    learningGoals: [
      "Model Yeelen as a Malian-led international co-production rather than treating Cannes recognition as the source of its authorship or legitimacy.",
      "Preserve overlapping BFI, Cinémathèque and German institutional company records as provenance instead of inventing a single simplified finance hierarchy.",
      "Keep Souleymane Cissé's writer-director-producer roles distinct from the large Malian and international production crew on which the film depended.",
      "Explain how a sandstorm, crew interruption, Ismaila Sarr's death, screenplay rewriting and delayed recasting materially extended production without romanticizing crisis.",
      "Treat Jean-Michel Humeau and Jean-Noël Ferragut as successive/overlapping cinematography authors whose credits and production chronology must both be preserved.",
      "Use Ferragut's documented seasonal and daily-light constraints as film-specific production evidence without turning them into a universal rule for filming the Sahel.",
      "Keep Kossa Mody Keita's production-design and costume work visible as authored craft rather than reading all material culture as unmediated ethnographic evidence.",
      "Keep Daniel Ollivier and Michel Mellier's sound work distinct from Michel Portal and Salif Keita's music contribution.",
      "Keep the multi-editor structure visible and connect it to a production assembled across interruptions, rewritten material and international postproduction labor without inventing edit-room chronology.",
      "Treat the Bandiagara Escarpment and other landscapes as both production locations and historically/culturally specific spaces rather than generic 'African scenery'.",
      "Respect the public/restricted knowledge boundary around Komo and related power associations; analyze what Cissé makes public without reconstructing concealed ritual procedures.",
      "Avoid collapsing Bambara/Bamana, Peul/Fulani and Dogon cultural materials into one homogeneous mythology or treating Yeelen as a transparent ethnographic record.",
      "Use Cissé's own rejection of the 'exotic magic film' label to keep generational conflict, knowledge, ethics and modernity central to interpretation.",
      "Use 105 minutes canonically while preserving 106-minute distributor metadata as provenance rather than manufacturing an unsupported cut history.",
      "Separate original production from Cannes Jury Prize, later international distribution and subsequent preservation/canonization histories.",
    ],
    phases: [
      { id: "pitch", label: "Build a Malian-led epic around knowledge, inheritance and generational conflict", player_task: "Define the film through Cissé's Bambara-language authorship and ethical conflict rather than pitching it as exotic magic for an external market." },
      { id: "research", label: "Map public cultural knowledge and production partners without overexposure", player_task: "Identify what the film and public scholarship responsibly disclose about cultural systems, landscapes and co-production institutions while leaving restricted ritual knowledge un-reconstructed." },
      { id: "screenplay", label: "Rebuild the story after production rupture", player_task: "Model the documented rewrite around surviving material after Ismaila Sarr's death without inventing lost scenes or private script versions." },
      { id: "performance", label: "Recast and preserve embodied cultural specificity", player_task: "Coordinate Issiaka Kane, Niamanto Sanogo, Aoua Sangaré, Balla Moussa Keïta and the ensemble without treating performance as ethnographic display." },
      { id: "design", label: "Coordinate authored craft with real landscapes and material culture", player_task: "Keep Kossa Mody Keita's design/costume work distinct from found locations and cultural objects, and avoid turning protected symbolic material into game instructions." },
      { id: "cinematography", label: "Work with seasonal and diurnal light as a production constraint", player_task: "Use the sourced Humeau/Ferragut chronology and Ferragut's light-window evidence while leaving undocumented camera, lens, emulsion and exposure details unset." },
      { id: "editing", label: "Assemble continuity across interruptions and rewritten production", player_task: "Use the credited multi-editor structure to organize surviving and later-shot material while refusing to invent an exact postproduction timeline not secured by sources." },
      { id: "sound", label: "Separate location/sound labor from musical authorship", player_task: "Keep Ollivier/Mellier sound work and Portal/Salif Keita music as distinct layers without inventing hardware, recording chains or unverified ritual-audio methods." },
      { id: "release", label: "Separate production achievement from festival validation", player_task: "Track 1987 completion, Cannes competition/Jury Prize and later international circulation as successive histories, not evidence that external institutions created the film's cultural authority." },
    ],
  },
] as const;

export function mergeChapterSixteenYeelenExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenYeelenExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_yeelen_verified",
      source: { list_id: "manual_chapter_sixteen_yeelen_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
