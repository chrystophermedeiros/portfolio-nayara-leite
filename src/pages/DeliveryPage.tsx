import { FIGMA_URL } from '../lib/router'
import Carousel from '../components/Carousel'
import { LinkButton } from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'

const screens = [
  ['delivery-screen-1.png', 'Tela inicial'],
  ['delivery-screen-2.png', 'Tela de boas-vindas'],
  ['delivery-screen-6.png', 'Criar conta'],
  ['delivery-screen-3.png', 'Menu'],
  ['delivery-screen-5.png', 'Lista de produtos'],
  ['delivery-screen-4.png', 'Carrinho'],
]
const mapScreens = screens.map(([src, alt]) => ({ src: `/assets/${src}`, alt }))

export default function DeliveryPage() {
  return (
    <div className="project-page project-page--delivery">
      <section className="case-hero case-hero--delivery-detail">
        <div className="case-detail-shell">
          <div className="case-detail-copy">
            <Tag>UI DESIGN + PROTOTIPAÇÃO</Tag>
            <h1>App Delivery 🐝</h1>
            <p>Aplicativo de delivery com foco em uma navegação simples e rápida, facilitando o pedido do usuário.</p>
            <div className="case-hero__actions">
              <LinkButton href={FIGMA_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" variant="ghost">Figma <span aria-hidden="true">↗</span></LinkButton>
              <LinkButton href="#telas">Protótipo interativo <span aria-hidden="true">↗</span></LinkButton>
            </div>
          </div>
          <div className="delivery-detail-hero">
            <img src="/assets/delivery-composite.png" alt="Composição do aplicativo Bee Food" />
          </div>
        </div>
      </section>

      <main className="case-detail-body">
        <section className="delivery-project-grid case-shell">
          <div>
            <p className="eyebrow">SOBRE O PROJETO</p>
            <h2>Objetivo</h2>
            <p>Facilitar o processo de pedido, reduzindo a quantidade de decisões por etapa e mantendo os elementos importantes sempre visíveis.</p>
            <div className="tag-row"><Tag>Figma</Tag><Tag>Prototipação</Tag></div>
          </div>
          <div className="delivery-highlight">
            <p className="eyebrow">DESAFIO</p>
            <h3>Como deixar a navegação simples, rápida e agradável?</h3>
            <p>O conceito usa cores quentes, componentes grandes e uma hierarquia clara para levar o usuário do card de produto ao pedido.</p>
          </div>
        </section>

        <section id="telas" className="case-shell delivery-screens-section">
          <SectionHeading eyebrow="TELAS DO APLICATIVO" title="Fluxo principal" />
          <Carousel images={mapScreens} visible={4} className="carousel--screens" />
        </section>

        <section className="case-shell delivery-demo-section">
          <p className="eyebrow">PROTÓTIPO</p>
          <h2>Demonstração</h2>
          <div className="media-card"><video controls preload="metadata" playsInline poster="/assets/delivery-composite.png"><source src="/assets/delivery-demo.mp4" type="video/mp4" /></video></div>
        </section>
      </main>
    </div>
  )
}
