'use client'

interface InstitutionalMetricsStripProps {
  metrics: any[]
}

export function InstitutionalMetricsStrip({ metrics }: InstitutionalMetricsStripProps) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
        Institutional Performance Metrics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map(m => (
          <div key={m.label} className="card rounded-xl p-4">
            <p className="text-xs font-body mb-1" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
            <p className="text-xl font-bold font-body" style={{ color: m.positive ? 'var(--emerald)' : 'var(--coral)' }}>{m.value}</p>
            <p className="text-[10px] font-body mt-1 leading-tight" style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
            <div className="mt-2 px-2 py-1 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <p className="text-[9px] font-body" style={{ color: 'var(--gold)' }}>📊 {m.benchmark}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
