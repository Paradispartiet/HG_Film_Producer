import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterNineMovementOne } from "./filmHistoryChapterNineMovementOne.js";
import { filmHistoryChapterNineMovementTwo } from "./filmHistoryChapterNineMovementTwo.js";
import { filmHistoryChapterNineMovementThree } from "./filmHistoryChapterNineMovementThree.js";

export const filmHistoryChapterNineSources: readonly FilmHistoryBookSource[] = [
  { id: "ch9_field_bfi", title: "10 great Soviet films of the 1920s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-soviet-films-1920s" },
  { id: "ch9_potemkin_bfi", title: "Battleship Potemkin", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/9c02c20b-1487-52c8-bbfc-0849e204fe59/battleship-potemkin" },
  { id: "ch9_potemkin_1925_bfi", title: "10 great films of 1925", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1925" },
  { id: "ch9_eisenstein_begin_bfi", title: "Where to begin with Sergei Eisenstein", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-sergei-eisenstein" },
  { id: "ch9_potemkin_version_bfi", title: "How do you solve a problem like Potemkin?", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/how-do-you-solve-problem-potemkin" },
  { id: "ch9_moma_soviet_montage", title: "Jacob Lawrence, Jay Leyda, and Soviet Montage", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/1041" },
  { id: "ch9_october_moma_event", title: "October. Directed by Sergei Eisenstein", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/5338" },
  { id: "ch9_october_moma_collection", title: "Oktjabr'. 1928", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/304654" },
  { id: "ch9_october_bfi_epics", title: "10 great silent epics", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-silent-epics" },
  { id: "ch9_mother_loc", title: "Russian Films in the Library of Congress — MAT' (MOTHER)", publisher: "Library of Congress", url: "https://www.loc.gov/rr/mopic/findaid/russian.html" },
  { id: "ch9_mother_bfi", title: "MAT (1926)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/0adcb28e-fae8-5b9b-b946-1a4fcca56a04/mat" },
  { id: "ch9_mother_harvard", title: "Mother", publisher: "Harvard Film Archive", url: "https://harvardfilmarchive.org/calendar/mother-2017-10" },
  { id: "ch9_pudovkin_roots_bfi", title: "The roots of Neorealism", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/features/roots-neorealism" },
  { id: "ch9_pudovkin_bluray_bfi", title: "The best Blu-rays and DVDs of 2020", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/best-blu-rays-dvds-2020" },
  { id: "ch9_mrwest_harvard", title: "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks", publisher: "Harvard Film Archive", url: "https://harvardfilmarchive.org/calendar/the-extraordinary-adventures-of-mr-west-in-the-land-of-the-bolsh" },
  { id: "ch9_mrwest_bfi_360", title: "360 classic feature films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/360-classic-feature-films-how-archive-project-sought-show-canon-all-year-round" },
  { id: "ch9_shub_moma_collection", title: "Padeniye dinasti Romanovikh (The Fall of the Romanov Dynasty)", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/301141" },
  { id: "ch9_shub_moma_screening", title: "The Fall of the Romanov Dynasty — Carte Blanche: Joan Jonas", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/9537" },
  { id: "ch9_shub_moma_movie", title: "A MOVIE Shorts Program 1", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/2310" },
  { id: "ch9_earth_bfi", title: "Earth (1930)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/7ecb717a-9c37-5071-a235-93386e7167b7/earth" },
  { id: "ch9_ukraine_archive_bfi", title: "Inside Ukraine's film archive", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/features/inside-ukraines-film-archive" },
  { id: "ch9_earth_dovzhenko", title: "Earth", publisher: "Oleksandr Dovzhenko National Centre", url: "https://dovzhenkocentre.org/distributor/zemlya/" },
  { id: "ch9_dovzhenko_rediscovery", title: "Oleksandr Dovzhenko: Rediscovery", publisher: "Oleksandr Dovzhenko National Centre", url: "https://online.dovzhenkocentre.org/en/film_collections/oleksandr-dovzhenko-rediscovery/" },
  { id: "ch9_arsenal_bfi", title: "Arsenal", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/aa221073-84c0-5d35-8304-7fea3f3d18c9/arsenal" },
  { id: "ch9_peak_silent_bfi", title: "Peak silent cinema", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/features/peak-silent-cinema" },
  { id: "ch9_vertov_biography", title: "Dziga Vertov — Biography", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/biography" },
  { id: "ch9_kinopravda_overview", title: "Kino-Pravda", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda" },
  { id: "ch9_kinopravda_intro", title: "About Kino-Pravda: An Introduction", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/about_kino-pravda_an_introduction" },
  { id: "ch9_kinopravda_1_9", title: "About Kino-Pravda 1–9", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/film_online/kino-pravda/about_kino-pravda_1-9" },
  { id: "ch9_kinopravda_15_19", title: "About Kino-Pravda 15–19", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/about_kino-pravda_15-19" },
  { id: "ch9_kinopravda_6", title: "Kino-Pravda No. 6", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/detail?kinopravda_id=1484829340607" },
  { id: "ch9_kinopravda_18", title: "Kino-Pravda No. 18", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/detail?kinopravda_id=1484829340630" },
  { id: "ch9_kinopravda_19", title: "Kino-Pravda No. 19", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/detail?kinopravda_id=1484829340632" },
  { id: "ch9_kinopravda_21", title: "Kino-Pravda No. 21", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/detail?kinopravda_id=1484829340636" },
  { id: "ch9_kinopravda_22", title: "Kino-Pravda No. 22", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/detail?kinopravda_id=1484829340638" },
  { id: "ch9_kinopravda_23", title: "Kino-Pravda No. 23", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/film_online/kino-pravda/detail?kinopravda_id=1484829340640" },
  { id: "ch9_vertov_objects", title: "Dziga Vertov Collection — Objects", publisher: "Austrian Film Museum", url: "https://vertov.filmmuseum.at/en/objects" },
  { id: "ch9_man_camera_bfi", title: "Man with a Movie Camera", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/cacbb2df-be18-5e59-b5c3-f0eb9ea3a90d/man-with-a-movie-camera" },
  { id: "ch9_man_camera_recommends_bfi", title: "BFI recommends: Man with a Movie Camera", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/bfi-recommends-man-with-movie-camera" },
  { id: "ch9_man_camera_effects_bfi", title: "5 wonderful effects in Man with a Movie Camera", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/5-wonderful-effects-man-with-movie-camera-how-theyre-still-inspiring-filmmakers-today" },
  { id: "ch9_man_camera_cinema_bfi", title: "Cinema scenes in movies", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/lists/cinema-scenes-in-movies" },
  { id: "ch9_film_society_bfi", title: "A century of cinephilia: the legacy of the Film Society", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/features/century-cinephilia-legacy-film-society" },
  { id: "ch9_essay_film_bfi", title: "The essay film", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/features/essay-film/" },
  { id: "ch9_early_sound_bfi", title: "10 great early sound films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-early-sound-films" },
  { id: "ch9_1952_bfi", title: "Sight and Sound 1952 poll", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/polls/greatest-films-all-time/1952" },
  { id: "ch9_1941_bfi", title: "1941 quiz: Film classics", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/polls/greatest-films-all-time/1941-quiz-film-classics" },
];

const sections = [
  ...filmHistoryChapterNineMovementOne,
  ...filmHistoryChapterNineMovementTwo,
  ...filmHistoryChapterNineMovementThree,
];

const sourceIds = new Set(filmHistoryChapterNineSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterNineSources.length) throw new Error("Chapter 9 source IDs must be unique");
if (new Set(filmHistoryChapterNineSources.map((source) => source.url)).size !== filmHistoryChapterNineSources.length) throw new Error("Chapter 9 source URLs must be unique");
for (const source of filmHistoryChapterNineSources) {
  if (!source.id.startsWith("ch9_")) throw new Error(`Chapter 9 source ID must start with ch9_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 9 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 9 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterNine: FilmHistoryBookChapter = {
  id: "soviet-montage",
  number: 9,
  title: "Revolution and Soviet Montage",
  period: "1917–1930",
  summary: "Soviet montage was not one editing recipe. Kuleshov, Eisenstein, Pudovkin, Vertov, Shub, Dovzhenko and other filmmakers worked through changing state, cooperative and Ukrainian institutions to make editing a site of perception, political argument, documentary construction, archival authorship and historical reconstruction. The chapter follows seven completed playable Atlas cases—Battleship Potemkin, Man with a Movie Camera, Mother, The Fall of the Romanov Dynasty, Earth, October and The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks—while keeping fourteen further films as book-level comparisons and ten theories or institutions as historical objects rather than fake scenarios.",
  status: "full",
  learningObjectives: [
    "Explain why Soviet montage must be taught as a field of competing theories and institutions rather than one editing preset.",
    "Distinguish Eisensteinian collision from Pudovkinian linkage and Vertov's interval and kino-eye programs without treating those labels as exclusive ownership of techniques.",
    "Treat the Kuleshov effect as a contested pedagogical construct about shot relation rather than a universal viewer-response formula.",
    "Connect nationalization, Goskino, Sovkino, Mezhrabpom and VUFKU to concrete production, distribution and training conditions.",
    "Use Battleship Potemkin to analyze mass action, temporal expansion and collision montage while keeping the Odessa Steps sequence distinct from neutral documentary evidence.",
    "Maintain version control across Potemkin censorship, recutting, projection-speed changes, later scores and restorations.",
    "Use Mother to reconstruct Pudovkin's performance-centered linkage and feature adaptation as a production process.",
    "Use October to analyze intellectual montage, state anniversary commissioning, staged historical reconstruction and politically compelled recutting.",
    "Use Kino-Pravda and Man with a Movie Camera to analyze nonfiction construction, interval montage and self-reflexive production without pretending documentary is unedited reality.",
    "Credit Elizaveta Svilova, Mikhail Kaufman and other collaborators as production authors rather than reducing Vertov's cinema to a lone-director myth.",
    "Use The Fall of the Romanov Dynasty to treat archival search, provenance, selection and recontextualization as production authorship.",
    "Explain why Soviet does not mean Russian and preserve VUFKU, Ukrainian studios, locations and filmmakers where the evidence supports that distinction.",
    "Use Earth to distinguish a documented collectivization commission from poetic form and from later historical knowledge of forced collectivization and the Holodomor.",
    "Use FEKS, The New Babylon and Bed and Sofa to keep the history of Soviet silent cinema broader than a canon of five montage theorists.",
    "Analyze propaganda through commissions, rhetoric, circulation, censorship and audience context rather than an ideological content score.",
    "Keep historical violence and political persuasion analytical: gameplay never rewards falsifying evidence, context stripping or endorsement of state violence.",
    "Separate silent-era accompaniment and later scores from synchronized production sound, deferring Vertov's Enthusiasm to the sound-transition chapter.",
  ],
  keyTerms: [
    "Soviet montage", "montage of attractions", "collision montage", "linkage", "intellectual montage", "interval", "kino-eye", "Kino-Pravda", "Kuleshov effect", "constructive editing", "constructive geography", "VGIK", "Proletkult", "constructivism", "FEKS", "collective protagonist", "mass action", "temporal expansion", "revolutionary reconstruction", "compilation film", "archival montage", "provenance", "recontextualization", "Goskino", "Sovkino", "Mezhrabpom", "VUFKU", "agit-train", "mobile exhibition", "state commission", "censorship", "political recutting", "nonprofessional casting", "documentary construction", "collective authorship", "Ukrainian Soviet cinema", "collectivization", "historical hindsight", "silent accompaniment", "version criticism", "projection speed", "propaganda", "cinephilia", "sound transition",
  ],
  sections,
  filmReferences: [
    { title: "Battleship Potemkin", year: 1925, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_battleship_potemkin_1925", note: "Eisenstein's completed playable anchor for collision montage, collective mass action, temporal expansion, political persuasion and rigorous separation of staged revolutionary representation from documentary evidence." },
    { title: "Man with a Movie Camera", year: 1929, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_man_with_a_movie_camera_1929", note: "Vertov, Svilova and Kaufman's completed playable anchor for kino-eye, interval montage, documentary construction, reflexive apparatus, urban production and collective authorship." },
    { title: "Mother", year: 1926, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_mother_1926", note: "Pudovkin's completed playable anchor for linkage and accumulation, performance-centered editing, adaptation and feature-scale revolutionary causality." },
    { title: "The Fall of the Romanov Dynasty", year: 1927, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_fall_of_the_romanov_dynasty_1927", note: "Esfir Shub's completed playable anchor for archival search, provenance, found-footage selection, intertitles, recontextualization, preservation and compilation-film authorship." },
    { title: "Earth", year: 1930, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_earth_1930", note: "Dovzhenko's completed playable anchor for Ukrainian VUFKU context, lyrical and associative montage, collectivization propaganda and disciplined separation of production knowledge from historical hindsight." },
    { title: "October", year: 1928, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_october_1928", note: "Completed playable comparison for intellectual montage, state anniversary commissioning, nonprofessional mass reconstruction and politically compelled recutting distinct from Potemkin's 1905 model." },
    { title: "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks", year: 1924, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_mr_west_bolsheviks_1924", note: "Completed playable Kuleshov-workshop comparison for constructive geography, physical performance, American genre borrowing, satire and a non-magical account of viewer inference." },
    { title: "Strike", year: 1925, role: "comparative_film", atlasDecision: "P2", note: "Eisenstein's first feature extends montage of attractions and collective-protagonist construction, while Potemkin already carries the distinct playable collision-montage problem." },
    { title: "The General Line", year: 1929, role: "comparative_film", atlasDecision: "P2", note: "Eisenstein extends intellectual and sensuous montage into collectivization imagery; Earth supplies the more distinct Ukrainian and propaganda-versus-poetics Production Case." },
    { title: "The End of St. Petersburg", year: 1927, role: "comparative_film", atlasDecision: "P2", note: "Pudovkin expands revolutionary history beyond Mother, but Mother already provides the strongest separate linkage, performance and adaptation Production Case." },
    { title: "Storm over Asia", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Pudovkin's colonial-border narrative raises imperial and ethnographic representation questions without requiring a second linkage-centered playable case." },
    { title: "By the Law", year: 1926, role: "comparative_film", atlasDecision: "P2", note: "Kuleshov's chamber adaptation is useful for constructive geography and resource economy; Mr. West already provides the broader workshop and genre-production case." },
    { title: "Kino-Eye", year: 1924, role: "comparative_film", atlasDecision: "P2", note: "Vertov's early nonfiction statement develops kino-eye principles, while Man with a Movie Camera carries the mature collective documentary-production case." },
    { title: "A Sixth Part of the World", year: 1926, role: "comparative_film", atlasDecision: "P2", note: "Vertov's geographically expansive commission develops interval montage and state-economic representation without requiring a second Vertov Production Case." },
    { title: "The Eleventh Year", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Industrial imagery and rhythmic construction lead toward Man with a Movie Camera and remain book-level evidence rather than redundant gameplay." },
    { title: "Zvenigora", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "The first part of Dovzhenko's Ukrainian trilogy supplies myth-history comparison while Earth carries the trilogy's distinct playable culmination." },
    { title: "Arsenal", year: 1929, role: "comparative_film", atlasDecision: "P2", note: "Dovzhenko's anti-war tension, speed and stillness deepen the Ukrainian trilogy while Earth remains the stronger separate production and propaganda problem." },
    { title: "The Great Road", year: 1927, role: "comparative_film", atlasDecision: "P2", note: "Shub's additional compilation work broadens archival montage after The Fall of the Romanov Dynasty without requiring redundant found-footage gameplay." },
    { title: "The New Babylon", year: 1929, role: "comparative_film", atlasDecision: "P2", note: "FEKS, eccentric performance, constructivist design and Shostakovich's score broaden the field beyond the canonical montage theorists as book-level comparison." },
    { title: "Bed and Sofa", year: 1927, role: "comparative_film", atlasDecision: "P2", note: "Abram Room's intimate social satire prevents Soviet cinema from collapsing into revolutionary epics while remaining outside the core montage-production queue." },
    { title: "Fragment of an Empire", year: 1929, role: "comparative_film", atlasDecision: "P2", note: "Fridrikh Ermler's memory and social transformation provide an additional montage-era comparison rather than a required distinct Production Case." },
  ],
  historicalObjects: [
    { label: "Kuleshov workshop, VGIK and the Kuleshov effect", role: "historical_object", atlasDecision: "no_production_case", note: "Workshop pedagogy and editing experiments belong to theory and training; the Kuleshov effect remains a contested account of shot relation, not a universal reaction preset or a fake film." },
    { label: "Competing montage theories: collision, linkage, intervals and intellectual montage", role: "historical_object", atlasDecision: "no_production_case", note: "Eisenstein, Pudovkin, Vertov and others argued differently about editing, so their concepts remain comparative theory rather than one reusable Soviet montage style setting." },
    { label: "Nationalization, Narkompros, Goskino, Sovkino and Mezhrabpom production institutions", role: "historical_object", atlasDecision: "no_production_case", note: "Changing state, semi-state and cooperative structures shaped production, distribution, education and access to material resources; institutions are historical conditions rather than films." },
    { label: "Agit-trains, agit-trucks, newsreels and mobile exhibition", role: "historical_object", atlasDecision: "no_production_case", note: "Political information and education circulated through mobile and non-theatrical infrastructures that changed audience reach and programme design without becoming Production Cases themselves." },
    { label: "Proletkult, theatre of attractions, constructivism and FEKS", role: "historical_object", atlasDecision: "no_production_case", note: "Theatre, circus, design and eccentric performance fed several filmmakers and groups, but these cross-art networks never collapse into one reproducible visual preset." },
    { label: "Kino-Pravda, kino-eye and collective documentary labor", role: "historical_object", atlasDecision: "no_production_case", note: "Vertov's nonfiction programme depended on camera operators and editors including Mikhail Kaufman and Elizaveta Svilova; collective labour remains visible rather than becoming a lone-director myth." },
    { label: "VUFKU and Ukrainian Soviet cinema", role: "historical_object", atlasDecision: "no_production_case", note: "Ukrainian studios, distribution, education and filmmakers complicate the habit of treating all Soviet cinema as institutionally or culturally Russian; the distinction follows evidence, not a style score." },
    { label: "State commissions, censorship and political recutting", role: "historical_object", atlasDecision: "no_production_case", note: "Anniversary films and propaganda commissions could be altered as official politics changed; political intervention is recorded as version history, never rewarded as falsification of evidence." },
    { label: "Import re-editing, film-stock scarcity and archival reuse", role: "historical_object", atlasDecision: "no_production_case", note: "Editors including Esfir Shub transformed inherited and imported footage under material constraints; archival reuse requires provenance and credits research and editing as labour and authorship." },
    { label: "Propaganda, collectivization, violence and historical hindsight", role: "historical_object", atlasDecision: "no_production_case", note: "Political purpose is distinguished from later historical knowledge: revolutionary and collectivization films are evidence of production and ideology, not neutral records or templates for endorsing state violence." },
  ],
  sources: filmHistoryChapterNineSources,
};
