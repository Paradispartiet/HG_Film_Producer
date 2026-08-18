import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aPageOfMadnessProductionCaseVerification = {
  scenarioId: "scenario_a_page_of_madness_1926",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "The National Film Archive of Japan, BFI and Aaron Gerow's research support A Page of Madness / Kurutta ippeiji as Teinosuke Kinugasa's independently produced 1926 Japanese silent film made through National Art Film and the Shinkankakuha Eiga Renmei, with Yasunari Kawabata, Kinugasa, Minoru Inuzuka and Banko Sawada sharing the documented writing/adaptation history. NFAJ credits Kohei Sugiyama for cinematography, Eiji Tsuburaya as camera assistant, Masao Uchida for lighting and Kasaku Hayashi/Seyo Ozaki for sets, and catalogs surviving material as black-and-white 35 mm silent film. Gerow and BFI support the rapid cutting, mobile/distorted/superimposed imagery and the historically important absence of intertitles, while Gerow and BFI also establish that 1926 exhibition could rely on benshi narration. The surviving rediscovered version is not identical to the original release, and later music/presentation layers are kept outside claims about synchronized 1926 production sound. The Production Case therefore teaches Japanese modernist collaboration, benshi exhibition, subjective form and archive survival without turning mental illness into a diagnostic or horror-scoring preset.",
  sources: [
    {
      title: "Kurutta ippeiji / A Page of Madness – NFAJ collection record",
      publisher: "National Film Archive of Japan",
      url: "https://nfad.nfaj.go.jp/det.php?data_id=66794",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Official archive record identifying National Art Film/Shinkankakuha Eiga Renmei, Kinugasa as producer-director, Kawabata as original author/screenwriter, Kinugasa/Inuzuka/Sawada adaptation credits, Kohei Sugiyama cinematography, Eiji Tsuburaya camera assistance, Masao Uchida lighting, Hayashi/Ozaki sets, 35 mm black-and-white silent format and the principal cast."
    },
    {
      title: "Nihon Eiga: The History of Japanese Film",
      publisher: "National Film Archive of Japan",
      url: "https://www.nfaj.go.jp/english/exhibition/historyofjapanesefilm/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "NFAJ's permanent-history exhibition gives A Page of Madness and Kinugasa a dedicated place in Japanese film history and documents surviving film, manuscript, postcard and photographic materials, grounding the case in an institutional national-cinema context rather than a decontextualized avant-garde label."
    },
    {
      title: "A Page of Madness: Cinema and Modernity in 1920s Japan",
      publisher: "University of Michigan Press",
      url: "https://press.umich.edu/Books/A/A-Page-of-Madness2",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Aaron Gerow's research describes the film as independently produced and experimentally modernist, emphasizes the involvement of Shinkankakuha writers, analyzes production/distribution/exhibition/reception using script and shooting notes, and establishes that the film surviving today is not simply identical to the originally released work."
    },
    {
      title: "A Page of Madness (1926)",
      publisher: "Routledge Encyclopedia of Modernism",
      url: "https://www.rem.routledge.com/articles/a-page-of-madness-1926",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Gerow's encyclopedia entry identifies Kinugasa, Kawabata, Inuzuka and Sawada, describes rapid cutting, optical distortion, double exposure and mobile framing, records release without intertitles but with benshi narration, and notes the 1971 rediscovery and the shorter surviving re-release version."
    },
    {
      title: "10 great films of 1926",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1926",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI describes the School of New Sensations collaboration and the film's rapid cuts, fast camera movements and non-linear storytelling, supporting a production challenge organized around subjective visual construction rather than a generic Expressionist preset."
    },
    {
      title: "A Page of Madness – BFI Player",
      publisher: "British Film Institute",
      url: "https://player.bfi.org.uk/subscription/film/watch-a-page-of-madness-1926-online",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "BFI records the work as a 1926 Japanese silent modernist film, notes the absence of intertitles in the presented version, explains that original screenings would traditionally have used a benshi, and distinguishes the rediscovered surviving presentation from the historical release context."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
