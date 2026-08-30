import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const nopeProductionCaseVerification = {
  scenarioId: "scenario_nope_2022",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Nope is verified as Chapter 19's industrial-scale technical case through institutional records and direct department testimony that connect Universal/Monkeypaw-scale production to large-format film, a newly engineered infrared day-for-night system, practical ranch construction, animal/special-effects work, extensive VFX, editorial restructuring and sound-led suspense. AFI records the 2022 United States feature at 131 minutes and credits Jordan Peele, Hoyte van Hoytema, Ruth De Jong, Nicholas Monsour, Michael Abels, R. Adam Chambers, José Antonio García and special-effects personnel. Universal's archive confirms Peele as writer/producer/director, Ian Cooper as producer, Robert Graf and Win Rosenfeld as executive producers, and the principal creative credits. Kodak's van Hoytema interview establishes 15-perf IMAX and 5-perf 65mm capture, VISION3 250D 5207 / 500T 5219 / 50D 5203, FotoKem processing, 8K scans down-rezzed to 4K, and the synchronized ARRI Alexa 65 infrared + Panavision System 65 day-for-night rig with matched Sphero lenses, Elhanan Matos monitoring/synchronization and Greig Fisher DI collaboration. Kodak also establishes why dialogue sometimes moved away from noisy IMAX cameras. MPC documents concept/visualization work and more than 675 VFX shots, including Jean Jacket, a full art-directable CG cloudscape and the infrared/film day-for-night integration. Ruth De Jong's Motion Picture Association interview establishes the practical Agua Dulce ranch approach: Haywood house, horse facilities and Jupiter's Claim built for 360-degree filming, structurally usable sets, practical Sky Dancers and a blood-rain system using rain bars and food-grade blood. Nicholas Monsour documents a first cut near four hours and the structural editorial problem. Johnnie Burn documents ambiguous wind/scream design, off-screen threat and sound's narrative role, while Michael Abels documents deliberate coordination among score, sound design and silence. These sources demonstrate a practical-digital hybrid; they do not support a 'no CGI' characterization. They also do not establish exact budget, financing shares, insurance, every animal-welfare protocol, full shooting calendar, all permits, complete camera/lens reports, every infrared calibration, all VFX vendor shot allocations, editorial software/storage, the full production-sound package, ADR/foley architecture, mix-stage routing, music-recording workflow or complete distribution economics. Those remain unresolved.",
  sources: [
    {
      title: "Nope",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/nope",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film record supporting 2022, United States, 131-minute runtime and principal writing, cinematography, production design, editing, music, sound and production credits."
    },
    {
      title: "Nope Press Release",
      publisher: "Universal Pictures Home Entertainment",
      url: "https://www.universalpicturesathome.com/press-release/nope-press-release",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Studio archive supporting Universal distribution and principal filmmaker/producer/cinematography/design/editing/music credits plus premium home-video aspect-ratio information."
    },
    {
      title: "How Hoyte van Hoytema FSF NSC ASC pioneered with Kodak large format film for the supernatural sensation 'Nope'",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/nope/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer testimony supporting IMAX 15-perf and System 65 5-perf capture, Kodak stocks, FotoKem/8K-to-4K pipeline, Alexa 65 infrared dual-camera day-for-night engineering, matched Sphero lenses, DI prototyping, camera-noise constraints and mainly single-camera production."
    },
    {
      title: "Nope",
      publisher: "MPC",
      url: "https://www.mpcvfx.com/en/filmography/nope/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "VFX-studio production record supporting early concept/visualization involvement, more than 675 VFX shots, Jean Jacket, CG cloudscapes and the infrared/film day-for-night integration."
    },
    {
      title: "How 'Nope' Production Designer Ruth De Jong Built & Bloodied the Haywood Ranch",
      publisher: "Motion Picture Association / The Credits",
      url: "https://www.motionpictures.org/2022/07/how-nope-production-designer-ruth-de-jong-built-bloodied-the-haywood-ranch/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct production-designer testimony supporting the Agua Dulce practical ranch strategy, 360-degree structurally usable builds, horse spaces, practical Sky Dancers and blood-rain special effects."
    },
    {
      title: "'Nope' Editor Nicholas Monsour Dives Into the Macabre of Jordan Peele's Sci-Fi Epic",
      publisher: "Motion Picture Association / The Credits",
      url: "https://www.motionpictures.org/2022/07/nope-editor-nicholas-monsour-dives-into-the-macabre-of-jordan-peeles-sci-fi-epic/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Direct editor testimony supporting early story involvement, the large volume of material and a first cut close to four hours before final structural refinement."
    },
    {
      title: "'Nope' Sound Designer Johnnie Burn Puts the Fear in What We Hear",
      publisher: "Motion Picture Association / The Credits",
      url: "https://www.motionpictures.org/2022/08/nope-sound-designer-johnnie-burn-puts-the-fear-in-what-we-hear/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct sound-designer/re-recording testimony supporting off-screen threat, ambiguous wind/scream textures and sound as an authored suspense system."
    },
    {
      title: "'Nope' Composer Michael Abels on Scoring Jordan Peele's Sci-Fi Epic",
      publisher: "Motion Picture Association / The Credits",
      url: "https://www.motionpictures.org/2022/08/nope-composer-michael-abels-on-scoring-jordan-peeles-sci-fi-epic/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct composer testimony supporting coordination among score, sound design and deliberate silence/negative space at the final-dub decision level."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
