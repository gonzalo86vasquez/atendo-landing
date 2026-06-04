import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelector('p'),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="proof-bar" ref={ref}>
      <div className="container">
        <p>Producto desarrollado por <a href="https://meteoralabs.io" target="_blank" rel="noopener noreferrer">Meteoralabs.io</a></p>
      </div>
    </div>
  )
}
