'use client'
import { Play } from 'lucide-react'

interface StrategyBuilderProps {
  stat: string
  setStat: (s: string) => void
  condition: string
  setCondition: (c: string) => void
  direction: string
  setDirection: (d: string) => void
  onRun: () => void
  stats: string[]
  conditions: string[]
  directions: string[]
}

export function StrategyBuilder({
  stat, setStat, condition, setCondition, direction, setDirection, onRun, stats, conditions, directions
}: StrategyBuilderProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        Build Strategy
      </h2>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-body font-semibold mb-1 block" style={{ color: 'var(--text-muted)' }}>STAT</label>
          <select
            value={stat}
            onChange={e => setStat(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-sm font-body"
            style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            {stats.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-body font-semibold mb-1 block" style={{ color: 'var(--text-muted)' }}>CONDITION</label>
          <select
            value={condition}
            onChange={e => setCondition(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-sm font-body"
            style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            {conditions.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-body font-semibold mb-1 block" style={{ color: 'var(--text-muted)' }}>DIRECTION</label>
          <div className="flex gap-2">
            {directions.map(d => (
              <button key={d} onClick={() => setDirection(d)}
                className="flex-1 px-2 py-2 rounded-lg text-xs font-body font-semibold transition-all"
                style={{
                  backgroundColor: direction === d ? 'var(--emerald)' : 'var(--bg-surface)',
                  color: direction === d ? 'white' : 'var(--text-secondary)',
                  border: `1px solid ${direction === d ? 'var(--emerald)' : 'var(--border)'}`,
                }}>
                {d}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={onRun}
          className="btn-primary w-full flex items-center justify-center gap-2 mt-1"
        >
          <Play className="h-4 w-4" /> Run Backtest
        </button>
      </div>
    </div>
  )
}
