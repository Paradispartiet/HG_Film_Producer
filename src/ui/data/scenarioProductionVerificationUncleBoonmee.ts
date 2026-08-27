import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const uncleBoonmeeProductionCaseVerification = {
  scenarioId: "scenario_uncle_boonmee_2010",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Uncle Boonmee Who Can Recall His Past Lives is verified as a 2010 transnational Production Case whose analogue capture, regional-memory project structure, performance strategy, day-for-night photography, editorial/post supervision and location-derived sound make it a precise Chapter 18 countercurrent to a simple digital-transition narrative. BFI and the Festival de Cannes establish Apichatpong Weerasethakul as writer-director, a 113-minute institutional runtime, the United Kingdom/Thailand/France/Germany/Spain production frame and the credited cinematographers Sayombhu Mukdeeprom, Yukontorn Mingmongkon and Charin Pengpanich. The official Strand press package places the feature inside the wider Primitive project in Isan and Nabua; credits Akekarat Homlaor, Akritchalerm Kalayanamitr, Koichi Shimizu and Lee Chatametikool; records Apichatpong's autobiographical link between his father's kidney failure and Boonmee's medical equipment; documents his preference for amateur performers when evoking early-cinema acting; and identifies memories of Thai 16 mm television, direct lighting, mechanically repeated lines and simple supernatural staging as deliberate reference points. A direct production interview establishes Super 16 acquisition rather than digital capture and explicitly connects that choice to memory of cinema that was dying or transforming. That acquisition evidence is kept separate from the Strand distributor's 35 mm release-format specification. A direct A.V. Club interview establishes natural-light scouting and a day-for-night method in which foliage and trunks were selected for their reaction to light and a blue treatment was applied in post. Thai Film Archive testimony independently reinforces Apichatpong and Sayombhu's long collaboration, preference for natural light and the distinct concentration imposed by film capture, without being used to invent Uncle Boonmee-specific camera hardware. Akritchalerm Kalayanamitr's sound interview establishes foregrounded insects, birds, water and weather; ambience recorded on or near locations with a stereo microphone and digital recorder; and Ratchaburi as a documented source for much of the jungle ambience. Cannes' Palme d'Or record supplies downstream reception evidence only. Exact camera body, lens, negative stock, exposure, lab route, shot-to-cinematographer attribution, grading values, effects count and generalized political-history claims remain outside the high-confidence boundary unless title-specific evidence establishes them.",
  sources: [
    {
      title: "Uncle Boonmee Who Can Recall His Past Lives (2010)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/80bae183-0ac7-5aa2-ab29-f11fb2a8ac2a/uncle-boonmee-who-can-recall-his-past-lives",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional film record supporting 2010, the transnational country frame, 113-minute runtime, Apichatpong's writing/directing and principal production identity."
    },
    {
      title: "Lung Boonmee Raluek Chat (Uncle Boonmee Who Can Recall His Past Lives)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/lung-boonmee-raluek-chat/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Official Cannes film record supporting the 2010 Competition entry, 113-minute runtime, country frame and cinematography credits for Sayombhu Mukdeeprom, Yukontorn Mingmongkon and Charin Pengpanich."
    },
    {
      title: "Uncle Boonmee Who Can Recall His Past Lives - Press Notes",
      publisher: "Strand Releasing",
      url: "https://strandreleasing.com/wp-content/uploads/2015/01/Uncle-Boonmee-PK.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official distributor press package supporting the Primitive-project relationship, Isan/Nabua context, director statement and interview, amateur-performer rationale, remembered Thai 16 mm television references, personal kidney-failure provenance, crew credits, editor/post supervisor Lee Chatametikool, sound designers Akritchalerm Kalayanamitr and Koichi Shimizu, and 35 mm release-format specification."
    },
    {
      title: "Cinema Reborn: Apichatpong Weerasethakul Interview",
      publisher: "ScreenAnarchy",
      url: "https://screenanarchy.com/2011/02/memories-and-reincarnation-apichapong-weerasethakul-interview.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct filmmaker testimony establishing Super 16 acquisition and explaining that film rather than video fit a project about memories of cinema that was dying or transforming."
    },
    {
      title: "Apichatpong Weerasethakul",
      publisher: "The A.V. Club",
      url: "https://www.avclub.com/apichatpong-weerasethakul-1798224451",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct filmmaker interview supporting location-light scouting, the day-for-night strategy, blue post treatment and the search for foliage and tree trunks that would react correctly to light at specific times."
    },
    {
      title: "Sound on Film: Uncle Boonmee",
      publisher: "Designing Sound",
      url: "https://designingsound.org/2011/02/04/sound-on-film-uncle-boonmee/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Interview with sound designer Akritchalerm Kalayanamitr supporting foregrounded natural ambience, on/near-location recording, stereo-microphone capture to a digital recorder, Ratchaburi jungle ambience and the editorial value of rare clean field recordings."
    },
    {
      title: "Uncle Boonmee: 10 Years Later",
      publisher: "Thai Film Archive",
      url: "https://fapot.or.th/main/information/article/view/298/1",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Archive conversation supporting Apichatpong's preference for film texture, the different concentration imposed by film workflows and his long-standing collaboration and shared natural-light philosophy with Sayombhu Mukdeeprom; used as contextual craft evidence, not as proof of undocumented Uncle Boonmee hardware."
    },
    {
      title: "Retrospective - 2010 Awards",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/retrospective/2010/awards/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official reception record confirming the 2010 Palme d'Or; used only as downstream historical reception evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
