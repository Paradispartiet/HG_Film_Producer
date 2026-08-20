import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const officialStoryProductionCaseVerification = {
  scenarioId: "scenario_the_official_story_1985",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Cine Nacional, Festival de Cannes, Pyramide International and a Cambridge Latin American film reference support The Official Story as an Argentine feature produced in 1984 and released locally on 3 April 1985, with Luis Puenzo directing and co-writing with Aída Bortnik, Historias Cinematograficas as production company, Félix Monti cinematography, Juan Carlos Macías editing, Abelardo Kuschnir sound direction, Atilio Stampone music and a broader credited production/craft team. Cine Nacional credits Nora Puenzo, Luis Puenzo and Oscar Kramer in production and catalogs 110 minutes, color/Eastmancolor; Pyramide credits Nora and Luis Puenzo as producers and Marcelo Piñeyro as executive producer; Cambridge catalogs Piñeyro as production manager, Abel Facello in scenography, Ticky García Estévez in wardrobe, Blanca Olavego in makeup, Héctor Morini on camera and Macías in mixing. Those role-label differences are preserved rather than flattened. Puenzo's 2015 Cannes interview documents journalist-led research into how children of disappeared people were taken, explicitly states the filmmakers were not afraid of censors, and recounts a separate threat against child actor Analía Castro and her mother that stopped production for two or three weeks before a secret restart. The case treats that as film-specific production risk, not as a generalized censorship claim or repeatable clandestine method. Cannes and Cine Nacional converge on 110 minutes; later distributor/archive records use 112 and 114 minutes, retained only as catalog/presentation provenance. Cannes also documents a 2015 4K restoration from the original negative funded by Argentina's national film institute; this is kept separate from original 1984 production evidence. No undocumented shooting dates, camera bodies, lenses, stock emulsions, lighting ratios, sound hardware, exact clandestine procedures, hidden identities of real-life sources or invented alternate cuts are asserted.",
  sources: [
    {
      title: "La historia oficial",
      publisher: "Cine Nacional",
      url: "https://cinenacional.com/pelicula/la-historia-oficial",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Argentine film record for 1985 release date, 110-minute runtime, color/Eastmancolor, Puenzo/Bortnik screenplay, Nora Puenzo/Luis Puenzo/Oscar Kramer production, Félix Monti photography, Juan Carlos Macías editing, Abelardo Kuschnir sound direction and Atilio Stampone music."
    },
    {
      title: "La Historia Oficial (The Official Story)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/la-historia-oficial/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes Classics record identifies production year 1984, 110 minutes, Puenzo/Bortnik screenplay, Monti cinematography, Macías editing, Stampone music and Historias Cinematograficas as production company."
    },
    {
      title: "Cannes Classics - The Official Story by Luis Puenzo (1985)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2015/cannes-classics-the-official-story-by-luis-puenzo-1985/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Puenzo describes journalist-led research into appropriated children, says the filmmakers were not afraid of censors, recounts threats against Analía Castro and her mother, a two-to-three-week suspension and a secret restart, and documents the later 4K restoration from the original negative."
    },
    {
      title: "The Official Story",
      publisher: "Pyramide International",
      url: "https://inter.pyramidefilms.com/pyramide-international-catalogue-t/the-official-story.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Distributor rights-holder record identifies Historias Cinematograficas, Nora and Luis Puenzo as producers, Marcelo Piñeyro as executive producer, Puenzo/Bortnik screenplay, Monti image, Macías editing and Stampone music; its 114-minute DCP value is retained only as later presentation provenance."
    },
    {
      title: "La Historia Oficial (The Official Version, 1984), Directed by Luis Puenzo",
      publisher: "Cambridge University Press",
      url: "https://www.cambridge.org/core/books/abs/companion-to-latin-american-film/la-historia-oficial-the-official-version-1984-directed-by-luis-puenzo/0F002BAD91466033F56A70265839A801",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Reference crew record supplies Abel Facello scenography, Ticky García Estévez wardrobe, Blanca Olavego makeup, Héctor Morini camera, Abelardo Kuschnir sound, Juan Carlos Macías mixing and Marcelo Piñeyro as production manager, preserving role-label provenance against other catalogs."
    },
    {
      title: "Writing Nominations for Foreign Language Films",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://awardsdatabase.oscars.org/Help/Statistics?file=Wri-ForLangNoms.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Academy record confirms Luis Puenzo and Aída Bortnik's original-screenplay nomination for The Official Story; awards are used only as downstream reception/circulation evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
