import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const unChienAndalouProductionCaseVerification = {
  scenarioId: "scenario_un_chien_andalou_1929",
  status: "verified",
  verifiedAt: "2026-08-16",
  summary: "La Cinémathèque française, MoMA and BFI support Un Chien Andalou as the small-scale Buñuel-Dalí collaboration first presented at Studio des Ursulines in Paris on 6 June 1929. Cinémathèque credits Luis Buñuel as director, producer and editor, Buñuel and Salvador Dalí as screenwriters, Pierre Braunberger as executive producer, Albert Duverger as director of photography, Pierre Schildknecht as designer and Studio-Films as production company/original distributor. MoMA documents the pair's collaborative dream-derived scenario and Surrealist context, while BFI identifies montage, dissolves, superimpositions, slow motion, discontinuous editing and parodic intertitles as the film's free-associative formal system and notes its small family-financing context. The Production Case therefore teaches alternative financing, collaborative Surrealist image construction and discontinuous montage without reducing Surrealism to randomness. The notorious bodily and animal-harm imagery is retained only as historical/ethical evidence: gameplay explicitly forbids reproducing injury to people or animals and uses safe substitution, analysis or non-harmful effects instead.",
  sources: [
    {
      title: "Un chien andalou",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/47197.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record identifying Buñuel, Dalí, Studio-Films, Pierre Braunberger, Albert Duverger, Pierre Schildknecht, principal cast, Buñuel's editing, the 6 June 1929 Studio des Ursulines presentation and a later digital restoration from original-negative material."
    },
    {
      title: "Salvador Dalí: Creator/Collaborator",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/film/610",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "MoMA frames Un Chien Andalou as Dalí's first filmmaking partnership with Buñuel and emphasizes collaboration, Surrealist pictorial strategies and cinema's montage/time capacities rather than lone-author production."
    },
    {
      title: "Luis Buñuel",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/collection/artists/31258",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "MoMA identifies the film as Buñuel's influential Surrealist collaboration with Dalí, made in Paris and organized as irrational, dream-like visual poetry intended to provoke instinctive attraction and repulsion."
    },
    {
      title: "10 great French avant-garde films of the 1920s",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-french-avant-garde-films-1920s",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "cinematography"],
      note: "BFI records the 1929 film's small family-financing context and identifies montage, dissolves, superimpositions, slow motion, discontinuous editing and parodic intertitles as techniques organizing free-associative dream logic. The same source documents the shocking bodily/animal imagery that the Production Case keeps historical rather than imitable."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
