import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const SILENT_FOUNDATIONS_HISTORY_FEEDBACK = {
  match: {
    canonical: "This connects the film to its documented silent-cinema production system and historical craft method.",
    en: "This connects the film to its documented silent-cinema production system and historical craft method.",
    nb: "Dette knytter filmen til det dokumenterte produksjonssystemet i stumfilmen og den historiske håndverksmetoden.",
    fr: "Cela relie le film à son système de production documenté du cinéma muet et à sa méthode historique de travail cinématographique.",
    pt: "Isto liga o filme ao seu sistema de produção documentado do cinema mudo e ao seu método histórico de trabalho cinematográfico.",
  },
  partial: {
    canonical: "This is a real silent-cinema production system, but it belongs to another relationship between design, location, effects, staging and editing.",
    en: "This is a real silent-cinema production system, but it belongs to another relationship between design, location, effects, staging and editing.",
    nb: "Dette er et reelt produksjonssystem fra stumfilmen, men det tilhører et annet samspill mellom design, opptakssted, effekter, iscenesettelse og klipp.",
    fr: "Il s’agit d’un véritable système de production du cinéma muet, mais il relève d’une autre articulation entre décors, lieux de tournage, effets, mise en scène et montage.",
    pt: "Este é um sistema de produção real do cinema mudo, mas pertence a outra relação entre cenografia, local de rodagem, efeitos, encenação e montagem.",
  },
  miss: {
    canonical: "This places the film inside the wrong silent-cinema tradition and production logic.",
    en: "This places the film inside the wrong silent-cinema tradition and production logic.",
    nb: "Dette plasserer filmen i feil stumfilmtradisjon og produksjonslogikk.",
    fr: "Cela place le film dans la mauvaise tradition du cinéma muet et dans la mauvaise logique de production.",
    pt: "Isto coloca o filme na tradição errada do cinema mudo e na lógica de produção errada.",
  },
} as const;

export const SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the film's documented production system and the way its departments work together.",
    en: "This matches the film's documented production system and the way its departments work together.",
    nb: "Dette samsvarer med filmens dokumenterte produksjonssystem og måten avdelingene arbeider sammen på.",
    fr: "Cela correspond au système de production documenté du film et à la manière dont ses départements travaillent ensemble.",
    pt: "Isto corresponde ao sistema de produção documentado do filme e à forma como os seus departamentos trabalham em conjunto.",
  },
  partial: {
    canonical: "This is a real early-cinema production system, but it uses a different relation between body, studio, effects, architecture and sound.",
    en: "This is a real early-cinema production system, but it uses a different relation between body, studio, effects, architecture and sound.",
    nb: "Dette er et reelt produksjonssystem fra den tidlige filmen, men det bygger på et annet samspill mellom kropp, studio, effekter, arkitektur og lyd.",
    fr: "Il s’agit d’un véritable système de production du cinéma des débuts, mais il repose sur une autre relation entre corps, studio, effets, architecture et son.",
    pt: "Este é um sistema de produção real do cinema inicial, mas assenta numa relação diferente entre corpo, estúdio, efeitos, arquitetura e som.",
  },
  miss: {
    canonical: "This assigns the film to the wrong production tradition and departmental logic.",
    en: "This assigns the film to the wrong production tradition and departmental logic.",
    nb: "Dette plasserer filmen i feil produksjonstradisjon og feil avdelingslogikk.",
    fr: "Cela rattache le film à la mauvaise tradition de production et à la mauvaise logique d’organisation des départements.",
    pt: "Isto associa o filme à tradição de produção errada e à lógica departamental errada.",
  },
} as const;

export const LATE_SILENT_EARLY_SOUND_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relation between historical transition, production method and film form.",
    en: "This matches the documented relation between historical transition, production method and film form.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom historisk overgang, produksjonsmetode og filmform.",
    fr: "Cela correspond à la relation documentée entre transition historique, méthode de production et forme cinématographique.",
    pt: "Isto corresponde à relação documentada entre transição histórica, método de produção e forma cinematográfica.",
  },
  partial: {
    canonical: "This is a real transition-era system, but it organizes image, editing, performance and sound differently.",
    en: "This is a real transition-era system, but it organizes image, editing, performance and sound differently.",
    nb: "Dette er et reelt system fra overgangsperioden, men det organiserer bilde, klipp, skuespill og lyd på en annen måte.",
    fr: "Il s’agit d’un véritable système de la période de transition, mais il organise différemment l’image, le montage, le jeu et le son.",
    pt: "Este é um sistema real do período de transição, mas organiza a imagem, a montagem, a interpretação e o som de forma diferente.",
  },
  miss: {
    canonical: "This assigns the film to the wrong production tradition and transition strategy.",
    en: "This assigns the film to the wrong production tradition and transition strategy.",
    nb: "Dette plasserer filmen i feil produksjonstradisjon og overgangsstrategi.",
    fr: "Cela rattache le film à la mauvaise tradition de production et à la mauvaise stratégie de transition.",
    pt: "Isto associa o filme à tradição de produção errada e à estratégia de transição errada.",
  },
} as const;

export const PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the film's documented 1930s production system and the way its departments create one coherent form.",
    en: "This matches the film's documented 1930s production system and the way its departments create one coherent form.",
    nb: "Dette samsvarer med filmens dokumenterte produksjonssystem fra 1930-tallet og måten avdelingene skaper én sammenhengende form på.",
    fr: "Cela correspond au système de production documenté du film dans les années 1930 et à la manière dont ses départements construisent une forme cohérente.",
    pt: "Isto corresponde ao sistema de produção documentado do filme nos anos 1930 e à forma como os seus departamentos criam uma forma coerente.",
  },
  partial: {
    canonical: "This is a real 1930s system, but it organizes performance, design, image, sound and industrial labor differently.",
    en: "This is a real 1930s system, but it organizes performance, design, image, sound and industrial labor differently.",
    nb: "Dette er et reelt system fra 1930-tallet, men det organiserer skuespill, design, bilde, lyd og industrielt arbeid på en annen måte.",
    fr: "Il s’agit d’un véritable système des années 1930, mais il organise différemment le jeu, les décors, l’image, le son et le travail industriel.",
    pt: "Este é um sistema real dos anos 1930, mas organiza de forma diferente a interpretação, a cenografia, a imagem, o som e o trabalho industrial.",
  },
  miss: SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK.miss,
} as const;

export const NOIR_REALISM_1940S_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relationship between postwar context, production conditions and the film's formal system.",
    en: "This matches the documented relationship between postwar context, production conditions and the film's formal system.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom etterkrigskontekst, produksjonsforhold og filmens formale system.",
    fr: "Cela correspond à la relation documentée entre le contexte de l’après-guerre, les conditions de production et le système formel du film.",
    pt: "Isto corresponde à relação documentada entre o contexto do pós-guerra, as condições de produção e o sistema formal do filme.",
  },
  partial: {
    canonical: "This is a real 1940s production system, but it organizes realism, studio control, location, narration and sound differently.",
    en: "This is a real 1940s production system, but it organizes realism, studio control, location, narration and sound differently.",
    nb: "Dette er et reelt produksjonssystem fra 1940-tallet, men det organiserer realisme, studiokontroll, opptakssted, fortelling og lyd på en annen måte.",
    fr: "Il s’agit d’un véritable système de production des années 1940, mais il organise différemment le réalisme, le contrôle du studio, les lieux de tournage, la narration et le son.",
    pt: "Este é um sistema de produção real dos anos 1940, mas organiza de forma diferente o realismo, o controlo de estúdio, os locais de rodagem, a narração e o som.",
  },
  miss: {
    canonical: "This assigns the film to the wrong historical production logic.",
    en: "This assigns the film to the wrong historical production logic.",
    nb: "Dette plasserer filmen i feil historisk produksjonslogikk.",
    fr: "Cela rattache le film à la mauvaise logique historique de production.",
    pt: "Isto associa o filme à lógica histórica de produção errada.",
  },
} as const;

export const ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relationship between postwar context, production organization and the film's formal system.",
    en: "This matches the documented relationship between postwar context, production organization and the film's formal system.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom etterkrigskontekst, produksjonsorganisering og filmens formale system.",
    fr: "Cela correspond à la relation documentée entre le contexte de l’après-guerre, l’organisation de la production et le système formel du film.",
    pt: "Isto corresponde à relação documentada entre o contexto do pós-guerra, a organização da produção e o sistema formal do filme.",
  },
  partial: {
    canonical: "This is a real 1950s Asian production system, but it organizes performance, space, duration, action and realism differently.",
    en: "This is a real 1950s Asian production system, but it organizes performance, space, duration, action and realism differently.",
    nb: "Dette er et reelt asiatisk produksjonssystem fra 1950-tallet, men det organiserer skuespill, rom, varighet, handling og realisme på en annen måte.",
    fr: "Il s’agit d’un véritable système de production asiatique des années 1950, mais il organise différemment le jeu, l’espace, la durée, l’action et le réalisme.",
    pt: "Este é um sistema de produção asiático real dos anos 1950, mas organiza de forma diferente a interpretação, o espaço, a duração, a ação e o realismo.",
  },
  miss: {
    canonical: "This assigns the film to the wrong postwar production tradition and craft logic.",
    en: "This assigns the film to the wrong postwar production tradition and craft logic.",
    nb: "Dette knytter filmen til feil produksjonstradisjon fra etterkrigstiden og feil filmfaglig logikk.",
    fr: "Cela rattache le film à la mauvaise tradition de production de l’après-guerre et à la mauvaise logique des métiers du cinéma.",
    pt: "Isto associa o filme à tradição errada de produção do pós-guerra e à lógica errada dos ofícios cinematográficos.",
  },
} as const;

export const POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relationship between postwar history, production organization and the film's formal system.",
    en: "This matches the documented relationship between postwar history, production organization and the film's formal system.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom etterkrigshistorie, produksjonsorganisering og filmens formale system.",
    fr: "Cela correspond à la relation documentée entre l’histoire de l’après-guerre, l’organisation de la production et le système formel du film.",
    pt: "Isto corresponde à relação documentada entre a história do pós-guerra, a organização da produção e o sistema formal do filme.",
  },
  partial: {
    canonical: "This is another real postwar European modernist system, but it organizes duration, performance, politics, image and editing differently.",
    en: "This is another real postwar European modernist system, but it organizes duration, performance, politics, image and editing differently.",
    nb: "Dette er et annet reelt europeisk modernistisk system fra etterkrigstiden, men det organiserer varighet, skuespill, politikk, bilde og klipp på en annen måte.",
    fr: "Il s’agit d’un autre véritable système moderniste européen de l’après-guerre, mais il organise différemment la durée, le jeu, la politique, l’image et le montage.",
    pt: "Este é outro sistema modernista europeu real do pós-guerra, mas organiza de forma diferente a duração, a interpretação, a política, a imagem e a montagem.",
  },
  miss: ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK.miss,
} as const;

export const CZECHOSLOVAK_NEW_WAVE_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relationship between Czechoslovak production conditions and the film's formal system.",
    en: "This matches the documented relationship between Czechoslovak production conditions and the film's formal system.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom tsjekkoslovakiske produksjonsforhold og filmens formale system.",
    fr: "Cela correspond à la relation documentée entre les conditions de production tchécoslovaques et le système formel du film.",
    pt: "Isto corresponde à relação documentada entre as condições de produção checoslovacas e o sistema formal do filme.",
  },
  partial: {
    canonical: "This is a real Czechoslovak 1960s production system, but it organizes performance, space, history, editing and sound differently.",
    en: "This is a real Czechoslovak 1960s production system, but it organizes performance, space, history, editing and sound differently.",
    nb: "Dette er et reelt tsjekkoslovakisk produksjonssystem fra 1960-tallet, men det organiserer skuespill, rom, historie, klipp og lyd på en annen måte.",
    fr: "Il s’agit d’un véritable système de production tchécoslovaque des années 1960, mais il organise différemment le jeu, l’espace, l’histoire, le montage et le son.",
    pt: "Este é um sistema de produção checoslovaco real dos anos 1960, mas organiza de forma diferente a interpretação, o espaço, a história, a montagem e o som.",
  },
  miss: {
    canonical: "This assigns the film to the wrong Czechoslovak production tradition and craft logic.",
    en: "This assigns the film to the wrong Czechoslovak production tradition and craft logic.",
    nb: "Dette plasserer filmen i feil tsjekkoslovakisk produksjonstradisjon og filmfaglig logikk.",
    fr: "Cela rattache le film à la mauvaise tradition de production tchécoslovaque et à la mauvaise logique des métiers du cinéma.",
    pt: "Isto associa o filme à tradição de produção checoslovaca errada e à lógica errada dos ofícios cinematográficos.",
  },
} as const;

export const EUROPEAN_POLITICAL_FEMINIST_MODERNISM_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relationship between political or feminist history and the film's concrete production system.",
    en: "This matches the documented relationship between political or feminist history and the film's concrete production system.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom politisk eller feministisk historie og filmens konkrete produksjonssystem.",
    fr: "Cela correspond à la relation documentée entre l’histoire politique ou féministe et le système concret de production du film.",
    pt: "Isto corresponde à relação documentada entre a história política ou feminista e o sistema concreto de produção do filme.",
  },
  partial: {
    canonical: "This is a real European modernist production system, but it organizes time, bodies, space, memory and sound differently.",
    en: "This is a real European modernist production system, but it organizes time, bodies, space, memory and sound differently.",
    nb: "Dette er et reelt europeisk modernistisk produksjonssystem, men det organiserer tid, kropper, rom, minne og lyd på en annen måte.",
    fr: "Il s’agit d’un véritable système de production moderniste européen, mais il organise différemment le temps, les corps, l’espace, la mémoire et le son.",
    pt: "Este é um sistema de produção modernista europeu real, mas organiza de forma diferente o tempo, os corpos, o espaço, a memória e o som.",
  },
  miss: {
    canonical: "This assigns the film to the wrong political, feminist and formal production logic.",
    en: "This assigns the film to the wrong political, feminist and formal production logic.",
    nb: "Dette plasserer filmen i feil politisk, feministisk og formmessig produksjonslogikk.",
    fr: "Cela rattache le film à la mauvaise logique de production politique, féministe et formelle.",
    pt: "Isto associa o filme à lógica errada de produção política, feminista e formal.",
  },
} as const;

export const EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the documented relationship between European moral history, belief, institutions and the film's concrete production system.",
    en: "This matches the documented relationship between European moral history, belief, institutions and the film's concrete production system.",
    nb: "Dette samsvarer med det dokumenterte forholdet mellom europeisk moralhistorie, tro, institusjoner og filmens konkrete produksjonssystem.",
    fr: "Cela correspond à la relation documentée entre l’histoire morale européenne, la croyance, les institutions et le système concret de production du film.",
    pt: "Isto corresponde à relação documentada entre a história moral europeia, a crença, as instituições e o sistema concreto de produção do filme.",
  },
  partial: {
    canonical: "This is another documented European religious or moral modernist system, but it builds ethical pressure through a different relation between institution, performance, landscape, objects, editing and sound.",
    en: "This is another documented European religious or moral modernist system, but it builds ethical pressure through a different relation between institution, performance, landscape, objects, editing and sound.",
    nb: "Dette er et annet dokumentert europeisk religiøst eller moralsk modernistisk system, men det bygger etisk press gjennom et annet samspill mellom institusjon, skuespill, landskap, objekter, klipp og lyd.",
    fr: "Il s’agit d’un autre système moderniste européen religieux ou moral documenté, mais il construit la pression éthique à travers une autre relation entre institution, jeu, paysage, objets, montage et son.",
    pt: "Este é outro sistema modernista europeu religioso ou moral documentado, mas constrói pressão ética através de uma relação diferente entre instituição, interpretação, paisagem, objetos, montagem e som.",
  },
  miss: {
    canonical: "This assigns the film to the wrong relationship between belief, property, sacred representation, bodily restraint, social institution and audiovisual form.",
    en: "This assigns the film to the wrong relationship between belief, property, sacred representation, bodily restraint, social institution and audiovisual form.",
    nb: "Dette plasserer filmen i feil forhold mellom tro, eiendom, hellig representasjon, kroppslig tilbakeholdenhet, sosial institusjon og audiovisuell form.",
    fr: "Cela rattache le film à la mauvaise relation entre croyance, propriété, représentation sacrée, retenue corporelle, institution sociale et forme audiovisuelle.",
    pt: "Isto associa o filme à relação errada entre crença, propriedade, representação sagrada, contenção corporal, instituição social e forma audiovisual.",
  },
} as const;

export type SilentFoundationsHistoryFeedbackKey = keyof typeof SILENT_FOUNDATIONS_HISTORY_FEEDBACK;
export type SilentStudioSystemsHistoryFeedbackKey = keyof typeof SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK;
export type LateSilentEarlySoundHistoryFeedbackKey = keyof typeof LATE_SILENT_EARLY_SOUND_HISTORY_FEEDBACK;
export type ProductionSystems1930sHistoryFeedbackKey = keyof typeof PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK;
export type NoirRealism1940sHistoryFeedbackKey = keyof typeof NOIR_REALISM_1940S_HISTORY_FEEDBACK;
export type AsianPostwar1950sHistoryFeedbackKey = keyof typeof ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK;
export type PostwarEuropeanModernismHistoryFeedbackKey = keyof typeof POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK;
export type CzechoslovakNewWaveHistoryFeedbackKey = keyof typeof CZECHOSLOVAK_NEW_WAVE_HISTORY_FEEDBACK;
export type EuropeanPoliticalFeministModernismHistoryFeedbackKey = keyof typeof EUROPEAN_POLITICAL_FEMINIST_MODERNISM_HISTORY_FEEDBACK;
export type EuropeanReligiousMoralHistoryFeedbackKey = keyof typeof EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK;

type FilmStudyHistoryFeedbackEntry =
  | (typeof SILENT_FOUNDATIONS_HISTORY_FEEDBACK)[SilentFoundationsHistoryFeedbackKey]
  | (typeof SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK)[SilentStudioSystemsHistoryFeedbackKey]
  | (typeof LATE_SILENT_EARLY_SOUND_HISTORY_FEEDBACK)[LateSilentEarlySoundHistoryFeedbackKey]
  | (typeof PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK)[ProductionSystems1930sHistoryFeedbackKey]
  | (typeof NOIR_REALISM_1940S_HISTORY_FEEDBACK)[NoirRealism1940sHistoryFeedbackKey]
  | (typeof ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK)[AsianPostwar1950sHistoryFeedbackKey]
  | (typeof POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK)[PostwarEuropeanModernismHistoryFeedbackKey]
  | (typeof CZECHOSLOVAK_NEW_WAVE_HISTORY_FEEDBACK)[CzechoslovakNewWaveHistoryFeedbackKey]
  | (typeof EUROPEAN_POLITICAL_FEMINIST_MODERNISM_HISTORY_FEEDBACK)[EuropeanPoliticalFeministModernismHistoryFeedbackKey]
  | (typeof EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK)[EuropeanReligiousMoralHistoryFeedbackKey];

const FILM_STUDY_HISTORY_FEEDBACK_BY_CANONICAL = new Map<string, FilmStudyHistoryFeedbackEntry>(
  [
    ...Object.values(SILENT_FOUNDATIONS_HISTORY_FEEDBACK),
    ...Object.values(SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK),
    ...Object.values(LATE_SILENT_EARLY_SOUND_HISTORY_FEEDBACK),
    ...Object.values(PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK),
    ...Object.values(NOIR_REALISM_1940S_HISTORY_FEEDBACK),
    ...Object.values(ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK),
    ...Object.values(POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK),
    ...Object.values(CZECHOSLOVAK_NEW_WAVE_HISTORY_FEEDBACK),
    ...Object.values(EUROPEAN_POLITICAL_FEMINIST_MODERNISM_HISTORY_FEEDBACK),
    ...Object.values(EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK),
  ].map((entry) => [entry.canonical, entry]),
);

export function formatFilmStudyHistoryFeedback(
  language: FilmWorkLanguage,
  canonicalFeedback: string,
): string {
  const entry = FILM_STUDY_HISTORY_FEEDBACK_BY_CANONICAL.get(canonicalFeedback);
  return entry?.[language] ?? canonicalFeedback;
}
