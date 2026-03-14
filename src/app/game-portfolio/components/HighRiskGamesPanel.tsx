'use client'

interface HighRiskGamesPanelProps {
  games: any[]
}

export function HighRiskGamesPanel({ games }: HighRiskGamesPanelProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>High-Risk Upcoming Games</h2>
      <div className="space-y-3">
        {games.map((g, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-body font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{g.matchup}</p>
              <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{g.date}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="h-1.5 w-24 rounded-full overflow-hidden mb-1" style={{ backgroundColor: 'var(--border)' }}>
                <div className="h-full rounded-full" style={{ width: `${g.riskScore}%`, backgroundColor: g.risk === 'High' ? 'var(--coral)' : 'var(--gold)' }} />
              </div>
              <span className="badge text-white text-[9px]" style={{ backgroundColor: g.risk === 'High' ? 'var(--coral)' : 'var(--gold)' }}>
                {g.risk} ({g.riskScore})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
