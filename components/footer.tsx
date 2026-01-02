"use client"

import Link from "next/link"
import { Heart, Sparkles, Star, Gamepad2, Palette, Zap } from "lucide-react"
import { PixelStar, Sparkle, KawaiiHeart } from "./kawaii-decorations"

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Decorative Top Border - Rainbow Gradient */}
      <div className="h-2 bg-gradient-to-r from-[var(--kawaii-pink)] via-[var(--kawaii-purple)] via-[var(--kawaii-mint)] via-[var(--kawaii-yellow)] to-[var(--kawaii-coral)] animate-rainbow-shift" />

      {/* Main Footer Background */}
      <div className="relative bg-gradient-to-b from-[var(--kawaii-purple-light)] to-[var(--kawaii-pink-light)]">
        {/* Floating Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-[10%] opacity-30">
            <PixelStar size={16} color="var(--kawaii-yellow)" />
          </div>
          <div className="absolute top-8 right-[15%] opacity-40">
            <Sparkle size={12} color="var(--kawaii-mint)" />
          </div>
          <div className="absolute bottom-12 left-[20%] opacity-30">
            <PixelStar size={12} color="var(--kawaii-coral)" />
          </div>
          <div className="absolute top-12 left-[50%] opacity-25">
            <Sparkle size={10} color="var(--kawaii-purple)" />
          </div>
          <div className="absolute bottom-8 right-[25%] opacity-35">
            <PixelStar size={14} color="var(--kawaii-pink)" />
          </div>
        </div>

        <div className="container relative mx-auto px-4 py-10 max-w-4xl">
          {/* Fun Feature Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Gamepad2 className="w-6 h-6 text-[var(--kawaii-purple)]" />
              </div>
              <span className="text-[10px] font-semibold text-[var(--kawaii-dark)] opacity-70">Fun</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform group-hover:-rotate-3">
                <Palette className="w-6 h-6 text-[var(--kawaii-pink)]" />
              </div>
              <span className="text-[10px] font-semibold text-[var(--kawaii-dark)] opacity-70">Creative</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Zap className="w-6 h-6 text-[var(--kawaii-yellow)]" />
              </div>
              <span className="text-[10px] font-semibold text-[var(--kawaii-dark)] opacity-70">Fast</span>
            </div>
          </div>

          {/* Main Links - Kawaii Style */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/"
              className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm text-[var(--kawaii-dark)] hover:bg-[var(--kawaii-pink)] hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Star className="w-3 h-3" />
                Home
              </span>
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm text-[var(--kawaii-dark)] hover:bg-[var(--kawaii-purple)] hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                About
              </span>
            </Link>
            <Link
              href="/modern"
              className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm text-[var(--kawaii-dark)] hover:bg-[var(--kawaii-purple)] hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Modern Version
              </span>
            </Link>
            <Link
              href="/privacy-policy"
              className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm text-[var(--kawaii-dark)] hover:bg-[var(--kawaii-mint)] hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm text-[var(--kawaii-dark)] hover:bg-[var(--kawaii-coral)] hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              Terms of Service
            </Link>
          </div>

          {/* Kawaii Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--kawaii-pink)]" />
            <KawaiiHeart size={16} color="var(--kawaii-pink)" />
            <Star className="w-3 h-3 text-[var(--kawaii-yellow)] fill-[var(--kawaii-yellow)]" />
            <KawaiiHeart size={16} color="var(--kawaii-pink)" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--kawaii-pink)]" />
          </div>

          {/* Copyright - Pixel Style */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-[var(--kawaii-dark)]">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-[var(--kawaii-pink)] fill-[var(--kawaii-pink)] animate-pulse" />
              <span className="text-sm">for creativity</span>
            </div>

            <p className="text-[var(--kawaii-dark)] text-sm opacity-80">
              &copy; {new Date().getFullYear()} Square Face Generator
            </p>

            {/* Pixel Art Tagline */}
            <div className="mt-2 px-4 py-2 bg-[var(--kawaii-dark)]/10 rounded-lg">
              <p className="text-[10px] font-mono text-[var(--kawaii-dark)] opacity-70 text-center">
                [ Create your perfect square face avatar! ]
              </p>
            </div>
          </div>

          {/* Fun Stats - Game Style */}
          <div className="mt-8 flex justify-center gap-6">
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--kawaii-purple)]">100%</div>
              <div className="text-[10px] text-[var(--kawaii-dark)] opacity-60">Free</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--kawaii-pink)]">Infinite</div>
              <div className="text-[10px] text-[var(--kawaii-dark)] opacity-60">Avatars</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--kawaii-mint)]">Instant</div>
              <div className="text-[10px] text-[var(--kawaii-dark)] opacity-60">Downloads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pixel Border */}
      <div className="h-1 bg-[var(--kawaii-dark)]" />
    </footer>
  )
}
