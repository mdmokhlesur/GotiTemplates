'use client'
import { PlayerCard } from '@/components/charts/PlayerCard'
import { OddsLineChart } from '@/components/charts/OddsLineChart'
import { RiskGauge } from '@/components/charts/RiskGauge'
import {
  propOfTheDay, playerOddsData, playerProps, marketEfficiencyData, oddsGames,
  morningBriefingCards, marketMomentumStrip,
} from '@/data/mockData'
import { formatOdds } from '@/lib/utils'
import { Activity, Clock } from 'lucide-react'
import { MorningBriefingStrip } from './MorningBriefingStrip'
import { MarketMomentumStrip } from './MarketMomentumStrip'
import { OddsMovementChartCard } from './OddsMovementChartCard'
import { SportsbookOddsTable } from './SportsbookOddsTable'

export function Dashboard() {
  const game = oddsGames[0]
  const h2hMarket = (book: any) => book.markets.find((m: any) => m.key === 'h2h')
  const spreadMarket = (book: any) => book.markets.find((m: any) => m.key === 'spreads')
  const totalMarket = (book: any) => book.markets.find((m: any) => m.key === 'totals')

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Dashboard
          </h1>
          <p className="text-sm font-body mt-1" style={{ color: 'var(--text-muted)' }}>
            Real-time betting intelligence — March 14, 2026
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold" style={{ backgroundColor: 'var(--emerald-light)', color: 'var(--emerald)' }}>
          <Activity className="h-3 w-3 animate-pulse" />
          LIVE
        </div>
      </div>

      <MorningBriefingStrip cards={morningBriefingCards} />
      <MarketMomentumStrip data={marketMomentumStrip} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PlayerCard
          name={propOfTheDay.playerName}
          team={propOfTheDay.team}
          jerseyNumber={propOfTheDay.jerseyNumber}
          photoUrl={propOfTheDay.photoUrl}
          bet={propOfTheDay.bet}
          projection={propOfTheDay.projection}
          stat={propOfTheDay.stat}
          odds={propOfTheDay.odds}
          confidence={propOfTheDay.confidence}
          hitRate={propOfTheDay.hitRate}
          hitFraction={propOfTheDay.hitFraction}
        />
        <OddsMovementChartCard data={playerOddsData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card rounded-xl p-5">
          <h2 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Betting Risk Engine</h2>
          <RiskGauge score={62} />
          <p className="text-center text-xs font-body mt-2" style={{ color: 'var(--text-muted)' }}>Based on today&apos;s market conditions</p>
        </div>

        <div className="card rounded-xl p-5">
          <h2 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Market Efficiency</h2>
          <OddsLineChart data={marketEfficiencyData} xKey="game" line1Key="optimal" line2Key="public" line1Label="Model" line2Label="Market" height={140} />
        </div>

        <div className="card rounded-xl p-5">
          <h2 className="font-display text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Top Player Props</h2>
          <div className="space-y-3">
            {playerProps.slice(0, 3).map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-body shrink-0" style={{ backgroundColor: 'var(--emerald-light)', color: 'var(--emerald)' }}>{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-body font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{p.player}</p>
                  <p className="text-[11px] font-body truncate" style={{ color: 'var(--text-muted)' }}>{p.prop}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-body font-bold" style={{ color: p.positive ? 'var(--emerald)' : 'var(--coral)' }}>{p.odds}</p>
                  <p className="text-[10px] font-body" style={{ color: p.hitRate >= 50 ? 'var(--emerald)' : 'var(--coral)' }}>{p.hitRate}% HR</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Tonight&apos;s Games</h2>
            <span className="badge text-white text-[9px]" style={{ backgroundColor: 'var(--coral)' }}>3 GAMES</span>
          </div>
          <div className="space-y-3">
            {oddsGames.map((g) => (
              <div key={g.id} className="rounded-lg px-3 py-2" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-body font-semibold" style={{ color: 'var(--text-primary)' }}>{g.away_team.split(' ').pop()} @ {g.home_team.split(' ').pop()}</p>
                  <span className="flex items-center gap-1 text-[10px] font-body" style={{ color: 'var(--text-muted)' }}><Clock className="h-2.5 w-2.5" />{new Date(g.commence_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</span>
                </div>
                {g.bookmakers[0] && h2hMarket(g.bookmakers[0]) && (
                  <div className="flex gap-3 mt-1">
                    {h2hMarket(g.bookmakers[0])!.outcomes.map((o: any) => (
                      <span key={o.name} className="text-[10px] font-body font-semibold" style={{ color: o.price > 0 ? 'var(--emerald)' : 'var(--coral)' }}>{o.name.split(' ').pop()} {formatOdds(o.price)}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SportsbookOddsTable 
        bookmakers={game.bookmakers} 
        h2hMarket={h2hMarket} 
        spreadMarket={spreadMarket} 
        totalMarket={totalMarket} 
      />
    </div>
  )
}
