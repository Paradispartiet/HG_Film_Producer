import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const antoniasLineVerificationRecords = [
  {
    scenarioId: "scenario_antonia_s_line_1995",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's seven-year financing path, Dutch-Belgian-British co-production, female-line screenplay, low-rehearsal direction, performance-led ageing, restrained makeup, rural ensemble geography, colour 35mm widescreen image, cyclical editing, stereo sound, music, magical realism and international reception are supported by contemporary filmmaker testimony and institutional, festival, archive and distribution records.",
    sources: [
      {
        title: "Marleen Gorris over Antonia",
        publisher: "Filmkrant",
        url: "https://filmkrant.nl/interview/marleen-gorris-over-antonia/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "This contemporary interview documents the 1988 screenplay and seven-year financing process, Gorris's cyclical conception of time, female-line family chronicle, minimal rehearsal, village background, performance-led ageing, restrained makeup and the fairy-tale atmosphere created with cinematographer Willy Stassen."
      },
      {
        title: "Antonia",
        publisher: "Nederlands Film Festival",
        url: "https://www.filmfestival.nl/en/film/antonia-2",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The national festival archive records the 1995 film, fifty-year rural family chronicle, principal production companies and complete core credits for writing, directing, production design, camera, editing, set sound and music, together with Golden Calf wins for directing and acting."
      },
      {
        title: "Antonia's Line",
        publisher: "Flanders Image",
        url: "https://www.flandersimage.com/titles/antonias-line",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The Flemish audiovisual agency documents the minority Flemish co-production and international partners, credits costume, makeup, photography, editing, sound and music, and records colour 35mm, 2.35:1 framing and stereo presentation."
      },
      {
        title: "1996 Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1996/m",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The official ceremony record identifies Antonia's Line as the Netherlands submission and winner of the Foreign Language Film category at the 68th Academy Awards."
      },
      {
        title: "Academy Awards Search: Antonia's Line",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://awardsdatabase.oscars.org/search/getresults?query=%7B%22FilmTitle%22%3A%22Antonia%27s+Line%22%2C%22Sort%22%3A%222-Film+Title-Alpha%22%2C%22AwardShowNumberFrom%22%3A0%2C%22AwardShowNumberTo%22%3A0%2C%22Search%22%3A30%7D",
        sourceKind: "archive_feature",
        supports: ["overall"],
        note: "The Academy database independently records the film, production and distributor information, country attribution, award year and Foreign Language Film recognition."
      },
      {
        title: "Antonia's Line",
        publisher: "Turner Classic Movies",
        url: "https://www.tcm.com/articles/1379685/antonias-line",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "TCM analyzes the last-day framing, multigenerational flashback, ensemble characterization, feminist authorship and magical realism, and specifically identifies Willy Stassen's luminous photography and Jan Sewell's ageing makeup across half a century."
      },
      {
        title: "Antonia's Line",
        publisher: "Film Movement",
        url: "https://filmmovement.com/product/antonia-s-line",
        sourceKind: "archive_feature",
        supports: ["overall", "sound"],
        note: "The current distributor record confirms the 102-minute Dutch feature, stereo 2.0 presentation, archival Marleen Gorris interview and continuing home-video circulation, alongside the Academy and festival recognition."
      },
      {
        title: "Antonia's Line",
        publisher: "Busan International Film Festival",
        url: "https://www.biff.kr/eng/html/archive/arc_history_view.asp?kind=history&m_idx=320&pyear=1996",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The festival archive classifies the film through family, women and labor, records the Netherlands-Belgium-United Kingdom production, 104-minute colour 35mm format and key credits, and describes the postwar village and alternative household structure."
      },
      {
        title: "1995",
        publisher: "Chicago International Film Festival",
        url: "https://www.chicagofilmfestival.com/timeline/1995/",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "Cinema/Chicago's official historical timeline records Antonia's Line in the 1995 festival program and connects that international launch to its subsequent Academy Award success."
      },
      {
        title: "'Antonia's Line' Draws on Strength of Family, Women",
        publisher: "Los Angeles Times",
        url: "https://www.latimes.com/archives/la-xpm-1996-02-02-ca-31534-story.html",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "This contemporary American release review describes the final-day narration, female self-determination, death-and-continuity structure and large ensemble, while preserving the principal credits for cinematography, editing, costume, music and art direction."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
