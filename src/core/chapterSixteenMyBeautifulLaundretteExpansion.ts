import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenMyBeautifulLaundretteExpansionDefinitions = [
  {
    id: "scenario_my_beautiful_laundrette_1985",
    title: "My Beautiful Laundrette",
    originalTitle: "My Beautiful Laundrette",
    aliases: [],
    year: 1985,
    titleType: "Movie",
    runtimeMins: 97,
    directors: ["Stephen Frears"],
    genres: ["Comedy", "Drama", "Romance"],
    premise: "Build My Beautiful Laundrette as a 1985 British Channel 4/Film on Four and Working Title production whose industrial importance comes from broadcaster-backed feature production, modest-scale independent organization and an unexpected change of distribution window after the film was already made. Film4 identifies Stephen Frears as director, Hanif Kureishi as screenwriter and Tim Bevan and Sarah Radclyffe as producers. Criterion documents that the project was conceived for television, produced by Working Title on a six-week schedule and approximately $900,000 budget, and photographed on 16 mm by Oliver Stapleton. Preserve that original production purpose instead of rewriting the film as a theatrical feature from inception. After its strong Edinburgh International Film Festival reception in August 1985, the backers chose a UK theatrical release and the 16 mm image was blown up to 35 mm for cinema prints; Mainline Pictures opened the film theatrically in November. Treat this as a production-to-circulation transition central to Chapter 16's broadcaster-finance history. Keep Channel 4's commissioning/financing role, Working Title's production labor and Mainline's later theatrical distribution institutionally distinct. Hanif Kureishi's first produced screenplay brings British Pakistani family, entrepreneurship, racism, queer desire, unemployment and Thatcher-era social conflict into one South London story without making any one identity category the film's sole subject. Kureishi later described wanting contemporary independent film to deal directly with life in Britain; Criterion also records that a laundrette-owning family acquaintance helped inspire the business world of the script. Treat this social observation as authored fiction, not documentary testimony. BFI documents the film's real South London geography, including the laundrette on Wilcox Road in Vauxhall/South Lambeth and Papa's flat in Battersea, making location choice part of the film's economic and social texture rather than generic urban realism. Criterion's credits preserve department authorship: Oliver Stapleton cinematography, Mick Audsley editing, Hugo Luczyc Wyhowski production design, Lindy Hemming costume, Elaine Carew makeup, Albert Bailey sound recording and Ludus Tonalis music. Do not invent an exact camera body, lens package, film-stock emulsion, lighting ratios, sound-recorder or microphone models, detailed production budget currency conversion, daily shooting chronology or unsupported claims about improvisation. Preserve runtime provenance as well: Film4 and current BFI records use 97 minutes, while Criterion catalogs 98; use 97 minutes canonically because Film4 and BFI converge and retain 97/98 as catalog provenance rather than evidence of an undocumented alternate cut. Keep later Blu-ray/digital restorations entirely separate from original 16 mm capture and the 1985 35 mm theatrical blow-up.",
    sourceId: "film4_my_beautiful_laundrette_1985",
    sourceUrl: "https://www.film4productions.com/productions/1985/my-beautiful-laundrette",
    scenarioType: "channel4_film_on_four_working_title_broadcast_finance_16mm_to_35mm_theatrical_crossover_south_london_production",
    requiredChoicesSeed: {
      screenplay: ["hanif_kureishi_contemporary_british_screenplay", "pakistani_british_family_entrepreneurship_queer_relationship", "authored_social_observation_not_documentary_testimony"],
      camera: ["oliver_stapleton_16mm_original_capture", "south_london_location_geography", "no_invented_camera_lens_stock_or_lighting_package"],
      editing: ["mick_audsley_ensemble_social_comedy_drama", "television_origin_to_theatrical_circulation_boundary", "97_minute_canonical_preserve_98_catalog_variance"],
      sound: ["albert_bailey_location_sound_credit", "ludus_tonalis_music_layer", "no_invented_recorder_microphone_or_mix_chain"],
      themes: ["film_history", "1980s", "british_cinema", "channel_4", "film_on_four", "working_title", "broadcast_finance", "independent_production", "16mm", "35mm_blowup", "theatrical_crossover", "south_london", "british_pakistani", "race", "class", "queer_cinema", "thatcherism", "entrepreneurship", "location_production", "distribution_windows"],
    },
    learningGoals: [
      "Model My Beautiful Laundrette as a Channel 4/Film on Four broadcaster-backed production made for television before its theatrical future was known.",
      "Keep Channel 4's commissioning/finance function, Working Title's production organization and Mainline Pictures' later theatrical distribution distinct.",
      "Explain how a six-week, modest-budget Working Title production could become a cinema success without pretending that the later release strategy determined the original shoot.",
      "Preserve Oliver Stapleton's 16 mm cinematography as original capture and treat the later 35 mm blow-up as presentation/distribution history.",
      "Use real South London locations such as Wilcox Road and Battersea to connect economic geography, housing, work and street conflict to production choices.",
      "Treat Hanif Kureishi's screenplay as authored contemporary social observation shaped by British Pakistani experience, class, race, sexuality and entrepreneurship rather than a single-issue thesis.",
      "Keep Kureishi's laundrette-business inspiration as source-backed development context without converting autobiographical influence into documentary fact.",
      "Preserve Stephen Frears's television-production background as industrial context while treating the film's later theatrical crossover as contingent rather than inevitable.",
      "Keep Hugo Luczyc Wyhowski's production design, Lindy Hemming's costume and Elaine Carew's makeup visible as separate craft departments without inventing sourcing or fabrication processes.",
      "Keep Mick Audsley's editing authorship visible in the management of a dense ensemble, social reversals, romance and comic-drama tone.",
      "Keep Albert Bailey's sound-recordist credit and Ludus Tonalis music credit distinct without inventing recorder, microphone, rerecording or scoring-session specifications.",
      "Use Film4/BFI's 97-minute record canonically while preserving Criterion's 98-minute catalog value as provenance rather than inventing an alternate cut.",
      "Separate 1985 Edinburgh reception, 35 mm blow-up and theatrical rollout from original 16 mm production and from still-later restoration/Blu-ray history.",
      "Explain why broadcaster-backed production is structurally necessary to Chapter 16 alongside Hollywood franchise, Mainland Chinese studio and later independent/specialty systems.",
    ],
    phases: [
      { id: "pitch", label: "Commission a contemporary British story television might fund", player_task: "Define a South London story about work, family, race, class and queer desire that fits Channel 4's appetite for contemporary subjects without assuming theatrical distribution." },
      { id: "research", label: "Build the social world from lived contemporary observation", player_task: "Map British Pakistani family structures, laundrette entrepreneurship, unemployment, racist street politics and queer relationships while preserving fiction as authored construction rather than documentary evidence." },
      { id: "screenplay", label: "Make business, romance and family pressure drive one ensemble plot", player_task: "Use Kureishi's screenplay to let the laundrette project connect economic ambition, intimacy, family expectation and political conflict without reducing characters to representatives of one theme." },
      { id: "performance", label: "Hold comedy, danger and intimacy in the same social register", player_task: "Direct the ensemble so entrepreneurial bravado, family comedy, racist threat and Omar-Johnny intimacy coexist without inventing unsupported rehearsal or improvisation systems." },
      { id: "design", label: "Transform a working laundrette inside a real South London world", player_task: "Coordinate Luczyc Wyhowski's production design with existing streets, housing and commercial spaces so Powders can become deliberately heightened without detaching from its economic environment." },
      { id: "cinematography", label: "Shoot the television-origin production on 16 mm", player_task: "Use Stapleton's sourced 16 mm capture and location-oriented production while refusing unsupported camera, lens, stock, exposure or lighting-package claims." },
      { id: "editing", label: "Keep a crowded ensemble legible at modest production scale", player_task: "Use Audsley's editing to move among Omar, Johnny, Nasser, Papa, Tania, Salim and the street group while preserving both romance and social causality." },
      { id: "sound", label: "Build an urban and musical layer without invented hardware", player_task: "Preserve Bailey's sound-recordist authorship and Ludus Tonalis music as separate layers while leaving undocumented recording and mixing equipment unspecified." },
      { id: "release", label: "Let reception change the distribution window after production", player_task: "Track the original television purpose, Edinburgh reception, decision to blow 16 mm up to 35 mm and Mainline theatrical release as successive production/circulation decisions rather than one predetermined cinema plan." },
    ],
  },
] as const;

export function mergeChapterSixteenMyBeautifulLaundretteExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenMyBeautifulLaundretteExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_my_beautiful_laundrette_verified",
      source: { list_id: "manual_chapter_sixteen_my_beautiful_laundrette_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
