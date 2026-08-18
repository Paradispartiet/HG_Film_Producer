import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelveScarfaceExpansionDefinitions = [
  {
    id: "scenario_scarface_1932",
    title: "Scarface",
    originalTitle: "Scarface",
    aliases: ["Scarface: The Shame of the Nation", "Scarface, The Shame of a Nation", "The Menace", "The Scar"],
    year: 1932,
    titleType: "Feature",
    runtimeMins: 95,
    directors: ["Howard Hawks", "Richard Rosson"],
    genres: ["Drama", "Crime", "Gangster"],
    premise: "Build Scarface as a Caddo/Howard Hughes independent gangster production distributed by United Artists, not as another Warner gangster preset. AFI records The Caddo Co., Inc. as production company and United Artists as distributor; Howard Hawks directs with Richard Rosson co-directing, Howard Hughes heads the producing company with E. B. Derr supervising, Ben Hecht supplies the screen story with Seton I. Miller, John Lee Mahin and W. R. Burnett on continuity/dialogue and Fred Pasley adapting material connected to Armitage Trail's novel and contemporary gang history. Lee Garmes and L. W. O'Connell photograph, Harry Oliver handles settings, Edward Curtiss edits with Lewis Milestone later cutting alternate versions, Adolph Tandler and Gus Arnheim are music directors, William Snyder is sound engineer, and Howard Anderson handles process photography. The production ran from late June through October 1931 at Metropolitan Sound Studios, used Western Electric sound and survives in multiple 90/95/99-minute version histories. Its defining industrial problem is censorship negotiation before the 1934 PCA seal regime: AFI documents months of MPPDA/AMPP pressure, a rewritten ending, foreword and law-and-order material, alternate Versions A/B/C, local censor-board conflict, delayed release and territory-specific cutting. Do not mislabel this as post-1934 PCA production or flatten every surviving print into one immutable version. Keep the violent gangster-cycle appeal, anti-crime framing, ethnic stereotyping, incest implications and weapons politics as historically contested representation, never as reward-bearing authenticity. Do not invent lenses, stocks, microphone models, exact gun-effects techniques or one universal final cut absent from source evidence.",
    sourceId: "afi_scarface_1932",
    sourceUrl: "https://catalog.afi.com/Film/1134-SCARFACE",
    scenarioType: "caddo_hughes_independent_gangster_censorship_versions_pre_pca_united_artists",
    requiredChoicesSeed: {
      screenplay: ["hecht_trail_pasley_gang_history_adaptation", "censorship_revisions_without_single_final_text", "pre_1934_code_negotiation"],
      camera: ["garmes_oconnell_gangster_staging", "process_photography_as_attributed_craft", "no_invented_lens_or_gun_effect_claims"],
      editing: ["curtiss_primary_edit", "milestone_alternate_version_cuts", "90_95_99_runtime_provenance"],
      sound: ["western_electric_sound", "william_snyder_sound_engineering", "no_invented_microphone_or_channel_claims"],
      themes: ["film_history", "gangster_cycle", "independent_production", "united_artists", "censorship", "pre_code", "alternate_versions", "urban_violence", "representation"],
    },
    learningGoals: [
      "Distinguish Scarface's Caddo/Howard Hughes independent production and United Artists distribution from vertically integrated Warner gangster production.",
      "Keep Howard Hawks's direction, Richard Rosson's co-direction, Hughes's producing authority and E. B. Derr's supervision separately attributable.",
      "Preserve the credited writing chain from Armitage Trail and Fred Pasley through Ben Hecht, Seton I. Miller, John Lee Mahin and W. R. Burnett rather than collapsing authorship into one screenplay name.",
      "Use Lee Garmes and L. W. O'Connell photography, Harry Oliver settings, Edward Curtiss editing, William Snyder sound and Howard Anderson process photography as distinct craft evidence.",
      "Treat Lewis Milestone's later alternate-version editing as censorship/distribution history, not as the sole original edit.",
      "Model the 1931–32 MPPDA/AMPP negotiations, local censorship boards, retakes and altered ending as pre-enforcement Code history rather than retroactively applying the 1934 PCA seal regime.",
      "Preserve Versions A/B/C and the 90/95/99-minute catalogue variation instead of asserting one timeless canonical production cut.",
      "Keep anti-gangster forewords and law-and-order speeches visible as negotiated additions whose presence and form changed across versions.",
      "Analyze the film's ethnic framing, gendered violence, incest implications and gun politics critically instead of converting censorship controversy into a sensationalist quality preset.",
      "Separate later National Film Registry status and canonical gangster reputation from evidence available to the 1931 production team.",
      "Refuse unsupported claims about exact lenses, film stock, microphone models, firearm effects or stunt methods.",
    ],
    phases: [
      { id: "pitch", label: "An independent gangster film under scrutiny", player_task: "Frame Hughes/Caddo and United Artists against the studio-gangster cycle while identifying censorship as a production constraint from the outset." },
      { id: "research", label: "Lock credits and version chronology", player_task: "Separate original production labor from later censor-driven retakes, alternate endings and Milestone's territory cuts." },
      { id: "screenplay", label: "Adapt crime history without pretending neutrality", player_task: "Coordinate Trail/Pasley/Hecht/Miller/Mahin/Burnett material while tracking anti-crime demands, ethnic representation and incest implications." },
      { id: "casting", label: "Build gangster charisma without heroic default", player_task: "Direct Muni, Dvorak, Morley, Perkins, Raft and the ensemble while ensuring charisma never automatically becomes moral approval." },
      { id: "production_design", label: "Stage an urban criminal world", player_task: "Use Oliver's settings and the Metropolitan Sound Studios context without inventing unsourced set dimensions or locations." },
      { id: "cinematography", label: "Photograph speed, violence and surveillance", player_task: "Coordinate Garmes/O'Connell and attributed process work while refusing unsupported equipment claims." },
      { id: "editing", label: "Track the film across competing versions", player_task: "Preserve Curtiss's primary edit, retakes and Milestone's alternate cuts as version history rather than pretending one edit served every territory." },
      { id: "sound", label: "Build sound-era gangster impact", player_task: "Use Western Electric and Snyder's credited sound engineering without inventing microphones or exact gun-recording methods." },
      { id: "release", label: "Negotiate censors, titles and territories", player_task: "Model delayed release, local censor conflict, alternate titles and territory-specific versions before later Registry/canon status enters the timeline." },
    ],
  },
] as const;

export function mergeChapterTwelveScarfaceExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelveScarfaceExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_scarface_verified",
      source: { list_id: "manual_chapter_twelve_scarface_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
