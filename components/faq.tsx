import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is a QR code?",
      answer:
        "A QR (Quick Response) code is a type of matrix barcode that contains information such as URLs, text, contact information, or other data. When scanned with a smartphone camera or QR code reader, it quickly directs users to the encoded information.",
    },
    {
      question: "How do I scan a QR code?",
      answer:
        "Most modern smartphones can scan QR codes directly through the camera app. Simply open your camera, point it at the QR code, and tap on the notification that appears. Some devices may require a dedicated QR code scanner app.",
    },
    {
      question: "Are the QR codes generated on this site permanent?",
      answer:
        "Yes, the QR codes you generate are permanent and will work as long as the content they link to (such as websites) remains active. We don't store your QR codes on our servers - they're generated in your browser and you can download them for future use.",
    },
    {
      question: "What's the best format to download my QR code in?",
      answer:
        "For most digital uses, PNG format works well. If you need to resize the QR code for printing or large displays, SVG is better as it's a vector format that can be scaled without losing quality.",
    },
    {
      question: "What is error correction in QR codes?",
      answer:
        "Error correction allows a QR code to be readable even if a portion of it is damaged or obscured. Higher error correction levels make the QR code more resilient but also more dense. For most uses, the 'Medium' level provides a good balance.",
    },
    {
      question: "Can I use custom colors for my QR code?",
      answer:
        "Yes, you can customize both the foreground and background colors of your QR code. However, it's important to maintain sufficient contrast between the colors to ensure the QR code remains scannable.",
    },
  ]

  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Find answers to common questions about QR codes and our generator.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
