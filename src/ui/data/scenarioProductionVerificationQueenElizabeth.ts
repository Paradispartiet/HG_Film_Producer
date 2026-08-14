import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const queenElizabethProductionCaseVerification = {
  scenarioId: "scenario_queen_elizabeth_1912",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Fondation Jérôme Seydoux-Pathé, BFI, MoMA and NYPL records support Queen Elizabeth as a 1912 Le Film d'Art prestige feature built around Sarah Bernhardt, Émile Moreau's play, Paul Poiret's costume contribution and a multi-reel silent presentation. The sources also support Adolph Zukor's United States rights/presentation role and the film's importance to the emerging feature economy. The Production Case preserves cataloguing and version differences: director attributions and modern running times vary, French production remains distinct from American distribution, musical accompaniment is not synchronized original sound, and no surviving print is silently declared the one complete original version.",
  sources: [
    {
      title: "La Reine Elisabeth",
      publisher: "Fondation Jérôme Seydoux-Pathé",
      url: "https://www.fondation-jeromeseydoux-pathe.com/event/2251",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional programme record listing France, 1912, 47 minutes, directors Louis Mercanton, Henri Desfontaines and Gaston Roudès, Émile Moreau's scenario, Clément-Maurice's photography, Le Film d'Art production, Sarah Bernhardt and Lou Tellegen, plus a 35 mm CNC restoration context."
    },
    {
      title: "Strike a pose: fashion and film through the ages",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/strike-pose-fashion-film-through-ages",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI documents Zukor's 1912 purchase of United States rights, the release's commercial and industrial importance, and Paul Poiret's deliberately stylized costume system for Bernhardt. It supports distribution, star-prestige and costume claims without transferring French production authorship to Zukor."
    },
    {
      title: "Short Film Program 1 — Modern Matinees: Iris Barry's History of Film",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/events/5818",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "MoMA identifies the 1912 Mercanton/Bernhardt/Tellegen film, presents a 36-minute 35 mm silent print with musical accompaniment, and explains how Bernhardt's prestige and the film's success helped establish longer features. Its print length is retained as version evidence rather than generalized to every copy."
    },
    {
      title: "Queen Elizabeth — Research Catalog",
      publisher: "New York Public Library",
      url: "https://test.nypl.org/research/research-catalog/bib/b15562649",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "NYPL catalogues the Moreau adaptation, Mercanton/Desfontaines direction, Paul Poiret costumes, Bernhardt and Tellegen, the French production's London filming context and Zukor's American presentation/financing role. Its 45-minute video record provides a second explicit runtime/version boundary."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
