import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const happyAsLazzaroProductionCaseVerification = {
  scenarioId: "scenario_happy_as_lazzaro_2018",
  status: "verified",
  verifiedAt: "2026-08-12",
  summary: "Happy as Lazzaro's rural-to-urban social fable, nonprofessional ensemble, objective innocent viewpoint, Super 16 photochemical strategy, temporal rupture and Cannes reception are supported by filmmaker, cinematography-trade and film-institution sources.",
  sources: [
    {
      title: "Lenses of emotion",
      publisher: "Cinematography World",
      url: "https://www.cinematography.world/lenses-of-emotion/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Hélène Louvart details the Super 16 production, ARRI 416 and Ultra Prime package, Kodak 250D/500T stocks, objective Lazzaro-centred viewpoint, handheld/body-rig/tripod/track grammar, seasonal location contrast and photochemical processing choices."
    },
    {
      title: "Alice Rohrwacher • Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/354534/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Rohrwacher explains her loyalty to film, the blend of myth, fantasy and reality, the use of many amateur performers, children and animals, real farmers playing fictional versions of themselves, and the long rehearsal process around first-time lead Adriano Tardiolo."
    },
    {
      title: "LAZZARO FELICE (HAPPY AS LAZZARO)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/films/lazzaro-felice",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official festival record verifies the 2018 Competition selection and Best Screenplay award, the four-country production context, and principal craft credits including Hélène Louvart, Nelly Quettier, Christophe Giovannoni, Emita Frigato and Piero Crucitti."
    },
    {
      title: "Magical realism in Alice Rohrwacher’s Happy as Lazzaro",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/happy-lazzaro-alice-rohrwacher-magical-realism",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "BFI analysis documents the exploitative tobacco-farm world, the mid-film structural rupture, the folk-tale logic and recurring wolf/environmental sound that lets the magical remain grounded in natural behaviour and landscape."
    },
    {
      title: "A Second Look at Happy as Lazzaro",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/6024-a-second-look-at-happy-as-lazzaro",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Criterion records Adriano Tardiolo's selection from more than a thousand contenders and traces the film's unaged protagonist across the leap from isolated sharecropping to contemporary precarious labour."
    },
    {
      title: "Happy as Lazzaro",
      publisher: "Film at Lincoln Center",
      url: "https://www.filmlinc.org/nyff2018/films/happy-as-lazzaro/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Film at Lincoln Center confirms the 128-minute exhibition version used by the repository seed, identifies Tardiolo as a nonprofessional discovery, describes Louvart's warm-grained 16mm imagery and the mid-film leap from exploited tobacco farming into contemporary parable."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
