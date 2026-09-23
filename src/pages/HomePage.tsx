import { go } from '../lib/router'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Redes e contato">
      <a href="https://www.linkedin.com/in/nayara-leite-083262205" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.5v9M6.5 6.5v.1M11 18.5v-9m0 3.1c.7-2.7 6.5-4.2 6.5 1.6v4.3" /></svg>
      </a>
      <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="Behance"><span className="hero-socials__be">Bē</span></a>
      <a href="mailto:nayaradesigner1@gmail.com" aria-label="E-mail"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v11H3z" /><path d="m4 7.5 8 6 8-6" /></svg></a>
    </div>
  )
}

export default function HomePage() {
  const [arena, app, splendore] = projects
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__inner shell">
          <div className="home-hero__copy">
            <h1><span>NAYARA</span> <em>LEITE</em></h1>
            <p className="home-hero__role">UI / UX DESIGNER</p>
            <p className="home-hero__body">Crio interfaces simples, intuitivas e elegantes que transformam problemas em experiências digitais mais claras e agradáveis.</p>
            <div className="home-hero__contact"><span>Me encontre também em</span><SocialLinks /></div>
          </div>
          <div className="home-hero__portrait-wrap">
            <img src="/assets/portrait-home.png" alt="Nayara Leite" className="home-hero__portrait" />
          </div>
        </div>
      </section>

      <section id="projetos" className="home-projects anchor-offset">
        <div className="shell home-projects__inner">
        <button className="featured-project" onClick={() => go('/projetos/arena')} aria-label="Abrir o projeto Arena Sun7">
          <div className="featured-project__copy">
            <p className="eyebrow">PROJETO EM DESTAQUE</p>
            <h2>Arena Sun7</h2>
            <p className="featured-project__desc">Redesign da plataforma de agendamento de quadras esportivas. Melhorando a navegação, a organização das informações e a experiência de reserva.</p>
            <span className="text-button">Ver projeto <ArrowIcon /></span>
          </div>
          <div className="featured-project__visual" aria-hidden="true">
            <img src="/assets/arena-hero-trim.png" alt="" className="featured-project__phones" />
            <img src="/assets/arena-hand-trim.png" alt="" className="featured-project__hand" />
          </div>
          <span className="corner-shape corner-shape--top" />
          <span className="corner-shape corner-shape--bottom" />
        </button>

        <div className="home-projects__others">
          <p className="eyebrow">OUTROS PROJETOS</p>
          <div className="projects-grid">
            <ProjectCard project={app} />
            <ProjectCard project={splendore} />
          </div>
        </div>
        </div>
      </section>

      <section id="sobre" className="home-about anchor-offset">
        <div className="shell home-about__inner">
          <div className="home-about__copy">
            <p className="eyebrow">SOBRE MIM</p>
            <h2>Prazer, sou a<br />Nayara Leite <span aria-hidden="true">✦</span></h2>
            <p>Gosto de transformar ideias em interfaces que fazem sentido. Acredito que o designer tem o poder de simplificar, conectar e melhorar a vidas das pessoas.</p>
            <a className="resume-button" href="/curriculo-nayara-leite.txt" download>Baixar currículo <span aria-hidden="true">↓</span></a>
            <p className="home-about__tools-label">FERRAMENTAS</p>
            <div className="home-about__tools" aria-label="Ferramentas">
              <span className="tool-mark tool-mark--figma">F</span>
              <span className="tool-mark tool-mark--notion">N</span>
              <span className="tool-mark tool-mark--miro">M</span>
            </div>
          </div>
          <div className="home-about__divider" aria-hidden="true" />
          <div className="home-about__traits">
            <div className="trait trait--top"><span className="trait-icon trait-icon--leaf" aria-hidden="true">⌁</span><span>Curiosa e sempre<br />aprendendo</span></div>
            <div className="trait trait--top"><span className="trait-icon" aria-hidden="true">▯</span><span>Clareza, organização<br />e funcionalidade</span></div>
            <div className="trait trait--wide"><span className="trait-icon" aria-hidden="true">◴</span><span>Focada em UI / UX Designer</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
