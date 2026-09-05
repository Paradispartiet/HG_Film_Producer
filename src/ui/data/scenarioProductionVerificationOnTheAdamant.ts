import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const onTheAdamantProductionCaseVerification = {
  scenarioId: "scenario_on_the_adamant_2023",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "On the Adamant / Sur l'Adamant is verified as a new Chapter 19 festival-priority documentary Production Case with an explicit chronology boundary: Unifrance records production year 2022, while Chapter 19 matches the film to the 2023 Berlinale cycle and Golden Bear under filmYear 2023. Nicolas Philibert's official production page locks the 109-minute France/Japan identity, 1.85 ratio, Philibert on camera and editing, Erik Ménard and François Abdelnour on sound, Nathalie Vidal on sound editing/mix, Christophe Bousquet on grading, producers Miléna Poylo, Gilles Sacuto and Céline Loiseau, co-producer Norio Hatano and the documented co-production entities. Unifrance independently locks 2022 production year and 5.1. Philibert's official press material documents staged filming from May-November 2021 plus isolated early-2022 days, small-crew/sometimes-solo camera practice, selected two-camera situations, trust/refusal boundaries and more than one hundred hours of material. BFI supports the observational portrait method. Total budget/shares, exact total shoot days, camera/lens/light/data package, complete rights ledger, detailed audio chain, grading system, VFX census and full master lineage remain unresolved.",
  sources: [
    {
      title: "On the Adamant — Sur l'Adamant",
      publisher: "Nicolas Philibert",
      url: "https://www.nicolasphilibert.fr/en/films/sur-ladamant/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Filmmaker's official production page supporting the 109-minute France/Japan identity, 1.85 ratio, camera, sound, editing, sound-post, grading, producer and co-production credits."
    },
    {
      title: "On the Adamant",
      publisher: "Unifrance",
      url: "https://en.unifrance.org/movie/52940/on-the-adamant",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Institutional catalogue record supporting production year 2022, 109-minute runtime, France/Japan co-production, 1.85 and 5.1."
    },
    {
      title: "On the Adamant press kit",
      publisher: "Nicolas Philibert",
      url: "https://www.nicolasphilibert.fr/wp-content/uploads/2025/08/dpresse-va.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official filmmaker press material describing filming stages from May-November 2021 and isolated early-2022 days, deliberately small crew/sometimes solo operation, selected two-camera situations, participant refusal, contingency and more than one hundred hours of material for editing."
    },
    {
      title: "On the Adamant: Nicolas Philibert's warm-hearted portrait of a floating mental health centre",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/adamant-nicolas-philiberts-warm-hearted-portrait-floating-mental-health-centre",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional critical analysis supporting the film's observational movement among collective meetings, workshops and individual portraits; not used to infer undocumented equipment or medical claims."
    },
    {
      title: "Awards 2023 — Golden Bear for Best Film",
      publisher: "Berlin International Film Festival",
      url: "https://www.berlinale.de/media/en/download/awards-juries/berlinale-awards-2023.pdf",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official 2023 Berlinale award record establishing the Golden Bear for On the Adamant; used for festival/reception priority, not to overwrite production year 2022."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
