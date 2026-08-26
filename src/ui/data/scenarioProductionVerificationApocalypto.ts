import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const apocalyptoProductionCaseVerification = {
  scenarioId: "scenario_apocalypto_2006",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Apocalypto is verified as a 2006 US Production Case anchored by a 138-minute institutional record, Yucatec Maya dialogue, Dean Semler's early Panavision Genesis digital cinematography, Tom Sanders' practical production design, John Wright's editing and a practical/miniature/compositing city workflow. BFI and AFI preserve the principal credits and runtime. ASC historical documentation identifies the film as primarily photographed with the Panavision Genesis and as the first digitally photographed feature nominated for an ASC Award. Semler's title-specific accounts and Los Angeles Times production reporting support the extreme heat/humidity field use, low-light and firelight capability, selected shutter/gain changes, three Genesis cameras, 50-minute HDCAM recording and EFilm ColorStream monitoring. The same production reporting documents greens crews preparing and restoring short jungle runways for barefoot performers and moving cameras. VFX supervisor Ted Rae documents the deliberate practical-first city strategy, Sanders' roughly 60-by-80-foot city miniature, selected live-action crowd replication and a roughly 650-extra multi-pass setup, with miniature, matte and compositing work extending rather than replacing the physical city. Production-design and costume reporting supports storm/flood damage, the village-set rebuild and specialist Mexican artisans. Consultant and archaeological-research evidence is retained only as production-process provenance; it is not treated as proof that the film's dramatized Maya chronology, ritual or social representation is historically accurate. Exact per-shot lenses, EI/ISO, filters, shutter/gain settings, codecs, sensor parameters, total VFX shot count, digital-double use and final mastering details remain outside the high-confidence boundary unless title-specific evidence establishes them.",
  sources: [
    {
      title: "Apocalypto (2006)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/ad7b0aef-86b2-5a0f-82ea-96f49806ee99/apocalypto",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional record supporting 2006, USA, 138 minutes, Mel Gibson, Farhad Safinia and the principal producer/cast context."
    },
    {
      title: "Apocalypto (2006)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/63702-APOCALYPTO",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional production record supporting the 138-minute runtime, Yucatec Maya language, Gibson/Safinia, Dean Semler, Tom Sanders, John Wright, James Horner and Icon Distribution."
    },
    {
      title: "ASC History Timeline",
      publisher: "American Society of Cinematographers",
      url: "https://cdn.theasc.com/ASC-History-Timeline.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "ASC historical record stating that Apocalypto was primarily photographed by Dean Semler with the Panavision Genesis and became the first digital-shot feature nominated for an ASC Award."
    },
    {
      title: "Dean Semler AM ACS ASC",
      publisher: "Australian Cinematographer Magazine",
      url: "https://acmag.com.au/2017/03/01/dean-semler/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Semler retrospective supporting extended Genesis use in Mexico and successful operation in extreme heat and humidity."
    },
    {
      title: "Waiting for the end to come on 'Apocalypto'",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2006-dec-03-ca-apocalypto3-story.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Title-specific production reporting supporting three Genesis cameras, 50-minute HDCAM tapes, EFilm ColorStream monitoring and the greens-crew runway/reset workflow in the jungle."
    },
    {
      title: "Ted Rae on 'Apocalypto'",
      publisher: "Animation World Network / VFXWorld",
      url: "https://www.awn.com/vfxworld/ted-rae-apocalypto",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct VFX-supervisor account supporting practical-first city design, the roughly 60-by-80-foot miniature, camera-data matching, selected live-action crowd replication, roughly 650 extras in a multi-pass setup and the roto-versus-greenscreen decision."
    },
    {
      title: "History fires the imagination",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2006-dec-07-wk-movies7-story.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Production-design and costume reporting supporting hurricanes/flooding, the fallen-tree village-set adaptation and Mayes C. Rubeo's Mexican artisan network and material substitutions."
    },
    {
      title: "2007 Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2007",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional reception record confirming nominations for makeup, sound editing and sound mixing; used only as downstream reception/credit evidence, not as proof of production method."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
