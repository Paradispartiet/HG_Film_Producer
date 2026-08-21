import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const hyenasProductionCaseVerification = {
  scenarioId: "scenario_hyenas_1992",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "Hyènes is verified as Djibril Diop Mambéty's 1992 second and final feature, a free Senegalese reworking of Friedrich Dürrenmatt's The Visit made through a transnational African-European production network. Swiss Films records a May 1992 world premiere, color 35mm, Wolof original version, 110 minutes, Thelma Film AG and ADR Productions, and Pierre-Alain Meier as producer. La Cinémathèque française expands the company network to Thelma Film AG, ADR Productions, Maag Daan, Georges Reinhart Productions, Channel Four and Schweizer Fernsehen and credits Matthias Kälin cinematography, Maguette Salla sound, Wasis Diop music, Oumou Sy costume and Loredana Cristelli editing. Images francophones records a 1992 Commission Cinéma-Fiction aid entry of 300,000 F, plus production/producer credits; the amount is preserved as one support datum rather than treated as a total budget. A contemporaneous Ninki Nanka record places the shoot in spring 1991. In a first-person Metrograph interview, assistant director Moussa Sene Absa says Hyènes was shot in two periods: producers stopped a chaotic first period, and Alain Rozanès later asked Absa to help the production. Mambéty's own interview explains the rice-sack costumes and wigs as a collective dramatic mask, describes sound as intrinsic to image/movement rather than ornamental, and identifies deliberately cross-border elements including elephants from Kenya, hyenas from Uganda, Senegalese participants, a Japanese participant and French carnival material. These historical animal and travel practices are descriptive evidence, not current production instructions. Institutional runtime records vary around 108, 110 and 113 minutes; 110 is used as the canonical case runtime because Swiss Films, Cannes and Film Foundation converge there. Film Foundation documents a separate 2017 original-negative restoration led by Thelma Film AG at Eclair. Restoration scanning, cleaning and color correction are downstream preservation evidence and are not used to infer the original 1991-92 camera, stock, lighting, laboratory or color workflow.",
  sources: [
    {
      title: "Hyènes / Hyenas",
      publisher: "Swiss Films",
      url: "https://www.swissfilms.ch/en/movie/hyenes/714482b9e80344ae9f5dd7958d0a094f",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Institutional record for May 1992 world premiere, 110-minute color 35mm Wolof original version, Thelma Film AG / ADR Productions, Pierre-Alain Meier and Mambéty's Dürrenmatt adaptation."
    },
    {
      title: "Hyènes (Djibril Diop Mambéty, 1992)",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/38206.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Expanded production-company and credit record: Thelma Film AG, ADR Productions, Maag Daan, Georges Reinhart Productions, Channel Four, Schweizer Fernsehen; Marin Karmitz, Pierre-Alain Meier and Alain Rozanès production credits; Matthias Kälin cinematography, Maguette Salla sound, Wasis Diop music, Oumou Sy costume and Loredana Cristelli editing."
    },
    {
      title: "Hyènes",
      publisher: "Images francophones",
      url: "https://www.imagesfrancophones.org/catalogue/hyenes-284",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Institutional francophone production record identifying Senegal, Mambéty, producer and production-management credits, Wasis Diop, Oumou Sy, Loredana Cristelli and a 1992 Commission Cinéma-Fiction aid entry of 300,000 F. The aid is not treated as the total budget."
    },
    {
      title: "Moussa Sene Absa",
      publisher: "Metrograph Journal",
      url: "https://metrograph.com/moussa-sene-absa/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "First-person assistant-director testimony that Hyènes was shot in two periods, that producers stopped a chaotic first period, and that Alain Rozanès later recruited Absa to help the production."
    },
    {
      title: "The Hyena's Last Laugh: A Conversation with Djibril Diop Mambéty",
      publisher: "Metrograph Journal",
      url: "https://metrograph.com/a-conversation-with-djibril-diop-mambety/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Mambéty explains the film's continental/global production intention, documented cross-border animal/participant/carnival elements, rice-sack and wig costume meaning, low-cost costume material versus equipment expense, and his view of sound as intrinsic to movement and image."
    },
    {
      title: "HYÈNES (HYENAS)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/hyenes/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record for the 1992 production, Switzerland/France/Senegal country attribution, 110-minute duration, Mambéty screenplay/direction, Matthias Kälin photography, Loredana Cristelli editing, Wasis Diop music and Oumou Sy production-design credit."
    },
    {
      title: "Hyenas restoration record",
      publisher: "The Film Foundation",
      url: "https://www.film-foundation.org/news?page=56",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Records Hyenas as Senegal/Switzerland/France, 1992, 110 minutes and documents the separate 2017 Thelma Film AG restoration at Eclair Digital from the original negative. Restoration evidence is kept downstream from original production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
