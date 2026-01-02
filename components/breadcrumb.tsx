"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/": [{ label: "Home", href: "/" }],
  "/modern": [
    { label: "Home", href: "/" },
    { label: "Modern Version", href: "/modern" },
  ],
  "/privacy-policy": [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  "/terms-of-service": [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
  "/vs-picrew": [
    { label: "Home", href: "/" },
    { label: "vs Picrew", href: "/vs-picrew" },
  ],
  "/gallery": [
    { label: "Home", href: "/" },
    { label: "Avatar Gallery", href: "/gallery" },
  ],
  "/about": [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
}

export function Breadcrumb() {
  const pathname = usePathname()
  const items = breadcrumbMap[pathname] || [{ label: "Home", href: "/" }]

  if (pathname === "/") return null

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 ? (
              <Link
                href={item.href}
                className="flex items-center hover:text-amber-600 transition-colors"
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {index === items.length - 1 ? (
                  <span className="font-medium text-gray-800" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
