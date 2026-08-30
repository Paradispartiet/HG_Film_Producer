import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const rrrProductionCaseVerification = {
  scenarioId: "scenario_rrr_2022",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "RRR is verified as Chapter 19's regional/global production case under the balanced-production scheduler. The Australian Classification Board records an original 180-minute 2022 public-exhibition DCP from India, directed by S. S. Rajamouli, produced by D. V. V. Danayya through DVV Entertainments, in Telugu and English. BFI independently records the 2022 Indian film and Rajamouli as director and writer. ARRI and cinematographer K. K. Senthil Kumar document ALEXA LF with Signature Primes, extensive SkyPanel use, and the continuity burden created when COVID-19 stretched production across four years; Kumar describes maintaining detailed camera-report notes covering lighting, camera position and movement, exposure and lens settings so revisited material could match. American Cinematographer and postPerspective document long preproduction, storyboards, Unreal Engine previsualization and stunt visualization for major action, and Kumar's preference for operating one ALEXA LF himself, expanding to two or at most three cameras for large action. Kumar also describes RRR as his first Indian feature photographed in large format and a pipeline intended to support Dolby Vision, IMAX and 3D presentation. Production designer Sabu Cyril describes Hyderabad-based production infrastructure with workshops, rehearsal, editing and HOD spaces, practical sets, extensions, miniatures and mechanical rigs; his department account places the action material at roughly three months and daily on-set populations commonly around 200 and sometimes about 1,000. Rajamouli's bridge rescue is documented as hybrid construction using full-size upper and lower bridge sets, miniature sections and VFX rather than a practical-versus-digital binary. VFX supervisor Srinivas Mohan reports roughly 2,800 VFX shots over three and a half years with more than a dozen studios, while Digital Domain separately documents 213 shots across four sequences involving previs, digidouble R&D, set extensions, crowds, fire, debris and other FX. Secondary reporting places principal work across Hyderabad, Bulgaria and Ukraine and reports more than 300 shooting days; those figures are retained as scale context rather than promoted above department-level primary craft evidence. RRR's Chapter 19 value is therefore the coordination of Telugu regional-industrial authorship, large-format photography, previs and stuntvis, practical builds, miniatures, mechanical rigs, crowds, distributed VFX, pandemic continuity, multilingual theatrical versions, premium-format exhibition and later global platform circulation without collapsing Telugu cinema into a generic Indian or streaming system. Exact total budget and financing shares, recoupment, tax incentives, insurance, complete shooting calendar and daily headcounts, full camera-body/focal-length/filter/codec/frame-rate map, complete lighting diagrams, unpublished stunt-safety paperwork, miniature scales, full VFX vendor allocation and pipeline versions, color/conform architecture, production-sound chain, final mix chain, subtitle/dub workflow and territory-by-territory distribution rights remain outside the verified layer.",
  sources: [
    {
      title: "RRR: Rise Roar Revolt",
      publisher: "Australian Classification",
      url: "https://www.classification.gov.au/titles/rrr-rise-roar-revolt",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Government classification record supporting the 180-minute original public-exhibition DCP, 2022 classification, India as country of origin, Telugu/English languages, S. S. Rajamouli as director, D. V. V. Danayya as producer and DVV Entertainments as production company."
    },
    {
      title: "RRR (2022)",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/films-tv-people/rrr",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Film-institute record independently supporting the 2022 Indian film and S. S. Rajamouli's directing/writing authorship."
    },
    {
      title: "ARRI ALEXA LF, Signature Primes, and SkyPanels on RRR",
      publisher: "ARRI",
      url: "https://www.arri.com/en/learn-help/learn-help-camera-system/camera-workflows/rrr",
      sourceKind: "manufacturer_technical",
      supports: ["overall", "cinematography"],
      note: "Manufacturer interview with cinematographer K. K. Senthil Kumar supporting ALEXA LF, Signature Primes, SkyPanel use, COVID-era continuity problems and his detailed camera-report workflow."
    },
    {
      title: "RRR cinematography: K. K. Senthil Kumar",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/articles/rrr-k-k-senthil-kumar",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Cinematography-society craft interview supporting storyboard/previsualization planning, Unreal Engine previs for selected action and stunt visualization as cross-department preparation."
    },
    {
      title: "RRR: Director S.S. Rajamouli and DP K.K. Senthil Kumar",
      publisher: "postPerspective",
      url: "https://postperspective.com/rrr-director-s-s-rajamouli-and-dp-k-k-senthil-kumar/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Director/DP interview supporting long prep, large-format capture, ALEXA LF and Signature Primes, mostly one-camera operation with two or three cameras for major action, extensive previs and intended Dolby Vision/IMAX/3D delivery."
    },
    {
      title: "Sabu Cyril on designing RRR",
      publisher: "Cinema Express",
      url: "https://www.cinemaexpress.com/telugu/interviews/2022/mar/31/sabu-cyril-on-designing-rrr-30615.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "production_design"],
      note: "Production-designer interview supporting Hyderabad production infrastructure, practical sets and extensions, rigs, miniatures, roughly three months of action work and department-level crowd/crew scale."
    },
    {
      title: "Srinivas Mohan on the visual effects of RRR",
      publisher: "Cinema Express",
      url: "https://www.cinemaexpress.com/telugu/interviews/2022/apr/08/srinivas-mohan-on-the-vfx-of-rrr-30779.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "VFX-supervisor interview supporting roughly 2,800 VFX shots, a three-and-a-half-year VFX process and coordination across more than a dozen studios."
    },
    {
      title: "RRR Visual Effects",
      publisher: "Digital Domain",
      url: "https://digitaldomain.com/work/rrr/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "Vendor case study supporting Digital Domain's 213 shots across four sequences and work including previs, digidouble R&D, set extension, crowds, fire, debris and other FX."
    },
    {
      title: "S.S. Rajamouli on the bridge sequence in RRR",
      publisher: "RogerEbert.com",
      url: "https://www.rogerebert.com/interviews/ss-rajamouli-rrr-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "production_design", "cinematography"],
      note: "Director interview supporting the bridge rescue as hybrid construction combining full-size upper/lower bridge sets, miniature elements and VFX that required matching scale and light."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
