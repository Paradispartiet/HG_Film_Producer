import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterTenMovementOne } from "./filmHistoryChapterTenMovementOne.js";
import { filmHistoryChapterTenMovementTwo } from "./filmHistoryChapterTenMovementTwo.js";
import { filmHistoryChapterTenMovementThree } from "./filmHistoryChapterTenMovementThree.js";

export const filmHistoryChapterTenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch10_nfaj_history", title: "Nihon Eiga: The History of Japanese Film", publisher: "National Film Archive of Japan", url: "https://www.nfaj.go.jp/english/exhibition/historyofjapanesefilm/" },
  { id: "ch10_page_nfaj", title: "Kurutta ippeiji / A Page of Madness – collection record", publisher: "National Film Archive of Japan", url: "https://nfad.nfaj.go.jp/det.php?data_id=66794" },
  { id: "ch10_page_umich", title: "A Page of Madness: Cinema and Modernity in 1920s Japan", publisher: "University of Michigan Press", url: "https://press.umich.edu/Books/A/A-Page-of-Madness2" },
  { id: "ch10_page_bfi_1926", title: "10 great films of 1926", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1926" },
  { id: "ch10_page_bfi_player", title: "A Page of Madness", publisher: "British Film Institute", url: "https://player.bfi.org.uk/subscription/film/watch-a-page-of-madness-1926-online" },
  { id: "ch10_orochi_bfi_year", title: "A great Japanese film for every year – from 1925 to now", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/great-japanese-film-every-year-from-1925-now" },
  { id: "ch10_orochi_bfi_1925", title: "10 great films of 1925", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1925" },
  { id: "ch10_orochi_nfaj_bantsuma", title: "NFAJ Digital Gallery No. 28 – Bantsuma Kanto Studio", publisher: "National Film Archive of Japan", url: "https://www.nfaj.go.jp/onlineservice/digital-gallery/nfaj-digital-gallery-no-28/" },
  { id: "ch10_orochi_matsuda", title: "Top 16 Japanese Films – Orochi", publisher: "Matsuda Film Productions", url: "https://www.matsudafilm.com/matsuda/e_pages/e_ee.html" },
  { id: "ch10_orochi_lumiere", title: "Orochi", publisher: "Institut Lumière", url: "https://www.festival-lumiere.org/manifestations/orochi.html" },
  { id: "ch10_labor_hkfa", title: "Labor's Love", publisher: "Hong Kong Film Archive", url: "https://www.filmarchive.gov.hk/en/web/hkfa/2009/early-chinese-films/pe-event-2009-early-chinese-films-fs-film01.html" },
  { id: "ch10_labor_cfa", title: "Labourer's Love", publisher: "China Film Archive", url: "https://www.cfa.org.cn/cfaen/gz/dymlcx/dy/2023053114391333102/index.html" },
  { id: "ch10_labor_mingxing", title: "Mingxing Film Company", publisher: "China Film Archive", url: "https://www.cfa.org.cn/eportal/ui?articleKey=faf3782c7d5447cb942f67d2220a74fb&columnId=aee8c2276575443880b0930ac8406c81&pageId=2a6abc370b534133aa7cc904b3be9db1" },
  { id: "ch10_labor_cfc", title: "Laborer's Love (1922)", publisher: "Chinese Film Classics", url: "https://chinesefilmclassics.org/laborers-love-1922/" },
  { id: "ch10_labor_cfc_module", title: "Module 1: Laborer's Love (1922)", publisher: "Chinese Film Classics", url: "https://chinesefilmclassics.org/course/module-1-laborers-love-1922/" },
  { id: "ch10_labor_restore", title: "New 4K restoration of Laborer's Love premieres at Il Cinema Ritrovato", publisher: "China Film Archive", url: "https://www.cfa.org.cn/cfa/fy/dyjz26/gnjz/2025022409032510237/index.html" },
  { id: "ch10_red_ucla", title: "Red Heroine (China, 1929)", publisher: "UCLA Film & Television Archive", url: "https://www.cinema.ucla.edu/events/2024/04/27/red-heroine" },
  { id: "ch10_red_cfa", title: "Red Heroine / The Red Errant Knight – 2K", publisher: "China Film Archive", url: "https://www.cfa.org.cn/cfaen/gz/dymlcx/dy/2023053116474486795/index.html" },
  { id: "ch10_red_nfaj", title: "Silent Film Renaissance 2019 – Red Heroine", publisher: "National Film Archive of Japan", url: "https://www.nfaj.go.jp/exhibition/silent2019/" },
  { id: "ch10_red_catalog", title: "China Film Archive restored classic-film catalogue", publisher: "China Film Archive", url: "https://www.cfa.org.cn/cfaen/gz/dymlcx/index.html" },
  { id: "ch10_throw_bfi", title: "Schicksalswürfel (1929)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/9331d899-b4d1-5f45-9aa0-4a5736b697b4/schicksalswurfel" },
  { id: "ch10_throw_filmportal", title: "Schicksalswürfel", publisher: "filmportal.de", url: "https://www.filmportal.de/film/schicksalswuerfel_6e66091243ed403ebca68a3491428bf9" },
  { id: "ch10_throw_bfi_trilogy", title: "Faith and creation: Anoushka Shankar on her score for Shiraz", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/interviews/faith-creation-anoushka-shankar-her-score-shiraz" },
  { id: "ch10_throw_silentfest", title: "A Throw of Dice", publisher: "San Francisco Silent Film Festival", url: "https://silentfilm.org/a-throw-of-dice/" },
  { id: "ch10_shiraz_bfi", title: "Shiraz (1928)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/cbd6238a-0768-5ce8-8c2f-9d6a42867cb2/shiraz" },
  { id: "ch10_india_nitrate_fhf", title: "Nitrate Fires – Reasons for the loss of India's cinematic heritage", publisher: "Film Heritage Foundation", url: "https://filmheritagefoundation.co.in/nitrate-fires-reasons-for-the-loss-of-indias-cinematic-heritage/" },
  { id: "ch10_raja_bfi", title: "Widening visions: the Bradford Film Festival", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/widening-vision-bradford-film-festival" },
  { id: "ch10_growth_nb", title: "Markens grøde (1921) – Norsk filmografi", publisher: "Nasjonalbiblioteket", url: "https://www.nb.no/filmografi/show?id=793756" },
  { id: "ch10_growth_nb_music", title: "Markens Grøde – Originalmusikken til filmen", publisher: "Nasjonalbiblioteket", url: "https://www.nb.no/sheet-music/product/markens-grode-originalmusikken-til-filmen-less1921greater/" },
  { id: "ch10_growth_dfi", title: "Markens Grøde – Filmdatabasen", publisher: "Danish Film Institute", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/markens-grode" },
  { id: "ch10_growth_dfi_cinema", title: "Markens Grøde – Cinemateket", publisher: "Danish Film Institute", url: "https://www.dfi.dk/cinemateket/biograf/alle-film/film/markens-grode" },
  { id: "ch10_growth_nb_1921", title: "Storstreik, flytragedie og fotballfeber – slik var nyhetsåret 1921", publisher: "Nasjonalbiblioteket", url: "https://www.nb.no/historier-fra-samlingen/nyttarskavalkade-1921/" },
  { id: "ch10_afgrunden_dfi", title: "The Abyss / Afgrunden", publisher: "Danish Film Institute", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/afgrunden-0" },
  { id: "ch10_asta_dfi", title: "Asta Nielsen", publisher: "Danish Film Institute", url: "https://www.dfi.dk/viden-om-film/filmdatabasen/person/asta-nielsen" },
  { id: "ch10_danish_history_dfi", title: "Dansk filmhistorie 1896–2009", publisher: "Danish Film Institute", url: "https://www.dfi.dk/viden-om-film/filmhistorie/dansk-filmhistorie-1896-2009" },
  { id: "ch10_sweden_archive_sfi", title: "History of the archive", publisher: "Swedish Film Institute", url: "https://www.filminstitutet.se/en/learn-more-about-film/archival-film-collections/history-of-the-archive/" },
  { id: "ch10_sweden_golden_sfi", title: "Vingarne – context on the Swedish silent golden age", publisher: "Swedish Film Institute", url: "https://www.filminstitutet.se/sv/fa-kunskap-om-film/ta-del-av-filmsamlingarna/filmer/vingarne/" },
  { id: "ch10_haxan_dfi", title: "The Witches / Heksen", publisher: "Danish Film Institute", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/heksen" },
  { id: "ch10_haxan_sfi_restore", title: "Om Häxans digitala restaurering", publisher: "Swedish Film Institute", url: "https://www.filminstitutet.se/sv/nyheter/2016/om-haxans-digitala-restaurering/" },
  { id: "ch10_haxan_sfi_century", title: "Worldwide success for Häxan", publisher: "Swedish Film Institute", url: "https://www.filminstitutet.se/en/news/2022/wordwide-success-for-haxan/" },
  { id: "ch10_bloke_nfsa", title: "NFSA Restores: The Sentimental Bloke (1919)", publisher: "National Film and Sound Archive of Australia", url: "https://www.nfsa.gov.au/collection/item/nfsa-restores-sentimental-bloke-1919-0" },
  { id: "ch10_bloke_restore_nfsa", title: "Silent film classic The Sentimental Bloke digitally restored for 100th anniversary", publisher: "National Film and Sound Archive of Australia", url: "https://www.nfsa.gov.au/about/media-releases/national/silent-film-classic-sentimental-bloke-digitally-restored-100th-anniversary" },
  { id: "ch10_bloke_reconstruction_nfsa", title: "The Sentimental Bloke: 2004 Reconstruction", publisher: "National Film and Sound Archive of Australia", url: "https://www.nfsa.gov.au/stories/articles/sentimental-bloke" },
  { id: "ch10_auto_cineteca", title: "El automóvil gris cumple su primer centenario", publisher: "Cineteca Nacional México", url: "https://www.cinetecanacional.net/noticiaPrensa.php?accion=nota&id=1119" },
  { id: "ch10_auto_unam", title: "Centenario: El automóvil gris, una película adelantada a su tiempo", publisher: "Universidad Nacional Autónoma de México", url: "https://www.gaceta.unam.mx/centenario-el-automovil-gris-una-pelicula-adelantada-a-su-tiempo/" },
  { id: "ch10_auto_cinematheque", title: "La Voiture grise / El Automóvil gris", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/44224.html" },
];

const sections = [
  ...filmHistoryChapterTenMovementOne,
  ...filmHistoryChapterTenMovementTwo,
  ...filmHistoryChapterTenMovementThree,
];

const sourceIds = new Set(filmHistoryChapterTenSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterTenSources.length) throw new Error("Chapter 10 source IDs must be unique");
if (new Set(filmHistoryChapterTenSources.map((source) => source.url)).size !== filmHistoryChapterTenSources.length) throw new Error("Chapter 10 source URLs must be unique");
for (const source of filmHistoryChapterTenSources) {
  if (!source.id.startsWith("ch10_")) throw new Error(`Chapter 10 source ID must start with ch10_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 10 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 10 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterTen: FilmHistoryBookChapter = {
  id: "silent-beyond-west",
  number: 10,
  title: "Silent cinemas beyond the usual canon",
  period: "1910s–1929",
  summary: "Silent cinema was never one Hollywood-European system and the films that survive are not a neutral sample of what was made. This chapter follows nine completed playable Atlas cases—Afgrunden, The Phantom Carriage, Growth of the Soil, A Page of Madness, Orochi, Laborer's Love, The Red Heroine, A Throw of Dice and Häxan—across Danish, Swedish, Norwegian, Japanese, Chinese and transnational Indian production while using fifteen further films for comparison. Benshi performance, star companies, Shanghai studios, wuxia seriality, Phalke's production world, Rai–Osten co-production, Scandinavian prestige systems and nitrate loss remain historical structures rather than fake scenarios. Archive provenance, fragment boundaries, later scores, reconstructed tinting, censorship, recutting and projection speed are treated as part of the evidence chain, so a restored modern presentation is never mistaken for one timeless original.",
  status: "full",
  learningObjectives: [
    "Explain why the surviving silent-film canon is shaped by nitrate loss, archive custody, restoration and rediscovery rather than representing production neutrally.",
    "Compare Danish, Swedish and Norwegian silent production systems without treating Scandinavia as one national or stylistic unit.",
    "Explain benshi as a Japanese exhibition institution and keep live narration separate from synchronized production sound.",
    "Use A Page of Madness to connect independent production, collaborative modernism, benshi exhibition and rediscovery without turning mental illness into a horror preset.",
    "Use Orochi to analyze star-producer independence and chanbara choreography as coordinated performance, camera and editing rather than generic swordfight intensity.",
    "Use Laborer's Love to connect Mingxing's early Shanghai studio formation, bilingual intertitles and physical gag construction while keeping survival claims distinct from origin claims.",
    "Use The Red Heroine to analyze wuxia serial production, female action performance and trick work while preserving the hard boundary that only one section of a thirteen-part serial survives.",
    "Explain why Raja Harishchandra and The Burning of the Red Lotus Temple remain historically central even when fragmentary or lost evidence makes a complete Production Case inappropriate.",
    "Use A Throw of Dice to analyze Indian producer-star agency, German technical collaboration, British participation and location production without assigning national purity.",
    "Use Growth of the Soil to connect literary adaptation, Nordland location work, tinting/toning and original orchestral cinema music to Norwegian production history.",
    "Use Häxan to distinguish research evidence, explanatory claim, staged reenactment, fantasy and historically situated psychology despite the film's lecture-like authority.",
    "Compare Swedish golden-age films as a varied field of melodrama, landscape, comedy, adaptation, stardom and photographic experimentation rather than one prestige preset.",
    "Use The Sentimental Bloke and El automóvil gris to expand silent-film history through Australian and Mexican production, location evidence, serial form and restoration history.",
    "Practice version criticism across runtimes, projection speeds, restored tints, later scores, censorship cuts, fragment survival and serial-to-feature reassembly.",
    "Keep 1930s synchronized-sound landmarks in the sound-transition chapter instead of back-projecting later recording systems into silent production.",
  ],
  keyTerms: [
    "archive survival", "nitrate film", "provenance", "restoration", "rediscovery", "version criticism", "projection speed", "tinting", "toning", "silent accompaniment", "benshi", "intertitle", "jidaigeki", "chanbara", "star company", "independent production", "Shinkankakuha", "Mingxing", "Shanghai studio culture", "wuxia", "serial", "fragment survival", "trick photography", "mythological", "Phalke", "transnational co-production", "producer-star", "location production", "literary adaptation", "Scandinavian silent golden age", "Nordisk", "Asta Nielsen", "Sjöström", "Stiller", "lecture film", "reenactment", "documentary authority", "censorship", "archive reconstruction", "vernacular cinema", "national cinema", "world cinema", "colonial circulation", "live music", "restoration score", "sound transition",
  ],
  sections,
  filmReferences: [
    { title: "A Page of Madness", year: 1926, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_a_page_of_madness_1926", note: "Kinugasa's completed playable anchor for independent Japanese modernism, collaborative craft, benshi-era exhibition, mental-institution representation and rediscovery/version history." },
    { title: "Laborer's Love", year: 1922, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_laborers_love_1922", note: "The completed Mingxing anchor for early Shanghai studio formation, physical gag construction, bilingual intertitles and disciplined separation of earliest-surviving from first-ever claims." },
    { title: "A Throw of Dice", year: 1929, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_a_throw_of_dice_1929", note: "The completed Rai–Osten anchor for India–Germany–United Kingdom co-production, Indian location and producer-star agency, German technical collaboration and modern-score separation." },
    { title: "Growth of the Soil", year: 1921, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_growth_of_the_soil_1921", note: "The completed Norwegian anchor for literary adaptation, Nordland location production, tinting/toning, Halvorsen's film music and reconstruction from dispersed archive materials." },
    { title: "Orochi", year: 1925, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_orochi_1925", note: "The completed Bantsuma anchor for independent star-company economics, anti-feudal chanbara, action choreography, negative preservation and later benshi/restoration layers." },
    { title: "The Red Heroine", year: 1929, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_red_heroine_1929", note: "The completed surviving-section anchor for Shanghai wuxia serial production, female martial agency, trick work and a permanent prohibition on inventing the serial's twelve missing installments." },
    { title: "Häxan", year: 1922, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_haxan_1922", note: "The completed trans-Scandinavian anchor for research, lecture form, reenactment, horror spectacle, trick photography, censorship and restoration-provenance safeguards." },
    { title: "Afgrunden", year: 1910, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_afgrunden_1910", note: "The existing Danish anchor for Asta Nielsen's screen performance, erotic melodrama, early star circulation and the preservation history of degraded and censored material." },
    { title: "The Phantom Carriage", year: 1921, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_phantom_carriage_1921", note: "The existing Swedish anchor for literary adaptation, location-based visual culture, layered in-camera photography and international silent-era prestige." },
    { title: "Crossroads", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Kinugasa's later avant-garde jidaigeki comparison extends Japanese modernism and international circulation without duplicating A Page of Madness's distinct Production Case." },
    { title: "Souls on the Road", year: 1921, role: "comparative_film", atlasDecision: "P2", note: "A comparison for Shochiku-era modernization, Western dramatic influence and early Japanese feature production beyond the surviving playable anchors." },
    { title: "The Romance of the Western Chamber", year: 1927, role: "comparative_film", atlasDecision: "P2", note: "A surviving-fragment comparison for Minxin's costume production, literary adaptation and tinting, kept below gameplay because its evidence is incomplete." },
    { title: "The Burning of the Red Lotus Temple", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "The lost wuxia serial phenomenon remains essential for serial economics, effects and censorship history, but no complete film survives from which to fabricate a full Production Case." },
    { title: "Raja Harishchandra", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "Phalke's landmark production remains central to Indian film history while its fragmentary survival blocks a false complete-feature gameplay reconstruction." },
    { title: "Kaliya Mardan", year: 1919, role: "comparative_film", atlasDecision: "P2", note: "A Phalke comparison that broadens mythological performance and effects beyond a one-film founder narrative." },
    { title: "The Light of Asia", year: 1925, role: "comparative_film", atlasDecision: "P2", note: "The first Rai–Osten collaboration establishes the transnational production network later continued by Shiraz and the playable A Throw of Dice." },
    { title: "Shiraz", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "The India-location British–Indian–German epic broadens the Rai–Osten trilogy through design, costume and modern restoration-score history." },
    { title: "Ingeborg Holm", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "Sjöström's social melodrama broadens Swedish performance, institutional realism and narrative form before later prestige production." },
    { title: "The Outlaw and His Wife", year: 1918, role: "comparative_film", atlasDecision: "P2", note: "A Swedish comparison for landscape, elemental staging and literary production distinct from The Phantom Carriage's effects-centered playable problem." },
    { title: "Sir Arne's Treasure", year: 1919, role: "comparative_film", atlasDecision: "P2", note: "Stiller, Lagerlöf adaptation and Jaenzon photography broaden the Swedish silent golden age without requiring another overlapping case." },
    { title: "Erotikon", year: 1920, role: "comparative_film", atlasDecision: "P2", note: "Stiller's sophisticated urban comedy keeps Swedish silent history from collapsing into landscapes and solemn literary prestige." },
    { title: "Gösta Berling's Saga", year: 1924, role: "comparative_film", atlasDecision: "P2", note: "A large-scale Lagerlöf adaptation and star-formation comparison that helps explain Greta Garbo's emergence and the international reach of Swedish prestige cinema." },
    { title: "The Sentimental Bloke", year: 1919, role: "comparative_film", atlasDecision: "P2", note: "The Australian vernacular feature broadens location production, intertitle culture and cross-border restoration history outside the chapter's principal playable regions." },
    { title: "El automóvil gris", year: 1919, role: "comparative_film", atlasDecision: "P2", note: "The Mexican crime serial broadens location work, actuality/fiction mixture, episodic release and archive reassembly without pretending its restored feature is the only historical version." },
  ],
  historicalObjects: [
    { label: "Benshi, live narration, intertitles and silent-era accompaniment", note: "Japanese silent exhibition often relied on benshi performance, while other territories used different combinations of intertitles and live music; silent must never be treated as one universal mute presentation format.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Japanese studios, independent star companies, jidaigeki and chanbara production", note: "Shochiku-era modernization and independent performer-producers such as Tsumasaburo Bando created different production and distribution models; genres and companies are institutional context rather than reusable visual presets or fake films.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Shanghai studios, Mingxing/Minxin networks and urban Chinese modernity", note: "Early Chinese production grew through changing companies, writers, performers, translators and urban exhibition circuits; a tiny surviving corpus must not be mistaken for the whole industry or for a single national origin moment.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Wuxia serial culture, special effects, censorship and fragment survival", note: "Late-1920s martial-arts serials could run across many installments and later face bans or loss; surviving Red Heroine and lost Red Lotus evidence require explicit limits on what historians can reconstruct.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Phalke, mythological production and early Indian studio formation", note: "Indian silent production developed indigenous entrepreneurship, mythological genres, performance and technical practices before sound; founder narratives remain contextual history rather than a single origin preset.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Himansu Rai, Franz Osten and transnational Indian-European co-production", note: "The Light of Asia, Shiraz and A Throw of Dice combined Indian producer-star agency, German direction and technical collaboration, British participation and international circulation; co-production is not evidence of national purity.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Swedish golden-age studios, literary adaptation and landscape aesthetics", note: "Sjöström, Stiller, cinematographers, companies and authors such as Selma Lagerlöf built prestige through adaptation, performance, studio and location work; the production system matters beyond auteur labels or a single landscape style.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Danish Nordisk, Asta Nielsen and Scandinavian transnational circulation", note: "Danish companies and performers were major international forces before and during the 1910s, linking national production to export markets and mobile careers rather than isolated national canons.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Norwegian silent production, literary prestige and location culture", note: "Norwegian features such as Growth of the Soil developed through smaller domestic companies, literary adaptation, music, color treatment and demanding location work; preservation and later restoration shape what can now be studied.", role: "historical_object", atlasDecision: "no_production_case" },
    { label: "Nitrate loss, incomplete survival, archive reconstruction and canon bias", note: "Most silent films from several chapter regions are lost or incomplete. Surviving titles are evidence conditioned by nitrate chemistry, preservation, rediscovery, archive policy and later reconstruction, not a statistically representative sample of historical production.", role: "historical_object", atlasDecision: "no_production_case" },
  ],
  sources: filmHistoryChapterTenSources,
};
