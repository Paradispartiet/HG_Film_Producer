import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const wolfwalkersProductionCaseVerification = {
  scenarioId: "scenario_wolfwalkers_2020",
  status: "verified",
  verifiedAt: "2026-08-28",
  summary: "Wolfwalkers is verified as the third Chapter 19 Production Case: a predominantly hand-drawn 2D European feature whose ordered Kilkenny, freer forest language and exceptional Wolfvision passages use different but coordinated production systems. BFI anchors Tomm Moore and Ross Stewart as directors, Will Collins as writer, Paul Young/Nora Twomey/Tomm Moore/Stéphan Roelants as producers and a 103-minute runtime, while Apple records a December 11, 2020 release and Cartoon Saloon plus Melusine Productions as production companies. BFI labels its catalogue record 2019; the canonical scenario retains the Chapter 19 matrix's 2020 release-year convention rather than erasing the catalogue discrepancy. Moore's development testimony documents hand-drawn animation as an expressive story system: block-print-like Kilkenny/authority spaces contrast with looser forest ink, watercolor and pencil, and line quality changes with emotion. Cartoon Brew's Annecy work-in-progress record documents 3D software enabling dynamic Wolfvision camera movement new to the studio. Blender's interview with Eimhin McNamara provides the strongest technical boundary: Wolfvision used 3D previs, VR blocking, Blender camera control/cleanup, Grease Pencil and 2D assets, then printed guide linework, hand graphite/pencil rendering, scanning and compositing so the digital spatial scaffold did not dictate a conventional CG final image. Moore and Stewart describe Wolfvision as roughly three minutes and exceptionally labor intensive, including a cited 12fps hand-drawn result for that subsystem. Their nearly-three-year description and McNamara's separate 22-month full-production/18-month involvement account are retained as differently scoped testimony rather than forced into one exact schedule. Story artist Iker Maidagan's account supports a proper story-team change and five animatics over about a year and a half. Exact final budget, financing percentages, country-level spend, full crew census, whole-film software/version inventory, total drawing/shot counts, paper and graphite specifications, scanner/composite parameters, full frame-rate map, edit system, sound chain, score stems and final mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "WolfWalkers (2019)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/b5f20c84-ff7c-5dff-bdea-942e6cb89999/wolfwalkers",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional catalogue record supporting Tomm Moore and Ross Stewart as directors, Will Collins as writer, the listed producers, countries and 103-minute runtime. Its 2019 catalogue label is preserved rather than silently rewritten to the Chapter 19 release-year convention."
    },
    {
      title: "Wolfwalkers",
      publisher: "Apple TV Press",
      url: "https://www.apple.com/tv-pr/originals/wolfwalkers/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official distribution record supporting the December 11, 2020 release, Cartoon Saloon and Melusine Productions as production companies, and Moore/Stewart/Young/Collins credits. The platform record is not treated as proof of production financing shares or creative control."
    },
    {
      title: "A First Look at 'Wolfwalkers,' Tomm Moore's New Feature (Trailer Exclusive)",
      publisher: "Cartoon Brew",
      url: "https://www.cartoonbrew.com/feature-film/first-look-wolfwalkers-tomm-moores-new-feature-trailer-exclusive-149399.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Moore's development account supports the commitment to hand-drawn animation, expressive linework, the block-print-versus-forest graphic split, wolf-point-of-view charcoal/color concepts, local Kilkenny research and script/visual-development interaction."
    },
    {
      title: "Director Tomm Moore Reveals New Details About 'Wolfwalkers,' Coming to Apple TV+ (Annecy WIP)",
      publisher: "Cartoon Brew",
      url: "https://www.cartoonbrew.com/feature-film/director-tomm-moore-reveals-new-details-about-wolfwalkers-coming-to-apple-tv-annecy-wip-193335.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Annecy work-in-progress reporting supports the non-linear perspective, Wolfvision's subjective gaze and use of 3D software for dynamic camera/z-axis movement new to the studio, while also identifying the production partnership around Cartoon Saloon, Melusine and Folivari."
    },
    {
      title: "2D Isn't Dead, It Just Became Something Different: Using Blender For Wolfwalkers",
      publisher: "Blender",
      url: "https://www.blender.org/user-stories/2d-isnt-dead-it-just-became-something-different-using-blender-for-wolfwalkers/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Interview with Eimhin McNamara documenting Wolfvision's 3D previs, VR blocking, Blender camera/control/cleanup work, Grease Pencil and 2D assets, print-to-paper graphite workflow, scanning/compositing, and his separately scoped 22-month full-production / 18-month involvement account."
    },
    {
      title: "Tomm Moore and Ross Stewart Talk 'Wolfwalkers'",
      publisher: "Animation World Network",
      url: "https://www.awn.com/animationworld/tomm-moore-and-ross-stewart-talk-wolfwalkers",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Director interview supporting Wolfvision as roughly three minutes, an unusually labor-intensive process spanning their described production timeline, CG/VR mapping followed by paper charcoal/pencil rendering, and the 12fps description bounded specifically to the Wolfvision result."
    },
    {
      title: "'Wolfwalkers' Story Artist Iker Maidagan Has Written A Priceless Account Of The Film's Development",
      publisher: "Cartoon Brew",
      url: "https://www.cartoonbrew.com/educational/wolfwalkers-story-artist-iker-maidagan-has-written-a-priceless-account-of-the-films-development-203223.html",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Reporting on Maidagan's first-person development account supports Cartoon Saloon's first proper story-team organization for the film and five animatics across about a year and a half; it is used as title-specific testimony rather than a universal studio-process rule."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
