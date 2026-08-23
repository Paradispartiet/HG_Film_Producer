import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const russianArkProductionCaseVerification = {
  scenarioId: "scenario_russian_ark_2002",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Russian Ark is verified conservatively as Alexander Sokurov's 2002 Russian-German Hermitage production built around a feature-length continuous digital Steadicam acquisition, but not around an untouched or post-free image. The official project page identifies Sokurov as director/co-screenwriter, Anatoly Nikiforov as co-screenwriter, Tilman Büttner as director of photography, the State Hermitage as presenter, Hermitage Bridge Studio and Egoli Tossell Film AG as producers, and dedicated art, costume, lighting, sound, digital-imaging, Da Vinci colour-correction and VFX credits. Cannes records the completed feature at 96 minutes. Contemporary production notes document the recording constraint: conventional film magazines and standard HD tape could not sustain the planned uninterrupted feature, so a portable prototype hard-disk recorder was used for feature-length uncompressed HD acquisition over an approximately 1,300-metre planned route. Büttner's contemporary interview documents the embodied and logistical system: roughly 35 kilograms carried for about 92 minutes over about 1,500 metres; one shooting day; four hours of winter daylight; around 26 hours of final museum preparation; a moving team for focus, iris, recorder and lighting support; three aborted starts before the successful fourth attempt; reflection, actor and hand-light failures; roughly minus-25-Celsius exterior conditions and lens-fog risk; a failed ballroom balloon light; and roughly 300 dancing couples around the camera route. The official page's 862-actor crowd-scene credit is kept distinct from later institutional descriptions of more than 2,000 performers across the film. The one-take boundary is equally important in post: official credits include digital imaging, colour correction and VFX, while Büttner describes colour/brightness adjustment, removal of visible lamps and electronic reframing. No exact camera body/lens, codec, data volume, recorder model, battery topology, full rehearsal calendar, sound-sync chain, VFX shot count, budget or restoration/version history is asserted where the reviewed sources do not establish it consistently.",
  sources: [
    {
      title: "Russian Ark — project and credits",
      publisher: "Alexander Sokurov / Hermitage Bridge Studio",
      url: "https://sokurov.spb.ru/promo/russian_ark/en/ark_pln2.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official project record for production companies, Sokurov/Nikiforov screenplay credits, Tilman Büttner cinematography, art/costume/light/sound departments, digital imaging, Da Vinci colour correction, VFX, the 862-actor crowd-scene credit, Valery Gergiev/Mariinsky Orchestra and distribution credits."
    },
    {
      title: "Russian Ark",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/russian-ark/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional festival record confirming the 2002 Russian-German feature, Alexander Sokurov and a 96-minute runtime."
    },
    {
      title: "Man entwickelt spezielle Muskeln",
      publisher: "taz",
      url: "https://taz.de/Man-entwickelt-spezielle-Muskeln/%21783542/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Contemporary Tilman Büttner interview documenting the roughly 35-kg/92-minute/1.5-km Steadicam burden, one shooting day, four-hour daylight window, final preparation, moving camera support team, three failed starts and fourth successful take, environmental/lighting risks, ballroom choreography and later colour, cleanup and reframing work."
    },
    {
      title: "Russian Ark — Production Notes",
      publisher: "Cinema.com",
      url: "https://cinema.com/articles/2015/russian-ark-production-notes.phtml",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Contemporary production-note material describing the one-day single-take plan, months of preparation/rehearsal, roughly 1,300-metre route, the duration limits of film magazines and ordinary HD tape, and the portable feature-length uncompressed-HD hard-disk recording solution."
    },
    {
      title: "Russian Ark: Tilman Büttner interview",
      publisher: "DFF — Deutsches Filminstitut & Filmmuseum",
      url: "https://www.dff.film/en/film/russian-ark/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Institutional framing of Russian Ark as a feature realized in one uninterrupted sequence and a production of exceptional performer and spatial scale; used as contextual corroboration rather than to overwrite differently defined official headcounts."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
