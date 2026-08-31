import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const flowProductionCaseVerification = {
  scenarioId: "scenario_flow_2024",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Flow is verified as Chapter 19's independent/low-mid-budget animation case through Cannes and Latvian institutional records plus direct filmmaker, technical and co-producer testimony. Cannes records the Latvia-France-Belgium film in Un Certain Regard in 2024 at 85 minutes with Gints Zilbalodis directing and co-writing with Matiss Kaza and with music by Zilbalodis and Rihards Zalupe; Latvia's film database records Straume, Dream Well Studio, Sacrebleu Productions and Take Five and an 84-minute catalogue runtime, which is preserved as version/catalogue variance. Zilbalodis's Blender interview documents a five-and-a-half-year production beginning in 2019, staged team growth through 2020-2023, a small Latvian studio, direct 3D previz instead of storyboards, custom scripts and tools, Blender/EEVEE production, 0.5-10-second 4K renders, no render farm, final rendering on his PC, no compositing and shader-based final look adjustment. It also documents cautious Blender-version changes, character animators holding on 3.3, final lighting in 3.6, and scene-specific water work using custom tools plus Cell Fluids and FLIP Fluids. Animation World Network records Zilbalodis's statement that animal movement was hand animated from reference with no motion capture. Cineuropa records the camera/mise-en-scene and long-take logic of the dialogue-free film and the early composition process with Rihards Zalupe and Sinfonietta Riga. CEE Animation records a €3.5 million budget and Gregory Zalcman's account that Take Five handled roughly 20 percent of animation plus foley and mixing. Cineuropa's Eurimages co-production episode confirms the three producing partners and Eurimages support. These sources do not establish a complete international crew count, audited financing waterfall, exact national financing percentages, tax-incentive ledger, cash-flow schedule, insurance, every Blender version/add-on per department, complete asset and version-control topology, every water simulation setting, all animation quotas, complete sound-library provenance, mix hardware/stem map, final mastering specifications, distribution accounting or recoupment. Those remain unresolved.",
  sources: [
    {
      title: "FLOW",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/flow/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "Institutional festival record supporting the 2024 Cannes selection, Latvia-France-Belgium production, 85-minute runtime, director/co-writer and music credits."
    },
    {
      title: "Straume (2024)",
      publisher: "Filmas.lv / Latvian Film Database",
      url: "https://www.filmas.lv/movie/4249/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "Latvian institutional record supporting the Straume title, Dream Well/Sacrebleu/Take Five production structure, principal credits and 84-minute national catalogue record."
    },
    {
      title: "Making Flow – Interview with director Gints Zilbalodis",
      publisher: "Blender",
      url: "https://www.blender.org/user-stories/making-flow-an-interview-with-director-gints-zilbalodis/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Direct Zilbalodis testimony supporting the five-and-a-half-year timeline, direct 3D previz, Blender/EEVEE rendering, no render farm or compositing, version policy, long-shot file constraints, custom tools and water workflow."
    },
    {
      title: "The animation of Flow",
      publisher: "Blender Conference",
      url: "https://conference.blender.org/2024/presentations/3929/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Animation director Léo Silly-Pélissier's production presentation supporting Blender use, naturalistic art direction and the long-take animation problem."
    },
    {
      title: "Gints Zilbalodis • Director of Flow",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/462710/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct Zilbalodis interview supporting camera movement and mise-en-scene as primary dialogue-free storytelling, long takes/minimal editing and early score development with Rihards Zalupe and Sinfonietta Riga."
    },
    {
      title: "CEEA Talks: Gints Zilbalodis about FLOW",
      publisher: "CEE Animation",
      url: "https://ceeanimation.eu/news/ceea-talks-gints-zilbalodis-about-flow-id-prefer-to-be-a-capybara/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Director/co-producer discussion supporting the €3.5 million budget and Take Five co-producer Gregory Zalcman's account of roughly 20% of animation plus foley and mixing."
    },
    {
      title: "Episode 73: Flow (Latvia/France/Belgium)",
      publisher: "Cineuropa / Eurimages",
      url: "https://cineuropa.org/en/newsdetail/471192",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Co-production discussion with Dream Well, Sacrebleu and Take Five producers confirming the three-country partnership and Eurimages support."
    },
    {
      title: "Flow: Cat-aloging Gints Zilbalodis' Journey of Teamwork and Self Discovery",
      publisher: "Animation World Network",
      url: "https://www.awn.com/animationworld/flow-cat-aloging-gints-zilbalodis-journey-teamwork-and-self-discovery",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Zilbalodis Q&A supporting direct 3D production without storyboards, extensive animal-reference study, hand animation with no motion capture and continued look development."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
