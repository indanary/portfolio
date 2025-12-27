"use client"

import {motion, useReducedMotion} from "framer-motion"

export default function Reveal({children}: {children: React.ReactNode}) {
	const shouldReduceMotion = useReducedMotion()

	return (
		<motion.div
			initial={{opacity: 0, y: shouldReduceMotion ? 0 : 8}}
			animate={{opacity: 1, y: 0}}
			transition={{
				duration: shouldReduceMotion ? 0 : 0.45,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	)
}
