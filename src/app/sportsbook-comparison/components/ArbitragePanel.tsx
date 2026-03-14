'use client'

interface ArbitragePanelProps {
  opportunities: any[]
}

export function ArbitragePanel({ opportunities }: ArbitragePanelProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <h3
          className="font-display text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Arbitrage Opportunities
        </h3>
        <span
          className="badge text-white text-[9px]"
          style={{ backgroundColor: "var(--coral)" }}
        >
          {opportunities.length} FOUND
        </span>
      </div>
      <div className="space-y-3">
        {opportunities.map((arb, i) => (
          <div
            key={i}
            className="rounded-lg p-3"
            style={{
              backgroundColor: "var(--emerald-light)",
              border: "1px solid var(--emerald)",
            }}
          >
            <div className="flex justify-between items-center">
              <p
                className="text-xs font-body font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {arb.matchup}
              </p>
              <span className="text-sm font-body font-bold text-profit">
                {arb.arb}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span
                className="text-[10px] font-body"
                style={{ color: "var(--text-muted)" }}
              >
                {arb.book}
              </span>
              <span
                className="text-[10px] font-body"
                style={{ color: "var(--text-muted)" }}
              >
                {arb.line}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
