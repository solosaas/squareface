import Link from "next/link"
import { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Square Face Generator vs Picrew - Free Avatar Maker Comparison",
  description: "Compare Square Face Generator vs Picrew. Discover why our free pixel avatar maker is the best alternative for Discord, Twitter, and TikTok profile pictures. No registration required.",
  keywords: ["square face generator vs picrew", "picrew alternative", "avatar maker comparison", "free avatar generator", "pixel avatar maker"],
  canonical: "https://squarefacegenerator.run/vs-picrew",
  openGraph: {
    title: "Square Face Generator vs Picrew - Free Avatar Comparison",
    description: "Find out why Square Face Generator is the best free Picrew alternative for creating cute pixel avatars.",
    url: "https://squarefacegenerator.run/vs-picrew",
    siteName: "Square Face Generator",
    type: "article",
    images: [
      {
        url: "/avatars/competitor-8.png",
        width: 256,
        height: 256,
        alt: "Square Face Generator vs Picrew Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🆚 Better Than Picrew? Find Out! 🤔",
    description: "Why pay when you can get it FREE? 💰 No signup, no limits, instant download! The perfect Picrew alternative for Discord PFP! ✨",
    images: ["/avatars/competitor-8.png"],
  },
}

export default function VsPicrewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            Square Face Generator vs Picrew
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A detailed comparison to help you choose the best free avatar maker for your needs.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-800">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-amber-600">Square Face Generator</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-600">Picrew</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Price</td>
                  <td className="text-center py-4 px-4 text-green-600 font-bold">100% Free</td>
                  <td className="text-center py-4 px-4 text-gray-600">Free (some paid)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Registration</td>
                  <td className="text-center py-4 px-4 text-green-600 font-bold">Not Required</td>
                  <td className="text-center py-4 px-4 text-gray-600">Often Required</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Style</td>
                  <td className="text-center py-4 px-4 text-amber-600 font-bold">Pixel / Retro</td>
                  <td className="text-center py-4 px-4 text-gray-600">Various Styles</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Language</td>
                  <td className="text-center py-4 px-4 text-amber-600 font-bold">English</td>
                  <td className="text-center py-4 px-4 text-gray-600">Japanese (some English)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Technology</td>
                  <td className="text-center py-4 px-4 text-amber-600 font-bold">HTML5 Canvas</td>
                  <td className="text-center py-4 px-4 text-gray-600">Flash-based</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Privacy</td>
                  <td className="text-center py-4 px-4 text-green-600 font-bold">Local Processing</td>
                  <td className="text-center py-4 px-4 text-gray-600">Varies by maker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Detailed Comparison</h2>

          <div className="space-y-8">
            {/* Pricing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-2xl">💰</span> Pricing & Accessibility
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-700 mb-3">Square Face Generator</h4>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Completely free forever
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> No premium tiers
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">✓</strong> No hidden costs
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-700 mb-3">Picrew</h4>
                  <p className="text-gray-700 mb-2">
                    Most image makers are free, but some have premium features or donations requested.
                  </p>
                  <p className="text-gray-700">
                    Quality and features vary by individual creator.
                  </p>
                </div>
              </div>
            </div>

            {/* User Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-2xl">🎨</span> User Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-700 mb-3">Square Face Generator</h4>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> No account needed
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Instant start
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> English interface
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">✓</strong> Simple, intuitive design
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-700 mb-3">Picrew</h4>
                  <p className="text-gray-700 mb-2">
                    Some makers require account registration
                  </p>
                  <p className="text-gray-700 mb-2">
                    Primarily Japanese interface
                  </p>
                  <p className="text-gray-700">
                    Quality varies across different creators
                  </p>
                </div>
              </div>
            </div>

            {/* Style & Customization */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-2xl">✨</span> Style & Customization
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-700 mb-3">Square Face Generator</h4>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Consistent pixel art style
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> 12+ customization categories
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Unlimited color options
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">✓</strong> Nostalgic 2013 aesthetic
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-700 mb-3">Picrew</h4>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-amber-600">★</strong> Huge variety of styles
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-amber-600">★</strong> Many different artists
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-amber-600">★</strong> Anime, realistic, cartoon options
                  </p>
                </div>
              </div>
            </div>

            {/* Technical */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-2xl">⚙️</span> Technical Performance
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-700 mb-3">Square Face Generator</h4>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Modern HTML5 Canvas
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Fast loading
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-green-600">✓</strong> Mobile optimized
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">✓</strong> No plugins needed
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-700 mb-3">Picrew</h4>
                  <p className="text-gray-700 mb-2">
                    Based on Flash technology (being phased out)
                  </p>
                  <p className="text-gray-700 mb-2">
                    Loading times vary by maker
                  </p>
                  <p className="text-gray-700">
                    Some compatibility issues on modern browsers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose Which */}
        <section className="bg-gradient-to-r from-amber-100 to-pink-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Which Should You Choose?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-amber-600 mb-4">Choose Square Face Generator if...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ You want a quick, simple avatar maker</li>
                <li>✓ You prefer pixel art / retro aesthetic</li>
                <li>✓ You don't want to create an account</li>
                <li>✓ You want English interface</li>
                <li>✓ You need Discord/social media avatars</li>
                <li>✓ You value privacy and local processing</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Choose Picrew if...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ You want anime-style avatars</li>
                <li>✓ You enjoy browsing many different art styles</li>
                <li>✓ You don't mind navigating Japanese interface</li>
                <li>✓ You want highly detailed, realistic options</li>
                <li>✓ You enjoy discovering new artists</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-500 to-pink-500 rounded-2xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Avatar?</h2>
          <p className="text-lg mb-6 opacity-90">
            Start making cute pixel avatars now - completely free, no registration required!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Create Your Avatar →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-amber-600">Is Square Face Generator completely free like Picrew?</h3>
              <p className="text-gray-700">
                Yes! Square Face Generator is 100% free with no premium tiers, no registration, and no hidden costs. While many Picrew makers are also free, some may request donations or have premium features.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-amber-600">Which is better for Discord avatars?</h3>
              <p className="text-gray-700">
                Square Face Generator is optimized for Discord with perfect square pixel art that displays beautifully. The 256×256 PNG format with transparent background works great on Discord profiles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-amber-600">Can I use both?</h3>
              <p className="text-gray-700">
                Absolutely! Many users enjoy both platforms. Use Square Face Generator for quick pixel avatars and Picrew when you want to explore different anime styles or discover new artists.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
