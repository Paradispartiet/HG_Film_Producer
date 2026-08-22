import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theMatrixProductionCaseVerification = {
  scenarioId: "scenario_the_matrix_1999",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "The Matrix is verified as a 1999 USA-Australia Warner Bros./Village Roadshow/Silver Pictures production made through Sydney studio and city infrastructure, source-verified Super 35 cinematography, Hong Kong-derived martial-arts choreography, wire/practical action, Manex/Animal Logic visual-effects work, array-based bullet-time photography, Zach Staenberg editing and Dane A. Davis-led sound design. AFI and BFI converge on the Wachowskis, Joel Silver, Bill Pope, Zach Staenberg and Owen Paterson; BFI records the Warner/Village Roadshow/Groucho II/Silver Pictures structure. NFSA documents interiors at Fox Studios Sydney, extensive Sydney CBD exteriors and the film's importance to Australian production capacity. Contemporary American Cinematographer coverage records the producers' Sydney decision, extensive Australian crews, Bill Pope's two-world color strategy, Panavision Platinum/Primo/Super 35 2.35:1 photography, Kodak Vision 500T 5279 for interiors and 200T 5274 for day exteriors/effects, 118 first-unit and 90 second-unit days, and four months of principal-cast training with Yuen Woo-ping before the shoot. ASC also records the Wachowskis' desire for extreme slow motion with apparent camera travel, John Gaeta's alternative solution, a contemporary Manex Flo-Mo computer-controlled Canon EOS-A2 still-camera array description and later retrospective evidence of arrays using up to 120 still cameras. These are source-specific technical records, not a license to assume one fixed array configuration for every shot. BFI's full credits separate Manex, Animal Logic, practical special effects, sound design, production sound and re-recording. The Academy records four wins: Zach Staenberg for editing, Dane A. Davis for sound-effects editing, John Reitz/Gregg Rudloff/David Campbell/David Lee for sound, and John Gaeta/Janek Sirrs/Steve Courtley/Jon Thum for visual effects. Runtime remains institutionally variant: BFI/NFSA 136 minutes and AFI 137; gameplay uses 136 while preserving the variance. Historical wire/fight descriptions remain descriptive only and are bounded by present-day qualified stunt coordination, performer assessment, certified rigging, fall protection, rehearsal, emergency planning and applicable labor/safety rules.",
  sources: [
    {
      title: "The Matrix (1999)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/61230-THE-MATRIX",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional record for 1999 release, Wachowski writing/directing, Joel Silver, Bill Pope, Zach Staenberg, Owen Paterson, Matrix Films/Warner distribution and 137-minute duration."
    },
    {
      title: "The Matrix (1999)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/cc7edbb1-17e5-509b-935b-725045d722aa/the-matrix",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record for USA/Australia, the Wachowskis, Joel Silver and 136 minutes."
    },
    {
      title: "The Matrix",
      publisher: "BFI Sight and Sound",
      url: "https://old.bfi.org.uk/sightandsound/review/151",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Detailed contemporary credit record for Warner Bros./Village Roadshow/Groucho II/Silver Pictures, Pope, Staenberg, Paterson, Gaeta/Manex/Animal Logic, Dane A. Davis, David Lee, re-recording mixers, Yuen Woo-ping and practical effects teams."
    },
    {
      title: "The Matrix: Welcome to the Machine",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/flashback-the-matrix-cinematography/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary production reporting and first-person Wachowski/Pope/Garside testimony for Sydney production, the two-world green/blue-white-sky strategy, Panavision Platinum/Primo/Super 35, Kodak 5279/5274, 118/90 unit days, high-speed work, four-month Yuen Woo-ping training/wirework and Gaeta's bullet-time solution."
    },
    {
      title: "Welcome to the Machine - Image 8",
      publisher: "American Cinematographer",
      url: "https://theasc.com/magazine/apr99/matrix/img8.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary ASC image record identifying Manex Visual Effects' Flo-Mo system as an array of computer-controlled Canon EOS-A2 still cameras whose frames could be animated and interpolated. Used only as a source-specific setup description."
    },
    {
      title: "The End of the Century as We Knew It — The 1990s",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/the-end-of-the-century-as-we-knew-it-the-1990s/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC retrospective preserving John Gaeta's description of sequential camera arrays and documenting use of up to 120 still cameras with a laser-guided tracking system. This is not generalized into one fixed configuration for every bullet-time shot."
    },
    {
      title: "Looking back at The Matrix in Australia",
      publisher: "National Film and Sound Archive of Australia",
      url: "https://www.nfsa.gov.au/stories/articles/re-entering-the-matrix",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Australian national archive record for Fox Studios interiors, Sydney CBD locations, the 1998 shoot context and the production's role in establishing Sydney as an international production center."
    },
    {
      title: "Hugo Weaving on Agent Smith and The Matrix",
      publisher: "National Film and Sound Archive of Australia",
      url: "https://www.nfsa.gov.au/collection/item/hugo-weaving-agent-smith-and-matrix",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "NFSA oral-history record in which Weaving discusses rigorous Los Angeles training with fellow actors and shooting at newly opened Fox Studios Sydney."
    },
    {
      title: "The 72nd Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2000",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "Primary Academy record for Matrix wins in film editing, sound-effects editing, sound and visual effects, with named recipients. Awards remain downstream recognition rather than workflow proof."
    },
    {
      title: "The Matrix",
      publisher: "National Film and Sound Archive of Australia",
      url: "https://tickets.nfsa.gov.au/Events/The-Matrix",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Current NFSA collection/screening record giving a 136-minute duration; retained alongside AFI's 137-minute record as institutional/version variance."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
