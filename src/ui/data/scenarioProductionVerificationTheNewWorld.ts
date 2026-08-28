import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theNewWorldProductionCaseVerification = {
  scenarioId: "scenario_the_new_world_2005",
  status: "verified",
  verifiedAt: "2026-08-28",
  summary: "The New World is verified as a 2005 Chapter 18 Production Case whose historical importance lies in photochemical persistence inside digital convergence. Criterion preserves three director-approved versions: the 135-minute theatrical cut used as the playable anchor, a 150-minute first cut and a 172-minute extended cut. BFI and AFI anchor principal credits and historical context. American Cinematographer documents Emmanuel Lubezki's predominantly anamorphic 35mm strategy, selective 65mm for hyper-enhanced moments, close 40mm and 50mm work, custom close-focus Panavision C/E-Series hybrids, deep-focus ambitions around T11-T16 and Kodak Vision2 200T 5217 / Vision2 500T 5218. BFI describes an almost entirely natural-light moving-camera approach using handheld or Steadicam. Sarah Green's production account anchors Virginia locations along the James and Chickahominy Rivers and the production logic of remaining near Jamestown geography. Jack Fisk's later testimony supports research-driven, physically built environments that could tolerate Malick's fluid, minimally storyboarded working method. Language reconstruction, Native and First Nations casting, costume, choreography and representation are kept as distinct production responsibilities rather than collapsed into claims of historical certainty. Criterion's later restoration evidence is used only for version and source-element history: the 35mm original negative, 35mm interpositive and selected 65mm original negative do not retroactively define the 2005 finishing pipeline. Exact 65mm shot counts, complete lens maps, universal T-stops, exposure/processing/filter recipes, camera-body assignment, budget or financing shares, complete construction inventory, cultural-consultant authority beyond documented roles, complete VFX stack, production-sound hardware and 2005 DI/scanning settings remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "The New World",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28713-the-new-world",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion anchors the three director-approved versions and later restoration/source-element history; restoration evidence is kept separate from the 2005 production and finishing layer."
    },
    {
      title: "The New World (2005)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/4e42abf5-705e-5249-93c8-8f199b1ebae4/the-new-world",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BFI record supporting direction, production, writing, cast and release context."
    },
    {
      title: "Film of the Month: The New World",
      publisher: "BFI Sight and Sound",
      url: "https://old.bfi.org.uk/sightandsound/review/3131",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Contemporary BFI review supporting the almost entirely natural-light moving-camera approach using handheld or Steadicam and the film's music/context layer."
    },
    {
      title: "American Cinematographer, January 2006: The New World / Uncharted Emotions",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/magazine/jan06.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Title-specific production record supporting anamorphic 35mm, selective 65mm, custom close-focus C/E-Series hybrids, 40/50mm proximity, T11-T16 ambitions and Kodak Vision2 5217/5218."
    },
    {
      title: "The New World",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/the-new-world",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI record supporting principal writer-director, producer, cinematographer, editor and production context credits."
    },
    {
      title: "Dreaming of a New World",
      publisher: "Cincinnati CityBeat",
      url: "https://www.citybeat.com/arts/film-dreaming-of-a-new-world-12176425/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Sarah Green production interview supporting the Virginia shoot along undeveloped stretches of the James and Chickahominy Rivers and the production's relationship to historical geography."
    },
    {
      title: "Inside the enduring movie homes of Jack Fisk, production design legend",
      publisher: "Associated Press",
      url: "https://apnews.com/article/90c5b0a569ae9653985252176d7ead7a",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Jack Fisk testimony supporting research-driven physical Jamestown construction, period methods and complete environments designed for Malick's fluid approach."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
