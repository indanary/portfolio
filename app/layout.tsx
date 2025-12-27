import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata = {
	title: {
		default: "Indana Rishi — Software Engineer",
		template: "%s — Indana Rishi",
	},
	description:
		"Personal website of Indana Rishi. Writing about software engineering, psychology, philosophy, and building thoughtful systems.",
	metadataBase: new URL("https://YOURDOMAIN.com"),
	openGraph: {
		title: "Indana Rishi",
		description:
			"Writing about software engineering, psychology, philosophy, and building thoughtful systems.",
		url: "https://YOURDOMAIN.com",
		siteName: "Indana Rishi",
		locale: "en_US",
		type: "website",
		images: ["/og.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Indana Rishi",
		description:
			"Writing about software engineering, psychology, philosophy, and building thoughtful systems.",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
