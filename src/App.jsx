import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl font-semibold tracking-wide">DL</div>
          <nav className="hidden sm:flex text-sm opacity-80">
            <a href="#about" className="hover:opacity-100 transition-opacity">Sobre mí</a>
            <span className="mx-3">•</span>
            <a href="#skills" className="hover:opacity-100 transition-opacity">Habilidades</a>
            <span className="mx-3">•</span>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Proyectos</a>
            <span className="mx-3">•</span>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Contacto</a>
          </nav>
          <button className="sm:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </button>
        </div>
        <nav className="sm:hidden mt-4 pb-2 border-t border-white/20 pt-4 text-sm opacity-90 space-y-2">
          <a href="#about" className="block hover:opacity-100 transition-opacity">Sobre mí</a>
          <a href="#skills" className="block hover:opacity-100 transition-opacity">Habilidades</a>
          <a href="#projects" className="block hover:opacity-100 transition-opacity">Proyectos</a>
          <a href="#contact" className="block hover:opacity-100 transition-opacity">Contacto</a>
        </nav>
      </header>
      <main>
        <Hero />
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Sobre mí</h2>
          <p className="opacity-90 leading-relaxed text-sm sm:text-base">soy Diego Lucero, un dev de San Luis, Argentina. Un apasionado por la programación que gusta de hacer páginas web, apps móviles y a veces alguna app de escritorio</p>
        </section>
        <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Habilidades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="border border-white/15 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Full Stack</h3>
              <ul className="list-disc list-inside opacity-90 text-xs sm:text-sm space-y-1">
                <li>Diseño e implementación de aplicaciones web end-to-end</li>
                <li>Integración de APIs y despliegue</li>
              </ul>
            </div>
            <div className="border border-white/15 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Backend</h3>
              <ul className="list-disc list-inside opacity-90 text-xs sm:text-sm space-y-1">
                <li>Python</li>
                <li>Node.js (básico a intermedio)</li>
              </ul>
            </div>
            <div className="border border-white/15 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Frontend</h3>
              <ul className="list-disc list-inside opacity-90 text-xs sm:text-sm space-y-1">
                <li>React, Vite</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="border border-white/15 rounded-lg p-4">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Mobile</h3>
              <ul className="list-disc list-inside opacity-90 text-xs sm:text-sm space-y-1">
                <li>Principiante en desarrollo móvil</li>
                <li>Android (APK) — proyecto SMR</li>
              </ul>
            </div>
            <div className="border border-white/15 rounded-lg p-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Herramientas</h3>
              <ul className="list-disc list-inside opacity-90 text-xs sm:text-sm space-y-1">
                <li>Git/GitHub</li>
                <li>Deploy: Vercel / Netlify</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Proyectos</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="border border-white/15 rounded-lg p-4 hover:border-white/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-medium">Sitio de Paola Díaz</h3>
                  <p className="opacity-80 text-xs sm:text-sm mt-1">Landing page desarrollada por mí.</p>
                </div>
                <a
                  href="https://paoladiaz.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-2 bg-white text-black rounded-md text-sm font-medium text-center"
                >Ver sitio</a>
              </div>
            </div>
            <div className="border border-white/15 rounded-lg p-4 hover:border-white/30 transition-colors">
              <div>
                <h3 className="text-base sm:text-lg font-medium">SMR (Simple Music Reproducer)</h3>
                <p className="opacity-80 text-xs sm:text-sm mt-1">Solicitar APK para Android por medios de contacto. Sí, es libre y NO TIENE PUBLICIDAD.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Contacto</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="mailto:dielucero@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 border border-white/20 rounded-lg hover:border-white/40 transition-all hover:bg-white/5"
            >
              <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base">Email</span>
            </a>
            
            <a
              href="https://wa.me/5492665269488"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-4 border border-white/20 rounded-lg hover:border-white/40 transition-all hover:bg-white/5"
            >
              <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base">WhatsApp</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/diego-lucero-wd/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-4 border border-white/20 rounded-lg hover:border-white/40 transition-all hover:bg-white/5"
            >
              <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base">LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 opacity-70 text-xs sm:text-sm">© 2026 Diego Lucero</footer>
    </div>
  )
}
