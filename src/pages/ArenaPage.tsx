import { FIGMA_URL, MIRO_URL } from '../lib/router'
import { LinkButton } from '../components/Button'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import { ArrowUpRightIcon, BulbIcon, CheckCircleIcon, ObjectiveIcon } from '../components/Icons'

const beforeImages = [
  ['/assets/arena-before-1.png', 'Tela anterior — perfil e agenda'],
  ['/assets/arena-before-2.png', 'Tela anterior — apresentação'],
  ['/assets/arena-before-3.png', 'Tela anterior — menu de opções'],
]

const finalImages = [
  ['/assets/arena-final-3.png', 'Interface final — próxima partida'],
  ['/assets/arena-final-4.png', 'Interface final — escolha de quadra'],
  ['/assets/arena-final-5.png', 'Interface final — data e horário'],
  ['/assets/arena-final-6.png', 'Interface final — resumo da reserva'],
  ['/assets/arena-final-7.png', 'Interface final — pagamento'],
  ['/assets/arena-final-8.png', 'Interface final — minhas reservas'],
  ['/assets/arena-final-9.png', 'Interface final — reserva confirmada'],
]

const mapImages = (items: string[][]) => items.map(([src, alt]) => ({ src, alt }))

export default function ArenaPage() {
  return (
    <div className="project-page project-page--arena">
      <section className="case-hero case-hero--arena">
        <div className="case-hero__inner">
          <div className="case-hero__copy">
            <Tag>PROJETO DESTAQUE</Tag>
            <h1>Arena Sun7</h1>
            <p>Redesign da plataforma de agendamento de quadras esportivas. Melhorando a navegação, a organização das informações e a experiência de reserva.</p>
            <div className="case-hero__actions">
              <LinkButton href={MIRO_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" variant="ghost">Ver estudo de caso <ArrowUpRightIcon aria-hidden="true" /></LinkButton>
              <LinkButton href={FIGMA_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Explorar protótipo <ArrowUpRightIcon aria-hidden="true" /></LinkButton>
            </div>
          </div>
          <div className="case-hero__visual" aria-hidden="true">
            <div className="case-hero__blob" />
            <img src="/assets/arena-hero-trim.png" alt="" className="case-hero__phones" />
            <img src="/assets/arena-hand-trim.png" alt="" className="case-hero__hand" />
          </div>
        </div>
      </section>

      <div className="case-strip"><BulbIcon /> <span>Este projeto foi desenvolvido como parte da graduação em Design Digital e User Experience, aplicando metodologias de UX para resolver um problema real de usabilidade.</span></div>

      <section className="case-section case-shell case-problem">
        <div className="case-problem__grid">
          <article>
            <p className="eyebrow">PROBLEMA</p>
            <h2>Qual era o problema?</h2>
            <p>A plataforma atual da Arena Sun7 apresentava navegação confusa, excesso de informações na mesma tela e um fluxo de reserva longo e pouco intuitivo.</p>
          </article>
          <article className="pain-card">
            <h3>Principais dores dos usuários</h3>
            {['Dificuldade para encontrar horários disponíveis', 'Informações importantes pouco destacadas', 'Muitas etapas para concluir uma reserva', 'Falta de clareza sobre reservas futuras'].map(item => <div key={item}><CheckCircleIcon />{item}</div>)}
          </article>
          <article>
            <p className="eyebrow">OBJETIVOS</p>
            <h2>O que eu queria alcançar</h2>
            <div className="objective-list">
              {['Simplificar o fluxo', 'Destacar informações importantes', 'Tornar a experiência mais intuitiva e rápida', 'Aumentar a satisfação dos usuários'].map((item, index) => <div key={item}><ObjectiveIcon kind={index as 0 | 1 | 2 | 3} />{item}</div>)}
            </div>
          </article>
        </div>
      </section>

      <section className="case-section case-shell process-section">
        <div className="process-layout">
          <div>
            <p className="eyebrow">O PROCESSO</p>
            <h2>Como cheguei à solução</h2>
            <div className="process-steps">
              {['Pesquisa', 'Benchmark', 'Persona', 'Jornada do usuário', 'Protótipo'].map((item) => <div key={item}><CheckCircleIcon className="process-check-icon" />{item}</div>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">PESQUISA</p>
            <h2>O que descobrir</h2>
            <p>Entrevistamos usuários da plataforma e identificamos padrões de comportamento, frustrações e necessidades.</p>
            <h3>Principais necessidades</h3>
            <ul>
              <li>Reservar de forma rápida</li>
              <li>Visualizar horários disponíveis com facilidade</li>
              <li>Ter clareza sobre suas reservas</li>
              <li>Receber confirmação e lembretes</li>
            </ul>
          </div>
          <div className="persona-panel"><img src="/assets/arena-persona.png" alt="Persona Julia" /></div>
        </div>
      </section>

      <section className="case-section case-shell case-gallery-section">
        <div className="case-gallery-title">Antes</div>
        <Carousel images={mapImages(beforeImages)} visible={3} className="carousel--before" />
      </section>

      <section className="case-section case-shell case-gallery-section case-gallery-section--final">
        <p className="eyebrow">INTERFACE FINAL</p>
        <h2 className="case-gallery-subtitle">Interface de alta fidelidade</h2>
        <Carousel images={mapImages(finalImages)} visible={5} className="carousel--final" />
      </section>
    </div>
  )
}
