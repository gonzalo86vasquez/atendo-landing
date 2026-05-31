import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const grid = gridRef.current
    const cta = ctaRef.current
    if (!sec || !grid || !cta) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sec.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 78%' } }
      )
      gsap.fromTo(grid.querySelectorAll('.step'),
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, stagger: 0.18, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: grid, start: 'top 82%' } }
      )
      gsap.fromTo(cta,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5,
          scrollTrigger: { trigger: cta, start: 'top 92%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="como-funciona" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Cómo funciona</p>
        <h2 className="section-title">Listo en menos de una semana,<br />en 3 pasos.</h2>
        <p className="section-sub">No hay plataforma que aprender ni configuración técnica. Nosotros lo hacemos todo.</p>
        <div className="steps-grid" ref={gridRef}>
          <div className="step">
            <div className="step-number">01</div>
            <h3>Envíanos tus documentos</h3>
            <p>Precios, horarios, preguntas frecuentes, lo que hoy les dices a tus clientes — en cualquier formato.</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Entrenamos a tu asistente</h3>
            <p>Configuramos el asistente con la voz y la información de tu negocio. Lo revisas y nos dices qué ajustar.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Tu asistente responde solo</h3>
            <p>Desde el día 1, atiende a tus clientes por WhatsApp, Instagram y más, las 24 horas. Puedes revisar o retomar la conversación cuando quieras.</p>
          </div>
        </div>
        <div className="steps-cta" ref={ctaRef}>
          <a href="#cta-final" className="btn btn-primary">Agendar demo gratuita →</a>
        </div>
      </div>
    </section>
  )
}
