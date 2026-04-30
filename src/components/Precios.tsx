import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Precios() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const grid = gridRef.current
    if (!sec || !grid) return

    gsap.from(sec.querySelectorAll('.section-label, .section-title, .section-sub'), {
      opacity: 0, y: 24, stagger: 0.09, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 78%' }
    })
    gsap.from(grid.querySelectorAll('.plan'), {
      opacity: 0, y: 36, stagger: 0.14, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: grid, start: 'top 82%' }
    })
  }, [])

  return (
    <section className="precios" id="precios" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Precios</p>
        <h2 className="section-title">Claros, en pesos,<br />sin sorpresas.</h2>
        <p className="section-sub">Sin contrato anual. Sin costos ocultos. Puedes pausar o cancelar cuando quieras.</p>
        <div className="precios-grid" ref={gridRef}>
          <div className="plan">
            <div className="plan-name">Starter</div>
            <div className="plan-desc">Para negocios con bajo volumen de mensajes o que están empezando.</div>
            <div className="plan-price"><strong>$35.000</strong><span>/mes</span></div>
            <div className="plan-setup">+ $150.000 configuración (pago único)</div>
            <div className="plan-features">
              <div className="plan-feature">1 agente configurado</div>
              <div className="plan-feature">Hasta 500 conversaciones/mes</div>
              <div className="plan-feature">Soporte por WhatsApp</div>
            </div>
            <a href="#cta-final" className="btn btn-secondary plan-cta">Empezar →</a>
          </div>
          <div className="plan featured">
            <div className="plan-badge">Más elegido</div>
            <div className="plan-name">Business</div>
            <div className="plan-desc">Para negocios con mayor volumen de consultas o que ya tienen equipo de atención.</div>
            <div className="plan-price"><strong>$85.000</strong><span>/mes</span></div>
            <div className="plan-setup">+ $450.000 configuración (pago único)</div>
            <div className="plan-features">
              <div className="plan-feature">1 agente configurado</div>
              <div className="plan-feature">Conversaciones ilimitadas</div>
              <div className="plan-feature">Actualizaciones de contenido incluidas</div>
              <div className="plan-feature">Soporte prioritario</div>
            </div>
            <a href="#cta-final" className="btn btn-primary plan-cta">Empezar →</a>
          </div>
          <div className="plan">
            <div className="plan-name">Enterprise</div>
            <div className="plan-desc">Para negocios con múltiples sucursales o requerimientos a medida.</div>
            <div className="plan-price"><strong>A convenir</strong></div>
            <div className="plan-setup">&nbsp;</div>
            <div className="plan-features">
              <div className="plan-feature">Configuración a medida</div>
              <div className="plan-feature">Múltiples agentes</div>
              <div className="plan-feature">Onboarding presencial o por videollamada</div>
            </div>
            <a href="#cta-final" className="btn btn-secondary plan-cta">Conversar →</a>
          </div>
        </div>
        <p className="precios-note">Si en los primeros 30 días el agente no está respondiendo como esperabas, lo ajustamos sin costo adicional.</p>
      </div>
    </section>
  )
}
