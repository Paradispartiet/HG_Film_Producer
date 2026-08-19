import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aManEscapedProductionCaseVerification = {
  scenarioId: "scenario_a_man_escaped_1956",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "La Cinémathèque française, the Criterion Collection, the Mémorial national de la prison de Montluc and Festival de Cannes support A Man Escaped as a 1956 French postwar resistance production built from André Devigny's historical account, real Montluc space, studio reconstruction, nonprofessional models, precisely researched escape objects, constrained cinematography, editing and unusually information-rich offscreen sound. La Cinémathèque identifies S.N.E.G./Société Nouvelle des Établissements Gaumont and Nouvelles Éditions de Films as production companies; Robert Sussfeld as producer and production director; Jean Thuillier and Alain Poiré as executive producers; Robert Bresson as director, screenwriter and dialogue writer from Devigny's account; Léonce-Henri Burel as director of photography; Henri Raichi as camera operator; Pierre-André Bertrand as sound engineer; Pierre Charbonnier as set designer; Raymond Lamy as editor; Annie Dubouillon as script supervisor; Irénée Leriche as unit manager; and Louis Malle as technical collaborator. Criterion scholarship records Devigny's factual-adviser role, François Leterrier's selection as a philosophy student, the largely nonprofessional cast, shooting both in studio and at Montluc, direct reference to Devigny's preserved rope and hooks, a fixed 50 mm focal length throughout the film and studio rerecording of all dialogue under intensive repetition. The Montluc memorial independently dates filming at the prison to June 1956. Criterion's current edition records a 101-minute black-and-white 1.33:1 form and a later 2K restoration with monaural soundtrack; La Cinémathèque lists 95 minutes and BFI 102, so the case preserves runtime variance as institutional provenance rather than inventing alternate cuts. Cannes records the 1957 competition and Bresson's unanimous Best Director prize. The case does not invent film stock, camera body, microphone models, lighting ratios, recording-stage equipment, exact shot counts or unsupported technical details beyond the unusually specific institutional evidence.",
  sources: [
    {
      title: "Un condamné à mort s'est échappé",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/46782.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "La Cinémathèque supplies the production companies, producing structure and full core craft credits, identifies André Devigny's source account, and emphasizes sparse design/dialogue, repetition, slowness, voice-over and sound as the film's material system."
    },
    {
      title: "A Man Escaped",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/27848-a-man-escaped",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Criterion records the 1956 French 101-minute black-and-white 1.33:1 form, Bresson, Thuillier/Poiré, Burel, Raichi, Charbonnier, Bertrand and Lamy, plus later 2K restoration and monaural presentation."
    },
    {
      title: "A Man Escaped: Quintessential Bresson",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/2628-a-man-escaped-quintessential-bresson",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Criterion's scholarly essay documents André Devigny's 1943 Montluc escape and adviser role, Bresson's factual transformations, Leterrier and the largely nonprofessional cast, object-centered action, restricted point of view and offscreen sound as structural information."
    },
    {
      title: "10 Things I Learned: A Man Escaped",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5589-10-things-i-learned-a-man-escaped",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Criterion production notes document studio plus Montluc location work, escape-scene intercutting between both, surviving Devigny rope/hooks used as references, Louis Malle's prop responsibility, fixed 50 mm focal length and full studio rerecording of dialogue under repeated Bresson direction."
    },
    {
      title: "Montluc avant/après : une découverte photographique",
      publisher: "Mémorial national de la prison de Montluc",
      url: "https://www.memorial-montluc.fr/ressources/montluc-en-photos",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "The official national memorial independently records that Bresson's film was shot at Montluc in June 1956 and preserves photographs made during the production as evidence of the prison's mid-1950s state."
    },
    {
      title: "Un condamné à mort s'est échappé",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/un-condamne-a-mort-s-est-echappe/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Cannes records the film in the 1957 competition, Bresson's directing/screenplay, Burel cinematography, Mozart music, Charbonnier design and the unanimous Best Director prize, kept as a downstream reception layer."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
