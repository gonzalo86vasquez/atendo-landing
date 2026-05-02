import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    gsap.from(sec.querySelectorAll('.section-title, .section-sub, .contact-form, .cta-final-risk'), {
      opacity: 0, y: 24, stagger: 0.1, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 78%' }
    })
  }, [])

  return (
    <section className="cta-final" id="cta-final" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Tu negocio puede estar disponible mañana a las 8 AM — y también a las 2 AM.</h2>
        <p className="section-sub">Conversamos 20 minutos para entender tu negocio y ver si Atendo es el fit correcto. Sin compromiso, sin tecnicismos.</p>
        <form className="contact-form" id="contactForm" action="https://formspree.io/f/FORM_ID" method="POST">
          <input type="text" name="nombre" placeholder="Tu nombre" required autoComplete="name" />
          <input type="text" name="negocio" placeholder="Tipo de negocio (ej: clínica, taller)" required />
          <select name="mensajes" required defaultValue="">
            <option value="" disabled>Mensajes por mes (aprox.)</option>
            <option value="100-300">100 – 300</option>
            <option value="300-500">300 – 500</option>
            <option value="más de 500">Más de 500</option>
          </select>
          <input type="tel" name="telefono" placeholder="Tu teléfono" required autoComplete="tel" />
          <button type="submit" className="btn form-submit">Quiero mi llamada gratuita →</button>
        </form>
        <p className="cta-final-risk">Sin contrato anual · Sin tarjeta de crédito para la llamada · 30 días de ajustes incluidos</p>
      </div>
    </section>
  )
}
