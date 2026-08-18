import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const publicEnemyProductionCaseVerification = {
  scenarioId: "scenario_the_public_enemy_1931",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, Library of Congress, BFI and the Library of Congress Production Code history support The Public Enemy as a 1931 Warner Bros. studio-and-gangster production rather than a generic crime preset. AFI records Warner Bros. Pictures as production and distribution company, William A. Wellman directing, Kubec Glasmon and John Bright writing from the Beer and Blood story, Harvey Thew adapting, Dev Jennings photographing, Max Parker handling art direction, Edward M. McDermott editing, Earl Luick wardrobe, Perc Westmore makeup and David Mendoza as Vitaphone orchestra conductor. AFI also corrects the frequently repeated claim that Wellman switched Cagney and Edward Woods between lead and sidekick roles. Library of Congress identifies the film as an early Warner sound crime saga and describes Cagney's performance as star-making; that later status is kept on the reception side of the timeline. The Code chronology is also bounded: the Production Code was introduced in 1930, but centralized PCA enforcement under Joseph Breen and the mandatory seal regime began in 1934. The case therefore models 1931 self-regulation/censorship conditions without applying a later PCA switch retroactively. AFI's 74-or-83-minute duration record and the Library's 83-minute presentation are retained as catalogue/version provenance, and the case does not invent lenses, film stock, microphone models, recording channels, exact studio/location schedules, stunt methods or effects techniques unsupported by the locked sources.",
  sources: [
    {
      title: "The Public Enemy (1931)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/3860-THE-PUBLIC-ENEMY",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies Warner Bros. production/distribution, Wellman, Bright/Glasmon/Thew writing credits, Dev Jennings photography, Max Parker art direction, Edward M. McDermott editing, Earl Luick wardrobe, Perc Westmore makeup, David Mendoza's Vitaphone orchestra-conductor credit, sound/black-and-white properties, release date, duration range and the correction of the Cagney/Woods role-swap myth."
    },
    {
      title: "The Public Enemy (1931) — National Film Registry description",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "The Library describes The Public Enemy as an early Warner Bros. sound crime saga rooted in the studio's gritty street tradition and identifies Cagney's performance as star-making; the Registry listing records its 1998 preservation recognition."
    },
    {
      title: "The Public Enemy (1931)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/9fdaa05f-3c4d-58a4-aa44-53ea85add6ff/the-public-enemy",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI independently records the 1931 US feature, William A. Wellman as director, Kubec Glasmon and John Bright as writers, and James Cagney, Jean Harlow and Edward Woods among the principal cast."
    },
    {
      title: "When ‘Pre-’ Met ‘Code’ — Eighty Years Ago Today",
      publisher: "Library of Congress / Now See Hear!",
      url: "https://blogs.loc.gov/now-see-hear/2014/07/when-pre-met-code-eighty-years-ago-today/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The Library explains that the Production Code existed from 1930, that the 1930–34 period is more accurately pre-enforcement, and that the Production Code Administration under Joseph Breen began mandatory approval/seals in July 1934. It also explicitly connects Warner Bros. to gritty contemporary crime and social stories during this interval."
    },
    {
      title: "Motion Picture Association of America. Production Code Administration records",
      publisher: "Academy of Motion Picture Arts and Sciences / Margaret Herrick Library",
      url: "https://digitalcollections.oscars.org/digital/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy collection overview documents the 1930 Production Code and Joseph Breen's 1934 appointment to oversee the PCA, supporting the institutional chronology used to prevent retroactive 1934-style enforcement logic in the 1931 case."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
