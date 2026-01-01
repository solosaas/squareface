import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Square Face Generator - Create Cute Pixel Avatars",
  description:
    "Create cute, customizable square face avatars for Discord, Twitter, TikTok & more. Free online square face icon generator with 200+ options.",
  keywords: "square face generator, avatar maker, icon generator, profile picture",
  authors: [{ name: "Square Face Generator" }],
  creator: "Square Face Generator",
  publisher: "Square Face Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://squarefacegenerator.run",
    title: "Square Face Generator - Create Cute Pixel Avatars",
    description: "Create cute, customizable square face avatars for Discord, Twitter, TikTok & more. Free online square face icon generator with 200+ options.",
    siteName: "Square Face Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Square Face Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Square Face Generator - Create Cute Pixel Avatars",
    description: "Create cute, customizable square face avatars for Discord, Twitter, TikTok & more. Free online square face icon generator with 200+ options.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://squarefacegenerator.run/#website",
        "url": "https://squarefacegenerator.run/",
        "name": "Square Face Generator",
        "description": "Create cute, customizable square face avatars for Discord, Twitter, TikTok & more. Free online square face icon generator with 200+ options.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://squarefacegenerator.run/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://squarefacegenerator.run/#webpage",
        "url": "https://squarefacegenerator.run/",
        "name": "Square Face Generator - Create Cute Pixel Avatars",
        "isPartOf": {
          "@id": "https://squarefacegenerator.run/#website"
        },
        "description": "Create cute, customizable square face avatars for Discord, Twitter, TikTok & more. Free online square face icon generator with 200+ options.",
        "inLanguage": "en",
        "breadcrumb": {
          "@id": "https://squarefacegenerator.run/#breadcrumb"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://squarefacegenerator.run/#software",
        "name": "Square Face Generator",
        "operatingSystem": "Web",
        "applicationCategory": "DesignApplication",
        "description": "Free online square face avatar generator with 200+ customization options. Create cute pixel-style avatars for Discord, Twitter, TikTok, YouTube and more.",
        "url": "https://squarefacegenerator.run/",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Multiple face shapes",
          "Expressive eyes",
          "Mouth expressions",
          "Eyebrow styles",
          "Color customization",
          "Random generator",
          "Instant download",
          "No registration required"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://squarefacegenerator.run/#organization",
        "name": "Square Face Generator",
        "url": "https://squarefacegenerator.run/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://squarefacegenerator.run/icon.svg",
          "width": 180,
          "height": 180
        },
        "description": "Free online square face avatar generator",
        "sameAs": [
          "https://twitter.com/squarefacegen"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://squarefacegenerator.run/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://squarefacegenerator.run/"
          }
        ]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
