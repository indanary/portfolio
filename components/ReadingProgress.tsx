"use client"

import {motion, useScroll, useSpring, useTransform} from "framer-motion"

export default function ReadingProgress() {
	const {scrollYProgress, scrollY} = useScroll()

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
	})

	const opacity = useTransform(scrollY, [0, 200], [0, 1])

	return (
		<motion.div
			style={{scaleX, opacity}}
			className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-[var(--foreground)] z-50"
		/>
	)
}
