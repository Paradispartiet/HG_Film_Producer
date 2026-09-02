import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theBrutalistProductionCaseVerification = {
  scenarioId: "scenario_the_brutalist_2024",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "The Brutalist is verified as Chapter 19's next award-priority independent-production case through La Biennale, BAFTA, the Academy, Kodak and direct craft/producer interviews. La Biennale records Brady Corbet's 2024 Silver Lion for Best Director and a 215-minute competition runtime; BBFC records a 214m52s cinema version. BAFTA records four wins including Director, Leading Actor, Cinematography and Original Score, while the Academy records Oscar wins for Adrien Brody, Lol Crawley and Daniel Blumberg. Awards support selection/reception rather than production method. Producer and filmmaker accounts support an approximately USD 10 million production budget but not a complete finance/recoupment waterfall. Kodak records a planned 2020 start delayed by the pandemic and later cast/crew issues, six weeks of cinematography prep, March 2023 principal photography around Budapest, a Carrara move, a small New York unit and 34 shooting days before an early-May wrap. Lol Crawley documents dominant 8-perf 35mm VistaVision with Leica-S lenses, ARRICAM ST/LT and ARRIFLEX 235 35mm support with Cooke S4, ARRIFLEX 416 16mm with Zeiss Superspeeds, Digital Betacam for period television material, a modified ARRIFLEX 435 for selected light streaks, KODAK VISION3 250D/500T stocks and push-processing up to roughly one to one-and-a-half stops. Kodak describes Hungarian Filmlab processing/4K scanning and Post Office Films dailies/DI, while editor Dávid Jancsó describes 6K VistaVision DPX scans, more than 700 TB of scans and over ten million files; that scan-description variance is preserved rather than forcibly reconciled. Jancsó also documents a Budapest-New York-London-Budapest post route, distributed VFX/sound work and multiple 35mm/70mm/digital, SDR/HDR and distributor delivery variants. Judy Becker documents the Van Buren Institute as a composite of model work, selected builds, Hungarian modernist locations, silos, reservoir architecture and post adjustments. Kate Forbes documents a naturalistic period-costume strategy spanning 1947-1980. Crawley and post sources support selective VFX rather than a zero-VFX or VFX-dominant production. Jancsó and Corbet bound Respeecher use to Hungarian-language dialogue refinement after coaching/ADR attempts and state that no English dialogue was changed; Corbet separately states Becker's team did not use AI to create or render the finished buildings. Sound designer Andy Neil documents production wild tracks from Szabolcs Gáspár and construction/location perspective as core sound problems. Daniel Blumberg documents prepared piano, experimental close-miking, improvising collaborators and location-responsive quarry acoustics. Complete financing/recoupment, crew/day reports, camera serial/lens-per-shot and stock-load ledgers, exact 4K/6K scan-stage reconciliation, full VFX/DI/edit/AI/sound/music and release-version ledgers remain unresolved.",
  sources: [
    {
      title: "Official awards of the 81st Venice International Film Festival",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/news/official-awards-81st-venice-international-film-festival",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional award record supporting Brady Corbet's Silver Lion for Best Director; award status supports priority/reception, not production method."
    },
    {
      title: "The brutalist",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/cinema/2024/venezia-81-competition/brutalist",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Festival production record supporting the 215-minute competition runtime and principal credited craft heads."
    },
    {
      title: "Winners Announced: 2025 EE BAFTA Film Awards",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/winners-announced-2025-ee-bafta-film-awards/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Institutional award record supporting four BAFTA wins including Director, Leading Actor, Cinematography and Original Score."
    },
    {
      title: "The 97th Academy Awards | 2025",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2025",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Institutional award record supporting Oscar wins for Adrien Brody, Lol Crawley and Daniel Blumberg; awards remain separate from workflow evidence."
    },
    {
      title: "DP Lol Crawley BSC harnesses KODAK film and 8-perf VistaVision on The Brutalist",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/the-brutalist/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct cinematographer/production account supporting pandemic delay, six-week prep, Budapest-Carrara-New York routing, 34 shooting days, VistaVision and support cameras/lenses, 250D/500T stocks, push-processing, 70mm intent, Hungarian Filmlab and Post Office Films."
    },
    {
      title: "The Brutalist Producers on the Demands and Delights of Building a Masterpiece",
      publisher: "Motion Picture Association / The Credits",
      url: "https://www.motionpictures.org/2025/02/the-brutalist-producers-on-the-demands-and-delights-of-building-a-masterpiece/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Direct producer account supporting the approximately USD 10 million production-budget anchor and the financing/independent-production constraint without establishing a complete finance waterfall."
    },
    {
      title: "In The Brutalist, Judy Becker's Spectacular Production Design Is the Film's Other Main Character",
      publisher: "Vogue",
      url: "https://www.vogue.com/article/the-brutalist-production-design-judy-becker-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct production-designer interview supporting the institute model, selected builds, Hungarian location substitutions, silos/reservoir use, post color adjustment and budget-aware architectural assembly."
    },
    {
      title: "The Brutalist's Oscar-Nominated DP on Shooting VistaVision, More",
      publisher: "postPerspective",
      url: "https://postperspective.com/the-brutalists-oscar-nominated-dp-on-shooting-vistavision-more/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "editing"],
      note: "Direct DP account supporting selective Lipsync VFX, limited greenscreen, digital institute additions, Hungarian lab/DI collaboration and a primarily classical photographic workflow."
    },
    {
      title: "Why Oscar contender The Brutalist was shot on VistaVision",
      publisher: "RedShark News",
      url: "https://www.redsharknews.com/why-epic-period-drama-movie-the-brutalist-was-shot-on-vistavision",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct editor account supporting 6K VistaVision DPX, 700TB-scale scans, multi-format editorial/post context, and narrowly bounded Respeecher use for Hungarian-language phoneme refinement."
    },
    {
      title: "Behind the scenes on The Brutalist",
      publisher: "RedShark News",
      url: "https://www.redsharknews.com/behind-the-scenes-on-the-brutalist",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound"],
      note: "Direct Dávid Jancsó account supporting more than ten million files, Budapest-New York-London-Budapest post movement, distributed sound/VFX, and multi-distributor 35mm/70mm/digital/SDR/HDR delivery complexity."
    },
    {
      title: "Behind The Brutalist's Expressive Sound – with Sound Designer Andy Neil",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/the-brutalist-film-sound/",
      sourceKind: "filmmaker_interview",
      supports: ["sound"],
      note: "Direct sound-designer interview supporting Szabolcs Gáspár's production wild tracks, location-specific architectural sound and construction/offscreen-perspective design problems."
    },
    {
      title: "The Brutalist Composer Daniel Blumberg on His Striking, Oscar-Nominated Score",
      publisher: "Pitchfork",
      url: "https://pitchfork.com/features/interview/the-brutalist-composer-daniel-blumberg-on-his-striking-oscar-nominated-score/",
      sourceKind: "filmmaker_interview",
      supports: ["sound"],
      note: "Direct composer interview supporting prepared piano, multi-mic experimentation, improvising collaborators, field/location response and quarry-acoustic recording."
    },
    {
      title: "Theaterkunst Talk – Kate Forbes",
      publisher: "Theaterkunst",
      url: "https://theaterkunst.de/en/theaterkunst-talk-kate-forbes-2/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Direct costume-designer interview supporting the 1947-1980 research span and naturalistic/documentary social-position approach to costume."
    },
    {
      title: "The Brutalist and the ongoing debate about the role of AI in the movies",
      publisher: "RedShark News",
      url: "https://www.redsharknews.com/the-brutalist-and-the-ongoing-debate-about-the-role-of-ai-in-the-movies",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "Follow-up record preserving Corbet's clarification that Respeecher was used only for Hungarian dialogue vowels/letters, no English dialogue was changed, and Becker's team did not use AI to create or render the finished buildings."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;