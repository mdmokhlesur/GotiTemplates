'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface AllocationDonutProps {
  allocations: any[]
}

export function AllocationDonut({ allocations }: AllocationDonutProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        Recommended Allocation
      </h2>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={allocations}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {allocations.map((entry, i) => (
              <Cell key={i} fill={entry.hexColor} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
            formatter={(v: number) => [`${v}%`, '']}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2 mt-2">
        {allocations.map((s, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.hexColor }} />
              <span className="text-xs font-body" style={{ color: 'var(--text-secondary)' }}>{s.name}</span>
            </div>
            <span className="text-xs font-bold font-body" style={{ color: 'var(--text-primary)' }}>{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
