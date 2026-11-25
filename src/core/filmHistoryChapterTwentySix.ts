import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentySixInstitutionsSections } from "./filmHistoryChapterTwentySixInstitutions.js";
import { filmHistoryChapterTwentySixFilmsSections } from "./filmHistoryChapterTwentySixFilms.js";
/** Canonical book chapter 26, 1989–2005. Source-attributed editorial draft.
 * Sources and historical interpretations still require independent editorial review.
 * Book-only P2 film references do not assert absence from Film Atlas.
 */
export const filmHistoryChapterTwentySixSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch26_africavoices",
    "title": "Ousmane Sembène on the state of African cinema (1995 interview)",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/interviews/bfb-archive-revisted-ousmane-sembene-state-african-cinema"
  },
  {
    "id": "ch26_amores",
    "title": "Amores perros (2000)",
    "publisher": "BFI Player",
    "url": "https://player.bfi.org.uk/subscription/film/watch-amores-perros-2000-online"
  },
  {
    "id": "ch26_beforerain",
    "title": "Before the Rain (1994)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/03bc6c5f-1159-5d3e-9d6a-80255a323b06/before-the-rain"
  },
  {
    "id": "ch26_brazil",
    "title": "Brazilian cinema in crisis",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/brazilian-cinema-crisis"
  },
  {
    "id": "ch26_central",
    "title": "10 great films of 1998: Central Station",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-films-1998"
  },
  {
    "id": "ch26_chinese",
    "title": "10 essential modern directors from mainland China, Hong Kong and Taiwan",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-best-modern-directors-mainland-china-hong-kong-taiwan"
  },
  {
    "id": "ch26_closeup",
    "title": "Close-up (1990)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/1092-close-up"
  },
  {
    "id": "ch26_dash",
    "title": "Daughters of the Dust (1991)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/21bc3d80-a4fa-59dd-a64c-bc349a1d5aec/daughters-of-the-dust"
  },
  {
    "id": "ch26_dashvoice",
    "title": "Julie Dash and Jenn Nkiru in conversation",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/magic-play-julie-dash-jenn-nkiru-conversation"
  },
  {
    "id": "ch26_denis",
    "title": "Claire Denis on Beau Travail",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/interviews/claire-denis-beau-travail-michel-subor-denis-lavant-gregoire-colin-french-foreign-legion-djibouti"
  },
  {
    "id": "ch26_denisreading",
    "title": "Blood and sand: Beau Travail and its reception",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/beau-travail-1998-claire-denis-greatest-films-poll"
  },
  {
    "id": "ch26_dogfilms",
    "title": "10 great dog films: Amores perros",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-dog-films"
  },
  {
    "id": "ch26_dogme_manifesto",
    "title": "DOGME 95: manifesto and Vow of Chastity, 13 March 1995",
    "publisher": "DOGME 95",
    "url": "https://dogme95.com/"
  },
  {
    "id": "ch26_dogme",
    "title": "The Cruise at 20: DV and Dogme 95",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/cruise-20-looking-back-movie-that-broke-dv-revolution"
  },
  {
    "id": "ch26_earlydigital",
    "title": "10 great early digital films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-early-digital-films"
  },
  {
    "id": "ch26_eurimages",
    "title": "About Eurimages",
    "publisher": "Council of Europe",
    "url": "https://www.coe.int/en/web/eurimages/about"
  },
  {
    "id": "ch26_festen_cannes",
    "title": "Festen (1998): official competition record and shared Jury Prize",
    "publisher": "Festival de Cannes",
    "url": "https://www.festival-cannes.com/en/f/festen/"
  },
  {
    "id": "ch26_festen",
    "title": "10 great awkward family gathering films: Festen",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-films-about-awkward-family-gatherings"
  },
  {
    "id": "ch26_fire",
    "title": "10 great Indian LGBTQIA+ films: Fire",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-indian-lgbtqia-films"
  },
  {
    "id": "ch26_frenchreal",
    "title": "After Pialat: young realists of 1990s French cinema",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/after-pialat-young-realists-1990s-french-cinema"
  },
  {
    "id": "ch26_hongkongfilms",
    "title": "10 great films set in Hong Kong",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-films-set-hong-kong"
  },
  {
    "id": "ch26_hyenas",
    "title": "Hyenas (1992)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/1ee22727-6ed5-5e88-a8ca-79ac50c902ce/hyenes"
  },
  {
    "id": "ch26_iranian",
    "title": "10 great Iranian family dramas",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-iranian-family-dramas"
  },
  {
    "id": "ch26_kieslowski",
    "title": "Where to begin with Krzysztof Kieślowski",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-krzysztof-kieslowski"
  },
  {
    "id": "ch26_lahaine",
    "title": "Project surrealism: urban spaces of La Haine",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/la-haine-project-surrealism"
  },
  {
    "id": "ch26_media",
    "title": "Audiovisual and the history of the MEDIA programme",
    "publisher": "European Commission",
    "url": "https://culture.ec.europa.eu/cultural-and-creative-sectors/audiovisual"
  },
  {
    "id": "ch26_mediafacts",
    "title": "National audiovisual industries and MEDIA impact",
    "publisher": "European Commission",
    "url": "https://digital-strategy.ec.europa.eu/en/library/country-specific-factsheets-national-audiovisual-industries-europe"
  },
  {
    "id": "ch26_monsoon",
    "title": "Monsoon Wedding (2001)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/eca8b1b9-fc89-521c-8d8a-a46ef49095ed/monsoon-wedding"
  },
  {
    "id": "ch26_nair",
    "title": "Mira Nair: discussion of Monsoon Wedding",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/despatches-from-mumbai-film-festival-2023"
  },
  {
    "id": "ch26_newqueer",
    "title": "Where to begin with New Queer Cinema",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-new-queer-cinema"
  },
  {
    "id": "ch26_nineties",
    "title": "90 great films of the 1990s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/90-great-films-1990s"
  },
  {
    "id": "ch26_panahi",
    "title": "Where to begin with Jafar Panahi",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-jafar-panahi"
  },
  {
    "id": "ch26_piano",
    "title": "The Piano (1993)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/30424-the-piano"
  },
  {
    "id": "ch26_rich",
    "title": "New Queer Cinema: B. Ruby Rich",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/new-queer-cinema"
  },
  {
    "id": "ch26_salles",
    "title": "Central Station: a contemporary conversation with Walter Salles",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/interviews/central-station-heartbreak-miracles"
  },
  {
    "id": "ch26_sissako",
    "title": "Abderrahmane Sissako for beginners",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/abderrahmane-sissako-beginners"
  },
  {
    "id": "ch26_taipei",
    "title": "10 great films set in Taipei",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-films-set-taipei"
  },
  {
    "id": "ch26_tarkovsky",
    "title": "The Tarkovsky legacy: Three Colours",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/tarkovsky-legacy"
  },
  {
    "id": "ch26_taste",
    "title": "Taste of Cherry: film essay",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/55"
  },
  {
    "id": "ch26_threecolours",
    "title": "Ten great break-up films: Three Colours White",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-break-up-films"
  },
  {
    "id": "ch26_varda",
    "title": "Agnès Varda on The Gleaners and I",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/interviews/refuseniks-agnes-varda-gleaners-i"
  },
  {
    "id": "ch26_vardatech",
    "title": "Where to begin with Agnès Varda",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-agnes-varda"
  },
  {
    "id": "ch26_watermelon",
    "title": "The Watermelon Woman at 25",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/watermelon-woman-cheryl-dunye"
  },
  {
    "id": "ch26_weddingbanquet",
    "title": "The Wedding Banquet: 1993 original in review",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/wedding-banquet-satisfying-reimagining-1993-classic"
  }
];
export const filmHistoryChapterTwentySixSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentySixInstitutionsSections,
  ...filmHistoryChapterTwentySixFilmsSections,
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "Three Colours: Blue",
    "year": 1993,
    "note": "Kieślowski's European trilogy and post-socialist transition",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Three Colours: White",
    "year": 1994,
    "note": "Kieślowski's European trilogy and post-socialist transition",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Three Colours: Red",
    "year": 1994,
    "note": "Kieślowski's European trilogy and post-socialist transition",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Before the Rain",
    "year": 1994,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Festen (The Celebration)",
    "year": 1998,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "La Haine",
    "year": 1995,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Poison",
    "year": 1991,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Daughters of the Dust",
    "year": 1991,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Watermelon Woman",
    "year": 1996,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Piano",
    "year": 1993,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Beau Travail",
    "year": 1999,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Close-up",
    "year": 1990,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Taste of Cherry",
    "year": 1997,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The White Balloon",
    "year": 1995,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Circle",
    "year": 2000,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Hyenas",
    "year": 1992,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Waiting for Happiness",
    "year": 2002,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Central Station",
    "year": 1998,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Amores perros",
    "year": 2000,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Chungking Express",
    "year": 1994,
    "note": "Circulation, diaspora and regional production identities",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "In the Mood for Love",
    "year": 2000,
    "note": "Circulation, diaspora and regional production identities",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Millennium Mambo",
    "year": 2001,
    "note": "Circulation, diaspora and regional production identities",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Wedding Banquet",
    "year": 1993,
    "note": "Circulation, diaspora and regional production identities",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Monsoon Wedding",
    "year": 2001,
    "note": "Circulation, diaspora and regional production identities",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Fire",
    "year": 1996,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Gleaners and I",
    "year": 2000,
    "note": "Book-level film comparison: production, film form and cross-border circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "Council of Europe's Eurimages film co-production fund, operating from 1989",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "European Community MEDIA programme from 1991",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Cross-border production treaties, coproducer contracts and ownership rights",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film subtitling, dubbing, sales agents and festival distribution agreements",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Changes to cinema production infrastructure after the collapse of communist governments",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Regional film funds, broadcaster partnerships and private investment",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Former Yugoslav wars and the limits of film as historical testimony",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Dogme 95 manifesto and production certification",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "French banlieue public housing and policing as historical social context",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "1990s independent queer film, activism and festival networks",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Fictional and real archives in historical reconstruction",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "European and Pacific colonial histories represented in fiction",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Iranian film production institutions and domestic censorship",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "West African cinema financing, film stock and exhibition infrastructures",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Brazilian film sector's early-1990s disruption and retomada",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Mexico City audiovisual markets and international distribution",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Hong Kong's 1997 sovereignty handover and regional distribution networks",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Taiwanese cinema, languages and transnational markets",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "South Asian diaspora exhibition and Indian multi-language film industries",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital video portability and documentary access at the turn of the millennium",
    "note": "Historical context, institution, technology or policy; no playable Film Atlas Production Case asserted.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterTwentySixSources.map(s => s.id));
for (const essay of filmHistoryChapterTwentySixSections) {
  if (essay.paragraphs.length !== 3 || essay.sourceIds.length < 2 || essay.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 26 source provenance failure: ${essay.id}`);
  }
}
if (new Set(filmHistoryChapterTwentySixSections.flatMap(s => s.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 26 source list contains unused records");
}
export const filmHistoryChapterTwentySix: FilmHistoryBookChapter = {
  id: "post-cold-war",
  number: 26,
  title: "Post-Cold War transnational cinema",
  period: "1989–2005",
  summary: "Twenty-two sourced essays examine co-production and distribution institutions, post-socialist transitions, queer and diasporic cinemas, European and Pacific colonial histories, Iranian filmmaking, West African production, Brazilian and Mexican industry, Hong Kong, Taiwan and India. Distinguishes films about movement from legal co-productions and global circulation; editorial draft pending independent fact checks and film-specific Atlas audit.",
  status: "draft",
  learningObjectives: [
    "Define transnational cinema through production, circulation and represented migration rather than a single undifferentiated category.",
    "Distinguish the Council of Europe's Eurimages fund from the EU MEDIA programme and their original periods of operation.",
    "Compare the post-1989 transformations of formerly socialist film industries without treating them as one story.",
    "Analyze Kieślowski's Three Colours as both distinct forms and internationally produced films.",
    "Explain Dogme 95's declared rules separately from actual production methods and technological change.",
    "Read La Haine and Before the Rain without generalizing fictional characters into a nation's entire history.",
    "Distinguish New Queer Cinema's festival label from older queer filmmaking traditions.",
    "Analyze Daughters of the Dust and The Watermelon Woman as different projects of diasporic memory and constructed archives.",
    "Compare The Piano and Beau Travail in relation to different histories of colonial representation.",
    "Describe formal distinctions among Kiarostami's Close-up, Taste of Cherry and Panahi's The White Balloon.",
    "Connect Senegalese and Mauritanian filmmaking with uneven production and distribution structures.",
    "Explain Brazil's retomada through production infrastructure as well as Central Station's reception.",
    "Compare Mexico City, Hong Kong and Taipei films without conflating regional film industries.",
    "Consider diaspora and family in The Wedding Banquet, Monsoon Wedding and Fire.",
    "Explain how digital video changed documentary practices while leaving key questions for chapter 27.",
    "Audit playable Film Atlas cases by exact title rather than inventing scenario IDs."
  ],
  keyTerms: ["transnational cinema","co-production","Eurimages","MEDIA programme","regional funding","film sales agent","subtitling","post-socialist cinema","Three Colours","diaspora","migration","Dogme 95","French banlieue","New Queer Cinema","archival fiction","settler colonialism","Iranian cinema","Kiarostami","Panahi","West African cinema","retomada","Brazilian cinema","Mexico City","Hong Kong cinema","Taiwanese cinema","Indian diaspora","digital video","festival circuit","distribution rights"],
  sections: filmHistoryChapterTwentySixSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentySixSources,
};
