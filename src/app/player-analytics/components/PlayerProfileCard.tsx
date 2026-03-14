'use client'
import Link from 'next/link'
import { StatTooltip } from '@/components/charts/StatTooltip'

interface PlayerProfileCardProps {
  player: any
}

export function PlayerProfileCard({ player }: PlayerProfileCardProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0" style={{ border: '2px solid var(--border)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={player.photo} alt={player.name} className="w-full h-full object-cover"
            onError={e => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80x80/1E4D3A/fff?text=' + player.name.charAt(0) }} />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-xl font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{player.name}</h2>
          <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>{player.team} · {player.position} · #{player.number}</p>
          <span className="mt-1.5 badge text-xs"
            style={{
              backgroundColor: player.status === 'Active' ? 'var(--emerald-light)' : player.status === 'Questionable' ? 'var(--gold-light)' : 'var(--coral-light)',
              color: player.status === 'Active' ? 'var(--emerald)' : player.status === 'Questionable' ? 'var(--gold)' : 'var(--coral)',
            }}>
            ● {player.status}
          </span>
        </div>
      </div>

      {/* Season Averages */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {[
          { label: 'PTS', value: '31.2' },
          { label: 'AST', value: '8.4' },
          { label: 'REB', value: '7.1' },
          { label: <StatTooltip stat="USG%"><span>USG%</span></StatTooltip>, value: '31.5' },
        ].map((s, i) => (
          <div key={i} className="rounded-lg p-2 text-center" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            <p className="text-lg font-body font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</p>
          </div>
        ))}
      </div>

      <Link href={`/player/${player.id}`} className="mt-3 w-full py-2 rounded-lg border text-xs font-body font-medium flex items-center justify-center gap-1.5 hover:opacity-80 transition-opacity"
        style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        View Full Profile ←
      </Link>
    </div>
  )
}
