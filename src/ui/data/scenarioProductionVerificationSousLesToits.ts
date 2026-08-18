import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const sousLesToitsProductionCaseVerification = {
  scenarioId: "scenario_sous_les_toits_de_paris_1930",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "La Cinémathèque française, BFI and Criterion support Sous les toits de Paris as a 1930 France-Germany early-sound production by Société des Films Sonores Tobis in which René Clair deliberately restricts and displaces synchronization. Cinémathèque credits Clair for direction/screenplay/dialogue, Frank Clifford as production director, Georges Périnal and Georges Raulet for photography, Hermann Storr and Walter Morhenn as sound engineers, Lazare Meerson and Alexandre Trauner for sets, René Hubert for costume, René Le Hénaff and Clair for editing, Armand Bernard and André Gailhard for music, and Paul Minine/Nicolas Wilcke for special effects. BFI documents the stylized studio sets, moving opening shot and sound whose apparent loudness changes as the camera approaches, tenement sound travelling through floors, doors that shut sound off, the sticking gramophone and image/sound separation in the night fight. The case therefore treats selective synchronization, offscreen sound, silence and studio geography as deliberate craft choices rather than technical failure. Cinémathèque also documents a 2019 4K restoration from a nitrate image negative, a French sound negative and a safety element; this provenance is explicitly separated from the original 1930 production/release state. Tobis is kept as documented production-company context without inferring an exact recording hardware model not established by the locked sources.",
  sources: [
    {
      title: "Sous les toits de Paris (René Clair, 1930)",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/47691.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cinémathèque supplies France-Germany/Tobis provenance, detailed directing/writing/camera/sound/design/editing/music/effects credits and the 2019 4K restoration element history."
    },
    {
      title: "10 great early sound films — Sous les toits de Paris",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-early-sound-films",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "BFI documents the moving opening camera, stylized Meerson sets, sound perspective, tenement noise through floors, doors cutting sound, the sticking gramophone, train sound and Clair's selective synchronization strategy."
    },
    {
      title: "Under the Roofs of Paris",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/715-under-the-roofs-of-paris",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Criterion provides film/crew metadata including Clair, Meerson, Périnal/Raulet, René Le Hénaff, René Hubert and musical direction, and identifies the film's sophisticated early use of sound and international reception."
    },
    {
      title: "Under the Roofs of Paris — Lucy Sante essay",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/220-under-the-roofs-of-paris",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "The essay details Clair's pointed avoidance of synchronization outside dialogue/song and analyzes doors, train sound, gramophone repetition, darkness and sound passing through floors as deliberate image-sound construction."
    },
    {
      title: "René Clair — restoration and print catalogue",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/catalogues/restaurations-tirages/corpus.php?id=13",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Cinémathèque's restoration/print catalogue contextualizes preservation and reception of Clair's work; it is used for archive provenance rather than to infer undocumented 1930 craft details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
