'use client'
import { Lock } from 'lucide-react'

export function PremiumPaywall() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-2xl"
      style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.05)' }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--gold-light)', border: '2px solid var(--gold)' }}>
        <Lock className="h-7 w-7" style={{ color: 'var(--gold)' }} />
      </div>
      <div className="text-center">
        <h2 className="font-display text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Line Movement Tracker</h2>
        <p className="font-body text-sm max-w-sm" style={{ color: 'var(--text-secondary)' }}>
          Track sharp vs public money, spot steam moves, and identify closing line value opportunities in real time.
        </p>
      </div>
      <div className="flex gap-3">
        <a href="/pricing" className="px-6 py-3 rounded-xl text-white font-body font-semibold text-sm transition-all hover:opacity-90" style={{ backgroundColor: 'var(--emerald)' }}>
          Upgrade to Pro — $20/mo
        </a>
        <button className="px-6 py-3 rounded-xl font-body font-medium text-sm border transition-all hover:opacity-80" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          View Pricing
        </button>
      </div>
      <div className="flex gap-6 text-xs font-body" style={{ color: 'var(--text-muted)' }}>
        {['Real-time Line Data', 'Sharp Money Alerts', 'Steam Move Detection', 'CLV Tracking'].map(f => (
          <span key={f} className="flex items-center gap-1"><span style={{ color: 'var(--emerald)' }}>✓</span> {f}</span>
        ))}
      </div>
    </div>
  )
}
