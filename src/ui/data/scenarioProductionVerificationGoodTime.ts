import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const goodTimeProductionCaseVerification = {
  scenarioId: "scenario_good_time_2017",
  status: "verified",
  verifiedAt: "2026-08-09",
  summary: "Good Time is verified as a New York independent crime-thriller production that converts the Safdies' street-location and reality-mining practice into a tightly escalating pulp system: character-driven screenplay, mixed professional and nonprofessional performance, 35-day Queens/Brooklyn location work, 2-perf Kodak 35 mm, saturated practical night lighting, pressure-led editing, environmental sound and Daniel Lopatin's electronic score are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Good Time",
      publisher: "A24",
      url: "https://a24films.com/films/good-time",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "A24's official film page verifies Josh and Benny Safdie as directors, Josh Safdie and Ronald Bronstein as writers, the principal cast and the New York crime-thriller framing."
    },
    {
      title: "GOOD TIME",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/good-time/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official 2017 Competition record verifies the directing and writing credits, Sean Price Williams photography, Ronald Bronstein and Benny Safdie editing, Audrey Turner design credit, Oneohtrix Point Never score and Evan Mangiamele sound."
    },
    {
      title: "DP Sean Williams goes gonzo with 2-perf Kodak 35mm on the Safdie Bros' psycho-crime feature Good Time",
      publisher: "Kodak Motion Picture",
      url: "https://www.kodak.com/en/motion/blog-post/good-time/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Sean Price Williams documents the 35-day Queens/Brooklyn shoot, 2-perf ARRI LT and Zeiss Super Speeds, Vision3 500T and 250D stocks, handheld work, real locations, practical darkness, fluorescent light and vivid SkyPanel color."
    },
    {
      title: "All Day and a Night: Josh and Benny Safdie on Good Time",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/102710-all-day-and-a-night/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "The Safdies explain the character-backstory writing process with Ronald Bronstein, their move into a more plot-driven 'movie movie' and the editing decisions that cut material down in service of pulp momentum and audience pressure."
    },
    {
      title: "Directors Close-Up: Spirit Awards Roundtable with Sean Baker, the Safdie Bros. and Chloé Zhao",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/blog/directors-close-spirit-awards-roundtable-sean-baker-safdie-bros-chloe-zhao/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "The Safdies describe Robert Pattinson contacting them after seeing a Heaven Knows What still, his desire to disappear into a role and their continued commitment to location shooting and independent production practice."
    },
    {
      title: "Film Comment Presents: Good Time",
      publisher: "Film at Lincoln Center",
      url: "https://www.filmlinc.org/events/film-comment-presents-good-time/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "Film at Lincoln Center records the A24 release, Cannes breakthrough, single-night criminal odyssey and a filmmaker discussion with Pattinson, the Safdies and co-writer Ronald Bronstein."
    },
    {
      title: "Film of the week: Good Time takes a spin around Robert Pattinson's no-good hood",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-good-time-takes-spin-around-robert-pattinsons-no-good-hood",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Sight and Sound analyzes the film's morally unstable urban viewpoint, amusement-park neon and blacklight, expressive image strategies and the way the camera's behavior shifts when Connie disrupts otherwise stable spaces."
    },
    {
      title: "The Film Comment Podcast: Good Time",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/film-comment-podcast-good-time/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "The Safdies, Bronstein and Pattinson discuss the six-year conceptual path, Cops and The Executioner's Song influences, New York street theater and the construction of Connie as a criminal antihero."
    },
    {
      title: "Oneohtrix Point Never Has Some Cool Theories About Soundtracking Movies",
      publisher: "Pitchfork",
      url: "https://pitchfork.com/thepitch/oneohtrix-point-never-interview-soundtracking-movies-good-time/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Daniel Lopatin explains the Safdies' mood-board references, the artistic freedom of the collaboration, his preference for musical counterpoint and the score's relationship to crime-thriller imagery; the interview records his Cannes Soundtrack Award."
    },
    {
      title: "Cannes 2017: Josh and Benny Safdie's Good Time",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/4600-the-daily-cannes-2017-josh-and-benny-safdie-s-good-time",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Criterion's Cannes dossier places the film between the Safdies' gutter realism and genre mechanics, records the filmmakers' description of it as a genre movie and character study, and highlights Sean Price Williams's expressionist photography."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
