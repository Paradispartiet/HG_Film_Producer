import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenGleanersExpansionDefinitions = [
  {
    id: "scenario_the_gleaners_and_i_2000",
    title: "The Gleaners and I",
    originalTitle: "Les glaneurs et la glaneuse",
    year: 2000,
    titleType: "Movie",
    runtimeMins: 82,
    directors: ["Agnès Varda"],
    genres: ["Documentary"],
    premise: "Build The Gleaners and I as Chapter 18's first source-first anchor for small-camera digital documentary, essay-film authorship and an artisan production model that keeps digital acquisition, editing, documentary encounter and theatrical presentation analytically distinct. Ciné-Tamaris identifies the 1999-2000 feature as an 82-minute French documentary produced and distributed by Ciné-Tamaris, with image credits shared by Stéphane Krausz, Didier Rouget, Didier Doussin, Pascal Sautelet and Agnès Varda; Emmanuel Soland on sound; Joanna Bruzdowicz among the music contributors; Varda and Laurent Pineau editing; Nathalie Vidal mixing; and GTC Numérique / Vidéo / Cinéma in the post-production credits. Ciné-Tamaris also lists the film as 35mm, 1.33 and color at the presentation/catalog level, while La Cinémathèque française explicitly describes the work as filmed in DV. In a contemporaneous January 2001 Sight and Sound interview, Varda says the DV camera and Avid were tools that let her get closer to people, shoot alone and collapse the delay between wanting to film something and actually filming it; she says editing took ten months and describes editing at home as part of an established artisan working method. The same interview identifies her approach as a wandering road documentary and records that the close-up in which one hand films her other aging hand was not planned, a bounded example of first-person discovery rather than proof that the entire film was improvised. Cannes credits Varda as director/writer and one of five cinematographers, Varda and Laurent Pineau as editors, and Joanna Bruzdowicz for music; Cannes lists 76 minutes, while Ciné-Tamaris, Criterion and Janus list 82, so institutional duration disagreement must remain visible rather than being flattened into a fabricated version history. Ciné-Tamaris's later educational rushes project makes nearly sixty hours of original rushes available with the finished edit and separate mix, establishing a substantial documentary source pool and an inspectable editorial archive without licensing an invented shooting ratio, daily schedule or exhaustive chronology. Treat DV as an enabling production tool, not the film's meaning or a claim of technical firstness. Do not infer an exact consumer-camera model, lens, tape stock, codec, data rate, microphone package, lighting kit, Avid version, storage architecture, conform path, film-out chain, laboratory process, budget, crew schedule or complete location itinerary unless a reviewed title-specific source establishes it.",
    sourceId: "cine_tamaris_gleaners_2000",
    sourceUrl: "https://cine-tamaris.fr/agnes-varda/les-glaneurs-et-la-glaneuse-2000/",
    scenarioType: "french_digital_documentary_essay_small_camera_artisan_editing_social_observation_2000",
    requiredChoicesSeed: {
      screenplay: ["essay_documentary_question_as_structure", "encounter_and_digression_without_fabricated_script", "subjective_author_presence_kept_explicit"],
      camera: ["dv_mobility_and_intimacy", "varda_self_camera_and_collective_image_credits", "unplanned_hand_self_portrait_as_bounded_example", "no_invented_camera_model_or_capture_chain"],
      editing: ["ten_month_home_editing", "varda_and_laurent_pineau_credit", "nearly_sixty_hours_rushes_as_source_pool", "digressive_cinecriture_without_fake_chronology"],
      sound: ["emmanuel_soland_sound", "nathalie_vidal_mix", "music_and_location_sound_kept_distinct", "no_invented_recording_or_mix_hardware"],
      themes: ["film_history", "2000s", "the_gleaners_and_i", "agnes_varda", "cine_tamaris", "documentary_essay", "dv", "digital_camera", "avid", "artisan_filmmaking", "self_reflexive_documentary", "road_documentary", "gleaning", "waste", "recycling", "aging", "documentary_ethics", "stéphane_krausz", "didier_rouget", "didier_doussin", "pascal_sautelet", "laurent_pineau", "joanna_bruzdowicz", "emmanuel_soland", "nathalie_vidal", "rushes_archive", "35mm_presentation", "runtime_variance"],
    },
    learningGoals: [
      "Place The Gleaners and I at the opening of Chapter 18 as a small-camera digital documentary anchor without claiming that digital cinema began in 2000.",
      "Explain Varda's own distinction between digital tools and artistic ends: DV and Avid enabled proximity, solo shooting and a shorter gap between impulse and recording, but did not determine the film's politics or form.",
      "Keep Agnès Varda's self-shot material distinct from the collective image credits shared with Stéphane Krausz, Didier Rouget, Didier Doussin and Pascal Sautelet.",
      "Treat La Cinémathèque française's DV description as format-level evidence without inventing an exact camera body, lens, cassette, codec or data rate.",
      "Use the unplanned shot of one hand filming the other as a specifically documented example of first-person discovery rather than a claim that the complete film lacked planning.",
      "Explain how the wandering road-documentary form can accommodate legal, social, art-historical and autobiographical digressions while still being authored through selection and editing.",
      "Keep documentary encounter, subjective author presence and participant reality distinct: Varda's presence is visible and reflective rather than hidden as neutral observation.",
      "Treat gleaning, salvage and waste as social-documentary subjects while avoiding unsupported claims about every participant's circumstances, consent process or representativeness.",
      "Use Ciné-Tamaris's production/distribution record to keep independent production ownership distinct from Cannes selection, later restoration and present-day Criterion/Janus circulation.",
      "Explain Varda's ten-month home editing as an artisan post-production practice without inventing daily edit hours, software version, storage hardware or complete cut chronology.",
      "Treat the later Ciné-Tamaris educational archive of nearly sixty hours of rushes as evidence of the available source pool, not as an exact shooting ratio or day-by-day production log.",
      "Keep Varda and Laurent Pineau's editing credits distinct from the later pedagogical re-editing project built from preserved rushes.",
      "Keep Emmanuel Soland's sound credit and Nathalie Vidal's mix credit distinct from music by Joanna Bruzdowicz and other credited music contributors.",
      "Keep Ciné-Tamaris's 35mm/1.33 catalog and post credits separate from DV acquisition: theatrical presentation does not prove photochemical principal photography.",
      "Preserve the 82-minute Ciné-Tamaris/Criterion/Janus record and Cannes's 76-minute catalogue record as institutional duration variance without inventing a definitive alternate-cut genealogy.",
      "Distinguish the original 1999-2000 production from the 2018 2K restoration and from current DCP/Blu-ray/DVD circulation.",
      "Treat Cannes selection as circulation/reception evidence rather than production proof.",
      "Keep references to Millet, Breton and Étienne-Jules Marey as essay-film material and historical reflection rather than evidence about the DV production apparatus.",
      "Explain how digital mobility supports Varda's self-portrait material on aging while retaining the difference between autobiographical reflection and interviews with other people.",
      "Do not promote the film to a technical-first or influence claim without direct high-authority evidence establishing that narrower proposition.",
      "Do not invent exact budget, full schedule, complete route, camera/lens package, audio hardware, lighting kit, Avid version, tape/data workflow, conform, laboratory or film-out process where the reviewed sources do not establish them.",
    ],
    phases: [
      { id: "question_and_route", label: "Turn gleaning into a documentary route", player_task: "Build an inquiry that can move across rural and urban France while keeping the route open to encounters, law, art history and first-person reflection without fabricating a complete prewritten itinerary." },
      { id: "small_camera_proximity", label: "Use DV mobility for proximity and solo observation", player_task: "Apply Varda's sourced account of shooting alone and getting closer to people while leaving exact camera model, lens, recording medium and codec unset." },
      { id: "collective_and_self_camera", label: "Separate collective image work from Varda's self-camera", player_task: "Keep the five credited image-makers visible while identifying Varda's self-shot passages as one authored layer rather than assigning the whole feature to a single camera operator." },
      { id: "documentary_encounter_ethics", label: "Film people without pretending the camera is neutral", player_task: "Make Varda's subjective presence explicit, distinguish observation from interpretation and avoid turning individual encounters into unsupported claims about whole populations." },
      { id: "unplanned_self_portrait", label: "Recognize a bounded unplanned discovery", player_task: "Use the documented one-hand-films-the-other shot as evidence of intuitive discovery while resisting a false claim that every image was accidental or improvised." },
      { id: "essay_digression", label: "Connect waste, art, cinema history and aging", player_task: "Organize digressions so paintings, Marey, heart-shaped potatoes and self-portraiture deepen the central inquiry rather than becoming detached trivia." },
      { id: "rushes_and_selection", label: "Work from a large documentary source pool", player_task: "Treat the nearly sixty hours of preserved rushes as a selection problem for editing without converting that archive into an invented shooting ratio or chronology." },
      { id: "artisan_home_edit", label: "Shape the film through a ten-month home edit", player_task: "Model Varda's sourced artisan editing practice and Laurent Pineau's co-credit while leaving software version, hardware and daily schedule unspecified." },
      { id: "sound_music_mix", label: "Keep location sound, music and final mix distinct", player_task: "Respect Emmanuel Soland's sound, Joanna Bruzdowicz and other music credits, and Nathalie Vidal's mix as separate labor layers without inventing microphones, recorders or console topology." },
      { id: "dv_to_theatrical_boundary", label: "Separate DV acquisition from theatrical presentation", player_task: "Keep La Cinémathèque's DV record and Ciné-Tamaris's 35mm/1.33 catalog/post information as distinct pipeline layers rather than inferring a complete film-out chain." },
      { id: "runtime_catalog_variance", label: "Preserve duration disagreement", player_task: "Use 82 minutes as the canonical gameplay runtime while recording Cannes's 76-minute catalogue entry as unresolved institutional variance, not an invented alternate cut." },
      { id: "circulation_and_restoration", label: "Keep Cannes, later restoration and current editions downstream", player_task: "Treat 2000 Cannes circulation, the 2018 2K restoration and contemporary DCP/home-media access as separate from original acquisition and editing evidence." },
    ],
  },
] as const;

export function mergeChapterEighteenGleanersExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenGleanersExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_gleaners_verified",
      source: { list_id: "manual_chapter_eighteen_gleaners_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
