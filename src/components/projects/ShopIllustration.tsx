const CARDS = [
  { label: 'Women', accent: 'from-accent/40 to-accent/5' },
  { label: 'Men', accent: 'from-accent-2/40 to-accent-2/5' },
  { label: 'Kids', accent: 'from-accent/30 to-accent-2/10' },
  { label: 'Accessories', accent: 'from-accent-2/30 to-accent/10' },
]

export function ShopIllustration() {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-gradient-to-b from-surface to-bg p-4 sm:p-6">
      <div className="flex items-center justify-between rounded-lg border border-border-soft bg-bg/60 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-text-dim/40" />
          <span className="h-1.5 w-6 rounded-full bg-text-dim/25" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent-2">Dokan Shop</span>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-2.5 sm:gap-3">
        {CARDS.map((card) => (
          <div
            key={card.label}
            className={`relative flex flex-col justify-end overflow-hidden rounded-lg border border-border-soft bg-gradient-to-br ${card.accent} p-2.5`}
          >
            <div className="absolute right-2 top-2 h-5 w-5 rounded-full bg-bg/50" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-text sm:text-xs">{card.label}</span>
            <span className="mt-0.5 h-1.5 w-10 rounded-full bg-bg/40" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-lg border border-border-soft bg-bg/70 px-3 py-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-text-dim">Hot Deals</span>
        <span className="rounded-full bg-accent-2/15 px-2 py-0.5 text-[10px] font-semibold text-accent-2">-50%</span>
      </div>
    </div>
  )
}
