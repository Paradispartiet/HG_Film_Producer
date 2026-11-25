import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentySevenSystemsSections } from "./filmHistoryChapterTwentySevenSystems.js";
import { filmHistoryChapterTwentySevenFilmsSections } from "./filmHistoryChapterTwentySevenFilms.js";
/** Canonical BOOK chapter 27, c.1990s–2010s, source-attributed editorial draft.
 * URLs and historical interpretations need independent editorial checking.
 * Book-only P2 references must not be interpreted as verified missing Atlas cases.
 */
export const filmHistoryChapterTwentySevenSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch27_28review",
    "title": "28 Days Later: reviewed in 2002",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/piece-punk-rock-movie-making-28-days-later-reviewed-2002"
  },
  {
    "id": "ch27_academyeffects",
    "title": "The Art and Science of Visual Effects: Academy activities guide",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/sites/oscars/files/complete_visual_effects_activities_guide.pdf"
  },
  {
    "id": "ch27_animation",
    "title": "Leading Digital Animators Make for Colorful Academy Event",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/events/leading-digital-animators-make-colorful-academy-event"
  },
  {
    "id": "ch27_archiveproject",
    "title": "Digital Motion Picture Archive Framework Project",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/science-technology/sci-tech-projects/digital-motion-picture-archive-project"
  },
  {
    "id": "ch27_archiving",
    "title": "Long-Term Management and Storage of Digital Motion Picture Materials",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/science-technology/sci-tech-projects/long-term-management-and-storage-digital-motion-picture"
  },
  {
    "id": "ch27_archiving2",
    "title": "The Digital Dilemma 2",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/science-technology/sci-tech-projects/digital-dilemma-2"
  },
  {
    "id": "ch27_asccamera",
    "title": "ASC Technology Committee Progress Report 2011",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/report/smpte-progress-report-2011/"
  },
  {
    "id": "ch27_ascsurvey",
    "title": "A New Millennium of Screen Artistry",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/article/a-new-millennium-of-screen-artistry/"
  },
  {
    "id": "ch27_atar",
    "title": "10 great Canadian debut features: Atanarjuat",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-canadian-debut-features"
  },
  {
    "id": "ch27_atar_nfb",
    "title": "Atanarjuat: The Fast Runner (2001) — Canadian Film Encyclopedia",
    "publisher": "Toronto International Film Festival (TIFF)",
    "url": "https://cfe.tiff.net/content/films/atanarjuat"
  },
  {
    "id": "ch27_british2002",
    "title": "10 great British films of 2002",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-british-films-2002"
  },
  {
    "id": "ch27_cameron",
    "title": "Where to begin with James Cameron",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-james-cameron"
  },
  {
    "id": "ch27_collateral",
    "title": "Collateral (2004)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/9f42613e-2e14-5902-aba5-3bce73f1d4c2/collateral"
  },
  {
    "id": "ch27_costa",
    "title": "Where to begin with Pedro Costa",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-pedro-costa"
  },
  {
    "id": "ch27_costasight",
    "title": "Serenity: Pedro Costa's Fontainhas trilogy",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/serenity-pedro-costas-fontainhas-trilogy"
  },
  {
    "id": "ch27_deakinsasc",
    "title": "Inside the cinematography of O Brother, Where Art Thou?",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/article/o-brother-cinematography-deakins/"
  },
  {
    "id": "ch27_deakinsbfi",
    "title": "Remain in light: Roger Deakins in ten shots",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/remain-light-roger-deakins-ten-shots"
  },
  {
    "id": "ch27_dogme",
    "title": "Where to begin with Dogme 95",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-dogme-95"
  },
  {
    "id": "ch27_early",
    "title": "Attack of the zeros and ones: early years of digital cinema",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more"
  },
  {
    "id": "ch27_earlyfilms",
    "title": "10 great early digital films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-early-digital-films"
  },
  {
    "id": "ch27_gollumbfi",
    "title": "The Lord of the Rings: The Two Towers (2002)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/83919a25-6bb5-5866-bef4-3249172e8b9a/the-lord-of-the-rings-the-two-towers"
  },
  {
    "id": "ch27_indieanimation",
    "title": "A brief history of indie directors working in animation",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/wes-anderson-david-lynch-indie-animation"
  },
  {
    "id": "ch27_jia",
    "title": "Where to begin with Jia Zhangke",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-jia-zhangke"
  },
  {
    "id": "ch27_jurassic",
    "title": "Jurassic Park: Academy event and production history",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/events/jurassic-park"
  },
  {
    "id": "ch27_linklater",
    "title": "Where to begin with Richard Linklater",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-richard-linklater"
  },
  {
    "id": "ch27_longtakes",
    "title": "16 incredible long takes",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/16-incredible-long-takes"
  },
  {
    "id": "ch27_mann",
    "title": "Where to begin with Michael Mann",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-michael-mann"
  },
  {
    "id": "ch27_matrix",
    "title": "The Matrix: how the Wachowskis changed sci-fi",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/matrix-wachowskis-keanu-reeves"
  },
  {
    "id": "ch27_modernchina",
    "title": "10 essential modern directors from mainland China, Hong Kong and Taiwan",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-best-modern-directors-mainland-china-hong-kong-taiwan"
  },
  {
    "id": "ch27_pixar",
    "title": "Where to begin with Pixar",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-pixar"
  },
  {
    "id": "ch27_premiere",
    "title": "Celebrating 25 Years of Premiere Pro",
    "publisher": "Adobe",
    "url": "https://blog.adobe.com/en/publish/2017/03/14/celebrating-25-years-of-premiere-pro"
  },
  {
    "id": "ch27_singletake",
    "title": "Hot takes: a short history of the one-shot movie",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/single-take-films"
  },
  {
    "id": "ch27_spielberg",
    "title": "Where to begin with Steven Spielberg",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-steven-spielberg"
  },
  {
    "id": "ch27_starwars",
    "title": "Star Wars: Episode II – Attack of the Clones: contemporary review",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/star-wars-episode-ii-attack-clones-archive-review-its-hard-be-jedi-love"
  },
  {
    "id": "ch27_toyacademy",
    "title": "Toy Story: Academy collection highlight",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/collection-highlights/toy-story"
  },
  {
    "id": "ch27_vertov",
    "title": "5 wonderful effects in Man with a Movie Camera",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/5-wonderful-effects-man-with-movie-camera-how-theyre-still-inspiring-filmmakers-today"
  },
  {
    "id": "ch27_waking",
    "title": "Waking Life (2001)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/2c5f5eea-19cd-5e55-891c-ce8680edfee2/waking-life"
  },
  {
    "id": "ch27_wang",
    "title": "This was China: Wang Bing's West of the Tracks",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/this-was-china-wang-bings-west-tracks"
  },
  {
    "id": "ch27_wangcatalog",
    "title": "West of the Tracks (2002): film record",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/32dceea7-1d44-5ca6-ac0c-c596fd635b0b/west-of-the-tracks"
  },
  {
    "id": "ch27_wangstudy",
    "title": "History in the Making: the debut epic Tiexi qu: West of the Tracks",
    "publisher": "Amsterdam University Press",
    "url": "https://www.cambridge.org/core/books/abs/wang-bings-filmmaking-of-the-china-dream/history-in-the-making-the-debut-epic-tiexi-qu-west-of-the-tracks/22AD8B3DC4ACF6B5AC7A9E06B63C0A6C"
  }
];
export const filmHistoryChapterTwentySevenSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentySevenSystemsSections,
  ...filmHistoryChapterTwentySevenFilmsSections,
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "The Abyss",
    "year": 1989,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Terminator 2: Judgment Day",
    "year": 1991,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Jurassic Park",
    "year": 1993,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Toy Story",
    "year": 1995,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Matrix",
    "year": 1999,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "O Brother, Where Art Thou?",
    "year": 2000,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Star Wars: Episode II – Attack of the Clones",
    "year": 2002,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "note": "Digital image construction, postproduction or performance effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Festen",
    "year": 1998,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Idiots",
    "year": 1998,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "28 Days Later",
    "year": 2002,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Collateral",
    "year": 2004,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Russian Ark",
    "year": 2002,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Timecode",
    "year": 2000,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "In Vanda's Room",
    "year": 2000,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Unknown Pleasures",
    "year": 2002,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "West of the Tracks",
    "year": 2002,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Atanarjuat: The Fast Runner",
    "year": 2001,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Waking Life",
    "year": 2001,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Scanner Darkly",
    "year": 2006,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Gleaners and I",
    "year": 2000,
    "note": "Digital acquisition, duration, distribution or experimental form",
    "role": "comparative_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "Nonlinear editing systems, offline workflows and final conform",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital intermediate scanning, grading and output",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "CG modelling, animation, shading, rendering and compositing",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Motion-control photography and hybrid practical-digital effects",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Motion capture and the division of acting and animation labour",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital video tape and early high-definition acquisition",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Panavision, Sony and competing digital camera workflows",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital colour space, monitoring and look management",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Dogme 95 manifesto as a film-making institution",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Portable digital documentary capture and extended observation",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film lab workflows and film-originated digital mastering",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital exhibition and projection technologies",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Digital cinema distribution masters and archival dependencies",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Metadata, checksum verification and digital storage migration",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Image provenance and differences between original and restored versions",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Independent film archives and funding for digital preservation",
    "note": "Historical technology, policy, archival or production institution; not a film or playable Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterTwentySevenSources.map(s => s.id));
for (const essay of filmHistoryChapterTwentySevenSections) {
  if (essay.paragraphs.length !== 3 || essay.sourceIds.length < 2 || essay.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 27 source provenance failure: ${essay.id}`);
  }
}
if (new Set(filmHistoryChapterTwentySevenSections.flatMap(s => s.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 27 source list contains unused records");
}
export const filmHistoryChapterTwentySeven: FilmHistoryBookChapter = {
  id: "digital-production",
  number: 27,
  title: "Digital production and the transformed image",
  period: "1990s–2010s",
  summary: "Twenty-three source-attributed essays trace non-linear editing, CGI, digital intermediates, motion capture, HD cameras, low-budget digital video, animation, projection and archival preservation. Film studies range from Jurassic Park and Toy Story to Russian Ark, Pedro Costa, Jia Zhangke, Wang Bing and Inuit-language Atanarjuat. This is an editorial draft pending independent source and film-by-film Atlas verification.",
  status: "draft",
  learningObjectives: [
    "Distinguish digital acquisition, offline editing, visual effects, grading, exhibition and archival preservation.",
    "Explain how nonlinear editing changed version management and creative revision without automating storytelling.",
    "Describe CGI as modelling, animation, compositing and preplanned live-action collaboration.",
    "Compare practical and digital effects in Terminator 2 and Jurassic Park.",
    "Explain why Toy Story's 1995 achievement did not replace earlier animation traditions.",
    "Analyze the dramatic rather than purely decorative use of bullet time in The Matrix.",
    "Explain digital intermediate through the colour workflow of O Brother, Where Art Thou?.",
    "Situate Attack of the Clones within early HD cinematography and uneven theatre digitization.",
    "Distinguish recorded motion data from the animated interpretation of Gollum.",
    "Evaluate Dogme 95's manifesto against practical uses of inexpensive camcorders.",
    "Compare digital night photography in Collateral with the video textures of 28 Days Later.",
    "Analyze how longer recording supports Russian Ark, Timecode and documentary observation.",
    "Connect camera portability with production relationships in In Vanda's Room.",
    "Read Jia Zhangke and Wang Bing in the political and industrial context of changing China.",
    "Recognize Atanarjuat's Inuktitut production as a central, not peripheral, digital milestone.",
    "Explain rotoscoping and the artists' labour in Waking Life.",
    "Distinguish digital projection from capture and computerized post-production.",
    "Explain why digital preservation requires metadata, migration and institutional investment.",
    "Avoid inventing playable Film Atlas IDs from non-film technology milestones."
  ],
  keyTerms: ["digital cinematography","nonlinear editing","offline editing","digital intermediate","colour grading","CGI","compositing","rendering","motion capture","hybrid visual effects","animatronics","HD camera","digital video","Dogme 95","bullet time","Toy Story","Jurassic Park","Russian Ark","Atanarjuat","In Vanda's Room","digital projection","Digital Cinema Package","digital master","archival migration","film restoration","checksums","metadata","visual effects labour","animation","rotoscoping"],
  sections: filmHistoryChapterTwentySevenSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentySevenSources,
};
