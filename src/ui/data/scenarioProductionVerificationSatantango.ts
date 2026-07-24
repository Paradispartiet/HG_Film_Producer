import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const satantangoVerificationRecords = [
  {
    scenarioId: "scenario_satantango_1994",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's circular literary adaptation, post-socialist European co-production, 120-day seasonal shoot, assembled industrial geography, mixed professional-amateur cast, black-and-white 35mm long-take photography, on-set editing, practical weather, environmental sound, precomposed music and 4K restoration are supported by institutional records and direct filmmaker testimony.",
    sources: [
      {
        title: "Satantango",
        publisher: "National Film Institute Hungary",
        url: "https://nfi.hu/en/films/satantango.html",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official film record confirms 35mm capture, 1.66:1 framing, principal creative credits, Hungarian-German-Swiss production companies, 1994 release, Caligari Prize and extensive international festival circulation."
      },
      {
        title: "Sátántangó",
        publisher: "National Film Institute Hungary",
        url: "https://nfi.hu/alapfilmek-1/alapfilmek-filmek/jatekfilm/satantango.html",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "NFI's canonical-film study documents the tango-shaped adaptation, 120 shooting days across two years, late-autumn and early-spring dawn-and-dusk work, nearly 100,000 metres of stock, approximately 150 scenes, planned tracks, actor improvisation, mixed professional and amateur casting and the multi-location production design."
      },
      {
        title: "Béla Tarr on Sátántangó at 30",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/interviews/bela-tarr-satantango-werckmeister-harmonies",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Tarr describes the two years of preproduction, 120 shooting days, the physical and collective challenge of production, the novel's six-forward and six-back structure and his principle that a film's duration follows what it needs to express."
      },
      {
        title: "Interview: Béla Tarr, the Complete Works",
        publisher: "Film Comment",
        url: "https://www.filmcomment.com/interview-bela-tarr-the-complete-works/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Tarr explains the political and production delay after Damnation, the project's return after the Berlin Wall fell, preservation of Krasznahorkai's circular structure and the search for a visual method capable of translating the novelist's worldview rather than illustrating prose literally."
      },
      {
        title: "Waiting for the Prince – An Interview with Béla Tarr",
        publisher: "Senses of Cinema",
        url: "https://www.sensesofcinema.com/2001/feature-articles/tarr-2/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "sound"],
        note: "Tarr details his preference for tracks and Steadicam, long track construction, artificial wind and other controlled environmental conditions, and Mihály Víg's precomposed two-theme music, which was played during shooting and treated as a character."
      },
      {
        title: "Béla Tarr Interview",
        publisher: "DocNomads",
        url: "https://www.docnomads.eu/academic-board/43-the-docnomads-association-dna/news/365-bela-tarr-interview",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing"],
        note: "Tarr explains that Ágnes Hranitzky monitored rhythm on set, that editing is built inside camera movement from close-up to wide view and back, and that extended takes create collective concentration across actors, camera and crew."
      },
      {
        title: "Out of the shadows",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/2001/mar/24/books.guardianreview",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing"],
        note: "The interview records Ágnes Hranitzky's concise account of editing Tarr's extended takes—knowing where not to cut—and connects the later formal method to the pair's earlier social-realist attention to housing, poverty and ordinary lives."
      },
      {
        title: "Béla Tarr on Sátántangó, Hollywood and Digital",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/108340-bela-tarr-on-satantango-hollywood-and-digital/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing"],
        note: "The 2019 restoration-era interview places Sátántangó's uncompromising photochemical method against contemporary digital production and records Tarr's resistance to treating long duration as a market adjustment or technical novelty."
      },
      {
        title: "Sátántangó",
        publisher: "Arbelos Films",
        url: "https://arbelosfilms.com/films/satantango/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The restoration distributor documents the twelve forward-and-back movements, Gábor Medvigy's black-and-white photography, Ágnes Hranitzky's collaboration and the 4K restoration made from the original 35mm camera negative with the Hungarian Filmlab."
      },
      {
        title: "Sátántangó",
        publisher: "Film at Lincoln Center",
        url: "https://www.filmlinc.org/films/satantango/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Film at Lincoln Center identifies the film as Tarr's international breakthrough, describes its twelve interlocking chapters and precisely choreographed long takes, and records presentation of the Arbelos-Hungarian Filmlab 4K restoration."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
