'use client'
import { Clock, Zap } from 'lucide-react'
import { volatilityHeatmap, evFeed, marketTimingSignals, capitalMomentumData } from '@/data/mockData'
import { VolatilityHeatmapPanel } from './VolatilityHeatmapPanel'
import { LiveEVFeedPanel } from './LiveEVFeedPanel'
import { CapitalMomentumChart } from './CapitalMomentumChart'
import { MarketTimingSignalsPanel } from './MarketTimingSignalsPanel'

export function AnalyticsInsights() {
  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>Analytics Insights</h1>
        <p className="text-sm font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>AI-powered market intelligence and betting signals</p>
      </div>
      <div className="gold-divider w-24" />

      {/* Morning Briefing */}
      <div className="card rounded-xl p-5" style={{ borderLeft: '4px solid var(--gold)' }}>
        <div className="flex items-start gap-3">
          <Zap className="h-5 w-5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
          <div>
            <h2 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>Morning Briefing — March 12, 2026</h2>
            <p className="text-sm font-body mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Sharp money is heavily targeting the <strong style={{ color: 'var(--text-primary)' }}>Lakers spread</strong> tonight, 
              with the line moving from -3.5 to -5.25 since open. The GSW-DEN game is near a pick&apos;em after 
              a late <strong style={{ color: 'var(--text-primary)' }}>Curry injury update</strong>. 
              Top EV props today: <strong style={{ color: 'var(--emerald)' }}>Curry Over 4.5 3PM (+8.2% EV)</strong> 
              and <strong style={{ color: 'var(--emerald)' }}>Tatum Over 27.5 PTS (+5.1% EV)</strong>.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Clock className="h-3.5 w-3.5" style={{ color: 'var(--text-muted)' }} />
              <span className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>Updated 6:00 AM ET</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <VolatilityHeatmapPanel data={volatilityHeatmap} />
        <LiveEVFeedPanel data={evFeed} />
      </div>

      <CapitalMomentumChart data={capitalMomentumData} />

      <MarketTimingSignalsPanel signals={marketTimingSignals} />
    </div>
  )
}
