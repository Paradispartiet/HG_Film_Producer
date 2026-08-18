import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenGrowthOfTheSoilExpansionDefinitions = [
  {
    id: "scenario_growth_of_the_soil_1921",
    title: "Growth of the Soil",
    originalTitle: "Markens grøde",
    aliases: ["Markens grode", "Segen der Erde", "The Growth of the Soil", "L'éveil de la glèbe", "Hoe het groeide"],
    year: 1921,
    titleType: "Feature",
    runtimeMins: 117,
    directors: ["Gunnar Sommerfeldt"],
    genres: ["Drama"],
    premise: "Build Growth of the Soil / Markens grøde as a 1921 Norwegian location-production and literary-adaptation problem, not as timeless landscape worship or a transparent transcription of Knut Hamsun's novel. Nasjonalbiblioteket credits Gunnar Sommerfeldt with direction, screenplay and production leadership for Norrøna Film, George Schnéevoigt with cinematography and Leif Halvorsen with music; Danish Film Institute records 35 mm black-and-white silent production and shooting in Nordland. Coordinate a long-form rural narrative through real landscape, built farm environments, seasonal labor, family melodrama, mining expansion and changing settlement while keeping the photographed production, tinting/toning, intertitles and cinema-music performance as distinct craft layers. Halvorsen's 1921 orchestral music is historical production/exhibition evidence, but later arrangements, restorations and recorded performances are later presentation states rather than a synchronized original soundtrack. Preserve restoration history explicitly: the film was long considered lost, surviving material was reconstructed from incomplete archive finds, and modern runtimes differ, so the 117-minute archive presentation is not evidence that one complete immutable 1921 version survives. Treat the source novel critically: do not reward disability stigma, ethnic stereotyping, colonial assumptions about apparently 'empty' northern land, or Hamsun's later politics; equally, do not back-project his later Nazi allegiance as a causal fact about the film's 1921 production. The player must distinguish adaptation, production history, later reception and modern ethical analysis.",
    sourceId: "manual_growth_of_the_soil_1921",
    sourceUrl: "https://www.nb.no/filmografi/show?id=793756",
    scenarioType: "norwegian_nordland_literary_tinted_orchestral_restoration_production",
    requiredChoicesSeed: {
      screenplay: ["sommerfeldt_long_form_hamsun_adaptation", "rural_family_mining_structure", "source_critique_without_back_projection"],
      camera: ["schneevoigt_nordland_landscape_scale", "labor_settlement_spatial_continuity", "landscape_not_empty_land_myth"],
      editing: ["seasonal_epic_progression", "family_mining_land_crosscutting", "restored_version_runtime_control"],
      sound: ["silent_1921_production", "halvorsen_1921_orchestral_music_context", "later_arrangements_not_original_sync_soundtrack"],
      themes: ["film_history", "norwegian_silent_cinema", "literary_adaptation", "nordland_location_production", "tinting_toning", "orchestral_cinema_music", "archive_restoration", "representation_ethics"],
    },
    learningGoals: [
      "Model Norrøna Film and Gunnar Sommerfeldt's combined directing, writing and production leadership alongside George Schnéevoigt's cinematography and Leif Halvorsen's music, rather than collapsing the work into either Hamsun authorship or a director-only account.",
      "Use Nordland location photography and built rural environments as production resources whose geography must support settlement, labor, family change and mining development without treating the landscape as historically empty or culturally neutral.",
      "Adapt a long literary source through selection, intertitles, recurring spaces, performance and visual motifs while keeping the film distinct from the novel and refusing the claim that adaptation fidelity can be measured by copying every plot event.",
      "Treat tinting/toning as a historical image-presentation layer and Halvorsen's orchestral music as documented 1921 cinema music, while keeping later arrangements, recordings and restoration presentations separate from synchronized production sound.",
      "Preserve version history: modern archive presentations vary in length because the film was long considered lost and reconstructed from incomplete surviving materials, so runtime and sequence order require explicit restoration provenance.",
      "Handle disability, violence, ethnic representation and settlement ideology critically without turning stigma or dispossession into scoreable authenticity, and without projecting Hamsun's later political allegiance backward as an explanation for 1921 production choices.",
      "Use the film's ambitious scale, mixed contemporary reception and later rediscovery to explain how national film history is shaped by production risk, exhibition conditions, survival and restoration rather than by a simple canon of uninterrupted masterpieces.",
    ],
    phases: [
      { id: "pitch", label: "Landscape, labor and adaptation", player_task: "Define an epic rural adaptation whose production problem is the relation among people, seasons, built settlement, land and economic change rather than picturesque scenery alone." },
      { id: "research", label: "Norrøna, Nordland and archive research", player_task: "Ground Sommerfeldt, Schnéevoigt, Halvorsen, Norrøna Film, Nordland location production, tinting/toning, 35 mm silent format, premiere and restoration history in institutional sources." },
      { id: "screenplay", label: "Compress the novel into film form", player_task: "Select and connect Isak/Inger, family growth, imprisonment, settlement and mining without pretending that a long literary source can or should be transferred event-for-event." },
      { id: "casting", label: "People before types", player_task: "Direct Isak, Inger, Oline, Geissler and the ensemble as changing dramatic agents while blocking disability stigma, ethnic caricature and rural/urban moral shorthand as automatic scoring rules." },
      { id: "production_design", label: "Build settlement through time", player_task: "Coordinate farm structures, tools, interiors and mining-era expansion so changes in the settlement remain spatially readable across a long narrative." },
      { id: "cinematography", label: "Schnéevoigt and Nordland scale", player_task: "Use landscape, weather, distance, labor and closer performance framing as a documented cinematography problem without claiming that spectacular nature is neutral evidence of uninhabited land." },
      { id: "editing", label: "Epic time and restoration provenance", player_task: "Build seasonal and economic progression while keeping the surviving/restored sequence and runtime distinct from claims about one complete immutable 1921 cut." },
      { id: "sound", label: "Silent image and Halvorsen's cinema music", player_task: "Keep photographed production silent, model the documented 1921 orchestral score as cinema-music history, and label later arrangements/recordings as restoration-era presentation rather than original synchronized sound." },
      { id: "release", label: "Premiere, reception, loss and reconstruction", player_task: "Separate the 1921 Norwegian premiere and mixed contemporary reception from later loss, archive rediscovery, restoration and modern ethical reassessment of Hamsun adaptation." },
    ],
  },
] as const;

export function mergeChapterTenGrowthOfTheSoilExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenGrowthOfTheSoilExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_growth_of_the_soil_verified",
      source: {
        list_id: "manual_chapter_ten_growth_of_the_soil_expansion_2026",
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
