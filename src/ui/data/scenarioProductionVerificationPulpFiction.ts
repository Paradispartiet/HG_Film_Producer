import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const pulpFictionProductionCaseVerification = {
  scenarioId: "scenario_pulp_fiction_1994",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Pulp Fiction is verified as a 1994 U.S. specialty/independent production directed by Quentin Tarantino and produced by Lawrence Bender, with a layered A Band Apart/Jersey/Miramax production and distribution structure. Festival de Cannes records Tarantino direction, Tarantino and Roger Avary screenplay/dialogue credits, Andrzej Sekuła cinematography, Sally Menke editing, David Wasco production design and a 149-minute competition version. The Academy's 1995 record provides the more precise final writing distinction: screenplay by Quentin Tarantino; stories by Quentin Tarantino and Roger Avary. BFI Southbank programme notes match that structure and identify Miramax as presenter, Band Apart and Jersey Films as productions, Bender as producer, Danny DeVito/Michael Shamberg/Stacey Sher as executive producers, Bob Weinstein/Harvey Weinstein/Richard N. Gladstein as co-executive producers, Paul Hellerman as production manager, Sekuła as DP, Menke as editor, Wasco as production designer, Sandy Reynolds-Wasco as set decorator, Betsy Heimann as costume designer, Ken King as production sound mixer, Rick Ash and Dean A. Zupancic as re-recording mixers, Jeff Courtie as ADR mixer, Joan/Catherine Rowe with Ezra Dweck for Foley, Larry Fioritto as special-effects coordinator and Ken Lesco as stunt coordinator. DFI independently records A Band Apart, Jersey Films and Miramax Films as production companies, Lawrence Bender producer, Sekuła, Menke and Wasco, a 154-minute runtime, anamorphic presentation, Deluxe and Dolby SR. These technical labels are retained only at the level documented; no camera body, lens series, film stock, exposure or laboratory-timing package is imported from Reservoir Dogs merely because Tarantino and Sekuła re-teamed. Contemporary Le Monde Cannes reporting quotes Bender describing a budget well below $10 million, reduced cast fees, a rejected first completion-bond application and Film Finance ultimately providing the bond; Bender says the film finished within planned schedule and budget. A 2024 Variety oral history gives later, more specific retrospective figures: Bender says the target was $6–8 million, budget $8.5 million including contingency, with $500,000 returned for an $8 million final cost. These remain separately attributed historical statements rather than one independently audited ledger. Sandy Reynolds-Wasco later recalled deliberately using contrasting set colors between story environments and Jimmy's wallpaper as a specific design choice; that participant testimony supports design intent, not a universal palette/lighting formula. Runtime evidence is explicitly version-sensitive: Cannes gives 149 minutes, DFI and AFI Silver give 154 minutes, while AFI's current watch-page metadata gives 165 minutes. The case uses 154 minutes canonically because multiple institutional exhibition/catalogue records converge there, while preserving 149/154/165 as catalogue/version variance. Cannes Palme d'Or, Academy recognition and later Miramax legacy are downstream reception/industry evidence. Fictional firearms, overdose response and violent stunts are never treated as medical, weapons or stunt instruction; present-day production requires qualified stunt/effects/armory/medical personnel, controlled props and materials, rehearsal, emergency planning and applicable labor/safety rules.",
  sources: [
    {
      title: "PULP FICTION",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/pulp-fiction/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional 1994 competition/Palme d'Or record for 149 minutes, Tarantino/Avary screenplay-dialogue credits, Sekuła cinematography, Menke editing and Wasco production design."
    },
    {
      title: "Pulp Fiction",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/pulp-fiction",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record for 154 minutes, Tarantino screenplay with Tarantino/Avary story basis, Bender, Sekuła, Menke, Wasco, A Band Apart/Jersey/Miramax, anamorphic, Deluxe and Dolby SR."
    },
    {
      title: "Pulp Fiction (30th Anniversary) - BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/re-releases/2024/08/23/pulp-fiction/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Detailed production credits for company/presenting layers, producer/executive producers, camera, art, costume, makeup effects, edit, sound, special effects and stunts; programme runtime 154 minutes."
    },
    {
      title: "PULP FICTION in 35mm",
      publisher: "AFI Silver Theatre and Cultural Center",
      url: "https://silver.afi.com/movies/detail/0100000033/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "AFI exhibition record corroborating Tarantino/Avary, Bender, 1994, 35mm presentation and 154-minute runtime."
    },
    {
      title: "Pulp Fiction",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/pulp-fiction",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Detailed AFI credits for Tarantino/Avary, Bender, Sekuła, Menke, executive producers and production crafts. Its current 165-minute duration is preserved as catalogue variance rather than overriding 154-minute records."
    },
    {
      title: "The 67th Academy Awards | 1995",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1995",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Primary award record establishing the final writing-credit distinction: screenplay by Quentin Tarantino; stories by Quentin Tarantino and Roger Avary."
    },
    {
      title: "CANNES/ETATS UNIS Les folles entreprises de Lawrence Bender",
      publisher: "Le Monde",
      url: "https://www.lemonde.fr/archives/article/1994/05/12/cannes-etats-unis-les-folles-entreprises-de-lawrence-bender_3823306_1819218.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Contemporary Cannes reporting with Bender's first-person account of a budget well below $10m, reduced actor fees, completion-bond difficulty, Film Finance support and finishing on planned schedule/budget."
    },
    {
      title: "Pulp Fiction Turns 30: How Quentin Tarantino's Masterpiece Saved Careers, Conquered Film Festivals and Changed Cinema Forever",
      publisher: "Variety",
      url: "https://au.variety.com/2024/film/features/pulp-fiction-quentin-tarantino-30th-anniversary-retrospective-part-one-18171/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Retrospective participant oral history including Bender's $6–8m target, $8.5m contingency budget and $8m final-cost account, plus script-length/runtime recollection. Kept distinct from contemporaneous reporting."
    },
    {
      title: "Vermont Voices: Q&A with David Wasco and Sandy Reynolds-Wasco",
      publisher: "Vermont Magazine",
      url: "https://www.vtmag.com/post/vermont-voices-q-a-with-david-wasco-and-sandy-reynolds-wasco",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "First-person production-design testimony from Sandy Reynolds-Wasco about deliberate contrasting set colors and Jimmy's wallpaper; used as design intent, not a universal palette or lighting recipe."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
