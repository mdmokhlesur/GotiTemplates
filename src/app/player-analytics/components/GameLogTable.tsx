'use client'
import { StatTooltip } from '@/components/charts/StatTooltip'

interface GameLogTableProps {
  data: any[]
}

export function GameLogTable({ data }: GameLogTableProps) {
  return (
    <div className="card rounded-xl p-5">
      <h3 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Game Log</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-body">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              {['Game', 'Date', 'PTS', 'AST', 'REB',
                <StatTooltip key="cl" stat="CL"><span>CL</span></StatTooltip>,
                <StatTooltip key="usg" stat="USG%"><span>USG%</span></StatTooltip>
              ].map((h, i) => (
                <th key={i} className="text-left py-2 px-2 font-semibold" style={{ color: 'var(--text-muted)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 8).map((row, i) => (
              <tr key={i} className="transition-colors hover:opacity-80" style={{ borderBottom: '1px solid var(--border)' }}>
                <td className="py-2 px-2 font-semibold" style={{ color: 'var(--text-primary)' }}>{row.game}</td>
                <td className="py-2 px-2" style={{ color: 'var(--text-muted)' }}>{row.date}</td>
                <td className="py-2 px-2 font-bold" style={{ color: row.pts > 29.5 ? 'var(--emerald)' : 'var(--coral)' }}>{row.pts}</td>
                <td className="py-2 px-2" style={{ color: 'var(--text-primary)' }}>{row.ast}</td>
                <td className="py-2 px-2" style={{ color: 'var(--text-primary)' }}>{row.reb}</td>
                <td className="py-2 px-2" style={{ color: 'var(--text-muted)' }}>{row.cl}</td>
                <td className="py-2 px-2" style={{ color: 'var(--text-muted)' }}>{row.usg}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
