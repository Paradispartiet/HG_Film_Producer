import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theIrishmanProductionCaseVerification = {
  scenarioId: "scenario_the_irishman_2019",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "The Irishman is verified as a 2019 Martin Scorsese production case whose multi-decade narrative required a deliberately hybrid production system rather than one capture format or one effects technique. Film at Lincoln Center records the 209-minute 2019 NYFF opening-night presentation. Rodrigo Prieto's ARRI Rental and British Cinematographer interviews, together with Kodak's production account, establish the split between 35mm Kodak photography for material not requiring facial-age work and a RED Helium primary camera with synchronized infrared ARRI ALEXA Mini witness cameras for de-aging scenes. ILM's official case study documents the markerless requirement, development of the three-camera system and Flux-based facial reconstruction while preserving on-set actor performance; ILM's 1,750-VFX-shot figure is retained as an overall VFX count and is not misrepresented as 1,750 de-aging shots. Thelma Schoonmaker's direct editorial account establishes a roughly year-long edit and a continuing VFX/editorial performance-review loop in which facial detail could be restored when a younger render weakened acting. CineMontage's interviews with Schoonmaker, Eugene Gearty, Philip Stockton and Tom Fleischman document Scorsese's request for fewer effects and an unusually restrained sound field rather than an absence of sound work. Production-design reporting identifies Bob Shaw and Regina Graves and describes a production spanning roughly 295 sets and locations; that figure is treated as scale evidence, not as 295 separately constructed sets. Verification therefore does not claim that the film invented de-aging, markerless capture, infrared witness cameras, hybrid film/digital cinematography, long-form editing, streaming distribution or sparse sound design, and it keeps narrative assertions about Frank Sheeran and Jimmy Hoffa separate from production-history evidence.",
  sources: [
    {
      title: "The Irishman",
      publisher: "Film at Lincoln Center / New York Film Festival",
      url: "https://www.filmlinc.org/nyff2019/films/the-irishman/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional festival record supporting Martin Scorsese as director, the 2019 U.S. presentation, Netflix release context and the 209-minute NYFF runtime."
    },
    {
      title: "Rodrigo Prieto ASC, AMC on shooting The Irishman",
      publisher: "ARRI Rental",
      url: "https://www.arrirental.com/en/about/overview/news/rodrigo-prieto-asc-amc-on-shooting-the-irishman",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer account supporting the custom three-camera rig, RED Helium primary capture, paired ALEXA Mini infrared witness cameras, synchronization and the requirement that the rig remain usable like a normal production camera."
    },
    {
      title: "Martin Scorsese and DP Rodrigo Prieto harness Kodak film and digital capture on The Irishman",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/martin-scorsese-the-irishman/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Vendor/practitioner production account supporting 35mm Kodak acquisition for non-de-aging material and the roughly half-film/half-digital final capture balance necessitated by the synchronized VFX rig."
    },
    {
      title: "The Irishman",
      publisher: "Industrial Light & Magic",
      url: "https://www.ilm.com/vfx/the-irishman/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Official ILM case study supporting the no-markers/no-head-mounted-camera requirement, on-set performance preservation, development of the markerless facial pipeline and the overall 1,750 visual-effects-shot count."
    },
    {
      title: "The Irishman's Oscar-Nominated Editor Thelma Schoonmaker on her 53-year Collaboration with Martin Scorsese",
      publisher: "Motion Picture Association – The Credits",
      url: "https://www.motionpictures.org/2020/01/the-irishmans-oscar-nominated-editor-thelma-schoonmaker-on-her-53-year-collaboration-with-martin-scorsese/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Schoonmaker interview supporting the roughly year-long edit, abrupt temporal transitions, plain treatment of violence and the editorial/VFX review loop used to protect facial acting detail."
    },
    {
      title: "Tom Fleischman and Sound Editors Eugene Gearty and Philip Stockton Reveal the Silent Secrets of The Irishman",
      publisher: "CineMontage / Motion Picture Editors Guild",
      url: "https://cinemontage.org/tom-fleischman-and-sound-editors-eugene-gearty-and-phillip-stockton-reveal-the-silent-secrets-of-the-irishman/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct sound-team reporting supporting Scorsese's request for fewer effects, the role of silence and restraint, and the continuing collaboration among picture editorial, sound editorial and final re-recording."
    },
    {
      title: "Designing the Sets of Martin Scorsese's The Irishman",
      publisher: "Architectural Digest",
      url: "https://www.architecturaldigest.com/story/designing-the-294-sets-of-martin-scorseses-the-irishman",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Production-design reporting with Bob Shaw and Regina Graves supporting the scale of the period environment work across roughly 295 sets and locations and the use of built interiors alongside found locations."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
