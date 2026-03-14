'use client'
import { ChevronRight } from 'lucide-react'

interface SavedStrategiesProps {
  strategies: any[]
  activeStrategy: any
  onSelect: (s: any) => void
}

export function SavedStrategies({ strategies, activeStrategy, onSelect }: SavedStrategiesProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
        Saved Strategies
      </h2>
      <div className="space-y-2">
        {strategies.map(s => (
          <button key={s.id} onClick={() => onSelect(s)}
            className="w-full text-left rounded-xl p-3 transition-all group"
            style={{
              backgroundColor: activeStrategy.id === s.id ? 'var(--emerald-light)' : 'var(--bg-surface)',
              border: `1px solid ${activeStrategy.id === s.id ? 'var(--emerald)' : 'var(--border)'}`,
            }}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold font-body" style={{ color: activeStrategy.id === s.id ? 'var(--emerald)' : 'var(--text-primary)' }}>
                {s.name}
              </p>
              <ChevronRight className="h-3 w-3" style={{ color: 'var(--text-muted)' }} />
            </div>
            <p className="text-[10px] font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>
              ROI: <span style={{ color: 'var(--emerald)' }}>{s.roi}</span> · Win: {s.winRate}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
