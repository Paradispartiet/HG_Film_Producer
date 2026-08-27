import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const nineteenSeventeenProductionCaseVerification = {
  scenarioId: "scenario_1917_2019",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "1917 is verified as a 2019 Chapter 18 Production Case in which apparent-real-time writing, roughly four months of cross-department rehearsal, time-measured production design, compact large-format digital capture, stabilized camera handoffs, wireless/fiber sound infrastructure, prep-led editorial seam planning and continuity-preserving VFX operate as one production system. BFI anchors a 119-minute released version and the principal writing/directing/cinematography credits. ARRI documents the first-feature use of prototype ALEXA Mini LF bodies with Signature Primes and TRINITY, while Roger Deakins identifies a roughly 99-percent 40 mm strategy with a 47 mm river exception and 35 mm German-basement exception. Motion Picture Association department interviews document actor/camera blocking before final set dimensions, Dennis Gassner's moving-camera architecture, Stuart Wilson's trench fiber network and hidden antenna/costume-lav strategy, Lee Smith's involvement during prep and preference for reshooting weak material rather than assuming post could rescue it, Oliver Tarney's density-and-release sound approach, and Guillaume Rocheron's integration of stitching, set extensions, environmental work, plane transitions and river work with camera geometry. The film is not promoted as one literal take: multiple long takes and invisible joins construct the continuity illusion, and Schofield's blackout creates a deliberate temporal discontinuity. Exact budget, shooting-day count, total stitch count, full lens-by-shot map, universal exposure settings, complete lighting inventory, rig geometry, RF topology, every hidden-cut location, VFX shot/vendor totals, DI node graphs and final-mix automation remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "1917",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/83d6a46e-e55d-5b93-a820-f23a96eb5c77/1917",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue anchor supporting the 119-minute version and principal directing, writing, cinematography and production credits."
    },
    {
      title: "The immersive camera movement of 1917",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/the-immersive-camera-movement-of-1917-",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Title-specific camera account documenting prototype ALEXA Mini LF use, Signature Primes, TRINITY and Deakins' dominant 40 mm strategy with documented focal-length exceptions."
    },
    {
      title: "How Cinematographer Roger Deakins & Team Pulled Off the One-Shot Masterpiece 1917",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2019/12/how-cinematographer-roger-deakins-team-pulled-off-the-one-shot-masterpiece-1917/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Department reporting supporting the roughly four-month rehearsal system, time-to-distance set construction, location workflow, camera movement and Stuart Wilson's fiber/wireless sound infrastructure."
    },
    {
      title: "1917's Production Designer on Building a World at War",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2020/01/1917s-production-designer-on-building-a-world-at-war/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Dennis Gassner account supporting moving-camera architecture, rehearsal-led dimensions and the integration of historical reference with practical set construction."
    },
    {
      title: "How Editor Lee Smith & Sound Editor Oliver Tarney Crafted the Immersive Story of 1917",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2020/01/how-editor-lee-smith-sound-editor-oliver-tarney-crafted-the-immersive-story-of-1917/",
      sourceKind: "trade_feature",
      supports: ["overall", "editing", "sound"],
      note: "Editor/sound account supporting editorial participation in prep, seam protection, rapid feedback/reshoot logic and deliberate sound-density modulation."
    },
    {
      title: "1917's Oscar-Nominated VFX Supervisor on Creating Relentless Immersion",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2020/01/1917s-oscar-nominated-vfx-supervisor-on-creating-relentless-immersion/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Guillaume Rocheron account supporting continuity-preserving stitches, set extensions, environmental work and the plane/river effects pipeline."
    },
    {
      title: "Screenwriter Krysty Wilson-Cairns on Helping Sam Mendes Write the WWI Epic 1917",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2019/12/screenwriter-krysty-wilson-cairns-on-helping-sam-mendes-write-the-wwi-epic-1917/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Wilson-Cairns account supporting the continuous-duration mandate from screenplay stage and the intentional temporal break in the middle of the film."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
