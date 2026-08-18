import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const neighborsWifeProductionCaseVerification = {
  scenarioId: "scenario_the_neighbors_wife_and_mine_1931",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "Shochiku and the National Film Archive of Japan support The Neighbor's Wife and Mine (Madamu to nyobo / マダムと女房) as a 1931 Shochiku Kamata full-talkie whose production significance lies in domestic synchronous-sound engineering and the dramatic use of recorded everyday noise. Shochiku records a 1 August 1931 release, 56-minute runtime, Heinosuke Gosho directing, Komatsu Kitamura writing, Bunjiro Mizutani photographing, full synchronous recording and three cameras running together so sound would not break when the image cut between viewpoints. NFAJ records Shochiku Kinema (Kamata), 35mm black-and-white, 56 minutes, Takeo and Haruo Tsuchihashi for sound recording, sound assistants, the Tsuchihashi-style Shochiku-Phone process, lighting, art design, stage-construction and decoration credits, songs and performing bands. NFAJ later emphasized that Gosho worked within synchronous-recording constraints using movement and multiple cameras, while Shochiku's institutional history places the Tsuchihashi brothers' domestic sound research inside studio investment rather than an auteur-only invention story. The case therefore teaches full-sync production, multi-camera continuity, radio/jazz/everyday noise and an uneven Japanese sound transition while keeping silent films, sound versions and benshi-era practice historically alive rather than declaring them extinct in 1931.",
  sources: [
    {
      title: "Madamu to Nyobo / The Neighbor's Wife and Mine",
      publisher: "National Film Archive of Japan",
      url: "https://nfad.nfaj.go.jp/det.php?data_id=1766",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "NFAJ records Shochiku Kinema (Kamata), 35mm black-and-white, 56 minutes, Gosho, Kitamura, Mizutani, lighting and art/stage crews, Takeo and Haruo Tsuchihashi for sound recording, sound assistants, the Tsuchihashi-style Shochiku-Phone process, songs and performing bands."
    },
    {
      title: "Madamu to Nyobo",
      publisher: "Shochiku",
      url: "https://www.shochiku.co.jp/cinema/database/01302/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Shochiku records the 1 August 1931 release, 56-minute runtime and principal credits, and explicitly states that the film was shot with full synchronous recording and three cameras so sound would not break across cuts; it also highlights radio, cats, alarm clocks and other everyday noises."
    },
    {
      title: "Heinosuke Gosho, 40 years after his death — The Neighbor's Wife and Mine",
      publisher: "National Film Archive of Japan",
      url: "https://www.nfaj.go.jp/program/gosho202109-1/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "NFAJ describes the film as a major domestic full-talkie and notes Gosho's solutions under simultaneous-recording constraints, including moving-camera work and multiple-camera shooting."
    },
    {
      title: "Shochiku film-production history Part 4 — Japan's first talkie and the move to Ofuna",
      publisher: "Shochiku",
      url: "https://www.shochiku.co.jp/cinema/history/archive/shochiku-history4/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Shochiku documents studio backing for Takeo and Haruo Tsuchihashi's domestic talkie research, the Kamata research context and the film's position as the first successful Japanese feature made in complete talkie form."
    },
    {
      title: "Shochiku First Principles: 100 Years of Shochiku Cinema — The Neighbor's Wife and Mine",
      publisher: "National Film Archive of Japan",
      url: "https://www.nfaj.go.jp/program/shochiku202006-6/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "NFAJ emphasizes that sound effects and everyday noise are indispensable to the film's dramatic construction and comic tempo, supporting a case in which sound is narrative action rather than technological decoration."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
