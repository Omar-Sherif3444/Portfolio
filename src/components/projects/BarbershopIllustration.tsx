// Seat status colours match the live app: available, occupied, reserved, out of service.
const STATUS = {
  free: 'bg-emerald-400/80',
  busy: 'bg-rose-400/80',
  held: 'bg-amber-300/80',
  off: 'bg-text-dim/30',
} as const

const CHAIRS: (keyof typeof STATUS)[] = ['busy', 'busy', 'free', 'off']
const SOFA: (keyof typeof STATUS)[] = ['busy', 'free', 'held']

export function BarbershopIllustration() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-surface to-bg p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent-2">Live seating</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-text-dim">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
          Realtime
        </span>
      </div>

      <div className="mx-auto w-full max-w-md" aria-hidden="true">
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {CHAIRS.map((status, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="h-5 w-9 rounded-sm border border-amber-300/40 bg-surface-2 sm:h-6 sm:w-10" />
              <span className={`mt-1.5 h-4 w-6 rounded-t-md sm:h-5 sm:w-7 ${STATUS[status]}`} />
              <span className={`h-2 w-7 rounded-sm sm:w-8 ${STATUS[status]}`} />
              <span className="h-1.5 w-0.5 bg-text-dim/40" />
              <span className="h-1 w-5 rounded-full bg-text-dim/40" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 flex w-4/5 gap-1 rounded-lg bg-surface-2 p-1.5 ring-1 ring-inset ring-border-soft">
          {SOFA.map((status, i) => (
            <span key={i} className={`h-6 flex-1 rounded-md ${STATUS[status]}`} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-lg border border-border-soft bg-bg/70 px-3 py-2.5 backdrop-blur-sm sm:px-4 sm:py-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-text-dim">Sofa · Seat 3</p>
          <p className="text-xs font-semibold text-text sm:text-sm">Reserved for you · 1 hour</p>
        </div>
        <span className="rounded-full bg-amber-300/15 px-2 py-0.5 text-[10px] font-semibold text-amber-300">محجوز</span>
      </div>
    </div>
  )
}
