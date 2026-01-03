"use client"

import { Share2 } from "lucide-react"

export function FlashShareSection() {
  const shareUrl = "https://squarefacegenerator.run"
  const shareText = "Check out my cute square face avatar! Create yours at"
  const shareHashtags = "#SquareFaceGenerator #PixelAvatar #AvatarMaker"

  const handleShareX = () => {
    const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=550,height=420"
    )
  }

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=550,height=420"
    )
  }

  const handleShareTikTok = () => {
    const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
    navigator.clipboard.writeText(text)
    alert("Caption copied! Upload your avatar on TikTok and paste the caption.")
    window.open("https://www.tiktok.com/upload", "_blank")
  }

  const handleSharePinterest = () => {
    const params = new URLSearchParams({
      url: shareUrl,
      description: `${shareText} ${shareHashtags}`,
    })

    window.open(
      `https://pinterest.com/pin/create/button/?${params.toString()}`,
      "_blank",
      "width=550,height=420"
    )
  }

  const handleShareWhatsApp = () => {
    const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  const handleCopyLink = () => {
    const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
    navigator.clipboard.writeText(text)
    alert("Caption copied!")
  }

  return (
    <div
      className="w-full p-5 rounded-2xl mt-6"
      style={{
        background: 'linear-gradient(135deg, var(--kawaii-purple-light) 0%, var(--kawaii-pink-light) 100%)',
        border: '3px dashed var(--kawaii-purple)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Share2 className="w-5 h-5" style={{ color: 'var(--kawaii-purple)' }} />
        <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-kawaii)', color: 'var(--kawaii-dark)' }}>
          Share Your Creation!
        </p>
      </div>

      <p className="text-sm mb-4 text-center" style={{ color: 'var(--kawaii-dark)' }}>
        Created an avatar you love? Share Square Face Generator with friends!
      </p>

      {/* Share Buttons */}
      <div className="flex justify-center gap-2 flex-wrap">
        {/* X (Twitter) */}
        <button
          onClick={handleShareX}
          className="w-11 h-11 rounded-full bg-black hover:scale-110 transition-transform text-white flex items-center justify-center"
          title="Share on X"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* Facebook */}
        <button
          onClick={handleShareFacebook}
          className="w-11 h-11 rounded-full bg-blue-600 hover:scale-110 transition-transform text-white flex items-center justify-center"
          title="Share on Facebook"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        {/* TikTok */}
        <button
          onClick={handleShareTikTok}
          className="w-11 h-11 rounded-full bg-black hover:scale-110 transition-transform text-white flex items-center justify-center"
          title="Share on TikTok"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </button>

        {/* Pinterest */}
        <button
          onClick={handleSharePinterest}
          className="w-11 h-11 rounded-full bg-red-600 hover:scale-110 transition-transform text-white flex items-center justify-center"
          title="Share on Pinterest"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleShareWhatsApp}
          className="w-11 h-11 rounded-full bg-green-500 hover:scale-110 transition-transform text-white flex items-center justify-center"
          title="Share on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className="w-11 h-11 rounded-full hover:scale-110 transition-transform text-white flex items-center justify-center"
          style={{ background: 'var(--kawaii-purple)' }}
          title="Copy Caption"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </button>
      </div>

      {/* Tip */}
      <div className="mt-3 text-xs text-center" style={{ color: 'var(--kawaii-dark)', opacity: 0.8 }}>
        💡 Tip: Share the link and Twitter will show a preview card with avatar examples!
      </div>
    </div>
  )
}
