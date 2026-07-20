export type FilmverketSection = "home" | "producer" | "atlas" | "director" | "school" | "history" | "research";

export type FilmverketRoute =
  | { readonly section: "home" }
  | { readonly section: "producer" }
  | { readonly section: "atlas"; readonly filmSlug?: string }
  | { readonly section: "director"; readonly filmSlug?: string }
  | { readonly section: "school" }
  | { readonly section: "history" }
  | { readonly section: "research" };

const SIMPLE_SECTIONS = new Set<FilmverketSection>(["home", "producer", "school", "history", "research"]);

export function createFilmSlug(title: string, year: number): string {
  const transliterated = title
    .toLocaleLowerCase("en")
    .replaceAll("æ", "ae")
    .replaceAll("ø", "o")
    .replaceAll("å", "a")
    .replaceAll("œ", "oe")
    .replaceAll("ß", "ss")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
  const titleSlug = transliterated
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
  return `${titleSlug || "film"}-${year}`;
}

export function parseFilmverketHash(hash: string): FilmverketRoute {
  const withoutHash = hash.trim().replace(/^#/, "");
  const path = withoutHash.split("?", 1)[0] ?? "";
  const segments = path
    .split("/")
    .map((segment) => decodeSegment(segment))
    .filter((segment) => segment.length > 0);

  const section = segments[0]?.toLocaleLowerCase("en");
  if (!section) return { section: "home" };

  if (section === "atlas") {
    const filmSlug = segments[1] === "film" ? segments[2] : segments[1];
    return filmSlug ? { section: "atlas", filmSlug } : { section: "atlas" };
  }

  if (section === "director") {
    const filmSlug = segments[1];
    return filmSlug ? { section: "director", filmSlug } : { section: "director" };
  }

  if (SIMPLE_SECTIONS.has(section as FilmverketSection)) {
    return { section } as FilmverketRoute;
  }

  return { section: "home" };
}

export function formatFilmverketHash(route: FilmverketRoute): string {
  if (route.section === "home") return "#/";
  if (route.section === "atlas" && route.filmSlug) return `#/atlas/film/${encodeURIComponent(route.filmSlug)}`;
  if (route.section === "director" && route.filmSlug) return `#/director/${encodeURIComponent(route.filmSlug)}`;
  return `#/${route.section}`;
}

export function filmverketRoutesEqual(left: FilmverketRoute, right: FilmverketRoute): boolean {
  if (left.section !== right.section) return false;
  if (left.section === "atlas" && right.section === "atlas") return left.filmSlug === right.filmSlug;
  if (left.section === "director" && right.section === "director") return left.filmSlug === right.filmSlug;
  return true;
}

function decodeSegment(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}
