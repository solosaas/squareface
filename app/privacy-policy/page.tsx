import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Square Face Generator",
  description: "Privacy Policy for Square Face Generator. Learn how we protect your privacy when using our free square face avatar generator.",
  keywords: ["privacy policy", "square face generator privacy", "avatar generator privacy", "data protection"],
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Square Face Generator ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your information when you use our square face avatar generator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Information We Collect</h2>
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
                <p className="font-semibold text-pink-800">We do not collect any personal information.</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">Square Face Generator is designed with privacy in mind:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All avatar creation happens locally in your browser</li>
                <li>No images are uploaded to our servers</li>
                <li>No account registration is required</li>
                <li>No personal data is stored or transmitted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not use cookies for tracking purposes. We do not use any analytics or tracking tools that collect personal information. Your browsing experience on our website remains completely private.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Local Storage</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use your browser's local storage to save your avatar preferences temporarily. This data stays on your device and is never sent to our servers. You can clear this data at any time through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Square Face Generator does not integrate with third-party services that collect personal data. Your avatar creations remain private and are never shared with any external parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Since we don't collect personal data, there is no risk of your personal information being compromised through our service. All processing occurs locally on your device, giving you complete control over your creations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our service is safe for users of all ages. We do not knowingly collect any personal information from anyone, including children under 13. Parents can feel confident that their children can use our service safely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Avatar Downloads</h2>
              <p className="text-gray-600 leading-relaxed">
                When you download your avatar, the file is saved directly to your device. We do not keep copies of downloaded avatars on our servers. Once you save your avatar, it is completely under your control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please feel free to reach out to us. We are committed to addressing any concerns you may have.
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
            href="/terms-of-service"
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            View our Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  )
}
