import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const proofRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h1 = h1Ref.current
    if (!h1) return

    const words = h1.querySelectorAll('.word')
    gsap.set(words, { opacity: 0, y: 28 })
    gsap.set([pRef.current, ctasRef.current, proofRef.current], { opacity: 0, y: 16 })

    gsap.timeline({ delay: 0.15 })
      .to(words,         { opacity: 1, y: 0, stagger: 0.07, duration: 0.65, ease: 'power3.out' })
      .to(pRef.current,  { opacity: 1, y: 0, duration: 0.5,  ease: 'power2.out' }, '-=0.3')
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.25')
      .to(proofRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.15')
  }, [])

  return (
    <section className="hero">
      <div className="container">
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
          Tu asistente responde las consultas de tu negocio por WhatsApp, Instagram y más — las 24 horas, sin que tengas que estar presente.
        </p>
        <div className="hero-ctas" ref={ctasRef}>
          <a href="#cta-final" className="btn btn-primary">Agendar demo gratuita →</a>
          <a href="#como-funciona" className="btn btn-secondary">Ver cómo funciona ↓</a>
        </div>
        <div className="hero-proof" ref={proofRef}>
          <span>Sin contrato anual</span>
          <span>Configurado en menos de una semana</span>
          <span>Precios en pesos</span>
        </div>
      </div>
    </section>
  )
}
