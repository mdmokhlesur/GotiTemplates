'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { BarChart2 } from 'lucide-react'

interface BacktestChartCardProps {
  data: any[]
  strategyName: string
  description: string
}

export function BacktestChartCard({ data, strategyName, description }: BacktestChartCardProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-1">
        <BarChart2 className="h-4 w-4" style={{ color: 'var(--gold)' }} />
        <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
          Cumulative P/L — {strategyName}
        </h2>
      </div>
      <p className="text-xs font-body mb-4" style={{ color: 'var(--text-muted)' }}>{description}</p>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="cumGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--emerald)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--emerald)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="game" tick={{ fontSize: 9, fill: 'var(--text-muted)', fontFamily: 'Inter' }} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)', fontFamily: 'Inter' }} tickFormatter={v => `+${v}%`} />
          <Tooltip
            cursor={false}
            labelStyle={{ display: 'none' }}
            contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
            formatter={(v: number) => [`${v > 0 ? '+' : ''}${v}%`, 'Cumulative P/L']}
          />
          <ReferenceLine y={0} stroke="var(--border-strong)" strokeDasharray="4 4" />
          <Area type="monotone" dataKey="cumulative" name="Cumulative P/L" stroke="var(--emerald)" strokeWidth={2.5} fill="url(#cumGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
