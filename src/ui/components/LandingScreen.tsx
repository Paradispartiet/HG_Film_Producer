interface LandingScreenProps {
  readonly onStart: () => void;
  readonly onDemo: () => void;
  readonly onDevDashboard: () => void;
}

export function LandingScreen({ onStart, onDemo, onDevDashboard }: LandingScreenProps) {
  return (
    <main className="landing-screen">
      <div className="landing-grain" aria-hidden="true" />
      <div className="landing-content">
        <div className="landing-monogram" aria-hidden="true">
          <span>HG</span>
          <i />
        </div>
        <span className="landing-kicker">A studio management game</span>
        <h1>HG Film<br /><em>Producer</em></h1>
        <p>Build a film studio through film history</p>
        <div className="landing-actions">
          <button className="landing-primary" onClick={onStart} type="button">
            <span>Start new studio</span>
            <b aria-hidden="true">→</b>
          </button>
          <button className="landing-secondary" onClick={onDemo} type="button">Demo run</button>
        </div>
        <button className="landing-dev-link" onClick={onDevDashboard} type="button">Dev dashboard</button>
      </div>
      <div className="landing-era" aria-hidden="true">
        <span>1895</span><i /><span>The future of cinema is yours</span><i /><span>Today</span>
      </div>
    </main>
  );
}
