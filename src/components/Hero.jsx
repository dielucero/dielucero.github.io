export default function Hero() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-[420px] items-center justify-center md:h-[380px]">
      <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.28),_rgba(15,23,42,0)_62%)] blur-3xl" />

      <div
        aria-label="Animación de un satélite orbitando el globo con una vuelta cada 60 segundos"
        className="relative h-[300px] w-[300px] rounded-full border border-cyan-400/20 bg-slate-950/70 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:h-[360px] md:w-[360px]"
      >
        <div className="absolute inset-[10px] rounded-full border border-cyan-200/10" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_62%)]" />

        <div className="absolute inset-0 animate-orbit-60s">
          <div className="absolute left-1/2 top-1/2 -translate-y-[2px] translate-x-[126px] md:translate-x-[148px]">
            <div className="rotate-90">
              <div className="relative h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)] animate-blink-2s" aria-hidden="true">
                <span className="pointer-events-none absolute -left-4 top-1/2 h-px w-4 bg-cyan-200/90" />
                <span className="pointer-events-none absolute -left-2 -top-2 h-px w-2.5 rotate-[30deg] bg-cyan-200/80" />
                <span className="pointer-events-none absolute -left-2 top-3 h-px w-2.5 -rotate-[30deg] bg-cyan-200/80" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.22),rgba(15,23,42,0.9)_30%,rgba(2,6,23,1)_70%)] shadow-[inset_0_15px_25px_rgba(255,255,255,0.06),inset_0_-18px_32px_rgba(56,189,248,0.1),0_0_30px_rgba(34,211,238,0.08)] md:h-48 md:w-48" aria-hidden="true">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.25),transparent_30%)]" />
            <div
              className="absolute inset-0 animate-world-mask-left-120s bg-cyan-100/90"
              style={{
                WebkitMaskImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                maskImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                WebkitMaskRepeat: 'repeat-x',
                maskRepeat: 'repeat-x',
                WebkitMaskSize: '200% 100%',
                maskSize: '200% 100%',
                WebkitMaskPosition: '0% 50%',
                maskPosition: '0% 50%',
              }}
            />
            <div className="absolute inset-0 rounded-full border border-cyan-200/20" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/10 via-transparent to-slate-950/60" />
          </div>
        </div>
      </div>
    </div>
  )
}
