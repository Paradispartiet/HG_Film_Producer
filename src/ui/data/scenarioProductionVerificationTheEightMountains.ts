import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theEightMountainsProductionCaseVerification = {
  scenarioId: "scenario_the_eight_mountains_2022",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "The Eight Mountains / Le otto montagne is verified as a new source-first Chapter 19 Production Case for the Cannes major-prizes reconciliation only after English, Italian and French title, branch and PR reuse checks found no pre-existing scenario, Film Study or Production Verification identity. Festival de Cannes locks the 2022 Competition and joint Jury Prize cycle, credits Charlotte Vandermeersch and Felix van Groeningen as directors, Ruben Impens cinematography, Nico Leunen editing, Massimiliano Nocente production design, Daniel Norgren music and Andrea Caretti, Alessandro Feletti and Alessandro Palmerini in sound, and records year of production 2021, Italy/Belgium/France and 147 minutes. Vision Distribution documents shooting underway in Valle d'Aosta in June 2021 and the Italian/French/Belgian production. Wildside documents producers Mario Gianani and Lorenzo Gangarossa, coproduction with Rufus/Menuetto, Pyramide Productions and Vision Distribution and executive producer Louis Tisné/Elastic Films. Ruben Impens's direct cinematography account records prep from April 2021, production through the Italian Alps, Turin and Nepal over roughly seven months to December, more than 60 shooting days, five seasonal blocks, no studio days, a mountain hut built fully on location, Covid-constrained Nepal scouting, 4:3 Academy spherical ARRI Alexa Mini LF photography, Zeiss Supreme Primes, an Angénieux Optimo 36-435mm Full Frame zoom, mostly static/handheld framing with selective drone and Steadicam, natural light and negative fill outdoors, LiteGear LiteMats and DMG Lumière Mini Mix LEDs indoors, and an intensive DI completed under Cannes deadline pressure. Exact total budget, financing shares, camera-body count, codec/bit depth, media and backup topology, complete filtration and lighting package, production-sound equipment, editorial infrastructure, VFX census, precise color-management pipeline and mastering lineage remain unresolved.",
  sources: [
    {
      title: "LE OTTO MONTAGNE (THE EIGHT MOUNTAINS)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/le-otto-montagne/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting the 2022 Competition and joint Jury Prize, year of production 2021, Italy/Belgium/France, 147-minute runtime and principal direction, cinematography, editing, production-design, music and sound credits."
    },
    {
      title: "MOUNTAIN MEN Ruben Impens on The Eight Mountains",
      publisher: "Belgian Society of Cinematographers",
      url: "https://www.sbcine.be/?p=12053",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct DP account supporting April 2021 prep, Italian Alps/Turin/Nepal production through December, more than 60 shooting days, no studio days, the full location hut, Covid-constrained Nepal scouting, 4:3 spherical Alexa Mini LF capture, Zeiss Supreme Primes, Angénieux Optimo 36-435mm Full Frame, movement and lighting strategy, and DI decisions under Cannes deadline pressure."
    },
    {
      title: "Iniziate le riprese di Le Otto Montagne",
      publisher: "Vision Distribution",
      url: "https://www.visiondistribution.it/magazine/iniziate-le-riprese-di-le-otto-montagne/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Distributor/coproducer record dated 15 June 2021 documenting shooting underway in Valle d'Aosta and the Italian/French/Belgian production and producer/coproducer structure."
    },
    {
      title: "Le otto montagne",
      publisher: "Wildside",
      url: "https://www.wildside.it/produzione/le-otto-montagne/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Lead producer-company record supporting the directors, producers, coproduction companies, executive producer, Ruben Impens cinematography, Nico Leunen editing, Massimiliano Nocente production design, Francesca Maria Brunori costumes and Daniel Norgren music."
    },
    {
      title: "Shooting at 3,300 Meters: An interview with the creators of The Eight Mountains",
      publisher: "Screen Slate",
      url: "https://www.screenslate.com/articles/shooting-3300-meters-interview-creators-eight-mountains",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Direct co-director interview supporting the six-month/five-block production framing, physically difficult mountain access, 3,300-metre crew stay and the way repeated blocks allowed the filmmakers to learn from earlier production phases."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
