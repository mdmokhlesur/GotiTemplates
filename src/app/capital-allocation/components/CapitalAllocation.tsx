'use client'
import { useState } from 'react'
import { PieChart as PieChartIcon } from 'lucide-react'
import { capitalAllocationSlices, capitalRiskMetrics, bankrollHistory } from '@/data/mockData'
import { AllocationDonut } from './AllocationDonut'
import { BankrollSimulator } from './BankrollSimulator'
import { PortfolioRiskCard } from './PortfolioRiskCard'
import { InstitutionalMetricsStrip } from './InstitutionalMetricsStrip'
import { BankrollGrowthChartCard } from './BankrollGrowthChartCard'

const SLICE_COLORS = ['#00E5A8', '#4A9EFF', '#FFC857', '#5A7499']

export function CapitalAllocation() {
  const [bankroll, setBankroll] = useState(5000)

  const allocations = capitalAllocationSlices.map((s, i) => ({
    ...s,
    amount: Math.round(bankroll * s.value / 100),
    hexColor: SLICE_COLORS[i],
  }))

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--intel-blue), #1a56cc)' }}>
            <PieChartIcon className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Capital Allocation
          </h1>
        </div>
        <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
          Portfolio intelligence engine — treat betting like capital management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AllocationDonut allocations={allocations} />
        <BankrollSimulator 
          bankroll={bankroll} 
          setBankroll={setBankroll} 
          allocations={allocations} 
        />
        <PortfolioRiskCard />
      </div>

      <InstitutionalMetricsStrip metrics={capitalRiskMetrics} />

      <BankrollGrowthChartCard data={bankrollHistory} />
    </div>
  )
}
