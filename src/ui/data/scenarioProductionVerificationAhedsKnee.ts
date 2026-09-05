import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const ahedsKneeProductionCaseVerification = {
  scenarioId: "scenario_aheds_knee_2021",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Ahed's Knee (Ha’berech) is verified as a source-first 2021 Chapter 19 Production Case for the Cannes major-prizes reconciliation. Festival de Cannes locks 2021 Competition and joint Jury Prize status, 109 minutes, France/Germany/Israel, Nadav Lapid direction/screenplay and the Pie Films-led production network. In a direct Filmmaker Magazine interview Lapid locks the 18-day shoot, the Arava location strategy and the production logic by which schedule pressure forced risk and discouraged neutral coverage; he also describes his Shai Goldman collaboration as making the camera another actor that intervenes and gets in the way. European Film Academy locks Goldman cinematography, Nili Feller editing, Pascale Consigny production design, Khadija Zeggaï costume, Noa Yehonatan makeup, Marina Kertesz sound and Dani Cohen/Arnaud Chelet VFX. AFI locks producer Judith Lou Lévy and executive producer Zehava Shekel. Kino Lorber lists 2.39:1 exhibition ratio. Camera body, lenses, acquisition medium/codec, rigging, exact shoot dates, detailed location schedule, full lighting package, exact budget and partner shares, complete sound/edit/VFX/grade pipelines and mastering lineage remain unresolved.",
  sources: [
    {
      title: "HA’BERECH (AHED'S KNEE)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/ha-berech/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Official Cannes record supporting 2021 Competition and Jury Prize status, 109 minutes, France/Germany/Israel, Nadav Lapid direction/screenplay and production-company network."
    },
    {
      title: "A Boxing Contest Between the Movie and the Viewer: Nadav Lapid on Ahed's Knee",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/113985-interview-nadav-lapid-aheds-knee/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Direct Lapid testimony supporting the 18-day shoot, schedule pressure as a formal constraint, Arava location search and the camera-as-actor collaboration with Shai Goldman."
    },
    {
      title: "Ahed's Knee",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/aheds-knee/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional craft record supporting Shai Goldman cinematography, Nili Feller editing, Pascale Consigny production design, Khadija Zeggaï costume, Noa Yehonatan makeup, Marina Kertesz sound and Dani Cohen/Arnaud Chelet VFX credits."
    },
    {
      title: "AHED’S KNEE | AFI FEST",
      publisher: "American Film Institute",
      url: "https://fest.afi.com/2021/world-cinema-2021/aheds-knee/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional festival record supporting Judith Lou Lévy producer, Zehava Shekel executive producer, Shai Goldman cinematography, Nili Feller editing, principal cast and 109-minute runtime."
    },
    {
      title: "Ahed's Knee",
      publisher: "Kino Lorber",
      url: "https://kinolorber.com/film/aheds-knee",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Distributor technical listing supporting 2.39:1 exhibition ratio and color presentation; it is not treated as proof of the acquisition camera, sensor/film format or codec."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
