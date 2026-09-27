import { useEffect, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import { ChevronLeftIcon } from './components/Icons'
import { useRoute } from './lib/router'
import HomePage from './pages/HomePage'
import ArenaPage from './pages/ArenaPage'
import DeliveryPage from './pages/DeliveryPage'
import SplendorePage from './pages/SplendorePage'

export default function App() {
  const route = useRoute()
  const [showHomeFab, setShowHomeFab] = useState(false)

  useEffect(() => {
    document.title = route.name === 'home'
      ? 'Nayara Leite — UI/UX Designer'
      : `${route.slug === 'app-delivery' ? 'App Delivery' : route.slug === 'splendore' ? 'Splendore' : 'Arena Sun7'} — Nayara Leite`
  }, [route])

  useEffect(() => {
    if (route.name !== 'project') {
      setShowHomeFab(false)
      return
    }

    const onScroll = () => setShowHomeFab(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [route.name])

  const goHome = () => {
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader page={route.name === 'home' ? 'home' : 'project'} />
      <main id="conteudo">
        {route.name === 'home' && <HomePage />}
        {route.name === 'project' && route.slug === 'arena' && <ArenaPage />}
        {route.name === 'project' && route.slug === 'app-delivery' && <DeliveryPage />}
        {route.name === 'project' && route.slug === 'splendore' && <SplendorePage />}
      </main>
      <SiteFooter />
      {route.name === 'project' && showHomeFab && (
        <button type="button" className="scroll-home-fab" onClick={goHome} aria-label="Voltar para a página inicial">
          <ChevronLeftIcon aria-hidden="true" />
          <span>Home</span>
        </button>
      )}
    </>
  )
}
