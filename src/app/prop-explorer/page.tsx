import { PropExplorer } from "./components/PropExplorer";

async function getSeasonStats() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3030";
  const res = await fetch(`${baseUrl}/players/season-stats?season=2026`,
    //   {
    //   next: { revalidate: 3600 },
    // }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function PropExplorerPage() {
  const players = await getSeasonStats();
  return <PropExplorer initialPlayers={players?.data || []} />;
}
