import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
	const testimonials = [
		{
			quote: "This QR code generator has been a game-changer for our marketing campaigns. The customization options are fantastic!",
			author: "Sarah Johnson",
			role: "Marketing Director",
			avatar: "SJ",
		},
		{
			quote: "I use this tool daily for my small business. It's intuitive, fast, and the QR codes always scan perfectly.",
			author: "Michael Chen",
			role: "Small Business Owner",
			avatar: "MC",
		},
		{
			quote: "The ability to create WiFi QR codes has made it so much easier for guests to connect to our network. Highly recommended!",
			author: "Alex Rodriguez",
			role: "IT Manager",
			avatar: "AR",
		},
	];

	return (
		<section className='container mx-auto py-12 md:py-16 lg:py-20 bg-muted/50'>
			<div className='flex flex-col items-center text-center mb-12'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					What Our Users Say
				</h2>
				<p className='mt-4 max-w-[700px] text-muted-foreground md:text-xl'>
					Thousands of users trust our QR code generator for their
					business and personal needs.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{testimonials.map((testimonial, index) => (
					<Card key={index} className='bg-background'>
						<CardContent className='pt-6'>
							<div className='relative'>
								<div className='absolute -top-6 -left-2 text-6xl text-primary opacity-20'>
									"
								</div>
								<p className='relative z-10 italic text-muted-foreground'>
									{testimonial.quote}
								</p>
							</div>
						</CardContent>
						<CardFooter>
							<div className='flex items-center space-x-4'>
								<Avatar>
									<AvatarFallback className='bg-primary/10 text-primary'>
										{testimonial.avatar}
									</AvatarFallback>
								</Avatar>
								<div>
									<p className='text-sm font-medium'>
										{testimonial.author}
									</p>
									<p className='text-xs text-muted-foreground'>
										{testimonial.role}
									</p>
								</div>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
