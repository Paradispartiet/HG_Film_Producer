import { useMemo, useState, type ChangeEvent } from "react";

import { FILM_GLOBAL_OVERLAY_COPY, FILM_RESEARCH_STATUS_FILTER_IDS } from "../../core/filmGlobalOverlayCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { getClassicFilmScenarios } from "../data/filmScenarios";
import {
  createFilmResearchQueue,
  summarizeFilmResearch,
  type FilmResearchStatus,
} from "../data/filmResearchStatus";

type FilmResearchStatusFilter = FilmResearchStatus | "all";

type FilmResearchControlRoomProps = {
  readonly onClose: () => void;
  readonly onOpen: () => void;
  readonly onOpenAtlas: (scenarioId: string) => void;
  readonly onOpenDirector: (scenarioId: string) => void;
  readonly open: boolean;
};

export function FilmResearchControlRoom({
  onClose,
  onOpen,
  onOpenAtlas,
  onOpenDirector,
  open,
}: FilmResearchControlRoomProps) {
  const [language] = useFilmWorkLanguage();
  const copy = FILM_GLOBAL_OVERLAY_COPY[language].research;
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<FilmResearchStatusFilter>("all");
  const queue = useMemo(() => createFilmResearchQueue(getClassicFilmScenarios()), []);
  const summary = useMemo(() => summarizeFilmResearch(queue), [queue]);
  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return queue.filter((item) => {
      const matchesStatus = status === "all" || item.status === status;
      const searchableText = [item.title, item.year, ...item.directors].join(" ").toLocaleLowerCase();
      return matchesStatus && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [query, queue, status]);

  return (
    <>
      {!open && (
        <button className="research-control-trigger" onClick={onOpen} type="button">
          <span>{copy.triggerEyebrow}</span>
          <strong>{copy.triggerTitle}</strong>
        </button>
      )}

      {open && (
        <div className="research-control-backdrop" onMouseDown={onClose} role="presentation">
          <section aria-label={copy.dialogAria} aria-modal="true" className="research-control-panel" onMouseDown={(event) => event.stopPropagation()} role="dialog">
            <header className="research-control-header">
              <div>
                <span>{copy.headerEyebrow}</span>
                <h2>{copy.title}</h2>
                <p>{copy.intro}</p>
              </div>
              <button aria-label={copy.closeAria} onClick={onClose} type="button">×</button>
            </header>

            <section className="research-summary-grid" aria-label={copy.summaryAria}>
              <article><small>{copy.totalCatalogue}</small><strong>{summary.total}</strong><span>{copy.films}</span></article>
              <article><small>{copy.verified}</small><strong>{summary.verified}</strong><span>{copy.complete(summary.completionPercent)}</span></article>
              <article><small>{copy.seeded}</small><strong>{summary.seeded}</strong><span>{copy.provisional}</span></article>
              <article><small>{copy.needsResearch}</small><strong>{summary.needsResearch}</strong><span>{copy.priorityQueue}</span></article>
            </section>

            <div className="research-progress" aria-label={copy.verifiedAria(summary.completionPercent)}>
              <span style={{ width: `${summary.completionPercent}%` }} />
            </div>

            <div className="research-control-tools">
              <label>
                <span>{copy.searchLabel}</span>
                <input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} type="search" value={query} />
              </label>
              <div aria-label={copy.filterAria} className="research-status-filters">
                {FILM_RESEARCH_STATUS_FILTER_IDS.map((statusId) => (
                  <button className={status === statusId ? "research-status-button research-status-button--active" : "research-status-button"} key={statusId} onClick={() => setStatus(statusId)} type="button">
                    {copy.statusLabels[statusId]}
                  </button>
                ))}
              </div>
            </div>

            <div className="research-queue-summary">{copy.queueSummary(visibleItems.length)}</div>

            <div className="research-queue">
              {visibleItems.map((item, index) => (
                <article className={`research-queue-row research-queue-row--${item.status}`} key={item.scenarioId}>
                  <span className="research-queue-number">{String(index + 1).padStart(3, "0")}</span>
                  <div className="research-film-identity">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.directors.join(", ") || copy.directorNotRegistered}</p>
                  </div>
                  <div className="research-film-density">
                    <span>{copy.craftStatements(item.craftStatementCount)}</span>
                    <span>{copy.learningGoals(item.learningGoalCount)}</span>
                  </div>
                  <strong className="research-status-label">{copy.statusLabels[item.status]}</strong>
                  <div className="research-film-actions">
                    <button onClick={() => onOpenAtlas(item.scenarioId)} type="button">{copy.atlasProduct}</button>
                    <button onClick={() => onOpenDirector(item.scenarioId)} type="button">{copy.directorProduct}</button>
                  </div>
                </article>
              ))}
              {visibleItems.length === 0 && <p className="research-empty">{copy.empty}</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
