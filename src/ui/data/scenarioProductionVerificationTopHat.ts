import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const topHatProductionCaseVerification = {
  scenarioId: "scenario_top_hat_1935",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, the Academy, Library of Congress and BFI support Top Hat as an RKO Astaire-Rogers musical production built through rehearsal, song-script integration, studio design, full-body dance, recording and post-1934 PCA regulation rather than a generic elegance preset. AFI records RKO Radio Pictures as production and distribution company, A Pandro S. Berman Production, Mark Sandrich directing, Dwight Taylor and Allan Scott writing, David Abel photographing, Van Nest Polglase and Carroll Clark on art direction, William Hamilton editing, Thomas Little set dressing, Bernard Newman gowns, Max Steiner as music director, Hugh McDowell Jr. recording, Philip Faulkner music recording, Vernon Walker photographic effects, William Hetzler dance direction and Hermes Pan staging ensembles. Irving Berlin wrote the five featured songs and, in AFI's modern-source production history, participated in script conferences while Sandrich, Taylor, Scott and Berman iterated the screenplay. AFI documents Astaire rehearsing for five weeks, 125 rehearsal hours for The Piccolino, photography from 8 April to 5 June 1935, RCA Victor sound, PCA certificate no. 1099 and a 99–100 minute release form. It also documents the Cheek to Cheek feather-dress problem, censor changes to dialogue/characterization, July preview cuts, varying prints and later reissue shortening. The Academy records four nominations, including Outstanding Production, Art Direction, Dance Direction and Cheek to Cheek; Library of Congress records the film's 1990 National Film Registry selection. BFI independently identifies the RKO/Sandrich/Berman/Taylor-Scott/Astaire-Rogers production and emphasizes the film's art-deco, star-pair dance system. The case does not universalize general Astaire-film camera practices into unsupported claims about every Top Hat number and does not invent exact lenses, stock, microphones, track layouts or a specific special dolly unless directly sourced to this production.",
  sources: [
    {
      title: "Top Hat (1935)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/6707-TOP-HAT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies RKO/Berman/Sandrich/Taylor-Scott/Abel/Polglase-Clark/Hamilton/Newman/Steiner/McDowell/Faulkner/Walker/Hetzler/Pan/Berlin, production dates, RCA Victor, PCA 1099, 99–100-minute runtime, rehearsal history, preview cuts, censorship interventions and later version variation."
    },
    {
      title: "The 8th Academy Awards | 1936",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1936",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy records Top Hat nominations for Outstanding Production, Art Direction, Dance Direction and Cheek to Cheek for Music (Song), keeping awards as later reception evidence."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library of Congress lists Top Hat (1935) as selected to the National Film Registry in 1990."
    },
    {
      title: "Top Hat (1935)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/7205d174-cb74-5045-bdf3-510c9dcc80dc/top-hat",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI independently records the 1935 RKO film, Mark Sandrich, Pandro S. Berman, Dwight Taylor, Allan Scott and the Astaire-Rogers pairing."
    },
    {
      title: "Ginger Rogers: 6 essential dance routines",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/ginger-rogers-6-essential-dance-routines",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI's Cheek to Cheek discussion emphasizes Rogers's performance and the black-and-white art-deco staging, supporting a star-pair/full-body spatial reading without reducing the film to Astaire alone."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
