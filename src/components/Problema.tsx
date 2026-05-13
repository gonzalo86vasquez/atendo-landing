import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PhoneMockup from './PhoneMockup'

gsap.registerPlugin(ScrollTrigger)

export default function Problema() {
  const sectionRef = useRef<HTMLElement>(null)
  const bulletsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const bullets = bulletsRef.current
    if (!sec || !bullets) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sec.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 78%' } }
      )
      gsap.fromTo(bullets.querySelectorAll('.problema-bullet'),
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, stagger: 0.16, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: bullets, start: 'top 82%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="problema" ref={sectionRef}>
      <div className="container">
        <p className="section-label">El problema</p>
        <h2 className="section-title">Cada WhatsApp sin respuesta<br />es un cliente que se va.</h2>
        <p className="section-sub">Tu negocio recibe mensajes cuando no puedes responder — y quien llega primero se lleva al cliente.</p>

        <div className="problema-grid">
          <div className="problema-bullets" ref={bulletsRef}>
            <div className="problema-bullet">
              <div className="icon">🌙</div>
              <p>Mensajes llegan a las 11 de la noche preguntando precios, horarios y disponibilidad — y no hay nadie para responder.</p>
            </div>
            <div className="problema-bullet">
              <div className="icon">🔁</div>
              <p>Tu equipo pasa horas respondiendo siempre las mismas preguntas, en lugar de atender a los clientes que ya están ahí.</p>
            </div>
            <div className="problema-bullet">
              <div className="icon">⚡</div>
              <p>Quien responde primero se lleva al cliente. La velocidad de respuesta es la primera ventaja competitiva real.</p>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
