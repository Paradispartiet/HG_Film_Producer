import type {
  AudienceSegmentType,
  CriticProfileType,
  FestivalTier,
  ReleaseChannel,
  ReviewSentiment
} from "../domain/release.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type ProjectLabel = "first film" | `film ${number}`;

interface StudioCareerReleaseCopy {
  readonly panel: {
    readonly eyebrow: string;
    readonly heading: (projectLabel: ProjectLabel) => string;
    readonly description: string;
    readonly lockedCut: string;
    readonly quality: string;
    readonly ready: string;
    readonly readyHint: string;
    readonly releaseButton: (projectLabel: ProjectLabel) => string;
    readonly errorFallback: string;
    readonly validation: {
      readonly strategyAndFestival: string;
      readonly strategy: string;
      readonly festival: string;
    };
    readonly metrics: {
      readonly filmQuality: string;
      readonly audienceAppeal: string;
      readonly criticalAppeal: string;
      readonly strategyScore: string;
    };
  };
  readonly strategy: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly description: string;
    readonly channels: Readonly<Record<ReleaseChannel, string>>;
    readonly audienceSegments: Readonly<Record<AudienceSegmentType, string>>;
    readonly reach: string;
    readonly risk: string;
    readonly prestige: string;
    readonly cost: string;
  };
  readonly festival: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly description: string;
    readonly tiers: Readonly<Record<FestivalTier, string>>;
    readonly prestige: string;
    readonly audience: string;
    readonly fee: string;
    readonly selected: string;
    readonly notSelected: string;
  };
  readonly reviews: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly criticTypes: Readonly<Record<CriticProfileType, string>>;
    readonly sentiments: Readonly<Record<ReviewSentiment, string>>;
    readonly reputation: string;
    readonly prestige: string;
  };
  readonly audience: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly segmentTypes: Readonly<Record<AudienceSegmentType, string>>;
    readonly interest: string;
    readonly satisfaction: string;
    readonly wordOfMouth: string;
    readonly viewers: string;
  };
  readonly revenue: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly breakEven: string;
    readonly belowBreakEven: string;
    readonly grossRevenue: string;
    readonly marketingSpend: string;
    readonly distributionCost: string;
    readonly netRevenue: string;
    readonly roi: string;
  };
  readonly awards: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly nominations: string;
    readonly wins: string;
    readonly prestigeGain: string;
    readonly audienceGain: string;
    readonly none: string;
  };
  readonly outcome: {
    readonly eyebrow: string;
    readonly releasedHeading: (projectLabel: ProjectLabel) => string;
    readonly nextStep: (projectLabel: ProjectLabel) => string;
    readonly overall: string;
    readonly scores: {
      readonly strategy: string;
      readonly festival: string;
      readonly reviews: string;
      readonly audience: string;
      readonly revenue: string;
      readonly awards: string;
    };
    readonly reputationDelta: string;
    readonly prestigeDelta: string;
    readonly audienceFit: string;
    readonly riskFit: string;
  };
}

export const STUDIO_CAREER_RELEASE_COPY: Readonly<Record<FilmWorkLanguage, StudioCareerReleaseCopy>> = {
  en: {
    panel: {
      eyebrow: "Distribution & festivals",
      heading: (projectLabel) => `Release ${formatProjectLabel("en", projectLabel)}`,
      description: "Choose the route to market and one premiere submission. The release engine will resolve the complete deterministic outcome.",
      lockedCut: "Locked cut",
      quality: "quality",
      ready: "Ready for release?",
      readyHint: "Both selections are required. Results are deterministic and final for this run.",
      releaseButton: (projectLabel) => `Release ${formatProjectLabel("en", projectLabel)}`,
      errorFallback: "The film could not be released.",
      validation: {
        strategyAndFestival: "Choose one release strategy and one festival before releasing the film.",
        strategy: "Choose one release strategy before releasing the film.",
        festival: "Choose one festival before releasing the film."
      },
      metrics: { filmQuality: "Film quality", audienceAppeal: "Audience appeal", criticalAppeal: "Critical appeal", strategyScore: "Strategy score" }
    },
    strategy: {
      eyebrow: "Distribution route",
      heading: "Choose a release strategy",
      description: "Balance reach, financial exposure, and the long-term prestige potential of the film.",
      channels: { festival: "festival", theatrical_limited: "limited theatrical", theatrical_wide: "wide theatrical", streaming: "streaming", tv: "TV", educational: "educational", direct_digital: "direct digital" },
      audienceSegments: { broad: "broad", arthouse: "arthouse", genre_fans: "genre fans", youth: "youth", local: "local", streaming: "streaming", festival: "festival", international: "international" },
      reach: "Reach", risk: "Risk", prestige: "Prestige", cost: "Cost"
    },
    festival: {
      eyebrow: "Premiere circuit", heading: "Choose one festival", description: "Every release includes one deterministic submission. Prestige tiers demand stronger films.",
      tiers: { local: "local", national: "national", international: "international", prestige: "prestige" },
      prestige: "Prestige", audience: "Audience", fee: "Fee", selected: "Selected", notSelected: "Not selected"
    },
    reviews: {
      eyebrow: "Critical response", heading: "Reviews",
      criticTypes: { mainstream: "mainstream", arthouse: "arthouse", genre: "genre", industry: "industry", academic: "academic", local: "local", streaming: "streaming" },
      sentiments: { negative: "negative", mixed: "mixed", positive: "positive", acclaim: "acclaim" },
      reputation: "Reputation", prestige: "Prestige"
    },
    audience: {
      eyebrow: "Market response", heading: "Audience results",
      segmentTypes: { broad: "broad", arthouse: "arthouse", genre_fans: "genre fans", youth: "youth", local: "local", streaming: "streaming", festival: "festival", international: "international" },
      interest: "Interest", satisfaction: "Satisfaction", wordOfMouth: "Word of mouth", viewers: "Viewers"
    },
    revenue: {
      eyebrow: "Release P&L", heading: "Revenue result", breakEven: "Break-even", belowBreakEven: "Below break-even",
      grossRevenue: "Gross revenue", marketingSpend: "Marketing spend", distributionCost: "Distribution cost", netRevenue: "Net revenue", roi: "ROI"
    },
    awards: { eyebrow: "Awards circuit", heading: "Awards outcome", nominations: "Nominations", wins: "Wins", prestigeGain: "Prestige gain", audienceGain: "Audience gain", none: "None this release." },
    outcome: {
      eyebrow: "Final release evaluation",
      releasedHeading: (projectLabel) => `${formatProjectLabel("en", projectLabel)} released`,
      nextStep: (projectLabel) => projectLabel === "first film" ? "The release is resolved. Apply this result to the studio and career to close the film year." : `Next step: apply ${formatProjectLabel("en", projectLabel).toLowerCase()} to studio/career`,
      overall: "Overall",
      scores: { strategy: "Strategy", festival: "Festival", reviews: "Reviews", audience: "Audience", revenue: "Revenue", awards: "Awards" },
      reputationDelta: "Reputation delta", prestigeDelta: "Prestige delta", audienceFit: "Audience fit", riskFit: "Risk fit"
    }
  },
  nb: {
    panel: {
      eyebrow: "Distribusjon og festivaler",
      heading: (projectLabel) => `Lanser ${formatProjectLabel("nb", projectLabel)}`,
      description: "Velg veien til markedet og én premiereinnsending. Lanseringsmotoren beregner hele det deterministiske utfallet.",
      lockedCut: "Låst klipp", quality: "kvalitet", ready: "Klar for lansering?", readyHint: "Begge valg er påkrevd. Resultatene er deterministiske og endelige for denne runden.",
      releaseButton: (projectLabel) => `Lanser ${formatProjectLabel("nb", projectLabel)}`,
      errorFallback: "Filmen kunne ikke lanseres.",
      validation: { strategyAndFestival: "Velg én lanseringsstrategi og én festival før filmen lanseres.", strategy: "Velg én lanseringsstrategi før filmen lanseres.", festival: "Velg én festival før filmen lanseres." },
      metrics: { filmQuality: "Filmkvalitet", audienceAppeal: "Publikumsappell", criticalAppeal: "Kritikerappell", strategyScore: "Strategipoeng" }
    },
    strategy: {
      eyebrow: "Distribusjonsvei", heading: "Velg en lanseringsstrategi", description: "Balanser rekkevidde, økonomisk eksponering og filmens langsiktige prestisjepotensial.",
      channels: { festival: "festival", theatrical_limited: "begrenset kinolansering", theatrical_wide: "bred kinolansering", streaming: "strømming", tv: "TV", educational: "undervisning", direct_digital: "direkte digital" },
      audienceSegments: { broad: "bredt publikum", arthouse: "kunstfilm", genre_fans: "sjangerfans", youth: "unge", local: "lokalt", streaming: "strømming", festival: "festival", international: "internasjonalt" },
      reach: "Rekkevidde", risk: "Risiko", prestige: "Prestisje", cost: "Kostnad"
    },
    festival: {
      eyebrow: "Premierekrets", heading: "Velg én festival", description: "Hver lansering inkluderer én deterministisk innsending. Prestisjenivåene krever sterkere filmer.",
      tiers: { local: "lokal", national: "nasjonal", international: "internasjonal", prestige: "prestisje" },
      prestige: "Prestisje", audience: "Publikum", fee: "Avgift", selected: "Valgt", notSelected: "Ikke valgt"
    },
    reviews: {
      eyebrow: "Kritikermottakelse", heading: "Anmeldelser",
      criticTypes: { mainstream: "mainstream", arthouse: "kunstfilm", genre: "sjanger", industry: "bransje", academic: "akademisk", local: "lokal", streaming: "strømming" },
      sentiments: { negative: "negativ", mixed: "blandet", positive: "positiv", acclaim: "bejublet" },
      reputation: "Omdømme", prestige: "Prestisje"
    },
    audience: {
      eyebrow: "Markedsrespons", heading: "Publikumsresultater",
      segmentTypes: { broad: "bredt publikum", arthouse: "kunstfilm", genre_fans: "sjangerfans", youth: "unge", local: "lokalt", streaming: "strømming", festival: "festival", international: "internasjonalt" },
      interest: "Interesse", satisfaction: "Tilfredshet", wordOfMouth: "Muntlig spredning", viewers: "Seere"
    },
    revenue: {
      eyebrow: "Lanseringsresultat", heading: "Inntektsresultat", breakEven: "Nullpunkt nådd", belowBreakEven: "Under nullpunkt",
      grossRevenue: "Bruttoinntekt", marketingSpend: "Markedsføringskostnad", distributionCost: "Distribusjonskostnad", netRevenue: "Nettoinntekt", roi: "ROI"
    },
    awards: { eyebrow: "Priskrets", heading: "Prisutbytte", nominations: "Nominasjoner", wins: "Seire", prestigeGain: "Prestisjegevinst", audienceGain: "Publikumsgevinst", none: "Ingen denne lanseringen." },
    outcome: {
      eyebrow: "Endelig lanseringsevaluering",
      releasedHeading: (projectLabel) => `${formatProjectLabel("nb", projectLabel)} lansert`,
      nextStep: (projectLabel) => projectLabel === "first film" ? "Lanseringen er avgjort. Bruk resultatet på studio og karriere for å avslutte filmåret." : `Neste steg: bruk ${formatProjectLabel("nb", projectLabel).toLowerCase()} på studio/karriere`,
      overall: "Totalt",
      scores: { strategy: "Strategi", festival: "Festival", reviews: "Anmeldelser", audience: "Publikum", revenue: "Inntekt", awards: "Priser" },
      reputationDelta: "Endring i omdømme", prestigeDelta: "Endring i prestisje", audienceFit: "Publikumstreff", riskFit: "Risikotreff"
    }
  },
  fr: {
    panel: {
      eyebrow: "Distribution et festivals",
      heading: (projectLabel) => `Sortir ${formatProjectLabel("fr", projectLabel)}`,
      description: "Choisissez la voie de mise sur le marché et une soumission en première. Le moteur de sortie résoudra l’ensemble du résultat déterministe.",
      lockedCut: "Montage verrouillé", quality: "qualité", ready: "Prêt pour la sortie ?", readyHint: "Les deux choix sont requis. Les résultats sont déterministes et définitifs pour cette partie.",
      releaseButton: (projectLabel) => `Sortir ${formatProjectLabel("fr", projectLabel)}`,
      errorFallback: "Le film n’a pas pu sortir.",
      validation: { strategyAndFestival: "Choisissez une stratégie de sortie et un festival avant de sortir le film.", strategy: "Choisissez une stratégie de sortie avant de sortir le film.", festival: "Choisissez un festival avant de sortir le film." },
      metrics: { filmQuality: "Qualité du film", audienceAppeal: "Attrait public", criticalAppeal: "Attrait critique", strategyScore: "Score de stratégie" }
    },
    strategy: {
      eyebrow: "Voie de distribution", heading: "Choisir une stratégie de sortie", description: "Équilibrez la portée, l’exposition financière et le potentiel de prestige à long terme du film.",
      channels: { festival: "festival", theatrical_limited: "sortie limitée en salles", theatrical_wide: "sortie large en salles", streaming: "streaming", tv: "TV", educational: "éducatif", direct_digital: "numérique direct" },
      audienceSegments: { broad: "grand public", arthouse: "art et essai", genre_fans: "fans de genre", youth: "jeunes", local: "local", streaming: "streaming", festival: "festival", international: "international" },
      reach: "Portée", risk: "Risque", prestige: "Prestige", cost: "Coût"
    },
    festival: {
      eyebrow: "Circuit des premières", heading: "Choisir un festival", description: "Chaque sortie comprend une soumission déterministe. Les niveaux de prestige exigent des films plus solides.",
      tiers: { local: "local", national: "national", international: "international", prestige: "prestige" },
      prestige: "Prestige", audience: "Public", fee: "Frais", selected: "Sélectionné", notSelected: "Non sélectionné"
    },
    reviews: {
      eyebrow: "Accueil critique", heading: "Critiques",
      criticTypes: { mainstream: "grand public", arthouse: "art et essai", genre: "genre", industry: "industrie", academic: "académique", local: "local", streaming: "streaming" },
      sentiments: { negative: "négatif", mixed: "mitigé", positive: "positif", acclaim: "acclamé" },
      reputation: "Réputation", prestige: "Prestige"
    },
    audience: {
      eyebrow: "Réponse du marché", heading: "Résultats du public",
      segmentTypes: { broad: "grand public", arthouse: "art et essai", genre_fans: "fans de genre", youth: "jeunes", local: "local", streaming: "streaming", festival: "festival", international: "international" },
      interest: "Intérêt", satisfaction: "Satisfaction", wordOfMouth: "Bouche-à-oreille", viewers: "Spectateurs"
    },
    revenue: {
      eyebrow: "Résultat de sortie", heading: "Résultat des recettes", breakEven: "Seuil de rentabilité", belowBreakEven: "Sous le seuil de rentabilité",
      grossRevenue: "Recettes brutes", marketingSpend: "Dépenses marketing", distributionCost: "Coût de distribution", netRevenue: "Recettes nettes", roi: "ROI"
    },
    awards: { eyebrow: "Circuit des prix", heading: "Résultat des prix", nominations: "Nominations", wins: "Victoires", prestigeGain: "Gain de prestige", audienceGain: "Gain d’audience", none: "Aucun pour cette sortie." },
    outcome: {
      eyebrow: "Évaluation finale de la sortie",
      releasedHeading: (projectLabel) => projectLabel === "first film" ? "Premier film sorti" : `${formatProjectLabel("fr", projectLabel)} sorti`,
      nextStep: (projectLabel) => projectLabel === "first film" ? "La sortie est résolue. Appliquez ce résultat au studio et à la carrière pour clôturer l’année du film." : `Étape suivante : appliquer ${formatProjectLabel("fr", projectLabel)} au studio/à la carrière`,
      overall: "Global",
      scores: { strategy: "Stratégie", festival: "Festival", reviews: "Critiques", audience: "Public", revenue: "Recettes", awards: "Prix" },
      reputationDelta: "Écart de réputation", prestigeDelta: "Écart de prestige", audienceFit: "Adéquation public", riskFit: "Adéquation risque"
    }
  },
  pt: {
    panel: {
      eyebrow: "Distribuição e festivais",
      heading: (projectLabel) => `Lançar ${formatProjectLabel("pt", projectLabel)}`,
      description: "Escolha a via para o mercado e uma submissão de estreia. O motor de lançamento resolverá o resultado determinístico completo.",
      lockedCut: "Montagem fechada", quality: "qualidade", ready: "Pronto para lançar?", readyHint: "As duas escolhas são obrigatórias. Os resultados são determinísticos e finais para esta sessão.",
      releaseButton: (projectLabel) => `Lançar ${formatProjectLabel("pt", projectLabel)}`,
      errorFallback: "Não foi possível lançar o filme.",
      validation: { strategyAndFestival: "Escolha uma estratégia de lançamento e um festival antes de lançar o filme.", strategy: "Escolha uma estratégia de lançamento antes de lançar o filme.", festival: "Escolha um festival antes de lançar o filme." },
      metrics: { filmQuality: "Qualidade do filme", audienceAppeal: "Apelo junto do público", criticalAppeal: "Apelo crítico", strategyScore: "Pontuação da estratégia" }
    },
    strategy: {
      eyebrow: "Via de distribuição", heading: "Escolher uma estratégia de lançamento", description: "Equilibre alcance, exposição financeira e o potencial de prestígio do filme a longo prazo.",
      channels: { festival: "festival", theatrical_limited: "estreia limitada em sala", theatrical_wide: "estreia ampla em sala", streaming: "streaming", tv: "TV", educational: "educacional", direct_digital: "digital direto" },
      audienceSegments: { broad: "público amplo", arthouse: "cinema de autor", genre_fans: "fãs de género", youth: "jovens", local: "local", streaming: "streaming", festival: "festival", international: "internacional" },
      reach: "Alcance", risk: "Risco", prestige: "Prestígio", cost: "Custo"
    },
    festival: {
      eyebrow: "Circuito de estreias", heading: "Escolher um festival", description: "Cada lançamento inclui uma submissão determinística. Os níveis de prestígio exigem filmes mais fortes.",
      tiers: { local: "local", national: "nacional", international: "internacional", prestige: "prestígio" },
      prestige: "Prestígio", audience: "Público", fee: "Taxa", selected: "Selecionado", notSelected: "Não selecionado"
    },
    reviews: {
      eyebrow: "Receção crítica", heading: "Críticas",
      criticTypes: { mainstream: "generalista", arthouse: "cinema de autor", genre: "género", industry: "indústria", academic: "académico", local: "local", streaming: "streaming" },
      sentiments: { negative: "negativa", mixed: "mista", positive: "positiva", acclaim: "aclamação" },
      reputation: "Reputação", prestige: "Prestígio"
    },
    audience: {
      eyebrow: "Resposta do mercado", heading: "Resultados do público",
      segmentTypes: { broad: "público amplo", arthouse: "cinema de autor", genre_fans: "fãs de género", youth: "jovens", local: "local", streaming: "streaming", festival: "festival", international: "internacional" },
      interest: "Interesse", satisfaction: "Satisfação", wordOfMouth: "Boca a boca", viewers: "Espectadores"
    },
    revenue: {
      eyebrow: "Resultado do lançamento", heading: "Resultado de receitas", breakEven: "Ponto de equilíbrio", belowBreakEven: "Abaixo do ponto de equilíbrio",
      grossRevenue: "Receita bruta", marketingSpend: "Despesa de marketing", distributionCost: "Custo de distribuição", netRevenue: "Receita líquida", roi: "ROI"
    },
    awards: { eyebrow: "Circuito de prémios", heading: "Resultado dos prémios", nominations: "Nomeações", wins: "Vitórias", prestigeGain: "Ganho de prestígio", audienceGain: "Ganho de público", none: "Nenhum neste lançamento." },
    outcome: {
      eyebrow: "Avaliação final do lançamento",
      releasedHeading: (projectLabel) => projectLabel === "first film" ? "Primeiro filme lançado" : `${formatProjectLabel("pt", projectLabel)} lançado`,
      nextStep: (projectLabel) => projectLabel === "first film" ? "O lançamento está resolvido. Aplique este resultado ao estúdio e à carreira para fechar o ano do filme." : `Próximo passo: aplicar ${formatProjectLabel("pt", projectLabel)} ao estúdio/à carreira`,
      overall: "Global",
      scores: { strategy: "Estratégia", festival: "Festival", reviews: "Críticas", audience: "Público", revenue: "Receitas", awards: "Prémios" },
      reputationDelta: "Variação da reputação", prestigeDelta: "Variação do prestígio", audienceFit: "Adequação ao público", riskFit: "Adequação ao risco"
    }
  }
};

function formatProjectLabel(language: FilmWorkLanguage, projectLabel: ProjectLabel): string {
  if (projectLabel === "first film") {
    if (language === "nb") return "første film";
    if (language === "fr") return "le premier film";
    if (language === "pt") return "o primeiro filme";
    return "first film";
  }
  const number = projectLabel.slice(5);
  if (language === "fr") return `le film ${number}`;
  if (language === "pt") return `o filme ${number}`;
  return `Film ${number}`;
}
