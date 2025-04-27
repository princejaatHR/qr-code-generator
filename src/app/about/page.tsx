import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Users, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about our QR code generator service and our mission to provide easy-to-use QR code solutions.",
};

export default function AboutPage() {
	return (
		<div className='container py-12 md:py-16 lg:py-20'>
			<div className='flex flex-col items-center text-center mb-12'>
				<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
					About QR Code Generator
				</h1>
				<p className='mt-4 max-w-[700px] text-muted-foreground md:text-xl'>
					Our mission is to provide the most user-friendly and
					powerful QR code generation tool on the web.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
				<div>
					<h2 className='text-2xl font-bold mb-4'>Our Story</h2>
					<p className='text-muted-foreground mb-4'>
						QR Code Generator was founded in 2023 with a simple
						mission: to make QR code generation accessible to
						everyone. We noticed that many existing tools were
						either too complicated, limited in features, or filled
						with ads and restrictions.
					</p>
					<p className='text-muted-foreground mb-4'>
						Our team of developers and designers came together to
						create a solution that combines powerful features with
						an intuitive interface, allowing anyone to create
						professional QR codes in seconds.
					</p>
					<p className='text-muted-foreground'>
						Today, our tool is used by thousands of individuals and
						businesses worldwide to create QR codes for marketing
						campaigns, business cards, event tickets, product
						packaging, and much more.
					</p>
				</div>

				<div className='grid grid-cols-2 gap-6'>
					<Card>
						<CardContent className='flex flex-col items-center text-center p-6'>
							<Users className='h-12 w-12 text-primary mb-4' />
							<h3 className='text-xl font-bold mb-2'>10,000+</h3>
							<p className='text-muted-foreground'>
								Active Users
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className='flex flex-col items-center text-center p-6'>
							<QrCode className='h-12 w-12 text-primary mb-4' />
							<h3 className='text-xl font-bold mb-2'>
								1 Million+
							</h3>
							<p className='text-muted-foreground'>
								QR Codes Generated
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className='flex flex-col items-center text-center p-6'>
							<Award className='h-12 w-12 text-primary mb-4' />
							<h3 className='text-xl font-bold mb-2'>99.9%</h3>
							<p className='text-muted-foreground'>
								Scan Success Rate
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className='flex flex-col items-center text-center p-6'>
							<Clock className='h-12 w-12 text-primary mb-4' />
							<h3 className='text-xl font-bold mb-2'>24/7</h3>
							<p className='text-muted-foreground'>
								Availability
							</p>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className='mb-16'>
				<h2 className='text-2xl font-bold mb-4 text-center'>
					Our Values
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
					<div className='flex flex-col items-center text-center'>
						<div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
							<span className='text-2xl font-bold text-primary'>
								1
							</span>
						</div>
						<h3 className='text-xl font-bold mb-2'>Simplicity</h3>
						<p className='text-muted-foreground'>
							We believe powerful tools don't have to be
							complicated. Our interface is designed to be
							intuitive and easy to use.
						</p>
					</div>

					<div className='flex flex-col items-center text-center'>
						<div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
							<span className='text-2xl font-bold text-primary'>
								2
							</span>
						</div>
						<h3 className='text-xl font-bold mb-2'>Quality</h3>
						<p className='text-muted-foreground'>
							We&apos;re committed to providing high-quality QR
							codes that scan reliably every time, with
							customization options that don&apos;t compromise
							functionality.
						</p>
					</div>

					<div className='flex flex-col items-center text-center'>
						<div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
							<span className='text-2xl font-bold text-primary'>
								3
							</span>
						</div>
						<h3 className='text-xl font-bold mb-2'>Innovation</h3>
						<p className='text-muted-foreground'>
							We continuously improve our generator with new
							features and optimizations based on user feedback
							and emerging technologies.
						</p>
					</div>
				</div>
			</div>

			<div>
				<h2 className='text-2xl font-bold mb-4 text-center'>
					Our Team
				</h2>
				<p className='text-center text-muted-foreground max-w-2xl mx-auto mb-8'>
					We&apos;re a small team of passionate developers, designers,
					and marketers dedicated to creating the best QR code
					generation experience.
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{[
						{ name: "Alex Johnson", role: "Founder & CEO" },
						{ name: "Maria Garcia", role: "Lead Developer" },
						{ name: "David Kim", role: "UI/UX Designer" },
						{ name: "Sarah Patel", role: "Marketing Director" },
					].map((member, index) => (
						<Card key={index}>
							<CardContent className='p-6 text-center'>
								<div className='w-24 h-24 rounded-full bg-muted mx-auto mb-4'></div>
								<h3 className='font-bold'>{member.name}</h3>
								<p className='text-sm text-muted-foreground'>
									{member.role}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
