import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const birdsOfPassageProductionCaseVerification = {
  scenarioId: "scenario_birds_of_passage_2018",
  status: "verified",
  verifiedAt: "2026-08-12",
  summary: "Birds of Passage's Wayuu-centered 1970s marijuana-boom history, female and clan viewpoint, community-informed ritual staging, La Guajira production world, 3-perf 35 mm observational image system, credited screenplay/editing/sound/music departments and Directors' Fortnight launch are supported by official festival, filmmaker-interview, cinematography and distribution sources.",
  sources: [
    {
      title: "Pájaros de verano",
      publisher: "Quinzaine des cinéastes",
      url: "https://www.quinzaine-cineastes.fr/en/film/pajaros-de-verano",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Directors' Fortnight record verifies the 2018 world premiere, 125-minute runtime, directors, principal cast, María Camila Arias and Jacques Toulemonde screenplay from an idea by Cristina Gallego, David Gallego photography, Miguel Schverdfinger editing, Carlos García and Claus Lynge sound, Leonardo Heiblum music and Angélica Perea set decoration."
    },
    {
      title: "Sortie en salles : Parajos de verano (Les Oiseaux de passage), réalisé par deux réalisateurs issus de l’Atelier",
      publisher: "Festival de Cannes — Cinéma de Demain",
      url: "https://cinemadedemain.festival-cannes.com/2019/sortie-en-salles-parajos-de-verano-les-oiseaux-de-passage-realise-par-deux-realisateurs-issus-de-latelier/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Ciro Guerra identifies the bonanza marimbera as the historical origin point for the film and describes noir, gangster, western and tragedy as intersecting genre frames; Cristina Gallego explains the strong female viewpoint and the Wayuu palabrero and clan codes that reshape gangster convention."
    },
    {
      title: "Kodak 35mm paints an emotional picture of Colombia’s nascent drugs trade in 'Pájaros de Verano' ('Birds of Passage')",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/pajaros-de-verano/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "DP David Gallego documents the 3-perf 35 mm ARRICAM LT workflow, 2.39:1 framing, Ultra Prime and zoom lenses, three Kodak stocks, practical-fire and limited-HMI night lighting, archive-photo research with Angélica Perea, La Guajira locations and the directors' mostly static observational camera style."
    },
    {
      title: "Industry Insights: Interview with Birds of Passage director Cristina Gallego",
      publisher: "Reclaim The Frame",
      url: "https://www.reclaimtheframe.org/post/industry-insights-interview-with-birds-of-passage-director-cristina-gallego",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Gallego describes changing the project away from a conventional male perspective, working with Wayuu cultural specialist Wielder Guerra, employing roughly 30 percent Wayuu crew and relying on the community when staging rituals, spaces, environments and locations."
    },
    {
      title: "Birds of Passage",
      publisher: "New Zealand International Film Festival",
      url: "https://www.nziff.co.nz/2018/archive/birds-of-passage/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The festival record confirms Cristina Gallego and Ciro Guerra, the Colombian Wayuu-centered 1970s premise, Spanish-English-Wayuunaiki presentation, 125-minute runtime and the principal screenplay, photography, editing, production-design, costume and sound credits used to cross-check the production profile."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
