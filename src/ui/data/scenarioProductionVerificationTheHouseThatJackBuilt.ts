import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theHouseThatJackBuiltProductionCaseVerification = {
  scenarioId: "scenario_the_house_that_jack_built_2018",
  status: "verified",
  verifiedAt: "2026-08-13",
  summary: "The House That Jack Built's five-incident serial-killer structure, Verge essay dialogue, European Zentropa co-production, Dalsland/Trollhättan production, scripted archival and mixed-media digressions, GoPro/YouTube material, 1000-fps in-camera tableau and dedicated SFX/VFX system are supported by institutional, production, sales and cinematographer sources.",
  sources: [
    {
      title: "The House that Jack Built",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/house-jack-built",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI verifies Lars von Trier's screenplay and direction, Louise Vesth/Zentropa production, Manuel Alberto Claro cinematography, Molly Malene Stensgaard editing, Kristian Selin Eidnes Andersen sound, Simone Grau Roney design, Manon Rasmussen costume, Love Larson SFX makeup, physical SFX and Peter Hjorth's VFX supervision."
    },
    {
      title: "THE HOUSE THAT JACK BUILT",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/the-house-that-jack-built/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official Cannes record verifies the 2018 Out of Competition selection and the twelve-year serial-killer story framed by Jack's recurring conversation with Verge."
    },
    {
      title: "Inspelningsstart för Lars von Triers THE HOUSE THAT JACK BUILT",
      publisher: "Film i Väst",
      url: "https://filmivast.se/nyheter-press/nyheter/inspelningsstart-for-lars-von-triers-the-house-that-jack-built",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Film i Väst documents the production start in Gustavsfors, the five-incident structure, the international cast and the Swedish production relationship."
    },
    {
      title: "Lars von Triers THE HOUSE THAT JACK BUILT i Cannes",
      publisher: "Film i Väst",
      url: "https://filmivast.se/nyheter-press/nyheter/lars-von-triers-the-house-that-jack-built-i-cannes",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Film i Väst independently states that the film was shot to a large extent in Dalsland and at Studio Fares in Trollhättan and records its Cannes Official Selection placement."
    },
    {
      title: "Interview: Manuel Alberto Claro",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-manuel-alberto-claro/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Claro explains the scripted archival and mixed-media design, von Trier's cinematic digressions, the finale's GoPro plus real YouTube cave-diving material, and the 1000-fps swimming-pool tableau achieved primarily in camera."
    },
    {
      title: "THE HOUSE THAT JACK BUILT",
      publisher: "TrustNordisk",
      url: "https://trustnordisk.com/movie/the-house-that-jack-built",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The sales-company record verifies the five incidents, Lars von Trier, Manuel Alberto Claro, Molly Malene Stensgaard, Louise Vesth/Zentropa, 153-minute duration and a listed EUR 9 million budget."
    },
    {
      title: "IFC Films acquires Lars von Trier’s The House that Jack Built for the USA",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/329124/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "Cineuropa reports the EUR 8.8 million production context, Copenhagen and Trollhättan shooting and the Zentropa/Film i Väst/Copenhagen Film Fund/Slot Machine partnership, providing an independent trade cross-check of scale and locations."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
