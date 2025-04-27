"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { QrCode, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const routes = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<QrCode className='h-6 w-6 text-primary' />
					<span className='hidden font-bold sm:inline-block'>
						QR Code Generator
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6'>
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								pathname === route.href
									? "text-primary"
									: "text-muted-foreground"
							}`}>
							{route.label}
						</Link>
					))}
					<ModeToggle />
				</nav>

				{/* Mobile Navigation */}
				<div className='flex md:hidden items-center gap-4'>
					<ModeToggle />
					<Button
						variant='ghost'
						size='icon'
						aria-label='Toggle Menu'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? (
							<X className='h-5 w-5' />
						) : (
							<Menu className='h-5 w-5' />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='md:hidden container py-4 border-t'>
					<nav className='flex flex-col space-y-4'>
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={`text-sm font-medium transition-colors hover:text-primary ${
									pathname === route.href
										? "text-primary"
										: "text-muted-foreground"
								}`}
								onClick={() => setIsMenuOpen(false)}>
								{route.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
