import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixHollywoodExpansionDefinitions = [
  {
    id: "scenario_the_gold_rush_1925",
    title: "The Gold Rush",
    originalTitle: "The Gold Rush",
    aliases: [],
    year: 1925,
    titleType: "Feature",
    runtimeMins: 88,
    directors: ["Charles Chaplin"],
    genres: ["Adventure", "Comedy", "Drama", "Romance"],
    premise: "Build The Gold Rush as a 1925 Charles Chaplin Productions feature in star-producer authorship and independent distribution: coordinate Chaplin's Lone Prospector performance, feature-length comedy and pathos, Truckee snow-country location material, Hollywood studio construction, miniature mountain effects and United Artists release into one production system. Treat Chaplin as writer-director-producer-editor without erasing the documented work of cinematographer Roland Totheroh, art director Charles D. Hall and the wider unit. Keep the original 1925 silent release distinct from Chaplin's materially revised 1942 reissue, which replaced intertitles with Chaplin narration, added a newly composed synchronized score and altered footage and the ending.",
    sourceId: "manual_the_gold_rush_1925",
    sourceUrl: "https://catalog.afi.com/Film/9427-THE-GOLD-RUSH",
    scenarioType: "star_producer_feature_comedy",
    requiredChoicesSeed: {
      screenplay: ["tragedy_into_comedy_set_piece_structure", "lone_prospector_emotional_arc", "gag_and_pathos_feature_progression"],
      camera: ["truckee_location_scale", "hollywood_miniature_landscape", "performance_and_effects_spatial_legibility"],
      editing: ["feature_gag_escalation", "location_studio_continuity", "1925_1942_version_boundary"],
      sound: ["silent_1925_release", "variable_1925_exhibition_music", "exclude_1942_narration_and_score"],
      themes: ["film_history", "charlie_chaplin", "united_artists", "star_producer", "independent_distribution"],
    },
    learningGoals: [
      "Plan a feature in which comic set pieces, hunger, isolation, romance and aspiration accumulate into one emotional arc rather than a loose succession of gags.",
      "Coordinate location scale and studio control: use the documented Truckee snow-country shoot for Chilkoot Pass imagery while treating the Hollywood miniature mountain range and constructed environments as deliberate production solutions.",
      "Model Chaplin's unusually concentrated writer-director-producer-editor authority without turning the film into a lone-genius myth: cinematography, art direction, assistants, performers, extras and effects construction remain collaborative labor.",
      "Use The Gold Rush to teach United Artists as a distribution countermodel to vertically integrated majors: independent production control still depended on organized national and international release infrastructure.",
      "Keep performance and effects mutually legible so the Lone Prospector's body, the cabin, weather, mountain space and scale illusions produce comedy and danger inside the same visual system.",
      "Preserve version criticism: the 1925 silent release, its variable theatrical accompaniment, and the 1942 re-edited version with Chaplin narration and newly composed synchronized score are separate historical objects.",
    ],
    phases: [
      { id: "pitch", label: "Star-producer feature pitch", player_task: "Define why Chaplin should concentrate independent production resources on a long comedy where the Lone Prospector's star identity can carry both spectacle and pathos through United Artists distribution." },
      { id: "research", label: "Production and version research", player_task: "Ground Charles Chaplin Productions, United Artists, Truckee, Chaplin Studios, Roland Totheroh, Charles D. Hall and the 1925/1942 version boundary in institutional evidence." },
      { id: "screenplay", label: "Gag, danger and pathos", player_task: "Structure starvation, the cabin, Georgia, imagined success and comic set pieces so each gag changes the Prospector's dramatic situation instead of interrupting it." },
      { id: "casting", label: "Star body and ensemble", player_task: "Build around Chaplin's precise physical screen identity while keeping Georgia Hale, Mack Swain and Tom Murray legible as emotional, comic and danger-bearing partners." },
      { id: "production_design", label: "Klondike by location and construction", player_task: "Combine real snow-country scale with studio-built interiors and artificial mountain environments without pretending every image was made in one place or by one technique." },
      { id: "cinematography", label: "Performance inside scale", player_task: "Coordinate Totheroh's documented cinematography with location crowds, controlled studio staging and effects landscapes so bodies remain readable against dangerous space." },
      { id: "editing", label: "Feature rhythm and version boundary", player_task: "Escalate comic sequences and emotional returns across feature length, then explicitly separate the 1925 assembly from Chaplin's altered 1942 reissue." },
      { id: "sound", label: "Silent release, later sound reissue", player_task: "Treat 1925 as silent photographed production with exhibition-specific music, and exclude the 1942 narration and synchronized Chaplin score from claims about the original release." },
      { id: "release", label: "Independent production, organized distribution", player_task: "Model how Chaplin retained production control while United Artists supplied release infrastructure capable of turning a star-authored feature into an international event." },
    ],
  },
  {
  id: "scenario_the_crowd_1928",
  title: "The Crowd",
  originalTitle: "The Crowd",
  aliases: ["The Mob"],
  year: 1928,
  titleType: "Feature",
  runtimeMins: 98,
  directors: ["King Vidor"],
  genres: ["Drama"],
  premise: "Build The Crowd as a 1928 Metro-Goldwyn-Mayer production problem in making an ordinary urban life legible inside a large studio system. King Vidor and John V. A. Weaver shape John and Mary Sims around work, marriage, grief and disappointed ambition; Henry Sharp's cinematography moves between controlled interiors and concealed-camera New York exteriors; Cedric Gibbons and A. Arnold Gillespie are credited for settings; Hugh Wynn edits a nine-reel silent feature whose ending was actively tested and versioned for exhibitors. Use the famous movement from city scale into a vast office to make the individual visible inside mass organization without inventing an undocumented effects recipe, and preserve the difference between the 1928 silent release and the 1981 Brownlow-Gill restoration with Carl Davis's later score.",
  sourceId: "manual_the_crowd_1928",
  sourceUrl: "https://catalog.afi.com/Film/3514-THE-CROWD",
  scenarioType: "studio_social_realism_production",
  requiredChoicesSeed: {
    screenplay: ["everyman_social_pressure_arc", "marriage_grief_work_progression", "ordinary_life_without_heroic_exception"],
    camera: ["office_mass_to_individual_reveal", "concealed_camera_new_york_exteriors", "interior_exterior_scale_contrast"],
    editing: ["social_rhythm_and_causal_continuity", "preview_tested_endings", "exhibitor_ending_version_control"],
    sound: ["silent_1928_release", "no_invented_original_score", "1981_restoration_score_not_original"],
    themes: ["film_history", "mgm", "loews", "urban_modernity", "studio_social_realism"],
  },
  learningGoals: [
    "Use a major-studio production system to tell an ordinary couple's story without turning scale, sets or camera virtuosity into spectacle detached from social experience.",
    "Coordinate Henry Sharp's documented cinematography with the credited settings work of Cedric Gibbons and A. Arnold Gillespie so the office and city visually position John Sims as one person inside mass organization.",
    "Combine controlled studio interiors with documented concealed-camera New York exteriors, including Coney Island, while keeping the fiction's observational immediacy distinct from documentary authorship.",
    "Treat James Murray and Eleanor Boardman's documented naturalistic performances as part of a larger system of framing, blocking, setting and emotional duration rather than claiming one actor or director invented screen realism.",
    "Model MGM's preview and exhibition pressures through the documented multiple endings: seven endings were reportedly tested and two release endings were available to exhibitors, so editorial control is also an industrial distribution problem.",
    "Preserve version history: the 1928 release is a black-and-white silent feature, while the 1981 Brownlow-Gill restoration and Carl Davis score belong to later preservation and presentation history.",
  ],
  phases: [
    { id: "pitch", label: "Ordinary-life studio pitch", player_task: "Define why MGM should devote feature resources to a story whose stakes are employment, marriage, grief and frustrated ambition rather than exceptional adventure or star spectacle." },
    { id: "research", label: "MGM, city and version research", player_task: "Ground Vidor, Weaver, Sharp, Gibbons, Gillespie, Wynn, MGM/Loew's, New York location practice, silent format and the multiple-ending history in institutional evidence." },
    { id: "screenplay", label: "Everyman pressure arc", player_task: "Structure John's ambitions and the Sims marriage around work, money, children, loss and reconciliation so ordinary events accumulate causal and emotional weight." },
    { id: "casting", label: "Naturalistic central couple", player_task: "Keep James Murray and Eleanor Boardman emotionally specific without isolating them from the crowds, relatives, coworkers and social environments that define their pressures." },
    { id: "production_design", label: "Individual inside mass space", player_task: "Use the credited settings system to contrast the Sims household, the giant office and public urban spaces while avoiding unsupported claims about exact construction or effects methods." },
    { id: "cinematography", label: "City scale to human scale", player_task: "Coordinate the office reveal, intimate interiors and documented concealed-camera New York material so the camera can move between anonymity in the crowd and individual experience." },
    { id: "editing", label: "Continuity and contested endings", player_task: "Sustain a lucid social-emotional progression across nine reels, then treat previewed and exhibitor-selectable endings as explicit version branches rather than one falsely immutable cut." },
    { id: "sound", label: "Silent production, later restoration score", player_task: "Keep the 1928 object silent and do not assign Carl Davis's 1981 restoration score or any other later accompaniment to original synchronized production sound." },
    { id: "release", label: "Studio distribution meets audience testing", player_task: "Model how MGM/Loew's distribution, previews and exhibitor choice could shape the final public object even when the director preferred the less upbeat ending." },
  ],
},
] as const;

export function mergeChapterSixHollywoodExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixHollywoodExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_six_hollywood_verified",
      source: {
        list_id: "manual_chapter_six_hollywood_expansion_2026",
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
