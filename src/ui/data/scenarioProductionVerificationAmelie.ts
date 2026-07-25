import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const amelieProductionCaseVerification = {
  scenarioId: "scenario_amelie_2001",
  status: "verified",
  verifiedAt: "2026-07-25",
  summary: "Jean-Pierre Jeunet and Guillaume Laurant's miniature-intervention screenplay, Claudie Ossard's French-German production, Audrey Tautou's performance, transformed Montmartre locations, Aline Bonetto design, Madeline Fontaine costume, Bruno Delbonnel 35 mm photography, Hervé Schneid editing, six-week precision sound mix, Yann Tiersen music, Duboi effects and major European and Academy recognition are supported by ten inspectable filmmaker, institutional, trade and archive sources.",
  sources: [
    {
      title: "Le Fabuleux Destin d’Amélie Poulain",
      publisher: "Jean-Pierre Jeunet",
      url: "https://www.jpjeunet.com/filmographie/le-fabuleux-destin-damelie-poulain/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Jeunet's official production record provides the story, complete artistic and technical credits, effects and postproduction collaborators and anecdotes explaining the literal Tex Avery-like visualisation of Amélie's feelings and imagination."
    },
    {
      title: "Amélie",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/2828d25a-1b4d-517f-9da7-99cac2e45c2e/amelie",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI identifies the France-Germany production, Jeunet-Laurant writing, Claudie Ossard production, Audrey Tautou-led cast, modern-fairytale form, romanticised Montmartre portrait, international success and five Academy Award nominations."
    },
    {
      title: "Amelie from Montmartre",
      publisher: "UniFrance",
      url: "https://en.unifrance.org/movie/20864/amelie-from-montmartre",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "UniFrance documents the majority-French France-Germany production, 35 mm and Dolby release specifications, French release, international festival circulation and César, BAFTA, Toronto audience and Academy recognition across the principal departments."
    },
    {
      title: "Den fabelagtige Amélie fra Montmartre",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/is/viden-om-film/filmdatabasen/film/32517",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI confirms the French-German production companies, 35 mm colour CinemaScope and Dolby presentation, Jeunet direction, Guillaume Laurant writing, Bruno Delbonnel photography, Hervé Schneid editing, Aline Bonetto design and Yann Tiersen music."
    },
    {
      title: "Amélie",
      publisher: "Film France-CNC",
      url: "https://www.filmfrance.net/en/once-upon-a-time/amelie/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Film France-CNC maps the production across Canal Saint-Martin, Gare du Nord, Montmartre, Café des Deux Moulins, Notre-Dame, Pont des Arts, Rue des Trois-Frères, Abbesses station and other Paris locations and links an inspectable making-of record."
    },
    {
      title: "Amélie: Fabricating a New French Fable",
      publisher: "Live Design",
      url: "https://www.livedesignonline.com/amelie-fabricating-a-new-french-fable",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Jeunet describes treating locations as stage sets, redressing them to the colour scheme, emptying streets, joining old French cinema to new technology, digitally processing the image, replacing skies and using Duboi effects for narration and poetry."
    },
    {
      title: "The Editors Guild Magazine: Amélie soundtrack",
      publisher: "Motion Picture Editors Guild",
      url: "https://kinogammeproductions.com/?p=1585",
      sourceKind: "trade_feature",
      supports: ["overall", "editing", "sound"],
      note: "Mixer Vincent Arnardi identifies the complete sound team, about ninety percent retained production sound, Hervé Schneid's narration and music placement, a six-week Neve DFC mix without effects premixes and balances precise to the decibel."
    },
    {
      title: "Awards 2001",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/award-edition/awards-2001/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "The Academy's official 2001 record documents Amélie's European Film recognition and its place among the year's directing, cinematography and audience distinctions, preserving the scale of its European breakthrough."
    },
    {
      title: "The 74th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2002/K--O",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The official Academy record lists five nominations for original screenplay, Bruno Delbonnel cinematography, Aline Bonetto and Marie-Laure Valla art direction, Vincent Arnardi-Guillaume Leriche-Jean Umansky sound and foreign-language film."
    },
    {
      title: "Amélie director Jean-Pierre Jeunet looks back on the classic",
      publisher: "People",
      url: "https://people.com/amelie-director-on-making-of-audrey-tautou-movie-valentines-day-exclusive-8572265",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Jeunet recalls Audrey Tautou's precise acting technique, the film's Cannes rejection and international breakthrough, discovering Yann Tiersen through a driver's CD, securing the composer and the film's later theatrical re-release."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
