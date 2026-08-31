import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const sentimentalValueProductionCaseVerification = {
  scenarioId: "scenario_sentimental_value_2025",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Sentimental Value is verified as Chapter 19's auteur/festival production case through Norwegian and Danish film-institute records, direct Kasper Tuxen cinematography testimony, Norwegian Film Commission virtual-production documentation, direct Joachim Trier production-design discussion, Olivier Bugge Coutté editorial testimony and Hania Rani score testimony. NFI identifies Joachim Trier as director, Eskil Vogt/Trier as screenwriters, Mer Film as production company, Maria Ekerhovd and Andrea Berentsen Ottmar as producers, Affeksjonsverdi as original title and 135 minutes as its institutional runtime record. NFI documents a Norwegian-French-German-Swedish-Danish co-production and NOK 20.5 million in NFI development/production support; this is a public support amount, not a canonical total negative cost or financing percentage. Kodak identifies Kasper Tuxen DFF as cinematographer and documents roughly eight months of cinematography preparation, August-November 2024 principal photography, a roughly 63-day production count, Oslo/Deauville/Sweden work, 1.85:1 ARRICAM LT 35mm contemporary photography, Cooke 5/i lenses, ARRIFLEX 416 16mm flashbacks, VISION3 250D 5207/500T 5219/50D 5203 stocks, Cinelab London processing with frequent push-processing, intentional 2K scanning after 2K-vs-4K tests, and final grading by Julian Alary at Storyline Studios. A later editor-side report uses a 65-day count; the case therefore preserves a roughly 63-65 day source/count-convention boundary rather than inventing exact consensus. Kodak and Norwegian Film Commission sources establish the mixed real-house/stage system: the Frogner villa supplied real location geography, upper-house spaces were replicated at Gateway Studios in Drammen, VP Nordic reconstructed historical/seasonal surroundings for LED-wall use, and Kodak records a final-scene bluescreen exception. Definition adds selected ARRIFLEX 435 slow motion, Super Baltars, ZEISS Super Speeds, Cooke Varotal and Angenieux zoom use and supports the contrast between intimate handheld contemporary work and more composed Gustav-associated movement. Editor Olivier Bugge Coutté describes deliberately entering from the shooting draft, a roughly three-and-a-half-hour first assembly, trimming Rachel material to protect the family triangle, converting explanatory dialogue to silence when performance carried more meaning and keeping the Nora montage open late. Hania Rani describes composing initially from screenplay rather than picture and revising that darker interpretation as the filmed tone emerged. DFI credits Gisle Tveito as sound designer and Rani as composer, but current locked sources do not establish the complete recording package, Foley chain, mix stems/stage, score-session roster, exact VFX shot/vendor ledger, full LED technical specification, audited total budget, co-financing percentages, department spend or recoupment. Those remain unresolved.",
  sources: [
    {
      title: "Sentimental Value",
      publisher: "Norwegian Film Institute",
      url: "https://www.nfi.no/en/films-and-series/sentimental-value",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional film record establishing Affeksjonsverdi, Joachim Trier, Eskil Vogt/Trier, Mer Film, producers, principal cast and NFI's 135-minute runtime record."
    },
    {
      title: "Grand Prix to Trier's Sentimental Value",
      publisher: "Norwegian Film Institute",
      url: "https://www.nfi.no/en/news/grand-prix-to-triers-sentimental-value",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional production context supporting the Oslo autumn-2024 shoot, five-country European co-production, named support/investment bodies and NOK 20.5 million NFI development/production support."
    },
    {
      title: "DP Kasper Tuxen DFF harnessed KODAK film to depict the purity of human connection in Joachim Trier's award-winning 'Sentimental Value'",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/sentimental-value/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall"],
      note: "Direct Tuxen testimony supporting preparation, roughly 63 shooting days, production geography, ARRICAM/ARRIFLEX capture, 1.85:1, stocks/lenses, mainly single-camera work, Gateway LED/bluescreen boundaries, Cinelab processing/2K scans and Storyline/Julian Alary grading."
    },
    {
      title: "Production: Sentimental Value",
      publisher: "Definition",
      url: "https://definitionmagazine.com/features/production-sentimental-value/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall"],
      note: "Direct Tuxen interview expanding the optical/camera vocabulary, selected ARRIFLEX 435 slow motion, historical lens states, contemporary Angenieux zooms, controlled handheld language, practical-light continuity and opportunistic Oslo photography."
    },
    {
      title: "Inside Joachim Trier's Sentimental Value: Oslo's Architecture, Dragon Style Heritage and Norway's Studio Craft",
      publisher: "Norwegian Film Commission",
      url: "https://www.norwegianfilm.com/news/inside-joachim-trier-s-sentimental-value-oslo-s-architecture-dragon-style-heritage-and-norway-s",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Production-location/infrastructure record supporting the real Frogner villa, Gateway Studios replica, LED-wall virtual production, VP Nordic 3D/Lidar/photo reconstruction and historical/seasonal exterior continuity."
    },
    {
      title: "We Live in Time: Joachim Trier on Sentimental Value",
      publisher: "RogerEbert.com",
      url: "https://www.rogerebert.com/interviews/sentimental-value-joachim-trier-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Direct Trier testimony supporting the house's repeated spatial function, Jorgen Stangebye Larsen collaboration, decade-by-decade replica redressing and VP exterior history as a map of time."
    },
    {
      title: "Editor Olivier Bugge Coutte's Process on Oscar-Nominated Sentimental Value",
      publisher: "postPerspective",
      url: "https://postperspective.com/editor-olivier-bugge-couttes-process-on-oscar-nominated-sentimental-value/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "overall"],
      note: "Direct editor testimony supporting late screenplay entry, constant post-shoot collaboration with Trier, the roughly three-and-a-half-hour assembly, Rachel reductions, dialogue removal and the difficult late-lock Nora montage."
    },
    {
      title: "Music That Fills Space: An Interview with Hania Rani About Her Film Score for Sentimental Value",
      publisher: "Culture.pl",
      url: "https://culture.pl/en/article/music-that-fills-space-an-interview-with-hania-rani-about-her-film-score-for-sentimental-value",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall"],
      note: "Direct Hania Rani testimony supporting house-focused research, script-first composition and later reinterpretation as the filmed tone introduced more movement, lightness and contradiction than her initial reading."
    },
    {
      title: "Sentimental Value",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/129116",
      sourceKind: "film_institute",
      supports: ["overall", "sound", "editing"],
      note: "Institutional credits record supporting Kasper Tuxen, Olivier Bugge Coutte, Gisle Tveito, Hania Rani, Jorgen Stangebye Larsen and the five-country production structure; not used to resolve territorial runtime variation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
