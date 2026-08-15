import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const goldRushProductionCaseVerification = {
  scenarioId: "scenario_the_gold_rush_1925",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "AFI, the Chaplin Office, Cineteca di Bologna and the Library of Congress support The Gold Rush as Chaplin's 1925 Charles Chaplin Productions feature released through United Artists, with Chaplin credited as writer, director, producer and editor and Roland Totheroh leading documented cinematography. Chaplin's archive records two weeks of Truckee snow-country photography with roughly six hundred extras for the Chilkoot Pass image before the main unit returned to Hollywood, where an elaborate artificial mountain range supported the effects-heavy studio production. The same archival record and AFI distinguish the original silent release from Chaplin's 1942 reissue, which replaced intertitles with his narration, added a newly composed synchronized score and altered footage. The Production Case therefore teaches star-producer control, collaborative craft, location/studio integration, effects scale and independent distribution without collapsing the 1925 and 1942 versions.",
  sources: [
    {
      title: "The Gold Rush — AFI Catalog",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/9427-THE-GOLD-RUSH",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI identifies Charles Chaplin Productions, United Artists distribution, Chaplin as director/writer/producer/editor, Roland Totheroh and Jack Wilson in photography, Charles D. Hall in art/technical direction, the 1924-1925 production span, original silent physical properties and release/version history."
    },
    {
      title: "Filming The Gold Rush",
      publisher: "Charlie Chaplin / Roy Export",
      url: "https://www.charliechaplin.com/en/films/2-The-Gold-Rush/articles/5-Filming-The-Gold-Rush",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The Chaplin archive documents the Truckee location shoot, roughly six hundred extras on the recreated Chilkoot Pass, the return to Hollywood for the main shoot, construction of the artificial mountain range, and the later 1942 reissue changes."
    },
    {
      title: "The Music of The Gold Rush",
      publisher: "Charlie Chaplin / Roy Export",
      url: "https://www.charliechaplin.com/en/films/2-The-Gold-Rush/articles/248-The-Music-of-The-Gold-Rush",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "The Chaplin archive separates the compiled orchestral accompaniments used for the 1925 premiere and first run from Chaplin's newly composed synchronized score for the 1942 reissue."
    },
    {
      title: "La febbre dell'oro — 4K restoration",
      publisher: "Cineteca di Bologna",
      url: "https://cinetecadibologna.it/distribuzione/film/la-febbre-delloro/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Cineteca di Bologna credits Chaplin, Roland Totheroh and Charles D. Hall and documents the 2025 4K restoration from multiple archival elements, reinforcing that modern presentation runtime and restored image/sound layers must not be mistaken for one untouched 1925 master."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
