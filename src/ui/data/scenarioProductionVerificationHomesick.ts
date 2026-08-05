import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const homesickProductionCaseVerification = {
  scenarioId: "scenario_homesick_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's Norwegian taboo-family drama, shame-and-belonging screenplay rewrite, female-centred first major film lead, physically matched half-sibling casting, differentiated intimacy scenes, close handheld and painterly visual system, domestic-space design, restrained editing, sound and music, Sundance launch and Amanda acting recognition are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Den selvdestruktive skammen",
      publisher: "CINEMA",
      url: "https://cine.no/2015/03/29/den-selvdestruktive-skammen/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Anne Sewitsky and Ine Marie Wilmann describe rebuilding the screenplay around unwantedness and shame, differentiating each intimacy scene, casting through vulnerability, chemistry and resemblance, minimizing dialogue and combining close handheld pursuit with planned painterly images."
    },
    {
      title: "Homesick",
      publisher: "Maipo Film",
      url: "https://www.maipo.no/en/movies/homesick",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official producer page verifies Anne Sewitsky, Ragnhild Tronvoll, producers Synnøve Hørsdal and Åshild Ramborg, principal cast, Nordic distribution, international sales and the film's Sundance, Nordic festival and Norwegian award record."
    },
    {
      title: "De nærmeste",
      publisher: "National Library of Norway",
      url: "https://www.nb.no/filmografi/show?id=1811056",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Norsk filmografi verifies the complete Norwegian production record, including Daniel Voldheim photography, Lina Nordqvist design, Christoffer Heie editing, Bent Erik Holm sound design, Ginge Anvik music, costume, makeup, lighting, producers and Nordisk Film distribution."
    },
    {
      title: "2015 Sundance Film Festival U.S. and World Competitions",
      publisher: "Sundance Institute",
      url: "https://www.sundance.org/blogs/sundance-institute-announces-films-in-u-s-and-world-competitions-next-for-2015-sundance-film-festival-3/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official programme announcement records Homesick in the World Cinema Dramatic Competition as a world premiere and verifies Sewitsky, Tronvoll, the principal cast and the half-sibling family premise."
    },
    {
      title: "Homesick",
      publisher: "TrustNordisk",
      url: "https://trustnordisk.com/movie/homesick",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "The official international-sales page verifies the Norwegian drama, Maipo production, Sewitsky and Tronvoll, cast, runtime, sales positioning and the film's movement from family absence and identity search into forbidden intimacy."
    },
    {
      title: "Homesick",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/283356/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The European film database verifies the country and year, screenplay, cast, Daniel Voldheim cinematography, Christoffer Heie editing, Maipo producers and Nordisk Film distribution, supporting the profile's principal production architecture."
    },
    {
      title: "De nærmeste",
      publisher: "Filmweb",
      url: "https://www.filmweb.no/film/NOR20140582",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The Norwegian release record verifies the 2015 national release, Nordisk Film distribution, Norwegian-language presentation, principal cast and the story's focus on Charlotte's absent family connection and meeting with her half-brother."
    },
    {
      title: "Analysen: De nærmeste (2015)",
      publisher: "Montages",
      url: "https://montages.no/2015/04/analysen-de-naermeste-2015/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The formal analysis examines the film's family structure, bodily proximity, mirrors and reflections, restrained information, image composition and audiovisual handling of Charlotte's longing and unstable self-recognition."
    },
    {
      title: "Blått Lerret web-TV: De nærmeste, Dirk Ohm og Den tilfeldige rockestjerne",
      publisher: "Rushprint",
      url: "https://rushprint.no/2015/04/blatt-lerret-web-tv-de-naermeste-dirk-ohm-og-den-tilfeldige-rockestjerne/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The Norwegian Film Institute event record presents Sewitsky and Wilmann discussing the project and preserves the film's contemporary production context, performance focus and deliberate approach to difficult intimacy."
    },
    {
      title: "Liste over Amandavinnere",
      publisher: "Norwegian International Film Festival",
      url: "https://www.filmfestivalen.no/article/liste-over-amandavinnere",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official Amanda archive records Ine Marie Wilmann as the 2015 winner for Best Female Lead for De nærmeste, documenting the central performance's national recognition."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
