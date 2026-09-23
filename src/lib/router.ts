import { useEffect, useState } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'project'; slug: 'arena' | 'app-delivery' | 'splendore' }

export const FIGMA_URL = 'https://www.figma.com/proto/PdnpkEPBK5ShBmMkZZB09B/Nayara-Leite?node-id=4-3&starting-point-node-id=4%3A3&t=ObOTXez21wIveNdU-1'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/nayara-leite-083262205'
export const MIRO_URL = 'https://miro.com/app/board/uXjVHPYKlI4=/?share_link_id=961840426543'

function parse(pathname: string): Route {
  if (pathname === '/projetos/arena') return { name: 'project', slug: 'arena' }
  if (pathname === '/projetos/app-delivery') return { name: 'project', slug: 'app-delivery' }
  if (pathname === '/projetos/splendore') return { name: 'project', slug: 'splendore' }
  return { name: 'home' }
}

export function go(to: string) {
  const [pathname, hash = ''] = to.split('#', 2)
  window.history.pushState({}, '', `${pathname}${hash ? `#${hash}` : ''}`)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.setTimeout(() => {
    if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 0)
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.pathname))
  useEffect(() => {
    const onPopState = () => setRoute(parse(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  return route
}
