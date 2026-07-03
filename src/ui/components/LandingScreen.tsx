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
        <p>Start with the stable case-based production loop, then explore the studio experiment.</p>
        <div className="landing-mode-summary" aria-label="Available modes">
          <p><strong>Recommended first: Production Cases</strong> Play the stable case-based MVP loop first: choose a production case, make choices, get a report, improve your best result.</p>
          <p><strong>Experimental: Studio Career</strong> A playable studio/career branch for testing the production pipeline. Expect rough edges.</p>
          <p><strong>Planned later</strong> Full studio simulator and future modes are not part of the current playable MVP.</p>
        </div>
        <div className="landing-actions">
          <button className="landing-primary" onClick={onProductionCases} type="button">
            <span>Start Production Cases</span>
            <b aria-hidden="true">→</b>
          </button>
          {hasSave && <button className="landing-secondary" onClick={onContinue} type="button">Continue experimental career</button>}
          <button className="landing-secondary" onClick={onStart} type="button">Experimental Studio Career</button>
          <button className="landing-secondary" onClick={onDemo} type="button">Demo inspection</button>
        </div>
        <div className="landing-future-modes" aria-label="Planned future modes">
          <article><span>Writers' room</span><small>planned later</small></article>
          <article><span>Full studio simulator</span><small>planned later</small></article>
          <article><span>Film history atlas / locations</span><small>planned later</small></article>
        </div>
        <button className="landing-dev-link" onClick={onDevDashboard} type="button">Engine inspection</button>
      </div>
      <div className="landing-era" aria-hidden="true">
        <span>1895</span><i /><span>The future of cinema is yours</span><i /><span>Today</span>
      </div>
    </main>
  );
}
