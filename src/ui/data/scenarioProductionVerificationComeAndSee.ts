import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const comeAndSeeProductionCaseVerification = {
  scenarioId: "scenario_come_and_see_1985",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "Come and See is verified as a Mosfilm-Belarusfilm Soviet antiwar production grounded in Ales Adamovich's testimony-based historical writing and Elem Klimov's own wartime memory, with a screenplay prepared for production in 1977 but delayed by Goskino objections until approval after 1982. Janus press notes document the eventual production as an in-sequence nine-month 1984 shoot on Belorussian soil, with fourteen-year-old first-time film performer Alexei Kravchenko as Flyora. They also document an attempted hypnosis plan that did not work and the use of real bullets instead of blanks during some filming, including Kravchenko's account of rounds passing inches above him; the case preserves this only as historical high-risk practice and an explicit safety boundary, never as a technique to reproduce. Alexei Rodionov is credited as cinematographer, with Janus describing naturalistic color, long Steadicam shots and extreme close-ups, while Criterion describes subjective camera work and expressionistic sound design. Viktor Petrov is credited for production design, Eleonora Semyonova for costume design, Valeriya Belova for editing, Viktor Mors for sound and Oleg Yanchenko for music. Criterion's essay on Adamovich documents Khatyn and Out of the Fire as major testimony-based source works, so the model distinguishes survivor testimony, screenplay adaptation and staged fiction rather than treating the film as documentary footage. Institutional runtime records differ: Criterion and BFI list 142 minutes, Janus press notes list 143 and Mosfilm lists 137; the scenario uses 142 as its canonical reference runtime while preserving the spread as edition/timing metadata. It does not invent a camera body, film-stock emulsion, lens package, focal lengths, exposure ratios, Steadicam model, laboratory process, recorder, microphone, mixing console, unsupported unit structure, budget or edit-room workflow. The 1985 release/festival history, later canonization and Mosfilm's 2017 restoration remain downstream from the 1984 production.",
  sources: [
    {
      title: "Come and See press notes",
      publisher: "Janus Films / The Criterion Collection",
      url: "https://s3.amazonaws.com/criterion-production/janus_promo_packages/359-/ComeAndSee_press-notes_r1_original.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional press material documents the seven-year approval delay, Mosfilm-Belarusfilm coproduction, in-sequence nine-month 1984 Belorussian shoot, principal craft credits, first-film teenage lead, live-ammunition practice, Rodionov's naturalistic color/Steadicam/extreme-close-up approach and 1985 release history."
    },
    {
      title: "Come and See",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28895-come-and-see",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Criterion records the 1985 film at 142 minutes and 1.37:1, identifies the core creative credits and describes its subjective camera work and expressionistic sound design."
    },
    {
      title: "Read and See: Ales Adamovich and Literature out of Fire",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/7023-read-and-see-ales-adamovich-and-literature-out-of-fire",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Criterion's Adamovich essay documents Khatyn and Out of the Fire as testimony-based literary sources central to the film's historical and screenplay method."
    },
    {
      title: "Иди и смотри",
      publisher: "Mosfilm",
      url: "https://www.mosfilm.ru/cinema/films/idi-i-smotri/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Mosfilm's official film record confirms Klimov, Adamovich, Rodionov, Petrov and Yanchenko, the 1.37:1 presentation, a 137-minute institutional runtime record and the 2017 restoration, preserving useful edition/preservation metadata alongside the Criterion/Janus records."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;