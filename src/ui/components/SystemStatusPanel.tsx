import { STUDIO_CAREER_APP_SHELL_COPY } from "../../core/studioCareerAppShellCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface SystemStatusPanelProps {
  readonly engines: readonly string[];
}

export function SystemStatusPanel({ engines }: SystemStatusPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_APP_SHELL_COPY[language].demo.systems;
  return (
    <section className="panel system-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.heading}</h2></div>
        <span className="systems-count">{copy.onlineCount(engines.length)}</span>
      </div>
      <ul className="system-list">
        {engines.map((engine) => <li key={engine}><span className="online-dot" aria-hidden="true" />{engine}<small>{copy.represented}</small></li>)}
      </ul>
    </section>
  );
}
