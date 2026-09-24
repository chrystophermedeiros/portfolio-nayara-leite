import { go } from '../lib/router'
import ProjectCard from '../components/ProjectCard'
import { ArrowUpRightIcon, DownloadIcon, FocusIcon } from '../components/Icons'
import { projects } from '../data/projects'

function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Redes e contato">
      <a href="https://www.linkedin.com/in/nayara-leite-083262205" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="LinkedIn">
        <img src="/assets/icons/linkedin.svg" alt="" aria-hidden="true" />
      </a>
      <a href="https://www.behance.net/nayaraleite9" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="Behance">
        <img src="/assets/icons/behance.svg" alt="" aria-hidden="true" />
      </a>
      <a href="mailto:nayaradesigner1@gmail.com" aria-label="E-mail">
        <img src="/assets/icons/email.svg" alt="" aria-hidden="true" />
      </a>
    </div>
  )
}

export default function HomePage() {
  const [, app, splendore] = projects
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
            <span className="text-button">Ver projeto <ArrowUpRightIcon /></span>
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
            <a className="resume-button" href="/Curriculo_Nayara_Leite_UI_UX.pdf" download>Baixar currículo <DownloadIcon aria-hidden="true" /></a>
            <p className="home-about__tools-label">FERRAMENTAS</p>
            <div className="home-about__tools" aria-label="Ferramentas">
              <span className="tool-mark" aria-label="Figma"><img src="/assets/icons/figma.svg" alt="" aria-hidden="true" /></span>
              <span className="tool-mark" aria-label="Notion"><img src="/assets/icons/notion.svg" alt="" aria-hidden="true" /></span>
              <span className="tool-mark" aria-label="Miro"><img src="/assets/icons/miro.svg" alt="" aria-hidden="true" /></span>
            </div>
          </div>
          <div className="home-about__divider" aria-hidden="true" />
          <div className="home-about__traits">
            <div className="trait trait--top"><span className="trait-icon" aria-hidden="true"><img src="/assets/icons/leaf.svg" alt="" /></span><span>Curiosa e sempre<br />aprendendo</span></div>
            <div className="trait trait--top"><span className="trait-icon" aria-hidden="true"><img src="/assets/icons/clarity.svg" alt="" /></span><span>Clareza, organização<br />e funcionalidade</span></div>
            <div className="trait trait--wide"><span className="trait-icon" aria-hidden="true"><FocusIcon /></span><span>Focada em UI / UX Designer</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
