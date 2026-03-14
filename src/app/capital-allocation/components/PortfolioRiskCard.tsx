'use client'
import { RiskGauge } from '@/components/charts/RiskGauge'

export function PortfolioRiskCard() {
  return (
    <div className="card rounded-xl p-5 flex flex-col items-center justify-center">
      <h2 className="font-display text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        Portfolio Risk Score
      </h2>
      <RiskGauge score={62} />
      <p className="text-xs font-body mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
        Moderate risk — diversified across 4 market types
      </p>
      <div className="mt-4 w-full space-y-2">
        {[
          { label: 'Concentration Risk', value: 'Low', color: 'var(--emerald)' },
          { label: 'Correlation Risk', value: 'Moderate', color: 'var(--gold)' },
          { label: 'Liquidity Risk', value: 'Low', color: 'var(--emerald)' },
        ].map(r => (
          <div key={r.label} className="flex items-center justify-between text-xs font-body">
            <span style={{ color: 'var(--text-muted)' }}>{r.label}</span>
            <span className="font-semibold" style={{ color: r.color }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
