'use client'

interface MoneySplitCardProps {
  game: any
}

export function MoneySplitCard({ game }: MoneySplitCardProps) {
  const splits = [
    { label: game.home_team.split(' ').pop()!, sharp: 73, public: 38, positive: true },
    { label: game.away_team.split(' ').pop()!, sharp: 27, public: 62, positive: false },
  ]

  return (
    <div className="card rounded-xl p-5">
      <h3 className="font-display text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Money Split</h3>
      <div className="space-y-3">
        {splits.map((team, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-body mb-1.5">
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{team.label}</span>
              <span style={{ color: 'var(--text-muted)' }}>Sharp: <strong style={{ color: team.positive ? 'var(--emerald)' : 'var(--coral)' }}>{team.sharp}%</strong></span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <div className="h-full rounded-full" style={{ width: `${team.sharp}%`, backgroundColor: team.positive ? 'var(--emerald)' : 'var(--coral)' }} />
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>Public: {team.public}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
