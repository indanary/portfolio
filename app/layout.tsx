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
	metadataBase: new URL("https://www.indanary.com"),

	title: {
		default: "Indana Rishi — Software Engineer",
		template: "%s — Indana Rishi",
	},

	description:
		"Personal website of Indana Rishi. Writing about software engineering, psychology, philosophy, and building thoughtful systems.",

	alternates: {
		canonical: "/",
	},

	openGraph: {
		title: "Indana Rishi",
		description:
			"Writing about software engineering, psychology, philosophy, and building thoughtful systems.",
		url: "https://www.indanary.com",
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

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="google-site-verification"
					content="IbSCkI7_PJbd30hcNP7wurKNrIrDPMeTJ7i3sITPBKc"
				/>
			</head>

			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
