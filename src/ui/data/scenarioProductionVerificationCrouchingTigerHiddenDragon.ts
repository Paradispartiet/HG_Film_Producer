import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const crouchingTigerHiddenDragonProductionCaseVerification = {
  scenarioId: "scenario_crouching_tiger_hidden_dragon_2000",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Crouching Tiger, Hidden Dragon is verified as a 2000 transnational Chinese-language production case whose Super 35 photochemical photography, wire-assisted physical action, selective digital cleanup, production/costume design, editorial authorship and score can be taught without collapsing them into a generic digital-effects narrative. The BFI records the film as a People's Republic of China/Taiwan/USA/Hong Kong production, directed by Ang Lee, produced by Bill Kong, Hsu Li-kong and Lee, written by James Schamus, Wang Hui-ling and Tsai Kuo-jung, and running 120 minutes. The Academy record identifies Peter Pau for cinematography, Tim Yip for art direction and costume design, Tim Squyres for editing and Tan Dun for score. American Cinematographer's January 2001 production account documents the five-month shoot, Super 35 capture, Moviecam Compact and Arri 435ES cameras, Zeiss primes, Kodak 5277/5245/5246 stocks, normal Technicolor New York processing, CFI optical blowup, a documented but unused digital-blowup test, two-camera action coverage, Yuen Woo-ping's wire choreography, Asia Cine Digital's more-than-300-shot cleanup/color work and roughly 60 Manex shots. Ang Lee's DGA account independently describes the bamboo action as physically manipulated wire work involving scores of crew, with computer correction used selectively. Tan Dun's retrospective account establishes that the score concept was developed with Lee before production and that action scoring required ballet-like synchronization; Yo-Yo Ma's cello performance belongs to score production rather than production sound. The verification therefore supports a precise exercise in transnational production, Super 35 camera/lighting choices, physical choreography and safety, selective digital post, editorial geography and score synchronization while rejecting unsupported claims that principal photography was digital, that actors were replaced by CGI, that the digital-blowup test became the release workflow, or that score sources establish microphone/ADR/Foley practice.",
  sources: [
    {
      title: "Crouching Tiger Hidden Dragon (2000)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/c1c5ce3b-f398-5864-a681-96eb0cb1f1d7/crouching-tiger-hidden-dragon",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional film record supporting 2000, the People's Republic of China/Taiwan/USA/Hong Kong production-country set, Ang Lee, producers Bill Kong/Hsu Li-kong/Lee, screenwriters James Schamus/Wang Hui-ling/Tsai Kuo-jung and 120-minute runtime."
    },
    {
      title: "Crouching Tiger, Hidden Dragon Delivers High-Flying Adventure",
      publisher: "American Cinematographer / American Society of Cinematographers",
      url: "https://theasc.com/article/crouching-tiger-hidden-dragon-cinematography/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "January 2001 production reporting with Peter Pau documenting Super 35, Moviecam Compact and Arri 435ES cameras, Zeiss primes, Kodak 5277/5245/5246 stocks, Technicolor processing, CFI optical blowup, two-camera action coverage, wire work, Asia Cine Digital/Manex post, five-month production chronology, Tim Yip's design collaboration and the unused digital-blowup test."
    },
    {
      title: "Flying Tiger",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/craft/dgaq/issues/0702-summer-2007/shot-to-remember-ang-lee",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Ang Lee's account of the bamboo sequence supports physical wire-assisted performance, large manual pull teams, cranes and selective computer correction rather than CGI character replacement."
    },
    {
      title: "The 73rd Academy Awards | 2001",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2001",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional awards record confirming Peter Pau (cinematography), Tim Yip (art direction/costume), Tim Squyres (film editing), Tan Dun (original score), Ang Lee (directing), producers Bill Kong/Hsu Li Kong/Ang Lee and the credited screenwriters."
    },
    {
      title: "For composer Tan Dun, Yo-Yo Ma proved to be key for ‘Crouching Tiger’ score",
      publisher: "Chicago Symphony Orchestra",
      url: "https://cso.org/experience/article/21324/for-composer-tan-dun-yo-yo-ma-proved-to-be-ke",
      sourceKind: "archive_feature",
      supports: ["overall", "sound", "editing"],
      note: "Retrospective publication of Tan Dun's account supporting years-long pre-conceptual score discussions with Ang Lee, a ten-day composition period after shooting and ballet-like synchronization challenges for martial-arts sequences. Used for score workflow, not as evidence about production sound recording."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
