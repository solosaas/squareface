"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { RuffleFlashPlayer } from "./ruffle-flash-player"
import { AvatarCarousel } from "./avatar-carousel"
import { FloatingStar, KawaiiHeart, Sparkle, PixelStar, KawaiiDivider, CuteBadge } from "./kawaii-decorations"
import { Maximize2, Minimize2, RotateCcw, Info, Gamepad2, Sparkles, Zap, Smartphone, Shield, RefreshCw } from "lucide-react"

interface RuffleFlashGeneratorProps {
  swfUrl?: string
}

export function RuffleFlashGenerator({ swfUrl = "/square-face.swf" }: RuffleFlashGeneratorProps) {
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (playerContainerRef.current) {
          await playerContainerRef.current.requestFullscreen()
        }
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.error("Fullscreen error:", err)
    }
  }, [])

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <section className="py-8 px-4 relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-60 hidden md:block">
        <FloatingStar size={32} color="var(--kawaii-yellow)" delay={0} />
      </div>
      <div className="absolute top-20 right-20 opacity-60 hidden md:block">
        <FloatingStar size={24} color="var(--kawaii-pink)" delay={0.5} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-40 hidden md:block">
        <PixelStar size={28} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header with Pixel Game Style */}
        <div className="text-center mb-8">
          {/* Game-style title bar */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl">🎮</span>
            <div className="flex gap-1">
              <KawaiiHeart size={16} color="var(--kawaii-pink)" />
              <KawaiiHeart size={16} color="var(--kawaii-pink)" />
              <KawaiiHeart size={16} color="var(--kawaii-pink)" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 pixel-title">
            Square Face Generator
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
            <span className="rainbow-text font-bold">Create cute avatars</span>
            {" "}with the classic Flash generator!
            <br />
            <span className="text-sm opacity-70">✨ Powered by Ruffle Flash Emulator ✨</span>
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <CuteBadge variant="pink">
              <Sparkles className="w-3 h-3" /> Free
            </CuteBadge>
            <CuteBadge variant="mint">
              <Smartphone className="w-3 h-3" /> Mobile Ready
            </CuteBadge>
            <CuteBadge variant="purple">
              <Gamepad2 className="w-3 h-3" /> Classic Flash
            </CuteBadge>
          </div>
        </div>

        {/* Main Game Card */}
        <div className="kawaii-card p-4 md:p-6 relative">
          {/* Control Buttons - Above Player */}
          {!isFullscreen && (
            <div className="flex justify-end gap-2 mb-3 relative">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="kawaii-btn kawaii-btn-secondary p-2 rounded-xl"
                  title="Info"
                >
                  <Info className="h-4 w-4" />
                </button>
                <button
                  onClick={handleReload}
                  className="kawaii-btn kawaii-btn-mint p-2 rounded-xl"
                  title="Reload"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="kawaii-btn kawaii-btn-primary p-2 rounded-xl"
                  title="Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Info Panel - Dropdown below button */}
              {showInfo && (
                <div className="absolute top-full right-0 mt-2 z-30 kawaii-card p-4 max-w-xs animate-in slide-in-from-top-2 fade-in">
                  <h3 className="font-bold mb-2 flex items-center gap-2" style={{ fontFamily: 'var(--font-kawaii)' }}>
                    <Sparkle size={16} color="var(--kawaii-yellow)" />
                    About This Game
                  </h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--kawaii-dark)' }}>
                    This is the classic Flash version of Square Face Generator, running on Ruffle - an open-source Flash emulator.
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'var(--kawaii-dark)' }}>
                    <strong>📱 Mobile:</strong> Tap to interact!
                  </p>
                  <p className="text-sm" style={{ color: 'var(--kawaii-dark)' }}>
                    <strong>🔊 Audio:</strong> Click on the game to enable sound.
                  </p>
                  <button
                    onClick={() => setShowInfo(false)}
                    className="mt-3 text-sm font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--kawaii-pink)' }}
                  >
                    ✕ Close
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Ruffle Player Container */}
          <div
            ref={playerContainerRef}
            className="ruffle-player-container relative"
            style={{
              width: "100%",
              height: "75vh",
              minHeight: "400px",
              maxHeight: "800px",
            }}
          >
            {/* Fullscreen Exit Button */}
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-50 p-3 rounded-full transition-all hover:scale-110"
                style={{
                  background: 'var(--kawaii-pink)',
                  border: '3px solid var(--kawaii-dark)',
                  boxShadow: 'var(--shadow-pixel)',
                }}
                title="Exit Fullscreen"
              >
                <Minimize2 className="h-6 w-6 text-white" />
              </button>
            )}

            <RuffleFlashPlayer swfUrl={swfUrl} />
          </div>

          {/* Game Tips */}
          {!isFullscreen && (
            <div className="mt-4 text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'var(--kawaii-yellow-light)',
                  border: '2px dashed var(--kawaii-yellow)',
                }}
              >
                <span className="text-lg">💡</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--kawaii-dark)' }}>
                  Tip: Use fullscreen for the best experience!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Avatar Carousel - Right after the generator for inspiration */}
        <div className="mt-6 -mx-4">
          <AvatarCarousel title="✨ Get Inspired by Community Creations ✨" />
        </div>

        <KawaiiDivider icon="⭐" />

        {/* Feature Cards - Game Style */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="feature-card hover-bounce">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
              Mobile Ready
            </h3>
            <p className="text-sm" style={{ color: 'var(--kawaii-dark)', opacity: 0.8 }}>
              Works on iPhone, Android, and all modern devices. No Flash plugin required!
            </p>
          </div>

          <div className="feature-card hover-bounce" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
              Classic Experience
            </h3>
            <p className="text-sm" style={{ color: 'var(--kawaii-dark)', opacity: 0.8 }}>
              The original Square Face Generator Flash app, preserved and playable.
            </p>
          </div>

          <div className="feature-card hover-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
              Powered by Ruffle
            </h3>
            <p className="text-sm" style={{ color: 'var(--kawaii-dark)', opacity: 0.8 }}>
              Open-source Flash emulator that brings Flash content to modern browsers.
            </p>
          </div>
        </div>

        <KawaiiDivider icon="🌸" />

        {/* Modern Version CTA */}
        <div className="mt-8 text-center">
          <div className="game-card inline-block p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" style={{ color: 'var(--kawaii-pink)' }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-pixel)', color: 'var(--kawaii-dark)' }}>
                Level Up!
              </span>
              <Sparkles className="w-5 h-5" style={{ color: 'var(--kawaii-pink)' }} />
            </div>

            <p className="mb-4" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
              Want <span className="font-bold" style={{ color: 'var(--kawaii-purple)' }}>200+ customization options</span>?
              <br />
              Try our modern HTML5 version!
            </p>

            <a
              href="/modern"
              className="kawaii-btn kawaii-btn-primary inline-flex items-center gap-2 text-lg"
            >
              <Zap className="w-5 h-5" />
              Try Modern Version
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        <KawaiiDivider icon="✨" />

        {/* Why Choose Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-title">
            ✨ Why Choose Square Face Generator?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "💰", title: "100% Free", desc: "No fees, no registration, no limits!" },
              { icon: "🎨", title: "Classic Style", desc: "Original Flash experience preserved" },
              { icon: "⚡", title: "Super Fast", desc: "WebAssembly powered performance" },
              { icon: "📱", title: "Mobile First", desc: "Touch optimized for any device" },
              { icon: "🔒", title: "Safe & Private", desc: "No tracking, no data collection" },
              { icon: "🔄", title: "Always Updated", desc: "Latest Ruffle improvements" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl hover-grow"
                style={{
                  background: 'linear-gradient(135deg, white 0%, var(--kawaii-pink-light) 100%)',
                  border: '2px solid var(--kawaii-pink)',
                }}
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--kawaii-dark)', opacity: 0.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <KawaiiDivider icon="💖" />

        {/* Comparison Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 kawaii-title">
            🎮 Flash vs Modern Version
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Flash Version */}
            <div className="kawaii-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎮</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-pink)' }}>
                  Flash Version
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Original classic experience",
                  "Nostalgic interface",
                  "Powered by Ruffle",
                  "Works on all devices",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--kawaii-dark)' }}>
                    <span style={{ color: 'var(--kawaii-mint)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4" style={{ borderTop: '2px dashed var(--kawaii-pink-light)' }}>
                <p className="text-xs" style={{ color: 'var(--kawaii-dark)', opacity: 0.6 }}>
                  Best for: Classic Flash lovers 💕
                </p>
              </div>
            </div>

            {/* Modern Version */}
            <div className="kawaii-card p-6" style={{ borderColor: 'var(--kawaii-purple)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚡</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-purple)' }}>
                  Modern Version
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "200+ customization options",
                  "Real-time preview",
                  "Native HTML5 Canvas",
                  "One-click download",
                  "Social sharing built-in",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--kawaii-dark)' }}>
                    <span style={{ color: 'var(--kawaii-mint)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4" style={{ borderTop: '2px dashed var(--kawaii-purple-light)' }}>
                <a
                  href="/modern"
                  className="pixel-btn w-full text-center block"
                >
                  Try Modern →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Styles */}
      <style jsx global>{`
        .ruffle-player-container:fullscreen {
          width: 100vw !important;
          height: 100vh !important;
          max-width: none !important;
          max-height: none !important;
          aspect-ratio: unset !important;
          border-radius: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--kawaii-dark) !important;
        }

        .ruffle-player-container:fullscreen .ruffle-player-wrapper {
          width: 100%;
          height: 100%;
        }

        .ruffle-player-container:fullscreen ruffle-player {
          width: 100% !important;
          height: 100% !important;
        }

        .ruffle-player-container:-webkit-full-screen {
          width: 100vw !important;
          height: 100vh !important;
          max-width: none !important;
          max-height: none !important;
          aspect-ratio: unset !important;
          border-radius: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--kawaii-dark) !important;
        }
      `}</style>
    </section>
  )
}
