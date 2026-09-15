export const FILM_STUDY_HISTORY_FAMILIES = {
  silent_foundations: {
    id: "silent_foundations",
    label: "Silent Foundations",
  },
  silent_studio_systems: {
    id: "silent_studio_systems",
    label: "Silent Studio Systems",
  },
  late_silent_early_sound: {
    id: "late_silent_early_sound",
    label: "Late Silent / Early Sound",
  },
  production_systems_1930s: {
    id: "production_systems_1930s",
    label: "1930s Production Systems",
  },
  noir_realism_1940s: {
    id: "noir_realism_1940s",
    label: "1940s Noir / Realism",
  },
  asian_postwar_1950s: {
    id: "asian_postwar_1950s",
    label: "1950s Asian Postwar",
  },
  postwar_european_modernism: {
    id: "postwar_european_modernism",
    label: "Postwar European Modernism",
  },
  czechoslovak_new_wave: {
    id: "czechoslovak_new_wave",
    label: "Czechoslovak New Wave",
  },
  european_political_feminist_modernism: {
    id: "european_political_feminist_modernism",
    label: "European Political / Feminist Modernism",
  },
  european_religious_moral_modernism: {
    id: "european_religious_moral_modernism",
    label: "European Religious / Moral Modernism",
  },
} as const;

export type FilmStudyFamilyId = keyof typeof FILM_STUDY_HISTORY_FAMILIES;

export function isFilmStudyFamilyId(value: string): value is FilmStudyFamilyId {
  return Object.prototype.hasOwnProperty.call(FILM_STUDY_HISTORY_FAMILIES, value);
}
