import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const monsterProductionCaseVerification = {
  scenarioId: "scenario_monster_2023",
  status: "verified",
  verifiedAt: "2026-09-06",
  summary: "Monster / Kaibutsu / 怪物 / L'Innocence is verified as a new source-first Chapter 19 Production Case only after exact-main branch/PR checks, assembled-filmScenarios inspection and recursive-tree scanning found no pre-existing 2023 Monster scenario, Film Study or Production Verification identity; the existing A Monster Calls files are explicitly disambiguated as a different film. Festival de Cannes locks the film to the 2023 Competition, Best Screenplay for Yuji Sakamoto, Japan, Cannes production year 2023 and 126 minutes. The official English Cannes press kit adds 2.39:1 and 7.1CH+5.1CH and supplies a detailed production history: producer Genki Kawamura contacted Kore-eda in 2019 after Kawamura and Kenji Yamada began developing Sakamoto's long treatment; the first screenplay draft would have run about three hours; pandemic-delayed development continued until immediately before filming began in early 2022; and Kore-eda made almost no spontaneous dialogue revisions on set, seeking Sakamoto's approval for changes. Physical chronology is therefore bounded to principalPhotographyYear 2022 without canonizing weaker secondary exact-date claims. The Suwa Area Film Commission identifies the Suwa region in Nagano Prefecture as the main shooting location and documents the former Johoku Elementary School, former Sezawa tunnel/railway bridge area, Kamaguchi Water Gate, Tateishi Park, Kamisuwa Station and other locations. The official Japanese Gaga site identifies Toho, Fuji Television Network, Gaga, AOI Pro. and Bun-Buku as the presenting group, with AOI Pro. named for production. Cannes credits Kore-eda as director/editor, Yuji Sakamoto as screenwriter, Ryuto Kondo as cinematographer, Eiji Oshita as lighting, Keiko Mitsumatsu as production designer, Kazuko Kurosawa as costume designer, Ryuichi Sakamoto as composer and Kazuhiko Tomita/Akihiko Okase across its sound records. Kore-eda directly states that Monster was shot digitally; because the locked source does not name a camera body, sensor, codec, resolution or lens family, none is inferred. Direct Kore-eda interviews describe the visual system as perspective-dependent: the first section is restricted to Saori's viewpoint; the first two sections minimize camera movement; the final children's section becomes broader and freer and follows their movement. The Cannes production notes establish a changed child-actor method, with Soya Kurokawa and Hinata Hiiragi reading the screenplay in advance rather than receiving lines verbally on set. They also document the Ryuichi Sakamoto collaboration: Kore-eda listened to Sakamoto's piano music during shooting/editing, sent roughly edited footage, and the final soundtrack combines two new tracks with earlier Sakamoto pieces. Exact shooting dates/days, total budget and financing shares, exact camera/lens/lighting packages, exposure and filtration, media/offload/checksum/storage, production-sound hardware, editorial software/storage/proxy/conform, VFX census/vendors/techniques, insurance, permits, color-management transforms, DI pathway and DCP/audio mastering lineage remain unresolved rather than inferred.",
  sources: [
    {
      title: "KAIBUTSU (MONSTER)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/kaibutsu/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting 2023 Competition, Best Screenplay, Japan, Cannes production year 2023, 126 minutes, Kore-eda direction/editing, Yuji Sakamoto screenplay, Ryuto Kondo cinematography, Keiko Mitsumatsu production design, Ryuichi Sakamoto music and named sound credits."
    },
    {
      title: "The 76th Festival de Cannes winners' list",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/the-76th-festival-de-cannes-winners-list/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Official winners record supporting Yuji Sakamoto's Best Screenplay award for Kaibutsu (Monster)."
    },
    {
      title: "Monster - English press kit",
      publisher: "Festival de Cannes / Monster Film Committee",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/05/159499.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production notes and crew record supporting 126 min, 2.39:1, 7.1CH+5.1CH, development from 2019, early-2022 filming start, screenplay revision history, changed child-actor preparation, Ryuichi Sakamoto score process and credited camera/lighting/design/costume/sound/production personnel."
    },
    {
      title: "映画『怪物』公式サイト",
      publisher: "Gaga Corporation",
      url: "https://gaga.ne.jp/kaibutsu-movie/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official Japanese site supporting Toho, Fuji Television Network, Gaga, AOI Pro. and Bun-Buku as the presenting group, AOI Pro. as production, and Toho/Gaga distribution."
    },
    {
      title: "映画『怪物』× 諏訪LOCATION 特設サイト",
      publisher: "Suwa Area Film Commission",
      url: "https://www.suwafc.com/kaibutsu-locationsp/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official local film-commission record supporting the Suwa region as main shooting geography and identifying principal school, lake, tunnel/railway, station, park and water-gate locations without relying on secondary exact-date claims."
    },
    {
      title: "Hirokazu Kore-eda on Making 'Monster'",
      publisher: "Uncaged Asia / New York Asian Film Festival",
      url: "https://uncaged.asia/interview-hirokazu-kore-eda-on-making-monster/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Kore-eda interview confirming digital capture and describing Ryuto Kondo's role in developing compositions from actor behavior rather than locking an unsupported camera-body specification."
    },
    {
      title: "Directing Monster | A conversation with Hirokazu Kore-Eda",
      publisher: "1883 Magazine",
      url: "https://1883magazine.com/directing-monster-a-conversation-with-hirokazu-kore-eda/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Kore-eda interview supporting the narrow first-chapter viewpoint and broader/freer camera grammar as the film moves toward the children's perspective."
    },
    {
      title: "Hirokazu Kore-eda on Finding Fresh Perspectives in Monster",
      publisher: "The Moveable Fest",
      url: "https://moveablefest.com/hirokazu-kore-eda-monster/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Kore-eda interview supporting the Suwa lake/location adaptation, avoiding all-encompassing wide information in early perspectives and increasing movement with the children in the third part."
    },
    {
      title: "The Story Behind Monster, Hirokazu Kore-Eda's Heartfelt Coming-Of-Age Film",
      publisher: "AnOther",
      url: "https://www.anothermag.com/design-living/15512/monster-film-review-hirokazu-kore-eda-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Direct Kore-eda interview supporting perspective-specific camera rhythm and the decision to seek Ryuichi Sakamoto's music months before filming."
    },
    {
      title: "Interview: Sakura Ando On The Making Of Monster",
      publisher: "Forbes",
      url: "https://www.forbes.com/sites/danidiplacido/2023/11/24/interview-sakura-ando-on-the-making-of-monster/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Direct Sakura Ando testimony supporting the pandemic-era delay in her commitment and Kore-eda's set culture of treating child and adult performers as equal creative participants."
    },
    {
      title: "KAIBUTSU (L'INNOCENCE)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/f/kaibutsu/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official French Cannes record supporting L'Innocence as the French release/display alias for Kaibutsu and preserving it in duplicate reconciliation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
