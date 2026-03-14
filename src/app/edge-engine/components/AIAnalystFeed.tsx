'use client'
import { Bot } from 'lucide-react'

interface AIAnalystFeedProps {
  data: any[]
}

const badgeColors: Record<string, { bg: string; color: string }> = {
  'EV+': { bg: 'var(--emerald-light)', color: 'var(--emerald)' },
  'LINE': { bg: 'var(--intel-blue-light)', color: 'var(--intel-blue)' },
  'RISK': { bg: 'var(--coral-light)', color: 'var(--coral)' },
  'NEWS': { bg: 'var(--gold-light)', color: 'var(--gold)' },
  'SHARP': { bg: 'var(--emerald-light)', color: 'var(--emerald)' },
}

export function AIAnalystFeed({ data }: AIAnalystFeedProps) {
  return (
    <div className="card rounded-xl p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="h-4 w-4" style={{ color: 'var(--intel-blue)' }} />
        <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          AI Quant Analyst
        </h2>
        <span className="ml-auto badge" style={{ backgroundColor: 'var(--intel-blue-light)', color: 'var(--intel-blue)' }}>LIVE</span>
      </div>
      <div className="space-y-3 flex-1 overflow-y-auto" style={{ maxHeight: 480 }}>
        {data.map(feed => {
          const bc = badgeColors[feed.badge] ?? badgeColors['EV+']
          const borderColor = feed.type === 'correlation' ? 'var(--coral)' : feed.type === 'movement' ? 'var(--intel-blue)' : 'var(--emerald)'
          return (
            <div key={feed.id} className="rounded-xl p-3.5 transition-all" style={{ backgroundColor: 'var(--bg-surface)', borderLeft: `3px solid ${borderColor}` }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="badge text-[9px] font-bold" style={{ backgroundColor: bc.bg, color: bc.color }}>{feed.badge}</span>
                <span className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{feed.time}</span>
              </div>
              <p className="text-xs font-semibold font-body mb-1" style={{ color: 'var(--text-primary)' }}>{feed.title}</p>
              <p className="text-[11px] font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feed.body}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{feed.game}</span>
                <span className="text-[10px] font-body font-semibold" style={{ color: 'var(--gold)' }}>
                  {feed.confidence}% confidence
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
