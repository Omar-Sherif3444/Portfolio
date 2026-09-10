import type { ReactNode } from 'react'

interface BrowserFrameProps {
  url: string
  children: ReactNode
}

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-soft bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-border-soft bg-surface-2/70 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        </div>
        <div className="flex-1 truncate rounded-md bg-bg/60 px-3 py-1 text-center font-mono text-[11px] text-text-dim">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden">{children}</div>
    </div>
  )
}
