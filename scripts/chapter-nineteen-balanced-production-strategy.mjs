export const CHAPTER_NINETEEN_PRODUCTION_LANES = [
  "independent_low_mid_budget",
  "auteur_festival",
  "nonfiction_hybrid",
  "regional_global",
  "industrial_scale_technical",
];

export const CHAPTER_NINETEEN_BALANCED_SEQUENCE = [
  { title: "Nomadland", lane: "independent_low_mid_budget" },
  { title: "Drive My Car", lane: "auteur_festival" },
  { title: "Collective", lane: "nonfiction_hybrid" },
  { title: "RRR", lane: "regional_global" },
  { title: "Top Gun: Maverick", lane: "industrial_scale_technical" },
  { title: "Titane", lane: "auteur_festival" },
  { title: "Everything Everywhere All at Once", lane: "independent_low_mid_budget" },
  { title: "Four Daughters", lane: "nonfiction_hybrid" },
  { title: "Decision to Leave", lane: "regional_global" },
  { title: "Nope", lane: "industrial_scale_technical" },
  { title: "Saint Omer", lane: "auteur_festival" },
  { title: "CODA", lane: "independent_low_mid_budget" },
  { title: "All We Imagine as Light", lane: "regional_global" },
  { title: "Oppenheimer", lane: "industrial_scale_technical" },
  { title: "Memoria", lane: "auteur_festival" },
  { title: "Anora", lane: "independent_low_mid_budget" },
  { title: "The Seed of the Sacred Fig", lane: "regional_global" },
  { title: "Killers of the Flower Moon", lane: "industrial_scale_technical" },
  { title: "Anatomy of a Fall", lane: "auteur_festival" },
  { title: "Flow", lane: "independent_low_mid_budget" },
  { title: "Godzilla Minus One", lane: "regional_global" },
  { title: "Poor Things", lane: "industrial_scale_technical" },
  { title: "Sentimental Value", lane: "auteur_festival" },
  { title: "The Substance", lane: "independent_low_mid_budget" },
  { title: "The Boy and the Heron", lane: "regional_global" },
  { title: "Spider-Man: Across the Spider-Verse", lane: "industrial_scale_technical" },
  { title: "The Power of the Dog", lane: "auteur_festival" },
  { title: "Guillermo del Toro's Pinocchio", lane: "independent_low_mid_budget" },
  { title: "The Secret Agent", lane: "regional_global" },
  { title: "Dune: Part Two", lane: "industrial_scale_technical" },
  { title: "It Was Just an Accident", lane: "auteur_festival" },
  { title: "The Brutalist", lane: "independent_low_mid_budget" },
  { title: "KPop Demon Hunters", lane: "regional_global" },
  { title: "Furiosa: A Mad Max Saga", lane: "industrial_scale_technical" },
  { title: "Sirāt", lane: "auteur_festival" },
  { title: "Sinners", lane: "independent_low_mid_budget" },
  { title: "Resurrection", lane: "regional_global" },
  { title: "F1", lane: "industrial_scale_technical" },
  { title: "The Zone of Interest", lane: "auteur_festival" },
  { title: "Barbie", lane: "industrial_scale_technical" },
  { title: "All Quiet on the Western Front", lane: "regional_global" },
  { title: "One Battle After Another", lane: "industrial_scale_technical" },
  { title: "The Mitchells vs. the Machines", lane: "industrial_scale_technical" },
];

const ELIGIBLE_DECISIONS = new Set(["P0", "P1"]);

export function buildChapterNineteenBalancedProductionStrategy(resolvedCandidates) {
  const sequenceTitles = CHAPTER_NINETEEN_BALANCED_SEQUENCE.map((item) => item.title);
  if (new Set(sequenceTitles).size !== sequenceTitles.length) {
    throw new Error("Chapter 19 balanced production sequence contains duplicate titles.");
  }

  const laneSet = new Set(CHAPTER_NINETEEN_PRODUCTION_LANES);
  for (const item of CHAPTER_NINETEEN_BALANCED_SEQUENCE) {
    if (!laneSet.has(item.lane)) throw new Error(`Unknown Chapter 19 production lane for ${item.title}: ${item.lane}`);
  }

  const eligible = resolvedCandidates.filter((item) => ELIGIBLE_DECISIONS.has(item.decision));
  const eligibleTitles = new Set(eligible.map((item) => item.title));
  const scheduledEligibleTitles = sequenceTitles.filter((title) => eligibleTitles.has(title));
  const missing = eligible.map((item) => item.title).filter((title) => !sequenceTitles.includes(title));
  if (missing.length > 0) {
    throw new Error(`Chapter 19 balanced production sequence is missing eligible candidates: ${missing.join(", ")}`);
  }
  if (scheduledEligibleTitles.length !== eligibleTitles.size) {
    throw new Error(`Chapter 19 balanced production sequence expected ${eligibleTitles.size} unique eligible titles, found ${scheduledEligibleTitles.length}.`);
  }

  const remainingSequence = CHAPTER_NINETEEN_BALANCED_SEQUENCE.filter((item) => eligibleTitles.has(item.title));
  const next = remainingSequence[0] ?? null;

  return {
    mode: "balanced_rotation",
    priorityLabelsAreEvidenceUrgencyNotLinearProductionOrder: true,
    laneOrder: CHAPTER_NINETEEN_PRODUCTION_LANES,
    rule: "Rotate production attention across independent/low-mid-budget, auteur/festival, nonfiction/hybrid, regional/global and industrial/technical worlds; P0/P1 remains evidence urgency, not a command to exhaust commercial P0 titles first.",
    safeguards: [
      "Do not produce consecutive industrial-scale cases when a source-mature eligible counter-lane case is available earlier in the balanced sequence.",
      "Do not collapse national or regional industries into a generic global-streaming model.",
      "Keep documentary and hybrid nonfiction methods distinct from fiction production evidence.",
      "Animation is classified by its production system and may appear in independent, regional or industrial lanes rather than being treated as one homogeneous category.",
      "A P1 case may precede a P0 case when the balanced sequence corrects representational or production-system concentration without weakening source-first verification.",
    ],
    nextRecommendedCase: next?.title ?? null,
    nextRecommendedLane: next?.lane ?? null,
    remainingSequence,
  };
}
