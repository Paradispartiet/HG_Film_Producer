import { useEffect, useState } from "react";
import { FILMWORK_PLATFORM_COPY } from "../../core/filmWorkPlatformCopy.js";
import type { FilmverketRoute, FilmverketSection } from "../../core/filmverketRoutes.js";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

type MainSection = "home" | "producer" | "director" | "school" | "atlas";

const mainSections: readonly { id: MainSection; glyph: string }[] = [
  { id: "home", glyph: "⌂" },
  { id: "producer", glyph: "▣" },
  { id: "director", glyph: "◇" },
  { id: "school", glyph: "▤" },
  { id: "atlas", glyph: "▦" },
];

const shortLabels: Record<FilmWorkLanguage, Record<MainSection | "more", string>> = {
  nb: { home: "Hjem", producer: "Producer", director: "Director", school: "School", atlas: "Atlas", more: "Mer" },
  en: { home: "Home", producer: "Producer", director: "Director", school: "School", atlas: "Atlas", more: "More" },
  fr: { home: "Accueil", producer: "Producer", director: "Director", school: "School", atlas: "Atlas", more: "Plus" },
  pt: { home: "Início", producer: "Producer", director: "Director", school: "School", atlas: "Atlas", more: "Mais" },
};

/** Single navigation for all FilmWork screens. Content modules remain independent. */
export function FilmWorkAppNavigation({
  route,
  navigate,
}: {
  readonly route: FilmverketRoute;
  readonly navigate: (route: FilmverketRoute) => void;
}) {
  const [language, setLanguage] = useFilmWorkLanguage();
  const [moreOpen, setMoreOpen] = useState(false);
  const copy = FILMWORK_PLATFORM_COPY[language];
  const secondarySections: readonly FilmverketSection[] = ["history", "research"];

  useEffect(() => { setMoreOpen(false); }, [route.section]);

  function open(section: FilmverketSection) {
    setMoreOpen(false);
    navigate({ section });
  }

  return (
    <>
      <header className="filmwork-app-topbar">
        <button className="filmwork-app-logo" onClick={() => open("home")} aria-label={copy.navLabels.home} type="button">
          <span aria-hidden="true">FW</span>
          <strong>{copy.suiteName}</strong>
        </button>
        <span className="filmwork-app-current">{copy.navLabels[route.section]}</span>
        <label className="filmwork-app-language">
          <span className="filmwork-visually-hidden">Language / Språk</span>
          <select
            aria-label="Language / Språk"
            onChange={(event) => setLanguage(event.target.value as FilmWorkLanguage)}
            value={language}
          >
            <option value="nb">NO</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="pt">PT</option>
          </select>
        </label>
      </header>
      <nav className="filmwork-app-navigation" aria-label={copy.navAria}>
        {mainSections.map(({ id, glyph }) => (
          <button
            aria-current={route.section === id ? "page" : undefined}
            className={route.section === id ? "filmwork-app-tab is-active" : "filmwork-app-tab"}
            key={id}
            onClick={() => open(id)}
            type="button"
          >
            <span className="filmwork-app-tab-glyph" aria-hidden="true">{glyph}</span>
            <span>{shortLabels[language][id]}</span>
          </button>
        ))}
        <div className="filmwork-app-more">
          <button
            aria-expanded={moreOpen}
            aria-haspopup="true"
            aria-current={secondarySections.includes(route.section) ? "page" : undefined}
            className={secondarySections.includes(route.section) ? "filmwork-app-tab is-active" : "filmwork-app-tab"}
            onClick={() => setMoreOpen((current) => !current)}
            type="button"
          >
            <span className="filmwork-app-tab-glyph" aria-hidden="true">⋯</span>
            <span>{shortLabels[language].more}</span>
          </button>
          {moreOpen && (
            <div className="filmwork-app-more-menu">
              {secondarySections.map((section) => (
                <button key={section} onClick={() => open(section)} type="button">
                  {copy.navLabels[section]}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
