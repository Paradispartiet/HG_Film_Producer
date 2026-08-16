import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEightFrenchAvantGardeExpansionDefinitions = [
  {
    id: "scenario_coeur_fidele_1923",
    title: "Cœur fidèle",
    originalTitle: "Cœur fidèle",
    aliases: ["Coeur fidèle", "Coeur fidele", "Faithful Heart"],
    year: 1923,
    titleType: "Feature",
    runtimeMins: 84,
    directors: ["Jean Epstein"],
    genres: ["Drama", "Romance"],
    premise: "Build Cœur fidèle as a 1923 Pathé Consortium Cinéma production problem in French Impressionist perception rather than as a generic tragic-romance plot. Jean and Marie Epstein shape the screenplay, Jean Epstein directs, Paul Guichard leads cinematography with camera operators Léon Donnot and Henri Stuckert, and Gina Manès, Léon Mathot and Edmond Van Daële carry a Marseille dockside melodrama whose emotional pressure is transformed through subjective framing, superimposition and rhythmic editing. Treat the celebrated fairground sequence as an integrated camera-and-editing system that contrasts Marie's isolation with mechanical rotation and public festivity, not as a checklist of flashy effects. Use photogénie as historically contested Epstein-era theory about cinema's transformation of faces, objects, movement and duration, never as a measurable gameplay score or a claim that this film invented subjective camera or rapid montage. Preserve the distinction between the 1923 silent production and modern restored 84-minute DCP/35 mm presentations with contemporary accompaniment.",
    sourceId: "manual_coeur_fidele_1923",
    sourceUrl: "https://www.cinematheque.fr/film/48086.html",
    scenarioType: "impressionist_subjective_rhythm_production",
    requiredChoicesSeed: {
      screenplay: ["epstein_marie_dockside_melodrama", "simple_tragedy_over_plot_complexity", "emotion_through_visual_relation"],
      camera: ["subjective_maritime_closeups", "fairground_motion_fragments", "faces_objects_and_environment_as_perception"],
      editing: ["rhythmic_fairground_montage", "superimposition_and_association", "emotional_duration_over_continuity_display"],
      sound: ["silent_1923_production", "exhibition_accompaniment_not_synchronized_dialogue", "modern_restoration_music_not_original_soundtrack"],
      themes: ["film_history", "french_impressionism", "jean_epstein", "pathe_consortium", "photogenie_context", "subjective_cinema"],
    },
    learningGoals: [
      "Plan a simple melodramatic situation whose emotional force comes from the relation among faces, objects, harbor space, camera position and editing rather than from adding plot complications.",
      "Coordinate subjective framing, close views, superimposition and rhythmic cutting so technique changes how Marie's isolation and pressure are experienced instead of functioning as detachable avant-garde decoration.",
      "Reconstruct the fairground passage as a production system: performance, rotating attractions, camera fragments, motion, repeated details and cut rhythm must reinforce one emotional contradiction between public festivity and private distress.",
      "Keep authorship collaborative by preserving Marie Epstein's documented screenplay role, Paul Guichard's cinematography and Donnot/Stuckert's camera work alongside Jean Epstein's direction and theory.",
      "Use photogénie as a historically specific and debated theoretical lens for cinema's transformation of things and duration, not as a universal style preset, numerical score or invention claim.",
      "Preserve object history: the photographed 1923 silent feature and today's restored 84-minute presentations, projection speeds and musical accompaniments are related but not identical historical objects.",
    ],
    phases: [
      { id: "pitch", label: "Perception-led melodrama pitch", player_task: "Define why a deliberately simple dockside love-and-coercion story can justify formal experimentation only when each technique intensifies a character relation or state of perception." },
      { id: "research", label: "Pathé and Epstein evidence", player_task: "Ground Jean and Marie Epstein, Pathé Consortium Cinéma, Guichard, Donnot, Stuckert, the principal cast, silent format and restoration history in institutional sources before assigning craft claims." },
      { id: "screenplay", label: "Simple tragedy, visual pressure", player_task: "Keep Marie, Jean and Petit Paul's causal conflict legible and sparse enough that images can carry emotional complexity without confusing formal density with narrative complexity." },
      { id: "casting", label: "Faces inside social pressure", player_task: "Direct Manès, Mathot and Van Daële through gaze, stillness, proximity and reaction so close views and montage have specific emotional material to transform." },
      { id: "production_design", label: "Harbor and fairground environments", player_task: "Use Marseille-associated dockside textures, bar space and fairground machinery as active visual materials while avoiding unsupported claims that every surviving exterior can be mapped to one documented street or set." },
      { id: "cinematography", label: "Subjective fragments and movement", player_task: "Coordinate Guichard and the camera operators around faces, objects, moving attractions and changing camera relations so perception becomes filmable without claiming a single lens or rig invented Impressionist cinema." },
      { id: "editing", label: "Rhythm as emotional structure", player_task: "Build the fairground and other associative passages from repeated motion, superimposition and variable shot duration so rhythm expresses pressure rather than merely demonstrating fast cutting." },
      { id: "sound", label: "Silent production, presentation-aware music", player_task: "Keep 1923 production silent and treat live or recorded accompaniment attached to later screenings and restorations as presentation history rather than synchronized original sound." },
      { id: "release", label: "Pathé circulation and critical afterlife", player_task: "Model commercial Pathé production/distribution alongside the film's later avant-garde canonization, keeping contemporary production facts separate from retrospective critical labels and restoration history." },
    ],
  },
  {
    id: "scenario_napoleon_1927",
    title: "Napoléon",
    originalTitle: "Napoléon vu par Abel Gance",
    aliases: ["Napoleon"],
    year: 1927,
    titleType: "Feature",
    runtimeMins: 425,
    directors: ["Abel Gance"],
    genres: ["Biography", "Drama", "History", "War"],
    premise: "Build Napoléon as Abel Gance's 1927 large-scale French production and exhibition experiment rather than as one immutable seven-hour director's cut. Société du Film Napoléon and Société Générale de Films organize Gance's direction and screenplay with cinematographers Jules Krüger, Jean-Paul Mundviller and Léonce-Henri Burel, editors Gance and Marguerite Beaugé, a large assistant-director and camera apparatus, extensive design and effects labor, and Albert Dieudonné's central performance. Coordinate body-mounted, track, vehicle, horse and pendulum-like camera solutions, rapid montage, split-screen and multiple-exposure strategies with crowds and location logistics, then treat the climactic three-screen Polyvision triptych as both a capture problem and an exhibition-infrastructure problem. Preserve version criticism as a core mechanic: the 7 April 1927 Opéra presentation, the much longer May Apollo version, MGM export recuts, Gance's 1934–1935 sound re-edit and modern reconstructions are different historical states. The representative 425-minute runtime stored here follows La Cinémathèque française's current two-part Grande Version reconstruction (220 + 205 minutes), not an assertion that one 425-minute object was the sole original 1927 release.",
    sourceId: "manual_napoleon_1927",
    sourceUrl: "https://www.cinematheque.fr/film/48685.html",
    scenarioType: "large_scale_experimental_polyvision_production",
    requiredChoicesSeed: {
      screenplay: ["gance_revolutionary_biographical_arc", "youth_to_italian_campaign_progression", "mass_history_and_personal_myth_coordination"],
      camera: ["multi_camera_mobile_rig_system", "snowball_storm_corsica_subjective_motion", "polyvision_three_camera_capture"],
      editing: ["accelerated_montage_and_multiple_images", "parallel_mass_personal_rhythm", "opera_apollo_mgm_version_control"],
      sound: ["silent_1927_release_states", "arthur_honegger_music_context", "1935_sound_reedit_and_modern_scores_separate"],
      themes: ["film_history", "french_avant_garde", "abel_gance", "polyvision", "large_scale_logistics", "version_criticism"],
    },
    learningGoals: [
      "Plan formal experimentation at epic scale by coordinating many cameras, operators, assistants, performers, extras, vehicles, sets and effects rather than treating Gance's visual ideas as solo improvisations detached from production logistics.",
      "Use mobile-camera devices only when their physical placement changes historical space or subjective experience: the snowball fight, storm, Corsican pursuit and crowd sequences require different rigs, safety assumptions and editorial consequences.",
      "Treat split screens, multiple exposures and accelerated montage as planned relations among capture, masking, exposure and editing, not as a generic 'avant-garde' button that automatically makes a scene modern.",
      "Build Polyvision as an exhibition system: three coordinated images require capture planning, editorial design, three projection channels and a venue capable of presenting the triptych, so the finale is not reducible to an extra-wide frame.",
      "Keep authorship collaborative by preserving the documented cinematographers, Marguerite Beaugé's editing, designers, effects coordinators, assistant directors and broad camera labor alongside Gance's unusually concentrated creative authority.",
      "Preserve the version tree: Opéra, Apollo, MGM/export, 1935 sound re-edit and modern reconstructions must remain separate evidence layers, and the current 425-minute Grande Version must never be mislabeled as the single untouched 1927 original.",
    ],
    phases: [
      { id: "pitch", label: "Epic experiment pitch", player_task: "Define why the early Napoleon story needs feature-scale historical logistics and aggressive camera/editing experimentation strongly enough to justify the cost and complexity." },
      { id: "research", label: "Credits, apparatus and version research", player_task: "Ground Gance, the production companies, Krüger/Mundviller/Burel, Beaugé, design/effects departments, camera apparatus, Polyvision and the 1927-to-restoration version tree in institutional evidence." },
      { id: "screenplay", label: "Biography through mass history", player_task: "Connect Brienne, revolutionary Paris, Corsica and the Italian campaign so personal myth, political crowds and military geography accumulate rather than becoming disconnected showcase sequences." },
      { id: "casting", label: "Napoleon inside crowds", player_task: "Keep Dieudonné's Napoleon and the ensemble readable through posture, reaction and recurring visual motifs even when mass staging and formal fragmentation dominate the frame." },
      { id: "production_design", label: "Historical worlds at changing scale", player_task: "Coordinate school, revolutionary assemblies, Corsican landscapes, military environments and triptych imagery with design departments while distinguishing documented credits from uncertain reconstruction of exact set plans." },
      { id: "cinematography", label: "Many cameras, many physical problems", player_task: "Assign rigs and operators according to shot function—track, body, vehicle, horse, suspended motion, conventional coverage or Polyvision—without pretending one camera trick solves every sequence." },
      { id: "editing", label: "Montage and version tree", player_task: "Use rapid rhythm, overlays, split images and parallel action to organize scale, while tracking Opéra, Apollo and MGM assemblies as historically distinct editorial states rather than one recoverable pristine cut." },
      { id: "sound", label: "Silent states and later sound layers", player_task: "Keep the 1927 film states silent, preserve Arthur Honegger's historical music context, and separate Gance's 1935 sound re-edit plus Carl Davis/Simon Cloquet-Lafollye-era restoration music from original synchronized production claims." },
      { id: "release", label: "Polyvision exhibition and reconstruction", player_task: "Model the practical difference between ordinary single-screen circulation and a triptych-capable presentation, then treat later recuts and restorations as changing access to the work rather than retroactive production facts." },
    ],
  },
] as const;

export function mergeChapterEightFrenchAvantGardeExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEightFrenchAvantGardeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eight_french_avant_garde_verified",
      source: {
        list_id: "manual_chapter_eight_french_avant_garde_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
      },
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
