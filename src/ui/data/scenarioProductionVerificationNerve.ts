import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const nerveProductionCaseVerification = {
  scenarioId: "scenario_nerve_2016",
  status: "verified",
  verifiedAt: "2026-08-09",
  summary: "Nerve's 2016 social-media context, Watcher/Player game logic, New York location action, actor-and-stunt construction, stunt-storyboard geography, integrated app graphics and tracked phone plates, vivid cinematography and synth-led music system are supported by twelve inspectable sources from twelve publishers.",
  sources: [
    {
      title: "Nerve",
      publisher: "Lionsgate",
      url: "https://www.lionsgate.com/movies/nerve",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The distributor's official record confirms Henry Joost and Ariel Schulman, Jessica Sharzer's screenplay from Jeanne Ryan's novel, principal cast, the Watcher/Player dare-game premise and the July 2016 release."
    },
    {
      title: "The Catfish Directors Are Back With Nerve, And They Have Some Thoughts About Pokémon Go",
      publisher: "GQ",
      url: "https://www.gq.com/story/the-catfish-directors-are-back-with-nerve-and-they-have-some-thoughts-about-pokemon-go",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Joost and Schulman describe Nerve as a contemporary grounded thriller about identity, anonymity, personal-data consent, internet fame and escalating online performance, and explain their screen-culture principle of embracing pixels and finding drama online."
    },
    {
      title: "Nerve Directors Talk Making a Movie for The Age of Social Media",
      publisher: "Den of Geek",
      url: "https://www.denofgeek.com/movies/nerve-directors-talk-making-a-movie-for-the-age-of-social-media/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "The directors connect the Jeanne Ryan adaptation to their Catfish-era interest in internet behavior and discuss the Watcher/Player structure, social-media participation and the challenge of making contemporary technology dramatic."
    },
    {
      title: "Nerve (2016)",
      publisher: "Art of the Title",
      url: "https://www.artofthetitle.com/title/nerve/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Designer Teddy Blanks explains his design-czar role, the unified app-and-title system, typography across the movie frame and the production shift from a functioning phone app to blank tracked screens whose interface could be rebuilt and changed in post."
    },
    {
      title: "Nerve",
      publisher: "CHIPS NY",
      url: "https://chips.nyc/work/nerve/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "The design studio documents creating Nerve's main titles and app graphics around two decades of recognizable web, phone and game-interface language, establishing the screen graphics as a coherent storytelling system rather than decorative inserts."
    },
    {
      title: "Interview with Cinematographer Michael Simmonds (Nerve, Vice Principals)",
      publisher: "Matthew Toffolo",
      url: "https://matthewtoffolo.com/2016/08/11/interview-with-cinematographer-michael-simmonds-nerve-vice-principals/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Simmonds says Nerve required extensive preparation and storyboards because stunt sequences create fictional screen geography, and explains that actor-versus-stunt-performer shots and special camera positions had to be mapped as linked micro-stories."
    },
    {
      title: "Nerve peddles Web-driven fear",
      publisher: "San Francisco Chronicle",
      url: "https://www.sfchronicle.com/movies/article/Nerve-peddles-Web-driven-fear-8401112.php",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Dave Franco describes learning to ride a motorcycle in two weeks, riding in New York for selected shots and using a stunt double for the blindfolded high-speed dare; the feature also situates the game action across the city's physical locations."
    },
    {
      title: "Chris Trujillo",
      publisher: "Interiors",
      url: "https://www.intjournal.com/chris-trujillo",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Production designer Chris Trujillo identifies Nerve as the larger-budget Lionsgate teen thriller he designed immediately before Stranger Things, confirming his authorship of the feature's physical production-design system."
    },
    {
      title: "The Nerve of Rob Simonsen: The Lauded Composer Goes Synth and Triumphs Massively",
      publisher: "Vehlinggo",
      url: "https://vehlinggo.com/2016/08/04/rob-simonsen-nerve-score-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Simonsen discusses the film's predominantly electronic and synthesizer-heavy score and his collaboration with White Sea on the vocal cue 'Let's Play', documenting a music strategy built around the game world's contemporary energy."
    },
    {
      title: "Nerve Review: Emma Roberts-Dave Franco Online Adventure Has More Than a Few Bugs",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/nerve-review/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The contemporary review details New York crowds filming the players, neon-underlit urban movement and the motorcycle, ladder and crane dares, supporting the film's combination of physical stunt escalation, spectatorship and vivid city imagery."
    },
    {
      title: "Nerve movie review & film summary",
      publisher: "RogerEbert.com",
      url: "https://www.rogerebert.com/reviews/nerve-2016",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The release-period review confirms Michael Simmonds, editors Jeff McEvoy and Madeleine Gavin and composer Rob Simonsen and identifies the film's glossy visual sheen, energetic construction and performance-driven teen-thriller presentation."
    },
    {
      title: "Nerve (2016) - Box Office and Financial Information",
      publisher: "The Numbers",
      url: "https://www.the-numbers.com/movie/Nerve",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The industry record supplies the principal production and post credits, including Michael Simmonds, Madeleine Gavin, Jeff McEvoy, Chris Trujillo, Rob Simonsen, Leslie Shatz, Eran Dinur, stunt coordinator Stephen Pope and the film's commercial release data."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
