import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const buffalo66VerificationRecords = [
  {
    scenarioId: "scenario_buffalo_66_1998",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Gallo-Bagnall screenplay, regional Buffalo production, Chris Hanley and Cinepix-Lions Gate context, twenty-three-day shoot, scripted ensemble, Lance Acord 35 mm reversal photography, precisely art-directed colour, Curtiss Clayton editing, musical-fantasy structure and long independent-cinema afterlife are supported by filmmaker testimony, institutional records and contemporary trade archives.",
    sources: [
      {
        title: "Buffalo '66",
        publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/60657-BUFFALO-%2766",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI confirms Vincent Gallo and Alison Bagnall's screenplay, Chris Hanley production, Lance Acord cinematography, Curtiss Clayton editing, Gideon Ponte design, principal cast and Lions Gate production context."
      },
      {
        title: "Behind the Mask: Cinematography in Buffalo 66",
        publisher: "BAFTA",
        url: "https://www.bafta.org/stories/behind-mask-cinematography-buffalo-66/",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "Robbie Ryan's BAFTA presentation identifies Acord's feature debut, the twenty-three-day shoot, discontinued 35 mm reversal stock, saturated colour, simple compositions, theatrical lighting changes and the frozen gunshot tableau."
      },
      {
        title: "Filmmaker Magazine — Winter 1998",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/archives/issues/winter1998/",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The contemporaneous issue archive preserves Scott Macaulay's production-period interview with Gallo, the source later cited for the film's reversal-stock decision and unusually concentrated authorial control."
      },
      {
        title: "Festival History — 1998 Actors Behind the Camera",
        publisher: "Sundance Institute",
        url: "https://www.sundance.org/festival-history/",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "Sundance's institutional history records Buffalo '66 in the 1998 actor-director wave and places Vincent Gallo and Christina Ricci within that year's American independent competition context."
      },
      {
        title: "Buffalo '66",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/c3468944-b577-5e6c-b767-6816562c8d1a/buffalo-66",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The BFI record confirms the Canada-USA production, Gallo direction, Gallo-Bagnall writing, Chris Hanley production and principal ensemble led by Christina Ricci and Ben Gazzara."
      },
      {
        title: "Buffalo 66",
        publisher: "ACMI",
        url: "https://www.acmi.net.au/works/92217--buffalo-66/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The Australian screen-culture collection confirms Gallo, Chris Hanley, Cinepix Film Properties, the colour-and-sound feature format and the fake-wife homecoming premise."
      },
      {
        title: "From the Vaults: Vincent Gallo on Buffalo and Buffalo 66",
        publisher: "The Public",
        url: "https://www.dailypublic.com/articles/03302015/vaults-vincent-gallo-buffalo-and-buffalo-66",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The restored 1998 interview documents the 1989 script origin, Super Bowl rewrite, local Buffalo shoot, financing, precise reversal-stock lighting and art direction, non-improvised performances, music, costume and Gallo's control of production and release materials."
      },
      {
        title: "Things you didn't know about Vincent Gallo's Buffalo '66",
        publisher: "i-D",
        url: "https://i-d.co/article/vincent-gallo-buffalo-66/",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "sound"],
        note: "The retrospective draws on Gallo's production testimony to explain the direct-positive reversal process, the need for exact exposure and colour planning, and the conception of the film as a subtle musical."
      },
      {
        title: "Trivial Top 20: Best films directed by actors",
        publisher: "Film Comment",
        url: "https://www.filmcomment.com/article/film-comments-trivial-top-20-best-films-directed-by-actors/",
        sourceKind: "archive_feature",
        supports: ["overall"],
        note: "Film Comment's critics place Buffalo '66 among the leading films directed by actors, documenting its continuing recognition as an unusually personal actor-auteur debut."
      },
      {
        title: "Buffalo '66",
        publisher: "MUBI",
        url: "https://mubi.com/en/do/films/buffalo-66",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "MUBI preserves the 110-minute American comedy-drama, fake-wife premise and later critical framing of its dreamy regional Americana, lonely outsiders and idiosyncratic visual-musical design."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
