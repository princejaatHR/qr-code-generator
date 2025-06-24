import type { Metadata } from "next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with our team for questions, feedback, or support regarding our QR code generator.",
};

export default function ContactPage() {
	return (
		<div className='container mx-auto py-12 md:py-16 lg:py-20'>
			<div className='flex flex-col items-center text-center mb-12'>
				<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
					Contact Us
				</h1>
				<p className='mt-4 max-w-[700px] text-muted-foreground md:text-xl'>
					Have questions or feedback? We&apos;d love to hear from you.
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
				<Card>
					<CardHeader>
						<CardTitle>Send Us a Message</CardTitle>
						<CardDescription>
							Fill out the form below and we&apos;ll get back to
							you as soon as possible.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className='space-y-4'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='first-name'>
										First Name
									</Label>
									<Input
										id='first-name'
										placeholder='Enter your first name'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='last-name'>Last Name</Label>
									<Input
										id='last-name'
										placeholder='Enter your last name'
									/>
								</div>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='Enter your email'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='subject'>Subject</Label>
								<Input
									id='subject'
									placeholder='Enter the subject'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='message'>Message</Label>
								<Textarea
									id='message'
									placeholder='Enter your message'
									rows={5}
								/>
							</div>
							<Button type='submit' className='w-full'>
								Send Message
							</Button>
						</form>
					</CardContent>
				</Card>

				<div className='space-y-8'>
					<Card>
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>
								Here are the ways you can reach us directly.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='flex items-start space-x-4'>
								<Mail className='h-5 w-5 text-primary mt-0.5' />
								<div>
									<h3 className='font-medium'>Email</h3>
									<p className='text-muted-foreground'>
										contact@shoppersking.in
									</p>
								</div>
							</div>
							<div className='flex items-start space-x-4'>
								<Phone className='h-5 w-5 text-primary mt-0.5' />
								<div>
									<h3 className='font-medium'>Phone</h3>
									<p className='text-muted-foreground'>
										+91-9311740550
									</p>
								</div>
							</div>
							<div className='flex items-start space-x-4'>
								<MapPin className='h-5 w-5 text-primary mt-0.5' />
								<div>
									<h3 className='font-medium'>Address</h3>
									<p className='text-muted-foreground'>
										sector 9, faridabad
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Frequently Asked Questions</CardTitle>
							<CardDescription>
								Find quick answers to common questions.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<h3 className='font-medium'>
									How quickly will you respond to my inquiry?
								</h3>
								<p className='text-muted-foreground'>
									We typically respond to all inquiries within
									24-48 hours during business days.
								</p>
							</div>
							<div>
								<h3 className='font-medium'>
									Do you offer custom QR code solutions for
									businesses?
								</h3>
								<p className='text-muted-foreground'>
									Yes, we offer custom solutions for
									businesses with specific requirements.
									Please contact us for details.
								</p>
							</div>
							<div>
								<h3 className='font-medium'>
									Is there a limit to how many QR codes I can
									generate?
								</h3>
								<p className='text-muted-foreground'>
									No, there&apos;s no limit to the number of
									QR codes you can generate with our tool.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
