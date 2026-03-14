'use client'
import { useState } from 'react'
import { Coffee, Moon, Sun } from 'lucide-react'
import { morningBriefingCards, morningInjuryAlerts, morningMarketSummary } from '@/data/mockData'
import { AIMarketSummary } from './AIMarketSummary'
import { OpportunityCard } from './OpportunityCard'
import { InjuryAlerts } from './InjuryAlerts'

export function MorningBriefing() {
  const [nightMode, setNightMode] = useState(false)
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div
      className="p-4 md:p-6 space-y-6 max-w-[1440px] mx-auto transition-all duration-500"
      style={{ filter: nightMode ? 'brightness(0.7) sepia(0.2)' : undefined }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--gold), #c17f24)' }}>
              <Coffee className="h-4 w-4 text-white" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Morning Market Briefing
            </h1>
          </div>
          <p className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>
            {dateStr} · {timeStr} ET
          </p>
        </div>
        <button
          onClick={() => setNightMode(!nightMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-semibold transition-all"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            color: nightMode ? 'var(--gold)' : 'var(--text-secondary)',
          }}
        >
          {nightMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {nightMode ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>

      <AIMarketSummary summary={morningMarketSummary} />

      <div>
        <h2 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Top Opportunities Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {morningBriefingCards.map(card => (
            <OpportunityCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <InjuryAlerts alerts={morningInjuryAlerts} />
    </div>
  )
}
