import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Beneficios() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const grid = gridRef.current
    if (!sec || !grid) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sec.querySelectorAll('.section-label, .section-title'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 78%' } }
      )
      gsap.fromTo(grid.querySelectorAll('.beneficio'),
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, stagger: 0.14, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: grid, start: 'top 82%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="beneficios" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Por qué Atendo</p>
        <h2 className="section-title">No es un chatbot.<br />Es tu negocio disponible 24/7.</h2>
        <div className="beneficios-grid" ref={gridRef}>
          <div className="beneficio">
            <div className="beneficio-icon">🌙</div>
            <h3>Disponible a las 2 AM</h3>
            <p>Responde preguntas, entrega precios y agenda citas fuera del horario comercial — cuando tu competencia duerme.</p>
          </div>
          <div className="beneficio">
            <div className="beneficio-icon">💬</div>
            <h3>Respuestas precisas, no inventadas</h3>
            <p>El asistente usa solo la información que tú le das. No improvisa, no adivina. Si no sabe, te avisa.</p>
          </div>
          <div className="beneficio">
            <div className="beneficio-icon">🛠️</div>
            <h3>Nosotros lo configuramos todo</h3>
            <p>No hay plataformas que entender ni configuraciones que hacer. Tú envías la info, nosotros hacemos el resto.</p>
          </div>
          <div className="beneficio">
            <div className="beneficio-icon">📋</div>
            <h3>Cada conversación, un contacto nuevo</h3>
            <p>Atendo registra automáticamente a cada persona que te escribe: nombre, intención de compra y si está lista para cerrar. Sin formularios, sin trabajo manual.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
