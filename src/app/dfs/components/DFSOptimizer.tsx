'use client'
import { useState, useMemo } from 'react'
import { Gamepad2, ArrowUpDown } from 'lucide-react'
import { nbaDFSPlays } from '@/data/nba'

type SortKey = 'valueScore' | 'projection' | 'dkPrice' | 'fdPrice'

export function DFSOptimizer() {
  const [sortKey, setSortKey] = useState<SortKey>('valueScore')
  const [sortAsc, setSortAsc] = useState(false)

  const sorted = useMemo(() => {
    return [...nbaDFSPlays].sort((a, b) => sortAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey])
  }, [sortKey, sortAsc])

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22D3EE, #06B6D4)' }}>
            <Gamepad2 className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            DFS Integration
          </h1>
        </div>
        <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
          Compare projections with DraftKings and FanDuel pricing • Highlight value plays
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="card rounded-xl p-4">
          <p className="text-[11px] font-body" style={{ color: 'var(--text-muted)' }}>Value Plays</p>
          <p className="text-2xl font-bold font-body mt-0.5" style={{ color: 'var(--emerald)' }}>{nbaDFSPlays.filter(p => p.valueScore >= 4.0).length}</p>
          <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>Score ≥ 4.0</p>
        </div>
        <div className="card rounded-xl p-4">
          <p className="text-[11px] font-body" style={{ color: 'var(--text-muted)' }}>Avg Value Score</p>
          <p className="text-2xl font-bold font-body mt-0.5" style={{ color: 'var(--gold)' }}>
            {(nbaDFSPlays.reduce((s, p) => s + p.valueScore, 0) / nbaDFSPlays.length).toFixed(2)}
          </p>
        </div>
        <div className="card rounded-xl p-4">
          <p className="text-[11px] font-body" style={{ color: 'var(--text-muted)' }}>Players Tracked</p>
          <p className="text-2xl font-bold font-body mt-0.5" style={{ color: 'var(--intel-blue)' }}>{nbaDFSPlays.length}</p>
        </div>
        <div className="card rounded-xl p-4">
          <p className="text-[11px] font-body" style={{ color: 'var(--text-muted)' }}>Best Value</p>
          <p className="text-lg font-bold font-body mt-0.5" style={{ color: 'var(--emerald)' }}>
            {sorted[0]?.playerName}
          </p>
          <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>Score: {sorted[0]?.valueScore}</p>
        </div>
      </div>

      {/* Table */}
      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Player</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Position</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Stat</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('projection')}>
                  <span className="flex items-center gap-1">Projection <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('dkPrice')}>
                  <span className="flex items-center gap-1">DK Price <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('fdPrice')}>
                  <span className="flex items-center gap-1">FD Price <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('valueScore')}>
                  <span className="flex items-center gap-1">Value Score <ArrowUpDown className="h-3 w-3" /></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((play, i) => (
                <tr key={play.playerName} className="transition-colors hover:bg-white/[0.02]" style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{play.playerName}</p>
                      <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{play.team}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="badge text-[10px]" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>{play.position}</span>
                  </td>
                  <td className="px-4 py-3 text-xs font-body" style={{ color: 'var(--text-secondary)' }}>{play.stat}</td>
                  <td className="px-4 py-3 text-sm font-body font-bold" style={{ color: 'var(--emerald)' }}>{play.projection}</td>
                  <td className="px-4 py-3 text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>${play.dkPrice.toLocaleString()}</td>
                  <td className="px-4 py-3 text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>${play.fdPrice.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
                        <div className="h-full rounded-full" style={{ width: `${Math.min(play.valueScore / 5 * 100, 100)}%`, backgroundColor: play.valueScore >= 4.0 ? 'var(--emerald)' : play.valueScore >= 3.7 ? 'var(--gold)' : 'var(--text-muted)' }} />
                      </div>
                      <span className="text-sm font-body font-bold" style={{ color: play.valueScore >= 4.0 ? 'var(--emerald)' : play.valueScore >= 3.7 ? 'var(--gold)' : 'var(--text-secondary)' }}>
                        {play.valueScore.toFixed(2)}
                      </span>
                      {play.valueScore >= 4.0 && (
                        <span className="badge text-[8px]" style={{ backgroundColor: 'var(--emerald-light)', color: 'var(--emerald)' }}>VALUE</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
