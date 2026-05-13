import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PhoneMockup() {
  const shellRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const msg1Ref = useRef<HTMLDivElement>(null)
  const time1Ref = useRef<HTMLDivElement>(null)
  const msg2Ref = useRef<HTMLDivElement>(null)
  const time2Ref = useRef<HTMLDivElement>(null)
  const skip1Ref = useRef<HTMLDivElement>(null)
  const msg3Ref = useRef<HTMLDivElement>(null)
  const time3Ref = useRef<HTMLDivElement>(null)
  const typingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    const badge = badgeRef.current as HTMLDivElement
    if (!shell || !badge) return

    const msgEls = [msg1Ref.current, time1Ref.current, msg2Ref.current, time2Ref.current, skip1Ref.current, msg3Ref.current, time3Ref.current]
    const typing = typingRef.current

    const ctx = gsap.context(() => {
      gsap.set(shell,   { opacity: 0, scale: 0.86, y: 40 })
      gsap.set(msgEls,  { opacity: 0, y: 10 })
      gsap.set(typing,  { opacity: 0 })
      gsap.set(badge,   { opacity: 0, scale: 0 })

      function buildLoop() {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

        tl
          .set(msgEls, { opacity: 0, y: 10 })
          .set(typing, { opacity: 0 })
          .set(badge, { opacity: 0, scale: 0, backgroundColor: '#E8571A', boxShadow: '0 0 0 0px rgba(232,87,26,0)' })
          .call(() => { badge.textContent = '1' })

          .to(msg1Ref.current,  { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
          .to(time1Ref.current, { opacity: 1, duration: 0.3 }, '-=0.05')

          .to(typing, { opacity: 1, duration: 0.2 }, '+=0.5')
          .to(typing, { opacity: 0, duration: 0.2 }, '+=0.85')

          .to(msg2Ref.current,  { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
          .to(time2Ref.current, { opacity: 1, duration: 0.3 }, '-=0.05')

          .to(badge, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' }, '+=0.3')
          .to({}, { duration: 1.3 })

          .call(() => {
            badge.textContent = '2'
            gsap.fromTo(badge, { scale: 1 }, { scale: 1.3, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' })
          })

          .to(skip1Ref.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.55')

          .call(() => {
            badge.textContent = '3'
            gsap.to(badge, { backgroundColor: '#dc2626', duration: 0.25 })
            gsap.fromTo(badge, { scale: 1 }, { scale: 1.35, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut', delay: 0.15 })
          }, undefined, '+=0.45')

          .to(msg3Ref.current,  { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '+=0.35')
          .to(time3Ref.current, { opacity: 1, duration: 0.3 }, '-=0.05')

          .to(badge, { boxShadow: '0 0 0 5px rgba(220,38,38,0.28)', duration: 0.45, yoyo: true, repeat: 3 }, '-=0.2')
          .to({}, { duration: 2.5 })

          .to([...msgEls, typing], { opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power1.in' })
          .to(badge, { opacity: 0, scale: 0, duration: 0.3 }, '-=0.3')

        return tl
      }

      ScrollTrigger.create({
        trigger: shell,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(shell, { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'power3.out' })
          buildLoop()
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="phone-wrapper">
      <div className="phone-shell" ref={shellRef}>
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-statusbar">
            <span>23:47</span>
            <span>●●● 🔋</span>
          </div>
          <div className="phone-waheader">
            <div className="phone-avatar">CD</div>
            <div>
              <div className="phone-contact-name">Centro Dental Sur</div>
              <div className="phone-contact-online">en línea</div>
            </div>
            <div className="phone-notif-badge" ref={badgeRef}>1</div>
          </div>
          <div className="phone-chat-area">
            <div className="phone-msg" ref={msg1Ref}>Buenas noches, ¿atienden con Cruz Blanca? ¿Cuánto sale una limpieza? 🦷</div>
            <div className="phone-msg-time" ref={time1Ref}>23:47 ✓✓</div>
            <div className="phone-typing" ref={typingRef}>
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
            <div className="phone-msg" ref={msg2Ref}>Necesito agendar para esta semana 🙏</div>
            <div className="phone-msg-time" ref={time2Ref}>23:48 ✓✓</div>
            <div className="phone-time-skip" ref={skip1Ref}>— mañana, 09:15 —</div>
            <div className="phone-msg phone-msg-lost" ref={msg3Ref}>Al final llamé a otra clínica, gracias igual 😔</div>
            <div className="phone-msg-time" ref={time3Ref}>09:15 ✓✓</div>
          </div>
        </div>
      </div>
    </div>
  )
}
