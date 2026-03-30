'use client'
import { AlertTriangle, ArrowDown, ArrowUp, Users, TrendingUp } from 'lucide-react'

const trapData = [
  {
    game: 'LAL vs BOS',
    publicSide: 'Lakers ML',
    publicPct: 82,
    lineDirection: 'Moving toward Celtics',
    lineMove: '-3 → -4.5',
    signal: 'reverse',
    description: 'Heavy public money on LAL but line moving against them. Classic trap pattern.',
  },
  {
    game: 'MIL vs IND',
    publicSide: 'Bucks ML',
    publicPct: 76,
    lineDirection: 'Drifting toward Pacers',
    lineMove: '-180 → -165',
    signal: 'reverse',
    description: 'Public hammering MIL after Giannis 40-point game. Sharp books fading the public.',
  },
  {
    game: 'GSW vs DEN',
    publicSide: 'Over 231',
    publicPct: 88,
    lineDirection: 'Total holding steady',
    lineMove: '231 → 231',
    signal: 'hold',
    description: 'Extreme public betting on Over but total not moving. Books comfortable with liability.',
  },
  {
    game: 'PHX vs MIA',
    publicSide: 'Suns -2.5',
    publicPct: 71,
    lineDirection: 'Moving toward Heat',
    lineMove: '-2.5 → -1.5',
    signal: 'reverse',
    description: 'Public on PHX but line dropping. Jimmy Butler ruled out but sharp action on MIA.',
  },
]

export function MarketTrapDetector() {
  const trapCount = trapData.filter(t => t.signal === 'reverse').length

  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" style={{ color: 'var(--coral)' }} />
          <h3 className="font-display text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Market Trap Detector
          </h3>
          <span className="badge text-[9px]" style={{ backgroundColor: 'var(--coral-light)', color: 'var(--coral)' }}>
            {trapCount} TRAP{trapCount !== 1 ? 'S' : ''}
          </span>
        </div>
      </div>

      <p className="text-[11px] font-body mb-4" style={{ color: 'var(--text-muted)' }}>
        Identifies reverse line movement — when public betting conflicts with line direction
      </p>

      <div className="space-y-3">
        {trapData.map((trap, i) => (
          <div key={i} className="rounded-lg p-3" style={{ backgroundColor: 'var(--bg-surface)', border: `1px solid ${trap.signal === 'reverse' ? 'rgba(255,77,109,0.2)' : 'var(--border)'}` }}>
            {/* Game & Signal */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{trap.game}</span>
              <span className="badge text-[9px]" style={{
                backgroundColor: trap.signal === 'reverse' ? 'var(--coral-light)' : 'var(--gold-light)',
                color: trap.signal === 'reverse' ? 'var(--coral)' : 'var(--gold)',
              }}>
                {trap.signal === 'reverse' ? '⚠ REVERSE LINE' : '⏸ LINE HOLD'}
              </span>
            </div>

            {/* Public % vs Line Direction */}
            <div className="flex items-center gap-4 mb-2">
              {/* Public Side */}
              <div className="flex items-center gap-2 flex-1">
                <Users className="h-3.5 w-3.5" style={{ color: 'var(--intel-blue)' }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>Public: {trap.publicSide}</span>
                    <span className="text-xs font-body font-bold" style={{ color: 'var(--intel-blue)' }}>{trap.publicPct}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
                    <div className="h-full rounded-full" style={{ width: `${trap.publicPct}%`, backgroundColor: 'var(--intel-blue)' }} />
                  </div>
                </div>
              </div>

              {/* Direction */}
              <div className="flex items-center gap-1">
                {trap.signal === 'reverse' ? (
                  <ArrowDown className="h-4 w-4" style={{ color: 'var(--coral)' }} />
                ) : (
                  <TrendingUp className="h-4 w-4 opacity-40" style={{ color: 'var(--text-muted)' }} />
                )}
              </div>

              {/* Line Move */}
              <div className="text-right">
                <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>Line: {trap.lineMove}</p>
                <p className="text-[10px] font-body font-semibold" style={{ color: trap.signal === 'reverse' ? 'var(--coral)' : 'var(--gold)' }}>{trap.lineDirection}</p>
              </div>
            </div>

            <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{trap.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
