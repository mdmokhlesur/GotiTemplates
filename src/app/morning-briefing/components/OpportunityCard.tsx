'use client'
import { TrendingUp } from 'lucide-react'

interface OpportunityCardProps {
  card: any
}

const signalConfig: any = {
  'Strong Buy': { color: 'var(--emerald)', bg: 'var(--emerald-light)', label: '⬆ STRONG BUY' },
  'Buy': { color: 'var(--intel-blue)', bg: 'var(--intel-blue-light)', label: '↑ BUY' },
  'Fade': { color: 'var(--coral)', bg: 'var(--coral-light)', label: '↓ FADE' },
}

export function OpportunityCard({ card }: OpportunityCardProps) {
  const sig = signalConfig[card.signal]
  const isPositiveOdds = card.odds.startsWith('+')
  
  return (
    <div className="card rounded-xl p-5 relative overflow-hidden group transition-all hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: `linear-gradient(90deg, ${sig.color}, transparent)` }} />

      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="badge text-[9px] font-bold mb-1.5 inline-block" style={{ backgroundColor: 'var(--gold-light)', color: 'var(--gold)' }}>
            {card.league}
          </span>
          <h3 className="text-sm font-semibold font-body" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
        </div>
        <span className="badge text-[9px] font-bold shrink-0 ml-2" style={{ backgroundColor: sig.bg, color: sig.color }}>{sig.label}</span>
      </div>

      <p className="text-xs font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{card.body}</p>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <span className="text-xs font-bold" style={{ color: isPositiveOdds ? 'var(--emerald)' : 'var(--coral)' }}>{card.odds}</span>
          <span className="text-[11px] font-body" style={{ color: 'var(--text-muted)' }}>{card.book}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg" style={{ backgroundColor: 'var(--emerald-light)' }}>
          <TrendingUp className="h-3 w-3" style={{ color: 'var(--emerald)' }} />
          <span className="text-xs font-bold" style={{ color: 'var(--emerald)' }}>EV {card.ev}</span>
        </div>
        <div className="ml-auto text-right">
          <p className="text-[10px] font-body mb-1" style={{ color: 'var(--text-muted)' }}>Confidence {card.confidence}%</p>
          <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
            <div className="h-full rounded-full" style={{ width: `${card.confidence}%`, backgroundColor: card.confidence >= 80 ? 'var(--emerald)' : card.confidence >= 65 ? 'var(--gold)' : 'var(--coral)' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
