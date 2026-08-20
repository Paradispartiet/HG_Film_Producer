import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const mephistoProductionCaseVerification = {
  scenarioId: "scenario_mephisto_1981",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Hungary's National Film Institute, filmportal.de and Festival de Cannes support Mephisto as a 1981 Hungarian-led Central European co-production rather than a retrospective awards object. NFI credits István Szabó directing, Péter Dobai/Szabó screenplay, Lajos Koltai cinematography, József Marx producing and Objektív Film Studio with Manfred Durniok Production. NFI's production-history essay adds the project-development route: a West Berlin retrospective led producer Manfred Durniok to approach Szabó and Koltai about German television work and then provide Klaus Mann's Mephisto for adaptation. filmportal supplies the fuller industrial and craft record: Mafilm Objektív Stúdió, Manfred Durniok Produktion für Film und Fernsehen, association with ORF and Hessischer Rundfunk, Hans Prescher editorial/TV production responsibility, Lajos Óvári executive production, József Marx production management and three location managers; screenplay by Szabó/Dobai, German dialogue by Carla Hesse/Heinz Freitag, translation by Angelika and Péter Máté, dramaturgy by János Rózsa; Lajos Koltai cinematography with Jean Badal credited for Paris, Gyula Kovács camera assistance, József Romvári sets, Eva Marton decoration, Edit Basilides makeup, Ágnes Gyarmathy costume, Zsuzsa Csákány editing, György Fék sound, Maria Ligeti/Béla Szirmai choreography and Zdenkó Tamássy music. filmportal explicitly labels the original record as 3957 metres, 145 minutes, 35mm, 1.66:1 and Eastmancolor. NFI's current film page instead lists 154 minutes, while NFI's restored sales catalogue lists 140 minutes and a 4K restoration with grading supervised by Koltai. The case therefore uses 145 minutes canonically for the explicitly original archival record and preserves 140/154 as catalog/restoration variance without inventing alternate cuts. Cannes credits and prizes, the 1982 Academy Award and the 2018 4K restoration remain downstream from original production. No unsupported camera body, lens package, stock sub-emulsion, lighting recipe, sound hardware, finance split, production schedule, dubbing chain, undocumented location or restoration procedure is asserted.",
  sources: [
    {
      title: "Mephisto",
      publisher: "National Film Institute Hungary",
      url: "https://nfi.hu/en/films/mephisto.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "NFI identifies the 1981 35mm feature, Szabó, Dobai, Koltai, producer József Marx and Objektív Film Studio/Manfred Durniok Production; its current catalogue runtime is 154 minutes, retained as provenance rather than forced into the original 145-minute filmportal record."
    },
    {
      title: "Mephisto – How it was made",
      publisher: "National Film Institute Hungary",
      url: "https://nfi.hu/articles/show/mephisto-2",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "NFI documents the West Berlin retrospective through which Manfred Durniok approached Szabó and Koltai and then provided Klaus Mann's novel for adaptation; it also highlights Ágnes Gyarmathy's costume work and records Objektív/Durniok production."
    },
    {
      title: "Mephisto",
      publisher: "filmportal.de / DFF",
      url: "https://www.filmportal.de/film/mephisto_1abf2db05a9d4771a558e133ed8d237f",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "filmportal supplies the detailed co-production/broadcaster and department credits, plus the explicitly original 3957m/145-minute, 35mm, 1.66:1, Eastmancolor record and 1981 exhibition chronology."
    },
    {
      title: "Mephisto",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/mephisto/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Cannes independently confirms Szabó direction, Szabó/Dobai screenplay, Koltai cinematography and Zdenkó Tamássy music; the festival prizes themselves are treated only as downstream reception."
    },
    {
      title: "National Film Institute Film Archive Sales Catalogue – Mephisto",
      publisher: "National Film Institute Hungary Film Archive",
      url: "https://nfi.hu/file/documents/2/2498/filmarchivum_sales_catalog_ok_boritoval.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "The archive sales catalogue identifies Objektiv Studio/Manfred Durniok production, Szabó/Dobai/Koltai/Tamássy, a later 140-minute 4K-restored presentation and grading supervised by Koltai. That restored metadata is kept separate from original capture."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
