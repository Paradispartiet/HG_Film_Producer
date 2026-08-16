import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterSevenMovementOne } from "./filmHistoryChapterSevenMovementOne.js";
import { filmHistoryChapterSevenMovementTwo } from "./filmHistoryChapterSevenMovementTwo.js";
import { filmHistoryChapterSevenMovementThree } from "./filmHistoryChapterSevenMovementThree.js";

export const filmHistoryChapterSevenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch7_weimar_filmportal", title: "Film in der Weimarer Republik", publisher: "filmportal.de", url: "https://www.filmportal.de/thema/film-in-der-weimarer-republik" },
  { id: "ch7_weimar_kinemathek", title: "Modern Cinema – Film in the Weimar Republic", publisher: "Deutsche Kinemathek", url: "https://www.deutsche-kinemathek.de/en/visit/exhibitions/modern-cinema-film-weimar-republic" },
  { id: "ch7_weimar_moma", title: "Weimar Cinema, 1919–1933: Daydreams and Nightmares", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/film/1104" },
  { id: "ch7_weimar_bfi_genres", title: "How Weimar cinema influenced 6 modern genres", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/6-weimar-genres" },
  { id: "ch7_bfi_expressionist", title: "10 great German expressionist films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-german-expressionist-films" },
  { id: "ch7_ufa_kinemathek", title: "Ufa – The History of a Brand", publisher: "Deutsche Kinemathek", url: "https://www.deutsche-kinemathek.de/en/visit/exhibitions/ufa-history-brand" },
  { id: "ch7_ufa_filmportal", title: "Ufa’s Golden Age", publisher: "filmportal.de", url: "https://www.filmportal.de/en/topic/ufas-golden-age" },
  { id: "ch7_weimar_classical_avant", title: "Weimar – Between Classical Cinema and Avant-Garde", publisher: "filmportal.de", url: "https://www.filmportal.de/en/topic/weimar-between-classical-cinema-and-avant-garde" },
  { id: "ch7_caligari_filmportal", title: "Das Cabinet des Dr. Caligari", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/das-cabinet-des-dr-caligari_ea43d4a69c1a5006e03053d50b37753d" },
  { id: "ch7_caligari_bfi", title: "100 years of The Cabinet of Dr. Caligari: why we’re still living in its shadows", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/100-years-cabinet-dr-caligari" },
  { id: "ch7_caligari_murnau", title: "Projekt: Das Cabinet des Dr. Caligari", publisher: "Friedrich-Wilhelm-Murnau-Stiftung", url: "https://www.murnau-stiftung.de/index.php/stiftung/projekte/projekt-das-cabinet-des-dr-caligari" },
  { id: "ch7_nosferatu_filmportal", title: "Nosferatu", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/nosferatu_ea43d4a6a62b5006e03053d50b37753d" },
  { id: "ch7_nosferatu_bfi", title: "Nosferatu (1922)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/3d4cb177-731b-53ff-b7e3-41ef1bbd0c9d/nosferatu" },
  { id: "ch7_nosferatu_murnau", title: "100. Geburtstag Nosferatu", publisher: "Friedrich-Wilhelm-Murnau-Stiftung", url: "https://www.murnau-stiftung.de/news/100-geburtstag-nosferatu" },
  { id: "ch7_warning_shadows_filmportal", title: "Schatten", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/schatten_ea43d4a75d305006e03053d50b37753d" },
  { id: "ch7_robison_filmportal", title: "Artur Robison", publisher: "filmportal.de", url: "https://www.filmportal.de/en/person/artur-robison_efc121b05f596c3fe03053d50b3736f2" },
  { id: "ch7_last_laugh_filmportal", title: "Der letzte Mann", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/der-letzte-mann_ea43d4a6d0975006e03053d50b37753d" },
  { id: "ch7_last_laugh_bfi", title: "10 great films of 1924", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1924" },
  { id: "ch7_unchained_camera_filmportal", title: "Die entfesselte Kamera", publisher: "filmportal.de", url: "https://www.filmportal.de/thema/die-entfesselte-kamera" },
  { id: "ch7_variete_filmportal", title: "Varieté", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/variete_ea43d4a6e3fe5006e03053d50b37753d" },
  { id: "ch7_variete_murnau", title: "Stummfilm-Klassiker Varieté in digitaler Restaurierung neu erleben", publisher: "Friedrich-Wilhelm-Murnau-Stiftung", url: "https://www.murnau-stiftung.de/news/stummfilm-klassiker-variete-digitaler-restaurierung-neu-erleben" },
  { id: "ch7_nibelungen_filmportal", title: "Die Nibelungen. 1. Teil: Siegfried", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/die-nibelungen-1-teil-siegfried_ea43d4a6a6c75006e03053d50b37753d" },
  { id: "ch7_faust_filmportal", title: "Faust", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/faust_ea43d4a69e945006e03053d50b37753d" },
  { id: "ch7_metropolis_filmportal", title: "Metropolis", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/metropolis_ea43d4a6990b5006e03053d50b37753d" },
  { id: "ch7_metropolis_history", title: "Fritz Lang’s Metropolis Over Time", publisher: "filmportal.de", url: "https://www.filmportal.de/en/topic/fritz-langs-metropolis-over-time" },
  { id: "ch7_weimar_revisited", title: "Weimar Cinema Revisited", publisher: "Deutsche Kinemathek", url: "https://www.deutsche-kinemathek.de/en/collections-archives/film-distribution/weimar-cinema-revisited" },
  { id: "ch7_lang_filmportal", title: "Fritz Lang", publisher: "filmportal.de", url: "https://www.filmportal.de/en/person/fritz-lang_efc121b064de6c3fe03053d50b3736f2" },
  { id: "ch7_mabuse_one_filmportal", title: "Dr. Mabuse, der Spieler I: Der große Spieler. Ein Bild der Zeit", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/dr-mabuse-der-spieler-i-der-grosse-spieler-ein-bild-der-zeit_ea43d4a69d0c5006e03053d50b37753d" },
  { id: "ch7_mabuse_two_filmportal", title: "Dr. Mabuse, der Spieler II: Inferno. Ein Spiel von Menschen unserer Zeit", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/dr-mabuse-der-spieler-ii-inferno-ein-spiel-von-menschen-unserer-zeit" },
  { id: "ch7_joyless_filmportal", title: "Die freudlose Gasse", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/die-freudlose-gasse_ea43d4a69f135006e03053d50b37753d" },
  { id: "ch7_joyless_review", title: "Die freudlose Gasse — contemporary review by Dr. Mendel", publisher: "filmportal.de", url: "https://www.filmportal.de/en/node/42189/material/611797" },
  { id: "ch7_1925_1934_filmportal", title: "1925–1934", publisher: "filmportal.de", url: "https://www.filmportal.de/thema/1925-1934" },
  { id: "ch7_pandora_filmportal", title: "Die Büchse der Pandora", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/die-buchse-der-pandora_ea43d4a69b2c5006e03053d50b37753d" },
  { id: "ch7_pabst_filmportal", title: "G. W. Pabst", publisher: "filmportal.de", url: "https://www.filmportal.de/en/person/g-w-pabst_efc0caa3dea803c1e03053d50b372d46" },
  { id: "ch7_brooks_filmportal", title: "Louise Brooks", publisher: "filmportal.de", url: "https://www.filmportal.de/person/louise-brooks_f92cd465f41c417095f57586b2bf6181" },
  { id: "ch7_pabst_bfi", title: "Where to begin with G.W. Pabst", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-gw-pabst" },
  { id: "ch7_pandora_review", title: "Die Büchse der Pandora — contemporary review by Hansjürgen Wille", publisher: "filmportal.de", url: "https://www.filmportal.de/en/node/10095/material/753770" },
  { id: "ch7_diary_filmportal", title: "Tagebuch einer Verlorenen", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/tagebuch-einer-verlorenen_ea43d4a6bb9b5006e03053d50b37753d" },
  { id: "ch7_asphalt_filmportal", title: "Asphalt", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/asphalt_ea43d4a698735006e03053d50b37753d" },
  { id: "ch7_asphalt_report", title: "Asphalt — production report by Max Pfeiffer", publisher: "filmportal.de", url: "https://www.filmportal.de/en/node/15203/material/746823" },
  { id: "ch7_1929_filmportal", title: "1929", publisher: "filmportal.de", url: "https://www.filmportal.de/thema/1929" },
  { id: "ch7_murnau_moma", title: "F. W. Murnau", publisher: "Museum of Modern Art", url: "https://www.moma.org/artists/112602-f-w-murnau" },
];

const sections = [
  ...filmHistoryChapterSevenMovementOne,
  ...filmHistoryChapterSevenMovementTwo,
  ...filmHistoryChapterSevenMovementThree,
];

const sourceIds = new Set(filmHistoryChapterSevenSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterSevenSources.length) throw new Error("Chapter 7 source IDs must be unique");
if (new Set(filmHistoryChapterSevenSources.map((source) => source.url)).size !== filmHistoryChapterSevenSources.length) throw new Error("Chapter 7 source URLs must be unique");
for (const source of filmHistoryChapterSevenSources) {
  if (!source.id.startsWith("ch7_")) throw new Error(`Chapter 7 source ID must start with ch7_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 7 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 7 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterSeven: FilmHistoryBookChapter = {
  id: "weimar-expressionism",
  number: 7,
  title: "Weimar cinema: Expressionism, mobility and social modernity",
  period: "1919–1929",
  summary: "Weimar cinema was not one Expressionist style but a contested field of studio artifice, location horror, chamber drama, mobile-camera experimentation, monumental UFA production, urban social observation and late-silent modernity. This chapter follows the production systems that made those differences possible: postwar consolidation, Decla and UFA, designers and cinematographers, adaptation rights, Kammerspielfilm, the collaborative 'unchained camera', prestige economics, censorship, gender and sexuality, transatlantic labor and unstable surviving versions. Caligari, Nosferatu, The Last Laugh, Metropolis and Pandora's Box form the playable Atlas spine; eight additional films remain analytical comparisons rather than redundant Production Cases.",
  status: "full",
  learningObjectives: [
    "Explain why Weimar cinema cannot be reduced to German Expressionism or treated as one national visual preset.",
    "Describe how Decla, Decla-Bioscop and UFA consolidation linked studio infrastructure, producers, specialists, distribution and international ambition.",
    "Use The Cabinet of Dr. Caligari to analyze graphic production design, stylized performance, framing and restored color as one coordinated system.",
    "Use Nosferatu to compare location-based uncanny production with painted-set Expressionism and to explain adaptation-rights risk.",
    "Distinguish Expressionist techniques from a fixed style by comparing Warning Shadows, Caligari and Nosferatu.",
    "Explain Kammerspielfilm through The Last Laugh as chamber-scale social pressure organized by costume, space, performance and visual narration.",
    "Explain the entfesselte Kamera as a collaborative mobile-camera practice without claiming a false first-ever invention.",
    "Use Die Nibelungen and Faust to connect monumental design and effects to UFA prestige economics without creating redundant Production Cases.",
    "Use Varieté to analyze the circulation of mobile-camera craft across genres, crews and international markets.",
    "Use Metropolis to connect studio scale, effects, UFA financial strain, market recutting and restoration history.",
    "Use Dr. Mabuse, the Gambler to analyze modernity through finance, disguise, surveillance and information networks without teleological political prophecy.",
    "Use The Joyless Street to relate inflation, social inequality and produced realism while resisting simple economic determinism.",
    "Use Pandora's Box to distinguish Pabst's socially observant modernity and performance-centered staging from Expressionist distortion.",
    "Analyze gender, sexuality, censorship and star construction without appearance scoring, queer exoticism or treating exploitation as a creative objective.",
    "Use Asphalt and the 1929 sound threshold to explain studio-built realism and technological transition without pretending silent practice ended instantly.",
    "Maintain strict version boundaries among original silent releases, recuts, censorship copies, television versions, reconstruction music and digital restorations.",
  ],
  keyTerms: [
    "Weimar cinema", "German Expressionism", "Neue Sachlichkeit", "Kammerspielfilm", "Decla", "Decla-Bioscop", "UFA", "Babelsberg", "prestige production", "international export", "graphic set design", "painted shadow", "location horror", "adaptation rights", "censorship", "Reichslichtspielgesetz", "entfesselte Kamera", "unchained camera", "subjective camera", "camera mobility", "studio construction", "mass choreography", "miniatures", "optical effects", "version history", "restoration", "tinting", "silent accompaniment", "hyperinflation", "stabilization", "street film", "social melodrama", "star circulation", "performance-centered framing", "sexual modernity", "transatlantic labor", "sound transition",
  ],
  sections,
  filmReferences: [
    { title: "The Cabinet of Dr. Caligari", year: 1920, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_cabinet_of_dr_caligari_1920", note: "Existing Atlas anchor for Decla studio production, graphic Expressionist design, stylized performance, framing, tinted silent presentation and restoration-aware version history." },
    { title: "Nosferatu", year: 1922, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_nosferatu_1922", note: "Existing Prana-Film anchor for location-based uncanny production, Albin Grau design, Fritz Arno Wagner photography, unauthorized Dracula adaptation and rights/survival history." },
    { title: "The Last Laugh", year: 1924, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_last_laugh_1924", note: "Existing Chapter 7 case for Kammerspielfilm, UFA collaboration, Jannings' status performance, visual narration and motivated mobile-camera subjectivity without a first-invention myth." },
    { title: "Metropolis", year: 1927, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_metropolis_1927", note: "Existing UFA anchor for architectural scale, mass choreography, effects, specialist labor, production economics, market recutting and major reconstruction history." },
    { title: "Pandora's Box", year: 1929, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_pandoras_box_1929", note: "Existing Nero-Film/Pabst case for Louise Brooks, performance-centered modernity, social space, representation ethics, New Objectivity-era context and German/American/reconstruction version boundaries." },
    { title: "Dr. Mabuse, the Gambler", year: 1922, role: "comparative_film", atlasDecision: "P2", note: "Book-only comparison for serial-scale crime, finance, disguise, surveillance and unstable urban identity; its playable functions overlap existing crime/identity cases." },
    { title: "Warning Shadows", year: 1923, role: "comparative_film", atlasDecision: "P2", note: "Book-only comparison for shadow projection, psychological chamber space and title-free visual narration; Caligari and Nosferatu already provide stronger playable Expressionist/horror anchors." },
    { title: "Die Nibelungen", year: 1924, role: "comparative_film", atlasDecision: "P2", note: "Book-only comparison for UFA prestige, monumental design, mass choreography and mythic national imagery; Metropolis is the more distinct large-scale Production Case." },
    { title: "The Joyless Street", year: 1925, role: "comparative_film", atlasDecision: "P2", note: "Book-only Pabst comparison for inflation, urban inequality and produced social realism; Pandora's Box supplies the stronger playable performance/modernity case." },
    { title: "Variety", year: 1925, role: "comparative_film", atlasDecision: "P2", note: "Book-only comparison for Dupont/Freund camera mobility, circus space and export prestige; The Last Laugh remains the canonical unchained-camera Production Case." },
    { title: "Faust", year: 1926, role: "comparative_film", atlasDecision: "P2", note: "Book-only comparison for UFA fantasy design, lighting and effects whose functions overlap the existing Metropolis and Nosferatu cases." },
    { title: "Asphalt", year: 1929, role: "comparative_film", atlasDecision: "P2", note: "Book-only comparison for late-Weimar street film, vast studio-built urban realism and the approach of sound; design/modernity gameplay is already covered by Metropolis and Pandora's Box." },
    { title: "Diary of a Lost Girl", year: 1929, role: "comparative_film", atlasDecision: "P2", note: "Book-only Pabst/Brooks comparison for gender, institutional discipline, censorship and social melodrama; Pandora's Box is the distinct playable case for the same performer-director axis." },
  ],
  historicalObjects: [
    { label: "UFA and vertically scaled German studio infrastructure", role: "historical_object", atlasDecision: "no_production_case", note: "UFA concentrated studios, capital, specialist labor, distribution and cinemas across multiple production modes. That industrial ecology enables film-level cases but is not itself a film scenario." },
    { label: "Decla-Bioscop, Decla and postwar company consolidation", role: "historical_object", atlasDecision: "no_production_case", note: "Caligari's Decla context, Decla-Bioscop and later consolidation show a changing company landscape around UFA dominance; corporate restructuring is historical infrastructure, not gameplay as a fake film." },
    { label: "Expressionist design culture across film, theatre and visual art", role: "historical_object", atlasDecision: "no_production_case", note: "Distorted architecture, painted light, graphic surfaces and stylized bodies circulated across arts and productions. Expressionism is a historical tendency with internal variation, not one reproducible preset." },
    { label: "Kammerspielfilm and chamber-scale social drama", role: "historical_object", atlasDecision: "no_production_case", note: "Small casts, concentrated spaces, psychological pressure and everyday social status define a production tendency broader than The Last Laugh and distinct from monumental spectacle." },
    { label: "Entfesselte Kamera / unchained-camera practice", role: "historical_object", atlasDecision: "no_production_case", note: "Mobile rigs, tracks, lifts, body-supported apparatus and motivated movement became collaborative camera practices across productions; the method is not an invention owned by one filmmaker or shot." },
    { label: "Film architecture, studio construction and artificial city space", role: "historical_object", atlasDecision: "no_production_case", note: "Weimar productions combined real locations with increasingly ambitious built environments. Designers, builders, cinematographers and effects workers jointly made architecture perform narrative work." },
    { label: "Inflation, stabilization and changing production economics", role: "historical_object", atlasDecision: "no_production_case", note: "Hyperinflation, stabilization, export conditions and company finance changed costs and represented social experience. Macroeconomic context explains constraints but is not a Production Case or a universal mood generator." },
    { label: "Transatlantic circulation of Weimar labor and style", role: "historical_object", atlasDecision: "no_production_case", note: "Directors, cinematographers, actors and designers moved between German and American production. Techniques travelled through people and institutions rather than through a one-way national influence pipeline." },
    { label: "Censorship, adaptation rights and legal vulnerability", role: "historical_object", atlasDecision: "no_production_case", note: "Nosferatu's Dracula litigation and Weimar censorship show that permissions, regulation and survival shaped circulation and versions. Legal infrastructure constrains every production but is not a film scenario." },
  ],
};
