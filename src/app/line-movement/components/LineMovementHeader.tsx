'use client'
import { Lock } from 'lucide-react'

export function LineMovementHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>Line Movement</h1>
        <p className="text-sm font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>Track sharp money vs public betting lines in real time</p>
      </div>
      <span className="badge px-3 py-1.5 text-xs" style={{ backgroundColor: 'var(--gold-light)', color: 'var(--gold)', border: '1px solid var(--gold)' }}>
        <Lock className="h-3 w-3 inline mr-1" /> PRO FEATURE
      </span>
    </div>
  )
}
