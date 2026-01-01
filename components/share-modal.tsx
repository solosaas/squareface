"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Instagram, Link2 } from "lucide-react"

interface ShareModalProps {
  open: boolean
  onClose: () => void
}

export function ShareModal({ open, onClose }: ShareModalProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert("Link copied!")
    } catch {
      console.error("Failed to copy")
    }
  }

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=Check out my square face avatar!&url=${encodeURIComponent(shareUrl)}&hashtags=SquareFaceGenerator`,
      "_blank",
    )
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">🎉 Your avatar is saved!</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-gray-600 text-center">Share your creation with friends:</p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={shareToTwitter}
              className="w-12 h-12 rounded-full hover:bg-blue-50 hover:border-blue-400 bg-transparent"
            >
              <Twitter className="w-5 h-5 text-blue-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={shareToFacebook}
              className="w-12 h-12 rounded-full hover:bg-blue-50 hover:border-blue-600 bg-transparent"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-pink-50 hover:border-pink-400 bg-transparent"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyLink}
              className="w-12 h-12 rounded-full hover:bg-gray-100 bg-transparent"
            >
              <Link2 className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
