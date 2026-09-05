import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fatherMotherSisterBrotherProductionCaseVerification = {
  scenarioId: "scenario_father_mother_sister_brother_2025",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Father Mother Sister Brother is verified as a new 2025 Chapter 19 Production Case and the final correctionOrder-10 festival-top-prize obligation. La Biennale documents the 110-minute USA/Ireland/France competition film, Jarmusch's screenplay/direction, Elmes and Le Saux on cinematography, Gonçalves on editing, Friedberg and Bittner Rosser on production design, George on costume and Hein on sound. The Match Factory independently locks 110 minutes, 1.85:1, DCP, 5.1 and the production/presentation network. Screen Ireland locks Dublin, Hail Mary Pictures, public support and named financing partners. Jarmusch's Film Comment interview locks approximately ten shooting days per section and the craft split: Elmes/Friedberg for New Jersey, Le Saux/Bittner Rosser for Ireland and Paris. Saint Laurent documents the three-part geography and character-study structure. Trade reporting supplies the bounded New Jersey union-radius budget constraint. Unsupported capture, lighting, exact budget/shares, complete labor terms, data, edit hardware, detailed sound-post, grading, VFX and master-lineage claims remain unresolved.",
  sources: [
    {
      title: "Father Mother Sister Brother — Venezia 82 Competition",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/cinema/2025/venezia-82-competition/father-mother-sister-brother",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting 110 minutes, USA/Ireland/France, screenplay/director, cinematographers, editor, production designers, costume, sound and production companies."
    },
    {
      title: "Father Mother Sister Brother",
      publisher: "The Match Factory",
      url: "https://www.the-match-factory.com/catalogue/films/father-mother-sister-brother.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official sales/production catalogue supporting 110 minutes, 1.85:1, DCP, 5.1, key crew and the production/presentation/co-production network."
    },
    {
      title: "Production Slate 2025 — Father Mother Sister Brother",
      publisher: "Fís Éireann / Screen Ireland",
      url: "https://www.screenireland.ie/slate-catalogue-2025",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Institutional production slate supporting Dublin as the Irish location, Hail Mary Pictures, photography/editor credits and named financing/support partners."
    },
    {
      title: "Interview: Jim Jarmusch on Father Mother Sister Brother",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-jim-jarmusch-on-father-mother-sister-brother/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Jarmusch states that each section had about ten shooting days and identifies Elmes/Friedberg for New Jersey and Le Saux/Bittner Rosser for Ireland and Paris."
    },
    {
      title: "Father Mother Sister Brother — A film by Jim Jarmusch",
      publisher: "Saint Laurent Productions",
      url: "https://saintlaurentproductions.ysl.com/father-mother-sister-brother",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production page supporting the triptych description, New Jersey/Dublin/Paris geography and principal craft credits."
    },
    {
      title: "Jim Jarmusch on Father Mother Sister Brother at Venice",
      publisher: "Variety",
      url: "https://variety.com/2025/film/global/jim-jarmusch-mubi-israel-father-mother-sister-brother-venice-film-festival-1236502496/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "Trade reporting from the Venice press conference supporting the New Jersey union-radius location/budget constraint and Jarmusch's rapid writing account; used only for those bounded claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
