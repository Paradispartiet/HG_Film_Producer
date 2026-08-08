import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const iDanielBlakeProductionCaseVerification = {
  scenarioId: "scenario_i_daniel_blake_2016",
  status: "verified",
  verifiedAt: "2026-08-08",
  summary: "The case's Newcastle welfare-state social realism, Paul Laverty field research, locally rooted casting, controlled-information performance method, six-week North-East location shoot, 35 mm Robbie Ryan photography, procedural editing and restrained sound-and-music system are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "I, Daniel Blake",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/i-daniel-blake/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Cannes record verifies Ken Loach, Paul Laverty, Robbie Ryan, Jonathan Morris, George Fenton, Fergus Clegg and Linda Wilson and records the film's 2016 Palme d'Or."
    },
    {
      title: "Ken Loach starts 'I, Daniel Blake' shoot",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/news/ken-loach-starts-i-daniel-blake-shoot/5096060.article",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The production report documents the six-week Newcastle and North-East shoot, Rebecca O'Brien and Sixteen Films, Why Not Productions and Wild Bunch, BFI and BBC Films support, eOne distribution, international sales and principal cast."
    },
    {
      title: "Casting I, Daniel Blake",
      publisher: "Criterion Collection",
      url: "https://www.criterion.com/current/posts/5306-casting-i-daniel-blake",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Criterion documents the authenticity-focused Newcastle casting process, Dave Johns's working-class local background and first feature role, and a surrounding ensemble containing numerous film-acting novices from the region."
    },
    {
      title: "Film of the week: I, Daniel Blake",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-i-daniel-blake",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "The BFI review details the welfare bureaucracy, benefit sanctions, digital-by-default administration, social housing and food-bank pressure that Laverty's screenplay turns into cumulative dramatic procedure."
    },
    {
      title: "Films on film sweep Cannes 2016 as Robbie Ryan BSC shines",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/films-film-sweep-cannes-2016-robbie-ryan-bsc-shines/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The cinematography trade publication confirms that Robbie Ryan photographed I, Daniel Blake on 35 mm and connects the photochemical production to its Palme d'Or-winning Cannes reception."
    },
    {
      title: "The Old Oak – Robbie Ryan BSC ISC",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/the-old-oak/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Ryan identifies the ARRI 35 mm ST/LT and ARRI Master Prime combination used on The Old Oak as the same camera-and-lens combination he had used on I, Daniel Blake."
    },
    {
      title: "Team",
      publisher: "Sixteen Films",
      url: "https://www.sixteenfilms.co.uk/team",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The production company's own record establishes Sixteen Films, Ken Loach and Rebecca O'Brien's long production partnership and places I, Daniel Blake within that sustained independent British production context."
    },
    {
      title: "Ken Loach and Hayley Squires on making I, Daniel Blake",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/culture/2026/apr/13/ken-loach-made-i-daniel-blake-film-food-banks",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Loach and Squires describe Laverty's real-world welfare and food-bank research, chronological revelation, restricted access to future script information and the preparation behind Katie's food-bank sequence."
    },
    {
      title: "Winners announced for the EE British Academy Film Awards in 2017",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/winners-announced-for-the-ee-british-academy-film-awards-in-2017/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BAFTA's official winners record verifies I, Daniel Blake as the 2017 Outstanding British Film, documenting major British institutional recognition after its Cannes premiere."
    },
    {
      title: "Cannes 2016: I, Daniel Blake, Paterson, and the Shock of the Real",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/article/cannes-2016-i-daniel-blake-paterson-the-shock-of-the-real/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Film Comment places the film in Loach and Laverty's social-realist tradition and analyzes the modest everyday spaces, welfare procedures, food-bank sequence and ordinary-life observation that organize its political force."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
