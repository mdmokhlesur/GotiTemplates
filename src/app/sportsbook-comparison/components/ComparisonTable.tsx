'use client'
import { formatOdds } from '@/lib/utils'

interface ComparisonTableProps {
  game: any
  selectedTab: 'moneyline' | 'spread' | 'total'
  bestML: number
}

export function ComparisonTable({ game, selectedTab, bestML }: ComparisonTableProps) {
  return (
    <div className="card rounded-xl p-5">
      <h2
        className="font-display text-base font-semibold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {game.away_team.split(" ").pop()} @ {game.home_team.split(" ").pop()}{" "}
        —{" "}
        {selectedTab === "moneyline"
          ? "Moneyline"
          : selectedTab === "spread"
            ? "Spread"
            : "Totals"}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-body">
          <thead>
            <tr style={{ borderBottom: "2px solid var(--border)" }}>
              <th
                className="text-left py-3 px-4 font-semibold"
                style={{ color: "var(--text-muted)" }}
              >
                Sportsbook
              </th>
              <th
                className="text-center py-3 px-4 font-semibold"
                style={{ color: "var(--text-muted)" }}
              >
                {game.home_team.split(" ").slice(-1)[0]}
              </th>
              <th
                className="text-center py-3 px-4 font-semibold"
                style={{ color: "var(--text-muted)" }}
              >
                {game.away_team.split(" ").slice(-1)[0]}
              </th>
              {selectedTab !== "moneyline" && (
                <th
                  className="text-center py-3 px-4 font-semibold"
                  style={{ color: "var(--text-muted)" }}
                >
                  Line
                </th>
              )}
              <th
                className="text-center py-3 px-4 font-semibold"
                style={{ color: "var(--text-muted)" }}
              >
                Best
              </th>
            </tr>
          </thead>
          <tbody>
            {game.bookmakers.map((bk: any) => {
              const mktKey =
                selectedTab === "moneyline"
                  ? "h2h"
                  : selectedTab === "spread"
                    ? "spreads"
                    : "totals";
              const mkt = bk.markets.find((m: any) => m.key === mktKey);
              const o0 = mkt?.outcomes[0];
              const o1 = mkt?.outcomes[1];
              const isBest0 =
                o0 && selectedTab === "moneyline" && o0.price === bestML;

              return (
                <tr
                  key={bk.key}
                  className="hover:opacity-80 transition-opacity"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ backgroundColor: "var(--emerald)" }}
                      >
                        {bk.title.charAt(0)}
                      </div>
                      <span
                        className="font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {bk.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className="font-bold text-base"
                      style={{
                        color:
                          o0 && o0.price > 0
                            ? "var(--emerald)"
                            : "var(--coral)",
                      }}
                    >
                      {o0
                        ? selectedTab === "spread"
                          ? `${(o0.point ?? 0) > 0 ? "+" : ""}${o0.point ?? ""} (${formatOdds(o0.price)})`
                          : selectedTab === "total"
                            ? `O${o0.point ?? ""} (${formatOdds(o0.price)})`
                            : formatOdds(o0.price)
                        : "—"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className="font-bold text-base"
                      style={{
                        color:
                          o1 && o1.price > 0
                            ? "var(--emerald)"
                            : "var(--coral)",
                      }}
                    >
                      {o1
                        ? selectedTab === "spread"
                          ? `${(o1.point ?? 0) > 0 ? "+" : ""}${o1.point ?? ""} (${formatOdds(o1.price)})`
                          : selectedTab === "total"
                            ? `U${o1.point ?? ""} (${formatOdds(o1.price)})`
                            : formatOdds(o1.price)
                        : "—"}
                    </span>
                  </td>
                  {selectedTab !== "moneyline" && (
                    <td
                      className="py-3 px-4 text-center text-xs font-body"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {o0?.point ?? "—"}
                    </td>
                  )}
                  <td className="py-3 px-4 text-center">
                    {isBest0 && (
                      <span
                        className="badge text-white text-[9px] px-2"
                        style={{ backgroundColor: "var(--gold)" }}
                      >
                        BEST
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
