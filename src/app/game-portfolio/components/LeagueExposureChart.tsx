'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface LeagueExposureChartProps {
  data: any[]
}

export function LeagueExposureChart({ data }: LeagueExposureChartProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>League Exposure</h2>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            outerRadius={70} 
            dataKey="value" 
            label={({ name, value }) => `${name} ${value}%`} 
            labelLine={false}
            fontSize={10}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11, fontFamily: 'Inter' }} formatter={(v: number) => [`${v}%`]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {data.map((l, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs font-body">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: l.color }} />
            <span style={{ color: 'var(--text-secondary)' }}>{l.name}</span>
            <span className="font-semibold ml-auto" style={{ color: 'var(--text-primary)' }}>{l.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
