import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const itFollowsVerificationRecords = [
  {
    scenarioId: "scenario_it_follows_2014",
    status: "verified",
    verifiedAt: "2026-07-29",
    summary: "The case's Detroit-area independent production, recurring-nightmare walking curse, deliberately timeless suburban design, Maika Monroe-led ensemble, ARRI ALEXA and RED capture, Cooke S4 wide-lens deep focus, objective pans and zooms, precise editing, detailed sound construction and Disasterpeace synth score are supported by official festival records, filmmaker and department-head interviews, craft publications and institutional circulation records.",
    sources: [
      {
        title: "It Follows",
        publisher: "La Semaine de la Critique",
        url: "https://www.semainedelacritique.com/en/edition/2014/movie/it-follows",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official Critics' Week record documents the 2014 selection and world-premiere context, David Robert Mitchell as writer-director, Animal Kingdom and Northern Lights production, Michael T. Perry design, Mike Gioulakis cinematography, Julio C. Perez IV editing and the principal cast and production identity."
      },
      {
        title: "We Didn't Have to Add Too Much Creepiness: It Follows DP Mike Gioulakis",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/93629-we-didnt-have-to-add-too-much-creepiness-it-follows-dp-mike-gioulakis/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing"],
        note: "Gioulakis describes months of shot-by-shot planning and storyboards, mostly ARRI ALEXA capture with RED Epic for specialist rigs, Cooke S4 lenses, frequent 18 mm deep-focus framing, realistic background distance, wide-frame audience scanning and objective robotic pans and zooms."
      },
      {
        title: "ICYMI Halloween Edition: The Making of Indie Horror Classic It Follows with Director David Robert Mitchell",
        publisher: "Film Independent",
        url: "https://www.filmindependent.org/blog/icymi-halloween-edition-the-making-of-indie-horror-classic-it-follows-with-director-david-robert-mitchell/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "Mitchell explains financing the independent feature before casting, working from his childhood nightmare, production and weather constraints, Maika Monroe's physical work, detailed temp music and sound and the accelerated three-to-four-week picture, colour, score, mix, effects and DCP finish after Cannes acceptance."
      },
      {
        title: "Interview: David Robert Mitchell on Making It Follows",
        publisher: "Slant Magazine",
        url: "https://www.slantmagazine.com/film/interview-david-robert-mitchell/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Mitchell describes the rule-bound premise, the audience's need to inspect the frame, Maika Monroe's emotional credibility and his collaboration with editor Julio Perez toward simplicity, exact timing and the removal of unnecessary cuts."
      },
      {
        title: "Q&A: David Robert Mitchell on His Terrifying Youth-Horror Film It Follows",
        publisher: "Fangoria",
        url: "https://www.fangoria.com/qa-david-robert-mitchell-on-his-terrifying-youth-horror-film-it-follows/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Mitchell documents the mixed-decade production design, invented shell reader, entity forms specified in the screenplay, extensive form-by-form casting and the Hitchcock, Carpenter, De Palma, Romero, Blue Velvet and Paris, Texas references behind the spatial staging."
      },
      {
        title: "What Makes the New Horror Film It Follows So Damn Good",
        publisher: "WIRED",
        url: "https://www.wired.com/2015/03/it-follows-unholy-trinity/",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "sound"],
        note: "Mitchell traces the walking pursuer to a recurring childhood nightmare and explains the importance of waiting spaces; Maika Monroe details character, hair and wardrobe preparation, while Mitchell and Rich Vreeland describe the deliberate balance of melody, synthesis and controlled sonic assault."
      },
      {
        title: "Interview with Rich Vreeland (Disasterpeace) on Restrictions",
        publisher: "Designing Sound",
        url: "https://designingsound.org/2015/10/12/interview-with-rich-vreeland-disasterpeace-on-restrictions/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "sound"],
        note: "Vreeland explains the production restrictions around It Follows, including an approximately three-week scoring window, close work from an existing temp track and the use of synthesis as the practical means to move quickly between melodic, textural and abrasive material."
      },
      {
        title: "Music",
        publisher: "Disasterpeace",
        url: "https://disasterpeace.com/music",
        sourceKind: "archive_feature",
        supports: ["overall", "sound"],
        note: "Rich Vreeland's official project archive lists It Follows and credits Disasterpeace for both music and sound design, supporting the case's treatment of the electronic score and designed sonic pressure as a coordinated production layer."
      },
      {
        title: "Film of the Week: It Follows",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-it-follows",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "BFI records the 2014 American feature and UK circulation, connects its slow relentless pursuer to Mitchell's recurring dream and analyses the young ensemble, suburban rule system, Carpenter-linked widescreen threat and music-led dread without reducing the film to a punitive sex allegory."
      },
      {
        title: "Mike Gioulakis Welcomed as New ASC Member",
        publisher: "American Society of Cinematographers",
        url: "https://theasc.com/news/mike-gioulakis-asc",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "The ASC identifies It Follows among Gioulakis's defining feature credits and documents the film as his breakthrough work, supporting its continuing craft legacy and the institutional recognition of its cinematographic production system."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
