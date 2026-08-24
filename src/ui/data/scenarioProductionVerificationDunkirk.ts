import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const dunkirkProductionCaseVerification = {
  scenarioId: "scenario_dunkirk_2017",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Dunkirk is verified as a 2017 photochemical large-format countercurrent whose land/sea/air screenplay geometry, location and safety logistics, dual 65mm capture, practical elements, invisible VFX, optical finish, editing, sound and score form one interdependent suspense system. Nolan's DGA interview documents the pre-script mathematical structure, fictional characters, minimal dialogue, nonverbal ensemble, bounded Rylance improvisation and time compression/elongation shared with Lee Smith and Hans Zimmer. Kodak's direct Hoyte van Hoytema account specifies a 75-day shoot, around 6,000 extras, estimated 75-percent 15-perf IMAX photography, 5-perf 65mm primarily for dialogue, VISION3 250D/500T, handheld and underwater operation, Dunkirk/IJsselmeer/Dorset/Los Angeles production geography, FotoKem processing, Dan Muscarella photochemical timing and film plus digital deliverables. ASC reports the IMAX share at approximately 70 percent, preserves changing tides and cramped low-light conditions, and credits Dan Sasaki's custom lenses and periscope system. Andrew Jackson's direct VFX interview documents 429 shots, a 260-person team, 6.1K work and film-out review, full-size and miniature aircraft, practical crashes and explosions, crowd cut-outs plus simulation, LiDAR/photogrammetry, hydraulic sinking-ship elements and targeted CG/compositing. Lee Smith's direct interview records an initially near-silent assembly, early Richard King collaboration, weekly whole-film review, format tracking and deliberate treatment of sound bridges before and after timeline convergence. Mix's Richard King interview documents pre-shoot recording of Spitfires, period diesel boats, guns and surf for a character-bound sound field. BAFTA's Nolan transcript establishes Shepard-tone narrative logic and close integration of thousands of score/effects components. The verification therefore does not claim an exact uncontested IMAX percentage, no CGI, all-available-light photography, a digital-intermediate source master, untouched archival Stuka sound, literal eyewitness protagonists, or that photochemical capture makes the fiction documentary truth.",
  sources: [
    {
      title: "WWII on a Grand Scale",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/craft/dgaq/issues/1703-summer-2017/wwii-dunkirk",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct Nolan interview supporting the pre-script mathematical structure, fictional rather than literal eyewitness characters, land/sea/air geography and time frames, primarily nonverbal ensemble, bounded Rylance improvisations, large-format production, suspense editing and year-long rhythm/score work."
    },
    {
      title: "Kodak large format film enables IMAX and 65mm capture on Christopher Nolan's Dunkirk",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/dunkirk-imax/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct van Hoytema production record supporting the 75-day multi-location shoot, around 6,000 extras, estimated 75-percent IMAX share, 15-perf/5-perf allocation, VISION3 250D/500T, handheld and underwater practice, constructed crowd elements, FotoKem processing, Dan Muscarella timing and analog/digital deliverables."
    },
    {
      title: "Watch Dunkirk Discussion with Hoyte van Hoytema, ASC, FSF, NSC",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/article/dunkirk-discussion-with-hoyte-van-hoytema-asc-fsf-nsc/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "ASC's direct van Hoytema/Dan Sasaki discussion supporting the approximately 70-percent IMAX estimate, 5-perf dialogue/noise decision, reactive handheld method, water/tide/interior constraints, custom optics, periscope system, photochemical grade and multiple aspect-ratio releases."
    },
    {
      title: "DUNKIRK: Andrew Jackson – Overall VFX Supervisor – Double Negative",
      publisher: "The Art of VFX",
      url: "https://www.artofvfx.com/dunkirk-andrew-jackson-overall-vfx-supervisor-double-negative/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Jackson interview supporting the photographed-element-first VFX method, 429-shot/260-person/6.1K scope, large-format film-out review, aerial platforms and previs, full-size and miniature planes, crowd fences/simulation, LiDAR/photogrammetry, hydraulic ship sections, practical explosions and bounded CG/compositing work."
    },
    {
      title: "Art of the Cut with Lee Smith, ACE on Dunkirk",
      publisher: "ProVideo Coalition",
      url: "https://www.provideocoalition.com/art-cut-oscar-nominated-editor-lee-smith-ace-dunkirk/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Smith interview supporting the ticking structure, near-silent first assembly, early sound-editor handoff, no conventional temp-score dependency, weekly full-film review, format tracking, chronology cards, timeline-dependent sound bridges and repeated score/effects rebuilding."
    },
    {
      title: "You Are There: The Realism of Dunkirk",
      publisher: "Mix",
      url: "https://www.mixonline.com/sfp/you-are-there-430474",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Richard King interview supporting character-perspective sound, preproduction recording, Spitfire access and microphone placement, searches for period diesel boats, anti-aircraft-gun sessions and extensive surf recording."
    },
    {
      title: "A Life in Pictures: Christopher Nolan",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/a-life-in-pictures-christopher-nolan/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct Nolan transcript supporting Shepard-tone narrative construction, score reinforcement, music/effects integration across thousands of component tracks, custom aircraft-camera engineering and the modified Yak solution for photographed actor cockpit material."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
