import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const classicalHollywoodVerificationRecords = [
  {
    scenarioId: "scenario_stagecoach_1939",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Walter Wanger production, ensemble adaptation, Monument Valley location system, Bert Glennon photography, Yakima Canutt stunt work, continuity editing, folk-song score and western legacy are supported by AFI, BFI and Library of Congress records.",
    sources: [
      {
        title: "Stagecoach", publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/4173-STAGECOACH", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI verifies Walter Wanger Productions, Dudley Nichols, Bert Glennon, the editors, Monument Valley and other locations, Yakima Canutt's stunt credit, sound format, folk-song score and release history."
      },
      {
        title: "Stagecoach (1939)", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/7074fd5e-0658-5aaa-ab2b-49b0246858c3/stagecoach", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "BFI identifies the film as Ford's first sound western, connects the ensemble to Monument Valley and highlights the chase as a model of action editing."
      },
      {
        title: "Where to begin with John Ford", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/where-begin-with-john-ford", sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing"],
        note: "BFI explains the film's return to prestige western production, Ford's first Monument Valley use, the relation between social ensemble and landscape, and Yakima Canutt's chase construction."
      },
      {
        title: "National Film Registry descriptions and essays", publisher: "Library of Congress",
        url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/", sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "The Library of Congress records Stagecoach as a Registry title and describes Ford's Monument Valley model, ensemble journey and long influence on western and action storytelling."
      }
    ]
  },
  {
    scenarioId: "scenario_the_wizard_of_oz_1939",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's MGM production pipeline, Baum adaptation, pre-scored songs, sepia-to-Technicolor world change, coordinated design, costume, makeup, effects, editing and sound are supported by AFI, BFI and Library of Congress records.",
    sources: [
      {
        title: "The Wizard of Oz", publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/7892-THE-WIZARD-OF-OZ", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI documents MGM, the credited and uncredited writers and directors, Technicolor photography, art and makeup departments, pre-scoring, songs, effects, production dates and release history."
      },
      {
        title: "The Wizard of Oz (1939)", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/f2142b94-8e66-581d-88d3-d7e2fc5a2f17/the-wizard-of-oz", sourceKind: "film_institute",
        supports: ["overall", "cinematography", "sound"],
        note: "BFI identifies the MGM fantasy's sepia Kansas and Technicolor Oz structure, integrated songs, Judy Garland performance and later television-driven canonical status."
      },
      {
        title: "Hidden treasure in a film can: notes on our Technicolor rediscovery", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/technicolor-fragments-louise-brooks", sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "BFI's archive explanation distinguishes the three-strip Technicolor process made famous by The Wizard of Oz and documents the photographic and printing logic behind the color system."
      },
      {
        title: "National Film Registry descriptions and essays", publisher: "Library of Congress",
        url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/", sourceKind: "film_institute",
        supports: ["overall", "cinematography", "sound"],
        note: "The Library of Congress Registry record supports the film's preservation status and enduring importance as an American musical fantasy built through color, performance and song."
      }
    ]
  },
  {
    scenarioId: "scenario_citizen_kane_1941",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's RKO and Mercury production, witness-based nonlinear screenplay, Gregg Toland deep-focus photography, ceilinged sets, Robert Wise transitions, overlapping dialogue, newsreel method, optical work and Bernard Herrmann score are supported by AFI, BFI and MoMA.",
    sources: [
      {
        title: "Citizen Kane", publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Catalog/moviedetails/27624", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI verifies Mercury and RKO production, Welles and Mankiewicz, Gregg Toland, Robert Wise, Van Nest Polglase, Bernard Herrmann, RCA sound, production dates and the Hearst controversy."
      },
      {
        title: "AFI Movie Club: Citizen Kane", publisher: "American Film Institute",
        url: "https://www.afi.com/news/afi-movie-club-citizen-kane/", sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "sound"],
        note: "AFI documents the deep-focus collaboration, low camera positions, built ceilings, Welles's production control and Bernard Herrmann's debut feature score."
      },
      {
        title: "Orson Welles. Citizen Kane. 1941", publisher: "Museum of Modern Art",
        url: "https://www.moma.org/collection/works/304183", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "MoMA analyzes the flashback biography, newsreel and radio influence, stage lighting, cultural scope and continuing archival significance of Welles's first feature."
      },
      {
        title: "Citizen Kane (1941)", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/f4c92833-af39-5cd6-a41e-8df5933d0dc1/citizen-kane", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "BFI connects RKO's artistic license to the film's nonlinear structure, deep focus, abstracted angles and overlapping dialogue, and documents its long critical position."
      }
    ]
  },
  {
    scenarioId: "scenario_casablanca_1942",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Warner Bros. production, continuing screenplay revision, studio-built wartime crossroads, multinational ensemble, Arthur Edeson photography, Owen Marks continuity, Max Steiner score, source songs, effects and topical reception are supported by AFI, BFI, MoMA and Library of Congress records.",
    sources: [
      {
        title: "Casablanca", publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/27175-CASABLANCA", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI verifies Warner Bros., Hal Wallis, Curtiz, the three credited screenwriters, Arthur Edeson, Owen Marks, Carl Jules Weyl, Max Steiner, RCA sound, studio production and ending revisions."
      },
      {
        title: "Casablanca (1942)", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/61d5c0dc-151e-5c9c-92ef-4a3039aa82f2/casablanca", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "BFI describes the Warner lot's complete Casablanca world, the multinational wartime ensemble, the anti-Nazi topical context and the film's synthesis of classical studio departments."
      },
      {
        title: "National Film Registry descriptions and essays", publisher: "Library of Congress",
        url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "sound"],
        note: "The Library of Congress records the film's Registry status, wartime audience context, still-developing ending, dialogue and relation between romance and contemporary political events."
      },
      {
        title: "Michael Curtiz's Casablanca", publisher: "Museum of Modern Art",
        url: "https://www.moma.org/explore/inside_out/2011/05/31/michael-curtizs-casablanca/", sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "directing"],
        note: "MoMA's film-curator notes place Curtiz and the screenplay inside classical Hollywood authorship and document the film's lasting reception as collaborative studio cinema."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
