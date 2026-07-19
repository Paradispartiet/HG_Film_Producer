import { getClassicFilmScenarios } from "./filmScenarios";
import { getVerifiedProductionCaseIds } from "./scenarioProductionVerificationRegistry";

export function getVerifiedProductionCaseTitles(): readonly string[] {
  const verifiedScenarioIds = new Set(getVerifiedProductionCaseIds());
  return getClassicFilmScenarios()
    .filter((scenario) => verifiedScenarioIds.has(scenario.id))
    .map((scenario) => scenario.film.title);
}

export function applyProductionCaseVerificationMarkers(
  root: ParentNode,
): number {
  const library = root.querySelector<HTMLElement>(".scenario-library");
  if (!library) return 0;

  const verifiedTitles = new Set(getVerifiedProductionCaseTitles());
  let markedCount = 0;

  for (const card of library.querySelectorAll<HTMLElement>(".scenario-card")) {
    const title = card.querySelector("h3")?.textContent?.trim() ?? "";
    const isVerified = verifiedTitles.has(title);

    if (isVerified) {
      card.dataset.sourceVerified = "true";
      card.dataset.verificationAria = "true";
      card.setAttribute("aria-label", `${title}. Source-verified Production Case.`);
      markedCount += 1;
    } else {
      delete card.dataset.sourceVerified;
      if (card.dataset.verificationAria === "true") {
        card.removeAttribute("aria-label");
        delete card.dataset.verificationAria;
      }
    }
  }

  const header = library.querySelector<HTMLElement>(".scenario-library-header");
  if (header) {
    header.dataset.sourceVerifiedSummary = `${verifiedTitles.size} source-verified cases`;
  }

  return markedCount;
}

export function installProductionCaseVerificationMarkers(): () => void {
  if (typeof document === "undefined" || typeof MutationObserver === "undefined") {
    return () => undefined;
  }

  let scheduled = false;
  const applyMarkers = () => {
    scheduled = false;
    applyProductionCaseVerificationMarkers(document);
  };
  const scheduleMarkers = () => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(applyMarkers);
  };

  applyMarkers();
  const observer = new MutationObserver(scheduleMarkers);
  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
}
