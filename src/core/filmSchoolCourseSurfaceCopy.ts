import type { FilmSchoolGroundCourseId } from "./filmSchoolGroundCourse.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type FilmSchoolRoadmapEntry = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

export type FilmSchoolCourseSurfaceCopy = {
  readonly titleLead: string;
  readonly titleEmphasis: string;
  readonly heroIntro: string;
  readonly practicePlaceholder: string;
  readonly finalTitle: string;
  readonly finalDescription: string;
  readonly roadmapTitle: string;
  readonly roadmapStatus: string;
  readonly roadmapEntries: readonly FilmSchoolRoadmapEntry[];
  readonly footerFlow: string;
  readonly completionTitle?: string;
  readonly completionDescription?: string;
  readonly completionSmall?: string;
};

type FilmSchoolCourseSurfaceByCourse = Record<FilmSchoolGroundCourseId, FilmSchoolCourseSurfaceCopy>;

export const FILM_SCHOOL_COURSE_SURFACE_COPY: Record<FilmWorkLanguage, FilmSchoolCourseSurfaceByCourse> = {
  en: {
    screenplay: {
      titleLead: "Screenplay and", titleEmphasis: "scene analysis",
      heroIntro: "Learn the concept, see it at work in a film, answer a check question and apply it in your own directing work.",
      practicePlaceholder: "Write your scene analysis here …",
      finalTitle: "From analysis to directing decision",
      finalDescription: "Plan one scene where point of view, objective, obstacle, turning point, subtext and audience information work together. The assignment opens in Film Director with five concrete delivery fields.",
      roadmapTitle: "Next courses", roadmapStatus: "Coming later",
      roadmapEntries: [
        { number: "02", title: "Directing actors and blocking", description: "Playable actions, listening, movement, eyelines, rehearsal and adjustments." },
        { number: "03", title: "Image, camera and optics", description: "Framing, composition, perspective, focal length, movement and focus." },
        { number: "04", title: "Lighting, colour and production design", description: "Sources, contrast, exposure, palette, materials and continuity." },
        { number: "05", title: "Editing, sound and finishing", description: "Coverage, rhythm, ellipses, sound perspective, mix, grading and delivery." },
      ],
      footerFlow: "Concept → film example → quiz → practice → Film Director",
    },
    performance: {
      titleLead: "Directing actors and", titleEmphasis: "blocking",
      heroIntro: "Turn scene analysis into playable action, organise bodies in space and give precise adjustments between takes.",
      practicePlaceholder: "Write your rehearsal, blocking or adjustment note here …",
      finalTitle: "From rehearsal to finished take",
      finalDescription: "Plan one scene with a clear objective, playable action, blocking, camera needs and one concrete adjustment between takes. The assignment opens in Film Director with five delivery fields.",
      roadmapTitle: "Next courses", roadmapStatus: "Coming later",
      roadmapEntries: [
        { number: "03", title: "Image, camera and optics", description: "Framing, composition, perspective, focal length, movement and focus." },
        { number: "04", title: "Lighting, colour and production design", description: "Sources, contrast, exposure, palette, materials and continuity." },
        { number: "05", title: "Editing, sound and finishing", description: "Coverage, rhythm, ellipses, sound perspective, mix, grading and delivery." },
      ],
      footerFlow: "Action → rehearsal → blocking → take → adjustment",
    },
    camera: {
      titleLead: "Image, camera and", titleEmphasis: "optics",
      heroIntro: "Make every framing choice, camera position, lens, focus shift and camera move a concrete dramatic decision.",
      practicePlaceholder: "Write your image, camera or optics plan here …",
      finalTitle: "From scene intention to camera system",
      finalDescription: "Plan one scene where framing, camera position, lens, movement and focus follow the scene’s dramatic development. The assignment opens in Film Director with five delivery fields.",
      roadmapTitle: "Next courses", roadmapStatus: "Coming later",
      roadmapEntries: [
        { number: "04", title: "Lighting, colour and production design", description: "Sources, contrast, exposure, palette, materials and continuity." },
        { number: "05", title: "Editing, sound and finishing", description: "Coverage, rhythm, ellipses, sound perspective, mix, grading and delivery." },
      ],
      footerFlow: "Framing → perspective → optics → movement → focus",
    },
    lightingDesign: {
      titleLead: "Lighting, colour and", titleEmphasis: "production design",
      heroIntro: "Build one coherent look system where light sources, contrast, palette, materials and physical space serve the same dramatic task.",
      practicePlaceholder: "Write your lighting, colour or design plan here …",
      finalTitle: "From scene intention to a unified look system",
      finalDescription: "Plan one scene where light sources, contrast, palette, production design and visual continuity follow the same dramatic development. The assignment opens in Film Director with five delivery fields.",
      roadmapTitle: "Next course", roadmapStatus: "Coming later",
      roadmapEntries: [
        { number: "05", title: "Editing, sound and finishing", description: "Coverage, rhythm, ellipses, sound perspective, mix, grading and delivery." },
      ],
      footerFlow: "Source → contrast → palette → space → continuity",
    },
    editingSound: {
      titleLead: "Editing, sound and", titleEmphasis: "finishing",
      heroIntro: "Shape the film’s final time, listening position and delivery through editing rhythm, ellipses, sound perspective, music, mix, grading and master control.",
      practicePlaceholder: "Write your editing, sound or finishing plan here …",
      finalTitle: "From footage to finished screening master",
      finalDescription: "Plan one scene through editing, time structure, sound perspective, music, mix, grading and quality-controlled delivery. The assignment opens in Film Director with five delivery fields.",
      roadmapTitle: "5 × 5 · 25 modules", roadmapStatus: "Complete", roadmapEntries: [],
      footerFlow: "Coverage → time → sound space → mix → master",
      completionTitle: "The ground course is complete",
      completionDescription: "Screenplay, directing actors, camera, lighting and design, editing, sound and finishing are now connected to Film Atlas and Film Director.",
      completionSmall: "5 courses",
    },
  },
  nb: {
    screenplay: {
      titleLead: "Manus og", titleEmphasis: "sceneanalyse",
      heroIntro: "Lær begrepet, se det brukt i en film, løs en kontrolloppgave og bruk det i ditt eget regiarbeid.",
      practicePlaceholder: "Skriv sceneanalysen din her …",
      finalTitle: "Fra analyse til regibeslutning",
      finalDescription: "Planlegg én scene der synsvinkel, mål, hindring, vendepunkt, undertekst og publikumsinformasjon virker sammen. Oppgaven åpnes i Film Director med fem konkrete leveransefelt.",
      roadmapTitle: "Neste kurs", roadmapStatus: "Kommer senere",
      roadmapEntries: [
        { number: "02", title: "Skuespillerregi og blocking", description: "Spillbar handling, lytting, bevegelse, blikk, prøve og justering." },
        { number: "03", title: "Bilde, kamera og optikk", description: "Utsnitt, komposisjon, perspektiv, brennvidde, bevegelse og fokus." },
        { number: "04", title: "Lys, farge og produksjonsdesign", description: "Lyskilder, kontrast, eksponering, palett, materialer og kontinuitet." },
        { number: "05", title: "Klipp, lyd og ferdigstilling", description: "Coverage, rytme, ellipser, lydperspektiv, miks, grading og levering." },
      ],
      footerFlow: "Begrep → filmeksempel → quiz → praksis → Film Director",
    },
    performance: {
      titleLead: "Skuespillerregi og", titleEmphasis: "blocking",
      heroIntro: "Oversett sceneanalyse til spillbar handling, organiser kroppene i rommet og gi presise justeringer mellom tagninger.",
      practicePlaceholder: "Skriv prøve-, blocking- eller justeringsnotatet ditt her …",
      finalTitle: "Fra prøve til ferdig tagning",
      finalDescription: "Planlegg én scene med tydelig mål, spillbar handling, blocking, kamerabehov og én konkret justering mellom tagninger. Oppgaven åpnes i Film Director med fem leveransefelt.",
      roadmapTitle: "Neste kurs", roadmapStatus: "Kommer senere",
      roadmapEntries: [
        { number: "03", title: "Bilde, kamera og optikk", description: "Utsnitt, komposisjon, perspektiv, brennvidde, bevegelse og fokus." },
        { number: "04", title: "Lys, farge og produksjonsdesign", description: "Lyskilder, kontrast, eksponering, palett, materialer og kontinuitet." },
        { number: "05", title: "Klipp, lyd og ferdigstilling", description: "Coverage, rytme, ellipser, lydperspektiv, miks, grading og levering." },
      ],
      footerFlow: "Handling → prøve → blocking → tagning → justering",
    },
    camera: {
      titleLead: "Bilde, kamera og", titleEmphasis: "optikk",
      heroIntro: "Gjør hvert utsnitt, ståsted, objektiv, fokusskift og kameratrekk til en konkret dramatisk beslutning.",
      practicePlaceholder: "Skriv bilde-, kamera- eller optikkplanen din her …",
      finalTitle: "Fra sceneintensjon til kamerasystem",
      finalDescription: "Planlegg én scene der utsnitt, kameraposisjon, objektiv, bevegelse og fokus følger scenens dramatiske utvikling. Oppgaven åpnes i Film Director med fem leveransefelt.",
      roadmapTitle: "Neste kurs", roadmapStatus: "Kommer senere",
      roadmapEntries: [
        { number: "04", title: "Lys, farge og produksjonsdesign", description: "Lyskilder, kontrast, eksponering, palett, materialer og kontinuitet." },
        { number: "05", title: "Klipp, lyd og ferdigstilling", description: "Coverage, rytme, ellipser, lydperspektiv, miks, grading og levering." },
      ],
      footerFlow: "Utsnitt → perspektiv → optikk → bevegelse → fokus",
    },
    lightingDesign: {
      titleLead: "Lys, farge og", titleEmphasis: "produksjonsdesign",
      heroIntro: "Bygg ett samlet look-system der lyskilder, kontrast, palett, materialer og fysisk rom utfører samme dramatiske oppgave.",
      practicePlaceholder: "Skriv lys-, farge- eller designplanen din her …",
      finalTitle: "Fra sceneintensjon til samlet look-system",
      finalDescription: "Planlegg én scene der lyskilder, kontrast, palett, produksjonsdesign og visuell kontinuitet følger samme dramatiske utvikling. Oppgaven åpnes i Film Director med fem leveransefelt.",
      roadmapTitle: "Neste kurs", roadmapStatus: "Kommer senere",
      roadmapEntries: [
        { number: "05", title: "Klipp, lyd og ferdigstilling", description: "Coverage, rytme, ellipser, lydperspektiv, miks, grading og levering." },
      ],
      footerFlow: "Kilde → kontrast → palett → rom → kontinuitet",
    },
    editingSound: {
      titleLead: "Klipp, lyd og", titleEmphasis: "ferdigstilling",
      heroIntro: "Form filmens endelige tid, lytteposisjon og leveranse gjennom klipperytme, ellipser, lydperspektiv, musikk, miks, grading og masterkontroll.",
      practicePlaceholder: "Skriv klipp-, lyd- eller ferdigstillingsplanen din her …",
      finalTitle: "Fra opptak til ferdig visningsmaster",
      finalDescription: "Planlegg én scene gjennom klipp, tidsstruktur, lydperspektiv, musikk, miks, grading og kvalitetssikret levering. Oppgaven åpnes i Film Director med fem leveransefelt.",
      roadmapTitle: "5 × 5 · 25 moduler", roadmapStatus: "Komplett", roadmapEntries: [],
      footerFlow: "Dekning → tid → lydrom → miks → master",
      completionTitle: "Grunnkurset er komplett",
      completionDescription: "Manus, skuespillerregi, kamera, lys og design, klipp, lyd og ferdigstilling er nå koblet til Film Atlas og Film Director.",
      completionSmall: "5 kurs",
    },
  },
  fr: {
    screenplay: {
      titleLead: "Scénario et", titleEmphasis: "analyse de scène",
      heroIntro: "Apprenez le concept, observez-le dans un film, répondez à une question de contrôle puis appliquez-le à votre propre travail de réalisation.",
      practicePlaceholder: "Écrivez votre analyse de scène ici …",
      finalTitle: "De l’analyse à la décision de mise en scène",
      finalDescription: "Planifiez une scène où point de vue, objectif, obstacle, tournant, sous-texte et information du public fonctionnent ensemble. L’exercice s’ouvre dans Film Director avec cinq champs de livraison concrets.",
      roadmapTitle: "Cours suivants", roadmapStatus: "À venir",
      roadmapEntries: [
        { number: "02", title: "Direction d’acteurs et blocking", description: "Actions jouables, écoute, mouvement, regards, répétition et ajustements." },
        { number: "03", title: "Image, caméra et optique", description: "Cadrage, composition, perspective, focale, mouvement et mise au point." },
        { number: "04", title: "Lumière, couleur et décors", description: "Sources, contraste, exposition, palette, matériaux et continuité." },
        { number: "05", title: "Montage, son et finition", description: "Coverage, rythme, ellipses, perspective sonore, mixage, étalonnage et livraison." },
      ],
      footerFlow: "Concept → exemple de film → quiz → pratique → Film Director",
    },
    performance: {
      titleLead: "Direction d’acteurs et", titleEmphasis: "blocking",
      heroIntro: "Transformez l’analyse de scène en actions jouables, organisez les corps dans l’espace et donnez des ajustements précis entre les prises.",
      practicePlaceholder: "Écrivez ici votre note de répétition, de blocking ou d’ajustement …",
      finalTitle: "De la répétition à la prise finalisée",
      finalDescription: "Planifiez une scène avec un objectif clair, une action jouable, un blocking, des besoins caméra et un ajustement concret entre les prises. L’exercice s’ouvre dans Film Director avec cinq champs de livraison.",
      roadmapTitle: "Cours suivants", roadmapStatus: "À venir",
      roadmapEntries: [
        { number: "03", title: "Image, caméra et optique", description: "Cadrage, composition, perspective, focale, mouvement et mise au point." },
        { number: "04", title: "Lumière, couleur et décors", description: "Sources, contraste, exposition, palette, matériaux et continuité." },
        { number: "05", title: "Montage, son et finition", description: "Coverage, rythme, ellipses, perspective sonore, mixage, étalonnage et livraison." },
      ],
      footerFlow: "Action → répétition → blocking → prise → ajustement",
    },
    camera: {
      titleLead: "Image, caméra et", titleEmphasis: "optique",
      heroIntro: "Faites de chaque cadrage, position de caméra, objectif, changement de point et mouvement une décision dramatique concrète.",
      practicePlaceholder: "Écrivez ici votre plan d’image, de caméra ou d’optique …",
      finalTitle: "De l’intention de scène au système caméra",
      finalDescription: "Planifiez une scène où cadrage, position de caméra, objectif, mouvement et mise au point suivent l’évolution dramatique. L’exercice s’ouvre dans Film Director avec cinq champs de livraison.",
      roadmapTitle: "Cours suivants", roadmapStatus: "À venir",
      roadmapEntries: [
        { number: "04", title: "Lumière, couleur et décors", description: "Sources, contraste, exposition, palette, matériaux et continuité." },
        { number: "05", title: "Montage, son et finition", description: "Coverage, rythme, ellipses, perspective sonore, mixage, étalonnage et livraison." },
      ],
      footerFlow: "Cadrage → perspective → optique → mouvement → mise au point",
    },
    lightingDesign: {
      titleLead: "Lumière, couleur et", titleEmphasis: "décors",
      heroIntro: "Construisez un système visuel cohérent où sources, contraste, palette, matériaux et espace physique servent la même tâche dramatique.",
      practicePlaceholder: "Écrivez ici votre plan de lumière, de couleur ou de décors …",
      finalTitle: "De l’intention de scène à un système visuel unifié",
      finalDescription: "Planifiez une scène où sources, contraste, palette, décors et continuité visuelle suivent la même évolution dramatique. L’exercice s’ouvre dans Film Director avec cinq champs de livraison.",
      roadmapTitle: "Cours suivant", roadmapStatus: "À venir",
      roadmapEntries: [
        { number: "05", title: "Montage, son et finition", description: "Coverage, rythme, ellipses, perspective sonore, mixage, étalonnage et livraison." },
      ],
      footerFlow: "Source → contraste → palette → espace → continuité",
    },
    editingSound: {
      titleLead: "Montage, son et", titleEmphasis: "finition",
      heroIntro: "Façonnez le temps final du film, sa position d’écoute et sa livraison par le rythme de montage, les ellipses, la perspective sonore, la musique, le mixage, l’étalonnage et le contrôle du master.",
      practicePlaceholder: "Écrivez ici votre plan de montage, de son ou de finition …",
      finalTitle: "Des rushes au master de projection final",
      finalDescription: "Planifiez une scène par le montage, la structure temporelle, la perspective sonore, la musique, le mixage, l’étalonnage et une livraison contrôlée. L’exercice s’ouvre dans Film Director avec cinq champs de livraison.",
      roadmapTitle: "5 × 5 · 25 modules", roadmapStatus: "Terminé", roadmapEntries: [],
      footerFlow: "Coverage → temps → espace sonore → mixage → master",
      completionTitle: "Le cours fondamental est terminé",
      completionDescription: "Scénario, direction d’acteurs, caméra, lumière et décors, montage, son et finition sont maintenant reliés à Film Atlas et Film Director.",
      completionSmall: "5 cours",
    },
  },
  pt: {
    screenplay: {
      titleLead: "Argumento e", titleEmphasis: "análise de cena",
      heroIntro: "Aprenda o conceito, veja-o aplicado num filme, responda a uma pergunta de controlo e use-o no seu próprio trabalho de realização.",
      practicePlaceholder: "Escreva aqui a sua análise de cena …",
      finalTitle: "Da análise à decisão de realização",
      finalDescription: "Planeie uma cena em que ponto de vista, objetivo, obstáculo, viragem, subtexto e informação do público funcionem em conjunto. O exercício abre no Film Director com cinco campos de entrega concretos.",
      roadmapTitle: "Cursos seguintes", roadmapStatus: "Em breve",
      roadmapEntries: [
        { number: "02", title: "Direção de atores e blocking", description: "Ações jogáveis, escuta, movimento, olhares, ensaio e ajustes." },
        { number: "03", title: "Imagem, câmara e ótica", description: "Enquadramento, composição, perspetiva, distância focal, movimento e foco." },
        { number: "04", title: "Luz, cor e design de produção", description: "Fontes, contraste, exposição, paleta, materiais e continuidade." },
        { number: "05", title: "Montagem, som e finalização", description: "Coverage, ritmo, elipses, perspetiva sonora, mistura, correção de cor e entrega." },
      ],
      footerFlow: "Conceito → exemplo de filme → quiz → prática → Film Director",
    },
    performance: {
      titleLead: "Direção de atores e", titleEmphasis: "blocking",
      heroIntro: "Transforme a análise de cena em ação jogável, organize os corpos no espaço e dê ajustes precisos entre takes.",
      practicePlaceholder: "Escreva aqui a sua nota de ensaio, blocking ou ajuste …",
      finalTitle: "Do ensaio ao take final",
      finalDescription: "Planeie uma cena com objetivo claro, ação jogável, blocking, necessidades de câmara e um ajuste concreto entre takes. O exercício abre no Film Director com cinco campos de entrega.",
      roadmapTitle: "Cursos seguintes", roadmapStatus: "Em breve",
      roadmapEntries: [
        { number: "03", title: "Imagem, câmara e ótica", description: "Enquadramento, composição, perspetiva, distância focal, movimento e foco." },
        { number: "04", title: "Luz, cor e design de produção", description: "Fontes, contraste, exposição, paleta, materiais e continuidade." },
        { number: "05", title: "Montagem, som e finalização", description: "Coverage, ritmo, elipses, perspetiva sonora, mistura, correção de cor e entrega." },
      ],
      footerFlow: "Ação → ensaio → blocking → take → ajuste",
    },
    camera: {
      titleLead: "Imagem, câmara e", titleEmphasis: "ótica",
      heroIntro: "Transforme cada enquadramento, posição de câmara, objetiva, mudança de foco e movimento numa decisão dramática concreta.",
      practicePlaceholder: "Escreva aqui o seu plano de imagem, câmara ou ótica …",
      finalTitle: "Da intenção da cena ao sistema de câmara",
      finalDescription: "Planeie uma cena em que enquadramento, posição de câmara, objetiva, movimento e foco acompanhem a evolução dramática. O exercício abre no Film Director com cinco campos de entrega.",
      roadmapTitle: "Cursos seguintes", roadmapStatus: "Em breve",
      roadmapEntries: [
        { number: "04", title: "Luz, cor e design de produção", description: "Fontes, contraste, exposição, paleta, materiais e continuidade." },
        { number: "05", title: "Montagem, som e finalização", description: "Coverage, ritmo, elipses, perspetiva sonora, mistura, correção de cor e entrega." },
      ],
      footerFlow: "Enquadramento → perspetiva → ótica → movimento → foco",
    },
    lightingDesign: {
      titleLead: "Luz, cor e", titleEmphasis: "design de produção",
      heroIntro: "Construa um sistema visual coerente em que fontes de luz, contraste, paleta, materiais e espaço físico cumpram a mesma função dramática.",
      practicePlaceholder: "Escreva aqui o seu plano de luz, cor ou design …",
      finalTitle: "Da intenção da cena a um sistema visual unificado",
      finalDescription: "Planeie uma cena em que fontes de luz, contraste, paleta, design de produção e continuidade visual acompanhem a mesma evolução dramática. O exercício abre no Film Director com cinco campos de entrega.",
      roadmapTitle: "Curso seguinte", roadmapStatus: "Em breve",
      roadmapEntries: [
        { number: "05", title: "Montagem, som e finalização", description: "Coverage, ritmo, elipses, perspetiva sonora, mistura, correção de cor e entrega." },
      ],
      footerFlow: "Fonte → contraste → paleta → espaço → continuidade",
    },
    editingSound: {
      titleLead: "Montagem, som e", titleEmphasis: "finalização",
      heroIntro: "Molde o tempo final do filme, a posição de escuta e a entrega através do ritmo de montagem, elipses, perspetiva sonora, música, mistura, correção de cor e controlo do master.",
      practicePlaceholder: "Escreva aqui o seu plano de montagem, som ou finalização …",
      finalTitle: "Do material captado ao master final de exibição",
      finalDescription: "Planeie uma cena através de montagem, estrutura temporal, perspetiva sonora, música, mistura, correção de cor e entrega com controlo de qualidade. O exercício abre no Film Director com cinco campos de entrega.",
      roadmapTitle: "5 × 5 · 25 módulos", roadmapStatus: "Completo", roadmapEntries: [],
      footerFlow: "Coverage → tempo → espaço sonoro → mistura → master",
      completionTitle: "O curso fundamental está completo",
      completionDescription: "Argumento, direção de atores, câmara, luz e design, montagem, som e finalização estão agora ligados ao Film Atlas e ao Film Director.",
      completionSmall: "5 cursos",
    },
  },
};
