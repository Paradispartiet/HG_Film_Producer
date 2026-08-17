import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const smilingMadameBeudetProductionCaseVerification = {
  scenarioId: "scenario_the_smiling_madame_beudet_1923",
  status: "verified",
  verifiedAt: "2026-08-17",
  summary: "La Cinémathèque française, Fondation Jérôme Seydoux-Pathé and BFI support La Souriante madame Beudet / The Smiling Madame Beudet as Germaine Dulac's 1923 French impressionist adaptation centered on an intelligent woman's constrained bourgeois marriage and subjective inner life. Cinémathèque credits Dulac as director and co-screenwriter with André Obey, the Denys Amiel/André Obey play as source, Le Film d'Art - Vandal et Delac as production company, Charles Delac and Marcel Vandal as producers, Maurice Forster and Paul Parguel as cinematographers, and Germaine Dermoz and Alexandre Arquillière in the central roles. Cinémathèque scholarship situates Dulac's broader impressionist practice in symbolic iconography, associative montage, realistic performance and musical analogy, while BFI emphasizes the film's explicitly feminist stance, experimental form, lighting/photography and contrast between the stifling domestic chamber and Madame Beudet's imagination. Runtime is version-bounded: Cinémathèque lists 36 minutes, while Fondation Pathé lists a 38-minute 35mm Eye Filmmuseum copy. The Production Case therefore teaches adaptation, subjective visual organization, performance, domestic spatial constraint and feminist point of view without asserting one universal runtime or a simplistic 'first feminist film' invention claim.",
  sources: [
    {
      title: "La Souriante madame Beudet",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/57083.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Institutional film record giving 1923, 36 minutes, Dulac/Obey screenplay attribution, source play, Film d'Art - Vandal et Delac production, Delac/Vandal producers, Forster/Parguel photography and principal cast."
    },
    {
      title: "Germaine Dulac : sensations cinégraphiques à la Maison des rêves",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/article/1755.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Cinémathèque scholarship identifying the film as impressionist and Dulac's cinema with symbolic iconography, associative montage, realistic performance, exterior practice and musical analogy, with emphasis on women's interior lives and freedom."
    },
    {
      title: "Programme Germaine Dulac",
      publisher: "Fondation Jérôme Seydoux-Pathé",
      url: "https://www.fondation-jeromeseydoux-pathe.com/event/3234",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Archival program independently preserving the 1923 Dulac/Obey/Amiel production credits, Forster/Parguel photography, Film d'Art - Vandal et Delac production and a 38-minute 35mm Eye Filmmuseum copy, establishing a runtime/copy-state boundary against Cinémathèque's 36-minute presentation."
    },
    {
      title: "10 great films of 1923 — The Smiling Madame Beudet",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1923",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI contextualizes the film as an early explicitly feminist impressionist drama and highlights its experimental form, lighting/photography and movement between the stifling domestic chamber and Madame Beudet's liberated imagination."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
