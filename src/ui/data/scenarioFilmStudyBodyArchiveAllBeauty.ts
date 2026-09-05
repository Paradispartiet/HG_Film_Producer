import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const allTheBeautyAndTheBloodshedFilmHistoryProfile = {
  scenarioId: "scenario_all_the_beauty_and_the_bloodshed_2022",
  period: "2022 US documentary cinema: Nan Goldin archive and P.A.I.N. activism, audio-only testimony, chaptered editorial convergence and Venice-to-release version divergence",
  traditions: ["political documentary", "artist portrait", "archive documentary", "activist cinema", "first-person testimony", "contemporary American nonfiction"],
  before: "Nan Goldin and P.A.I.N. had already begun filming activist actions before Laura Poitras joined the project. Goldin's photographs and slideshows, pre-existing activist footage, later camera work and recorded testimony therefore enter the film through distinct source histories rather than one homogeneous acquisition stream.",
  moment: "Poitras describes abandoning a planned camera-and-lighting master-interview setup after an audio-only conversation with Goldin produced an intimacy she did not want extra crew or equipment to disturb. Those audio interviews continued for roughly a year and a half. Poitras also describes editorial work with Amy Foote and Joe Bini around themes, chapters and a convergence of past and present; Praxis credits Foote, Bini and Brian A. Kates as editors and Goldin for photography and slideshows.",
  after: "Venice records the 2022 competition film at 117 minutes and the Golden Lion establishes reception history. BBFC later records a 121m53s 2023 VOD/streaming version, while Praxis lists a 122-minute running time. These are preserved as distinct version records; the evidence does not establish their exact shot-by-shot lineage or complete mastering pipeline.",
  historyQuestion: "How did All the Beauty and the Bloodshed turn a collaborator's photography, activist footage and intimate audio testimony into a chaptered political documentary while keeping authorship, evidence provenance and release versions distinct?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Venice fixes the film in the 2022 competition and records the Golden Lion; BBFC separately records a later 2023 release version." },
    { area: "movement_and_tradition", status: "mapped", note: "The film intersects political documentary, artist portrait, archive film and activist cinema without reducing its hybrid method to a single tradition." },
    { area: "industry_and_production_context", status: "source_verified", note: "Venice and Praxis identify Participant/Praxis production context and Praxis records association with HBO Documentary and NEON; total budget and financing shares remain unresolved." },
    { area: "reception_and_legacy", status: "source_verified", note: "La Biennale records the 2022 Golden Lion for Best Film; the prize is used as reception evidence, not as workflow evidence." },
    { area: "screenplay", status: "mapped", note: "Poitras directly describes themes, chapters and convergence of past and present; no unsupported conventional screenplay process is claimed." },
    { area: "directing", status: "source_verified", note: "Poitras's direct interview documents the decision to preserve Goldin's audio-only intimacy and the collaborative handling of pre-existing P.A.I.N. material." },
    { area: "performance", status: "not_central", note: "The case is nonfiction; Goldin's recorded testimony and activist presence are treated as documentary participation rather than fictional performance technique." },
    { area: "production_design", status: "not_central", note: "No complete production-design system is established by the locked sources, so environments are not reverse-engineered from the finished film." },
    { area: "costume_makeup", status: "not_central", note: "No complete costume or makeup workflow is established and none is inferred." },
    { area: "cinematography", status: "source_verified", note: "Praxis credits camera contributors including Clare Carter, Sean Vegezzi, Alex Wolf Lewis and Laura Poitras; camera bodies, lenses, codecs, media and full lighting package remain unresolved." },
    { area: "lighting", status: "mapped", note: "Poitras says camera crew and lighting existed in an early interview budget but were not scheduled for the master interview; that abandoned plan is not converted into a photographed lighting package." },
    { area: "camera_format", status: "research_pending", note: "The locked evidence does not establish a complete camera-format, lens, codec or acquisition-media inventory." },
    { area: "editing", status: "source_verified", note: "Praxis credits Amy Foote, Joe Bini and Brian A. Kates; Poitras directly describes editorial themes/chapters and past-present convergence. Edit hardware, software and finishing infrastructure remain unresolved." },
    { area: "sound_design", status: "source_verified", note: "Goldin's audio-only interviews became a structural backbone over roughly a year and a half; the complete production-sound and post-sound chain remains unresolved." },
    { area: "music", status: "source_verified", note: "Praxis credits Soundwalk Collective and music supervisor Dawn Sutter Madell; music remains distinct from testimony and archival sound." },
    { area: "effects_animation", status: "not_central", note: "No complete practical-effects, graphics or VFX census is established and none is inferred from the finished film." },
    { area: "documentary_method", status: "source_verified", note: "Goldin/P.A.I.N. footage, Goldin photography/slideshows, audio testimony, archive curation and chaptered past/present construction are directly documented parts of the nonfiction method." }
  ]
} as const satisfies FilmHistoryProfile;
