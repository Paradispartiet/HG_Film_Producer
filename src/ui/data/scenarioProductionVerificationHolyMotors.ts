import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const holyMotorsProductionCaseVerification = {
  scenarioId: "scenario_holy_motors_2012",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Holy Motors is verified as a 2012 Chapter 18 Production Case in which Leos Carax turned blocked foreign projects and financing/casting constraints into an intentionally fast, inexpensive Paris production centered on Denis Lavant, digital acquisition and a modular series of appointments. Festival de Cannes anchors the 115-minute France-Germany competition version and principal credits; its press kit documents Carax's own inexpensive-quick-preselected-actor brief, digital enablement, the stretch-limousine concept and the motion-capture worker image, as well as the French-German production/support network and specialist makeup/VFX/post credits. Filmmaker Magazine and the Harvard Film Archive independently preserve Carax's production rule of shooting fast in Paris with Lavant, a small budget, digital capture and no dailies. La Cinémathèque française identifies RED Epic acquisition and the film's datamoshing and motion-capture image processes. Film and Digital Times documents title-specific use of an Angénieux Optimo 25-250 HR zoom. An ENS Louis-Lumière study drawing on Caroline Champetier's 2012 AFC testimony is retained for the reported 640 ISO night / 800 ISO day operating choices as attributed evidence rather than universal shot settings. These sources support a high-confidence low-budget digital, nighttime, location, transformation, motion-capture, datamoshing and VFX production case while leaving exact budget, shooting-day count, RED submodel/sensor details, recording media/codec, complete prime-lens set, shot-to-lens allocation, most exposure settings, motion-capture hardware, VFX software, sound equipment and DI specifics outside the verified layer.",
  sources: [
    {
      title: "Holy Motors",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/holy-motors/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting 2012 competition status, France-Germany, 115 minutes and principal direction, screenplay, cinematography, production-design, editing and sound credits."
    },
    {
      title: "Holy Motors English press kit",
      publisher: "Festival de Cannes / Pierre Grise Production",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/76897.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press kit supporting the inexpensive/quick/pre-selected-actor production brief, digital enablement, stretch-limousine concept, motion-capture worker image, DCP/Dolby SRD delivery notation and detailed production, makeup, VFX and post credits."
    },
    {
      title: "Holy Motors",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/116263.html",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Institutional film record identifying RED Epic digital acquisition, datamoshing and motion capture, plus production companies and detailed craft credits."
    },
    {
      title: "I Need to Feel When I Make a Film That I'm Not the Same Person Who Made the One Before: Director Leos Carax on Holy Motors",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/54957-leos-carax-holy-motors/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Carax interview documenting abandoned foreign projects and the production choice to work fast in Paris with Denis Lavant, a small budget, digital acquisition and no dailies."
    },
    {
      title: "Holy Motors",
      publisher: "Harvard Film Archive",
      url: "https://harvardfilmarchive.org/calendar/holy-motors-2013-02/1",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Recorded Carax discussion independently supporting the fast/cheap/digital/Paris/Lavant/no-dailies workflow and his explanation of why avoiding dailies changed retake behavior."
    },
    {
      title: "Angenieux at Cannes",
      publisher: "Film and Digital Times",
      url: "https://www.fdtimes.com/2012/05/23/angenieux-at-cannes-2/",
      sourceKind: "archive_feature",
      supports: ["cinematography"],
      note: "Contemporary trade record identifying Holy Motors, Caroline Champetier and title-specific use of the Angénieux Optimo 25-250 HR zoom."
    },
    {
      title: "Les lumières de la ville la nuit",
      publisher: "ENS Louis-Lumière",
      url: "https://www.ens-louis-lumiere.fr/wp-content/uploads/2023/11/ENSLL_CINEMA_ERHEL_2016.pdf",
      sourceKind: "archive_feature",
      supports: ["cinematography"],
      note: "Academic technical study used only for bounded camera-context evidence attributed to Caroline Champetier's AFC testimony; exact ISO values remain attributed rather than generalized across shots."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
