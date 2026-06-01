import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import AtendoLogo from './AtendoLogo'

export default function Navbar() {
  const navRef    = useRef<HTMLElement>(null)
  const bubbleRef = useRef<SVGPathElement>(null)
  const textRef   = useRef<SVGTextElement>(null)
  const dotRef    = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      navRef.current.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    const bubble = bubbleRef.current
    const text   = textRef.current
    const dot    = dotRef.current
    if (!bubble || !text || !dot) return

    let pulseTween: gsap.core.Tween | null = null

    const ctx = gsap.context(() => {
      gsap.set(bubble, { opacity: 0, scale: 0.82, transformOrigin: '50% 60%' })
      gsap.set(text,   { opacity: 0, y: 5 })
      gsap.set(dot,    { opacity: 0, scale: 0, transformOrigin: 'center center' })

      gsap.timeline()
        .to(bubble, { opacity: 1, scale: 1, duration: 0.38, ease: 'back.out(1.6)' })
        .to(text,   { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, '-=0.18')
        .to(dot,    { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.2)', transformOrigin: 'center center' }, '-=0.12')
        .call(() => {
          pulseTween = gsap.to(dot, {
            scale: 1.22, duration: 1.1, ease: 'sine.inOut',
            yoyo: true, repeat: -1, transformOrigin: 'center center',
          })
        })
    })

    return () => {
      ctx.revert()
      pulseTween?.kill()
    }
  }, [])

  return (
    <nav ref={navRef} id="main-nav">
      <div className="container">
        <div className="nav-inner">
          <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} aria-label="Ir al inicio" style={{ lineHeight: 0 }}>
            <AtendoLogo className="logo-svg" bubbleRef={bubbleRef} textRef={textRef} dotRef={dotRef} />
          </a>
          <ul className="nav-links">
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
          </ul>
          <a href="#cta-final" className="btn btn-primary nav-cta">Agenda una llamada →</a>
        </div>
      </div>
    </nav>
  )
}
