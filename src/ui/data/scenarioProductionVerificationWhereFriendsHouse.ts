import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const whereIsTheFriendsHouseVerificationRecords = [
  {
    scenarioId: "scenario_where_is_the_friend_s_house_1987",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Kanoon production context, child-centred ethical quest, Koker location system, nonprofessional performances, repeated village route, restrained editing, credited monaural sound work and festival breakthrough are supported by institutional, distributor and archival film sources.",
    sources: [
      {
        title: "Where Is the Friend's House?",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/28638-where-is-the-friends-house",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Criterion records the simple notebook quest, the movement across two towns, rural-society perspective, 1.66:1 colour presentation, 2K restoration, monaural soundtrack and principal writing, photography, editing and sound credits."
      },
      {
        title: "The Koker Trilogy: Journeys of the Heart",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/6555-the-koker-trilogy-journeys-of-the-heart",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "Godfrey Cheshire documents Kiarostami's Kanoon background, the decision to direct the script, shooting in and near Koker, the two Fajr prizes, the 1989 Locarno breakthrough and the film's place as the first dramatic feature of Kiarostami's post-revolutionary period."
      },
      {
        title: "Where Is the Friend's House? (1987)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/49966a7c-be06-5318-bb99-7a84988bd550/where-is-the-friends-house",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "BFI confirms the Iranian production, director, producer, writer, principal cast and the film's high placement in both the 2022 Sight and Sound critics' and directors' polls."
      },
      {
        title: "Where Is the Friend's House?",
        publisher: "Eye Filmmuseum",
        url: "https://www.eyefilm.nl/en/whats-on/where-is-the-friends-house/1405393",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "Eye identifies the nonprofessional cast, the desolate landscape, the neighbouring-village journey and the Locarno Golden Leopard competition context."
      },
      {
        title: "Where Is the Friend's House?",
        publisher: "DreamLab Films",
        url: "https://www.dreamlabfilms.com/where-is-the-friends-house/",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The international-sales record identifies Kanoon as producer and confirms Farhad Saba's photography, Kiarostami's editing, Aminollah Hossein's music, Reza Nami's set design and the credited sound designer, mixer and recordists."
      },
      {
        title: "Where Is the Friend's House?",
        publisher: "Film at Lincoln Center",
        url: "https://www.filmlinc.org/films/where-is-the-friends-house/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Film at Lincoln Center describes the ethical conflict between adult obedience and conscience, Kiarostami's use of non-actors, the centrality of countryside and journey, visual symbolism and the Bronze Leopard recognition."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
