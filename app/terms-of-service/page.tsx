import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Square Face Generator",
  description: "Terms of Service for Square Face Generator. Read the terms and conditions for using our free square face avatar generator.",
  keywords: ["terms of service", "square face generator terms", "avatar generator terms", "user agreement"],
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8 transition-colors"
        >
          ← Back to Square Face Generator
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Square Face Generator, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use our service. These Terms constitute a legally binding agreement between you and Square Face Generator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                Square Face Generator is a free online tool that allows users to create customizable square face avatars and pixel-style icons. Our service enables you to design unique avatars by choosing from various facial features, colors, and accessories. The service is provided "as is" without any guarantees or warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Permitted Use</h2>
              <p className="text-gray-600 leading-relaxed mb-3">You may use Square Face Generator for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Creating avatars for personal use (social media profiles, gaming accounts, forums, etc.)</li>
                <li>Creating avatars for non-commercial projects</li>
                <li>Educational and creative purposes</li>
                <li>Testing and prototyping</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Prohibited Activities</h2>
              <p className="text-gray-600 leading-relaxed mb-3">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer, copy, or duplicate the service</li>
                <li>Use automated systems to access the service in a manner that could damage or overload our servers</li>
                <li>Use avatars to harass, abuse, or harm others</li>
                <li>Claim ownership of the Square Face Generator service or its underlying technology</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Intellectual Property Rights</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
                <p className="font-semibold text-blue-800">Your Creations</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Avatars you create using Square Face Generator are yours for personal use. You may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Use them on social media profiles</li>
                <li>Use them on personal websites and blogs</li>
                <li>Use them in non-commercial projects</li>
                <li>Share them with friends and family</li>
              </ul>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded-r-lg my-4">
                <p className="font-semibold text-gray-800">Our Content</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The Square Face Generator website, including its design, code, artwork assets, and feature combinations, are owned by us and protected by intellectual property laws. You may not copy, modify, or redistribute our service without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Commercial Use</h2>
              <p className="text-gray-600 leading-relaxed">
                If you wish to use avatars created with Square Face Generator for commercial purposes, please contact us to discuss licensing options. Commercial use includes but is not limited to: selling avatars, using avatars in commercial products, or using avatars for business branding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                Square Face Generator is provided "as is" without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted, error-free, secure, or meet your specific requirements. We are not responsible for any loss of data or avatars that you create.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, Square Face Generator shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. This includes but is not limited to damages for loss of profits, data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to keep the service available at all times. However, we reserve the right to modify, suspend, or discontinue the service at any time without prior notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">10. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the service after changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">11. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where we are located.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">12. Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">13. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us. We are here to help clarify any concerns you may have.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> contact@squarefacegenerator.app
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <Link
            href="/privacy-policy"
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            View our Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  )
}
