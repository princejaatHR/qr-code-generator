"use client";

import { useState, useRef, useEffect } from "react";
import QRCode, { QRCodeErrorCorrectionLevel } from "qrcode";
import FileSaver from "file-saver";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Download,
	LinkIcon,
	Mail,
	Phone,
	Wifi,
	MapPin,
	Calendar,
	Copy,
	Check,
	Text,
} from "lucide-react";

export default function QRCodeGenerator() {
	const [activeTab, setActiveTab] = useState("url");
	const [url, setUrl] = useState("https://shoppersking.in");
	const [text, setText] = useState("Welcome, ");
	const [email, setEmail] = useState({ address: "", subject: "", body: "" });
	const [phone, setPhone] = useState("");
	const [wifi, setWifi] = useState({
		ssid: "",
		password: "",
		encryption: "WPA",
	});
	const [location, setLocation] = useState({ latitude: "", longitude: "" });
	const [event, setEvent] = useState({
		title: "",
		start: "",
		end: "",
		location: "",
		description: "",
	});

	const [qrCodeDataURL, setQrCodeDataURL] = useState("");
	const [errorCorrectionLevel, setErrorCorrectionLevel] =
		useState<QRCodeErrorCorrectionLevel>("M");
	const [margin, setMargin] = useState(4);
	const [color, setColor] = useState("#000000");
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [size, setSize] = useState(300);
	const [copied, setCopied] = useState(false);

	const canvasRef = useRef<HTMLCanvasElement>(null);

	const generateQRCode = async () => {
		let qrData = "";

		switch (activeTab) {
			case "url":
				qrData = url;
				break;
			case "text":
				qrData = text;
				break;
			case "email":
				qrData = `mailto:${email.address}?subject=${encodeURIComponent(
					email.subject
				)}&body=${encodeURIComponent(email.body)}`;
				break;
			case "phone":
				qrData = `tel:${phone}`;
				break;
			case "wifi":
				qrData = `WIFI:S:${wifi.ssid};T:${wifi.encryption};P:${wifi.password};;`;
				break;
			case "location":
				qrData = `geo:${location.latitude},${location.longitude}`;
				break;
			case "event":
				let startDate = "";
				let endDate = "";

				// Safely convert dates
				if (event.start) {
					const startDateTime = new Date(event.start);
					if (!isNaN(startDateTime.getTime())) {
						startDate =
							startDateTime
								.toISOString()
								.replace(/[-:]/g, "")
								.split(".")[0] + "Z";
					}
				}

				if (event.end) {
					const endDateTime = new Date(event.end);
					if (!isNaN(endDateTime.getTime())) {
						endDate =
							endDateTime
								.toISOString()
								.replace(/[-:]/g, "")
								.split(".")[0] + "Z";
					}
				}

				// Only include date fields if they are valid
				const eventFields = [
					"BEGIN:VEVENT",
					`SUMMARY:${event.title || ""}`,
					`LOCATION:${event.location || ""}`,
					`DESCRIPTION:${event.description || ""}`,
					...(startDate ? [`DTSTART:${startDate}`] : []),
					...(endDate ? [`DTEND:${endDate}`] : []),
					"END:VEVENT",
				];

				qrData = eventFields.join("\n");
				break;
			default:
				qrData = url;
		}

		try {
			const dataURL = await QRCode.toDataURL(qrData, {
				errorCorrectionLevel,
				margin,
				color: {
					dark: color,
					light: backgroundColor,
				},
				width: size,
			});

			setQrCodeDataURL(dataURL);

			if (canvasRef.current) {
				const canvas = canvasRef.current;
				const ctx = canvas.getContext("2d");
				if (ctx) {
					const img = new Image();
					img.onload = () => {
						canvas.width = img.width;
						canvas.height = img.height;
						ctx.drawImage(img, 0, 0);
					};
					img.src = dataURL;
				}
			}
		} catch (error) {
			console.error("Error generating QR code:", error);
		}
	};

	const downloadQRCode = (format: string) => {
		if (!qrCodeDataURL) return;

		if (format === "svg") {
			QRCode.toString(
				getQRData(),
				{
					errorCorrectionLevel,
					type: "svg",
					margin,
					color: {
						dark: color,
						light: backgroundColor,
					},
					width: size,
				},
				(err, string) => {
					if (err) return console.error(err);
					const blob = new Blob([string], { type: "image/svg+xml" });
					FileSaver.saveAs(blob, "qrcode.svg");
				}
			);
		} else if (format === "png") {
			FileSaver.saveAs(qrCodeDataURL, "qrcode.png");
		}
	};

	const getQRData = () => {
		switch (activeTab) {
			case "url":
				return url;
			case "text":
				return text;
			case "email":
				return `mailto:${email.address}?subject=${encodeURIComponent(
					email.subject
				)}&body=${encodeURIComponent(email.body)}`;
			case "phone":
				return `tel:${phone}`;
			case "wifi":
				return `WIFI:S:${wifi.ssid};T:${wifi.encryption};P:${wifi.password};;`;
			case "location":
				return `geo:${location.latitude},${location.longitude}`;
			case "event":
				const startDate =
					new Date(event.start)
						.toISOString()
						.replace(/[-:]/g, "")
						.split(".")[0] + "Z";
				const endDate =
					new Date(event.end)
						.toISOString()
						.replace(/[-:]/g, "")
						.split(".")[0] + "Z";
				return `BEGIN:VEVENT\nSUMMARY:${event.title}\nLOCATION:${event.location}\nDESCRIPTION:${event.description}\nDTSTART:${startDate}\nDTEND:${endDate}\nEND:VEVENT`;
			default:
				return url;
		}
	};

	const copyQRCode = () => {
		if (canvasRef.current) {
			canvasRef.current.toBlob((blob) => {
				if (blob) {
					navigator.clipboard
						.write([
							new ClipboardItem({
								[blob.type]: blob,
							}),
						])
						.then(() => {
							setCopied(true);
							setTimeout(() => setCopied(false), 2000);
						});
				}
			});
		}
	};

	useEffect(() => {
		generateQRCode();
	}, [
		activeTab,
		url,
		text,
		email,
		phone,
		wifi,
		location,
		event,
		errorCorrectionLevel,
		margin,
		color,
		backgroundColor,
		size,
	]);

	return (
		<div className='grid gap-8 md:grid-cols-2'>
			<Card>
				<CardHeader>
					<CardTitle>QR Code Content</CardTitle>
					<CardDescription>
						Select the type of content you want to encode in your QR
						code.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className='w-full'>
						<TabsList className='grid grid-cols-7 md:grid-cols-7 mb-4 w-full'>
							<TabsTrigger value='url'>
								<LinkIcon className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>URL</span>
							</TabsTrigger>
							<TabsTrigger value='text'>
								<Text className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>Text</span>
							</TabsTrigger>
							<TabsTrigger value='email'>
								<Mail className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>Email</span>
							</TabsTrigger>
							<TabsTrigger value='phone'>
								<Phone className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>Phone</span>
							</TabsTrigger>
							<TabsTrigger value='wifi'>
								<Wifi className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>WiFi</span>
							</TabsTrigger>
							<TabsTrigger value='location'>
								<MapPin className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>
									Location
								</span>
							</TabsTrigger>
							<TabsTrigger value='event'>
								<Calendar className='h-4 w-4 md:mr-2' />
								<span className='hidden sm:inline'>Event</span>
							</TabsTrigger>
						</TabsList>

						<TabsContent value='url' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='url'>Website URL</Label>
								<Input
									id='url'
									placeholder='https://example.com'
									value={url}
									onChange={(e) => setUrl(e.target.value)}
								/>
							</div>
						</TabsContent>

						<TabsContent value='text' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='text'>Text Content</Label>
								<Textarea
									id='text'
									placeholder='Enter your text here'
									value={text}
									onChange={(e) => setText(e.target.value)}
									rows={5}
								/>
							</div>
						</TabsContent>

						<TabsContent value='email' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email Address</Label>
								<Input
									id='email'
									type='email'
									placeholder='example@example.com'
									value={email.address}
									onChange={(e) =>
										setEmail({
											...email,
											address: e.target.value,
										})
									}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='subject'>Subject</Label>
								<Input
									id='subject'
									placeholder='Email subject'
									value={email.subject}
									onChange={(e) =>
										setEmail({
											...email,
											subject: e.target.value,
										})
									}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='body'>Body</Label>
								<Textarea
									id='body'
									placeholder='Email body'
									value={email.body}
									onChange={(e) =>
										setEmail({
											...email,
											body: e.target.value,
										})
									}
									rows={3}
								/>
							</div>
						</TabsContent>

						<TabsContent value='phone' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='phone'>Phone Number</Label>
								<Input
									id='phone'
									type='tel'
									placeholder='+1234567890'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</TabsContent>

						<TabsContent value='wifi' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='ssid'>
									Network Name (SSID)
								</Label>
								<Input
									id='ssid'
									placeholder='WiFi Network Name'
									value={wifi.ssid}
									onChange={(e) =>
										setWifi({
											...wifi,
											ssid: e.target.value,
										})
									}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='password'>Password</Label>
								<Input
									id='password'
									type='password'
									placeholder='WiFi Password'
									value={wifi.password}
									onChange={(e) =>
										setWifi({
											...wifi,
											password: e.target.value,
										})
									}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='encryption'>
									Encryption Type
								</Label>
								<Select
									value={wifi.encryption}
									onValueChange={(value) =>
										setWifi({ ...wifi, encryption: value })
									}>
									<SelectTrigger id='encryption'>
										<SelectValue placeholder='Select encryption type' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='WPA'>
											WPA/WPA2
										</SelectItem>
										<SelectItem value='WEP'>WEP</SelectItem>
										<SelectItem value='nopass'>
											No Password
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</TabsContent>

						<TabsContent value='location' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='latitude'>Latitude</Label>
								<Input
									id='latitude'
									placeholder='e.g. 37.7749'
									value={location.latitude}
									onChange={(e) =>
										setLocation({
											...location,
											latitude: e.target.value,
										})
									}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='longitude'>Longitude</Label>
								<Input
									id='longitude'
									placeholder='e.g. -122.4194'
									value={location.longitude}
									onChange={(e) =>
										setLocation({
											...location,
											longitude: e.target.value,
										})
									}
								/>
							</div>
						</TabsContent>

						<TabsContent value='event' className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='event-title'>Event Title</Label>
								<Input
									id='event-title'
									placeholder='Event Title'
									value={event.title}
									onChange={(e) =>
										setEvent({
											...event,
											title: e.target.value,
										})
									}
								/>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='event-start'>
										Start Date & Time
									</Label>
									<Input
										id='event-start'
										type='datetime-local'
										value={event.start}
										onChange={(e) =>
											setEvent({
												...event,
												start: e.target.value,
											})
										}
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='event-end'>
										End Date & Time
									</Label>
									<Input
										id='event-end'
										type='datetime-local'
										value={event.end}
										onChange={(e) =>
											setEvent({
												...event,
												end: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='event-location'>Location</Label>
								<Input
									id='event-location'
									placeholder='Event Location'
									value={event.location}
									onChange={(e) =>
										setEvent({
											...event,
											location: e.target.value,
										})
									}
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='event-description'>
									Description
								</Label>
								<Textarea
									id='event-description'
									placeholder='Event Description'
									value={event.description}
									onChange={(e) =>
										setEvent({
											...event,
											description: e.target.value,
										})
									}
									rows={3}
								/>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>QR Code Customization</CardTitle>
					<CardDescription>
						Customize the appearance of your QR code.
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-6'>
					<div className='flex flex-col items-center justify-center'>
						{qrCodeDataURL ? (
							<div className='relative p-4 bg-grid rounded-lg'>
								<img
									src={qrCodeDataURL || "/placeholder.svg"}
									alt='Generated QR Code'
									className='max-w-full h-auto'
								/>
								<canvas ref={canvasRef} className='hidden' />
							</div>
						) : (
							<div className='w-64 h-64 bg-muted rounded-lg flex items-center justify-center'>
								<p className='text-muted-foreground'>
									QR Code will appear here
								</p>
							</div>
						)}
					</div>

					<div className='space-y-4'>
						<div className='space-y-2'>
							<div className='flex justify-between'>
								<Label htmlFor='error-correction'>
									Error Correction
								</Label>
								<span className='text-xs text-muted-foreground'>
									{errorCorrectionLevel}
								</span>
							</div>
							<Select
								value={errorCorrectionLevel}
								onValueChange={(value) =>
									setErrorCorrectionLevel(
										value as QRCodeErrorCorrectionLevel
									)
								}>
								<SelectTrigger id='error-correction'>
									<SelectValue placeholder='Select error correction level' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='L'>Low (7%)</SelectItem>
									<SelectItem value='M'>
										Medium (15%)
									</SelectItem>
									<SelectItem value='Q'>
										Quartile (25%)
									</SelectItem>
									<SelectItem value='H'>
										High (30%)
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className='space-y-2'>
							<div className='flex justify-between'>
								<Label htmlFor='margin'>Margin</Label>
								<span className='text-xs text-muted-foreground'>
									{margin} modules
								</span>
							</div>
							<Slider
								id='margin'
								min={0}
								max={10}
								step={1}
								value={[margin]}
								onValueChange={(value) => setMargin(value[0])}
							/>
						</div>

						<div className='space-y-2'>
							<div className='flex justify-between'>
								<Label htmlFor='size'>Size</Label>
								<span className='text-xs text-muted-foreground'>
									{size}px
								</span>
							</div>
							<Slider
								id='size'
								min={100}
								max={500}
								step={10}
								value={[size]}
								onValueChange={(value) => setSize(value[0])}
							/>
						</div>

						<div className='grid grid-cols-2 gap-4'>
							<div className='space-y-2'>
								<Label htmlFor='color'>Foreground Color</Label>
								<div className='flex gap-2'>
									<Input
										type='color'
										id='color'
										value={color}
										onChange={(e) =>
											setColor(e.target.value)
										}
										className='w-12 h-9 p-1'
									/>
									<Input
										type='text'
										value={color}
										onChange={(e) =>
											setColor(e.target.value)
										}
										className='flex-1'
									/>
								</div>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='background-color'>
									Background Color
								</Label>
								<div className='flex gap-2'>
									<Input
										type='color'
										id='background-color'
										value={backgroundColor}
										onChange={(e) =>
											setBackgroundColor(e.target.value)
										}
										className='w-12 h-9 p-1'
									/>
									<Input
										type='text'
										value={backgroundColor}
										onChange={(e) =>
											setBackgroundColor(e.target.value)
										}
										className='flex-1'
									/>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter className='flex flex-col sm:flex-row gap-2'>
					<Button
						onClick={() => downloadQRCode("png")}
						className='w-full sm:w-auto'>
						<Download className='mr-2 h-4 w-4' />
						Download PNG
					</Button>
					<Button
						onClick={() => downloadQRCode("svg")}
						variant='outline'
						className='w-full sm:w-auto'>
						<Download className='mr-2 h-4 w-4' />
						Download SVG
					</Button>
					<Button
						onClick={copyQRCode}
						variant='outline'
						className='w-full sm:w-auto'>
						{copied ? (
							<>
								<Check className='mr-2 h-4 w-4' />
								Copied!
							</>
						) : (
							<>
								<Copy className='mr-2 h-4 w-4' />
								Copy to Clipboard
							</>
						)}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
