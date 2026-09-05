import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const compartmentNo6ProductionCaseVerification = {
  scenarioId: "scenario_compartment_no_6_2021",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Compartment No. 6 (Hytti nro 6) is verified as a source-first 2021 Chapter 19 Production Case for the Cannes major-prizes reconciliation. Festival de Cannes locks the tied 2021 Grand Prix, 107-minute Finland/Germany/Estonia/Russian Federation feature, director/co-screenwriter Juho Kuosmanen, co-screenwriters Livia Ulman and Andris Feldmanis, cinematographer J-P Passi, editor Jussi Rautaniemi, sound Pietu Korhonen and the Aamu/Achtung Panda!/Amrion/CTB production-company structure. Kodak locks the 28-day six-week shoot from 12 February to 26 March 2020, Russian location network, train-depot hydraulic simulation, ARRICAM LT 2-perf 35mm principal capture, spare 4-perf body, Zeiss Super Speeds, KODAK VISION3 500T, about 30% one- or two-stop push-processing, Mosfilm/Studio l'Equipe laboratory split and documented lighting strategies. The official Cannes press kit locks 35mm, small-crew train work, hidden microphones and Dolby Atmos while exposing source discrepancies that are preserved rather than erased: Cannes runtime 107 versus press-kit 106; press-kit 1:2.35 versus Passi's documented final 2.40:1 use of the full 2-perf frame after framing around 2:1 during shooting. Exact financing shares, full sound equipment/post architecture, grading, effects census and mastering lineage remain unresolved.",
  sources: [
    {
      title: "HYTTI NRO 6 (COMPARTMENT NO. 6)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/hytti-nro-6/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting 2021, Grand Prix, 107 minutes, Finland/Germany/Estonia/Russian Federation, Kuosmanen/Ulman/Feldmanis screenplay, J-P Passi cinematography, Jussi Rautaniemi editing, Pietu Korhonen sound and production-company roles."
    },
    {
      title: "Strangers make connections on a train in Juho Kuosmanen's Cannes-contending Compartment No.6, filmed in 2-perf on Kodak 35mm",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/compartment-no-6/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Direct J-P Passi production testimony supporting scouting, 28 shooting days over six weeks, Russian locations, ARRICAM LT 2-perf, spare 4-perf body, Zeiss Super Speeds, VISION3 500T, push-processing, labs, train simulation, lighting practice and post framing from 2:1 toward the full 2-perf 2.40:1 frame."
    },
    {
      title: "Compartment No. 6 — Cannes press kit",
      publisher: "Aamu Film Company / Festival de Cannes",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/124120.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Official production press kit supporting Finland/Germany/Estonia/Russia, 35mm, 106-minute runtime metadata, 1:2.35, Dolby Atmos, Kuosmanen's adaptation account, and his statement that the cramped train production used a small crew and hidden microphones."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
