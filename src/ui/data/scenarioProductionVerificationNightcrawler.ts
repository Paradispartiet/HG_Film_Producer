import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const nightcrawlerProductionCaseVerification = {
  scenarioId: "scenario_nightcrawler_2014",
  status: "verified",
  verifiedAt: "2026-07-29",
  summary: "The film's Bold Films and Open Road production, Dan Gilroy screenplay and debut direction, real-nightcrawler field research, Jake Gyllenhaal performance design, Robert Elswit's hybrid Alexa/35 mm Los Angeles image system, Kevin Kavanaugh environments, John Gilroy Avid edit, Scott Martin Gershin sound department, James Newton Howard point-of-view score and awards legacy are supported by ten inspectable craft, guild, institute and filmmaker sources.",
  sources: [
    {
      title: "Breaking the News in Nightcrawler",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/article/breaking-news-nightcrawler/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Robert Elswit and Michael Bauman document the 26-day, 24-night location schedule, Alexa XT ArriRaw night capture, Kodak 5213 day photography, practical-light selection, KCET station, built apartment set and 2K grade."
    },
    {
      title: "Dan Gilroy: Nightcrawler",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/events/2014/dec2014/nightcrawler-qna",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The DGA records Gilroy's feature-directing debut and his discussion with Tony Gilroy of Gyllenhaal, withheld backstory and the collaboration with Elswit and James Newton Howard that aligns image and music with Lou's self-image."
    },
    {
      title: "Interview: Dan Gilroy",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-dan-gilroy-nightcrawler-dan-gilroy/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Gilroy discusses the TV-news freelancer world, Lou's bottom-line character construction, the film's verbal design, Gyllenhaal, Ahmed and Russo performances and Robert Elswit's electric Los Angeles photography."
    },
    {
      title: "Interview: Nightcrawler director Dan Gilroy",
      publisher: "RTÉ",
      url: "https://www.rte.ie/entertainment/2014/1029/655636-interview-nightcrawler-director-dan-gilroy/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Gilroy traces the idea from Weegee to Los Angeles nightcrawlers, documents field trips with technical adviser Howard Raishbrook, accurate police codes and jargon, the compressed multi-location night shoot and discoveries made in Gyllenhaal's edited performance."
    },
    {
      title: "Nightcrawler",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/nightcrawler",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies the 117-minute United States release record and detailed production, camera, editing, production-design, art, costume, makeup, hair, sound, music, stunt, visual-effects and digital-intermediate credits."
    },
    {
      title: "Hula Post supports editorial on Nightcrawler",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Press-Center/Daily-News/2014/Hula-Post-supports-editorial-on-Nightcrawler.aspx",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "John Gilroy describes the film's taut and aggressive editorial requirement; Hula Post documents Avid DX systems, Unity storage, Westside suites, round-the-clock support and an eight-month postproduction schedule."
    },
    {
      title: "The 87th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2015",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy's official ceremony record confirms Nightcrawler's nomination for Writing, Original Screenplay, credited to Dan Gilroy."
    },
    {
      title: "It Had to Be Los Angeles: Director Dan Gilroy on Nightcrawler's Untamed Energy",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/blog/it-had-to-be-los-angeles-director-dan-gilroy-on-nightcrawlers-untamed-energy/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Film Independent frames the debut as a darkly comic media thriller and records Gilroy's insistence on Los Angeles, police-scanner movement, nocturnal wildness and the connection between Lou's ambition and the city's untamed energy."
    },
    {
      title: "Nightcrawler a different look at Gyllenhaal and L.A.",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-et-mn-ca-sneaks-nightcrawler-20140907-story.html",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The production report documents Gyllenhaal's gaunt coyote concept, Elswit's digital-night and 35 mm-day split, John Gilroy's edit and the production's rapid movement through more than seventy Los Angeles locations."
    },
    {
      title: "Jake Gyllenhaal on Nightcrawler: I'm a bit strange, you know?",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2014/oct/30/jake-gyllenhaal-nightcrawler-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Gyllenhaal explains the substantial weight loss and bodily reinvention used to create Lou as a contemporary predatory figure whose camera work, self-help language and apparent success conceal the absence of normal moral limits."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
