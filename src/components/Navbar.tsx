import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      if (window.scrollY > 60) {
        navRef.current.classList.add('scrolled')
      } else {
        navRef.current.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef} id="main-nav">
      <div className="container">
        <div className="nav-inner">
          <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" role="img" aria-label="Atendo">
            <defs><style>{'@import url(\'https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap\');'}</style></defs>
            <rect x="4" y="5" width="182" height="64" rx="14" fill="none" stroke="#1B4332" strokeWidth="5.5" strokeLinejoin="round"/>
            <text x="95" y="45" textAnchor="middle" fontFamily="'Nunito', sans-serif" fontWeight="800" fontSize="30" fill="#1B4332" letterSpacing="-0.9">Atendo</text>
            <path d="M 14,69 L 4,93 L 30,77" fill="#1B4332"/>
            <circle cx="190" cy="69" r="11" fill="#FAFAF7"/>
            <circle cx="190" cy="69" r="8.5" fill="#E8571A"/>
          </svg>
          <ul className="nav-links">
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
          </ul>
          <a href="#cta-final" className="btn btn-primary nav-cta">Agendar demo →</a>
        </div>
      </div>
    </nav>
  )
}
