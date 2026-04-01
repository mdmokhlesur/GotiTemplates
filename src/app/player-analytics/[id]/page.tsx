import { redirect } from 'next/navigation'
import { PlayerDetailView } from '../components/PlayerDetailView'

type Props = {
    params: { id: string }
    searchParams?: {
        season?: string
        sport?: string
    }
}

export default async function PlayerDetailsPage({ params, searchParams }: Props) {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const sport = searchParams?.sport || 'nba'
    const season = searchParams?.season || '2026'
    const playerId = params.id

    // 1. Fetch data for this specific player
    const query = new URLSearchParams()
    query.set('season', season)
    query.set('sport', sport)
    query.set('playerId', playerId)

    const [playerLogRes, seasonStatsRes, playersRes] = await Promise.all([
        fetch(`${baseUrl}/players/game-logs?${query.toString()}`),
        fetch(`${baseUrl}/players/season-stats-by-player?${query.toString()}`),
        fetch(`${baseUrl}/players/active-players?sport=${sport}`)
    ])

    const playerLogJson = await playerLogRes.json()
    const seasonStatsJson = await seasonStatsRes.json()
    const playersJson = await playersRes.json()

    const playersList = playersJson.data || []
    const selectedPlayer = playersList.find((p: any) => p.PlayerID.toString() === playerId)

    if (!selectedPlayer) {
        redirect('/player-analytics')
    }

    return (
        <PlayerDetailView
            player={selectedPlayer}
            playerLog={playerLogJson.data || []}
            seasonStats={seasonStatsJson.data || {}}
            season={season}
            sport={sport}
        />
    )
}
