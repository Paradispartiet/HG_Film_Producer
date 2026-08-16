import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const coeurFideleProductionCaseVerification = {
  scenarioId: "scenario_coeur_fidele_1923",
  status: "verified",
  verifiedAt: "2026-08-16",
  summary: "La Cinémathèque française and the British Film Institute support Cœur fidèle as a 1923 Jean Epstein film produced and originally distributed by Pathé Consortium Cinéma, with Jean and Marie Epstein credited for the screenplay, Marie Epstein as assistant director, Paul Guichard as director of photography and Léon Donnot and Henri Stuckert as camera operators. Cinémathèque records the principal cast and current restored 84-minute presentations, while its Jean Epstein restoration corpus places Cœur fidèle in Epstein's 1922–1924 first-avant-garde phase and frames photogénie as part of his broader theoretical investigation of cinematic movement, duration and transformation. BFI identifies the film's subjective camera, innovative rhythmic editing, poetic superimpositions and especially the fairground sequence. The Production Case therefore teaches collaborative French Impressionist production, perception-led camera/editing and photogénie as historical theory without claiming that Cœur fidèle invented these techniques or treating formal experimentation as a detachable effect preset.",
  sources: [
    {
      title: "Cœur fidèle",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/48086.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film record identifying Jean Epstein, Marie Epstein, Pathé Consortium Cinéma, Paul Guichard, camera operators Léon Donnot and Henri Stuckert, the principal cast and current restored 84-minute presentations. It also preserves Henri Langlois's caution that the film synthesized known cinematic possibilities rather than literally inventing all of its celebrated techniques."
    },
    {
      title: "Jean Epstein — Catalogue des restaurations et tirages",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/catalogues/restaurations-tirages/corpus.php?id=7",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Cinémathèque's Epstein corpus places Cœur fidèle in the 1922–1924 first-avant-garde phase and explains Epstein's sustained concern with time, movement and photogénie, supporting a historically bounded theory lesson rather than a universal technical preset."
    },
    {
      title: "10 great films of 1923",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1923",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI situates the film in flourishing French cinematic Impressionism and highlights subjective camera, innovative editing and the celebrated fairground sequence as central to its formal and emotional effect."
    },
    {
      title: "10 great silent romances",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-silent-romances",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI describes Epstein's simple tragic design, rhythmic editing and poetic superimpositions, reinforcing that formal sophistication transforms a deliberately spare melodrama rather than replacing narrative causality."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
