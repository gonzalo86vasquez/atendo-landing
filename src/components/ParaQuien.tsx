import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParaQuien() {
  const sectionRef = useRef<HTMLElement>(null)
  const checkRef = useRef<HTMLDivElement>(null)
  const noRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const checkList = checkRef.current
    const noList = noRef.current
    if (!sec || !checkList || !noList) return

    const ctx = gsap.context(() => {
      gsap.fromTo(sec.querySelectorAll('.section-label, .section-title'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 78%' } }
      )
      gsap.fromTo(checkList.querySelectorAll('.check-item'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.11, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: checkList, start: 'top 84%' } }
      )
      gsap.fromTo(noList.querySelectorAll('.no-item'),
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.11, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: noList, start: 'top 84%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef}>
      <div className="container">
        <p className="section-label">Para quién es</p>
        <h2 className="section-title">Atendo es para ti si…</h2>
        <div className="para-quien-grid">
          <div className="check-list" ref={checkRef}>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p>Tienes cualquier negocio local con mensajería activa — WhatsApp, Instagram, Messenger u otro canal.</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p>Recibes más de 100 mensajes al mes con preguntas que siempre son las mismas.</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p>Tu equipo pierde tiempo respondiendo mensajes en lugar de atender a los clientes presenciales.</p>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <p>Quieres responder rápido, pero no puedes estar disponible las 24 horas.</p>
            </div>
          </div>
          <div>
            <p className="no-label">No es para ti si…</p>
            <div className="no-list" ref={noRef}>
              <div className="no-item">
                <div className="no-icon">—</div>
                <p>Buscas una plataforma para gestionar tú mismo tus automatizaciones.</p>
              </div>
              <div className="no-item">
                <div className="no-icon">—</div>
                <p>Tu negocio recibe menos de 50 mensajes al mes en total.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
