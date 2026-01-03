import Link from "next/link"
import { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About Us - Square Face Generator Story",
  description: "Learn about Square Face Generator, the preservation of the classic h071019 Flash Museum icon maker, and our mission to keep internet nostalgia alive.",
  keywords: ["about square face generator", "h071019", "flash museum", "square face history", "pixel avatar maker story"],
  canonical: "https://squarefacegenerator.run/about",
  openGraph: {
    title: "About Us - Square Face Generator Story",
    description: "The story of preserving the classic Square Face Icon Generator from Flash Museum for a new generation.",
    url: "https://squarefacegenerator.run/about",
    siteName: "Square Face Generator",
    type: "website",
    images: [
      {
        url: "/avatars/competitor-8.png",
        width: 256,
        height: 256,
        alt: "Square Face Generator - Our Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Story Behind the Icon Generator",
    description: "How we saved the classic 2013 Flash avatar maker from disappearing! Preserving internet nostalgia one pixel at a time!",
    images: ["/avatars/competitor-8.png"],
  },
}

export default function AboutPage() {
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

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
            About Square Face Generator
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Preserving internet nostalgia, one pixel avatar at a time.
          </p>
        </div>

        {/* Our Story */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">📖</span> Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              Square Face Generator was originally created by the talented Japanese artist <strong className="text-amber-600">h071019</strong> and hosted on the beloved <strong className="text-green-600">Flash Museum</strong> website. During the golden age of Flash (around 2013), this simple yet charming avatar maker brought joy to thousands of internet users who spent countless hours creating cute pixel faces.
            </p>
            <p className="leading-relaxed mb-4">
              When Adobe discontinued Flash Player in 2020, many Flash games and applications became unplayable. The original Square Face Icon Generator, along with countless other Flash creations, was at risk of being lost forever.
            </p>
            <p className="leading-relaxed">
              We created this modern version to preserve that piece of internet history. Using HTML5 Canvas technology, we've recreated the experience so new generations can enjoy the same creative satisfaction that defined an era of internet culture.
            </p>
          </div>
        </section>

        {/* The Original Creator */}
        <section className="bg-gradient-to-br from-amber-50 to-pink-50 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">👩‍🎨</span> The Original Creator: h071019
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              <strong className="text-purple-600">h071019</strong> is a brilliant Japanese pixel artist known for creating adorable, accessible avatar makers. Their work on Flash Museum helped define the kawaii pixel art aesthetic that became synonymous with early 2010s internet culture.
            </p>
            <p className="leading-relaxed mb-4">
              The Square Face Icon Generator was one of their most popular creations, featuring:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>12 comprehensive customization categories</li>
              <li>200+ individual options and combinations</li>
              <li>The signature cute, kawaii art style</li>
              <li>256×256 pixel PNG exports with transparent backgrounds</li>
              <li>An intuitive interface that made creation fun for everyone</li>
            </ul>
            <p className="leading-relaxed bg-white/50 p-4 rounded-lg border-l-4 border-amber-500">
              <strong>Credit & Attribution:</strong> This modern version is dedicated to preserving h071019's original work. All credit for the original design, art style, and concept belongs to them. We are merely stewards of their creation, ensuring it remains accessible to all.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">🎯</span> Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <div className="text-4xl mb-3">🕹️</div>
              <h3 className="font-bold text-lg mb-2 text-pink-600">Preserve</h3>
              <p className="text-gray-700 text-sm">
                Keep iconic internet creations alive for future generations to enjoy and appreciate.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-lg mb-2 text-blue-600">Share</h3>
              <p className="text-gray-700 text-sm">
                Make creative tools accessible to everyone, regardless of technical skill or resources.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-bold text-lg mb-2 text-green-600">Inspire</h3>
              <p className="text-gray-700 text-sm">
                Spark creativity and nostalgia through simple, charming digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">⚙️</span> How It Works
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              The original Square Face Generator was built using Adobe Flash technology. To make it work on modern browsers (which no longer support Flash), we've recreated the experience using:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-purple-600 mb-2">Ruffle Flash Emulator</h4>
                <p className="text-sm">
                  For the authentic experience on our main page, we use Ruffle - an open-source Flash player emulator that runs original Flash content in modern browsers.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">HTML5 Canvas</h4>
                <p className="text-sm">
                  For instant loading and mobile performance, our modern version uses HTML5 Canvas technology with no external dependencies.
                </p>
              </div>
            </div>
            <p className="leading-relaxed">
              Both versions are completely free, require no registration, and process everything locally in your browser for maximum privacy.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-3xl">📬</span> Get in Touch
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              We'd love to hear from you! Whether you have questions, feedback, or just want to share the avatar you created, reach out to us.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:contact@squarefacegenerator.run" className="text-pink-600 hover:text-pink-700">contact@squarefacegenerator.run</a></p>
              <p className="mb-2"><strong>Website:</strong> <a href="https://squarefacegenerator.run" className="text-pink-600 hover:text-pink-700">squarefacegenerator.run</a></p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-amber-200 to-pink-200 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Your Avatar Today!</h2>
          <p className="text-gray-700 mb-6">
            Join thousands of users creating cute pixel avatars. Free forever, no registration required.
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
