import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const eoProductionCaseVerification = {
  scenarioId: "scenario_eo_2022",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "EO is verified as an award-priority Chapter 19 Poland-Italy animal-road-movie production case through Festival de Cannes, BBFC/BFI, FilmPolski, Screen Daily, American Society of Cinematographers, Filmmaker Magazine and direct Skolimowski/Piaskowska interviews. Cannes records the 2022 Joint Jury Prize and an 86-minute Competition version; BBFC/BFI record the UK release at approximately 88 minutes. Screen Daily documents a pandemic-interrupted production stretching from a minimal early-2020 Sicily start through Polish location work to an early-March-2022 Rome-area finish, plus Skopia Film/Alia Film, Polish Film Institute and regional support, Polish equity and HBO Europe financing components. Direct interviews document six donkeys, animal-led blocking, calm handling and food rewards, a safe fence-jump illusion created through camera/edit/sound, objective master plus donkey-POV coverage, and score used as an interior-monologue layer. ASC documents Dymek's reactive camera method, preparation-versus-freestyle tension, bold red dusk passages and one scene assembled from five locations and two stages. Complete final budget/recoupment, exact shoot-day and restart calendar, full welfare/veterinary/transport compliance, complete camera/lens/light/data/color package, all drone/VFX/effects work, complete location logistics, edit infrastructure, full audio chain, score recording ledger and exact 86→88 master lineage remain unresolved.",
  sources: [
    {
      title: "EO",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/eo/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record supporting 2022 Competition, Joint Jury Prize, 86-minute Cannes version and principal credits."
    },
    {
      title: "EO",
      publisher: "BBFC",
      url: "https://www.bbfc.co.uk/release/eo-q29sbgvjdglvbjpwwc0xmda4mjq1",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "UK classification record supporting approximately 88-minute release runtime."
    },
    {
      title: "EO",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/bfi-film-releases/eo",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "UK distribution record supporting Poland/Italy 2022 and 88-minute release runtime."
    },
    {
      title: "EO",
      publisher: "FilmPolski.pl",
      url: "https://www.filmpolski.pl/fp/index.php/1260556",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Polish institutional production record supporting Skopia Film, Recorded Picture Company, Polish Film Institute and regional co-financing plus principal credits."
    },
    {
      title: "Jerzy Skolimowski on two-year shoot for Cannes Competition title EO",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/features/jerzy-skolimowski-on-two-year-shoot-for-cannes-competition-title-eo/5170686.article",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Producer-based production account supporting Sicily start before pandemic shutdown, Polish locations, Rome-area finish in March 2022, co-production/finance participants and recurring crew."
    },
    {
      title: "Clubhouse Conversations — EO",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/video/clubhouse-conversations-eo/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Direct Dymek interview supporting reactive animal cinematography, bold red dusk passages, preparation/freestyle balance and a scene built from five locations and two stages."
    },
    {
      title: "Carrots Played an Important Part in the Whole Process: Jerzy Skolimowski on EO",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/117467-interview-jerzy-skolimowski-eo/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct director interview supporting animal bonding/handling, fence-jump illusion, objective master plus donkey-POV coverage and score as subjective interiority."
    },
    {
      title: "EO Director Had a Secret Weapon to Coax a Great Performance From a Donkey",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/eo-donkey-jerzy-skolimowski-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Direct director interview supporting POV strategy, drones/effects, animal handling and subjective sound design."
    },
    {
      title: "Nice ass: Jerzy Skolimowski on his donkey film that wowed Cannes",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2022/dec/08/prize-ass-jerzy-skolimowski-on-his-donkey-film-that-wowed-cannes",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct interview supporting six donkeys and animal-led A-to-B motivation rather than conventional repeatable acting."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
