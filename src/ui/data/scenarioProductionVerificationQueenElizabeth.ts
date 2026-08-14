import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const queenElizabethProductionCaseVerification = {
  scenarioId: "scenario_queen_elizabeth_1912",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Institutional records from Fondation Jérôme Seydoux-Pathé, Harvard Film Archive, MoMA and BFI support Queen Elizabeth as a 1912 French Film d'Art prestige feature built around Sarah Bernhardt, circulated to the United States as a four-reel import and used by Adolph Zukor as evidence for a feature-oriented business strategy. The Production Case locks 35mm/four-reel scale, Bernhardt's star value, transatlantic rights/distribution and silent presentation while treating modern runtime figures as projection/restoration-dependent rather than inventing one universally exact 1912 running time.",
  sources: [
    {
      title: "La Reine Elisabeth",
      publisher: "Fondation Jérôme Seydoux-Pathé",
      url: "https://www.fondation-jeromeseydoux-pathe.com/event/2251",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The Fondation record identifies the 1912 Le Film d'Art production, Sarah Bernhardt and Lou Tellegen, screenplay by Émile Moreau, cinematography by Clément-Maurice, 35mm material and a restored presentation at 47 minutes; it also records Mercanton, Desfontaines and Roudès in the directing credits."
    },
    {
      title: "The Stars and Stripes",
      publisher: "Harvard Film Archive",
      url: "https://harvardfilmarchive.org/programs/the-stars-and-stripes",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "Harvard documents Adolph Zukor's July 1912 import of the four-reel French Sarah Bernhardt Queen Elizabeth and explains that its box-office success helped attract stage performers and orient the emerging Famous Players company toward feature-length films."
    },
    {
      title: "Modern Matinees: Iris Barry's History of Film",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/events/5818",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "MoMA lists the 1912 Queen Elizabeth with Sarah Bernhardt as 35mm and silent with musical accompaniment, gives a 36-minute presentation runtime, and links Bernhardt's prestige and the film's success to broader acceptance of longer feature films."
    },
    {
      title: "How Sarah Bernhardt became the world's first celebrity actor",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/sarah-bernhardt-worlds-first-celebrity-actor",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI places Bernhardt's Queen Elizabeth within her international screen celebrity and records Adolph Zukor's acquisition of U.S. rights, supporting the case's transatlantic star-and-distribution logic without relying on disputed purchase-price figures."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
