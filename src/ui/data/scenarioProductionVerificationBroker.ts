import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const brokerProductionCaseVerification = {
  scenarioId: "scenario_broker_2022",
  status: "verified",
  verifiedAt: "2026-09-06",
  summary: "Broker is verified as a new source-first Chapter 19 Production Case only after branch/PR and alias-aware reuse checks found no pre-existing scenario, Film Study or Production Verification identity under Broker, Les Bonnes Étoiles, Beurokeo, 브로커 or Hirokazu Kore-eda. Festival de Cannes locks the 2022 Competition, Best Actor award for Song Kang-ho, production year 2022, South Korea, 129-minute runtime and the principal director/screenplay/cinematography/editing/sound credits. The official Cannes press kit separately establishes production start April 14, 2021 and wrap June 22, 2021, CJ ENM presentation, Zip Cinema production, producer/co-producer credits, Hong Kyung-pyo as director of photography, Park Cheong-woo as gaffer, Lee Mok-won as production designer, Choi Se-yeon as costume designer, Kim Seo-young for makeup/hair, Jung Jae-il for music, Eun Hee-soo as production sound mixer and Choi Tae-young as sound supervisor. That press kit also directly documents Hong's natural-light approach and the choice to wait for sunlight, driving rain and wind, plus Busan, Yeongdeok, Uljin and Wolmido location work. KOFIC independently confirms that production began April 14 and completed June 22, that Zip Cinema produced and CJ financed/distributed, and a KOFIC production-design report states that 98 percent of the film was location shooting with the road-film journey largely following the actual production route along Korea's east coast toward Incheon. Kore-eda's Filmmaker Magazine interview documents his shoot-edit-rewrite-in-parallel workflow, the ending revision prompted by Song Kang-ho, a two-day Ferris-wheel scene using one camera inside the cabin because of space constraints, remote monitoring from the ground, and Jung Jae-il's score work through the edit and dub. These bounded facts do not establish the whole-film camera body, lens package, codec, bit depth, sensor mode, filtration, exposure strategy, media/offload/checksum topology, complete lighting/grip inventory, sound hardware, ADR/Foley topology, editorial software/storage, VFX census, color-management pipeline, final budget, financing shares, insurance or DCP/audio mastering lineage, all of which remain unresolved.",
  sources: [
    {
      title: "BROKER",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/broker/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting the 2022 Competition and Best Actor award, production year 2022, South Korea, 129-minute runtime, Hirokazu Kore-eda direction/screenplay/editing, Hong Kyung-pyo cinematography and Choi Tae-young sound credit."
    },
    {
      title: "BROKER - International Press Kit",
      publisher: "Festival de Cannes / Zip Cinema / CJ ENM",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/143581.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press kit supporting the exact April 14-June 22, 2021 production window; CJ ENM/Zip Cinema and producer structure; Hong Kyung-pyo, Park Cheong-woo, Lee Mok-won, Choi Se-yeon, Kim Seo-young, Jung Jae-il, Eun Hee-soo and Choi Tae-young credits; natural-light/weather method; Busan, Yeongdeok, Uljin and Wolmido locations; and 129-minute runtime."
    },
    {
      title: "Broker (2022)",
      publisher: "Korean Film Council / KoBiz",
      url: "https://www.koreanfilm.or.kr/eng/films/index/filmsView.jsp?movieCd=20206257",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional Korean film record supporting 129 minutes, South Korea, June 8 2022 release, Zip Cinema production, Hirokazu Kore-eda direction, Song Dae-chan producer and Lee Eugene executive-producer record."
    },
    {
      title: "Koreeda's Korean Debut BROKER Completes Production",
      publisher: "Korean Film Council / KoBiz",
      url: "https://www.koreanfilm.or.kr/eng/news/news.jsp?mode=VIEW&seq=5569",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "KOFIC production report supporting the April 14 production start, June 22 completion, just-over-two-month production duration, Hong Kyung-pyo cinematography, Zip Cinema production and CJ distribution."
    },
    {
      title: "KOFIC Korean Cinema Today: Broker location-production report",
      publisher: "Korean Film Council / KoBiz",
      url: "https://koreanfilm.or.kr/eng/ebook/magazine/koreanCinemaToday41/1/index-1.html",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "KOFIC production-design report supporting PD Song Dae-chan's statement that 98 percent of Broker was location shooting and documenting the road-film production movement from Busan through east-coast locations toward Wolmido/Incheon."
    },
    {
      title: "I Wanted the Story to Start in a Downpour and End With Waves: Hirokazu Kore-eda on Broker",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/118011-interview-hirokazu-kore-eda-broker/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct Kore-eda interview supporting his shoot/edit/rewrite parallel method, ending revisions in response to Song Kang-ho, the water/weather visual concept, the two-day single-camera Ferris-wheel production constraint with remote monitoring, and Jung Jae-il's iterative score work through editing and dub."
    },
    {
      title: "Filming Spots of the Movie Broker",
      publisher: "Korea Tourism Organization / VisitKorea",
      url: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=393082",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official tourism-location record supporting the road-film geography and specific Busan filming locations, used only as supplementary location provenance rather than technical-equipment evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
