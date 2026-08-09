import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";
import { nerveProductionCaseVerification } from "./scenarioProductionVerificationNerve";

export const theGameVerificationRecords = [
  {
    scenarioId: "scenario_the_game_1997",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Propaganda-PolyGram production, Brancato-Ferris screenplay and Andrew Kevin Walker revisions, Michael Douglas control-collapse performance, San Francisco-Mexicali location system, Filoli transformation, Harris Savides Panavision image, Jeffrey Beecroft design, Ren Klyce 5.1 sound, Howard Shore score and integrated practical-process-digital effects are supported by filmmaker, craft, institutional, location and contemporary press sources.",
    sources: [
      {
        title: "AC Gallery: The Game",
        publisher: "American Society of Cinematographers",
        url: "https://theasc.com/article/ac-gallery-the-game/",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography", "sound"],
        note: "ASC documents Fincher and Harris Savides's loss-of-control approach, almost entirely San Francisco and Mexicali location production, Panavision GII and Platinum cameras, 27mm-40mm-85mm Primo lenses, practical office and mansion locations, VistaVision process plates, UV fixtures, rotating car light, bus rig and forty-foot moon box."
      },
      {
        title: "The Game",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/28058-the-game",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Criterion's director-approved edition confirms the principal screenplay, camera, design, editing, costume, sound and music credits, a Savides-supervised restoration, original theatrical 5.1 sound, a Ren Klyce-supervised alternate mix, crew commentary and behind-the-scenes and storyboard materials for major set pieces."
      },
      {
        title: "The Game",
        publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/60743-THE-GAME",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI records the 1997 American psychological suspense feature, Propaganda Films production and PolyGram distribution, producers Steve Golin and Cean Chaffin, writers John Brancato and Michael Ferris and the Savides-Beecroft-Haygood-Shore craft team."
      },
      {
        title: "The Game (1997)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/c063356b-72b6-59aa-a312-f6b69c90bd5a/the-game",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The BFI record independently confirms David Fincher, producers Steve Golin and Cean Chaffin, writers John Brancato and Michael Ferris, principal cast and the 128-minute American release."
      },
      {
        title: "The Game",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/game",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "DFI confirms Propaganda Films and PolyGram Filmed Entertainment, the writing and producing teams, Harris Savides, James Haygood, Howard Shore, Jeffrey Beecroft and the feature's physical film record and theatrical distribution."
      },
      {
        title: "Filmed at Filoli",
        publisher: "Filoli",
        url: "https://filoli.org/filmed-at-filoli/",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "The historic estate records that The Game used Filoli as Nicholas Van Orton's house, covered the interiors in black-light graffiti and worked with staff to protect and restore the property after the production transformation."
      },
      {
        title: "The Game Spins Into David Fincher's Control",
        publisher: "Los Angeles Times",
        url: "https://www.latimes.com/archives/la-xpm-1997-sep-17-ca-33037-story.html",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The contemporary Fincher and producer Steve Golin interview records the large PolyGram production, the Scrooge-by-way-of-Mission-Impossible concept, Fincher's affinity with Nicholas's control, the opening-weekend reception and the director's response to the film's deliberately extreme construction."
      },
      {
        title: "The Killer and Seven collaborators David Fincher and Andrew Kevin Walker dissect their lethal partnership",
        publisher: "Entertainment Weekly",
        url: "https://ew.com/movies/the-killer-david-fincher-michael-fassbender-andrew-kevin-walker/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Andrew Kevin Walker identifies his uncredited work on The Game as extensive rewriting rather than a minor polish, supporting the screenplay's documented development beyond the credited Brancato-Ferris draft."
      },
      {
        title: "The Game",
        publisher: "BBFC",
        url: "https://www.bbfc.co.uk/release/the-game-q29sbgvjdglvbjpwwc0zmda4otk",
        sourceKind: "film_institute",
        supports: ["overall", "sound"],
        note: "The BBFC archive records the 128-minute 1997 cinema version, PolyGram Filmed Entertainment distribution, later physical-media versions and paperwork for the Fincher-Douglas crew commentary."
      },
      {
        title: "The Game movie review",
        publisher: "RogerEbert.com",
        url: "https://www.rogerebert.com/reviews/the-game-1997",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "Roger Ebert's contemporary review identifies Michael Douglas's controlled, gradual performance, the sustained paranoid viewpoint and the film's commitment to withholding emotional and narrative release until its final sequence of reversals."
      }
    ]
  },
  nerveProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
