import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterThreeMovementOne } from "./filmHistoryChapterThreeMovementOne.js";
import { filmHistoryChapterThreeMovementTwo } from "./filmHistoryChapterThreeMovementTwo.js";
import { filmHistoryChapterThreeMovementThree } from "./filmHistoryChapterThreeMovementThree.js";

export const filmHistoryChapterThreeSources: readonly FilmHistoryBookSource[] = [
  { id: "ch3_bfi_inventing_language", title: "Inventing Film Language", publisher: "BFI National Archive", url: "https://replay.bfi.org.uk/collection/419" },
  { id: "ch3_loc_fictional_films", title: "Fictional Films Dominate", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/fictional-films-dominate/" },
  { id: "ch3_cannes_trip_moon", title: "Le Voyage dans la lune (A Trip to the Moon)", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/f/le-voyage-dans-la-lune/" },
  { id: "ch3_cannes_trip_restoration", title: "A Trip to the Moon – a return journey", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/2011/a-trip-to-the-moon-a-return-journey/" },
  { id: "ch3_loc_melies_methods", title: "Lost 19th century film by Méliès discovered at the Library", publisher: "Library of Congress", url: "https://blogs.loc.gov/loc/2026/02/lost-19th-century-film-by-melies-discovered-at-the-library/" },
  { id: "ch3_bfi_grandma", title: "Grandma's Reading Glass", publisher: "British Film Institute", url: "https://replay.bfi.org.uk/video/419/bc4007f9-c8fa-5293-846a-de032dc142af" },
  { id: "ch3_sase_grandma", title: "Grandma's Reading Glass — Title ID 8372", publisher: "Screen Archive South East", url: "https://screenarchive.brighton.ac.uk/detail/8372/" },
  { id: "ch3_unibo_grandma", title: "Grandma’s Reading Glass (1900)", publisher: "University of Bologna Research Archive", url: "https://cris.unibo.it/handle/11585/962676" },
  { id: "ch3_bfi_fire", title: "Fire! (1901)", publisher: "BFI Screenonline", url: "https://www.screenonline.org.uk/film/id/520632/index.html" },
  { id: "ch3_sase_fire", title: "Fire! — Title ID 8389", publisher: "Screen Archive South East", url: "https://screenarchive.brighton.ac.uk/detail/8389/" },
  { id: "ch3_eastman_narrative", title: "James Card Program #2: Development of the Narrative", publisher: "George Eastman Museum", url: "https://www.eastman.org/event/film-screenings/james-card-program-2-development-narrative-35mm-16mm" },
  { id: "ch3_bfi_attack", title: "Attack on a China Mission - Bluejackets to the Rescue", publisher: "British Film Institute", url: "https://replay.bfi.org.uk/video/bd0d85a8-9027-5da8-b23c-3a2687695135" },
  { id: "ch3_sase_attack", title: "Attack on a China Mission (Bluejackets to the Rescue) — Title ID 8382", publisher: "Screen Archive South East", url: "https://screenarchive.brighton.ac.uk/detail/8382/" },
  { id: "ch3_dulac_attack", title: "Cross-cutting in the face of history: The case of Attack on a China Mission", publisher: "Early Popular Visual Culture / Taylor & Francis", url: "https://www.tandfonline.com/doi/abs/10.1080/17460650902775328" },
  { id: "ch3_oxford_attack", title: "All England Was Present at that Siege: Imperial Defences and Island Stories in British Culture", publisher: "Oxford Academic / History Workshop Journal", url: "https://academic.oup.com/hwj/article/93/1/159/6555067" },
  { id: "ch3_cambridge_boxer", title: "Peking Plots: Fictionalizing the Boxer Rebellion of 1900", publisher: "Cambridge University Press", url: "https://www.cambridge.org/core/journals/victorian-literature-and-culture/article/abs/peking-plots-fictionalizing-the-boxer-rebellion-of-1900/967087D1D32D8AE004692F99DD50EA8E" },
  { id: "ch3_loc_life_fireman", title: "The Life of an American Fireman (1903)", publisher: "Library of Congress", url: "https://www.loc.gov/static/programs/national-film-preservation-board/film-registry/descriptions.html" },
  { id: "ch3_bfi_innovators", title: "The Innovators 1900-1910: Time After Time", publisher: "British Film Institute", url: "https://old.bfi.org.uk/sightandsound/feature/145" },
  { id: "ch3_afi_life_fireman", title: "Life of an American Fireman", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/31950-LIFE-OFANAMERICANFIREMAN" },
  { id: "ch3_moma_porter", title: "Edwin S. Porter: A Portrait", publisher: "Museum of Modern Art", url: "https://www.moma.org/explore/inside_out/2009/09/22/an-auteurist-history-of-film-a-portrait-of-edwin-s-porte/" },
  { id: "ch3_loc_great_train", title: "The Great Train Robbery", publisher: "Library of Congress", url: "https://www.loc.gov/item/00694220/" },
  { id: "ch3_moma_great_train", title: "Edwin S. Porter. The Great Train Robbery. 1903", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/304708" },
  { id: "ch3_bfi_rover", title: "Rescued by Rover (1905)", publisher: "BFI Screenonline", url: "https://www.screenonline.org.uk/film/id/514859/index.html" },
  { id: "ch3_sase_rover", title: "Rescued by Rover", publisher: "Screen Archive South East", url: "https://screenarchive.brighton.ac.uk/detail/8407/" },
  { id: "ch3_dfi_rover", title: "Rescued by Rover", publisher: "Danish Film Institute", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/120019" },
  { id: "ch3_science_museum_rover", title: "A dog detective, fairies, and Sherlock Holmes’ dressing gown", publisher: "Science Museum", url: "https://blog.sciencemuseum.org.uk/dog-detective-fairies-sherlock-holmes-dressing-gown/" },
  { id: "ch3_cnc_histoire", title: "Il y a 160 ans naissait Ferdinand Zecca", publisher: "Centre national du cinéma et de l'image animée (CNC)", url: "https://www.cnc.fr/cinema/actualites/il-y-a-160-ans-naissait-ferdinand-zecca_2165740" },
  { id: "ch3_pathe_history", title: "Pathé – Our history", publisher: "Pathé", url: "https://www.pathe.com/en/pathe/" },
  { id: "ch3_fondation_pathe", title: "Histoire de Pathé", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/cms/histoire_pathe" },
  { id: "ch3_grimh_histoire", title: "Pathé 358 – Histoire d'un crime", publisher: "GRIMH / early-cinema historical archive", url: "https://www.grimh.org/index.php?Itemid=675&id=666&lang=fr&layout=edit&option=com_content&view=article" },
  { id: "ch3_bloomsbury_french_cinema", title: "Historical Dictionary of French Cinema", publisher: "Scarecrow Press / Bloomsbury", url: "https://www.bloomsbury.com/us/historical-dictionary-of-french-cinema-9780810854918/" },
  { id: "ch3_loc_lonely_villa", title: "The Lonely Villa", publisher: "Library of Congress", url: "https://www.loc.gov/item/2015600152/" },
  { id: "ch3_afi_lonely_villa", title: "The Lonely Villa (1909)", publisher: "AFI Catalog", url: "https://catalog.afi.com/Film/36631-THE-LONELYVILLA" },
  { id: "ch3_moma_lonely_villa", title: "D. W. Griffith. The Lonely Villa. 1909", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/304882" },
  { id: "ch3_gunning_lonely_villa", title: "Heard over the phone: The Lonely Villa and the de Lorde tradition of the terrors of technology", publisher: "Oxford Academic / Screen", url: "https://academic.oup.com/screen/article-abstract/32/2/184/1630430" },
  { id: "ch3_ucp_griffith", title: "Thinking in Pictures: Dramatic Structure in D. W. Griffith's Biograph Films", publisher: "University of California Press", url: "https://www.ucpress.edu/books/thinking-in-pictures/paper" },
  { id: "ch3_uillinois_griffith", title: "D.W. Griffith And The Origins Of American Narrative Film: The Early Years at Biograph", publisher: "University of Illinois Press", url: "https://www.press.uillinois.edu/books/?id=p063664" },
];

const sections = [
  ...filmHistoryChapterThreeMovementOne,
  ...filmHistoryChapterThreeMovementTwo,
  ...filmHistoryChapterThreeMovementThree,
];

const sourceIds = new Set(filmHistoryChapterThreeSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterThreeSources.length) throw new Error("Chapter 3 source IDs must be unique");
if (new Set(filmHistoryChapterThreeSources.map((source) => source.url)).size !== filmHistoryChapterThreeSources.length) throw new Error("Chapter 3 source URLs must be unique");
for (const source of filmHistoryChapterThreeSources) {
  if (!source.id.startsWith("ch3_")) throw new Error(`Chapter 3 source ID must start with ch3_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 3 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 3 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterThree: FilmHistoryBookChapter = {
  id: "fiction-editing-narrative",
  number: 3,
  title: "From views to stories",
  period: "1896–1912",
  summary: "Narrative cinema did not arrive in one breakthrough. Filmmakers across several countries gradually learned to organize viewpoint, linked spaces, causal routes, represented memory and parallel action while tableau staging, tricks, direct address and other attractions remained active parts of film form.",
  status: "full",
  learningObjectives: [
    "Explain why attraction, tableau staging and increasingly systematic narrative organization coexist rather than form a simple primitive-to-mature ladder.",
    "Analyze how motivated inserts and changes of scale can create analytical viewpoint without treating early represented gaze as identical to later classical subjective POV.",
    "Explain how causal action, entrances, exits and repeated routes connect separate tableaux into intelligible screen space.",
    "Treat surviving copies, paper prints, replacement negatives, reconstructions and later re-edits as evidence that can change formal interpretation.",
    "Distinguish the original inside-then-outside rescue structure of Life of an American Fireman from the later cross-cut re-edit once mistaken for Porter's original.",
    "Explain how Histoire d'un crime represents past experience within a present-tense prison scene without turning that solution into an uncontested first-flashback claim.",
    "Analyze sustained parallel action in The Lonely Villa as the coordination of several simultaneous action lines, communication, travel and suspense.",
    "Evaluate early narrative change as a transnational and industrial process rather than attributing editing, continuity, POV, flashback or cross-cutting to a single inventor.",
    "Connect formal development to production systems, including Pathé organization, Biograph studio-location work, Hepworth replacement negatives and Edison spectacle production.",
    "Analyze racist and imperial representation in Attack on a China Mission as part of the production and formal system rather than as a detachable historical footnote.",
  ],
  keyTerms: [
    "tableau",
    "attraction",
    "analytical insert",
    "represented gaze",
    "point of view",
    "scene linkage",
    "causal continuity",
    "route continuity",
    "temporal overlap",
    "represented memory",
    "parallel action",
    "cross-cutting",
    "direct address",
    "version history",
    "paper print",
    "reconstruction",
    "replacement negative",
    "narrative integration",
  ],
  sections,
  filmReferences: [
    { title: "Grandma's Reading Glass", year: 1900, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_grandmas_reading_glass_1900", note: "Anchor for motivated magnified inserts, analytical viewpoint and represented gaze without a single-inventor close-up/POV myth." },
    { title: "Attack on a China Mission - Bluejackets to the Rescue", year: 1900, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900", note: "Provenance-controlled case in which surviving copies, catalogue evidence and later reconstruction remain distinguishable and imperial/racist representation remains explicit." },
    { title: "Histoire d'un crime", year: 1901, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_histoire_d_un_crime_1901", note: "Pathé multi-tableau crime drama for represented memory and narrative time, with an explicit safeguard against a universal first-flashback claim." },
    { title: "Fire!", year: 1901, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_fire_1901", note: "Anchor for chronological multi-shot rescue action and causal construction of linked space." },
    { title: "A Trip to the Moon", year: 1902, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_a_trip_to_the_moon_1902", note: "Anchor for sustained multi-tableau fantasy, theatrical staging and transformation effects without treating tableau form as failed continuity." },
    { title: "Life of an American Fireman", year: 1903, role: "comparative_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_life_of_an_american_fireman_1903", note: "Version-history case: the original rescue is completed inside and then replayed outside; a later cross-cut re-edit must not be attributed to Porter as the 1903 original." },
    { title: "The Great Train Robbery", year: 1903, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_great_train_robbery_1903", note: "Anchor for causal multi-scene action, studio/location integration and flexible direct address without an inventor-of-editing myth." },
    { title: "Rescued by Rover", year: 1905, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_rescued_by_rover_1905", note: "Anchor for repeated routes, stable geography, animal performance and replacement-version history." },
    { title: "The Lonely Villa", year: 1909, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_lonely_villa_1909", note: "Late-period anchor for sustained parallel action, telephone-linked spaces and narrative convergence; Griffith is treated as a consolidator, not inventor, of cross-cutting." },
  ],
  historicalObjects: [
    { label: "Magic-lantern and theatrical tableau traditions", role: "historical_object", atlasDecision: "no_production_case", note: "Sequential visual culture and staged scenic organization predate cinema and provide formal context without becoming fake film Production Cases." },
    { label: "Film catalogues, synopses and shot descriptions", role: "historical_object", atlasDecision: "no_production_case", note: "Commercial descriptions help reconstruct intended action and order but must be treated as historically situated evidence, not neutral formal analysis." },
    { label: "Paper-print copyright deposits", role: "historical_object", atlasDecision: "no_production_case", note: "Material evidence that can preserve early American shot order and expose later re-edits or reconstruction errors." },
    { label: "Intertitles, lecturers and other narrative framing", role: "historical_object", atlasDecision: "no_production_case", note: "Story information could be supplied outside photographed dramatic action; internal film narration did not instantly eliminate live or textual explanation." },
    { label: "Remakes, replacement negatives and re-edited versions", role: "historical_object", atlasDecision: "no_production_case", note: "Version history is a formal evidence problem because later copies can change the apparent technique of an early film." },
    { label: "Editing conventions as historical practices", role: "historical_object", atlasDecision: "no_production_case", note: "POV inserts, analytical cutting, represented memory, scene linkage and parallel action are practices to analyze through films rather than fictional stand-alone Production Cases." },
  ],
  sources: filmHistoryChapterThreeSources,
};
