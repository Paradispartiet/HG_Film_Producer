import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenUncleBoonmeeExpansionDefinitions = [
  {
    id: "scenario_uncle_boonmee_2010",
    title: "Uncle Boonmee Who Can Recall His Past Lives",
    originalTitle: "Lung Boonmee Raluek Chat",
    aliases: ["Uncle Boonmee", "ลุงบุญมีระลึกชาติ"],
    year: 2010,
    titleType: "Movie",
    runtimeMins: 113,
    directors: ["Apichatpong Weerasethakul"],
    genres: ["Drama", "Fantasy"],
    sourceId: "bfi_uncle_boonmee_2010",
    sourceUrl: "https://www.bfi.org.uk/film/80bae183-0ac7-5aa2-ab29-f11fb2a8ac2a/uncle-boonmee-who-can-recall-his-past-lives",
    scenarioType: "thailand_isan_primitive_project_super16_photochemical_35mm_release_natural_light_day_for_night_amateur_cast_location_sound_memory_cinema_2010",
    premise: "Build Uncle Boonmee Who Can Recall His Past Lives as a source-first Chapter 18 Production Case about a 2010 transnational independent feature in which Apichatpong Weerasethakul and long-term collaborators turned memory, regional landscape, analogue capture, deliberately heterogeneous performance styles, low-key effects and location-derived sound into one production system. BFI and the Festival de Cannes identify the 113-minute film as a United Kingdom/Thailand/France/Germany/Spain production written and directed by Apichatpong, with cinematography credited to Sayombhu Mukdeeprom, Yukontorn Mingmongkon and Charin Pengpanich. The official Strand press notes place the feature inside the broader Primitive project in Isan, connect it to work with teenagers in Nabua and A Letter to Uncle Boonmee, credit Akekarat Homlaor as production designer, Akritchalerm Kalayanamitr and Koichi Shimizu as sound designers, and Lee Chatametikool as editor and post supervisor. In the same press materials, Apichatpong describes the film as an homage to his home and to cinema he grew up with, identifies his father's death from kidney failure as a personal source for the medical equipment around Boonmee, explains his preference for amateur performers when evoking early-cinema acting, and recalls Thai television made on 16 mm with direct lighting, whispered lines, mechanically repeated dialogue, darkened monsters and simple supernatural effects. A direct production interview records that Uncle Boonmee itself was shot on Super 16 rather than digital because the project concerned memories of cinema that was dying or transforming; this acquisition claim must be kept distinct from the 35 mm release format documented by the distributor. Another direct interview documents a day-for-night strategy using a blue treatment in post and location scouting keyed to how leaves, tree trunks and changing natural light would react, while later Thai Film Archive testimony reinforces Apichatpong and Sayombhu's shared preference for natural light and the different concentration demanded by film capture. Akritchalerm Kalayanamitr's sound-design interview documents a foregrounded natural-sound system: insects, birds, water and weather; ambient recordings made on or near locations; stereo-microphone recording to a digital recorder; and jungle material recorded in Ratchaburi. The player must therefore coordinate Isan project provenance, regional and political-memory boundaries, 113-minute version control, Super 16 acquisition, 35 mm release provenance, multi-cinematographer credit integrity, natural-light scouting, day-for-night post treatment, nonprofessional and recurring performers, production design, simple supernatural staging, editorial/post supervision and location-derived sound while keeping camera body, lens, film stock, laboratory route, exact scene-to-cinematographer attribution, exact day-for-night grading values, total effects count and unsupported claims about Nabua's political history outside the verified layer.",
    requiredChoicesSeed: {
      screenplay: ["boonmee_book_inspiration_boundary", "primitive_project_provenance", "father_kidney_failure_memory", "past_lives_ambiguity", "stream_of_consciousness_structure"],
      camera: ["super16_acquisition", "35mm_release_boundary", "multi_dp_credit_integrity", "natural_light_scouting", "day_for_night_blue_post", "old_thai_tv_16mm_reference", "format_unknowns_register"],
      editing: ["lee_chatametikool_post_handoff", "style_shift_continuity", "memory_drift_structure", "still_photo_sequence_boundary", "analogue_to_post_boundary"],
      sound: ["location_ambience_capture", "foreground_nature_sound", "stereo_digital_field_recording", "ratchaburi_jungle_library", "dialogue_ambience_balance", "sound_designer_credit_boundary"],
      themes: ["film_history", "2010", "uncle_boonmee", "apichatpong_weerasethakul", "sayombhu_mukdeeprom", "yukontorn_mingmongkon", "charin_pengpanich", "lee_chatametikool", "akritchalerm_kalayanamitr", "koichi_shimizu", "akekarat_homlaor", "primitive_project", "isan", "nabua", "super16", "photochemical", "35mm_release", "natural_light", "day_for_night", "amateur_performers", "location_sound", "memory_cinema"]
    },
    learningGoals: [
      "Explain Uncle Boonmee as a coordinated production system rather than reducing it to a story about ghosts or reincarnation.",
      "Identify Apichatpong Weerasethakul as writer and director and preserve the published Boonmee story as inspiration rather than a literal biographical screenplay blueprint.",
      "Use the Cannes/BFI 113-minute record as the playable runtime anchor while keeping alternative public runtimes as version provenance.",
      "Identify the feature as a transnational production involving the United Kingdom, Thailand, France, Germany and Spain without flattening those partners into one national industry.",
      "Explain the feature's place inside the wider Primitive project and distinguish the feature from A Letter to Uncle Boonmee, Primitive and Phantoms of Nabua.",
      "Explain why Nabua and Isan function as project-memory contexts while keeping unverified claims about local political history outside the production fact layer.",
      "Identify Apichatpong's father's kidney failure as an autobiographical source for the medical equipment around Boonmee without treating Boonmee as a portrait of his father.",
      "Explain how the screenplay deliberately leaves the identity of Boonmee's possible past lives open to audience interpretation.",
      "Explain Apichatpong's stream-of-consciousness model as an editorial and directing principle that permits tonal and stylistic drift.",
      "Identify Sayombhu Mukdeeprom, Yukontorn Mingmongkon and Charin Pengpanich as the credited cinematographers and avoid assigning individual scenes to them without direct evidence.",
      "Identify Super 16 as the documented acquisition format for the feature and distinguish acquisition format from later 35 mm release or exhibition format.",
      "Explain why Apichatpong associated film capture with memory and with a cinema he perceived as dying or transforming during the digital transition.",
      "Use the 35 mm distributor specification only as release-format provenance, not as evidence that principal photography was 35 mm.",
      "Explain why camera body, lens family, stock emulsion, exposure index and laboratory path remain unknown unless a title-specific source establishes them.",
      "Explain how natural-light scouting can become a production constraint when foliage, trunks and changing sun position are part of the visual design.",
      "Describe the documented day-for-night strategy as a combination of location-light selection and blue post treatment without inventing grading values or filter specifications.",
      "Explain how analogue capture and post treatment can coexist inside Chapter 18's digital-convergence period rather than treating the era as uniformly digital.",
      "Use Apichatpong's memories of 16 mm Thai television as a stylistic reference rather than claiming that Uncle Boonmee reproduces one historical television programme literally.",
      "Explain how direct lighting, deliberate stiffness, darkness around monsters and simple supernatural staging can be aesthetic choices when a film is reconstructing remembered media forms.",
      "Identify the monkey-ghost and ghost-wife scenes as part of a deliberately matter-of-fact supernatural world while keeping unsupported mechanical details of effects construction unknown.",
      "Explain why low-tech or visibly simple effects can require precise blocking, exposure, costume and sound decisions even when they reject polished spectacle.",
      "Identify Akekarat Homlaor as production designer and treat houses, jungle, cave, farm and domestic spaces as a coherent lived environment rather than isolated scenic backdrops.",
      "Explain how A Letter to Uncle Boonmee functioned in the larger project as a search through village space for a suitable house, without claiming every short-film location appears unchanged in the feature.",
      "Explain how recurring collaborators and local participants can share a production system while carrying different degrees of professional acting experience.",
      "Identify the roof welder cast as Boonmee and the singer cast as Huay as examples of the director's stated preference for amateurishness when evoking early-cinema acting.",
      "Explain why regional dialect, performer identity and local social texture are production choices that must be preserved rather than normalized away in performance direction.",
      "Keep the regular performers Jenjira and Sakda distinct from the amateur-performer rationale applied to Boonmee and Huay.",
      "Explain how a restrained reaction to ghosts depends on performance rhythm, framing and sound rather than explanatory dialogue.",
      "Identify Lee Chatametikool as editor and post supervisor and treat editorial/post coordination as central to a film built from stylistic discontinuities.",
      "Explain how tonal shifts between ordinary domestic activity, supernatural presence, fable, political-memory imagery and contemporary urban scenes can remain coherent through recurrence and rhythm rather than classical continuity alone.",
      "Treat the still-photo sequence as a boundary where project memory and feature-film memory merge, without converting the image sequence into independent historical proof.",
      "Identify Akritchalerm Kalayanamitr and Koichi Shimizu as the credited sound designers and preserve the distinction between production recording, field ambience, sound editing and final mix.",
      "Explain why loud insects, birds, water and weather can be structural foreground elements rather than merely background atmosphere.",
      "Describe the documented field-recording method as stereo microphone plus digital recorder without inventing microphone models, recorder models or sample-rate settings.",
      "Explain why ambience recorded on or near actual locations can support geographic specificity even when some material is later drawn from a separate field-recording location.",
      "Identify Ratchaburi as the documented source for much of the jungle ambience and keep that sound-library provenance distinct from the feature's principal Isan project geography.",
      "Explain why sound designers may intentionally let ambience challenge dialogue level when realism and perceptual immersion are the design goals.",
      "Explain how a clean accidental cricket recording can become a valuable editorial asset without turning chance into a reproducible production recipe.",
      "Use Cannes' Palme d'Or as reception evidence and not as proof of any undocumented production method.",
      "Explain why the film is historically useful to Chapter 18 as an analogue countercurrent made at the moment digital feature production was accelerating.",
      "Explain how transnational financing and festival circulation can coexist with a production aesthetic rooted in a highly specific regional memory world.",
      "Keep the director's beliefs about transmigration and ghosts as authored worldview and thematic evidence rather than presenting them as scientific claims.",
      "Keep the director's account of nationalism, censorship and cultural disappearance as project context rather than a substitute for independent political history.",
      "Reject unsupported claims about exact lenses, camera bodies, film stocks, lighting fixtures, laboratory workflows, VFX totals or scene-by-scene cinematographer assignments.",
      "Connect source uncertainty to production decisions: when a parameter is undocumented, leave it unknown instead of filling the gap with a plausible industry default.",
      "Build a production plan that protects cultural specificity, performer comfort, night-location safety, analogue-media limits and sound-recording access while preserving the film's calm treatment of the supernatural."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the evidence hierarchy", player_task: "Separate BFI/Cannes identity records, the official press package, direct Apichatpong interviews, Thai Film Archive testimony and Akritchalerm's sound interview before turning details into production facts." },
      { id: "book_boundary", label: "Set the source-book boundary", player_task: "Keep A Man Who Can Recall His Past Lives as inspiration while preserving the feature's deliberate departure from literal biography." },
      { id: "primitive_project", label: "Map Primitive provenance", player_task: "Relate the feature to Primitive, Phantoms of Nabua and A Letter to Uncle Boonmee without collapsing distinct works into one production object." },
      { id: "regional_memory", label: "Define regional-memory scope", player_task: "Use Isan and Nabua as verified project contexts while flagging political-history claims that require independent historical sourcing." },
      { id: "autobiographical_boundary", label: "Separate personal memory", player_task: "Use the director's father and kidney-failure equipment as autobiographical provenance without identifying Boonmee with the father." },
      { id: "runtime_version", label: "Lock the runtime version", player_task: "Use 113 minutes as the institutional anchor and log alternate public runtimes as version differences rather than silent corrections." },
      { id: "super16_capture", label: "Lock Super 16 acquisition", player_task: "Treat the direct filmmaker statement as the capture-format anchor and reject any inference that the distributor's 35 mm format describes principal photography." },
      { id: "release_format", label: "Separate 35 mm release", player_task: "Record the documented 35 mm release specification as exhibition provenance without inventing blow-up, intermediate or laboratory details." },
      { id: "multi_dp_credit", label: "Protect multi-DP credit", player_task: "Keep all three credited cinematographers visible and do not assign sequences, units or technologies to individuals without a direct source." },
      { id: "natural_light_scout", label: "Scout natural light", player_task: "Track when foliage, trunks and landscape react to available light strongly enough to determine shooting time and blocking." },
      { id: "day_for_night", label: "Design day-for-night", player_task: "Coordinate suitable daylight, negative exposure latitude and the documented blue post treatment while leaving exact values and tools open." },
      { id: "old_tv_reference", label: "Translate the 16 mm TV memory", player_task: "Use remembered direct lighting, stiff delivery and simple monster staging as references rather than as a universal style imposed on every scene." },
      { id: "amateur_casting", label: "Cast for remembered performance", player_task: "Preserve the specific amateur-performer rationale for Boonmee and Huay while distinguishing regular collaborators and other performers." },
      { id: "dialect_integrity", label: "Protect dialect and locality", player_task: "Keep regional speech and local performer identity legible through rehearsal, recording and subtitle handoff instead of standardizing them away." },
      { id: "domestic_supernatural", label: "Stage ghosts as ordinary", player_task: "Coordinate eye lines, pauses, framing and sound so supernatural arrivals can be treated as part of domestic reality rather than as conventional shock beats." },
      { id: "simple_effects", label: "Bound supernatural effects", player_task: "Plan costumes, darkness, reflective or luminous visual cues and camera exposure conservatively while keeping undocumented mechanisms unresolved." },
      { id: "production_design", label: "Build lived geography", player_task: "Coordinate farm, house, jungle, cave and domestic details so the supernatural remains embedded in an ordinary material world." },
      { id: "house_search", label: "Preserve location-search provenance", player_task: "Use A Letter to Uncle Boonmee as evidence of the project's house-search process without asserting that every surveyed space became a feature location." },
      { id: "night_safety", label: "Plan remote night work", player_task: "Protect crew movement, lighting access and field-recording safety in dark rural locations without over-lighting away the intended darkness." },
      { id: "field_ambience", label: "Capture field ambience", player_task: "Record insects, birds, water and weather in stereo on a digital recorder while preserving location and take metadata." },
      { id: "ratchaburi_library", label: "Track jungle-sound provenance", player_task: "Keep Ratchaburi jungle recordings identifiable as a sound source separate from the feature's principal Isan project geography." },
      { id: "dialogue_ambience", label: "Balance dialogue and environment", player_task: "Allow natural ambience to remain unusually present when intentional while protecting intelligibility and versioning choices for the mix." },
      { id: "chance_recordings", label: "Preserve useful accidents", player_task: "Log rare clean ambience captures such as the documented cricket recording so editorial can exploit them without pretending they can be recreated on demand." },
      { id: "editorial_drift", label: "Edit memory drift", player_task: "Let scene transitions, long duration and style changes follow the film's stream-of-consciousness principle while preserving enough temporal and spatial orientation for deliberate ambiguity." },
      { id: "still_photo_boundary", label: "Handle the still-photo sequence", player_task: "Treat the sequence as the meeting point of feature memory and Primitive-project memory while separating it from independent documentary proof." },
      { id: "post_supervision", label: "Coordinate post supervision", player_task: "Track analogue capture, day-for-night treatment, sound design, subtitling and release-format deliverables through Lee Chatametikool's editor/post-supervisor handoff." },
      { id: "reception_boundary", label: "Separate production from reception", player_task: "Use Cannes competition and Palme d'Or records as downstream reception evidence rather than proof of production technique." },
      { id: "historical_boundary", label: "Protect historical boundaries", player_task: "Keep artistic statements about nationalism, censorship, disappearing media and local memory clearly attributed and separate from independent historical claims." },
      { id: "unknowns_register", label: "Maintain the unknowns register", player_task: "Leave exact camera bodies, lenses, stocks, lighting units, lab steps, grading settings, VFX totals and cinematographer-to-sequence assignments unresolved until title-specific evidence supports them." },
      { id: "chapter18_position", label: "Position the analogue countercurrent", player_task: "Explain how Super 16 capture, post treatment, transnational production and festival circulation make the film a precise Chapter 18 case rather than an exception outside digital convergence." }
    ]
  }
] as const;

export function mergeChapterEighteenUncleBoonmeeExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenUncleBoonmeeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_uncle_boonmee_verified",
      source: { list_id: "manual_chapter_eighteen_uncle_boonmee_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
