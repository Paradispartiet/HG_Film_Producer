import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const hoopDreamsProductionCaseVerification = {
  scenarioId: "scenario_hoop_dreams_1994",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Hoop Dreams is verified as a 1994 U.S. longitudinal documentary produced through Kartemquin Films and directed by Steve James. AFI records Kartemquin Films as production company, Fine Line Features as distributor, James directing, Frederick Marx/Steve James/Peter Gilbert producing, Peter Gilbert cinematography, Frederick Marx/Steve James/William Haugse editing and 171 minutes. Kartemquin's current official page gives 176 minutes, Danish Film Institute gives 174, and UCLA's restoration screening gives 170, so the case uses 171 minutes canonically while preserving 170/171/174/176 as explicit version/exhibition variance. Production duration also varies by boundary rather than simple factual contradiction. Kartemquin/UCLA describe the filmmakers following William Gates and Arthur Agee for about five years and accumulating roughly/over 250 hours of footage. In DGA visual-history material James describes recording 250-plus hours over six years. In retrospective discussion of the project more broadly, James describes Hoop Dreams as taking roughly seven or eight years to make. These are retained as different definitions of participant-following, recording and total project duration rather than collapsed into a fabricated principal-photography schedule. James' first-person production accounts say the project began with little money, received a small Illinois Arts Council grant, and was taken under Kartemquin's wing; sponsored work helped sustain the filmmakers. He says he originally wanted to shoot film but could not afford it and needed broadcast-quality video. Peter Gilbert joined partly because he owned the required camera and shared a basketball interest. This supports video as an economic/technical production choice but does not establish camera model, lens, tape format, codec, frame rate or exposure system. James also recalls Kartemquin's simple VHS offline linear-editing system as not frame accurate. This is specific evidence for an historical offline stage only; it does not prove every logging, conform or finishing step. The project followed young people, families, schools and institutions over formative years, making access and participant relationships central production resources. Reviewed historical sources do not establish a complete consent/safeguarding protocol, so none is invented. Present-day longitudinal documentary production must independently establish age-appropriate informed consent/assent where relevant, guardian/participant communication, privacy boundaries, safeguarding, secure media handling and editorial harm review. Fine Line theatrical distribution, Sundance response and later Academy attention remain downstream from field production. UCLA documents later restoration/preservation activity; it is kept separate from original video acquisition and 1994 post-production technology.",
  sources: [
    {
      title: "HOOP DREAMS",
      publisher: "American Film Institute Catalog",
      url: "https://catalog.afi.com/Film/60030-HOOP-DREAMS",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Institutional production record for Kartemquin, Fine Line, Steve James, Marx/James/Gilbert producers, Peter Gilbert cinematography, Marx/James/Haugse editing and 171 minutes."
    },
    {
      title: "Hoop Dreams",
      publisher: "Kartemquin Films",
      url: "https://kartemquin.org/film/hoop-dreams/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Official producer page for the film, its longitudinal documentary context and current 176-minute runtime; used alongside other institutional runtime records rather than overriding them."
    },
    {
      title: "Hoop dreams",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/hoop-dreams",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Institutional record for 174 minutes, James, Marx/Gilbert, Peter Gilbert cinematography, Marx/Bill Haugse editing and Kartemquin/KTCA TV production context."
    },
    {
      title: "Hoop Dreams",
      publisher: "UCLA Film & Television Archive",
      url: "https://www.cinema.ucla.edu/events/2024/03/09/hoop-dreams",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Archive/restoration presentation documenting the long production, roughly 250 hours of footage, core producer/camera/edit credits and a 170-minute restoration-screening runtime. Restoration remains downstream."
    },
    {
      title: "Steve James on Kartemquin Films",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/4023-steve-james-on-kartemquin-films",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "James first-person history of Kartemquin taking Hoop Dreams under its wing when the project had little money, sponsored work sustaining filmmakers, and the broader multi-year project duration."
    },
    {
      title: "Conversation with Steve James",
      publisher: "Wednesday Journal",
      url: "https://www.oakpark.com/2015/11/17/a-conversation-with-steve-james/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "James first-person production account of the small Illinois Arts Council grant, inability to afford film, need for broadcast-quality video, Peter Gilbert's camera partnership and Kartemquin's simple non-frame-accurate VHS linear offline system."
    },
    {
      title: "Meet the Director: Steve James",
      publisher: "Directors Guild of America Visual History",
      url: "https://www.dga.org/Craft/VisualHistory/Interviews/Steve-James",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "James oral-history source describing shoestring/Kartemquin support and 250-plus hours recorded over six years; preserved as one production-duration framing alongside five-year and seven/eight-year descriptions."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
