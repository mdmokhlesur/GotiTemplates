'use client'
import { useState } from 'react'
import { StatTooltip } from '@/components/charts/StatTooltip'
import { players, gameLog, hitRateBarData, playerProps, similarPlayers, defensiveIntel } from '@/data/mockData'
import { Search, ChevronDown } from 'lucide-react'
import { HitRateChart } from './HitRateChart'
import { PlayerProfileCard } from './PlayerProfileCard'
import { PlayerPropLines } from './PlayerPropLines'
import { SimilarPlayersCard } from './SimilarPlayersCard'
import { GameLogTable } from './GameLogTable'
import { DefensiveIntelCard } from './DefensiveIntelCard'

const statFilters = ['Points', 'Assists', 'Rebounds', 'Threes', 'Pts+Ast', 'Pts+Reb']

export function PlayerAnalytics() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])
  const [selectedStat, setSelectedStat] = useState('Points')
  const [viewMode, setViewMode] = useState<'avg' | 'median'>('avg')
  const [searchQuery, setSearchQuery] = useState('')
  const [h2hFilter, setH2hFilter] = useState(false)
  const [b2bFilter, setB2bFilter] = useState(false)
  const [showPlayerDropdown, setShowPlayerDropdown] = useState(false)

  const filteredPlayers = players.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const avgPts = gameLog.reduce((sum, g) => sum + g.pts, 0) / gameLog.length
  const sortedPts = [...gameLog].sort((a, b) => a.pts - b.pts)
  const medianPts = sortedPts[Math.floor(sortedPts.length / 2)].pts
  const displayLine = viewMode === 'avg' ? avgPts : medianPts

  const hitCount = hitRateBarData.filter(d => d.hit).length
  const hitRate = Math.round((hitCount / hitRateBarData.length) * 100)

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>Player Analytics</h1>
          <p className="text-sm font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>Prop research & historical performance</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 items-center">
        {/* Player Search */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium border transition-colors"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onClick={() => setShowPlayerDropdown(!showPlayerDropdown)}
          >
            <Search className="h-3.5 w-3.5" style={{ color: 'var(--text-muted)' }} />
            {selectedPlayer.name}
            <ChevronDown className="h-3.5 w-3.5 ml-1" style={{ color: 'var(--text-muted)' }} />
          </button>
          {showPlayerDropdown && (
            <div className="absolute top-full left-0 mt-1 z-20 w-64 rounded-xl border shadow-lg overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <div className="p-2 border-b" style={{ borderColor: 'var(--border)' }}>
                <input
                  className="w-full px-3 py-1.5 rounded-lg text-sm font-body outline-none"
                  style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)' }}
                  placeholder="Search players..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="max-h-52 overflow-y-auto py-1">
                {filteredPlayers.map(p => (
                  <button
                    key={p.id}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:opacity-80 transition-colors"
                    style={{ backgroundColor: selectedPlayer.id === p.id ? 'var(--emerald-light)' : 'transparent', color: selectedPlayer.id === p.id ? 'var(--emerald)' : 'var(--text-primary)' }}
                    onClick={() => { setSelectedPlayer(p); setShowPlayerDropdown(false); setSearchQuery('') }}
                  >
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-body shrink-0" style={{ backgroundColor: 'var(--bg-surface)' }}>
                      #{p.number}
                    </span>
                    <div>
                      <p className="text-sm font-body font-semibold">{p.name}</p>
                      <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{p.team} · {p.position}</p>
                    </div>
                    <span className={`ml-auto text-[10px] badge ${p.status === 'Active' ? 'bg-emerald/20 text-profit' : p.status === 'Questionable' ? '' : 'bg-coral/20 text-loss'}`}
                      style={p.status === 'Questionable' ? { backgroundColor: 'var(--gold-light)', color: 'var(--gold)' } : {}}>
                      {p.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Market filters */}
        <div className="flex gap-1.5 flex-wrap">
          {statFilters.map(s => (
            <button
              key={s}
              onClick={() => setSelectedStat(s)}
              className="px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-all"
              style={{
                backgroundColor: selectedStat === s ? 'var(--emerald)' : 'var(--bg-card)',
                color: selectedStat === s ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${selectedStat === s ? 'var(--emerald)' : 'var(--border)'}`,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Context Filters */}
        <div className="flex gap-1.5 ml-auto">
          {[
            { label: 'H2H', key: 'h2h', active: h2hFilter, set: setH2hFilter },
            { label: 'B2B', key: 'b2b', active: b2bFilter, set: setB2bFilter },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => f.set(!f.active)}
              className="px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-all"
              style={{
                backgroundColor: f.active ? 'var(--gold-light)' : 'var(--bg-card)',
                color: f.active ? 'var(--gold)' : 'var(--text-secondary)',
                border: `1px solid ${f.active ? 'var(--gold)' : 'var(--border)'}`,
              }}
            >
              <StatTooltip stat={f.label}><span>{f.label}</span></StatTooltip>
            </button>
          ))}
        </div>
      </div>

      {/* Avg / Median Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-body font-medium" style={{ color: 'var(--text-muted)' }}>View mode:</span>
        <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          {(['avg', 'median'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className="px-4 py-1.5 text-xs font-body font-semibold transition-colors capitalize"
              style={{
                backgroundColor: viewMode === mode ? 'var(--emerald)' : 'var(--bg-card)',
                color: viewMode === mode ? 'white' : 'var(--text-secondary)',
              }}
            >
              {mode === 'avg' ? 'Average' : 'Median'}
            </button>
          ))}
        </div>
        <span className="text-xs font-body px-2 py-1 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-muted)' }}>
          {viewMode === 'avg' ? 'Avg' : 'Median'}: <strong style={{ color: 'var(--text-primary)' }}>{displayLine.toFixed(1)} PTS</strong>
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="space-y-4">
          <PlayerProfileCard player={selectedPlayer} />
          <PlayerPropLines props={playerProps.filter(p => p.player === selectedPlayer.name || playerProps.indexOf(p) < 3).slice(0, 4)} />
        </div>

        <div className="space-y-4">
          <HitRateChart 
            data={hitRateBarData} 
            displayLine={displayLine} 
            viewMode={viewMode} 
            selectedStat={selectedStat} 
            hitRate={hitRate} 
            hitCount={hitCount} 
          />
          <SimilarPlayersCard data={similarPlayers} />
        </div>

        <div className="space-y-4">
          <GameLogTable data={gameLog} />
          <DefensiveIntelCard data={defensiveIntel} />
        </div>
      </div>
    </div>
  )
}
