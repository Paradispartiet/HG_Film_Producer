import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const tenetProductionCaseVerification = {
  scenarioId: "scenario_tenet_2020",
  status: "verified",
  verifiedAt: "2026-08-28",
  summary: "Tenet is verified as the first Chapter 19 Production Case: a 2019 global large-format photochemical production whose 2020 theatrical release was disrupted by the pandemic. BFI anchors Christopher Nolan as writer-director, Emma Thomas and Nolan as producers and a 149-minute institutional runtime. Hoyte van Hoytema's production account documents a strategic 70mm/IMAX camera system, six IMAX packages, Panavision Large Format System 65, ARRI 65 and a Logmar Magellan 65mm prototype, plus stage/location production spanning the US, Denmark, Estonia, India, Italy, Norway and the UK. Panavision independently records System 65 Studio camera/optics and Sphero 65 lenses, while IMAX confirms selected sequences photographed with 15-perf 70mm IMAX cameras and optimized for IMAX presentation. Time inversion is verified as a cross-department production problem: key sequences were photographed in forward and backward directions, but the record does not generalize that method to every inverted event. Effects evidence rejects a false practical-versus-digital binary. Andrew Jackson describes a hierarchy favoring in-camera work and photographed elements before CG, including the full-size retired 747 striking a set-built structure with practical fire/collapse and VFX cable removal/cleanup; DNEG describes close SFX/VFX collaboration, extensive reference capture, roughly 300 people on the DNEG show and an IMAX-scan/VFX pipeline geared toward a photochemical finish rather than a conventional full-film DI. Richard King and post-production interviews support custom vehicle/weapon/inversion sound work, Willie Burton's masked-dialogue production-sound strategies and comparatively limited looping. Ludwig Göransson is preserved as composer, with manipulated, processed and stretched musical elements and pandemic-era remote recording treated as score/post-production evidence rather than principal-photography COVID protocol evidence. Exact budget or financing shares, shooting-day count, film-stock inventory, shot-level camera/lens map, frame rates, exposure/processing/filter recipes, hazardous stunt/SFX procedures, exact VFX shot ledger, software/render topology, complete scan/record-out/lab settings, edit system, microphone-by-line map, exact ADR census, score stems and final-mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Tenet (2020)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/f1191430-33a7-5a09-9ad7-0d6eec1b991f/tenet",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional film record supporting Christopher Nolan as director/writer, Emma Thomas and Nolan as producers, principal cast and the 149-minute runtime anchor."
    },
    {
      title: "Tenet DP Hoyte van Hoytema FSF NSC ASC says the big screen is best for movies",
      publisher: "Cinematography World",
      url: "https://www.cinematography.world/hoyte-van-hoytema-fsf-nsc-asc-on-getting-tenet-on-to-the-big-screen/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Van Hoytema describes the 2019 production, roughly 250-person crew, seven-country footprint, strategic 70mm/IMAX photography, six IMAX packages, System 65/ARRI 65/Logmar inventory and key forward/backward capture methods."
    },
    {
      title: "Lenses & Cameras used on Tenet",
      publisher: "Panavision",
      url: "https://www.panavision.com/highlights/credits/credits-detail/tenet",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Vendor credit confirming Hoyte van Hoytema, gaffer Ville Penttila, Panavision System 65 Studio camera/optics and Sphero 65 lenses for Tenet."
    },
    {
      title: "Warner Bros. Pictures' and Christopher Nolan's Tenet To Open In IMAX 70mm",
      publisher: "IMAX",
      url: "https://www.imax.com/news/experience-tenet-IMAX-70mm?page=1",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official exhibition record confirming that sequences were photographed with 15-perf 70mm IMAX cameras and that the film was refined for IMAX presentation."
    },
    {
      title: "Here's how the effects teams on Tenet pulled off those crazy time-bending scenes",
      publisher: "befores & afters",
      url: "https://beforesandafters.com/2020/10/23/heres-how-the-effects-teams-on-tenet-pulled-off-those-crazy-time-bending-scenes/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Overall VFX supervisor Andrew Jackson describes the practical-first effects hierarchy, full-size 747/set-built-hangar sequence, VFX cleanup, miniatures/filmed elements and the photochemical-finish/VFX handoff."
    },
    {
      title: "Behind the VFX of TENET",
      publisher: "DNEG",
      url: "https://www.dneg.com/news/behind-the-vfx-of-tenet",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "DNEG VFX supervisor Andy Lockley documents SFX/VFX collaboration, extensive photography/LIDAR reference capture, roughly 300 people working on the DNEG show, mixed-entropy effects and IMAX scans around 6.3K inside a photochemical-finish pipeline."
    },
    {
      title: "Wonder Woman and Tenet Sound Designer Richard King",
      publisher: "postPerspective",
      url: "https://postperspective.com/wonder-woman-and-tenet-sound-designer-richard-king/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Richard King discusses custom sound work, Willie Burton's tiny-mic and boom strategies for masked dialogue, dialogue editing and the film's comparatively limited looping during lockdown-era post-production."
    },
    {
      title: "Ludwig Goransson discusses Tenet score in Variety",
      publisher: "USC Thornton School of Music",
      url: "https://music.usc.edu/ludwig-goransson-discusses-tenet-score-in-variety/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Institutional summary of Göransson's account supporting the manipulated, processed and stretched musical language created for the film."
    },
    {
      title: "How Do Composers Score Music During a Pandemic? One Single Instrument At a Time",
      publisher: "Rolling Stone",
      url: "https://au.rollingstone.com/music/music-features/tenet-film-score-composers-pandemic-20914/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Production reporting supporting that Tenet's score recording was materially affected by COVID-19 lockdown and remote/home recording, a post-production fact kept separate from the 2019 principal-photography workflow."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
