import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    gsap.from(sec.querySelectorAll('.section-title, .section-sub, .cta-final-btns, .cta-final-risk'), {
      opacity: 0, y: 24, stagger: 0.1, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 78%' }
    })
  }, [])

  return (
    <section className="cta-final" id="cta-final" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Tu negocio puede estar disponible mañana a las 8 AM — y también a las 2 AM.</h2>
        <p className="section-sub">Agenda una demo gratuita de 20 minutos. Sin compromiso, sin tecnicismos. Te mostramos exactamente cómo quedaría el asistente para tu negocio.</p>
        <div className="cta-final-btns">
          <a href="https://calendly.com/atendo" className="btn btn-primary">Agendar demo gratuita →</a>
          <a href="https://wa.me/56900000000?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Atendo." className="btn btn-ghost">O escríbenos por WhatsApp</a>
        </div>
        <p className="cta-final-risk">Sin contrato anual · Sin tarjeta de crédito para la demo · 30 días de ajustes incluidos</p>
      </div>
    </section>
  )
}
