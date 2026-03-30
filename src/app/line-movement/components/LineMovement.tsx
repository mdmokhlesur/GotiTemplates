"use client";
import { useState } from "react";
import { lineMovementData, recentLineShifts, oddsGames } from "@/data/mockData";
import { LineMovementHeader } from "./LineMovementHeader";
import { LineMovementGameSelector } from "./LineMovementGameSelector";
import { PremiumPaywall } from "./PremiumPaywall";
import { MovementChartCard } from "./MovementChartCard";
import { RecentShiftsCard } from "./RecentShiftsCard";
import { SharpGaugeCard } from "./SharpGaugeCard";
import { MoneySplitCard } from "./MoneySplitCard";
import { SteamAlertsCard } from "./SteamAlertsCard";

const isPremium = false; // Toggle to false to unlock during dev

export function LineMovement() {
  const [selectedGame, setSelectedGame] = useState(0);
  const game = oddsGames[selectedGame];

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      <LineMovementHeader />

      <LineMovementGameSelector
        games={oddsGames}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      {/* Premium wrapper */}
      <div className="relative">
        {isPremium && <PremiumPaywall />}

        {/* Page Content (blurred behind paywall) */}
        <div
          className={isPremium ? "blur-sm pointer-events-none select-none" : ""}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Main Chart */}
            <div className="lg:col-span-2 space-y-4">
              <MovementChartCard game={game} data={lineMovementData} />
              <RecentShiftsCard shifts={recentLineShifts} />
            </div>

            {/* Right Panel */}
            <div className="space-y-4">
              <SharpGaugeCard game={game} />
              <MoneySplitCard game={game} />
              <SteamAlertsCard game={game} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
