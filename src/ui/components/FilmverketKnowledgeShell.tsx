import type { ReactNode } from "react";

import {
  FILMWORK_PLATFORM_COPY,
  FILMWORK_PLATFORM_NAV_IDS,
} from "../../core/filmWorkPlatformCopy";
import type { FilmverketSection } from "../../core/filmverketRoutes";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

export function FilmverketKnowledgeShell({
  activeSection,
  children,
  onNavigate,
}: {
  readonly activeSection: FilmverketSection;
  readonly children: ReactNode;
  readonly onNavigate: (section: FilmverketSection) => void;
}) {
  const [language] = useFilmWorkLanguage();
  const copy = FILMWORK_PLATFORM_COPY[language];
  const navigationItems = FILMWORK_PLATFORM_NAV_IDS.map((id) => ({ id, label: copy.navLabels[id] }));

  return (
    <div className="filmverket-shell">
      <header className="filmverket-header">
        <button className="filmverket-brand" onClick={() => onNavigate("home")} type="button">
          <span>FW</span>
          <strong>{copy.suiteName}</strong>
        </button>
        <nav aria-label={copy.navAria}>
          {navigationItems.map((item) => (
            <button
              className={activeSection === item.id ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"}
              key={item.id}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>
      {children}
      <footer className="filmverket-footer">
        <span>{copy.suiteName}</span>
        <span>{copy.footerDetail}</span>
      </footer>
    </div>
  );
}
