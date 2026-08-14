import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFourIndustryExpansionDefinitions = [
  {
    id: "scenario_the_story_of_the_kelly_gang_1906",
    title: "The Story of the Kelly Gang",
    originalTitle: "The Story of the Kelly Gang",
    aliases: ["Story of the Kelly Gang"],
    year: 1906,
    titleType: "Feature",
    runtimeMins: 60,
    directors: ["Charles Tait"],
    genres: ["Action", "Biography", "Crime", "Drama", "History", "Western"],
    premise: "Build a 1906 Australian bushranger feature as an industrial-scale production problem: sustain an hour-long dramatic attraction across multiple reels, location work, repeated outlaw/police episodes and touring exhibition while preserving the fact that only fragments of the original film survive. Treat the Tait/Johnson/Gibson exhibitor-producer collaboration, five-reel scale and lecturer-supported exhibition as part of the production system, not as a lone-inventor story about feature cinema.",
    sourceId: "manual_the_story_of_the_kelly_gang_1906",
    sourceUrl: "https://www.nfsa.gov.au/stories/articles/story-kelly-gang",
    scenarioType: "action_adventure_production",
    requiredChoicesSeed: {
      screenplay: ["kelly_story_across_multiple_reels", "episodic_bushranger_action", "glenrowan_endgame"],
      camera: ["location_scale_outside_melbourne", "readable_group_action", "armor_and_capture_staging"],
      editing: ["multi_reel_progression", "episode_to_episode_continuity", "fragmentary_survival_boundary"],
      sound: ["silent_photographed_production", "lecturer_and_live_effects_as_exhibition", "no_synchronized_original_sound"],
      themes: ["film_history", "feature_transition", "australian_cinema", "bushranger_myth", "production_distribution_exhibition"],
    },
    learningGoals: [
      "Plan the film as a multi-reel feature-scale attraction whose production, booking and touring demands differ materially from a one-reel programme item.",
      "Use the documented location production and Kelly narrative episodes to maintain geography and dramatic progression over a much longer running time.",
      "Keep photographed silent production separate from lecturer commentary and live sound effects supplied during exhibition.",
      "Treat The Story of the Kelly Gang as a landmark in the emergence of feature-length narrative cinema without claiming that one film or one country single-handedly invented the feature form.",
      "Preserve the archive boundary: modern reconstructions combine surviving fragments and documentary evidence and must never be presented as an intact surviving 1906 original.",
    ],
    phases: [
      { id: "pitch", label: "Feature-scale pitch", player_task: "Define why the Kelly story can sustain an hour-long attraction and why the extra length must be justified by escalating incidents rather than simple repetition." },
      { id: "research", label: "Industrial and archive research", player_task: "Ground Charles Tait, the Tait/Johnson/Gibson production partnership, five-reel scale, touring success, location history and fragmentary survival in NFSA/UNESCO/BFI evidence." },
      { id: "screenplay", label: "Multi-reel narrative", player_task: "Organize outlaw episodes, police conflict and the Glenrowan endgame into a long-form dramatic progression that can survive reel changes and touring presentation." },
      { id: "casting", label: "Gang and police ensemble", player_task: "Keep Kelly-gang members, police and civilians distinct across a long episodic production without inventing unsupported performer detail where the record is incomplete." },
      { id: "production_design", label: "Bush, homestead and Glenrowan", player_task: "Use exterior locations, period dress, weapons and Kelly armour to distinguish recurring environments and make the long narrative readable." },
      { id: "cinematography", label: "Location-scale staging", player_task: "Frame mounted movement, group action, buildings and Ned Kelly's armoured last stand with period-appropriate readable staging rather than retrofitted modern coverage." },
      { id: "editing", label: "Feature progression", player_task: "Build continuity across episodes and reels while explicitly marking any modern reconstruction as fragment-based rather than pretending the complete original edit survives." },
      { id: "sound", label: "Silent film, live exhibition", player_task: "Keep the photographed film silent while modelling lecturer commentary and behind-the-scenes/live effects as exhibition practices documented by the NFSA." },
      { id: "release", label: "Touring feature economy", player_task: "Treat extended running time, multi-reel handling and touring circulation as industrial decisions connecting production cost, exhibitor risk and audience novelty." },
    ],
  },
  {
    id: "scenario_queen_elizabeth_1912",
    title: "Queen Elizabeth",
    originalTitle: "Les Amours de la reine Élisabeth",
    aliases: ["La Reine Elisabeth", "La Reine Élisabeth", "Les Amours de la reine Elisabeth", "The Loves of Queen Elizabeth"],
    year: 1912,
    titleType: "Feature",
    runtimeMins: 47,
    directors: ["Louis Mercanton", "Henri Desfontaines", "Gaston Roudès"],
    genres: ["Biography", "Drama", "History", "Romance"],
    premise: "Build a 1912 French prestige feature around Sarah Bernhardt's internationally recognized stage performance, Émile Moreau's historical play and Le Film d'Art's multi-reel production system. Make actor-centred tableau staging, Paul Poiret's deliberately stylized couture, readable court ensembles and the Elizabeth–Essex tragic progression carry a longer film, then model Adolph Zukor's United States rights acquisition and presentation as a distribution and market-risk decision rather than silently turning him into the French production's director or sole producer. Preserve the version boundary: institutional catalogues describe surviving or presented copies at different running times, so the 47-minute Pathé restoration record is not proof that every modern copy reproduces one complete original release version.",
    sourceId: "manual_queen_elizabeth_1912",
    sourceUrl: "https://www.fondation-jeromeseydoux-pathe.com/event/2251",
    scenarioType: "historical_drama_production",
    requiredChoicesSeed: {
      screenplay: ["moreau_play_adaptation", "queen_essex_tragic_arc", "multi_reel_prestige_structure"],
      camera: ["bernhardt_centered_tableau", "ensemble_blocking_and_gesture", "costume_and_set_legibility"],
      editing: ["multi_reel_dramatic_progression", "tableau_to_tableau_continuity", "runtime_version_boundary"],
      sound: ["silent_photographed_production", "venue_specific_accompaniment", "no_synchronized_original_score_claim"],
      themes: ["film_history", "feature_transition", "film_d_art", "star_system", "international_distribution"],
    },
    learningGoals: [
      "Plan a prestige multi-reel adaptation whose value depends on Sarah Bernhardt's performance, Émile Moreau's play and the cultural status of Le Film d'Art rather than on spectacle alone.",
      "Use sustained tableau staging, gesture, court ensembles and Paul Poiret's stylized costume system to keep power, intimacy and historical hierarchy legible across a longer film.",
      "Distinguish French production authorship and credits from Adolph Zukor's United States rights, financing and presentation role.",
      "Treat the film's American success as evidence that imported stars and longer features could change distribution economics without claiming that one release invented feature cinema or Paramount by itself.",
      "Preserve the archive and version boundary by distinguishing the 47-minute CNC restoration listing, MoMA's 36-minute print and NYPL's 45-minute video record from an asserted single complete original version.",
    ],
    phases: [
      { id: "pitch", label: "Prestige-feature pitch", player_task: "Define why Sarah Bernhardt, a recognized historical subject and a multi-reel Film d'Art presentation can justify premium length, price and venue expectations." },
      { id: "research", label: "Credits, versions and market research", player_task: "Reconcile Pathé, MoMA, BFI and NYPL evidence while keeping variant director attributions, running times, French production and United States presentation roles explicit." },
      { id: "screenplay", label: "Elizabeth and Essex adaptation", player_task: "Condense Émile Moreau's play into a tragic progression from public victory and court favour to jealousy, judgment, execution and remorse without pretending every surviving version preserves identical scene order." },
      { id: "casting", label: "Bernhardt-centred ensemble", player_task: "Build the feature around Bernhardt's expressive authority while giving Essex, court figures and Shakespeare enough readable dramatic function to sustain the longer form." },
      { id: "production_design", label: "Film d'Art court world", player_task: "Coordinate court interiors, ceremonial groupings and Paul Poiret's stylized Renaissance-inflected costumes as a prestige image system rather than claiming strict Elizabethan reconstruction." },
      { id: "cinematography", label: "Tableau legibility", player_task: "Use stable, actor-centred compositions and ensemble blocking that preserve gesture, costume silhouette and hierarchy without imposing later continuity-coverage assumptions." },
      { id: "editing", label: "Multi-reel dramatic progression", player_task: "Organize tableaux and reels around changes in political and emotional power while marking modern print-length differences instead of inventing a definitive lost cut." },
      { id: "sound", label: "Silent film, variable accompaniment", player_task: "Keep the photographed work silent and treat piano or other musical accompaniment as venue- or restoration-specific presentation unless an original score is independently documented." },
      { id: "release", label: "Imported-star feature economy", player_task: "Model Zukor's rights investment, American premiere and prestige marketing as distribution entrepreneurship that tested whether audiences and exhibitors would support a longer imported feature." },
    ],
  },
  {
    id: "scenario_traffic_in_souls_1913",
    title: "Traffic in Souls",
    originalTitle: "Traffic in Souls",
    aliases: ["While New York Sleeps", "While New York Sleeps: A Photodrama of Today"],
    year: 1913,
    titleType: "Feature",
    runtimeMins: 88,
    directors: ["George Loane Tucker"],
    genres: ["Crime", "Drama", "Thriller"],
    premise: "Build a 1913 American urban feature as a concentrated industrial risk: IMP secretly produces a contemporary six-reel social-problem melodrama, Universal distributes it, real New York locations connect workplace, street, office and confinement spaces, and parallel abduction, investigation, evidence and rescue sustain a long programme without literary-prestige cover. Keep George Loane Tucker's direction distinct from Jack Cohn and Walter MacNamara's documented post-production completion; keep the photographed film silent; and treat the period's sensational 'white slavery' rhetoric, reform claims and advertising as objects of critical analysis rather than neutral documentary truth or Rockefeller-authorized research.",
    sourceId: "manual_traffic_in_souls_1913",
    sourceUrl: "https://cinema.ucla.edu/events/traffic-in-souls-1913-where-are-my-children-1916-2012-05-10/",
    scenarioType: "social_issue_drama_production",
    requiredChoicesSeed: {
      screenplay: ["barton_sisters_parallel_plot", "trubus_network_investigation", "recorded_evidence_and_rescue"],
      camera: ["real_new_york_locations", "urban_network_geography", "class_and_power_tableaux"],
      editing: ["six_reel_feature_pacing", "parallel_investigation_and_rescue", "cohn_macnamara_completion_boundary"],
      sound: ["silent_photographed_production", "screening_specific_accompaniment", "no_synchronized_original_sound"],
      themes: ["film_history", "feature_transition", "independent_production", "universal_distribution", "reform_publicity_and_exploitation"],
    },
    learningGoals: [
      "Plan a contemporary six-reel American feature whose sustained value comes from parallel investigation, urban geography and emotional investment rather than from imported literary prestige or spectacle alone.",
      "Keep IMP production, Universal distribution and the concentrated financial and booking risk of a long feature as separate but connected industrial decisions.",
      "Use real New York locations and clearly differentiated social spaces to make the film's network of family, police, respectable philanthropy and criminal exploitation legible over feature length.",
      "Preserve the collaborative post-production record: Tucker directed and co-wrote, while UCLA documents Jack Cohn and Walter MacNamara completing a six-reel cut after Tucker left for England.",
      "Distinguish the staged melodrama and its period 'white slavery' discourse from documentary evidence, and distinguish advertising that invoked Rockefeller investigations from Rockefeller's explicit denial of authorization or approval.",
      "Keep the 88-minute Library of Congress preservation presentation, AFI's six-to-seven-reel release record and screening-specific accompaniment visible as evidence boundaries rather than silently declaring one universally identical original version.",
    ],
    phases: [
      { id: "pitch", label: "Contemporary-feature pitch", player_task: "Define why an urban social-problem melodrama can sustain six reels and concentrated booking risk without relying on literary prestige, historical spectacle or repeated shock alone." },
      { id: "research", label: "Production, publicity and ethics research", player_task: "Reconcile AFI, UCLA, Library of Congress and BFI evidence; separate IMP production from Universal distribution; and keep promotional reform claims distinct from Rockefeller authorization and verified social evidence." },
      { id: "screenplay", label: "Parallel urban investigation", player_task: "Coordinate Lorna's abduction, Mary's infiltration, Larry Burke's police work, Trubus's public façade and the recording-device evidence into a causal multi-reel progression." },
      { id: "casting", label: "Class and power ensemble", player_task: "Differentiate the Barton family, police, workers, immigrant victims, intermediaries and respectable elites while refusing to reduce threatened women to anonymous sensational spectacle." },
      { id: "production_design", label: "New York network", player_task: "Organize workplace, street, domestic, office and confinement spaces so the criminal network and routes of investigation remain readable across real locations and staged interiors." },
      { id: "cinematography", label: "Street-level feature geography", player_task: "Use real New York location value, readable group staging and clear entrances, exits and surveillance relationships without inventing an undocumented cinematographer, lens package or modern coverage grammar." },
      { id: "editing", label: "Six-reel pressure system", player_task: "Build pace through parallel investigation and rescue, then preserve the documented boundary between Tucker's direction and Jack Cohn/Walter MacNamara's completion of the six-reel cut." },
      { id: "sound", label: "Silent production, variable exhibition", player_task: "Keep the photographed film silent and treat live or recorded accompaniment as screening-specific unless a separately documented original score is established." },
      { id: "release", label: "Feature booking and controversy", player_task: "Model Universal distribution, concentrated investment, simultaneous theatre bookings, publicity and controversy while refusing to treat commercial success as proof that the film's reform claims were accurate." },
    ],
  },
] as const;

export function mergeChapterFourIndustryExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFourIndustryExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_four_industry_verified",
      source: {
        list_id: "manual_chapter_four_industry_expansion_2026",
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
