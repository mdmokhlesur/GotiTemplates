"use client";
import { useState, useMemo } from "react";
import { Target, Search, ArrowUpDown, Plus } from "lucide-react";

interface PlayerStat {
  StatID: number;
  TeamID: number;
  PlayerID: number;
  SeasonType: number;
  Season: number;
  Name: string;
  Team: string;
  Position: string;
  Started: number;
  Games: number;
  FantasyPoints: number;
  Minutes: number;
  FieldGoalsMade: number;
  FieldGoalsAttempted: number;
  ThreePointersMade: number;
  ThreePointersAttempted: number;
  FreeThrowsMade: number;
  FreeThrowsAttempted: number;
  Rebounds: number;
  Assists: number;
  Steals: number;
  BlockedShots: number;
  Turnovers: number;
  Points: number;
  PlusMinus: number;
}

const STAT_COLUMNS = [
  { label: "Points", key: "Points" },
  { label: "Assists", key: "Assists" },
  { label: "Rebounds", key: "Rebounds" },
  { label: "Steals", key: "Steals" },
  { label: "Blocks", key: "BlockedShots" },
  { label: "Fantasy Pts", key: "FantasyPoints" },
  { label: "+/-", key: "PlusMinus" },
] as const;

export function PropExplorer({
  initialPlayers,
}: {
  initialPlayers: PlayerStat[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<keyof PlayerStat>("Points");
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = useMemo(() => {
    let data = [...(initialPlayers || [])];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data = data.filter(
        (p) =>
          p.Name.toLowerCase().includes(q) || p.Team.toLowerCase().includes(q),
      );
    }

    data.sort((a, b) => {
      const va = a[sortKey] ?? 0;
      const vb = b[sortKey] ?? 0;
      if (typeof va === "number" && typeof vb === "number") {
        return sortAsc ? va - vb : vb - va;
      }
      return sortAsc
        ? String(va).localeCompare(String(vb))
        : String(vb).localeCompare(String(va));
    });

    return data;
  }, [initialPlayers, searchQuery, sortKey, sortAsc]);

  function toggleSort(key: keyof PlayerStat) {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  }

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--intel-blue), #3B82F6)",
              }}
            >
              <Target className="h-4 w-4 text-white" />
            </div>
            <h1
              className="font-display text-2xl md:text-3xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Season Stats Explorer
            </h1>
          </div>
          <p
            className="text-sm font-body"
            style={{ color: "var(--text-muted)" }}
          >
            Viewing {initialPlayers.length} players for the 2026 Season
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg border"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
          >
            <Search
              className="h-3.5 w-3.5"
              style={{ color: "var(--text-muted)" }}
            />
            <input
              className="bg-transparent outline-none text-sm font-body w-40"
              style={{ color: "var(--text-primary)" }}
              placeholder="Search player or team..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          {
            label: "Total Players",
            value: filtered.length.toString(),
            color: "var(--intel-blue)",
          },
          {
            label: "Avg Points",
            value: filtered.length
              ? (
                  filtered.reduce((s, p) => s + p.Points, 0) / filtered.length
                ).toFixed(1)
              : "0",
            color: "var(--emerald)",
          },
          {
            label: "Avg Rebounds",
            value: filtered.length
              ? (
                  filtered.reduce((s, p) => s + p.Rebounds, 0) / filtered.length
                ).toFixed(1)
              : "0",
            color: "var(--gold)",
          },
          {
            label: "Avg Assists",
            value: filtered.length
              ? (
                  filtered.reduce((s, p) => s + p.Assists, 0) / filtered.length
                ).toFixed(1)
              : "0",
            color: "var(--intel-blue)",
          },
        ].map((kpi) => (
          <div key={kpi.label} className="card rounded-xl p-3">
            <p
              className="text-[11px] font-body"
              style={{ color: "var(--text-muted)" }}
            >
              {kpi.label}
            </p>
            <p
              className="text-xl font-bold font-body mt-0.5"
              style={{ color: kpi.color }}
            >
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Table */}
      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th
                  className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Player
                </th>
                <th
                  className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Pos
                </th>
                <th
                  className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  GP
                </th>
                <th
                  className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  MIN
                </th>
                {STAT_COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-[11px] font-body font-semibold uppercase tracking-wider cursor-pointer select-none"
                    style={{ color: "var(--text-muted)" }}
                    onClick={() => toggleSort(col.key as keyof PlayerStat)}
                  >
                    <span className="flex items-center gap-1">
                      {col.label} <ArrowUpDown className="h-3 w-3" />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((player) => (
                <tr
                  key={player.PlayerID}
                  className="transition-colors hover:bg-white/[0.02]"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {/* Player */}
                  <td className="px-4 py-3">
                    <div>
                      <p
                        className="text-sm font-body font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {player.Name}
                      </p>
                      <p
                        className="text-[10px] font-body"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {player.Team}
                      </p>
                    </div>
                  </td>
                  {/* Pos */}
                  <td
                    className="px-4 py-3 text-xs font-body"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {player.Position}
                  </td>
                  {/* GP */}
                  <td
                    className="px-4 py-3 text-sm font-body"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {player.Games}
                  </td>
                  {/* MIN */}
                  <td
                    className="px-4 py-3 text-sm font-body"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {player.Minutes}
                  </td>
                  {/* Stats */}
                  {STAT_COLUMNS.map((col) => (
                    <td
                      key={col.key}
                      className="px-4 py-3 text-sm font-body font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {player[col.key as keyof PlayerStat]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="p-12 text-center">
            <p
              className="text-sm font-body"
              style={{ color: "var(--text-muted)" }}
            >
              No players found matching your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
