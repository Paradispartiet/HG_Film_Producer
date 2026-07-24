import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const tasteOfCherryVerificationRecords = [
  {
    scenarioId: "scenario_taste_of_cherry_1997",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Iran-France production, Kiarostami preparatory sketch, separately filmed car conversations, fixed camera positions, nonprofessional encounters, Tehran earthwork landscape, 35 mm feature image, monaural sound, self-editing, video epilogue and Palme d'Or legacy are supported by filmmaker interviews, institutional records, restoration materials and festival archives.",
    sources: [
      {
        title: "Taste of Cherry",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/242-taste-of-cherry",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Criterion documents the Kiarostami-Payvar-Mirshekari-Delpak creative team, colour 1.66:1 presentation, 4K restoration, uncompressed monaural track, 1997 filmmaker interview and Project, the preparatory sketch made with Bahman Kiarostami."
      },
      {
        title: "Palme d'or: the 1990s",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/2020/palme-d-or-the-1990s/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing"],
        note: "Cannes records the shared 1997 Palme d'Or and describes Kiarostami's resource-limited writer-director-editor-producer model, Tehran-suburb journey and conversation-led humanist structure."
      },
      {
        title: "Taste of Cherry",
        publisher: "Harvard Film Archive",
        url: "https://harvardfilmarchive.org/calendar/taste-of-cherry-2023-05",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Harvard documents the Iran-France 35 mm colour production, bare earthwork landscapes, offscreen director-passenger position, participatory spectator design and ending that transforms rather than contains the fiction."
      },
      {
        title: "Taste of Cherry",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/bee435cd-f132-54a7-8180-8118f64536f2/taste-of-cherry",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "BFI records the 1997 Iranian feature, Kiarostami's writing and direction, principal nonprofessional cast and its later position in both critics' and directors' Sight and Sound polls."
      },
      {
        title: "Taste of Cherry",
        publisher: "Abbas Kiarostami Foundation",
        url: "https://kiarostami.org/filmography/taste-of-cherry",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "sound"],
        note: "The official filmography confirms the Iran-France feature, 95-minute colour presentation, Palme d'Or and the repeated hilly-outskirts journey through which three passengers offer different positions on mortality and choice."
      },
      {
        title: "Taste of Cherry",
        publisher: "Turner Classic Movies",
        url: "https://www.tcm.com/articles/276345/taste-of-cherry",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "TCM documents that the actors generally never worked together, that Kiarostami occupied the unseen opposite seat and elicited material as interviewer or provocateur, and that editing constructed the apparent two-person conversations."
      },
      {
        title: "Abbas Kiarostami interview",
        publisher: "The Iranian",
        url: "https://www.iranian.com/Arts/Aug98/Kiarostami/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Kiarostami describes the two-month emotional demand on Homayoun Ershadi and his dispute over fixing the camera to the car window or hood, accepting reflections and partial facial concealment as part of the method."
      },
      {
        title: "Taste of Cherry",
        publisher: "Busan International Film Festival",
        url: "https://www.biff.kr/eng/html/archive/arc_history_view.asp?m_idx=23813&pyear=2016",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Busan records colour 35 mm format and analyses the repeated road dialogue, shifts from medium portraits to long landscape views, encounter structure and rejection of conventional closure through the filming-crew epilogue."
      },
      {
        title: "Ta'm e guilass",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/smagen-af-kirsebaer",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "DFI independently confirms Abbas Kiarostami Productions, Kiarostami's screenplay and editing, Homayoun Payvar's cinematography, the principal performers and the Iranian production record."
      },
      {
        title: "How the Film Distributor Zeitgeist Made History",
        publisher: "The New Yorker",
        url: "https://www.newyorker.com/culture/the-front-row/how-the-film-distributor-zeitgeist-made-history",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The New Yorker documents the film's censorship and export difficulty, Zeitgeist acquisition, US art-house impact, quasi-documentary attention to earthworks and faces, and the low-resolution crew footage that reopens the ending."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
