import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const roboCopProductionCaseVerification = {
  scenarioId: "scenario_robocop_1987",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "RoboCop is verified as a 1987 Orion Pictures / Jon Davison-Tobor production directed by Paul Verhoeven from an Edward Neumeier and Michael Miner screenplay. AFI documents principal photography beginning 6 August 1986, Dallas and Las Colinas standing in for Detroit, the later Wheeling-Pittsburgh steel-mill work, a schedule extension approved from dailies, budget growth from $11 million to $13.1 million, and a separate $600,000 postproduction allocation for high-tech sound effects and symphonic score. AFI credits Jost Vacano cinematography, William Sandell production design, Erica Edell Phillips costume design, Frank J. Urioste editing, Basil Poledouris music, Rob Bottin RoboCop design/creation and Phil Tippett's ED-209 work. AFI separately documents Bottin's twenty-five-pound suit and Peter Weller's four months with mime coach Moni Yakim, plus a seven-foot full-size ED-209 used with actors and a miniature used for stop-motion photography. American Cinematographer documents Tippett's rear-screen projection strategy for ED-209 and Vacano's subjective-camera approach, delayed full RoboCop reveal and custom handheld rig. AFI also separates production sound, Foley, sound-effects editorial and final mixing; the Academy gave Stephen Flick and John Pospisil a Special Achievement Award for Sound Effects Editing and nominated the film for Sound and Film Editing. AFI's 103-minute record and BFI's 102-minute record are preserved as institutional/runtime variance. The case does not invent camera bodies, lens packages, stocks, focal maps, frame rates, exposure or lighting recipes, production-sound hardware, weapons-recording methods, stunt rigs, squibs, pyrotechnic specifications, blank-ammunition procedures, optical-printer settings, laboratory recipes or exact scene schedules.",
  sources: [
    {
      title: "RoboCop",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/67061-ROBOCOP",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies the development/financing history, production dates and locations, budget growth, suit and movement history, ED-209 full-size/miniature distinction, principal craft credits, sound-department separation, MPAA versioning, 103-minute release record and downstream release/franchise history."
    },
    {
      title: "RoboCop (1987) / Jost Vacano, ASC, BVK",
      publisher: "American Cinematographer",
      url: "https://theasc.com/podcasts/robocop-1987-jost-vacano-asc",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC documents Vacano's subjective-camera strategy, delayed full-body reveal of RoboCop and use of a custom-built handheld rig. The case does not turn that into an unsupported universal camera/lens package."
    },
    {
      title: "Tried-and-True Style for RoboCop",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/robocop-tippett-animation",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "ASC's historical craft article documents Phil Tippett's ED-209 stop-motion team and the use of rear-screen projected backgrounds to reduce compositing cost and schedule pressure while preserving dramatic integration of the effects shots."
    },
    {
      title: "The 60th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1988",
      sourceKind: "film_institute",
      supports: ["editing", "sound"],
      note: "The Academy records RoboCop's Special Achievement Award for Sound Effects Editing to Stephen Flick and John Pospisil, plus nominations for Film Editing and Sound."
    },
    {
      title: "RoboCop (1987)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/531da7bc-ea13-57f2-997c-ebf02239623d/robocop",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI independently confirms the film identity, Paul Verhoeven direction, Arne Schmidt producing, Neumeier/Miner writing and a 102-minute catalog runtime, which is preserved alongside AFI's 103-minute record rather than silently normalized."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;