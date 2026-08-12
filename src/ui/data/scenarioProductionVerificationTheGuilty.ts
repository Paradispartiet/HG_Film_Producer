import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theGuiltyProductionCaseVerification = {
  scenarioId: "scenario_the_guilty_2018",
  status: "verified",
  verifiedAt: "2026-08-12",
  summary: "The Guilty's New Danish Screen low-budget context, one-location real-time concept, chronological 13-day three-camera shoot, long-take performance method, Alexa/Master Prime photography, live off-screen calls, researched call-centre design and sound-built unseen world are supported by filmmaker, cinematographer, institutional and festival sources.",
  sources: [
    {
      title: "Playing with Audiences' imagination",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/english/news/playing-audiences-imagination",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Gustav Möller and producer Lina Flint document the limited New Danish Screen budget, real-time one-location concept, chronological 13-day shoot, three cameras, 5–35 minute takes, live telephone actors, dispatch-centre research, constructed office location and sound recordings used to create the unseen exterior world."
    },
    {
      title: "Lighting for Three Different Angles at the Same Time: DP Jasper J. Spanning on The Guilty",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/104746-lighting-for-three-different-angles-at-the-same-time-dp-jasper-j-spanning-on-the-guilty/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Spanning documents the 13-day three-camera production, single modified location, 45-minute dramatic section, full-duration takes, Alexa SXT/Mini/Amira package, Master and Ultra Primes, practical office lighting and Baselight finish."
    },
    {
      title: "Gustav Möller: D'habitude, le son ajoute au film, dans The Guilty, le son peint le film",
      publisher: "AlloCiné",
      url: "https://www.allocine.fr/article/fichearticle_gen_carticle=18673980.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Möller explains the long takes with three cameras and details Oskar Skriver and Philip Flindt's sound method: recorded car, bar, road and siren environments become more vivid as Asger becomes more involved, so sound constructs the unseen film."
    },
    {
      title: "Gustav Möller • Director of The Guilty",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/355506/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Möller traces the project to a real 911 recording whose unseen events generated strong mental images and explains his belief that production boundaries can increase creativity, supporting the film's audience-imagination and constraint-led design."
    },
    {
      title: "THE GUILTY",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-guilty/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The European Film Academy record independently confirms Möller and Albertsen's screenplay, Lina Flint's production, Jasper Spanning's cinematography, Carla Luffe's editing, Gustav Pontoppidan's production design, Ida Skov Gudmundsen-Holmgren's costume and makeup, Oskar Skriver's sound design and the composers."
    },
    {
      title: "2018 Sundance Film Festival Awards Announced",
      publisher: "Sundance Institute",
      url: "https://www.sundance.org/blogs/2018-sundance-film-festival-awards-announced-3/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Sundance records The Guilty as the 2018 World Cinema Dramatic Audience Award winner and independently identifies Gustav Möller, co-screenwriter Emil Nygaard Albertsen, producer Lina Flint and the principal voice-and-screen cast."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
