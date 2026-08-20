import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const doTheRightThingProductionCaseVerification = {
  scenarioId: "scenario_do_the_right_thing_1989",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "AFI, Criterion, Film Comment, Library of Congress and firsthand Public Enemy accounts support Do the Right Thing as a 1988 40 Acres and a Mule production distributed by Universal and built around intensive transformation of one Bedford-Stuyvesant block. AFI identifies 18 July–14 September 1988 principal photography, Stuyvesant Avenue between Lexington and Quincy, a working pizzeria construction, a radio-station set replacing a burnt-out structure, adapted vacant/distressed residences, a pre-shoot block party, approximately $6.2 million production cost, and 40 Acres and a Mule/Universal production-distribution roles. Criterion confirms Spike Lee as writer/director/producer, Monty Ross co-producer, Jon Kilik line producer, Ernest Dickerson cinematographer, Barry Alexander Brown editor, Wynn Thomas production designer, Ruth E. Carter costume designer, Skip Lievsay sound designer, Frank Stettner sound recordist, Bill Lee original-score composer with Branford Marsalis, and Public Enemy's 'Fight the Power'. Criterion and craft commentary document coordinated heat/color/skin-tone authorship across photography, design and costume without requiring unsupported camera-body, lens, stock or exposure claims. Film Comment's 1989 Lee interview documents the Bed-Stuy production context, largely Black crew and historical security/community arrangements; these are retained as film-specific production history rather than a universal urban-location method. Chuck D and Hank Shocklee accounts independently confirm that 'Fight the Power' was commissioned for the film and developed to function inside the movie, not attached afterward. AFI and Criterion converge on 120 minutes. Cannes, theatrical controversy, awards, National Film Registry status, home video and later Criterion restoration are explicitly kept downstream from the original 1988 production.",
  sources: [
    {
      title: "Do the Right Thing",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/67050-DO-THE-RIGHT-THING",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI provides the 40 Acres and a Mule/Universal production-distribution record, principal-photography dates, Bed-Stuy block location, constructed/adapted sets, block-party community relations, approximately $6.2m cost, 120-minute runtime and detailed production credits."
    },
    {
      title: "Do the Right Thing",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/286-do-the-right-thing",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Criterion supplies the core craft credits for Lee, Ross, Kilik, Dickerson, Brown, Thomas, Carter, Lievsay, Stettner, Bill Lee/Branford Marsalis and Public Enemy, plus 120-minute/1.85 presentation metadata and later restoration materials kept downstream."
    },
    {
      title: "A Palette That Sizzles On-Screen",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/6519-a-palette-that-sizzles-on-screen",
      sourceKind: "archive_feature",
      supports: ["cinematography"],
      note: "Criterion's craft supplement emphasizes Lee and Dickerson's deliberate heat palette and care in photographing the cast, used as evidence of visual strategy without filling undocumented camera/lens/exposure details."
    },
    {
      title: "Interview: Spike Lee on Do The Right Thing",
      publisher: "Film Comment / Film at Lincoln Center",
      url: "https://www.filmcomment.com/article/interview-spike-lee/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The 1989 Lee interview documents the Bed-Stuy production, largely Black crew, reconstructed/adapted spaces and film-specific community/security context. The case treats these arrangements as historical evidence rather than a reusable neighborhood-control template."
    },
    {
      title: "Do the right thing",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/89714497/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Library of Congress records the 1989 Universal release/copyright and corroborates Wynn Thomas, Bill Lee, Barry Alexander Brown, Ernest Dickerson and Monty Ross credits, with the later MCA Home Video record kept separate."
    },
    {
      title: "Chuck D on Fight the Power",
      publisher: "NPR / VPM",
      url: "https://www.vpm.org/npr-news/npr-news/2023-02-18/chuck-d-on-his-new-hip-hop-documentary-fight-the-power",
      sourceKind: "filmmaker_interview",
      supports: ["sound"],
      note: "Chuck D states that Spike Lee commissioned the song for Do the Right Thing and explains its film-specific relationship to the story, preserving commissioned-song authorship separately from Bill Lee's score and production sound."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
