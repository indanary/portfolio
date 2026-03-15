"use client"

import {motion, useScroll, useTransform} from "framer-motion"

export default function BackToTop() {
	const {scrollY} = useScroll()

	const opacity = useTransform(scrollY, [200, 600], [0, 1])
	const scale = useTransform(scrollY, [200, 600], [0.8, 1])

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<motion.button
			onClick={scrollToTop}
			style={{opacity, scale}}
			className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--background)] shadow-sm hover:scale-110 transition cursor-pointer"
			aria-label="Back to top"
		>
			<svg width="16" height="16" viewBox="0 0 24 24">
				<path
					d="M12 19V5M12 5L5 12M12 5L19 12"
					stroke="currentColor"
					strokeWidth="2"
				/>
			</svg>
		</motion.button>
	)
}
