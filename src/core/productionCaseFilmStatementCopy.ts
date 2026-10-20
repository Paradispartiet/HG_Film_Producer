import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ProductionCaseBriefType } from "./productionCaseBriefCopy.js";
import { presentSeedFallbackText } from "./productionCaseSeedPresentation.js";

/**
 * One source-verified film at a time. Only exact canonical authored statements
 * are translated. Unknown or revised claims, other films, and source notes
 * retain their original wording until editorially verified.
 */
export const CANONICAL_12_ANGRY_MEN_STATEMENTS = [
  "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.",
  "Chamber drama",
  "Jury-room conflict",
  "Ensemble debate",
  "Claustrophobic",
  "Combative",
  "Increasingly doubtful",
  "Build tension through argument",
  "Let doubt shift alliances",
  "Turn evidence into character conflict",
  "Use one-room blocking",
  "Track power through positions",
  "Tighten faces as pressure rises",
  "Shape dialogue rhythm",
  "Cut on argument turns",
  "Hold reactions after challenges",
  "Make voices the engine",
  "Use room tone as heat",
  "Let silence follow key doubts",
  "Sustain drama without spectacle",
  "Use blocking as persuasion",
  "Escalate through performance",
] as const;

type TwelveAngryMenStatement = (typeof CANONICAL_12_ANGRY_MEN_STATEMENTS)[number];
const VERIFIED_SCENARIO_ID = "scenario_12_angry_men_1957";

const statements: Readonly<Record<FilmWorkLanguage, Readonly<Record<TwelveAngryMenStatement, string>>>> = {
  en: {
    "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.": "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.",
    "Chamber drama": "Chamber drama",
    "Jury-room conflict": "Jury-room conflict",
    "Ensemble debate": "Ensemble debate",
    "Claustrophobic": "Claustrophobic",
    "Combative": "Combative",
    "Increasingly doubtful": "Increasingly doubtful",
    "Build tension through argument": "Build tension through argument",
    "Let doubt shift alliances": "Let doubt shift alliances",
    "Turn evidence into character conflict": "Turn evidence into character conflict",
    "Use one-room blocking": "Use one-room blocking",
    "Track power through positions": "Track power through positions",
    "Tighten faces as pressure rises": "Tighten faces as pressure rises",
    "Shape dialogue rhythm": "Shape dialogue rhythm",
    "Cut on argument turns": "Cut on argument turns",
    "Hold reactions after challenges": "Hold reactions after challenges",
    "Make voices the engine": "Make voices the engine",
    "Use room tone as heat": "Use room tone as heat",
    "Let silence follow key doubts": "Let silence follow key doubts",
    "Sustain drama without spectacle": "Sustain drama without spectacle",
    "Use blocking as persuasion": "Use blocking as persuasion",
    "Escalate through performance": "Escalate through performance",
  },
  nb: {
    "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.": "Skap et kammerspill i ett rom der argumenter, tvil og gruppepress driver handlingen.",
    "Chamber drama": "Kammerspill",
    "Jury-room conflict": "Konflikt i juryrommet",
    "Ensemble debate": "Debatt i ensemblet",
    "Claustrophobic": "Klaustrofobisk",
    "Combative": "Konfronterende",
    "Increasingly doubtful": "Stadig mer preget av tvil",
    "Build tension through argument": "Bygg spenning gjennom argumentasjon",
    "Let doubt shift alliances": "La tvilen endre allianser",
    "Turn evidence into character conflict": "Gjør bevis til konflikt mellom personene",
    "Use one-room blocking": "Bruk plassering og bevegelser i ett rom",
    "Track power through positions": "Vis maktforhold gjennom plassering",
    "Tighten faces as pressure rises": "Gå tettere på ansiktene når presset øker",
    "Shape dialogue rhythm": "Form rytmen i dialogen",
    "Cut on argument turns": "Klipp når argumentasjonen skifter",
    "Hold reactions after challenges": "Hold reaksjonsbildene etter innvendinger",
    "Make voices the engine": "La stemmene drive handlingen",
    "Use room tone as heat": "Bruk romlyden til å forsterke presset",
    "Let silence follow key doubts": "La stillheten følge avgjørende tvil",
    "Sustain drama without spectacle": "Oppretthold dramaet uten spektakel",
    "Use blocking as persuasion": "Bruk plassering som overtalelsesmiddel",
    "Escalate through performance": "Øk konflikten gjennom skuespillet",
  },
  fr: {
    "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.": "Faites d’un huis clos dans une seule pièce un drame où les arguments, le doute et la pression du groupe font avancer l’action.",
    "Chamber drama": "Drame en huis clos",
    "Jury-room conflict": "Conflit dans la salle des jurés",
    "Ensemble debate": "Débat choral",
    "Claustrophobic": "Claustrophobique",
    "Combative": "Combatif",
    "Increasingly doubtful": "De plus en plus traversé par le doute",
    "Build tension through argument": "Construisez la tension par l’argumentation",
    "Let doubt shift alliances": "Laissez le doute modifier les alliances",
    "Turn evidence into character conflict": "Transformez les preuves en conflits entre personnages",
    "Use one-room blocking": "Utilisez les déplacements dans une seule pièce",
    "Track power through positions": "Montrez les rapports de force par les positions",
    "Tighten faces as pressure rises": "Resserrez les cadres sur les visages à mesure que la pression monte",
    "Shape dialogue rhythm": "Donnez son rythme au dialogue",
    "Cut on argument turns": "Coupez aux tournants de l’argumentation",
    "Hold reactions after challenges": "Prolongez les réactions après les objections",
    "Make voices the engine": "Faites des voix le moteur de l’action",
    "Use room tone as heat": "Faites de l’ambiance sonore de la pièce une source de tension",
    "Let silence follow key doubts": "Laissez le silence suivre les doutes décisifs",
    "Sustain drama without spectacle": "Maintenez le drame sans spectacle",
    "Use blocking as persuasion": "Faites des placements un outil de persuasion",
    "Escalate through performance": "Intensifiez le conflit par le jeu des acteurs",
  },
  pt: {
    "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.": "Construa um drama de câmara num único espaço, em que os argumentos, as dúvidas e a pressão do grupo fazem avançar a ação.",
    "Chamber drama": "Drama de câmara",
    "Jury-room conflict": "Conflito na sala do júri",
    "Ensemble debate": "Debate de conjunto",
    "Claustrophobic": "Claustrofóbico",
    "Combative": "Combativo",
    "Increasingly doubtful": "Cada vez mais marcado pela dúvida",
    "Build tension through argument": "Crie tensão através do debate",
    "Let doubt shift alliances": "Deixe que a dúvida altere as alianças",
    "Turn evidence into character conflict": "Transforme as provas em conflito entre personagens",
    "Use one-room blocking": "Use a marcação dos atores num único espaço",
    "Track power through positions": "Mostre as relações de poder através das posições",
    "Tighten faces as pressure rises": "Aproxime os rostos à medida que a pressão aumenta",
    "Shape dialogue rhythm": "Molde o ritmo dos diálogos",
    "Cut on argument turns": "Corte nas viragens da argumentação",
    "Hold reactions after challenges": "Mantenha as reações depois das contestações",
    "Make voices the engine": "Faça das vozes o motor da ação",
    "Use room tone as heat": "Use o ambiente sonoro da sala para intensificar a tensão",
    "Let silence follow key doubts": "Deixe o silêncio seguir as dúvidas decisivas",
    "Sustain drama without spectacle": "Sustente o drama sem espetáculo",
    "Use blocking as persuasion": "Use a marcação dos atores como persuasão",
    "Escalate through performance": "Intensifique o conflito através das interpretações",
  },
};

export function presentVerifiedFilmStatement(
  language: FilmWorkLanguage,
  briefType: ProductionCaseBriefType,
  scenarioId: string,
  original: string,
): string {
  if (briefType !== "production_case" || scenarioId !== VERIFIED_SCENARIO_ID) return original;
  const presentation = statements[language];
  return Object.prototype.hasOwnProperty.call(presentation, original)
    ? presentation[original as TwelveAngryMenStatement]
    : original;
}

/** Shared read-only presentation resolver. Original corpus and storage remain untouched. */
export function presentFilmCaseContent(
  language: FilmWorkLanguage,
  briefType: ProductionCaseBriefType,
  scenarioId: string,
  original: string,
): string {
  return briefType === "seed_fallback"
    ? presentSeedFallbackText(language, briefType, original)
    : presentVerifiedFilmStatement(language, briefType, scenarioId, original);
}
