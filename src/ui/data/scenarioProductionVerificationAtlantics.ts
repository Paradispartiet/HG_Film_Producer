import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const atlanticsProductionCaseVerification = {
  scenarioId: "scenario_atlantics_2019",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Atlantics is verified as a 2019 Chapter 18 Production Case in which Senegalese authorship, a France-Senegal-Belgium co-production network, Wolof performance, situated street casting, Dakar location work, a RED Epic daytime / high-sensitivity Panasonic VariCam night strategy, long-lens observational photography, supernatural social realism, late editorial writing, sound and score authorship, and post-Cannes platform circulation operate as one production system. Festival de Cannes anchors a 104-minute version and the principal creative credits. Distributor and cinematography records document 1.66/5.1 delivery metadata, Les Films du Bal/Cinekap/Frakas and ARTE France Cinema/Canal+ International production layers, Claire Mathon's RED Epic daytime and VariCam night strategy, long focal lengths around 85-135 mm and the Angenieux Optimo 45-120 mm. Panavision/AFC identifies RED Epic Dragon, Panasonic VariCam LT and Zeiss G.O. T1.3, while Mathon interviews identify the night body as VariCam 35; that title-specific source discrepancy is preserved rather than silently harmonized. Mati Diop's casting accounts locate Souleiman at a construction site, Dior in a nightclub and Ada in Thiaroye, making social geography part of production authorship. Diop also states that Violaine Huisman wrote the final poetic Ada/Souleiman words at the very end of editing and that they were not recorded during principal photography. Fatima Al Qadiri is preserved as the credited composer, and Netflix's post-Cannes international-rights acquisition is treated as circulation evidence rather than proof of principal-photography financing or control. Exact budget and financing shares, shoot/rehearsal days, casting census, resolution of the VariCam LT/35 label conflict, complete lens map, universal exposure or lighting recipes, codecs/media, LUT/CDL recipes, VFX totals/software, edit and sound hardware, DI node graphs and final-mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Atlantique",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/atlantique/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting the 104-minute version, France-Senegal-Belgium production context and principal direction, writing, cinematography, editing, music, sound, design and costume credits."
    },
    {
      title: "Portrait de la jeune fille en feu et Atlantique – entretiens avec Claire Mathon",
      publisher: "CineCimes",
      url: "https://cinecimes.fr/portrait-de-la-jeune-fille-en-feu-et-atlantique-entretiens-avec-claire-mathon-directrice-de-la-photographie/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Mathon describes the RED Epic daytime / Panasonic VariCam night split, long focal lengths, Dakar night-light conditions and the observational visual method."
    },
    {
      title: "Entretiens avec les laureats du Prix de la CST 2019",
      publisher: "Commission Superieure Technique de l'Image et du Son",
      url: "https://prix.cst.fr/entretiens-avec-les-laureats-du-prix-de-la-cst-2019/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Title-specific Mathon interview supporting the high-sensitivity VariCam night strategy, very dark Dakar environments and image-making under humidity and difficult night conditions."
    },
    {
      title: "La Lettre de l'AFC 298",
      publisher: "Association Francaise des directrices et directeurs de la photographie cinematographique",
      url: "https://www.afcinema.com/IMG/pdf/4/a/8/lettre_298.pdf",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Panavision/AFC equipment record listing RED Epic Dragon, Panasonic VariCam LT and Zeiss G.O. T1.3 for Atlantique; preserved alongside interview references to VariCam 35 rather than used to erase the discrepancy."
    },
    {
      title: "Mati Diop on Atlantique",
      publisher: "British Vogue",
      url: "https://www.vogue.co.uk/arts-and-lifestyle/article/mati-diop-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Diop discusses situated casting, Dakar social geography and Fatima Al Qadiri as a deliberately chosen creative collaborator."
    },
    {
      title: "ScreenTalks Archive: Mati Diop on Atlantics",
      publisher: "Barbican",
      url: "https://www.barbican.org.uk/read-watch-listen/screentalks-archive-mati-diop-on-atlantics",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Diop describes the late Ada/Souleiman poetic text by Violaine Huisman as writing created at the end of editing rather than dialogue recorded during principal photography."
    },
    {
      title: "Netflix Acquires Cannes Film Festival Award Winners Atlantics and I Lost My Body",
      publisher: "Netflix",
      url: "https://about.netflix.com/en/news/netflix-acquires-cannes-film-festival-award-winners-atlantics-and-i-lost-my-body",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official acquisition announcement supporting the post-Cannes international-rights layer; it is used as distribution evidence, not as evidence of principal-photography financing or creative control."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
