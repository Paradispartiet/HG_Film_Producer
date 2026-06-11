interface SystemStatusPanelProps {
  readonly engines: readonly string[];
}

export function SystemStatusPanel({ engines }: SystemStatusPanelProps) {
  return (
    <section className="panel system-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">Integration layer</span><h2>System status</h2></div>
        <span className="systems-count">{engines.length}/{engines.length} online</span>
      </div>
      <ul className="system-list">
        {engines.map((engine) => <li key={engine}><span className="online-dot" aria-hidden="true" />{engine}<small>represented</small></li>)}
      </ul>
    </section>
  );
}
