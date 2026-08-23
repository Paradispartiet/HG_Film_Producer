import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const atanarjuatProductionCaseVerification = {
  scenarioId: "scenario_atanarjuat_the_fast_runner_2001",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Atanarjuat: The Fast Runner is verified conservatively as a 172-minute Inuktitut independent fiction feature produced by Igloolik Isuma Productions in co-production with the National Film Board of Canada, directed by Zacharias Kunuk, written by Paul Apak Angilirq, photographed by Norman Cohn and edited by Kunuk, Cohn and Marie-Christine Sarda. Isuma's production press kit documents Angilirq recording eight elders' versions of the legend, leading a five-writer team to combine the material into an Inuktitut screenplay, and continuous elder review for language/cultural accuracy. The same source records an all-Inuit cast from Igloolik, a roughly 90% Inuit technical crew mixing experienced workers and trainees, a six-month 1999 location shoot around Igloolik, Cohn's title-specific description of a horizontal consensus/collaboration production culture, 16:9 Digital Betacam acquisition and a Digital Film Group transfer to 35mm. It also documents local elders/artists reconstructing costumes, props and sets using oral/traditional knowledge and historical materials including William Parry's 1822-23 expedition journals, with James Ungalaaq leading props/sets and Atuat Akkitirq and Micheline Ammaq leading costume work. NFB independently preserves the principal credits, extensive crew and post-production roles, and Digital Film Group digital-to-film transfer; NFB explicitly frames the work as a powerful drama rather than a documentary. Isuma's facts record supplies the 172-minute Inuktitut feature classification and NFB co-production. Cannes independently confirms 172 minutes, Un Certain Regard 2001 and the Caméra d'or. These sources support a community-based, Inuit-controlled production model and a digital-acquisition-to-film-presentation pipeline, but they do not justify inventing exact camera bodies, lenses, tape specifications, lighting ratios, microphone/recorder hardware, stunt mechanics, complete weather/location chronology, full financing percentages, budget, post hardware, transfer settings or alternate-version genealogy.",
  sources: [
    {
      title: "Atanarjuat (The Fast Runner) Press Kit",
      publisher: "Igloolik Isuma Productions",
      url: "https://www.isuma.tv/sites/default/themes/atanarjuat/files/Atan_presskit.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Primary production-company dossier documenting elder-based script research, the five-writer Inuktitut screenplay process, all-Inuit cast, roughly 90% Inuit technical crew, six-month 1999 Igloolik location shoot, horizontal working-method account, 16:9 Digital Betacam acquisition, 35mm transfer, craft reconstruction and principal credits."
    },
    {
      title: "Facts at a glance — Atanarjuat",
      publisher: "IsumaTV / Igloolik Isuma Productions",
      url: "https://www.isuma.tv/en/atanarjuat/facts-glance",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Production-company fact record: Igloolik Isuma production, NFB co-production, Inuktitut language, 172-minute independent fiction feature and principal director/writer/cinematography/editing/music/design/costume/producer credits."
    },
    {
      title: "Atanarjuat the Fast Runner",
      publisher: "National Film Board of Canada",
      url: "https://www.nfb.ca/film/atanarjuat_the_fast_runner_en/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Co-producer/institutional record preserving extensive production and post credits, Digital Film Group digital-to-film transfer, Inuktitut presentation and Kunuk's distinction between researched historical drama and documentary."
    },
    {
      title: "Interview with Paul Apak Angilirq",
      publisher: "IsumaTV / Igloolik Isuma Productions",
      url: "https://www.isuma.tv/node/5555/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Interview testimony from the film's originator/screenwriter describing hearing the legend from elders, recording approximately eight to ten elders and developing a movie script from those researched oral accounts."
    },
    {
      title: "Atanarjuat The Fast Runner",
      publisher: "Festival de Cannes",
      url: "https://cinemadedemain.festival-cannes.com/en/f/atanarjuat-the-fast-runner/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Independent festival record for the 2001 Un Certain Regard first feature, 172-minute duration, Caméra d'or and principal credits; used for circulation/reception rather than to infer production details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
