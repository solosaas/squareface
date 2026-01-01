"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> for creativity
          </div>
          <p>&copy; {new Date().getFullYear()} Square Face Generator. All rights reserved.</p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs">
            Create your perfect square face avatar! Free online avatar generator.
          </p>
        </div>
      </div>
    </footer>
  )
}
