import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const annetteProductionCaseVerification = {
  scenarioId: "scenario_annette_2021",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Annette is verified as a source-first 2021 Chapter 19 Production Case for the Cannes major-prizes reconciliation. Festival de Cannes locks the 2021 Competition/opening-film status, Best Director award, 140-minute runtime, separate production year 2020, France/Germany/Belgium/Japan/Mexico, Leos Carax direction/screenplay with Ron and Russell Mael, Caroline Champetier cinematography, Florian Sanson production design, Nelly Quettier editing, Sparks music and the Cannes-listed sound/production-company network. Sony directly locks Sony VENICE, ZEISS Supreme Prime and Angenieux Optimo lenses, X-OCN ST and Sony a7S II B-camera use. The official Unifrance/CG Cinéma press book locks live singing on set with pre-recorded backups, a 16-week production with only one week in Los Angeles and much LA doubling in Belgium/Germany, and the practical Annette puppet workflow: Estelle Charlier created faces, Romuald Collinet handled body/technical work, additional puppeteers sometimes joined, actors occasionally puppeteered, and post-production erased puppeteers when they could not hide. Exact shoot dates, detailed remaining schedule, budget/partner shares, shot-specific camera settings, complete light package, full live-vocal signal topology, grade/color pipeline, wider VFX census and master lineage remain unresolved.",
  sources: [
    {
      title: "ANNETTE",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/annette/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting 2021 Competition/opening-film status, Best Director, 2020 production year, 140 minutes, five production countries, principal creative credits, sound credits and production-company network."
    },
    {
      title: "Annette - Shot on VENICE",
      publisher: "Sony Cine",
      url: "https://sony-cinematography.com/shot-on-sony/annette/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Direct manufacturer record supporting Sony VENICE, ZEISS Supreme Prime and Angenieux Optimo lenses, X-OCN ST, Sony a7S II B camera, Caroline Champetier and Leos Carax."
    },
    {
      title: "Annette - English press booklet",
      publisher: "CG Cinéma International / Unifrance",
      url: "https://medias.unifrance.org/medias/83/178/242259/presse/annette-dossier-de-presse-anglais.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press book supporting live singing with pre-recorded backup, LA/Belgium/Germany production strategy, Charlier/Collinet practical-puppet construction and on-set operation, limited puppeteer-erasure post work, and detailed technical/music credits."
    },
    {
      title: "Leos Carax: D’Adam Driver, j’ai tout de suite pensé…",
      publisher: "Le Monde",
      url: "https://www.lemonde.fr/culture/article/2021/07/06/leos-carax-je-crois-toujours-que-le-cinema-existe-pour-nous-changer_6087116_3246.html",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Direct Carax interview corroborating the 16-week shoot, only one week shot in Los Angeles and the cost-driven recreation of Los Angeles in Belgium and Germany."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
