import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const entrActeProductionCaseVerification = {
  scenarioId: "scenario_entr_acte_1924",
  status: "verified",
  verifiedAt: "2026-08-17",
  summary: "La Cinémathèque française, Fondation Jérôme Seydoux-Pathé, Centre Pompidou and BFI support Entr'acte as René Clair's 1924 Dada/avant-garde short commissioned by Rolf de Maré for the Ballets Suédois production Relâche. Cinémathèque credits Clair as director/editor, Francis Picabia as screenwriter, Rolf de Maré as producer, Jimmy Berliet as cinematographer and Erik Satie as composer. Centre Pompidou documents the 4 December 1924 Théâtre des Champs-Élysées Relâche presentation. Fondation Pathé records that the film was shot in spring 1924, describes its earlier trick-film and chase-comedy inheritance, documents frame-by-frame and accelerated-image methods, and explains that René Clair removed material in 1967 before a later restoration reinstated the first-version material from surviving film elements. BFI adds multiple exposure, stop-motion and rapid editing to the formal vocabulary. The Production Case therefore teaches an integrated commission/exhibition problem—ballet context, scenario, camera trickery, speed, montage and original musical accompaniment—without falsely treating Dada as randomness or Clair as the inventor of trick cinema. The representative 23-minute runtime follows the Fondation Pathé restoration record and is explicitly version-bounded rather than claimed as one universal 1924 duration.",
  sources: [
    {
      title: "Entr'acte",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/47671.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film record crediting René Clair, Georges Lacombe, Francis Picabia, Rolf de Maré, Jimmy Berliet, Erik Satie and principal performers; it also identifies the modern 4K restoration and a 21-minute presentation record."
    },
    {
      title: "Restaurations — Entr'acte, René Clair, 1924",
      publisher: "Fondation Jérôme Seydoux-Pathé",
      url: "https://www.fondation-jeromeseydoux-pathe.com/cms/restaurations",
      sourceKind: "film_archive",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Primary restoration/context source documenting the Rolf de Maré commission, spring 1924 production, Relâche function, Jean Börlin/Inge Fries and artist participants, frame-by-frame and accelerated-image practice, Méliès/Pathé comic-film inheritance, Satie's original accompaniment, Clair's 1967 removals and restoration of first-version material from Pathé negative and original-print elements."
    },
    {
      title: "Entr'acte",
      publisher: "Centre Pompidou",
      url: "https://www.centrepompidou.fr/fr/ressources/oeuvre/cByj8A",
      sourceKind: "museum",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Museum collection record tying the film to the Ballets Suédois Relâche presentation at Théâtre des Champs-Élysées on 4 December 1924, crediting Picabia's scenario, Jimmy Berliet's photography and Satie's music history, and identifying the film as 35 mm black-and-white."
    },
    {
      title: "10 great films of 1924 — Entr'acte",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1924",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "cinematography"],
      note: "BFI contextualizes Entr'acte as a Dada interval film for Relâche and identifies multiple exposures, stop-motion, rapid edits, unusual viewpoints and comic reversals as concrete exercises in film style."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
