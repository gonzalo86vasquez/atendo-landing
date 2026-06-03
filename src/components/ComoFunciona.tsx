import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const timeline = timelineRef.current
    const cta = ctaRef.current
    if (!sec || !timeline || !cta) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sec.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 78%' } }
      )

      timeline.querySelectorAll('.timeline-step').forEach((step) => {
        const isLeft = step.classList.contains('timeline-step--left')
        gsap.fromTo(
          step.querySelector('.step-card'),
          { opacity: 0, x: isLeft ? -28 : 28 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: step, start: 'top 83%' } }
        )
        gsap.fromTo(
          step.querySelector('.timeline-node'),
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: step, start: 'top 83%' } }
        )
      })

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

        <div className="steps-timeline" ref={timelineRef}>

          <div className="timeline-step timeline-step--left">
            <div className="step-card">
              <span className="step-paso">PASO 01</span>
              <h3>Envíanos tus documentos</h3>
              <p>Precios, horarios, preguntas frecuentes — en cualquier formato. Lo que hoy les dices a tus clientes.</p>
              <span className="step-tag">menos de 10 min</span>
            </div>
            <div className="timeline-node">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
          </div>

          <div className="timeline-step timeline-step--right">
            <div className="timeline-node">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
            <div className="step-card">
              <span className="step-paso">PASO 02</span>
              <h3>Entrenamos a tu asistente</h3>
              <p>Configuramos el asistente con la personalidad y la información de tu negocio. Lo revisas y nos dices qué ajustar.</p>
              <span className="step-tag">2–3 días hábiles</span>
            </div>
          </div>

          <div className="timeline-step timeline-step--left">
            <div className="step-card">
              <span className="step-paso">PASO 03</span>
              <h3>Tu asistente responde solo</h3>
              <p>Desde el día 1, atiende a tus clientes por WhatsApp las 24 horas. Puedes revisar o retomar la conversación cuando quieras.</p>
              <span className="step-tag">desde el día 1</span>
            </div>
            <div className="timeline-node">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
            </div>
          </div>

        </div>

        <div className="steps-cta" ref={ctaRef}>
          <a href="#cta-final" className="btn btn-primary">Agendar demo gratuita →</a>
        </div>
      </div>
    </section>
  )
}
