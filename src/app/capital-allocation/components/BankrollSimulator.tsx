'use client'
import { DollarSign } from 'lucide-react'

interface BankrollSimulatorProps {
  bankroll: number
  setBankroll: (v: number) => void
  allocations: any[]
}

export function BankrollSimulator({ bankroll, setBankroll, allocations }: BankrollSimulatorProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="h-4 w-4" style={{ color: 'var(--gold)' }} />
        <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
          Bankroll Simulator
        </h2>
      </div>
      <div className="mb-4">
        <label className="text-xs font-body font-semibold" style={{ color: 'var(--text-muted)' }}>YOUR BANKROLL</label>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>$</span>
          <input
            type="number"
            value={bankroll}
            onChange={e => setBankroll(Number(e.target.value))}
            min={100}
            step={500}
            className="flex-1 px-3 py-2 rounded-lg text-sm font-body font-bold"
            style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          />
        </div>
      </div>
      <div className="space-y-2.5">
        {allocations.map((s, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: s.hexColor }} />
              <span className="text-xs font-body" style={{ color: 'var(--text-secondary)' }}>{s.name}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold font-body" style={{ color: 'var(--text-primary)' }}>${s.amount.toLocaleString()}</p>
              <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{s.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
