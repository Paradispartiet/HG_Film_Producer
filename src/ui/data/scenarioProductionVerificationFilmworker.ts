import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const filmworkerProductionCaseVerification = {
  scenarioId: "scenario_filmworker_2017",
  status: "verified",
  verifiedAt: "2026-08-09",
  summary: "Tony Zierra's Filmworker is verified as an archive-and-witness cinema-history documentary built around Leon Vitali's largely invisible production labor for Stanley Kubrick: long-form testimony, collaborator interviews, film excerpts and production artifacts are edited into a biography of casting, actor coaching, location work, print checking, color timing, sound, marketing and restoration. Eleven inspectable sources from eleven publishers support the production method, credits, festival history and legacy.",
  sources: [
    {
      title: "Filmworker, behind the scenes with Stanley Kubrick",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2017/filmworker-behind-the-scenes-with-stanley-kubrick/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Tony Zierra explains that he met Vitali while making a broader Kubrick documentary and rebuilt the project around their complex working relationship and the principle of doing whatever was necessary to make and maintain the films."
    },
    {
      title: "FILMWORKER",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/filmworker/",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "The official Cannes Classics record verifies the 2017 cinema-documentary selection, True Studio Media production contact, Tony Zierra's direction and editing, Chris Jenkins's sound credit and the extensive roster of on-camera collaborators."
    },
    {
      title: "Filmworker (2017)",
      publisher: "IDFA",
      url: "https://www.idfa.nl/en/film/f0d57b00-e9a3-415d-8be2-b7be72944923/filmworker/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "IDFA records Tony Zierra as director, cinematographer and editor, Elizabeth Yoffe and Zierra as producers, Luke Jennings and David Ben Shannon for music, and describes the use of film excerpts, interviews and production anecdotes as documentary evidence."
    },
    {
      title: "FILMWORKER",
      publisher: "AFI FEST",
      url: "https://fest.afi.com/2017/cinemas-legacy-2017/filmworker/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "AFI FEST verifies the 2017 Cinema's Legacy presentation, True Studio Media, producers Elizabeth Yoffe and Tony Zierra, Zierra's cinematography and editing, the credited composers and the documentary's focus on practical production labor."
    },
    {
      title: "Filmworker",
      publisher: "Film at Lincoln Center",
      url: "https://www.filmlinc.org/nyff2017/films/filmworker/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The 55th New York Film Festival record confirms Tony Zierra, the 2017 United States production and 94-minute runtime while framing the film around Vitali's total availability, personal cost and decades of behind-the-scenes work."
    },
    {
      title: "Doc Star of the Month: Leon Vitali, Tony Zierra's Filmworker",
      publisher: "International Documentary Association",
      url: "https://www.documentary.org/column/doc-star-month-leon-vitali-tony-zierrasfilmworker",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Vitali describes Filmworker as essentially a two-person Zierra-Yoffe production and states that he did not interfere with or censor shooting or editing; the interview also documents his work from casting and actor coaching to sound, color and restoration."
    },
    {
      title: "Cannes 2017: Tony Zierra’s Filmworker",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/4562-cannes-2017-tony-zierra-s-filmworker",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Criterion's Cannes dossier synthesizes contemporary reporting on the film's talking-head follow-up method, collaborator testimony and examples of Vitali's work in casting, acting coaching, print inspection and color timing, while also preserving critical debate about documentary balance."
    },
    {
      title: "It’s Kind of Heartbreaking Sometimes to See Actors Try So Hard: Leon Vitali on the Acting Profession, Working with Stanley Kubrick, and Tony Zierra’s Doc, Filmworker",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/105323-its-kind-of-heartbreaking-sometimes-to-see-actors-try-so-hard-leon-vitali-on-the-acting-profession-and-his-stanley-kubrick-doc-filmworker/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Vitali discusses coaching actors, choreographing action, restoration and 4K timing while describing filmmaking as collective labor; the interview supports the documentary's argument that the celebrated films depended on a large, often uncredited working community."
    },
    {
      title: "Cannes Film Festival: A Six-Letter Word",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/article/cannes-2017-lover-for-a-day-the-florida-project/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "Film Comment's Cannes report identifies Filmworker as a portrait of Vitali's extreme behind-the-scenes commitment and specifically records his work finding Danny Lloyd and personally checking prints, video transfers and soundtrack compilations."
    },
    {
      title: "Cannes 2017: Stanley Kubrick's mysterious right-hand man steps out of the shadows",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-et-mn-kubrick-leon-vitali-20170518-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "The Cannes interview documents Zierra's multi-year Kubrick project changing direction after he met Vitali and saw boxes of notebooks, props, photographs and artifacts, while Vitali details his shifting work as casting agent, editor, translator, color corrector and production aide."
    },
    {
      title: "Cannes 2017: Claire's Camera, Filmworker, Unforgiven",
      publisher: "RogerEbert.com",
      url: "https://www.rogerebert.com/festivals/cannes-2017-claires-camerafilmworker-unforgiven",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The Cannes review highlights Zierra's use of follow-up questions and numerous witnesses who knew Vitali, describing a method that builds a more complicated portrait than a simple saintly tribute and makes the labor behind great art the documentary's subject."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
