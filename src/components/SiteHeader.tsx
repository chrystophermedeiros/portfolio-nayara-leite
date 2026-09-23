import { useEffect, useState } from 'react'
import { go } from '../lib/router'
import { LinkButton } from './Button'

type Props = { page: 'home' | 'project' }

export default function SiteHeader({ page }: Props) {
  const [open, setOpen] = useState(false)
  const nav = [
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Contato', href: '/#contato' },
  ]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handle = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        go('/')
        window.setTimeout(() => document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30)
      } else {
        document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    go(href)
  }

  return (
    <header className={`site-header ${page === 'home' ? 'site-header--home' : 'site-header--project'}`}>
      <div className="site-header__inner">
        {page === 'project' ? (
          <button onClick={() => handle('/')} className="back-button" aria-label="Voltar para a página inicial">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 4-6 6 6 6" /></svg>
          </button>
        ) : (
          <button onClick={() => handle('/')} className="brandmark" aria-label="Ir para a página inicial">NL</button>
        )}

        <nav className="site-header__desktop" aria-label="Navegação principal">
          {nav.map((item) => (
            <button
              key={item.label}
              onClick={() => handle(item.href)}
              className={`site-nav-link ${page === 'project' && item.label === 'Projetos' ? 'is-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <LinkButton href="mailto:nayaradesigner1@gmail.com" variant="dark" className="header-cta">Vamos conversar <span aria-hidden="true">↗</span></LinkButton>
        </nav>

        <button
          className="mobile-menu-trigger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`hamburger ${open ? 'hamburger--open' : ''}`} aria-hidden="true"><span /><span /><span /></span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label="Menu mobile">
            {nav.map((item) => <button key={item.label} onClick={() => handle(item.href)}>{item.label}</button>)}
            <a href="mailto:nayaradesigner1@gmail.com" onClick={() => setOpen(false)}>Vamos conversar ↗</a>
          </nav>
        </div>
      )}
    </header>
  )
}
