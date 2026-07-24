import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const trainspottingVerificationRecords = [
  {
    scenarioId: "scenario_trainspotting_1996",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Renton-centred Irvine Welsh adaptation, £1.5 million local British production, Glasgow-for-Edinburgh location system, Calton Athletic addiction research, photochemical 1.85 image, practical subjective sets, kinetic edit, music-led structure and British-cultural breakthrough are supported by filmmaker interviews, institutional records, production archives and awards sources.",
    sources: [
      {
        title: "Choose ‘Trainspotting’: Ewan McGregor and Danny Boyle reflect on the life-changing film",
        publisher: "Associated Press",
        url: "https://apnews.com/article/trainspotting-movie-anniversary-8ea010fb9d826c8add70d3d6fad4c0fa",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Boyle and McGregor document the roughly £1.5 million budget, quick local production, decision to reject Hollywood offers, freedom created by limited financing, photochemical shooting rhythm, Goodfellas influence, soundtrack culture and Boyle-supervised 4K return."
      },
      {
        title: "The Trainspotting phenomenon... 20 years on",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/trainspotting-phenomenon-20-years",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "BFI places the film within 1990s British cinema, documents its ensemble and cultural impact, and supplies behind-the-scenes evidence of Boyle, Brian Tufano and the practical construction of subjective sequences."
      },
      {
        title: "Trainspotting",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/29627-trainspotting",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Criterion confirms the Boyle-Macdonald-Hodge-Tufano-Hirakubo-Quinn-Fleming craft team, colour 1.85 presentation, filmmaker-approved uncut 4K restoration, commentary, deleted scenes, design interview and soundtrack-artist reflections."
      },
      {
        title: "Trainspotting: behind the scenes by Danny Boyle, Ewan McGregor, Irvine Welsh and more",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/gallery/2021/oct/25/trainspotting-behind-the-scenes-danny-boyle-ewan-mcgregor-irvine-welsh-harvey-weinstein",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The production archive preserves Boyle's annotated novel, Welsh's script notes, Hodge's explanation of the toilet scene, design sketches, costume continuity and testimony about selecting Renton as the organizing voice."
      },
      {
        title: "Well spotted",
        publisher: "The Irish Times",
        url: "https://www.irishtimes.com/news/well-spotted-1.30690",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "The contemporary John Hodge interview explains the adaptation problem posed by Welsh's linked stories, the choice of Renton as central voice, the use of voice-over for interior language and the need to translate rather than reproduce the novel's verbal form."
      },
      {
        title: "Typescript screenplay of Trainspotting by John Hodge",
        publisher: "University of Edinburgh",
        url: "https://archives.collections.ed.ac.uk/repositories/2/resources/85641",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "The university archive records a 93-page March 1995 intermediate screenplay held between first draft and shooting script, grounding the adaptation's documented development and production-company provenance."
      },
      {
        title: "Trainspotting",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/trainspotting",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The national film database confirms the United Kingdom production, Irvine Welsh source novel, Channel Four Films and partner companies, and the principal producer, screenplay, cinematography, editing and production-design credits."
      },
      {
        title: "1996 Film Awards",
        publisher: "BAFTA",
        url: "https://www.bafta.org/awards/film/?award-year=1996",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "BAFTA records John Hodge's adapted-screenplay win and the film's nomination for outstanding British film, grounding its immediate industrial recognition and the status of the adaptation."
      },
      {
        title: "The 69th Academy Awards — 1997",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1997/F",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The Academy archive records Trainspotting's nomination for John Hodge's screenplay based on previously published material, supporting the adaptation's international reception and legacy."
      },
      {
        title: "Trainspotting",
        publisher: "British Board of Film Classification",
        url: "https://www.bbfc.co.uk/release/trainspotting-q29sbgvjdglvbjpwwc0zndmxmdu",
        sourceKind: "film_institute",
        supports: ["overall", "editing", "sound"],
        note: "BBFC records the original PolyGram cinema and physical-media classifications, running-time variants, cuts, later uncut releases and extensive documentary, interview, deleted-scene and outtake materials across the film's distribution history."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
