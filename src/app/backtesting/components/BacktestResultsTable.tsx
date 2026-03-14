'use client'

interface BacktestResultsTableProps {
  data: any[]
}

export function BacktestResultsTable({ data }: BacktestResultsTableProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        Per-Game Results
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-body">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              {['Game', 'P/L This Bet', 'Cumulative', 'Result'].map(h => (
                <th key={h} className="py-2 px-3 text-left font-semibold" style={{ color: 'var(--text-muted)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td className="py-2.5 px-3 font-semibold" style={{ color: 'var(--text-primary)' }}>{row.game}</td>
                <td className="py-2.5 px-3 font-bold" style={{ color: row.pl > 0 ? 'var(--emerald)' : 'var(--coral)' }}>
                  {row.pl > 0 ? '+' : ''}{row.pl}%
                </td>
                <td className="py-2.5 px-3 font-semibold" style={{ color: 'var(--text-secondary)' }}>+{row.cumulative}%</td>
                <td className="py-2.5 px-3">
                  <span className="badge text-[9px]" style={{
                    backgroundColor: row.pl > 0 ? 'var(--emerald-light)' : 'var(--coral-light)',
                    color: row.pl > 0 ? 'var(--emerald)' : 'var(--coral)',
                  }}>
                    {row.pl > 0 ? 'WIN' : 'LOSS'}
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
