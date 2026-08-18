import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const enthusiasmProductionCaseVerification = {
  scenarioId: "scenario_enthusiasm_1930",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "BFI, the Austrian Film Museum and MoMA support Enthusiasm / Entuziazm: Simfoniya Donbassa as Dziga Vertov's 1930 radical early-sound documentary-propaganda work about the Five-Year Plan and industrialization in Ukraine's Donbas. BFI describes the Soviet debate around non-synchronization, Vertov's complementary and contrapuntal sound-image construction, industrial/machine sound and the absence of conventional commentary; BFI also explicitly places the mines in Ukraine and later describes the work as Ukraine's first sound film. The Austrian Film Museum's Edition Filmmuseum presents 65-minute restored and unrestored versions side by side and documents Peter Kubelka and Edith Schlemmer's 1972 restoration that re-synchronized image and sound. Its preservation project records a later 3K digital restoration from a 35mm black-and-white positive and a new print from a 35mm duplicate negative of the 1972 restored version. The museum's Vertov Collection documents its close relationship with Elizaveta Svilova and the preservation of primary Vertov material. MoMA situates Enthusiasm within Vertov's radical image/sound experiments and Soviet avant-garde legacy. The case therefore treats non-synchronization as intentional craft, Donbas/Ukrainian geography as specific, Five-Year Plan and anti-religious construction as propaganda rather than neutral documentary truth, and later restored runtimes/sync states as archival interventions rather than original production facts. It does not invent an exact recording-machine brand or unsupported film-specific crew credits.",
  sources: [
    {
      title: "10 great early sound films — Enthusiasm",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-early-sound-films",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "BFI documents the Soviet non-synchronization debate, Vertov's complementary/contrapuntal sound montage, industrial noise, no conventional commentary, Five-Year Plan propaganda and mines in Ukraine."
    },
    {
      title: "Enthusiasm — Edition Filmmuseum",
      publisher: "Austrian Film Museum",
      url: "https://www.filmmuseum.at/en/shop/shop_detail?shop_produkte_id=1215680370589",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "The museum presents 65-minute restored and unrestored versions, identifies the Gosfilmofond-preserved version and Kubelka's restoration, and explains that re-syncing image and sound is part of the restoration history."
    },
    {
      title: "Film preservation projects since 2002 — Entuziazm",
      publisher: "Austrian Film Museum",
      url: "https://www.filmmuseum.at/en/collections/film_collection/film_preservation/projects_since_2002",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "The preservation record documents a 3K digital restoration from a 35mm black-and-white positive and a new print from a 35mm duplicate negative of the 1972 restored version, grounding later element provenance."
    },
    {
      title: "Dziga Vertov",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/film/1149",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "MoMA identifies Enthusiasm: Symphony of the Donbass as a 1930 Vertov film and places it within his radical experiments in image and sound and wider Soviet avant-garde practice."
    },
    {
      title: "Dziga Vertov Collection",
      publisher: "Austrian Film Museum",
      url: "https://vertov.filmmuseum.at/en/collection",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "The collection page documents the museum's Vertov holdings, the 1972 Kubelka/Schlemmer restoration and the institution's relationship with Vertov's widow and artistic collaborator Elizaveta Svilova, supporting archival provenance without assigning unsupported film-specific crew roles."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
