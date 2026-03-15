"use client"

import {
	motion,
	useReducedMotion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion"
import {useRef, useState} from "react"

export default function NameMotion() {
	const shouldReduceMotion = useReducedMotion()

	const name = Array.from("Indana Rishi")

	const containerRef = useRef<HTMLDivElement>(null)

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const glowX = useSpring(mouseX, {stiffness: 80, damping: 20})
	const glowY = useSpring(mouseY, {stiffness: 80, damping: 20})

	const [hovered, setHovered] = useState(false)

	function handleMouseMove(e: React.MouseEvent) {
		if (!containerRef.current) return

		const rect = containerRef.current.getBoundingClientRect()

		mouseX.set(e.clientX - rect.left)
		mouseY.set(e.clientY - rect.top)
	}

	const glowOpacity = useTransform(() =>
		hovered && !shouldReduceMotion ? 0.2 : 0,
	)

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="relative flex justify-center w-full"
		>
			{/* Cursor glow */}
			<motion.div
				style={{
					x: glowX,
					y: glowY,
					opacity: glowOpacity,
				}}
				className="pointer-events-none absolute w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[var(--foreground)] hidden sm:block"
			/>

			<motion.h1 className="relative font-bold leading-none tracking-tight will-change-transform text-[52px] sm:text-[90px] md:text-[120px] lg:text-[180px] whitespace-nowrap">
				{name.map((char, i) => (
					<motion.span
						key={i}
						className="inline-block"
						initial={
							shouldReduceMotion
								? false
								: {opacity: 0, y: 12, filter: "blur(4px)"}
						}
						animate={
							shouldReduceMotion
								? {}
								: {opacity: 1, y: 0, filter: "blur(0px)"}
						}
						transition={{
							duration: 0.35,
							delay: i * 0.04,
							ease: "easeOut",
						}}
					>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}
			</motion.h1>
		</div>
	)
}
