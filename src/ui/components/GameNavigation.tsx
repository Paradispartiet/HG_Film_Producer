interface GameNavigationProps {
  readonly context: string;
  readonly onHome: () => void;
}

export function GameNavigation({ context, onHome }: GameNavigationProps) {
  return (
    <nav className="game-navigation" aria-label="Game navigation">
      <button className="game-brand" onClick={onHome} type="button" aria-label="Return to Filmverket">
        <span>FP</span>
        <strong>Film Producer</strong>
      </button>
      <div className="game-context"><span>Studio office</span><strong>{context}</strong></div>
    </nav>
  );
}
