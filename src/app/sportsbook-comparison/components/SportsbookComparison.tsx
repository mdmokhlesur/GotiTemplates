'use client'
import { useState } from 'react'
import {
  oddsGames,
  arbitrageOpportunities,
  valueProps,
  edgeChartData,
} from "@/data/mockData";
import { ComparisonTable } from './ComparisonTable'
import { ArbitragePanel } from './ArbitragePanel'
import { ValuePropsPanel } from './ValuePropsPanel'
import { EdgeChartCard } from './EdgeChartCard'

const books = ["FanDuel", "DraftKings", "BetMGM"];
type Tab = "moneyline" | "spread" | "total";

export function SportsbookComparison() {
  const [selectedTab, setSelectedTab] = useState<Tab>("moneyline");
  const [selectedGame, setSelectedGame] = useState(0);
  const game = oddsGames[selectedGame];

  const h2hPrices = books.map((b) => {
    const bk = game.bookmakers.find((bk) => bk.title === b);
    return bk?.markets.find((m: any) => m.key === "h2h")?.outcomes[0]?.price ?? null;
  });
  const bestML = Math.max(...h2hPrices.filter((p): p is number => p !== null));

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1
            className="font-display text-2xl md:text-3xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Sportsbook Comparison
          </h1>
          <p
            className="text-sm font-body mt-0.5"
            style={{ color: "var(--text-muted)" }}
          >
            Find the best odds and arbitrage opportunities across all books
          </p>
        </div>
      </div>

      {/* Game Selector */}
      <div className="flex gap-2 flex-wrap">
        {oddsGames.map((g, i) => (
          <button
            key={g.id}
            onClick={() => setSelectedGame(i)}
            className="px-4 py-2 rounded-lg text-sm font-body font-medium transition-all border"
            style={{
              backgroundColor:
                selectedGame === i ? "var(--emerald)" : "var(--bg-card)",
              color: selectedGame === i ? "white" : "var(--text-secondary)",
              borderColor:
                selectedGame === i ? "var(--emerald)" : "var(--border)",
            }}
          >
            {g.away_team.split(" ").pop()} @ {g.home_team.split(" ").pop()}
          </button>
        ))}
      </div>

      {/* Tab Bar */}
      <div
        className="flex gap-1 p-1 rounded-xl w-fit"
        style={{ backgroundColor: "var(--bg-surface)" }}
      >
        {(["moneyline", "spread", "total"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className="px-5 py-2 rounded-lg text-sm font-body font-medium capitalize transition-all"
            style={{
              backgroundColor:
                selectedTab === tab ? "var(--bg-card)" : "transparent",
              color:
                selectedTab === tab
                  ? "var(--text-primary)"
                  : "var(--text-muted)",
              boxShadow: selectedTab === tab ? "var(--card-shadow)" : "none",
            }}
          >
            {tab === "moneyline"
              ? "Moneyline"
              : tab === "spread"
                ? "Spread"
                : "Totals"}
          </button>
        ))}
      </div>

      <ComparisonTable 
        game={game} 
        selectedTab={selectedTab} 
        bestML={bestML} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ArbitragePanel opportunities={arbitrageOpportunities} />
        <ValuePropsPanel props={valueProps} />
        <EdgeChartCard data={edgeChartData} />
      </div>
    </div>
  )
}
