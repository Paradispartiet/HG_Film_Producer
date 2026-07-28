import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const tangerinesProductionCaseVerification = {
  scenarioId: "scenario_tangerines_2013",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "Institutional records, producer and filmmaker interviews, production credits, craft analysis and awards archives support Tangerines as a compact Estonian-Georgian antiwar chamber system built from the 1992 Abkhazian conflict, a rapidly written four-character screenplay, Guria locations, one house and orchard, restrained ensemble performance, widescreen reframing, contrasting light, patient editing, fragile domestic sound and sparse recurring music.",
  sources: [
    {
      title: "Tangerines",
      publisher: "Estonian Film Database",
      url: "https://www.efis.ee/en/keyword/54071",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The national film database identifies the 2013 Estonian-Georgian feature, Zaza Urushadze, the 1992 Abkhazian-Georgian conflict, the Estonian settler at the centre and the care of two wounded enemies."
    },
    {
      title: "The 87th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2015",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official Academy record confirms Tangerines as Estonia's nominee in the final five for the 2015 Foreign Language Film award."
    },
    {
      title: "Tangerines",
      publisher: "Golden Globes",
      url: "https://goldenglobes.com/film/tangerines/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The official Golden Globes archive records the 2015 non-English-language nomination, Zaza Urushadze's direction and the Abkhazian-war premise centred on Ivo's protection of a wounded soldier."
    },
    {
      title: "Foreign Ministry Cultural Stipends Awarded to Creators of Film Tangerines",
      publisher: "Ministry of Foreign Affairs of Estonia",
      url: "https://vm.ee/en/news/foreign-ministry-cultural-stipends-awarded-creators-film-tangerines-estonian-national-symphony",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The ministry recognises the Estonian-Georgian co-production and names Ivo Felt, Zaza Urushadze, Rein Kotov and the principal Estonian performers while praising its humane explanation of political and security conflict."
    },
    {
      title: "Tangerines Producer Ivo Felt on the Film's Anti-War Message",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/thewrap-screening-series-tangerines-producer-ivo-felt-on-the-films-anti-war-message/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Felt and Urushadze describe the universal antiwar design, the screenplay written in two weeks with only minor changes and the Guria location near the Abkhazian border standing in for the inaccessible conflict region."
    },
    {
      title: "Ivo Felt - Producer",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/309799/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "The producer describes the film's difficult path to a sales agent and major festival premiere and reports that the small Estonian-Georgian production ultimately sold in more than one hundred countries."
    },
    {
      title: "Tangerines: Review",
      publisher: "Screen International",
      url: "https://www.screendaily.com/reviews/tangerines-review/5085829.article",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The trade review records Allfilm and Cinema 24, Ivo Felt, Rein Kotov, Alexander Kuranov, Thea Telia and Niaz Diasamidze and analyses the house-bound chamber structure, crates, prejudice and antiwar transformation."
    },
    {
      title: "Georgian on My Mind: Tangerines",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/93834-georgian-on-my-mind-tangerines/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The craft analysis describes a quickly shot four-hander in one Guria location, Kotov's smooth reframing and contrasting widescreen light and Diasamidze's restrained repetitive strings as strategies against chamber-drama stasis."
    },
    {
      title: "Tangerines",
      publisher: "Irish Film Institute",
      url: "https://ifi.ie/film/tangerines",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "IFI records the 87-minute digital Estonian-Georgian feature, the 1992 Abkhazian setting, the remaining Estonian settlers and Ivo's house rule that opposing wounded soldiers keep peace while under his care."
    },
    {
      title: "Interview with producer of Tangerines: Oscar is unlikely",
      publisher: "ERR News",
      url: "https://news.err.ee/114874/interview-with-producer-of-tangerines-oscar-is-unlikely",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Estonia's public broadcaster preserves producer Ivo Felt's contemporary account of the Golden Globe and Academy campaign and the significance of the nomination for the Estonian-Georgian production."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const tangerinesVerificationRecords = [
  tangerinesProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
