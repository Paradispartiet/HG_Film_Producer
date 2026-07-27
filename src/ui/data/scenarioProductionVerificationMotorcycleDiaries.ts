import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const motorcycleDiariesVerificationRecords = [
  {
    scenarioId: "scenario_the_motorcycle_diaries_2004",
    status: "verified",
    verifiedAt: "2026-07-27",
    summary: "The case's two-memoir adaptation, five-year development and three-year research process, route-following multi-country production, regional actors and non-actors, improvisation, practical period environments, mobile Super 16 and 35mm workflow, naturalistic lighting, Daniel Rezende editing, detailed location sound, Gustavo Santaolalla score and major festival and awards afterlife are supported by filmmaker interviews and institutional, festival, distributor and awards records.",
    sources: [
      {
        title: "The Motorcycle Diaries - BFI Southbank Programme Notes",
        publisher: "British Film Institute",
        url: "https://bfidatadigipres.github.io/big%20screen%20classics/2022/09/10/motorcycle-diaries/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The BFI programme reproduces Walter Salles's detailed account of five years of development, three years of research, route retracing, structured screenplay plus improvisation, regional non-actors, Martin Chambi portrait influence, small-crew Super 16 work, natural lighting, Amazon filming, motorcycles and complete principal art, costume, music and sound credits."
      },
      {
        title: "One For Road: Focus Book Club Takes Along The Motorcycle Diaries",
        publisher: "Focus Features",
        url: "https://www.focusfeatures.com/article/focusbookclub-the-motorcycle-diaries_walter-salles",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Focus documents Robert Redford's role in securing the memoir, Salles's three-year research, the international adaptation, thirty locations filmed over three months along the historical route, regional actors and non-actors, Bernal and de la Serna's preparation and the film's international release and Academy recognition."
      },
      {
        title: "Walter Salles",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/2004/aug/26/features",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Salles explains that he travelled the route three times, resisted fixing every event in advance, kept the production open to improvisation after the motorcycle failed and filmed first-take encounters with people found along the route using a Super 16 camera."
      },
      {
        title: "Script to Screen: Motorcycle Diaries",
        publisher: "Austin PBS",
        url: "https://www.pbs.org/video/script-to-screen-motorcycle-diaries-pgudi6/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Screenwriter José Rivera discusses adapting Guevara's story, balancing the road adventure with political awakening and developing the screenplay through collaboration with Walter Salles and Gael García Bernal."
      },
      {
        title: "Diarios de Motocicleta",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/diarios-de-motocicleta/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The official Cannes record confirms the 2004 competition selection, Argentina-Brazil-Chile-Peru-United States production identity, 126-minute runtime, Walter Salles direction, José Rivera screenplay, Éric Gautier photography and the shared Vulcain technical prize."
      },
      {
        title: "The Motorcycle Diaries",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/motorcykel-dagbog",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "DFI records the multinational production countries, FilmFour production, Walter Salles, José Rivera, Éric Gautier, Daniel Rezende, Gustavo Santaolalla, Carlos Conti and the 35mm widescreen colour and DTS theatrical specification."
      },
      {
        title: "What to Watch: 8 Sundance Films About Hitchhikers",
        publisher: "Sundance Institute",
        url: "https://www.sundance.org/blogs/what-to-watch-8-sundance-films-about-hitchhikers/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "Sundance identifies the film as a 2004 festival selection, traces it to the journals of Guevara and Granado and describes the nine-month South American trek as a transformation of the characters and the continent rather than a conventional heroic biography."
      },
      {
        title: "The 77th Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/2005",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "sound"],
        note: "The official Academy record documents José Rivera's adapted-screenplay nomination and the Oscar for Jorge Drexler's original song Al Otro Lado del Río, confirming the screenplay and music system's international recognition."
      },
      {
        title: "2005 Film Awards",
        publisher: "BAFTA",
        url: "https://www.bafta.org/awards/film/?award-year=2005",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "BAFTA records wins for film not in the English language and Gustavo Santaolalla's original music plus nominations for film, adapted screenplay, Éric Gautier cinematography, Gael García Bernal and Rodrigo de la Serna."
      },
      {
        title: "The Motorcycle Diaries: An Interview with Director Walter Salles",
        publisher: "Blackfilm",
        url: "https://www.blackfilm.com/20040917/features/waltersalles.shtml",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Salles discusses choosing Gael García Bernal and Rodrigo de la Serna, the density and physical contrast of their performances, their relationship to the historical travellers and the production's effort to discover the young men before later mythology fixed their identities."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
