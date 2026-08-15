import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterFiveMovementOne } from "./filmHistoryChapterFiveMovementOne.js";
import { filmHistoryChapterFiveMovementTwo } from "./filmHistoryChapterFiveMovementTwo.js";
import { filmHistoryChapterFiveMovementThree } from "./filmHistoryChapterFiveMovementThree.js";

export const filmHistoryChapterFiveSources: readonly FilmHistoryBookSource[] = [
  { id: "ch5_ucpress_transformation", title: "The Transformation of Cinema, 1907–1915", publisher: "University of California Press", url: "https://www.ucpress.edu/books/the-transformation-of-cinema-1907-1915/paper/" },
  { id: "ch5_columbia_early", title: "Early Cinema: From Factory Gate to Dream Factory", publisher: "Columbia University Press / Wallflower Press", url: "https://cup.columbia.edu/book/early-cinema/9780231850315/" },
  { id: "ch5_rutgers_silent", title: "Silent Film", publisher: "Rutgers University Press", url: "https://www.rutgersuniversitypress.org/silent-film/9780813522265/" },
  { id: "ch5_gaumont_fantomas", title: "Fantômas (Feuillade)", publisher: "Gaumont", url: "https://www.gaumont.com/en/movie/fantomas-0" },
  { id: "ch5_cinematheque_fantomas", title: "Fantômas — Louis Feuillade, 1913", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/48519.html" },
  { id: "ch5_bnf_juve", title: "Juve contre Fantômas — conventional title record", publisher: "Bibliothèque nationale de France", url: "https://catalogue.bnf.fr/ark:/12148/cb16462208q" },
  { id: "ch5_bnf_mort", title: "Le Mort qui tue — conventional title record", publisher: "Bibliothèque nationale de France", url: "https://catalogue.bnf.fr/ark:/12148/cb16472192c" },
  { id: "ch5_fondation_duke", title: "L’Assassinat du Duc de Guise", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/event/152" },
  { id: "ch5_fondation_queen", title: "La Reine Elisabeth", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/event/2251" },
  { id: "ch5_bfi_queen", title: "Strike a pose: fashion and film through the ages", publisher: "British Film Institute / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/strike-pose-fashion-film-through-ages" },
  { id: "ch5_moma_queen", title: "Modern Matinees: Iris Barry's History of Film — Queen Elizabeth", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/5818" },
  { id: "ch5_nypl_queen", title: "Queen Elizabeth — Research Catalog", publisher: "New York Public Library", url: "https://test.nypl.org/research/research-catalog/bib/b15562649" },
  { id: "ch5_dfi_afgrunden", title: "Afgrunden — Film Database", publisher: "Det Danske Filminstitut", url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/afgrunden-0" },
  { id: "ch5_bfi_asta", title: "Asta Nielsen: the silent muse", publisher: "British Film Institute / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/asta-nielsen-silent-muse" },
  { id: "ch5_stumfilm_afgrunden", title: "Afgrunden — Danish Silent Film streaming record", publisher: "Det Danske Filminstitut / Stumfilm.dk", url: "https://www.stumfilm.dk/stumfilm/streaming/film/afgrunden" },
  { id: "ch5_dfi_history_1910_1919", title: "Dansk filmhistorie: 1910-1919", publisher: "Det Danske Filminstitut", url: "https://www.dfi.dk/viden-om-film/filmhistorie/dansk-filmhistorie-1910-1919" },
  { id: "ch5_stumfilm_white_slave", title: "The White Slave Trade", publisher: "Det Danske Filminstitut / Stumfilm.dk", url: "https://www.stumfilm.dk/en/stumfilm/streaming/film/den-hvide-slavehandel" },
  { id: "ch5_stumfilm_white_slave_theme", title: "Stumfilm, hvid slavehandel og voldtægtsmyter", publisher: "Det Danske Filminstitut / Stumfilm.dk", url: "https://www.stumfilm.dk/stumfilm/temaer/stumfilm-hvid-slavehandel-og-voldtaegtsmyter" },
  { id: "ch5_stumfilm_silent_art", title: "The Silent Art", publisher: "Det Danske Filminstitut / Stumfilm.dk", url: "https://www.stumfilm.dk/en/stumfilm/themes/silent-art" },
  { id: "ch5_dfi_atlantis", title: "Atlantis — Film Database", publisher: "Det Danske Filminstitut", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/atlantis-1" },
  { id: "ch5_dfi_history_1910_1920", title: "Danish Film History: 1910-1920", publisher: "Det Danske Filminstitut", url: "https://www.dfi.dk/en/english/danish-film-history/danish-film-history-1910-1920" },
  { id: "ch5_stumfilm_atlantis", title: "Atlantis — Danish Silent Film streaming record", publisher: "Det Danske Filminstitut / Stumfilm.dk", url: "https://www.stumfilm.dk/en/stumfilm/streaming/film/atlantis" },
  { id: "ch5_museo_cabiria_record", title: "Cabiria — restored silent films record", publisher: "Museo Nazionale del Cinema", url: "https://www2.museocinema.it/restauri/muti_restaurati.php?id=34&l=en" },
  { id: "ch5_cinematheque_cabiria", title: "Cabiria — Giovanni Pastrone, 1914", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/43134.html" },
  { id: "ch5_museo_cabiria_restoration", title: "Cabiria & Cabiria. The restoration", publisher: "Museo Nazionale del Cinema", url: "https://www.museocinema.it/en/exhibitions/cabiria-cabiria-restoration-0" },
  { id: "ch5_bfi_silent_epics", title: "10 great silent epics", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-silent-epics" },
  { id: "ch5_cannes_cabiria", title: "Cabiria", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/f/cabiria/" },
  { id: "ch5_moma_cabiria", title: "Giovanni Pastrone’s Cabiria", publisher: "Museum of Modern Art", url: "https://production-gcp.moma.org/explore/inside_out/2009/11/10/giovanni-pastrones-cabiria/" },
  { id: "ch5_ucla_traffic", title: "Traffic in Souls / Where Are My Children?", publisher: "UCLA Film & Television Archive", url: "https://cinema.ucla.edu/events/traffic-in-souls-1913-where-are-my-children-1916-2012-05-10/" },
  { id: "ch5_afi_traffic", title: "Traffic in Souls", publisher: "American Film Institute Catalog", url: "https://catalog.afi.com/Film/2111-TRAFFIC-IN-SOULS" },
  { id: "ch5_loc_traffic_copyright", title: "Traffic in Souls — Motion picture copyright descriptions collection", publisher: "Library of Congress", url: "https://www.loc.gov/item/s1229l01767/" },
  { id: "ch5_bfi_long_take", title: "The long take: Great footage", publisher: "British Film Institute / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage" },
  { id: "ch5_loc_nfr", title: "National Film Registry 2006", publisher: "Library of Congress", url: "https://www.loc.gov/loc/lcib/07012/film.html" },
  { id: "ch5_filmportal_student", title: "Der Student von Prag", publisher: "filmportal.de / DFF – Deutsches Filminstitut & Filmmuseum", url: "https://www.filmportal.de/film/der-student-von-prag_eea77e18d0cc4d038e114d869caf1431" },
  { id: "ch5_filmportal_student_material", title: "Hanns Heinz Ewers: Der Student von Prag", publisher: "filmportal.de / DFF – Deutsches Filminstitut & Filmmuseum", url: "https://www.filmportal.de/material/hanns-heinz-ewers-der-student-von-prag" },
  { id: "ch5_sfi_ingeborg", title: "Ingeborg Holm", publisher: "Svenska Filminstitutet", url: "https://www.filminstitutet.se/sv/fa-kunskap-om-film/ta-del-av-filmsamlingarna/filmer/ingeborg-holm/" },
  { id: "ch5_sfi_silent", title: "Den svenska stumfilmen", publisher: "Svenska Filminstitutet", url: "https://www.filminstitutet.se/sv/se-och-samtala-om-film/biodistributionen/svenska-stumfilmer/stumfilmstiden-i-sverige/" },
  { id: "ch5_assam_raja", title: "The most iconic scene of Indian Cinema — Raja Harishchandra", publisher: "Jyoti Chitraban Film Studio Society, Government of Assam", url: "https://jyotichitraban.assam.gov.in/latest/the-most-iconic-scene-of-indian-cinema-now-in-colors" },
  { id: "ch5_google_raja", title: "Still from film Raja Harishchandra", publisher: "Google Arts & Culture / National Film Archive of India collection credit", url: "https://artsandculture.google.com/asset/still-from-film-raja-harishchandra-dadasaheb-phalke/wwEVxedyT82HSA?hl=en" },
];

const sections = [
  ...filmHistoryChapterFiveMovementOne,
  ...filmHistoryChapterFiveMovementTwo,
  ...filmHistoryChapterFiveMovementThree,
];

const sourceIds = new Set(filmHistoryChapterFiveSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterFiveSources.length) throw new Error("Chapter 5 source IDs must be unique");
if (new Set(filmHistoryChapterFiveSources.map((source) => source.url)).size !== filmHistoryChapterFiveSources.length) throw new Error("Chapter 5 source URLs must be unique");
for (const source of filmHistoryChapterFiveSources) {
  if (!source.id.startsWith("ch5_")) throw new Error(`Chapter 5 source ID must start with ch5_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 5 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 5 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterFive: FilmHistoryBookChapter = {
  id: "global-before-wwi",
  number: 5,
  title: "Cinema becomes international",
  period: "1907–1914",
  summary: "Between 1907 and 1914 cinema became an explicitly transnational industry. French company networks, Danish feature exports, Italian historical spectacle, American independent features and emerging production cultures elsewhere competed through territorial rights, translated and alternate versions, stars, genres and longer films. The period is not a relay race toward one national winner: production centres overlapped, copied, traded and learned from one another until World War I sharply reorganized those routes.",
  status: "full",
  learningObjectives: [
    "Map prewar production centres through circulation routes rather than treating national cinemas as sealed boxes.",
    "Explain how company infrastructure, catalogues, rights and distribution allowed films to travel internationally.",
    "Distinguish original production from territorial distribution, translated intertitles, censorship changes, preservation and later restoration.",
    "Analyze transnational stardom through both stage prestige and screen-generated celebrity.",
    "Explain how popular genre and cultural prestige could operate together as market strategies.",
    "Use Afgrunden to connect performance-centred production to Asta Nielsen's international screen identity without an invention myth.",
    "Explain Danish multi-reel competition and Nordisk Film's export strategy through comparative long-form production.",
    "Use Atlantis to analyze literary prestige, large-scale coordination and market-specific alternate endings.",
    "Use Fantômas to analyze recurring identity, popular-literary adaptation and company-supported cycle production without projecting later serial norms backward.",
    "Use Queen Elizabeth to distinguish French prestige production from American rights exploitation and feature-market consequences.",
    "Place Cabiria inside an existing Italian epic cycle and analyze spectacle as coordinated design, camera, effects, crowds and music.",
    "Use Traffic in Souls to compare American independent feature production with the European export systems reshaping the same market.",
    "Recognize Germany, Sweden and India as active prewar production contexts while preserving their later chapters for deeper treatment.",
    "Treat 1914 as a historical rupture in circulation and industrial balance rather than a teleological finish line.",
  ],
  keyTerms: [
    "national cinema", "transnational cinema", "export market", "territorial rights", "intertitle translation", "versioning", "alternate ending", "company catalogue", "branch distribution", "star system", "screen star", "prestige production", "Film d'Art", "genre cycle", "crime cycle", "erotic melodrama", "multi-reel feature", "historical epic", "road-show prestige", "production centre", "international rights", "archival survival", "restoration version", "market differentiation", "recurring character", "feature risk",
  ],
  sections,
  filmReferences: [
    { title: "Afgrunden", year: 1910, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_afgrunden_1910", note: "Existing performance-led Danish erotic-melodrama case: compact production, Asta Nielsen's breakthrough, the rope-dance set piece and screen-star value capable of crossing borders." },
    { title: "Atlantis", year: 1913, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_atlantis_1913", note: "Existing Nordisk export-feature case: literary adaptation, large-scale shipwreck staging, two credited cinematographers and documented market-specific alternate endings." },
    { title: "Cabiria", year: 1914, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_cabiria_1914", note: "Existing Italian epic case for integrated spectacle, large production design, crowd organization, mobile camera, effects coordination, music and carefully separated 1914/1931 version history." },
    { title: "Fantômas", year: 1913, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_fantomas_1913", note: "Existing Gaumont crime-cycle case for recurring identity, disguise, pursuit and audience memory across a five-film popular-literary property without a sole-invention claim for seriality." },
    { title: "Queen Elizabeth", year: 1912, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_queen_elizabeth_1912", note: "Existing prestige-feature case linking Sarah Bernhardt, Le Film d'Art, costume design and transatlantic rights while keeping French production distinct from American exploitation." },
    { title: "Traffic in Souls", year: 1913, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_traffic_in_souls_1913", note: "Existing American independent feature reused to compare urban location production, reform rhetoric, sensational marketing and six-reel economics with imported European feature competition." },
    { title: "Ingeborg Holm", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "Book-level Swedish social-drama evidence broadens the prewar map; fuller production treatment is deliberately reserved for Chapter 10 rather than tokenized here." },
    { title: "L'Assassinat du duc de Guise", year: 1908, role: "comparative_film", atlasDecision: "P2", note: "Book-level Film d'Art comparison for prestige culture and Pathé-linked circulation; Queen Elizabeth supplies the stronger distinct playable prestige-production problem." },
    { title: "L'Inferno", year: 1911, role: "comparative_film", atlasDecision: "P2", note: "Book-level evidence that long Italian literary spectacle predates Cabiria, preventing a false single-film origin story for the epic cycle." },
    { title: "Quo Vadis?", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "Major Italian epic-export comparison retained as prose evidence so Chapter 5 does not duplicate Cabiria's stronger integrated-spectacle gameplay function." },
    { title: "Raja Harishchandra", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "Foundational Indian feature-production evidence with explicit preservation/version caution; deeper production and exhibition history belongs to Chapter 10." },
    { title: "The Student of Prague", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "German prewar art-film and performer/author collaboration bridge toward later German cinema without pre-empting the dedicated Weimar chapter." },
    { title: "The White Slave Trade", year: 1910, role: "comparative_film", atlasDecision: "P2", note: "Book-level Danish comparison for multi-reel competition, rapid imitation, trafficking melodrama and export-network advantage; Afgrunden and Atlantis carry distinct playable Danish problems." },
  ],
  historicalObjects: [
    { label: "Pathé Frères production-distribution network", role: "historical_object", atlasDecision: "no_production_case", note: "International company, catalogue and circulation infrastructure belongs in industrial explanation; it is not itself a film that should be forced into a Production Case." },
    { label: "Gaumont production and serial infrastructure", role: "historical_object", atlasDecision: "no_production_case", note: "Company organization made recurring characters and regular genre production scalable; Fantômas is the playable film case, while the corporate system remains historical infrastructure." },
    { label: "Nordisk Film export network", role: "historical_object", atlasDecision: "no_production_case", note: "Foreign distribution and a deliberately export-oriented feature strategy made a small national production centre unusually international before World War I." },
    { label: "Italian historical-epic production centres", role: "historical_object", atlasDecision: "no_production_case", note: "Turin and Rome companies concentrated capital, sets, crowds and prestige around long-form spectacle; Cabiria embodies one production problem without replacing the wider industrial ecology." },
    { label: "Transnational star circulation", role: "historical_object", atlasDecision: "no_production_case", note: "Performers such as Sarah Bernhardt and Asta Nielsen became portable market identities through different routes; star circulation is an industrial process, not a separate film scenario." },
    { label: "Territorial rights, intertitles and versioning", role: "historical_object", atlasDecision: "no_production_case", note: "Rights sales, translated cards, censorship and market-specific versions shaped international circulation and must remain visible as infrastructure rather than invented standalone gameplay." },
    { label: "Film catalogues, trade press and export advertising", role: "historical_object", atlasDecision: "no_production_case", note: "International markets depended on information systems that described, branded and sold films across distance; these materials are historical evidence, not fake Production Cases." },
  ],
  sources: filmHistoryChapterFiveSources,
};
