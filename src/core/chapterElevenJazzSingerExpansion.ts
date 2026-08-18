import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenJazzSingerExpansionDefinitions = [
  {
    id: "scenario_the_jazz_singer_1927",
    title: "The Jazz Singer",
    originalTitle: "The Jazz Singer",
    aliases: [],
    year: 1927,
    titleType: "Feature",
    runtimeMins: 90,
    directors: ["Alan Crosland"],
    genres: ["Melodrama", "Music"],
    premise: "Build The Jazz Singer as a 1927 Warner Bros./Vitaphone part-talkie whose production problem is not a mythical instant invention of talking cinema but the coordination of a mostly silent feature with selected synchronized song, dialogue, score and effects on a separate sound-on-disc system. AFI records Alan Crosland as director, Al Cohn as adapter, Hal Mohr and Frank Zucker in photography, Harold McCord as editor, Louis Silvers for musical score and Vitaphone orchestra direction, George R. Groves for sound and Nugent Slaughter for engineering effects; production ran June–July 1927 and the New York premiere was 6 October. The player must coordinate photographed silent passages, intertitles, Vitaphone recording sessions, disc/reel synchronization and exhibitor equipment without describing the film as fully spoken or treating one premiere as the overnight death of silent cinema. Museum of the Moving Image and BFI documentation make the physical system explicit: Vitaphone used separate 16-inch discs synchronized mechanically with film projection, so disc handling, synchronization drift, breakage/wear and theatre conversion belong to the production-and-release problem. Preserve performance and representation ethics: Jolson's blackface is a documented historical practice and must be analyzed critically alongside the film's Jewish family, cantorial and assimilation conflicts; racial caricature, blackface imitation, antisemitic stereotyping and humiliation are never player objectives or performance-quality presets. Preserve historical attribution and version boundaries: the case distinguishes production sound from later restorations/presentations, synchronized sequences from silent/intertitle passages, and the film's industrial influence from exaggerated 'first ever' claims.",
    sourceId: "afi_the_jazz_singer_1927",
    sourceUrl: "https://catalog.afi.com/Film/1535-THE-JAZZ-SINGER",
    scenarioType: "warner_vitaphone_part_talkie_disc_sync_theatre_conversion_representation_ethics_production",
    requiredChoicesSeed: {
      screenplay: ["part_talkie_structure_not_full_dialogue", "raphaelson_adaptation_and_jewish_family_conflict", "blackface_context_without_replication"],
      camera: ["silent_and_sync_sequence_continuity", "mohr_zucker_credit_boundaries", "no_static_camera_myth"],
      editing: ["silent_intertitle_to_sync_sequence_transitions", "disc_reel_sync_version_control", "industrial_influence_without_first_ever_myth"],
      sound: ["vitaphone_sound_on_disc_sync", "groves_silvers_slaughter_roles", "theatre_wiring_and_disc_handling"],
      themes: ["film_history", "sound_transition", "part_talkie", "vitaphone", "exhibition_infrastructure", "jewish_american_performance", "blackface_history", "representation_ethics"],
    },
    learningGoals: [
      "Model The Jazz Singer as a part-talkie: most of the feature retains silent-era image/intertitle grammar while selected songs, spoken dialogue, score and effects are synchronized through Vitaphone.",
      "Explain Vitaphone as sound-on-disc rather than optical sound-on-film, including the requirement to keep a separate 16-inch disc mechanically synchronized with each film reel during exhibition.",
      "Keep production labor differentiated: Crosland's direction, Cohn's adaptation, Mohr/Zucker photography, McCord editing, Silvers music/orchestra direction, Groves sound and Slaughter engineering are distinct roles rather than one generic 'sound innovation' credit.",
      "Treat theatre conversion and projection discipline as part of the transition: a synchronized feature only works for audiences when exhibitors possess compatible equipment and operators can keep disc and image aligned.",
      "Reject the simple 'first talkie ended silent cinema overnight' story; distinguish Don Juan's earlier synchronized score/effects, The Jazz Singer's part-talkie form and the later spread of all-talking and sound-on-film production.",
      "Analyze Jolson's blackface as a historically documented racist performance convention without reenacting it, rewarding imitation or turning racial caricature into a neutral star-performance technique.",
      "Preserve the film's Jewish cultural and family context, including cantorial tradition, Yom Kippur and assimilation/show-business conflict, without reducing Jewish identity to costume, accent or stereotype.",
      "Keep archival and release-state claims bounded: original synchronized sequences, surviving sound elements, later restoration/presentation and the film's subsequent reputation are related but not interchangeable evidence.",
      "Connect technical novelty to economics and labor: Warner Bros., Vitaphone, recording personnel, music rights, theatre equipment and distribution all shape what synchronized sound could become.",
    ],
    phases: [
      { id: "pitch", label: "A part-talkie, not a slogan", player_task: "Define exactly which dramatic and musical moments require synchronized sound and which remain silent/intertitle passages; do not pitch the film as an all-talking feature." },
      { id: "research", label: "Credits, technology and representation", player_task: "Lock AFI production credits, Vitaphone mechanics, Warner/Vitaphone industrial context, Jewish narrative context and documented blackface imagery before designing gameplay choices." },
      { id: "screenplay", label: "Adaptation across silent and synchronized modes", player_task: "Structure Cohn's adaptation so dialogue bursts and songs have production purpose while silent passages remain legible, preserving the Raphaelson source and family/cantorial conflict." },
      { id: "casting", label: "Voice, star persona and ethical limits", player_task: "Direct singing, speech and silent-era performance continuity while critically contextualizing Jolson's blackface and prohibiting racist imitation, caricature or antisemitic shorthand." },
      { id: "production_design", label: "Stage, home, synagogue and recording constraints", player_task: "Coordinate Warner studio interiors and performance spaces so photographed action works in both silent and synchronized passages without inventing unsupported acoustic technology." },
      { id: "cinematography", label: "Image craft during a sound transition", player_task: "Preserve Mohr/Zucker attribution and compose synchronized scenes around recording constraints without teaching the false rule that every early-sound camera had to be immobile." },
      { id: "editing", label: "Intertitles, reels and synchronized bursts", player_task: "Cut transitions among silent dialogue titles, music, speech and effects while maintaining reel/disc correspondence and clear version provenance." },
      { id: "sound", label: "Groves, Silvers, Slaughter and Vitaphone", player_task: "Plan sound recording, orchestra, engineering and disc synchronization as separate craft tasks; protect sync integrity without pretending the soundtrack is optical or continuous dialogue." },
      { id: "release", label: "Premiere, theatre conversion and uneven adoption", player_task: "Model the 6 October 1927 New York premiere, compatible theatre equipment, disc logistics and industrial influence while keeping later all-talking conversion and sound-on-film adoption historically separate." },
    ],
  },
] as const;

export function mergeChapterElevenJazzSingerExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenJazzSingerExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_jazz_singer_verified",
      source: {
        list_id: "manual_chapter_eleven_jazz_singer_expansion_2026",
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
