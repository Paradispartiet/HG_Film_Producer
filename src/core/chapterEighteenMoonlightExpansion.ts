import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenMoonlightExpansionDefinitions = [
  {
    id: "scenario_moonlight_2016",
    title: "Moonlight",
    originalTitle: "Moonlight",
    year: 2016,
    titleType: "Movie",
    runtimeMins: 111,
    directors: ["Barry Jenkins"],
    genres: ["Drama"],
    sourceId: "arri_moonlight_2016",
    sourceUrl: "https://www.arri.com/news-en/-moonlight-dp-james-laxton-creates-poetic-look-on-alexa",
    scenarioType: "single_camera_alexa_xt_prores_anamorphic_hawk_vlite_miami_performance_di_triptych_music_editing_2016",
    premise: "Build Moonlight as Chapter 18's small-scale digital-cinema case in which capture, location, performance, color, editing and music were coordinated to make a three-part life story feel intimate rather than observational. James Laxton's direct Filmmaker interview specifies an ALEXA XT recording ProRes, an entirely one-camera shoot, Hawk V-Lite anamorphic lenses, Rec.709 monitoring rather than a bespoke on-set LUT, and later refinement with colorist Alex Bickel in the digital intermediate. Laxton explains that ProRes was chosen after testing because the film did not need the additional Raw workflow and because longer card times helped preserve momentum with child actors and first-time screen performers; do not convert this practical choice into a general claim that ProRes is superior to ARRIRAW. ARRI's production interview independently records the decision to shoot in Florida, especially Liberty City, to use anamorphic framing, and to prioritize natural, warm rendering of Black skin and low-light sensitivity. The film was shot in Miami, including Miami standing in for Atlanta, so place is not a generic backdrop: scouting, humid daylight, apartments, streets and beaches shaped angles, lighting and color. Laxton operated most of the film himself except Steadicam sequences and describes the camera as participating in scenes rather than watching from a detached long-lens distance. The production still adapts on the day to actors and physical spaces, so the visual system is disciplined without pretending every frame was pre-fixed. Lighting had to remain compact and performer-friendly in tight apartments; Filmmaker documents LiteMat 4 units, unbleached muslin, small LEDs and practical-like sources, while the ocean swimming scene ultimately relied on available Miami daylight under a compressed 90-minute weather window. The night beach scene required fully artificial base exposure and significant grip/electric resources despite the film's overall small scale. Preserve the camera-recording distinction carefully: Filmmaker identifies ALEXA XT/ProRes while ARRI's retrospective describes the ALEXA family more generally; use the direct Laxton workflow account for the recording claim and do not invent ARRIRAW. Color belongs to post as well as production. On set the team monitored Rec.709; the final DI with Bickel used different film-emulation directions for the three chapters—reported in the Filmmaker interview as Fuji for childhood, Agfa for adolescence and Kodak for adulthood—while production design, costume and lighting collaborated around emotional color rather than a rigid color-blocking scheme. This is a digital look-development case, not evidence that the images were photographed on those film stocks. Editing likewise responds to the triptych. Jenkins's postPerspective interview describes editors Nat Sanders and Joi McMillon receiving HD mirror dailies with a simple LUT while production continued, dividing the three stories, then cutting with Jenkins in a small Los Angeles room for roughly four months. A later A24 conversation records the final third of the edit sometimes advancing by only a few cuts per day because continuity of emotional energy across three different actors playing Chiron had to be tuned precisely. Music is part of the same identity system. Jenkins's Pitchfork interview records Nicholas Britell composing Little, Chiron and Black themes from the script and then transforming orchestral material through a chopped-and-screwed idea drawn from Southern/Houston hip-hop practice; source songs and score are distinct layers. Do not describe that music as a generic slowed soundtrack, erase DJ Screw/Houston lineage, or imply every cue was written before shooting. Keep production method separate from reception: later awards establish circulation and legacy, not why the Alexa, lens, DI, edit or score choices worked. Do not infer that a one-camera production means documentary spontaneity, that naturalistic skin rendering means neutral or ungraded imagery, that Rec.709 monitoring equals the final look, or that three film-emulation LUTs turn digital footage into three literal film stocks.",
    requiredChoicesSeed: {
      screenplay: ["triptych_chiron_structure", "place_memory_adaptation", "three_actor_continuity", "character_first_color_logic", "no_observational_distance"],
      camera: ["alexa_xt_prores", "single_camera_only", "hawk_vlite_anamorphic", "rec709_monitoring", "performer_momentum_rolls", "operator_inside_action", "steadicam_exception"],
      editing: ["mirror_hd_dailies", "two_editor_story_split", "four_month_refinement", "three_actor_energy_bridge", "di_after_rec709", "three_chapter_film_emulation"],
      sound: ["immersive_character_perspective", "source_music_distinct_from_score", "britell_orchestral_themes", "chopped_screwed_transformation", "houston_lineage_boundary"],
      themes: ["film_history", "2016", "moonlight", "barry_jenkins", "james_laxton", "nat_sanders", "joi_mcmillon", "alex_bickel", "nicholas_britell", "hannah_beachler", "caroline_eselin", "alexa_xt", "prores", "one_camera", "hawk_vlite", "anamorphic", "rec709", "digital_intermediate", "film_emulation", "miami", "liberty_city", "black_skin_rendering", "performance_continuity", "triptych", "chopped_and_screwed"],
    },
    learningGoals: [
      "Explain Moonlight as a small-scale digital production system rather than reducing it to an Alexa camera choice.",
      "Distinguish the direct ALEXA XT/ProRes workflow record from broader retrospective ALEXA-family descriptions.",
      "Explain why Laxton's tests led this title to ProRes without generalizing that decision to other productions.",
      "Connect longer record times to child actors, first-time screen performers and performance momentum.",
      "Explain what an entirely one-camera production changes about coverage, blocking and editorial options.",
      "Preserve the documented Steadicam exception instead of calling every shot handheld or operator-carried.",
      "Explain why Hawk V-Lite anamorphics were selected for sharpness, contrast and rendering rather than merely for widescreen spectacle.",
      "Explain why Jenkins and Laxton rejected a detached observational camera position.",
      "Trace how Miami and Liberty City shaped palette, light, scouting and spatial decisions.",
      "Distinguish real Miami locations from the diegetic Atlanta setting that Miami also represented.",
      "Explain why warm, natural rendering of Black skin was a camera and lighting requirement rather than a post-only concern.",
      "Describe compact LiteMat and LED strategies as responses to tight interiors and performer proximity.",
      "Separate available daylight in the swimming sequence from the fully artificial night-beach lighting solution.",
      "Use the swimming scene's compressed weather window as a logistics case rather than a claim that the production relied on luck.",
      "Explain Rec.709 as an on-set monitoring choice and not the final color grade.",
      "Trace the handoff from Rec.709 monitoring to Alex Bickel's digital-intermediate refinement.",
      "Explain Fuji-, Agfa- and Kodak-inspired chapter looks as digital film-emulation directions, not literal capture stocks.",
      "Connect production design, costume, lighting and DI color to emotional state without inventing a rigid color code.",
      "Explain how three actors playing Chiron create an editorial continuity problem across the triptych.",
      "Describe the HD mirror-dailies workflow that let Sanders and McMillon begin cutting away from the Miami set.",
      "Explain how the editors divided story material while retaining a shared final emotional architecture.",
      "Use Jenkins's four-month edit account to understand refinement rather than equating long post with production trouble.",
      "Explain why a few cuts per day late in the edit can represent precision rather than lack of progress.",
      "Distinguish Nicholas Britell's original score from licensed/source songs in the soundtrack.",
      "Explain how Little, Chiron and Black themes begin from the script and transform across the character's life.",
      "Describe chopped-and-screwed orchestral processing while preserving its Southern/Houston and DJ Screw lineage.",
      "Avoid treating slowed music as a purely formal effect detached from masculinity, vulnerability and regional culture.",
      "Explain how camera proximity, edit rhythm, color and music jointly construct subjectivity without claiming literal first-person narration.",
      "Keep awards and later acclaim downstream from production evidence.",
      "Compare Moonlight with Son of Saul: both restrict detached observation, but one uses a small digital/anamorphic/DI system while the other uses a photochemical single-lens optical workflow.",
      "Compare Moonlight with Gravity: both depend on post-production, but Moonlight's DI and edit refine photographed performance/location material rather than constructing a synthetic environment through previs and VFX.",
      "Separate documented workflow claims from aesthetic interpretation throughout the case.",
    ],
    phases: [
      { id: "adapt_triptych", label: "Build the three-part Chiron structure", player_task: "Translate the material into three life stages and define the emotional information that must persist even though the lead performer changes." },
      { id: "place_research", label: "Return the story to Miami", player_task: "Scout Liberty City, apartments, streets and beaches and let real spatial and light conditions refine the visual plan instead of treating Miami as generic texture." },
      { id: "reference_language", label: "Define a bold non-observational image language", player_task: "Build a shared reference library, then choose camera proximity, movement and color principles that place the audience emotionally inside scenes." },
      { id: "capture_test", label: "Test the digital recording path", player_task: "Compare the production's actual needs and commit to ALEXA XT ProRes when its latitude and recording duration support the performance-centered workflow without unnecessary Raw overhead." },
      { id: "anamorphic_test", label: "Choose the Hawk V-Lites", player_task: "Test anamorphic options for sharpness, contrast, faces and Miami backgrounds, then lock the lens family without treating anamorphic as automatic prestige." },
      { id: "one_camera", label: "Commit to one camera", player_task: "Plan blocking and coverage around a single camera so actors and operator share one point of attention and the edit does not depend on undocumented B-camera coverage." },
      { id: "skin_light", label: "Protect skin tone and intimacy", player_task: "Coordinate exposure, soft sources, color and lens rendering so Black skin remains dimensional and warm across daylight, interiors and night work." },
      { id: "compact_interiors", label: "Light small rooms without crowding performance", player_task: "Use compact LiteMats, muslin, LEDs and practical-like placement so lighting does not consume the apartment spaces actors need." },
      { id: "available_daylight", label: "Adapt the ocean scene to weather", player_task: "Use Miami daylight safely in the swimming scene, compress the plan when weather reduces the window and preserve performance rather than forcing an impossible original schedule." },
      { id: "night_beach", label: "Build a full night exposure base", player_task: "Allocate grip and electric resources to create the beach scene's entire usable night exposure while keeping the lighting emotionally soft and motivated." },
      { id: "camera_with_actor", label: "Operate inside the scene", player_task: "Keep the camera physically responsive to performers, using Steadicam where planned but avoiding a distant observational long-lens default." },
      { id: "performance_momentum", label: "Let takes breathe", player_task: "Use ProRes record duration and simple resets to keep child and first-time screen performers in momentum when repeated slating would break concentration." },
      { id: "monitor_simple", label: "Keep set monitoring fast", player_task: "Monitor Rec.709 for a usable high-contrast saturated reference and defer fine look construction to the DI instead of pretending the monitor image is final." },
      { id: "mirror_dailies", label: "Feed the remote editorial team", player_task: "Create HD mirror dailies with a simple LUT and ship them to Los Angeles so editorial can assemble while principal photography continues." },
      { id: "split_edit", label: "Divide the triptych without fragmenting it", player_task: "Let Sanders and McMillon work on distinct story sections while sharing material and preserving continuity across Little, Chiron and Black." },
      { id: "emotional_bridge", label: "Tune continuity across three actors", player_task: "Use gesture, rhythm, sound and adjacent cuts to make three performances carry one evolving character without forcing physical resemblance." },
      { id: "di_chapters", label: "Grade three lives as one film", player_task: "With Bickel, refine the digital negative and use Fuji-, Agfa- and Kodak-inspired emulation directions as chapter-specific color tools while preserving visual unity." },
      { id: "score_themes", label: "Compose Little, Chiron and Black", player_task: "Develop Britell's orchestral themes from the script and decide where score, silence and source music best reveal rather than explain character." },
      { id: "chop_screw", label: "Transform the orchestral material", player_task: "Apply chopped-and-screwed ideas to orchestral themes with explicit respect for Southern/Houston lineage, using time and pitch transformation to expose vulnerability rather than imitate a surface effect." },
      { id: "final_mix", label: "Make image, music and sound one subjective field", player_task: "Balance dialogue, ambience, source music and score so immersion supports Chiron's consciousness without converting the soundtrack into constant emphasis." },
      { id: "method_boundary", label: "Audit production claims", player_task: "Keep capture format, monitoring, DI, edit, music sources, aesthetic interpretation and later reception in separate evidence layers so no one layer is made to prove another." },
    ],
  },
] as const;

export function mergeChapterEighteenMoonlightExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenMoonlightExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_moonlight_verified",
      source: { list_id: "manual_chapter_eighteen_moonlight_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
