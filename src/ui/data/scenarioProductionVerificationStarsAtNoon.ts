import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const starsAtNoonProductionCaseVerification = {
  scenarioId: "scenario_stars_at_noon_2022",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Stars at Noon is verified as a new source-first Chapter 19 Production Case for the Cannes major-prizes reconciliation only after a tree-wide reuse audit found no existing title/scenario identity outside the Cannes obligation manifest. Festival de Cannes locks the 2022 Competition and joint Grand Prix cycle, Claire Denis direction, Léa Mysius and Andrew Litvack screenplay credits, Eric Gautier cinematography, Arnaud de Moleron production design, Guy Lecorne editing, Jean-Paul Mugel sound and a 135-minute catalogue runtime; Cannes also confirms the film was shot in Panama. Unifrance independently records production year 2022, France/Panama coproduction geography, 137 minutes, 2.39 and 5.1. Ad Vitam records 138 minutes, 2.39/5.1 and the Curiosa Films / Hypatia Films / Barnstormer / CANAL+ / Ciné+ / Arte France production network with Olivier Delbosc and Olivier Helie in producer/production roles. ARRI confirms the ALEXA Mini. Eric Gautier's later ZEISS interview identifies Stars at Noon as anamorphic widescreen with TechnoCooke lenses, while CNC records his direct account of concentrating on performers' skin and humidity. Denis' contemporary Cannes production material documents the move from inaccessible Nicaragua to Panama, a largely Panamanian crew alongside the French crew, local casting, and a weather/location-responsive production method. The playable case uses 137 minutes because Unifrance and the contemporary press material agree on 2h17, while preserving Cannes' 135 and Ad Vitam's 138 as unresolved catalogue/version metadata. Exact shooting-day count, exact shoot dates, budget and finance shares, complete camera/lens/codec/media/data package, complete lighting plot, production-sound equipment, editorial infrastructure, grading system, VFX census and definitive mastering lineage remain unresolved.",
  sources: [
    {
      title: "STARS AT NOON",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/stars-at-noon/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting the 2022 Competition/joint Grand Prix cycle, Claire Denis direction, screenplay, production design, cinematography, editing and sound credits, France listing and the separate 135-minute catalogue runtime."
    },
    {
      title: "Meeting the team of Claire Denis' Stars at Noon",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2022/meeting-the-team-of-claire-denis-stars-at-noon/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Official Cannes event record explicitly confirming that Stars at Noon was shot in Panama and identifying Claire Denis, Margaret Qualley, Joe Alwyn, Guy Lecorne, Léa Mysius, Andrew Litvack, Stuart Staples and producer Olivier Delbosc in the production team."
    },
    {
      title: "Stars at Noon",
      publisher: "Unifrance",
      url: "https://en.unifrance.org/movie/51655/stars-at-noon",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "French film-industry record supporting production year 2022, France/Panama coproduction geography, 137-minute runtime, 2.39 aspect ratio and 5.1 audio format."
    },
    {
      title: "Stars at noon",
      publisher: "Ad Vitam",
      url: "https://www.advitamdistribution.com/films/stars-at-noon/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Distributor record supporting the separate 138-minute listing, 2.39/5.1 formats, principal creative/department credits, Olivier Delbosc production, Olivier Helie production direction, Curiosa Films production, Hypatia Films/Barnstormer coproduction and CANAL+/Cine+/Arte France association."
    },
    {
      title: "ARRI technology behind the scenes of Cannes 2022",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-technology-in-cannes-2022",
      sourceKind: "manufacturer_case_study",
      supports: ["overall", "cinematography"],
      note: "Manufacturer record explicitly identifying Stars at Noon, Claire Denis and DP Eric Gautier and confirming the ALEXA Mini camera."
    },
    {
      title: "Eric Gautier, voyages en lumière",
      publisher: "CNC",
      url: "https://www.cnc.fr/cinema/actualites/eric-gautier-voyages-en-lumiere_1973312",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "French national cinema-centre interview with Gautier supporting his direct description of focusing on performers' skin and humidity on Stars at Noon, plus cinematography, writing, music and production-network credits."
    },
    {
      title: "Eric Gautier, AFC, about The Fence",
      publisher: "ZEISS",
      url: "https://www.zeiss.com/photonics-and-optics/en/cinematography/blog/eric-gautier-the-fence.html",
      sourceKind: "manufacturer_case_study",
      supports: ["cinematography"],
      note: "Later direct Gautier interview explicitly identifying the previous film Stars at Noon as anamorphic widescreen photographed with TechnoCooke lenses; no complete focal set, lens modifications or acquisition-media details are inferred from that statement."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
