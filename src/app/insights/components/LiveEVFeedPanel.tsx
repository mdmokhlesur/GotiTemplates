'use client'

interface LiveEVFeedPanelProps {
  data: any[]
}

export function LiveEVFeedPanel({ data }: LiveEVFeedPanelProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Live +EV Feed</h2>
        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-body font-semibold" style={{ backgroundColor: 'var(--coral-light)', color: 'var(--coral)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--coral)' }} />
          LIVE
        </span>
      </div>
      <div className="space-y-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: 'var(--emerald)' }}>
              {item.player.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{item.player} <span style={{ color: 'var(--text-muted)' }}>({item.team})</span></p>
              <p className="text-[10px] font-body truncate" style={{ color: 'var(--text-muted)' }}>{item.prop} · {item.book}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-body font-bold text-profit">{item.ev}</p>
              <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
