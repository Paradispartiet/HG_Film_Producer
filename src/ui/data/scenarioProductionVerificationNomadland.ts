import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const nomadlandProductionCaseVerification = {
  scenarioId: "scenario_nomadland_2020",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Nomadland is verified as the first Chapter 19 Production Case selected by the balanced-production scheduler, using institutional metadata and title-specific cinematography, production, editing, sound and distribution reporting. La Biennale di Venezia records a 108-minute Chloé Zhao film with Zhao as director, screenwriter and editor, Joshua James Richards as cinematographer, Sergio Diaz for sound, production through Highwayman Films, Hear/Say Productions and Cor Cordium Production with Mollye Asher and Dan Janvey, and adaptation from Jessica Bruder's nonfiction book. Searchlight's film record identifies real nomads Linda May, Swankie and Bob Wells alongside Frances McDormand. American Cinematographer documents an approximately 25-person key crew, broad shot planning, roughly 90 percent available-light/practical lighting, Arri Alexa Mini and Amira cameras, Arri/Zeiss Ultra Prime lenses, frequent 32mm close-ups and the title-specific choice to work without a makeup artist on set. Filmmaker Magazine's interview with Richards documents a roughly 25-to-30-person crew; work at the Rubber Tramp Rendezvous, a beet harvest and an Amazon fulfillment center; an Alexa Mini on Ronin 2 plus Amira on EasyRig or shoulder; wide Ultra Primes no longer than 35mm; practical-heavy lighting; and a relationship-led method in which participants could define camera boundaries in their own spaces. BAFTA records Zhao discussing editing Nomadland herself and deciding in post whether tonal variation captured during production should remain. SoundWorks documents a four-month fall-2018 road production, van living by McDormand, Zhao and other crew members, supervising sound editor Sergio Diaz and re-recording mixer Zach Seivers, and a landscape-specific sound-design strategy intended to remain experiential rather than manipulate audience feeling through generic cues. Screen Daily's 2019 acquisition report establishes that Fox Searchlight acquired worldwide rights after McDormand and Peter Spears had optioned Bruder's book and after the independently structured production had been assembled, preserving a necessary boundary between production authorship and later rights/distribution ownership. Exact budget and financing shares, full acquisition terms, participant contracts and compensation, private consent documentation, complete call sheets, every location date, exhaustive lens-by-shot metadata, exposure values, lighting inventory, production-sound kit, editorial infrastructure, color transforms, plug-in inventories and final mix routing remain outside the verified layer.",
  sources: [
    {
      title: "Nomadland",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/cinema/2020/venezia-77-competition/nomadland",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional festival record supporting the 108-minute runtime, Chloé Zhao as director/screenwriter/editor, Joshua James Richards as cinematographer, Sergio Diaz for sound, principal production entities/producers and adaptation from Jessica Bruder's book."
    },
    {
      title: "Nomadland",
      publisher: "Searchlight Pictures",
      url: "https://www.searchlightpictures.com/nomadland/?pp=1",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Studio film record identifying Frances McDormand and real nomads Linda May, Swankie and Bob Wells in Zhao's film."
    },
    {
      title: "Nomadland: New Naturalism",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/nomadland-new-naturalism/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific Zhao/Richards reporting documenting the approximately 25-person key crew, broad shot-list, roughly 90 percent available light/practicals, Alexa Mini and Amira, Ultra Primes, 32mm close-ups and the no-makeup-artist-on-set naturalistic choice."
    },
    {
      title: "How Do You Connect with Someone with a Camera? It's a Hard Thing to Talk About: DP Joshua James Richards on Shooting Nomadland",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/111365-how-do-you-connect-with-someone-with-a-camera-its-a-hard-thing-to-talk-about-dp-joshua-james-richards-on-shooting-nomadland/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "screenplay"],
      note: "Richards interview supporting the roughly 25-to-30-person crew, RTR/beet-harvest/Amazon locations, Alexa Mini/Ronin 2 and Amira/EasyRig-or-shoulder configurations, wide Ultra Primes, practical lighting and relationship/participant-boundary method."
    },
    {
      title: "BAFTA Film Sessions 2021: Director",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/bafta-film-sessions-2021-director/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "BAFTA discussion in which Zhao confirms editing Nomadland herself and describes deciding in the edit how much tonal variation captured during production to retain."
    },
    {
      title: "The Sound of Nomadland",
      publisher: "SoundWorks Collection",
      url: "https://next.soundworkscollection.com/posts/the-sound-of-nomadland",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Title-specific interview with supervising sound editor Sergio Diaz and re-recording mixer Zach Seivers, also documenting the four-month fall-2018 road production, van living by key participants and the landscape-specific, non-manipulative sound strategy."
    },
    {
      title: "Fox Searchlight acquires worldwide rights on Chloé Zhao's Nomadland",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/news/fox-searchlight-acquires-worldwide-rights-on-chloe-zhaos-nomadland/5136919.article",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "Contemporaneous February 2019 acquisition reporting supporting later Searchlight worldwide-rights ownership, named producers and the earlier McDormand/Spears option of Bruder's book; used specifically to keep development/production separate from later distribution ownership."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
