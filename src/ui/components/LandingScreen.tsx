interface LandingScreenProps {
  readonly onStart: () => void;
  readonly onContinue: () => void;
  readonly onDemo: () => void;
  readonly onDevDashboard: () => void;
  readonly onProductionCases: () => void;
  readonly hasSave: boolean;
}

export function LandingScreen({ onStart, onContinue, onDemo, onDevDashboard, onProductionCases, hasSave }: LandingScreenProps) {
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
        <div className="landing-mode-summary" aria-label="Available modes">
          <p><strong>Production Cases</strong> are the current playable MVP.</p>
          <p><strong>Studio Career</strong> is an early studio pipeline mode.</p>
          <p><strong>Demo Dashboard</strong> is for engine and demo inspection.</p>
        </div>
        <div className="landing-actions">
          <button className="landing-primary" onClick={onProductionCases} type="button">
            <span>Start Production Cases</span>
            <b aria-hidden="true">→</b>
          </button>
          {hasSave && <button className="landing-secondary" onClick={onContinue} type="button">Continue career</button>}
          <button className="landing-secondary" onClick={onStart} type="button">New studio career</button>
          <button className="landing-secondary" onClick={onDemo} type="button">Demo dashboard</button>
        </div>
        <div className="landing-future-modes" aria-label="Planned future modes">
          <article><span>Writers' room</span><small>planned</small></article>
          <article><span>Full studio simulator</span><small>planned</small></article>
          <article><span>Film history atlas / locations</span><small>planned</small></article>
        </div>
        <button className="landing-dev-link" onClick={onDevDashboard} type="button">Dev dashboard</button>
      </div>
      <div className="landing-era" aria-hidden="true">
        <span>1895</span><i /><span>The future of cinema is yours</span><i /><span>Today</span>
      </div>
    </main>
  );
}
