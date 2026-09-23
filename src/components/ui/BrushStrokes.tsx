import { cn } from "@/lib/utils";

/**
 * Painted brush-stroke backdrop for the hero portrait.
 * Colour follows the accent token (text-primary), so it adapts to both themes.
 */
export function BrushStrokes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      aria-hidden="true"
      className={cn("text-primary", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="hero-brush" x="-25%" y="-25%" width="150%" height="150%">
          {/* rough, uneven stroke edges */}
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.06" numOctaves="2" seed="7" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="26" xChannelSelector="R" yChannelSelector="G" result="rough" />
          {/* dry-brush streaks running along each stroke */}
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.32" numOctaves="1" seed="3" result="streaks" />
          <feColorMatrix
            in="streaks"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -7 0 0 0 4.9"
            result="mask"
          />
          <feComposite in="rough" in2="mask" operator="in" />
        </filter>
      </defs>

      {/* Strokes are drawn horizontally, then the group is tilted so the streaks follow them */}
      <g transform="rotate(-32 200 230)" filter="url(#hero-brush)" fill="none" strokeLinecap="round" stroke="currentColor">
        <path d="M60 120 C150 108 250 116 336 106" strokeWidth="50" opacity="0.9" />
        <path d="M24 190 C130 175 262 187 376 171" strokeWidth="74" />
        <path d="M44 268 C150 254 272 268 364 252" strokeWidth="64" opacity="0.94" />
        <path d="M96 336 C176 326 252 334 318 324" strokeWidth="40" opacity="0.85" />
      </g>
    </svg>
  );
}
