/**
 * Vertigo (1958): exact-canonical production-brief presentation only.
 * Source brief, scenario ID, historical references, learning mechanics and
 * English source statements remain unchanged. The briefing's separate
 * verificationStatus is deliberately not altered by a translation.
 */
export const VERTIGO_PRODUCTION_STATEMENT_ROWS = [
  [
    "Design a psychological mystery-romance thriller where obsession makes desire, identity, and perception unreliable.",
    "Utform en psykologisk mysterieromantisk thriller der besettelse gjør begjær, identitet og virkelighetsoppfatning upålitelige.",
    "Concevez un thriller psychologique mêlant mystère et romance, où l'obsession rend incertains le désir, l'identité et la perception.",
    "Conceba um thriller psicológico de mistério e romance em que a obsessão torna incertos o desejo, a identidade e a perceção."
  ],
  [
    "Psychological mystery thriller",
    "Psykologisk mysterietriller",
    "Thriller psychologique à énigme",
    "Thriller psicológico de mistério"
  ],
  [
    "Romance under obsession",
    "Romantikk preget av besettelse",
    "Romance sous l'emprise de l'obsession",
    "Romance dominado pela obsessão"
  ],
  [
    "Unstable identity story",
    "Fortelling om ustabil identitet",
    "Récit d'identité instable",
    "História de identidade instável"
  ],
  [
    "Hypnotic and uneasy",
    "Hypnotisk og urovekkende",
    "Hypnotique et inquiétant",
    "Hipnótico e inquietante"
  ],
  [
    "Obsessive and haunted",
    "Besatt og hjemsøkt",
    "Obsédant et hanté",
    "Obsessivo e assombrado"
  ],
  [
    "Romantic but trapped",
    "Romantisk, men innestengt",
    "Romantique, mais sans issue",
    "Romântico, mas aprisionado"
  ],
  [
    "Let obsession rebuild a person as an image",
    "La besettelsen omskape et menneske til et bilde",
    "Laissez l'obsession recréer une personne à l'image d'un idéal",
    "Deixe a obsessão reconstruir uma pessoa como imagem idealizada"
  ],
  [
    "Turn pursuit into a trap",
    "Gjør forfølgelsen til en felle",
    "Transformez la poursuite en piège",
    "Transforme a perseguição numa armadilha"
  ],
  [
    "Link desire to illusion",
    "Knytt begjær til illusjon",
    "Reliez le désir à l'illusion",
    "Associe o desejo à ilusão"
  ],
  [
    "Use subjective camera anxiety",
    "Bruk subjektivt kamera til å skape uro",
    "Employez une caméra subjective pour susciter l'angoisse",
    "Use a câmara subjetiva para criar ansiedade"
  ],
  [
    "Make height a threat",
    "La høyder virke truende",
    "Faites de la hauteur une menace",
    "Faça da altura uma ameaça"
  ],
  [
    "Repeat color and motifs",
    "Gjenta farger og motiver",
    "Répétez les couleurs et les motifs",
    "Repita cores e motivos"
  ],
  [
    "Build suspense through repetition",
    "Bygg spenning gjennom gjentakelser",
    "Construisez le suspense par la répétition",
    "Construa o suspense através da repetição"
  ],
  [
    "Delay revelation",
    "Utsett avsløringen",
    "Retardez la révélation",
    "Adie a revelação"
  ],
  [
    "Cut around fixation",
    "Klipp med utgangspunkt i den besatte oppmerksomheten",
    "Montez les scènes autour de la fixation du personnage",
    "Monte as cenas em torno da fixação da personagem"
  ],
  [
    "Use music as hypnotic unease",
    "Bruk musikk til å skape hypnotisk uro",
    "Utilisez la musique pour créer un trouble hypnotique",
    "Use a música para criar inquietação hipnótica"
  ],
  [
    "Let silence unsettle desire",
    "La stillheten gjøre begjæret urolig",
    "Laissez le silence troubler le désir",
    "Deixe o silêncio perturbar o desejo"
  ],
  [
    "Hold sound around fixation",
    "La lydbildet holde fast ved besettelsen",
    "Faites graviter le son autour de l'obsession",
    "Concentre o som na fixação"
  ],
  [
    "Thriller form can make desire and perception unreliable",
    "Thrillerformen kan gjøre begjær og virkelighetsoppfatning upålitelige",
    "La forme du thriller peut rendre incertains le désir et la perception",
    "A forma do thriller pode tornar incertos o desejo e a perceção"
  ],
  [
    "Twist the mystery by revealing it early",
    "Vri mysteriet ved å avsløre det tidlig",
    "Transformez le mystère en le révélant tôt",
    "Transforme o mistério ao revelá-lo cedo"
  ],
  [
    "Spiral the camera into obsession",
    "La kamerabevegelsen trekke oss inn i besettelsens spiral",
    "Faites entrer la caméra dans la spirale de l'obsession",
    "Leve a câmara para a espiral da obsessão"
  ]
] as const;

export const CANONICAL_VERTIGO_STATEMENTS = VERTIGO_PRODUCTION_STATEMENT_ROWS.map((row) => row[0]);

const translations: ReadonlyMap<string, readonly [string, string, string]> = new Map(
  VERTIGO_PRODUCTION_STATEMENT_ROWS.map(([canonical, nb, fr, pt]) => [canonical, [nb, fr, pt] as const] as const),
);

export function presentVertigoProductionStatement(
  language: "en" | "nb" | "fr" | "pt",
  original: string,
): string {
  if (language === "en") return original;
  const translated = translations.get(original);
  return translated?.[language === "nb" ? 0 : language === "fr" ? 1 : 2] ?? original;
}
