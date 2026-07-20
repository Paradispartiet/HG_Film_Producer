import { useCallback, useEffect, useState } from "react";

import {
  filmverketRoutesEqual,
  formatFilmverketHash,
  parseFilmverketHash,
  type FilmverketRoute,
} from "../../core/filmverketRoutes";

export function useFilmverketHashRoute() {
  const [route, setRoute] = useState<FilmverketRoute>(() => parseFilmverketHash(window.location.hash));

  useEffect(() => {
    const canonicalHash = formatFilmverketHash(parseFilmverketHash(window.location.hash));
    if (window.location.hash !== canonicalHash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${canonicalHash}`);
    }

    const handleHashChange = () => setRoute(parseFilmverketHash(window.location.hash));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((nextRoute: FilmverketRoute, options?: { readonly replace?: boolean }) => {
    const nextHash = formatFilmverketHash(nextRoute);
    if (options?.replace) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
      setRoute(nextRoute);
    } else if (window.location.hash === nextHash) {
      if (!filmverketRoutesEqual(route, nextRoute)) setRoute(nextRoute);
    } else {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  return { navigate, route } as const;
}
