import { useState } from 'react'
import Hero from './components/Hero.jsx'

const translations = {
  es: {
    nav: { about: 'Sobre mí', solutions: 'Soluciones', projects: 'Casos', contact: 'Contacto' },
    cta: 'Consultá tu proyecto',
    badge: 'Sistemas para negocios que quieren crecer',
    heroTitle: 'Diseño sitios web y automatizaciones que hacen crecer tu negocio.',
    heroText:
      'No te vendo diseño por separado: te entrego soluciones para vender más, reducir trabajo manual y dejar tu operación más clara, rápida y rentable.',
    primaryBtn: 'Ver soluciones',
    secondaryBtn: 'Hablemos',
    stats: [
      { value: '+2', label: 'Años trabajando' },
      { value: '6', label: 'Proyectos' },
      { value: '+1', label: 'Áreas de automatización' },
    ],
    aboutEyebrow: 'Sobre mí',
    aboutTitle: 'Soluciones reales para negocios que quieren crecer.',
    aboutText1:
      'Soy Diego Lucero y trabajo en la creación de herramientas digitales para comercios que necesitan más ventas, menos trabajo manual y procesos más claros.',
    aboutText2:
      'Mi enfoque combina diseño, desarrollo y automatización para resolver problemas concretos: pasarelas de pago, sistemas internos, gestión, flujo de operaciones y más rentabilidad.',
    cards: [
      { label: 'Especialidad', value: 'Sitios web' },
      { label: 'Estilo', value: 'Práctico' },
      { label: 'Enfoque', value: 'Rentabilidad' },
      { label: 'Ubicación', value: 'San Luis, AR' },
    ],
    skillsEyebrow: 'Soluciones',
    skillsTitle: 'Herramientas para hacer negocios más eficientes.',
    skills: [
      {
        title: 'Web & ventas',
        items: ['Landing pages', 'Sitios web', 'Pasarelas de pago', 'UX orientada a conversión'],
      },
      {
        title: 'Automatización',
        items: ['Procesos repetitivos', 'Flujos de trabajo', 'Sistemas internos', 'Reducción de carga operativa'],
      },
      {
        title: 'Negocio',
        items: ['Más eficiencia', 'Menos errores', 'Mejor operación', 'Más rentabilidad'],
      },
    ],
    projectsEyebrow: 'Casos',
    projectsTitle: 'Resultados concretos para comercios y emprendimientos.',
    projects: [
      {
        title: 'Barbería Bunker',
        description: 'Proyecto de marca y presencia digital para un negocio de barbería, con foco en imagen, experiencia visual y conversión.',
        tags: ['Branding', 'Web', 'UX'],
        link: 'https://barberia-bunker.vercel.app/',
      },
      {
        title: 'Paola Díaz',
        description: 'Sitio personal y portfolio para una profesional, pensado para reforzar su identidad digital y captar nuevos clientes.',
        tags: ['Portfolio', 'React', 'Vite'],
        link: 'https://paoladiaz.vercel.app/',
      },
    ],
    serviceEyebrow: 'Servicios',
    serviceTitle: 'Te ayudamos a resolver los cuellos de botella del negocio.',
    services: [
      {
        title: 'Sitios web que venden',
        text: 'Páginas claras, confiables y orientadas a conversiones para atraer clientes y cerrar ventas.',
      },
      {
        title: 'Automatización de procesos',
        text: 'Eliminamos tareas repetitivas, errores manuales y carga operativa innecesaria.',
      },
      {
        title: 'Sistemas y pagos',
        text: 'Pasarelas de pago, formularios y herramientas que agilizan la operación diaria del comercio.',
      },
    ],
    processEyebrow: 'Cómo trabajo',
    processTitle: 'Un proceso simple, claro y orientado a resultados.',
    process: [
      'Diagnóstico del problema y objetivos reales.',
      'Diseño de la solución más útil para el negocio.',
      'Desarrollo, testing y puesta en marcha.',
      'Optimización continua para mejorar rentabilidad.',
    ],
    contactEyebrow: 'Contacto',
    contactTitle: 'Hablemos de cómo resolver los problemas de tu negocio.',
    contactText:
      'Si necesitas un sitio web, una pasarela de pago, una automatización o un sistema que haga más rentable tu comercio, te ayudo a dejarlo funcionando bien y pensado para crecer.',
    email: 'dielucero@gmail.com',
    wa1: 'WhatsApp: +54 9 2665 269488',
    footer: '© 2026 Diego Lucero',
  },
  en: {
    nav: { about: 'About', solutions: 'Solutions', projects: 'Cases', contact: 'Contact' },
    cta: 'Get a consultation',
    badge: 'Systems for businesses ready to grow',
    heroTitle: 'I build websites and automations that help your business grow.',
    heroText:
      'I do not sell design in isolation: I deliver solutions that help you sell more, reduce manual work, and run a cleaner, faster, more profitable operation.',
    primaryBtn: 'See solutions',
    secondaryBtn: 'Let’s talk',
    stats: [
      { value: '+2', label: 'Years of work' },
      { value: '6', label: 'Projects' },
      { value: '+1', label: 'Automation areas' },
    ],
    aboutEyebrow: 'About',
    aboutTitle: 'Real solutions for businesses ready to grow.',
    aboutText1:
      'I am Diego Lucero, and I build digital tools for businesses that need more sales, less manual work, and clearer processes.',
    aboutText2:
      'My approach combines design, development, and automation to solve actual business bottlenecks: payment flows, internal systems, workflow management, and better profitability.',
    cards: [
      { label: 'Specialty', value: 'Websites' },
      { label: 'Style', value: 'Practical' },
      { label: 'Focus', value: 'Profitability' },
      { label: 'Location', value: 'San Luis, AR' },
    ],
    skillsEyebrow: 'Solutions',
    skillsTitle: 'Tools to make businesses more efficient.',
    skills: [
      {
        title: 'Web & sales',
        items: ['Landing pages', 'Business websites', 'Payment links', 'UX focused on conversion'],
      },
      {
        title: 'Automation',
        items: ['Repetitive workflows', 'Operational systems', 'Task reduction', 'Smarter business processes'],
      },
      {
        title: 'Business',
        items: ['More efficiency', 'Fewer errors', 'Better operations', 'Higher profitability'],
      },
    ],
    projectsEyebrow: 'Cases',
    projectsTitle: 'Concrete results for businesses and startups.',
    projects: [
      {
        title: 'Barbería Bunker',
        description: 'Brand and digital presence project for a barber shop, with a focus on image, visual identity, and conversion.',
        tags: ['Branding', 'Web', 'UX'],
        link: 'https://barberia-bunker.vercel.app/',
      },
      {
        title: 'Paola Díaz',
        description: 'Personal website and portfolio created to strengthen a professional identity and attract new opportunities.',
        tags: ['Portfolio', 'React', 'Vite'],
        link: 'https://paoladiaz.vercel.app/',
      },
    ],
    serviceEyebrow: 'Services',
    serviceTitle: 'We help you remove bottlenecks and improve daily operations.',
    services: [
      {
        title: 'Websites that sell',
        text: 'Clear, trustworthy, conversion-focused pages that help you attract customers and close more sales.',
      },
      {
        title: 'Automation of processes',
        text: 'We remove repetitive tasks, reduce errors, and lighten the operational load of your business.',
      },
      {
        title: 'Systems and payments',
        text: 'Payment gateways, forms, and tools that simplify the flow of sales and daily operations.',
      },
    ],
    processEyebrow: 'How I work',
    processTitle: 'A simple, clear process built around measurable results.',
    process: [
      'Diagnosis of the problem and the real objectives.',
      'Design of the most useful solution for the business.',
      'Development, testing, and launch.',
      'Continuous optimization to improve profitability.',
    ],
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s talk about removing the pressure points in your business.',
    contactText:
      'If you need a website, a payment flow, an automation, or a system that makes your business more profitable, I can help you build it and make it work.',
    email: 'dielucero@gmail.com',
    wa1: 'WhatsApp: +54 9 2665 269488',
    footer: '© 2026 Diego Lucero',
  },
  pt: {
    nav: { about: 'Sobre', solutions: 'Soluções', projects: 'Cases', contact: 'Contato' },
    cta: 'Agende uma consultoria',
    badge: 'Sistemas para negócios que querem crescer',
    heroTitle: 'Crio sites e automações que fazem seu negócio crescer.',
    heroText:
      'Não vendo só design: entrego soluções para vender mais, reduzir trabalho manual e deixar a operação mais clara, rápida e rentável.',
    primaryBtn: 'Ver soluções',
    secondaryBtn: 'Fale conosco',
    stats: [
      { value: '+2', label: 'Anos de trabalho' },
      { value: '6', label: 'Projetos' },
      { value: '+1', label: 'Áreas de automação' },
    ],
    aboutEyebrow: 'Sobre',
    aboutTitle: 'Soluções reais para negócios que querem crescer.',
    aboutText1:
      'Sou Diego Lucero e desenvolvo ferramentas digitais para comércios que precisam de mais vendas, menos trabalho manual e processos mais claros.',
    aboutText2:
      'Meu trabalho combina design, desenvolvimento e automação para resolver gargalos reais: links de pagamento, sistemas internos, gestão de processos e maior rentabilidade.',
    cards: [
      { label: 'Especialidade', value: 'Sites' },
      { label: 'Estilo', value: 'Prático' },
      { label: 'Foco', value: 'Rentabilidade' },
      { label: 'Localização', value: 'San Luis, AR' },
    ],
    skillsEyebrow: 'Soluções',
    skillsTitle: 'Ferramentas para tornar negócios mais eficientes.',
    skills: [
      {
        title: 'Web & vendas',
        items: ['Landing pages', 'Sites', 'Links de pagamento', 'UX focada em conversão'],
      },
      {
        title: 'Automação',
        items: ['Processos repetitivos', 'Fluxos internos', 'Redução de carga', 'Operação mais inteligente'],
      },
      {
        title: 'Negócio',
        items: ['Mais eficiência', 'Menos erros', 'Melhor operação', 'Mais rentabilidade'],
      },
    ],
    projectsEyebrow: 'Casos',
    projectsTitle: 'Resultados concretos para comércios e empreendimentos.',
    projects: [
      {
        title: 'Barbería Bunker',
        description: 'Projeto de marca e presença digital para uma barbearia, com foco em imagem, identidade visual e conversão.',
        tags: ['Branding', 'Web', 'UX'],
        link: 'https://barberia-bunker.vercel.app/',
      },
      {
        title: 'Paola Díaz',
        description: 'Site pessoal e portfolio desenvolvido para fortalecer a identidade profissional e atrair novas oportunidades.',
        tags: ['Portfolio', 'React', 'Vite'],
        link: 'https://paoladiaz.vercel.app/',
      },
    ],
    serviceEyebrow: 'Serviços',
    serviceTitle: 'Ajudamos você a eliminar gargalos e melhorar a operação do negócio.',
    services: [
      {
        title: 'Sites que vendem',
        text: 'Páginas claras, confiáveis e focadas em conversão para atrair clientes e fechar vendas.',
      },
      {
        title: 'Automação de processos',
        text: 'Removemos tarefas repetitivas, erros manuais e excesso de carga operacional.',
      },
      {
        title: 'Sistemas e pagamentos',
        text: 'Links de pagamento, formulários e ferramentas que simplificam o fluxo de vendas e o dia a dia.',
      },
    ],
    processEyebrow: 'Como trabalho',
    processTitle: 'Um processo simples, claro e orientado a resultados.',
    process: [
      'Diagnóstico do problema e dos objetivos reais.',
      'Desenho da solução mais útil para o negócio.',
      'Desenvolvimento, testes e implantação.',
      'Otimização contínua para aumentar a rentabilidade.',
    ],
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos conversar sobre como resolver os problemas do seu negócio.',
    contactText:
      'Se você precisa de um site, um link de pagamento, uma automação ou um sistema que deixe seu comércio mais rentável, posso te ajudar a montar a solução certa.',
    email: 'dielucero@gmail.com',
    wa1: 'WhatsApp: +54 9 2665 269488',
    footer: '© 2026 Diego Lucero',
  },
}

export default function App() {
  const [language, setLanguage] = useState('es')
  const t = translations[language]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-cyan-300">DL</a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">{t.nav.about}</a>
            <a href="#services" className="transition hover:text-white">{t.nav.solutions}</a>
            <a href="#projects" className="transition hover:text-white">{t.nav.projects}</a>
            <a href="#contact" className="transition hover:text-white">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            {['es', 'en', 'pt'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                  language === lang
                    ? 'border-cyan-400 bg-cyan-400/15 text-cyan-200'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}

            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 sm:inline-flex"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:pt-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                {t.badge}
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                {t.heroText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  {t.primaryBtn}
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  {t.secondaryBtn}
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Hero />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{t.aboutEyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{t.aboutTitle}</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">{t.aboutText1}</p>
              <p className="mt-4 text-base leading-7 text-slate-300">{t.aboutText2}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(34,211,238,0.06)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {t.cards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{t.serviceEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{t.serviceTitle}</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{t.skillsEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{t.skillsTitle}</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.skills.map((skill) => (
              <div key={skill.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{t.processEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{t.processTitle}</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.process.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-200">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{t.projectsEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{t.projectsTitle}</h2>

          <div className="mt-8 space-y-5">
            {t.projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
                  >
                    {project.link === '#contact' ? 'Solicitar info' : 'Ver sitio'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">{t.contactEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{t.contactTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{t.contactText}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="mailto:dielucero@gmail.com" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                {t.email}
              </a>
              <a href="https://wa.me/5492665269488" target="_blank" rel="noreferrer" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
                {t.wa1}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-center text-sm text-slate-400 sm:px-6">
        {t.footer}
      </footer>
    </div>
  )
}
