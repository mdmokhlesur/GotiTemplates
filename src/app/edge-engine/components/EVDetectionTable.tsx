'use client'
import { CheckCircle, AlertTriangle, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react'

interface EVDetectionTableProps {
  data: any[]
  sortKey: string
  sortAsc: boolean
  toggleSort: (key: any) => void
}

const confidenceColor: any = {
  High: 'var(--emerald)',
  Medium: 'var(--gold)',
  Low: 'var(--coral)',
}

const confidenceBg: any = {
  High: 'var(--emerald-light)',
  Medium: 'var(--gold-light)',
  Low: 'var(--coral-light)',
}

export function EVDetectionTable({ data, sortKey, sortAsc, toggleSort }: EVDetectionTableProps) {
  const SortIcon = ({ k }: { k: string }) =>
    sortKey === k ? (sortAsc ? <ChevronUp className="h-3 w-3 inline ml-0.5" /> : <ChevronDown className="h-3 w-3 inline ml-0.5" />) : null

  return (
    <div className="xl:col-span-2 card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4" style={{ color: 'var(--emerald)' }} />
        <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          EV Detection Table
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-body">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th className="text-left py-2.5 px-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Player / Prop</th>
              <th className="text-center py-2.5 px-3 font-semibold cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('modelProb')}>
                Model% <SortIcon k="modelProb" />
              </th>
              <th className="text-center py-2.5 px-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Book%</th>
              <th className="text-center py-2.5 px-3 font-semibold cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('edge')}>
                Edge <SortIcon k="edge" />
              </th>
              <th className="text-left py-2.5 px-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Bettable Line</th>
              <th className="text-center py-2.5 px-3 font-semibold" style={{ color: 'var(--text-muted)' }}>Odds / Book</th>
              <th className="text-center py-2.5 px-3 font-semibold cursor-pointer select-none" style={{ color: 'var(--text-muted)' }} onClick={() => toggleSort('confidence')}>
                Signal <SortIcon k="confidence" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="transition-colors hover:opacity-90" style={{ borderBottom: '1px solid var(--border)', backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <td className="py-3 px-3">
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{row.player}</p>
                  <p style={{ color: 'var(--text-muted)' }}>{row.prop}</p>
                </td>
                <td className="py-3 px-3 text-center font-bold" style={{ color: 'var(--emerald)' }}>{row.modelProb}%</td>
                <td className="py-3 px-3 text-center" style={{ color: 'var(--text-secondary)' }}>{row.bookProb}%</td>
                <td className="py-3 px-3 text-center">
                  <span className="font-bold px-2 py-0.5 rounded-full text-[11px]" style={{ backgroundColor: 'var(--emerald-light)', color: 'var(--emerald)' }}>
                    +{row.edge}%
                  </span>
                </td>
                <td className="py-3 px-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--emerald)' }}>
                      <CheckCircle className="h-3 w-3" /> Bet up to {row.bettableUpTo}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--coral)' }}>
                      <AlertTriangle className="h-3 w-3" /> Avoid after {row.avoidAfter}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3 text-center">
                  <p className="font-bold" style={{ color: row.odds.startsWith('+') ? 'var(--emerald)' : 'var(--coral)' }}>{row.odds}</p>
                  <p style={{ color: 'var(--text-muted)' }}>{row.book}</p>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="badge font-bold" style={{
                    backgroundColor: confidenceBg[row.confidence],
                    color: confidenceColor[row.confidence],
                  }}>
                    {row.confidence}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
