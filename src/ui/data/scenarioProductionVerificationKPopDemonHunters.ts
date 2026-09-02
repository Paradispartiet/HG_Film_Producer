import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const kPopDemonHuntersProductionCaseVerification = {
  scenarioId: "scenario_kpop_demon_hunters_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "KPop Demon Hunters is verified as Chapter 19's next award-priority animated production case through the Academy, BBFC, Sony Group / Sony Pictures Animation / Sony Pictures Imageworks and direct Netflix/craft interviews. The Academy records 2026 wins for Animated Feature and Original Song (Golden); awards support priority/reception rather than workflow. BBFC records the original Netflix VOD version at 99m37s and separately records 95m29s cinema sing-along, 100-minute sing-along VOD and later 96-minute home/VOD versions, so the playable record rounds to 100 minutes while preserving version provenance. Sony's direct technology account documents the SPA/Imageworks collaboration, a custom Chibi Face facial-expression system, Motion-Blur Spheres for localized blur, hand-keyed animation instead of full motion capture, and Unreal Engine integrated into pre-production and Rough Layout for interactive lighting, choreography, lens/camera and scale decisions. The same account bounds Unreal to visualization/layout evidence rather than establishing it as the final renderer. Production designer Mingjue Helen Chen, animation director Josh Beveridge and character designers document K-drama-inspired soft lighting, tertiary color systems, Korean design references, roughly 200-300 costume drawings and 23 costume changes for Rumi. Netflix music interviews document years of globally distributed collaboration, weekly meetings spanning Korea/New York/Los Angeles/Bangkok and Golden beginning from a seven-page filmmakers' memo that mapped narrative requirements before songwriting. Lead editor Nathan Schauf documents Avid Media Composer storyboard-first editorial, progressive replacement by Layout/Animation/Lighting, multicam organization and AAF handoff to Pro Tools. Music-production reporting documents a five-year making process, seven principal songs and distinct vocal/song/score/edit/mix responsibilities; Marcelo Zarvos describes a six-week score window against stable timing while some animation remained unfinished. Direct sound-design reporting documents rhythm/pitch checks and theatrical/Atmos adaptation of song material. Complete budget/finance, staffing/vendor census, full storyboard/layout/animation/lighting revisions, final renderer/render farm/software stack, every Unreal/Chibi/blur override, full asset/costume inventory, voice sessions, song demos/rights, edit revisions, score/sound/mix and color/delivery ledgers remain unresolved.",
  sources: [
    {
      title: "The 98th Academy Awards | 2026",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2026",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Institutional award record supporting the Animated Feature and Original Song wins; awards establish priority/reception, not production method."
    },
    {
      title: "KPop Demon Hunters",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/kpop-demon-hunters-q29sbgvjdglvbjpwwc0xmdmymtc0",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional version record supporting original Netflix VOD 99m37s, sing-along cinema 95m29s, sing-along VOD 100m and later home/VOD 96m provenance."
    },
    {
      title: "From Spider-Man: Into the Spider-Verse to KPop Demon Hunters: Spotlighting the Evolution of SPA × Imageworks Collaborations",
      publisher: "Sony Group",
      url: "https://www.sony.com/en/SonyInfo/technology/stories/entries/kpop_demon_hunters/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Sony technology/panel record supporting SPA/Imageworks role separation, Chibi Face, Motion-Blur Spheres, hand-keyed animation, no full-mocap default, Unreal Engine Sandbox/Rough Layout and documented Seoul/bathhouse/stadium visualization uses."
    },
    {
      title: "How Colors Tell the Story of KPop Demon Hunters",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/features/kpop-demon-hunters-animators",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct production-designer/animation/character-design interviews supporting tertiary palettes, K-drama soft lighting, Korean visual references, costume-design scale and weapon/iridescence concepts."
    },
    {
      title: "K-Pop Hitmaker Danny Chung on Crafting the Sound of KPop Demon Hunters",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/articles/kpop-demon-hunters-danny-chung",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Direct music-team interview supporting years of cross-continental collaboration, weekly global meetings and the dual narrative/authentic-K-pop requirements."
    },
    {
      title: "How Golden, the Musical Heart of KPop Demon Hunters, Is Living Up to Its Name",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/features/kpop-demon-hunters-golden-oral-history",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing"],
      note: "Direct oral history supporting the seven-page filmmakers' memo and section-by-section story mapping that preceded Golden's songwriting."
    },
    {
      title: "KPop Demon Hunters Edited on Avid - Interview with Editor Nathan Schauf",
      publisher: "PRONEWS",
      url: "https://en.pronews.com/special/20251205120013340.html",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound"],
      note: "Direct lead-editor interview supporting storyboard-first Avid Media Composer editorial, Layout/Animation/Lighting replacement stages, multicam grouping, music synchronization dependencies and AAF-to-Pro-Tools handoff."
    },
    {
      title: "Inside Track: KPop Demon Hunters",
      publisher: "Sound On Sound",
      url: "https://www.soundonsound.com/techniques/inside-track-kpop-demon-hunters",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing"],
      note: "Direct music-production account supporting the five-year making anchor, seven principal songs and the distinct vocal-production, orchestral, music-editing and mixing responsibilities around Ian Eisendrath and Curtis Douglas."
    },
    {
      title: "Inside the Music of Netflix's Oscar-Winning Hit KPop Demon Hunters With Marcelo Zarvos",
      publisher: "What's on Netflix",
      url: "https://www.whats-on-netflix.com/interviews/inside-the-music-of-netflixs-oscar-winning-hit-kpop-demon-hunters-with-marcelo-zarvos/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing"],
      note: "Direct composer interview supporting the six-week score window, scoring against stable timelines while some animation remained incomplete, and selective integration of song themes into score."
    },
    {
      title: "Art of the Cut: KPop Demon Hunters",
      publisher: "Boris FX",
      url: "https://borisfx.com/blog/aotc/art-of-the-cut-kpop-demon-hunters/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound"],
      note: "Direct Nathan Schauf interview supporting music-led editorial rhythm and the evolving edit across animation-production stages."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
