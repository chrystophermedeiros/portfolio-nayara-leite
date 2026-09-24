import { useState } from 'react'
import { FIGMA_URL } from '../lib/router'
import Carousel from '../components/Carousel'
import { LinkButton } from '../components/Button'
import Tag from '../components/Tag'
import { ArrowUpRightIcon } from '../components/Icons'

const screens = [
  ['/assets/splendore-screen-1.png', 'Seu pedido'],
  ['/assets/splendore-screen-2.png', 'Produto'],
  ['/assets/splendore-screen-3.png', 'Carrinho'],
  ['/assets/splendore-screen-4.png', 'Pagamento'],
]
const mapScreens = screens.map(([src, alt]) => ({ src, alt }))

function PurchaseFlow() {
  const [confirmed, setConfirmed] = useState(false)
  return (
    <div className="splendore-flow">
      <div className="splendore-flow__top">
        <div>
          <p className="eyebrow">FINALIZAR COMPRA</p>
          <h3>{confirmed ? 'Pedido confirmado!' : 'Resumo da compra'}</h3>
        </div>
        <span>{confirmed ? '2/2' : '1/2'}</span>
      </div>
      {confirmed ? (
        <div className="confirmed-state">
          <div className="confirmed-state__icon">✓</div>
          <h4>Pedido confirmado!</h4>
          <p>Seu pedido foi recebido e está pronto para acompanhamento.</p>
          <button className="flow-action" onClick={() => setConfirmed(false)}>Voltar para o resumo</button>
        </div>
      ) : (
        <div className="splendore-flow__body">
          <div className="flow-summary-line"><span>Produto</span><strong>Tênis Nike Court Vision Alta</strong></div>
          <div className="flow-summary-line"><span>Tamanho</span><strong>38</strong></div>
          <div className="flow-summary-line"><span>Entrega</span><strong>23 de Julho de 2026</strong></div>
          <div className="flow-summary-line"><span>Total</span><strong>R$ 249,47</strong></div>
          <button className="flow-action" onClick={() => setConfirmed(true)}>Finalizar compra <ArrowUpRightIcon aria-hidden="true" /></button>
        </div>
      )}
    </div>
  )
}

export default function SplendorePage() {
  return (
    <div className="project-page project-page--splendore">
      <section className="case-hero case-hero--splendore-detail">
        <div className="case-detail-shell">
          <div className="case-detail-copy">
            <Tag>UI DESIGN · MOBILE</Tag>
            <h1>Splendore</h1>
            <p>E-commerce de tênis com navegação intuitiva e experiência de compra fluida.</p>
            <div className="case-hero__actions"><LinkButton href={FIGMA_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Abrir projeto no Figma <ArrowUpRightIcon aria-hidden="true" /></LinkButton></div>
          </div>
          <div className="splendore-detail-hero"><img src="/assets/splendore-hero.png" alt="Colagem principal do Splendore" /></div>
        </div>
      </section>

      <main className="case-detail-body">
        <section className="splendore-overview case-shell">
          <div>
            <p className="eyebrow">SOBRE O PROJETO</p>
            <h2>Objetivo</h2>
            <p>Construir um e-commerce mobile visualmente leve, com navegação clara e etapas de compra fáceis de entender.</p>
            <div className="tag-row"><Tag>Figma</Tag><Tag>Mobile</Tag><Tag>E-commerce</Tag></div>
          </div>
          
        </section>

        <section className="case-shell splendore-screens-section">
          <p className="eyebrow">TELAS DO APLICATIVO</p>
          <h2>Interface e fluxo</h2>
          <Carousel images={mapScreens} visible={3} className="carousel--splendore" />
        </section>

        
      </main>
    </div>
  )
}
