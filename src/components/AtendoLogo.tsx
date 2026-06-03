import type { RefObject } from 'react'

interface AtendoLogoProps {
  className?: string
  variant?: 'default' | 'inverted'
  svgRef?: RefObject<SVGSVGElement | null>
  bubbleRef?: RefObject<SVGPathElement | null>
  textRef?: RefObject<SVGTextElement | null>
  dotRef?: RefObject<SVGCircleElement | null>
}

export default function AtendoLogo({ className, variant = 'default', svgRef, bubbleRef, textRef, dotRef }: AtendoLogoProps) {
  const bubbleFill = variant === 'inverted' ? '#FAFAF7' : '#1B4332'
  const textFill   = variant === 'inverted' ? '#1B4332' : '#FAFAF7'

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 88"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Atendo"
    >
      <path
        ref={bubbleRef}
        d="M14,4 H172 Q186,4 186,18 V54 Q186,68 172,68 H48 Q44,68 42,72 L30,84 Q28,86 26,84 L20,76 Q18,72 14,72 H14 Q0,72 0,58 V18 Q0,4 14,4 Z"
        fill={bubbleFill}
      />
      <text
        ref={textRef}
        x="93"
        y="44"
        textAnchor="middle"
        fontFamily="'Nunito', sans-serif"
        fontWeight="800"
        fontSize="32"
        fill={textFill}
        letterSpacing="-1"
      >
        Atendo
      </text>
      <circle ref={dotRef} cx="174" cy="51" r="8" fill="#E8571A" />
    </svg>
  )
}
