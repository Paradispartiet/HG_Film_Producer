import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const roomProductionCaseVerification = {
  scenarioId: "scenario_room_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "Room's self-adapted child-perspective screenplay, Irish-Canadian co-production, chronological mother-child performance, real-size modular Pinewood set, inside-the-space camera rule, compact RED and Panavision image system, motivated lighting, two-part editing, spatial sound and awards legacy are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Shooting Begins on Lenny Abrahamson's Room Starring Brie Larson, Joan Allen and William H. Macy",
      publisher: "Screen Ireland",
      url: "https://www.screenireland.ie/news-archive/view/2597",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official production announcement verifies Donoghue's adaptation, Jack's viewpoint, Element Pictures and No Trace Camping, Irish-Canadian partners, Pinewood and Toronto production, Dublin postproduction and the principal camera, design, costume, editing and music departments."
    },
    {
      title: "Room: if these walls could talk",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/awards/room-if-these-walls-could-talk/5097954.article",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The production feature documents the Irish-Canadian financing constraints, chronological shoot, Pinewood Toronto stage, real-size ten-foot Room and the careful collaboration among Abrahamson, Tobman and Cohen."
    },
    {
      title: "Cinematographer Danny Cohen on Room & The Danish Girl",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2015/12/cinematographer-danny-cohen-room-danish-girl/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Cohen explains the decision to shoot in the small space, preserve real claustrophobia, distinguish Ma's prison from Jack's limitless world and reverse visual experience when Jack enters the outside."
    },
    {
      title: "INTerview: Ethan Tobman (Room)",
      publisher: "Interiors",
      url: "https://www.intjournal.com/interview/ethan-tobman",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Tobman details the inverted-Rubik's-Cube modular set, lens-inside rule, preserved fourth wall, light and aging studies, child-height surface history, warm Room and cold exterior material system and box-within-box recovery spaces."
    },
    {
      title: "Q&A: Emma Donoghue on writing the film adaptation for Room",
      publisher: "Quill & Quire",
      url: "https://quillandquire.com/book-culture/2015/09/15/qa-emma-donoghue-on-writing-the-film-adaptation-for-room/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Donoghue explains beginning the screenplay before the novel's publication, translating Jack's voice into cinematic form and reshaping the book through collaboration rather than treating fidelity as literal transcription."
    },
    {
      title: "Lenny Abrahamson: It's a way of talking about childhood and parenting",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2016/jan/10/lenny-abrahamson-director-interview-room-brie-larson",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Abrahamson describes the project as a film about childhood and parenting, his interpretive letter to Donoghue, the creation of the Larson-Tremblay bond and the ethical handling of dark material through Jack's viewpoint."
    },
    {
      title: "The Magic of the Space: An interview with Niall Brady and Steve Fanagan about Room (2015)",
      publisher: "Edge Hill University",
      url: "https://research.edgehill.ac.uk/en/publications/the-magic-of-the-space-an-interview-with-niall-brady-and-steve-fa-2/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "The peer-reviewed interview documents Brady and Fanagan's postproduction sound methods, collaboration with Abrahamson and Nugent and the challenge of building a credible narrative world inside an extremely confined soundproofed space."
    },
    {
      title: "The 88th Academy Awards: Room",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2016/I",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy record verifies Room's Best Picture, directing and adapted-screenplay nominations and Brie Larson's leading-actress win."
    },
    {
      title: "2016 Film Independent Spirit Awards Winners Announced",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/press-releases/2016-film-independent-spirit-awards-winners-announced/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official Spirit Awards record verifies Emma Donoghue's Best First Screenplay win and Brie Larson's Best Female Lead win, documenting the adaptation and performance system's independent-film recognition."
    },
    {
      title: "Embracing the Single Location: How the Room Team Made a 10-by-10-Foot Box Anything But Boring",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/embracing-the-single-location-room/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The production feature and technical box document RED Epic Dragon 5K capture, spherical Panavision Primo primes, practical and skylight-motivated fixtures, ACES 4K grading and the production's real-space single-location problem solving."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
