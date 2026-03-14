'use client'
import { Clock, TrendingUp, AlertTriangle } from 'lucide-react'

interface MarketTimingSignalsPanelProps {
  signals: any[]
}

export function MarketTimingSignalsPanel({ signals }: MarketTimingSignalsPanelProps) {
  const iconMap: Record<string, React.ReactNode> = {
    clock: <Clock className="h-5 w-5" />,
    trending: <TrendingUp className="h-5 w-5" />,
    alert: <AlertTriangle className="h-5 w-5" />,
  }
  const colorMap: Record<string, string> = { emerald: 'var(--emerald)', intel: 'var(--intel-blue)', coral: 'var(--coral)' }

  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Market Timing Signals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {signals.map((signal, i) => {
          const c = colorMap[signal.color]
          return (
            <div key={i} className="rounded-xl p-4" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${c}20`, color: c }}>
                  {iconMap[signal.icon]}
                </div>
                <p className="text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{signal.type}</p>
              </div>
              <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{signal.desc}</p>
              <div className="flex gap-1.5 mt-2.5 flex-wrap">
                {signal.games.map((g: string) => (
                  <span key={g} className="badge text-[9px] px-2 py-0.5" style={{ backgroundColor: `${c}18`, color: c, border: `1px solid ${c}40` }}>{g}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
