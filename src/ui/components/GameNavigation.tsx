import { STUDIO_SHELL_COPY } from "../../core/studioShellCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface GameNavigationProps {
  readonly context: string;
  readonly onHome: () => void;
}

export function GameNavigation({ context, onHome }: GameNavigationProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SHELL_COPY[language].navigation;

  return (
    <nav className="game-navigation" aria-label={copy.navigationAria}>
      <button className="game-brand" onClick={onHome} type="button" aria-label={copy.returnAria}>
        <span>FP</span>
        <strong>{copy.productTitle}</strong>
      </button>
      <div className="game-context"><span>{copy.studioOffice}</span><strong>{context}</strong></div>
    </nav>
  );
}