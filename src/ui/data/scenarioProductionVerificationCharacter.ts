import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const characterVerificationRecords = [
  {
    scenarioId: "scenario_character_1997",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's free combination of Bordewijk's novel and novella, murder-confession frame, seven-million-guilder Dutch-Belgian production, multinational reconstruction of prewar Rotterdam, 35 mm photography, period design, controlled performance and major awards legacy are supported by filmmaker testimony, national film records, location history and institutional archives.",
    sources: [
      {
        title: "Mike van Diem over Karakter — Alleen het verhaaltje vertellen, verder niets",
        publisher: "Filmkrant",
        url: "https://filmkrant.nl/?p=30530",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Van Diem explains the roughly seven-million-guilder production, First Floor development, free combination of Bordewijk's novel and earlier novella, added fatal structure, rehearsal and his rule that casting, photography and editing must serve narrative clarity."
      },
      {
        title: "Karakter",
        publisher: "Netherlands Film Festival",
        url: "https://www.filmfestival.nl/en/film/karakter-5",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The national festival archive confirms the Oscar-winning debut, Ghent-Antwerp-Wroclaw location strategy and principal writing, camera, design, editing, production-sound and mixing credits."
      },
      {
        title: "Karakter",
        publisher: "Eye Filmmuseum",
        url: "https://www.eyefilm.nl/en/whats-on/karakter/732598",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Eye records the Netherlands-Belgium feature, the adaptation of both Karakter and Dreverhaven en Katadreuffe, Fedja van Huet's breakthrough, the Academy Award and the later 4K restoration."
      },
      {
        title: "Karakter",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/karakter",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "DFI confirms First Floor Features and Almerica Film, producer Laurens Geels, screenplay credits, Rogier Stoffers, Jessica de Koning, Paleis van Boem, Rikke Jelier and the colour Dolby digital presentation."
      },
      {
        title: "Character",
        publisher: "Flanders Image",
        url: "https://www.flandersimage.com/titles/character",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The Flemish audiovisual record confirms the minority co-production, writers, cast, editor, cinematographer, 122-minute colour feature and 5.1 sound format."
      },
      {
        title: "Karakter (1997)",
        publisher: "Netherlands Film Commission",
        url: "https://filmcommission.nl/database/production/karakter/",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "The national production database identifies Van Diem's dramatic debut, First Floor and Almerica provenance, Golden Calf and Academy Award, and the film's production and craft personnel."
      },
      {
        title: "Oscar-winning films in which Wroclaw appears",
        publisher: "City of Wroclaw",
        url: "https://www.wroclaw.pl/dla-mieszkanca/wroclaw-w-filmach-nagrodzonych-oscarem",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "Municipal testimony from local production designer Rafal Waltenberger explains the search for neglected brick and port textures, the choice of Wroclaw and Van Diem's highly prepared, non-improvised location production."
      },
      {
        title: "1998 Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1998/U--Z",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The Academy archive records Character as the Netherlands winner for Foreign Language Film at the 70th Academy Awards."
      },
      {
        title: "Karakter — 1997 Selection",
        publisher: "La Semaine de la Critique",
        url: "https://www.semainedelacritique.com/en/edition/1997/movie/karakter",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The Cannes Critics' Week archive records the 1997 selection and the murder-interrogation narrative that turns Katadreuffe's social ascent and paternal obsession into a retrospective structure."
      },
      {
        title: "Camerimage 1997",
        publisher: "EnergaCAMERIMAGE",
        url: "https://archive.camerimage.pl/en/archiwum/kronika-nagrod-camerimage-1997/camerimage-1997/",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "The cinematography festival archive records Rogier Stoffers as the 1997 Golden Frog winner for Character, grounding the film's photographic recognition."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
