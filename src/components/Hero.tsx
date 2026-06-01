import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import AtendoLogo from './AtendoLogo'

export default function Hero() {
  const bubbleRef   = useRef<SVGPathElement>(null)
  const textRef     = useRef<SVGTextElement>(null)
  const dotRef      = useRef<SVGCircleElement>(null)
  const mobileBubbleRef = useRef<SVGPathElement>(null)
  const mobileTextRef   = useRef<SVGTextElement>(null)
  const mobileDotRef    = useRef<SVGCircleElement>(null)
  const h1Ref       = useRef<HTMLHeadingElement>(null)
  const overlineRef = useRef<HTMLParagraphElement>(null)
  const pRef        = useRef<HTMLParagraphElement>(null)
  const ctasRef     = useRef<HTMLDivElement>(null)
  const proofRef    = useRef<HTMLDivElement>(null)
  const b1Ref       = useRef<HTMLDivElement>(null)
  const b2Ref       = useRef<HTMLDivElement>(null)
  const b3Ref       = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const h1     = h1Ref.current
    const bubble = bubbleRef.current
    const text   = textRef.current
    const dot    = dotRef.current
    if (!h1 || !bubble || !text || !dot) return

    const words = h1.querySelectorAll('.word')
    let bubbleLoop: gsap.core.Timeline | null = null

    const ctx = gsap.context(() => {
      gsap.set(bubble,   { opacity: 0, scale: 0.7, transformOrigin: '50% 60%' })
      gsap.set(text,     { opacity: 0, y: 8 })
      gsap.set(dot,      { opacity: 0, scale: 0, transformOrigin: 'center center' })
      gsap.set(mobileBubbleRef.current, { opacity: 0, scale: 0.7, transformOrigin: '50% 60%' })
      gsap.set(mobileTextRef.current,   { opacity: 0, y: 8 })
      gsap.set(mobileDotRef.current,    { opacity: 0, scale: 0, transformOrigin: 'center center' })
      gsap.set(words,    { opacity: 0, y: 28 })
      gsap.set([overlineRef.current, pRef.current, ctasRef.current, proofRef.current], { opacity: 0, y: 16 })
      gsap.set([b1Ref.current, b2Ref.current, b3Ref.current], { opacity: 0, y: 8 })

      gsap.timeline({ delay: 0.1 })
        .to(bubble, { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(2.0)' })
        .to(mobileBubbleRef.current, { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(2.0)' }, '<')
        .to(text,   { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }, '-=0.30')
        .to(mobileTextRef.current,   { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }, '<')
        .to(dot,    { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2.8)', transformOrigin: 'center center' }, '-=0.20')
        .to(mobileDotRef.current,    { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2.8)', transformOrigin: 'center center' }, '<')
        .to(overlineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '+=0.05')
        .to(words,  { opacity: 1, y: 0, stagger: 0.07, duration: 0.65, ease: 'power3.out' }, '-=0.2')
        .to(pRef.current,    { opacity: 1, y: 0, duration: 0.5,  ease: 'power2.out' }, '-=0.3')
        .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.25')
        .to(proofRef.current,{ opacity: 1, y: 0, duration: 0.4,  ease: 'power2.out' }, '-=0.15')
        .call(() => {
          gsap.to([dot, mobileDotRef.current], {
            scale: 1.18, duration: 1.4, ease: 'sine.inOut',
            yoyo: true, repeat: -1, transformOrigin: 'center center',
          })
          const bubbles = [b1Ref.current, b2Ref.current, b3Ref.current]
          bubbleLoop = gsap.timeline({ repeat: -1 })
          bubbles.forEach(b => {
            bubbleLoop!
              .set(b,  { y: 8 })
              .to(b,   { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
              .to({},  { duration: 2.4 })
              .to(b,   { opacity: 0, y: -6, duration: 0.35, ease: 'power2.in' })
          })
        })
    })

    return () => {
      ctx.revert()
      bubbleLoop?.kill()
    }
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">

          <div className="hero-content">
            <div className="hero-logo-mobile">
              <AtendoLogo
                className="logo-svg-hero-mobile"
                bubbleRef={mobileBubbleRef}
                textRef={mobileTextRef}
                dotRef={mobileDotRef}
              />
            </div>
            <p className="hero-overline" ref={overlineRef}>Agente IA para WhatsApp · Chile</p>
            <h1 ref={h1Ref}>
              <span className="word">Ningún</span>{' '}
              <span className="word">cliente</span>
              <br />
              <span className="color">
                <span className="word">sin</span>{' '}
                <span className="word">respuesta.</span>
              </span>
            </h1>
            <p ref={pRef}>
              Tu asistente de IA atiende las consultas de tu negocio por WhatsApp, Instagram y más — las 24 horas, sin que tengas que estar presente.
            </p>
            <div className="hero-ctas" ref={ctasRef}>
              <a href="#cta-final" className="btn btn-primary">Agenda tu llamada gratuita →</a>
              <a href="#como-funciona" className="btn btn-secondary">Mira cómo funciona ↓</a>
            </div>
            <div className="hero-proof" ref={proofRef}>
              <span>Sin contrato anual</span>
              <span>Lo configuramos en tan solo unos días</span>
              <span>Precios en pesos chilenos</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <AtendoLogo
              className="logo-svg-hero-large"
              bubbleRef={bubbleRef}
              textRef={textRef}
              dotRef={dotRef}
            />
            <div className="hero-chat">
              <div className="hero-bubble" ref={b1Ref}>¿Tienen disponibilidad el lunes? 🗓</div>
              <div className="hero-bubble" ref={b2Ref}>¿Cuánto sale una consulta inicial? 💰</div>
              <div className="hero-bubble" ref={b3Ref}>¡Gracias por responder tan rápido! 🙌</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
