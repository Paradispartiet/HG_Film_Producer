/** The Celebration / Festen (1998): exact-canonical, display-only translations. */
export const FESTEN_PRODUCTION_STATEMENT_ROWS = [
  [
    "Turn a contained family ritual into a pressure cooker where truth breaks social order.",
    "Gjør et avgrenset familieritual til en trykkoker der sannheten bryter ned den sosiale ordenen.",
    "Transformez un rituel familial en huis clos sous pression où la vérité brise l'ordre social.",
    "Transforme um ritual familiar num espaço de pressão em que a verdade rompe a ordem social."
  ],
  [
    "Intense family chamber drama",
    "Intenst familiedrama i et avgrenset rom",
    "Drame familial intense en huis clos",
    "Drama familiar intenso em espaço fechado"
  ],
  [
    "Ritual collapse story",
    "Fortelling om et ritual som bryter sammen",
    "Récit d'un rituel qui s'effondre",
    "História do colapso de um ritual"
  ],
  [
    "Contained ensemble drama",
    "Ensembledrama i et avgrenset miljø",
    "Drame choral dans un espace clos",
    "Drama de elenco num espaço delimitado"
  ],
  [
    "Immediate and volatile",
    "Umiddelbar og eksplosiv",
    "Immédiat et explosif",
    "Imediato e explosivo"
  ],
  [
    "Socially pressured",
    "Preget av sosialt press",
    "Sous pression sociale",
    "Sob pressão social"
  ],
  [
    "Emotionally raw",
    "Følelsesmessig utilslørt",
    "À vif sur le plan émotionnel",
    "Emocionalmente cru"
  ],
  [
    "Turn ritual into pressure",
    "Gjør ritualet til en kilde til press",
    "Faites du rituel une source de tension",
    "Transforme o ritual numa fonte de pressão"
  ],
  [
    "Escalate through speeches",
    "Trapp opp konflikten gjennom talene",
    "Faites monter le conflit par les discours",
    "Intensifique o conflito através dos discursos"
  ],
  [
    "Make reactions change the room",
    "La reaksjonene forandre stemningen i rommet",
    "Laissez les réactions transformer l'atmosphère de la pièce",
    "Deixe as reações transformar a atmosfera da sala"
  ],
  [
    "Use handheld immediacy",
    "Bruk håndholdt kamera for umiddelbarhet",
    "Créez une impression d'immédiateté avec une caméra portée",
    "Use câmara à mão para criar imediatismo"
  ],
  [
    "Stay close to the gathering",
    "Hold kamera tett på forsamlingen",
    "Restez au plus près de l'assemblée",
    "Mantenha a câmara próxima dos convidados"
  ],
  [
    "Let rooms feel unstable",
    "La rommene virke ustabile",
    "Rendez les espaces instables à l'image",
    "Faça os espaços parecerem instáveis"
  ],
  [
    "Cut through interruptions",
    "Klipp gjennom avbrytelsene",
    "Montez au rythme des interruptions",
    "Monte ao ritmo das interrupções"
  ],
  [
    "Track social collapse",
    "Følg sammenbruddet i det sosiale samspillet",
    "Suivez l'effondrement des relations sociales",
    "Acompanhe o colapso das relações sociais"
  ],
  [
    "Build pressure from reactions",
    "Bygg opp presset gjennom reaksjonene",
    "Faites naître la tension des réactions",
    "Crie tensão a partir das reações"
  ],
  [
    "Layer overlapping voices",
    "Legg stemmene over hverandre",
    "Superposez les voix qui se chevauchent",
    "Sobreponha vozes simultâneas"
  ],
  [
    "Use room tension",
    "Utnytt spenningen i rommet",
    "Exploitez la tension de la pièce",
    "Explore a tensão presente na sala"
  ],
  [
    "Let silence follow truth",
    "La stillheten følge etter sannheten",
    "Laissez le silence suivre la révélation de la vérité",
    "Deixe o silêncio seguir-se à revelação da verdade"
  ],
  [
    "A social ritual can become a dramatic pressure system",
    "Et sosialt ritual kan bli et dramaturgisk pressystem",
    "Un rituel social peut devenir un dispositif de pression dramatique",
    "Um ritual social pode tornar-se um mecanismo de pressão dramática"
  ],
  [
    "Let handheld video make scandal intimate",
    "La håndholdt video gjøre skandalen nær og intim",
    "Faites de la vidéo portée un moyen de rendre le scandale intime",
    "Use vídeo com câmara à mão para tornar o escândalo íntimo"
  ],
  [
    "Stage the revelation as a toast",
    "Iscenesett avsløringen som en skåltale",
    "Mettez la révélation en scène sous forme de toast",
    "Encene a revelação como um brinde"
  ]
] as const;

export const CANONICAL_FESTEN_STATEMENTS = FESTEN_PRODUCTION_STATEMENT_ROWS.map((row) => row[0]);

const translations: ReadonlyMap<string, readonly [string, string, string]> = new Map(
  FESTEN_PRODUCTION_STATEMENT_ROWS.map(([canonical, nb, fr, pt]) => [canonical, [nb, fr, pt] as const] as const),
);

export function presentFestenProductionStatement(language: "en" | "nb" | "fr" | "pt", original: string): string {
  if (language === "en") return original;
  const translated = translations.get(original);
  return translated?.[language === "nb" ? 0 : language === "fr" ? 1 : 2] ?? original;
}
