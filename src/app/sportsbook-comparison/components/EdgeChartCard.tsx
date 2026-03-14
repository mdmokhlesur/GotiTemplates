'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface EdgeChartCardProps {
  data: any[]
}

export function EdgeChartCard({ data }: EdgeChartCardProps) {
  return (
    <div className="card rounded-xl p-5">
      <h3
        className="font-display text-sm font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        Model vs Market Edge
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
        >
          <XAxis
            dataKey="pt"
            tick={{
              fontSize: 10,
              fill: "var(--text-muted)",
              fontFamily: "Inter",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fontSize: 10,
              fill: "var(--text-muted)",
              fontFamily: "Inter",
            }}
            axisLine={false}
            tickLine={false}
            width={28}
          />
          <Tooltip
            cursor={false}
            labelStyle={{ display: 'none' }}
            contentStyle={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 11,
              fontFamily: "Inter",
            }}
          />
          <Bar
            dataKey="model"
            name="Model"
            fill="var(--emerald)"
            radius={[3, 3, 0, 0]}
            opacity={0.7}
            activeBar={{ opacity: 1 }}
          />
          <Bar
            dataKey="market"
            name="Market"
            fill="var(--intel-blue)"
            radius={[3, 3, 0, 0]}
            opacity={0.7}
            activeBar={{ opacity: 1 }}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-2 justify-center text-xs font-body">
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ backgroundColor: "var(--emerald)" }}
          />{" "}
          Model
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ backgroundColor: "var(--intel-blue)" }}
          />{" "}
          Market
        </span>
      </div>
    </div>
  )
}
