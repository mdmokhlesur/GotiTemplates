'use client'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface PortfolioKPIsProps {
  kpis: any[]
}

export function PortfolioKPIs({ kpis }: PortfolioKPIsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.key} className="card rounded-xl p-5">
          <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{kpi.label}</p>
          <p className="font-display text-2xl font-bold mt-1" style={{ color: kpi.positive ? 'var(--emerald)' : 'var(--coral)' }}>{kpi.value}</p>
          <div className="flex items-center gap-1 mt-1.5">
            {kpi.positive ? <TrendingUp className="h-3 w-3" style={{ color: 'var(--emerald)' }} /> : <TrendingDown className="h-3 w-3" style={{ color: 'var(--coral)' }} />}
            <span className="text-[11px] font-body" style={{ color: kpi.positive ? 'var(--emerald)' : 'var(--coral)' }}>{kpi.change}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
