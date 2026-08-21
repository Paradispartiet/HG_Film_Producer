import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aBetterTomorrowProductionCaseVerification = {
  scenarioId: "scenario_a_better_tomorrow_1986",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "A Better Tomorrow is verified as a 1986 Hong Kong Cinema City / Film Workshop production directed by John Woo and produced by Tsui Hark, developed through a remake lineage from Patrick Lung Kong's The Story of a Discharged Prisoner (1967) but substantially personalized by Woo. Hong Kong Film Archive credits Woo, Chan Hing-kai and Leung Suk-wah for the screenplay, Wong Wing-hang for cinematography, Kam Ma for editing and Joseph Koo for music; HKFA also identifies Mark as an original character in the remake and credits Yu Ka-on with the character's iconic styling. Woo's first-person BFI/Sight and Sound accounts document Tsui Hark's support during a career low, shared project development, Woo's major rewrite and his decision to center Ti Lung, Chow Yun-fat and Leslie Cheung as performers rather than fighters. Woo's 2026 BFI interview describes his Hong Kong action process as instinctive, music-driven and adaptive on set, with slow motion serving performance and rhythm. That retrospective method is treated as process evidence, not as permission to assign specific lenses, frame rates, camera counts, shooting days or stunt methods to undocumented A Better Tomorrow scenes. HKFA programme records vary between 95 and 96 minutes; the case uses the current 96-minute restored archive listing while preserving the discrepancy as edition/restoration evidence. Cinema City history from HKFA documents the company's partnership with Film Workshop and its decentralized independent-production structure. The case does not invent camera bodies, lens packages, film stocks, exposure/lighting recipes, production-sound hardware, weapon-recording methods, stunt rigs, squibs, pyrotechnic specifications, blank-ammunition procedures, laboratory processes or exact scene schedules. Later record box office, sequels, heroic-bloodshed naming, international circulation, fashion imitation and restoration remain downstream from the production.",
  sources: [
    {
      title: "A Better Tomorrow (4K Digitally Restored Version)",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/en/web/hkfa/2025/mtgseoul/pe-event-2025-mtgseoul-fs-film05.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "HKFA documents John Woo, Tsui Hark, Cinema City, the credited screenplay team, Wong Wing-hang, Kam Ma and Joseph Koo; identifies the Lung Kong remake lineage and Mark as a new character; credits Yu Ka-on's iconic styling; and lists the current restored presentation at 96 minutes."
    },
    {
      title: "A Better Tomorrow",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2016-9-1-11.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "An earlier HKFA programme independently confirms the principal credits and lists a 95-minute presentation, providing evidence for visible runtime/version variance rather than one universal timing."
    },
    {
      title: "John Woo on beginnings and A Better Tomorrow",
      publisher: "BFI Southbank / Sight and Sound",
      url: "https://bfidatadigipres.github.io/bullets%20and%20brotherhood%3Cbr%3Ethe%20films%20of%20john%20woo/2026/07/03/better-tomorrow/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Woo's 1993 first-person account documents his return from a career low, Tsui Hark's Film Workshop support, shared development, Woo's substantial screenplay authorship and the shift from an initial three-women concept to three men."
    },
    {
      title: "I use musical theory to shoot an action sequence: an exclusive online interview with John Woo",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/john-woo-better-tomorrow-killer-hard-boiled",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Woo explicitly discusses A Better Tomorrow's actor-centered direction and his broader Hong Kong action practice: music-driven rhythm, slow motion, on-set adaptation and an absence of rigid storyboard dependency. The case does not turn his generic lens examples into scene-specific A Better Tomorrow claims."
    },
    {
      title: "The Essence of Entertainment: Cinema City's Glory Days",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/documents/6.-Research-and-Publication/06-05_Publications/04_Film-Companies/The-Essence-of-Entertainment---Cinema-Citys-Glory-Days/topicalvolumes_intro30_e.pdf",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "HKFA's institutional history documents Cinema City's partnership with Film Workshop, Tsui Hark inviting Woo to direct A Better Tomorrow, the film's success, and the company's transition toward decentralized co-production with independent companies."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
