interface LandingScreenProps {
  readonly onStart: () => void;
  readonly onContinue: () => void;
  readonly onProductionCases: () => void;
  readonly hasSave: boolean;
}

export function LandingScreen({ onStart, onContinue, onProductionCases, hasSave }: LandingScreenProps) {
  return (
    <main className="landing-screen">
      <div className="landing-grain" aria-hidden="true" />
      <div className="landing-content">
        <div className="landing-monogram" aria-hidden="true">
          <span>HG</span>
          <i />
        </div>
        <span className="landing-kicker">Learn film by making production choices</span>
        <h1>HG Film<br /><em>Producer</em></h1>
        <p>Make pressured script, crew, shoot, post, and release choices. For your first run, start with Production Cases; Studio Career is an experimental branch for later.</p>
        <div className="landing-mode-summary" aria-label="Available modes">
          <p><strong>Recommended first: Production Cases</strong> The stable MVP path: choose one case, make production choices under pressure, finish all missions, then read the Case report.</p>
          <p><strong>Experimental: Studio Career</strong> A playable but rough studio pipeline. Try it after Production Cases if you want to test the broader career flow.</p>
          <p><strong>Future modes</strong> Writers’ room, full studio simulator, and film atlas ideas are later—not the first-time path today.</p>
        </div>
        <div className="landing-actions">
          <button className="landing-primary" onClick={onProductionCases} type="button">
            <span>Start Production Cases</span>
            <b aria-hidden="true">→</b>
          </button>
          {hasSave && <button className="landing-secondary" onClick={onContinue} type="button">Continue Studio Career (experimental)</button>}
          <button className="landing-secondary" onClick={onStart} type="button">Open Studio Career (experimental)</button>
        </div>
        <div className="landing-future-modes" aria-label="Planned future modes">
          <article><span>Writers' room</span><small>planned later</small></article>
          <article><span>Full studio simulator</span><small>planned later</small></article>
          <article><span>Film history atlas / locations</span><small>planned later</small></article>
        </div>
      </div>
      <div className="landing-era" aria-hidden="true">
        <span>1895</span><i /><span>The future of cinema is yours</span><i /><span>Today</span>
      </div>
    </main>
  );
}
