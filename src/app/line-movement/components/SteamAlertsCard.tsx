'use client'

interface SteamAlertsCardProps {
  game: any
}

export function SteamAlertsCard({ game }: SteamAlertsCardProps) {
  const alerts = [
    { type: '🔥 Steam Move', time: '3:45 PM', desc: 'Multi-book sync on ' + game.home_team.split(' ').pop() + ' spread', urgent: true },
    { type: '⚡ Reverse Line', time: '2:30 PM', desc: 'Public on Away, sharp on Home', urgent: false },
    { type: '📊 CLV Spot', time: '1:00 PM', desc: 'Expected +2.1% closing line value', urgent: false },
  ]

  return (
    <div className="card rounded-xl p-5">
      <h3 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Steam Alerts</h3>
      <div className="space-y-2">
        {alerts.map((alert, i) => (
          <div key={i} className="rounded-lg p-3" style={{ backgroundColor: alert.urgent ? 'var(--coral-light)' : 'var(--bg-surface)', border: `1px solid ${alert.urgent ? 'var(--coral)' : 'var(--border)'}` }}>
            <p className="text-xs font-body font-semibold" style={{ color: alert.urgent ? 'var(--coral)' : 'var(--text-primary)' }}>{alert.type}</p>
            <p className="text-[10px] font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>{alert.time} · {alert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
