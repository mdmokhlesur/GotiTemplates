import type { OddsGame, Player, GameLog, PlayerProp, KPI, AdminUser, LinePoint } from '@/types'

// ============================================================
// ODDS API MOCK DATA — mirrors exact API response structure
// Source: Sportsdata.io NBA Pre-Game Odds API
// When backend is ready, replace these with API calls
// ============================================================

export const oddsGames: OddsGame[] = [
  {
    id: 'lal_bos_20260312',
    sport_key: 'basketball_nba',
    sport_title: 'NBA',
    commence_time: '2026-03-12T23:30:00Z',
    home_team: 'Boston Celtics',
    away_team: 'Los Angeles Lakers',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2026-03-12T18:00:00Z',
        markets: [
          { key: 'h2h', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Boston Celtics', price: -145 }, { name: 'Los Angeles Lakers', price: +125 }] },
          { key: 'spreads', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Boston Celtics', price: -110, point: -3.5 }, { name: 'Los Angeles Lakers', price: -110, point: 3.5 }] },
          { key: 'totals', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Over', price: -110, point: 224.5 }, { name: 'Under', price: -110, point: 224.5 }] },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2026-03-12T18:00:00Z',
        markets: [
          { key: 'h2h', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Boston Celtics', price: -142 }, { name: 'Los Angeles Lakers', price: +122 }] },
          { key: 'spreads', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Boston Celtics', price: -108, point: -3.5 }, { name: 'Los Angeles Lakers', price: -112, point: 3.5 }] },
          { key: 'totals', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Over', price: -110, point: 225.0 }, { name: 'Under', price: -110, point: 225.0 }] },
        ],
      },
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2026-03-12T18:00:00Z',
        markets: [
          { key: 'h2h', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Boston Celtics', price: -148 }, { name: 'Los Angeles Lakers', price: +120 }] },
          { key: 'spreads', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Boston Celtics', price: -115, point: -3.0 }, { name: 'Los Angeles Lakers', price: -105, point: 3.0 }] },
          { key: 'totals', last_update: '2026-03-12T18:00:00Z', outcomes: [{ name: 'Over', price: -108, point: 224.5 }, { name: 'Under', price: -112, point: 224.5 }] },
        ],
      },
    ],
  },
  {
    id: 'gsw_den_20260312',
    sport_key: 'basketball_nba',
    sport_title: 'NBA',
    commence_time: '2026-03-12T22:00:00Z',
    home_team: 'Denver Nuggets',
    away_team: 'Golden State Warriors',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2026-03-12T17:30:00Z',
        markets: [
          { key: 'h2h', last_update: '2026-03-12T17:30:00Z', outcomes: [{ name: 'Denver Nuggets', price: -105 }, { name: 'Golden State Warriors', price: -115 }] },
          { key: 'spreads', last_update: '2026-03-12T17:30:00Z', outcomes: [{ name: 'Denver Nuggets', price: -110, point: -1.5 }, { name: 'Golden State Warriors', price: -110, point: 1.5 }] },
          { key: 'totals', last_update: '2026-03-12T17:30:00Z', outcomes: [{ name: 'Over', price: -110, point: 231.0 }, { name: 'Under', price: -110, point: 231.0 }] },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2026-03-12T17:30:00Z',
        markets: [
          { key: 'h2h', last_update: '2026-03-12T17:30:00Z', outcomes: [{ name: 'Denver Nuggets', price: -110 }, { name: 'Golden State Warriors', price: -110 }] },
          { key: 'spreads', last_update: '2026-03-12T17:30:00Z', outcomes: [{ name: 'Denver Nuggets', price: -110, point: -2.0 }, { name: 'Golden State Warriors', price: -110, point: 2.0 }] },
          { key: 'totals', last_update: '2026-03-12T17:30:00Z', outcomes: [{ name: 'Over', price: -108, point: 230.5 }, { name: 'Under', price: -112, point: 230.5 }] },
        ],
      },
    ],
  },
  {
    id: 'mia_phx_20260313',
    sport_key: 'basketball_nba',
    sport_title: 'NBA',
    commence_time: '2026-03-13T00:00:00Z',
    home_team: 'Phoenix Suns',
    away_team: 'Miami Heat',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2026-03-12T16:00:00Z',
        markets: [
          { key: 'h2h', last_update: '2026-03-12T16:00:00Z', outcomes: [{ name: 'Phoenix Suns', price: -130 }, { name: 'Miami Heat', price: +110 }] },
          { key: 'spreads', last_update: '2026-03-12T16:00:00Z', outcomes: [{ name: 'Phoenix Suns', price: -110, point: -2.5 }, { name: 'Miami Heat', price: -110, point: 2.5 }] },
          { key: 'totals', last_update: '2026-03-12T16:00:00Z', outcomes: [{ name: 'Over', price: -112, point: 218.5 }, { name: 'Under', price: -108, point: 218.5 }] },
        ],
      },
    ],
  },
]

// ============================================================
// PROP OF THE DAY
// ============================================================
export const propOfTheDay = {
  playerName: 'LeBron James',
  team: 'LAL',
  jerseyNumber: 23,
  position: 'SF',
  photoUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
  bet: 'Over 29.5 Points',
  projection: 32.1,
  stat: 'PTS',
  odds: '-120',
  confidence: 78,
  hitRate: 70,
  hitFraction: '14/20',
}

// ============================================================
// PLAYERS
// Source: Sportsdata.io NBA Players API
// ============================================================
export const players: Player[] = [
  { id: 1, name: 'LeBron James', team: 'LAL', position: 'SF', number: 23, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png', status: 'Active' },
  { id: 2, name: 'Stephen Curry', team: 'GSW', position: 'PG', number: 30, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png', status: 'Active' },
  { id: 3, name: 'Nikola Jokic', team: 'DEN', position: 'C', number: 15, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png', status: 'Active' },
  { id: 4, name: 'Giannis Antetokounmpo', team: 'MIL', position: 'PF', number: 34, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png', status: 'Active' },
  { id: 5, name: 'Luka Doncic', team: 'DAL', position: 'PG', number: 77, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png', status: 'Questionable' },
  { id: 6, name: 'Jayson Tatum', team: 'BOS', position: 'SF', number: 0, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png', status: 'Active' },
  { id: 7, name: 'Kevin Durant', team: 'PHX', position: 'SF', number: 35, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png', status: 'Active' },
  { id: 8, name: 'Devin Booker', team: 'PHX', position: 'SG', number: 1, photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png', status: 'Active' },
]

// ============================================================
// GAME LOG
// Source: Sportsdata.io NBA Player Game Logs API
// ============================================================
export const gameLog: GameLog[] = [
  { game: 'vs BOS', date: 'Mar 10', pts: 32, ast: 9, reb: 7, threes: 3, min: 36, usg: 32.4, fga: 22, cl: 29.5 },
  { game: '@ MIA', date: 'Mar 8', pts: 28, ast: 11, reb: 8, threes: 2, min: 38, usg: 30.1, fga: 20, cl: 28.5 },
  { game: 'vs DEN', date: 'Mar 6', pts: 35, ast: 7, reb: 6, threes: 4, min: 37, usg: 33.8, fga: 24, cl: 30.5 },
  { game: '@ PHX', date: 'Mar 4', pts: 25, ast: 8, reb: 9, threes: 1, min: 34, usg: 28.9, fga: 19, cl: 29.5 },
  { game: 'vs GSW', date: 'Mar 2', pts: 30, ast: 10, reb: 5, threes: 3, min: 36, usg: 31.5, fga: 21, cl: 29.5 },
  { game: '@ SAC', date: 'Feb 28', pts: 27, ast: 6, reb: 8, threes: 2, min: 35, usg: 29.7, fga: 20, cl: 28.5 },
  { game: 'vs MIN', date: 'Feb 26', pts: 33, ast: 9, reb: 7, threes: 4, min: 37, usg: 33.1, fga: 23, cl: 30.5 },
  { game: '@ DAL', date: 'Feb 24', pts: 22, ast: 12, reb: 6, threes: 1, min: 33, usg: 27.4, fga: 18, cl: 28.5 },
  { game: 'vs CLE', date: 'Feb 22', pts: 38, ast: 8, reb: 10, threes: 5, min: 39, usg: 35.2, fga: 26, cl: 31.5 },
  { game: '@ CHI', date: 'Feb 20', pts: 29, ast: 7, reb: 8, threes: 3, min: 36, usg: 30.8, fga: 21, cl: 29.5 },
  { game: 'vs NYK', date: 'Feb 18', pts: 24, ast: 6, reb: 7, threes: 2, min: 34, usg: 28.2, fga: 19, cl: 29.5 },
  { game: '@ OKC', date: 'Feb 16', pts: 31, ast: 9, reb: 6, threes: 3, min: 37, usg: 32.0, fga: 22, cl: 30.5 },
]

export const hitRateBarData = gameLog.map((g) => ({
  game: g.game,
  value: g.pts,
  hit: g.pts > 29.5,
  cl: g.cl,
}))

// ============================================================
// PLAYER PROPS
// Source: Sportsdata.io NBA Player Prop Projections API
// ============================================================
export const playerProps: PlayerProp[] = [
  { player: 'LeBron James', team: 'LAL', prop: 'Over 29.5 Points', line: 29.5, stat: 'PTS', odds: '-120', projection: 32.1, confidence: 78, hitRate: 70, hitFraction: '14/20', positive: true },
  { player: 'Stephen Curry', prop: 'Over 4.5 Threes', team: 'GSW', line: 4.5, stat: '3PM', odds: '+125', projection: 5.2, confidence: 72, hitRate: 65, hitFraction: '13/20', positive: true },
  { player: 'Nikola Jokic', prop: 'Over 11.5 Rebounds', team: 'DEN', line: 11.5, stat: 'REB', odds: '-105', projection: 12.8, confidence: 68, hitRate: 60, hitFraction: '12/20', positive: true },
  { player: 'Jayson Tatum', prop: 'Over 27.5 Points', team: 'BOS', line: 27.5, stat: 'PTS', odds: '-110', projection: 29.4, confidence: 65, hitRate: 58, hitFraction: '11/19', positive: true },
  { player: 'Giannis Antetokounmpo', prop: 'Over 8.5 Assists', team: 'MIL', line: 8.5, stat: 'AST', odds: '+110', projection: 7.8, confidence: 42, hitRate: 40, hitFraction: '8/20', positive: false },
]

// ============================================================
// CHARTS DATA
// ============================================================
export const playerOddsData = [
  { day: 'Mon', optimal: -110, public: -115 },
  { day: 'Tue', optimal: -112, public: -118 },
  { day: 'Wed', optimal: -108, public: -120 },
  { day: 'Thu', optimal: -115, public: -125 },
  { day: 'Fri', optimal: -110, public: -122 },
  { day: 'Sat', optimal: -105, public: -118 },
]

export const marketEfficiencyData = [
  { game: 'G1', optimal: 72, public: 68 },
  { game: 'G2', optimal: 75, public: 62 },
  { game: 'G3', optimal: 78, public: 70 },
  { game: 'G4', optimal: 74, public: 58 },
  { game: 'G5', optimal: 80, public: 65 },
  { game: 'G6', optimal: 82, public: 60 },
]

// ============================================================
// LINE MOVEMENT
// ============================================================
export const lineMovementData: LinePoint[] = [
  { time: '10AM', sharp: -3.5, public: -3.5 },
  { time: '11AM', sharp: -3.8, public: -3.5 },
  { time: '12PM', sharp: -4.0, public: -3.7 },
  { time: '1PM', sharp: -4.2, public: -3.8 },
  { time: '2PM', sharp: -4.5, public: -4.0 },
  { time: '3PM', sharp: -4.8, public: -4.2 },
  { time: '4PM', sharp: -5.0, public: -4.5 },
  { time: 'NOW', sharp: -5.25, public: -4.8 },
]

export const recentLineShifts = [
  { time: '3:45 PM', odds: '-5.25', action: 'Shifted Down', type: 'shift' as const },
  { time: '2:30 PM', odds: '-4.80', action: 'Sharp Money', type: 'sharp' as const },
  { time: '1:15 PM', odds: '-4.50', action: 'Public Surge', type: 'public' as const },
  { time: '12:00 PM', odds: '-4.20', action: 'Shifted Down', type: 'shift' as const },
  { time: '11:30 AM', odds: '-3.80', action: 'Sharp Money', type: 'sharp' as const },
]

// ============================================================
// SPORTSBOOK COMPARISON
// ============================================================
export const sportsbookMatchups = [
  {
    game: 'LAL vs BOS',
    spreads: ['-3.5 (-110)', '-3.5 (-108)', '-3.0 (-115)'],
    moneylines: ['-145', '-142', '-148'],
    totals: ['224.5 (-110)', '225.0 (-110)', '224.5 (-108)'],
    bestSpread: 1,
    bestML: 1,
    bestTotal: 2,
  },
  {
    game: 'GSW vs DEN',
    spreads: ['-1.5 (-112)', '-2.0 (-110)', '-1.5 (-110)'],
    moneylines: ['-108', '-110', '-105'],
    totals: ['231.0 (-110)', '230.5 (-108)', '231.0 (-110)'],
    bestSpread: 2,
    bestML: 2,
    bestTotal: 1,
  },
]

export const arbitrageOpportunities = [
  { matchup: 'Lakers Spread', book: 'BetMGM', line: '+6.5 / -8.5', arb: '+2.61%' },
  { matchup: 'GSW ML', book: 'FanDuel', line: '-105 / +115', arb: '+1.82%' },
  { matchup: 'Nuggets Total', book: 'DraftKings', line: 'O230.5 / U232', arb: '+1.45%' },
]

export const valueProps = [
  { player: 'LeBron James', prop: 'Over 29.5 PTS', odds: '+105', edge: '+4.2%', book: 'FanDuel' },
  { player: 'Stephen Curry', prop: 'Over 4.5 3PM', odds: '+130', edge: '+3.8%', book: 'DraftKings' },
  { player: 'Nikola Jokic', prop: 'Over 11.5 REB', odds: '-105', edge: '+2.9%', book: 'BetMGM' },
]

export const edgeChartData = [
  { pt: '1', model: 3.2, market: 1.8 },
  { pt: '2', model: 4.5, market: 2.1 },
  { pt: '3', model: 3.8, market: 3.0 },
  { pt: '4', model: 5.1, market: 2.5 },
  { pt: '5', model: 4.2, market: 3.5 },
  { pt: '6', model: 6.0, market: 2.8 },
]

// ============================================================
// GAME PORTFOLIO
// ============================================================
export const portfolioKPIs: KPI[] = [
  { label: 'Return on Investment', value: '+18.5%', change: '+3.2% vs last month', positive: true, key: 'ROI' },
  { label: 'Winning Percentage', value: '62.3%', change: '+1.8% vs last month', positive: true, key: 'Win Rate' },
  { label: 'Average Edge', value: '+3.8%', change: '+0.4% vs last month', positive: true, key: 'Avg Edge' },
  { label: 'Max Drawdown', value: '-12.4%', change: '+2.1% improved', positive: false, key: 'Drawdown' },
]

export const portfolioChartData = [
  { month: 'Oct', profit: 5.2, loss: -3.1, cumulative: 5.2 },
  { month: 'Nov', profit: 8.4, loss: -4.8, cumulative: 13.6 },
  { month: 'Dec', profit: 12.1, loss: -5.2, cumulative: 25.7 },
  { month: 'Jan', profit: 15.3, loss: -7.8, cumulative: 41.0 },
  { month: 'Feb', profit: 11.8, loss: -6.1, cumulative: 52.8 },
  { month: 'Mar', profit: 18.5, loss: -4.9, cumulative: 71.3 },
]

export const leagueExposure = [
  { name: 'NBA', value: 45, color: '#7DA8B5' },
  { name: 'NFL', value: 30, color: '#C44B3A' },
  { name: 'NCAAB', value: 15, color: '#B89A5B' },
  { name: 'MLB', value: 10, color: '#1E4D3A' },
]

export const institutionalMetrics = [
  { label: 'Sharpe Ratio', value: '1.82', positive: true, desc: 'Risk-adjusted return' },
  { label: 'Volatility Score', value: '14.3%', positive: false, desc: 'Portfolio volatility' },
  { label: 'Drawdown Probability', value: '23%', positive: false, desc: '30-day outlook' },
  { label: 'Alpha Capture', value: '+6.4%', positive: true, desc: 'vs market benchmark' },
]

export const riskyGames = [
  { date: 'Mar 12', matchup: 'Lakers vs Warriors', risk: 'High' as const, riskScore: 82 },
  { date: 'Mar 12', matchup: 'Bills vs Chiefs', risk: 'High' as const, riskScore: 76 },
  { date: 'Mar 13', matchup: 'Celtics vs Heat', risk: 'Elevated' as const, riskScore: 65 },
  { date: 'Mar 14', matchup: 'Nuggets vs Bucks', risk: 'Elevated' as const, riskScore: 58 },
]

// ============================================================
// ANALYTICS INSIGHTS
// ============================================================
export const volatilityHeatmap = [
  { game: 'LAL vs BOS', volatility: 'high' as const, pct: 87, change: '+12%' },
  { game: 'GSW vs DEN', volatility: 'moderate' as const, pct: 54, change: '+3%' },
  { game: 'MIA vs PHX', volatility: 'low' as const, pct: 22, change: '-8%' },
  { game: 'MIL vs CLE', volatility: 'moderate' as const, pct: 48, change: '+1%' },
  { game: 'DAL vs MIN', volatility: 'high' as const, pct: 76, change: '+18%' },
  { game: 'BKN vs NYK', volatility: 'low' as const, pct: 18, change: '-4%' },
]

export const evFeed = [
  { player: 'Stephen Curry', team: 'GSW', prop: 'Over 4.5 3PM', ev: '+8.2%', book: 'DraftKings', time: '2 min ago', odds: '+130' },
  { player: 'Jayson Tatum', team: 'BOS', prop: 'Over 27.5 PTS', ev: '+5.1%', book: 'FanDuel', time: '5 min ago', odds: '-108' },
  { player: 'Nikola Jokic', team: 'DEN', prop: 'Over 11.5 REB', ev: '+4.7%', book: 'BetMGM', time: '8 min ago', odds: '-105' },
  { player: 'Luka Doncic', team: 'DAL', prop: 'Over 8.5 AST', ev: '+3.9%', book: 'DraftKings', time: '12 min ago', odds: '+115' },
  { player: 'Kevin Durant', team: 'PHX', prop: 'Over 25.5 PTS', ev: '+3.2%', book: 'FanDuel', time: '18 min ago', odds: '-112' },
]

export const marketTimingSignals = [
  { type: 'Early Market Entry', icon: 'clock', color: 'emerald', desc: 'LAL vs BOS spread available at -3.0, expected to move to -4.5 by tip-off.', games: ['LAL vs BOS'] },
  { type: 'Late Market Value', icon: 'trending', color: 'intel', desc: 'GSW ML likely to drift positive if Curry is ruled out. Monitor injury report.', games: ['GSW vs DEN'] },
  { type: 'Public Overreaction', icon: 'alert', color: 'coral', desc: 'Heavy public action on MIA after 3-game win streak. Sharp money fading.', games: ['MIA vs PHX'] },
]

export const capitalMomentumData = [
  { hour: '6AM', sharp: 12, public: 45, ev: 8 },
  { hour: '8AM', sharp: 28, public: 52, ev: 14 },
  { hour: '10AM', sharp: 45, public: 58, ev: 22 },
  { hour: '12PM', sharp: 62, public: 70, ev: 35 },
  { hour: '2PM', sharp: 78, public: 75, ev: 48 },
  { hour: '4PM', sharp: 88, public: 82, ev: 62 },
  { hour: '6PM', sharp: 92, public: 88, ev: 75 },
]

// ============================================================
// ADMIN
// ============================================================
export const adminUsers: AdminUser[] = [
  { id: 1, name: 'John Smith', email: 'john@example.com', plan: 'Pro', status: 'Active', joined: '2025-11-15', revenue: '$240' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', plan: 'Free', status: 'Active', joined: '2026-01-20', revenue: '$0' },
  { id: 3, name: 'Mike Williams', email: 'mike@example.com', plan: 'Institutional', status: 'Active', joined: '2025-09-05', revenue: 'Custom' },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', plan: 'Pro', status: 'Suspended', joined: '2025-12-10', revenue: '$200' },
  { id: 5, name: 'David Lee', email: 'david@example.com', plan: 'Free', status: 'Active', joined: '2026-02-01', revenue: '$0' },
  { id: 6, name: 'Jessica Martinez', email: 'jess@example.com', plan: 'Pro', status: 'Active', joined: '2026-01-08', revenue: '$240' },
  { id: 7, name: 'Robert Taylor', email: 'rob@example.com', plan: 'Pro', status: 'Active', joined: '2025-10-22', revenue: '$480' },
]

export const adminStats = [
  { label: 'Total Users', value: '12,483', change: '+12%', positive: true },
  { label: 'Active Subscriptions', value: '3,241', change: '+8%', positive: true },
  { label: 'Monthly Revenue', value: '$64,820', change: '+15%', positive: true },
  { label: 'Churn Rate', value: '4.2%', change: '-0.8%', positive: true },
]

export const revenueData = [
  { month: 'Oct', revenue: 42000, users: 8200 },
  { month: 'Nov', revenue: 48000, users: 9100 },
  { month: 'Dec', revenue: 52000, users: 10200 },
  { month: 'Jan', revenue: 55000, users: 10900 },
  { month: 'Feb', revenue: 59000, users: 11600 },
  { month: 'Mar', revenue: 64820, users: 12483 },
]

// ============================================================
// MARKETS & LEAGUES
// ============================================================
export const markets = [
  'Points', 'Assists', 'Rebounds', 'Threes', 'Pts+Ast', 'Pts+Reb',
  'Reb+Ast', 'Pts+Reb+Ast', 'Double Double', 'Triple Double',
  '1Q Points', '1Q Assists', '1Q Rebounds', '1H Points',
  'Steals', 'Blocks', 'Stl+Blk', 'Turnovers', 'Fouls', 'FT Attempted',
]

export const leagues = [
  { name: 'NBA', active: true, comingSoon: false },
  { name: 'WNBA', active: true, comingSoon: false },
  { name: 'NFL', active: true, comingSoon: false },
  { name: 'MLB', active: false, comingSoon: true },
]

// ============================================================
// GLOSSARY
// ============================================================
export const glossary: Record<string, string> = {
  'USG%': 'Usage Rate — estimated percentage of team plays used by this player while on the floor',
  'CL': 'Closing Line — the final odds before the game started',
  'H2H': 'Head-to-Head — stats filtered only for games against this specific opponent',
  'B2B': 'Back-to-Back — player played a game the previous day',
  'DPT': 'Defensive Points Threshold — points allowed by opponent to this position',
  'DSZ': 'Defensive Size Zone — opponent\'s defensive matchup size rating',
  'DAZ': 'Defensive Activity Zone — opponent\'s defensive pressure rating',
  'PITP': 'Points in the Paint — points scored inside the painted area',
  'FGA': 'Field Goal Attempts per game',
  'EV': 'Expected Value — mathematical edge over the sportsbook',
}

// ============================================================
// SIMILAR PLAYERS
// ============================================================
export const similarPlayers = [
  { name: 'Jayson Tatum', team: 'BOS', pts: 28.9, ast: 4.8, reb: 8.2, similarity: 94 },
  { name: 'Kevin Durant', team: 'PHX', pts: 27.1, ast: 3.9, reb: 6.7, similarity: 91 },
  { name: 'Devin Booker', team: 'PHX', pts: 26.8, ast: 6.1, reb: 4.3, similarity: 87 },
  { name: 'Jimmy Butler', team: 'MIA', pts: 21.4, ast: 5.2, reb: 5.8, similarity: 82 },
]

// Defensive Intelligence Data
// Source: Sportsdata.io NBA Team Statistics API
export const defensiveIntel = {
  defVsPosition: '5th',
  allowedPts: 24.8,
  allowedReb: 8.1,
  matchupScore: 'Favorable',
  paceRank: '12th',
  paintPointsAllowed: 48.2,
  opponent: 'BOS',
  opponentDefRating: 108.4,
}

// ============================================================
// EDGE ENGINE — EV DETECTION
// ============================================================
export const edgeEngineRows = [
  { player: 'Stephen Curry', team: 'GSW', stat: '3PM', prop: 'Over 4.5 Threes', line: 4.5, modelProb: 61, bookProb: 52, edge: 9.0, bettableUpTo: 5.0, avoidAfter: 5.5, odds: '+130', book: 'DraftKings', confidence: 'High' as const },
  { player: 'LeBron James', team: 'LAL', stat: 'PTS', prop: 'Over 29.5 Points', line: 29.5, modelProb: 63, bookProb: 54, edge: 9.0, bettableUpTo: 30.5, avoidAfter: 31.5, odds: '-120', book: 'FanDuel', confidence: 'High' as const },
  { player: 'Nikola Jokic', team: 'DEN', stat: 'REB', prop: 'Over 11.5 Rebounds', line: 11.5, modelProb: 58, bookProb: 51, edge: 7.0, bettableUpTo: 12.0, avoidAfter: 12.5, odds: '-105', book: 'BetMGM', confidence: 'Medium' as const },
  { player: 'Jayson Tatum', team: 'BOS', stat: 'PTS', prop: 'Over 27.5 Points', line: 27.5, modelProb: 56, bookProb: 50, edge: 6.0, bettableUpTo: 28.0, avoidAfter: 28.5, odds: '-110', book: 'FanDuel', confidence: 'Medium' as const },
  { player: 'Luka Doncic', team: 'DAL', stat: 'AST', prop: 'Over 8.5 Assists', line: 8.5, modelProb: 54, bookProb: 49, edge: 5.0, bettableUpTo: 9.0, avoidAfter: 9.5, odds: '+115', book: 'DraftKings', confidence: 'Medium' as const },
  { player: 'Kevin Durant', team: 'PHX', stat: 'PTS', prop: 'Over 25.5 Points', line: 25.5, modelProb: 52, bookProb: 48, edge: 4.0, bettableUpTo: 26.0, avoidAfter: 26.5, odds: '-112', book: 'FanDuel', confidence: 'Low' as const },
  { player: 'Devin Booker', team: 'PHX', stat: 'PTS', prop: 'Over 24.5 Points', line: 24.5, modelProb: 50, bookProb: 47, edge: 3.0, bettableUpTo: 25.0, avoidAfter: 25.5, odds: '-108', book: 'BetMGM', confidence: 'Low' as const },
  { player: 'Giannis Antetokounmpo', team: 'MIL', stat: 'REB', prop: 'Over 10.5 Rebounds', line: 10.5, modelProb: 57, bookProb: 50, edge: 7.0, bettableUpTo: 11.0, avoidAfter: 11.5, odds: '-115', book: 'DraftKings', confidence: 'High' as const },
]

// ============================================================
// AI QUANT ANALYST FEED
// ============================================================
export const aiAnalystFeed = [
  { id: 1, type: 'efficiency' as const, title: 'Market Inefficiency Detected', body: 'Curry 3PM line at DraftKings (+130) is mispriced vs model output. Sharp volume confirming +9% edge. Recommend early entry before line corrects.', time: '2 min ago', badge: 'EV+', game: 'GSW vs DEN', confidence: 92 },
  { id: 2, type: 'movement' as const, title: 'Line Movement Predicted', body: 'LeBron PTS line expected to move from 29.5 → 31.0 by tip-off based on historical sharp steam patterns. Optimal entry: next 45 minutes.', time: '7 min ago', badge: 'LINE', game: 'LAL vs BOS', confidence: 81 },
  { id: 3, type: 'correlation' as const, title: 'Correlation Risk Alert', body: 'Simultaneous bets on Jokic REB Over + DEN team total Under creates negative correlation. Avoid combining these in a parlay or same-day exposure.', time: '14 min ago', badge: 'RISK', game: 'GSW vs DEN', confidence: 77 },
  { id: 4, type: 'efficiency' as const, title: 'Public Overreaction Fade', body: 'Heavy public money (74%) on MIA after 3-game win streak. Sharp books (Pinnacle) moving opposite. Classic fade scenario with +5.1% EV on PHX ML.', time: '21 min ago', badge: 'EV+', game: 'MIA vs PHX', confidence: 68 },
  { id: 5, type: 'movement' as const, title: 'Injury News Price Impact', body: 'Luka Doncic listed Questionable (knee). Model adjusting DAL spread from -1.5 to +2.5. All related props re-priced — monitor for 30 min post-announcement.', time: '35 min ago', badge: 'NEWS', game: 'DAL vs MIN', confidence: 85 },
  { id: 6, type: 'efficiency' as const, title: 'Sharp Steam Detected', body: 'Synchronized bet activity on BOS -3.5 across multiple sharp books within 8 minutes. Pattern matches prior steam moves with 79% predictive accuracy.', time: '48 min ago', badge: 'SHARP', game: 'LAL vs BOS', confidence: 79 },
]

// ============================================================
// BACKTESTING LAB
// ============================================================
export const backtestStrategies = [
  { id: 'rebound_drop', name: 'Rebounds Line Drop', description: 'Bet Over rebounds whenever the line drops by ≥ 0.5 points within 6 hours of tip-off.', stat: 'Rebounds', condition: 'Line drops ≥ 0.5', direction: 'Over', roi: '+22.4%', winRate: '64%', totalBets: 87, sharpe: 1.94 },
  { id: 'points_steam', name: 'Points Steam Move', description: 'Fade public on points prop when sharp steam moves line against public direction.', stat: 'Points', condition: 'Sharp steam detected', direction: 'Fade public', roi: '+18.1%', winRate: '61%', totalBets: 112, sharpe: 1.67 },
  { id: 'assists_value', name: 'Assists EV Edge', description: 'Bet assists prop only when model EV ≥ +5% vs any top-3 sportsbook.', stat: 'Assists', condition: 'EV ≥ 5%', direction: 'Over', roi: '+14.8%', winRate: '58%', totalBets: 64, sharpe: 1.42 },
  { id: 'threes_back2back', name: 'Threes B2B Fade', description: 'Fade 3PM Over for guards playing back-to-back games (fatigue factor).', stat: 'Threes', condition: 'B2B game', direction: 'Under', roi: '+11.2%', winRate: '57%', totalBets: 95, sharpe: 1.21 },
]

export const backtestChartData = [
  { game: 'G1', pl: 1.1, cumulative: 1.1 },
  { game: 'G2', pl: -0.5, cumulative: 0.6 },
  { game: 'G3', pl: 2.3, cumulative: 2.9 },
  { game: 'G4', pl: 1.8, cumulative: 4.7 },
  { game: 'G5', pl: -1.2, cumulative: 3.5 },
  { game: 'G6', pl: 3.1, cumulative: 6.6 },
  { game: 'G7', pl: 0.9, cumulative: 7.5 },
  { game: 'G8', pl: -0.7, cumulative: 6.8 },
  { game: 'G9', pl: 2.5, cumulative: 9.3 },
  { game: 'G10', pl: 1.4, cumulative: 10.7 },
  { game: 'G11', pl: -1.8, cumulative: 8.9 },
  { game: 'G12', pl: 3.6, cumulative: 12.5 },
  { game: 'G13', pl: 2.1, cumulative: 14.6 },
  { game: 'G14', pl: -0.9, cumulative: 13.7 },
  { game: 'G15', pl: 2.8, cumulative: 16.5 },
  { game: 'G16', pl: 1.2, cumulative: 17.7 },
  { game: 'G17', pl: -2.1, cumulative: 15.6 },
  { game: 'G18', pl: 3.4, cumulative: 19.0 },
  { game: 'G19', pl: 1.7, cumulative: 20.7 },
  { game: 'G20', pl: 1.5, cumulative: 22.2 },
]

// ============================================================
// MORNING BRIEFING
// ============================================================
export const morningBriefingCards = [
  { id: 1, league: 'NBA', title: 'LeBron James — PTS Over', body: 'High-confidence play today. Model projection 32.1 vs line 29.5. Sharp steam confirmed at 3 books. Enter before 6PM ET for best price.', ev: '+9.0%', odds: '-120', book: 'FanDuel', confidence: 92, signal: 'Strong Buy' as const },
  { id: 2, league: 'NBA', title: 'Curry 3PM Over — Avoid Late Entry', body: 'Strong model edge but line moving fast. Already corrected from +140 to +125. Still playable up to 4.5 — avoid if line reaches 5.0.', ev: '+7.2%', odds: '+125', book: 'DraftKings', confidence: 78, signal: 'Buy' as const },
  { id: 3, league: 'NBA', title: 'Jokic REB Over — Value Play', body: 'BOS defensive matchup ranks 18th vs C rebounds. Jokic averaging 12.4 REB in last 5. Line sitting at 11.5. Solid EV.', ev: '+4.7%', odds: '-105', book: 'BetMGM', confidence: 68, signal: 'Buy' as const },
  { id: 4, league: 'NBA', title: 'MIA ML — Fade Alert', body: 'Public overloading MIA after winning streak. Sharp books leaning PHX. 3-game road trip fatigue factor applied. Fade MIA ML.', ev: '+5.1%', odds: '+110', book: 'FanDuel', confidence: 65, signal: 'Fade' as const },
]

export const morningInjuryAlerts = [
  // Source: Sportsdata.io NBA Injuries API
  { player: 'Luka Doncic', team: 'DAL', status: 'Questionable', injury: 'Knee', impact: 'High', affectedProps: ['AST Over 8.5', 'PTS Over 28.5', 'DAL Spread'] },
  { player: 'Jimmy Butler', team: 'MIA', status: 'Probable', injury: 'Ankle', impact: 'Low', affectedProps: ['MIA ML', 'PTS Over 21.5'] },
  { player: 'Anthony Davis', team: 'LAL', status: 'Active', injury: null, impact: 'None', affectedProps: [] },
]

export const morningMarketSummary = `Today's market opens with notable sharp activity concentrated on LAL/BOS and GSW/DEN matchups. Three confirmed steam moves detected overnight as early sharp bettors positioned on points and rebounds props. The AI model identifies 8 positive-EV opportunities above +4%, with 3 rated high-confidence. Public money heavily favoring MIA (74% ticket share) — creating a classic sharp fade environment. Injury watch: Luka Doncic listed Questionable; adjust DAL exposure accordingly. Recommended capital deployment today: lean toward player props (higher edge concentration) with reduced exposure on spread markets until injury reports finalize at 5PM ET.`

// ============================================================
// MARKET MOMENTUM STRIP (Dashboard widget)
// ============================================================
export const marketMomentumStrip = [
  { game: 'LAL vs BOS', league: 'NBA', momentum: 94, sharpPct: 68, publicPct: 32, trend: 'rising' as const, time: '7:30 PM' },
  { game: 'GSW vs DEN', league: 'NBA', momentum: 72, sharpPct: 55, publicPct: 45, trend: 'rising' as const, time: '6:00 PM' },
  { game: 'MIA vs PHX', league: 'NBA', momentum: 58, sharpPct: 26, publicPct: 74, trend: 'fading' as const, time: '8:00 PM' },
  { game: 'DAL vs MIN', league: 'NBA', momentum: 49, sharpPct: 40, publicPct: 60, trend: 'neutral' as const, time: '9:30 PM' },
  { game: 'MIL vs CLE', league: 'NBA', momentum: 38, sharpPct: 35, publicPct: 65, trend: 'fading' as const, time: '7:00 PM' },
]

// ============================================================
// CAPITAL ALLOCATION
// ============================================================
export const capitalAllocationSlices = [
  { name: 'Player Props', value: 35, color: 'var(--emerald)' },
  { name: 'Spread Markets', value: 25, color: 'var(--intel-blue)' },
  { name: 'Live Opportunities', value: 20, color: 'var(--gold)' },
  { name: 'Liquidity Reserve', value: 20, color: 'var(--text-muted)' },
]

export const capitalRiskMetrics = [
  { label: 'Sharpe Ratio', value: '1.82', positive: true, desc: 'Risk-adjusted return vs benchmark', benchmark: '> 1.5 = excellent' },
  { label: 'Volatility Score', value: '14.3%', positive: false, desc: 'Portfolio daily volatility', benchmark: '< 20% = controlled' },
  { label: 'Drawdown Probability', value: '23%', positive: false, desc: '30-day max drawdown risk', benchmark: '< 30% = acceptable' },
  { label: 'Alpha Capture', value: '+6.4%', positive: true, desc: 'Excess return vs market', benchmark: '> 3% = strong' },
  { label: 'Win Rate', value: '62.3%', positive: true, desc: 'Overall bet win percentage', benchmark: '> 55% = profitable' },
  { label: 'Avg Edge Per Bet', value: '+3.8%', positive: true, desc: 'Expected value per wager', benchmark: '> 2% = solid' },
]

export const bankrollHistory = [
  { week: 'W1', balance: 1000 },
  { week: 'W2', balance: 1085 },
  { week: 'W3', balance: 1054 },
  { week: 'W4', balance: 1148 },
  { week: 'W5', balance: 1210 },
  { week: 'W6', balance: 1178 },
  { week: 'W7', balance: 1295 },
  { week: 'W8', balance: 1380 },
  { week: 'W9', balance: 1342 },
  { week: 'W10', balance: 1467 },
  { week: 'W11', balance: 1552 },
  { week: 'W12', balance: 1631 },
]

// ============================================================
// LINE SHOPPER
// ============================================================
export const lineShopperRows = [
  { player: 'LeBron James', stat: 'PTS', line: 29.5, fanduel: '-120', draftkings: '-115', betmgm: '-125', caesars: '-118', best: 'draftkings' },
  { player: 'Stephen Curry', stat: '3PM', line: 4.5, fanduel: '+120', draftkings: '+130', betmgm: '+115', caesars: '+125', best: 'draftkings' },
  { player: 'Nikola Jokic', stat: 'REB', line: 11.5, fanduel: '-112', draftkings: '-108', betmgm: '-105', caesars: '-110', best: 'betmgm' },
  { player: 'Jayson Tatum', stat: 'PTS', line: 27.5, fanduel: '-108', draftkings: '-112', betmgm: '-110', caesars: '-115', best: 'fanduel' },
  { player: 'Luka Doncic', stat: 'AST', line: 8.5, fanduel: '+110', draftkings: '+115', betmgm: '+105', caesars: '+112', best: 'draftkings' },
  { player: 'Kevin Durant', stat: 'PTS', line: 25.5, fanduel: '-115', draftkings: '-110', betmgm: '-108', caesars: '-112', best: 'betmgm' },
]
