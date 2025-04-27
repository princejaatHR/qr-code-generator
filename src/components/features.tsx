import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { QrCode, Palette, Shield, Zap, Download, Share2 } from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: <QrCode className='h-10 w-10 text-primary' />,
			title: "Multiple QR Types",
			description:
				"Create QR codes for URLs, text, email, phone, WiFi, location, and events.",
		},
		{
			icon: <Palette className='h-10 w-10 text-primary' />,
			title: "Customizable Design",
			description:
				"Personalize your QR codes with custom colors, sizes, and error correction levels.",
		},
		{
			icon: <Shield className='h-10 w-10 text-primary' />,
			title: "Error Correction",
			description:
				"Choose from different error correction levels to ensure your QR code is scannable even if damaged.",
		},
		{
			icon: <Zap className='h-10 w-10 text-primary' />,
			title: "Instant Generation",
			description:
				"Generate QR codes instantly with real-time preview as you customize.",
		},
		{
			icon: <Download className='h-10 w-10 text-primary' />,
			title: "Multiple Formats",
			description:
				"Download your QR codes in PNG or SVG formats for different use cases.",
		},
		{
			icon: <Share2 className='h-10 w-10 text-primary' />,
			title: "Easy Sharing",
			description:
				"Copy your QR code to clipboard for quick sharing across applications.",
		},
	];

	return (
		<section className='container mx-auto py-12 md:py-16 lg:py-20'>
			<div className='flex flex-col items-center text-center mb-12'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					Powerful Features
				</h2>
				<p className='mt-4 max-w-[700px] text-muted-foreground md:text-xl'>
					Everything you need to create and customize professional QR
					codes.
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{features.map((feature, index) => (
					<Card
						key={index}
						className='border-2 hover:border-primary/50 transition-all'>
						<CardHeader>
							<div className='mb-4'>{feature.icon}</div>
							<CardTitle>{feature.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className='text-base'>
								{feature.description}
							</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
