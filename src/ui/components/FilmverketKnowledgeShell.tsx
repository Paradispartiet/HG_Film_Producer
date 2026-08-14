import type { ReactNode } from "react";

import type { FilmverketSection } from "../../core/filmverketRoutes";

const navigationItems: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
  { id: "home", label: "Front page" },
  { id: "producer", label: "Film Producer" },
  { id: "atlas", label: "Film Atlas" },
  { id: "director", label: "Director Lab" },
  { id: "school", label: "Film School" },
  { id: "history", label: "Film History" },
  { id: "research", label: "Research" },
];

export function FilmverketKnowledgeShell({
  activeSection,
  children,
  onNavigate,
}: {
  readonly activeSection: FilmverketSection;
  readonly children: ReactNode;
  readonly onNavigate: (section: FilmverketSection) => void;
}) {
  return (
    <div className="filmverket-shell">
      <header className="filmverket-header">
        <button className="filmverket-brand" onClick={() => onNavigate("home")} type="button">
          <span>FV</span>
          <strong>Filmverket</strong>
        </button>
        <nav aria-label="Filmverket sections">
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
        <span>Filmverket</span>
        <span>Film Producer · Film Atlas · Director Lab · Film School · Film History · Research Control</span>
      </footer>
    </div>
  );
}
