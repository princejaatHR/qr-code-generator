import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from 'next/script'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "QR Code Generator | Create Custom QR Codes",
    template: "%s | QR Code Generator",
  },
  description:
    "Generate custom QR codes for your business, personal use, or marketing campaigns. Free, fast, and easy to use.",
  keywords: ["QR code generator", "custom QR codes", "free QR code maker", "QR code design", "QR code creator"],
  authors: [{ name: "QR Code Generator" }],
  creator: "QR Code Generator",
  publisher: "QR Code Generator",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qrcode-generator.vercel.app",
    title: "QR Code Generator | Create Custom QR Codes",
    description:
      "Generate custom QR codes for your business, personal use, or marketing campaigns. Free, fast, and easy to use.",
    siteName: "QR Code Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator | Create Custom QR Codes",
    description:
      "Generate custom QR codes for your business, personal use, or marketing campaigns. Free, fast, and easy to use.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_SEARCH_CONSOLE_VERIFICATION_CODE" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
