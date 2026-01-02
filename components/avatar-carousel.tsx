"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useAnimationControls, useMotionValue, animate, PanInfo } from "framer-motion"
import Image from "next/image"
import { Sparkles, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react"

// Avatar data - including community favorites from various sources
const avatars = [
  { id: 1, src: "/avatars/competitor-1.png", alt: "Square Face Icon 1" },
  { id: 2, src: "/avatars/competitor-2.png", alt: "Square Face Icon 2" },
  { id: 3, src: "/avatars/competitor-3.png", alt: "Square Face Icon 3" },
  { id: 4, src: "/avatars/competitor-4.png", alt: "Square Face Icon 4" },
  { id: 5, src: "/avatars/competitor-5.png", alt: "Square Face Icon 5" },
  { id: 6, src: "/avatars/competitor-6.png", alt: "Square Face Icon 6" },
  { id: 7, src: "/avatars/competitor-7.png", alt: "Square Face Icon 7" },
  { id: 8, src: "/avatars/competitor-8.png", alt: "Square Face Icon 8" },
  { id: 9, src: "/avatars/avatar-1.png", alt: "Square Face Icon 9" },
  { id: 10, src: "/avatars/avatar-2.png", alt: "Square Face Icon 10" },
  { id: 11, src: "/avatars/avatar-3.png", alt: "Square Face Icon 11" },
  { id: 12, src: "/avatars/avatar-4.png", alt: "Square Face Icon 12" },
  { id: 13, src: "/avatars/avatar-5.png", alt: "Square Face Icon 13" },
  { id: 14, src: "/avatars/avatar-6.png", alt: "Square Face Icon 14" },
  { id: 15, src: "/avatars/avatar-featured.png", alt: "Featured Square Face Icon" },
  { id: 16, src: "/avatars/avatar-original.png", alt: "Original Square Face Icon" },
  { id: 17, src: "/avatars/avatar-7.png", alt: "Square Face Icon 17" },
  { id: 18, src: "/avatars/avatar-8.png", alt: "Square Face Icon 18" },
  { id: 19, src: "/avatars/avatar-9.png", alt: "Square Face Icon 19" },
  { id: 20, src: "/avatars/avatar-10.png", alt: "Square Face Icon 20" },
]

// Duplicate for infinite scroll
const duplicatedAvatars = [...avatars, ...avatars, ...avatars]

interface AvatarCarouselProps {
  title?: string
  speed?: number // pixels per second
}

export function AvatarCarousel({
  title = "Gallery: Community Creations",
  speed = 30
}: AvatarCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const animationRef = useRef<ReturnType<typeof animate> | null>(null)

  const itemWidth = 96 // 80px image + 16px gap
  const totalWidth = avatars.length * itemWidth

  // Start or resume animation
  const startAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.stop()
    }

    const currentX = x.get()
    // Calculate remaining distance
    const targetX = -totalWidth
    const distance = Math.abs(targetX - currentX)
    const duration = distance / speed

    animationRef.current = animate(x, targetX, {
      duration,
      ease: "linear",
      onComplete: () => {
        // Reset to start for seamless loop
        x.set(0)
        startAnimation()
      }
    })
  }, [x, totalWidth, speed])

  // Pause animation
  const pauseAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.stop()
    }
  }, [])

  // Handle play/pause
  useEffect(() => {
    if (isPaused || isHovered) {
      pauseAnimation()
    } else {
      startAnimation()
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop()
      }
    }
  }, [isPaused, isHovered, startAnimation, pauseAnimation])

  // Handle drag
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const currentX = x.get()
    let newX = currentX + info.offset.x

    // Keep within bounds
    if (newX > 0) newX = -totalWidth + (newX % totalWidth)
    if (newX < -totalWidth * 2) newX = newX % totalWidth

    x.set(newX)

    if (!isPaused) {
      startAnimation()
    }
  }

  // Manual scroll
  const scroll = (direction: "left" | "right") => {
    pauseAnimation()
    const currentX = x.get()
    const scrollAmount = direction === "left" ? itemWidth * 3 : -itemWidth * 3

    animate(x, currentX + scrollAmount, {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
      onComplete: () => {
        if (!isPaused && !isHovered) {
          startAnimation()
        }
      }
    })
  }

  return (
    <section className="py-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, var(--kawaii-pink-light) 0%, transparent 50%),
                         radial-gradient(ellipse at 70% 50%, var(--kawaii-purple-light) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" style={{ color: "var(--kawaii-yellow)" }} />
            <span
              className="text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-pixel)", color: "var(--kawaii-purple)" }}
            >
              Made with Love
            </span>
            <Sparkles className="w-5 h-5" style={{ color: "var(--kawaii-yellow)" }} />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold kawaii-title mb-2"
            style={{ fontFamily: "var(--font-kawaii)" }}
          >
            {title}
          </h2>

          <p
            className="text-sm md:text-base opacity-70"
            style={{ color: "var(--kawaii-dark)" }}
          >
            See what amazing square face icons you can create!
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays for fade effect */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--background) 0%, transparent 100%)"
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, var(--background) 0%, transparent 100%)"
            }}
          />

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            style={{
              background: "var(--kawaii-pink)",
              border: "3px solid var(--kawaii-dark)",
              boxShadow: "var(--shadow-pixel)"
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            style={{
              background: "var(--kawaii-pink)",
              border: "3px solid var(--kawaii-dark)",
              boxShadow: "var(--shadow-pixel)"
            }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Carousel Track */}
          <div
            ref={containerRef}
            className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
          >
            <motion.div
              className="flex gap-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -totalWidth * 2, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => pauseAnimation()}
              onDragEnd={handleDragEnd}
            >
              {duplicatedAvatars.map((avatar, index) => (
                <AvatarCard
                  key={`${avatar.id}-${index}`}
                  avatar={avatar}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: isPaused
                ? "linear-gradient(135deg, var(--kawaii-mint) 0%, var(--kawaii-mint-light) 100%)"
                : "linear-gradient(135deg, var(--kawaii-pink-light) 0%, var(--kawaii-purple-light) 100%)",
              border: "2px solid var(--kawaii-pink)",
            }}
          >
            {isPaused ? (
              <>
                <Play className="w-4 h-4" style={{ color: "var(--kawaii-dark)" }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--kawaii-dark)" }}
                >
                  Play
                </span>
              </>
            ) : (
              <>
                <Pause className="w-4 h-4" style={{ color: "var(--kawaii-dark)" }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--kawaii-dark)" }}
                >
                  Pause
                </span>
              </>
            )}
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--kawaii-pink)",
                }}
                animate={{
                  scale: isPaused ? 1 : [1, 1.3, 1],
                  opacity: isPaused ? 0.5 : [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Individual Avatar Card Component
function AvatarCard({ avatar, index }: { avatar: typeof avatars[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative flex-shrink-0"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.15, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(circle, var(--kawaii-pink) 0%, transparent 70%)`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 0.8
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Avatar Container */}
      <motion.div
        className="relative w-20 h-20 rounded-xl overflow-hidden"
        style={{
          border: isHovered ? "3px solid var(--kawaii-pink)" : "3px solid var(--kawaii-purple-light)",
          boxShadow: isHovered
            ? "0 8px 25px rgba(0,0,0,0.2), 0 0 20px var(--kawaii-pink)"
            : "0 4px 12px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, var(--kawaii-pink-light) 0%, var(--kawaii-purple-light) 100%)",
        }}
      >
        <Image
          src={avatar.src}
          alt={avatar.alt}
          fill
          className="object-cover"
          sizes="80px"
          draggable={false}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, transparent 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Sparkle on Hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-full h-full" style={{ color: "var(--kawaii-yellow)" }} />
          </motion.div>
          <motion.div
            className="absolute -bottom-1 -left-1 w-3 h-3"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -180 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Sparkles className="w-full h-full" style={{ color: "var(--kawaii-mint)" }} />
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
