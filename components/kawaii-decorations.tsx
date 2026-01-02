"use client"

import { useEffect, useState, useMemo } from "react"

// Floating Star Component
export function FloatingStar({
  size = 24,
  color = "var(--kawaii-yellow)",
  delay = 0,
  className = "",
}: {
  size?: number
  color?: string
  delay?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`floating-star ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

// Kawaii Cloud Component
export function KawaiiCloud({
  size = 60,
  color = "white",
  delay = 0,
  className = "",
}: {
  size?: number
  color?: string
  delay?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      fill={color}
      className={`floating-cloud drop-shadow-lg ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <ellipse cx="30" cy="40" rx="25" ry="18" />
      <ellipse cx="55" cy="35" rx="30" ry="22" />
      <ellipse cx="75" cy="42" rx="20" ry="15" />
      <ellipse cx="45" cy="25" rx="18" ry="14" />
    </svg>
  )
}

// Sakura Petal Component
export function SakuraPetal({
  size = 16,
  color = "var(--kawaii-pink)",
  delay = 0,
  duration = 8,
  startX = 0,
}: {
  size?: number
  color?: string
  delay?: number
  duration?: number
  startX?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className="sakura-petal"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        left: `${startX}%`,
        opacity: 0.8,
      }}
    >
      <path d="M12 2C9 2 6 5 6 9c0 3 2 5 6 13 4-8 6-10 6-13 0-4-3-7-6-7z" />
    </svg>
  )
}

// Heart Decoration
export function KawaiiHeart({
  size = 20,
  color = "var(--kawaii-pink)",
  filled = true,
  className = "",
}: {
  size?: number
  color?: string
  filled?: boolean
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? color : "none"}
      stroke={color}
      strokeWidth={filled ? 0 : 2}
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

// Sparkle Burst
export function Sparkle({
  size = 20,
  color = "var(--kawaii-yellow)",
  className = "",
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  )
}

// Pixel Star (8-bit style)
export function PixelStar({
  size = 24,
  color = "var(--pixel-gold)",
  className = "",
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={className}
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="7" y="0" width="2" height="2" />
      <rect x="7" y="2" width="2" height="2" />
      <rect x="5" y="4" width="6" height="2" />
      <rect x="3" y="6" width="10" height="2" />
      <rect x="1" y="8" width="14" height="2" />
      <rect x="3" y="10" width="4" height="2" />
      <rect x="9" y="10" width="4" height="2" />
      <rect x="1" y="12" width="4" height="2" />
      <rect x="11" y="12" width="4" height="2" />
      <rect x="0" y="14" width="2" height="2" />
      <rect x="14" y="14" width="2" height="2" />
    </svg>
  )
}

// Game Coin
export function GameCoin({
  size = 32,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${className}`}
    >
      <circle cx="16" cy="16" r="14" fill="var(--pixel-gold)" stroke="var(--kawaii-dark)" strokeWidth="2" />
      <circle cx="16" cy="16" r="10" fill="var(--kawaii-yellow)" />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fill="var(--kawaii-dark)"
        fontFamily="var(--font-pixel)"
        fontSize="10"
      >
        ★
      </text>
    </svg>
  )
}

// Floating Decorations Container
export function FloatingDecorations({
  starCount = 5,
  cloudCount = 3,
  showSakura = true,
  sakuraCount = 15,
}: {
  starCount?: number
  cloudCount?: number
  showSakura?: boolean
  sakuraCount?: number
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate random positions for stars
  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, i) => ({
        id: i,
        size: 16 + Math.random() * 16,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        color: ["var(--kawaii-yellow)", "var(--kawaii-pink)", "var(--kawaii-mint)"][
          Math.floor(Math.random() * 3)
        ],
      })),
    [starCount]
  )

  // Generate random positions for clouds
  const clouds = useMemo(
    () =>
      Array.from({ length: cloudCount }, (_, i) => ({
        id: i,
        size: 50 + Math.random() * 40,
        top: `${10 + Math.random() * 30}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
      })),
    [cloudCount]
  )

  // Generate sakura petals
  const sakuraPetals = useMemo(
    () =>
      Array.from({ length: sakuraCount }, (_, i) => ({
        id: i,
        size: 10 + Math.random() * 12,
        startX: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 6 + Math.random() * 6,
        color: Math.random() > 0.3 ? "var(--kawaii-pink)" : "var(--kawaii-pink-light)",
      })),
    [sakuraCount]
  )

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          <FloatingStar size={star.size} color={star.color} delay={star.delay} />
        </div>
      ))}

      {/* Floating Clouds */}
      {clouds.map((cloud) => (
        <div
          key={`cloud-${cloud.id}`}
          className="absolute opacity-60"
          style={{
            top: cloud.top,
            left: cloud.left,
          }}
        >
          <KawaiiCloud size={cloud.size} delay={cloud.delay} />
        </div>
      ))}

      {/* Sakura Petals */}
      {showSakura &&
        sakuraPetals.map((petal) => (
          <SakuraPetal
            key={`sakura-${petal.id}`}
            size={petal.size}
            startX={petal.startX}
            delay={petal.delay}
            duration={petal.duration}
            color={petal.color}
          />
        ))}
    </div>
  )
}

// Achievement Popup Component
export function AchievementPopup({
  title,
  description,
  icon = "⭐",
  show,
  onClose,
}: {
  title: string
  description: string
  icon?: string
  show: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="achievement-badge flex items-center gap-3 px-6 py-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <div className="font-bold text-[10px] uppercase tracking-wider">{title}</div>
          <div className="text-[8px] opacity-80">{description}</div>
        </div>
      </div>
    </div>
  )
}

// Confetti Celebration
export function Confetti({
  show,
  count = 50,
}: {
  show: boolean
  count?: number
}) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; color: string; delay: number; size: number }>
  >([])

  useEffect(() => {
    if (show) {
      const colors = [
        "var(--kawaii-pink)",
        "var(--kawaii-purple)",
        "var(--kawaii-mint)",
        "var(--kawaii-yellow)",
        "var(--kawaii-coral)",
      ]

      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        size: 6 + Math.random() * 8,
      }))

      setParticles(newParticles)

      const timer = setTimeout(() => setParticles([]), 4000)
      return () => clearTimeout(timer)
    }
  }, [show, count])

  if (particles.length === 0) return null

  return (
    <div className="confetti-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

// Kawaii Divider with icon
export function KawaiiDivider({
  icon = "✨",
  className = "",
}: {
  icon?: string
  className?: string
}) {
  return (
    <div className={`kawaii-divider ${className}`}>
      <span className="text-2xl">{icon}</span>
    </div>
  )
}

// Cute Badge Component
export function CuteBadge({
  children,
  variant = "pink",
  className = "",
}: {
  children: React.ReactNode
  variant?: "pink" | "purple" | "mint" | "yellow" | "pixel"
  className?: string
}) {
  const variantStyles = {
    pink: "bg-[var(--kawaii-pink-light)] text-[var(--kawaii-pink-dark)] border-[var(--kawaii-pink)]",
    purple: "bg-[var(--kawaii-purple-light)] text-[var(--kawaii-dark)] border-[var(--kawaii-purple)]",
    mint: "bg-[var(--kawaii-mint-light)] text-[var(--kawaii-dark)] border-[var(--kawaii-mint)]",
    yellow: "bg-[var(--kawaii-yellow-light)] text-[var(--kawaii-dark)] border-[var(--kawaii-yellow)]",
    pixel: "bg-[var(--pixel-gold)] text-[var(--kawaii-dark)] border-[var(--kawaii-dark)] font-mono text-xs",
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1
        rounded-full border-2 font-semibold text-sm
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

// Game-style Level Badge
export function LevelBadge({
  level,
  size = "md",
}: {
  level: number
  size?: "sm" | "md" | "lg"
}) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  }

  return (
    <div
      className={`
        level-badge ${sizeClasses[size]}
        flex items-center justify-center
      `}
    >
      <span>Lv.{level}</span>
    </div>
  )
}
