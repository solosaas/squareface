import { SquareFaceGenerator } from "@/components/square-face-generator"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Square Face Generator - HTML5 Canvas Version",
  description: "Create cute, customizable square face avatars using modern HTML5 Canvas technology. Free online icon maker with 200+ options. Works on all devices with instant downloads.",
  keywords: ["square face generator", "canvas avatar maker", "html5 avatar generator", "pixel avatar creator", "modern icon maker"],
  canonical: "https://squarefacegenerator.run/modern",
  openGraph: {
    title: "Modern Square Face Generator - HTML5 Canvas Version",
    description: "Create cute pixel avatars with our modern HTML5 Canvas version. Fast, mobile-friendly, no loading time.",
    url: "https://squarefacegenerator.run/modern",
    siteName: "Square Face Generator",
    images: [
      {
        url: "/avatars/competitor-8.png",
        width: 256,
        height: 256,
        alt: "Modern Square Face Generator - HTML5 Canvas Avatar Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "200+ Options! Create Your Perfect Pixel Avatar",
    description: "Modern HTML5 Canvas version! 200+ customization options, instant preview, free download. Works on mobile too!",
    images: ["/avatars/competitor-8.png"],
  },
}

export default function ModernPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Generator Section */}
      <section id="generator">
        <SquareFaceGenerator />
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          About the Canvas Version
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to the <strong>modern HTML5 Canvas version</strong> of Square Face Generator. This recreation uses cutting-edge web technology to deliver the same cute pixel avatar experience you love, but with lightning-fast loading and smooth performance on every device.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Inspired by classic Japanese icon makers like Picrew, our tool features multiple customization categories including face shapes, eyes, expressions, hairstyles, and accessories. Create millions of unique combinations with real-time preview as you design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Perfect for Discord profiles, Twitter avatars, TikTok icons, and gaming platforms. Download your creations instantly as high-quality PNG files with transparent backgrounds.
          </p>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to" className="bg-white/70 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How to Create Your Avatar
          </h2>
          <p className="text-gray-700 text-lg mb-10 text-center">
            Creating your perfect pixel avatar is simple and fun. Follow these three easy steps:
          </p>

          <div className="space-y-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">1. Choose Your Features</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Start by selecting features from comprehensive categories: face shapes, eyes, noses, mouths, eyebrows, and accessories. The interface makes it easy to browse through different options with real-time preview, so you can see exactly how your selections look together.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Feeling creative? Try the random button for instant inspiration! It generates unique combinations you might not think of yourself.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">2. Customize Colors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use the intuitive color picker to personalize every element. Change face colors, eye colors, hair shades, and accessory colors with unlimited combinations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you want natural skin tones or creative fantasy colors, the color picker supports any hue you can imagine. The preview updates instantly as you adjust.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">3. Save & Share</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When satisfied with your design, click save to download your avatar instantly as a high-quality PNG file with transparent background.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Use it on Discord, Twitter, TikTok, YouTube, or any platform that accepts custom profile pictures. No watermarks, no waiting - just instant downloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Perfect for Every Platform
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Pixel avatars work beautifully across all your favorite platforms and communities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🎮</span> Discord
              </h3>
              <p className="text-gray-700">
                Stand out in servers with cute pixel avatars perfect for gaming communities. The square format displays beautifully on Discord profiles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>𝕏</span> Twitter/X
              </h3>
              <p className="text-gray-700">
                Create eye-catching profiles that look great in tweets and replies. Build your personal brand with a unique avatar.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>📱</span> TikTok
              </h3>
              <p className="text-gray-700">
                Get noticed with memorable profile pictures. The cute aesthetic fits perfectly with TikTok's creative community.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>▶️</span> YouTube
              </h3>
              <p className="text-gray-700">
                Use as channel icons or create consistent branding for thumbnails. The scalable format looks great at any size.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-gray-800">More Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <h4 className="font-bold mb-2">👤 Profile Pictures</h4>
              <p className="text-gray-600 text-sm">Create unique avatars for social media accounts, forums, and communities.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <h4 className="font-bold mb-2">🏢 Team Avatars</h4>
              <p className="text-gray-600 text-sm">Generate matching avatars for team members, friend groups, or gaming squads.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <h4 className="font-bold mb-2">🎮 Game Characters</h4>
              <p className="text-gray-600 text-sm">Design characters for indie games, apps, or creative projects.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <h4 className="font-bold mb-2">🎨 Creative Projects</h4>
              <p className="text-gray-600 text-sm">Use for design mockups, artistic projects, and visual content creation.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <h4 className="font-bold mb-2">💬 Messaging Apps</h4>
              <p className="text-gray-600 text-sm">Perfect for WhatsApp, Telegram, Discord, and other messaging platforms.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <h4 className="font-bold mb-2">🌐 Websites</h4>
              <p className="text-gray-600 text-sm">Use as author avatars, forum icons, and website profile pictures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-pink-100 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Avatar Maker?
          </h2>
          <p className="text-gray-700 text-lg mb-10 text-center">
            Our tool stands out from other avatar makers with features designed for creativity and convenience.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">💰</span> Completely Free Forever
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No hidden costs, no registration required, and no premium tiers. Create unlimited avatars with access to all features. Unlike other tools that charge for advanced options, everything is included for free.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">🎨</span> Endless Customization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mix and match from numerous facial features and designs. With unlimited color options and multiple feature categories, create millions of unique combinations. More variety than most competitors.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">⚡</span> Instant Downloads
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Get your creation as a high-quality PNG immediately. No watermarks, no waiting, no hassle. Downloads are ready to use on any social media platform.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">📱</span> Works on All Devices
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Using modern HTML5 Canvas technology, it runs perfectly on desktop, tablets, and mobile. No plugins needed - whether on iPhone, Android, Mac, or PC, it works flawlessly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">🔒</span> Privacy First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All avatar creation happens locally in your browser. No designs are uploaded, no data is collected, no accounts required. Your creations stay completely private.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-3xl">🎲</span> Random Generator
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Feeling uninspired? The random feature instantly creates unique avatars to spark creativity. Use it as a starting point, then customize to make it yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Avatar Maker Features
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Comprehensive customization options for creating your perfect pixel avatar.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🙂</span> Multiple Face Shapes
              </h3>
              <p className="text-gray-700">
                Choose from various face styles and expressions to match your vision, from cute to cool to professional.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>👀</span> Expressive Eyes
              </h3>
              <p className="text-gray-700">
                Different eye styles to convey emotions including cute, happy, surprised, sleepy, and many more expressions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>👄</span> Mouth Expressions
              </h3>
              <p className="text-gray-700">
                Smiles, frowns, and everything in between. Express any emotion with the diverse mouth options.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>✏️</span> Eyebrow Styles
              </h3>
              <p className="text-gray-700">
                Various eyebrow shapes for different looks, from subtle to bold, adding personality to your avatar.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>🎨</span> Color Customization
              </h3>
              <p className="text-gray-700">
                Full control over every color element. Customize skin tone, hair color, eye color, and accessories.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>📤</span> Easy Export
              </h3>
              <p className="text-gray-700">
                Download your avatar in high-quality PNG format with transparent background, ready for any platform.
              </p>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Tips & Tricks</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Color Coordination Tips</h4>
                <p className="text-gray-700">
                  Use the color picker to match your brand colors or create aesthetic palettes. Try complementary colors for a striking look or analogous colors for harmony. Popular combinations include pastel pink + blue, mint green + lavender, and classic black + white.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Style Guide</h4>
                <p className="text-gray-700">
                  Explore different aesthetics from kawaii with pastel colors to cool vibes with sunglasses and neutral tones. Coordinate accessories and outfits for a cohesive look.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Random Feature</h4>
                <p className="text-gray-700">
                  Try the random button for instant inspiration. It creates unique combinations you might not think of yourself, then customize further to make it yours.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Best Practices</h4>
                <p className="text-gray-700">
                  Start with the base face before adding features. Layer larger elements like hairstyles first, then add smaller details like glasses or accessories. The real-time preview ensures perfect results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white/70 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How We Compare
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose This Avatar Maker?</h3>
            <p className="text-gray-700 mb-4">
              Our tool combines the best features of classic avatar makers with modern technology. It's completely free with no registration required, extensive customization options, works on all devices, and offers instant downloads without watermarks.
            </p>
            <p className="text-gray-700">
              Similar to popular tools like Picrew, it provides cute avatar creation with an intuitive interface and real-time preview. Plus, your privacy is protected - everything happens locally in your browser.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Features Comparison</h3>
            <p className="text-gray-700 mb-4">
              Unlike many competitors that limit options or charge for premium features, this tool gives you everything for free. Multiple customization categories, unlimited color options, no account required, and instant downloads.
            </p>
            <p className="text-gray-700">
              While other avatar makers might require accounts, add watermarks, or limit your choices, this is designed to be accessible to everyone with a focus on user experience and creative freedom.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">What is this avatar maker?</h3>
              <p className="text-gray-700">
                A free online tool that lets you create cute, customizable pixel-style avatars. With numerous options across multiple categories, create unique icons perfect for Discord, Twitter, TikTok, Instagram, and YouTube profiles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Is it completely free?</h3>
              <p className="text-gray-700">
                Yes! 100% free with no limitations. No registration required, no watermarks, and no hidden fees. Create unlimited avatars and download them instantly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">What size are the avatars?</h3>
              <p className="text-gray-700">
                All avatars are high-quality PNG images optimized for social media platforms. The square format displays beautifully on Discord, Twitter, and most profile picture displays.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Does it need installation?</h3>
              <p className="text-gray-700">
                No installation needed! The tool runs entirely in your browser using modern web technology. Simply open it in Chrome, Firefox, Safari, or Edge and start creating.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Does it work on mobile?</h3>
              <p className="text-gray-700">
                Absolutely! Fully responsive design works great on smartphones and tablets including iPhone, Android, and iPad. The touch-friendly interface makes mobile creation easy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">How many avatars can I create?</h3>
              <p className="text-gray-700">
                Create millions of unique combinations! With numerous options across multiple categories and unlimited color choices, there's no limit to your creativity. No creation limits whatsoever.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Is my privacy protected?</h3>
              <p className="text-gray-700">
                Yes, completely. All avatar creation happens locally in your browser. No designs are uploaded to servers, and no personal information is collected. Your creations stay 100% private.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">How is this different from the Flash version?</h3>
              <p className="text-gray-700">
                This HTML5 Canvas version offers the same cute aesthetic with modern technology - faster loading, smoother performance, and no Flash player required. It works on all current browsers and devices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Can I use avatars commercially?</h3>
              <p className="text-gray-700">
                Avatars are intended for personal use on social media, gaming platforms, and personal projects. For commercial use, please credit the original creator h071019 for the base design inspiration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">What makes this avatar maker unique?</h3>
              <p className="text-gray-700">
                The combination of extensive customization options, real-time preview, instant downloads without registration, and complete privacy protection sets it apart. Plus, the nostalgic pixel art aesthetic captures the charm of classic internet culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
