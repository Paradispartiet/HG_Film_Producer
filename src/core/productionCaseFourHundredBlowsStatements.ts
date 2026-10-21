/**
 * The 400 Blows (1959): exact-canonical presentation only. Do not alter
 * source English, IDs, learning engine, citations, or editorial verification.
 */
export const FOUR_HUNDRED_BLOWS_PRODUCTION_STATEMENT_ROWS = [
  [
    "Make youth, authority, and escape collide as ordinary institutions become emotional confinement.",
    "La ungdom, autoriteter og flukt kollidere når hverdagslige institusjoner blir til et følelsesmessig fangenskap.",
    "Faites s'affronter la jeunesse, l'autorité et la fuite, tandis que les institutions ordinaires deviennent un enfermement affectif.",
    "Faça colidir a juventude, a autoridade e a fuga, enquanto as instituições comuns se transformam em confinamento emocional."
  ],
  [
    "Coming-of-age crime drama",
    "Kriminaldrama om overgangen til voksenlivet",
    "Drame criminel d'apprentissage",
    "Drama policial de amadurecimento"
  ],
  [
    "Youth authority conflict",
    "Konflikt mellom ungdom og autoriteter",
    "Conflit entre jeunesse et autorité",
    "Conflito entre juventude e autoridade"
  ],
  [
    "Escape story",
    "Fluktfortelling",
    "Récit de fuite",
    "História de fuga"
  ],
  [
    "Observational and restless",
    "Observerende og rastløst",
    "Observateur et fébrile",
    "Observacional e inquieto"
  ],
  [
    "Tender but pressured",
    "Ømt, men preget av press",
    "Tendre, mais sous pression",
    "Terno, mas sob pressão"
  ],
  [
    "Institutionally restricted",
    "Begrenset av institusjonelle rammer",
    "Contraint par les institutions",
    "Restringido pelas instituições"
  ],
  [
    "Pressure youth with authority",
    "La autoritetenes press ramme ungdommen",
    "Faites peser l'autorité sur la jeunesse",
    "Faça a autoridade pressionar a juventude"
  ],
  [
    "Let episodes drift toward consequence",
    "La episodene gli over i stadig tydeligere konsekvenser",
    "Laissez les épisodes dériver vers leurs conséquences",
    "Deixe os episódios derivarem para as suas consequências"
  ],
  [
    "Make escape feel necessary",
    "La flukten fremstå som nødvendig",
    "Rendez la fuite nécessaire",
    "Faça a fuga parecer necessária"
  ],
  [
    "Use everyday spaces as confinement",
    "La hverdagens rom fungere som et fengsel",
    "Faites des espaces quotidiens des lieux d'enfermement",
    "Use os espaços do quotidiano como lugares de confinamento"
  ],
  [
    "Follow street movement",
    "Følg bevegelsen gjennom gatene",
    "Suivez les mouvements dans la rue",
    "Acompanhe o movimento pelas ruas"
  ],
  [
    "Keep realism observational",
    "Behold en observerende realisme",
    "Conservez un réalisme d'observation",
    "Mantenha o realismo observacional"
  ],
  [
    "Shape episodic drift",
    "Gi form til den episodiske fremdriften",
    "Structurez la dérive épisodique",
    "Dê forma à deriva episódica"
  ],
  [
    "Let consequences accumulate",
    "La konsekvensene hope seg opp",
    "Laissez les conséquences s'accumuler",
    "Deixe as consequências acumular-se"
  ],
  [
    "Balance routine with escape",
    "Balanser hverdagens rutiner mot ønsket om flukt",
    "Équilibrez routine quotidienne et désir de fuite",
    "Equilibre a rotina com o desejo de fuga"
  ],
  [
    "Use city and school pressure",
    "Bruk presset fra byen og skolen",
    "Exploitez la pression de la ville et de l'école",
    "Use a pressão da cidade e da escola"
  ],
  [
    "Let silence isolate",
    "La stillheten understreke isolasjonen",
    "Laissez le silence accentuer l'isolement",
    "Deixe o silêncio acentuar o isolamento"
  ],
  [
    "Keep ordinary noise restrictive",
    "La hverdagens lyder virke begrensende",
    "Faites des bruits ordinaires une contrainte",
    "Faça dos ruídos comuns uma forma de restrição"
  ],
  [
    "Youth drama can turn ordinary institutions into conflict",
    "Et ungdomsdrama kan gjøre vanlige institusjoner til selve konfliktens kilde",
    "Un drame sur la jeunesse peut transformer les institutions ordinaires en sources de conflit",
    "Um drama juvenil pode transformar instituições comuns em fontes de conflito"
  ],
  [
    "End on a frozen, unanswered face",
    "Avslutt med et fastfrosset ansikt uten noe entydig svar",
    "Terminez sur un visage figé qui ne livre aucune réponse",
    "Termine num rosto imóvel, sem resposta definida"
  ],
  [
    "Let small lies escalate into exile",
    "La små løgner eskalere til utstøtelse",
    "Laissez de petits mensonges mener à l'exclusion",
    "Deixe pequenas mentiras agravarem-se até à exclusão"
  ]
] as const;

export const CANONICAL_FOUR_HUNDRED_BLOWS_STATEMENTS = FOUR_HUNDRED_BLOWS_PRODUCTION_STATEMENT_ROWS.map((row) => row[0]);

const translations: ReadonlyMap<string, readonly [string, string, string]> = new Map(
  FOUR_HUNDRED_BLOWS_PRODUCTION_STATEMENT_ROWS.map(([canonical, nb, fr, pt]) => [canonical, [nb, fr, pt] as const] as const),
);

export function presentFourHundredBlowsProductionStatement(
  language: "en" | "nb" | "fr" | "pt",
  original: string,
): string {
  if (language === "en") return original;
  const translated = translations.get(original);
  return translated?.[language === "nb" ? 0 : language === "fr" ? 1 : 2] ?? original;
}
