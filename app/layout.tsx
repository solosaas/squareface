import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Fredoka, Nunito, Press_Start_2P } from "next/font/google"
import { FloatingDecorations } from "@/components/kawaii-decorations"
import { Navigation } from "@/components/navigation"
import "./globals.css"

// ============================================
// Next.js Font Optimization for Core Web Vitals
// ============================================
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fredoka',
  preload: true,
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-nunito',
  preload: true,
})

const pressStart2P = Press_Start_2P({
  weight: '400',
  display: 'swap',
  variable: '--font-press-start',
  preload: false, // Pixel font is large - lazy load
})

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Increased for better accessibility
  userScalable: true, // Better for accessibility
}

export const metadata: Metadata = {
  metadataBase: new URL("https://squarefacegenerator.run"),
  title: "Square Face Generator - Free Icon Maker | Flash Museum",
  description: "The original Flash Museum icon maker by h071019. Create cute pixel avatars free. Best Picrew alternative for Discord PFP.",
  keywords: "square face generator,icon generator,flashmuseum,pixel avatar maker,picrew alternative,h071019",
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
    title: "Square Face Generator - Free Icon Maker | Flash Museum",
    description: "The original Flash Museum icon maker by h071019. Create cute pixel avatars free. Best Picrew alternative for Discord PFP.",
    siteName: "Square Face Generator",
    images: [
      {
        url: "https://squarefacegenerator.run/twitter-card.png",
        width: 1000,
        height: 630,
        alt: "Square Face Generator - Classic Flash Museum Icon Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@squarefacegen",
    title: "Remember 2013? The Icon Generator is BACK!",
    description: "Create YOUR cute pixel avatar in seconds! Free, no signup, instant download. Perfect for Discord & TikTok PFP!",
    images: ["https://squarefacegenerator.run/twitter-card.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        url: "/logo.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured Data for SEO - Enhanced with FAQ Schema and nostalgia keywords
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://squarefacegenerator.run/#website",
        "url": "https://squarefacegenerator.run/",
        "name": "Square Face Generator",
        "alternateName": "Square Face Icon Generator",
        "description": "The original Flash Museum icon maker by h071019. Create cute pixel avatars free. Best Picrew alternative for Discord PFP.",
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
        "name": "Square Face Generator - Free Icon Maker | Flash Museum",
        "isPartOf": {
          "@id": "https://squarefacegenerator.run/#website"
        },
        "description": "The original Flash Museum icon maker by h071019. Create cute pixel avatars free. Best Picrew alternative for Discord PFP.",
        "inLanguage": "en",
        "breadcrumb": {
          "@id": "https://squarefacegenerator.run/#breadcrumb"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://squarefacegenerator.run/#software",
        "name": "Square Face Generator",
        "alternateName": ["Square Face Icon Generator", "Square Face Maker", "Flash Museum Square Face", "h071019 Square Face"],
        "operatingSystem": "Web",
        "applicationCategory": "DesignApplication",
        "description": "The original Flash Museum icon Maker by h071019. Create cute 256x256 pixel avatars with 12 categories. Free Picrew alternative for Discord, Twitter, TikTok PFP.",
        "url": "https://squarefacegenerator.run/",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "2850",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Original Flash Museum experience",
          "12 customization categories",
          "256x256 pixel PNG export",
          "Skin tone selection",
          "Anime-style hairstyles",
          "Expressive eyes and mouths",
          "Glasses and accessories",
          "Hats and clothing options",
          "Random avatar generator",
          "Mobile-friendly interface",
          "No registration required",
          "Instant download",
          "Picrew alternative aesthetic"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://squarefacegenerator.run/#organization",
        "name": "Square Face Generator",
        "url": "https://squarefacegenerator.run/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://squarefacegenerator.run/logo.png",
          "width": 256,
          "height": 256
        },
        "description": "Preserving the classic Square Face Icon Generator from Flash Museum for a new generation"
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://squarefacegenerator.run/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Square Face Generator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Square Face Generator is the classic pixel avatar maker originally created by h071019 and hosted on Flash Museum. It lets you create cute 256x256 pixel square face icons with 12 customization categories including skin, hair, eyes, mouth, glasses, hats, and more. It's now preserved and playable on modern browsers without Flash."
            }
          },
          {
            "@type": "Question",
            "name": "Is Square Face Generator free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Square Face Generator is completely free to use. No registration, no watermarks, no hidden fees. Create unlimited avatars and download them instantly as PNG files."
            }
          },
          {
            "@type": "Question",
            "name": "Is this the original Flash Museum version?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! This is the authentic Square Face Icon Generator originally created by h071019 for Flash Museum. We've preserved the original experience so you can relive those 2013 internet memories."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Square Face Generator on my phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Square Face Generator works perfectly on iPhone, iPad, Android phones and tablets. No app download needed - it runs directly in your mobile browser."
            }
          },
          {
            "@type": "Question",
            "name": "Is Square Face Generator a good Picrew alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many users consider Square Face Generator the best Picrew alternative for creating cute pixel-style avatars. It offers a nostalgic aesthetic that's perfect for Discord, Twitter, TikTok, and gaming profile pictures."
            }
          },
          {
            "@type": "Question",
            "name": "What happened to Flash Museum Square Face Generator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After Adobe discontinued Flash Player in 2020, many Flash games became unplayable. We've preserved the original Square Face Icon Generator so you can still enjoy this beloved avatar maker without needing Flash."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my avatar for commercial purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Avatars you create are for personal use, such as profile pictures on Discord, Twitter, TikTok, YouTube, gaming platforms, and social media. For commercial use, please credit the original creator h071019."
            }
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        {/* Preconnect for Performance - external scripts only */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preconnect for Ruffle Flash player (used in main page) */}
        <link rel="preconnect" href="https://unpkg.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${fredoka.className} antialiased kawaii-gradient min-h-screen`}>
        <FloatingDecorations
          starCount={8}
          cloudCount={4}
          showSakura={true}
          sakuraCount={20}
        />
        <Navigation />
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
