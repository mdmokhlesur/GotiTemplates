'use client'
import { volatilityColor } from '@/lib/utils'

interface VolatilityHeatmapPanelProps {
  data: any[]
}

export function VolatilityHeatmapPanel({ data }: VolatilityHeatmapPanelProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Volatility Heatmap</h2>
      <div className="space-y-3">
        {data.map((item, i) => {
          const colors = volatilityColor(item.volatility)
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-body font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{item.game}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`badge text-[9px] ${colors.bg} ${colors.text}`} style={{ border: `1px solid`, borderColor: colors.border.replace('border-', '') }}>
                      {item.volatility.toUpperCase()}
                    </span>
                    <span className="text-xs font-body" style={{ color: item.change.startsWith('+') ? 'var(--emerald)' : 'var(--coral)' }}>{item.change}</span>
                  </div>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${item.pct}%`,
                      backgroundColor: item.volatility === 'high' ? 'var(--coral)' : item.volatility === 'moderate' ? 'var(--gold)' : 'var(--emerald)',
                    }}
                  />
                </div>
                <div className="flex justify-between mt-0.5">
                  <span className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>Volatility Index</span>
                  <span className="text-[10px] font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{item.pct}/100</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
