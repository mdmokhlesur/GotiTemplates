'use client'
import { useState } from 'react'
import { Zap, Filter } from 'lucide-react'
import { edgeEngineRows, aiAnalystFeed } from '@/data/mockData'
import { EVDetectionTable } from './EVDetectionTable'
import { AIAnalystFeed } from './AIAnalystFeed'

const LEAGUES = ['All', 'NBA', 'NFL', 'NCAAB', 'MLB']

export function EdgeEngine() {
  const [league, setLeague] = useState('All')
  const [sortKey, setSortKey] = useState<'edge' | 'confidence' | 'modelProb'>('edge')
  const [sortAsc, setSortAsc] = useState(false)

  const sorted = [...edgeEngineRows].sort((a, b) => {
    if (sortKey === 'confidence') {
      const order: any = { High: 3, Medium: 2, Low: 1 }
      return sortAsc ? order[a.confidence] - order[b.confidence] : order[b.confidence] - order[a.confidence]
    }
    return sortAsc ? (a[sortKey] as number) - (b[sortKey] as number) : (b[sortKey] as number) - (a[sortKey] as number)
  })

  function toggleSort(key: any) {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--emerald), var(--emerald-hover))' }}>
              <Zap className="h-4 w-4 text-white" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Edge Engine
            </h1>
          </div>
          <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
            Positive expected value detection • Real-time market inefficiencies
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-3.5 w-3.5" style={{ color: 'var(--text-muted)' }} />
          {LEAGUES.map(lg => (
            <button key={lg} onClick={() => setLeague(lg)}
              className="px-3 py-1 rounded-full text-xs font-body font-semibold transition-all"
              style={{
                backgroundColor: league === lg ? 'var(--emerald)' : 'var(--bg-surface)',
                color: league === lg ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${league === lg ? 'var(--emerald)' : 'var(--border)'}`,
              }}>
              {lg}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'EV Opportunities', value: '8', sub: 'Above +3% edge', color: 'var(--emerald)' },
          { label: 'High Confidence', value: '3', sub: 'Model certainty ≥ 78%', color: 'var(--emerald)' },
          { label: 'Avg Edge', value: '+6.1%', sub: 'Across all opportunities', color: 'var(--gold)' },
          { label: 'Lines Tracked', value: '142', sub: 'Across 4 sportsbooks', color: 'var(--intel-blue)' },
        ].map(kpi => (
          <div key={kpi.label} className="card rounded-xl p-4">
            <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{kpi.label}</p>
            <p className="text-2xl font-bold font-body mt-1" style={{ color: kpi.color }}>{kpi.value}</p>
            <p className="text-[11px] font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <EVDetectionTable 
          data={sorted} 
          sortKey={sortKey} 
          sortAsc={sortAsc} 
          toggleSort={toggleSort} 
        />
        <AIAnalystFeed data={aiAnalystFeed} />
      </div>
    </div>
  )
}
