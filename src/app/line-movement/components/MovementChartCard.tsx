'use client'
import { TrendingDown } from 'lucide-react'
import { OddsLineChart } from '@/components/charts/OddsLineChart'

interface MovementChartCardProps {
  game: any
  data: any[]
}

export function MovementChartCard({ game, data }: MovementChartCardProps) {
  return (
    <div className="card rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            {game.away_team.split(' ').pop()} @ {game.home_team.split(' ').pop()} — Spread Movement
          </h2>
          <p className="text-xs font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>
            Sharp line moved {data[0].sharp} → {data[data.length - 1].sharp}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ backgroundColor: 'var(--coral-light)', color: 'var(--coral)' }}>
          <TrendingDown className="h-3 w-3" /> Sharps Fading
        </div>
      </div>
      <OddsLineChart
        data={data}
        xKey="time"
        line1Key="sharp"
        line2Key="public"
        line1Label="Sharp Line"
        line2Label="Public Line"
        height={240}
        showLegend
      />
    </div>
  )
}
