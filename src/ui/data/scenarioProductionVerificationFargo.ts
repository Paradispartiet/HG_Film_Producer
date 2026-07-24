import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fargoVerificationRecords = [
  {
    scenarioId: "scenario_fargo_1996",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "Fargo's fabricated true-story frame, Minnesota regional authorship, Working Title and Gramercy production, smaller post-Hudsucker crew, storyboard collaboration, restrained Arriflex BL-4 and Eastman 5293 photography, practical-source lighting, real-location design, snow-chasing and manufactured snow, carefully constructed ensemble performance, Roderick Jaynes editing, Skip Lievsay sound credits, Carter Burwell's first self-orchestrated full orchestral score and major institutional legacy are supported by contemporary craft reporting, filmmaker interviews and film-institute archives.",
    sources: [
      {
        title: "Fargo: Cold-Blooded Scheming",
        publisher: "American Cinematographer",
        url: "https://theasc.com/articles/fargo-cold-blooded-scheming",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The original March 1996 craft article documents the smaller crew, early storyboard collaboration, observational camera restraint, longer lenses, snow and location strategy, Arriflex BL-4 and Eastman 5293 package, practical and natural lighting, manufactured snow, Rick Heinrichs collaboration and detailed rooftop and vehicle rigs."
      },
      {
        title: "Hell freezes over: the Coen brothers on Fargo",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/sight-and-sound/features/joel-ethan-coen-brothers-fargo-1996",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The May 1996 Sight and Sound interview records the Coens' regional childhood references, character and casting intentions, car-sales experience, local actors, kidnapping tradition, food and accent detail, the blank snow-sky visual rule and the deliberately unresolved ransom-money thread."
      },
      {
        title: "Fargo",
        publisher: "American Film Institute",
        url: "https://catalog.afi.com/Film/60219-FARGO",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI confirms Working Title Films, Gramercy Pictures, Joel and Ethan Coen's direction, production and screenplay credits, Roger Deakins photography, Rick Heinrichs design, Roderick Jaynes editing, Carter Burwell music, principal cast, release context and AFI canon recognition."
      },
      {
        title: "Fargo",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/fargo",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The national film database independently records the United States production, Working Title company, Joel Coen direction, Coen screenplay, Roger Deakins cinematography, Roderick Jaynes editing, Carter Burwell music, Rick Heinrichs production design and principal cast."
      },
      {
        title: "Closer to the Life Than the Conventions of Cinema: Interview with the Coen Brothers",
        publisher: "Cambridge University Press",
        url: "https://www.cambridge.org/core/books/abs/coen-brothers-fargo/closer-to-the-life-than-the-conventions-of-cinema-interview-with-the-coen-brothers-conducted-in-cannes-on-may-16-1996/0ED806DBF86325321DD9F95D58B88AB5",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "The Cannes interview distinguishes the invented characters and details from the film's claim of factual inspiration, explains why no documentary murder research was undertaken and records the evocative title choice and audience effect of presenting fiction as reality."
      },
      {
        title: "Fargo — Music Production Notes",
        publisher: "Carter Burwell",
        url: "https://www.carterburwell.com/projects/Fargo.shtml",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "sound"],
        note: "Burwell's official production notes identify Fargo as his first full orchestral score without a separate orchestrator and document the grave musical conception, including the use of the traditional Scandinavian tune The Lost Sheep."
      },
      {
        title: "Fargo",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/fargo/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official Cannes archive confirms the 1996 Competition selection, Joel Coen's Best Director award and the screenplay, cinematography, editing, production-design, music and principal-cast credits."
      },
      {
        title: "The 69th Academy Awards — 1997",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1997/F",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The Academy record documents seven nominations and two wins: Frances McDormand for lead actress and Ethan and Joel Coen for original screenplay, alongside nominations for picture, directing, supporting actor, cinematography and editing."
      },
      {
        title: "Complete National Film Registry Listing",
        publisher: "Library of Congress",
        url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The Library of Congress records Fargo's addition to the National Film Registry in 2006, establishing its preservation status and durable significance within American film history."
      },
      {
        title: "Interview: Roger and James Deakins on Cinematography and Navigating a Changing Film World",
        publisher: "The Reveal",
        url: "https://thereveal.film/interview-roger-and-james-deakins-on-cinematography-and-navigating-a-changing-film-world/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Roger Deakins revisits Fargo's snow-white noir compositions and explains how the planned crowded parking-lot image changed on location into the isolated overhead view of Jerry's lone car, demonstrating the production's prepared but responsive visual method."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
