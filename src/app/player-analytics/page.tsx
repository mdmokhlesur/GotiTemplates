import { PlayerAnalytics } from './components/PlayerAnalytics'
import { redirect } from 'next/navigation'

type Props = {
  searchParams?: {
    season?: string
    sport?: string
    playerId?: string
    numberOfGames?: string
  }
}

export default async function PlayerAnalyticsPage({ searchParams }: Props) {


  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL
  const sport = searchParams?.sport || 'nba'
  const numberOfGames = searchParams?.numberOfGames || '12'

  // Fetch active players first to determine default if needed
  const allActivePlayer = await fetch(`${baseUrl}/players/active-players?sport=${sport}`)
  const allActivePlayerJson = await allActivePlayer.json()
  const activePlayersList = allActivePlayerJson.data || []

  const defaultPlayerId = activePlayersList.length > 0 ? activePlayersList[0].PlayerID.toString() : ''
  const playerId = searchParams?.playerId || defaultPlayerId
  const season = searchParams?.season || '2026'

  // If missing required params, redirect to apply defaults to URL
  if (!searchParams?.playerId || !searchParams?.season || !searchParams?.sport) {
    const newParams = new URLSearchParams()
    newParams.set('season', season)
    newParams.set('sport', sport)
    if (playerId) newParams.set('playerId', playerId)
    if (numberOfGames) newParams.set('numberOfGames', numberOfGames)
    redirect(`/player-analytics?${newParams.toString()}`)
  }

  const params = new URLSearchParams()
  params.set('season', season)
  params.set('sport', sport)
  if (playerId) params.set('playerId', playerId)
  if (numberOfGames) params.set('numberOfGames', numberOfGames)

  const GAME_LOG_URL = `${baseUrl}/players/game-logs?${params.toString()}`
  const SEASON_STATS_URL = `${baseUrl}/players/season-stats-by-player?${params.toString()}`

  const playerLog = await fetch(GAME_LOG_URL)
  const seasonStats = await fetch(SEASON_STATS_URL)

  const playerLogJson = await playerLog.json()
  const seasonStatsJson = await seasonStats.json()

  return <PlayerAnalytics
    playerLog={playerLogJson.data || []}
    seasonStats={seasonStatsJson.data || {}}
    allActivePlayer={activePlayersList}
  />
}

