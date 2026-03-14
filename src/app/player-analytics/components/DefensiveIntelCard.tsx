'use client'
import { StatTooltip } from '@/components/charts/StatTooltip'
import { PremiumLock } from '@/components/charts/PremiumLock'

interface DefensiveIntelCardProps {
  data: any
}

export function DefensiveIntelCard({ data }: DefensiveIntelCardProps) {
  return (
    <div className="card rounded-xl p-5 relative overflow-hidden" style={{ minHeight: 220 }}>
      <h3 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Defensive Intelligence</h3>
      <div className="space-y-2 blur-sm pointer-events-none">
        {[
          { label: 'DEF vs Position', value: data.defVsPosition },
          { label: <StatTooltip stat="PITP"><span>Pts Allowed (PITP)</span></StatTooltip>, value: data.paintPointsAllowed },
          { label: 'Matchup Score', value: data.matchupScore },
          { label: 'Opponent DEF RTG', value: data.opponentDefRating },
          { label: 'Opponent', value: data.opponent },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b text-xs font-body" style={{ borderColor: 'var(--border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>{item.label}</span>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.value}</span>
          </div>
        ))}
      </div>
      <PremiumLock title="Defensive Intelligence" message="Opponent defensive matchup data and paint coverage analysis" />
    </div>
  )
}
