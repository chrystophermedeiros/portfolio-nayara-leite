import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

type ImageItem = {
  src: string
  alt: string
}

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
}

const GESTURE_THRESHOLD = 8
const HORIZONTAL_BIAS = 1.15

export default function Carousel({
  images,
  visible = 3,
  className = '',
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const gestureRef = useRef<Gesture>({
    active: false,
    startX: 0,
    startY: 0,
    startScroll: 0,
    axis: 'none',
    pointerId: -1,
    moved: false,
  })

  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const syncControls = () => {
    const viewport = viewportRef.current
    if (!viewport) return

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth)

    setCanPrev(viewport.scrollLeft > 4)
    setCanNext(maxScroll - viewport.scrollLeft > 4)
  }

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(syncControls)
      : null

    syncControls()
    viewport.addEventListener('scroll', syncControls, { passive: true })
    window.addEventListener('resize', syncControls)
    resizeObserver?.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', syncControls)
      window.removeEventListener('resize', syncControls)
      resizeObserver?.disconnect()
    }
  }, [images.length, visible])

  const move = (direction: -1 | 1) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const firstItem = viewport.querySelector<HTMLElement>('.carousel__item')
    const track = viewport.querySelector<HTMLElement>('.carousel__track')
    const gap = track ? Number.parseFloat(getComputedStyle(track).gap) || 0 : 0
    const amount = Math.max(
      180,
      (firstItem?.getBoundingClientRect().width ?? viewport.clientWidth * 0.8) + gap,
    )

    viewport.scrollBy({
      left: direction * amount,
      behavior: 'smooth',
    })
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport) return

    gestureRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      startScroll: viewport.scrollLeft,
      axis: 'none',
      pointerId: event.pointerId,
      moved: false,
    }

    viewport.classList.add('is-pointer-down')
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const gesture = gestureRef.current

    if (!viewport || !gesture.active) return

    /*
     * Touch/pointer pen: deixe o navegador controlar o gesto nativamente.
     * Com touch-action: pan-x pan-y pinch-zoom, o usuário pode rolar para os
     * lados no carrossel e continuar a página normalmente no eixo vertical.
     */
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      return
    }

    const dx = event.clientX - gesture.startX
    const dy = event.clientY - gesture.startY
    const absX = Math.abs(dx)
    const absY = Math.abs(dy)

    if (gesture.axis === 'none') {
      if (Math.max(absX, absY) < GESTURE_THRESHOLD) return

      gesture.axis = absX > absY * HORIZONTAL_BIAS ? 'x' : 'y'

      if (gesture.axis === 'y') {
        // Movimento vertical do mouse não deve interferir na página.
        gesture.active = false
        viewport.classList.remove('is-dragging', 'is-pointer-down')
        return
      }

      gesture.moved = true
      viewport.classList.add('is-dragging')

      try {
        viewport.setPointerCapture(event.pointerId)
      } catch {
        // Pointer capture não é obrigatório para o funcionamento.
      }
    }

    if (gesture.axis !== 'x') return

    event.preventDefault()
    viewport.scrollLeft = gesture.startScroll - dx
  }

  const onPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const gesture = gestureRef.current

    if (!viewport) return

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId)
    }

    gesture.active = false
    gesture.axis = 'none'
    gesture.pointerId = -1
    gesture.moved = false

    viewport.classList.remove('is-dragging', 'is-pointer-down')
  }

  return (
    <div
      className={`carousel ${className} carousel--columns-${visible}`}
      style={{ '--carousel-visible': visible } as CSSProperties}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria horizontal"
    >
      <div
        ref={viewportRef}
        className="carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onLostPointerCapture={onPointerEnd}
        tabIndex={0}
      >
        <div className="carousel__track">
          {images.map((image) => (
            <div className="carousel__item" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel__controls" aria-label="Controles do carrossel">
        <button
          type="button"
          className="carousel__control"
          onClick={() => move(-1)}
          disabled={!canPrev}
          aria-label="Imagem anterior"
        >
          <ChevronLeftIcon />
        </button>

        <button
          type="button"
          className="carousel__control"
          onClick={() => move(1)}
          disabled={!canNext}
          aria-label="Próxima imagem"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  )
}
