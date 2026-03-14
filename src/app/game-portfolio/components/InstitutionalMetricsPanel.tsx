'use client'

interface InstitutionalMetricsPanelProps {
  metrics: any[]
}

export function InstitutionalMetricsPanel({ metrics }: InstitutionalMetricsPanelProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Institutional Metrics</h2>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <div key={i} className="rounded-xl p-4" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
            <p className="font-display text-xl font-bold mt-1" style={{ color: m.positive ? 'var(--emerald)' : 'var(--coral)' }}>{m.value}</p>
            <p className="text-[10px] font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
