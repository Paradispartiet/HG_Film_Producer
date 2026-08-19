import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const memoriesUnderdevelopmentProductionCaseVerification = {
  scenarioId: "scenario_memories_of_underdevelopment_1968",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "Criterion, The Film Foundation, BFI and Festival de Cannes support Memories of Underdevelopment as a 1968 Cuban ICAIC production by Tomás Gutiérrez Alea, co-written with Edmundo Desnoes from Desnoes's novel, produced by Miguel Mendoza, photographed by Ramón F. Suárez and edited by Nelson Rodríguez. Criterion additionally credits Julio Matilla for production design, Elba Pérez for costume, Leo Brouwer for music, Manuel Duchesne Cuzán as conductor, Pello el Afrokán as special performer and Eugenio Vesa, Germinal Hernández and Carlos Fernández for sound. Criterion scholarship places ICAIC's founding in 1959, identifies Gutiérrez Alea as a cofounder and describes the institute's collective-production ethos and tension between revolutionary cultural institution, education and critical art. The film represents 1961–1962 history between Bay of Pigs and the Missile Crisis while being produced/released in 1968, and combines fragmented fiction with archival/documentary footage, still photographs and street scenes. Criterion scholarship specifically identifies clips from ICAIC documentaries/newsreels incorporated into Sergio's consciousness. Film Foundation identifies ICAIC as production company and documents restoration from the original camera and sound negative plus a vintage duplicate positive, with duplicate negatives for archival footage materially edited into the surviving element. Criterion lists 98 minutes and 1.66:1; Film Foundation and Cannes list 97 minutes; BFI lists 104 minutes. The case preserves this institutional runtime variance rather than inventing unsupported alternate cuts and refuses invented camera bodies, lenses, film stock, lighting ratios, microphones, street-shoot dates or archival-source identities beyond institutional evidence.",
  sources: [
    {
      title: "Memories of Underdevelopment",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/29220-memories-of-underdevelopment",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion records the 1968 Cuban black-and-white 1.66:1 98-minute form, Gutiérrez Alea, Miguel Mendoza, Desnoes, Ramón F. Suárez, Nelson Rodríguez, Leo Brouwer, Julio Matilla, Elba Pérez and the credited sound team, and describes experimental editing, archival material and spontaneously shot street scenes." 
    },
    {
      title: "Memories of Underdevelopment: Imaging History",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5883-memories-of-underdevelopment-imaging-history",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion scholarship documents ICAIC's 1959 institutional foundation, Gutiérrez Alea's role, collective-production ideals, the 1961–1962 represented history, Vedado/Havana geography and the use of ICAIC documentary/newsreel clips to place Sergio's private viewpoint against collective history." 
    },
    {
      title: "10 Things I Learned: Memories of Underdevelopment",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5893-10-things-i-learned-memories-of-underdevelopment",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "performance"],
      note: "Criterion production notes document Gutiérrez Alea's ICAIC founding role, the Desnoes co-adaptation and feedback loop between film and later novel translation, and Sergio Corrieri's deliberate aging for the role." 
    },
    {
      title: "Memories of Underdevelopment / Memorias del subdesarrollo",
      publisher: "The Film Foundation – World Cinema Project",
      url: "https://www.film-foundation.org/world-cinema?page=1.&sortBy=country&sortOrder=1",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Film Foundation identifies Cuba, ICAIC, Gutiérrez Alea, Miguel Mendoza, Ramón F. Suárez, Nelson Rodríguez, principal cast and a 97-minute black-and-white form, and documents restoration from original camera/sound negatives and a vintage duplicate positive including archival-footage duplicate elements." 
    },
    {
      title: "Memories of Underdevelopment (1968)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/6bb5b3dc-3a99-5d91-ac9e-9cf52c4995ca/memories-of-underdevelopment",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "BFI records the 1968 Cuban feature, Miguel Mendoza, Gutiérrez Alea and a 104-minute institutional listing, and explicitly describes its fragmented narrative, real-life political footage and still-photograph method." 
    },
    {
      title: "Memorias del subdesarrollo",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/memorias-del-subdesarrollo/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Cannes Classics records the 1968 production, Gutiérrez Alea and Desnoes screenplay, ICAIC as production company and a 97-minute restored presentation, kept as a later preservation/circulation layer." 
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
