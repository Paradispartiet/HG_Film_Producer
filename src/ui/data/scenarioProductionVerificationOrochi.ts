import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const orochiProductionCaseVerification = {
  scenarioId: "scenario_orochi_1925",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "BFI, the National Film Archive of Japan, Matsuda Film, Institut Lumière and Musashino Art University's image library support Orochi / 雄呂血 as a 1925 Japanese silent jidaigeki directed by Buntaro Futagawa, scripted by Rokuhei Susukita and produced through Tsumasaburo Bando's independent Bantsuma Production. Lumière identifies Seizo Ishino as cinematographer and Jinbei Kawamura as production designer and records a modern 4K restoration by Matsuda Film and Nihon Eiga Broadcasting supervised by NFAJ. BFI situates the film within the transition toward action-oriented chanbara, identifies tracking shots, close-ups and rapid cutting, and records both Bando's preservation of the negative and Shunsui Matsuda's later 1965 benshi commentary tradition. NFAJ independently documents Bando's 1925 move into independent star-company production. The Production Case therefore teaches star-producer economics, anti-feudal dramatic structure, action choreography, craft attribution, benshi exhibition and preservation/version history without converting samurai hierarchy or violence into automatic rewards or treating later narration/restoration as synchronized 1925 production sound.",
  sources: [
    {
      title: "A great Japanese film for every year – from 1925 to now: Orochi",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/great-japanese-film-every-year-from-1925-now",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "BFI identifies Futagawa, Bando's independent-company production and preservation of the negative, the massive loss of 1920s Japanese films, Orochi's chanbara status, and Shunsui Matsuda's 1965 benshi commentary tradition."
    },
    {
      title: "10 great films of 1925: Orochi",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1925",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI describes the antihero's social crisis and critique of feudalism and identifies frenetic swordfight construction using fast editing, tracking shots and close-ups as part of the transition from earlier Kabuki-influenced swordfighting films toward action-heavy chanbara."
    },
    {
      title: "NFAJ Digital Gallery No. 28 – Prewar Japanese film studios: Bantsuma Kanto Studio",
      publisher: "National Film Archive of Japan",
      url: "https://www.nfaj.go.jp/onlineservice/digital-gallery/nfaj-digital-gallery-no-28/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "NFAJ documents Tsumasaburo Bando's 1925 independence as a pioneering star-production move and the subsequent development of his own studio infrastructure, grounding Orochi in a concrete industrial transition rather than stardom alone."
    },
    {
      title: "Top 16 Japanese Films – Orochi (Serpent)",
      publisher: "Matsuda Film Productions",
      url: "https://www.matsudafilm.com/matsuda/e_pages/e_ee.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "sound"],
      note: "Matsuda Film identifies 1925, Bantsuma Production, director Futagawa Buntaro, script by Susukita Rokuhei, Bando Tsumasaburo with Mori Shizuko and Tamaki Utako, an approximately 80-minute presentation and the work's continuing benshi-performance context."
    },
    {
      title: "Orochi – Lumière Festival",
      publisher: "Institut Lumière",
      url: "https://www.festival-lumiere.org/manifestations/orochi.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Lumière credits Futagawa, Susukita, Seizo Ishino, Jinbei Kawamura and Bantsuma Productions Nara, records black-and-white 1.33 presentation and documents the 4K restoration by Matsuda Film and Nihon Eiga Broadcasting under National Film Archive of Japan supervision."
    },
    {
      title: "Orochi / Gyakuryu – image-library record",
      publisher: "Musashino Art University Museum & Library",
      url: "https://img-lib.musabi.ac.jp/search/index.php/document/detail/12436",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "sound"],
      note: "University collection record identifies Orochi as a 1925 Japanese period film by Futagawa with Shozo Makino in general supervision and Rokuhei Susukita as screenwriter, and explicitly labels the media as silent with a later Japanese benshi track."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
