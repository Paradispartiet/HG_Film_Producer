import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentyFiveNetworksSections } from "./filmHistoryChapterTwentyFiveNetworks.js";
import { filmHistoryChapterTwentyFiveFilmsSections } from "./filmHistoryChapterTwentyFiveFilms.js";

/** Canonical BOOK chapter 25 (1960s–1989). Sourced editorial draft, requiring
 * independent fact/source review and film-specific Atlas matching.
 * Legacy film Atlas audit chapter numbers are NOT canonical book numbers.
 */
export const filmHistoryChapterTwentyFiveSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch25_african",
    "title": "10 great African films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-african-films"
  },
  {
    "id": "ch25_akerman",
    "title": "Chantal Akerman: A Primer",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/chantal-akerman-primer"
  },
  {
    "id": "ch25_akermandist",
    "title": "Chantal Akerman film catalogue acquired by BFI Distribution",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/news/chantal-akerman-film-catalogue-acquired-bfi-distribution"
  },
  {
    "id": "ch25_archiveprints",
    "title": "360 classic feature films: an archive and repertory project",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/360-classic-feature-films-how-archive-project-sought-show-canon-all-year-round"
  },
  {
    "id": "ch25_berlin",
    "title": "Forum and Forum Expanded: festival history",
    "publisher": "Berlinale",
    "url": "https://www.berlinale.de/en/festival/sections/forum-and-forum-expanded.html"
  },
  {
    "id": "ch25_berlin1971",
    "title": "21st Berlin International Film Festival: yearbook 1971",
    "publisher": "Berlinale",
    "url": "https://www.berlinale.de/en/archive/yearbooks/1971.html"
  },
  {
    "id": "ch25_berlin_archive",
    "title": "The Berlinale Archive",
    "publisher": "Berlinale",
    "url": "https://www.berlinale.de/en/archive/archive-overview/welcome.html"
  },
  {
    "id": "ch25_cannes",
    "title": "The history of the Festival de Cannes",
    "publisher": "Festival de Cannes",
    "url": "https://www.festival-cannes.com/en/the-festival/the-history-of-the-festival/"
  },
  {
    "id": "ch25_cannes68",
    "title": "May 1968 to Festival 1968",
    "publisher": "Festival de Cannes",
    "url": "https://www.festival-cannes.com/en/2008/mai-68-to-festival-68/"
  },
  {
    "id": "ch25_duras",
    "title": "India Song and Baxter, Vera Baxter: In the Thrall of Duras",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/8082-india-song-and-baxter-vera-baxter-in-the-thrall-of-duras"
  },
  {
    "id": "ch25_durasfilm",
    "title": "India Song (1975)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/31904-india-song"
  },
  {
    "id": "ch25_erice",
    "title": "The Spirit of the Beehive (1973)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/367-the-spirit-of-the-beehive"
  },
  {
    "id": "ch25_ericeessay",
    "title": "The Spirit of the Beehive: Spanish Lessons",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/447-the-spirit-of-the-beehive-spanish-lessons"
  },
  {
    "id": "ch25_ericeview",
    "title": "The Child's Point of View in The Spirit of the Beehive",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/4481-the-child-s-point-of-view-in-the-spirit-of-the-beehive"
  },
  {
    "id": "ch25_fassbinder",
    "title": "Ali: Fear Eats the Soul: One Love, Two Oppressions",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/1067-ali-fear-eats-the-soul-one-love-two-oppressions"
  },
  {
    "id": "ch25_fassbinderstyle",
    "title": "The Stripped-Down Style of Ali: Fear Eats the Soul",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/4859-the-stripped-down-style-of-ali-fear-eats-the-soul"
  },
  {
    "id": "ch25_fortnight",
    "title": "Directors' Fortnight: official history",
    "publisher": "Quinzaine des cinéastes",
    "url": "https://www.quinzaine-cineastes.fr/en/who-we-are"
  },
  {
    "id": "ch25_german",
    "title": "10 great New German Cinema films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-new-german-cinema-films"
  },
  {
    "id": "ch25_guzman",
    "title": "Patricio Guzmán: 3 films to see",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/patricio-guzman-three-films-see"
  },
  {
    "id": "ch25_guzmanreview",
    "title": "Patricio Guzmán: documentary chronicler of Chile",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/patricio-guzman-obituary-documentary-chronicler-chile-turbulent-political-history"
  },
  {
    "id": "ch25_herzog",
    "title": "Where to begin with Werner Herzog",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-werner-herzog"
  },
  {
    "id": "ch25_herzogdocs",
    "title": "Beyond the memes: Werner Herzog and the Ecstatic Truth exhibition",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/beyond-memes-werner-herzog-ecstatic-truth-exhibition"
  },
  {
    "id": "ch25_indianarthouse",
    "title": "10 great Indian arthouse films of the 1970s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-indian-arthouse-films-1970s"
  },
  {
    "id": "ch25_iraninstitution",
    "title": "The Koker Trilogy: Journeys of the Heart",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/6555-the-koker-trilogy-journeys-of-the-heart"
  },
  {
    "id": "ch25_jancso",
    "title": "10 great Hungarian films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-hungarian-films"
  },
  {
    "id": "ch25_jancsoposters",
    "title": "Miklós Jancsó: film poster art and international circulation",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/miklos-jancso-film-poster-art"
  },
  {
    "id": "ch25_kiarostami",
    "title": "Where Is the Friend's House? (1987)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/28638-where-is-the-friend-s-house"
  },
  {
    "id": "ch25_koker",
    "title": "The Koker Trilogy",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/boxsets/2363-the-koker-trilogy"
  },
  {
    "id": "ch25_london",
    "title": "A brief history of the BFI London Film Festival",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/brief-history-bfi-london-film-festival"
  },
  {
    "id": "ch25_olmi",
    "title": "Ermanno Olmi on the Whisper of the Generations",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/4430-ermanno-olmi-on-the-whisper-of-the-generations"
  },
  {
    "id": "ch25_parajanov",
    "title": "Where to begin with Sergei Parajanov",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-sergei-parajanov"
  },
  {
    "id": "ch25_ray",
    "title": "Where to begin with Satyajit Ray",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-satyajit-ray"
  },
  {
    "id": "ch25_raycalcutta",
    "title": "In the shadow of Apu: Satyajit Ray's Calcutta trilogy",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/shadow-apu-praise-satyajit-rays-calcutta-trilogy"
  },
  {
    "id": "ch25_rayinterview",
    "title": "Satyajit Ray in conversation in 1970",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/satyajit-ray-conversation-1970-folke-isaksson"
  },
  {
    "id": "ch25_sen",
    "title": "Where to begin with Mrinal Sen",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-mrinal-sen"
  },
  {
    "id": "ch25_shepitko",
    "title": "The Ascent (1977)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/561-the-ascent"
  },
  {
    "id": "ch25_sightpoll",
    "title": "The Greatest Films of All Time: 2022 poll",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/polls/greatest-films-all-time"
  },
  {
    "id": "ch25_tarkovsky",
    "title": "Andrei Tarkovsky, Solaris and Stalker",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/andrei-tarkovsky-solaris-stalker"
  },
  {
    "id": "ch25_tarkovskymirror",
    "title": "Mirror (1975)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/97341aa7-c937-57bf-9011-99bb084472b9/mirror"
  },
  {
    "id": "ch25_tarkovskystalker",
    "title": "Stalker (1979)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/0ee193c2-080e-5ff8-9d4b-842cffd8e53a/stalker"
  },
  {
    "id": "ch25_varda",
    "title": "Vagabond (1985)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/245-vagabond"
  },
  {
    "id": "ch25_vardaessay",
    "title": "Vagabond: Freedom and Dirt",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/501"
  },
  {
    "id": "ch25_venice",
    "title": "History of the Venice Film Festival",
    "publisher": "La Biennale di Venezia",
    "url": "https://www.labiennale.org/en/history-venice-film-festival"
  },
  {
    "id": "ch25_wenders",
    "title": "Where to begin with Wim Wenders",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-wim-wenders"
  },
  {
    "id": "ch25_wenderslocations",
    "title": "Wings of Desire: Berlin locations",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/wings-desire-wim-wenders-berlin-locations"
  },
  {
    "id": "ch25_wendersvisual",
    "title": "5 visual themes in Wings of Desire",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/five-visual-themes-wings-desire-wim-wenders-immortal-film-about-watching"
  },
  {
    "id": "ch25_yeelen",
    "title": "10 great African films: Yeelen",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-african-films?s=09"
  },
  {
    "id": "ch25_yeelenreview",
    "title": "Souleymane Cissé's Yeelen reviewed in 1988",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/souleymane-cisses-yeelen-reviewed-1988"
  }
];
export const filmHistoryChapterTwentyFiveSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentyFiveNetworksSections,
  ...filmHistoryChapterTwentyFiveFilmsSections,
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "Ali: Fear Eats the Soul",
    "year": 1974,
    "note": "Melodrama, xenophobia and festival attention",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "India Song",
    "year": 1975,
    "note": "Duras's sound-image experimentation and colonial setting",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles",
    "year": 1975,
    "note": "Akerman's long-duration feminist domestic cinema",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Meetings of Anna",
    "year": 1978,
    "note": "Akerman's transnational travel and encounters",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Vagabond",
    "year": 1985,
    "note": "Varda's elliptical testimony and European reception",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Wings of Desire",
    "year": 1987,
    "note": "Wenders and divided Berlin",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Aguirre, the Wrath of God",
    "year": 1972,
    "note": "Herzog's colonial fiction and production mythology",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Fitzcarraldo",
    "year": 1982,
    "note": "Herzog and contested Amazon production conditions",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Mirror",
    "year": 1975,
    "note": "Tarkovsky's poetic memory under Soviet production rules",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Stalker",
    "year": 1979,
    "note": "Tarkovsky's philosophical sci-fi and slow cinematic time",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Color of Pomegranates",
    "year": 1969,
    "note": "Parajanov's Armenian visual culture",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Ascent",
    "year": 1977,
    "note": "Shepitko's war drama and Berlin Golden Bear",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Round-Up",
    "year": 1966,
    "note": "Jancsó's political spatial choreographies",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Red Psalm",
    "year": 1972,
    "note": "Jancsó's historical movement and Cannes recognition",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Spirit of the Beehive",
    "year": 1973,
    "note": "Erice's child viewpoint under Franco",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Tree of Wooden Clogs",
    "year": 1978,
    "note": "Olmi's peasant life and long-form storytelling",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Adversary",
    "year": 1970,
    "note": "Ray's Calcutta trilogy and urban pressure",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Company Limited",
    "year": 1971,
    "note": "Ray's middle-class ethics in Calcutta",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Middleman",
    "year": 1975,
    "note": "Ray's urban disillusionment",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Bhuvan Shome",
    "year": 1969,
    "note": "Mrinal Sen and the Parallel Cinema debate",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Where Is the Friend's House?",
    "year": 1987,
    "note": "Kiarostami and Kanoon production",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Yeelen",
    "year": 1987,
    "note": "Souleymane Cissé and Bambara narrative",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Battle of Chile",
    "year": 1975,
    "note": "Patricio Guzmán's documentary and exile; multi-part cycle",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Days and Nights in the Forest",
    "year": 1970,
    "note": "Ray's Bengali art cinema and social relations",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Legend of Suram Fortress",
    "year": 1985,
    "note": "Parajanov's Georgian cultural sources",
    "role": "comparative_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "Cannes Festival's 1968 interruption and changes to official selection",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Directors' Fortnight: independent parallel Cannes selection from 1969",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Berlinale's 1970 disruption and Forum founded in 1971",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Venice Film Festival institutional changes after 1968",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "BFI London Film Festival's festival-of-festivals model and distribution market",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Festival programming, subtitling, print transport and public exhibition",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "State film support, co-productions and broadcaster partnerships across national borders",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Soviet Goskino and other cinema institutions involved in state oversight",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "West German film funds, filmmakers' companies and professional collaborators",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Public film archives, restorations and retrospectives shaping international canon",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Festival competition versus independent sidebars and noncompetitive programs",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Indian Parallel Cinema and public film finance institutions",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Iranian Kanoon and children-centered filmmaking",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Cannes and Berlin awards as reception evidence, not quality metrics",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Exile and transnational circulation of political documentary",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "BFI distribution and home editions changing film availability",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Historical editing and soundtrack versions in films made under censorship",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Critical polls and changing visibility of women directors",
    "note": "Historical festival, archive, rights or funding context; not a fictional playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterTwentyFiveSources.map(s => s.id));
for (const section of filmHistoryChapterTwentyFiveSections) {
  if (section.paragraphs.length !== 3 || section.sourceIds.length < 2 || section.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 25 source provenance failure: ${section.id}`);
  }
}
if (new Set(filmHistoryChapterTwentyFiveSections.flatMap(s => s.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 25 contains unused source records");
}
export const filmHistoryChapterTwentyFive: FilmHistoryBookChapter = {
  id: "festival-art-cinema",
  number: 25,
  title: "Global auteurs and festival networks",
  period: "1960s–1989",
  summary: "Twenty-five sourced essays explain Cannes, Directors' Fortnight, Berlinale Forum, Venice, London Film Festival, art-house circulation, co-production, archives and international film authorship. They connect institutions with Varda, Duras, Akerman, Fassbinder, Wenders, Herzog, Tarkovsky, Parajanov, Shepitko, Jancsó, Erice, Olmi, Ray, Sen, Kiarostami, Cissé and Guzmán. Editorial draft awaiting independent factual verification and film-by-film Atlas matching.",
  status: "draft",
  learningObjectives: [
    "Explain festivals, critics, archives, subtitles, distribution, funding and co-production as institutions shaping world art cinema.",
    "Distinguish Cannes' 1968 interruption and the independent Directors' Fortnight founded in 1969.",
    "Explain the Berlinale's 1970 crisis, 1971 Forum and changes to Venice and London film festivals.",
    "Distinguish production-era access from later restoration, archival editions and international critical canonization.",
    "Analyze Vagabond, India Song and Akerman's films as distinct approaches to gender, voice and narrative time.",
    "Read Ali: Fear Eats the Soul, Wings of Desire and Herzog's films in their differing West German contexts.",
    "Connect Tarkovsky's film form to Soviet production restrictions without equating artistic signature with independence.",
    "Analyze Parajanov's region-specific imagery rather than flattening Ukrainian, Armenian and Georgian cultures.",
    "Explain the relationship between The Ascent and its Berlin award without confusing a prize with Soviet production history.",
    "Compare Jancsó's long takes, Erice's child viewpoint and Olmi's agrarian drama as different art-film forms.",
    "Describe Ray's Calcutta trilogy and Mrinal Sen in the plurality of Indian cinema and Parallel Cinema.",
    "Explain Kanoon's importance for Kiarostami's Where Is the Friend's House? and later international circulation.",
    "Situate Cissé's Yeelen and Guzmán's The Battle of Chile in their cultural, political and distribution contexts.",
    "Avoid treating festival recognition as a complete or impartial measure of cinema across regions."
  ],
  keyTerms: ["art cinema","festival circuit","Cannes","Directors' Fortnight","Berlinale Forum","Venice Film Festival","BFI London Film Festival","film premiere","festival competition","subtitling","art-house distributor","public film funding","co-production","auteur","film canon","repertory theater","film restoration","Agnès Varda","Marguerite Duras","Chantal Akerman","Rainer Werner Fassbinder","Wim Wenders","Werner Herzog","Andrei Tarkovsky","Sergei Parajanov","Larisa Shepitko","Miklós Jancsó","Víctor Erice","Ermanno Olmi","Satyajit Ray","Mrinal Sen","Abbas Kiarostami","Kanoon","Souleymane Cissé","Patricio Guzmán","political exile","documentary","rights and distribution"],
  sections: filmHistoryChapterTwentyFiveSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentyFiveSources,
};
