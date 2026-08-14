import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const lonelyVillaProductionCaseVerification = {
  scenarioId: "scenario_the_lonely_villa_1909",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "The Lonely Villa is verified as a 1909 Biograph home-invasion melodrama directed by D. W. Griffith, photographed by G. W. Bitzer and Arthur Marvin and filmed across Fort Lee and Biograph's New York studio. The playable case is built around sustained alternation among threatened family, burglars and the husband's police-assisted rescue, with the telephone making separated spaces narratively simultaneous. Library of Congress and AFI provide film-specific production, synopsis and material evidence; MoMA independently preserves the film; Tom Gunning and university-press scholarship provide the historical framework that treats Griffith as a major consolidator of parallel narrative rather than the inventor of cross-cutting.",
  sources: [
    {
      title: "The lonely villa",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/2015600152/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "LOC preserves a digital copy and paper-print material, identifies the 1909 Biograph production, D. W. Griffith direction, Mack Sennett and Stanner E. V. Taylor writing, G. W. Bitzer and Arthur Marvin camera credits, the Au Téléphone adaptation, approximately ten-minute surviving digital duration, and filming dates in Fort Lee and Biograph's New York City studio."
    },
    {
      title: "The Lonely Villa (1909)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/36631-THE-LONELYVILLA",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "AFI independently records the 10 June 1909 release, Biograph production/distribution, Griffith direction, Bitzer and Marvin photography, 750-foot silent black-and-white format, Fort Lee/New York locations, a detailed synopsis of the false message, burglary, telephone discovery and rescue, and a contemporary Moving Picture World response emphasizing the film's suspense."
    },
    {
      title: "D. W. Griffith. The Lonely Villa. 1909",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/collection/works/304882",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "MoMA independently catalogs and preserves The Lonely Villa as a 1909 D. W. Griffith moving-image work, providing a separate institutional survival and identity check outside the Library of Congress/AFI record."
    },
    {
      title: "Heard over the phone: The Lonely Villa and the de Lorde tradition of the terrors of technology",
      publisher: "Oxford Academic / Screen",
      url: "https://academic.oup.com/screen/article-abstract/32/2/184/1630430",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Tom Gunning's peer-reviewed Screen article is devoted specifically to The Lonely Villa, its de Lorde telephone-melodrama lineage and the relation between communication technology and parallel narrative. It supplies the scholarly framework for treating the telephone and alternation as one system rather than a generic last-minute-rescue trope."
    },
    {
      title: "Thinking in Pictures: Dramatic Structure in D. W. Griffith's Biograph Films",
      publisher: "University of California Press",
      url: "https://www.ucpress.edu/books/thinking-in-pictures/paper",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "UC Press describes Joyce E. Jesionowski's study as a rigorous reconsideration of Griffith as both pioneer and mythmaker and explicitly notes that devices such as intercutting and camera movement were already in practice internationally. This source locks the Production Case against a Griffith-invented-cross-cutting claim."
    },
    {
      title: "D.W. Griffith And The Origins Of American Narrative Film: The Early Years at Biograph",
      publisher: "University of Illinois Press",
      url: "https://www.press.uillinois.edu/books/?id=p063664",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "University of Illinois Press summarizes Gunning's archival history of Griffith's first Biograph years as part of a wider industrial and social reorganization of film storytelling, grounding Griffith's editing experiments in changing production and audience systems rather than presenting technique as isolated individual invention."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
