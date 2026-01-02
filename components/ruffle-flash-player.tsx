"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

interface RuffleFlashPlayerProps {
  swfUrl: string
  width?: number
  height?: number
}

export function RuffleFlashPlayer({
  swfUrl,
  width = 550,
  height = 400
}: RuffleFlashPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [ruffleLoaded, setRuffleLoaded] = useState(false)

  // Initialize Ruffle player after script loads
  useEffect(() => {
    if (!ruffleLoaded || !containerRef.current) return

    const initRuffle = async () => {
      try {
        // Wait a bit for Ruffle to fully initialize
        await new Promise(resolve => setTimeout(resolve, 100))

        const ruffle = (window as any).RufflePlayer?.newest()
        if (!ruffle) {
          throw new Error("Ruffle not available")
        }

        const player = ruffle.createPlayer()

        // Clear container
        containerRef.current!.innerHTML = ""
        containerRef.current!.appendChild(player)

        // Configure and load
        await player.load({
          url: swfUrl,
          autoplay: "on",
          unmuteOverlay: "hidden",
          backgroundColor: "#FFF0F5",
          letterbox: "on",
          warnOnUnsupportedContent: false,
          contextMenu: "off",
          quality: "high",
          scale: "showAll",
        })

        setIsLoading(false)
      } catch (err) {
        console.error("Ruffle error:", err)
        setError("Failed to load Flash content")
        setIsLoading(false)
      }
    }

    initRuffle()
  }, [ruffleLoaded, swfUrl])

  const handleScriptLoad = () => {
    // Configure Ruffle globally
    ;(window as any).RufflePlayer = (window as any).RufflePlayer || {}
    ;(window as any).RufflePlayer.config = {
      autoplay: "on",
      unmuteOverlay: "hidden",
      backgroundColor: "#FFF0F5",
      letterbox: "on",
      warnOnUnsupportedContent: false,
      contextMenu: "off",
      quality: "high",
      scale: "showAll",
      allowFullscreen: true,
    }
    setRuffleLoaded(true)
  }

  return (
    <>
      <Script
        src="https://unpkg.com/@ruffle-rs/ruffle"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={() => {
          setError("Failed to load Ruffle")
          setIsLoading(false)
        }}
      />

      <div
        className="ruffle-player-wrapper"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF0F5",
          position: "relative",
        }}
      >
        {/* Loading overlay */}
        {isLoading && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 240, 245, 0.95)",
              zIndex: 10,
              color: "#ec4899",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                border: "3px solid #f9a8d4",
                borderTopColor: "#ec4899",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            <p style={{ marginTop: 16, fontSize: 16 }}>Loading Ruffle Flash...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 240, 245, 0.95)",
              zIndex: 10,
              color: "#dc2626",
              padding: 20,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
            <p style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>Error</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>{error}</p>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: 16,
                padding: "8px 24px",
                backgroundColor: "#ec4899",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Ruffle player container */}
        <div
          ref={containerRef}
          id="ruffle-container"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <style jsx global>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          #ruffle-container ruffle-player {
            width: 100% !important;
            height: 100% !important;
          }

          #ruffle-container canvas {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        `}</style>
      </div>
    </>
  )
}
