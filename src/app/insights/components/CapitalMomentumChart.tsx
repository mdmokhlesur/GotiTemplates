'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

interface CapitalMomentumChartProps {
  data: any[]
}

export function CapitalMomentumChart({ data }: CapitalMomentumChartProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Capital Momentum Visualization</h2>
          <p className="text-xs font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>Real-time flow of sharp, public, and expected-value capital throughout the day</p>
        </div>
        <div className="flex gap-4 text-xs font-body">
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: 'var(--emerald)' }} />Sharp</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: 'var(--coral)' }} />Public</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: 'var(--gold)' }} />EV</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 8, bottom: 5, left: 0 }}>
          <defs>
            <linearGradient id="sharpGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--emerald)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--emerald)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="publicGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--coral)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--coral)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="evGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--gold)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="var(--gold)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="hour" tick={{ fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)', fontFamily: 'Inter' }} axisLine={false} tickLine={false} width={30} />
          <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, fontFamily: 'Inter' }} />
          <Area type="monotone" dataKey="sharp" name="Sharp $" stroke="var(--emerald)" strokeWidth={2.5} fill="url(#sharpGrad)" />
          <Area type="monotone" dataKey="public" name="Public $" stroke="var(--coral)" strokeWidth={2} fill="url(#publicGrad)" />
          <Area type="monotone" dataKey="ev" name="EV Capital" stroke="var(--gold)" strokeWidth={2} fill="url(#evGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
