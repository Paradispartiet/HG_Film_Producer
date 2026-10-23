import type { DirectorBriefFieldId } from "./directorBrief.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type FilmDirectorBriefGroupId = "concept" | "staging" | "image" | "timeSound" | "feasibility";

export type FilmDirectorBriefFieldCopy = {
  readonly label: string;
  readonly prompt: string;
};

export type FilmDirectorBriefCopy = {
  readonly ariaLabel: string;
  readonly defined: string;
  readonly open: string;
  readonly groups: Record<FilmDirectorBriefGroupId, string>;
  readonly fields: Record<DirectorBriefFieldId, FilmDirectorBriefFieldCopy>;
};

export const FILM_DIRECTOR_BRIEF_COPY: Record<FilmWorkLanguage, FilmDirectorBriefCopy> = {
  en: {
    ariaLabel: "Active scene directing brief",
    defined: "Defined",
    open: "Open",
    groups: {
      concept: "Concept",
      staging: "Staging",
      image: "Image",
      timeSound: "Time and sound",
      feasibility: "Feasibility",
    },
    fields: {
      sceneTitle: { label: "Scene title", prompt: "What dramatic function should this scene serve?" },
      sceneContext: { label: "Scene context", prompt: "What situation does the audience encounter at the beginning?" },
      sceneObjective: { label: "Scene objective", prompt: "What must change before the scene ends?" },
      audienceEffect: { label: "Audience effect", prompt: "What response do you want to create in the audience?" },
      conflictTurn: { label: "Conflict and turn", prompt: "What reverses or redirects the conflict?" },
      formalStrategy: { label: "Formal strategy", prompt: "Which visual approach should organize the scene?" },
      blocking: { label: "Blocking", prompt: "How can character positions reveal the conflict?" },
      performanceDirection: { label: "Performance direction", prompt: "How should performances reveal the subtext?" },
      productionDesign: { label: "Production design", prompt: "How can the room and props intensify the conflict?" },
      shotPlan: { label: "Shot plan", prompt: "How should coverage control the audience's viewpoint?" },
      cameraMovementLenses: { label: "Camera, movement, and lenses", prompt: "Which camera strategy makes the dramatic change legible?" },
      lightingPalette: { label: "Lighting and palette", prompt: "Which lighting approach supports the scene's goal?" },
      editingRhythm: { label: "Editing rhythm", prompt: "How should cuts and pauses shape the turning point?" },
      soundStrategy: { label: "Sound strategy", prompt: "How should sound affect the audience's reading of the scene?" },
      practicalConstraints: { label: "Practical constraints", prompt: "What will you prioritize with limited time and resources?" },
      proofOfIntent: { label: "Proof of intent", prompt: "What observable sign would show that the direction works?" },
    },
  },
  nb: {
    ariaLabel: "Regibrief for aktiv scene",
    defined: "Definert",
    open: "Åpen",
    groups: {
      concept: "Konsept",
      staging: "Iscenesettelse",
      image: "Bilde",
      timeSound: "Tid og lyd",
      feasibility: "Gjennomførbarhet",
    },
    fields: {
      sceneTitle: { label: "Scenetittel", prompt: "Hvilken dramatisk funksjon skal scenen ha?" },
      sceneContext: { label: "Scenekontekst", prompt: "Hvilken situasjon møter publikum når scenen begynner?" },
      sceneObjective: { label: "Scenemål", prompt: "Hva skal endre seg før scenen slutter?" },
      audienceEffect: { label: "Publikumseffekt", prompt: "Hvilken opplevelse ønsker du å skape hos publikum?" },
      conflictTurn: { label: "Konflikt og vending", prompt: "Hva snur konflikten?" },
      formalStrategy: { label: "Formell strategi", prompt: "Hvilket visuelt grep skal styre scenen?" },
      blocking: { label: "Blocking", prompt: "Hvordan kan personenes plassering vise konflikten?" },
      performanceDirection: { label: "Skuespillerregi", prompt: "Hvordan skal skuespillerne gjøre underteksten synlig?" },
      productionDesign: { label: "Scenografi", prompt: "Hvordan kan rom og rekvisitter styrke konflikten?" },
      shotPlan: { label: "Innstillingsplan", prompt: "Hvordan skal innstillingene styre publikumsperspektivet?" },
      cameraMovementLenses: { label: "Kamera, bevegelse og optikk", prompt: "Hvilken kameraføring synliggjør den dramatiske endringen?" },
      lightingPalette: { label: "Lys og palett", prompt: "Hvilken lyssetting støtter scenens mål?" },
      editingRhythm: { label: "Klipperytme", prompt: "Hvordan skal klipp og pauser bære vendepunktet?" },
      soundStrategy: { label: "Lydstrategi", prompt: "Hvordan skal lyd påvirke tolkningen av scenen?" },
      practicalConstraints: { label: "Praktiske rammer", prompt: "Hva vil du prioritere med begrenset tid og ressurser?" },
      proofOfIntent: { label: "Bevis på intensjon", prompt: "Hvilket observerbart tegn viser at regiideen fungerer?" },
    },
  },
  fr: {
    ariaLabel: "Brief de réalisation de la scène active",
    defined: "Défini",
    open: "Ouvert",
    groups: {
      concept: "Concept",
      staging: "Mise en scène",
      image: "Image",
      timeSound: "Temps et son",
      feasibility: "Faisabilité",
    },
    fields: {
      sceneTitle: { label: "Titre de la scène", prompt: "Quelle fonction dramatique cette scène doit-elle remplir ?" },
      sceneContext: { label: "Contexte de la scène", prompt: "Quelle situation le public découvre-t-il au début de la scène ?" },
      sceneObjective: { label: "Objectif de la scène", prompt: "Qu’est-ce qui doit changer avant la fin de la scène ?" },
      audienceEffect: { label: "Effet sur le public", prompt: "Quelle réaction voulez-vous provoquer chez le public ?" },
      conflictTurn: { label: "Conflit et bascule", prompt: "Qu’est-ce qui fait basculer le conflit ?" },
      formalStrategy: { label: "Stratégie formelle", prompt: "Quel choix visuel doit organiser la scène ?" },
      blocking: { label: "Placement et déplacements", prompt: "Comment les positions des personnages rendent-elles le conflit visible ?" },
      performanceDirection: { label: "Direction d’acteurs", prompt: "Comment le jeu des acteurs doit-il révéler le sous-texte ?" },
      productionDesign: { label: "Décors et direction artistique", prompt: "Comment le décor et les accessoires peuvent-ils intensifier le conflit ?" },
      shotPlan: { label: "Plan de découpage", prompt: "Comment le découpage doit-il guider le point de vue du public ?" },
      cameraMovementLenses: { label: "Caméra, mouvement et focales", prompt: "Quel dispositif de caméra rend visible le changement dramatique ?" },
      lightingPalette: { label: "Lumière et palette", prompt: "Quel éclairage sert le but de la scène ?" },
      editingRhythm: { label: "Rythme du montage", prompt: "Comment les coupes et les pauses doivent-elles former le tournant ?" },
      soundStrategy: { label: "Stratégie sonore", prompt: "Comment le son influence-t-il la lecture de la scène ?" },
      practicalConstraints: { label: "Contraintes pratiques", prompt: "Que privilégier avec peu de temps et de moyens ?" },
      proofOfIntent: { label: "Preuve d’intention", prompt: "Quel signe observable prouverait que la mise en scène fonctionne ?" },
    },
  },
  pt: {
    ariaLabel: "Brief de realização da cena ativa",
    defined: "Definido",
    open: "Em aberto",
    groups: {
      concept: "Conceito",
      staging: "Encenação",
      image: "Imagem",
      timeSound: "Tempo e som",
      feasibility: "Viabilidade",
    },
    fields: {
      sceneTitle: { label: "Título da cena", prompt: "Que função dramática deve ter esta cena?" },
      sceneContext: { label: "Contexto da cena", prompt: "Que situação encontra o público no início?" },
      sceneObjective: { label: "Objetivo da cena", prompt: "O que deve mudar antes de a cena terminar?" },
      audienceEffect: { label: "Efeito no público", prompt: "Que reação queres provocar no público?" },
      conflictTurn: { label: "Conflito e viragem", prompt: "O que faz mudar o conflito?" },
      formalStrategy: { label: "Estratégia formal", prompt: "Que escolha visual deve organizar a cena?" },
      blocking: { label: "Marcação cénica", prompt: "Como podem as posições das personagens revelar o conflito?" },
      performanceDirection: { label: "Direção de atores", prompt: "Como devem as interpretações revelar o subtexto?" },
      productionDesign: { label: "Direção de arte", prompt: "Como podem o espaço e os adereços intensificar o conflito?" },
      shotPlan: { label: "Planificação dos planos", prompt: "Como deve a planificação orientar o ponto de vista do público?" },
      cameraMovementLenses: { label: "Câmara, movimento e objetivas", prompt: "Que estratégia de câmara torna a mudança dramática visível?" },
      lightingPalette: { label: "Iluminação e paleta", prompt: "Que iluminação serve o objetivo da cena?" },
      editingRhythm: { label: "Ritmo de montagem", prompt: "Como devem os cortes e as pausas moldar a viragem?" },
      soundStrategy: { label: "Estratégia sonora", prompt: "Como deve o som influenciar a interpretação da cena?" },
      practicalConstraints: { label: "Condicionantes práticas", prompt: "O que priorizar com tempo e recursos limitados?" },
      proofOfIntent: { label: "Prova da intenção", prompt: "Que sinal observável demonstraria que a realização funciona?" },
    },
  },
};
