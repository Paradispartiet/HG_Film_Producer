export const FILM_STUDY_AREAS = [
  { id: "historical_context", label: "Historical context", group: "history" },
  { id: "movement_and_tradition", label: "Movement and tradition", group: "history" },
  { id: "industry_and_production_context", label: "Industry and production context", group: "history" },
  { id: "reception_and_legacy", label: "Reception and legacy", group: "history" },
  { id: "screenplay", label: "Screenplay and dramaturgy", group: "craft" },
  { id: "directing", label: "Directing and staging", group: "craft" },
  { id: "performance", label: "Performance and casting", group: "craft" },
  { id: "production_design", label: "Production design and props", group: "craft" },
  { id: "costume_makeup", label: "Costume, makeup and hairstyling", group: "craft" },
  { id: "cinematography", label: "Cinematography and composition", group: "craft" },
  { id: "lighting", label: "Lighting", group: "craft" },
  { id: "camera_format", label: "Camera, lenses and capture format", group: "craft" },
  { id: "editing", label: "Editing and temporal construction", group: "craft" },
  { id: "sound_design", label: "Sound design and dialogue", group: "craft" },
  { id: "music", label: "Music and score", group: "craft" },
  { id: "effects_animation", label: "Practical effects, VFX and animation", group: "craft" },
  { id: "documentary_method", label: "Documentary and research method", group: "craft" },
] as const;

export type FilmStudyArea = (typeof FILM_STUDY_AREAS)[number]["id"];
export type FilmStudyAreaGroup = (typeof FILM_STUDY_AREAS)[number]["group"];
export type FilmStudyCoverageStatus =
  | "source_verified"
  | "mapped"
  | "research_pending"
  | "not_central";

export type FilmStudyCoverageOverride = {
  readonly area: FilmStudyArea;
  readonly status: FilmStudyCoverageStatus;
  readonly note?: string;
};

export type FilmStudyCoverageItem = FilmStudyCoverageOverride & {
  readonly label: string;
  readonly group: FilmStudyAreaGroup;
};

export type FilmStudyCoverageSummary = {
  readonly total: number;
  readonly sourceVerified: number;
  readonly mapped: number;
  readonly researchPending: number;
  readonly notCentral: number;
};

const areaById = new Map(FILM_STUDY_AREAS.map((area) => [area.id, area]));

export function completeFilmStudyCoverage(
  overrides: readonly FilmStudyCoverageOverride[],
): readonly FilmStudyCoverageItem[] {
  const overrideByArea = new Map(overrides.map((override) => [override.area, override]));
  return FILM_STUDY_AREAS.map((area) => {
    const override = overrideByArea.get(area.id);
    return {
      area: area.id,
      label: area.label,
      group: area.group,
      status: override?.status ?? "research_pending",
      ...(override?.note ? { note: override.note } : {}),
    };
  });
}

export function summarizeFilmStudyCoverage(
  coverage: readonly Pick<FilmStudyCoverageItem, "status">[],
): FilmStudyCoverageSummary {
  return coverage.reduce<FilmStudyCoverageSummary>((summary, item) => ({
    total: summary.total + 1,
    sourceVerified: summary.sourceVerified + (item.status === "source_verified" ? 1 : 0),
    mapped: summary.mapped + (item.status === "mapped" ? 1 : 0),
    researchPending: summary.researchPending + (item.status === "research_pending" ? 1 : 0),
    notCentral: summary.notCentral + (item.status === "not_central" ? 1 : 0),
  }), {
    total: 0,
    sourceVerified: 0,
    mapped: 0,
    researchPending: 0,
    notCentral: 0,
  });
}

export function getFilmHistoryEra(year: number): string {
  if (year < 1915) return "Early cinema";
  if (year < 1930) return "Silent-era cinema";
  if (year < 1946) return "Classical studio era and wartime cinema";
  if (year < 1960) return "Postwar cinema and emerging modernism";
  if (year < 1970) return "New Waves and modernist cinema";
  if (year < 1980) return "New Hollywood and global political cinema";
  if (year < 1990) return "Blockbuster, independent and national genre renewal";
  if (year < 2000) return "Global independent cinema and early digital transition";
  if (year < 2010) return "Digital transition and transnational cinema";
  if (year < 2020) return "Contemporary digital and global festival cinema";
  return "Streaming-era and contemporary cinema";
}

export function formatFilmStudyCoverageStatus(status: FilmStudyCoverageStatus): string {
  if (status === "source_verified") return "Source verified";
  if (status === "mapped") return "Mapped";
  if (status === "not_central") return "Not central to this case";
  return "Research pending";
}

export function isFilmStudyCoverageComplete(
  coverage: readonly Pick<FilmStudyCoverageItem, "area">[],
): boolean {
  const areas = new Set(coverage.map((item) => item.area));
  return FILM_STUDY_AREAS.every((area) => areas.has(area.id));
}
