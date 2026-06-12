import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: '¿Qué pasa si el agente no sabe responder algo?',
    a: 'Le avisa al cliente que va a derivar la consulta, y te avisa a ti por WhatsApp. Ningún mensaje queda sin atención — siempre hay un humano disponible como respaldo.'
  },
  {
    q: '¿Cuánto tiempo tarda en estar listo?',
    a: 'En 48–72 horas con la información estándar. El proceso de configuración lo hacemos nosotros — tú solo revisas el resultado.'
  },
  {
    q: '¿Necesito tener WhatsApp Business?',
    a: 'Sí, necesitas tener WhatsApp Business activo en el número de tu negocio. Si todavía no lo tienes, te ayudamos a configurarlo sin costo adicional.'
  },
  {
    q: '¿Puedo actualizar la información si cambio precios o servicios?',
    a: 'Sí, siempre. En el plan Business las actualizaciones de contenido están incluidas. En Starter tienen un costo mínimo según el volumen de cambios.'
  },
  {
    q: '¿El agente suena como un robot?',
    a: 'No. Lo configuramos con el tono y el vocabulario que usas en tu negocio. Tus clientes van a sentir que están hablando con alguien de tu equipo — no con una máquina.'
  }
]

export default function FAQ() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const ctx = gsap.context(() => {
      gsap.fromTo(list.querySelectorAll('.faq-item'),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: list, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="faq">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Preguntas frecuentes</h2>
      </div>
      <div className="container">
        <div className="faq-list" ref={listRef}>
          {faqs.map((item, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q">{item.q}</div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
