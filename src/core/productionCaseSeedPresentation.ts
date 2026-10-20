import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ScenarioProductionBriefType } from "../ui/data/scenarioProductionBriefs.js";

/** Exact-string translation of generated seed hints only. Film claims and persisted IDs stay canonical. */
export const CANONICAL_SEED_FALLBACK_TEXT = [
  "Drama",
  "Treat this as an imported seed pending film-specific design",
  "Keep choices readable",
  "Focus the central conflict",
  "Use the seeded learning goals as provisional guidance",
  "Choose spaces that support the conflict",
  "Frame the player task clearly",
  "Keep story turns legible",
  "Build rhythm around consequences",
  "Support tone without overexplaining",
  "Use silence and texture as pressure",
] as const;

type SeedText = (typeof CANONICAL_SEED_FALLBACK_TEXT)[number];

const SEED_COPY: Readonly<Record<FilmWorkLanguage, Readonly<Record<SeedText, string>>>> = {
  en: {
    "Drama": "Drama",
    "Treat this as an imported seed pending film-specific design": "Treat this as an imported seed pending film-specific design",
    "Keep choices readable": "Keep choices readable",
    "Focus the central conflict": "Focus the central conflict",
    "Use the seeded learning goals as provisional guidance": "Use the seeded learning goals as provisional guidance",
    "Choose spaces that support the conflict": "Choose spaces that support the conflict",
    "Frame the player task clearly": "Frame the player task clearly",
    "Keep story turns legible": "Keep story turns legible",
    "Build rhythm around consequences": "Build rhythm around consequences",
    "Support tone without overexplaining": "Support tone without overexplaining",
    "Use silence and texture as pressure": "Use silence and texture as pressure",
  },
  nb: {
    "Drama": "Drama",
    "Treat this as an imported seed pending film-specific design": "Behandle dette som et importert utgangspunkt som venter på filmspesifikk utforming",
    "Keep choices readable": "Hold valgene forståelige",
    "Focus the central conflict": "Konsentrer deg om hovedkonflikten",
    "Use the seeded learning goals as provisional guidance": "Bruk de foreløpige læringsmålene som veiledning",
    "Choose spaces that support the conflict": "Velg steder som støtter konflikten",
    "Frame the player task clearly": "Gjør spilleroppgaven tydelig gjennom bildeutsnittet",
    "Keep story turns legible": "La historiens vendepunkter være lette å følge",
    "Build rhythm around consequences": "Bygg rytmen rundt konsekvensene",
    "Support tone without overexplaining": "Støtt tonen uten å forklare for mye",
    "Use silence and texture as pressure": "Bruk stillhet og lydtekstur til å skape press",
  },
  fr: {
    "Drama": "Drame",
    "Treat this as an imported seed pending film-specific design": "Considérez cet élément importé comme provisoire, en attente d’une conception propre au film",
    "Keep choices readable": "Gardez les choix compréhensibles",
    "Focus the central conflict": "Concentrez-vous sur le conflit central",
    "Use the seeded learning goals as provisional guidance": "Utilisez les objectifs pédagogiques provisoires comme repères",
    "Choose spaces that support the conflict": "Choisissez des espaces qui renforcent le conflit",
    "Frame the player task clearly": "Cadrez clairement la tâche du joueur",
    "Keep story turns legible": "Rendez les tournants du récit lisibles",
    "Build rhythm around consequences": "Construisez le rythme autour des conséquences",
    "Support tone without overexplaining": "Soutenez le ton sans tout expliquer",
    "Use silence and texture as pressure": "Utilisez le silence et la texture sonore pour créer de la tension",
  },
  pt: {
    "Drama": "Drama",
    "Treat this as an imported seed pending film-specific design": "Trate esta base importada como provisória, até existir uma conceção específica para o filme",
    "Keep choices readable": "Mantenha as escolhas claras",
    "Focus the central conflict": "Concentre-se no conflito central",
    "Use the seeded learning goals as provisional guidance": "Use os objetivos de aprendizagem provisórios como orientação",
    "Choose spaces that support the conflict": "Escolha espaços que reforcem o conflito",
    "Frame the player task clearly": "Enquadre claramente a tarefa do jogador",
    "Keep story turns legible": "Torne percetíveis as viragens da história",
    "Build rhythm around consequences": "Construa o ritmo em torno das consequências",
    "Support tone without overexplaining": "Sustente o tom sem explicar em excesso",
    "Use silence and texture as pressure": "Use o silêncio e a textura sonora para criar tensão",
  },
};

export function presentSeedFallbackText(
  language: FilmWorkLanguage,
  briefType: ScenarioProductionBriefType,
  text: string,
): string {
  if (briefType !== "seed_fallback") return text;
  const copy = SEED_COPY[language];
  return Object.prototype.hasOwnProperty.call(copy, text) ? copy[text as SeedText] : text;
}
