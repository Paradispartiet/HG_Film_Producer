import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const ringuProductionCaseVerification = {
  scenarioId: "scenario_ringu_1998",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Ringu is verified conservatively as the Chapter 17 canonical 1998 Japanese horror production directed by Hideo Nakata from Hiroshi Takahashi's screenplay adaptation of Koji Suzuki's novel. Institutional records identify producers Shinya Kawai, Takashige Ichise and Takenori Sento, cinematographer Junichiro Hayashi, editor Nobuyuki Takahashi and composer Kenji Kawai. The production case is built around a strict format boundary: the cursed videotape and CRT television are diegetic media objects and image systems, not evidence that the feature itself was acquired on consumer VHS. Likewise, Danish Film Institute catalog data listing 35 mm, 1.85:1, color and DTS is retained as catalog/presentation evidence and is not expanded into undocumented camera-negative stock, lens, lab, telecine, sound-recording or mix specifications. BFI historical writing supports the film's analog-videotape anxiety and later J-horror influence while remaining interpretive context rather than a substitute for production records. Institutional runtime metadata is not fully consistent: BFI catalog material gives 95 minutes, BFI Player gives 96 minutes and DFI gives 97 minutes. Gameplay therefore uses 95 minutes as the BFI catalog anchor and explicitly retains the 96/97-minute variance rather than manufacturing a false single-version certainty. The case keeps the 1998 Japanese feature distinct from sequels, later franchise entries and the 2002 Hollywood remake. Exact budget, schedule, shooting ratio, camera/lens package, negative stock, VHS/monitor model, special-effects method, telecine path, microphone package, track layout, edit system, laboratory and release-print provenance remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Ringu",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/ring-0",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film-database anchor for the 1998 Japanese feature, principal production credits and Danish catalog technical/presentation data. Its 97-minute and 35 mm/1.85:1/color/DTS entries are retained as catalog metadata, not expanded into unsupported acquisition or sound-production hardware."
    },
    {
      title: "Ringu — BFI film record",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/69fc19aa-0991-54a8-894d-0b1ba53e70bf/ringu",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional catalog cross-check for Hideo Nakata, Hiroshi Takahashi, producer credits and a 95-minute running time. The BFI page carries a 1997 dating convention, so the Chapter 17 canonical 1998 year is kept explicit rather than silently merging catalog fields."
    },
    {
      title: "When videotapes were sinister – 20 years of J-horror classic Ring",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/ringu-hideo-nakata-videotapes-lynch-haneke",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "BFI historical analysis used for the analog VHS/CRT anxiety and later J-horror context. It is not used to infer camera, effects, telecine or sound hardware."
    },
    {
      title: "Ring [Ringu] — BFI Player",
      publisher: "British Film Institute",
      url: "https://player.bfi.org.uk/subscription/film/watch-ring-ringu-1997-online",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Current BFI presentation record showing a 1h36m runtime and the cursed-videotape premise. Used to document runtime/version variance, not original production technique."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
