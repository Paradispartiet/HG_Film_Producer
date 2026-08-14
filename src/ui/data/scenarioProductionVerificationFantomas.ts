import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fantomasProductionCaseVerification = {
  scenarioId: "scenario_fantomas_1913",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Gaumont, La Cinémathèque française and Bibliothèque nationale de France records support Fantômas as Louis Feuillade's 1913 Gaumont crime-film cycle built from Pierre Souvestre and Marcel Allain's novels, with René Navarre recurring as Fantômas, Edmond Bréon as Juve and Georges Melchior as Fandor. BnF explicitly identifies Juve contre Fantômas as the second and Le Mort qui tue as the third film in a five-film series. The Production Case therefore models recurring identity, disguise, pursuit and audience memory without calling Fantômas the sole invention of film seriality. Runtime and presentation remain version-scoped: Gaumont currently lists a 320-minute Fantômas programme, Cinémathèque a 300-minute DCP programme, and individual cycle entries have separate catalogue lengths; musical accompaniment is kept distinct from synchronized original production sound.",
  sources: [
    {
      title: "Fantômas (Feuillade)",
      publisher: "Gaumont",
      url: "https://www.gaumont.com/en/movie/fantomas-0",
      sourceKind: "studio_archive",
      supports: ["overall", "screenplay", "sound"],
      note: "Gaumont dates the work to 1913, credits Louis Feuillade as director and writer, lists René Navarre and the recurring ensemble, identifies French origin and silent sound, and currently presents the restored programme at 320 minutes."
    },
    {
      title: "Fantômas — Louis Feuillade, 1913",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/48519.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cinémathèque credits Feuillade, Souvestre and Allain, Société des Établissements L. Gaumont, original distributor Comptoir Ciné-Location, cinematographer/editor Georges Guérin, decorator Robert-Jules Garnier, René Navarre and the recurring cast, and describes a 300-minute DCP copy with music."
    },
    {
      title: "Juve contre Fantômas — conventional title record",
      publisher: "Bibliothèque nationale de France",
      url: "https://catalogue.bnf.fr/ark:/12148/cb16462208q",
      sourceKind: "national_library",
      supports: ["overall", "screenplay", "sound"],
      note: "BnF dates the film to 1913, identifies Gaumont production and silent form, credits Feuillade, connects the adaptation to Marcel Allain, and explicitly calls it the second film in a series of five films."
    },
    {
      title: "Le Mort qui tue — conventional title record",
      publisher: "Bibliothèque nationale de France",
      url: "https://catalogue.bnf.fr/ark:/12148/cb16472192c",
      sourceKind: "national_library",
      supports: ["overall", "screenplay", "sound"],
      note: "BnF dates the third Fantômas film to 1913, identifies Gaumont production, silent fiction and Feuillade direction, and explicitly calls it the third film in the five-film series, corroborating the cycle structure without imposing a later chapter-serial template."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
