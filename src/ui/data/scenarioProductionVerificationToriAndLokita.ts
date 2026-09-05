import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const toriAndLokitaProductionCaseVerification = {
  scenarioId: "scenario_tori_and_lokita_2022",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Tori and Lokita / Tori et Lokita is verified as a new source-first Chapter 19 Production Case only after English/French/ampersand title, Dardenne-name, branch and PR reuse checks found no pre-existing scenario, Film Study or Production Verification identity. Festival de Cannes locks the 2022 Competition and 75th Anniversary Prize, Jean-Pierre and Luc Dardenne direction/screenplay, Benoit Dervaux cinematography, Igor Gabriel production design, Marie-Hélène Dozo and Valène Leroy editing, Thomas Gauder and Jean-Pierre Duret sound, an 88-minute runtime and production year 2022. Production chronology is separately preserved: Scriptoclap records shooting from 19 July to 28 September 2021 in Liège and its surroundings, while Dervaux directly describes an 11-week shoot with about one month of preparation. Les Films du Fleuve maps the core creative crew and Archipel35/Savage Film coproduction structure. Dervaux's direct Belgian Society of Cinematographers interview locks the lightweight, actor-height handheld method, a RED Komodo with 40mm Zeiss T2.1 for the principal lightweight system, RED Monstro at 2500 ISO with a 40mm Zeiss Master Prime for the darkest night work, basically natural light, active subtraction of unsuitable public light, restrained warehouse lighting including Carpetlight/SkyPanel units raised on a roughly 55-metre crane, practical dimmable LEDs, selective LED tubes and grading support. The Dardenne brothers independently describe roughly five weeks of rehearsal with the two first-time lead actors and a diegetic/location-derived sound principle. Screen.Brussels records €70,000 support equal to 1.19% of the project budget; Scriptoclap reports €5.95m, so the case preserves an approximately €5.9-5.95m budget band without inventing financing percentages. Cannes and Les Films du Fleuve lock 88 minutes for the finished film while Screen.Brussels retains an earlier 110-minute project listing, treated as development/catalogue provenance rather than evidence of a second finished master. Exact shooting-day count, full camera/lens inventory, codecs, resolution/bit depth, filtration, media/offload/checksum topology, complete grip/lighting package, production-sound hardware, editorial software/storage, exact color-management pipeline, VFX census, mastering lineage, partner shares, recoupment, insurance and legal terms remain unresolved.",
  sources: [
    {
      title: "TORI ET LOKITA (TORI AND LOKITA)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/tori-et-lokita/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting the 2022 Competition and 75th Anniversary Prize, production year 2022, 88-minute runtime, Dardenne direction/screenplay, Benoit Dervaux cinematography, Igor Gabriel production design, Marie-Hélène Dozo/Valène Leroy editing and Thomas Gauder/Jean-Pierre Duret sound."
    },
    {
      title: "Tori et Lokita",
      publisher: "Les Films du Fleuve",
      url: "https://lesfilmsdufleuve.be/en/movies/tori-et-lokita/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Lead producer-company record supporting the 88-minute finished-film runtime, Benoit Dervaux camera credit, Marie-Hélène Dozo editing, Jean-Pierre Duret/Thomas Gauder/Valène Leroy sound, Igor Gabriel production design, Dorothée Guiraud wardrobe, Natali Tabareau-Vieuille makeup, Philippe Toussaint production management, Cédric Ettouati post supervision and Archipel35/Savage Film coproduction."
    },
    {
      title: "Benoit Dervaux and the approach for Tori and Lokita",
      publisher: "Belgian Society of Cinematographers",
      url: "https://www.sbcine.be/?p=13130",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer interview supporting handheld actor-height operation, extensive rehearsal, RED Komodo with 40mm Zeiss T2.1, RED Monstro at 2500 ISO with 40mm Zeiss Master Prime for night work, sparse naturalistic lighting, Carpetlight/SkyPanel crane work, practical LEDs, long-take choreography, 11 weeks of shooting and about one month of prep."
    },
    {
      title: "A Conversation with the Dardenne Brothers (Tori and Lokita)",
      publisher: "Hammer to Nail",
      url: "https://www.hammertonail.com/interviews/dardenne-brothers/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Direct director interview supporting roughly one hundred candidates per lead role, five weeks of rehearsal with two first-time/non-professional leads and a diegetic-sound principle in which additional post sounds are location-derived and intended to feel organic to the film world."
    },
    {
      title: "Tori et Lokita",
      publisher: "screen.brussels",
      url: "https://screen.brussels/en/project/tori-et-lokita",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Regional film-fund record supporting Les Films du Fleuve/Savage Film/Archipel35 participation, €70,000 fund investment equal to 1.19% of the project budget, and an earlier 110-minute project-stage runtime that is deliberately preserved as provenance rather than substituted for the finished 88-minute record."
    },
    {
      title: "Tori and Lokita",
      publisher: "Flanders Image",
      url: "https://www.flandersimage.com/titles/tori-and-lokita",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Institutional record supporting 2022 production status, original title Tori et Lokita, 2K DCP availability, 5.1 (+sub) + Dolby sound format, the Les Films du Fleuve/Archipel35/Savage Film coproduction and public-support network including VAF and Eurimages."
    },
    {
      title: "Tori et Lokita",
      publisher: "Scriptoclap",
      url: "https://scriptoclap.fr/oeuvres/tori-et-lokita/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Production database supporting the 19 July to 28 September 2021 Liège-area shooting window, €5.95m budget record, Benoit Dervaux cinematography, Philippe Toussaint production management and the documented public-funding/coproduction network."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
