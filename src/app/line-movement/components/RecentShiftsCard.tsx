'use client'

interface RecentShiftsCardProps {
  shifts: any[]
}

export function RecentShiftsCard({ shifts }: RecentShiftsCardProps) {
  return (
    <div className="card rounded-xl p-5">
      <h3 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Recent Line Shifts</h3>
      <div className="space-y-2">
        {shifts.map((shift, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className={`w-2 h-2 rounded-full shrink-0`} style={{ backgroundColor: shift.type === 'sharp' ? 'var(--emerald)' : shift.type === 'public' ? 'var(--intel-blue)' : 'var(--coral)' }} />
            <span className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>{shift.time}</span>
            <span className="text-sm font-body font-bold" style={{ color: 'var(--text-primary)' }}>{shift.odds}</span>
            <span className="ml-auto text-xs font-body px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: shift.type === 'sharp' ? 'var(--emerald-light)' : shift.type === 'public' ? 'var(--intel-blue-light)' : 'var(--coral-light)',
                color: shift.type === 'sharp' ? 'var(--emerald)' : shift.type === 'public' ? 'var(--intel-blue)' : 'var(--coral)',
              }}>
              {shift.action}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
