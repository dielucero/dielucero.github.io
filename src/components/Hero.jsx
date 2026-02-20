export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Hola, soy Diego Lucero</h1>
          <p className="mt-4 text-base sm:text-lg opacity-90">Desarrollador Frontend. Construyo experiencias web modernas, rápidas y accesibles.</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start">
            <a href="#projects" className="w-full sm:w-auto px-5 py-3 bg-white text-black rounded-md font-medium text-center">Ver proyectos</a>
            <a href="#contact" className="w-full sm:w-auto px-5 py-3 border border-white/40 rounded-md font-medium text-center">Contactar</a>
          </div>
        </div>
        <div className="relative mx-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]">
          {/* Orbital container */}
          <div
            aria-label="Animación de un satélite orbitando el globo con una vuelta cada 60 segundos"
            className="absolute inset-0 rounded-full grid place-items-center"
          >
            {/* Orbit ring removed */}

            {/* Rotating carrier (orbits in 60s) */}
            <div className="absolute inset-0 animate-orbit-60s">
              {/* Satellite positioned on the right edge, centered vertically */}
              <div className="absolute left-1/2 top-1/2 -translate-y-[3px] translate-x-[88px] sm:translate-x-[112px] md:translate-x-[138px]">
                {/* Orientation carrier: +90deg to point in direction of travel (tangent) */}
                <div className="rotate-90">
                  {/* Sputnik: body */}
                  <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.6)] animate-blink-2s" aria-hidden="true">
                    {/* Antennas */}
                    <span className="pointer-events-none absolute -left-3 sm:-left-4 top-1/2 h-px w-3 sm:w-4 bg-white/80" />
                    <span className="pointer-events-none absolute -left-2 sm:-left-2.5 -top-1.5 sm:-top-2 h-px w-2 sm:w-2.5 bg-white/70 rotate-[30deg]" />
                    <span className="pointer-events-none absolute -left-2 sm:-left-2.5 top-2.5 sm:top-3 h-px w-2 sm:w-2.5 bg-white/70 -rotate-[30deg]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Globe with masked land (white) over gray oceans */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden" style={{ backgroundColor: '#2a2a2a' }}>
              {/* Land mask layer */}
              <div
                className="absolute inset-0 bg-white animate-world-mask-left-120s"
                style={{
                  WebkitMaskImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                  maskImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                  WebkitMaskRepeat: 'repeat-x',
                  maskRepeat: 'repeat-x',
                  WebkitMaskSize: '200% 100%',
                  maskSize: '200% 100%',
                  WebkitMaskPosition: '0% 50%',
                  maskPosition: '0% 50%'
                }}
                aria-hidden="true"
              />
              {/* Border and shading */}
              <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
