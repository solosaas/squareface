import { Metadata } from "next"
import { RuffleFlashGenerator } from "@/components/ruffle-flash-generator"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Square Face Generator - Free Icon Maker | Flash Museum",
  canonical: "https://squarefacegenerator.run/",
  description: "The original Flash Museum icon maker by h071019. Create cute pixel avatars free. Best Picrew alternative for Discord PFP.",
  keywords: "square face generator,icon generator,flashmuseum,pixel avatar maker,picrew alternative,h071019",
  openGraph: {
    type: "website",
    title: "Square Face Generator - Free Icon Maker | Flash Museum",
    description: "The original Flash Museum icon maker by h071019. Create cute pixel avatars free. Best Picrew alternative for Discord PFP.",
    url: "https://squarefacegenerator.run/",
    siteName: "Square Face Generator",
    images: [
      {
        url: "https://squarefacegenerator.run/twitter-card.png",
        width: 1000,
        height: 630,
        alt: "Square Face Generator - Flash Museum Nostalgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@squarefacegen",
    title: "🎮 The Classic Icon Generator is BACK! ✨ Create Your Avatar Now",
    description: "Remember 2013? Create cute pixel avatars in SECONDS! 🎨 Free, no signup, instant download. Your perfect Discord PFP awaits! 🚀",
    images: ["https://squarefacegenerator.run/twitter-card.png"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50">
      {/* Flash Generator Section - AvatarCarousel is embedded inside */}
      <section id="generator">
        <RuffleFlashGenerator swfUrl="/square-face.swf" />
      </section>

      {/* Nostalgic Hero Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent">
            Square Face Generator - Free Icon Maker
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            The <strong className="text-amber-600">Square Face Icon Generator</strong> that defined the 2013 internet era is back.
          </p>
          <p className="text-lg text-gray-600">
            Originally created by the legendary artist <strong className="text-green-600">h071019</strong>, this cute pixel avatar maker brought joy to thousands on Flash Museum.
          </p>
        </div>

        {/* Nostalgia Memory Lane */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            ✨ A Trip Down Memory Lane ✨
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              Do you remember the golden age of the internet? When Flash Museum was our playground, and making cute pixel avatars was the highlight of our day? Those lazy afternoons clicking through hairstyles, eyes, and accessories to create the perfect square face icon...
            </p>
            <p className="leading-relaxed mb-4">
              This is the <strong>original</strong> Square Face Generator by h071019 — preserved exactly as it was, now working again on modern devices. No Flash Player needed. Just pure nostalgia in your browser.
            </p>
            <p className="leading-relaxed">
              Perfect for your <strong>Discord PFP</strong>, <strong>Twitter avatar</strong>, <strong>TikTok profile</strong>, or anywhere you want to show off that aesthetic pixel art style. It's the best free <strong>Picrew alternative</strong> for that retro internet vibe.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">200+ Customization Options</h3>
            <p className="text-gray-600 text-sm">12 categories with endless combinations — skin, hair, eyes, expressions, accessories & more</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Works on Every Device</h3>
            <p className="text-gray-600 text-sm">iPhone, Android, tablet, or desktop — create avatars anywhere, anytime with zero installation</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl mb-3">💝</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Completely Free Forever</h3>
            <p className="text-gray-600 text-sm">No sign-up, no watermarks, no limits. Download unlimited 256×256 PNG avatars instantly</p>
          </div>
        </div>
      </section>

      {/* How to Create Section */}
      <section id="steps" className="bg-gradient-to-r from-amber-100 via-pink-100 to-green-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Create Your Pixel Avatar in 3 Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-3 text-amber-600">Choose Your Features</h3>
              <p className="text-gray-600">
                Click through 12 categories — pick your skin tone, hairstyle, eyes, expression, and accessories. Or hit the random button for instant inspiration!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-3 text-pink-600">Customize Colors</h3>
              <p className="text-gray-600">
                Make it uniquely yours! Change hair color, eye color, skin tone, and more. Express your aesthetic with endless color options.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Save & Share</h3>
              <p className="text-gray-600">
                Click SAVE to download your 256×256 pixel avatar. Use it as your Discord PFP, Twitter icon, TikTok profile, or anywhere you like!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section id="platforms" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Perfect For Every Platform
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">💬</div>
              <p className="font-semibold text-gray-800">Discord PFP</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🐦</div>
              <p className="font-semibold text-gray-800">Twitter Avatar</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🎵</div>
              <p className="font-semibold text-gray-800">TikTok Profile</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🎮</div>
              <p className="font-semibold text-gray-800">Gaming Icons</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">📺</div>
              <p className="font-semibold text-gray-800">YouTube</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">📸</div>
              <p className="font-semibold text-gray-800">Instagram</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">💼</div>
              <p className="font-semibold text-gray-800">Twitch</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🎨</div>
              <p className="font-semibold text-gray-800">Aesthetic Vibe</p>
            </div>
          </div>
        </div>
      </section>

      {/* About h071019 Section */}
      <section className="bg-white/80 backdrop-blur py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            About the Original Creator
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-center leading-relaxed mb-4">
              <strong className="text-amber-600">h071019</strong> is the brilliant Japanese artist behind the iconic Square Face Icon Generator that captivated the early 2010s internet. Their creation, hosted on <strong className="text-green-600">Flash Museum</strong>, became a beloved part of internet culture — a simple yet charming tool that let anyone create adorable pixel avatars.
            </p>
            <p className="text-center leading-relaxed">
              We've preserved this classic so you can experience the same joy that thousands felt back in 2013. This is the authentic original — not a clone, not a remake. The same 12 categories, the same cute aesthetic, the same nostalgic feeling.
            </p>
          </div>
        </div>
      </section>

      {/* Tips & Tricks Section - SEO Rich Content */}
      <section className="py-16 bg-gradient-to-br from-amber-50/50 to-green-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            💡 Pro Tips & Tricks for Square Face Generator
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-600">
                <span>🎨</span> Color Coordination Tips
              </h3>
              <p className="text-gray-700 text-sm">
                Use the color picker to match your brand colors or create aesthetic palettes. Try matching hair color with accessories for a cohesive look. Popular combinations include pastel pink + blue, mint green + lavender, and the classic black + white aesthetic.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-pink-600">
                <span>👀</span> Expression Combinations
              </h3>
              <p className="text-gray-700 text-sm">
                Eye and mouth combinations can drastically change your avatar's mood! Try a wink with a smile for a playful look, sleepy eyes with a small smile for a cute aesthetic, or surprised eyes with an open mouth for excitement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-green-600">
                <span>⚡</span> Layer Like a Pro
              </h3>
              <p className="text-gray-700 text-sm">
                Start with larger elements like face shape and hairstyle before adding small details like glasses or blush. This layering approach ensures balanced proportions and prevents elements from looking crowded.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-blue-600">
                <span>🎲</span> Use the Random Button
              </h3>
              <p className="text-gray-700 text-sm">
                Feeling stuck? The random generator is your best friend! It creates unique combinations you might not think of yourself. Use it as inspiration, then fine-tune the colors and details to make it yours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-purple-600">
                <span>🌟</span> Style Guide
              </h3>
              <p className="text-gray-700 text-sm">
                Explore different aesthetics! Go kawaii with pastel colors and cute expressions, try cool vibes with sunglasses and neutral tones, or create an aesthetic avatar with matching accessories and outfits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-rose-600">
                <span>💾</span> Best Export Practices
              </h3>
              <p className="text-gray-700 text-sm">
                Your 256×256 PNG exports have transparent backgrounds, making them perfect for overlays. For Discord, use the full square — it displays beautifully. For circular profile frames, position your avatar's face in the center before saving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - SEO Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Square Face Generator?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-amber-600">✅ 100% Free Forever</h3>
              <p className="text-gray-700 text-sm">
                No hidden costs, no premium tiers, no limitations. Enjoy the full Square Face Generator experience without spending a dime. Create unlimited avatars, download instantly, use anywhere.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-pink-600">✅ No Registration Required</h3>
              <p className="text-gray-700 text-sm">
                We value your privacy. No account needed, no personal information collected. Create, customize, and download your square face avatars instantly without any sign-up process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-green-600">✅ Instant High-Quality Downloads</h3>
              <p className="text-gray-700 text-sm">
                Get your creations as crisp 256×256 pixel PNG files with transparent backgrounds. Perfect for Discord, Twitter, TikTok, Instagram, YouTube, gaming platforms, and more.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-blue-600">✅ Real-Time Preview</h3>
              <p className="text-gray-700 text-sm">
                See your changes instantly as you make them. Our square face icon generator updates in real-time, so you always know exactly what your avatar will look like.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-purple-600">✅ Random Generator Feature</h3>
              <p className="text-gray-700 text-sm">
                Feeling uninspired? Hit the random button for instant inspiration! Discover new combinations and let the square face generator surprise you with unique creations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-rose-600">✅ Privacy Protected</h3>
              <p className="text-gray-700 text-sm">
                All avatar creation happens locally in your browser. Your designs are never uploaded to our servers. Your square face generator activity stays completely private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - SEO Content */}
      <section className="py-16 bg-white/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Square Face Generator vs Other Avatar Makers
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-6">
              Why choose Square Face Generator over other tools? Our square face icon generator offers unique advantages that make it the best choice for creating cute pixel avatars.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Best Picrew Alternative</h4>
                  <p className="text-gray-600 text-sm">Similar cute avatar creation with more customization options. No account needed unlike some Picrew alternatives.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">More Categories Than Competitors</h4>
                  <p className="text-gray-600 text-sm">12 comprehensive customization categories with 200+ options. More choices than most avatar makers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Unlimited Color Options</h4>
                  <p className="text-gray-600 text-sm">Unlike other square face icon generators, we offer complete color freedom. Pick any color for any element.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Authentic Flash Museum Experience</h4>
                  <p className="text-gray-600 text-sm">This is the original h071019 creation, not a clone. Experience the authentic 2013 internet nostalgia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded with 20+ Questions */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">What is Square Face Generator?</h3>
              <p className="text-gray-700">
                Square Face Generator is the classic pixel avatar maker from Flash Museum, originally created by h071019. It creates cute 256×256 pixel square face icons with 12 customization categories — skin, hair, eyes, mouth, glasses, hats, clothes, and more. It's the perfect free Picrew alternative for Discord, Twitter, and TikTok PFPs with that nostalgic 2013 aesthetic.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Is Square Face Generator completely free?</h3>
              <p className="text-gray-700">
                Yes! Square Face Generator is 100% free with no limitations. No registration required, no watermarks, no hidden fees. Create unlimited avatars and download them instantly as PNG files. Unlike some Picrew alternatives, our square face icon generator offers full access to all features completely free.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Is this the original Flash Museum version?</h3>
              <p className="text-gray-700">
                Absolutely! This is the authentic Square Face Icon Generator originally created by h071019 for Flash Museum. We've preserved the original experience so you can relive those 2013 internet memories exactly as they were. Not a clone, not a remake — the real deal.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Can I use Square Face Generator on my phone?</h3>
              <p className="text-gray-700">
                Yes! Square Face Generator works perfectly on iPhone, iPad, Android phones and tablets. No app download needed — it runs directly in your mobile browser. The interface is touch-friendly and optimized for all screen sizes.
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Is Square Face Generator a good Picrew alternative?</h3>
              <p className="text-gray-700">
                Many users consider Square Face Generator the best Picrew alternative for creating cute pixel-style avatars. It offers that nostalgic Flash Museum aesthetic perfect for Discord PFPs, Twitter avatars, TikTok profiles, and gaming icons. The 2013 internet charm can't be replicated!
              </p>
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">What happened to Flash Museum Square Face Generator?</h3>
              <p className="text-gray-700">
                After Adobe discontinued Flash Player in 2020, many Flash games became unplayable. But we've preserved the original Square Face Icon Generator so you can still enjoy this beloved avatar maker from h071019. The Flash Museum classic lives on!
              </p>
            </div>

            {/* Question 7 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">What size are Square Face Generator avatars?</h3>
              <p className="text-gray-700">
                All avatars from Square Face Generator are downloaded as 256×256 pixels in PNG format with transparent backgrounds. This perfect square size is ideal for Discord PFPs, Twitter icons, TikTok profile pictures, YouTube avatars, and gaming platform icons.
              </p>
            </div>

            {/* Question 8 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Can I use my Square Face avatar commercially?</h3>
              <p className="text-gray-700">
                Square Face Generator avatars are intended for personal use — perfect for Discord, Twitter, TikTok, YouTube, Twitch, gaming profiles, and social media. For commercial use, please credit the original creator h071019.
              </p>
            </div>

            {/* Question 9 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Does Square Face Generator need installation?</h3>
              <p className="text-gray-700">
                No installation needed! Square Face Generator runs entirely in your browser using HTML5 technology. Unlike older Flash tools that required plugins, our square face icon generator works instantly in Chrome, Firefox, Safari, and Edge without any downloads.
              </p>
            </div>

            {/* Question 10 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">How many Square Face Generator avatars can I create?</h3>
              <p className="text-gray-700">
                Create millions of unique combinations! With 200+ customization options across 12 categories and unlimited color choices, Square Face Generator lets you create endless unique avatars. There's no limit to how many you can make and download.
              </p>
            </div>

            {/* Question 11 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Is Square Face Generator privacy protected?</h3>
              <p className="text-gray-700">
                Yes! Square Face Generator protects your privacy completely. All avatar creation happens locally in your browser — we don't upload your designs to servers and we don't collect personal information. Your creations stay 100% private.
              </p>
            </div>

            {/* Question 12 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">What makes Square Face Generator unique?</h3>
              <p className="text-gray-700">
                Square Face Generator stands out with authentic Flash Museum heritage, 200+ customization options, real-time preview, instant downloads without registration, and complete privacy protection. But most importantly — it captures that nostalgic 2013 internet aesthetic that modern tools can't replicate.
              </p>
            </div>

            {/* Question 13 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">How do I use the random generator feature?</h3>
              <p className="text-gray-700">
                Just click the "Random" button in Square Face Generator! It will instantly generate a completely random avatar with unique combinations of features. You can then customize further or click random again for more inspiration. It's the fastest way to discover new looks!
              </p>
            </div>

            {/* Question 14 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Why does Square Face Generator have a nostalgic aesthetic?</h3>
              <p className="text-gray-700">
                Square Face Generator captures the authentic 2013 internet era aesthetic from Flash Museum. The pixel art style, cute anime-inspired features, simple interface, and kawaii charm all contribute to that beloved nostalgic vibe that defined early internet culture.
              </p>
            </div>

            {/* Question 15 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Can I create anime-style avatars?</h3>
              <p className="text-gray-700">
                Yes! Square Face Generator offers anime-inspired options including large expressive eyes, cute kawaii expressions, colorful hairstyles, and accessories that match the anime aesthetic. It's perfect for creating anime-style PFPs for Discord and social media.
              </p>
            </div>

            {/* Question 16 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Is Square Face Generator better than Picrew for aesthetic avatars?</h3>
              <p className="text-gray-700">
                Square Face Generator is the best Picrew alternative for aesthetic pixel avatars with that Flash Museum nostalgia. While Picrew offers many styles, Square Face Generator focuses on the classic square face pixel art that defined early 2010s internet culture.
              </p>
            </div>

            {/* Question 17 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">How do I save my Square Face avatar?</h3>
              <p className="text-gray-700">
                Simply click the green "SAVE" button in Square Face Generator! Your avatar will instantly download as a 256×256 PNG file with transparent background. Save it anywhere on your device and upload it to Discord, Twitter, TikTok, or any platform you like.
              </p>
            </div>

            {/* Question 18 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">What platforms work best with Square Face Generator avatars?</h3>
              <p className="text-gray-700">
                Square Face Generator avatars are perfect for Discord PFPs (they display beautifully in the square format), Twitter/X avatars, TikTok profile pictures, YouTube channel icons, Twitch avatars, Instagram profiles, Reddit avatars, and gaming platforms like Steam and Epic Games.
              </p>
            </div>

            {/* Question 19 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Can I create matching avatars with friends?</h3>
              <p className="text-gray-700">
                Absolutely! Square Face Generator is perfect for creating matching or themed avatars with friends. Share the same color scheme, choose complementary hairstyles, or create variations of the same base design. Great for friend groups, gaming teams, or couples!
              </p>
            </div>

            {/* Question 20 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Why is Square Face Generator so popular?</h3>
              <p className="text-gray-700">
                Square Face Generator's popularity comes from its authentic Flash Museum heritage, nostalgic 2013 internet aesthetic, kawaii cute style, and ease of use. It's free, requires no signup, and creates adorable pixel avatars perfect for the PFP culture across social media and gaming platforms.
              </p>
            </div>

            {/* Question 21 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">How do I create aesthetic avatars?</h3>
              <p className="text-gray-700">
                For aesthetic avatars in Square Face Generator, try pastel color palettes (pink + mint, lavender + blue), add cute accessories like glasses or bows, choose gentle expressions, and coordinate hair and clothing colors. The kawaii and aesthetic communities love this pixel art style!
              </p>
            </div>

            {/* Question 22 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Is there a Square Face Generator app?</h3>
              <p className="text-gray-700">
                Square Face Generator works as a web app — no download needed! Just open squarefacegenerator.run in any browser on iPhone, Android, Mac, or PC. This means you always have access to the latest features without updating an app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Try Canvas Version CTA */}
      <section className="bg-gradient-to-r from-amber-200 to-green-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Want an Instant-Loading Version?
          </h2>
          <p className="text-gray-700 mb-6">
            Try our modern Canvas recreation — same cute look, optimized for touch devices with zero loading time.
          </p>
          <a
            href="/modern"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-green-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-green-600 transition shadow-lg"
          >
            Try Canvas Version →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
