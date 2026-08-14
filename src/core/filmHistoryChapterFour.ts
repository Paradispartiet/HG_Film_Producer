import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterFourMovementOne } from "./filmHistoryChapterFourMovementOne.js";
import { filmHistoryChapterFourMovementTwo } from "./filmHistoryChapterFourMovementTwo.js";
import { filmHistoryChapterFourMovementThree } from "./filmHistoryChapterFourMovementThree.js";

export const filmHistoryChapterFourSources: readonly FilmHistoryBookSource[] = [
  { id: "ch4_loc_edison_collection", title: "Inventing Entertainment: The Early Motion Pictures and Sound Recordings of the Edison Companies", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/about-this-collection/" },
  { id: "ch4_loc_fictional_films", title: "Fictional Films Dominate", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/fictional-films-dominate/" },
  { id: "ch4_loc_edison_decline", title: "Decline of the Edison Company", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/decline-of-the-edison-company/" },
  { id: "ch4_loc_actuality_film", title: "The Actuality Film", publisher: "Library of Congress", url: "https://www.loc.gov/collections/early-films-of-new-york-1898-to-1906/articles-and-essays/the-actuality-film/" },
  { id: "ch4_loc_paper_prints", title: "Early Motion Pictures Free of Copyright Restrictions in the Library of Congress", publisher: "Library of Congress", url: "https://wwws.loc.gov/rr/mopic/earlymps.html" },
  { id: "ch4_smithsonian_projection_kinetoscope", title: "The Edison Projection Kinetoscope", publisher: "Smithsonian National Museum of American History", url: "https://americanhistory.si.edu/collections/object/nmah_1184485" },
  { id: "ch4_ucpress_transformation", title: "The Transformation of Cinema, 1907–1915", publisher: "University of California Press", url: "https://www.ucpress.edu/books/the-transformation-of-cinema-1907-1915/paper/" },
  { id: "ch4_columbia_peepshow", title: "From Peepshow to Palace: The Birth of American Film", publisher: "Columbia University Press", url: "https://cup.columbia.edu/book/from-peepshow-to-palace/9780231103398/" },
  { id: "ch4_columbia_early_cinema", title: "Early Cinema: From Factory Gate to Dream Factory", publisher: "Columbia University Press / Wallflower Press", url: "https://cup.columbia.edu/book/early-cinema/9780231850315/" },
  { id: "ch4_rutgers_american_cinema", title: "American Cinema 1890–1909: Themes and Variations", publisher: "Rutgers University Press", url: "https://www.rutgersuniversitypress.org/american-cinema-1890-1909/9780813544434/" },
  { id: "ch4_rutgers_silent_film", title: "Silent Film", publisher: "Rutgers University Press", url: "https://www.rutgersuniversitypress.org/silent-film/9780813522265/" },
  { id: "ch4_bfi_innovators", title: "The Innovators 1900–1910: Time After Time", publisher: "British Film Institute", url: "https://old.bfi.org.uk/sightandsound/feature/145" },
  { id: "ch4_loc_great_train", title: "The Great Train Robbery", publisher: "Library of Congress", url: "https://www.loc.gov/item/00694220/" },
  { id: "ch4_moma_great_train", title: "Edwin S. Porter. The Great Train Robbery. 1903", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/304708" },
  { id: "ch4_bfi_rover", title: "Rescued by Rover (1905)", publisher: "BFI Screenonline", url: "https://www.screenonline.org.uk/film/id/514859/index.html" },
  { id: "ch4_sase_rover", title: "Rescued by Rover", publisher: "Screen Archive South East", url: "https://screenarchive.brighton.ac.uk/detail/8407/" },
  { id: "ch4_dfi_rover", title: "Rescued by Rover", publisher: "Danish Film Institute", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/120019" },
  { id: "ch4_science_museum_rover", title: "A dog detective, fairies, and Sherlock Holmes’ dressing gown", publisher: "Science Museum", url: "https://blog.sciencemuseum.org.uk/dog-detective-fairies-sherlock-holmes-dressing-gown/" },
  { id: "ch4_loc_lonely_villa", title: "The Lonely Villa", publisher: "Library of Congress", url: "https://www.loc.gov/item/2015600152/" },
  { id: "ch4_afi_lonely_villa", title: "The Lonely Villa (1909)", publisher: "AFI Catalog", url: "https://catalog.afi.com/Film/36631-THE-LONELYVILLA" },
  { id: "ch4_moma_lonely_villa", title: "D. W. Griffith. The Lonely Villa. 1909", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/304882" },
  { id: "ch4_gunning_lonely_villa", title: "Heard over the phone: The Lonely Villa and the de Lorde tradition of the terrors of technology", publisher: "Oxford Academic / Screen", url: "https://academic.oup.com/screen/article-abstract/32/2/184/1630430" },
  { id: "ch4_nfsa_kelly_page", title: "The Story of the Kelly Gang", publisher: "National Film and Sound Archive of Australia", url: "https://www.nfsa.gov.au/collection/curated/story-kelly-gang" },
  { id: "ch4_nfsa_kelly_feature", title: "The Story of the Kelly Gang – Australia’s and the world’s first feature film", publisher: "National Film and Sound Archive of Australia", url: "https://www.nfsa.gov.au/latest/story-kelly-gang-australias-and-worlds-first-feature-film" },
  { id: "ch4_unesco_kelly", title: "The Story of the Kelly Gang (1906)", publisher: "UNESCO Memory of the World", url: "https://www.unesco.org/en/memory-world/story-kelly-gang-1906" },
  { id: "ch4_bfi_kelly", title: "The Story of the Kelly Gang (1906)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/e8572cbd-21d7-593c-9ca5-7364ea3fc6e6/the-story-of-the-kelly-gang" },
  { id: "ch4_fondation_queen", title: "Queen Elisabeth", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/event/307" },
  { id: "ch4_bfi_queen", title: "Dressing the part: Sarah Bernhardt and Queen Elizabeth", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/dressing-part-sarah-bernhardt-queen-elizabeth" },
  { id: "ch4_moma_queen", title: "Queen Elizabeth. 1912", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/299079" },
  { id: "ch4_nypl_queen", title: "Queen Elizabeth – Famous Players Film Co.", publisher: "New York Public Library Digital Collections", url: "https://digitalcollections.nypl.org/items/b158da70-a1d2-0135-b8af-3b6f36acdd55" },
  { id: "ch4_ucla_traffic", title: "Traffic in Souls (1913)", publisher: "UCLA Film & Television Archive", url: "https://www.cinema.ucla.edu/events/2023/12/02/traffic-souls-1913" },
  { id: "ch4_afi_traffic", title: "Traffic in Souls", publisher: "AFI Catalog", url: "https://catalog.afi.com/Catalog/MovieDetails/16377" },
  { id: "ch4_loc_traffic_copyright", title: "Traffic in Souls — Copyright Description", publisher: "Library of Congress", url: "https://tile.loc.gov/storage-services/service/mbrs/cdmmi/s1/22/9l/23/26/4/s1229l23264/s1229l23264.pdf" },
  { id: "ch4_bfi_long_take", title: "The long take: Great footage", publisher: "British Film Institute / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage" },
  { id: "ch4_loc_traffic_registry", title: "Traffic in Souls — National Film Registry Essay", publisher: "Library of Congress", url: "https://www.loc.gov/static/programs/national-film-preservation-board/documents/traffic_souls.pdf" },
  { id: "ch4_fondation_duke", title: "L’Assassinat du Duc de Guise", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/event/152" },
  { id: "ch4_bfi_silent_epics", title: "10 great silent epics", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-silent-epics" },
  { id: "ch4_bfi_cabiria", title: "Cabiria (1914)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/8e661935-d214-5d2e-89ea-3576f8118727/cabiria" },
  { id: "ch4_cannes_cabiria", title: "Cabiria", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/f/cabiria/" },
  { id: "ch4_moma_cabiria", title: "Giovanni Pastrone’s Cabiria", publisher: "Museum of Modern Art", url: "https://production-gcp.moma.org/explore/inside_out/2009/11/10/giovanni-pastrones-cabiria/" },
];

const sections = [
  ...filmHistoryChapterFourMovementOne,
  ...filmHistoryChapterFourMovementTwo,
  ...filmHistoryChapterFourMovementThree,
];

const sourceIds = new Set(filmHistoryChapterFourSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterFourSources.length) throw new Error("Chapter 4 source IDs must be unique");
if (new Set(filmHistoryChapterFourSources.map((source) => source.url)).size !== filmHistoryChapterFourSources.length) throw new Error("Chapter 4 source URLs must be unique");
for (const source of filmHistoryChapterFourSources) {
  if (!source.id.startsWith("ch4_")) throw new Error(`Chapter 4 source ID must start with ch4_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 4 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 4 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterFour: FilmHistoryBookChapter = {
  id: "industry-feature-transition",
  number: 4,
  title: "Companies, patents and the feature transition",
  period: "1905–1914",
  summary: "Between 1905 and 1914 cinema became a more organized industry through permanent venues, rental circulation, patent and licensing networks, company workflows and competing feature strategies. None of these systems appeared in one clean breakthrough: they overlapped across countries and business models while short programmes, local exhibition and material print variation remained active.",
  status: "full",
  learningObjectives: [
    "Explain why permanent venues and recurring programmes changed film demand without erasing travelling exhibition, vaudeville or local programme authorship.",
    "Describe how film exchanges and rental circulation converted prints from purchased novelties into repeatedly booked working assets.",
    "Analyze print wear, replacement negatives, catalogues and paper deposits as evidence for industrial circulation and version history.",
    "Distinguish patent ownership, litigation, licensing and market power instead of treating them as one undifferentiated monopoly mechanism.",
    "Explain how the Motion Picture Patents Company coordinated producers, exchanges, exhibitors and stock supply while remaining contested and incomplete.",
    "Describe how General Film Company and competing distribution networks concentrated booking power and also created administrative regularity.",
    "Connect company brands, stock companies, departments and release schedules to repeatable production without projecting a fully mature studio system backward.",
    "Analyze longer films as infrastructural commitments involving capital, reels, transport, booking, programme design and differentiated admission.",
    "Evaluate The Story of the Kelly Gang through both its feature-scale importance and the limits imposed by surviving fragments.",
    "Explain how Queen Elizabeth used stage celebrity and prestige circulation without turning one import into the sole origin of feature legitimacy.",
    "Analyze Traffic in Souls as a convergence of reform discourse, sensational marketing, urban production and feature economics.",
    "Compare French and Italian feature routes with American and Australian developments without assigning the transition to one nation, company or film.",
  ],
  keyTerms: [
    "nickelodeon",
    "storefront theatre",
    "continuous programme",
    "film exchange",
    "rental circulation",
    "print wear",
    "release schedule",
    "territory",
    "paper print",
    "replacement negative",
    "patent litigation",
    "licensing",
    "Motion Picture Patents Company",
    "General Film Company",
    "independent producer",
    "distribution concentration",
    "company brand",
    "stock company",
    "production department",
    "feature",
    "multireel film",
    "road-show engagement",
    "prestige production",
    "exploitation film",
    "vertical integration",
  ],
  sections,
  filmReferences: [
    { title: "Rescued by Rover", year: 1905, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_rescued_by_rover_1905", note: "Existing case reused for repeatable route continuity, replacement-negative history and the connection between a legible narrative design and circulating commercial demand." },
    { title: "The Story of the Kelly Gang", year: 1906, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_story_of_the_kelly_gang_1906", note: "Feature-scale Australian production taught through surviving fragments, outdoor logistics and qualified first-feature historiography rather than invented complete shot order." },
    { title: "The Lonely Villa", year: 1909, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_lonely_villa_1909", note: "Existing Biograph case reused to connect company workflow, stock performers and sustained parallel action without claiming that Griffith invented cross-cutting." },
    { title: "Queen Elizabeth", year: 1912, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_queen_elizabeth_1912", note: "Prestige-feature case linking Sarah Bernhardt, Pathé production, international exploitation and the Famous Players business proposition without a single-origin studio myth." },
    { title: "Traffic in Souls", year: 1913, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_traffic_in_souls_1913", note: "American six-reel case for Universal production, urban location work, reform discourse, sensational exploitation and the economics of differentiated feature release." },
    { title: "L'Assassinat du duc de Guise", year: 1908, role: "comparative_film", atlasDecision: "P2", note: "Book-level comparison for Film d’Art prestige, established stage artists and composed music; its distinct value is historical comparison rather than another required Production Case." },
    { title: "Quo Vadis?", year: 1913, role: "comparative_film", atlasDecision: "P2", note: "Book-level Italian epic comparison for international feature circulation and multireel spectacle after the stronger playable feature-transition anchors are already present." },
    { title: "Cabiria", year: 1914, role: "comparative_film", atlasDecision: "P2", note: "Book-level endpoint for Italian epic scale, moving-camera spectacle and prestige exhibition; retained as comparison rather than duplicating Queen Elizabeth and Traffic in Souls." },
  ],
  historicalObjects: [
    { label: "Film exchanges and print rental", role: "historical_object", atlasDecision: "no_production_case", note: "The shift from print sales toward rental distribution changed how exhibitors accessed programmes and how producers could regularize circulation; the system is infrastructure, not a film Production Case." },
    { label: "Nickelodeons and purpose-built theatres", role: "historical_object", atlasDecision: "no_production_case", note: "Permanent venues created daily demand, recurring programmes and a stable exhibition market; they shape production conditions but are not themselves staged film scenarios." },
    { label: "Edison patent litigation and license agreements", role: "historical_object", atlasDecision: "no_production_case", note: "Patent claims, court actions and licence terms changed equipment access, costs and competition before and during the patent-pool period; they must remain distinct pieces of industrial evidence." },
    { label: "Motion Picture Patents Company (MPPC)", role: "historical_object", atlasDecision: "no_production_case", note: "The 1908 patent and licensing pool linked producers, exchanges, theatres and film-stock supply in an attempt to regulate the American market, but it remained contested and incomplete." },
    { label: "General Film Company", role: "historical_object", atlasDecision: "no_production_case", note: "The MPPC-linked distribution company consolidated licensed exchanges and made distribution structure itself a site of industrial power; it is a system rather than a fictional film case." },
    { label: "Independent producers and distributors", role: "historical_object", atlasDecision: "no_production_case", note: "Independent companies challenged licensed-company control and built alternative production, distribution and feature strategies; their network belongs in industrial history, not a fabricated scenario." },
    { label: "Multi-reel and feature booking practices", role: "historical_object", atlasDecision: "no_production_case", note: "Longer films changed pricing, programme structure, transport, touring, booking and risk, while individual verified films carry the playable evidence for those changes." },
  ],
  sources: filmHistoryChapterFourSources,
};
