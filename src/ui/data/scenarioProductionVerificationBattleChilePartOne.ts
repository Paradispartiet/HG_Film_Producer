import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const battleChilePartOneProductionCaseVerification = {
  scenarioId: "scenario_the_battle_of_chile_part_i_1975",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Patricio Guzmán's official production account, Memoria Chilena, IDFA, Harvard Film Archive and Icarus support The Battle of Chile: Part I as the first completed section of a political-documentary project filmed during Chile's 1973 crisis and completed after the coup through exile and Cuban post-production. Guzmán identifies a five-person field team: himself as writer-director, Jorge Müller Silva as cameraman, Bernardo Menz as sound engineer, Federico Elton as production manager and José Bartolomé as assistant director, with Pedro Chaskel later editing. He documents one Éclair 16 mm camera, three batteries, two magazines/chassis, a tripod, a Nagra-4 recorder, a Sennheiser microphone and a Citroën 2CV, plus 44,000 feet of black-and-white stock and 134 sound reels supplied by Chris Marker. Guzmán and Memoria Chilena document ICAIC's contribution to the long Cuban editing process after the coup and the detention/displacement of team members; Müller was later detained-disappeared in 1974. IDFA confirms Jorge Müller Silva for cinematography, Pedro Chaskel for editing, Bernardo Menz for sound, Guzmán for screenplay/direction and ICAIC co-production/support, while describing the handheld interviews, meetings and demonstrations of Part I. Harvard, UCLA and IDFA list Part I at 96 minutes; some catalog records list 97, so the case uses 96 minutes canonically while preserving 96/97 as runtime provenance. The 2023 Icarus restoration is kept separate from original 1973 16 mm capture and 1975 completion. No film-stock emulsion, lens package, exposure/lighting ratios, exact Sennheiser model, lab chemistry or exact daily shooting chronology is invented.",
  sources: [
    {
      title: "The Battle of Chile I - II - III",
      publisher: "Patricio Guzmán",
      url: "https://www.patricio-guzman.com/en/la-batalla-de-chile-i-ii-iii",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Guzmán documents the five-person field crew, Pedro Chaskel's later editing role, Éclair 16 mm camera, batteries, two magazines, tripod, Nagra-4, Sennheiser microphone, Citroën 2CV, Chris Marker's 44,000 feet of black-and-white stock and 134 sound reels, ICAIC support, and the crew's repression after the coup."
    },
    {
      title: "La batalla de Chile",
      publisher: "Memoria Chilena – Biblioteca Nacional de Chile",
      url: "https://www.memoriachilena.gob.cl/602/w3-article-96647.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Chile's national digital library identifies the trilogy's 1975–1979 completion, Guzmán, Müller, Menz, Elton, Bartolomé and Chaskel, and describes the project as born in Santiago's political streets and finished in a Cuban editing room after the coup displaced the team."
    },
    {
      title: "The Battle of Chile: The Insurrection of the Bourgeoisie",
      publisher: "IDFA Archive",
      url: "https://www.idfa.nl/en/film/8f9ea725-b676-4c10-a35a-d6fc7aa17a7a/the-battle-of-chile-the-insurrection-of-the-bourgeoisie/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "IDFA records Chile/Cuba/France, 1975, 96 minutes, Guzmán direction/screenplay, Jorge Müller Silva cinematography, Pedro Chaskel editing, Bernardo Menz sound and ICAIC co-production, and describes the film's handheld meetings, demonstrations and street interviews."
    },
    {
      title: "The Battle of Chile, Part One: The Insurrection of the Bourgeoisie",
      publisher: "Harvard Film Archive",
      url: "https://harvardfilmarchive.org/calendar/battle-of-chile-part-one-the-insurrection-of-the-bourgeoisie-202",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Harvard records the restored Icarus DCP at 96 minutes and documents Chris Marker's film-stock support and the crew's street and town coverage, retained as later circulation evidence distinct from original 16 mm capture."
    },
    {
      title: "The Battle of Chile - Restored!",
      publisher: "Icarus Films",
      url: "https://icarusfilms.com/if-bocbd",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Icarus documents the 2023 restoration and the fact that Guzmán and colleagues filmed the political developments in the months before the September 1973 coup; restoration is kept separate from original production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
