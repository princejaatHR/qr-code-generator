import type { Metadata } from "next"
import QRCodeGenerator from "@/components/qr-code-generator"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "Create Custom QR Codes | QR Code Generator",
  description:
    "Generate custom QR codes for your business, personal use, or marketing campaigns. Free, fast, and easy to use.",
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      <section className="container flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Create Custom QR Codes in Seconds
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Generate beautiful, customizable QR codes for your business, personal use, or marketing campaigns.
        </p>
      </section>

      <section className="container">
        <QRCodeGenerator />
      </section>

      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}
