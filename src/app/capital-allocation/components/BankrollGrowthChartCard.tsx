'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'

interface BankrollGrowthChartCardProps {
  data: any[]
}

export function BankrollGrowthChartCard({ data }: BankrollGrowthChartCardProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4" style={{ color: 'var(--emerald)' }} />
        <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          Bankroll Growth — Last 12 Weeks
        </h2>
        <span className="ml-auto badge" style={{ backgroundColor: 'var(--emerald-light)', color: 'var(--emerald)' }}>+63.1%</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="bankrollGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--emerald)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--emerald)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="week" tick={{ fontSize: 10, fill: 'var(--text-muted)', fontFamily: 'Inter' }} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)', fontFamily: 'Inter' }} tickFormatter={v => `$${v}`} />
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
            formatter={(v: number) => [`$${v.toLocaleString()}`, 'Bankroll']}
          />
          <Area type="monotone" dataKey="balance" name="Bankroll" stroke="var(--emerald)" strokeWidth={2.5} fill="url(#bankrollGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
