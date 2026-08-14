import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterOneMovementOne } from "./filmHistoryChapterOneMovementOne.js";
import { filmHistoryChapterOneMovementTwo } from "./filmHistoryChapterOneMovementTwo.js";
import { filmHistoryChapterOneMovementThree } from "./filmHistoryChapterOneMovementThree.js";

export const filmHistoryChapterOneSources: readonly FilmHistoryBookSource[] = [
  { id: "nsm_short_history_cinema", title: "A very short history of cinema", publisher: "National Science and Media Museum", url: "https://www.scienceandmediamuseum.org.uk/objects-and-stories/very-short-history-of-cinema" },
  { id: "nsm_celluloid_beginnings", title: "Celluloid and photography, part 3: the beginnings of cinema", publisher: "National Science and Media Museum", url: "https://blog.scienceandmediamuseum.org.uk/celluloid-and-photography-part-3-the-beginnings-of-cinema/" },
  { id: "nsm_robert_paul", title: "Robert Paul and the race to invent cinema", publisher: "National Science and Media Museum", url: "https://www.scienceandmediamuseum.org.uk/objects-and-stories/robert-paul" },
  { id: "nsm_lumiere", title: "The Lumière brothers: pioneers of cinema and colour photography", publisher: "National Science and Media Museum", url: "https://blog.scienceandmediamuseum.org.uk/the-lumiere-brothers-pioneers-of-cinema-and-colour-photography/" },
  { id: "nsm_marey_motion_capture", title: "Art imitates life: the surprising origins of motion capture", publisher: "National Science and Media Museum", url: "https://www.scienceandmediamuseum.org.uk/objects-and-stories/surprising-origins-motion-capture" },
  { id: "loc_horse_in_motion", title: "The horse in motion", publisher: "Library of Congress", url: "https://www.loc.gov/item/97502309/" },
  { id: "loc_muybridge_animal_locomotion", title: "The horse in motion: first successful photographs of an animal in motion", publisher: "Library of Congress", url: "https://www.loc.gov/item/2005684184/" },
  { id: "loc_edison_origins", title: "Origins of Motion Pictures", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/origins-of-motion-pictures/" },
  { id: "loc_edison_timeline", title: "Timeline", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/timeline/" },
  { id: "loc_blacksmith_copyright", title: "Scholar Identifies the First Motion Picture Ever Copyrighted", publisher: "Library of Congress", url: "https://newsroom.loc.gov/news/scholar-at-the-library-of-congress-identifies-the-first-motion-picture--ever-copyrighted/s/6b6eaee5-b504-4776-82f7-f6c2fc114c18" },
  { id: "loc_edison_early_productions", title: "Early Motion Picture Productions", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/early-motion-picture-productions/" },
  { id: "loc_projectors_vitascope", title: "Shift to Projectors and the Vitascope", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/shift-to-projectors-and-the-vitoscope/" },
  { id: "bfi_origins_cinema", title: "In the beginning: cinema's murky origin story", publisher: "BFI / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/origins-cinema-early-inventors-pioneers" },
  { id: "loc_french_actuality_guide", title: "Documentary and actuality", publisher: "Library of Congress", url: "https://guides.loc.gov/french-and-francophone-film/movements-and-genres/documentary-and-actuality" },
  { id: "bfi_workers_leaving", title: "Fall of the wild: a brief history of dogs on film", publisher: "BFI / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/fall-wild-brief-history-dogs-film" },
  { id: "bfi_arrival_train", title: "The Countryman and the Cinematograph", publisher: "BFI Replay", url: "https://replay.bfi.org.uk/video/bcbf3da8-1a04-5837-82cd-ac21ff586fa6" },
  { id: "loc_annabelle_serpentine", title: "2024 National Film Registry announcement", publisher: "Library of Congress", url: "https://newsroom.loc.gov/news/25-films-named-to-national-film-registry-for-preservation/s/55d5285d-916f-4105-b7d4-7fc3ba8664e3" },
  { id: "bfi_alice_guy_early_women", title: "Where to begin with early women filmmakers", publisher: "BFI", url: "https://www.bfi.org.uk/features/where-begin-with-early-women-filmmakers" },
  { id: "bfi_alice_guy_oblivion", title: "Out of oblivion: Alice Guy-Blaché", publisher: "BFI / Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/out-oblivion-alice-guy-blache" },
  { id: "bfi_larroseur", title: "The Biter Bit", publisher: "BFI Replay", url: "https://replay.bfi.org.uk/video/187/c97e1f81-d0e6-5db9-9f8a-72561a91754a" },
  { id: "bfi_melies_autobiography", title: "Georges Méliès on his early struggles in cinema", publisher: "BFI", url: "https://www.bfi.org.uk/features/georges-melies-autobiography" },
  { id: "bfi_trip_to_the_moon", title: "A Trip to the Moon", publisher: "BFI Player", url: "https://player.bfi.org.uk/free/film/watch-a-trip-to-the-moon-1902-online" },
  { id: "loc_melies_trip_to_moon", title: "Lost 19th century film by Méliès discovered at the Library", publisher: "Library of Congress", url: "https://blogs.loc.gov/loc/2026/02/lost-19th-century-film-by-melies-discovered-at-the-library/" },
  { id: "george_eastman_melies_color", title: "Restaurations des films de Georges Méliès, la fantaisie mise en musique", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/1884.html" },
  { id: "bfi_big_swallow", title: "The Big Swallow", publisher: "BFI Replay", url: "https://replay.bfi.org.uk/video/de56d559-549b-53e4-99d0-774ace4e7a78" },
  { id: "bfi_fire", title: "Fire!", publisher: "BFI Replay", url: "https://replay.bfi.org.uk/video/419/6c2f5357-727a-56a1-b3cd-b818a57ec044" },
  { id: "bfi_edwardian_cinema", title: "10 great films set in the Edwardian era", publisher: "BFI", url: "https://www.bfi.org.uk/lists/10-great-films-set-edwardian-era" },
  { id: "loc_great_train_robbery", title: "The Great Train Robbery", publisher: "Library of Congress", url: "https://www.loc.gov/item/00694220/" },
  { id: "loc_edison_narrative_films", title: "Fictional Films Dominate", publisher: "Library of Congress", url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/fictional-films-dominate/" },
  { id: "loc_life_american_fireman_registry", title: "The Life of an American Fireman (1903)", publisher: "Library of Congress / National Film Registry", url: "https://www.loc.gov/static/programs/national-film-preservation-board/film-registry/descriptions.html" },
  { id: "bfi_rescued_by_rover", title: "Silent Britain", publisher: "BFI", url: "https://shop.bfi.org.uk/silent-britain-dvd/" },
];

export const filmHistoryChapterOne: FilmHistoryBookChapter = {
  id: "motion-before-cinema",
  number: 1,
  title: "From motion studies to cinema",
  period: "1870s–1905",
  summary: "Cinema was not invented once, by one person, on one date. It emerged when photographic motion analysis, flexible film, reliable apparatus, recurring production, viewing and projection systems, commercial circulation and new film forms became connected strongly enough to reproduce one another.",
  status: "full",
  learningObjectives: [
    "Explain why cinema's emergence cannot be reduced to one inventor or one birthday.",
    "Distinguish motion analysis, recording, individual viewing, projection, production and public cinema as related but non-identical developments.",
    "Connect flexible film, intermittent transport, shutters and perforation to the practical production of moving photographs.",
    "Compare the Edison/Dickson Kinetoscope system with portable projected systems without treating either as an inevitable endpoint.",
    "Analyze actuality and staged performance as deliberate early forms rather than immature versions of later narrative cinema.",
    "Explain how Méliès integrated design, performance, camera manipulation and laboratory work into trick-film production.",
    "Trace the move from single-shot staging toward multi-shot construction without claiming that one film invented editing or narrative.",
    "Use archival evidence and version history to evaluate contested claims about early cinema.",
  ],
  keyTerms: [
    "chronophotography",
    "celluloid film",
    "intermittent movement",
    "perforation",
    "Kinetograph",
    "Kinetoscope",
    "Black Maria",
    "Cinématographe",
    "projection",
    "actuality",
    "tableau",
    "trick film",
    "substitution effect",
    "multiple exposure",
    "multi-shot construction",
    "continuity",
    "paper print",
    "Film Atlas",
  ],
  sections: [
    ...filmHistoryChapterOneMovementOne,
    ...filmHistoryChapterOneMovementTwo,
    ...filmHistoryChapterOneMovementThree,
  ],
  filmReferences: [
    { title: "Blacksmith Scene", year: 1893, role: "anchor_film", atlasDecision: "P0", note: "Anchor for Dickson/Edison, Black Maria production, staged performance and copyright evidence." },
    { title: "Workers Leaving the Lumière Factory", year: 1895, role: "anchor_film", atlasDecision: "P0", note: "Anchor for actuality, portable production, framing, multiple versions and modern life as subject." },
    { title: "L'Arroseur arrosé", year: 1895, role: "comparative_film", atlasDecision: "P2", note: "Compact staged gag showing that Lumière production was not restricted to actuality." },
    { title: "Annabelle Serpentine Dance", year: 1895, role: "historical_object", atlasDecision: "P2", note: "Performance, attraction and hand-tinted colour as part of the material life of early prints." },
    { title: "Arrival of a Train at La Ciotat", year: 1896, role: "comparative_film", atlasDecision: "P2", note: "Movement through depth and a case for separating documented spectatorship from the later panic myth." },
    { title: "The Big Swallow", year: 1901, role: "comparative_film", atlasDecision: "P2", note: "Camera proximity, scale change and reflexive play with the spectator-camera relationship." },
    { title: "Fire!", year: 1901, role: "comparative_film", atlasDecision: "P1", note: "Multi-shot action and the construction of connected film space in early British cinema." },
    { title: "A Trip to the Moon", year: 1902, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_a_trip_to_the_moon_1902", note: "Principal close reading: theatrical mise-en-scène, designed screen space, camera tricks and transformation effects." },
    { title: "Life of an American Fireman", year: 1903, role: "comparative_film", atlasDecision: "P1", note: "Multi-shot construction plus the historiographic problem of a later cross-cut re-edit once mistaken for the original." },
    { title: "The Great Train Robbery", year: 1903, role: "anchor_film", atlasDecision: "P0", note: "Anchor for action across studio and locations, multiple scenes, causal organization and the limits of invention myths." },
    { title: "Rescued by Rover", year: 1905, role: "comparative_film", atlasDecision: "P1", note: "Bridge toward more systematic spatial and causal continuity, with production demand visible in repeated re-shooting." },
  ],
  historicalObjects: [
    { label: "Eadweard Muybridge motion studies", role: "historical_object", atlasDecision: "no_production_case", note: "Sequential photography as analysis of movement over time." },
    { label: "Étienne-Jules Marey chronophotography", role: "historical_object", atlasDecision: "no_production_case", note: "Single-viewpoint chronophotographic analysis and the photographic gun." },
    { label: "Kinetograph, Kinetoscope and Black Maria", role: "historical_object", atlasDecision: "no_production_case", note: "Apparatus and production environment needed to understand Edison/Dickson as a system rather than one title." },
    { label: "Cinématographe and competing projection systems", role: "historical_object", atlasDecision: "no_production_case", note: "Projection and portability as system changes, with detailed exhibition history reserved for Chapter 2." },
  ],
  sources: filmHistoryChapterOneSources,
};

export function countFilmHistoryChapterWords(chapter: FilmHistoryBookChapter): number {
  return chapter.sections
    .flatMap((section) => [section.title, ...section.paragraphs])
    .join(" ")
    .trim()
    .split(/\s+/u)
    .filter(Boolean).length;
}
