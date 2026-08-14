import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const grandmasReadingGlassProductionCaseVerification = {
  scenarioId: "scenario_grandmas_reading_glass_1900",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Grandma's Reading Glass is verified as a 1900 G. A. Smith short built around a boy's use of a magnifying glass to motivate alternating enlarged inserts of a newspaper, watch mechanism, canary, grandmother's eye and kitten. The case is grounded in BFI's preserved film and visual-language context, Screen Archive South East's regional archival description and Smith credit, a surviving Warwick Trading Company catalogue description, specialist early-cinema biography and museum context, plus modern scholarship that cautions against treating early gaze inserts as identical to later classical subjective POV. It therefore teaches early analytical shot relation without claiming that Smith single-handedly invented the close-up, POV or editing.",
  sources: [
    {
      title: "Grandma's Reading Glass",
      publisher: "British Film Institute",
      url: "https://replay.bfi.org.uk/video/419/bc4007f9-c8fa-5293-846a-de032dc142af",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BFI identifies the film as a 1900 silent G. A. Smith fiction lasting about one minute and describes its innovative play on perspective: the boy's use of his grandmother's magnifying glass motivates what became known as point-of-view shots rather than neutral unrelated close views."
    },
    {
      title: "Inventing Film Language",
      publisher: "BFI National Archive",
      url: "https://replay.bfi.org.uk/collection/419",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI places Grandma's Reading Glass within a broader collection of Victorian experiments with close-ups, camera movement, editing, continuity and effects. This supports a developmental framing rather than a single-film invention myth."
    },
    {
      title: "Grandma's Reading Glass — Title ID 8372",
      publisher: "Screen Archive South East",
      url: "https://screenarchive.brighton.ac.uk/detail/8372/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The regional archive credits production and direction to George Albert Smith in 1900 and describes the full newspaper, watch mechanism, canary, grandmother's eye and cat sequence, with each enlarged circular view tied to the boy's use of the magnifying glass."
    },
    {
      title: "Cinematographic camera, 1899/1900 [?]",
      publisher: "Christie's",
      url: "https://www.christies.com/en/lot/lot-3045373",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The apparatus catalogue documents an Alfred Darling camera associated with Smith and reproduces the April 1901 Warwick Trading Company catalogue description, including the circular masks and exact newspaper, watch, canary, grandmother's eye and kitten sequence. It is used as a route to the period catalogue text, not as the sole authority."
    },
    {
      title: "Who's Who of Victorian Cinema: George Albert Smith",
      publisher: "Who's Who of Victorian Cinema",
      url: "https://www.victorian-cinema.net/gasmith",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The specialist early-cinema biography places Smith's 1900 films in a documented Brighton production context and describes their interpolated close-ups, subjective/objective viewpoint relations and sequence construction, while also noting his glasshouse studio and Alfred Darling apparatus support."
    },
    {
      title: "Grandma’s Reading Glass (1900)",
      publisher: "University of Bologna Research Archive",
      url: "https://cris.unibo.it/handle/11585/962676",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Elena Dagrada's scholarly record treats the 1900 film as an early form of represented gaze while stressing that such early inserts do not yet function exactly like later classical character-subjective POV. This supports the case's historiographic safeguard against anachronistic grammar claims."
    },
    {
      title: "Aunt Selina - Takes Snuff, Sews and Plays with Her Cats",
      publisher: "British Film Institute",
      url: "https://replay.bfi.org.uk/video/e232ee4d-db89-59a2-903f-dbad31a051dc",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI documents Smith's contemporary Brighton work for the Warwick Trading Company and notes the history of crediting Smith with close-up innovation while redirecting attention to the concrete expressive purpose of closer camera placement. This supports the anti-single-inventor safeguard."
    },
    {
      title: "George Albert Smith",
      publisher: "National Science and Media Museum",
      url: "https://blog.scienceandmediamuseum.org.uk/film-pioneer-george-albert-smith-invented-kinemacolor/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "The museum biography independently establishes Smith as both filmmaker and technical experimenter. It is used for maker context rather than as evidence for the film's exact shot order or a first-POV claim."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
