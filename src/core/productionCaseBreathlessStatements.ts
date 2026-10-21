/**
 * Breathless (À bout de souffle, 1960): only exact canonical production-brief
 * statements are localized. Original English, scenario IDs, verification
 * metadata, grades and citations remain unchanged.
 */
export const BREATHLESS_PRODUCTION_STATEMENT_ROWS = [
  [
    "Create a crime drama where fugitives, identity, and casual rebellion move with restless modern energy.",
    "Skap et kriminaldrama der mennesker på flukt, identitet og tilsynelatende sorgløs opprørstrang drives fram av rastløs, moderne energi.",
    "Créez un drame criminel où la fuite, l'identité et la rébellion désinvolte avancent au rythme d'une énergie moderne et agitée.",
    "Crie um drama policial em que a fuga, a identidade e a rebeldia descontraída avançam com uma energia moderna e inquieta."
  ],
  [
    "Restless crime drama",
    "Rastløst kriminaldrama",
    "Drame criminel fébrile",
    "Drama policial inquieto"
  ],
  [
    "Fugitive character story",
    "Personfortelling om mennesker på flukt",
    "Récit centré sur un personnage en fuite",
    "História centrada numa personagem em fuga"
  ],
  [
    "Modern urban rebellion",
    "Moderne urbant opprør",
    "Rébellion urbaine moderne",
    "Rebeldia urbana moderna"
  ],
  [
    "Casual and defiant",
    "Uformelt og trassig",
    "Désinvolte et provocateur",
    "Descontraído e desafiador"
  ],
  [
    "Restless and cool",
    "Rastløst og selvsikkert",
    "Agité et détaché",
    "Inquieto e descontraído"
  ],
  [
    "Romantic but unstable",
    "Romantisk, men ustabilt",
    "Romantique mais instable",
    "Romântico mas instável"
  ],
  [
    "Let identity stay in motion",
    "La identiteten være i stadig forandring",
    "Laissez l'identité évoluer sans cesse",
    "Mantenha a identidade em constante transformação"
  ],
  [
    "Use conversation as drift",
    "La samtaler drive handlingen i nye retninger",
    "Laissez les conversations dériver librement",
    "Deixe a conversa vaguear livremente"
  ],
  [
    "Keep rebellion casual and risky",
    "La opprøret virke spontant, men risikabelt",
    "Gardez à la rébellion son air désinvolte et risqué",
    "Mantenha a rebeldia espontânea e arriscada"
  ],
  [
    "Use loose urban movement",
    "Bruk frie kamerabevegelser gjennom byen",
    "Employez des mouvements souples à travers la ville",
    "Use movimentos soltos através da cidade"
  ],
  [
    "Make street life the style",
    "La livet i gatene forme filmens stil",
    "Faites de la vie de la rue le style du film",
    "Faça da vida nas ruas o estilo do filme"
  ],
  [
    "Keep the camera feeling restless",
    "La kameraet formidle rastløshet",
    "Conservez une caméra toujours mobile et fébrile",
    "Mantenha a câmara com uma sensação de inquietação"
  ],
  [
    "Make editing feel restless",
    "La klippingen skape en rastløs følelse",
    "Donnez au montage un rythme agité",
    "Dê à montagem um ritmo inquieto"
  ],
  [
    "Use jumpy rhythm",
    "Bruk en oppstykket, springende rytme",
    "Adoptez un rythme saccadé",
    "Use um ritmo aos saltos"
  ],
  [
    "Let scenes drift conversationally",
    "La scenene gli videre gjennom samtaler",
    "Laissez les scènes dériver au fil des conversations",
    "Deixe as cenas vaguear através das conversas"
  ],
  [
    "Mix music with city sound",
    "Bland musikk med lyden av byen",
    "Mêlez la musique aux sons de la ville",
    "Misture a música com os sons da cidade"
  ],
  [
    "Use pauses as attitude",
    "La pausene uttrykke holdning",
    "Faites des pauses une expression d'attitude",
    "Use as pausas para expressar atitude"
  ],
  [
    "Let street noise keep momentum",
    "La gatelydene holde bevegelsen i gang",
    "Laissez le bruit des rues entretenir l'élan",
    "Deixe o ruído da rua sustentar o movimento"
  ],
  [
    "Editing and camera style can become a film’s personality",
    "Klipping og kamerastil kan bli selve filmens personlighet",
    "Le montage et le style de caméra peuvent devenir la personnalité même d'un film",
    "A montagem e o estilo de câmara podem tornar-se a própria personalidade de um filme"
  ],
  [
    "Jump-cut to make crime feel casual",
    "Bruk hoppklipp for å få kriminaliteten til å virke hverdagslig",
    "Utilisez les jump cuts pour donner au crime une allure désinvolte",
    "Use cortes em salto para dar ao crime um ar descontraído"
  ],
  [
    "Let the couple improvise toward betrayal",
    "La paret improvisere seg fram mot svik",
    "Laissez le couple improviser jusqu'à la trahison",
    "Deixe o casal improvisar até à traição"
  ]
] as const;

export const CANONICAL_BREATHLESS_STATEMENTS = BREATHLESS_PRODUCTION_STATEMENT_ROWS.map((row) => row[0]);

const translations: ReadonlyMap<string, readonly [string, string, string]> = new Map(
  BREATHLESS_PRODUCTION_STATEMENT_ROWS.map(([canonical, nb, fr, pt]) => [canonical, [nb, fr, pt] as const] as const),
);

export function presentBreathlessProductionStatement(
  language: "en" | "nb" | "fr" | "pt",
  original: string,
): string {
  if (language === "en") return original;
  const translated = translations.get(original);
  return translated?.[language === "nb" ? 0 : language === "fr" ? 1 : 2] ?? original;
}
