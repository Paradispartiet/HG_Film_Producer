import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const myBeautifulLaundretteProductionCaseVerification = {
  scenarioId: "scenario_my_beautiful_laundrette_1985",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Film4, BFI and Criterion support My Beautiful Laundrette as a 1985 Channel 4/Film on Four and Working Title production originally conceived for television and only redirected toward theatrical distribution after strong Edinburgh International Film Festival reception. Film4 credits Stephen Frears, Hanif Kureishi and producers Tim Bevan and Sarah Radclyffe and catalogs the film at 97 minutes. Criterion documents that Working Title produced it on a six-week schedule for approximately $900,000, that Oliver Stapleton photographed it on 16 mm, and that Edinburgh reception led to a UK cinema release using 35 mm blow-up prints through Mainline Pictures. This television-origin 16 mm production is kept separate from the later 35 mm presentation layer. Criterion's film credits identify Stapleton for cinematography, Mick Audsley for editing, Hugo Luczyc Wyhowski for production design, Lindy Hemming for costume, Elaine Carew for makeup, Albert Bailey as sound recordist and Ludus Tonalis for music. BFI documents the film's Channel 4-backed historical role and identifies concrete South London geography including the Vauxhall/South Lambeth laundrette and Battersea locations. BFI's account of David Rose and Film on Four establishes the broadcaster-production institution without collapsing it into Working Title's production role. Kureishi's screenplay is treated as authored contemporary fiction informed by British Pakistani experience and a laundrette-business acquaintance, not as transparent autobiography or documentary. Runtime records differ slightly: Film4 and BFI use 97 minutes while Criterion catalogs 98; the case uses 97 canonically because two institutional records converge and preserves 97/98 only as catalog provenance. No unsupported camera body, lens package, stock emulsion, lighting ratios, recorder/microphone models, detailed daily schedule, currency-normalized budget or improvisation workflow is invented.",
  sources: [
    {
      title: "My Beautiful Laundrette",
      publisher: "Film4 Productions",
      url: "https://www.film4productions.com/productions/1985/my-beautiful-laundrette",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Film4's archive records the 1985 film at 97 minutes and credits Stephen Frears, Hanif Kureishi and producers Tim Bevan and Sarah Radclyffe, grounding the Channel 4/Film4 production authority."
    },
    {
      title: "My Beautiful Laundrette: Postcolonialism in the Wash",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/3634-my-beautiful-laundrette-postcolonialism-in-the-wash",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Criterion documents television conception, Working Title production, six-week schedule, approximately $900,000 budget, Oliver Stapleton's 16 mm photography, Edinburgh reception, subsequent 35 mm blow-up and Mainline theatrical rollout."
    },
    {
      title: "My Beautiful Laundrette",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28044-my-beautiful-laundrette",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion's film record credits Frears, Kureishi, Bevan, Radclyffe, Stapleton, Mick Audsley, Hugo Luczyc Wyhowski, Lindy Hemming, Elaine Carew, Albert Bailey and Ludus Tonalis and catalogs a 98-minute presentation."
    },
    {
      title: "40 years of My Beautiful Laundrette: how the London locations look today",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/my-beautiful-laundrette-london-locations",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI documents the real South London production geography, including the laundrette on Wilcox Road in Vauxhall/South Lambeth and Papa's Battersea environment, supporting location as a material production choice."
    },
    {
      title: "David Rose, influential TV producer and Film Four founder, dies age 92",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/news/david-rose-tv-producer-film-four-founder-dies",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI documents David Rose's creation of Film on Four at Channel 4 and names My Beautiful Laundrette among the strand's defining films, supporting the broadcaster-backed production context."
    },
    {
      title: "10 Things I Learned: My Beautiful Laundrette",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5590-10-things-i-learned-my-beautiful-laundrette",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Criterion's production notes identify the film as a career-launching project for Kureishi, Bevan, Radclyffe and Working Title and record Kureishi's laundrette-owner acquaintance as a development inspiration."
    },
    {
      title: "My Beautiful Laundrette",
      publisher: "BFI Distribution",
      url: "https://www.bfi.org.uk/bfi-distribution/bfi-international-distribution/touring-programmes/love",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI's distribution record catalogs the film at 97 minutes and preserves its later repertory circulation, used here only to support canonical runtime convergence and downstream release history."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
