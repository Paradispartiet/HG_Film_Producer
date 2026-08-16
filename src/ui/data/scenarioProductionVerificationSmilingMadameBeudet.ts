import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const smilingMadameBeudetProductionCaseVerification = {
  scenarioId: "scenario_the_smiling_madame_beudet_1923",
  status: "verified",
  verifiedAt: "2026-08-16",
  summary: "La Cinémathèque française, Fondation Jérôme Seydoux-Pathé, Centre Pompidou and BFI support La Souriante Madame Beudet / The Smiling Madame Beudet as a 1923 Germaine Dulac production that combines French Impressionist form with a woman's constrained bourgeois domestic subjectivity. Cinémathèque credits Dulac and André Obey for the screenplay, Charles Delac and Marcel Vandal as producers, Le Film d'Art – Vandal et Delac as production company, Maurice Forster and Paul Parguel as cinematographers, and Germaine Dermoz and Alexandre Arquillière as the central couple; Fondation independently confirms the company, writers, photographers and principal cast. Cinémathèque and BFI characterize the film as an important early explicitly feminist work while avoiding a conclusive first-ever claim. Dulac's archival retrospective emphasizes exterior shooting, realistic acting, symbolic iconography, associative montage and musical analogy across her practice, while BFI and museum sources describe Madame Beudet's fantasy/inner life as the film's liberated subjective space. Centre Pompidou identifies a 35 mm black-and-white silent object and, together with Cinémathèque and Fondation, demonstrates differing surviving/presentation runtimes. The Production Case therefore teaches gendered domestic subjectivity, performance, fantasy, superimposition/distortion and associative montage while keeping feminist historiography qualified and modern accompaniment/runtime separate from the 1923 production object.",
  sources: [
    {
      title: "Germaine Dulac, entre classique, moderne, et avant garde",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/article/1521.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Cinémathèque institutional essay placing Dulac in French avant-garde and feminist history, identifying La Souriante Madame Beudet as one of the early openly feminist films and contextualizing her evolution toward film-specific visual language rather than a simple first-film claim."
    },
    {
      title: "Programme Germaine Dulac — La Souriante madame Beudet",
      publisher: "Fondation Jérôme Seydoux-Pathé",
      url: "https://www.fondation-jeromeseydoux-pathe.com/event/3234",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Institutional screening/catalog record confirming 1923, Germaine Dulac, Dulac/André Obey screenplay from the Amiel/Obey play, Maurice Forster and Paul Parguel photography, Le Film d'Art – Vandal et Delac production, principal cast and a 38-minute 35 mm copy."
    },
    {
      title: "La Souriante Madame Beudet",
      publisher: "Centre Pompidou",
      url: "https://www.centrepompidou.fr/fr/ressources/oeuvre/cnykazR",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Museum collection record identifying the work as 1922–1923, 35 mm, black-and-white and silent, with a 39-minute-30-second preserved object and later accompaniment recommendations. Used to make copy/runtime/music history explicit rather than to invent a single original projection state."
    },
    {
      title: "10 great films of 1923",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1923",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI identifies Dulac's film as an early explicitly feminist Impressionist work, centers Madame Beudet's constrained marriage and fantasy worlds, and highlights its experimental photography and liberated imaginative space without making an uncontested first-ever claim."
    },
    {
      title: "Germaine Dulac: sensations cinégraphiques à la Maison des rêves",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/article/1755.html",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "cinematography"],
      note: "Cinémathèque retrospective describing Dulac as feminist, socialist and avant-garde pioneer and identifying recurring practices including symbolic iconography, associative montage and musical analogy; it situates Madame Beudet's modern heroine inside a wider body of work rather than isolating one film as a total movement definition."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
