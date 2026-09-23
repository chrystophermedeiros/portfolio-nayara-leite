import { LINKEDIN_URL } from '../lib/router'

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v11H3z"/><path d="m4 7.5 8 6 8-6"/></svg>
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.5v9M6.5 6.5v.1M11 18.5v-9m0 3.1c.7-2.7 6.5-4.2 6.5 1.6v4.3"/></svg>
}

function BehanceIcon() {
  return <span className="behance-icon" aria-hidden="true">Bē</span>
}

export default function SiteFooter() {
  return (
    <footer id="contato" className="site-footer anchor-offset">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <h2 className="site-footer__title">Vamos criar algo incrível juntos?</h2>
            <p className="site-footer__subtitle">Estou disponível para novos projetos e oportunidades.</p>
          </div>
          <a href="mailto:nayaradesigner1@gmail.com" className="site-footer__cta">Vamos conversar <span aria-hidden="true">↗</span></a>
        </div>

        <div className="site-footer__contacts">
          <a href="mailto:nayaradesigner1@gmail.com" className="footer-contact">
            <span className="footer-contact__icon"><MailIcon /></span>
            <span>nayaradesigner1@gmail.com</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-contact">
            <span className="footer-contact__icon"><LinkedInIcon /></span>
            <span>in/nayara-leite-083262205/</span>
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-contact">
            <span className="footer-contact__icon"><BehanceIcon /></span>
            <span>nayaraleite9</span>
          </a>
        </div>

        <div className="site-footer__meta">
          <span>2024 Nayara Leite. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
