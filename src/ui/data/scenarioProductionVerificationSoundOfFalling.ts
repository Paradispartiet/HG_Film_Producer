import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const soundOfFallingProductionCaseVerification = {
  scenarioId: "scenario_sound_of_falling_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "Sound of Falling is verified as an award-priority Chapter 19 auteur/festival production case through Festival de Cannes, filmportal.de, Mitteldeutsche Medienförderung, Studio Zentral, British Cinematographer, Swiss Films, Berlinale Talents and direct editor/sound/filmmaker interviews. Cannes records the 2025 Jury Prize ex aequo and a 149-minute Competition version; filmportal separately records a 154-minute DCP and the 18 July–5 September 2023 Sachsen-Anhalt shooting window. MDM records 34 shooting days, €250,000 in MDM production support and BKM/DFFF as additional public funders. British Cinematographer locks ARRI Alexa Mini, vintage Cooke S2/S3 TLS lenses, selected Sony FX6 and Super 16 zoom use, self-operated Steadicam, the abandoned 16mm plan, natural-light scouting, period-specific practicals and selected M40/M90/4K HMI plus LED tools. Swiss Films supports the small-budget constraint and ghost-camera visual strategy. Berlinale Talents documents nearly ten months of structural editing; direct editor and sound-designer interviews document four-timeline restructuring, colored-card scene mapping and sound design developing alongside picture editing. Complete final budget/recoupment, daily schedule, child-work compliance, full camera/lighting/data package, all production-design/costume records, effects/VFX census, editorial infrastructure, full audio chain, music ledger and exact Cannes-to-154-minute-DCP lineage remain unresolved.",
  sources: [
    {
      title: "SOUND OF FALLING (IN DIE SONNE SCHAUEN)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/sound-of-falling/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record supporting 2025 Competition, Joint Jury Prize, 149-minute Cannes version and principal department credits."
    },
    {
      title: "In die Sonne schauen",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/in-die-sonne-schauen_e591169580db40458acf97ba67c1dcd4",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "German national film record supporting Studio Zentral/ZDF production structure, public funders, 18 July–5 September 2023 Sachsen-Anhalt shoot and a separately catalogued 154-minute DCP."
    },
    {
      title: "Zehn Lolas für In die Sonne schauen beim Deutschen Filmpreis 2026",
      publisher: "Mitteldeutsche Medienförderung",
      url: "https://www.mdm-online.de/aktuelles/nachrichten/zehn-lolas-fuer-in-die-sonne-schauen-beim-deutschen-filmpreis-2026",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Regional funding record supporting 34 shooting days entirely in Altmarkkreis Salzwedel/Stendal, €250,000 MDM production support, other named public funders and later craft recognition."
    },
    {
      title: "In die Sonne schauen",
      publisher: "Studio Zentral",
      url: "https://studiozentral.de/portfolio-item/in-die-sonne-schauen/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer record supporting Studio Zentral/ZDF co-production and principal craft credits including production design, costume, makeup, sound design and mix."
    },
    {
      title: "Fabian Gamper / Sound of Falling",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/fabian-gamper-sound-of-falling/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer masterclass locking Alexa Mini, vintage Cooke S2/S3 TLS, Sony FX6, Super 16 zooms, Steadicam, abandoned 16mm plan, natural-light strategy, practical sources and selected HMI/LED tools."
    },
    {
      title: "TALKING TO… Fabian Gamper",
      publisher: "Swiss Films",
      url: "https://www.swissfilms.ch/en/news/talking-to-fabian-gamper/7408",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "National film-promotion interview supporting very small budget relative to ambition, memory-image research, camera physicality and direct actor/camera interaction."
    },
    {
      title: "Interview: Evelyn Rack, Editor of joint Cannes Jury Prize-winning Sound of Falling",
      publisher: "Berlinale Talents",
      url: "https://www.berlinale-talents.de/bt/page/c/Interview-EvelynRack",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional editor interview supporting nearly ten months of repeated structural reshaping and deliberate resistance to classical chronology."
    },
    {
      title: "Evelyn Rack On Editing the Documentary Puzzle of Sound of Falling",
      publisher: "The Contending",
      url: "https://thecontending.com/evelyn-rack-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound", "overall"],
      note: "Direct editor interview supporting roughly ninety scenes, four timeline colors, first script-order assembly, emotional-logic restructuring and close collaboration with junior editor/sound designer Billie Mind."
    },
    {
      title: "A Sound Mind: Billie Mind is the sound artist who worked on Sound of Falling",
      publisher: "The Berliner",
      url: "https://www.the-berliner.com/features/billie-mind-sound-artist-sound-of-falling/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound", "overall"],
      note: "Direct sound-artist/junior-editor interview supporting entry around six months before shooting, changing script versions, early edit involvement and parallel sound-library/dramaturgy development."
    },
    {
      title: "History with a Capital H: Mascha Schilinski on Cannes 2025 Award-Winner Sound of Falling",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/130868-interview-mascha-schilinski-cannes-2025-sound-of-falling/",
      sourceKind: "filmmaker_interview",
      supports: ["screenplay", "editing", "overall"],
      note: "Direct director interview supporting mosaic structure beginning in writing and extensive post-shoot recombination with editor Evelyn Rack."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
