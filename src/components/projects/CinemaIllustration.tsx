const ROWS = ['A', 'B', 'C', 'D'] as const
const SEATS_PER_ROW = 9
const OCCUPIED = new Set(['A3', 'A4', 'B6', 'C2', 'C3', 'D8'])
const SELECTED = new Set(['B4', 'B5'])

export function CinemaIllustration() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-surface to-bg p-4 sm:p-6">
      <div className="mx-auto w-full max-w-md">
        <div
          className="mx-auto h-2 w-4/5 rounded-full bg-gradient-to-r from-accent/0 via-accent-2/70 to-accent/0"
          aria-hidden="true"
        />
        <p className="mt-1.5 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-text-dim">Screen</p>

        <div className="mt-4 flex flex-col items-center gap-1.5">
          {ROWS.map((row) => (
            <div key={row} className="flex items-center gap-1.5">
              <span className="w-3 font-mono text-[8px] text-text-dim">{row}</span>
              {Array.from({ length: SEATS_PER_ROW }, (_, i) => {
                const code = `${row}${i + 1}`
                const occupied = OCCUPIED.has(code)
                const selected = SELECTED.has(code)
                return (
                  <span
                    key={code}
                    className={
                      'h-2.5 w-2.5 rounded-[3px] transition-colors sm:h-3 sm:w-3 ' +
                      (occupied
                        ? 'bg-text-dim/30'
                        : selected
                          ? 'bg-accent-2 shadow-[0_0_10px_var(--color-accent-2)]'
                          : 'bg-surface-2 ring-1 ring-inset ring-border-soft')
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-lg border border-border-soft bg-bg/70 px-3 py-2.5 backdrop-blur-sm sm:px-4 sm:py-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-text-dim">Booking</p>
          <p className="text-xs font-semibold text-text sm:text-sm">Seats B4, B5 · EYT4F2A9C</p>
        </div>
        <div className="grid h-8 w-8 grid-cols-3 gap-[2px] rounded-sm bg-text p-1 sm:h-9 sm:w-9" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} className={i % 3 === 1 && i !== 4 ? 'bg-bg' : 'bg-transparent'} />
          ))}
        </div>
      </div>
    </div>
  )
}
