import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const mesrineKillerInstinctProductionCaseVerification = {
  scenarioId: "scenario_mesrine_killer_instinct_2008",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The film's two-part biographical design, France-Canada-Italy production, nine-month multi-country shoot, Vincent Cassel transformation, colour 35 mm photography, credited period-design, costume, editing, sound and music departments and César recognition are supported by ten inspectable institutional, filmmaker and critical sources.",
  sources: [
    {
      title: "Mesrine: L'instinct de mort",
      publisher: "UniFrance",
      url: "https://www.unifrance.org/film/28926/mesrine-l-instinct-de-mort",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The national film profile documents the France-Canada-Italy production, 35 mm colour format, release details, press material and César nominations across direction, photography, editing, sound and music."
    },
    {
      title: "Mesrine: Part 1 - Killer Instinct",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/86431/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Cineuropa records the three-country production, Jean-François Richet direction and the adaptation of Jacques Mesrine's prison memoir as a thriller-biography about the first part of his public life."
    },
    {
      title: "Mesrine: L'instinct de mort",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/public-enemy-no-1-part-1",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI confirms Thomas Langmann, Richet and Dafri, Robert Gantz, Hervé Schneid, Marcus Trumpp, Emile Ghigo, the principal cast and the France-Canada-Italy production."
    },
    {
      title: "Mesrine: Killer Instinct",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/mesrine-killer-instinct",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI preserves the first film's synopsis, international production identity and credits for Thomas Langmann, Robert Gantz, Hervé Schneid, Emile Ghigo, sound, casting and original music."
    },
    {
      title: "Mesrine — première et deuxième parties",
      publisher: "Académie des César",
      url: "https://www.academie-cinema.org/films/mesrine-1ere-partie-linstinct-de-mort-2e-partie-lennemi-public-n1-32542/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official awards record documents wins for Vincent Cassel, Jean-François Richet and the six-person sound team plus nominations for film, adaptation, photography, editing and music."
    },
    {
      title: "Interview: Vincent Cassel",
      publisher: "KPBS Public Media",
      url: "https://www.kpbs.org/news/arts-culture/2010/08/26/interview-vincent-cassel",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Cassel discusses Mesrine's public mythology, his personal memory of the figure, the challenge of showing a flawed person without defending him and the role of performance in exposing contradiction."
    },
    {
      title: "Anecdotes du film Mesrine: L'Instinct de mort",
      publisher: "AlloCiné",
      url: "https://www.allocine.fr/film/fichefilm-111809/secrets-tournage/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The production account records the May 2007-January 2008 schedule, nine continuous months across France, Canada, Spain and the United States and Richet's combined directing and editorial overview."
    },
    {
      title: "Mesrine: Killer Instinct",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2009/aug/07/mesrine-killer-instinct-film",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The review identifies the two-part memoir adaptation, historical framing, first-film rise structure, Cassel's central performance and the production's place within French crime-film tradition."
    },
    {
      title: "Tough Guys",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/magazine/2010/08/16/tough-guys",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The essay describes the two-film, four-hour design, the opening endpoint and backward return, the episodic sequence of changing associates and the role of Cassel's star performance in Mesrine's vanity."
    },
    {
      title: "It's a weightier Vincent Cassel in Mesrine",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2010-aug-22-la-ca-vincent-cassel-20100822-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Cassel documents the physical preparation, four-month weight gain, nine-month production and reverse shooting order used so the actor could move from the older figure toward the younger chronology."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
