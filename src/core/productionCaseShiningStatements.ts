/** The Shining (1980): display-only, exact-source translations. Canonical source and grading stay unchanged. */
export const SHINING_PRODUCTION_STATEMENT_ROWS = [
  [
    "Let space create dread as family pressure and isolation turn an interior world into a threat.",
    "La rommene skape uhygge når familiepress og isolasjon gjør et innendørs miljø truende.",
    "Faites naître l'effroi de l'espace lorsque les tensions familiales et l'isolement transforment l'intérieur en menace.",
    "Deixe que o espaço crie pavor quando a pressão familiar e o isolamento transformam o ambiente interior numa ameaça."
  ],
  [
    "Psychological horror",
    "Psykologisk skrekkfilm",
    "Horreur psychologique",
    "Terror psicológico"
  ],
  [
    "Isolation drama",
    "Isolasjonsdrama",
    "Drame de l'isolement",
    "Drama de isolamento"
  ],
  [
    "Family pressure nightmare",
    "Mareritt om press i familien",
    "Cauchemar de tensions familiales",
    "Pesadelo de pressão familiar"
  ],
  [
    "Dread-filled",
    "Fylt av uhygge",
    "Empli d'effroi",
    "Carregado de pavor"
  ],
  [
    "Cold and uncanny",
    "Kaldt og uhyggelig",
    "Froid et inquiétant",
    "Frio e inquietante"
  ],
  [
    "Patient before shock",
    "Tålmodig før sjokket",
    "Patient avant le choc",
    "Paciente antes do choque"
  ],
  [
    "Tie family pressure to space",
    "Knytt familiepresset til rommene",
    "Liez les tensions familiales à l'espace",
    "Ligue a pressão familiar ao espaço"
  ],
  [
    "Let routine become warning",
    "La rutinene bli varsler om fare",
    "Transformez la routine en avertissement",
    "Transforme a rotina num aviso"
  ],
  [
    "Build threat through isolation",
    "Bygg opp trusselen gjennom isolasjon",
    "Faites croître la menace par l'isolement",
    "Construa a ameaça através do isolamento"
  ],
  [
    "Use symmetry as unease",
    "Bruk symmetri til å skape uro",
    "Employez la symétrie pour susciter le malaise",
    "Use a simetria para provocar inquietação"
  ],
  [
    "Frame negative space",
    "Komponer bilder med tomrom",
    "Cadrez les espaces vides",
    "Enquadre os espaços vazios"
  ],
  [
    "Make interiors feel hostile",
    "La interiørene føles fiendtlige",
    "Rendez les intérieurs hostiles",
    "Faça os interiores parecerem hostis"
  ],
  [
    "Build slow dread first",
    "Bygg først opp en langsom uhygge",
    "Installez d'abord une terreur lente",
    "Construa primeiro um pavor lento"
  ],
  [
    "Delay shocks with patience",
    "Utsett sjokkene med tålmodig oppbygging",
    "Retardez les chocs avec patience",
    "Adie os choques com paciência"
  ],
  [
    "Use repetition as warning",
    "Bruk gjentakelse som faresignal",
    "Faites de la répétition un signal d'alarme",
    "Use a repetição como sinal de alerta"
  ],
  [
    "Make sound feel uneasy",
    "La lyden skape uro",
    "Donnez au son un caractère inquiétant",
    "Faça o som provocar inquietação"
  ],
  [
    "Repeat cues as warnings",
    "Gjenta lydsignaler som advarsler",
    "Répétez les signaux sonores comme des avertissements",
    "Repita sinais sonoros como avisos"
  ],
  [
    "Let quiet spaces threaten",
    "La stille rom virke truende",
    "Rendez les espaces silencieux menaçants",
    "Faça os espaços silenciosos parecerem ameaçadores"
  ],
  [
    "Horror can be built from space, rhythm and anticipation",
    "Skrekk kan bygges opp gjennom rom, rytme og forventning",
    "L'horreur peut naître de l'espace, du rythme et de l'anticipation",
    "O terror pode construir-se através do espaço, do ritmo e da antecipação"
  ],
  [
    "Track the corridors until geography menaces",
    "Følg korridorene til selve romforløpet blir truende",
    "Parcourez les couloirs jusqu'à ce que la géographie devienne menaçante",
    "Percorra os corredores até a própria geografia se tornar ameaçadora"
  ],
  [
    "Let the family unit be the monster",
    "La familien selv være monsteret",
    "Faites de la cellule familiale le monstre",
    "Faça da própria família o monstro"
  ]
] as const;

export const CANONICAL_SHINING_STATEMENTS = SHINING_PRODUCTION_STATEMENT_ROWS.map((row) => row[0]);

const translations: ReadonlyMap<string, readonly [string, string, string]> = new Map(
  SHINING_PRODUCTION_STATEMENT_ROWS.map(([canonical, nb, fr, pt]) => [canonical, [nb, fr, pt] as const] as const),
);

export function presentShiningProductionStatement(
  language: "en" | "nb" | "fr" | "pt",
  original: string,
): string {
  if (language === "en") return original;
  const translated = translations.get(original);
  return translated?.[language === "nb" ? 0 : language === "fr" ? 1 : 2] ?? original;
}
