import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const guillermoDelTorosPinocchioProductionCaseVerification = {
  scenarioId: "scenario_guillermo_del_toros_pinocchio_2022",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "Guillermo del Toro's Pinocchio is verified as Chapter 19's next award-priority stop-motion case through the Academy and BBFC, first-party Netflix production records, museum/archive material and direct craft interviews. The Academy records Guillermo del Toro, Mark Gustafson, Gary Ungar and Alex Bulkley as the 2023 Animated Feature Film winners. BBFC records a 116m36s 2D cinema version and a later 117m44s home/VOD version, so the playable runtime is rounded to 117 minutes while version variance is preserved. Netflix records 940 capture days, more than 60 concurrent shooting/preparation units and 32 Pinocchio puppets; animation supervisor Brian Leif Hansen independently describes a January 2019 production start, first frame in August 2019, last frame in August 2022, peak 41 animators on 60 sets and source-specific puppet counts of about 30 Pinocchios, 18 Geppettos and seven Volpes. Puppet fabrication records document distributed teams in Portland, Manchester and Guadalajara, mechanical facial systems for most human characters, a replacement-face strategy for Pinocchio to preserve wood grain, a live puppet-hospital maintenance system and extensive metal 3D printing in Pinocchio's articulated armature. Frank Passingham documents Canon 5D Mark IV photography, Nikon/Zeiss/LAOWA lenses, tungsten direct/key and LED bounce/indirect lighting, motion control, repeated layered-lighting passes and physical-stage/VFX coordination. Editors Ken Schretzmann and Holly Klein document an Avid workflow moving from storyboard through camera tests, animator live-action reference, rehearsals, final animation and VFX, including pandemic-era remote editorial. Scott Martin Gershin documents a material sound identity for Pinocchio and a mix arc from mono toward full Atmos. MoMA's production archive records Alexandre Desplat's wood/material-centered instrumental strategy. Locked sources do not establish one audited final budget or financing waterfall, a reconciled all-source puppet census, complete set/crew/stage logs, every camera/lens/Dragonframe/motion-control setting, every lighting/VFX pass, complete DI/color pipeline, every edit revision, full dialogue/ADR/Foley/Atmos stem/master ledger, complete score-session ledger, dubbing ledgers or distribution/recoupment accounting; those remain unresolved.",
  sources: [
    {
      title: "The 95th Academy Awards | 2023",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2023/A--E",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional award record supporting the Animated Feature Film win and credited recipients; award status supports selection/reception, not production method."
    },
    {
      title: "Guillermo Del Toro's Pinocchio",
      publisher: "BBFC",
      url: "https://www.bbfc.co.uk/release/guillermo-del-toros-pinocchio-q29sbgvjdglvbjpwwc0xmda4ntyx",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional version record supporting the 116m36s cinema/2022 streaming classification and later 117m44s home/VOD version."
    },
    {
      title: "Inside the Stop-Motion Magic of Guillermo del Toro's Pinocchio",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/articles/pinocchio-stop-motion-behind-the-scenes",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "First-party production oral history supporting handcrafted sets, the 'perfectly imperfect' design principle, 32 Pinocchio puppets, puppet-hospital adaptation and fabrication roles."
    },
    {
      title: "Here's Why Pinocchio Took More Than Two Years to Film",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/articles/how-long-to-make-pinocchio-guillermo-del-toro",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct del Toro testimony supporting 940 capture days, more than 60 concurrent units and the artisanal/non-CG-character emphasis."
    },
    {
      title: "Best of 2022: Guillermo del Toro's Pinocchio Animation Supervisor Brian Leif Hansen Packs Puppets With Emotion",
      publisher: "Motion Picture Association / The Credits",
      url: "https://www.motionpictures.org/2022/12/guillermo-del-toros-pinocchio-animation-supervisor-brian-leif-hansen-packs-puppets-with-emotion-2/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "cinematography"],
      note: "Direct animation-supervisor testimony supporting January 2019 ramp-up, August 2019 first frame, August 2022 last frame, 41 animators/60 sets and source-specific duplicate-puppet counts."
    },
    {
      title: "Guillermo del Toro's Pinocchio crew members. 2022",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/audio/playlist/327/4316",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Museum/Netflix production archive supporting three geographically separated puppet teams, pandemic fabrication context and cross-department collaboration."
    },
    {
      title: "Guillermo Del Toro's Pinocchio",
      publisher: "Mackinnon & Saunders",
      url: "https://www.mackinnonandsaunders.com/portfolio/guillermo-del-toros-pinocchio",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official puppet-studio record supporting Mackinnon & Saunders' approximately fifteen-year involvement in project development and the production partnership."
    },
    {
      title: "Frank Passingham / Guillermo del Toro's Pinocchio",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/frank-passingham-guillermo-del-toros-pinocchio/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct cinematographer account supporting Canon 5D Mark IV, Nikon/Zeiss/LAOWA lenses, tungsten-key/LED-bounce policy, layered lighting, motion control, green/printed backgrounds and multi-pass VFX integration."
    },
    {
      title: "Guillermo del Toro's Pinocchio",
      publisher: "Boris FX / Art of the Cut",
      url: "https://borisfx.com/blog/aotc/holly-klein-discuss-editing-the-stop-motion-animated-guillermo-del-toros-pinocchio/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "cinematography"],
      note: "Direct editor interview supporting the Avid storyboard-to-final-VFX map, camera-move retiming, animator live-action reference, 40-60 simultaneous stages and pandemic remote editorial."
    },
    {
      title: "Perfecting Pinocchio's Distinct Sound for Director Del Toro – with Scott Gershin",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/pinocchio-del-toro-film-sound/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct sound-supervisor interview supporting Pinocchio's material sound identity, selective sound design, supernatural voice treatment and the mono-to-Atmos spatial arc."
    },
    {
      title: "Alexandre Desplat. Score for Guillermo del Toro's Pinocchio. 2022",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/audio/playlist/327/4320",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Museum/Netflix archive with direct Desplat and music-supervisor testimony supporting the material instrument palette and character-focused musical moments."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
