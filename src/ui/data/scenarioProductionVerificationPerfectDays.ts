import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const perfectDaysProductionCaseVerification = {
  scenarioId: "scenario_perfect_days_2023",
  status: "verified",
  verifiedAt: "2026-09-07",
  summary: "Perfect Days is verified as a genuinely new source-first Chapter 19 Production Case only after exact-main branch/PR/seed checks and tree-wide diagnostic run 34089452489 found no pre-existing canonical scenario, Film Study or Production Verification identity under the title or plausible scenario IDs. Festival de Cannes records the 2023 Japanese Competition feature, 123-minute catalogue duration, Wim Wenders direction, Wenders and Takuma Takasaki screenplay, Franz Lustig cinematography, Towako Kuwajima production design, Toni Froschhammer editing, Matthias Lempert/Rin Takada/Frank Kruse sound credits and Koji Yakusho's Best Actor award. Filmportal separately records a sixteen-day Tokyo shoot in October 2022, keeping physical production chronology distinct from the 2023 production/release record. Wenders' direct interviews describe a fast, low-preparation fiction workflow in which Lustig photographed the film from his shoulder without tripod, tracks, dolly or gimbal and the team increasingly captured rehearsals as usable performance, explicitly treating the process like documentary observation. Dazed records a full day spent studying incoming light in Hirayama's apartment and how to enhance it. Franz Lustig's own filmography identifies Sony VENICE and Canon K35 primes; it does not identify the exact VENICE generation, sensor mode, Rialto configuration, codec, media or complete focal-length set. The Match Factory records 124 minutes, 1.33:1, DCP and 5.1 and supplies the producer, costume, hair/makeup, location, post, VFX, dream-unit and sound-design credits. Filmportal records 125 minutes, DCP, 1:1.33 and Dolby 5.1. Haut et Court instead publishes 123 minutes and 1.85 while also linking a 4K flat theatrical DCP. These 123/124/125-minute and 1.33/1.85 records are retained as source provenance rather than silently normalized; the evidence does not establish whether the 1.85 distributor entry refers to active image, container or another delivery convention. The locked sources do not establish total budget, exact financing shares, full permit ledger, exact daily call-sheet schedule, camera body count or VENICE version, Rialto use, sensor mode, codec/media, full K35 focal inventory, filtration/exposure, complete lighting/grip package, production-sound recorder/microphone/wireless chain, editorial software/storage/proxy/conform, VFX shot census/techniques/vendor allocation, original DI resolution, color-management transforms, music-licensing workflow, insurance or final mastering lineage, all of which remain unresolved rather than inferred.",
  sources: [
    {
      title: "PERFECT DAYS",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/perfect-days/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting the 2023 Competition entry, Japan, 123-minute catalogue duration, Wenders/Takasaki screenplay, Franz Lustig cinematography, Towako Kuwajima design, Toni Froschhammer editing, Matthias Lempert/Rin Takada/Frank Kruse sound credits and the production contacts for Master Mind Ltd, Spoon Inc and Wenders Images."
    },
    {
      title: "The 76th Festival de Cannes winners' list",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/the-76th-festival-de-cannes-winners-list/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official award record supporting Koji Yakusho's Best Performance by an Actor prize as the 2023 corrective selection obligation."
    },
    {
      title: "Why Wim Wenders Blurred the Lines Between Reality and Fiction in 'Anselm' and 'Perfect Days'",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/wim-wenders-interview-anselm-perfect-days/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Wenders interview supporting the sixteen-day shoot, little preparation, Franz Lustig's shoulder-mounted capture, no tripod/tracks/dolly/gimbal and the explicit documentary-like fiction method. Wenders also places the project after his May 2022 Tokyo scouting trip."
    },
    {
      title: "Wim Wenders on failure, Werner Herzog, and the joy of the public toilet",
      publisher: "Dazed",
      url: "https://www.dazeddigital.com/film-tv/article/62008/1/wim-wenders-perfect-day-public-toilet-interview-2024",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Wenders interview supporting the sixteen-day production constraint and a full preparation day spent with Franz Lustig studying incoming light in Hirayama's apartment and how to enhance it."
    },
    {
      title: "Perfect Days",
      publisher: "Franz Lustig",
      url: "https://franzlustig.com/work/features/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "The cinematographer's official professional filmography identifies Perfect Days, Wim Wenders, Master Mind Ltd, Sony VENICE and Canon K35 primes. It does not identify an exact VENICE generation, codec/media or complete focal-length set."
    },
    {
      title: "Perfect Days",
      publisher: "The Match Factory",
      url: "https://www.the-match-factory.com/catalogue/films/perfect-days.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "International sales/production record supporting 124 minutes, 1.33:1, DCP, 5.1, producer hierarchy, Franz Lustig camera, Toni Froschhammer editing, Towako Kuwajima design, Daisuke Iga costume, Katsuhiko Yuhmi hair/makeup, Ko Takahashi locations, Dominik Bollen post supervision, Kalle Max Hofmann VFX supervision and the dream/sound-unit credits."
    },
    {
      title: "Perfect Days",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/perfect-days_2b0a7a3eab9c4d3dbe31017798dc38c7",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "German institutional film record supporting an October 2022 Tokyo shoot lasting sixteen days, Master Mind/Spoon/Wenders Images production, 125-minute German catalogue duration, DCP, 1:1.33 and Dolby 5.1."
    },
    {
      title: "Perfect Days",
      publisher: "Haut et Court",
      url: "https://www.hautetcourt.com/en/films/perfect-days/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "French distributor technical record listing 123 minutes, 1.85 and 5.1 while separately linking a 4K flat theatrical DCP. This is preserved as a catalogue/delivery discrepancy against the 1.33 Match Factory and Filmportal records rather than interpreted without evidence."
    },
    {
      title: "Perfect Days: Where the Light Comes Through",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/8536-perfect-days-where-the-light-comes-through",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Criterion's production essay supports the Tokyo Toilet short-documentary origin, the fiction-feature reframing, relatively little preparation, handheld cinematography and sixteen-day production."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
