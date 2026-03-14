'use client'
import { useState } from 'react'
import { FlaskConical } from 'lucide-react'
import { backtestStrategies, backtestChartData } from '@/data/mockData'
import { StrategyBuilder } from './StrategyBuilder'
import { SavedStrategies } from './SavedStrategies'
import { BacktestKPIs } from './BacktestKPIs'
import { BacktestChartCard } from './BacktestChartCard'
import { BacktestResultsTable } from './BacktestResultsTable'

const STATS = ['Points', 'Rebounds', 'Assists', 'Threes', 'Steals', 'Blocks']
const CONDITIONS = ['Line drops ≥ 0.5', 'Sharp steam detected', 'EV ≥ 5%', 'B2B game', 'Public > 70%', 'Line moves against public']
const DIRECTIONS = ['Over', 'Under', 'Fade public']

export function Backtesting() {
  const [activeStrategy, setActiveStrategy] = useState(backtestStrategies[0])
  const [stat, setStat] = useState('Rebounds')
  const [condition, setCondition] = useState('Line drops ≥ 0.5')
  const [direction, setDirection] = useState('Over')
  const [ran, setRan] = useState(false)

  function loadStrategy(s: typeof backtestStrategies[0]) {
    setActiveStrategy(s)
    setStat(s.stat)
    setCondition(s.condition)
    setDirection(s.direction)
    setRan(true)
  }

  const results = activeStrategy

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--gold), #c17f24)' }}>
            <FlaskConical className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Strategy Backtesting Lab
          </h1>
        </div>
        <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
          Test betting strategies against historical data to find systematic edges
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-1 space-y-4">
          <StrategyBuilder
            stat={stat} setStat={setStat}
            condition={condition} setCondition={setCondition}
            direction={direction} setDirection={setDirection}
            onRun={() => setRan(true)}
            stats={STATS} conditions={CONDITIONS} directions={DIRECTIONS}
          />
          <SavedStrategies
            strategies={backtestStrategies}
            activeStrategy={activeStrategy}
            onSelect={loadStrategy}
          />
        </div>

        <div className="xl:col-span-3 space-y-4">
          <BacktestKPIs results={results} />
          <BacktestChartCard
            data={backtestChartData}
            strategyName={results.name}
            description={results.description}
          />
          <BacktestResultsTable data={backtestChartData} />
        </div>
      </div>
    </div>
  )
}
