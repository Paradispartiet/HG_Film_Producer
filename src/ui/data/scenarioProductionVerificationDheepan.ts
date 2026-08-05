import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const dheepanProductionCaseVerification = {
  scenarioId: "scenario_dheepan_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's French Tamil-language refugee production, false-family screenplay, migration and banlieue context, lived casting knowledge, responsive actor-led direction, handheld Sony F55 photography, practical off-set lighting, multilingual sound, Nicolas Jaar score, social-realist-to-western genre shift and Palme d'Or reception are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Dheepan",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/dheepan/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official competition record verifies the false-family refugee premise, Audiard-Debré-Bidegain screenplay, Éponine Momenceau cinematography, Juliette Welfling editing, Nicolas Jaar music, Michel Barthélémy design, the three-part sound team, cast and 2015 Palme d'Or."
    },
    {
      title: "Dheepan, shot on Sony CineAlta F55 camera, wins the Palme d'Or",
      publisher: "Sony",
      url: "https://www.sony.eu/presscentre/1237493701239",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Sony confirms CineAlta F55 capture and Momenceau's choice of the compact camera for truthful skin tones, colour response and a production in which every shot was made handheld."
    },
    {
      title: "Rising Stars of Cinematography 2018",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/rising-stars-of-cinematography-2018",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC records Dheepan as Momenceau's debut feature, Audiard's response to her experimental moving-image work and an improvisatory collaboration in which director, cinematographer and actors exchanged ideas freely."
    },
    {
      title: "Jacques Audiard • Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/293140/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Audiard explains that the long-developed project was revived by Noé Debré and Thomas Bidegain and describes the cinematic approach joining refugee family formation, western influence and the return of a former fighter's violence."
    },
    {
      title: "Dheepan",
      publisher: "UniFrance",
      url: "https://en.unifrance.org/movie/38791/dheepan",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The national export record verifies French and Tamil production languages, French production and release, CinemaScope colour presentation, Dolby 5.1 sound and major César selections for film, direction, screenplay, acting, design, cinematography, editing and sound."
    },
    {
      title: "Beyond La Haine: how France's new urban films are moving things forward",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/london-film-festival/features/la-haine-we-gagarine-banlieue-films",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI places Dheepan within the continuing banlieue-film tradition, supporting the profile's connection between French urban social realism, estate geography, migration and later genre pressure."
    },
    {
      title: "Film of the Week: Dheepan",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/film-week-dheepan/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "The essay analyzes Audiard's immersive realistic environment, the false family's social and emotional verisimilitude and the late break from low-key realist drama into smoke-filled vigilante thriller and dreamlike coda."
    },
    {
      title: "TIFF 2015 Interview: Antonythasan Jesuthasan",
      publisher: "NOW Magazine",
      url: "https://nowtoronto.com/movies/dheepan_1/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Jesuthasan explains that a complete screenplay preceded his casting and that he then refined the dialogue to fit Tamil slang and the emotional and social experience of people fleeing Sri Lanka's civil war."
    },
    {
      title: "Jacques Audiard: I wanted to give migrants a name, a shape, a violence of their own",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2016/apr/03/jacques-audiard-interview-dheepan-prophet-rust-done-director",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Audiard discusses the three performers' different Tamil backgrounds and speech, the family relationship as the emotional center and his aim to give migrants individual identity, dreams and remembered violence."
    },
    {
      title: "Dheepan Cannes Palme d'Or",
      publisher: "Film and Digital Times",
      url: "https://www.fdtimes.com/2015/05/25/dheepan-cannes-palme-dor/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The cinematography report documents the Sony F55 RAW package, Cooke S3 and S4 lenses, Angénieux zooms, the rejection of the heavier F65, responsive handheld operation, lighting placed outside the set and construction around actor movement."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
