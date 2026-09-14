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
      sceneTitle: { label: "Scene title", prompt: "Give the scene a working title or number." },
      sceneContext: { label: "Scene context", prompt: "What has happened before, and what does the audience know on entry?" },
      sceneObjective: { label: "Scene objective", prompt: "What must change by the end of the scene?" },
      audienceEffect: { label: "Audience effect", prompt: "What should the audience feel, notice, fear, expect, or misunderstand?" },
      conflictTurn: { label: "Conflict and turn", prompt: "Where is the resistance, and what is the decisive turn?" },
      formalStrategy: { label: "Formal strategy", prompt: "State the central formal rule that holds the scene together." },
      blocking: { label: "Blocking", prompt: "Map entrances, exits, distance, eyelines, power positions, and movement." },
      performanceDirection: { label: "Performance direction", prompt: "What actions, tempo, restraint, subtext, and changes should the actors play?" },
      productionDesign: { label: "Production design", prompt: "Which objects, surfaces, colors, costume details, and spatial facts carry meaning?" },
      shotPlan: { label: "Shot plan", prompt: "Define the scene's overall coverage rule before detailing individual shot cards below." },
      cameraMovementLenses: { label: "Camera, movement, and lenses", prompt: "Define camera position, movement, distance, lens behavior, and perspective." },
      lightingPalette: { label: "Lighting and palette", prompt: "Define source logic, contrast, exposure priorities, color, and transitions." },
      editingRhythm: { label: "Editing rhythm", prompt: "Describe duration, cut points, reactions, ellipses, overlaps, and rhythm changes." },
      soundStrategy: { label: "Sound strategy", prompt: "Plan dialogue, ambience, off-screen sound, silence, music, and sonic perspective." },
      practicalConstraints: { label: "Practical constraints", prompt: "Record time, location, cast, equipment, safety, continuity, and budget limits." },
      proofOfIntent: { label: "Proof of intent", prompt: "What observable evidence in the finished scene will prove the directing idea worked?" },
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
      sceneTitle: { label: "Scenetittel", prompt: "Gi scenen en arbeidstittel eller et nummer." },
      sceneContext: { label: "Scenekontekst", prompt: "Hva har skjedd før, og hva vet publikum idet scenen begynner?" },
      sceneObjective: { label: "Scenemål", prompt: "Hva må ha endret seg når scenen er over?" },
      audienceEffect: { label: "Publikumseffekt", prompt: "Hva skal publikum føle, legge merke til, frykte, forvente eller misforstå?" },
      conflictTurn: { label: "Konflikt og vending", prompt: "Hvor ligger motstanden, og hva er den avgjørende vendingen?" },
      formalStrategy: { label: "Formell strategi", prompt: "Formuler den sentrale formregelen som holder scenen sammen." },
      blocking: { label: "Blocking", prompt: "Kartlegg innganger, utganger, avstand, blikkretninger, maktposisjoner og bevegelse." },
      performanceDirection: { label: "Skuespillerregi", prompt: "Hvilke handlinger, tempo, tilbakeholdenhet, undertekst og endringer skal skuespillerne spille?" },
      productionDesign: { label: "Scenografi", prompt: "Hvilke gjenstander, overflater, farger, kostymedetaljer og romlige fakta bærer mening?" },
      shotPlan: { label: "Innstillingsplan", prompt: "Definer scenens overordnede dekningsregel før du beskriver de enkelte innstillingskortene nedenfor." },
      cameraMovementLenses: { label: "Kamera, bevegelse og optikk", prompt: "Definer kameraposisjon, bevegelse, avstand, optisk uttrykk og perspektiv." },
      lightingPalette: { label: "Lys og palett", prompt: "Definer lyskildelogikk, kontrast, eksponeringsprioriteringer, farge og overganger." },
      editingRhythm: { label: "Klipperytme", prompt: "Beskriv varighet, klippepunkter, reaksjoner, ellipser, overlappinger og rytmeendringer." },
      soundStrategy: { label: "Lydstrategi", prompt: "Planlegg dialog, atmosfære, lyd utenfor bildet, stillhet, musikk og lydperspektiv." },
      practicalConstraints: { label: "Praktiske rammer", prompt: "Registrer tid, location, skuespillere, utstyr, sikkerhet, kontinuitet og budsjettgrenser." },
      proofOfIntent: { label: "Bevis på intensjon", prompt: "Hvilke observerbare tegn i den ferdige scenen vil vise at regiideen fungerte?" },
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
      sceneTitle: { label: "Titre de la scène", prompt: "Donnez à la scène un titre de travail ou un numéro." },
      sceneContext: { label: "Contexte de la scène", prompt: "Que s’est-il passé avant, et que sait le public à l’entrée dans la scène ?" },
      sceneObjective: { label: "Objectif de la scène", prompt: "Qu’est-ce qui doit avoir changé à la fin de la scène ?" },
      audienceEffect: { label: "Effet sur le public", prompt: "Que doit ressentir, remarquer, craindre, attendre ou mal comprendre le public ?" },
      conflictTurn: { label: "Conflit et bascule", prompt: "Où se situe la résistance, et quel est le tournant décisif ?" },
      formalStrategy: { label: "Stratégie formelle", prompt: "Énoncez la règle formelle centrale qui assure la cohérence de la scène." },
      blocking: { label: "Placement et déplacements", prompt: "Cartographiez les entrées, sorties, distances, regards, positions de pouvoir et déplacements." },
      performanceDirection: { label: "Direction d’acteurs", prompt: "Quelles actions, quel tempo, quelle retenue, quel sous-texte et quelles évolutions les acteurs doivent-ils jouer ?" },
      productionDesign: { label: "Décors et direction artistique", prompt: "Quels objets, surfaces, couleurs, détails de costume et données spatiales portent du sens ?" },
      shotPlan: { label: "Plan de découpage", prompt: "Définissez la règle générale de couverture de la scène avant de détailler les fiches de plan ci-dessous." },
      cameraMovementLenses: { label: "Caméra, mouvement et focales", prompt: "Définissez la position de caméra, le mouvement, la distance, le comportement des focales et la perspective." },
      lightingPalette: { label: "Lumière et palette", prompt: "Définissez la logique des sources, le contraste, les priorités d’exposition, la couleur et les transitions." },
      editingRhythm: { label: "Rythme du montage", prompt: "Décrivez la durée, les points de coupe, les réactions, les ellipses, les chevauchements et les changements de rythme." },
      soundStrategy: { label: "Stratégie sonore", prompt: "Planifiez les dialogues, les ambiances, le hors-champ sonore, le silence, la musique et la perspective sonore." },
      practicalConstraints: { label: "Contraintes pratiques", prompt: "Consignez les limites de temps, de lieu, de distribution, de matériel, de sécurité, de continuité et de budget." },
      proofOfIntent: { label: "Preuve d’intention", prompt: "Quels éléments observables dans la scène terminée prouveront que l’intention de réalisation fonctionne ?" },
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
      sceneTitle: { label: "Título da cena", prompt: "Dê à cena um título de trabalho ou um número." },
      sceneContext: { label: "Contexto da cena", prompt: "O que aconteceu antes e o que sabe o público à entrada da cena?" },
      sceneObjective: { label: "Objetivo da cena", prompt: "O que tem de mudar até ao fim da cena?" },
      audienceEffect: { label: "Efeito no público", prompt: "O que deve o público sentir, notar, recear, esperar ou interpretar mal?" },
      conflictTurn: { label: "Conflito e viragem", prompt: "Onde está a resistência e qual é a viragem decisiva?" },
      formalStrategy: { label: "Estratégia formal", prompt: "Defina a regra formal central que mantém a cena coesa." },
      blocking: { label: "Marcação cénica", prompt: "Mapeie entradas, saídas, distâncias, linhas de olhar, posições de poder e movimento." },
      performanceDirection: { label: "Direção de atores", prompt: "Que ações, tempo, contenção, subtexto e mudanças devem os atores interpretar?" },
      productionDesign: { label: "Direção de arte", prompt: "Que objetos, superfícies, cores, detalhes de guarda-roupa e dados espaciais transportam significado?" },
      shotPlan: { label: "Planificação dos planos", prompt: "Defina a regra geral de cobertura da cena antes de detalhar os cartões de plano abaixo." },
      cameraMovementLenses: { label: "Câmara, movimento e objetivas", prompt: "Defina a posição da câmara, o movimento, a distância, o comportamento das objetivas e a perspetiva." },
      lightingPalette: { label: "Iluminação e paleta", prompt: "Defina a lógica das fontes, o contraste, as prioridades de exposição, a cor e as transições." },
      editingRhythm: { label: "Ritmo de montagem", prompt: "Descreva a duração, os pontos de corte, as reações, as elipses, as sobreposições e as mudanças de ritmo." },
      soundStrategy: { label: "Estratégia sonora", prompt: "Planeie diálogo, ambiente, som fora de campo, silêncio, música e perspetiva sonora." },
      practicalConstraints: { label: "Condicionantes práticas", prompt: "Registe limites de tempo, localização, elenco, equipamento, segurança, continuidade e orçamento." },
      proofOfIntent: { label: "Prova da intenção", prompt: "Que evidência observável na cena final provará que a ideia de realização funcionou?" },
    },
  },
};
