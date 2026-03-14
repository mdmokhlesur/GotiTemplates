'use client'

interface BacktestKPIsProps {
  results: any
}

export function BacktestKPIs({ results }: BacktestKPIsProps) {
  const kpis = [
    { label: 'ROI', value: results.roi, color: 'var(--emerald)', icon: '📈' },
    { label: 'Win Rate', value: results.winRate, color: 'var(--emerald)', icon: '🎯' },
    { label: 'Total Bets', value: String(results.totalBets), color: 'var(--intel-blue)', icon: '🎲' },
    { label: 'Sharpe Ratio', value: String(results.sharpe), color: 'var(--gold)', icon: '⚡' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {kpis.map(kpi => (
        <div key={kpi.label} className="card rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">{kpi.icon}</span>
            <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{kpi.label}</p>
          </div>
          <p className="text-2xl font-bold font-body" style={{ color: kpi.color }}>{kpi.value}</p>
        </div>
      ))}
    </div>
  )
}
