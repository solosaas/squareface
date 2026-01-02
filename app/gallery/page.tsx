import Link from "next/link"
import { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Avatar Gallery - Square Face Generator Inspiration",
  description: "Browse our gallery of cute pixel avatars created with Square Face Generator. Get inspiration for your own Discord, Twitter, and TikTok profile pictures.",
  keywords: ["avatar gallery", "square face inspiration", "pixel avatar examples", "discord avatar ideas", "profile picture inspiration"],
  canonical: "https://squarefacegenerator.run/gallery",
  openGraph: {
    title: "Avatar Gallery - Square Face Generator Inspiration",
    description: "Get inspired by our collection of cute pixel avatars created with Square Face Generator.",
    url: "https://squarefacegenerator.run/gallery",
    siteName: "Square Face Generator",
    images: [
      {
        url: "/avatars/competitor-8.png",
        width: 256,
        height: 256,
        alt: "Square Face Avatar Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🖼️ Avatar Gallery - Get Inspired! ✨",
    description: "Browse hundreds of cute pixel avatars created by our community! 💡 Find your perfect Discord PFP style! 🎨",
    images: ["/avatars/competitor-8.png"],
  },
}

const avatarCategories = [
  { name: "Cute & Kawaii", emoji: "🌸", description: "Pastel colors and adorable expressions" },
  { name: "Cool & Edgy", emoji: "😎", description: "Sunglasses, bold colors, attitude" },
  { name: "Fantasy", emoji: "🧚", description: "Magical colors and dreamy styles" },
  { name: "Gaming", emoji: "🎮", description: "Perfect for Discord and gaming profiles" },
  { name: "Aesthetic", emoji: "✨", description: "Minimalist and trendy designs" },
  { name: "Anime Style", emoji: "🌟", description: "Inspired by Japanese avatar culture" },
]

const exampleAvatars = [
  { src: "/avatars/avatar-1.png", alt: "Cute kawaii avatar with pink hair", category: "Cute & Kawaii" },
  { src: "/avatars/avatar-2.png", alt: "Cool avatar with sunglasses", category: "Cool & Edgy" },
  { src: "/avatars/avatar-3.png", alt: "Fantasy style avatar with purple hair", category: "Fantasy" },
  { src: "/avatars/avatar-4.png", alt: "Gaming avatar with headset", category: "Gaming" },
  { src: "/avatars/avatar-5.png", alt: "Minimalist aesthetic avatar", category: "Aesthetic" },
  { src: "/avatars/avatar-6.png", alt: "Anime inspired avatar", category: "Anime Style" },
  { src: "/avatars/avatar-7.png", alt: "Pastel cute avatar", category: "Cute & Kawaii" },
  { src: "/avatars/avatar-8.png", alt: "Edgy avatar with dark hair", category: "Cool & Edgy" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumb />

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6 transition-colors"
        >
          ← Back to Square Face Generator
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
            Avatar Gallery
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Get inspired by our collection of cute pixel avatars
          </p>
          <p className="text-gray-600">
            Browse different styles and find ideas for your perfect Discord, Twitter, or TikTok profile picture.
          </p>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Explore by Style</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {avatarCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer group"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-pink-600 transition">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avatar Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Featured Avatars</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {exampleAvatars.map((avatar) => (
              <div
                key={avatar.src}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition group"
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-blue-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={128}
                    height={128}
                    className="pixelated group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">{avatar.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Style Guide */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Avatar Style Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-pink-600">🎨 Color Combinations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Pastel Dream:</strong> Pink + Mint + Lavender</li>
                <li>• <strong>Classic Cool:</strong> Black + White + Gray</li>
                <li>• <strong>Sunset Vibes:</strong> Orange + Pink + Purple</li>
                <li>• <strong>Ocean Breeze:</strong> Blue + Teal + White</li>
                <li>• <strong>Forest Fairy:</strong> Green + Brown + Cream</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-pink-600">💡 Pro Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Match hair color with accessories for cohesion</li>
                <li>• Use contrasting eye colors to make them pop</li>
                <li>• Try the random button for unexpected combos</li>
                <li>• Consider your profile background color</li>
                <li>• Simple designs often look best at small sizes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Platform Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Platform-Specific Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">💬 Discord</h3>
              <p className="opacity-90">
                Square avatars display perfectly! Position your face in the center since Discord uses circular crops.
                The 256×256 size is ideal for both server and profile avatars.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">𝕏 Twitter/X</h3>
              <p className="opacity-90">
                High contrast colors work best for the small display size. Avoid too much detail in facial features
                as they may not be visible at thumbnail size.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">📱 TikTok</h3>
              <p className="opacity-90">
                Go bold with colors and expressions! TikTok profiles are circular, so keep important features
                centered. Cute, expressive avatars perform well.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">▶️ YouTube</h3>
              <p className="opacity-90">
                Use consistent avatars across your channel for brand recognition. The square format works great
                for both channel icons and thumbnails.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-amber-200 to-pink-200 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Your Own Avatar!</h2>
          <p className="text-gray-700 mb-6">
            Found some inspiration? Create your unique pixel avatar with our free generator.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-pink-600 transition shadow-lg"
          >
            Start Creating →
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  )
}
