import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const leviathanProductionCaseVerification = {
  scenarioId: "scenario_leviathan_2014",
  status: "verified",
  verifiedAt: "2026-07-29",
  summary: "The case's Russian public-private production, Job-Hobbes-Kohlhaas screenplay system, Barents Sea property conflict, purpose-built house and one-take demolition, whale skeleton and hybrid church construction, Mikhail Krichman 35 mm Scope photography, Anna Mass editing, Andrey Dergachev 7.1 sound, Philip Glass music and international reception are supported by ten institutional, filmmaker, professional and archival sources.",
  sources: [
    {
      title: "Leviathan",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/leviathan/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes records the 2014 competition premiere, Best Screenplay award, Non-Stop Production, Zvyagintsev and Negin screenplay, Krichman photography, Anna Mass editing, Andrey Ponkratov design, Andrey Dergachev sound and Philip Glass music."
    },
    {
      title: "A Little Person Against the Government Machine: Andrey Zvyagintsev on Leviathan",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/88764-a-little-person-against-the-government-machine-andrey-zvyagintsev-on-leviathan/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Zvyagintsev explains the Teriberka and Moscow schedule, the roughly six-month visual and lighting preparation with Mikhail Krichman, the 35 mm decision, CineLab processing and the film's public-financing context."
    },
    {
      title: "Interview with Russian Production Designer Andrey Ponkratov",
      publisher: "Australian Production Design Guild",
      url: "https://apdg.org.au/2018/07/interview-with-russian-production-designer-andrey-ponkratov",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Ponkratov documents the Teriberka search, full construction of the family house and surrounding infrastructure, planned one-take demolition, fabricated whale skeleton, soft-light strategy and physical-digital replacement church."
    },
    {
      title: "Leviathan",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/leviathan/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The European Film Academy supplies principal production and craft credits and records the film's European Film, director, actor and screenplay recognition within its international awards history."
    },
    {
      title: "Leviathan review: Andrey Zvyagintsev gives us a worm's-eye view of Russian monsters",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/leviathan-review-andrey-zvyagintsev-gives-us-worms-eye-view-russian-monsters",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "BFI analyses the widescreen northern landscape, municipal and religious power, whale imagery, Philip Glass material from Akhnaten and the film's relationship between ordinary domestic collapse and state-scale force."
    },
    {
      title: "Leviathan Director on His Dark Look at Russia",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/leviathan-director-on-his-dark-look-at-russia-were-not-moving-forward-were-walking-in-circles/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Zvyagintsev discusses the Marvin Heemeyer dispute, Heinrich von Kleist's Michael Kohlhaas, Job and Hobbes as distinct sources joined into the completed property, family and institutional tragedy."
    },
    {
      title: "Interview: Andrey Zvyagintsev on Leviathan",
      publisher: "New East Digital Archive",
      url: "https://www.new-east-archive.org/articles/show/3315/russian-film-director-andrey-zvyagintsev-leviathan",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The archive preserves contemporary discussion of the film's Russian financing, artistic independence, political reception and the director's transformation of biblical and modern political ideas into one local narrative."
    },
    {
      title: "Andrey Zvyagintsev: Leviathan grew on the shore of the Barents Sea",
      publisher: "Rossiyskaya Gazeta",
      url: "https://rg.ru/2014/07/10/dz-site.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "The production interview documents the remote Teriberka geography, the custom large-scale whale structure and the practical work required to place the story's built and skeletal forms within the coastal landscape."
    },
    {
      title: "83 Countries in Competition for 2014 Foreign Language Film Oscar",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/news/83-countries-competition-2014-foreign-language-film-oscarr",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy's official submission record identifies Leviathan as Russia's 2014 entry, supporting the film's international awards circulation and later nomination within the Foreign Language Film category."
    },
    {
      title: "The Campaign Against Leviathan in Russia",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/news/news-desk/campaign-leviathan-russia",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The contemporary report documents the conflict surrounding a partly state-financed film whose screenplay and imagery challenged official narratives of municipal, judicial, cultural and church authority."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
