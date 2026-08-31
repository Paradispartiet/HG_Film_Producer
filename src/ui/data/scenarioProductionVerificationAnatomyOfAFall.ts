import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const anatomyOfAFallProductionCaseVerification = {
  scenarioId: "scenario_anatomy_of_a_fall_2023",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Anatomy of a Fall is verified as Chapter 19's auteur-festival case through Festival de Cannes institutional credits and direct/craft testimony connecting courtroom dramaturgy, sound as evidence, a rejected 35mm 2-perf plan, ALEXA Mini LF anamorphic capture, severe courthouse and mountain-location constraints, engineered naturalistic lighting and editorial ambiguity. Cannes records the 151-minute 2023 French feature, Justine Triet as director and co-writer with Arthur Harari, Simon Beaufils as cinematographer, Emmanuelle Duplay as production designer, Laurent Sénéchal as editor, and Julien Sicart, Fanny Martin and Jeanne Delplancq among principal sound credits. Triet's interviews establish the couple-through-judicial-prism concept, the importance of the house during writing, French courtroom research, the deliberate withholding of images and the central role of recorded sound. Beaufils documents initial 35mm 2-perf tests, the decision to move to digital, ALEXA Mini LF capture, Hawk V-Lite anamorphics, an Angénieux Optimo 24-290 with rear anamorphic adapter, the Alpine chalet, the Saintes courthouse, the eight-day courthouse window and two-camera strategy. ARRI's gaffer profile documents six weeks in the chalet and an ARRIMAX placed on a roughly 45-meter gondola to control light across three levels against snowy window backgrounds. Laurent Sénéchal documents pre-shoot script involvement, Triet's avoidance of a conventional assembly, the audio-to-flashback transition, limited-take/two-camera courtroom material and editing choices designed to keep Sandra plausibly readable in multiple directions. These sources do not establish a complete audited budget, cash flow, insurance, full shooting schedule, every legal-consultant note, permits, complete camera/monitor/codec allocation, exact look/LUT/grain pipeline, complete lighting/power inventory, production-sound microphone map, dialogue edit/ADR/foley/stem routing, edit storage/versioning, VFX shot list, music-rights economics, DI decisions, release deliverables or recoupment. Those remain unresolved.",
  sources: [
    {
      title: "ANATOMIE D'UNE CHUTE (ANATOMY OF A FALL)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/anatomie-d-une-chute/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional festival record supporting the 151-minute runtime, year/country, director/screenwriters and principal cinematography, production-design, editing and sound credits."
    },
    {
      title: "Simon Beaufils • Anatomy Of A Fall",
      publisher: "Cinematography World",
      url: "https://www.cinematography.world/simon-beaufils-afc-anatomy-of-a-fall/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Beaufils testimony supporting the 35mm 2-perf tests, production's switch to digital, ALEXA Mini LF, Hawk V-Lite anamorphics, Angénieux Optimo 24-290 and the prepared-yet-flexible camera method."
    },
    {
      title: "Simon Beaufils on Anatomy of a Fall",
      publisher: "Film and Digital Times",
      url: "https://www.fdtimes.com/pdfs/free/125FDTimes-April2026-150.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Beaufils interview supporting the Saintes courthouse, Alpine chalet, eight courthouse days, two-camera courtroom strategy and long Angénieux/rear-anamorphic second-camera path."
    },
    {
      title: "Sophie Lelou makes her mark among gaffers in France",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/gaffer-sophie-lelou-among-chief-electricians-in-france/317986-317986",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Direct gaffer testimony supporting six weeks in the chalet, broad snowy window backgrounds and the ARRIMAX-on-gondola solution roughly 45 meters above ground."
    },
    {
      title: "Reverse-Engineering Murder: Editing Anatomy of a Fall",
      publisher: "Frame.io Insider",
      url: "https://blog.frame.io/2024/02/22/reverse-engineering-murder-editing-anatomy-of-a-fall/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Direct Laurent Sénéchal testimony supporting editor involvement in script versions, the POV problem of the argument flashback, no conventional assembly, courtroom two-camera/limited-take material, ambiguity shaping and the relocation of family/piano/laptop material."
    },
    {
      title: "Justine Triet • Director of Anatomy of a Fall",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/442904/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Direct Triet testimony supporting sound archives as an early writing decision, the visually impaired child's perceptual relationship to missing images, the single-flashback design and the mountain/fall staging concept."
    },
    {
      title: "Center of Gravity: Justine Triet on Anatomy of a Fall",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/122968-center-of-gravity-justine-triet-on-anatomy-of-a-fall/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Direct Triet interview supporting the sound-first opening, courtroom/marriage construction and her broader formal approach to uncertainty."
    },
    {
      title: "Examining the Alien Nature of the Family Unit: Justine Triet Discusses Anatomy of a Fall",
      publisher: "Script Magazine",
      url: "https://scriptmag.com/interviews-features/examining-the-alien-nature-of-the-family-unit-justine-triet-discusses-anatomy-of-a-fall",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Direct Triet testimony supporting the couple-centered screenplay, judicial prism and long-form writing process with Arthur Harari."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
