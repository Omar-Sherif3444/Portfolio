export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="animate-blob absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px] motion-reduce:animate-none" />
      <div
        className="animate-blob absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent-2/15 blur-[120px] motion-reduce:animate-none"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[130px] motion-reduce:animate-none"
        style={{ animationDelay: '-15s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_75%)]" />
    </div>
  )
}
