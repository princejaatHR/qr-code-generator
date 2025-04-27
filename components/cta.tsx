import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="rounded-lg bg-primary/10 p-8 md:p-12 lg:p-16 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Ready to Create Your QR Code?
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
          Generate custom QR codes for your business, personal use, or marketing campaigns in seconds.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-base">
            <Link href="/#">Create QR Code Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
