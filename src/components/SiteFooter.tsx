import { LINKEDIN_URL } from '../lib/router'
import { ArrowUpRightIcon } from './Icons'


export default function SiteFooter() {
  return (
    <footer id="contato" className="site-footer anchor-offset">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <h2 className="site-footer__title">Vamos criar algo incrível juntos?</h2>
            <p className="site-footer__subtitle">Estou disponível para novos projetos e oportunidades.</p>
          </div>
          <a href="mailto:nayaradesigner1@gmail.com" className="site-footer__cta">Vamos conversar <ArrowUpRightIcon aria-hidden="true" /></a>
        </div>

        <div className="site-footer__contacts">
          <a href="mailto:nayaradesigner1@gmail.com" className="footer-contact">
            <span className="footer-contact__icon"><img src="/assets/icons/email-light.svg" alt="" aria-hidden="true" /></span>
            <span>nayaradesigner1@gmail.com</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-contact">
            <span className="footer-contact__icon"><img src="/assets/icons/linkedin-light.svg" alt="" aria-hidden="true" /></span>
            <span>in/nayara-leite-083262205/</span>
          </a>
          <a href="https://www.behance.net/nayaraleite9" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-contact">
            <span className="footer-contact__icon"><img src="/assets/icons/behance-light.svg" alt="" aria-hidden="true" /></span>
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
