/** One Flew Over the Cuckoo's Nest (1975): exact-canonical display-only translations. */
export const CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS = [
  [
    "Stage an institutional drama where rebellion, control, and ensemble pressure escalate through character conflict.",
    "Iscenesett et institusjonsdrama der opprør, kontroll og gruppepress tilspisses gjennom konflikter mellom personene.",
    "Mettez en scène un drame institutionnel où la révolte, le contrôle et la pression du groupe s'intensifient à travers les conflits entre personnages.",
    "Encene um drama institucional em que a rebelião, o controlo e a pressão do grupo se intensificam através dos conflitos entre personagens."
  ],
  [
    "Institutional drama",
    "Institusjonsdrama",
    "Drame institutionnel",
    "Drama institucional"
  ],
  [
    "Rebellion-versus-control story",
    "Fortelling om opprør mot kontroll",
    "Récit de révolte contre le contrôle",
    "História de rebelião contra o controlo"
  ],
  [
    "Ensemble character conflict",
    "Konflikter i persongruppen",
    "Conflits entre personnages d'un ensemble",
    "Conflito entre personagens de um elenco"
  ],
  [
    "Pressurized and human",
    "Presset og menneskelig",
    "Sous pression et humain",
    "Sob pressão e humano"
  ],
  [
    "Defiant under restraint",
    "Trassig under begrensninger",
    "Rebelle malgré les contraintes",
    "Desafiador apesar das restrições"
  ],
  [
    "Performance-driven",
    "Drevet av skuespillet",
    "Porté par l'interprétation",
    "Conduzido pelas interpretações"
  ],
  [
    "Set rules against rebellion",
    "Still reglene opp mot opprøret",
    "Opposez les règles à la révolte",
    "Confronte as regras com a rebelião"
  ],
  [
    "Escalate through character conflict",
    "Trapp opp gjennom konflikter mellom personene",
    "Intensifiez le drame par les conflits entre personnages",
    "Intensifique o drama através dos conflitos entre personagens"
  ],
  [
    "Let the ensemble create pressure",
    "La persongruppen skape press",
    "Laissez le groupe créer la pression",
    "Deixe que o elenco crie a pressão"
  ],
  [
    "Use institutional space as pressure",
    "Bruk institusjonens rom til å skape press",
    "Faites des espaces institutionnels une source de pression",
    "Use o espaço institucional para criar pressão"
  ],
  [
    "Frame control in interiors",
    "Vis kontrollen gjennom bildeutsnitt i interiørene",
    "Cadrez le contrôle dans les espaces intérieurs",
    "Enquadre o controlo nos interiores"
  ],
  [
    "Track power through blocking",
    "Vis maktforhold gjennom plassering og bevegelser",
    "Montrez les rapports de force par les placements et les déplacements",
    "Mostre as relações de poder através da marcação dos atores"
  ],
  [
    "Build performance-driven escalation",
    "Bygg opp konflikten gjennom skuespillernes prestasjoner",
    "Faites monter le conflit grâce aux interprétations",
    "Aumente o conflito através das interpretações"
  ],
  [
    "Cut around group reactions",
    "Klipp med utgangspunkt i gruppens reaksjoner",
    "Montez les scènes autour des réactions du groupe",
    "Monte as cenas em torno das reações do grupo"
  ],
  [
    "Let confrontations gather force",
    "La konfrontasjonene få stadig større kraft",
    "Laissez les affrontements gagner en intensité",
    "Deixe que os confrontos ganhem intensidade"
  ],
  [
    "Let voices define power",
    "La stemmene definere maktforholdene",
    "Laissez les voix définir les rapports de pouvoir",
    "Deixe que as vozes definam o poder"
  ],
  [
    "Use routine as pressure",
    "Bruk rutinene til å skape press",
    "Faites de la routine une forme de pression",
    "Use a rotina como forma de pressão"
  ],
  [
    "Hold silence after defiance",
    "Hold på stillheten etter trassige handlinger",
    "Prolongez le silence après les actes de défi",
    "Prolongue o silêncio após os atos de desafio"
  ],
  [
    "Dramatize rebellion inside rules",
    "Dramatiser opprør innenfor et regelverk",
    "Dramatisez la révolte à l'intérieur d'un système de règles",
    "Dramatize a rebelião dentro de um sistema de regras"
  ],
  [
    "Use ensemble pressure clearly",
    "Gjør gruppepresset tydelig",
    "Rendez la pression du groupe clairement perceptible",
    "Torne clara a pressão do grupo"
  ],
  [
    "Escalate conflict through performance",
    "Trapp opp konflikten gjennom skuespill",
    "Intensifiez le conflit par le jeu des acteurs",
    "Intensifique o conflito através da interpretação"
  ]
] as const;

export const CANONICAL_CUCKOOS_NEST_STATEMENTS = CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS.map((row) => row[0]);

const translations: ReadonlyMap<string, readonly [string, string, string]> = new Map(
  CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS.map(([canonical, nb, fr, pt]) => [canonical, [nb, fr, pt] as const] as const),
);

export function presentCuckoosNestProductionStatement(language: "en" | "nb" | "fr" | "pt", original: string): string {
  if (language === "en") return original;
  const translated = translations.get(original);
  return translated?.[language === "nb" ? 0 : language === "fr" ? 1 : 2] ?? original;
}
