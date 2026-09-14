import type { DirectorShotFieldId } from "./directorProject.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type FilmDirectorShotSizeValue =
  | "Extreme wide"
  | "Wide"
  | "Full"
  | "Medium"
  | "Medium close-up"
  | "Close-up"
  | "Extreme close-up"
  | "Insert"
  | "Point of view";

export type FilmDirectorShotCopy = {
  readonly kicker: string;
  readonly title: string;
  readonly description: string;
  readonly addShot: string;
  readonly emptyTitle: string;
  readonly emptyDescription: string;
  readonly addFirstShot: string;
  readonly shotTitleFallback: (shotNumber: number) => string;
  readonly fieldsDefined: (completed: number, total: number) => string;
  readonly moveShotUpAria: string;
  readonly moveShotDownAria: string;
  readonly duplicateShot: string;
  readonly deleteShot: string;
  readonly chooseSize: string;
  readonly fields: Record<DirectorShotFieldId, string>;
  readonly shotSizes: Record<FilmDirectorShotSizeValue, string>;
};

export const FILM_DIRECTOR_SHOT_COPY: Record<FilmWorkLanguage, FilmDirectorShotCopy> = {
  en: {
    kicker: "From scene strategy to coverage",
    title: "Shot cards",
    description: "Each card must explain both the production setup and the dramatic reason for the shot.",
    addShot: "+ Add shot",
    emptyTitle: "No shot cards yet.",
    emptyDescription: "Define the scene's coverage rule above, then add the first setup.",
    addFirstShot: "Add first shot",
    shotTitleFallback: (shotNumber) => `Shot ${shotNumber}`,
    fieldsDefined: (completed, total) => `${completed}/${total} fields defined`,
    moveShotUpAria: "Move shot up",
    moveShotDownAria: "Move shot down",
    duplicateShot: "Duplicate",
    deleteShot: "Delete",
    chooseSize: "Choose size…",
    fields: {
      title: "Shot title",
      shotSize: "Shot size",
      cameraPosition: "Camera position",
      movement: "Movement",
      lens: "Lens / focal behavior",
      subjectAction: "Subject action and blocking",
      dramaticPurpose: "Dramatic purpose",
      sound: "Sound and dialogue priority",
      estimatedDuration: "Estimated duration",
    },
    shotSizes: {
      "Extreme wide": "Extreme wide",
      Wide: "Wide",
      Full: "Full",
      Medium: "Medium",
      "Medium close-up": "Medium close-up",
      "Close-up": "Close-up",
      "Extreme close-up": "Extreme close-up",
      Insert: "Insert",
      "Point of view": "Point of view",
    },
  },
  nb: {
    kicker: "Fra scenestrategi til opptaksdekning",
    title: "Innstillingskort",
    description: "Hvert kort må forklare både opptaksoppsettet og den dramatiske begrunnelsen for innstillingen.",
    addShot: "+ Legg til innstilling",
    emptyTitle: "Ingen innstillingskort ennå.",
    emptyDescription: "Definer scenens dekningsregel ovenfor, og legg deretter til det første oppsettet.",
    addFirstShot: "Legg til første innstilling",
    shotTitleFallback: (shotNumber) => `Innstilling ${shotNumber}`,
    fieldsDefined: (completed, total) => `${completed}/${total} felt definert`,
    moveShotUpAria: "Flytt innstilling opp",
    moveShotDownAria: "Flytt innstilling ned",
    duplicateShot: "Dupliser",
    deleteShot: "Slett",
    chooseSize: "Velg utsnitt…",
    fields: {
      title: "Innstillingstittel",
      shotSize: "Utsnitt",
      cameraPosition: "Kameraposisjon",
      movement: "Bevegelse",
      lens: "Optikk / brennviddeuttrykk",
      subjectAction: "Motivhandling og blocking",
      dramaticPurpose: "Dramatisk hensikt",
      sound: "Prioritet for lyd og dialog",
      estimatedDuration: "Anslått varighet",
    },
    shotSizes: {
      "Extreme wide": "Ultratotal",
      Wide: "Total",
      Full: "Helbilde",
      Medium: "Halvtotal",
      "Medium close-up": "Halvnær",
      "Close-up": "Nær",
      "Extreme close-up": "Ultranær",
      Insert: "Detaljinnstilling",
      "Point of view": "Subjektivt kamera (POV)",
    },
  },
  fr: {
    kicker: "De la stratégie de scène au découpage",
    title: "Fiches de plan",
    description: "Chaque fiche doit expliquer à la fois le dispositif de tournage et la raison dramatique du plan.",
    addShot: "+ Ajouter un plan",
    emptyTitle: "Aucune fiche de plan pour l’instant.",
    emptyDescription: "Définissez ci-dessus le principe de découpage de la scène, puis ajoutez le premier plan.",
    addFirstShot: "Ajouter le premier plan",
    shotTitleFallback: (shotNumber) => `Plan ${shotNumber}`,
    fieldsDefined: (completed, total) => `${completed}/${total} champs définis`,
    moveShotUpAria: "Déplacer le plan vers le haut",
    moveShotDownAria: "Déplacer le plan vers le bas",
    duplicateShot: "Dupliquer",
    deleteShot: "Supprimer",
    chooseSize: "Choisir une échelle…",
    fields: {
      title: "Intitulé du plan",
      shotSize: "Échelle de plan",
      cameraPosition: "Position de caméra",
      movement: "Mouvement",
      lens: "Focale / comportement optique",
      subjectAction: "Action du sujet et placement",
      dramaticPurpose: "Fonction dramatique",
      sound: "Priorité du son et des dialogues",
      estimatedDuration: "Durée estimée",
    },
    shotSizes: {
      "Extreme wide": "Très grand ensemble",
      Wide: "Plan d’ensemble",
      Full: "Plan en pied",
      Medium: "Plan moyen",
      "Medium close-up": "Plan rapproché poitrine",
      "Close-up": "Gros plan",
      "Extreme close-up": "Très gros plan",
      Insert: "Insert",
      "Point of view": "Plan subjectif",
    },
  },
  pt: {
    kicker: "Da estratégia da cena à cobertura",
    title: "Cartões de plano",
    description: "Cada cartão deve explicar tanto a configuração de rodagem como a razão dramática do plano.",
    addShot: "+ Adicionar plano",
    emptyTitle: "Ainda não há cartões de plano.",
    emptyDescription: "Defina acima a regra de cobertura da cena e depois adicione o primeiro plano.",
    addFirstShot: "Adicionar primeiro plano",
    shotTitleFallback: (shotNumber) => `Plano ${shotNumber}`,
    fieldsDefined: (completed, total) => `${completed}/${total} campos definidos`,
    moveShotUpAria: "Mover plano para cima",
    moveShotDownAria: "Mover plano para baixo",
    duplicateShot: "Duplicar",
    deleteShot: "Eliminar",
    chooseSize: "Escolher escala…",
    fields: {
      title: "Título do plano",
      shotSize: "Escala do plano",
      cameraPosition: "Posição da câmara",
      movement: "Movimento",
      lens: "Objetiva / comportamento focal",
      subjectAction: "Ação do sujeito e marcação",
      dramaticPurpose: "Função dramática",
      sound: "Prioridade do som e do diálogo",
      estimatedDuration: "Duração estimada",
    },
    shotSizes: {
      "Extreme wide": "Plano muito geral",
      Wide: "Plano geral",
      Full: "Plano de corpo inteiro",
      Medium: "Plano médio",
      "Medium close-up": "Plano médio aproximado",
      "Close-up": "Grande plano",
      "Extreme close-up": "Grande plano extremo",
      Insert: "Insert",
      "Point of view": "Plano subjetivo",
    },
  },
};
