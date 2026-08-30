import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const saintOmerProductionCaseVerification = {
  scenarioId: "scenario_saint_omer_2022",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Saint Omer is verified as Chapter 19's auteur/festival case through Venice and CNC institutional records plus direct Alice Diop and Claire Mathon testimony that connect documentary research, transcript-derived writing, long-duration performance, single-camera portraiture, real-courthouse transformation, natural-light variability, intuitive editorial structure and restrained sound/music. La Biennale records the 2022 French feature at 123 minutes, produced by Srab Films with Arte France Cinema and Pictanovo Hauts-de-France, written by Alice Diop, Amrita David and Marie NDiaye, photographed by Claire Mathon, edited by Amrita David, designed by Anna Le Mouel, costumed by Annie Melza Tiburce and credited for sound to Dana Farzanehpour, Josefina Rodriguez, Lucile Demarquet and Emmanuel Croset. CNC confirms Srab Films, regional/public support, Les Films du Losange distribution and Wild Bunch International sales. Diop's interviews establish the real 2016 trial as research origin, extensive use of trial language, the fiction/documentary continuity, very long single takes, Wiseman/Bresson/Depardon reference points, chronological courtroom work and an actor-space intended to preserve lived emotional intensity. Los Angeles Times reports a three-week Saint-Omer shoot and the chronological court process. Claire Mathon's direct cinematography testimony establishes nearly two years of visual development, the choice of a smaller brighter room in the actual Saint-Omer courthouse two months before shooting, added wood panelling, removal of the glass accused box, RED Monstro/Primo versus RED Gemini/Leitz testing, final RED Gemini 5K full-frame capture with Leitz M 0.8 lenses, frequent 50mm use, Schneider HD Classic Soft 1/16 filtration, 1.85:1, a Panavision-supplied single-camera package, long static takes, nearly imperceptible moves, a small LED inventory, mostly natural courtroom daylight, live iris response, LUT work with Yov Moor and final grading with Mathilde Delacroix at M141. Diop describes editing with co-writer/editor Amrita David as guided by internal breathing, emotional truth and political duration, with Rama's flashbacks written from the start. She also describes Caroline Shaw's female-voice music as tied to Rama's interiority/Greek-tragedy dimension and Nina Simone's final use as emotional release. The locked sources do not establish exact budget, financing shares, insurance, full public-funding terms, complete day-by-day schedule, call sheets, all permits, every construction drawing, camera media/codec/data management, complete lens/exposure reports, LUT transforms, production-sound equipment, ADR/foley architecture, mix-stage routing, editorial NLE/storage/assistant structure, full music licensing/session details, complete post schedule or distribution economics. Those remain unresolved.",
  sources: [
    {
      title: "Saint Omer",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/cinema/2022/venezia-79-competition/saint-omer",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound", "distribution"],
      note: "Festival institutional record supporting France, 2022, 123-minute runtime, Srab Films / Arte France Cinema / Pictanovo production context and principal screenplay, cinematography, editing, design, costume and sound credits."
    },
    {
      title: "Alice Diop, du documentaire à la fiction",
      publisher: "Centre national du cinéma et de l'image animée (CNC)",
      url: "https://www.cnc.fr/cinema/actualites/alice-diop-du-documentaire-a-la-fiction_1835264",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "distribution"],
      note: "French national-film-body feature supporting the fiction/documentary transition, centrality of language, Srab Films production, regional/public support, Les Films du Losange distribution, Wild Bunch International sales and CNC support."
    },
    {
      title: "Claire Mathon AFC • Saint Omer",
      publisher: "Cinematography World",
      url: "https://www.cinematography.world/claire-mathon-afc-saint-omer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer testimony supporting long visual prep, courthouse-room selection/transformation, Monstro/Primo versus Gemini/Leitz tests, RED Gemini 5K full frame, Leitz M 0.8, frequent 50mm, Classic Soft 1/16, 1.85:1, Panavision supply, single-camera operation, long static takes, small LED inventory, natural daylight, live iris work and M141 final grade."
    },
    {
      title: "Interview: Alice Diop on Saint Omer",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-alice-diop-on-saint-omer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct director testimony supporting the trial as research origin, fiction/documentary continuity, actor-casting logic, Frederick Wiseman influence and the use of long approximately twenty-minute takes to preserve viewer freedom and emotional duration."
    },
    {
      title: "Saint Omer: How accurate is Alice Diop child-killer movie?",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment-arts/movies/story/2023-01-12/saint-omer-alice-diop-guslangie-malanda-true-story",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct Diop interview supporting extensive near-verbatim courtroom language, a three-week shoot in Saint-Omer, chronological filming of court scenes and the continuous actor-space created without conventional shouted Action/Cut cues."
    },
    {
      title: "Interview: Alice Diop on Upending True Crime Conventions with Saint Omer",
      publisher: "Slant Magazine",
      url: "https://www.slantmagazine.com/film/alice-diop-interview-saint-omer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct director testimony supporting palette/costume thinking, political duration, editing by internal breathing and emotional accuracy, and the film's restrained relationship among sound, silence and music."
    },
    {
      title: "Interview: Alice Diop on the Many Dimensions of Saint Omer",
      publisher: "The Moveable Fest",
      url: "https://moveablefest.com/alice-diop-saint-omer-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Direct director testimony supporting the three-person writing collaboration, prewritten Rama flashbacks, emotion-led editing, Caroline Shaw's function and the Greek-tragedy/interiority music concept."
    },
    {
      title: "Saint Omer",
      publisher: "Panavision",
      url: "https://www.panavision.com/highlights/credits/credits-detail/saint-omer",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Camera-services archive confirming Alice Diop, Claire Mathon, gaffer Benoit Bouthors and Panavision camera/optics/lighting service involvement; detailed package claims remain grounded in Mathon's direct interview."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
