import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const scarfaceProductionCaseVerification = {
  scenarioId: "scenario_scarface_1932",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, Library of Congress, BFI and Academy Production Code records support Scarface as an independent Caddo/Howard Hughes gangster production whose production history is inseparable from pre-1934 censorship negotiation and multiple versions. AFI records The Caddo Co., Inc. as production company and United Artists as distributor; Howard Hawks as director with Richard Rosson co-directing; Howard Hughes and E. B. Derr on producing/supervision; Ben Hecht, Seton I. Miller, John Lee Mahin, W. R. Burnett and Fred Pasley across screen story, continuity/dialogue and adaptation from Armitage Trail plus contemporary gang history; Lee Garmes and L. W. O'Connell photographing; Harry Oliver handling settings; Edward Curtiss editing, with Lewis Milestone later editing alternate versions; Adolph Tandler and Gus Arnheim as music directors; William Snyder as sound engineer; and Howard Anderson on process photography. AFI documents production from late June through October 1931 at Metropolitan Sound Studios, Western Electric sound, 90/95/99-minute duration records and an unusually detailed Versions A/B/C history created through MPPDA/AMPP negotiations, retakes, an altered ending, forewords, law-and-order additions, local censor-board conflict, delayed release and territory-specific cuts. The Academy's collection overview establishes the larger chronology: the Production Code dates to 1930, while Joseph Breen's centralized PCA administration and mandatory seal regime begin in 1934. BFI independently places Scarface among the most heavily censored 1930s gangster films, and Library of Congress records its 1994 National Film Registry selection. The case therefore preserves version provenance, independent production/distribution structure and pre-enforcement censorship without treating one surviving print as the unique original or inventing lenses, stock, microphone models, firearm effects or stunt methods.",
  sources: [
    {
      title: "Scarface (1932)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/1134-SCARFACE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies Caddo/United Artists, Hawks/Rosson, Hughes/Derr, the multi-writer adaptation chain, Garmes/O'Connell, Oliver, Curtiss/Milestone, Tandler/Arnheim, Snyder, Anderson, Metropolitan Sound Studios, Western Electric sound, 90/95/99-minute duration records and the detailed A/B/C censorship/version history."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library of Congress lists Scarface (1932) as selected to the National Film Registry in 1994, keeping later preservation recognition separate from production-era causality."
    },
    {
      title: "10 great Hollywood gangster films of the 1930s",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-hollywood-gangster-films-1930s",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI places Hawks/Hughes's Scarface at the center of 1930s gangster cinema and emphasizes the cuts, reshoots, anti-gangster prologue and title intervention imposed through its censorship battle."
    },
    {
      title: "Pre-Code: Hollywood before the censors",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/deep-focus/pre-code-hollywood",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI situates Scarface within the sound-era gangster cycle and the 1930–34 interval before stricter Production Code enforcement, supporting the case's distinction between early self-regulation pressure and later PCA enforcement."
    },
    {
      title: "Motion Picture Association of America. Production Code Administration records",
      publisher: "Academy of Motion Picture Arts and Sciences / Margaret Herrick Library",
      url: "https://digitalcollections.oscars.org/digital/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy collection overview establishes the institutional chronology used by the case: Hays introduced the Production Code in 1930; Joseph Breen began centralized PCA administration in 1934, when screenplay approval and Code seals became mandatory for member-company releases."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
