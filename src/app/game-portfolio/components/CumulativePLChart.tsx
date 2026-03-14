'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

interface CumulativePLChartProps {
  data: any[]
}

export function CumulativePLChart({ data }: CumulativePLChartProps) {
  return (
    <div className="lg:col-span-2 card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Cumulative P&L — 2025-26 Season</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data} margin={{ top: 5, right: 8, bottom: 5, left: 0 }}>
          <defs>
            <linearGradient id="cumulGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--emerald)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="var(--emerald)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)', fontFamily: 'Inter' }} axisLine={false} tickLine={false} width={36} />
          <Tooltip 
            cursor={false}
            labelStyle={{ display: 'none' }}
            contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, fontFamily: 'Inter' }} 
            formatter={(v: number) => [`${v > 0 ? '+' : ''}${v.toFixed(1)}%`]} 
          />
          <Area type="monotone" dataKey="cumulative" stroke="var(--emerald)" strokeWidth={2.5} fill="url(#cumulGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
