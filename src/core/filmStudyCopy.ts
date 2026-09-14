import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import {
  FILM_STUDY_AREAS,
  type FilmStudyArea,
  type FilmStudyCoverageStatus,
} from "./filmStudyCoverage.js";

export const FILM_STUDY_ERAS = [
  "Early cinema",
  "Silent-era cinema",
  "Classical studio era and wartime cinema",
  "Postwar cinema and emerging modernism",
  "New Waves and modernist cinema",
  "New Hollywood and global political cinema",
  "Blockbuster, independent and national genre renewal",
  "Global independent cinema and early digital transition",
  "Digital transition and transnational cinema",
  "Contemporary digital and global festival cinema",
  "Streaming-era and contemporary cinema",
] as const;

export type FilmStudyEra = (typeof FILM_STUDY_ERAS)[number];

export type FilmStudyCopy = {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro: (filmTitle: string, era: string) => string;
  readonly filmHistory: string;
  readonly historyStatus: {
    readonly sourceBacked: string;
    readonly researchPending: string;
  };
  readonly sourceVerifiedAreas: (verified: number, total: number) => string;
  readonly traditionsAriaLabel: string;
  readonly comparisonAriaLabel: string;
  readonly historyLens: string;
  readonly noChoiceFeedback: string;
  readonly arcAriaLabel: string;
  readonly arcBefore: string;
  readonly arcMoment: string;
  readonly arcAfter: string;
  readonly pendingTitle: string;
  readonly pendingBody: string;
  readonly auditTitle: string;
  readonly auditPending: (pending: number, total: number) => string;
  readonly historyGroupTitle: string;
  readonly craftGroupTitle: string;
  readonly sourcesTitle: string;
  readonly sourcesMeta: (count: number, verifiedAt: string) => string;
  readonly noResearchNote: string;
  readonly areaLabels: Readonly<Record<FilmStudyArea, string>>;
  readonly coverageStatus: Readonly<Record<FilmStudyCoverageStatus, string>>;
  readonly eraLabels: Readonly<Record<FilmStudyEra, string>>;
};

const EN_AREA_LABELS: Record<FilmStudyArea, string> = Object.fromEntries(
  FILM_STUDY_AREAS.map((area) => [area.id, area.label]),
) as Record<FilmStudyArea, string>;

const EN_ERA_LABELS: Record<FilmStudyEra, string> = Object.fromEntries(
  FILM_STUDY_ERAS.map((era) => [era, era]),
) as Record<FilmStudyEra, string>;

export const FILM_STUDY_COPY: Record<FilmWorkLanguage, FilmStudyCopy> = {
  en: {
    eyebrow: "Film history and complete craft map",
    title: "Place the film before studying its choices",
    intro: (filmTitle, era) => `${filmTitle} is placed in ${era.toLowerCase()}. The map separates sourced facts, current case mapping, and areas that still need research.`,
    filmHistory: "Film history",
    historyStatus: {
      sourceBacked: "Source backed",
      researchPending: "Research pending",
    },
    sourceVerifiedAreas: (verified, total) => `${verified}/${total} areas source verified`,
    traditionsAriaLabel: "Film-historical traditions",
    comparisonAriaLabel: "Film history comparison",
    historyLens: "History lens",
    noChoiceFeedback: "Compare the historical explanations. There are no points or penalties.",
    arcAriaLabel: "Before, contemporary moment, and afterlife",
    arcBefore: "Before the film",
    arcMoment: "In its moment",
    arcAfter: "What it carries forward",
    pendingTitle: "Historical interpretation is not yet source verified for this film.",
    pendingBody: "The release year and broad era are mapped, and the existing screenplay, image, editing and sound brief remains available. Movement, production history, directing, performance, design, technology, reception and legacy stay visibly marked as research pending.",
    auditTitle: "Complete mapping audit",
    auditPending: (pending, total) => `${pending} of ${total} areas still need research`,
    historyGroupTitle: "Film history",
    craftGroupTitle: "Film technique",
    sourcesTitle: "Inspectable sources",
    sourcesMeta: (count, verifiedAt) => `${count} sources · verified ${verifiedAt}`,
    noResearchNote: "No film-specific research has been recorded yet.",
    areaLabels: EN_AREA_LABELS,
    coverageStatus: {
      source_verified: "Source verified",
      mapped: "Mapped",
      research_pending: "Research pending",
      not_central: "Not central to this case",
    },
    eraLabels: EN_ERA_LABELS,
  },
  nb: {
    eyebrow: "Filmhistorie og komplett håndverkskart",
    title: "Plasser filmen før du studerer valgene",
    intro: (filmTitle, era) => `${filmTitle} plasseres i ${era.toLowerCase()}. Kartet skiller mellom kildebelagte fakta, dagens case-kartlegging og områder som fortsatt må undersøkes.`,
    filmHistory: "Filmhistorie",
    historyStatus: {
      sourceBacked: "Kildebelagt",
      researchPending: "Må undersøkes",
    },
    sourceVerifiedAreas: (verified, total) => `${verified}/${total} områder kildeverifisert`,
    traditionsAriaLabel: "Filmhistoriske tradisjoner",
    comparisonAriaLabel: "Filmhistorisk sammenligning",
    historyLens: "Historisk linse",
    noChoiceFeedback: "Sammenlign de historiske forklaringene. Det gis ingen poeng eller straff.",
    arcAriaLabel: "Før filmen, samtiden og etterlivet",
    arcBefore: "Før filmen",
    arcMoment: "I sin samtid",
    arcAfter: "Det filmen fører videre",
    pendingTitle: "Den historiske tolkningen er ennå ikke kildeverifisert for denne filmen.",
    pendingBody: "Utgivelsesåret og den overordnede epoken er kartlagt, og den eksisterende briefen for manus, bilde, klipp og lyd er fortsatt tilgjengelig. Bevegelse, produksjonshistorie, regi, skuespill, design, teknologi, mottakelse og etterliv er fortsatt tydelig merket som områder som må undersøkes.",
    auditTitle: "Komplett kartleggingsaudit",
    auditPending: (pending, total) => `${pending} av ${total} områder må fortsatt undersøkes`,
    historyGroupTitle: "Filmhistorie",
    craftGroupTitle: "Filmteknikk",
    sourcesTitle: "Kontrollerbare kilder",
    sourcesMeta: (count, verifiedAt) => `${count} kilder · verifisert ${verifiedAt}`,
    noResearchNote: "Ingen filmspesifikk forskning er registrert ennå.",
    areaLabels: {
      historical_context: "Historisk kontekst",
      movement_and_tradition: "Bevegelse og tradisjon",
      industry_and_production_context: "Bransje- og produksjonskontekst",
      reception_and_legacy: "Mottakelse og etterliv",
      screenplay: "Manus og dramaturgi",
      directing: "Regi og iscenesettelse",
      performance: "Skuespill og casting",
      production_design: "Produksjonsdesign og rekvisitter",
      costume_makeup: "Kostyme, sminke og hår",
      cinematography: "Foto og komposisjon",
      lighting: "Lyssetting",
      camera_format: "Kamera, objektiver og opptaksformat",
      editing: "Klipp og tidskonstruksjon",
      sound_design: "Lyddesign og dialog",
      music: "Musikk og score",
      effects_animation: "Praktiske effekter, VFX og animasjon",
      documentary_method: "Dokumentar- og researchmetode",
    },
    coverageStatus: {
      source_verified: "Kildeverifisert",
      mapped: "Kartlagt",
      research_pending: "Må undersøkes",
      not_central: "Ikke sentralt i dette caset",
    },
    eraLabels: {
      "Early cinema": "tidlig film",
      "Silent-era cinema": "stumfilmens epoke",
      "Classical studio era and wartime cinema": "den klassiske studioepoken og krigstidens film",
      "Postwar cinema and emerging modernism": "etterkrigsfilm og fremvoksende modernisme",
      "New Waves and modernist cinema": "nybølger og modernistisk film",
      "New Hollywood and global political cinema": "New Hollywood og global politisk film",
      "Blockbuster, independent and national genre renewal": "blockbusterfilm, uavhengig film og nasjonal sjangerfornyelse",
      "Global independent cinema and early digital transition": "global uavhengig film og tidlig digital overgang",
      "Digital transition and transnational cinema": "digital overgang og transnasjonal film",
      "Contemporary digital and global festival cinema": "samtidig digital film og global festivalfilm",
      "Streaming-era and contemporary cinema": "strømmeepoken og samtidsfilm",
    },
  },
  fr: {
    eyebrow: "Histoire du cinéma et cartographie complète des métiers",
    title: "Situer le film avant d’étudier ses choix",
    intro: (filmTitle, era) => `${filmTitle} est situé dans ${era.toLowerCase()}. La carte distingue les faits sourcés, la cartographie actuelle du cas et les domaines qui nécessitent encore des recherches.`,
    filmHistory: "Histoire du cinéma",
    historyStatus: {
      sourceBacked: "Étayé par des sources",
      researchPending: "Recherche en attente",
    },
    sourceVerifiedAreas: (verified, total) => `${verified}/${total} domaines vérifiés par des sources`,
    traditionsAriaLabel: "Traditions de l’histoire du cinéma",
    comparisonAriaLabel: "Comparaison d’histoire du cinéma",
    historyLens: "Prisme historique",
    noChoiceFeedback: "Comparez les explications historiques. Il n’y a ni points ni pénalités.",
    arcAriaLabel: "Avant, moment contemporain et postérité",
    arcBefore: "Avant le film",
    arcMoment: "Dans son époque",
    arcAfter: "Ce qu’il transmet",
    pendingTitle: "L’interprétation historique de ce film n’est pas encore vérifiée par des sources.",
    pendingBody: "L’année de sortie et la grande période sont cartographiées, et le brief existant sur le scénario, l’image, le montage et le son reste disponible. Mouvement, histoire de production, mise en scène, interprétation, design, technologie, réception et postérité restent clairement signalés comme nécessitant des recherches.",
    auditTitle: "Audit complet de la cartographie",
    auditPending: (pending, total) => `${pending} domaines sur ${total} nécessitent encore des recherches`,
    historyGroupTitle: "Histoire du cinéma",
    craftGroupTitle: "Technique cinématographique",
    sourcesTitle: "Sources consultables",
    sourcesMeta: (count, verifiedAt) => `${count} sources · vérifié le ${verifiedAt}`,
    noResearchNote: "Aucune recherche spécifique à ce film n’a encore été enregistrée.",
    areaLabels: {
      historical_context: "Contexte historique",
      movement_and_tradition: "Mouvement et tradition",
      industry_and_production_context: "Contexte industriel et de production",
      reception_and_legacy: "Réception et postérité",
      screenplay: "Scénario et dramaturgie",
      directing: "Mise en scène et direction",
      performance: "Interprétation et casting",
      production_design: "Décors, direction artistique et accessoires",
      costume_makeup: "Costumes, maquillage et coiffure",
      cinematography: "Image et composition",
      lighting: "Éclairage",
      camera_format: "Caméra, objectifs et format de prise de vues",
      editing: "Montage et construction temporelle",
      sound_design: "Design sonore et dialogues",
      music: "Musique et partition",
      effects_animation: "Effets pratiques, VFX et animation",
      documentary_method: "Méthode documentaire et recherche",
    },
    coverageStatus: {
      source_verified: "Vérifié par des sources",
      mapped: "Cartographié",
      research_pending: "Recherche en attente",
      not_central: "Non central pour ce cas",
    },
    eraLabels: {
      "Early cinema": "cinéma des débuts",
      "Silent-era cinema": "cinéma muet",
      "Classical studio era and wartime cinema": "âge classique des studios et cinéma de guerre",
      "Postwar cinema and emerging modernism": "cinéma d’après-guerre et modernisme émergent",
      "New Waves and modernist cinema": "Nouvelles Vagues et cinéma moderniste",
      "New Hollywood and global political cinema": "New Hollywood et cinéma politique mondial",
      "Blockbuster, independent and national genre renewal": "blockbusters, cinéma indépendant et renouveau des genres nationaux",
      "Global independent cinema and early digital transition": "cinéma indépendant mondial et début de la transition numérique",
      "Digital transition and transnational cinema": "transition numérique et cinéma transnational",
      "Contemporary digital and global festival cinema": "cinéma numérique contemporain et festivals mondiaux",
      "Streaming-era and contemporary cinema": "ère du streaming et cinéma contemporain",
    },
  },
  pt: {
    eyebrow: "História do cinema e mapa completo dos ofícios",
    title: "Situar o filme antes de estudar as suas escolhas",
    intro: (filmTitle, era) => `${filmTitle} é situado em ${era.toLowerCase()}. O mapa separa factos documentados, o mapeamento atual do caso e áreas que ainda precisam de investigação.`,
    filmHistory: "História do cinema",
    historyStatus: {
      sourceBacked: "Apoiado por fontes",
      researchPending: "Investigação pendente",
    },
    sourceVerifiedAreas: (verified, total) => `${verified}/${total} áreas verificadas por fontes`,
    traditionsAriaLabel: "Tradições da história do cinema",
    comparisonAriaLabel: "Comparação de história do cinema",
    historyLens: "Perspetiva histórica",
    noChoiceFeedback: "Compare as explicações históricas. Não há pontos nem penalizações.",
    arcAriaLabel: "Antes, momento contemporâneo e legado",
    arcBefore: "Antes do filme",
    arcMoment: "No seu tempo",
    arcAfter: "O que leva adiante",
    pendingTitle: "A interpretação histórica deste filme ainda não foi verificada por fontes.",
    pendingBody: "O ano de estreia e a época geral estão mapeados, e o brief existente de argumento, imagem, montagem e som continua disponível. Movimento, história de produção, realização, interpretação, design, tecnologia, receção e legado permanecem claramente assinalados como investigação pendente.",
    auditTitle: "Auditoria completa do mapeamento",
    auditPending: (pending, total) => `${pending} de ${total} áreas ainda precisam de investigação`,
    historyGroupTitle: "História do cinema",
    craftGroupTitle: "Técnica cinematográfica",
    sourcesTitle: "Fontes consultáveis",
    sourcesMeta: (count, verifiedAt) => `${count} fontes · verificado em ${verifiedAt}`,
    noResearchNote: "Ainda não foi registada investigação específica sobre este filme.",
    areaLabels: {
      historical_context: "Contexto histórico",
      movement_and_tradition: "Movimento e tradição",
      industry_and_production_context: "Contexto industrial e de produção",
      reception_and_legacy: "Receção e legado",
      screenplay: "Argumento e dramaturgia",
      directing: "Realização e encenação",
      performance: "Interpretação e casting",
      production_design: "Design de produção e adereços",
      costume_makeup: "Figurinos, maquilhagem e cabelos",
      cinematography: "Imagem e composição",
      lighting: "Iluminação",
      camera_format: "Câmara, objetivas e formato de captação",
      editing: "Montagem e construção temporal",
      sound_design: "Design de som e diálogo",
      music: "Música e banda sonora",
      effects_animation: "Efeitos práticos, VFX e animação",
      documentary_method: "Método documental e investigação",
    },
    coverageStatus: {
      source_verified: "Verificado por fontes",
      mapped: "Mapeado",
      research_pending: "Investigação pendente",
      not_central: "Não central neste caso",
    },
    eraLabels: {
      "Early cinema": "cinema dos primórdios",
      "Silent-era cinema": "cinema mudo",
      "Classical studio era and wartime cinema": "era clássica dos estúdios e cinema de guerra",
      "Postwar cinema and emerging modernism": "cinema do pós-guerra e modernismo emergente",
      "New Waves and modernist cinema": "Novas Vagas e cinema modernista",
      "New Hollywood and global political cinema": "New Hollywood e cinema político global",
      "Blockbuster, independent and national genre renewal": "blockbusters, cinema independente e renovação nacional dos géneros",
      "Global independent cinema and early digital transition": "cinema independente global e início da transição digital",
      "Digital transition and transnational cinema": "transição digital e cinema transnacional",
      "Contemporary digital and global festival cinema": "cinema digital contemporâneo e circuito global de festivais",
      "Streaming-era and contemporary cinema": "era do streaming e cinema contemporâneo",
    },
  },
};

export function formatFilmStudyEra(language: FilmWorkLanguage, canonicalEra: string): string {
  if ((FILM_STUDY_ERAS as readonly string[]).includes(canonicalEra)) {
    return FILM_STUDY_COPY[language].eraLabels[canonicalEra as FilmStudyEra];
  }
  return canonicalEra;
}

export function getFilmStudyAreaLabel(language: FilmWorkLanguage, area: FilmStudyArea): string {
  return FILM_STUDY_COPY[language].areaLabels[area];
}

export function getFilmStudyCoverageStatusLabel(
  language: FilmWorkLanguage,
  status: FilmStudyCoverageStatus,
): string {
  return FILM_STUDY_COPY[language].coverageStatus[status];
}
