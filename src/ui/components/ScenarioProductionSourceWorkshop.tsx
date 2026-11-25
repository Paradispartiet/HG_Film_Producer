import { useState } from "react";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import {
  getSourceBackedCaseWorkshop,
  isBestSupportedWorkshopOption,
  type SourceBackedCaseWorkshop,
} from "../data/scenarioProductionSourceWorkshops";
import "../productionCaseSourceWorkshop.css";

const copy: Record<FilmWorkLanguage, {
  readonly title: string;
  readonly intro: string;
  readonly supported: string;
  readonly reconsider: string;
  readonly sources: string;
  readonly caveat: string;
}> = {
  en: {
    title: "Source-backed production workshop",
    intro: "Choose a historically defensible craft decision, then read why. This is an optional lesson: it does not change the case's approval status or your saved mission progress.",
    supported: "Supported by the cited production evidence",
    reconsider: "The sources point to a different production choice",
    sources: "Check the sources",
    caveat: "Film-specific learning material under editorial review — not a verified playable Production Case.",
  },
  nb: {
    title: "Kildebasert produksjonsverksted",
    intro: "Velg et filmhistorisk forsvarlig produksjonsgrep, og les hvorfor. Dette er en frivillig øvelse som ikke endrer godkjenningen eller den lagrede framgangen din.",
    supported: "Valget støttes av de oppgitte produksjonskildene",
    reconsider: "Kildene peker mot et annet produksjonsvalg",
    sources: "Undersøk kildene",
    caveat: "Filmspesifikt lærestoff under redaksjonell kontroll – ikke et ferdig kildegodkjent produksjonsscenario.",
  },
  fr: {
    title: "Atelier de production documenté",
    intro: "Choisissez une méthode fondée sur les sources, puis lisez l'explication. Cet exercice facultatif ne change ni la validation du cas ni votre progression sauvegardée.",
    supported: "Choix confirmé par les sources de production",
    reconsider: "Les sources indiquent un autre choix de production",
    sources: "Consulter les sources",
    caveat: "Exercice propre au film en révision éditoriale, non un cas de production validé.",
  },
  pt: {
    title: "Oficina de produção baseada em fontes",
    intro: "Escolha uma técnica sustentada por fontes e leia a explicação. Este exercício facultativo não altera a aprovação do caso nem o progresso guardado.",
    supported: "Escolha sustentada pelas fontes de produção",
    reconsider: "As fontes indicam outra escolha de produção",
    sources: "Consultar fontes",
    caveat: "Material específico do filme em revisão editorial; não é um caso de produção aprovado.",
  },
};

const candidateFeedback: Record<FilmWorkLanguage, { readonly supported: string; readonly reconsider: string }> = {
  en: { supported: "Recommended choice in this draft exercise", reconsider: "Consider the recommended choice in this draft exercise" },
  nb: { supported: "Anbefalt valg i denne utkastøvelsen", reconsider: "Vurder det anbefalte valget i denne utkastøvelsen" },
  fr: { supported: "Choix recommandé dans cet exercice provisoire", reconsider: "Examiner le choix recommandé dans cet exercice provisoire" },
  pt: { supported: "Escolha recomendada neste exercício provisório", reconsider: "Considerar a escolha recomendada neste exercício provisório" },
};

export function ScenarioProductionSourceWorkshop({
  scenarioId,
  language,
  workshopOverride,
}: {
  readonly scenarioId: string;
  readonly language: FilmWorkLanguage;
  readonly workshopOverride?: SourceBackedCaseWorkshop;
}) {
  const workshop = workshopOverride ?? getSourceBackedCaseWorkshop(scenarioId);
  const [selections, setSelections] = useState<Record<string, string>>({});
  if (!workshop) return null;
  const ui = copy[language];
  const feedback = workshopOverride ? candidateFeedback[language] : ui;

  return (
    <section className="scenario-source-workshop" aria-label={ui.title}>
      <div className="scenario-source-workshop__heading">
        <h4>{ui.title}</h4>
        <p>{ui.intro}</p>
      </div>
      <p className="scenario-source-workshop__intro">{workshop.introduction[language]}</p>

      <div className="scenario-source-workshop__questions">
        {workshop.questions.map((question, index) => {
          const selected = selections[question.id];
          const supported = selected ? isBestSupportedWorkshopOption(question, selected) : null;
          const sourceLinks = question.sourceIds.map((id) =>
            workshop.sources.find((source) => source.id === id)
          ).filter((source) => source !== undefined);
          return (
            <article className="scenario-source-workshop__question" key={question.id}>
              <div className="scenario-source-workshop__number">{index + 1} / {workshop.questions.length}</div>
              <h5>{question.prompt[language]}</h5>
              <div className="scenario-source-workshop__choices" role="group" aria-label={question.prompt[language]}>
                {question.options.map((option) => (
                  <button
                    className={`scenario-source-workshop__choice${selected === option.id ? " is-selected" : ""}`}
                    type="button"
                    aria-pressed={selected === option.id}
                    key={option.id}
                    onClick={() => setSelections((old) => ({ ...old, [question.id]: option.id }))}
                  >
                    {option.label[language]}
                  </button>
                ))}
              </div>
              {selected ? (
                <div className="scenario-source-workshop__feedback" role="status" aria-live="polite">
                  <strong>{supported ? feedback.supported : feedback.reconsider}</strong>
                  <p>{question.explanation[language]}</p>
                </div>
              ) : null}
              <details className="scenario-source-workshop__sources">
                <summary>{ui.sources} ({sourceLinks.length})</summary>
                <ul>
                  {sourceLinks.map((source) => (
                    <li key={source.id}>
                      <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                      <small>{source.publisher}</small>
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          );
        })}
      </div>
      <p className="scenario-source-workshop__caveat">{ui.caveat}</p>
    </section>
  );
}
