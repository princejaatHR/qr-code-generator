import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for our QR code generator service, detailing how we handle your data.",
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Privacy Policy</h1>

        <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
          <p>Last updated: April 26, 2024</p>

          <h2>1. Introduction</h2>
          <p>
            At QR Code Generator, we respect your privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard your information when you use our website and
            services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information that you provide directly to us when using our service, including:</p>
          <ul>
            <li>Contact information (such as name and email address) when you contact us</li>
            <li>Content you input to generate QR codes</li>
            <li>Usage data and analytics information</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing and maintaining our service</li>
            <li>Improving and personalizing user experience</li>
            <li>Responding to your requests and inquiries</li>
            <li>Analyzing usage patterns to enhance our service</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. QR Code Content</h2>
          <p>
            The content you input to generate QR codes is processed in your browser. We do not store the content of your
            QR codes on our servers. The QR codes you generate are created client-side and are not saved unless you
            choose to download them.
          </p>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service and hold certain
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, provide the service on our
            behalf, perform service-related services, or assist us in analyzing how our service is used. These third
            parties have access to your personal data only to perform these tasks on our behalf and are obligated not to
            disclose or use it for any other purpose.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
            information from children under 13. If we discover that a child under 13 has provided us with personal
            information, we immediately delete this from our servers.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "last updated" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@qrcodegenerator.com.</p>
        </div>
      </div>
    </div>
  )
}
