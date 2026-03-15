import "./globals.css"
import {Merriweather} from "next/font/google"
import {JetBrains_Mono} from "next/font/google"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	variable: "--font-serif",
})

const mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
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
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta
					name="google-site-verification"
					content="IbSCkI7_PJbd30hcNP7wurKNrIrDPMeTJ7i3sITPBKc"
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
						(function() {
							const theme = localStorage.getItem('theme');
							if (theme === 'dark') {
								document.documentElement.classList.add('dark');
							}
						})();
						`,
					}}
				/>
			</head>

			<body
				className={`${merriweather.variable} ${mono.variable} antialiased`}
			>
				<Header />

				{children}

				<Footer />

				<BackToTop />
			</body>
		</html>
	)
}
