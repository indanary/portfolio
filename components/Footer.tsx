"use client"

import Link from "next/link"
import {motion, useScroll, useTransform, useMotionTemplate} from "framer-motion"
import {useRef} from "react"

export default function Footer() {
	const ref = useRef(null)

	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 0])
	const y = useTransform(scrollYProgress, [0, 0.4, 0.8], [40, 0, -40])
	const blur = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0, 1])

	const filter = useMotionTemplate`blur(${blur}px)`

	return (
		<motion.footer
			ref={ref}
			style={{opacity, y, filter}}
			className="border-t border-[var(--border)]"
		>
			<div className="max-w-[68ch] mx-auto px-5 sm:px-6 flex flex-col items-center gap-8 sm:gap-10 py-16 sm:py-20 text-center">
				{/* Title */}
				<div className="flex flex-col items-center gap-3">
					<h2 className="font-medium text-lg tracking-tight">
						Connect
					</h2>

					<p className="text-[var(--muted)] text-sm sm:text-base">
						Feel free to reach out at{" "}
						<a
							href="mailto:indanary@gmail.com"
							className="underline hover:opacity-70 transition"
						>
							indanary@gmail.com
						</a>
					</p>
				</div>

				{/* Social links */}
				<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm">
					<Link
						href="https://www.linkedin.com/in/indana-rishi/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--muted)] hover:text-[var(--foreground)] transition hover:-translate-y-[1px]"
					>
						LinkedIn
					</Link>

					<Link
						href="https://instagram.com/indanarishi"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--muted)] hover:text-[var(--foreground)] transition hover:-translate-y-[1px]"
					>
						Instagram
					</Link>
				</div>

				{/* Copyright */}
				<p className="text-xs text-[var(--muted)]">
					© {new Date().getFullYear()} Indana Rishi
				</p>
			</div>
		</motion.footer>
	)
}
