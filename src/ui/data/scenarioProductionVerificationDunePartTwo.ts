import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const dunePartTwoProductionCaseVerification = {
  scenarioId: "scenario_dune_part_two_2024",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "Dune: Part Two is verified as Chapter 19's next award-priority industrial/technical production case through Academy and BAFTA award records, BBFC version data, direct Greig Fraser/Patrice Vermette/Jacqueline West/Joe Walker/Hans Zimmer/Richard King/Paul Lambert craft interviews, American Cinematographer production reporting, FotoKem's analog-intermediate documentation, Art Directors Guild production-design records and DNEG's lead-VFX record. The Academy and BAFTA record 2025 wins for Sound and Visual/Special Visual Effects; awards establish priority/reception rather than workflow. BBFC records the UK cinema/IMAX/ScreenX version at 166m45s and a separate home/VOD version at 165m35s, so the playable record rounds the cinema master to 167 minutes while preserving version provenance. Production designer Patrice Vermette records three months of soft prep from November 2021 through January 2022, Budapest pre-production February-July 2022, shooting through December 2022 and department-level post work January-May 2023, with Budapest as base and work in Jordan, Abu Dhabi and Italy. ASC documents ALEXA 65 as the main camera, LF/Mini LF support, 1.43/1.90/2.39 framing protection, Moviecam/IronGlass/Optica Elite lens choices, irreversible infrared capture for Giedi Prime using removed IR-cut filtration plus 87C filtration, and a camera-department Unreal Engine planning workflow based on location scans/photos. Fraser separately confirms that Part Two repeated the digital-capture to film-out/scan-back process and also created a 15-perf 70mm output; FotoKem lists the film among SHIFT analog-intermediate projects. West documents costume-material testing forced by unpredictable IR response. Lambert documents a plate-first practical/VFX philosophy, a physical worm section on a gimbal, expanded Jordan/UAE desert work and practical spice-crawler shadow engineering with roads, concrete plates, tractors and art-department legs; DNEG identifies itself as lead VFX partner without establishing the complete vendor/shot allocation. Richard King documents extensive sand/wind/machinery field recording, buried microphones and a sandworm language centered on environmental mass rather than vocalization, plus rebuilt/adapted legacy elements for ornithopters, thumpers and shields. Walker documents ensemble/story refinement and dense picture/sound/music collaboration, while Zimmer documents purpose-built instruments, Loire Cotler's voice as a musical through-line and continued composition after Part One. Complete finance, exact day count, call sheets, camera/IR/Unreal/DI ledgers, all sets/stunts/SFX/VFX allocations, production-sound/ADR/Foley/mix stems, edit revisions, score sessions and all exhibition/delivery masters remain unresolved.",
  sources: [
    {
      title: "The 97th Academy Awards | 2025",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2025",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Institutional award record supporting Dune: Part Two's Sound and Visual Effects wins; awards establish priority/reception rather than production method."
    },
    {
      title: "Winners Announced: 2025 EE BAFTA Film Awards",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/winners-announced-2025-ee-bafta-film-awards/",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Institutional award record supporting BAFTA wins for Sound and Special Visual Effects."
    },
    {
      title: "Dune: Part Two",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/dune-part-two-q29sbgvjdglvbjpwwc0xmdezmtm2",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional version record supporting 166m45s cinema/IMAX/ScreenX versions and a separate 165m35s physical-media/VOD version."
    },
    {
      title: "Expanding the View for Dune: Part Two",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/expanding-view-dune-part-two/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Fraser/Villeneuve production report supporting ALEXA 65/LF/Mini LF, 1.43/1.90/2.39 framing, Moviecam/IronGlass/Optica Elite lens strategy, Giedi Prime infrared capture and Unreal-based camera/location planning."
    },
    {
      title: "Dune: Part Two — Afterfilming Reveals Creative Approach",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/dune-part-two-greig-fraser-afterfilming/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Filmmaker-authorized technical production record created by virtual-cinematography technician Tamás Papp, supporting lighting/set documentation and camera-department technical continuity."
    },
    {
      title: "Obviously, We Couldn't Get Three Sandworms for That Day: DP Greig Fraser on Dune: Part Two",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/126135-interview-cinematographer-greig-fraser-dune-part-two/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Fraser interview supporting ALEXA 65 use, the non-anamorphic Part Two lens language, repeated film-out/scan-back process and separate 15-perf 70mm output."
    },
    {
      title: "FotoKem's SHIFT analog intermediate process",
      publisher: "FotoKem",
      url: "https://fotokem.com/shift-analog-intermediate/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Facility documentation defining SHIFT as film used as an intermediate between digital capture and rescanning and listing Dune: Part Two among projects using the process."
    },
    {
      title: "Production design of Dune — interview with Patrice Vermette",
      publisher: "Pushing Pixels",
      url: "https://www.pushing-pixels.org/2024/04/10/production-design-of-dune-interview-with-patrice-vermette.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Vermette interview supporting Part Two's soft-prep/pre-production/shoot/post chronology and the production-design workflow across the sequel."
    },
    {
      title: "ADG Perspective — Dune: Part Two",
      publisher: "Art Directors Guild",
      url: "https://digital.copcomm.com/i/1529668-november-december-2024/82",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Guild production-design record supporting the distributed art department and the Arrakeen Residency War Room built on Stage 6 at Origo Studios in Budapest."
    },
    {
      title: "Oscar Nominated VFX Supervisor Paul Lambert on Turning the Worm in Dune: Part Two",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2025/02/oscar-nominated-vfx-supervisor-paul-lambert-on-turning-the-worm-in-dune-part-two/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Lambert interview supporting plate-first reference, physical worm/gimbal work, month-long Jordan and UAE work and practical spice-crawler shadow engineering."
    },
    {
      title: "Oscar-Nominated VFX Supervisor Paul Lambert on Infrared Insanity in Dune: Part Two",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2025/02/oscar-nominated-vfx-supervisor-paul-lambert-on-infrared-insanity-in-dune-part-two/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Lambert interview supporting irreversible IR capture constraints, dawn/light dependencies and practical worm-section/VFX integration."
    },
    {
      title: "DNEG returns as lead VFX partner for Dune: Part Two",
      publisher: "DNEG",
      url: "https://www.dneg.com/news/dneg-returns-as-lead-vfx-partner-for-dune-part-two",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Vendor record supporting DNEG's lead-VFX-partner role; it does not establish the complete shot/vendor allocation."
    },
    {
      title: "Designing Dune Part Two's Breathtaking Sound",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/dune-part-two-sound/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Richard King interview supporting extensive sand/wind/machinery recording, buried microphones, environment-driven sandworm sound and rebuilt/adapted Part One sound elements."
    },
    {
      title: "Architect of Arrakis: Dune: Part Two Editor Joe Walker on Forging a Ferocious Masterpiece",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2024/03/architect-of-arrakis-dune-part-two-editor-joe-walker-on-forging-a-ferocious-masterpiece/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Walker interview supporting ensemble/story refinement, labor-strike release-delay context and dense picture/sound/music collaboration."
    },
    {
      title: "Hans Zimmer on Unearthing New Sounds for Dune: Part Two",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2024/03/hans-zimmer-on-unearthing-new-sounds-for-dune-part-two/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing"],
      note: "Direct Zimmer interview supporting custom instrument-building, Loire Cotler's voice and continued musical development after Part One."
    },
    {
      title: "Dune: Part Two Costume Designer Jacqueline West on Creating a Goth Rock God in Feyd-Rautha",
      publisher: "Motion Picture Association — The Credits",
      url: "https://www.motionpictures.org/2024/03/dune-part-two-costume-designer-jacqueline-west-on-creating-a-goth-rock-god-in-feyd-rautha/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct West interview supporting infrared fabric-camera tests and material changes required by unpredictable IR response."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
