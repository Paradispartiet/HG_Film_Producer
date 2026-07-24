import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const trueRomanceVerificationRecords = [
  {
    scenarioId: "scenario_true_romance_1993",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's postmodern lovers-on-the-run screenplay, Morgan Creek studio production, Detroit-to-Los Angeles route, ensemble performance system, Panavision colour photography, two-editor version history, Dolby presentation, Hans Zimmer music and later two-cut restoration are supported by institutional, archival and filmmaker sources.",
    sources: [
      {
        title: "True Romance",
        publisher: "AFI Catalog of Feature Films",
        url: "https://catalog.afi.com/Film/67013-TRUE-ROMANCE",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI documents the Morgan Creek production, September 1992 start in Los Angeles and Detroit, principal craft credits, Eastman colour, THX and Dolby sound, Warner's NC-17 concern and the violence edits used to secure an R rating."
      },
      {
        title: "True Romance (1993)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/cdad9778-4b95-5115-a724-fdc900cabef2/true-romance",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The BFI film record confirms Tony Scott, Quentin Tarantino, the three principal producers and the central cast for the 1993 United States production."
      },
      {
        title: "True Romance: how Tarantino makes every character count",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/true-romance-how-tarantino-makes-every-character-count",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "BFI analyses the lovers-on-the-run structure, Godard reference, dialogue-led supporting roles, ensemble casting and the way concentrated character scenes distinguish the film from a generic crime chase."
      },
      {
        title: "10 great lovers-on-the-run films",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/10-great-lovers-run-films",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "BFI places the film in the outlaw-romance tradition and identifies its Badlands voice-over inheritance, candy-bright colour, lurid violence, Alabama's conspicuous wardrobe and unusually happy ending."
      },
      {
        title: "True Romance",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/true-romance",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "DFI confirms Morgan Creek, Jeffrey L. Kimball's photography, Michael Tronick and Christian Wagner's editing, Benjamin Fernandez's production design, Hans Zimmer's music, Panavision capture and Dolby presentation."
      },
      {
        title: "True Romance 4K Ultra HD",
        publisher: "Arrow Films",
        url: "https://www.arrowfilms.com/p/blu-ray/true-romance-4k-ultra-hd/13324924/",
        sourceKind: "archive_feature",
        supports: ["overall", "editing", "sound"],
        note: "Arrow documents new original-negative restorations of both theatrical and director's cuts, original stereo and 5.1 audio, Scott and Tarantino commentaries, deleted scenes, the alternate ending and new interviews with costume, editing and music collaborators."
      },
      {
        title: "BAFTA A Life in Pictures: Quentin Tarantino",
        publisher: "BAFTA",
        url: "https://www.bafta.org/media-centre/press-releases/bafta-a-life-in-pictures-quentin-tarantino/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Tarantino places True Romance among the scripts written during his video-store period and identifies the Clifford-Coccotti confrontation as the strongest scene he believed he had written at that stage of his career."
      },
      {
        title: "Patricia Arquette winners' press conference",
        publisher: "BAFTA",
        url: "https://www.bafta.org/media-centre/press-releases/patricia-arquette-winners-press-conference-interview-supporting-actress-ee/",
        sourceKind: "filmmaker_interview",
        supports: ["overall"],
        note: "Arquette recalls Tony Scott's willingness to adopt her ideas for Alabama, providing direct testimony about the film's collaborative directing and performance process."
      },
      {
        title: "True Romance (Director's Cut)",
        publisher: "British Board of Film Classification",
        url: "https://www.bbfc.co.uk/release/true-romance-directors-cut-q29sbgvjdglvbjpwwc0xmdi2mzu0",
        sourceKind: "film_institute",
        supports: ["overall", "editing"],
        note: "The BBFC record confirms the distinct director's-cut classification and documents the sustained bloody violence whose intensity shaped the film's release and version history."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
