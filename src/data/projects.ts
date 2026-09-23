export type ProjectSlug = 'arena' | 'app-delivery' | 'splendore'

export type Project = {
  slug: ProjectSlug
  title: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'arena',
    title: 'Arena Sun7',
    description: 'Redesign da plataforma de agendamento de quadras esportivas, melhorando a navegação, a organização das informações e a experiência de reserva.',
    image: '/assets/arena-hero-trim.png',
  },
  {
    slug: 'app-delivery',
    title: 'App Delivery',
    description: 'Aplicativo de delivery com foco em navegação simples e rápida, facilitando o pedido do usuário.',
    image: '/assets/delivery-card-trim.png',
  },
  {
    slug: 'splendore',
    title: 'Splendore',
    description: 'E-commerce de tênis com navegação intuitiva e experiência de compra fluida.',
    image: '/assets/splendore-card-trim.png',
  },
]
