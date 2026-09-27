import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
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
  pointerType: string
}

export default function Carousel({
  images,
  visible = 3,
  className = '',
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)

  const gesture = useRef<Gesture>({
    active: false,
    startX: 0,
    startY: 0,
    startScroll: 0,
    axis: 'none',
    pointerId: -1,
    moved: false,
    pointerType: '',
  })

  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const syncControls = () => {
    const el = viewportRef.current

    if (!el) return

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)

    setCanPrev(el.scrollLeft > 4)
    setCanNext(maxScroll - el.scrollLeft > 4)
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

  const move = (direction: -1 | 1) => {
    const el = viewportRef.current

    if (!el) return

    const first = el.querySelector<HTMLElement>('.carousel__item')
    const track = el.querySelector<HTMLElement>('.carousel__track')

    const gap = track
      ? parseFloat(getComputedStyle(track).gap) || 0
      : 0

    const amount = Math.max(
      180,
      (first?.offsetWidth ?? el.clientWidth * 0.42) + gap,
    )

    el.scrollBy({
      left: direction * amount,
      behavior: 'smooth',
    })
  }

  const onPointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const el = viewportRef.current

    if (!el) return

    const pointerType = event.pointerType || 'mouse'

    gesture.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      startScroll: el.scrollLeft,
      axis: 'none',
      pointerId: event.pointerId,
      moved: false,
      pointerType,
    }

    if (pointerType !== 'touch') {
      el.classList.add('is-pointer-down')
    }
  }

  const onPointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const el = viewportRef.current
    const currentGesture = gesture.current

    if (!el || !currentGesture.active) return

    const dx = event.clientX - currentGesture.startX
    const dy = event.clientY - currentGesture.startY

    const absX = Math.abs(dx)
    const absY = Math.abs(dy)
    const distance = Math.max(absX, absY)

    if (currentGesture.axis === 'none') {
      if (distance < 8) return

      /*
       * Só assumimos controle horizontal quando o movimento
       * realmente for predominantemente horizontal.
       */
      currentGesture.axis =
        absX > absY * 1.18
          ? 'x'
          : 'y'

      if (currentGesture.axis === 'x') {
        currentGesture.moved = true

        try {
          el.setPointerCapture(event.pointerId)
        } catch {
          // Pointer capture é opcional.
        }

        el.classList.add('is-dragging')
      } else {
        /*
         * Movimento vertical:
         * não interfere no scroll da página.
         */
        currentGesture.active = false

        el.classList.remove(
          'is-dragging',
          'is-pointer-down',
        )

        return
      }
    }

    if (currentGesture.axis !== 'x') return

    /*
     * Somente o gesto horizontal recebe preventDefault.
     * Scroll vertical da página continua livre.
     */
    event.preventDefault()

    el.scrollLeft = currentGesture.startScroll - dx
  }

  const onPointerEnd = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const el = viewportRef.current
    const currentGesture = gesture.current

    if (!el) return

    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId)
    }

    currentGesture.active = false
    currentGesture.axis = 'none'
    currentGesture.pointerId = -1

    el.classList.remove(
      'is-dragging',
      'is-pointer-down',
    )
  }

  return (
    <div
      className={`carousel ${className} carousel--columns-${visible}`}
      aria-roledescription="carrossel"
    >
      <div
        ref={viewportRef}
        className="carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        tabIndex={0}
        role="region"
        aria-label="Galeria horizontal"
      >
        <div className="carousel__track">
          {images.map((image) => (
            <div
              key={image.src}
              className="carousel__item"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="carousel__controls"
        aria-label="Controles do carrossel"
      >
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