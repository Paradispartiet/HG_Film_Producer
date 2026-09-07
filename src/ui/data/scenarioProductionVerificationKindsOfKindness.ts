import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const kindsOfKindnessProductionCaseVerification = {
  scenarioId: "scenario_kinds_of_kindness_2024",
  status: "verified",
  verifiedAt: "2026-09-07",
  summary: "Kinds of Kindness is verified as a genuinely new Chapter 19 source-first Production Case after exact-main branch/PR checks and tree-wide canonical checks establish no pre-existing scenario, Film Study or Production Verification identity on the locked 610/610 baseline. Festival de Cannes records the 2024 Competition film, Yorgos Lanthimos direction, a 165-minute runtime, United States/United Kingdom country record, principal screenplay/craft credits and Jesse Plemons' Best Actor award. Searchlight's Cannes-hosted production notes independently establish the Element Pictures production in association with Film4 and TSG Entertainment; producers Ed Guiney, Andrew Lowe, Lanthimos and Kasia Malipan; screenplay by Lanthimos and Efthimis Filippou; Robbie Ryan as cinematographer; Anthony Gasparro as production designer; Jennifer Johnson, Jessica Needham and Jennifer Serio across costume, makeup and hair; Yorgos Mavropsaridis as editor; Jerskin Fendrix as composer; the evolution from one story into a three-part anthology; repeated casting of the core ensemble in different roles; New Orleans as a deliberately anonymous location-led American city; and a simpler production strategy using found locations and comparatively limited lighting after Poor Things. Those production notes list 164 minutes, so the one-minute discrepancy against Cannes' 165-minute record is preserved rather than silently normalized. The notes also establish a widescreen anamorphic reset, film capture, black-and-white dream material and Fendrix's pre-picture composing process from the script and Lanthimos' black-and-white set photographs, with piano and choir as the initial musical direction. Kodak's direct cinematographer interview with Ryan supplies the bounded camera/post pipeline: predominantly single-camera ARRICAM ST 35mm anamorphic photography; Panavision Primo Anamorphic lenses with selected Panavision C-Series, Atlas Orion 21mm and Cooke 25mm anamorphic supplements; a four-camera car-crash exception using two ARRICAM ST bodies, one ARRICAM LT and one ARRIFLEX 235; KODAK VISION3 50D 5203, 250D 5207 and 500T 5219 color negative plus EASTMAN DOUBLE-X 5222 for dream sequences; FotoKem Los Angeles processing and 4K scans; Greg Fisher at Company3 London for the final grade; later 35mm prints at Cinelab UK; natural daylight and practicals as the default lighting basis with a small 6K/9K HMI and Rosco DMG package; and Peter Zuccarini for underwater photography. The locked sources do not establish total budget, financing percentages, insurance, exact shooting dates, a complete location/call-sheet inventory, exposure/shutter/filtration, a complete lighting/power-distribution record, production sound hardware, ADR/Foley/final-mix topology, editorial software/storage/proxy/conform, complete score recording and clearance records, VFX shot counts, stunt-safety paperwork, underwater camera/housing details, delivery codec, numeric theatrical aspect ratio or final sound format; those details remain unresolved rather than inferred.",
  sources: [
    {
      title: "KINDS OF KINDNESS",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/kinds-of-kindness/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting the 2024 Competition entry, 165-minute runtime, United States/United Kingdom country record and principal direction, screenplay, cinematography, production-design, editing, music and sound credits."
    },
    {
      title: "The 77th Festival de Cannes winners' list",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/the-77th-festival-de-cannes-winners-list/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official award record supporting Jesse Plemons' Best Actor award for Kinds of Kindness; the award is used only as a corrective-selection obligation."
    },
    {
      title: "Kinds of Kindness Production Notes",
      publisher: "Searchlight Pictures / Festival de Cannes",
      url: "https://cdn.festival-cannes.com/media/uploads/2024/05/174220.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Studio production notes supporting the production/producers and principal craft chain, one-story-to-triptych development, recurring-ensemble strategy, New Orleans location-first production, widescreen anamorphic/film and black-and-white dream approach, and Jerskin Fendrix's script/set-photo-led piano-and-choir score development. The notes list 164 minutes, which is retained as a source discrepancy against Cannes' 165-minute record."
    },
    {
      title: "Robbie Ryan BSC ISC / Kinds of Kindness",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/kinds-of-kindness/",
      sourceKind: "manufacturer_case_study",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer case study supporting the predominantly single-camera ARRICAM ST 35mm anamorphic approach, Panavision Primo/C-Series plus selected Atlas/Cooke lenses, four-camera crash exception, VISION3 50D/250D/500T and DOUBLE-X 5222 stocks, FotoKem processing/4K scans, Company3 London grade, Cinelab UK prints, small daylight/practical-led lighting package and Peter Zuccarini's underwater photography."
    },
    {
      title: "Kinds of Kindness",
      publisher: "Searchlight Pictures",
      url: "https://press.searchlightpictures.com/kinds-of-kindness",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Official studio press record independently supporting Yorgos Lanthimos' direction, the Lanthimos/Efthimis Filippou screenplay, producers Ed Guiney, Andrew Lowe, Lanthimos and Kasia Malipan, and the principal cast."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
