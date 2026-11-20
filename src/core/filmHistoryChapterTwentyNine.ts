import type { FilmHistoryBookChapter, FilmHistoryBookSource, FilmHistoryBookSection, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentyNineFranchisesSections } from "./filmHistoryChapterTwentyNineFranchises.js";
import { filmHistoryChapterTwentyNinePlatformsSections } from "./filmHistoryChapterTwentyNinePlatforms.js";
/** Canonical book chapter 29, 2000s–present.
 * Editorial draft: sources are individually identified but all claims require independent review.
 * Book-only P2 refs are NOT verified missing Atlas films.
 */
export const filmHistoryChapterTwentyNineSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch29_3d",
    "publisher": "BFI Sight and Sound",
    "title": "Lessons from Gravity: state of 3D cinema",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/lessons-from-gravity-state-3d-cinema"
  },
  {
    "id": "ch29_actionbfi",
    "publisher": "British Film Institute",
    "title": "A great action film for every year, 1924 to now",
    "url": "https://www.bfi.org.uk/lists/great-action-film-every-year-1924-now"
  },
  {
    "id": "ch29_avatarbfi",
    "publisher": "British Film Institute",
    "title": "Avatar (3D) at BFI IMAX",
    "url": "https://whatson.bfi.org.uk/imax/Online/default.asp?BOparam%3A%3AWScontent%3A%3AloadArticle%3A%3Apermalink=avatar-3d-imax"
  },
  {
    "id": "ch29_baahubali",
    "publisher": "British Film Institute",
    "title": "100 great films streaming on Netflix and Amazon Prime: 2023",
    "url": "https://www.bfi.org.uk/lists/100-great-films-streaming-netflix-amazon-prime-2023-edition"
  },
  {
    "id": "ch29_beasts",
    "publisher": "Netflix",
    "title": "Beasts of No Nation: official film listing",
    "url": "https://www.netflix.com/title/80044545"
  },
  {
    "id": "ch29_bfireleases",
    "publisher": "British Film Institute",
    "title": "Film releases and distribution catalogue",
    "url": "https://www.bfi.org.uk/film-releases"
  },
  {
    "id": "ch29_blackheroes",
    "publisher": "British Film Institute",
    "title": "Before Black Panther: 10 black superheroes",
    "url": "https://www.bfi.org.uk/lists/10-black-screen-superheroes"
  },
  {
    "id": "ch29_catalog",
    "publisher": "European Audiovisual Observatory",
    "title": "Film and TV content in TVOD, SVOD and FOD catalogues: 2024 data",
    "url": "https://www.obs.coe.int/en/web/observatoire/industry/-/asset_publisher/MR4BXiHvzyiT/content/id/285692451"
  },
  {
    "id": "ch29_cinematic",
    "publisher": "BFI Sight and Sound",
    "title": "An A-Z of the 2010s in film",
    "url": "https://www.bfi.org.uk/sight-and-sound/z-2010s-film"
  },
  {
    "id": "ch29_comics",
    "publisher": "British Film Institute",
    "title": "10 great comic book films",
    "url": "https://www.bfi.org.uk/lists/10-great-comic-book-films"
  },
  {
    "id": "ch29_dune",
    "publisher": "BFI Sight and Sound",
    "title": "Dune review: a fresh take on a sci-fi classic",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/dune-succeeds-avoiding-excessive-fidelity-original-novel"
  },
  {
    "id": "ch29_eawindows",
    "publisher": "European Audiovisual Observatory",
    "title": "How Europe manages film release timing",
    "url": "https://www.obs.coe.int/en/web/observatoire/home/-/asset_publisher/9iKCxBYgiO6S/content/how-does-europe-manage-the-timing-of-film-releases-in-cinemas-on-dvd-vod-and-on-tv-"
  },
  {
    "id": "ch29_harry",
    "publisher": "British Film Institute",
    "title": "Harry Potter and the Sorcerer's Stone (2001)",
    "url": "https://www.bfi.org.uk/film/d18fa0be-c74c-5a88-92fe-179d3d69e268/harry-potter-and-the-sorcerers-stone"
  },
  {
    "id": "ch29_hungergames",
    "publisher": "British Film Institute",
    "title": "How to make a Hunger Games film",
    "url": "https://www.bfi.org.uk/interviews/how-make-hunger-games-film"
  },
  {
    "id": "ch29_imax",
    "publisher": "British Film Institute",
    "title": "25 memorable moments from 25 years of BFI IMAX",
    "url": "https://www.bfi.org.uk/lists/25-memorable-moments-from-25-years-bfi-imax"
  },
  {
    "id": "ch29_indianaction",
    "publisher": "British Film Institute",
    "title": "10 great Indian action films",
    "url": "https://www.bfi.org.uk/lists/10-great-indian-action-films"
  },
  {
    "id": "ch29_irishman",
    "publisher": "BFI Sight and Sound",
    "title": "The Irishman review: Scorsese says goodbye to the goodfellas",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/irishman-review-de-niro-scorsese-say-goodbye-goodfellas"
  },
  {
    "id": "ch29_irishmanrelease",
    "publisher": "British Film Institute",
    "title": "Five things to watch: The Irishman",
    "url": "https://www.bfi.org.uk/lists/5-things-watch-weekend-8-10-november"
  },
  {
    "id": "ch29_lotr",
    "publisher": "British Film Institute",
    "title": "The Lord of the Rings: Fellowship of the Ring (2001)",
    "url": "https://www.bfi.org.uk/film/52b45f51-7f3b-56e6-991d-eae1443c0e77/the-lord-of-the-rings-the-fellowship-of-the-ring"
  },
  {
    "id": "ch29_lotrfaith",
    "publisher": "BFI Sight and Sound",
    "title": "Trimming Tolkien: on adapting The Lord of the Rings",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/trimming-tolkien-faithfulness-peter-jacksons-lord-rings"
  },
  {
    "id": "ch29_manchester",
    "publisher": "University of Manchester",
    "title": "Endgame and the rise of Hollywood franchise movies",
    "url": "https://www.manchester.ac.uk/about/news/relentless-march-of-hollywood-franchise-movies/"
  },
  {
    "id": "ch29_mcu",
    "publisher": "British Film Institute",
    "title": "Where to begin with the Marvel Cinematic Universe",
    "url": "https://www.bfi.org.uk/features/where-begin-marvel-cinematic-universe"
  },
  {
    "id": "ch29_netflixhistory",
    "publisher": "Netflix",
    "title": "Made in Asia, watched by the world: 2019 company history",
    "url": "https://about.netflix.com/en/news/made-in-asia-watched-by-the-world"
  },
  {
    "id": "ch29_netflixletter",
    "publisher": "Netflix Investor Relations",
    "title": "Q3 2014 letter to shareholders",
    "url": "https://s22.q4cdn.com/959853165/files/doc_financials/quarterly_reports/2014/q3/Q3_14_Letter_to_shareholders.pdf"
  },
  {
    "id": "ch29_netflixsec",
    "publisher": "United States Securities and Exchange Commission",
    "title": "Netflix 2015 annual filing",
    "url": "https://www.sec.gov/Archives/edgar/data/1065280/000106528016000047/nflx201510k.htm"
  },
  {
    "id": "ch29_okja",
    "publisher": "BFI Sight and Sound",
    "title": "Okja review: Bong Joon-ho's superpig spectacle",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/okja-review-bong-joon-hos-rampant-superpig-spectacle-tickles-troubles"
  },
  {
    "id": "ch29_openuniversity",
    "publisher": "The Open University",
    "title": "The business of film: distribution windows",
    "url": "https://www.open.edu/openlearn/mod/oucontent/view.php?id=101323&section=_unit3.2.1"
  },
  {
    "id": "ch29_oxford",
    "publisher": "Oxford University Press",
    "title": "From Tentpoles to Universes: Hollywood's Evolving Franchise Strategy",
    "url": "https://academic.oup.com/edited-volume/60638/chapter-abstract/525069525"
  },
  {
    "id": "ch29_pandemic",
    "publisher": "UK Parliament",
    "title": "Written evidence on changing theatrical windows",
    "url": "https://committees.parliament.uk/writtenevidence/113474/pdf/"
  },
  {
    "id": "ch29_release",
    "publisher": "European Audiovisual Observatory",
    "title": "Release windows in Europe: A matter of time",
    "url": "https://rm.coe.int/iris-plus-2019-2-release-windows-in-europe-a-matter-of-time/1680986358"
  },
  {
    "id": "ch29_residuals",
    "publisher": "SAG-AFTRA",
    "title": "TV and theatrical residuals quick guide",
    "url": "https://www.sagaftra.org/sag-aftra-tv-and-theatrical-residuals-quick-guide"
  },
  {
    "id": "ch29_roma",
    "publisher": "BFI Sight and Sound",
    "title": "Film of the week: Roma",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-roma-reframes-alfonso-cuarons-boyhood-through-eyes-his-familys-maid"
  },
  {
    "id": "ch29_sag",
    "publisher": "SAG-AFTRA",
    "title": "2023 TV/Theatrical contracts",
    "url": "https://www.sagaftra.org/contracts-industry-resources/contracts/2023-tvtheatrical-contracts"
  },
  {
    "id": "ch29_sequels",
    "publisher": "British Film Institute",
    "title": "A history of Hollywood sequels in 10 influential films",
    "url": "https://www.bfi.org.uk/lists/history-hollywood-sequels-10-influential-films"
  },
  {
    "id": "ch29_trilogies",
    "publisher": "British Film Institute",
    "title": "10 great film trilogies",
    "url": "https://www.bfi.org.uk/lists/10-great-trilogies"
  },
  {
    "id": "ch29_usage",
    "publisher": "European Audiovisual Observatory",
    "title": "SVOD Usage in the European Union: 2024 data",
    "url": "https://www.obs.coe.int/en/web/observatoire/-/svod-usage-in-the-european-union?redirect=%2Fen%2Fweb%2Fobservatoire%2Fevents%3Fp_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_9SB6Bn7krrY0%26p_p_lifecycle%3D0%26p_p_state%3Dmaximized%26p_p_mode%3Dview%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_9SB6Bn7krrY0_cur%3D0%26p_r_p_resetCur%3Dfalse%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_9SB6Bn7krrY0_assetEntryId%3D287206285"
  },
  {
    "id": "ch29_vod",
    "publisher": "European Audiovisual Observatory",
    "title": "Video on demand in Europe",
    "url": "https://www.obs.coe.int/en/web/observatoire/industry/home-video-and-vod"
  },
  {
    "id": "ch29_wga",
    "publisher": "Writers Guild of America",
    "title": "Subscriber tiers by streaming platform",
    "url": "https://www.wga.org/contracts/contracts/mba/subscriber-tiers-by-streaming-platform"
  },
  {
    "id": "ch29_wipo",
    "publisher": "World Intellectual Property Organization",
    "title": "Global film production hits a record; box office trails",
    "url": "https://www.wipo.int/en/web/global-innovation-index/w/blogs/2026/lights-camera-records-global-film-production"
  }
];
export const filmHistoryChapterTwentyNineSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentyNineFranchisesSections,
  ...filmHistoryChapterTwentyNinePlatformsSections
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Harry Potter and the Philosopher's Stone",
    "year": 2001,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Iron Man",
    "year": 2008,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Avengers",
    "year": 2012,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Avengers: Endgame",
    "year": 2019,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Black Panther",
    "year": 2018,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Avatar",
    "year": 2009,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Hunger Games",
    "year": 2012,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Fast Five",
    "year": 2011,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Toy Story 2",
    "year": 1999,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Star Wars: The Force Awakens",
    "year": 2015,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Star Wars: The Last Jedi",
    "year": 2017,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Baahubali: The Beginning",
    "year": 2015,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Baahubali 2: The Conclusion",
    "year": 2017,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "RRR",
    "year": 2022,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Dune",
    "year": 2021,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Beasts of No Nation",
    "year": 2015,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Okja",
    "year": 2017,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Roma",
    "year": 2018,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Irishman",
    "year": 2019,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Parasite",
    "year": 2019,
    "note": "Film-history comparison of serial storytelling, release windows or streaming-era distribution; exact Atlas title matching required.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "Sequels, serials and preexisting film series",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film adaptation and licensing contracts",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Corporate intellectual property ownership and catalogue rights",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "International marketing and franchise brand management",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Cinematic universe crossovers and serial continuity",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film-merchandise licensing",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital 3D and large-format cinema exhibition",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Regional blockbuster distribution and language versions",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Theatrical release windows and exclusive rights",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "DVD-by-mail and transactional digital rentals",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Subscription streaming (SVOD) catalogues",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Transactional video on demand (TVOD)",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Films commissioned by versus licensed to streaming platforms",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Regional streaming rights and territory restrictions",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Streaming recommendation and audience measurement systems",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Pandemic-era cinema closures and day-and-date releases",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Screenwriter and performer residuals under negotiated contracts",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital film restoration and long-term archive holdings",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Cinema labour, local programming and repertory exhibition",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Streaming and cinema access barriers",
    "note": "Historical industry, technical, policy or access context; no playable Film Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterTwentyNineSources.map(s => s.id));
for (const essay of filmHistoryChapterTwentyNineSections) {
  if (essay.paragraphs.length !== 3 || essay.sourceIds.length < 2 || essay.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 29 source provenance failure: ${essay.id}`);
  }
}
if (new Set(filmHistoryChapterTwentyNineSections.flatMap(s => s.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 29 has unused source records");
}
export const filmHistoryChapterTwentyNine: FilmHistoryBookChapter = {
  id: "platform-era",
  number: 29,
  title: "Franchises, streaming and platform distribution",
  period: "2000s–present",
  summary: "Twenty-eight source-attributed essays examine sequels, adaptations, intellectual property, Marvel-style cinematic universes, blockbuster circulation beyond Hollywood, theatrical windows, streaming film finance, audience data, cinema access, preservation and labour. Editorial draft requiring independent source verification and a film-by-film Atlas audit.",
  status: "draft",
  learningObjectives: [
    "Distinguish sequels, series, adaptations and corporate franchises historically.",
    "Explain why intellectual property and distribution rights shape production without determining film style.",
    "Compare large multi-film production planning in The Lord of the Rings and Harry Potter.",
    "Analyse the balance of standalone stories and future crossovers in Iron Man and the MCU.",
    "Consider Black Panther as a culturally contested work inside a studio franchise.",
    "Connect Avatar to digital projection and 3D exhibition without treating it as the inventor of either.",
    "Analyse The Hunger Games as franchise entertainment about the making of spectacle.",
    "Trace how action franchises revise genres and performance traditions.",
    "Situate Baahubali and RRR in Indian regional industry and international circulation.",
    "Distinguish licensing, streaming commissions, platform exclusivity and theatrical distribution.",
    "Explain release windows through rights, territory, timing and contracts.",
    "Describe Netflix's transition from postal DVDs to streaming without collapsing different stages.",
    "Compare Okja, Roma and The Irishman as different platform-backed films with theatrical trajectories.",
    "Distinguish a streaming catalogue's size, actual availability and measured viewing.",
    "Analyse COVID-era day-and-date releases without treating 2020 as their invention.",
    "Explain residual labour payment debates and the 2023 Hollywood negotiations.",
    "Evaluate the ongoing roles of repertory cinemas, public archives and premium theatrical presentation.",
    "Recognise which contemporary industry claims require up-to-date and geographic qualification.",
    "Keep book references conservative pending Film Atlas scenario matching."
  ],
  keyTerms: ["franchise","sequel","seriality","intellectual property","adaptation rights",
    "cinematic universe","event film","brand","streaming","SVOD","TVOD","PVOD",
    "release window","day-and-date","exclusivity","distribution rights","film licensing",
    "platform original","catalogue","audience measurement","recommendation algorithm",
    "regional rights","digital exhibition","residuals","SAG-AFTRA","WGA","cinema access",
    "repertory film","film preservation","premium large format","Disney","Netflix"],
  sections: filmHistoryChapterTwentyNineSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentyNineSources
};
