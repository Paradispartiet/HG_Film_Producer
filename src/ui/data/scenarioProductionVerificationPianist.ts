import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const thePianistProductionCaseVerification = {
  scenarioId: "scenario_the_pianist_2002",
  status: "verified",
  verifiedAt: "2026-07-25",
  summary: "The film's Władysław Szpilman memoir adaptation, French-Polish-German-British production, Warsaw-Babelsberg-Jüterbog reconstruction, Roman Polanski restricted-survivor direction, Adrien Brody performance, Allan Starski design, Anna Sheppard costume system, Paweł Edelman 35 mm photography, Hervé de Luze editing, Blondel-Humphreys-Hardy sound, Kilar-Olejniczak music and major Cannes, Academy, BAFTA, César and European Film recognition are supported by ten inspectable institutional, production, craft and filmmaker sources.",
  sources: [
    {
      title: "The Pianist",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/the-pianist/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Cannes record identifies the Poland-France-Germany-United Kingdom production, 148-minute competition presentation, Roman Polanski, Ronald Harwood, Paweł Edelman, Hervé de Luze, Wojciech Kilar and Allan Starski, and confirms the 2002 Palme d'Or."
    },
    {
      title: "Der Pianist",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/der-pianist_ea43d4a7267a5006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The German national film portal documents the four-country production companies, producers, public funding, February-to-June 2001 Warsaw-Jüterbog-Beelitz-Babelsberg shoot, full design, costume, makeup, optical, editing and sound credits, and 35 mm 1.85:1 Dolby DTS format."
    },
    {
      title: "The Pianist",
      publisher: "FilmPolski.pl",
      url: "https://filmpolski.pl/fp/index.php?film=129379",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Polish national film database records the Warsaw, Kobyłka, Rembertów and Jüterbog locations, production dates, Polish department structure, Starski design, Sheppard costume, Pokromski makeup, Blondel sound, de Luze editing, Kilar music and Janusz Olejniczak piano performance."
    },
    {
      title: "10 great Jewish films",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-jewish-films",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI places The Pianist within Holocaust cinema while emphasizing its refusal of noble-hero and simple moral conventions, its matter-of-fact violence and its concentration on an ordinary civilian motivated by survival rather than heroic agency."
    },
    {
      title: "Allan Starski",
      publisher: "Culture.pl",
      url: "https://culture.pl/en/artist/allan-starski",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Culture.pl's production-designer biography documents Starski's return to wartime history, the large transformation of Warsaw locations including Stalowa Street and Krakowskie Przedmieście, and the ruined-capital imagery central to the film's reconstructed city."
    },
    {
      title: "The Pianist: Production Notes",
      publisher: "Cinema.com",
      url: "https://cinema.com/articles/1594/pianist-the-production-notes.phtml",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The production notes describe the months of historical research, surviving suburban streets, Babelsberg reconstruction, former Soviet barracks transformed by Allan Starski, German headquarters and hospital locations, and the stepwise 2001 production route used to rebuild wartime Warsaw."
    },
    {
      title: "The 75th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2003",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The Academy's official record documents wins for Adrien Brody, Roman Polanski and Ronald Harwood, plus nominations for best picture, Paweł Edelman's cinematography, Anna Sheppard's costume design and Hervé de Luze's editing."
    },
    {
      title: "2003 Film Awards",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2003",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BAFTA's official results confirm wins for film and direction and nominations for Ronald Harwood, Adrien Brody, Paweł Edelman, Wojciech Kilar and the sound team of Jean-Marie Blondel, Dean Humphreys and Gérard Hardy."
    },
    {
      title: "The Pianist",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-pianist/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The European Film Academy records the four-country production, principal cast and crew, film and director nominations and Paweł Edelman's 2002 European Cinematographer award."
    },
    {
      title: "Q & A with Re-recording Mixer Dean Humphreys",
      publisher: "SoundArk",
      url: "https://www.soundarkstudios.com/blog/2014/10/10/q-a-with-dean-humphreys",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Re-recording mixer Dean Humphreys identifies The Pianist as a major Polanski collaboration and explains his whole-reel-first method of balancing dialogue, ADR, music, effects and atmospheres before refining detailed Foley and transitions."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
