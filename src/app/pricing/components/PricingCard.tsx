'use client'
import { Check, X, Zap } from 'lucide-react'
import Link from 'next/link'

interface PricingCardProps {
  plan: any
  billing: 'monthly' | 'annual'
}

export function PricingCard({ plan, billing }: PricingCardProps) {
  return (
    <div
      className="relative card rounded-2xl p-6 flex flex-col"
      style={{
        borderColor: plan.badge ? 'var(--gold)' : 'var(--border)',
        borderWidth: plan.badge ? 2 : 1,
      }}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="badge text-white text-[10px] px-3 py-1" style={{ backgroundColor: 'var(--gold)' }}>
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-5">
        <h2 className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{plan.name}</h2>
        <p className="text-sm font-body mt-1" style={{ color: 'var(--text-muted)' }}>{plan.desc}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            ${plan.price[billing]}
          </span>
          {plan.price[billing] > 0 && (
            <span className="text-sm font-body" style={{ color: 'var(--text-muted)' }}>/mo</span>
          )}
        </div>
        {billing === 'annual' && plan.price.annual > 0 && (
          <p className="text-xs font-body mt-1" style={{ color: 'var(--text-muted)' }}>
            Billed annually · ${plan.price.annual * 12}/yr
          </p>
        )}
      </div>

      {/* Gold divider */}
      <div className="gold-divider mb-5" style={{ opacity: 0.5 }} />

      {/* Features */}
      <ul className="flex-1 space-y-2.5 mb-6">
        {plan.features.map((f: any, i: number) => (
          <li key={i} className="flex items-center gap-2.5 text-sm font-body">
            {f.included
              ? <Check className="h-4 w-4 shrink-0" style={{ color: 'var(--emerald)' }} />
              : <X className="h-4 w-4 shrink-0" style={{ color: 'var(--border)' }} />
            }
            <span style={{ color: f.included ? 'var(--text-primary)' : 'var(--text-muted)' }}>{f.text}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.ctaHref}
        className="w-full py-3 rounded-xl text-center font-body font-semibold text-sm transition-all hover:opacity-90"
        style={
          plan.ctaStyle === 'primary'
            ? { backgroundColor: 'var(--emerald)', color: 'white' }
            : plan.ctaStyle === 'intel'
            ? { backgroundColor: 'var(--intel-blue)', color: 'white' }
            : { backgroundColor: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border)' }
        }
      >
        {plan.ctaStyle === 'primary' && <Zap className="h-4 w-4 inline mr-1.5" />}
        {plan.cta}
      </Link>
    </div>
  )
}
