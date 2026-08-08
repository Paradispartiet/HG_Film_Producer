import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const cafeSocietyProductionCaseVerification = {
  scenarioId: "scenario_cafe_society_2016",
  status: "verified",
  verifiedAt: "2026-08-08",
  summary: "Café Society's 1930s Hollywood-New York romantic structure, Woody Allen screenplay and ensemble, Vittorio Storaro's first long-form digital capture with Sony F65/F55 and 2:1 Univisium, controlled light and color, Santo Loquasto production design, Suzy Benzinger costume system, period jazz and linked 4K finishing workflow are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Café Society",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/cafe-society/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Cannes verifies the 96-minute American production, Woody Allen as director and screenwriter, Vittorio Storaro as director of photography, Santo Loquasto as production designer, Alisa Lepselter as editor, the principal cast and the film's 2016 opening-film status."
    },
    {
      title: "Digital Cinematography on Café Society by Vittorio Storaro",
      publisher: "Film and Digital Times",
      url: "https://www.fdtimes.com/2016/12/30/vittorio-storaro/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Storaro gives a first-person production account covering the Sony F65, 4K 16-bit capture, 2:1 composition, controlled lighting, dailies, DI collaboration with Anthony Raffaele and the relationship between digital technique, color and visual storytelling."
    },
    {
      title: "How the 1930s Came to Life in Woody Allen's Café Society",
      publisher: "Town & Country",
      url: "https://www.townandcountrymag.com/leisure/arts-and-culture/a7133/cafe-society-set-design/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Production designer Santo Loquasto explains the use of surviving Los Angeles architecture, common New York locations, period research and the deliberate color contrast between the sunlit Hollywood world and New York interiors."
    },
    {
      title: "Behind the Design of Woody Allen's Café Society",
      publisher: "Architectural Digest",
      url: "https://www.architecturaldigest.com/gallery/woody-allen-cafe-society-behind-the-design",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Loquasto describes recreating the 1930s nightclub world from period films and photographs and details the sets and locations used to turn historical research into a coherent social environment."
    },
    {
      title: "Behind the Scenes on the Film Every Fashion Lover Should Watch This Christmas",
      publisher: "Marie Claire UK",
      url: "https://www.marieclaire.co.uk/news/fashion-news/459886-459886",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Costume designer Suzy Benzinger discusses the film's 1930s wardrobe and her collaboration with Chanel on Kristen Stewart's custom clothing, providing department-level evidence for the period costume system."
    },
    {
      title: "Café Society",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/cafe-society",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "AFI records the film's runtime, genres and detailed crew, including production design, costume, makeup and hair, unit production management, visual effects, sound, camera, digital imaging and post-production roles."
    },
    {
      title: "Storaro Discusses His First Digital Shoot",
      publisher: "Digital Cinema Report",
      url: "https://www.digitalcinemareport.com/storaro-discusses-his-first-digital-shoot/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The trade report documents Sony F55/F65 acquisition, the ACES and Baselight workflow, Technicolor PostWorks finishing, 4K ambitions and the distinct visual looks Storaro and colorist Anthony Raffaele created for the film's major locations."
    },
    {
      title: "Stemningsrapport fra Camerimage",
      publisher: "Foreningen Norske Filmfotografer",
      url: "https://filmfotografer.no/2016/11/stemmningsrapport-fra-camerimage/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The cinematographers' association reports Storaro and Allen's move to digital, Sony F65 and F55 use, Cooke S4 lenses, 4K capture and mastering, Technicolor PostWorks finishing and the 2:1 Univisium frame."
    },
    {
      title: "Café Society Original Soundtrack",
      publisher: "DownBeat",
      url: "https://downbeat.com/reviews/detail/cafe-society-original-soundtrack",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "DownBeat documents the soundtrack's 1930s focus, Rodgers and Hart material, period recordings and new performances by Vince Giordano and the Nighthawks, tying the nightclub setting directly to historically specific jazz practice."
    },
    {
      title: "Breaking Down the Script – Part 3 – Composition and Light",
      publisher: "Sony Cine",
      url: "https://sony-cinematography.com/articles/breaking-down-the-script---part-3---composition-and-light/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Sony's cinematography case study uses Storaro with the F65 on Café Society to explain composition, filtration, light color and deliberate control of visual atmosphere, supporting the production's camera-and-lighting methodology."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
