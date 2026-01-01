"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Share2, Download } from "lucide-react"
import { useState } from "react"

interface ShareModalProps {
  open: boolean
  onClose: () => void
  avatarImageData: string | null
  uploadedImageUrl?: string | null
}

export function ShareModal({ open, onClose, avatarImageData, uploadedImageUrl }: ShareModalProps) {
  const [sharing, setSharing] = useState(false)

  const shareUrl = "https://squarefacegenerator.run"
  const shareText = "Check out my cute square face avatar! Create yours at"
  const shareHashtags = "#SquareFaceGenerator #PixelAvatar #AvatarMaker"

  // Upload image to free image hosting (imgbb)
  const uploadImage = async () => {
    if (!avatarImageData || uploadedImageUrl) return uploadedImageUrl

    setSharing(true)

    try {
      const response = await fetch(avatarImageData)
      const blob = await response.blob()

      const formData = new FormData()
      formData.append('image', blob)

      const uploadResponse = await fetch('https://api.imgbb.com/1/upload?key=4d1d3e5e8c0b4a8a9f0f8f8f8f8f8f8f', {
        method: 'POST',
        body: formData
      })

      const data = await uploadResponse.json()

      if (data.success) {
        return data.data.url
      }
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setSharing(false)
    }

    return null
  }

  const handleShareX = async () => {
    const imageUrl = uploadedImageUrl || await uploadImage()

    const text = imageUrl
      ? `${shareText} ${shareUrl}\n\n${shareHashtags}\n\n${imageUrl}`
      : `${shareText} ${shareUrl}\n\n${shareHashtags}`

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=550,height=420"
    )
  }

  const handleShareFacebook = async () => {
    const imageUrl = uploadedImageUrl || await uploadImage()

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText + " " + shareHashtags + (imageUrl ? " " + imageUrl : ""))}`,
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

  const handleSharePinterest = async () => {
    const imageUrl = uploadedImageUrl || await uploadImage()

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
  }

  const handleShareLinkedIn = async () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=550,height=420"
    )
  }

  const handleShareWhatsApp = async () => {
    const imageUrl = uploadedImageUrl || await uploadImage()

    const text = imageUrl
      ? `${shareText} ${shareUrl}\n\n${shareHashtags}\n\n${imageUrl}`
      : `${shareText} ${shareUrl}\n\n${shareHashtags}`

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  const handleDownloadAgain = () => {
    if (!avatarImageData) return

    const link = document.createElement("a")
    link.download = "square-face-avatar.png"
    link.href = avatarImageData
    link.click()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">🎉 Your avatar is saved!</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          {/* Avatar Preview */}
          {avatarImageData && (
            <div className="mb-2">
              <img
                src={avatarImageData}
                alt="Your square face avatar"
                className="w-32 h-32 rounded-lg shadow-lg border-4 border-pink-200"
              />
            </div>
          )}

          <p className="text-gray-600 text-center">Share your creation with friends:</p>

          {sharing && (
            <div className="text-sm text-pink-500">Uploading image...</div>
          )}

          <div className="flex justify-center gap-3 flex-wrap">
            {/* X (Twitter) */}
            <button
              onClick={handleShareX}
              className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
              title="Share on X"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>

            {/* Facebook */}
            <button
              onClick={handleShareFacebook}
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
              title="Share on Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* TikTok */}
            <button
              onClick={handleShareTikTok}
              className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
              title="Share on TikTok"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </button>

            {/* Pinterest */}
            <button
              onClick={handleSharePinterest}
              className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
              title="Share on Pinterest"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleShareWhatsApp}
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
              title="Share on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>

            {/* Copy Link */}
            <button
              onClick={() => {
                const text = `${shareText} ${shareUrl}\n\n${shareHashtags}`
                navigator.clipboard.writeText(text)
                alert("Caption copied!")
              }}
              className="w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
              title="Copy Caption"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            </button>
          </div>

          {/* Download Again Button */}
          <button
            onClick={handleDownloadAgain}
            className="flex items-center gap-2 text-sm text-pink-500 hover:text-pink-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download again
          </button>

          {/* Tips */}
          <div className="bg-blue-50 rounded-lg p-3 mt-2 text-xs text-gray-600 text-center">
            <p className="font-semibold mb-1">💡 Your avatar image will be shared!</p>
            <p>Includes hashtags: {shareHashtags}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
