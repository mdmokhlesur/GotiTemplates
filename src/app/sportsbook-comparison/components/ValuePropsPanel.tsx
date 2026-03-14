'use client'
import { Star, ArrowRight } from 'lucide-react'

interface ValuePropsPanelProps {
  props: any[]
}

export function ValuePropsPanel({ props }: ValuePropsPanelProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <h3
          className="font-display text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Best Value Props
        </h3>
        <Star className="h-4 w-4" style={{ color: "var(--gold)" }} />
      </div>
      <div className="space-y-3">
        {props.map((vp, i) => (
          <div
            key={i}
            className="rounded-lg p-3"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p
                  className="text-xs font-body font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {vp.player}
                </p>
                <p
                  className="text-[10px] font-body mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {vp.prop}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-body font-bold text-profit">
                  {vp.odds}
                </p>
                <p
                  className="text-[10px] font-body"
                  style={{ color: "var(--text-muted)" }}
                >
                  {vp.book}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span
                className="text-[10px] font-body px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "var(--emerald-light)",
                  color: "var(--emerald)",
                }}
              >
                Edge: {vp.edge}
              </span>
              <ArrowRight
                className="h-3 w-3"
                style={{ color: "var(--text-muted)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
