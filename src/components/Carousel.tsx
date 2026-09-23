import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from 'react'

type ImageItem = { src: string; alt: string }

type Props = {
  images: ImageItem[]
  visible?: number
  className?: string
}

export default function Carousel({ images, visible = 3, className = '' }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const pointer = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  const suppressClick = useRef(false)
  const [active, setActive] = useState<ImageItem | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(images.length > 1)

  const syncControls = () => {
    const el = viewportRef.current
    if (!el) return
    const max = Math.max(0, el.scrollWidth - el.clientWidth)
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < max - 4)
  }

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    syncControls()
    const onScroll = () => syncControls()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [images])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!active) return
      const index = images.indexOf(active)
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive(images[(index + 1) % images.length])
      if (event.key === 'ArrowLeft') setActive(images[(index - 1 + images.length) % images.length])
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, images])

  const move = (direction: -1 | 1) => {
    const el = viewportRef.current
    if (!el) return
    const amount = Math.max(220, el.clientWidth * (window.innerWidth <= 720 ? 0.88 : 0.72))
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    if (!el) return
    pointer.current = { active: true, startX: event.clientX, startScroll: el.scrollLeft, moved: false }
    el.setPointerCapture(event.pointerId)
    el.classList.add('is-dragging')
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    if (!el || !pointer.current.active) return
    const delta = event.clientX - pointer.current.startX
    if (Math.abs(delta) > 5) pointer.current.moved = true
    el.scrollLeft = pointer.current.startScroll - delta
  }

  const onPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    if (!el) return
    if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId)
    suppressClick.current = pointer.current.moved
    pointer.current.active = false
    el.classList.remove('is-dragging')
    window.setTimeout(() => { suppressClick.current = false }, 0)
  }

  const onWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    if (!el) return
    const vertical = Math.abs(event.deltaY) > Math.abs(event.deltaX)
    if (!vertical || el.scrollWidth <= el.clientWidth) return
    const max = el.scrollWidth - el.clientWidth
    const next = Math.max(0, Math.min(max, el.scrollLeft + event.deltaY))
    if (next !== el.scrollLeft) {
      event.preventDefault()
      el.scrollLeft = next
    }
  }

  return (
    <>
      <div
        className={`carousel ${className} carousel--columns-${visible}`}
        aria-roledescription="carrossel"
      >
        <div
          className="carousel__viewport"
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onWheel={onWheel}
          tabIndex={0}
          aria-label="Galeria horizontal"
        >
          <div className="carousel__track">
            {images.map((image) => (
              <button
                key={image.src}
                type="button"
                className="carousel__item"
                onClick={() => {
                  if (suppressClick.current) return
                  setActive(image)
                }}
                aria-label={`Ampliar ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" draggable={false} />
              </button>
            ))}
          </div>
        </div>
        <div className="carousel__controls" aria-label="Controles do carrossel">
          <button type="button" className="carousel__control" onClick={() => move(-1)} disabled={!canPrev} aria-label="Passar para a esquerda">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="carousel__control" onClick={() => move(1)} disabled={!canNext} aria-label="Passar para a direita">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada" onClick={() => setActive(null)}>
          <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Fechar">Fechar</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(event) => { event.stopPropagation(); const index = images.indexOf(active); setActive(images[(index - 1 + images.length) % images.length]) }} aria-label="Imagem anterior">‹</button>
          <img src={active.src} alt={active.alt} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox__nav lightbox__nav--next" onClick={(event) => { event.stopPropagation(); const index = images.indexOf(active); setActive(images[(index + 1) % images.length]) }} aria-label="Próxima imagem">›</button>
        </div>
      )}
    </>
  )
}
