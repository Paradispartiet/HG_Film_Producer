import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const mesrinePublicEnemyProductionCaseVerification = {
  scenarioId: "scenario_mesrine_public_enemy_no_1_2008",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The sequel's media-saturated biographical structure, shared nine-month France-Canada production, Vincent Cassel's later-period transformation, historical-location strategy, colour 35 mm Scope image, César-recognized design and costume, episodic editing, detailed sound and public-mythology theme are supported by ten inspectable institutional, production and critical sources.",
  sources: [
    {
      title: "Mesrine : L'ennemi public n°1",
      publisher: "UniFrance",
      url: "https://www.unifrance.org/film/29881/mesrine-l-ennemi-public-n-1",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The national film profile documents the 2008 French release, colour 35 mm production, CinemaScope frame, Dolby DTS sound, press materials, festival circulation and César recognition for acting, adaptation, costume and production design."
    },
    {
      title: "Mesrine: L'ennemi public n°1 — dossier de presse",
      publisher: "Pathé Distribution",
      url: "https://medias.unifrance.org/medias/65/140/35905/presse/mesrine-l-ennemi-public-n-1-dossier-de-presse-francais.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official press kit contains Thomas Langmann, Jean-François Richet and Vincent Cassel interviews describing the two-film design, nine-month shoot, research, historical locations, reverse physical transformation and the sequel's more frenetic, multi-axis and psychologically paranoid form."
    },
    {
      title: "Public enemy No. 1 - del 2",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/public-enemy-no-1-del-2",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "DFI confirms Richet and Dafri, producers Thomas Langmann, Maxime Rémillard and André Rouleau, Robert Gantz, Marco Beltrami and Marcus Trumpp, the principal cast and the France-Canada production."
    },
    {
      title: "Mesrine: Part 2 - Public Enemy #1",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/87397/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Cineuropa records the second film's international identity, Jean-François Richet direction, 2008 production and its focus on the later public career of the figure known as the man with many faces."
    },
    {
      title: "Mesrine — première et deuxième parties",
      publisher: "Académie des César",
      url: "https://www.academie-cinema.org/films/mesrine-1ere-partie-linstinct-de-mort-2e-partie-lennemi-public-n1-32542/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official awards record documents the shared production's wins for Vincent Cassel, Jean-François Richet and the sound team and nominations for film, adaptation, costume, production design, photography, editing and music."
    },
    {
      title: "21st Tokyo International Film Festival awards",
      publisher: "Tokyo International Film Festival",
      url: "https://history.tiff-jp.net/en/prizes.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The festival's official history records Vincent Cassel's Best Actor award for Public Enemy No. 1 Parts 1 and 2, confirming the two-film performance as a single extended achievement."
    },
    {
      title: "10 great French gangster films",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-french-gangster-films",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "BFI places the complete Mesrine project within French gangster-film history and emphasizes Cassel's scale, the four-hour production, primary-colour visual force and breakneck momentum."
    },
    {
      title: "Mesrine: Public Enemy Number One",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2009/aug/28/mesrine-public-enemy-review",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The contemporary sequel review identifies the later film's immediate swagger, public persona, accelerating structure and Cassel-led shift from criminal biography toward a pressured endgame."
    },
    {
      title: "Tough Guys",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/magazine/2010/08/16/tough-guys",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The essay analyzes the two-film circular construction, the 1979 endpoint, rapid succession of associates and episodes, Mesrine's sensitivity to press representation and Cassel's performance of vanity and self-created stardom."
    },
    {
      title: "Interview: Vincent Cassel",
      publisher: "KPBS Public Media",
      url: "https://www.kpbs.org/news/arts-culture/2010/08/26/interview-vincent-cassel",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Cassel discusses the burden of Mesrine's public mythology, the decision not to defend or simplify him and the performance problem of exposing contradiction across the extended two-part film."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
