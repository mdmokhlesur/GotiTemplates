'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

interface MonthlyPLBarsProps {
  data: any[]
}

export function MonthlyPLBars({ data }: MonthlyPLBarsProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Monthly Profit & Loss</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 8, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)', fontFamily: 'Inter' }} axisLine={false} tickLine={false} width={36} />
          <Tooltip 
            cursor={false}
            labelStyle={{ display: 'none' }}
            contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, fontFamily: 'Inter' }} 
          />
          <Bar dataKey="profit" name="Profit" fill="var(--emerald)" radius={[3, 3, 0, 0]} opacity={0.7} activeBar={{ opacity: 1 }} />
          <Bar dataKey="loss" name="Loss" fill="var(--coral)" radius={[3, 3, 0, 0]} opacity={0.7} activeBar={{ opacity: 1 }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
