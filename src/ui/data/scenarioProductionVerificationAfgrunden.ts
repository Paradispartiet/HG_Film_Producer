import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const afgrundenProductionCaseVerification = {
  scenarioId: "scenario_afgrunden_1910",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "Det Danske Filminstitut and BFI sources support Afgrunden as Urban Gad's 1910 Danish erotic melodrama, produced through Kosmorama with Hjalmar Davidsen, photographed by Alfred Lind on 35 mm, and built around Asta Nielsen's screen debut and breakthrough performance. BFI's historical account further documents a compact eight-day production using a deserted jail yard, Copenhagen streets and Frederiksberg Gardens. The Production Case therefore treats the film as a performance-led production problem: concentrate limited resources on legible staging, expressive bodies and faces, a memorable rope-dance set piece, and a star identity capable of travelling internationally. It does not claim that Nielsen or Gad invented naturalistic screen acting, and it keeps later digital restorations and live accompaniment separate from original 1910 production sound and format evidence.",
  sources: [
    {
      title: "Afgrunden — Film Database",
      publisher: "Det Danske Filminstitut",
      url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/afgrunden-0",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "DFI identifies Urban Gad as director and screenwriter, Alfred Lind as cinematographer, Kosmorama as producer/commissioner, Hjalmar Davidsen as producer, the 12 September 1910 Danish premiere, and technical data of 750 metres, 35 mm, black-and-white and silent."
    },
    {
      title: "Asta Nielsen: the silent muse",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/asta-nielsen-silent-muse",
      sourceKind: "film_institute",
      supports: ["overall", "performance", "industry_and_production_context", "production_design"],
      note: "BFI's historical feature describes the 8,000-kroner backing, eight-day shoot, deserted jail yard, Copenhagen streets and Frederiksberg Gardens, and analyzes Nielsen's restrained performance style and the rope dance as central to the film's impact."
    },
    {
      title: "Afgrunden — Danish Silent Film streaming record",
      publisher: "Det Danske Filminstitut / Stumfilm.dk",
      url: "https://www.stumfilm.dk/stumfilm/streaming/film/afgrunden",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "performance"],
      note: "The archival streaming record identifies the 38-minute surviving presentation and explains that the preserved material shows chemical deterioration, while the famous dance scene benefits from material recovered from Swedish censorship holdings. This makes preservation/version boundaries explicit rather than treating the digital presentation as an untouched 1910 master."
    },
    {
      title: "Dansk filmhistorie: 1910-1919",
      publisher: "Det Danske Filminstitut",
      url: "https://www.dfi.dk/viden-om-film/filmhistorie/dansk-filmhistorie-1910-1919",
      sourceKind: "film_institute",
      supports: ["overall", "performance", "reception_and_legacy"],
      note: "DFI situates Afgrunden within Danish erotic melodrama, describes Nielsen's intense and psychologically realistic performance, and connects the film's success to her subsequent international career in Germany."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;