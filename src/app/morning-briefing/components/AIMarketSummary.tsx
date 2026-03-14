'use client'
import { Newspaper } from 'lucide-react'

interface AIMarketSummaryProps {
  summary: string
}

export function AIMarketSummary({ summary }: AIMarketSummaryProps) {
  return (
    <div className="card rounded-xl p-6" style={{ borderLeft: '4px solid var(--gold)' }}>
      <div className="flex items-center gap-2 mb-3">
        <Newspaper className="h-4 w-4" style={{ color: 'var(--gold)' }} />
        <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
          Today's Market Summary
        </h2>
        <span className="ml-auto badge" style={{ backgroundColor: 'var(--gold-light)', color: 'var(--gold)' }}>AI GENERATED</span>
      </div>
      <p className="text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {summary}
      </p>
      <div className="flex flex-wrap gap-3 mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        {[
          { label: 'EV Opportunities', value: '8', color: 'var(--emerald)' },
          { label: 'High Confidence', value: '3', color: 'var(--emerald)' },
          { label: 'Steam Moves', value: '3', color: 'var(--gold)' },
          { label: 'Injury Alerts', value: '2', color: 'var(--coral)' },
        ].map(stat => (
          <div key={stat.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <p className="text-base font-bold font-body" style={{ color: stat.color }}>{stat.value}</p>
            <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
