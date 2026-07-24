import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const rumbleFishVerificationRecords = [
  {
    scenarioId: "scenario_rumble_fish_1983",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The back-to-back Tulsa production, Electronic Cinema rehearsal, expressionist performance direction, extreme wide-angle black-and-white photography, painted shadows, selective color, practical optical effects and percussive score are supported by AFI, American Cinematographer, Criterion and BFI records.",
    sources: [
      {
        title: "Rumble Fish",
        publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/58073-RUMBLE-FISH",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Institutional production history documenting the S. E. Hinton adaptation, financing and distribution arrangements, Tulsa schedule, portable Electronic Cinema studio, video rehearsal and principal craft credits."
      },
      {
        title: "Stephen H. Burum, ASC and Rumble Fish",
        publisher: "American Cinematographer",
        url: "https://theasc.com/article/flashback-rumble-fish/",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Primary cinematographer interview detailing expressionist references, body-language direction, lenses, black-and-white stocks, higher-gamma processing, painted shadows, time-lapse, camera movement, selective color and practical effects."
      },
      {
        title: "Rumble Fish",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/28993-rumble-fish",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "Director-approved edition record identifying the dreamlike Tulsa setting, German-expressionist black-and-white design, Stewart Copeland's percussive score, restoration history and full production-department credits."
      },
      {
        title: "Rumble Fish (1983)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/087e58a4-628e-57ee-a583-596a1ddf7f90/rumble-fish",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "BFI catalog record confirming the 1983 American production, Coppola direction, Hinton-Coppola screenplay, producers and principal cast within an institutional film-history catalog."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
