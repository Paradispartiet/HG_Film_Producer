import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const grandmasReadingGlassProductionCaseVerification = {
  scenarioId: "scenario_grandmas_reading_glass_1900",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Grandma's Reading Glass is verified as a 1900 G. A. Smith short built around a boy's use of a magnifying glass to motivate alternating enlarged inserts of a newspaper, watch mechanism, canary, grandmother's eye and kitten. The case is grounded in BFI's preserved film and visual-language context, a surviving Warwick Trading Company catalogue description, Smith's documented Brighton production context, and museum biography. It teaches early point-of-view and analytical editing without claiming that Smith single-handedly invented the close-up, POV or editing.",
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
      title: "Cinematographic camera, 1899/1900 [?]",
      publisher: "Christie's",
      url: "https://www.christies.com.cn/en/lot/lot-3045373",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The apparatus catalogue records Smith's Alfred Darling camera context and reproduces the April 1901 Warwick Trading Company catalogue description of Grandma's Reading Glass, including the circularly masked views and exact newspaper, watch, canary, grandmother's eye and kitten sequence."
    },
    {
      title: "Who's Who of Victorian Cinema: George Albert Smith",
      publisher: "Who's Who of Victorian Cinema",
      url: "https://www.victorian-cinema.net/gasmith",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The scholarly early-cinema biography places Smith's 1900 films in a documented Brighton production context and describes their interpolated close-ups, subjective/objective viewpoint relations and sequence construction, while also noting his glasshouse studio and Alfred Darling apparatus support."
    },
    {
      title: "Aunt Selina - Takes Snuff, Sews and Plays with Her Cats",
      publisher: "British Film Institute",
      url: "https://replay.bfi.org.uk/video/e232ee4d-db89-59a2-903f-dbad31a051dc",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI documents Smith's contemporary Brighton work for the Warwick Trading Company and explicitly notes that Smith has been credited with inventing the close-up in films such as Grandma's Reading Glass while redirecting attention to the concrete expressive purpose of close camera placement. This supports the case's anti-single-inventor safeguard."
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
