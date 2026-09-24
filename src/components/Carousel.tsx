import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

type ImageItem = { src: string; alt: string }

type Props = {
  images: ImageItem[]
  visible?: number
  className?: string
}

type Gesture = {
  active: boolean
  startX: number
  startY: number
  startScroll: number
  axis: 'none' | 'x' | 'y'
  pointerId: number
  moved: boolean
  pointerType: string
}

export default function Carousel({ images, visible = 3, className = '' }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const gesture = useRef<Gesture>({ active: false, startX: 0, startY: 0, startScroll: 0, axis: 'none', pointerId: -1, moved: false, pointerType: '' })
  const suppressClick = useRef(false)
  const [active, setActive] = useState<ImageItem | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const syncControls = () => {
    const el = viewportRef.current
    if (!el) return
    const max = Math.max(0, el.scrollWidth - el.clientWidth)
    setCanPrev(el.scrollLeft > 4)
    setCanNext(max - el.scrollLeft > 4)
  }

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const update = () => syncControls()
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [images.length, visible])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!active) return
      const index = images.findIndex((item) => item.src === active.src)
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive(images[(index + 1) % images.length])
      if (event.key === 'ArrowLeft') setActive(images[(index - 1 + images.length) % images.length])
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    if (active) document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [active, images])

  const move = (direction: -1 | 1) => {
    const el = viewportRef.current
    if (!el) return
    const first = el.querySelector<HTMLElement>('.carousel__item')
    const track = el.querySelector<HTMLElement>('.carousel__track')
    const gap = track ? (parseFloat(getComputedStyle(track).gap) || 0) : 0
    const amount = Math.max(180, (first?.offsetWidth ?? el.clientWidth * 0.42) + gap)
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    if (!el) return
    const pointerType = event.pointerType || 'mouse'
    gesture.current = {
      active: pointerType !== 'touch',
      startX: event.clientX,
      startY: event.clientY,
      startScroll: el.scrollLeft,
      axis: 'none',
      pointerId: event.pointerId,
      moved: false,
      pointerType,
    }
    suppressClick.current = false
    if (pointerType !== 'touch') el.classList.add('is-pointer-down')
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    const g = gesture.current
    if (!el || !g.active || g.pointerType === 'touch') return

    const dx = event.clientX - g.startX
    const dy = event.clientY - g.startY

    if (g.axis === 'none') {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 10) return
      g.axis = Math.abs(dx) > Math.abs(dy) * 1.35 ? 'x' : 'y'
      if (g.axis === 'x') {
        g.moved = true
        try { el.setPointerCapture(event.pointerId) } catch { /* pointer capture is optional */ }
        el.classList.add('is-dragging')
      } else {
        el.classList.remove('is-dragging')
      }
    }

    if (g.axis !== 'x') return
    event.preventDefault()
    el.scrollLeft = g.startScroll - dx
  }

  const onPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = viewportRef.current
    const g = gesture.current
    if (!el) return
    if (g.pointerType !== 'touch' && g.axis === 'x' && el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId)
    suppressClick.current = g.moved
    gesture.current.active = false
    gesture.current.axis = 'none'
    gesture.current.pointerId = -1
    el.classList.remove('is-dragging', 'is-pointer-down')
    window.setTimeout(() => { suppressClick.current = false }, 60)
  }

  return (
    <>
      <div className={`carousel ${className} carousel--columns-${visible}`} aria-roledescription="carrossel">
        <div
          className="carousel__viewport"
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
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
          <button type="button" className="carousel__control" onClick={() => move(-1)} disabled={!canPrev} aria-label="Imagem anterior">
            <ChevronLeftIcon />
          </button>
          <button type="button" className="carousel__control" onClick={() => move(1)} disabled={!canNext} aria-label="Próxima imagem">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada" onClick={() => setActive(null)}>
          <button className="lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Fechar">Fechar</button>
          <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={(event) => { event.stopPropagation(); const index = images.findIndex((item) => item.src === active.src); setActive(images[(index - 1 + images.length) % images.length]) }} aria-label="Imagem anterior"><ChevronLeftIcon /></button>
          <img src={active.src} alt={active.alt} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox__nav lightbox__nav--next" type="button" onClick={(event) => { event.stopPropagation(); const index = images.findIndex((item) => item.src === active.src); setActive(images[(index + 1) % images.length]) }} aria-label="Próxima imagem"><ChevronRightIcon /></button>
        </div>
      )}
    </>
  )
}
