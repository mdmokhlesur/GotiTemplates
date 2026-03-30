'use client'
import { useState, useMemo } from 'react'
import { Target, Search, ArrowUpDown, Plus, ChevronDown } from 'lucide-react'
import { nbaProps } from '@/data/nba'
import { getRatingColor, getRatingBgColor } from '@/lib/smartRating'
import { useAppDispatch } from '@/redux/hooks'
import { addLeg } from '@/redux/features/parlaySlice'
import type { PropCategory } from '@/types'

const ALL_CATEGORIES: PropCategory[] = [
  'Points', 'Assists', 'Rebounds', 'PRA', 'PR', 'PA',
  '3PM', 'Steals', 'Blocks', 'Turnovers',
  'Double Double', 'Triple Double',
  '1st Half', '1st Quarter', 'Alternate Lines', 'Ladder Props',
]

const SORT_OPTIONS = [
  { label: 'Edge %', key: 'edge' },
  { label: 'Hit Rate', key: 'hitRate' },
  { label: 'Confidence', key: 'confidence' },
  { label: 'Rating', key: 'rating' },
] as const

type SortKey = typeof SORT_OPTIONS[number]['key']

const ratingOrder = { A: 4, 'B+': 3, B: 2, C: 1 }

export function PropExplorer() {
  const dispatch = useAppDispatch()
  const [activeCategory, setActiveCategory] = useState<PropCategory | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('edge')
  const [sortAsc, setSortAsc] = useState(false)
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set())

  const filtered = useMemo(() => {
    let data = [...nbaProps]
    if (activeCategory !== 'All') {
      data = data.filter(p => p.propCategory === activeCategory)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      data = data.filter(p =>
        p.playerName.toLowerCase().includes(q) ||
        p.team.toLowerCase().includes(q)
      )
    }
    data.sort((a, b) => {
      let va: number, vb: number
      if (sortKey === 'rating') {
        va = ratingOrder[a.rating]
        vb = ratingOrder[b.rating]
      } else {
        va = a[sortKey]
        vb = b[sortKey]
      }
      return sortAsc ? va - vb : vb - va
    })
    return data
  }, [activeCategory, searchQuery, sortKey, sortAsc])

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  function handleAddToParlay(prop: typeof nbaProps[0]) {
    dispatch(addLeg({ id: prop.id, prop, direction: 'over' }))
    setAddedIds(prev => new Set(prev).add(prop.id))
  }

  const categoryCount = (cat: PropCategory) => nbaProps.filter(p => p.propCategory === cat).length

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--intel-blue), #3B82F6)' }}>
              <Target className="h-4 w-4 text-white" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Prop Category Filters
            </h1>
          </div>
          <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
            Browse and filter {nbaProps.length} player props across {ALL_CATEGORIES.length} categories
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
            <Search className="h-3.5 w-3.5" style={{ color: 'var(--text-muted)' }} />
            <input
              className="bg-transparent outline-none text-sm font-body w-40"
              style={{ color: 'var(--text-primary)' }}
              placeholder="Search player or team..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setActiveCategory('All')}
          className="px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all"
          style={{
            backgroundColor: activeCategory === 'All' ? 'var(--emerald)' : 'var(--bg-surface)',
            color: activeCategory === 'All' ? 'white' : 'var(--text-secondary)',
            border: `1px solid ${activeCategory === 'All' ? 'var(--emerald)' : 'var(--border)'}`,
          }}
        >
          All ({nbaProps.length})
        </button>
        {ALL_CATEGORIES.map(cat => {
          const count = categoryCount(cat)
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all"
              style={{
                backgroundColor: activeCategory === cat ? 'var(--emerald)' : 'var(--bg-surface)',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${activeCategory === cat ? 'var(--emerald)' : 'var(--border)'}`,
              }}
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Props', value: filtered.length.toString(), color: 'var(--intel-blue)' },
          { label: 'A-Rated', value: filtered.filter(p => p.rating === 'A').length.toString(), color: 'var(--emerald)' },
          { label: 'Avg Edge', value: filtered.length ? `+${(filtered.reduce((s, p) => s + p.edge, 0) / filtered.length).toFixed(1)}%` : '0%', color: 'var(--gold)' },
          { label: 'Avg Hit Rate', value: filtered.length ? `${Math.round(filtered.reduce((s, p) => s + p.hitRate, 0) / filtered.length)}%` : '0%', color: 'var(--emerald)' },
        ].map(kpi => (
          <div key={kpi.label} className="card rounded-xl p-3">
            <p className="text-[11px] font-body" style={{ color: 'var(--text-muted)' }}>{kpi.label}</p>
            <p className="text-xl font-bold font-body mt-0.5" style={{ color: kpi.color }}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Props Table */}
      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Player</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Prop</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Line</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Proj</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('hitRate')}>
                  <span className="flex items-center gap-1">Hit Rate <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Best Odds</th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('edge')}>
                  <span className="flex items-center gap-1">Edge <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('confidence')}>
                  <span className="flex items-center gap-1">Conf <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('rating')}>
                  <span className="flex items-center gap-1">Rating <ArrowUpDown className="h-3 w-3" /></span>
                </th>
                <th className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(prop => (
                <tr key={prop.id} className="transition-colors hover:bg-white/[0.02]" style={{ borderBottom: '1px solid var(--border)' }}>
                  {/* Player */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'var(--bg-surface)' }}>
                        <img src={prop.photoUrl} alt={prop.playerName} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                      </div>
                      <div>
                        <p className="text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{prop.playerName}</p>
                        <p className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>{prop.team}</p>
                      </div>
                    </div>
                  </td>
                  {/* Prop */}
                  <td className="px-4 py-3">
                    <span className="badge text-[10px]" style={{ backgroundColor: 'var(--intel-blue-light)', color: 'var(--intel-blue)' }}>
                      {prop.propCategory}
                    </span>
                  </td>
                  {/* Line */}
                  <td className="px-4 py-3 text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {prop.line}
                  </td>
                  {/* Projection */}
                  <td className="px-4 py-3">
                    <span className="text-sm font-body font-bold" style={{ color: prop.projection > prop.line ? 'var(--emerald)' : 'var(--coral)' }}>
                      {prop.projection}
                    </span>
                  </td>
                  {/* Hit Rate */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
                        <div className="h-full rounded-full" style={{ width: `${prop.hitRate}%`, backgroundColor: prop.hitRate >= 60 ? 'var(--emerald)' : prop.hitRate >= 50 ? 'var(--gold)' : 'var(--coral)' }} />
                      </div>
                      <span className="text-xs font-body font-semibold" style={{ color: prop.hitRate >= 60 ? 'var(--emerald)' : prop.hitRate >= 50 ? 'var(--gold)' : 'var(--coral)' }}>
                        {prop.hitRate}%
                      </span>
                      <span className="text-[10px] font-body" style={{ color: 'var(--text-muted)' }}>({prop.hitFraction})</span>
                    </div>
                  </td>
                  {/* Best Odds */}
                  <td className="px-4 py-3">
                    <div>
                      <span className="text-sm font-body font-bold" style={{ color: prop.bestOdds > 0 ? 'var(--emerald)' : 'var(--text-primary)' }}>
                        {prop.bestOdds > 0 ? `+${prop.bestOdds}` : prop.bestOdds}
                      </span>
                      <p className="text-[9px] font-body" style={{ color: 'var(--text-muted)' }}>{prop.bestBook}</p>
                    </div>
                  </td>
                  {/* Edge */}
                  <td className="px-4 py-3">
                    <span className="text-sm font-body font-bold" style={{ color: prop.edge >= 7 ? 'var(--emerald)' : prop.edge >= 4 ? 'var(--gold)' : 'var(--text-secondary)' }}>
                      +{prop.edge.toFixed(1)}%
                    </span>
                  </td>
                  {/* Confidence */}
                  <td className="px-4 py-3">
                    <span className="text-sm font-body font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {prop.confidence}
                    </span>
                  </td>
                  {/* Rating */}
                  <td className="px-4 py-3">
                    <span
                      className="badge text-xs font-bold px-2 py-0.5"
                      style={{ backgroundColor: getRatingBgColor(prop.rating), color: getRatingColor(prop.rating) }}
                    >
                      {prop.rating}
                    </span>
                  </td>
                  {/* Add to parlay */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleAddToParlay(prop)}
                      disabled={addedIds.has(prop.id)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-body font-semibold transition-all"
                      style={{
                        backgroundColor: addedIds.has(prop.id) ? 'var(--emerald-light)' : 'var(--bg-surface)',
                        color: addedIds.has(prop.id) ? 'var(--emerald)' : 'var(--text-secondary)',
                        border: `1px solid ${addedIds.has(prop.id) ? 'var(--emerald)' : 'var(--border)'}`,
                        opacity: addedIds.has(prop.id) ? 0.7 : 1,
                      }}
                    >
                      <Plus className="h-3 w-3" />
                      {addedIds.has(prop.id) ? 'Added' : 'Parlay'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>No props found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
