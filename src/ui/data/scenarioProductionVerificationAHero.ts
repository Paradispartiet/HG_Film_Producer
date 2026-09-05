import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aHeroProductionCaseVerification = {
  scenarioId: "scenario_a_hero_2021",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "A Hero (Ghahreman) is verified as a source-first 2021 Chapter 19 Production Case for the Cannes major-prizes reconciliation. Festival de Cannes locks the 127-minute Iran/France feature, 2021 Grand Prix, Farhadi screenplay/direction, Ali Ghazi cinematography, Haydeh Safiyari editing and Mohammadreza Delpak sound. The official Memento/Asghar Farhadi Production press kit locks Shiraz context, 2K 2.39:1 image, 5.1 sound, producers/co-producers, production design, costume, production sound, sound editing/mix and the Iran/France production/support network. ARRI locks ALEXA Mini LF and Signature Prime lenses. Farhadi's DGA production interview locks a ten-month rehearsal process centered on actor-specific preparation and character backstories. Unsupported camera settings, lighting package, codec/media/data workflow, shooting-day count, budget/shares, edit infrastructure, detailed ADR/Foley architecture, grading, VFX and master lineage remain unresolved.",
  sources: [
    {
      title: "GHAHREMAN (A HERO)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/ghahreman/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting 2021, 127 minutes, Iran/France, Grand Prix, Farhadi screenplay/direction, Ali Ghazi cinematography, Haydeh Safiyari editing and Mohammadreza Delpak sound."
    },
    {
      title: "A Hero — Cannes press kit",
      publisher: "Memento Production / Asghar Farhadi Production",
      url: "https://medias.unifrance.org/medias/68/178/242244/presse/a-hero-presskit-english.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production press kit supporting Shiraz context, 2K 2.39:1 image, 5.1 sound, producer/co-producer structure, production design, costume, production sound, editing, sound editing/mix, companies and public-support partners."
    },
    {
      title: "ARRI equipment behind the prized films at Cannes",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-equipment-behind-the-prized-films-at-cannes-",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ARRI's Cannes production roundup identifies Ali Ghazi and locks A Hero to ALEXA Mini LF with Signature Prime lenses."
    },
    {
      title: "Director Asghar Farhadi discusses A Hero",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/events/2022/january2022/gcs_ahero_1120",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Farhadi describes ten months of rehearsal before shooting, actor-specific preparation and building unseen character backstories rather than simply reading the script."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
