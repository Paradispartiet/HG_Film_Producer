import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const oneBattleAfterAnotherProductionCaseVerification = {
  scenarioId: "scenario_one_battle_after_another_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "One Battle After Another is verified as Chapter 19's next award-priority production case through Academy and BAFTA institutional award records, BBFC classification data, direct craft testimony collected by Kodak, production-design reporting from the Motion Picture Association, editor testimony from UC Santa Barbara and Screen Daily, a direct sound interview in Filmmaker Magazine, and Nonesuch's primary soundtrack production credits. The Academy records the film as the 2026 Best Picture winner and BAFTA records it as the 2026 Best Film winner; those awards establish priority and reception, not production workflow. Kodak's Michael Bauman production account establishes the principal imaging system: horizontal 8-perf 35mm VistaVision in a native 1.50:1 frame, KODAK VISION3 500T 5219, 250D 5207 and 200T 5213 stocks, a restored Beaumont VistaVision A camera owned by Giovanni Ribisi, two additional bodies from Geo Film Group, extensive Panavision engineering for serviceability and handheld/studio/stabilized/aerial operation, a prototype viewfinder, and a special package of more than sixty spherical lenses with modifications and prototype VistaVision-covering primes. Kodak also establishes the critical format boundary: because VistaVision camera noise was unsuitable for some crucial interior dialogue, the production selectively used Super 35 with a Panavision Millennium XL2. The same source documents predominantly location-based photography in Northern and Southern California and El Paso, a mobile/light-footprint approach, mixed color temperatures, practical/neon/fluorescent sources, small hidden fixtures that could adapt to improvisation, and the Borrego Springs/Texas Dip chase with quick magic-hour reloads, a stabilized-head arm-car configuration and an elevator-car rig. Motion Picture Association production-designer testimony establishes scouting beginning in 2022, practical construction across the story's redwood-to-desert geography, selected LA North stage work, the build integrated above a real El Paso location for Sensei Sergio's apartment, Bob's stage/location escape-tunnel system, and substantially practical explosions and car crashes. The Sacramento bank explosion is specifically documented as a permitted physical effect using replacement glass, debris-control furniture and coordination with special-effects supervisor Jeremy Hayes. This does not establish that the feature has no digital effects, and the complete VFX vendor/shot ledger remains unresolved. UC Santa Barbara's interview with editor Andy Jurgensen establishes Anderson's daily screenings of raw footage during production, Jurgensen's frame-level pacing method and iterative rough-cut screening process. Screen Daily further documents the final chase being assembled while photography continued, long-lens road compression, deliberate retention of some camera vibration so the images did not feel artificially locked, large-screen projection during editing to judge motion intensity, early handoff of a longer cut to sound, distinct sonic identities for the vehicles and continued picture/sound/music refinement into the final mix. Filmmaker Magazine identifies Christopher Scarabosio as supervising sound editor and re-recording mixer and provides direct sound-post testimony, but the locked evidence does not establish the complete production microphone/RF plan, ADR/Foley ledger, premix stems or final routing. Nonesuch documents Jonny Greenwood's eighteen original compositions, London Contemporary Orchestra, Hugh Tieppo-Brunt conducting, Greenwood performing piano/guitar/bass/percussion/ondes Martenot, and recording/mixing/mastering credits including Abbey Road and Angel Studios. BBFC classifies the 2D cinema version at 161 minutes 31 seconds while also presenting a separate approximate 155-minute metadata field; the scenario therefore rounds the classified cinema version to 161 minutes and keeps the catalog inconsistency explicit. Current locked sources do not establish a single audited final negative cost, complete financing percentages or recoupment, exact total shooting days, exhaustive crew census, full laboratory/negative-conform chain, complete camera-body allocation, lens-to-shot ledger, complete lighting inventory, all stunt safety documentation, full VFX ledger, complete sound-recording chain, complete editorial software/version history or total release-format economics; those remain unresolved.",
  sources: [
    {
      title: "The 98th Academy Awards | 2026",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2026",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional award record establishing One Battle After Another as the 2026 Best Picture winner; award status establishes historical priority, not production method."
    },
    {
      title: "Winners announced: 2026 EE BAFTA Film Awards",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/winners-announced-2026-film-awards/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional record establishing Best Film plus Director, Adapted Screenplay, Cinematography and Editing wins; these support priority and credited craft recognition, not undocumented workflow."
    },
    {
      title: "How director Paul Thomas Anderson and DP Michael Bauman Re-Imagined 35mm VistaVision for the action-packed 'One Battle After Another'",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/one-battle-after-another/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct DP testimony establishing 8-perf VistaVision, 1.50 framing, three Kodak stocks, Beaumont/Geo Film bodies, Panavision engineering, Millennium XL2 dialogue exceptions, sixty-plus spherical lenses, mobile location lighting and Texas Dip chase camera logistics."
    },
    {
      title: "Building the World, Brick by Brick: Oscar Nominee Florencia Martin on One Battle After Another",
      publisher: "Motion Picture Association - The Credits",
      url: "https://www.motionpictures.org/2026/03/one-battle-after-another-production-designer-florencia-martin-on-building-ptas-three-hour-action-thriller-from-the-ground-up-3/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct production-designer testimony supporting 2022 scouting, practical/location builds, LA North stage boundaries, El Paso construction, the escape tunnel and permitted practical explosions/crashes including the Sacramento bank effect."
    },
    {
      title: "One Battle After Another editor, alum Andy Jurgensen, to discuss the political thriller on campus",
      publisher: "UC Santa Barbara",
      url: "https://news.ucsb.edu/2025/022097/one-battle-after-another-editor-alum-andy-jurgensen-discuss-political-thriller-campus",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Direct editor testimony supporting daily raw-footage screenings during production, frame-by-frame rhythm work, rough-cut feedback and iterative editorial testing."
    },
    {
      title: "How One Battle After Another editor Andy Jurgensen crafted the iconic river of hills car chase",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/interviews/how-one-battle-after-another-editor-crafted-the-iconic-river-of-hills-car-chase/5211078.article",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound", "cinematography"],
      note: "Direct editor testimony supporting chase assembly during photography, long-lens compression, intentional vibration, large-screen motion checks, early sound handoff, vehicle sound identities and picture/sound/music iteration into final mix."
    },
    {
      title: "Revolutionary Sounds: Sound Editor Christopher Scarabosio on One Battle After Another",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/132799-revolutionary-sounds-sound-editor-christopher-scarabosio-on-one-battle-after-another/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Direct supervising-sound-editor/re-recording-mixer testimony establishing Scarabosio's sound authorship and an iterative sound-post process without supplying a complete microphone, ADR/Foley or stem ledger."
    },
    {
      title: "One Battle After Another [Soundtrack]",
      publisher: "Nonesuch Records",
      url: "https://www.nonesuch.com/albums/one-battle-after-another-soundtrack",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Primary soundtrack production record establishing 18 Greenwood compositions, London Contemporary Orchestra, Hugh Tieppo-Brunt, Greenwood's instruments, Abbey Road/Angel recording and named production/mix/mastering roles."
    },
    {
      title: "One Battle After Another",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/one-battle-after-another-q29sbgvjdglvbjpwwc0xmdi5mdix",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional classification record establishing the 2025 production year and a 161m31s 2D cinema version while also exposing a separate approximate 155m metadata field; the discrepancy remains explicit."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
