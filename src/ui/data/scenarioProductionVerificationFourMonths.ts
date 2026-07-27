import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fourMonthsProductionCaseVerification = {
  scenarioId: "scenario_4_months_3_weeks_and_2_days_2007",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The case's Romanian New Wave position, testimony-derived screenplay, Mobra Films production, real-location period reconstruction, exact performance method, one-shot widescreen camera system, long-take editing, reconstructed practical sound, withheld score and Palme d'Or legacy are supported by filmmaker, festival, institute and craft records.",
  sources: [
    {
      title: "4 Months, 3 Weeks and 2 Days – English Press Kit",
      publisher: "Festival de Cannes",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/63808.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official production dossier documents Mobra Films and Saga Film, financing, complete craft credits, testimony-based development, rewriting, casting, acting, location, period-prop and one-shot camera methods in Mungiu's own notes."
    },
    {
      title: "4 Months, 3 Weeks and 2 Days",
      publisher: "Criterion Collection",
      url: "https://www.criterion.com/films/28617-4-months-3-weeks-and-2-days",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion records the 1987 setting, principal cast and department credits, color 2.35:1 presentation, director-approved restoration and supplements on Mungiu's realism and the New Romanian Cinema."
    },
    {
      title: "10 Great Romanian New Wave Films",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-romanian-new-wave-films",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI places the film at the Romanian New Wave's international breakthrough, connects it to a heard account of an illegal abortion and identifies the recreated scarcity and bodily coercion of Ceaușescu-era Romania."
    },
    {
      title: "Oleg Mutu – Producer",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/interview.aspx?documentID=78999&lang=en",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Mutu describes the demanding overlap of cinematography and production responsibility, the rapid and difficult Romanian shoot and his script-specific visual collaboration with former classmate Cristian Mungiu."
    },
    {
      title: "Cristian Mungiu's 4 Months, 3 Weeks and 2 Days",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/archives/issues/winter2008/4months.php",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Mungiu explains the camera's alignment with Otilia's inner state, the avoidance of music, close-ups and conspicuous editing, and the deliberate use of one camera position and offscreen space."
    },
    {
      title: "Dana Bunescu: You Make Films Out of Need",
      publisher: "Films in Frame",
      url: "https://www.filmsinframe.com/en/interviews/dana-bunescu-editor/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound"],
      note: "Bunescu describes editing long-take films and reconstructing the crucial dinner sequence from syllables, word fragments, three days of recorded material and separate foley while shaping rhythm and dialogue nuance."
    },
    {
      title: "4 Months, 3 Weeks and 2 Days",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/4-maneder-3-uger-og-2-dage",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI verifies the Romanian feature's Mobra Films production, physical theatrical material, Dolby presentation and principal screenplay, cinematography, editing, production-design and performance credits."
    },
    {
      title: "4 Months, 3 Weeks and 2 Days",
      publisher: "SEMINCI",
      url: "https://www.seminci.com/en/peliculas/4-months-3-weeks-and-2-days/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The festival catalogue verifies Mobra Films and Saga Film, the producing team, Oleg Mutu, Dana Bunescu and the three-person sound department while preserving the film's Romanian production identity."
    },
    {
      title: "4 Months, 3 Weeks and Two Days",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/4-months-3-weeks-and-two-days/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "EFA records the film's Tales from the Golden Age framing, Mobra production and 2007 European Film recognition, supporting its historical project and continental reception after Cannes."
    },
    {
      title: "Conversations: Cristian Mungiu",
      publisher: "Salon",
      url: "https://www.salon.com/2008/01/29/mungiu/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The contemporary interview situates Mungiu and Mutu as disciplined working filmmakers and discusses the abortion story, communist context and production choices behind the Palme d'Or-winning film."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const fourMonthsVerificationRecords = [
  fourMonthsProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
