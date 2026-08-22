import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theLivingEndProductionCaseVerification = {
  scenarioId: "scenario_the_living_end_1992",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "The Living End is verified as a 1992 American New Queer Cinema microbudget feature written and directed by Gregg Araki and produced through a tiny independent network around Marcus Hu, Jon Gerrans, Strand Releasing and Desperate Pictures. AFI records principal photography from fall 1990 through January 1991, sporadic weekend shooting in and around Los Angeles to accommodate performers' jobs, Araki directing and operating camera, a minimal crew, an AFI grant used for editing, completion in November 1991, and original 16mm photography enlarged to 35mm for theatrical release. AFI cites a $23,000 final budget from contemporary trade reporting, while UCLA and Araki's own interviews describe the film as approximately $20,000; those figures remain separately attributed source-framed evidence rather than one audited ledger. UCLA identifies Araki as screenwriter, cinematographer and editor. BFI credits Marcus Hu and Jon Gerrans as producers, while detailed BFI programme material identifies Strand Releasing/Desperate Pictures, executive/co-/associate producers, Christopher Münch for lighting, George Lockwood for sound design, Dave Cash/Joyce Brouwers/Jack Kofman for sound recording and Cole Coonce for original music. In a 1992 BOMB interview Araki described a three-to-four-month but non-full-time shoot and only a couple of roughly fifteen-hour days. In a later first-person interview he described Jon Jost lending a 16mm camera and old stock, the film as his first color and first sync-sound feature, and the production as tiny, unpaid and permit-light, with police/security interruptions and camera failures. These anecdotes are retained as historical production evidence only. Present-day location work requires applicable permissions, agreements, insurance and public-safety controls; work hours require lawful turnaround/fatigue management; equipment requires maintenance and contingency planning; sensitive sexual/violent/HIV-related scenes require explicit performer consent and appropriate intimacy/safeguarding practice. No exact camera model, lens package, stock identity, exposure, lighting ratios, lab chemistry, sync-sound hardware, ADR/Foley chain, full crew roster or daily schedule is inferred beyond the reviewed sources. Sundance, New Directors/New Films and later remixed/remastered presentations remain downstream reception/version history.",
  sources: [
    {
      title: "The Living End (1992)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/59308-THE-LIVING-END",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Primary institutional production record for fall 1990-Jan 1991 weekend shooting around Los Angeles, minimal crew/Araki camera operation, $23,000 reported final budget, AFI editing grant, 16mm capture and 35mm theatrical enlargement."
    },
    {
      title: "The Living End: Remixed and Remastered",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/the-living-end-remixed-and-remastered-1992-03-25-12/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Archive record for 1992, 84 minutes and Gregg Araki as screenwriter, cinematographer and editor. The remixed/remastered presentation is downstream and is not used as evidence for original production technique."
    },
    {
      title: "Pioneers of Queer Cinema: The Living End",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/oblivion-if-every-girl-had-a-diary-the-living-end-02-26-22/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "UCLA contextual record giving an approximately $20,000 budget and 84-minute duration, retained alongside AFI's $23,000 trade-derived figure."
    },
    {
      title: "The Living End (1992)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/6b72a691-385d-5203-aec0-fdceb5d9b70d/the-living-end",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record for Gregg Araki direction/writing, Marcus Hu and Jon Gerrans production, United States and 84 minutes."
    },
    {
      title: "The Living End programme notes",
      publisher: "BFI Southbank",
      url: "https://bfidatadigipres.github.io/be%20gay%20do%20crime%3Cbr%3E%20a%20season%20of%20queer%20crime%20films/2023/08/22/living-end/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Detailed credits for Strand Releasing/Desperate Pictures, producing roles, Araki writing/photography/editing, Christopher Münch lighting, George Lockwood sound design, named production sound recordists and Cole Coonce music."
    },
    {
      title: "Gregg Araki",
      publisher: "BOMB Magazine",
      url: "https://bombmagazine.org/articles/1992/10/01/gregg-araki/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Contemporary first-person Araki interview describing a roughly $20,000 production, three-to-four-month non-full-time shooting period and only a couple of approximately fifteen-hour days."
    },
    {
      title: "Gregg Araki on The Living End",
      publisher: "i-D",
      url: "https://i-d.co/article/gregg-araki-living-end-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Later first-person testimony for the tiny unpaid crew, Marcus Hu/Jon Gerrans collaboration, Jon Jost's loaned 16mm camera and old stock, first-color/first-sync-sound context, permit-light guerrilla practice and equipment failures. These are history only, not current legal/safety guidance."
    },
    {
      title: "New Queer Cinema, Rising",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/blog/new-queer-cinema-rising",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Historical context for New Queer Cinema and festival/independent circulation; not used to infer film-specific technical details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
