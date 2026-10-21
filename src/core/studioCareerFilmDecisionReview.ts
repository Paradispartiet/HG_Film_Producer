import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type NextProductionFocus = "crew" | "casting" | "shoot" | "cut";

export interface ProductionFocusScores {
  readonly crew: number;
  readonly casting: number;
  readonly shoot: number;
  readonly cut: number;
}

/** A review prompt only: does not change scoring, progression or saved career data. */
export function selectNextProductionFocus(scores: ProductionFocusScores): NextProductionFocus {
  const entries: readonly (readonly [NextProductionFocus, number])[] = [
    ["crew", scores.crew],
    ["casting", scores.casting],
    ["shoot", scores.shoot],
    ["cut", scores.cut]
  ];
  return entries.reduce((lowest, entry) => entry[1] < lowest[1] ? entry : lowest)[0];
}

interface DecisionReviewCopy {
  readonly eyebrow: string;
  readonly heading: string;
  readonly intro: string;
  readonly development: string;
  readonly people: string;
  readonly set: string;
  readonly finishing: string;
  readonly techniques: (count: number) => string;
  readonly locations: (count: number) => string;
  readonly crewScore: string;
  readonly castScore: string;
  readonly chemistry: string;
  readonly takeQuality: string;
  readonly screening: string;
  readonly lockedCut: string;
  readonly trailer: string;
  readonly developmentEffect: string;
  readonly peopleEffect: string;
  readonly setEffect: string;
  readonly finishingEffect: string;
  readonly filmResult: string;
  readonly quality: string;
  readonly audience: string;
  readonly critics: string;
  readonly nextFilm: string;
  readonly focus: Readonly<Record<NextProductionFocus, string>>;
  readonly advisory: string;
}

export const STUDIO_CAREER_FILM_DECISION_REVIEW_COPY: Record<FilmWorkLanguage, DecisionReviewCopy> = {
  en: {
    eyebrow: "Production decisions",
    heading: "How your choices shaped the film",
    intro: "Follow the evidence from production to the final scores. The figures are real game results, not invented point bonuses.",
    development: "Development and locations",
    people: "Crew and cast",
    set: "The shoot",
    finishing: "The final cut",
    techniques: (count) => `${count} technique${count === 1 ? "" : "s"}`,
    locations: (count) => `${count} location${count === 1 ? "" : "s"}`,
    crewScore: "Crew",
    castScore: "Casting",
    chemistry: "Chemistry",
    takeQuality: "Average take",
    screening: "Test screening",
    lockedCut: "Locked cut",
    trailer: "Trailer",
    developmentEffect: "Techniques support quality and critics; locations support audience and critical appeal. The script path also changes how the shoot scenes are described.",
    peopleEffect: "Crew quality, casting and chemistry feed the final film scores.",
    setEffect: "Take quality affects screening clarity, pacing and emotion, feeding into the finishing evaluation.",
    finishingEffect: "Locked-cut quality affects all three film scores. The trailer affects audience appeal.",
    filmResult: "The film you delivered",
    quality: "Quality",
    audience: "Audience appeal",
    critics: "Critical appeal",
    nextFilm: "One lesson for your next film",
    focus: {
      crew: "Strengthen the crew: its score is your lowest production signal.",
      casting: "Revisit casting: its score is your lowest production signal.",
      shoot: "Improve conditions on set: average take quality is your lowest production signal.",
      cut: "Give the edit more attention: locked-cut quality is your lowest production signal."
    },
    advisory: "This is a suggestion based on your lowest recorded score, not an automatic upgrade to your next film."
  },
  nb: {
    eyebrow: "Produksjonsvalgene dine",
    heading: "Slik formet valgene den ferdige filmen",
    intro: "Følg sporene fra produksjonen til filmresultatet. Tallene kommer fra spillet, ikke fra oppdiktede poengbonuser.",
    development: "Utvikling og locations",
    people: "Stab og skuespillere",
    set: "Innspilling",
    finishing: "Ferdig klipp",
    techniques: (count) => `${count} teknikk${count === 1 ? "" : "er"}`,
    locations: (count) => `${count} location${count === 1 ? "" : "s"}`,
    crewScore: "Stab",
    castScore: "Casting",
    chemistry: "Kjemi",
    takeQuality: "Opptakskvalitet",
    screening: "Testvisning",
    lockedCut: "Låst klipp",
    trailer: "Trailer",
    developmentEffect: "Teknikker styrker kvalitet og kritikerappell; locations påvirker publikum og kritikere. Manusvalget påvirker også hvordan scenene beskrives under innspillingen.",
    peopleEffect: "Stabens kvalitet, casting og kjemi inngår i beregningen av den ferdige filmen.",
    setEffect: "Opptakskvaliteten påvirker tydelighet, tempo og følelse i testvisningen og dermed ferdigstillingen.",
    finishingEffect: "Det låste klippet påvirker alle tre filmvurderingene. Traileren påvirker publikumsappellen.",
    filmResult: "Filmen du leverte",
    quality: "Kvalitet",
    audience: "Publikumsappell",
    critics: "Kritikerappell",
    nextFilm: "Én erfaring til neste film",
    focus: {
      crew: "Styrk staben: stabsresultatet er det laveste produksjonstallet ditt.",
      casting: "Se på castingen igjen: castingscoren er det laveste produksjonstallet ditt.",
      shoot: "Forbedre opptaksforholdene: opptakskvaliteten er det laveste produksjonstallet ditt.",
      cut: "Prioriter klippingen: kvaliteten på det låste klippet er det laveste produksjonstallet ditt."
    },
    advisory: "Dette er et råd basert på laveste registrerte score, ikke en automatisk forbedring av neste film."
  },
  fr: {
    eyebrow: "Vos choix de production",
    heading: "Comment vos choix ont façonné le film",
    intro: "Suivez les éléments de la production jusqu'aux résultats. Ces chiffres viennent du jeu, sans bonus de points inventés.",
    development: "Développement et décors",
    people: "Équipe et distribution",
    set: "Tournage",
    finishing: "Montage final",
    techniques: (count) => `${count} technique${count === 1 ? "" : "s"}`,
    locations: (count) => `${count} lieu${count === 1 ? "" : "x"}`,
    crewScore: "Équipe",
    castScore: "Distribution",
    chemistry: "Alchimie",
    takeQuality: "Qualité des prises",
    screening: "Projection test",
    lockedCut: "Montage verrouillé",
    trailer: "Bande-annonce",
    developmentEffect: "Les techniques soutiennent la qualité et la critique ; les lieux influencent le public et la critique. Le choix de scénario change aussi la présentation des scènes de tournage.",
    peopleEffect: "La qualité de l'équipe, la distribution et l'alchimie influencent les scores finaux du film.",
    setEffect: "Les prises influencent la clarté, le rythme et l'émotion de la projection test, puis l'évaluation finale.",
    finishingEffect: "Le montage verrouillé influence les trois scores du film. La bande-annonce agit sur l'attrait public.",
    filmResult: "Le film livré",
    quality: "Qualité",
    audience: "Attrait public",
    critics: "Attrait critique",
    nextFilm: "Une leçon pour le prochain film",
    focus: {
      crew: "Renforcez l'équipe : c'est votre score de production le plus faible.",
      casting: "Revoyez la distribution : c'est votre score de production le plus faible.",
      shoot: "Améliorez le tournage : les prises sont votre point de production le plus faible.",
      cut: "Soignez le montage : le montage verrouillé est votre score de production le plus faible."
    },
    advisory: "Ce conseil repose sur votre score le plus faible ; il ne modifie pas automatiquement le prochain film."
  },
  pt: {
    eyebrow: "As suas escolhas de produção",
    heading: "Como as escolhas moldaram o filme",
    intro: "Acompanhe as provas da produção até ao resultado final. Os números vêm do jogo, sem bónus inventados.",
    development: "Desenvolvimento e locais",
    people: "Equipa e elenco",
    set: "Rodagem",
    finishing: "Montagem final",
    techniques: (count) => `${count} técnica${count === 1 ? "" : "s"}`,
    locations: (count) => `${count} loca${count === 1 ? "l" : "is"}`,
    crewScore: "Equipa",
    castScore: "Elenco",
    chemistry: "Química",
    takeQuality: "Qualidade das tomadas",
    screening: "Sessão de teste",
    lockedCut: "Montagem fechada",
    trailer: "Trailer",
    developmentEffect: "As técnicas ajudam a qualidade e a crítica; os locais influenciam o público e a crítica. A opção de guião também altera a descrição das cenas na rodagem.",
    peopleEffect: "A equipa, o elenco e a química entram nos resultados finais do filme.",
    setEffect: "A qualidade das tomadas influencia a clareza, o ritmo e a emoção na sessão de teste e a avaliação final.",
    finishingEffect: "A montagem fechada influencia as três avaliações do filme. O trailer influencia o apelo ao público.",
    filmResult: "O filme concluído",
    quality: "Qualidade",
    audience: "Apelo ao público",
    critics: "Apelo crítico",
    nextFilm: "Uma lição para o próximo filme",
    focus: {
      crew: "Reforce a equipa: é o seu resultado de produção mais baixo.",
      casting: "Reveja o elenco: é o seu resultado de produção mais baixo.",
      shoot: "Melhore a rodagem: a qualidade das tomadas é o seu resultado de produção mais baixo.",
      cut: "Dê atenção à montagem: é o seu resultado de produção mais baixo."
    },
    advisory: "Esta é uma recomendação baseada no resultado mais baixo, não uma melhoria automática do próximo filme."
  }
};
