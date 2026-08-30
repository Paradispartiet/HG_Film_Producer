import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenSaintOmerExpansionDefinitions = [
  {
    id: "scenario_saint_omer_2022",
    title: "Saint Omer",
    originalTitle: "Saint Omer",
    aliases: ["Saint Omer", "Saint-Omer"],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 123,
    directors: ["Alice Diop"],
    genres: ["Drama"],
    sourceId: "la_biennale_saint_omer_2022",
    sourceUrl: "https://www.labiennale.org/en/cinema/2022/venezia-79-competition/saint-omer",
    scenarioType: "auteur_festival_france_srab_films_arte_france_cinema_pictanovo_alice_diop_documentary_fiction_trial_transcripts_three_week_saint_omer_shoot_chronological_courtroom_long_single_takes_twenty_minute_takes_red_gemini_5k_full_frame_leitz_m_0_8_50mm_schneider_classic_soft_1_16_1_85_1_single_camera_panavision_natural_daylight_small_led_package_skypanel_luxed_litemat_astera_dmg_courtroom_rebuild_wood_panels_skin_tone_palette_m141_grade_mathilde_delacroix_amrita_david_editorial_breathing_caroline_shaw_nina_simone_venice_grand_jury_prize_2022",
    premise: "Build Saint Omer as Chapter 19's auteur/festival production case by treating Alice Diop's first narrative feature as a deliberately hybrid production method in which documentary research, verbatim trial language, fiction writing, performance duration, single-camera portraiture, natural-light variability, production-design intervention, intuitive editing and festival circulation are coordinated rather than separated into conventional fiction/documentary boxes. La Biennale di Venezia records the 2022 French feature at 123 minutes, produced by Srab Films with Arte France Cinema and Pictanovo Hauts-de-France, written by Alice Diop, Amrita David and Marie NDiaye, photographed by Claire Mathon, edited by Amrita David, designed by Anna Le Mouel, costumed by Annie Melza Tiburce and credited for sound to Dana Farzanehpour, Josefina Rodriguez, Lucile Demarquet and Emmanuel Croset. CNC records Srab Films, regional/public support, Les Films du Losange distribution, Wild Bunch International sales and CNC development/production-distribution support. Diop attended the 2016 trial that inspired the film and describes the resulting fiction as a continuation of her documentary practice: the courtroom material uses language drawn extensively from the real proceedings, while the fictional Rama structure creates a subjective frame around that material. The screenplay was developed with editor Amrita David and novelist Marie NDiaye, so writing and editorial thinking were connected before shooting rather than handed off as fully separate stages. Diop identifies Frederick Wiseman, Robert Bresson's The Trial of Joan of Arc, Raymond Depardon's courtroom work and other documentary/fiction references as formal touchstones, but the player must treat those as influences rather than evidence that Saint Omer duplicates their methods. Claire Mathon says she met Diop almost two years before photography and that they developed a pictorial portrait strategy around paintings, dark skin against controlled backgrounds and a warm ochre/wood/brown/rust/bronze palette coordinated with costume. During Covid-period remote preparation they debated whether to recreate the original court or use the actual Saint-Omer courthouse. Two months before shooting they visited the real courthouse and selected a smaller, brighter room whose white walls could be transformed with wood panelling. That spatial change brought the characters physically and emotionally closer and allowed the production to remove the glass accused box. Mathon tested RED Monstro with Primo lenses against RED Gemini with Leitz M 0.8 lenses, then chose RED Gemini in 5K full-frame mode with Leitz M 0.8 lenses, frequently a 50mm, plus a Schneider HD Classic Soft 1/16 filter and 1.85:1 framing. Panavision supplied the camera package. Saint Omer was a single-camera shoot operated by Mathon. Rather than using two cameras to capture every courtroom angle, Diop and Mathon planned axes and compositions upstream and committed to long static shots with movements intended to remain nearly imperceptible; long tracking shots accompany Rama without turning camera motion into spectacle. Diop says some testimony passages were conceived as roughly twenty-minute single takes, and Los Angeles Times reports that the courtroom sequences were shot chronologically during a three-week Saint-Omer shoot, with Diop avoiding conventional shouted Action/Cut cues so actors could inhabit the exchanges as continuous lived events. Mathon describes a very small lighting inventory: ARRI SkyPanels, LightStar Luxed-9 units, LiteGear LiteMat Plus 3s, Astera tubes and Rosco DMG SL1s supplied through Panalux. The principal daytime courtroom strategy was nevertheless natural light through the windows, shaped, cut and diffused so faces remained luminous against the wood-toned backgrounds while accepting real exterior variation during very long takes. Mathon kept a hand on the iris to respond to changing daylight instead of trying to freeze every fluctuation. Night work sought warm golden city/bulb light within the established skin-and-wood palette rather than literal realism. LUT development began with colourist Yov Moor; Mathon later completed the final grade with Mathilde Delacroix at M141 in Paris, prioritizing the specificity of individual skin tones while maintaining overall unity. Diop describes editing with Amrita David as organic and intuitive, governed by the film's internal breathing, emotional truth and a political commitment to giving sustained screen time to the complexity of a Black woman rather than by a predetermined cutting formula. The flashback structure around Rama was written from the start, while the court material preserves long durations that can shift the viewer's judgment inside a shot. Sound and music remain deliberately restrained. Diop discusses Caroline Shaw's female-voice music as a bridge between Rama's interiority and Greek-tragedy references and uses Nina Simone at the end as a release after sustained emotional containment; La Biennale and Criterion preserve the principal sound credits and a 5.1 release context. The locked sources do not establish the exact production budget, financing shares, full public-funding recoupment terms, insurance, complete three-week day-by-day schedule, crew call sheets, all permits, every courtroom construction drawing, exact camera media/codec/data-management workflow, complete focal-length/exposure reports, LUT transforms, detailed sound-recording equipment, radio/boom plan, ADR/foley architecture, mix stages or stems, all music licensing/session terms, complete editorial NLE/storage/assistant structure, detailed post schedule or distribution economics. Those remain unresolved. The player must therefore coordinate a French auteur production where research ethics, transcript-based writing, actor trust, chronological long-take shooting, one-camera commitment, daylight variability, altered courtroom architecture, skin-tone-sensitive colour design, editorial duration, restrained sound/music and Venice-facing festival circulation all constrain one another.",
    requiredChoicesSeed: {
      screenplay: ["alice_diop_amrita_david_marie_ndiaye", "trial_language_research", "rama_fiction_frame", "flashbacks_written_from_start", "documentary_fiction_boundary"],
      camera: ["red_gemini_5k_full_frame", "leitz_m_0_8", "50mm_bias", "schneider_classic_soft_1_16", "1_85_1", "single_camera", "long_static_takes", "imperceptible_movement", "natural_daylight", "small_led_package"],
      editing: ["amrita_david_edit", "internal_breathing", "long_take_duration", "written_flashbacks", "nle_storage_unknown"],
      sound: ["dana_farzanehpour", "josefina_rodriguez", "lucile_demarquet", "emmanuel_croset", "caroline_shaw", "nina_simone", "restrained_sound_music", "recording_mix_chain_unknown"],
      themes: ["film_history", "2022", "saint_omer", "alice_diop", "auteur_festival", "french_cinema", "srab_films", "documentary_fiction", "courtroom", "trial_transcripts", "long_take", "portraiture", "natural_light", "skin_tone", "venice", "chapter19"]
    },
    learningGoals: [
      "Explain Saint Omer as Chapter 19's auteur/festival rotation case after Nope.",
      "Use La Biennale's 123-minute record as the canonical playable runtime anchor.",
      "Identify Srab Films, Arte France Cinema and Pictanovo Hauts-de-France as the documented production context without inventing financing shares.",
      "Identify Toufik Ayadi and Christophe Barral as the named Srab Films producers in the Venice record.",
      "Identify Les Films du Losange as French distributor and Wild Bunch International as international-sales company from CNC without treating sales as production financing proof.",
      "Identify Alice Diop, Amrita David and Marie NDiaye as screenwriters and distinguish their collaboration from a conventional solitary-writer model.",
      "Explain how Diop's attendance at the 2016 trial became research material without claiming that every fictional scene is a literal transcript.",
      "Explain the extensive use of actual trial language as a documentary-research layer inside a scripted fiction film.",
      "Explain Rama as a fictional subjective frame that lets the film move beyond courtroom transcription.",
      "Explain why Diop describes fiction and documentary as continuous practices rather than mutually exclusive production categories.",
      "Treat Frederick Wiseman, Bresson and Depardon as documented formal references rather than production templates copied shot for shot.",
      "Explain why very long single takes were chosen to preserve duration, listening and changing spectator judgment.",
      "Explain Diop's use of roughly twenty-minute testimony takes as a performance and camera commitment rather than simply slow pacing.",
      "Explain why chronological courtroom shooting can support cumulative actor experience and continuity of emotional state.",
      "Explain Diop's avoidance of conventional shouted Action/Cut cues as an actor-space strategy without pretending the production lacked normal safety or technical controls.",
      "Identify Claire Mathon as cinematographer and operator on the single-camera shoot.",
      "Explain the roughly two-year director-cinematographer development relationship as unusually early visual preparation.",
      "Explain the painting references as tools for framing, skin/background contrast and portraiture rather than decorative art-history citations.",
      "Explain the ochre, wood, brown, rust and bronze palette as a coordinated cinematography/design/costume system.",
      "Explain why the production reconsidered the real courtroom rather than assuming authenticity required shooting in the exact original room unchanged.",
      "Explain the selection of a smaller, brighter room in the Saint-Omer courthouse as a spatial, lighting and emotional production decision.",
      "Explain adding wood panelling to white walls as production design serving the portrait contrast and institutional setting.",
      "Explain removal of the accused's glass box as a staging decision that changed spatial relationships while preserving the courtroom's dramatic function.",
      "Identify RED Monstro/Primo versus RED Gemini/Leitz M 0.8 as the documented camera-lens comparison test.",
      "Identify RED Gemini as the chosen camera and 5K full frame as the documented operating mode.",
      "Identify Leitz M 0.8 lenses, frequent 50mm use and Schneider HD Classic Soft 1/16 filtration without inventing a complete focal-length package.",
      "Explain 1.85:1 as a framing choice linking medium close-ups to the courtroom background.",
      "Identify Panavision as camera-package supplier without inferring undocumented bodies, accessories or contractual terms.",
      "Explain why a one-camera courtroom production can be more intentional than broad multicamera coverage when axes are planned upstream.",
      "Explain long static shots and nearly imperceptible movements as separate deliberate camera modes.",
      "Explain Rama's long tracking shots as continuous movement designed not to announce the camera.",
      "Identify the documented small LED inventory: ARRI SkyPanels, LightStar Luxed-9s, LiteGear LiteMat Plus 3s, Astera tubes and Rosco DMG SL1s.",
      "Explain why the LED inventory does not mean daytime courtroom scenes were primarily LED-lit.",
      "Explain the choice to work mostly with natural daylight inside the courtroom during long daytime takes.",
      "Explain cutting and diffusing daylight as active lighting design rather than passive available-light shooting.",
      "Explain Mathon's live iris response to changing exterior light as a way to preserve long-take continuity while keeping daylight alive.",
      "Explain warm golden night lighting as a palette-driven choice rather than strict street-light realism.",
      "Explain LUT development with Yov Moor as a look-development stage distinct from the final grade.",
      "Identify Mathilde Delacroix and M141 in Paris as the documented final-grade collaboration.",
      "Explain preservation of distinct skin tones as a central finishing requirement rather than generic color correction.",
      "Identify Amrita David as both co-writer and editor and explain why that continuity matters for structure.",
      "Explain Diop's description of editing by internal breathing and emotional accuracy without converting intuition into a false numerical cutting rule.",
      "Explain the written-from-the-start flashbacks as controlled subjective information about Rama rather than spontaneous post-production inserts.",
      "Explain emotional containment across the edit and the late release of feeling as an authored structural strategy.",
      "Identify Dana Farzanehpour, Josefina Rodriguez, Lucile Demarquet and Emmanuel Croset as the Venice-credited sound team while keeping exact role-by-role equipment and stem architecture unresolved.",
      "Explain Caroline Shaw's female-voice music as connected by Diop to Rama's interiority and Greek-tragedy references.",
      "Explain Nina Simone's closing use as an intentional emotional release without claiming unsourced licensing or mix details.",
      "Explain the three-week Saint-Omer shoot as a compact physical-production window documented by Los Angeles Times while keeping the exact day count and call sheets unresolved.",
      "Separate Venice Grand Jury Prize / debut recognition from evidence about how the film was made.",
      "Explain Saint Omer's Chapter 19 value as a case where auteur rigor is expressed through constraint, duration, research and interdepartmental precision rather than production scale.",
      "Maintain an uncertainty register for budget, finance, insurance, detailed schedule, permits, set drawings, media/data workflow, complete camera reports, LUT transforms, production-sound package, ADR/foley, mix routing, music terms, editorial infrastructure and distribution economics.",
      "Build a closing production audit that checks research provenance, writing, actor process, court geography, camera package, daylight strategy, design palette, edit, sound/music, festival circulation and unresolved claims before Production Verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Saint Omer evidence hierarchy", player_task: "Separate Venice/CNC institutional records, Diop interviews, Mathon's cinematography testimony and later criticism before promoting production claims." },
      { id: "trial_research", label: "Build the trial-research boundary", player_task: "Track what comes from the 2016 trial and what belongs to the fictional Rama structure without collapsing the two." },
      { id: "writing_room", label: "Coordinate the three-writer process", player_task: "Develop Alice Diop, Amrita David and Marie NDiaye's material around language, subjectivity and fictional framing." },
      { id: "fiction_documentary", label: "Define the documentary-fiction contract", player_task: "Preserve documentary attention to reality while acknowledging that the production is a scripted fiction feature." },
      { id: "performance_duration", label: "Design for sustained performance", player_task: "Prepare actors and crew for very long testimony takes where listening and emotional continuity must survive inside one shot." },
      { id: "chronological_trial", label: "Shoot the courtroom chronologically", player_task: "Use chronological progression to support cumulative performance states without inventing unsourced day-by-day call sheets." },
      { id: "quiet_set", label: "Create the continuous actor space", player_task: "Minimize disruptive verbal start-stop cues while preserving the technical and safety discipline required by a professional set." },
      { id: "visual_research", label: "Build the portrait reference library", player_task: "Translate painting and film references into face/background contrast, framing and palette rather than literal imitation." },
      { id: "court_location", label: "Choose the Saint-Omer courtroom", player_task: "Compare institutional authenticity, room size, daylight and actor distance before selecting the smaller brighter courthouse room." },
      { id: "court_transform", label: "Transform the courtroom", player_task: "Add tested wood-panel tones and adjust the accused space so architecture supports portraiture and proximity." },
      { id: "camera_tests", label: "Test camera and lens texture", player_task: "Compare Monstro/Primo and Gemini/Leitz combinations for definition, texture, skin rendering and palette before locking capture." },
      { id: "camera_package", label: "Lock the Gemini package", player_task: "Use RED Gemini at 5K full frame with Leitz M 0.8 lenses and the documented filtration without inventing the full accessory list." },
      { id: "aspect_ratio", label: "Lock 1.85:1 portrait geometry", player_task: "Compose medium close-ups so the face and institutional background remain in deliberate relation." },
      { id: "single_camera", label: "Commit to one camera", player_task: "Reject default two-camera courtroom coverage and protect the preselected axes and compositions." },
      { id: "static_duration", label: "Hold the long static frame", player_task: "Let testimony and reaction develop within sustained compositions rather than solving intensity through coverage." },
      { id: "imperceptible_motion", label: "Hide camera movement", player_task: "Use restrained tracking or adjustment so movement accompanies Rama without calling attention to machinery." },
      { id: "daylight_plan", label: "Build around courtroom daylight", player_task: "Use the large windows as the principal daytime source and accept controlled natural variation during long takes." },
      { id: "shape_daylight", label: "Shape faces against wood", player_task: "Cut and diffuse daylight so skin remains luminous while wood-toned backgrounds retain designed contrast." },
      { id: "live_iris", label: "Ride changing natural light", player_task: "Respond to exterior daylight variation at the iris during sustained takes instead of pretending light is perfectly static." },
      { id: "small_led_package", label: "Reserve the small LED inventory", player_task: "Deploy SkyPanels, Luxed-9s, LiteMat Plus 3s, Astera tubes and DMG SL1s only where the natural-light strategy needs support." },
      { id: "night_palette", label: "Shape the warm night palette", player_task: "Use golden city/bulb motivation to protect warm skin and wood/bronze color relationships without forcing literal realism." },
      { id: "costume_palette", label: "Coordinate costume and background", player_task: "Keep Annie Melza Tiburce's costume colors in dialogue with the established portrait and courtroom palette." },
      { id: "lut_development", label: "Develop the look", player_task: "Test LUT behavior with Yov Moor while protecting highlight detail and avoiding a palette that destroys other colors." },
      { id: "final_grade", label: "Finish skin-tone continuity", player_task: "Complete the grade with Mathilde Delacroix at M141 while preserving the specificity of different skin tones and overall unity." },
      { id: "editorial_breathing", label: "Edit by internal breathing", player_task: "Use Amrita David's co-writer/editor continuity to preserve emotional accuracy without imposing a mechanical cutting cadence." },
      { id: "flashback_structure", label: "Place the written flashbacks", player_task: "Use Rama's preplanned flashbacks as subjective information rather than retroactive exposition." },
      { id: "sound_restraint", label: "Protect sonic restraint", player_task: "Let speech, room presence, silence and sparse music carry weight while keeping the undocumented recording and mix chain unresolved." },
      { id: "music_interiority", label: "Place Caroline Shaw and Nina Simone", player_task: "Use the documented musical functions for interiority and final emotional release without inventing licensing, session or stem details." },
      { id: "festival_circulation", label: "Prepare the Venice-facing release path", player_task: "Separate production completion, French distribution, international sales and Venice recognition instead of treating festival success as production proof." },
      { id: "unknowns_register", label: "Maintain the unknowns register", player_task: "Keep budget, financing shares, insurance, call sheets, permits, data workflow, full camera reports, sound package, mix routing, editorial infrastructure and distribution economics unresolved unless sourced." },
      { id: "production_audit", label: "Close the Saint Omer production audit", player_task: "Verify research provenance, court transformation, performance duration, camera/lighting choices, edit, sound/music, distribution and uncertainty boundaries before marking the case production-verified." }
    ]
  }
] as const;

export function mergeChapterNineteenSaintOmerExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenSaintOmerExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_saint_omer_verified",
      source: { list_id: "manual_chapter_nineteen_saint_omer_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
