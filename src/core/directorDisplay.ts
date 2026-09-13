import type { DirectorKnowledgeCategoryId, DirectorTerm } from "./directorKnowledge.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { DIRECTOR_TERM_COPY_FR_1 } from "./directorDisplay.fr.1.js";
import { DIRECTOR_TERM_COPY_FR_2 } from "./directorDisplay.fr.2.js";
import { DIRECTOR_TERM_COPY_PT_1 } from "./directorDisplay.pt.1.js";
import { DIRECTOR_TERM_COPY_PT_2 } from "./directorDisplay.pt.2.js";

export const DIRECTOR_TERM_COPY_FR = { ...DIRECTOR_TERM_COPY_FR_1, ...DIRECTOR_TERM_COPY_FR_2 } as const;
export const DIRECTOR_TERM_COPY_PT = { ...DIRECTOR_TERM_COPY_PT_1, ...DIRECTOR_TERM_COPY_PT_2 } as const;

export type DirectorLocalizedTermCopy = {
  readonly label: string;
  readonly definition: string;
  readonly example: string;
};

export type DirectorTermDisplay = {
  readonly primaryTerm: string;
  readonly localizedTerm: string;
  readonly definition: string;
  readonly directorUse: string;
  readonly example: string;
};

export const DIRECTOR_CATEGORY_USE_FR: Readonly<Record<DirectorKnowledgeCategoryId, string>> = {
  directing_process: "La réalisation utilise ce concept pour formuler et communiquer la direction créative globale du film.",
  script_dramaturgy: "La réalisation utilise ce concept pour décomposer le scénario et la scène en actions dramatiques concrètement jouables.",
  performance_casting: "La réalisation utilise ce concept dans le casting, les répétitions et les ajustements concrets du jeu d’acteur.",
  blocking_staging: "La réalisation utilise ce concept pour organiser clairement les personnes, les regards et les mouvements dans l’espace.",
  shot_composition: "La réalisation utilise ce concept pour contrôler l’information donnée au public, la proximité et l’attention visuelle.",
  camera_lens: "La réalisation utilise ce concept avec la direction de la photographie pour choisir la perspective, la représentation de l’espace et le mouvement de caméra.",
  exposure_motion: "La réalisation utilise ce concept avec l’équipe image pour contrôler l’enregistrement de la lumière et le rendu du mouvement.",
  lighting_color: "La réalisation utilise ce concept pour coordonner la lumière, la palette, l’atmosphère et la chaîne technique de couleur.",
  design_continuity: "La réalisation utilise ce concept pour construire un monde crédible et préserver une continuité porteuse de sens entre les prises.",
  editing_time: "La réalisation utilise ce concept avec le montage pour façonner le temps, le rythme et l’ordre des informations.",
  sound_music: "La réalisation utilise ce concept pour déterminer la source, la perspective, la priorité et la fonction dramatique du son.",
  production_post: "La réalisation utilise ce concept pour collaborer avec précision pendant le tournage, la postproduction et la livraison technique.",
};

export const DIRECTOR_CATEGORY_USE_PT: Readonly<Record<DirectorKnowledgeCategoryId, string>> = {
  directing_process: "A realização utiliza este conceito para formular e comunicar a direção criativa global do filme.",
  script_dramaturgy: "A realização utiliza este conceito quando decompõe o argumento e a cena em ações dramáticas concretamente jogáveis.",
  performance_casting: "A realização utiliza este conceito no casting, nos ensaios e em ajustes concretos do trabalho dos atores.",
  blocking_staging: "A realização utiliza este conceito para organizar com clareza pessoas, olhares e movimentos no espaço.",
  shot_composition: "A realização utiliza este conceito para controlar a informação dada ao público, a proximidade e a atenção visual.",
  camera_lens: "A realização utiliza este conceito com a direção de fotografia para escolher perspetiva, representação do espaço e movimento de câmara.",
  exposure_motion: "A realização utiliza este conceito com a equipa de imagem para controlar o registo da luz e a representação do movimento.",
  lighting_color: "A realização utiliza este conceito para coordenar luz, paleta, atmosfera e o fluxo técnico de cor.",
  design_continuity: "A realização utiliza este conceito para construir um mundo credível e preservar uma continuidade significativa entre takes.",
  editing_time: "A realização utiliza este conceito com a montagem para moldar tempo, ritmo e ordem da informação.",
  sound_music: "A realização utiliza este conceito para determinar a fonte, a perspetiva, a prioridade e a função dramática do som.",
  production_post: "A realização utiliza este conceito para colaborar com precisão durante a rodagem, a pós-produção e a entrega técnica.",
};

export function getDirectorTermDisplay(language: FilmWorkLanguage, term: DirectorTerm): DirectorTermDisplay {
  const canonical: DirectorTermDisplay = {
    primaryTerm: term.term,
    localizedTerm: term.norwegian,
    definition: term.definition,
    directorUse: term.directorUse,
    example: term.example,
  };

  if (language !== "fr" && language !== "pt") return canonical;

  const copy = language === "fr" ? DIRECTOR_TERM_COPY_FR[term.id] : DIRECTOR_TERM_COPY_PT[term.id];
  if (!copy) return canonical;

  const categoryUse = language === "fr" ? DIRECTOR_CATEGORY_USE_FR : DIRECTOR_CATEGORY_USE_PT;
  return {
    primaryTerm: term.term,
    localizedTerm: copy.label,
    definition: copy.definition,
    directorUse: categoryUse[term.category],
    example: copy.example,
  };
}
