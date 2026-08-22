import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const thePianoProductionCaseVerification = {
  scenarioId: "scenario_the_piano_1993",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "The Piano is verified as a 1993 New Zealand-Australia-France transnational period production written and directed by Jane Campion and produced by Jan Chapman. In a BFI interview Chapman describes the financing path: initial U.S. approaches failed, Pierre Rissient introduced the filmmakers to Francis Bouygues, and Ciby 2000 financed the project while allowing substantial creative freedom. Chapman retrospectively describes the budget as about $9 million; this remains a source-framed figure without assumed currency, present-value conversion or audited category reconstruction. NFSA identifies Saddleback Productions, Chapman as producer, Alain Depardieu as executive producer, Campion as writer/director and Michael Nyman as composer. NZ On Screen and Cannes corroborate Stuart Dryburgh cinematography, Veronika Jenet editing, Andrew McAlpine production design and Nyman's music; NZ On Screen also identifies Janet Patterson's costume authorship in its supporting production material. Chapman recalls Campion's extensive storyboarding and describes Holly Hunter's screen test changing an earlier conception of Ada, supporting a prepared but iterative creative process. A contemporaneous 1993 Marae report documents filming at Karekare Beach, Māori extras, Māori adviser Waihoroi Shortland, ta moko artist Gordon Hatfield and a lengthy historical makeup application for Pete Smith. That report establishes participation and consultation on the set but is not treated as proof that every representation choice was culturally authoritative. Comparable current work involving Māori history, language, taonga, moko or representation requires appropriate Māori cultural authority, consultation, consent, attribution and applicable tikanga/IP practice. The film contains sexual bargaining, nudity and violence; current staging requires explicit performer consent, appropriate intimacy coordination/closed-set practice, safeguarding and qualified stunt/special-effects supervision where relevant. No camera body, lens package, film stock, exposure, lighting ratio, weather rig, piano transport/rigging procedure, sound hardware, lab chemistry or complete shooting schedule is invented. Runtime evidence remains version-sensitive: Cannes and NFSA give 121 minutes, BFI gives 120; 121 is canonical for gameplay while 120/121 is preserved. Palme d'Or, Academy Awards and later re-releases/restorations are downstream reception/version history only.",
  sources: [
    {
      title: "Memories of making The Piano – 25 years of Jane Campion's wild, windswept masterpiece",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/piano-jane-campion-jan-chapman",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "directing", "production_design"],
      note: "Producer Jan Chapman's first-person account of the treatment, failed U.S. financing attempts, Pierre Rissient/Francis Bouygues/Ciby 2000 finance path, creative freedom, roughly $9m budget, casting and Campion's storyboard preparation."
    },
    {
      title: "The Piano",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/f/the-piano/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "music"],
      note: "Institutional record for 1993 New Zealand/Australia/France, 121 minutes, Campion, Stuart Dryburgh, Michael Nyman, Veronika Jenet and Andrew McAlpine. Awards are treated only as downstream reception."
    },
    {
      title: "The Piano",
      publisher: "NZ On Screen",
      url: "https://www.nzonscreen.com/videos/the-piano-1993/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "production_design", "music"],
      note: "New Zealand screen archive record confirming Jan Chapman, Jane Campion, Stuart Dryburgh, Veronika Jenet, Andrew McAlpine, Gregory Keen, Michael Nyman and principal cast."
    },
    {
      title: "The Piano: Ada makes a deal",
      publisher: "National Film and Sound Archive of Australia",
      url: "https://www.nfsa.gov.au/collection/item/piano-ada-makes-deal",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "music"],
      note: "Institutional collection record for Saddleback Productions, Jan Chapman, Alain Depardieu, Jane Campion, Michael Nyman and a 121-minute feature record."
    },
    {
      title: "Marae - The Piano Story",
      publisher: "NZ On Screen",
      url: "https://www.nzonscreen.com/all-series/marae/marae-the-piano-story-1993/",
      sourceKind: "archive_feature",
      supports: ["overall", "production_design"],
      note: "Contemporaneous set report documenting Karekare Beach, Māori extras, adviser Waihoroi Shortland, ta moko artist Gordon Hatfield and Pete Smith's historical makeup process. Used to establish participation, not blanket cultural authorization or a modern makeup recipe."
    },
    {
      title: "The Piano (1992)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/cabb66ca-3bd6-562c-8c37-e704712b8ded/the-piano",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI catalogue record for Campion, Chapman, Australia/France and 120 minutes, preserved as runtime variance against Cannes/NFSA's 121."
    },
    {
      title: "The Piano archive review: Jane Campion's realm of the senses",
      publisher: "BFI / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/piano-archive-review-jane-campions-realm-senses",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Historical BFI review record giving New Zealand/Australia/France, 1993, 121 minutes and original UK release context; used for version/reception context, not technical reconstruction."
    },
    {
      title: "Stuart Dryburgh: on working with Jane Campion, Vincent Ward and Lee Tamahori",
      publisher: "NZ On Screen",
      url: "https://www.nzonscreen.com/interviews/stuart-dryburgh-on-working-with-jane-campion-vincent-ward-and-lee-tamahori/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography"],
      note: "First-person cinematographer context confirming Dryburgh's collaboration with Campion and The Piano's significance; not used to invent a camera/lens/stock package."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
