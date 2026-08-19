import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const blackGirlProductionCaseVerification = {
  scenarioId: "scenario_black_girl_1966",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "The Criterion Collection, The Film Foundation, La Cinémathèque française and BFI support Black Girl as Ousmane Sembène's 1966 first feature and as a materially specific Senegalese post-independence production. Criterion credits Sembène as director/writer from his own prose, André Zwoboda as producer and production manager, Christian Lacoste as director of photography, André Gaudier as editor, Ibrahima Barro and Pathé Diop as assistant directors, M’Bissine Thérèse Diop as Diouana and Toto Bissainthe as Diouana's voice, with participation by the Ministère de la Coopération. Film Foundation identifies Les Films Domirev and Senegal; Cinémathèque records a Senegal-France production and Filmi Domirev/Les Actualités Françaises, so production-credit variance is preserved as provenance. Criterion scholarship places the film after independence and the lifting of colonial-era restrictions, records the Ministry cinema bureau's production-funding rejection because of the screenplay's subject, and documents Sembène's term mégotage for budget-scraping conditions. The same scholarship records that funding constraints forced Diouana's interior monologue to be dubbed in French, while Criterion credits Toto Bissainthe as the voice. Criterion also records Diop as a nonprofessional performer and seamstress who supplied much of Diouana's clothing. The case canonically uses Criterion/BFI's 59-minute black-and-white form while preserving Film Foundation's 65-minute and Cinémathèque's 65/70-minute listings as runtime provenance. It does not invent camera bodies, lenses, stock, lighting ratios, microphones, complete sound-recording chains, exact shooting schedules or unsupported location-scene assignments.",
  sources: [
    {
      title: "Black Girl",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28849-black-girl",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion supplies the Senegal-France 1966 record, 59-minute black-and-white 1.37:1 form, Sembène, Zwoboda, Lacoste, Gaudier, assistant directors, principal cast, Toto Bissainthe's voice credit and Ministry participation, plus later 4K restoration." 
    },
    {
      title: "Black Girl: Self, Possessed",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/4402-black-girl-self-possessed",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion scholarship places the production in post-independence Senegal, documents colonial-era infrastructure restrictions, the Ministry cinema bureau's funding rejection, Sembène's mégotage concept, Dakar/French Riviera geography, Diop's nonprofessional performance and clothing contribution, and funding-driven French dubbing of Diouana's interior monologue." 
    },
    {
      title: "10 Things I Learned: Black Girl",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5582-10-things-i-learned-black-girl",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion production notes document Sembène's Soviet training, the newspaper-report inspiration, Diop's discovery and seamstress practice, her own clothes in the film and her contribution to staging the suicide scene and prop blood." 
    },
    {
      title: "Black Girl / La Noire de...",
      publisher: "The Film Foundation – World Cinema Project",
      url: "https://www.film-foundation.org/world-cinema",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The Film Foundation identifies Sembène, André Gaudier, Christian Lacoste, Ibrahima Barro, principal cast, Senegal as country of production, Les Films Domirev, black-and-white presentation, a 65-minute runtime and the World Cinema Project restoration." 
    },
    {
      title: "La Noire de...",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/63130.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "La Cinémathèque records the Senegal-France production, Sembène's prose source and dialogue, André Zwoboda, Christian Lacoste, André Gaudier, Ibrahima Barro, production companies Filmi Domirev and Les Actualités Françaises, principal cast and institutional 65/70-minute listings." 
    },
    {
      title: "10 great films from 1966",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1966",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "BFI identifies Sembène's debut feature, Dakar-to-France migration structure, Christian Lacoste cinematography and the 1966 Prix Jean Vigo and Tanit d'Or, kept as downstream reception evidence." 
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
