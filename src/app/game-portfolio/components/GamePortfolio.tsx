'use client'
import { portfolioKPIs, portfolioChartData, leagueExposure, institutionalMetrics, riskyGames } from '@/data/mockData'
import { PortfolioKPIs } from './PortfolioKPIs'
import { CumulativePLChart } from './CumulativePLChart'
import { LeagueExposureChart } from './LeagueExposureChart'
import { MonthlyPLBars } from './MonthlyPLBars'
import { InstitutionalMetricsPanel } from './InstitutionalMetricsPanel'
import { HighRiskGamesPanel } from './HighRiskGamesPanel'

export function GamePortfolio() {
  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>Game Portfolio</h1>
        <p className="text-sm font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>Institutional-grade portfolio analytics & risk management</p>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider w-24" />

      <PortfolioKPIs kpis={portfolioKPIs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <CumulativePLChart data={portfolioChartData} />
        <LeagueExposureChart data={leagueExposure} />
      </div>

      <MonthlyPLBars data={portfolioChartData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InstitutionalMetricsPanel metrics={institutionalMetrics} />
        <HighRiskGamesPanel games={riskyGames} />
      </div>
    </div>
  )
}
