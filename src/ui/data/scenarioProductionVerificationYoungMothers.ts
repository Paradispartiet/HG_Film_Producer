import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const youngMothersProductionCaseVerification = {
  scenarioId: "scenario_young_mothers_2025",
  status: "verified",
  verifiedAt: "2026-09-07",
  summary: "Young Mothers / Jeunes Mères is verified as a genuinely new Chapter 19 source-first Production Case on the locked 611/611 baseline after exact-main branch checks and tree-wide title/ID reconciliation establish no pre-existing canonical scenario, Film Study or Production Verification identity. Festival de Cannes records the 2025 Competition feature, Jean-Pierre and Luc Dardenne as directors and screenwriters, Belgium/France, a 104-minute runtime, Benoît Dervaux as cinematographer, Igor Gabriel as production designer, Marie-Hélène Dozo as editor, Thomas Gauder for sound and the Award for Best Screenplay. The Cannes-hosted English press kit from Les Films du Fleuve, Archipel 35 and The Reunion documents the screenplay's evolution from research around one young mother into five portraits after visits to a maternal support home near Liège; the 300-candidate casting search narrowed to 150; the long sequence shot as a formal constraint; rehearsals used to discover shots while preserving spontaneity; the decision to shoot maternal-home scenes in the actual institution rather than build a set; the decision to add no other décor or cinema lighting there; shooting underway in August 2024 and finished by October 2024; and editing finishing afterward. Benoît Dervaux's detailed interview with the Belgian Society of Cinematographers independently documents preparation in 2024, filming in August/September, a planned 52-day infant-sensitive schedule completed in 38 shooting days, the RED V-Raptor chosen instead of the heavier Alexa 35, Leitz Hugo full-frame lenses, 8K capture, handheld framing at the actresses' eye level, a camera package slightly over 6 kg supported by a compact industrial exoskeleton, window ND plexiglass, motorised variable ND and DIT pre-grading, a base LUT developed with Richard Deusy, daily DIT adjustments by Olivier Patron and a ten-day Resolve grade by Christophe Bousquet at Mikros Paris. The Académie des César lists 105 minutes rather than Cannes' 104 and separately credits Dorothée Guiraud for costumes, Natali Tabareau-Vieuille for makeup, and Jean-Pierre Duret, Valène Leroy and Thomas Gauder for sound. The runtime discrepancy is preserved rather than normalized. The locked sources do not establish total budget, financing percentages, insurance, exact daily call-sheet chronology, a complete location inventory, RED recording codec, complete sensor-mode details, shutter angle, full focal-length map, complete ISO/exposure ledger, media/data-storage and backup architecture, a complete production-sound hardware package, ADR/Foley/final-mix topology, editorial software/storage/proxy/conform, a complete music-production strategy, VFX shot count, formal infant-safety paperwork beyond the sourced logistical constraint, delivery codec, final sound format or mastering package; those details remain unresolved rather than inferred.",
  sources: [
    {
      title: "JEUNES MÈRES",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/jeunes-meres/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting the 2025 Competition entry, Best Screenplay award, 104-minute runtime, Belgium/France country record, directors/screenwriters and principal cinematography, production-design, editing and sound credits."
    },
    {
      title: "Young Mothers English Press Kit",
      publisher: "Les Films du Fleuve / Archipel 35 / The Reunion / Festival de Cannes",
      url: "https://cdn.festival-cannes.com/media/uploads/2025/05/189306.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Cannes-hosted production press kit supporting the one-mother-to-five-portrait research path, casting search, long-sequence-shot working notes, rehearsal/spontaneity method, actual maternal-home location decision, no-added-décor/no-cinema-light intention, 2024 shoot chronology and production/coproduction/support chain."
    },
    {
      title: "Benoît Dervaux on capturing Jeunes mères",
      publisher: "The Belgian Society of Cinematographers",
      url: "https://www.sbcine.be/?p=14294",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer interview supporting the August/September 2024 shoot, real maternal-home logistics, long-take/handheld method, natural-light strategy, RED V-Raptor and Leitz Hugo 8K full-frame pipeline, exoskeleton, ND/DIT/LUT exposure workflow, planned 52-day versus actual 38-day schedule and ten-day Resolve final grade at Mikros Paris."
    },
    {
      title: "Jeunes mères",
      publisher: "Académie des César",
      url: "https://www.academie-cinema.org/films/jeunes-meres-46627/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film record independently supporting core credits and the 105-minute runtime listing, plus costume, makeup and the fuller credited sound team; the one-minute discrepancy against Cannes is retained explicitly."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
