import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theLittleSisterProductionCaseVerification = {
  scenarioId: "scenario_the_little_sister_2025",
  status: "verified",
  verifiedAt: "2026-09-07",
  summary: "The Little Sister / La Petite Dernière is verified as a genuinely new Chapter 19 source-first Production Case on the locked 612/612 baseline after exact-main branch/PR checks and tree-wide English/French title and plausible-ID reconciliation establish no pre-existing canonical scenario, Film Study or Production Verification identity. Festival de Cannes records the 2025 Competition feature, Hafsia Herzi as director and screenwriter, France/Germany, a 106-minute runtime, Nadia Melliti as Fatima, Ji-Min Park as Ji-Na and the Award for Best Actress for Melliti. The Cannes-hosted English press kit from June Films and Katuh Studio independently lists 107 minutes and documents the adaptation/research process, difficult financing context without a total budget, a casting campaign lasting more than a year across several cities and professional/non-professional auditions, Nadia Melliti's first film role, a story spanning one year with photography split between a short winter phase and spring, practically all-handheld cinematography, preference for natural light and limited heavy lighting, coordinated black/red location and costume choices, dislike of ADR, and editor Géraldine Mangenot beginning while shooting continued. Jérémie Attard's direct ARRI interview documents camera involvement from casting callbacks, Herzi's avoidance of fixed shot lists and floor plans, three ALEXA Mini cameras used throughout principal photography for long multicamera takes, the TSF-provided choice between RED V-Raptor and ALEXA Mini followed by comparative tests, natural room/location light reinforced through maximum pre-light, a three-day February winter unit, approximately 150 winter stills used with colorist Dirk Meier to construct the shooting LUT, and a Germany-based final grade that stayed close to that LUT. SNCF's interview with Herzi documents filming at Haussmann–Saint-Lazare, Chelles–Gournay and on the RER E. The Cannes 106 / Cannes-hosted press-kit 107-minute discrepancy is preserved rather than normalized. The locked sources do not establish total budget, financing percentages, insurance, complete shooting-day count, a complete location inventory, exact lens family or focal-length map, recording codec/resolution, sensor mode, shutter angle, ISO/exposure ledger, media/data-storage or backup architecture, complete production-sound hardware, ADR/Foley/final-mix topology, editorial software/storage/proxy/conform, complete score-recording or music-clearance architecture, VFX shot count, stunt/safety paperwork, delivery codec, final sound format or mastering package; those details remain unresolved rather than inferred.",
  sources: [
    {
      title: "LA PETITE DERNIÈRE",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/la-petite-derniere/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "Official Cannes film record supporting the 2025 Competition entry, Best Actress award, 106-minute runtime, France/Germany country record, Hafsia Herzi's directing/screenplay credits, principal cast and production/sound credits."
    },
    {
      title: "The Little Sister English Press Kit",
      publisher: "June Films / Katuh Studio / Festival de Cannes",
      url: "https://cdn.festival-cannes.com/media/uploads/2025/05/189424.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes-hosted production press kit supporting the 107-minute listing, adaptation and field research, financing difficulty without budget total, year-plus multi-city professional/non-professional casting, first-time lead, winter/spring structure, handheld and natural-light preferences, color/location strategy, parallel editorial start and full principal craft credits."
    },
    {
      title: "Jérémie Attard voit triple avec l’ALEXA Mini pour « La Petite Dernière »",
      publisher: "ARRI",
      url: "https://www.arri.com/news-fr/jeremie-attard-en-alexa-mini-pour-la-petite-derniere",
      sourceKind: "manufacturer_case_study",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct interview with cinematographer Jérémie Attard supporting camera tests during casting callbacks, no fixed shot-list/floor-plan method, three ALEXA Mini multicamera long-take system, Raptor-versus-Mini comparison, natural-light/max-prelight strategy, three-day February winter unit and approximately 150-still LUT/Dirk Meier/Germany grade chain."
    },
    {
      title: "Interview with Hafsia Herzi, director of The Little Sister",
      publisher: "SNCF Group",
      url: "https://www.groupe-sncf.com/en/group/shoots/interview-hafsia-herzi",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Herzi interview supporting the location-production record at Haussmann–Saint-Lazare, Chelles–Gournay and on the RER E, used only as a bounded location record rather than a complete shoot ledger."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
