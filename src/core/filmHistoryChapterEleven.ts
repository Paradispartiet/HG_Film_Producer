import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterElevenMovementOne } from "./filmHistoryChapterElevenMovementOne.js";
import { filmHistoryChapterElevenMovementTwo } from "./filmHistoryChapterElevenMovementTwo.js";
import { filmHistoryChapterElevenMovementThree } from "./filmHistoryChapterElevenMovementThree.js";

/** The production anchors and historical objects follow the locked Chapter 11 Atlas audit. */
export const filmHistoryChapterElevenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch11_moma_sound", title: "Experimentation with Sound", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/terms/film/experimentation-with-sound" },
  { id: "ch11_moma_jazz", title: "Alan Crosland: The Jazz Singer (1927)", publisher: "Museum of Modern Art", url: "https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/alan-crosland-the-jazz-singer-1927/" },
  { id: "ch11_bfi_sound", title: "All about film sound and how we restore it", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/all-about-film-sound-how-we-restore-it" },
  { id: "ch11_bfi_silent", title: "The peak of silent cinema", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/peak-silent-cinema" },
  { id: "ch11_bfi_early", title: "10 great early sound films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-early-sound-films" },
  { id: "ch11_bfi_musical", title: "A genre is born: how moviegoers first fell in love with the musical", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/genre-born-early-musicals" },
  { id: "ch11_bfi_blackmail", title: "Blackmail (1929) film record", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/bc5f7958-d424-517f-b707-791d7bc8ed55/blackmail" },
  { id: "ch11_loc_silent_music", title: "A Warming Flame: The Musical Presentation of Silent Films", publisher: "Library of Congress", url: "https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/" },
  { id: "ch11_cambridge_applause", title: "Rouben Mamoulian, Sound Film Theory, and Applause", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/books/abs/aesthetics-of-early-sound-film/to-select-to-organize-to-sharpen-rouben-mamoulian-sound-film-theory-and-applause/C85C41B9108FAC2089D1BCB7CFD2440E" },
  { id: "ch11_idfa_enthusiasm", title: "Enthusiasm (Dziga Vertov)", publisher: "IDFA Institute", url: "https://www.idfa.nl/en/film/bcd26feb-a495-4f7e-80bb-9bc4375ec7e8/enthusiasm/" },
  { id: "ch11_bfi_blueangel", title: "The Blue Angel (1930)", publisher: "British Film Institute", url: "https://player.bfi.org.uk/subscription/film/watch-the-blue-angel-1930-online" },
  { id: "ch11_tcm_blueangel", title: "The Blue Angel", publisher: "Turner Classic Movies", url: "https://www.tcm.com/articles/18562/the-blue-angel" },
  { id: "ch11_nfaj", title: "Nihon Eiga: The History of Japanese Film", publisher: "National Film Archive of Japan", url: "https://www.nfaj.go.jp/english/exhibition/historyofjapanesefilm/" },
  { id: "ch11_moma_japan", title: "Madamu to Nyobo (1931) screening notes", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/1062" },
  { id: "ch11_cambridge_japan", title: "Early Japanese Sound Film Aesthetics at Shochiku and Nikkatsu", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/books/abs/aesthetics-of-early-sound-film/early-japanese-sound-film-aesthetics-at-shochiku-and-nikkatsu/31F6E6ADFD55D1ABB554AD64F2469940" },
  { id: "ch11_shochiku", title: "The history of Shochiku", publisher: "Shochiku", url: "https://www.shochiku.co.jp/global/en/company/history/" },
  { id: "ch11_uol_china", title: "Sounding the socialist heroine: gender, revolutionary lyricism and Korean war films", publisher: "University of London Press", url: "https://read.uolpress.co.uk/read/gender-emotions-and-power-1750-2020/section/476854aa-0878-4a42-a6db-3da13edcab38" },
  { id: "ch11_arts_alamara", title: "Alam Ara (1931), National Film Archive of India record", publisher: "National Film Archive of India / Google Arts & Culture", url: "https://artsandculture.google.com/asset/alam-ara-1931/QgH9a0GoFzdsoA?hl=en" },
  { id: "ch11_cambridge_india", title: "Sound in Indian Film and Audiovisual Media", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/books/sound-in-indian-film-and-audiovisual-media/57600079FAAC3D4E98EC0C9B1D1CF2BF/listing" },
];

const sections = [
  ...filmHistoryChapterElevenMovementOne,
  ...filmHistoryChapterElevenMovementTwo,
  ...filmHistoryChapterElevenMovementThree,
];
const sourceIdSet = new Set(filmHistoryChapterElevenSources.map((source) => source.id));
if (sourceIdSet.size !== filmHistoryChapterElevenSources.length) throw new Error("Duplicate Chapter 11 source IDs");
for (const section of sections) {
  if (section.paragraphs.length < 2) throw new Error(`Chapter 11 section ${section.id} lacks substantive prose`);
  for (const sourceId of section.sourceIds) {
    if (!sourceIdSet.has(sourceId)) throw new Error(`Chapter 11 unknown section source: ${sourceId}`);
  }
}

export const filmHistoryChapterEleven: FilmHistoryBookChapter = {
  id: "sound-transition",
  number: 11,
  title: "The sound transition",
  period: "1927–1934",
  summary: "Recorded sound changed the equipment, work, economics, geography and artistic possibilities of cinema. From Vitaphone and optical tracks to multilingual versions, studio microphones, innovative sound editing, and uneven worldwide adoption, the transition cannot be reduced to one premiere or a simple replacement of silent film. This chapter connects those systems to actual films, sources and production choices.",
  status: "draft",
  learningObjectives: [
    "Distinguish recorded sound-on-disc, optical sound-on-film, silent accompaniment and later restoration soundtracks.",
    "Explain why exhibition conversion, studio costs and distribution created an uneven sound transition.",
    "Analyze the artistic and ethical implications of recorded voices, accent markets, performer labor and blackface.",
    "Explain why The Jazz Singer is a hybrid part-talkie rather than the first fully spoken film.",
    "Compare Blackmail's silent and sound versions and source-specific voice performance.",
    "Use Applause, M, City Lights and Sous les toits de Paris to compare mobile sound staging, offscreen sound, silence and synchronized scores.",
    "Examine The Blue Angel as a multilingual version-production system, not one universal original soundtrack.",
    "Connect Enthusiasm's location sound and montage to the argument of its documentary form.",
    "Contrast the adoption histories of the United States, Britain, Germany, France, the Soviet Union, Japan, China and India.",
    "Keep missing or fragmentary film evidence separate from verified industrial milestones and complete playable reconstructions."
  ],
  keyTerms: [
    "sound-on-disc", "Vitaphone", "optical sound", "Movietone", "Photophone", "Tobis-Klangfilm",
    "synchronization", "part-talkie", "silent version", "all-talking feature", "theatre conversion",
    "24fps", "camera blimp", "microphone", "boom", "mixing", "offscreen sound", "sound bridge",
    "leitmotif", "sound-image counterpoint", "postsynchronization", "dubbing", "subtitles",
    "multilingual version", "benshi", "Shochiku", "industrial sound", "archive survival",
    "voice labour", "blackface", "exhibition market"
  ],
  sections,
  filmReferences: [
    {
      "title": "M",
      "year": 1931,
      "role": "anchor_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_m_1931",
      "note": "Lang's existing first-talkie case anchors offscreen sound, leitmotif, strategic silence, sound bridges and Tobis-Klangfilm inside Weimar urban production."
    },
    {
      "title": "City Lights",
      "year": 1931,
      "role": "anchor_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_city_lights_1931",
      "note": "Chaplin's existing case anchors deliberate resistance to dialogue, synchronized score/effects and the survival of visual-pantomime production inside the talkie economy."
    },
    {
      "title": "The Jazz Singer",
      "year": 1927,
      "role": "anchor_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_the_jazz_singer_1927",
      "note": "Warner Bros.' Vitaphone part-talkie makes sound-on-disc synchronization, theatre wiring, music-and-dialogue bursts, industrial adoption and blackface/Jewish-performance ethics unavoidable production questions."
    },
    {
      "title": "Blackmail",
      "year": 1929,
      "role": "anchor_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_blackmail_1929",
      "note": "Hitchcock's dual silent/sound production anchors transition economics, version comparison, location/studio strategy, psychological sound and live off-camera dubbing for Anny Ondra."
    },
    {
      "title": "Applause",
      "year": 1929,
      "role": "anchor_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_applause_1929",
      "note": "Mamoulian's early Paramount talkie anchors mobile-camera ambition, separated microphone recording, post-combination, offscreen cues and sound bridges rather than treating early sound as inherently static."
    },
    {
      "title": "The Neighbor's Wife and Mine",
      "year": 1931,
      "role": "anchor_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_the_neighbors_wife_and_mine_1931",
      "note": "Gosho and Shochiku Kamata provide the essential Japanese sound-transition case: domestic sound recording, 24fps-era workflow, popular music/noise, everyday performance and an industry still sharing space with benshi-era silent practice."
    },
    {
      "title": "The Broadway Melody",
      "year": 1929,
      "role": "comparative_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_the_broadway_melody_1929",
      "note": "MGM's all-talkie backstage musical exposes soundstage conversion, live orchestral balance, two-strip Technicolor and the emergence of playback/post-production synchronization."
    },
    {
      "title": "Sous les toits de Paris",
      "year": 1930,
      "role": "comparative_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_sous_les_toits_de_paris_1930",
      "note": "René Clair and Lazare Meerson make French studio space, moving camera, selective synchronization, offscreen sound and deliberate silence into a production system distinct from Hollywood dialogue recording."
    },
    {
      "title": "Enthusiasm",
      "year": 1930,
      "role": "comparative_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_enthusiasm_1930",
      "note": "Vertov's Soviet sound experiment turns industrial and location recording, non-synchronization, voice/machinery montage and political documentary construction into a distinct early-sound workflow."
    },
    {
      "title": "The Blue Angel",
      "year": 1930,
      "role": "comparative_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_the_blue_angel_1930",
      "note": "UFA, Erich Pommer, Tobis-Klangfilm and German/English version production make language markets, studio recording, star performance and version control into a distinct sound-transition problem."
    },
    {
      "title": "Lights of New York",
      "year": 1928,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "The first all-talking feature broadens Warner/Vitaphone transition history beyond the part-talkie Jazz Singer without requiring a second closely overlapping disc-sound case."
    },
    {
      "title": "Hallelujah",
      "year": 1929,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Vidor's all-Black MGM production broadens post-synchronized location sound, music, representation and race while requiring explicit critique of stereotype and segregated exhibition markets."
    },
    {
      "title": "The Love Parade",
      "year": 1929,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Lubitsch integrates operetta, dialogue, offscreen action and contrapuntal sound, broadening musical form without duplicating the Broadway Melody's industrial conversion case."
    },
    {
      "title": "Le Million",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Clair's later sound-image counterpoint extends the French argument after Sous les toits de Paris and remains book-level comparison unless already playable."
    },
    {
      "title": "The Threepenny Opera",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Pabst's German/French production broadens multilingual-version economics, music and cross-market casting without requiring another P1 if Blue Angel carries the language-version production problem."
    },
    {
      "title": "Atlantic",
      "year": 1929,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "British International Pictures' multilingual sound production broadens the economic response to language fragmentation at the start of European talkies."
    },
    {
      "title": "The Congress Dances",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "UFA's multilingual musical-comedy production broadens language-version and star-market strategy after The Blue Angel."
    },
    {
      "title": "Love Me Tonight",
      "year": 1932,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Mamoulian's mature musical sound design shows how quickly the transition's experiments could become integrated style, without duplicating Applause's foundational case."
    },
    {
      "title": "I Was Born, But...",
      "year": 1932,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Ozu's silent feature keeps Japanese transition chronology honest: successful talkies did not instantly erase silent production or benshi-era habits."
    },
    {
      "title": "The Goddess",
      "year": 1934,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "The major 1934 Shanghai silent feature keeps Chinese transition chronology uneven and prevents first-talkie milestones from being mistaken for immediate industry-wide conversion."
    },
    {
      "title": "Sing-Song Girl Red Peony",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Mingxing's sound-on-disc milestone is indispensable to Chinese sound history, but surviving-production evidence and extant-film status must be established before any full Production Case is contemplated."
    },
    {
      "title": "Alam Ara",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "India's landmark early talkie is essential to sound-transition history, but loss of the feature blocks a fabricated complete Production Case and shifts emphasis to documented production/exhibition evidence."
    },
    {
      "title": "The Public Enemy",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Dialogue, gunfire and star voice help define early sound gangster production, but the distinct genre-system case belongs primarily to Chapter 12."
    },
    {
      "title": "Dracula",
      "year": 1931,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Universal's English/Spanish parallel productions are important multilingual/night-shift evidence, but the horror production system belongs primarily to Chapter 12."
    },
    {
      "title": "42nd Street",
      "year": 1933,
      "role": "comparative_film",
      "atlasDecision": "P2",
      "note": "Warner's Busby Berkeley musical shows the stabilized early-1930s studio musical system and is deferred primarily to Chapter 12 after the transition itself is explained."
    },
    {
      "title": "King Kong",
      "year": 1933,
      "role": "comparative_film",
      "atlasDecision": "use_existing_atlas_case",
      "atlasScenarioId": "scenario_king_kong_1933",
      "note": "RKO's integrated effects, score and sound design demonstrate the transition's mature consequences, but the effects/horror-adventure production system belongs primarily to Chapter 12."
    }
  ],
  historicalObjects: [
    {
      "label": "Vitaphone and sound-on-disc synchronization",
      "note": "Warner Bros.' disc system synchronized 16-inch records with film reels and required projection discipline, disc handling and theatre equipment; the technology is an infrastructure object, not a film scenario.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Sound-on-film systems: Movietone, Photophone and Tobis-Klangfilm",
      "note": "Optical sound placed recorded information on film and reorganized production, laboratory and projection practice across competing industrial systems; patents and formats remain institutional context rather than fake films.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "24fps standardization, camera motors, booths and blimps",
      "note": "Reliable synchronized recording pushed standardized projection speed and forced noisy cameras and sets to be modified, enclosed or redesigned; these are cross-film production constraints, not a single Production Case.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Microphones, booms, mixers, dubbing and playback",
      "note": "Early sound crews developed microphone placement, multiple-source recording, mixing, postsynchronization and playback techniques that progressively freed actors and cameras from the first talkies' constraints.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Theatre wiring, exhibitor capital and dual silent/sound release",
      "note": "Cinema owners faced major conversion costs, so silent, part-talkie and full-sound versions overlapped; transition speed varied by territory and theatre rather than changing overnight after one premiere.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Multilingual versions, dubbing, subtitles and accent markets",
      "note": "Recorded language fractured export markets and reshaped casting, star labour, studio scheduling and translation; simultaneous-language versions were an industrial response before dubbing and subtitling stabilized.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Music rights, orchestras, playback and the early screen musical",
      "note": "Recorded songs tied film production more tightly to music publishing, orchestration, rehearsal and synchronization while playback and post-production practice emerged unevenly across studios.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Race, blackface, voice and segregated sound-era markets",
      "note": "The Jazz Singer and Hallelujah expose how synchronized voice entered industries structured by blackface, racial stereotyping, segregation and unequal access; technological novelty never neutralizes representational ethics.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "Benshi, Shochiku-Phone and Japan's uneven conversion",
      "note": "Japanese sound adoption coexisted with powerful benshi culture and continuing silent production, so talkie history must include exhibition labour, domestic recording systems and a slower institutional transition.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    },
    {
      "label": "China and India: uneven infrastructure, sound-on-disc experiments and lost first talkies",
      "note": "Chinese and Indian producers adopted sound amid equipment costs, language and performance traditions and severe archival loss; first-talkie milestones do not prove immediate or uniform conversion and cannot justify fabricated lost-film gameplay.",
      "role": "historical_object",
      "atlasDecision": "no_production_case"
    }
  ],
  sources: filmHistoryChapterElevenSources,
};
