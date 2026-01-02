"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AvatarCanvas } from "@/components/avatar-canvas"
import { FeatureSelector } from "@/components/feature-selector"
import { ColorPicker } from "@/components/color-picker"
import { ShareModal } from "@/components/share-modal"
import { FloatingStar, KawaiiHeart, Sparkle, KawaiiDivider, CuteBadge, Confetti } from "@/components/kawaii-decorations"
import { Shuffle, Download, RotateCcw, Share2, Sparkles, Zap, Gamepad2 } from "lucide-react"
import { CATEGORIES, type AvatarState, getDefaultState, getRandomState } from "@/lib/avatar-data"

export function SquareFaceGenerator() {
  const [avatarState, setAvatarState] = useState<AvatarState>(getDefaultState())
  const [activeCategory, setActiveCategory] = useState("skin")
  const [showShareModal, setShowShareModal] = useState(false)
  const [avatarImageData, setAvatarImageData] = useState<string | null>(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFeatureChange = useCallback((category: string, value: number) => {
    setAvatarState((prev) => ({
      ...prev,
      features: { ...prev.features, [category]: value },
    }))
  }, [])

  const handleColorChange = useCallback((category: string, color: string) => {
    setAvatarState((prev) => ({
      ...prev,
      colors: { ...prev.colors, [category]: color },
    }))
  }, [])

  const handleRandom = useCallback(() => {
    setAvatarState(getRandomState())
    // Trigger confetti on random
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 100)
  }, [])

  const handleReset = useCallback(() => {
    setAvatarState(getDefaultState())
  }, [])

  const handleSave = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const imageData = canvas.toDataURL("image/png")
    setAvatarImageData(imageData)

    const link = document.createElement("a")
    link.download = "square-face-avatar.png"
    link.href = imageData
    link.click()

    // Trigger confetti celebration
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 100)

    setShowShareModal(true)
  }, [])

  // Upload image to get public URL
  const uploadImageForShare = useCallback(async () => {
    if (uploadedImageUrl) return uploadedImageUrl

    const canvas = canvasRef.current
    if (!canvas) return null

    setUploading(true)

    try {
      const imageData = canvas.toDataURL("image/png")
      const response = await fetch(imageData)
      const blob = await response.blob()

      const formData = new FormData()
      formData.append('image', blob)

      const uploadResponse = await fetch('https://api.imgbb.com/1/upload?key=4d1d3e5e8c0b4a8a9f0f8f8f8f8f8f8f', {
        method: 'POST',
        body: formData
      })

      const data = await uploadResponse.json()

      if (data.success) {
        const url = data.data.url
        setUploadedImageUrl(url)
        return url
      }
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setUploading(false)
    }

    return null
  }, [uploadedImageUrl])

  // Social media share handlers
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://squarefacegenerator.run"
  const shareText = "Check out my cute square face avatar! Create yours at"
  const shareHashtags = "#SquareFaceGenerator #PixelAvatar #AvatarMaker"

  const handleShareX = useCallback(async () => {
    const imageUrl = await uploadImageForShare()
    const text = imageUrl
      ? `${shareText} ${shareUrl}\n\n${shareHashtags}\n\n${imageUrl}`
      : `${shareText} ${shareUrl}\n\n${shareHashtags}`

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=550,height=420"
    )
  }, [uploadImageForShare])

  const handleShareFacebook = useCallback(async () => {
    await uploadImageForShare()
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText + " " + shareHashtags)}`,
      "_blank",
      "width=550,height=420"
    )
  }, [uploadImageForShare])

  const handleShareTikTok = useCallback(() => {
    const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
    navigator.clipboard.writeText(text)
    alert("Caption copied! Upload your avatar on TikTok and paste the caption.")
    window.open("https://www.tiktok.com/upload", "_blank")
  }, [])

  const handleSharePinterest = useCallback(async () => {
    const imageUrl = await uploadImageForShare()
    const params = new URLSearchParams({
      url: shareUrl,
      description: `${shareText} ${shareHashtags}`,
    })
    if (imageUrl) {
      params.append('media', imageUrl)
    }

    window.open(
      `https://pinterest.com/pin/create/button/?${params.toString()}`,
      "_blank",
      "width=550,height=420"
    )
  }, [uploadImageForShare])

  const handleCopyLink = useCallback(() => {
    const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
    navigator.clipboard.writeText(text)
    alert("Caption copied!")
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl relative">
      {/* Confetti Effect */}
      <Confetti show={showConfetti} />

      {/* Decorative Stars */}
      <div className="absolute top-4 left-4 opacity-50 hidden lg:block">
        <FloatingStar size={28} color="var(--kawaii-yellow)" delay={0} />
      </div>
      <div className="absolute top-12 right-8 opacity-50 hidden lg:block">
        <FloatingStar size={20} color="var(--kawaii-pink)" delay={0.3} />
      </div>

      {/* Header */}
      <header className="text-center mb-8">
        {/* Game-style hearts */}
        <div className="flex justify-center gap-1 mb-3">
          <KawaiiHeart size={20} color="var(--kawaii-pink)" />
          <KawaiiHeart size={20} color="var(--kawaii-pink)" />
          <KawaiiHeart size={20} color="var(--kawaii-pink)" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3 pixel-title">
          Square Face Generator
        </h1>

        <p style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
          <span className="rainbow-text font-bold text-lg">Create your unique avatar!</span>
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <CuteBadge variant="purple">
            <Sparkles className="w-3 h-3" /> 200+ Options
          </CuteBadge>
          <CuteBadge variant="mint">
            <Zap className="w-3 h-3" /> HTML5 Canvas
          </CuteBadge>
        </div>
      </header>

      {/* Main Content Card */}
      <div className="kawaii-card p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Avatar Preview */}
          <div className="flex flex-col items-center gap-5 lg:w-[320px] flex-shrink-0">
            {/* Canvas Container */}
            <div
              className="relative p-4 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--kawaii-pink-light) 0%, var(--kawaii-purple-light) 50%, var(--kawaii-mint-light) 100%)',
                border: '4px solid var(--kawaii-dark)',
                boxShadow: 'var(--shadow-pixel)',
              }}
            >
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2">
                <Sparkle size={16} color="var(--kawaii-yellow)" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkle size={16} color="var(--kawaii-yellow)" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Sparkle size={16} color="var(--kawaii-yellow)" />
              </div>
              <div className="absolute -bottom-2 -right-2">
                <Sparkle size={16} color="var(--kawaii-yellow)" />
              </div>

              <AvatarCanvas ref={canvasRef} state={avatarState} size={256} />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full justify-center">
              <button
                onClick={handleSave}
                className="kawaii-btn kawaii-btn-primary flex items-center gap-2 px-6"
              >
                <Download className="w-4 h-4" />
                SAVE
              </button>
              <button
                onClick={handleRandom}
                className="kawaii-btn kawaii-btn-secondary flex items-center gap-2 px-5"
              >
                <Shuffle className="w-4 h-4" />
                Random
              </button>
            </div>

            <button
              onClick={handleReset}
              className="text-sm font-semibold flex items-center gap-1 transition-all hover:scale-105"
              style={{ color: 'var(--kawaii-purple)', fontFamily: 'var(--font-kawaii)' }}
            >
              <RotateCcw className="w-4 h-4" />
              Reset All
            </button>

            {/* Social Share Section */}
            <div
              className="w-full p-4 rounded-xl"
              style={{
                background: 'var(--kawaii-purple-light)',
                border: '2px dashed var(--kawaii-purple)',
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Share2 className="w-4 h-4" style={{ color: 'var(--kawaii-dark)' }} />
                <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
                  Share Your Avatar!
                </span>
                {uploading && (
                  <span className="text-xs" style={{ color: 'var(--kawaii-pink)' }}>
                    Uploading...
                  </span>
                )}
                {uploadedImageUrl && (
                  <span className="text-xs" style={{ color: 'var(--kawaii-mint)' }}>
                    ✓ Ready
                  </span>
                )}
              </div>

              <div className="flex justify-center gap-2">
                {/* X (Twitter) */}
                <button
                  onClick={handleShareX}
                  className="social-btn"
                  style={{ background: 'var(--kawaii-dark)' }}
                  title="Share on X"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>

                {/* Facebook */}
                <button
                  onClick={handleShareFacebook}
                  className="social-btn"
                  style={{ background: '#1877f2' }}
                  title="Share on Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* TikTok */}
                <button
                  onClick={handleShareTikTok}
                  className="social-btn"
                  style={{ background: 'var(--kawaii-dark)' }}
                  title="Share on TikTok"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </button>

                {/* Pinterest */}
                <button
                  onClick={handleSharePinterest}
                  className="social-btn"
                  style={{ background: '#e60023' }}
                  title="Share on Pinterest"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </button>

                {/* Copy Link */}
                <button
                  onClick={handleCopyLink}
                  className="social-btn"
                  style={{ background: 'var(--kawaii-purple)' }}
                  title="Copy Link"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Customization */}
          <div className="flex-1 min-w-0">
            {/* Category Tabs */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList
                className="kawaii-tabs flex flex-wrap h-auto gap-1 mb-4"
              >
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="kawaii-tab text-xs px-3 py-1.5"
                  >
                    {cat.icon} {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Feature Options */}
            <div
              className="p-4 rounded-2xl mb-4"
              style={{
                background: 'var(--kawaii-pink-light)',
                border: '2px solid var(--kawaii-pink)',
              }}
            >
              <h3
                className="text-sm font-bold mb-3 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}
              >
                <span className="text-lg">✨</span>
                Choose Style
              </h3>
              <FeatureSelector
                category={activeCategory}
                selectedValue={avatarState.features[activeCategory] || 0}
                onSelect={(value) => handleFeatureChange(activeCategory, value)}
                currentState={avatarState}
              />
            </div>

            {/* Color Picker */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: 'var(--kawaii-mint-light)',
                border: '2px solid var(--kawaii-mint)',
              }}
            >
              <h3
                className="text-sm font-bold mb-3 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}
              >
                <span className="text-lg">🎨</span>
                Pick Color
              </h3>
              <ColorPicker
                category={activeCategory}
                selectedColor={avatarState.colors[activeCategory] || "#000000"}
                onChange={(color) => handleColorChange(activeCategory, color)}
              />
            </div>
          </div>
        </div>
      </div>

      <KawaiiDivider icon="🎮" />

      {/* Flash Version CTA */}
      <div className="mt-8 text-center">
        <div className="game-card inline-block p-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gamepad2 className="w-5 h-5" style={{ color: 'var(--kawaii-pink)' }} />
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-pixel)', color: 'var(--kawaii-dark)' }}
            >
              Classic Mode
            </span>
          </div>

          <p className="mb-4 text-sm" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
            Want the <span className="font-bold" style={{ color: 'var(--kawaii-purple)' }}>original Flash experience</span>?
          </p>

          <a href="/" className="pixel-btn inline-flex items-center gap-2">
            <span>🎮</span>
            Try Flash Version
          </a>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        open={showShareModal}
        onClose={() => setShowShareModal(false)}
        avatarImageData={avatarImageData}
        uploadedImageUrl={uploadedImageUrl}
      />
    </div>
  )
}
