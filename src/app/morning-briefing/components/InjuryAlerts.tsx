'use client'
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'

interface InjuryAlertsProps {
  alerts: any[]
}

const impactConfig: any = {
  High: { color: 'var(--coral)', bg: 'var(--coral-light)' },
  Low: { color: 'var(--gold)', bg: 'var(--gold-light)' },
  None: { color: 'var(--emerald)', bg: 'var(--emerald-light)' },
}

export function InjuryAlerts({ alerts }: InjuryAlertsProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="h-4 w-4" style={{ color: 'var(--coral)' }} />
        <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          Injury &amp; News Alerts
        </h2>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, i) => {
          const cfg = impactConfig[alert.impact]
          return (
            <div key={i} className="card rounded-xl p-4 flex flex-wrap gap-4 items-start">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold font-body" style={{ color: 'var(--text-primary)' }}>{alert.player}</p>
                  <span className="text-xs font-body px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-muted)' }}>{alert.team}</span>
                  <span className="text-xs font-semibold font-body px-2 py-0.5 rounded-full" style={{ backgroundColor: cfg.bg, color: cfg.color }}>
                    {alert.status}
                  </span>
                </div>
                {alert.injury && (
                  <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>
                    Injury: <span style={{ color: 'var(--coral)' }}>{alert.injury}</span>
                  </p>
                )}
              </div>
              {alert.affectedProps.length > 0 && (
                <div>
                  <p className="text-[10px] font-body font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>AFFECTED PROPS</p>
                  <div className="flex flex-wrap gap-1">
                    {alert.affectedProps.map((prop: string) => (
                      <span key={prop} className="badge text-[9px]" style={{ backgroundColor: 'var(--coral-light)', color: 'var(--coral)' }}>{prop}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold font-body" style={{ color: cfg.color }}>
                  {alert.impact === 'High' ? <TrendingDown className="h-4 w-4 inline mr-1" /> : alert.impact === 'Low' ? <TrendingUp className="h-4 w-4 inline mr-1" /> : null}
                  {alert.impact} Impact
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
