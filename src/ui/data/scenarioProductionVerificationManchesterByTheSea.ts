import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const manchesterByTheSeaProductionCaseVerification = {
  scenarioId: "scenario_manchester_by_the_sea_2016",
  status: "verified",
  verifiedAt: "2026-08-09",
  summary: "The case's Cape Ann location research, working-family material world, actor-calibrated grief performance, nonlinear memory structure, restrained regional photography, Jennifer Lame edit, Jacob Ribicoff field-recorded sound and Lesley Barber score are supported by twelve inspectable sources from twelve publishers.",
  sources: [
    {
      title: "Behind the Scenes of Manchester by the Sea",
      publisher: "Architectural Digest",
      url: "https://www.architecturaldigest.com/story/manchester-by-the-sea-filming-locations",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Production designer Ruth De Jong describes months of Cape Ann research across Manchester, Gloucester, Essex, Rockport and Beverly, using real local people, possessions, vehicles and fishing-community detail to build a hyperreal working-family world."
    },
    {
      title: "Making Kenneth Lonergan Cry: Manchester by the Sea Editor Jennifer Lame on Cutting Sadness (and Humor!)",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/manchester-by-the-sea-jennifer-lame-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Lame explains the script-draft process, removing overpowering memories, moving flashbacks while preserving their chronology, avoiding visual flashback cues and Lonergan moving the opening memory himself in Avid."
    },
    {
      title: "Manchester by the Sea Director Kenneth Lonergan: I Loved Yelling at Casey Affleck",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/manchester-by-the-sea-kenneth-lonergan-interview-casey-affleck/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Lonergan describes whole-scene memories as a second story present in Lee's mind and details the precise actor-director negotiation used to calibrate Affleck's changing behavior across relationships and scenes."
    },
    {
      title: "Sonic Soul: Talking to Manchester by the Sea’s Sound Designer",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2016/11/sonic-soul-talking-manchester-seas-sound-designer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Jacob Ribicoff documents Cape Ann field recording at the hospital, bar, school, rink, houses and waterfront and the spotting/mix collaboration with Lonergan and Jennifer Lame to make regional ambience support dialogue and performance."
    },
    {
      title: "Interview: Lesley Barber on Composing the Score for Manchester by the Sea",
      publisher: "Awards Daily",
      url: "https://www.awardsdaily.com/2016/12/12/interview-lesley-barber-composing-score-manchester-sea/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Barber describes entering at script level and developing the film's specific musical approach with Lonergan, extending their earlier collaboration on You Can Count on Me."
    },
    {
      title: "Interview: Kenneth Lonergan on Manchester by the Sea",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-kenneth-lonergan-manchester-by-the-sea/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Lonergan discusses the film's mixture of ordinary human scale and large emotion and explains how Messiah, Massenet, chamber music and Barber's score express beauty continuing around the characters rather than merely underlining grief."
    },
    {
      title: "Sundance-Supported Manchester by the Sea Earns 6 Oscar Noms",
      publisher: "Sundance Institute",
      url: "https://www.sundance.org/blogs/sundance-supported-manchester-by-the-sea-earns-6-oscar-noms-3/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Sundance records the film's 2016 festival premiere and six Academy Award nominations across picture, directing, writing and three performance categories."
    },
    {
      title: "The 89th Academy Awards | 2017",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2017",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy's official record verifies Original Screenplay for Kenneth Lonergan and Actor for Casey Affleck, plus nominations for Picture, Director, Lucas Hedges and Michelle Williams."
    },
    {
      title: "Manchester by the Sea – Q&A with Kenneth Lonergan, Michelle Williams, Lucas Hedges, and Casey Affleck",
      publisher: "National Board of Review",
      url: "https://nationalboardofreview.org/2016/12/qa-kenneth-lonergan-michelle-williams-lucas-hedges-casey-affleck/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Affleck describes using Lonergan's writing and detailed discussion to calibrate Lee's contained reactions so traumatic scenes communicate pressure without tipping into melodramatic display."
    },
    {
      title: "Kenneth Lonergan Came Into Filmmaking Sideways, But Became a Sundance Standout Anyway",
      publisher: "Vanity Fair",
      url: "https://www.vanityfair.com/hollywood/2016/01/kenneth-lonergan-manchester-by-the-sea-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "The interview documents the Damon/Krasinski story origin, Lonergan taking over directing, the script's development after Margaret and Amazon's $10 million Sundance acquisition with theatrical release."
    },
    {
      title: "Kenneth Lonergan's Devastating, Liberating Manchester by the Sea",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/culture/richard-brody/kenneth-lonergans-devastating-liberating-manchester-by-the-sea",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The analysis identifies working routine, civic procedure and abrupt memories as the film's dramatic material and specifically describes Jody Lee Lipes's gray coastal palette and regional image-making."
    },
    {
      title: "Which Cameras Were Used on the Oscar-Nominated Films of 2017?",
      publisher: "No Film School",
      url: "https://nofilmschool.com/2017/01/which-cameras-were-used-oscar-nominated-films-2017",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The technical roundup identifies ARRI Alexa XT acquisition for Manchester by the Sea; the profile deliberately leaves complete camera-format workflow mapped because the inspected primary interviews do not establish the full package."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
