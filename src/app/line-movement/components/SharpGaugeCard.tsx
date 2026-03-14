'use client'
import { RiskGauge } from '@/components/charts/RiskGauge'

interface SharpGaugeCardProps {
  game: any
}

export function SharpGaugeCard({ game }: SharpGaugeCardProps) {
  return (
    <div className="card rounded-xl p-5 flex flex-col items-center">
      <h3 className="font-display text-sm font-semibold mb-3 self-start" style={{ color: 'var(--text-primary)' }}>Sharp Money Index</h3>
      <RiskGauge score={73} label="SHARP ACTION" />
      <p className="text-xs font-body text-center mt-2" style={{ color: 'var(--text-muted)' }}>
        73% of tracked sharp accounts are betting {game.home_team.split(' ').pop()}
      </p>
    </div>
  )
}
