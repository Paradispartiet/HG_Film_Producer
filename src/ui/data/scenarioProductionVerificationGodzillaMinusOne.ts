import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const godzillaMinusOneProductionCaseVerification = {
  scenarioId: "scenario_godzilla_minus_one_2023",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Godzilla Minus One is verified as Chapter 19's regional/global Japanese VFX-production case through Toho and Academy institutional records, Sony camera-department testimony, direct Takashi Yamazaki interviews, Shirogumi/Autodesk technical testimony and specialist sound reporting. Toho establishes the 2023 feature, 125-minute runtime and Yamazaki as director, screenwriter and VFX lead. Yamazaki directly states that the budget was below $15 million while describing that scale as comparatively high for Japanese production; no exact final negative cost is promoted. VFX Voice documents Shirogumi as sole VFX vendor, 610 VFX cuts covering roughly two thirds of the film, a 35-person VFX team and roughly eight months of full post-VFX production, while clearly separating pre-shoot modelling/design work. Yamazaki storyboarded VFX-dependent material, built simple-CG previs before photography when needed and used postvis after photography for full-CG editorial timing. The same source documents no motion capture for Godzilla, extensive walk/posture development, limited practical street construction extended digitally, real ocean photography and more than one petabyte of effects data under constrained storage. Autodesk's Shirogumi case study independently supports the 35-person VFX unit, same-floor review culture and ZBrush/Mudbox/Maya/Houdini modelling pipeline. Sony documents Kōzō Shibasaki's A-camera VENICE 2 6K, B-camera VENICE, marine drone work, Zeiss Supreme Primes 21-200mm, Angénieux EZ marine zoom, X-OCN XT, 6K 1.85 dramatic acquisition, 3:2 composite plates, 2K CinemaScope finishing and location-handling rationale. SideFX documents Shirogumi's Houdini destruction/water work. PHILE WEB documents Natsuko Inoue's sound-effects work and the Atmos-specific rebalance requested by Yamazaki. The Academy records the Visual Effects win for Yamazaki, Kiyoko Shibuya, Masaki Takahashi and Tatsuji Nojima. Locked sources do not establish the exact final budget, financing waterfall, exact VFX spend, full crew count, every software package per shot, render-hardware inventory, complete server/storage topology, complete camera metadata per setup, complete sound recording/Foley inventory, mix stems/mastering values or distribution recoupment; these remain unresolved.",
  sources: [
    {
      title: "映画『ゴジラ-1.0』公式サイト",
      publisher: "Toho",
      url: "https://godzilla-minuszero.toho-movie.jp/minusone/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Official Toho production record establishing the 2023 film and Yamazaki's director/screenplay/VFX roles. Toho home-media materials establish the 125-minute feature runtime."
    },
    {
      title: "Godzilla Minus One Director Takashi Yamazaki on Its Striking Connection to Oppenheimer",
      publisher: "MovieMaker",
      url: "https://www.moviemaker.com/godzilla-minus-one-takashi-yamazaki-oppenheimer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Yamazaki testimony supporting the below-$15-million budget boundary and the small practical-set/CG-extension strategy, including the stationary boat-set performance solution."
    },
    {
      title: "Godzilla Minus One Gains Global Recognition",
      publisher: "VFX Voice",
      url: "https://vfxvoice.com/godzilla-minus-one-gains-global-recognition/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Extensive Yamazaki VFX interview supporting role concentration, storyboards, previs/postvis, sole-vendor Shirogumi, 610 VFX cuts, 35-person VFX team, eight-month post, 1947 reconstruction, no mocap, ocean photography and petabyte-scale data pressure."
    },
    {
      title: "Godzilla -1.0を制作したジェネラリスト集団 白組に25の質問",
      publisher: "Autodesk AREA JAPAN",
      url: "https://area.autodesk.jp/case/movie_tv/godzilla-minus-one/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Shirogumi artist testimony supporting the 35-person VFX unit, same-floor collaborative review and use of ZBrush, Mudbox, Maya and Houdini in creature/effects work."
    },
    {
      title: "Behind the scenes – creating Godzilla Minus One",
      publisher: "Sony Professional",
      url: "https://pro.sony/en_ME/cinematography/cinematography-stories/bts-godzilla-minus-one",
      sourceKind: "trade_feature",
      supports: ["cinematography", "overall"],
      note: "Direct cinematographer/camera-department testimony supporting VENICE 2 6K + VENICE two-camera capture, location handling, internal ND, lens package, X-OCN XT, aspect/capture formats and marine drone photography."
    },
    {
      title: "Godzilla Minus One | Shirogumi",
      publisher: "SideFX",
      url: "https://www.sidefx.com/learn/talks/godzilla-minus-one-shirogumi/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Shirogumi VFX-artist presentation supporting procedural Houdini destruction and water-simulation work and the compact collaborative effects pipeline."
    },
    {
      title: "ZOZOマリンでゴジラが咆哮？ 実在感を突き詰めた『ゴジラ-1.0』、ドルビーアトモス音響制作の裏側を訊く",
      publisher: "PHILE WEB",
      url: "https://www.phileweb.com/news/d-av/202310/31/59219.html",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall"],
      note: "Sound-effects designer Natsuko Inoue and Yamazaki interview supporting an Atmos-specific immersive rebalance rather than simply preserving the earlier 7.1 spatial balance."
    },
    {
      title: "The 96th Academy Awards | 2024",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2024",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional record establishing the Visual Effects Oscar for Takashi Yamazaki, Kiyoko Shibuya, Masaki Takahashi and Tatsuji Nojima; used as recognition evidence, not workflow evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
