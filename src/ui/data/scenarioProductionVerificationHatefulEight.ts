import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const hatefulEightProductionCaseVerification = {
  scenarioId: "scenario_the_hateful_eight_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "The Hateful Eight's revised staged-reading screenplay, chaptered chamber-western construction, weather-responsive Telluride production, full-scale Minnie's Haberdashery, ensemble performance, restored Ultra Panavision 70 optics, 65mm-to-70mm workflow, Avid edit, practical and augmented weather effects, character-specific period costumes, Ennio Morricone score and roadshow release are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Talking to Stacey Sher, Producer of Quentin Tarantino's The Hateful Eight",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2015/12/talking-stacey-sher-producer-quentin-tarantinos-hateful-eight/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Sher documents the first-draft and staged-reading development, horse and altitude preparation, Wilson Peak construction, weather-driven schedule, flexible ensemble, Avid edit, continuous 70mm conforming, weekly screenings and projector-restoration logistics."
    },
    {
      title: "The Hateful Eight",
      publisher: "Panavision",
      url: "https://www.panavision.com/highlights/credits/credits-detail/the-hateful-eight",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Panavision identifies Quentin Tarantino, Robert Richardson, System 65 cameras and Ultra Panavision 70 optics as the core camera package."
    },
    {
      title: "Panavision at 70",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/articles/panavision-at-70",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC documents Panavision's custom engineering of a larger 65mm magazine for a requested 15-16 minute take, including motor, torque and power demands."
    },
    {
      title: "Episode 2: Part I - The Making of The Hateful 8",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/part-i-the-making-of-the-hateful-8/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Kodak's production discussion with Panavision and FotoKem covers the return of Ultra Panavision technology and the photochemical system carrying 65mm capture into 70mm presentation."
    },
    {
      title: "The Hateful Eight",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Catalog/moviedetails/70512",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI confirms the runtime, production companies, distributor, screenplay, photography, production design, editing, music and limited 70mm roadshow with overture and intermission."
    },
    {
      title: "The 88th Academy Awards - 2016",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2016",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "The Academy records nominations for Jennifer Jason Leigh and Robert Richardson and the win for Ennio Morricone's original score."
    },
    {
      title: "World premiere staged reading of The Hateful Eight",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/press-releases/film-independent-announces-world-premiere-of-a-staged-reading-of-the-hateful-eight-by-quentin-tarantino/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Film Independent confirms the April 2014 LACMA world-premiere reading of Tarantino's then-unproduced screenplay and its unusual public development stage."
    },
    {
      title: "The Hateful Eight - production design portfolio",
      publisher: "Yohei Taneda",
      url: "https://yoheitaneda.com/en/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "The production designer's official portfolio records The Hateful Eight among his international works and confirms the principal ensemble and production context."
    },
    {
      title: "The Hateful Eight costume design",
      publisher: "Vanity Fair",
      url: "https://www.vanityfair.com/hollywood/2015/12/quentin-tarantino-the-hateful-eight-costumes",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Courtney Hoffman details script-specific western references, character-separated silhouettes, material and ageing choices, Major Warren's cavalry coat, continuity duplicates and the scrutiny created by 70mm detail."
    },
    {
      title: "How The Hateful Eight Got Its Hellish Look",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/hateful-eight-haberdashery-location-design-tarantino/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The production-design feature documents Yohei Taneda and Rosemary Brandenburg's historically grounded, textured Minnie's Haberdashery and the set's evolution as a practical performance environment."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
