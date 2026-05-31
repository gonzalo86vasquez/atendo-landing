import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ComoFunciona() {
  const sectionRef       = useRef<HTMLElement>(null)
  const line1Ref         = useRef<SVGPathElement>(null)
  const line2Ref         = useRef<SVGPathElement>(null)
  const node2InactiveRef = useRef<SVGGElement>(null)
  const node2ActiveRef   = useRef<SVGGElement>(null)
  const node3InactiveRef = useRef<SVGGElement>(null)
  const node3ActiveRef   = useRef<SVGGElement>(null)
  const step1Ref         = useRef<HTMLDivElement>(null)
  const step2Ref         = useRef<HTMLDivElement>(null)
  const step3Ref         = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return

    const ctx = gsap.context(() => {
      // Header entrance — all screen sizes
      gsap.fromTo(
        sec.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 78%' } }
      )

      const mm = gsap.matchMedia()

      // ── DESKTOP: scroll-driven roadmap ──
      mm.add('(min-width: 769px)', () => {
        const l1   = line1Ref.current!
        const l2   = line2Ref.current!
        const len1 = l1.getTotalLength()
        const len2 = l2.getTotalLength()

        gsap.set(l1, { strokeDasharray: len1, strokeDashoffset: len1 })
        gsap.set(l2, { strokeDasharray: len2, strokeDashoffset: len2 })
        gsap.set([node2ActiveRef.current, node3ActiveRef.current], { opacity: 0 })
        gsap.set([step2Ref.current, step3Ref.current], { opacity: 0, y: 28 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            pin: true,
            start: 'top top',
            end: '+=220%',
            scrub: 1.2,
          },
        })

        tl
          .to({}, { duration: 0.25 })

          // Step 1 → Step 2
          .to(l1, { strokeDashoffset: 0, ease: 'none', duration: 0.8 })
          .to(step1Ref.current, { opacity: 0, y: -24, duration: 0.35, ease: 'power2.in' }, '-=0.45')
          .to(node2InactiveRef.current, { opacity: 0, duration: 0.3 }, '-=0.25')
          .to(node2ActiveRef.current,   { opacity: 1, duration: 0.3 }, '<')
          .to(step2Ref.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')

          .to({}, { duration: 0.35 })

          // Step 2 → Step 3
          .to(l2, { strokeDashoffset: 0, ease: 'none', duration: 0.8 })
          .to(step2Ref.current, { opacity: 0, y: -24, duration: 0.35, ease: 'power2.in' }, '-=0.45')
          .to(node3InactiveRef.current, { opacity: 0, duration: 0.3 }, '-=0.25')
          .to(node3ActiveRef.current,   { opacity: 1, duration: 0.3 }, '<')
          .to(step3Ref.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')

          .to({}, { duration: 0.4 })
      })

      // ── MOBILE: simple card entrance ──
      mm.add('(max-width: 768px)', () => {
        gsap.fromTo(
          sec.querySelectorAll('.cf-card'),
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, stagger: 0.16, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: sec, start: 'top 80%' } }
        )
      })
    }, sec)

    return () => ctx.revert()
  }, [])

  return (
    <section id="como-funciona" ref={sectionRef} className="cf-section">

      {/* Header */}
      <div className="container cf-header">
        <p className="section-label">Cómo funciona</p>
        <h2 className="section-title">Listo en menos de una semana,<br />en 3 pasos.</h2>
        <p className="section-sub">No hay plataforma que aprender ni configuración técnica. Nosotros lo hacemos todo.</p>
      </div>

      {/* Desktop: SVG roadmap + step panel */}
      <div className="cf-body">
        <div className="container">
          <div className="cf-inner">

            {/* SVG Roadmap */}
            <div className="cf-roadmap">
              <svg className="cf-svg" viewBox="0 0 120 280"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

                {/* ── NODE 1 — active by default ── */}
                <circle cx="60" cy="47" r="26" fill="#1B4332" />
                <text x="60" y="47" textAnchor="middle" dominantBaseline="central"
                  fontFamily="Nunito,sans-serif" fontWeight="800" fontSize="18"
                  fill="#FAFAF7">01</text>
                <circle cx="82" cy="67" r="7" fill="#1B4332" />
                <circle cx="82" cy="67" r="5.5" fill="#E8571A" />

                {/* Line 1 */}
                <path ref={line1Ref} d="M 60 73 L 60 114"
                  stroke="#E8571A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* ── NODE 2 — inactive / active overlaid ── */}
                <g ref={node2InactiveRef}>
                  <circle cx="60" cy="140" r="26"
                    fill="rgba(27,67,50,0.06)" stroke="rgba(27,67,50,0.2)" strokeWidth="1.5" />
                  <text x="60" y="140" textAnchor="middle" dominantBaseline="central"
                    fontFamily="Nunito,sans-serif" fontWeight="800" fontSize="18"
                    fill="rgba(27,67,50,0.28)">02</text>
                </g>
                <g ref={node2ActiveRef}>
                  <circle cx="60" cy="140" r="26" fill="#1B4332" />
                  <text x="60" y="140" textAnchor="middle" dominantBaseline="central"
                    fontFamily="Nunito,sans-serif" fontWeight="800" fontSize="18"
                    fill="#FAFAF7">02</text>
                  <circle cx="82" cy="160" r="7" fill="#1B4332" />
                  <circle cx="82" cy="160" r="5.5" fill="#E8571A" />
                </g>

                {/* Line 2 */}
                <path ref={line2Ref} d="M 60 166 L 60 207"
                  stroke="#E8571A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* ── NODE 3 — inactive / active overlaid ── */}
                <g ref={node3InactiveRef}>
                  <circle cx="60" cy="233" r="26"
                    fill="rgba(27,67,50,0.06)" stroke="rgba(27,67,50,0.2)" strokeWidth="1.5" />
                  <text x="60" y="233" textAnchor="middle" dominantBaseline="central"
                    fontFamily="Nunito,sans-serif" fontWeight="800" fontSize="18"
                    fill="rgba(27,67,50,0.28)">03</text>
                </g>
                <g ref={node3ActiveRef}>
                  <circle cx="60" cy="233" r="26" fill="#1B4332" />
                  <text x="60" y="233" textAnchor="middle" dominantBaseline="central"
                    fontFamily="Nunito,sans-serif" fontWeight="800" fontSize="18"
                    fill="#FAFAF7">03</text>
                  <circle cx="82" cy="253" r="7" fill="#1B4332" />
                  <circle cx="82" cy="253" r="5.5" fill="#E8571A" />
                </g>

              </svg>
            </div>

            {/* Step panel */}
            <div className="cf-panel">
              <div ref={step1Ref} className="cf-step">
                <span className="cf-step-num">01</span>
                <h3 className="cf-step-title">Envíanos tus documentos</h3>
                <p className="cf-step-desc">Precios, horarios, preguntas frecuentes, lo que hoy les dices a tus clientes — en cualquier formato.</p>
              </div>
              <div ref={step2Ref} className="cf-step">
                <span className="cf-step-num">02</span>
                <h3 className="cf-step-title">Entrenamos a tu asistente</h3>
                <p className="cf-step-desc">Configuramos el asistente con la voz y la información de tu negocio. Lo revisas y nos dices qué ajustar.</p>
              </div>
              <div ref={step3Ref} className="cf-step">
                <span className="cf-step-num">03</span>
                <h3 className="cf-step-title">Tu asistente responde solo</h3>
                <p className="cf-step-desc">Desde el día 1, atiende a tus clientes por WhatsApp, Instagram y más, las 24 horas. Puedes revisar o retomar la conversación cuando quieras.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile: cards */}
      <div className="cf-mobile-wrap">
        <div className="container">
          <div className="cf-mobile">
            <div className="cf-card">
              <div className="cf-card-num">01</div>
              <h3 className="cf-card-title">Envíanos tus documentos</h3>
              <p className="cf-card-desc">Precios, horarios, preguntas frecuentes, lo que hoy les dices a tus clientes — en cualquier formato.</p>
            </div>
            <div className="cf-card">
              <div className="cf-card-num">02</div>
              <h3 className="cf-card-title">Entrenamos a tu asistente</h3>
              <p className="cf-card-desc">Configuramos el asistente con la voz y la información de tu negocio. Lo revisas y nos dices qué ajustar.</p>
            </div>
            <div className="cf-card">
              <div className="cf-card-num">03</div>
              <h3 className="cf-card-title">Tu asistente responde solo</h3>
              <p className="cf-card-desc">Desde el día 1, atiende a tus clientes por WhatsApp, Instagram y más, las 24 horas. Puedes revisar o retomar la conversación cuando quieras.</p>
            </div>
          </div>
          <div className="cf-cta">
            <a href="#cta-final" className="btn btn-primary">Agendar demo gratuita →</a>
          </div>
        </div>
      </div>

    </section>
  )
}
