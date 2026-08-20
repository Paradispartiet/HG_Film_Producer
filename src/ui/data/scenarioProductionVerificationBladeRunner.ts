import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const bladeRunnerProductionCaseVerification = {
  scenarioId: "scenario_blade_runner_1982",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Blade Runner is verified as a 1982 Ladd Company / Sir Run Run Shaw production distributed by Warner Bros. using AFI for adaptation/development history, companies, credited departments, Burbank/Los Angeles production geography, physical presentation and later version history, and contemporary American Cinematographer reporting for scene-grounded cinematography, production-design and photographic-effects practice. AFI identifies Philip K. Dick's Do Androids Dream of Electric Sheep? as the literary source; Hampton Fancher and David Peoples as credited screenwriters; Michael Deeley as producer; Ridley Scott as director; Jordan Cronenweth as director of photography; Lawrence G. Paull as production designer; Syd Mead as visual futurist; Terry Rawlings as supervising editor; Marsha Nakashima as editor; Charles Knode and Michael Kaplan as costume designers; Bud Alper as sound mixer; Vangelis as composer/arranger/performer/producer; and Douglas Trumbull, Richard Yuricich and David Dryer as special photographic effects supervisors. AFI records The Burbank Studios and Los Angeles production, including the redressed backlot street, Bradbury Building and Ennis House, and preserves conflicting contemporary $22 million and $30 million budget reports rather than resolving them into one false certainty. AFI also records Panavision, Technicolor, Dolby Stereo in selected theaters and multiple 114/117/124-minute versions, while its history separates the 1982 theatrical release from the 1992 director's-cut release and the 2007 Final Cut. American Cinematographer's July 1982 photography article records Cronenweth's high-contrast noir strategy, backlight, shafts of light, smoke, rain, neon practicals, reflective uplight, low-contrast filtration, the replicant eye-light setup, Tyrell-office front projection, Ice Room conditions and Spinner cockpit lighting. Its production-design article documents Paull and Mead's retrofit/accretion industrial-design logic and explicitly frames the city as a constructed story world rather than a realistic forecast. David Dryer's effects article documents EEG's crew of over 50, more than 90 effects shots made, miniature photography over roughly ten months, 65mm effects photography, motion-control passes, matte painting, optical compositing, front projection, smoke-room atmosphere and interactive lighting. The case therefore keeps 35mm live-action presentation and 65mm effects-element work distinct, avoids unsupported universal film-stock/lens/exposure claims, does not invent principal-photography dates absent from these sources, and keeps later cuts, awards and home-video canonization downstream from the original production.",
  sources: [
    {
      title: "Blade Runner",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/68260-BLADE-RUNNER",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies the literary/adaptation history, production companies and credits, Burbank/Los Angeles locations, Panavision/Technicolor/Dolby presentation record, multiple runtime records, conflicting contemporary budget figures and later cut/reissue history."
    },
    {
      title: "Blade Runner: Cronenweth's Photography",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/blade-runner-cronenweths-photography/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary July 1982 production reporting documents Jordan Cronenweth's high-contrast future-noir lighting, backlight, smoke, rain, neon practicals, moving shafts, reflective uplight, replicant eye-light technique, set-specific lighting and live-action/effects coordination."
    },
    {
      title: "Discussing the Set Design of Blade Runner",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/blade-runner-set-design/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary production-design reporting records Ridley Scott, Lawrence G. Paull and Syd Mead's retrofit/accretion city logic, industrial-design method, vehicle and street systems and Tyrell corporate architecture while explicitly treating the future as designed fiction rather than prediction."
    },
    {
      title: "Blade Runner: Special Photographic Effects",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/blade-runner-photographic-effects/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Effects supervisor David Dryer documents EEG's over-50-person team, more than 90 effects shots made, roughly ten months of miniature photography, 65mm effects work, motion control, matte painting, optical compositing, front projection, smoke-room atmosphere and interactive lighting."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
