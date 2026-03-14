'use client'

interface LineMovementGameSelectorProps {
  games: any[]
  selectedGame: number
  setSelectedGame: (v: number) => void
}

export function LineMovementGameSelector({ games, selectedGame, setSelectedGame }: LineMovementGameSelectorProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {games.map((g, i) => (
        <button
          key={g.id}
          onClick={() => setSelectedGame(i)}
          className="px-4 py-2 rounded-lg text-sm font-body font-medium transition-all border"
          style={{
            backgroundColor: selectedGame === i ? 'var(--emerald)' : 'var(--bg-card)',
            color: selectedGame === i ? 'white' : 'var(--text-secondary)',
            borderColor: selectedGame === i ? 'var(--emerald)' : 'var(--border)',
          }}
        >
          {g.away_team.split(' ').pop()} @ {g.home_team.split(' ').pop()}
        </button>
      ))}
    </div>
  )
}
