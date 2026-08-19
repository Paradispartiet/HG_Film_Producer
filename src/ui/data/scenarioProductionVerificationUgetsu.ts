import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const ugetsuProductionCaseVerification = {
  scenarioId: "scenario_ugetsu_1953",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "Criterion, La Biennale di Venezia, BFI and The Film Foundation support Ugetsu as a 1953 Daiei postwar period production whose literary adaptation, anti-war historical framing, mobile-camera staging, period design, sound and supernatural transitions are concrete production systems. Criterion credits producer Masaichi Nagata; director Kenji Mizoguchi; screenwriters Matsutaro Kawaguchi and Yoshikata Yoda from Akinari Ueda; cinematographer Kazuo Miyagawa; art director Kisaku Ito; set designer Uichiro Yamamoto; costume designers Shima Yoshimi and Tadaoto Kainosho; composer Fumio Hayasaka; sound staff Iwao Otani and Akira Suzuki; editor Mitsuzo Miyata; makeup artist Zenya Fukuyama; and hair stylist Ritsu Hanai. Criterion scholarship documents that Kawaguchi and Yoda fused two Ueda stories with Maupassant's Decoré!, that Mizoguchi explicitly wanted the violence of war against ordinary people to govern the film, and that Miyagawa later recalled using a crane for roughly seventy percent of Ugetsu. La Biennale records Daiei, 35 mm, black-and-white, 97 minutes, the principal creative credits and Mizoguchi's 1953 Silver Lion; BFI independently records the film at 97 minutes and identifies Nagata, Kawaguchi and Yoda. Criterion's current edition lists 96 minutes and 1.37:1, so the case preserves 96/97-minute institutional variance rather than inventing an alternate cut. The Film Foundation documents later 4K restoration with Kadokawa from the best surviving master-positive and duplicate-negative elements, keeping preservation evidence distinct from original production. The case does not invent camera bodies, lenses, film stock, crane models, exact lighting ratios, optical-printer recipes, fog machinery, exact shooting dates, tank dimensions or unsupported scene-by-scene location claims.",
  sources: [
    {
      title: "Ugetsu",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/369-ugetsu",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion supplies the principal production credits, 96-minute black-and-white 1.37:1 presentation, restoration context and archival production supplements including interviews with first assistant director Tokuzo Tanaka and cinematographer Kazuo Miyagawa."
    },
    {
      title: "Ugetsu Monogatari",
      publisher: "La Biennale di Venezia / ASAC",
      url: "https://asac.labiennale.org/attivita/cinema/4018",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Venice records Daiei production, Mizoguchi, Kawaguchi/Yoda, Miyagawa, Tanaka, Hayasaka/Ichiro Saito, Miyata, Ito, Shima Yoshizane, 35 mm black-and-white 97-minute technical data and the 1953 Silver Lion."
    },
    {
      title: "Ugetsu: From the Other Shore",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/401-ugetsu-from-the-other-shore",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Criterion's production essay documents Mizoguchi and Yoda's wartime emphasis, the fusion of Ueda and Maupassant sources, historical-detail practice and Miyagawa's recollection that a crane was used for roughly seventy percent of Ugetsu."
    },
    {
      title: "Ugetsu Monogatari (1953)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/cf595a9f-f9cf-5581-9d1b-2d04df5715ae/ugetsu-monogatari",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI independently identifies the 1953 Japanese 97-minute feature, Mizoguchi, producer Masaichi Nagata, writers Kawaguchi/Yoda and the film's flowing camera style and supernatural-period structure."
    },
    {
      title: "Out of the Vaults: Ugetsu, 1953",
      publisher: "The Film Foundation",
      url: "https://www.film-foundation.org/hfpa-ugetsu",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "The Film Foundation documents the later 4K restoration with Kadokawa at Cineric, use of master-positive and duplicate-negative elements, soundtrack restoration and new preservation elements, preserving restoration provenance separately from original production claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
