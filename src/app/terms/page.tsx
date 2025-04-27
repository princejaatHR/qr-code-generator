import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using our QR code generator service.",
}

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Terms of Service</h1>

        <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
          <p>Last updated: April 26, 2024</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to QR Code Generator. These Terms of Service govern your use of our website and services. By
            accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the
            terms, you may not access the service.
          </p>

          <h2>2. Use of Service</h2>
          <p>
            QR Code Generator provides a platform for creating and customizing QR codes. You may use our service to
            generate QR codes for personal or commercial use, subject to these Terms.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for all activity that occurs under your use of the service. You agree not to use the
            service for any illegal purposes or to conduct any illegal activity, including, but not limited to, fraud,
            phishing, or distributing malware.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are owned by QR Code Generator and are
            protected by international copyright, trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>

          <h2>5. User Content</h2>
          <p>
            You retain all rights to the content you input to generate QR codes. However, by using our service, you
            grant us a non-exclusive, royalty-free license to use, store, and process that content solely for the
            purpose of providing and improving the service.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The service is provided "as is" and "as available" without warranties of any kind, either express or
            implied, including, but not limited to, implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall QR Code Generator be liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
            losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
            will be determined at our sole discretion.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard
            to its conflict of law provisions.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at legal@qrcodegenerator.com.</p>
        </div>
      </div>
    </div>
  )
}
