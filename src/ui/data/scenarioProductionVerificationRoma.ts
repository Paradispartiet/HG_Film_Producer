import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const romaProductionCaseVerification = {
  scenarioId: "scenario_roma_2018",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Roma is verified as a 2018 Mexican large-format digital memory-production case whose autobiographical boundary, chronological disclosure, transformed locations, 6.5K color acquisition for monochrome finishing, long-take editing, invisible 4K VFX, spatial sound and theatrical/streaming circulation form one system without becoming one evidence category. Cuarón's BAFTA transcript distinguishes Esperanto Filmoj and Participant Media's production from Netflix's later distribution. The production notes support the 108-day schedule, exclusively Mexican crew, search involving thousands of potential performers, Yalitza Aparicio's first film role, incremental scene disclosure, chronological shooting, transformed actual locations, reconstructed family house and production-design methods. American Cinematographer reports more than 110 days and documents the ALEXA 65/Prime 65 path, 6560-by-3100 Open Gate ARRIRAW at 24 fps to 2TB Codex SXR drives, 2.39 framing with stabilization margin, color-channel control for monochrome work, show-LUT/Technicolor path, six-block avenue set and interactive LED movie-screen light. Frame.io's direct Adam Gough interview establishes 6.5K capture versus a 4K finish, Technicolor pulls, MPC's 2K-to-4K pipeline upgrade, Aspera dailies, Avid DNx 36, translation markers, coverage assembly, almost 80 long takes, rhythm across scenes and occasional invisible take joins. Filmmaker Magazine's direct Lievsay/Henighan interview documents Sergio Díaz's Mexico City recordings, bespoke background dialogue, authored offscreen action, Atmos placement and a ten-week mix plus final mastering pass. MPC identifies its 1970s Mexico reconstruction work, while Netflix's Criterion announcement confirms the director-supervised 4K master, Atmos/5.1, professional/nonprofessional ensemble and later edition. Verification therefore does not claim that memory is documentary proof, that Cleo is a literal transcript of one life, that withholding scripts is a universal route to truthful performance, that digital ALEXA 65 is film negative, that black-and-white viewing means monochrome sensor capture, that apparent long takes are always untouched, that Netflix produced the picture, or that awards validate its social and technical claims.",
  sources: [
    {
      title: "Roma: Memories of Mexico",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/article/roma-memories-of-mexico/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Cuarón and crew reporting supporting the more-than-110-day span, ALEXA 65 Open Gate/ARRIRAW/Codex path, Prime 65 lenses, 2.39 framing and stabilization margin, color-to-monochrome workflow, custom output transform, LED interactive-light composite, transformed locations and six-block period set."
    },
    {
      title: "BAFTA Screenwriters Lecture Series: Alfonso Cuarón",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/bafta-screenwriters-lecture-series-alfonso-cuaron/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Direct Cuarón transcript supporting the separation between production by Esperanto Filmoj/Participant Media and later Netflix distribution, the intended large-screen/Atmos context and Cuarón's broader character-environment writing method."
    },
    {
      title: "Roma by Alfonso Cuarón — Production Notes",
      publisher: "Netflix production notes preserved by in70mm.com",
      url: "https://www.in70mm.com/presents/1963_blow_up/titel/r/roma/press/index.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Contemporary production notes supporting the 108-day schedule, Mexican crew, extensive casting search, Aparicio/García casting, incomplete-script and chronological performance method, period-memory research, transformed locations, family-house reconstruction, movable walls and controlled courtyard light."
    },
    {
      title: "Editing Roma: An Emotional Journey from Indie to Oscars",
      publisher: "Frame.io",
      url: "https://blog.frame.io/2019/02/04/adam-gough-roma/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Adam Gough interview supporting color acquisition with black-and-white Avid viewing, 6.5K-to-4K finishing, MPC's 4K pipeline upgrade, Aspera/DNx 36 dailies, translation markers, technical assembly, almost 80 long takes, emotion-led rhythm and selected invisible take joins."
    },
    {
      title: "Skip Lievsay and Craig Henighan on Designing the Sound of Alfonso Cuarón's Roma",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/106491-skip-lievsay-craig-henighan-alfonso-cuaron-roma/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct sound-team interview supporting Mexico City field recordings, production-dialogue foundation, specifically written and recorded background voices, hospital offscreen worlds, discrete Atmos movement, ten-week mixing and the concluding mastering pass."
    },
    {
      title: "Roma",
      publisher: "MPC",
      url: "https://www.mpcvfx.com/en/filmography/roma/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Vendor filmography identifying MPC's work with Cuarón to reconstruct 1970s Mexico; used only to establish vendor participation and reconstruction scope, not an undocumented shot count or software pipeline."
    },
    {
      title: "Four Netflix Films Added to the Criterion Collection",
      publisher: "Netflix",
      url: "https://about.netflix.com/news/four-netflix-films-added-to-the-criterion-collection",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Distributor record supporting the later director-supervised 4K master, Dolby Atmos/5.1, 2.39 presentation, mixture of professional and nonprofessional performances, post/sound participants and the distinction between the film's production history and a subsequent Criterion edition."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
