import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const oppenheimerProductionCaseVerification = {
  scenarioId: "scenario_oppenheimer_2023",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Oppenheimer is verified as Chapter 19's industrial-scale technical case through AFI institutional records and direct department/technical testimony connecting 65mm photochemical capture, newly manufactured black-and-white stock, custom optics, laboratory engineering, physical production, practical photographic effects, digital compositing, production sound, parallel digital/film editorial and score development. AFI records the 181-minute 2023 United Kingdom/United States feature and principal credits including Christopher Nolan, Emma Thomas, Charles Roven, Hoyte van Hoytema, Jennifer Lame and Richard King. Kodak's direct van Hoytema interview documents IMAX 15-perf and Panavision System 65 5-perf capture, VISION3 250D 5207 and 500T 5219, EASTMAN DOUBLE-X 5222 specially manufactured in 65mm for the production, collaboration among Kodak, IMAX, Panavision and FotoKem, close-focus Hasselblad/Sphero 65/System 65 lens engineering, a waterproof snorkel lens and film processing at FotoKem. FotoKem documents the lab reconfiguration required to process 65mm black-and-white, repeated switching between black-and-white and color chemistry, printing all photographed material, Avid-generated cut-list/keycode integration, physical negative cutting and film/digital color matching. American Cinematographer and ASC interviews support the close-camera large-format strategy, loud IMAX-camera constraint and lighting-control approach. Ruth De Jong documents the Ghost Ranch Los Alamos build, use of Oppenheimer's real house, 360-degree buildings and full bomb construction. Andrew Jackson/DNEG reporting establishes that the film avoided CGI-generated imagery for central effects while still using digital visual-effects work: practical photographic elements were combined, retimed, deformed, layered and cleaned up, with DNEG delivering just over 100 final VFX shots. This distinction is mandatory: 'no CGI-generated imagery' does not mean 'no VFX' or 'no digital compositing'. Dolby Creator Talks identifies production mixer Willie Burton, sound designer/supervising sound editor Richard King and re-recording mixers Gary Rizzo and Kevin O'Connell, documenting IMAX camera noise, use of quieter 5-perf 65mm for dialogue where practical and extensive dialogue cleanup. Richard King separately describes real-world source recording, the recurring foot-stomp motif and subjective sound design. Jennifer Lame documents Avid editorial with a parallel Toluca Lake film-house crew physically conforming a workprint behind her cuts and weekly small screenings used to calibrate pace. Ludwig Göransson documents extensive pre-production score writing, original cues in the rough cut rather than borrowed temp music, solo violin/microtonal string concepts and a five-day principal orchestral scoring-stage session as part of a longer recording process. Washington Post reporting supplies the sourced 57-day principal-photography schedule. These sources do not establish a complete audited budget or cash-flow plan, insurance, payroll, full day-by-day schedule, all permits, every camera body/magazine assignment, full focal/T-stop logs, all stock roll allocations, exact lab timing by roll, complete fixture/network inventory, special-effects materials and charges, every photographic-effects element, full DNEG vendor/shot split beyond the sourced final-shot scale, complete Avid/storage/conform architecture, microphone map, dialogue-cleanup software chain, full ADR/foley/stem routing, complete music-session economics, DI timing decisions, release-print manufacturing economics, premium-format allocation or distribution recoupment. Those remain unresolved.",
  sources: [
    {
      title: "Oppenheimer",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/oppenheimer?whereToWatch=all",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound", "distribution"],
      note: "Institutional record supporting the 181-minute runtime, UK/US country record, July 2023 release and extensive principal production/craft credits."
    },
    {
      title: "Cinematographer Hoyte van Hoytema gets up-close & personal using Kodak 65MM large-format film on Christopher Nolan's Oppenheimer",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/oppenheimer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct van Hoytema testimony supporting IMAX 15-perf/System 65 5-perf, 250D 5207, 500T 5219, newly manufactured 65mm DOUBLE-X 5222, Kodak/IMAX/Panavision/FotoKem engineering, custom close-focus optics, waterproof snorkel lens and Room 2021 lighting."
    },
    {
      title: "DP Van Hoytema and FotoKem talk 65mm and Oppenheimer",
      publisher: "FotoKem",
      url: "https://fotokem.com/oppenheimer-hoytema-fotokem/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "distribution"],
      note: "Direct lab/cinematography testimony supporting 65mm B&W process development, chemistry switching, printing all footage, Avid/keycode/workprint/negative-cut integration and matching digital deliverables to the photochemical master."
    },
    {
      title: "Clubhouse Conversations — Oppenheimer",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/videos/clubhouse-conversations-oppenheimer",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct van Hoytema discussion supporting large-format close-ups, loud IMAX cameras, 65mm black-and-white and custom-built camera tools."
    },
    {
      title: "Oppenheimer Production Designer Ruth De Jong on Helping Christopher Nolan Build the Bomb",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2023/08/oppenheimer-production-designer-ruth-de-jong/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct De Jong testimony supporting Oppenheimer's real house, 360-degree Los Alamos buildings, budget-conscious physical construction and the decision to build the complete bomb."
    },
    {
      title: "Spinning beads, cloud tanks and crucibles of molten thermite",
      publisher: "befores & afters",
      url: "https://beforesandafters.com/2023/08/17/spinning-beads-cloud-tanks-and-crucibles-of-molten-thermite/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Andrew Jackson/DNEG testimony supporting practical photographic elements, just over 100 DNEG final VFX shots, layering/retiming/deformation/cleanup and the difference between no CGI-generated source imagery and no digital compositing."
    },
    {
      title: "The Oscar-Nominated Sound Team Behind Oppenheimer",
      publisher: "Dolby Creator Talks",
      url: "https://podcasts.apple.com/us/podcast/180-the-oscar-nominated-sound-team-behind-oppenheimer/id1549901182?i=1000645197114",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Willie Burton, Richard King, Gary Rizzo and Kevin O'Connell discussion supporting IMAX-camera noise, 5-perf dialogue strategy, production-dialogue preservation and post-sound workflow."
    },
    {
      title: "Double Oscar Nominee Richard King Unveils the Aural Secrets of Oppenheimer and Maestro",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2024/03/double-oscar-nominee-richard-king-unveils-the-aural-secrets-of-oppenheimer-and-maestro/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Richard King testimony supporting subjective sonic POV, real-world source recording, the foot-stomp motif and differentiated Los Alamos/hearing-room sound environments."
    },
    {
      title: "Oppenheimer editor Jennifer Lame feels the pressure",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment-arts/awards/story/2023-11-28/oppenheimer-editor-jennifer-lame-christopher-nolan",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Direct Jennifer Lame testimony supporting Avid editing, parallel Toluca Lake physical workprint conform and weekly two-or-three-person screenings for pacing calibration."
    },
    {
      title: "Oppenheimer Composer Ludwig Göransson Creates a New Kind of Atomic Scale",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2023/07/oppenheimer-composer-ludwig-goransson-creates-a-new-kind-of-atomic-scale/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Göransson testimony supporting pre-production composition, original music in the rough cut instead of borrowed temp score and the five-day principal orchestral scoring-stage session."
    },
    {
      title: "Inside Christopher Nolan's race to shoot Oppenheimer in just 57 days",
      publisher: "The Washington Post",
      url: "https://www.washingtonpost.com/lifestyle/2023/07/19/christopher-nolan-oppenheimer-race/",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Reported production account supporting the 57-day principal-photography schedule as schedule context, not as a substitute for full call sheets or unit records."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
