import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const cabiriaProductionCaseVerification = {
  scenarioId: "scenario_cabiria_1914",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "Museo Nazionale del Cinema, La Cinémathèque française and BFI records support Cabiria as Giovanni Pastrone's 1914 Itala Film historical epic, produced in Turin with unusually large-scale period staging, a multi-person cinematography unit that included Segundo de Chomón, and an original musical programme credited to Ildebrando Pizzetti and Manlio Mazza. The Production Case therefore treats spectacle as an integrated production system of architecture, crowds, camera movement, effects, performance, intertitles, music and export ambition rather than as size alone. Version boundaries remain explicit: the Museo reconstructs a 1914 edition from surviving elements and separately restores Pastrone's altered 1931 sound reissue, while institutional catalogues give different modern presentation runtimes. The case does not collapse those witnesses into one supposedly intact universal master or claim that Cabiria single-handedly invented the epic or the moving camera.",
  sources: [
    {
      title: "Cabiria — restored silent films record",
      publisher: "Museo Nazionale del Cinema",
      url: "https://www2.museocinema.it/restauri/muti_restaurati.php?id=34&l=en",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The museum identifies Giovanni Pastrone as director, Itala Film in Turin as production company, a cinematography team including Augusto Battagliotti, Natale Chiusano and Segundo de Chomón, the 1914 original length of 3364 metres, the April 1914 premiere, and the separate 1914 and 1931 restorations. Its restoration notes also distinguish the reconstructed 1914 sacrifice sequence and music evidence from material added for the 1931 sound version."
    },
    {
      title: "Cabiria — Giovanni Pastrone, 1914",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/43134.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Cinémathèque credits Pastrone as director, producer and decorator; Pastrone and Gabriele D'Annunzio as screenwriters; Itala Film (Torino) as producer; multiple directors of photography including Segundo de Chomón; Chomón as special-effects coordinator; and Ildebrando Pizzetti and Manlio Mazza for original music."
    },
    {
      title: "Cabiria & Cabiria. The restoration",
      publisher: "Museo Nazionale del Cinema",
      url: "https://www.museocinema.it/en/exhibitions/cabiria-cabiria-restoration-0",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "The museum describes production across late 1913 and early 1914, worldwide success, Cabiria's importance to Italian period spectacle, and the dual restoration of a reconstructed 1914 edition and Pastrone's substantially different 1931 sound version. It also documents live performance of the Pizzetti/Mazza original score for the reconstructed 1914 presentation."
    },
    {
      title: "10 great silent epics — Cabiria (1914)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-silent-epics",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI places Cabiria within the pre-war Italian epic tradition, emphasizes its large-scale historical set pieces and explicitly notes its generous use of moving-camera and tracking shots. The Production Case uses that evidence to teach mobile spatial revelation without turning the film into a lone-inventor myth."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
