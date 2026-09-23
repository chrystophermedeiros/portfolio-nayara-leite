import { useEffect } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import { useRoute } from './lib/router'
import HomePage from './pages/HomePage'
import ArenaPage from './pages/ArenaPage'
import DeliveryPage from './pages/DeliveryPage'
import SplendorePage from './pages/SplendorePage'

export default function App() {
  const route = useRoute()

  useEffect(() => {
    document.title = route.name === 'home'
      ? 'Nayara Leite — UI/UX Designer'
      : `${route.slug === 'app-delivery' ? 'App Delivery' : route.slug === 'splendore' ? 'Splendore' : 'Arena Sun7'} — Nayara Leite`
  }, [route])

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
    </>
  )
}
